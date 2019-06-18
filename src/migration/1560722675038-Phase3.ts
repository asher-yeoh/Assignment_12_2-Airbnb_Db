import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase31560722675038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_review" ("id" int NOT NULL IDENTITY(1,1), "comment" nvarchar(255) NOT NULL, "created_at" datetime NOT NULL, "user_id" int, "owner_id" int, CONSTRAINT "PK_261724703ac0fe70a85eb3f3af6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating" ("id" int NOT NULL IDENTITY(1,1), "rating" int NOT NULL, "created_at" datetime NOT NULL, "user_id" int, "property_id" int, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "city" nvarchar(255) NOT NULL, "zipcode" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "country" nvarchar(255) NOT NULL, "region" nvarchar(255) NOT NULL, "property_id" int, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property_review" ("id" int NOT NULL IDENTITY(1,1), "comment" nvarchar(255) NOT NULL, "created_at" datetime NOT NULL, "user_id" int, "property_id" int, CONSTRAINT "PK_cbe03fe1839b7960915de12f44f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_review" ADD CONSTRAINT "FK_89655b925f3ddc5ab2e8363052f" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_review" ADD CONSTRAINT "FK_c8c747ee72e4b7ac8d8bb867cf0" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_17618c8d69b7e2e287bf9f8fbb3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_8051e0263a2f3de5827c8128f6d" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locality" ADD CONSTRAINT "FK_2e56945eba4409aaec45adb98e4" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property_review" ADD CONSTRAINT "FK_3aeac0ab1f44d85004179519545" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "property_review" ADD CONSTRAINT "FK_7fdfa2dca6c76a7136b53aed87b" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_review" DROP CONSTRAINT "FK_7fdfa2dca6c76a7136b53aed87b"`);
        await queryRunner.query(`ALTER TABLE "property_review" DROP CONSTRAINT "FK_3aeac0ab1f44d85004179519545"`);
        await queryRunner.query(`ALTER TABLE "locality" DROP CONSTRAINT "FK_2e56945eba4409aaec45adb98e4"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_8051e0263a2f3de5827c8128f6d"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_17618c8d69b7e2e287bf9f8fbb3"`);
        await queryRunner.query(`ALTER TABLE "user_review" DROP CONSTRAINT "FK_c8c747ee72e4b7ac8d8bb867cf0"`);
        await queryRunner.query(`ALTER TABLE "user_review" DROP CONSTRAINT "FK_89655b925f3ddc5ab2e8363052f"`);
        await queryRunner.query(`DROP TABLE "property_review"`);
        await queryRunner.query(`DROP TABLE "locality"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP TABLE "user_review"`);
    }

}
