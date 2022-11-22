const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1669114620371 {
    name = 'migration1669114620371'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "message" text, "userId" integer NOT NULL, "datetime" date NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "post"`);
    }
}
