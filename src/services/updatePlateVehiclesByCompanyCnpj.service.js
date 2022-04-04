const updatePlateVehiclesByCompanyCnpjService = (req) => {
  let { vehicle, company } = req;

  let updatedVehicle = { ...vehicle, ...req.body };

  let index = company.vehicles.indexOf(vehicle);

  company.vehicles[index] = updatedVehicle;

  return updatedVehicle;
};

export default updatePlateVehiclesByCompanyCnpjService;
