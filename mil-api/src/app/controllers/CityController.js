import City from '../models/City';
import File from '../models/File';
import * as Yup from 'yup';

class CityController {
  async index(req, res) {
    const cities = await City.findAll({
      attributes: ['id', 'name', 'description', 'status', 'level', 'picture_id'],
      include: [{
        model:File,
        as: 'picture',
        attributes: ['name', 'path', 'url'],
      },
    ],
    });
    return res.json(cities);
  }

  async show(req, res) {
    const city = await City.findByPk(req.params.id);
    return res.json(city);
  }

  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'});
    }


    const cityExists = await City.findOne({where:{name: req.body.name}});
    if (cityExists) {
      return res.status(400).json({error: 'City already exists'});
    }
      //retornando apenas algumas informações se quisesse retornar tudo é só dar um return(user)
      const {id, name, description } = await City.create(req.body);
      return res.json({id, name, description});
  }
}

export default new CityController();
