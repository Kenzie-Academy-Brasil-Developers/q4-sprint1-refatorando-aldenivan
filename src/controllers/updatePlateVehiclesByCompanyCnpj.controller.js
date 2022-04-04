import { updatePlateVehiclesByCompanyCnpjService } from '../services';

const updatePlateVehiclesByCompanyCnpjController = (req, res) => {
  let updatedVehicle = updatePlateVehiclesByCompanyCnpjService(req);

  res.status(200).json({ message: 'Vehicle updated', vehicle: updatedVehicle });
};

export default updatePlateVehiclesByCompanyCnpjController;
