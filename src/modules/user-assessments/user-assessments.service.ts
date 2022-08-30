import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserAssessmentEntity } from "../assessment/user-assessment.entity";
import { UserAssessmentsRepository } from "./user-assessments.repository";

@Injectable()
export class UserAssessmentsService {
    
    constructor(
        @InjectRepository(UserAssessmentsRepository)
        private userAssessmentsRepository: UserAssessmentsRepository
    ){}

    public async findUserAssessment (id: string): Promise<UserAssessmentEntity> {
        const userAssessment = await this.userAssessmentsRepository.findUserAssessmentById(id)
        if (!userAssessment) throw new NotFoundException('User assessment not found')

        const userAssessmentUsername = await this.userAssessmentsRepository.findUserAssessmentUsername(id)

        return userAssessment
    }

}