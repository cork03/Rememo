import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";
import differenceInHours from "date-fns/differenceInHours";

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
      const card = await Card.create(cardElements, { transaction: t });
      if (linkElements) {
        for (let value of linkElements) {
          const link = await CardLinks.create(
            {
              string: value,
              cardId: card.id,
            },
            { transaction: t }
          );
        }
      }
      const userCategories = await UserCategory.findAll({
        where: { id: categoryIds },
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

  static async get(userId: number) {
    const allCards = await Card.findAll({ where: { userId } });
    const returnCrads: any[] = [];
    const compareTimes = [0, 48, 168, 336, 672];
    const getCards = (card: any) => {
      if (card.leanCount > card.totalCount) {
        return;
      }
      const time = differenceInHours(new Date(), card.lastCheckedAt!);
      if (time >= compareTimes[card.leanCount]) {
        returnCrads.push(card);
      }
    };
    allCards.forEach((card) => {
      getCards(card);
    });
    return returnCrads;
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
