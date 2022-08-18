import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('questions')
export class QuestionsEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;

    @Column({ name: 'is_active', type: 'boolean', default: true, nullable: false })
    public isActive: boolean;

    @Column({ name: 'title', type: 'varchar', nullable: false })
    public title: string;

    @Column({ name: 'alternatives', type: 'jsonb', nullable: true, default: [] })
    public alternatives: string[];
}