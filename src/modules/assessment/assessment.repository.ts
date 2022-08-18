import { EntityRepository, Repository } from "typeorm";
import { AssessmentEntity } from "./assessment.entity";

@EntityRepository(AssessmentEntity)
export class UsersRepository extends Repository<AssessmentEntity> {

    public async findAssessmentById (id: string): Promise<AssessmentEntity> {
        const assessmentId = await this.findOne({
            where: {
                id
            }
        })
        return assessmentId
    }

}