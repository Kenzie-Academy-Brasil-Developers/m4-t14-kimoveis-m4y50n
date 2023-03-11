import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { iRealEstateRepo } from "../../interfaces/realEstate.interfaces";
import { iSchedulesRepo } from "../../interfaces/schedules.interfaces";
import { iUsersRepo } from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const createSchedulesService = async (payload: any): Promise<any> => {
	const schedulesRepo: iSchedulesRepo = AppDataSource.getRepository(Schedule),
		realEstateRepo: iRealEstateRepo = AppDataSource.getRepository(RealEstate),
		userRepo: iUsersRepo = AppDataSource.getRepository(User);

	const realEstate = await realEstateRepo.findOneBy({
		id: payload.realEstateId,
	});

	const user = await userRepo.findOneBy({ id: payload.userId });

	const schedule = schedulesRepo.create({
		...payload,
		realEstate,
		user: usersWithoutPassSchema.parse(user),
	});

	await schedulesRepo.save(schedule);

	return schedule;
};

export default createSchedulesService;
