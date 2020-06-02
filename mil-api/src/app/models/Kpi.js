import Sequelize, { Model } from 'sequelize';

class Kpi extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      advocacy: Sequelize.STRING,
      button_text_1: Sequelize.STRING,
      button_link_1: Sequelize.STRING,
      button_text_2: Sequelize.STRING,
      button_link_2: Sequelize.STRING,
      button_text_3: Sequelize.STRING,
      button_link_3: Sequelize.STRING,
      status: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Goal, { foreignKey: 'goal_id', as: 'goal'});
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city'});
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
  }
}
export default Kpi;
