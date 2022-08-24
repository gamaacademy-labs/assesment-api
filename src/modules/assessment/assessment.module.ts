import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessmentController } from './assessment.controller';
import { AssessmentRepository } from './assessment.repository';
import { AssessmentService } from './assessment.service';

import { QuestionsRepository } from "../questions/questions.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([AssessmentRepository, QuestionsRepository])
    ],
  controllers: [AssessmentController],
  providers: [AssessmentService],
  exports: [AssessmentService],
})
export class AssessmentModule {}
