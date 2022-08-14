import { EntityRepository, Repository } from "typeorm";
import { QuestionsEntity } from "./questions.entity";

@EntityRepository(QuestionsEntity)
export class QuestionsRepository extends Repository<QuestionsEntity> {

    public async findQuestionsAndAlternatives(question_id: string): Promise<QuestionsEntity> {
        const question = await this.findOne({
            where: {
                question_id
            }
        })
        return question
    }

}