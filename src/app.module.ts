import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from './configs/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { AssessmentController } from './modules/assessment/assessment.controller';
import { AssessmentModule } from './modules/assessment/assessment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig()),
    UsersModule,
    AssessmentModule
  ],
  controllers: [AppController, AssessmentController],
  providers: [AppService],
})
export class AppModule {}
