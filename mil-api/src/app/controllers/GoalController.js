import Goal from '../models/Goal';
import Subject from '../models/Subject';
import * as Yup from 'yup';

class GoalController {
  async index(req, res) {
    const goals = await Goal.findAll({
      attributes: ['id', 'name', 'description', 'status', 'subject_id'],
      include: [{
        model:Subject,
        as: 'subject',
        attributes: ['name', 'description'],
      },
    ],
    });
    return res.json(goals);
  }

  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'});
    }


    const GoalExists = await Goal.findOne({where:{name: req.body.name}});
    if (GoalExists) {
      return res.status(400).json({error: 'Goal already exists'});
    }
      //retornando apenas algumas informações se quisesse retornar tudo é só dar um return(user)
      const {id, name, description } = await Goal.create(req.body);
      return res.json({id, name, description});
  }
}

export default new GoalController();
