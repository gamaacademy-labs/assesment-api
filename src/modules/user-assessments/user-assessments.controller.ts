import { Controller, Param, Patch, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/strategy/jwt-auth.guard";
import { UserAssessmentEntity } from "./user-assessment.entity";
import { UserAssessmentsService } from "./user-assessments.service";

@Controller('user-assessments')
@ApiTags('user-assessments')
export class UserAssessmentsController {
    constructor(private userAssessmentsService: UserAssessmentsService) {}

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Patch('/questions/id/:id')
@ApiParam({ name: 'id' })
@ApiBody({})
async findUserAssessment(
    @Request() req,
    @Param('id') assessmentId: string): Promise<UserAssessmentEntity | object> {
    
    return this.userAssessmentsService.registerAnswersUser(assessmentId, req.user, req.body);
}

}