import deleteCompanybyCnpjService from '../services/deleteCompanyByCnpj.service';

const deleteCompanybyCnpjController = (req, res) => {
  let companies = deleteCompanybyCnpjService(req);

  res.status(200).json({ messagem: 'Company deleted', companies });
};

export default deleteCompanybyCnpjController;
