import { hashSync } from "bcryptjs";
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
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

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@DeleteDateColumn({ type: "date" })
	deletedAt: string;

	@OneToMany(() => Schedule, (schedule) => schedule.user)
	schedules: Schedule[];

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		this.password = hashSync(this.password, 7);
	}
}

export default User;
