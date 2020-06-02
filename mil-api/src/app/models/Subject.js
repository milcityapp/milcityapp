import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
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

}
export default Subject;
