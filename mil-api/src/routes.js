import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CityController from './app/controllers/CityController';
import SubjectController from './app/controllers/SubjectController';
import GoalController from './app/controllers/GoalController';
import KpiController from './app/controllers/KpiController';

import authMiddleware from './app/middlewares/auth';
const routes = new Router();
const upload = multer(multerConfig);
routes.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);


routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.post('/cities', CityController.store);
routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);

routes.post('/subjects', SubjectController.store);
routes.get('/subjects', SubjectController.index);

routes.post('/goals', GoalController.store);
routes.get('/goals', GoalController.index);

routes.post('/kpis', KpiController.store);
routes.get('/kpis', KpiController.index);

routes.post('/files', upload.single('file'), FileController.store);
//authenticated
routes.use(authMiddleware);
module.exports = routes;
