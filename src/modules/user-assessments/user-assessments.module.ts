import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAssessmentsController } from "./user-assessments.controller";
import { UserAssessmentsRepository } from "./user-assessments.repository";
import { UserAssessmentsService } from "./user-assessments.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserAssessmentsRepository])
    ],
    controllers: [UserAssessmentsController],
    providers: [UserAssessmentsService],
    exports: [UserAssessmentsService]
})
export class UserAssessmentsModule {}