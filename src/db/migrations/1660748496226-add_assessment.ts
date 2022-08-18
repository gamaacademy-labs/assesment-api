import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessment1660748496226 implements MigrationInterface {
    name = 'addAssessment1660748496226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assessments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "title" character varying(100) NOT NULL, "finished_at" TIMESTAMP WITH TIME ZONE NOT NULL, "questions" jsonb DEFAULT '[]', CONSTRAINT "PK_a3442bd80a00e9111cefca57f6c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assessments"`);
    }

}
