import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';

import { QuestionsRepository } from "../questions/questions.repository";

@Injectable()
export class AssessmentService {
    constructor(
        @InjectRepository(AssessmentRepository)
        private assessmentRepository: AssessmentRepository,

        @InjectRepository(QuestionsRepository)
        private questionRepository: QuestionsRepository
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

    public async findAssessmentAndQuestions(id: string): Promise<AssessmentEntity | Object> {
        const assessment = await this.assessmentRepository.findAssessmentById(id);

        if(!assessment) throw new NotFoundException("assesment and questions not found!");

        const questions = await this.questionRepository.findQuestions(assessment.questions);

        const assessmentsQuestion = {
            assessment, questions
        }

        return assessmentsQuestion;
    }

}