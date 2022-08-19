module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password:  process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  synchronize: false,
  autoLoadEntities: false,
  migrationsTableName: 'migration',
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
  factories: ['src/db/factories/**/*{.ts,.js}'],
  seeds: ['src/db/seeds/**/*.seed{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
  logging: true,
  ssl: process.env.NODE_ENV === 'development' ? false : { require: true, rejectUnauthorized: false }
};
