import { EntityRepository, Repository } from "typeorm";
import { UserAssessmentEntity } from "../assessment/user-assessment.entity";


@EntityRepository(UserAssessmentEntity)
export class UserAssessmentsRepository extends Repository<UserAssessmentEntity> {

    public async findUserAssessmentById (id: string): Promise<UserAssessmentEntity> {
        const userAssessmentAnswers = await this.findOne({
            where: {
                id,
                isActive: true
            }
        })
        return userAssessmentAnswers
    }

}