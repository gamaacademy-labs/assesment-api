import { Controller, Get, Param } from '@nestjs/common';


@Controller('assessment')
export class AssessmentController {

    @Get('/:id')
    public async findAssessmentById(
        @Param('id') id: string
    ): Promise<any> {
        const assessment = await this.findAssessmentById(id)
        return assessment;
    }
}