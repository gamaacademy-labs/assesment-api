import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
@ApiTags('assessment')
export class AssessmentController {
    constructor(
        private assessmentService: AssessmentService
    ) {}

    @Get('assessment/:id')
    public async findAssessmentById(@Param('id') id: string) {
        return this.assessmentService.findAssessmentById(id);
    }

}