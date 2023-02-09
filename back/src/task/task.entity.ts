import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//테스트용으로 id랑 이름만 입력해도 되도록 해놓음. 나중에 바꿔야함!
@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    startDate: Date;

    @Column({nullable: true})
    dueDate: Date;

    @Column({nullable: true})
    completionDate: Date;

    @CreateDateColumn({nullable: true})
    createDate: Date;

    @Column({nullable: true})
    score: number;

    @Column({nullable: true})
    statusId: number;

    //아직 안쓸거임
    @Column({nullable: true})
    typeId: number;

    //아직 안쓸거
    @Column({nullable: true})
    parentTaskId: number;

    @Column({nullable: true})
    creatorId: number;

    @Column({nullable: true})
    projectId: number;
}