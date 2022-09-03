import { EntityRepository, Repository, UpdateResult } from "typeorm";
import { AssessmentEntity } from "../assessment/assessment.entity";
import { UsersEntity } from "../users/users.entity";
import { UserAssessmentEntity } from "./user-assessment.entity";


@EntityRepository(UserAssessmentEntity)
export class UserAssessmentsRepository extends Repository<UserAssessmentEntity> {

    public async findUserAssesmentByUsernameAndId (assessment: AssessmentEntity, user: UsersEntity): Promise<UserAssessmentEntity> {
        const userAssessment = await this.findOne({
            where: {
                assessment,
                user,
                isActive: true
            }
        })
        return userAssessment
    }

    public async updateUserAssessment (id: string, status: number): Promise<UpdateResult> {
        const newUserAssessment = await this.update(id, {status});

        return newUserAssessment
    }

    public async createUserAssessment (assessment: AssessmentEntity, user: UsersEntity): Promise<UserAssessmentEntity> {
        const userAssessment = await this.save({            
            user,
            assessment,
            score: 0,
            answers: [],
            status: 1,
        });
        return userAssessment
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

    public async updateAnswersUser (id: string, answers: any[]): Promise<UpdateResult> {
        const newUserAssessment = await this.update(id, { answers });
        
        return newUserAssessment
    }

    public async updateScore (id: string, score: number): Promise<UpdateResult> {
        const newUserAssessment = await this.update(id, { score });
        
        return newUserAssessment
    }

}