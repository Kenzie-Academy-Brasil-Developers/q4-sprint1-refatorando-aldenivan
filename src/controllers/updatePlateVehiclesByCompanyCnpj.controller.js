const updatePlateVehiclesByCompanyCnpjController = (req, res) => {
  let { vehicle, company } = req;

  let updatedVehicle = { ...vehicle, ...req.body };

  let index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  res.status(200).json({ message: "Vehicle updated", vehicle: updatedVehicle });
};

export default updatePlateVehiclesByCompanyCnpjController;
