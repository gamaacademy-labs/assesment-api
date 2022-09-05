import { ApiProperty } from "@nestjs/swagger";
export class UserAssessmentDto {
    @ApiProperty()
    questionId: string;
    @ApiProperty()
    alternativeId: string;
    @ApiProperty()
    assessmentId: string;
}

export enum Status {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    FINISHED = 2,
}

export class UserAssessmentStatusDto {
    @ApiProperty()
    assessmentId: string;
}