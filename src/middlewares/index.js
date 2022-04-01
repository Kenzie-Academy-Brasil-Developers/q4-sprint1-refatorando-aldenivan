import verifyDuplicateVehiclePlate from "./verifyDuplicateVehiclePlate.middleware";
import verifyCompanyExistence from "./verifyCompanyExistence.middleware";
import verifyVehicleExistence from "./verifyVehicleExistence.middleware";
import verifyDuplicateCnpj from "./verifyDuplicateCnpj.middleware";
import authenticateCompany from "./authenticateCompany.middleware";
import validate from "./validate.middleware";

export {
  verifyDuplicateVehiclePlate,
  verifyCompanyExistence,
  verifyVehicleExistence,
  verifyDuplicateCnpj,
  authenticateCompany,
  validate,
};
