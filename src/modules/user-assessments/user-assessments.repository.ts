import { EntityRepository, Repository } from "typeorm";
import { UserAssessmentsEntity } from "./user-assessments.entity";

@EntityRepository(UserAssessmentsEntity)
export class UserAssessmentsRepository extends Repository<UserAssessmentsEntity> {

    public async findUserAssessmentById (id: string): Promise<UserAssessmentsEntity> {
        const userAssessmentAnswers = await this.findOne({
            where: {
                id,
                is_active: true
            }
        })
        return userAssessmentAnswers
    }

}