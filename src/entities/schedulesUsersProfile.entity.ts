import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import RealEstate from "./realEstate.entity";
import User from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	date: Date;

	@Column({ type: "time" })
	hour: Date;

	@ManyToOne(() => User, (user) => user.schedule, {
		onDelete: "CASCADE",
		nullable: false,
	})
	user: User;

	@ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule, {
		onDelete: "RESTRICT",
		nullable: false,
	})
	realEstate: RealEstate;
}

export default Schedule;
