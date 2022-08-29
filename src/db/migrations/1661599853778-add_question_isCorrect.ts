import {MigrationInterface, QueryRunner} from "typeorm";

export class addQuestionIsCorrect1661599853778 implements MigrationInterface {
    name = 'addQuestionIsCorrect1661599853778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "isCorrect" jsonb DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "isCorrect"`);
    }

}
