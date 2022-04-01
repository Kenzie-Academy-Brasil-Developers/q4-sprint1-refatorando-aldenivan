import { companies } from '../configs';

const updateCompanyByCnpjController = (req, res) => {
  let { company } = req;
  let updatedCompany = { ...company, ...req.body };

  let index = companies.indexOf(company);

  companies[index] = updatedCompany;

  res.status(200).json({ messagem: 'Company updated', companies });
};

export default updateCompanyByCnpjController;
