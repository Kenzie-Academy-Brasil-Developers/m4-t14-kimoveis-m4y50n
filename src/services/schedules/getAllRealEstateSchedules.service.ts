import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const getAllRealEstateSchedulesService = async (realEstateId: number) => {
	const schedulesRepo = AppDataSource.getRepository(RealEstate);

	const allRealStateSchedules: any = await schedulesRepo.findOne({
		relations: {
			schedules: {
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
		throw new AppError("RealEstate not found", 404);
	}

	// allRealStateSchedules.schedule[0].user = usersWithoutPassSchema.parse(
	// 	allRealStateSchedules.schedule[0].user
	// );

	const resAllRealStateSchedules = allRealStateSchedules;

	return resAllRealStateSchedules;
};

export default getAllRealEstateSchedulesService;
