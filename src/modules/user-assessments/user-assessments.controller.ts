import { Body, Controller, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/strategy/jwt-auth.guard";
import { UserAssessmentDto, UserAssessmentStatusDto } from "./user-assessment.dto";
import { UserAssessmentsService } from "./user-assessments.service";

@Controller('user-assessments')
@ApiTags('user-assessments')
export class UserAssessmentsController {
    constructor(private userAssessmentsService: UserAssessmentsService) { }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Patch('/questions')
    @ApiBody({ type: UserAssessmentDto })
    async findUserAssessment(
        @Body() payload: UserAssessmentDto,
        @Request() req,
    ) {
        return this.userAssessmentsService.registerUserAnswer(payload, req.user.username);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post('/started')
    @ApiBody({ type: UserAssessmentStatusDto })    
    async createUserAssessment(
        @Body() assessmentId: UserAssessmentStatusDto ,
        @Request() req,
    ) {
        return this.userAssessmentsService.startedUserAssessment(assessmentId.assessmentId, req.user.username);
    }
}