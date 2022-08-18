import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UserAssessmentEntity } from '../../modules/user-assessment/user-assessment.entity';

export default class UserAssessment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserAssessmentEntity)
      .values([{ score: 10, answers: []},])
      .execute();
  }
}
