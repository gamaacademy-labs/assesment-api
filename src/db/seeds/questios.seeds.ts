import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { QuestionsEntity } from '../../modules/assessment/questions.entity';

export default class Questions implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(QuestionsEntity)
      .values([
        { title: 'Title I - Question', alternatives: [] },
        { title: 'Title II - Question', alternatives: [] },
        { title: 'Title II - Question', alternatives: [] },
      ])
      .execute();
  }
}
