import { Board } from "src/board/board.entity";
import { Task } from "src/task/task.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BoardTaskMap{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    boardId : number;

    @ManyToOne(
        (type) => Board,
        (board) => board.boardTaskMap
    )
    board! : Board;

    @Column()
    taskId : number;

    @ManyToOne(
        (type) => Task,
        (task) => task.boardTaskMap
    )
    task! : Task;

    @CreateDateColumn()
    createDate : Date;
}