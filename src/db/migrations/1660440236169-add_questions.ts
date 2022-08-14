import {MigrationInterface, QueryRunner} from "typeorm";

export class addQuestions1660440236169 implements MigrationInterface {
    name = 'addQuestions1660440236169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question_title" text NOT NULL, "question_alternative_id" integer NOT NULL, "question_alternative" jsonb NOT NULL, "question_alternative_correct" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_8e940ecc478000e09fa8b008ec6" PRIMARY KEY ("question_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
