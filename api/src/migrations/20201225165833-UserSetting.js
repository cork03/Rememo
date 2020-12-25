module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("users", {
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
      },
      defaultLearnCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      checkDelete: {
        type: Sequelize.BOOLEAN,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("users");
  },
};
