import { BoardTaskMap } from "src/board-task-map/board-task-map.entity";
import { Project } from "src/project/project.entity";
import { Subtype } from "src/subtype/subtype.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    projectId : number;

    @ManyToOne(
        (type) => Project,
        (project) => project.boards
    )
    project! : Project;

    @Column()
    color : string;
    
    @Column()
    fontColor : string;

    @CreateDateColumn()
    createDate : Date; 
    
    @Column('integer',{array : true})
    taskOrder : number[];

    @OneToMany(
        (type) => BoardTaskMap,
        (boardTaskMap) => boardTaskMap.board
    )

    boardTaskMap! : BoardTaskMap[];
}