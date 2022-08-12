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
        { username: 'rafael' },
        { username: 'lucas' }, 
        { username: 'junior' }, 
        { username: 'matheus' }, 
        { username: 'gefferson' }, 
        { username: 'alvaro' }, 
      ])
      .execute();
  }
}
