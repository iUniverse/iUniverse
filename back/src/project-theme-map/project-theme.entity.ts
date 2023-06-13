import { Project } from "src/project/project.entity";
import { Theme } from "src/theme/theme.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectThemeMap{
    @PrimaryGeneratedColumn()
    id : number;

    /* 프로젝트 Id */
    @Column()
    projectId : number;

    /* 테마 Id */
    @Column()
    themeId : number;

    /* 유저 Id */
    @Column()
    userId : number;

    /* 현재 사용 여부 */
    @Column({default : false})
    isUse : boolean;

    @ManyToOne(
        (type) => Project,
        (project) => project.projectThemeMap
    )

    project! : Project;

    @ManyToOne(
        (type) => Theme,
        (theme) => theme.projectThemeMap
    )

    theme! : Theme;
}