import { deletePlateVehiclesByCompanyCnpjService } from '../services';

const deletePlateVehiclesByCompanyCnpjController = (req, res) => {
  let company = deletePlateVehiclesByCompanyCnpjService(req);

  res
    .status(200)
    .json({ messagem: 'Vehicle deleted', vehicles: company.vehicles });
};

export default deletePlateVehiclesByCompanyCnpjController;
