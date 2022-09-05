import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessmentStatusEnum1662129354025 implements MigrationInterface {
    name = 'addAssessmentStatusEnum1662129354025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_assessments" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."user_assessments_status_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`ALTER TABLE "user_assessments" ADD "status" "public"."user_assessments_status_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_assessments" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."user_assessments_status_enum"`);
        await queryRunner.query(`ALTER TABLE "user_assessments" ADD "status" boolean NOT NULL`);
    }

}
