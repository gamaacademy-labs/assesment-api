import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessmentController } from './assessment.controller';
import { AssessmentRepository } from './assessment.repository';
import { AssessmentService } from './assessment.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([AssessmentRepository])
    ],
  controllers: [AssessmentController],
  providers: [AssessmentService],
  exports: [AssessmentService],
})
export class AssessmentModule {}
