import { Router } from "express";
import {
	createRealEstateController,
	getAllRealEstateController,
} from "../controllers/realEstate.controllers";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.get("", getAllRealEstateController);
realEstateRoutes.post(
	"",
	ensureDataIsValidMiddleware(realEstateCreateSchema),
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	createRealEstateController
);

export default realEstateRoutes;
