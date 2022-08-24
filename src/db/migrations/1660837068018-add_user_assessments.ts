import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserAssessments1660837068018 implements MigrationInterface {
    name = 'addUserAssessments1660837068018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_assessments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "score" integer, "answers" jsonb DEFAULT '[]', "userId" uuid, "assessmentId" uuid, CONSTRAINT "PK_f22c46b8fc974d2c790235d9a97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_assessments" ADD CONSTRAINT "FK_d9b27ad8c50d2707081c174a7c1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_assessments" ADD CONSTRAINT "FK_def245b8fc6ba5b6dba63f9a5d0" FOREIGN KEY ("assessmentId") REFERENCES "assessments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_assessments" DROP CONSTRAINT "FK_def245b8fc6ba5b6dba63f9a5d0"`);
        await queryRunner.query(`ALTER TABLE "user_assessments" DROP CONSTRAINT "FK_d9b27ad8c50d2707081c174a7c1"`);
        await queryRunner.query(`DROP TABLE "user_assessments"`);
    }

}
