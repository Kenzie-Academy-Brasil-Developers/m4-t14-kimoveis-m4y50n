import { Router } from "express";
import {
	createCategoriesController,
	getAllCategoriesController,
	getAllRealEstateByCategoryController,
} from "../controllers/categories.controllers";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { createCategoriesSchema } from "../schemas/categories.schemas";

const categoriesRoutes: Router = Router();

categoriesRoutes.get("", getAllCategoriesController);

categoriesRoutes.get("/:id/realestate", getAllRealEstateByCategoryController);

categoriesRoutes.post(
	"",
	ensureDataIsValidMiddleware(createCategoriesSchema),
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	createCategoriesController
);

export default categoriesRoutes;
