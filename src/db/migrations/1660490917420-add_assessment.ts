import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessment1660490917420 implements MigrationInterface {
    name = 'addAssessment1660490917420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assessment_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "assessment_name" character varying(100) NOT NULL, "assessment_date" date NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), CONSTRAINT "PK_1d3a65b499b23ca12983aa60c4f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assessment_entity"`);
    }

}
