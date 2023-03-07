import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	OneToOne,
	JoinColumn,
	ManyToOne,
} from "typeorm";
import Address from "./addresses.entity";
import Category from "./categories.entity";
import Schedule from "./schedulesUsersProfile.entity";

@Entity("real_estate")
class RealEstate {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ default: false })
	sold: boolean;

	@Column({ type: "decimal", precision: 12, scale: 2 })
	value: number;

	@Column()
	size: number;

	@Column()
	createdAt: Date;

	@Column()
	updatedAt: Date;

	@OneToMany(() => Schedule, (schedule) => schedule.realEstate, {
		onDelete: "RESTRICT",
	})
	schedule: Schedule[];

	@OneToOne(() => Address, { nullable: false })
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Category, (category) => category.realEstate)
	category: Category[];
}

export default RealEstate;
