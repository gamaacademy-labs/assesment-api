import { ApiProperty } from "@nestjs/swagger";

export class UserAssessmentDto {
    @ApiProperty()
    questionId: string;
    @ApiProperty()
    alternativeId: string;
    @ApiProperty()
    assessmentId: string;
}