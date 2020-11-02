import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";

class Card extends Model {
  public id?: number;

  static async add(
    cardElements: any,
    linkElements: string[],
    categoryIds: number[]
  ) {
    await sequelize.transaction(async (t) => {
      cardElements.lastCheckedAt = new Date();
      const card = await Card.create(cardElements, { transaction: t });
      console.log(card);
      if (linkElements) {
        for (let value of linkElements) {
          const link = await CardLinks.create(
            {
              string: value,
              cardId: card.id,
            },
            { transaction: t }
          );
          console.log(link);
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
