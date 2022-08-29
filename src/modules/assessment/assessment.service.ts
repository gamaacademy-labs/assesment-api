import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';

import { QuestionsRepository } from "./questions.repository";

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

        delete assessment.questions;
        
        questions.map((question) => {
            delete question.isCorrect;
        });

        
        const assessmentsQuestion = {
                id: assessment.id,
                createdAt: assessment.createdAt,
                updatedAt: assessment.updatedAt,
                isActive: assessment.isActive,
                title: assessment.title,
                finishedAt: assessment.finishedAt,
                questions,
            }
            return assessmentsQuestion;
        }
        

        public async findAssessmentsActive(): Promise<AssessmentEntity[] | Object>{
    
            const assessmentsActive = await this.assessmentRepository.findAssessmentsActive();
    
            assessmentsActive.map((assessments) => {
                delete assessments.questions
            });
    
            return assessmentsActive;
        }
    }