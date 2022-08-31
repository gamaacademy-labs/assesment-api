import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssessmentRepository } from "../assessment/assessment.repository";
import { QuestionsRepository } from "../assessment/questions.repository";
import { UsersRepository } from "../users/users.repository";
import { UserAssessmentsController } from "./user-assessments.controller";
import { UserAssessmentsRepository } from "./user-assessments.repository";
import { UserAssessmentsService } from "./user-assessments.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserAssessmentsRepository, UsersRepository, AssessmentRepository, QuestionsRepository])
    ],
    controllers: [UserAssessmentsController],
    providers: [UserAssessmentsService],
    exports: [UserAssessmentsService]
})
export class UserAssessmentsModule {}