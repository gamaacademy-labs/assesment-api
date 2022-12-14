import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssessmentRepository } from "../assessment/assessment.repository";
import { QuestionsEntity } from "../assessment/questions.entity";
import { QuestionsRepository } from "../assessment/questions.repository";
import { UsersRepository } from "../users/users.repository";
import { UserAssessmentDto } from "./user-assessment.dto";
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
    ) { }

    public async registerUserAnswer(payload: UserAssessmentDto, username: string): Promise<UserAssessmentEntity | any> {
        const assessment = await this.assessmentRepository.findAssessmentById(payload.assessmentId);
        if (!assessment) throw new NotFoundException('Assessment not found')

        const user = await this.usersRepository.findUserByUsername(username)
        if (!user) throw new NotFoundException('User not found')

        let userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);
        if (!userAssessment) throw new NotFoundException('Assessment not found')

        const QuestionExist = await this.questionsRepository.findQuestions([payload.questionId])
        if (!QuestionExist[0]) throw new NotFoundException('Question not found')

        if (userAssessment.status !== 1) throw new NotFoundException('This assessment has already been finished by the user');
        


        let changedAnswers = 0;
        const newAnswers: object[] = await Promise.all(
            userAssessment.answers.map(async (elem): Promise<[]> => {
                if (elem.questionId == payload.questionId) {
                    elem.alternativeId = payload.alternativeId
                    changedAnswers++

                    return elem
                }

                return elem;
            }),
        );

        if (!newAnswers[0] || changedAnswers === 0) {
            newAnswers.push({
                alternativeId: payload.alternativeId,
                questionId: payload.questionId
            })
        }
        await this.userAssessmentsRepository.updateAnswersUser(userAssessment.id, newAnswers)
    }

    public async startedUserAssessment(assessmentId: string, username: string): Promise<UserAssessmentEntity> {
        const assessment = await this.assessmentRepository.findAssessmentById(assessmentId);
        if (!assessment) throw new NotFoundException('Assessment not found')

        const user = await this.usersRepository.findUserByUsername(username)
        if (!user) throw new NotFoundException('User not found')

        const userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);
        if (userAssessment) throw new NotFoundException('This assessment has already been started by the user');

        const answers: object[] = await Promise.all(
            assessment.questions.map(async (elem): Promise<object> => {
                const question = await this.questionsRepository.findQuestions([elem])
                if (!question[0]) throw new NotFoundException('Question not found')

                const answer = { questionId: question[0].id, alternativeId: null }
                
                return answer
            }),
        );
       
        const newUserAssessment = await this.userAssessmentsRepository.createUserAssessment(assessment, user, answers)
        if (!newUserAssessment) throw new NotFoundException('UserAssessment cannot be created');        

        return newUserAssessment
    }

    public async finishedUserAssessment(assessmentId: string, username: string): Promise<UserAssessmentEntity | object> {
        const assessment = await this.assessmentRepository.findAssessmentById(assessmentId);
        if (!assessment) throw new NotFoundException('Assessment not found')

        const user = await this.usersRepository.findUserByUsername(username)
        if (!user) throw new NotFoundException('User not found')

        const userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);
        if (!userAssessment) throw new NotFoundException('UserAssessment not found');

        if (userAssessment.status !== 1) throw new NotFoundException('UserAssessment is not in progress');

        const finishedUserAssessment = await this.userAssessmentsRepository.updateUserAssessment(userAssessment.id, 2)
        if (!finishedUserAssessment) throw new NotFoundException('UserAssessment cannot be finished');

        return finishedUserAssessment
    }

    public async calculateScoreUserAssessment(assessmentId: string, username: string): Promise<UserAssessmentEntity | object> {
        const assessment = await this.assessmentRepository.findAssessmentById(assessmentId);
        if (!assessment) throw new NotFoundException('Assessment not found')

        const user = await this.usersRepository.findUserByUsername(username)
        if (!user) throw new NotFoundException('User not found')

        const userAssessment = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);
        if (!userAssessment) throw new NotFoundException('UserAssessment not found');

        if (userAssessment.status !== 2) throw new NotFoundException('UserAssessment is not finished');

        
        let countScore = 0
        let alternativesCorrect = []
        let questions: QuestionsEntity[] = []
        await Promise.all(
            userAssessment.answers.map(async (elem, index): Promise<[]> => {
                // console.log(elem.questionId, "*******")
                const question = await this.questionsRepository.findQuestion(elem.questionId)
                
                if (!question) throw new NotFoundException('Question not found 123')

                questions.push(question)

                alternativesCorrect[index] = question.isCorrect
                
                await question.isCorrect.map(async (item): Promise<[]> => {
                    if (item == elem.alternativeId) {
                        countScore++
                    }
                    return;
                })
                
                Object.assign(question, elem)

                return
            }),
        );

        await this.userAssessmentsRepository.updateScore(userAssessment.id, countScore)
        const result = await this.userAssessmentsRepository.findUserAssesmentByUsernameAndId(assessment, user);

        
        if (!result) throw new NotFoundException('UserAssessment not found');

        result.answers = result.answers.map((answer) => {
            const question: any = questions.find((question) => question.id === answer.questionId)

            
            delete question.createdAt
            delete question.updatedAt
            delete question.isActive
            delete question.id
           
            question.isCorrect = question.isCorrect[0]

            answer.question = question

            return question
        })
        
        

        console.log(result.answers, "*********")
        return result
    }

}