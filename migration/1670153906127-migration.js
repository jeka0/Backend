const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1670153906127 {
    name = 'migration1670153906127'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "avatar" TO "image"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "image" TO "avatar"`);
    }
}
