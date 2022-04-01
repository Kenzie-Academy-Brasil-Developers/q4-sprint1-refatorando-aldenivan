const deletePlateVehiclesByCompanyCnpjController = async (req, res) => {
  let { plate } = req.params;

  let { company } = req;

  company.vehicles = company.vehicles.filter(
    (vehicle) => vehicle.plate !== plate
  );

  res
    .status(200)
    .json({ messagem: "Vehicle deleted", vehicles: company.vehicles });
};

export default deletePlateVehiclesByCompanyCnpjController;
