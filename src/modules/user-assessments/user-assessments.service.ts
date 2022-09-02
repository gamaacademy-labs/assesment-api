import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssessmentRepository } from "../assessment/assessment.repository";
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
        if (!userAssessment) {
            userAssessment = await this.userAssessmentsRepository.createUserAssessment(assessment, user)
        }

        // const QuestionExist = await this.questionsRepository.findQuestions([payload.questionId])
        // if (!QuestionExist[0]) throw new NotFoundException('Question not found')

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
       
        const newUserAssessment = await this.userAssessmentsRepository.createUserAssessment(assessment, user)
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

}