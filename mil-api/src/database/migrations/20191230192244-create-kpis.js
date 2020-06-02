'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('kpis', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        advocacy: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        goal_id: {
          type: Sequelize.INTEGER,
          references: {model: 'goals', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        city_id: {
          type: Sequelize.INTEGER,
          references: {model: 'cities', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        button_link_1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_text_1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_link_2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_text_2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_link_3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        button_text_3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('kpis');
  }
};
