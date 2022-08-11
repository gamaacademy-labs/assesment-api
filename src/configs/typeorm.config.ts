import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) 

export const typeormConfig = (): TypeOrmModule => {
    return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'development',
        database: 'assesment-api',
        entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
        synchronize: false,
        logging: process.env.NODE_ENV === 'development' ? true : false,
        autoLoadEntities: true,
      }
}