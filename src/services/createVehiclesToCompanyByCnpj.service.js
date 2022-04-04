import { v4 as uuidv4 } from 'uuid';

const createVehiclesToCompanyByCnpjService = async (req) => {
  let newVehicle = {
    ...req.body,
    id: uuidv4(),
    acquisition_date: new Date(),
  };

  let { company } = req;

  company.vehicles.push(newVehicle);

  return { newVehicle, company };
};

export default createVehiclesToCompanyByCnpjService;
