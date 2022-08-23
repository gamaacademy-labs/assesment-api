import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { UserAssessmentEntity } from "./user-assessment.entity";

@Entity('assessments')
export class AssessmentEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;

    @Column({ name: 'is_active', type: 'boolean', default: true, nullable: false })
    public isActive: boolean;

    @Column({ name: 'title', type: 'varchar', length: '100', unique: false, nullable: false })
    public title: string;

    @Column({ name: 'finished_at', type: 'timestamptz', nullable: false })
    public finishedAt: Date;
    
    @Column({ name: 'questions', type: 'jsonb', nullable: true, default: [] })
    public questions: string[];

    @OneToMany(type => UserAssessmentEntity, assesment => AssessmentEntity)
    public userAssessments: UserAssessmentEntity;



    

}