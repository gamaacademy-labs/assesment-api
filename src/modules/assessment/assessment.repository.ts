import { EntityRepository, Repository } from "typeorm";
import { AssessmentEntity } from "../assessment/assessment.entity";

@EntityRepository(AssessmentEntity)
export class AssessmentRepository extends Repository<AssessmentEntity> {

    public async findAssessmentById (assessment_id: string): Promise<AssessmentEntity> {
        const assessment = await this.findOne({
            where: {
                assessment_id
            }
        })
        return assessment
    }

}