import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

const generateCompany = () => {
  const name = 'CompanyTest';
  const cnpj = '00000000000000';
  const password = bcrypt.hashSync('companytest', 10);
  const cep = '00000000';
  const address = 'Street of Company';
  const number = '504';
  const state = 'TX';
  const city = 'Austin';

  return {
    id: uuidv4(),
    name: name,
    password: password,
    cnpj: cnpj,
    cep: cep,
    address: address,
    number: number,
    state: state,
    city: city,
    vehicles: [],
  };
};

export default generateCompany;
