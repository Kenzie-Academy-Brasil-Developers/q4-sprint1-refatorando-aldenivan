import { companies } from '../configs';

const updateCompanyByCnpjService = (req) => {
  let { company } = req;
  let updatedCompany = { ...company, ...req.body };

  let index = companies.indexOf(company);

  companies[index] = updatedCompany;

  return companies;
};

export default updateCompanyByCnpjService;
