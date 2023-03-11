import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRealEstate1678555893242 implements MigrationInterface {
    name = 'UpdateRealEstate1678555893242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
