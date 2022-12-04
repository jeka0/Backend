const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1670152484653 {
    name = 'migration1670152484653'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "avatar" text`);
        await queryRunner.query(`ALTER TABLE "post" ADD "image" text`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatar"`);
    }
}
