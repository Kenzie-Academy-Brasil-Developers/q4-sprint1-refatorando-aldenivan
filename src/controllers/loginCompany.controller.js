import { loginCompanyService } from '../services';

const loginCompanyController = async (req, res) => {
  const { token, company } = await loginCompanyService(req);

  res.status(200).json({ token, company });
};

export default loginCompanyController;
