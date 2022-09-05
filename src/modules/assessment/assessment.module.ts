import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAssessmentsRepository } from '../user-assessments/user-assessments.repository';
import { UsersRepository } from '../users/users.repository';
import { AssessmentController } from './assessment.controller';
import { AssessmentRepository } from './assessment.repository';
import { AssessmentService } from './assessment.service';
import { QuestionsRepository } from "./questions.repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([AssessmentRepository, QuestionsRepository, UserAssessmentsRepository, UsersRepository])
    ],
  controllers: [AssessmentController],
  providers: [AssessmentService],
  exports: [AssessmentService],
})
export class AssessmentModule {}
