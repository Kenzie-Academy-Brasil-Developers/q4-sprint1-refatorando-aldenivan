const deletePlateVehiclesByCompanyCnpjService = (req) => {
  let { plate } = req.params;

  let { company } = req;

  company.vehicles = company.vehicles.filter(
    (vehicle) => vehicle.plate !== plate
  );

  return company;
};

export default deletePlateVehiclesByCompanyCnpjService;
