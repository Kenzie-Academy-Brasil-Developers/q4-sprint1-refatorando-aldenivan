import { companies } from '../configs';

const deleteCompanybyCnpjService = (req) => {
  let { cnpj } = req.params;

  let newCompanies = companies.filter((company) => company.cnpj !== cnpj);

  return newCompanies;
};

export default deleteCompanybyCnpjService;
