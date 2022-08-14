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
        { assessmentName: 'Avaliação de Estrutura de Dados', assessmentDate: '2020-01-01' },
      ])
      .execute();
  }
}