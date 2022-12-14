import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from './configs/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { AssessmentModule } from './modules/assessment/assessment.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserAssessmentsModule } from './modules/user-assessments/user-assessments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig()),
    UsersModule,
    AssessmentModule,
    AuthModule,
    UserAssessmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
