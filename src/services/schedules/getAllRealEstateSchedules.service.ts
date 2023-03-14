import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateSchedule } from "../../interfaces/schedules.interfaces";

const getAllRealEstateSchedulesService = async (
	realEstateId: number
): Promise<iRealEstateSchedule> => {
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

	const resAllRealStateSchedules: iRealEstateSchedule = allRealStateSchedules;

	return resAllRealStateSchedules;
};

export default getAllRealEstateSchedulesService;
