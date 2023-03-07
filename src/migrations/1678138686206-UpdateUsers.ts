import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsers1678138686206 implements MigrationInterface {
    name = 'UpdateUsers1678138686206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP NOT NULL`);
    }

}
