import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class AssessmentEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ name: 'assessment_name', type: 'varchar', length: '100', unique: false, nullable: false })
    public assessmentName: string;

    @Column({ name: 'assessment_date', type: 'date', unique: false, nullable: false })
    public assessmentDate: Date;

    @Column({ name: 'is_active', type: 'boolean', default: true, nullable: false })
    public isActive: boolean;
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
    public updatedAt: Date;
}
