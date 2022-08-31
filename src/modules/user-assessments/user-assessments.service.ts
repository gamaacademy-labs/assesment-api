import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssessmentRepository } from "../assessment/assessment.repository";
import { QuestionsRepository } from "../assessment/questions.repository";
import { UsersRepository } from "../users/users.repository";
import { UserAssessmentEntity } from "./user-assessment.entity";
import { UserAssessmentsRepository } from "./user-assessments.repository";



@Injectable()
export class UserAssessmentsService {
    
    constructor(
        @InjectRepository(UserAssessmentsRepository)
        private userAssessmentsRepository: UserAssessmentsRepository,

        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository,

        @InjectRepository(AssessmentRepository)
        private readonly assessmentRepository: AssessmentRepository,

        @InjectRepository(QuestionsRepository)
        private readonly questionsRepository: QuestionsRepository
    ){}

    public async registerAnswersUser (assessmentId: string, user: any, data: any ): Promise<UserAssessmentEntity| any> {
        const assessmentExist = await this.assessmentRepository.findAssessmentById(assessmentId)
        if (!assessmentExist) throw new NotFoundException('Assessment not found')

        const userExist = await this.usersRepository.findUserByUsername(user.username)
        if (!userExist) throw new NotFoundException('User not found')

        const newUserAssessment = async (idAssessment, idUser) => {
            const newUserAssessment = await this.userAssessmentsRepository.createUserAssessment(idAssessment, idUser)
            return newUserAssessment
        }

        const userAssessmentExist = await this.userAssessmentsRepository.countUserAssesmentByUsernameAndId(assessmentId, user.id)
        if (userAssessmentExist !== 1) {            
            await newUserAssessment(assessmentId, user.id)
        }
        
        if (!newUserAssessment && userAssessmentExist !== 1) throw new NotFoundException('UserAssessment not found')
        
        const userAssessment = await this.userAssessmentsRepository.findUserAssessmentById(assessmentId, user.id)
        const QuestionExist = await this.questionsRepository.findQuestions([data.question])
        if (!QuestionExist[0]) throw new NotFoundException('Question not found')

        let changedAnswers = 0;
        const newAnswers: any = await Promise.all(
            userAssessment.answers.map(async (elem: any): Promise<[]> => {
                if(elem.question == data.question) {
                    elem.answer = await data.answer
                    changedAnswers ++
                    
                    return elem
                }
                            
                return elem;
            }),
        );
        
        if(!newAnswers[0] || changedAnswers === 0) {                
            const newItem = {question: data.question, answer: data.answer}
            newAnswers.push(newItem)
        }
        
        await this.userAssessmentsRepository.updateAnswersUser(userAssessment.id, newAnswers)
        
        return
    }

}