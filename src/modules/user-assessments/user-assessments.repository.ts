import { EntityRepository, Repository } from "typeorm";
import { UserAssessmentEntity } from "./user-assessment.entity";


@EntityRepository(UserAssessmentEntity)
export class UserAssessmentsRepository extends Repository<UserAssessmentEntity> {

    public async countUserAssesmentByUsernameAndId (assessment: string, user: string): Promise<number> {
        const userAssessmentExist = await this.count({
            where: {
                assessment,
                user,
                isActive: true
            }
        })
        return userAssessmentExist
    }

    public async createUserAssessment (assessment: any, user: any): Promise<any> {
        const newUserAssessment = await this.insert({            
            user,
            assessment,
            score: 0,
            answers: [],
            status: true,
        });
        return newUserAssessment
    }

    public async findUserAssessmentById (assessment: string, user: string): Promise<UserAssessmentEntity> {
        const newUserAssessment = await this.findOne({            
            where: {
                user,
                assessment,
                isActive: true
            }
        });
        return newUserAssessment
    }

    public async updateAnswersUser (id: string, answers: []): Promise<any> {

        const newUserAssessment = await this.update(id, { answers });
        
        return newUserAssessment
    }

}