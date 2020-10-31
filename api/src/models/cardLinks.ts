import Sequelize, { Model } from "sequelize";
import { sequelize } from ".";

class CardLinks extends Model {
  public id?: number;
}

CardLinks.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    string: {
      type: Sequelize.TEXT,
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
    modelName: "cardLinks",
  }
);

export default CardLinks;
