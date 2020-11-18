import Sequelize, { Model , Op} from "sequelize";
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

  static async patch(
    cardElements: any,
    linkElements: string[],
    categoryIds: number[],
    postId: number
    ) {
      await sequelize.transaction(async(t) => {
        Card.update(cardElements,{where: {id: postId}})
        const card = await Card.findByPk(postId);
        const userCategories = await UserCategory.findAll({ where: { id: categoryIds } });
        await (card as any).setUserCategories(userCategories, {
          through: {
            cardId: card!.id,
        },
      });
      })
    }

  static async get(userId: number) {
    const allCards = await Card.findAll({ where: {
      [Op.and]: [
        { leanCount: { [Op.lte]: Sequelize.col("totalCount") } },
        { userId },
      ],
    }, });
    const returnCards: any[] = [];
    const compareTimes = [0, 48, 168, 336, 672];
    const getCards = (card: any) => {
      const time = differenceInHours(new Date(), card.lastCheckedAt!);
      if (time >= compareTimes[card.leanCount] || time <= 24) {
        returnCards.push(card);
      }
    };
    allCards.forEach((card) => {
      getCards(card);
    });
    return returnCards;
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
      allowNull: false
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
