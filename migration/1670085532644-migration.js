const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class migration1670085532644 {
    name = 'migration1670085532644'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image" RENAME COLUMN "filename" TO "imagename"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image" RENAME COLUMN "imagename" TO "filename"`);
    }
}
