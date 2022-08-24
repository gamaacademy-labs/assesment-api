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
          id: '2b1232a7-5c59-4a8c-aaf0-f6d1944c5000',
          title: 'Avaliação de Estrutura de Dados', 
          finishedAt: '2020-01-01', 
          questions: [
            'f48ac15b-0491-41d9-bf50-11a993f0306d', 
            '5978b863-c79e-47ba-9e21-6ad5707b87cb', 
            '4940c4cb-4301-4fe4-9ddc-e47f893a86d6'
          ], 
        },
          id: '1aca16af-36a3-4850-9aef-eadb6f8a8f30',
          title: 'Avaliação de Estrutura de Dados', 
          finishedAt: '2020-01-01', 
          questions: [],
        },
      ])
      .execute();
  }
}