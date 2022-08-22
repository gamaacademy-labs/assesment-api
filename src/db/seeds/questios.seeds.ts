import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { QuestionsEntity } from '../../modules/questions/questions.entity';

export default class Questions implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(QuestionsEntity)
      .values([
        { id: 'f48ac15b-0491-41d9-bf50-11a993f0306d', title: 'Title I - Question', alternatives: [] },
        { id: '4940c4cb-4301-4fe4-9ddc-e47f893a86d6', title: 'Title II - Question', alternatives: [] },
        { id: '5978b863-c79e-47ba-9e21-6ad5707b87cb', title: 'Title II - Question', alternatives: [] },
      ])
      .execute();
  }
}