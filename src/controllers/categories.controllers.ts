import { Request, Response } from "express";
import { iCategory } from "../interfaces/categories.interfaces";
import createCategoriesService from "../services/categories/createCategories.service";
import getAllCategoriesService from "../services/categories/getAllCategories.service";

const getAllCategoriesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const allCategories: iCategory[] = await getAllCategoriesService();

	return res.status(200).json(allCategories);
};

const createCategoriesController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const payload: any = req.body;

	const category: iCategory = await createCategoriesService(payload);

	return res.status(201).json(category);
};

export { createCategoriesController, getAllCategoriesController };
