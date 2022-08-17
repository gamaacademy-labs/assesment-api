import { Module } from '@nestjs/common';
import { AssessmentController } from './assessment.controller';

@Module({
    controllers: [AssessmentController]
})
export class AssessmentModule {}
