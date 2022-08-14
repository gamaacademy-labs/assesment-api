import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
@ApiTags('assessment')
export class AssessmentController {
    constructor(
        private assessmentService: AssessmentService
    ){}

    @Get('/:assessment_id')
    @ApiParam({ name: 'assessment_id' })
    public async findAssessmentById(
        @Param('assessment_id') assessmentId: string
    ): Promise<any> {
        const assessment = await this.assessmentService.findAssessmentById(assessmentId)
        return assessment
    }

}