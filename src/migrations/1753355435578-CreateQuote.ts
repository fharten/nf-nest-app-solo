import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuote1753355435578 implements MigrationInterface {
  name = "CreateQuote1753355435578";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" text NOT NULL, "author" varchar(100) NOT NULL)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "quote"`);
  }
}
