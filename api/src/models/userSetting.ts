import Sequelize, { Model, Op } from "sequelize";
import differenceInHours from "date-fns/differenceInHours";
import { te } from "date-fns/locale";
import { sequelize } from ".";
import CardCategory from "./cardCategories";
import CardLinks from "./cardLinks";
import UserCategory from "./userCategories";

class UserSetting extends Model {}

UserSetting.init(
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
    defaultSort: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    defaultLearnCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 3,
    },
    checkDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "userSetting",
  }
);

export default UserSetting;
