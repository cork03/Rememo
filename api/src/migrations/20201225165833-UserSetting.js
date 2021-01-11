module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("userSettings", {
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
    return await queryInterface.dropTable("userSettings");
  },
};
