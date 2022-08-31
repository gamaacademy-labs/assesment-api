import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AssessmentEntity } from "../assessment/assessment.entity";
import { UsersEntity } from "../users/users.entity";


@Entity('user_assessments')
export class UserAssessmentEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ name: 'is_active', type: 'boolean', default: true, nullable: false })
    public isActive: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;

    @Column({ name: 'score', type: 'integer', unique: false, nullable: true })
    public score: number;

    @Column({ name: 'answers', type: 'jsonb', unique: false, nullable: true, default: [] })
    public answers: string[];

    @ManyToOne(type => UsersEntity, userAssessment => UserAssessmentEntity)
    public user: UsersEntity;

    @ManyToOne(type => AssessmentEntity, assessmentUser => UserAssessmentEntity)
    public assessment: AssessmentEntity;

    @Column({ name: 'status', type: 'boolean', nullable: false })
    public status: boolean;

}