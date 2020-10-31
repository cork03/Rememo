import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";

class Card extends Model {
  public id?: number;

  static async add(cardElements: any, linkElement: any, categoryIds: number[]) {
    await sequelize.transaction(async (t) => {
      if (linkElement) {
        const link = await CardLinks.create(
          { string: linkElement },
          { transaction: t }
        );
        const linkId = link.id;
        cardElements.linkId = linkId;
      }
      cardElements.lastCheckedAt = new Date();
      const card = await Card.create(cardElements, { transaction: t });
      const userCategories = await UserCategory.findAll({
        where: { id: categoryIds },
      });
      console.log(userCategories);
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
    linkId: {
      type: Sequelize.INTEGER,
      allowNull: true,
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
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
Card.hasMany(CardCategory);
CardCategory.belongsTo(Card);
Card.belongsToMany(UserCategory, {
  through: "cardCategory",
});
UserCategory.belongsToMany(Card, {
  through: "cardCategory",
});

export default Card;
