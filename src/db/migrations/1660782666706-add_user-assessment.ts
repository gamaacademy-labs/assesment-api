import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserAssessment1660782666706 implements MigrationInterface {
    name = 'addUserAssessment1660782666706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_assessment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "score" integer, "answers" jsonb DEFAULT '[]', CONSTRAINT "PK_aaa072ecce7878614ae777203a6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_assessment"`);
    }

}
