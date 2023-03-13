import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRepo } from "../../interfaces/realEstate.interfaces";
import { iSchedulesRepo } from "../../interfaces/schedules.interfaces";
import { iUsersRepo } from "../../interfaces/users.interfaces";
import { usersWithoutPassSchema } from "../../schemas/users.schemas";

const createSchedulesService = async (payload: any): Promise<String> => {
	const schedulesRepo: iSchedulesRepo = AppDataSource.getRepository(Schedule),
		realEstateRepo: iRealEstateRepo = AppDataSource.getRepository(RealEstate),
		userRepo: iUsersRepo = AppDataSource.getRepository(User);

	const realEstate = await realEstateRepo.findOneBy({
		id: payload.realEstateId,
	});

	if (!realEstate) {
		throw new AppError("RealEstate not found", 404);
	}

	const user = await userRepo.findOneBy({ id: payload.userId });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	const scheduleExists = await schedulesRepo
		.createQueryBuilder("")
		.where('"realEstateId" = :realEstateId', {
			realEstateId: payload.realEstateId,
		})
		.andWhere("date = :date", { date: payload.date })
		.andWhere("hour = :hour", { hour: payload.hour })
		.getOne();

	//Schedules validation
	if (scheduleExists) {
		throw new AppError(
			"Schedule to this real estate at this date and time already exists",
			409
		);
	}

	if (payload.hour > "18:00" || payload.hour < "08:00") {
		throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
	}

	const newDate = new Date(payload.date),
		wkendDay = newDate.getDay();

	if (wkendDay === 0 || wkendDay === 6) {
		throw new AppError("Invalid date, work days are monday to friday", 400);
	}

	const userAlreadySchedule = await schedulesRepo.findOneBy({
		date: payload.date,
		hour: payload.hour,
	});

	if (userAlreadySchedule) {
		throw new AppError(
			"User schedule to this real estate at this date and time already exists"
		);
	}
	//Schedules validation

	const schedule = schedulesRepo.create({
		...payload,
		realEstate: realEstate,
		user: usersWithoutPassSchema.parse(user),
	});

	await schedulesRepo.save(schedule);

	return "Schedule created";
};

export default createSchedulesService;
