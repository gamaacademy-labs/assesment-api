import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserAssessmentEntity } from "../user-assessments/user-assessment.entity";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
  
    @Column({ name: 'username', type: 'varchar', length: '10', unique: true, nullable: false })
    public username: string

    @Column({ name: 'is_active', type: 'boolean', default: true, nullable: false })
    public isActive: boolean;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;

    @OneToMany(type => UserAssessmentEntity, user => UsersEntity)
    public userAssessments: UserAssessmentEntity;
}