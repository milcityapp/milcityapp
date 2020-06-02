import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import City from '../app/models/City';
import Subject from '../app/models/Subject';
import Goal from '../app/models/Goal';
import Kpi from '../app/models/Kpi';

const models = [User, File, City, Subject, Goal, Kpi];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);
    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
