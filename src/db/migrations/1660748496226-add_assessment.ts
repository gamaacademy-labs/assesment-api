import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessment1660748496226 implements MigrationInterface {
    name = 'addAssessment1660748496226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assessment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "title" character varying(100) NOT NULL, "finished_at" TIMESTAMP WITH TIME ZONE NOT NULL, "questions" jsonb DEFAULT '[]', CONSTRAINT "PK_c511a7dc128256876b6b1719401" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "assessment"`);
    }

}
