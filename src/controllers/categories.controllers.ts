import { Request, Response } from "express";
import { iCategory } from "../interfaces/categories.interfaces";
import { iRealEstate } from "../interfaces/realEstate.interfaces";
import createCategoriesService from "../services/categories/createCategories.service";
import getAllCategoriesService from "../services/categories/getAllCategories.service";
import getAllRealEstateByCategoryService from "../services/categories/getAllRealEstateByCategory.service";

const getAllCategoriesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allCategories: iCategory[] = await getAllCategoriesService();

	return res.status(200).json(allCategories);
};

const getAllRealEstateByCategoryController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const categoryId = parseInt(req.params.id);

	const allRealEstateByCategory: iRealEstate[] =
		await getAllRealEstateByCategoryService(categoryId);

	return res.status(200).json(allRealEstateByCategory);
};

const createCategoriesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const payload: any = req.body;

	const category: iCategory = await createCategoriesService(payload);

	return res.status(201).json(category);
};

export {
	createCategoriesController,
	getAllCategoriesController,
	getAllRealEstateByCategoryController,
};
