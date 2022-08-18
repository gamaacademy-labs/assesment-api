import { Controller, Get, Param } from '@nestjs/common';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
export class AssessmentController {
    constructor(
        private assessmentService: AssessmentService
    ) {}

    @Get('/:id')
    public async findAssessmentById(
        @Param('id') id: number
    ): Promise<AssessmentEntity> {
        const assessment = await this.assessmentService.findAssessmentById(id)
        return assessment
}
}