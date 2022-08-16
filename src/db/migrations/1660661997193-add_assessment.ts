import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessment1660661997193 implements MigrationInterface {
    name = 'addAssessment1660661997193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assessment_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "title" character varying(100) NOT NULL, "finished_at" TIMESTAMP WITH TIME ZONE, "questions" jsonb DEFAULT '[]', CONSTRAINT "PK_1d3a65b499b23ca12983aa60c4f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assessment_entity"`);
    }

}
