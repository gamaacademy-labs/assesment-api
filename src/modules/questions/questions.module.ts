import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionsController } from "./questions.controller";
import { QuestionsRepository } from "./questions.repository";
import { QuestionsService } from "./questions.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([QuestionsRepository])
    ],
    controllers: [QuestionsController],
    providers: [QuestionsService],
    exports: [QuestionsService]
})
export class QuestionsModule {}