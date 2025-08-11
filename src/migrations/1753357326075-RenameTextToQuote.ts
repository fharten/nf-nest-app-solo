import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTextToQuote1753357326075 implements MigrationInterface {
    name = 'RenameTextToQuote1753357326075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" text NOT NULL, "author" varchar(100) NOT NULL, "year" integer)`);
        await queryRunner.query(`INSERT INTO "temporary_quote"("id", "quote", "author", "year") SELECT "id", "text", "author", "year" FROM "quote"`);
        await queryRunner.query(`DROP TABLE "quote"`);
        await queryRunner.query(`ALTER TABLE "temporary_quote" RENAME TO "quote"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quote" RENAME TO "temporary_quote"`);
        await queryRunner.query(`CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" text NOT NULL, "author" varchar(100) NOT NULL, "year" integer)`);
        await queryRunner.query(`INSERT INTO "quote"("id", "text", "author", "year") SELECT "id", "quote", "author", "year" FROM "temporary_quote"`);
        await queryRunner.query(`DROP TABLE "temporary_quote"`);
    }

}
