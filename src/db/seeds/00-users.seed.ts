import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UsersEntity } from '../../modules/users/users.entity';

export default class Users implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UsersEntity)
      .values([
        { 
          id: '24f0fd46-0caa-4395-9444-cb3996ce4426',
          username: 'rafael'
        },
        { id: 'b8b28378-8497-41ca-8542-34bf18f5f927',
          username: 'lucas'
        }, 
        { id: '301057aa-d1a6-4676-96f8-0bbfa35cbaff',
          username: 'junior' 
        }, 
        { id: '70095fee-f589-4c60-bf64-38dd7023382a',
          username: 'matheus' 
        }, 
        { id: 'e022fed9-987f-433c-96be-87f0c16c1da0',
          username: 'gefferson' 
        }, 
        { id: 'f04a2cc4-a48a-4cf1-8103-e32217ade4f7',
          username: 'alvaro' 
        }, 
      ])
      .execute();
  }
}
