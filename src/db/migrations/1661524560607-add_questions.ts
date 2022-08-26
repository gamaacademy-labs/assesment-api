import {MigrationInterface, QueryRunner} from "typeorm";

export class addQuestions1661524560607 implements MigrationInterface {
    name = 'addQuestions1661524560607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "title" character varying NOT NULL, "alternatives" jsonb DEFAULT '[]', "isCorrect" jsonb DEFAULT '[]', CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
