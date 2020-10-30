import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";

class Card extends Model {}

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
export const CardCategories = Card.hasMany(CardCategory);
export const cardCategory = CardCategory.belongsTo(Card);
export const Cards = Card.belongsToMany(UserCategory, {
  as: "cards",
  through: "CardCategories",
});
export const UserCategories = UserCategory.belongsToMany(Card, {
  as: "userCategories",
  through: "CardCategories",
});

export default Card;
