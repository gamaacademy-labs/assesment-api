module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'development',
  database: 'assesment-api',
  entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
  autoLoadEntities: true,
  migrationsTableName: 'migration',
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
  factories: ['src/db/factories/**/*{.ts,.js}'],
  seeds: ['src/db/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
};
