import { Router } from "express";
import {
	createRealEstateController,
	getAllRealEstateController,
} from "../controllers/realEstate.controllers";

const realEstateRoutes: Router = Router();

realEstateRoutes.get("", getAllRealEstateController);
realEstateRoutes.post("", createRealEstateController);

export default realEstateRoutes;
