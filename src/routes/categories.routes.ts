import { Router } from "express";
import {
	createCategoriesController,
	getAllCategoriesController,
} from "../controllers/categories.controllers";

const categoriesRoutes: Router = Router();

categoriesRoutes.get("", getAllCategoriesController);

//falta criar a relação entre categories e realestate
categoriesRoutes.get("/:id/realestate", () => {});

categoriesRoutes.post("", createCategoriesController);

export default categoriesRoutes;
