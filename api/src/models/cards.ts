import Sequelize, { DATE, Model , Op} from "sequelize";
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
      cardElements.leanCount = 1
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
    await sequelize.transaction(async (t) => {
      const allCards = await Card.findAll({ where: {
        [Op.and]: [
          { leanCount: { [Op.lte]: Sequelize.col("totalCount") } },
          { userId },
        ],
      }, });
      const returnCards: any[] = [];
      const compareTimes = [0, 48, 168, 336, 672];
      const getCards = async(card: any) => {
        const time = differenceInHours(new Date(), card.lastCheckedAt!);
        if (time >= compareTimes[card.leanCount] ) {
          await Card.update({checked: 0},{where: {id: card.id}})
          returnCards.push(card);
        }
        if( time <= 24 ) {
          returnCards.push(card);
        }
      };
      allCards.forEach(async (card) => {
        await getCards(card);
      });
      return returnCards;
    })
  }

  static async check(cardId: number)  {
    await sequelize.transaction(async(t) => {
      const card = await Card.findByPk(cardId)
      let leanCount = card?.leanCount
      leanCount!++
      const now = new Date()
      await Card.update({lastCheckedAt: now, checked: 1, leanCount},{where: {id: cardId}})
    })
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
