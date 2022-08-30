import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
@ApiTags('assessment')
export class AssessmentController {
    constructor(
        private assessmentService: AssessmentService
    ) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('active')
    public async findAssessmentsActive() {
        return this.assessmentService.findAssessmentsActive();
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:id')
    public async findAssessmentById(@Param('id') id: string) {
        return this.assessmentService.findAssessmentById(id);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get("questions/:id")
    public async getAssessmentQuestions(@Param("id") id: string) {
        const assessmentQuestion = await this.assessmentService.findAssessmentAndQuestions(id);

        return assessmentQuestion;
    }
    


}