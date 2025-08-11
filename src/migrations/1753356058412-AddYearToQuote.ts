import { MigrationInterface, QueryRunner } from "typeorm";

export class AddYearToQuote1753356058412 implements MigrationInterface {
    name = 'AddYearToQuote1753356058412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" text NOT NULL, "author" varchar(100) NOT NULL, "year" integer)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quote"`);
    }

}
