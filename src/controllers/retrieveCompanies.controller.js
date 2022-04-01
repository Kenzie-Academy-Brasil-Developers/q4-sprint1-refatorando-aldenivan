import { companies } from '../configs';

const retreiveCompaniesController = (req, res) => {
  res.status(200).json(companies);
};

export default retreiveCompaniesController;
