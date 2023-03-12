import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iSchedulesRealEstate } from "../../interfaces/schedules.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const getAllRealEstateSchedulesService = async (
	realEstateId: number
): Promise<iSchedulesRealEstate[]> => {
	const schedulesRepo = AppDataSource.getRepository(RealEstate);

	const allRealStateSchedules: any = await schedulesRepo.findOne({
		relations: {
			schedule: {
				user: true,
			},
			address: true,
			category: true,
		},
		where: {
			id: realEstateId,
		},
	});

	if (!allRealStateSchedules) {
		throw new AppError("Real Estate not found", 404);
	}

	allRealStateSchedules.schedule[0].user = usersWithoutPassSchema.parse(
		allRealStateSchedules.schedule[0].user
	);

	const resAllRealStateSchedules: iSchedulesRealEstate[] =
		allRealStateSchedules;

	return resAllRealStateSchedules;
};

export default getAllRealEstateSchedulesService;