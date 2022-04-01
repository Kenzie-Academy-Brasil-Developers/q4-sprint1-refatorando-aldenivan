import { companies } from '../configs';

const deleteCompanybyCnpjController = (req, res) => {
  let { cnpj } = req.params;

  companies = companies.filter((company) => company.cnpj !== cnpj);

  res.status(200).json({ messagem: 'Company deleted', companies });
};

export default deleteCompanybyCnpjController;
