import { TypeOrmModule } from '@nestjs/typeorm';

if (process.env.NODE_ENV === 'development') require('dotenv/config');

export const typeormConfig = (): TypeOrmModule => {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA,
      entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
      synchronize: false,
      logging: process.env.NODE_ENV === 'development' ? true : false,
      autoLoadEntities: true,
      ssl: process.env.NODE_ENV === 'development' ? false : { require: true, rejectUnauthorized: false } 
    }
}