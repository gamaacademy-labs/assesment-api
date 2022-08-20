import { Controller, Get, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { UserAssessmentsEntity } from "./user-assessments.entity";
import { UserAssessmentsService } from "./user-assessments.service";

@Controller('user-assessments')
@ApiTags('user-assessments')
export class UserAssessmentsController {

    constructor(
        private usersAssessmentsService: UserAssessmentsService
    ) { }

    @ApiBearerAuth()
    @Get('/:username/assessments/:id')
    @ApiParam({
        name: 'username',
        name: 'id'
    })
    public async findUserAssessmentById(
        @Param('username') username: string
        @Param('id') id: string
    ): Promise<UserAssessmentsEntity> {
        const userAssessment =
            await this.usersAssessmentsService.findUserAssessment(username, id)
        return userAssessment
    }

}