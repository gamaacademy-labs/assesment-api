import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';

@Injectable()
export class AssessmentService {
    constructor(
        @InjectRepository(AssessmentRepository)
        private assessmentRepository: AssessmentRepository,
    ) {}

    public async findAssessmentById(id: string): 
    Promise<AssessmentEntity> {
        const assessment = await this.assessmentRepository.
        findAssessmentById(id);
        if(!assessment) throw new NotFoundException(`Assessment with id ${id} not found`);
        
        return assessment;
    }
}
