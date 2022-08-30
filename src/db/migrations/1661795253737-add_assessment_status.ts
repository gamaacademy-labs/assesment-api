import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessmentStatus1661795253737 implements MigrationInterface {
    name = 'addAssessmentStatus1661795253737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_assessments" ADD "status" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_assessments" DROP COLUMN "status"`);
    }

}
