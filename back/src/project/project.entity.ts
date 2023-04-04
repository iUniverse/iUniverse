//import { ProjectMember } from "../projectmember/projectmember.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Task } from '../task/task.entity';

@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;   

    @Column({nullable: true})
    description : string;

    @CreateDateColumn()
    createDate : Date;

    @Column({nullable: true})
    updateDate : Date;

    @Column({nullable: true})
    color : string;

    @Column({nullable: true})
    startDate : Date;

    @Column({nullable: true})
    endDate : Date;

    @Column({nullable: true})
    dueDate : Date;

    @Column({nullable: true})
    processRate : number;

    @Column({nullable: true})
    typeId : number;

    @Column({nullable: true})
    statusId : number;

    @Column({nullable: true})
    creatorId : number;

    @Column({ default : true })
    isPrivate : boolean;

    @Column({default : false})
    isFavorite : boolean;
    
    @OneToMany(
        (type) => Task,
        (task) => task.project
    )
    tasks! : Task[];
}
