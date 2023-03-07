import { Router } from "express";
import {
	createCategoriesController,
	getAllCategoriesController,
	getAllRealEstateByCategoryController,
} from "../controllers/categories.controllers";

const categoriesRoutes: Router = Router();

categoriesRoutes.get("", getAllCategoriesController);

categoriesRoutes.get("/:id/realestate", getAllRealEstateByCategoryController);

categoriesRoutes.post("", createCategoriesController);

export default categoriesRoutes;
