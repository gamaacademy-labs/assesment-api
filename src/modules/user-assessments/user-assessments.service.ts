import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserAssessmentsEntity } from "./user-assessments.entity";
import { UserAssessmentsRepository } from "./user-assessments.repository";

@Injectable()
export class UserAssessmentsService {
    
    constructor(
        @InjectRepository(UserAssessmentsRepository)
        private userAssessmentsRepository: UserAssessmentsRepository
    ){}

    public async findUserAssessment (id: string): Promise<UserAssessmentsEntity> {
        const userAssessment = await this.userAssessmentsRepository.findUserAssessmentById(id)
        if (!userAssessment) throw new NotFoundException('User assessment not found')
        return userAssessment
    }

}