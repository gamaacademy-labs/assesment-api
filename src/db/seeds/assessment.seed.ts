import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { AssessmentEntity } from '../../modules/assessment/assessment.entity';

export default class Assessment implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(AssessmentEntity)
      .values([
        { 
          id: '1aca16af-36a3-4850-9aef-eadb6f8a8f30',
          title: 'Avaliação de Estrutura de Dados', 
          finishedAt: '2020-01-01', 
          questions: [],
        },
      ])
      .execute();
  }
}