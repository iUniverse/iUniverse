import { Project } from "src/project/project.entity";
import { Theme } from "src/theme/theme.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectTheme{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    projectId : number;

    @Column()
    themeId : number;

    @ManyToOne(
        (type) => Project,
        (project) => project.projectTheme
    )

    project! : Project;

    @ManyToOne(
        (type) => Theme,
        (theme) => theme.projectTheme
    )

    theme! : Theme;
}