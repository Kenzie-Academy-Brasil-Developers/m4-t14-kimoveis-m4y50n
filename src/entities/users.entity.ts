import {
	Column,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import Schedule from "./schedulesUsersProfile.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 45, unique: true })
	email: string;

	@Column({ default: false })
	admin: boolean;

	@Column({ length: 120 })
	password: string;

	@Column()
	createdAt: Date;

	@Column()
	updatedAt: Date;

	@Column({ nullable: true })
	deleteAt?: Date;

	@OneToMany(() => Schedule, (schedule) => schedule.user)
	schedule: Schedule[];
}

export default User;
