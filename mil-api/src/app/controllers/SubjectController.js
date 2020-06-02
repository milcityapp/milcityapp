import Subject from '../models/Subject';
import * as Yup from 'yup';

class SubjectController {
  async index(req, res) {
    const subjects = await Subject.findAll({
      attributes: ['id', 'name', 'description', 'status'],
    });
    return res.json(subjects);
  }

  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'});
    }


    const subjectExists = await Subject.findOne({where:{name: req.body.name}});
    if (subjectExists) {
      return res.status(400).json({error: 'Subject already exists'});
    }
      const {id, name, description, status } = await Subject.create(req.body);
      return res.json({id, name, description, status});
  }
}

export default new SubjectController();
