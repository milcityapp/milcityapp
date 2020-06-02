import Sequelize, { Model } from 'sequelize';

class Goal extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      status: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'subject'});
  }
}
export default Goal;
