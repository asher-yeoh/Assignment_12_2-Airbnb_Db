import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase21560605619895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property_tag" ("id" int NOT NULL IDENTITY(1,1), "tag_id" int, "property_id" int, CONSTRAINT "PK_577b4a97063c1dfd3da164fa7a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" int NOT NULL, "booking_id" int, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property_tag" ADD CONSTRAINT "FK_ee90c13a747758229ea07dbdc62" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property_tag" ADD CONSTRAINT "FK_b284e4492a952d01442e9d7ad66" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_cee78453638dfaf440f1aa63c26" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_cee78453638dfaf440f1aa63c26"`);
        await queryRunner.query(`ALTER TABLE "property_tag" DROP CONSTRAINT "FK_b284e4492a952d01442e9d7ad66"`);
        await queryRunner.query(`ALTER TABLE "property_tag" DROP CONSTRAINT "FK_ee90c13a747758229ea07dbdc62"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "property_tag"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
