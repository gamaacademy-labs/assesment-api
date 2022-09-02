import { EntityRepository, Repository } from "typeorm";
import { AssessmentEntity } from "./assessment.entity";

@EntityRepository(AssessmentEntity)
export class AssessmentRepository extends Repository<AssessmentEntity> {

    public async findAssessmentById (id: string): Promise<AssessmentEntity> {
        const assessmentId = await this.findOne({
            where: {
                id
            }
        })
        return assessmentId
    }

    public async findAssessmentsActive() :Promise<AssessmentEntity[] | object[]> {
        const assessmentsActive = await this.find({
            where: {
                isActive: true
            }
        });

        return assessmentsActive;
    }

}