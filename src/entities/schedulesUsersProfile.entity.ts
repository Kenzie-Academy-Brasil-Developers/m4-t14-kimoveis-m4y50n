import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import RealEstate from "./realEstate.entity";
import User from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ type: "date" })
	date: string;

	@Column({ type: "time" })
	hour: string;

	@ManyToOne(() => User, (user) => user.schedules, {
		onDelete: "CASCADE",
		nullable: false,
	})
	user: User;

	@ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules, {
		onDelete: "RESTRICT",
		nullable: false,
	})
	realEstate: RealEstate;
}

export default Schedule;
