import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";

class CardCategory extends Model {}

CardCategory.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
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
    modelName: "cardCategory",
  }
);

export default CardCategory;
