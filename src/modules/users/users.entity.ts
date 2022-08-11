import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

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
}