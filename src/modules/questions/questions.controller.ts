import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { QuestionsEntity } from "./questions.entity";
import { QuestionsService } from "./questions.service";

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {

    constructor(
        private questionsService: QuestionsService
    ){}

    @Get('/:question_id')
    public async findQuestionsAndAlternatives(
        @Param('question_id', new ParseUUIDPipe()) question_id: string
    ): Promise<QuestionsEntity> {
        const question = await this.questionsService.findQuestionsAndAlternatives(question_id)
        return question
    }

    // Selecting all questions
    @Get('')
    public async findAllQuestions(): Promise<QuestionsEntity[]> {
        const questions = await this.questionsService.findAllQuestions();
        return questions;
    }

}