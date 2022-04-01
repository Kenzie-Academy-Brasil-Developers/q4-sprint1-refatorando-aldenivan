const retrieveVehiclesByCompanyCnpjController = (req, res) => {
  res.status(200).json(req.company.vehicles);
};

export default retrieveVehiclesByCompanyCnpjController;
