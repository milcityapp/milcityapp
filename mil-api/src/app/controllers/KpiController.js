import Kpi from '../models/Kpi';
import Goal from '../models/Goal';
import City from '../models/City';
import User from '../models/User';
import * as Yup from 'yup';

class KpiController {
  async index(req, res) {
    const kpis = await Kpi.findAll({
      attributes: ['id', 'name', 'address', 'advocacy', 'button_text_1', 'button_link_1', 'button_text_2', 'button_link_2', 'button_text_3', 'button_link_3', 'status', 'goal_id', 'city_id', 'user_id'],
      include: [{
        model:Goal,
        as: 'goal',
        attributes: ['name', 'description'],
      },
      {
        model:City,
        as: 'city',
        attributes: ['name', 'description'],
      },
      {
        model:User,
        as: 'user',
        attributes: ['name', 'email'],
      },
    ],
    });
    return res.json(kpis);
  }

  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'validation fails'});
    }


    const KpiExists = await Kpi.findOne({where:{name: req.body.name}});
    if (KpiExists) {
      return res.status(400).json({error: 'KPI already exists'});
    }
      //retornando apenas algumas informações se quisesse retornar tudo é só dar um return(user)
      const kpi = await Kpi.create(req.body);
      return res.json(kpi);
  }
}

export default new KpiController();
