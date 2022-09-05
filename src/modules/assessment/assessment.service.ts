import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAssessmentsRepository } from '../user-assessments/user-assessments.repository';
import { UsersRepository } from '../users/users.repository';
import { AssessmentEntity } from './assessment.entity';
import { AssessmentRepository } from './assessment.repository';
import { QuestionsRepository } from "./questions.repository";

@Injectable()
export class AssessmentService {
    constructor(
        @InjectRepository(AssessmentRepository)
        private assessmentRepository: AssessmentRepository,

        @InjectRepository(QuestionsRepository)
        private questionRepository: QuestionsRepository,

        @InjectRepository(UserAssessmentsRepository)
        private userAssessmentsRepository: UserAssessmentsRepository,

        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository,
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

    public async findAssessmentAndQuestions(id: string, username: string): Promise<AssessmentEntity | Object> {
        const assessment = await this.assessmentRepository.findAssessmentById(id);
        if(!assessment) throw new NotFoundException("assesment and questions not found!");

        const user = await this.usersRepository.findUserByUsername(username);
        if(!user) throw new NotFoundException("user not found!");

        const userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);
        if(!userAssessment) throw new NotFoundException("userAssessment not found!");


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
                status: userAssessment.status,
                questions,
            }
            return assessmentsQuestion;
        }
        

        public async findAssessmentsActive(username: string): Promise<AssessmentEntity[] | Object>{
    
            const assessmentsActive = await this.assessmentRepository.findAssessmentsActive();
            const user = await this.usersRepository.findUserByUsername(username);
            if(!user) throw new NotFoundException("user not found!");

    
            const newAssessmentsActive: object[] = await Promise.all(
                assessmentsActive.map(async (elem): Promise<object[]> => {
                    delete elem.questions
                    let newElem = {
                        ...elem,
                        status: 0
                    };
                    const userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(elem, user);
                    
                    if (!userAssessment) {

                        return newElem
                    }
                                        
                    newElem.status = userAssessment.status;

                    return newElem;
                }),
            );
                
    
            return newAssessmentsActive;
        }
    }