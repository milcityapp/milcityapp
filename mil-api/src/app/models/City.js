import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      level: Sequelize.STRING,
      status: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'picture_id', as: 'picture'});
  }
}
export default City;
