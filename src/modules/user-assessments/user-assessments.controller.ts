import { Controller, Get, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UserAssessmentEntity } from "../assessment/user-assessment.entity";
import { UserAssessmentsService } from "./user-assessments.service";

@Controller('user-assessments')
@ApiTags('user-assessments')
export class UserAssessmentsController {
    constructor(private userAssessmentsService: UserAssessmentsService) {}

    
@Get('/:username/:id')
@ApiBearerAuth()
@ApiParam({ name: 'username' })
async findUserAssessment(
    @Param('username') username: string, 
    @Param('id') id: string): Promise<UserAssessmentEntity | object> {

    return this.userAssessmentsService.findUserAssessment(id);
}

}