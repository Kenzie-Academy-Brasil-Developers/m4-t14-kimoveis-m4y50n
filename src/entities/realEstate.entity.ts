import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	OneToOne,
	JoinColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
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

	@Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
	value: number | string;

	@Column()
	size: number;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@OneToMany(() => Schedule, (schedule) => schedule.realEstate, {
		onDelete: "RESTRICT",
	})
	schedule: Schedule[];

	@OneToOne(() => Address, { nullable: false })
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Category, (category) => category.realEstate)
	category: Category;
}

export default RealEstate;
