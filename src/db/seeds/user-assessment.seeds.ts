import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UserAssessmentEntity } from '../../modules/assessment/user-assessment.entity';

export default class UserAssessment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserAssessmentEntity)
      .values([
        {
          id: '24f0fd46-0caa-4395-9444-cb3996ce4426',
          score: 10,
          answers: [],
        },
      ])
      .execute();
  }
}
