import { companies } from '../configs';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

const createCompanyService = async (req) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  let company = {
    ...req.body,
    id: uuidv4(),
    vehicles: [],
    password: hashedPassword,
  };

  companies.push(company);

  return company;
};

export default createCompanyService;
