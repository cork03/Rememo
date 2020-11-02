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
    cardId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userCategoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cardCategory",
  }
);

export default CardCategory;
