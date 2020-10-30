import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import CardCategory from "./cardCategories";

class UserCategory extends Model {}

UserCategory.init(
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
    name: {
      type: Sequelize.STRING,
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
    modelName: "userCategory",
  }
);

UserCategory.hasMany(CardCategory);
CardCategory.belongsTo(UserCategory);

export default UserCategory;
