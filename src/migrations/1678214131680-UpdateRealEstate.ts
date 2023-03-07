import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRealEstate1678214131680 implements MigrationInterface {
    name = 'UpdateRealEstate1678214131680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "REL_44ae17efa35575b6a6f83b35ee"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressqIdId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_a2ff317f6b2b727cebefef4b85a" UNIQUE ("addressqIdId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoryIdId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_a2ff317f6b2b727cebefef4b85a" FOREIGN KEY ("addressqIdId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_37a2aa37f1c62797ed4583c87d8" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_37a2aa37f1c62797ed4583c87d8"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_a2ff317f6b2b727cebefef4b85a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoryIdId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_a2ff317f6b2b727cebefef4b85a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressqIdId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "REL_44ae17efa35575b6a6f83b35ee" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
