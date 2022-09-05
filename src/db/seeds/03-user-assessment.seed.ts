import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { AssessmentEntity } from '../../modules/assessment/assessment.entity';
import { UserAssessmentEntity } from '../../modules/user-assessments/user-assessment.entity';
import { UsersEntity } from '../../modules/users/users.entity';

export default class UserAssessment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const users = await connection
      .getRepository(UsersEntity)
      .createQueryBuilder('users')
      .getMany()

    const assessments = await connection
      .getRepository(AssessmentEntity)
      .createQueryBuilder('assessments')
      .getMany()

    await connection
      .createQueryBuilder()
      .insert()
      .into(UserAssessmentEntity)
      .values([
        {
          id: '79e8d8de-c99f-4da2-b0d6-4fedeae0cc10',
          user: users.find((user) => user.id = '24f0fd46-0caa-4395-9444-cb3996ce4426'),
          assessment: assessments.find((assessment) => assessment.id = '1aca16af-36a3-4850-9aef-eadb6f8a8f30'),
          score: 10,
          answers: [],
          status: 2,
        },
      ])
      .execute();
  }
}
