import { Router } from 'express';
import {
  createCompanyController,
  loginCompanyController,
  retreiveCompaniesController,
  updateCompanyByCnpjController,
  deleteCompanybyCnpjController,
  createVehiclesToCompanyByCnpjController,
  retrieveVehiclesByCompanyCnpjController,
  updatePlateVehiclesByCompanyCnpjController,
  deletePlateVehiclesByCompanyCnpjController,
} from '../controllers';
import {
  verifyDuplicateVehiclePlate,
  verifyCompanyExistence,
  verifyVehicleExistence,
  verifyDuplicateCnpj,
  authenticateCompany,
  validate,
} from '../middlewares';
import { companySchema, vehicleSchema } from '../shape';

const router = Router();

router.post(
  '/companies/register',
  validate(companySchema),
  verifyDuplicateCnpj,
  createCompanyController
);

router.post('/companies/login', loginCompanyController);

router.get('/companies', retreiveCompaniesController);

router.put(
  '/companies/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  updateCompanyByCnpjController
);

router.delete(
  '/companies/:cnpj',
  authenticateCompany,
  verifyCompanyExistence,
  deleteCompanybyCnpjController
);

router.post(
  '/companies/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validate(vehicleSchema),
  createVehiclesToCompanyByCnpjController
);

router.get(
  '/companies/:cnpj/vehicles',
  authenticateCompany,
  verifyCompanyExistence,
  retrieveVehiclesByCompanyCnpjController
);

router.put(
  '/companies/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  updatePlateVehiclesByCompanyCnpjController
);

router.delete(
  '/companies/:cnpj/vehicles/:plate',
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  deletePlateVehiclesByCompanyCnpjController
);

export default router;
