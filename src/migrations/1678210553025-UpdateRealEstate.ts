import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRealEstate1678210553025 implements MigrationInterface {
    name = 'UpdateRealEstate1678210553025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
