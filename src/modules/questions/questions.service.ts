import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionsEntity } from "./questions.entity";
import { QuestionsRepository } from "./questions.repository";

@Injectable()
export class QuestionsService {
    
    constructor(
        @InjectRepository(QuestionsRepository)
        private readonly questionsRepository: QuestionsRepository
    ){}

    public async findQuestionsAndAlternatives (question_id: string): Promise<QuestionsEntity> {
        const user = await this.questionsRepository.findQuestionsAndAlternatives(question_id)
        if (!user) throw new NotFoundException('question not found')
        return user
    }

    public async findAllQuestions(): Promise<QuestionsEntity[]> {
        return await this.questionsRepository.find();
    }

}