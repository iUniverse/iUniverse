import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subtype } from '../subtype/subtype.entity';
import { Project } from "src/project/project.entity";

@Entity()
export class Basetype{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;
    
    @Column()
    description : string;

    @CreateDateColumn()
    createDate : Date;

    @OneToMany(() => Subtype, (subtype) => subtype.basetype)
    subtypes : Subtype[];

    @Column()
    projectId : number;

    @ManyToOne(
        (type) => Project,
        (project) => project.baseTypes
    )
    
    project! : Project;
} 

