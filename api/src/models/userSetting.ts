import Sequelize, { Model } from "sequelize";
 import { sequelize } from ".";


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
