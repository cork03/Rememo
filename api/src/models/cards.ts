import Sequelize, { Model, Op } from "sequelize";
import differenceInHours from "date-fns/differenceInHours";
import { te } from "date-fns/locale";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";

class Card extends Model {
  public id?: number;

  public lastCheckedAt?: Date;

  public totalCount?: number;

  public leanCount?: number;

  static async add(
    cardElements: any,
    linkElements: string[],
    categoryIds: number[]
  ) {
    await sequelize.transaction(async (t) => {
      cardElements.lastCheckedAt = new Date();
      cardElements.leanCount = 1;
      const card = await Card.create(cardElements, { transaction: t });
      if (linkElements) {
        await Promise.all(
          linkElements.map(async (link: string) => {
            await CardLinks.create(
              {
                string: link,
                cardId: card.id,
              },
              { transaction: t }
            );
          })
        );
      }
      const userCategories = await UserCategory.findAll({
        where: { id: categoryIds },
        transaction: t,
      });
      if (card) {
        await (card as any).setUserCategories(userCategories, {
          through: {
            cardId: card.id,
          },
          transaction: t,
        });
      }
    });
  }

  static async patch(
    cardElements: any,
    linkElements: any,
    newLinkElements: string[],
    categoryIds: number[],
    cardId: number
  ) {
    await sequelize.transaction(async (t) => {
      console.log(categoryIds);
      await Promise.all(
        linkElements.map(async (link: any) => {
          await CardLinks.update(
            { string: link.string },
            { where: { id: link.id }, transaction: t }
          );
        })
      );
      if (newLinkElements) {
        await Promise.all(
          newLinkElements.map(async (link: string) => {
            const test = await CardLinks.create(
              { string: link, cardId },
              { transaction: t }
            );
          })
        );
      }
      await Card.update(cardElements, { where: { id: cardId } });
      const card = await Card.findByPk(cardId, { transaction: t });
      const userCategories = await UserCategory.findAll({
        where: { id: categoryIds },
        transaction: t,
      });

      await (card as any).setUserCategories(userCategories, {
        through: {
          cardId: card!.id,
        },
        transaction: t,
      });
    });
  }

  static async get(userId: number) {
    const cards = await sequelize.transaction(async (transaction) => {
      const allCards = await Card.findAll({
        where: {
          [Op.and]: [
            { leanCount: { [Op.lte]: Sequelize.col("totalCount") } },
            { userId },
          ],
        },
        include: [
          { model: UserCategory, as: "userCategories" },
          { model: CardLinks },
        ],
        transaction,
      });
      const returnCards: any[] = [];
      const compareTimes = [0, 48, 168, 336, 672];
      const getCards = async (card: any) => {
        const time = differenceInHours(new Date(), card.lastCheckedAt!);
        if (time >= compareTimes[card.leanCount]) {
          await Card.update(
            { checked: 0 },
            { where: { id: card.id }, transaction }
          );
          const fixedCard = await Card.findByPk(card.id, {
            transaction,
            include: [
              { model: UserCategory, as: "userCategories" },
              { model: CardLinks },
            ],
          });
          returnCards.push(fixedCard);
        }
        if (time <= 24) {
          returnCards.push(card);
        }
      };
      await Promise.all(allCards.map(async (card) => await getCards(card)));
      return returnCards;
    });
    return cards;
  }

  static async check(cardId: number) {
    await sequelize.transaction(async (t) => {
      const card = await Card.findByPk(cardId);
      let leanCount = card?.leanCount;
      leanCount!++;
      const now = new Date();
      await Card.update(
        { lastCheckedAt: now, checked: 1, leanCount },
        { where: { id: cardId } }
      );
    });
  }
}

Card.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    leanCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    checked: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    lastCheckedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "card",
  }
);

Card.hasMany(CardLinks);
CardLinks.belongsTo(Card);
export const CardCategories = Card.hasMany(CardCategory);
export const cardCategory = CardCategory.belongsTo(Card);
export const UserCategories = Card.belongsToMany(UserCategory, {
  as: "userCategories",
  through: "cardCategory",
});
export const Cards = UserCategory.belongsToMany(Card, {
  as: "cards",
  through: "cardCategory",
});

export default Card;
