import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";
import Card from "./cards";

class User extends Model {
  public authorizeToken?: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    loginId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authorizeToken: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

User.hasMany(Card);
Card.belongsTo(User);

export default User;
