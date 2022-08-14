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
        { question_title: 'Title Question', question_alternative_id: 1,
        question_alternative: 'JSON', question_alternative_correct: 1 },
        { question_title: 'Title Question 2', question_alternative_id: 2,
        question_alternative: 'JSON 2', question_alternative_correct: 2 },
      ])
      .execute();
  }
}