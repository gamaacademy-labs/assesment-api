import { EntityRepository, Repository } from "typeorm";
import { QuestionsEntity } from "./questions.entity";

@EntityRepository(QuestionsEntity)
export class QuestionsRepository extends Repository<QuestionsEntity> {

    public async findQuestions (ids: string[]): Promise<QuestionsEntity[]> {
        const questions = await this.findByIds(ids);

        return questions;
    }

    public async findQuestion (id: string): Promise<QuestionsEntity> {
        const question = await this.findOne(id);

        return question;
    }
}   