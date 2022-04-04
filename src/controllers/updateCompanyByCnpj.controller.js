import { updateCompanyByCnpjService } from '../services';

const updateCompanyByCnpjController = (req, res) => {
  let companies = updateCompanyByCnpjService(req);

  res.status(200).json({ messagem: 'Company updated', companies });
};

export default updateCompanyByCnpjController;
