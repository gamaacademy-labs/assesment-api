import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('questions')
export class QuestionsEntity {
    @PrimaryGeneratedColumn('uuid')
    public question_id: string

    @Column({ name: 'question_title', type: 'text', nullable: false })
    public question_title: string

    @Column({ name: 'question_alternative_id', type: 'int', nullable: false })
    public question_alternative_id: number

    @Column({ name: 'question_alternative', type: 'jsonb', nullable: false })
    public question_alternative: string

    @Column({ name: 'question_alternative_correct', type: 'int', nullable: false })
    public question_alternative_correct: number
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;
}