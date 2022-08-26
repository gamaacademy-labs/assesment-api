import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
@ApiTags('assessment')
export class AssessmentController {
    constructor(
        private assessmentService: AssessmentService
    ) {}

    @Get('/:id')
    public async findAssessmentById(@Param('id') id: string) {
        return this.assessmentService.findAssessmentById(id);
    }

    @Get("questions/:id")
    public async getAssessmentQuestions(@Param("id") id: string) {
        const assessmentQuestion = await this.assessmentService.findAssessmentAndQuestions(id);

        return assessmentQuestion;
    }

}