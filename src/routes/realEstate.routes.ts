import { Router } from "express";
import {
	createRealEstateController,
	getAllRealEstateController,
} from "../controllers/realEstate.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.get("", getAllRealEstateController);
realEstateRoutes.post(
	"",
	ensureDataIsValidMiddleware(realEstateCreateSchema),
	createRealEstateController
);

export default realEstateRoutes;
