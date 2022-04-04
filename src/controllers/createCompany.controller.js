import { createCompanyService } from '../services';

const createCompanyController = async (req, res) => {
  const company = await createCompanyService(req);

  res.status(201).json({ message: 'Company successfully created', company });
};

export default createCompanyController;
