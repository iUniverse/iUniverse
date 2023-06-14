import { getProject } from "api/project/project";
import { loadByProjectId } from "api/task/task";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface Project {
    id: number,
    name: string,
    description: string,
    createDate: string,
    dueDate: string,
    startDate: string,
    endDate: string,
    isFavorite: boolean,
    isPrivate: boolean,
    processRate: number,
    statusId: number,
    typeId: number,
    color: string
}

interface MyAllProject {
    favorite_projects: Array<Project>
    normal_projects: Array<Project>
}

interface Task {
    id: number;
    completionDate: string;
    createDate: string;
    creatorId: number | null;
    description: string | null;
    dueDate: string | null;
    name: string | null;
    parentTaskId: number | null;
    projectId: number;
    score: number | null;
    startDate: string | null;
    statusId: number | null;
    typeId: number | null;
}

interface Props {
    projects: MyAllProject
    loadTaskByProjectId: (projectId: number) => Promise<void>
    setCurrentProject: Dispatch<SetStateAction<Project>>
    currentProject: Project
}

export default function SideMenu(props: Props) {
    const [myProjects, setMyProjects] = useState<Array<Project>>([]);
    const [favoriteProjects, setFavoriteProjects] = useState<Array<Project>>([]);
    const [currentMouseOverId, setCurrentMouseOverId] = useState<number>(-1);


    const handleFavorite = (projectId: number) => {
        setCurrentMouseOverId(() => {
            if (projectId === currentMouseOverId) {
                return -1;
            } else {
                return projectId
            }
        })
    }

    /* 선택한 프로젝트 찾기 */
    const findProject = async (projectId: number) => {
        const project = await getProject(projectId);
        props.setCurrentProject(() => project);
        props.loadTaskByProjectId(projectId);
    }

    useEffect(() => {
        setMyProjects(() => props.projects?.normal_projects);
        setFavoriteProjects(() => props.projects?.favorite_projects);
    }, [props.projects]);


    const handleIsFavorite = () => {
        console.log("ㅋㅋㅋㅋㅋ");
    }

    useEffect(() => {
        setMyProjects((prev) => {
            if (prev !== undefined) {
                const project = prev.find(z => z.id === props.currentProject.id);
                if (project !== undefined) {
                    project.name = props.currentProject.name;
                    return [...prev];
                }
            }

        });

        setFavoriteProjects((prev) => {
            if (prev !== undefined) {
                const project = prev.find(z => z.id === props.currentProject.id);
                if (project !== undefined) {
                    project.name = props.currentProject.name;
                    return [...prev];
                }
            }
        })
    }, [props.currentProject])

    return (
        <>
            <div className="task-side-menu">
                <div className="task-search-box">
                    <input type="text" className="task-search" placeholder="프로젝트를 찾아보세요." />
                </div>
                <div className="recent-project-list">
                    <p className="side-menu-title">최근</p>
                    <div className="side-menu-project-name">

                    </div>
                </div>

                <div className="favorite-project-list">
                    <p className="side-menu-title">즐겨찾기</p>
                    {
                        favoriteProjects?.map((val: any) => (
                            <div key={`favorite_projects_${val.id}`}
                                className="side-menu-project-name"
                                onClick={() => findProject(val.id)}
                                onMouseEnter={() => handleFavorite(val.id)}
                                onMouseLeave={() => handleFavorite(val.id)}>
                                <div className="col-11">{val.name}</div>
                                {
                                    currentMouseOverId === val.id &&
                                    <img src='/img/task/favorite_active.webp'
                                        style={{ width: '1.19vw', height: '1.19vw' }}
                                        onClick={() => handleIsFavorite()}
                                    />
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="my-project-list">
                    <p className="side-menu-title">내 프로젝트</p>
                    {
                        myProjects?.map((val: any) => (
                            <div key={`my_projects_${val.id}`} className="side-menu-project-name"
                                onClick={() => findProject(val.id)}
                                onMouseEnter={() => handleFavorite(val.id)}
                                onMouseLeave={() => handleFavorite(val.id)}>
                                <div className="col-11">{val.name}</div>
                                {
                                    currentMouseOverId === val.id &&
                                    <img src={val.isFavorite === true ? `/img/task/favorite_active.webp` : `/img/task/favorite.webp`}
                                        style={{ width: '1.19vw', height: '1.19vw' }}
                                        onClick={() => handleIsFavorite()}
                                    />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}