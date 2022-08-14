import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';

@Injectable()
export class AssessmentService {

    constructor(
        @InjectRepository(AssessmentRepository)
        private readonly assessmentRepository: AssessmentRepository
    ){} 
    
    public async findAssessmentById (assessmentId: string): Promise<AssessmentEntity> {
        const assessment = await this.assessmentRepository.findAssessmentById(assessmentId)
        if(!assessment) throw new NotFoundException('assessment not found')
        return assessment
    }
    
}
