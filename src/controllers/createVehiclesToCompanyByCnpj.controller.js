import { createVehiclesToCompanyByCnpjService } from '../services';

const createVehiclesToCompanyByCnpjController = async (req, res) => {
  let { newVehicle, company } = await createVehiclesToCompanyByCnpjService(req);

  res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};

export default createVehiclesToCompanyByCnpjController;
