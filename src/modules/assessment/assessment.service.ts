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
    Promise<AssessmentEntity| Object>  {
        const assessment = await this.assessmentRepository.findAssessmentById(id);


        if(!assessment) throw new NotFoundException(`Assessment with id ${id} not found`);
        const qtdQuestions:Object = assessment.questions.length;
        const maxScore:Object = assessment.questions.length;



        delete assessment.questions;

        const assessmentObj = {
            ...assessment, qtdQuestions, maxScore
        }

        return assessmentObj;
    }



}