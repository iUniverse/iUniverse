import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CalendarView from "./CalendarView";
import { getProject, loadProject } from "api/project/project";
import Kanban from "./kanban";
import { loadByProjectId } from "api/task/task";

interface ProjectCategory {
    [key: string]: string
}
export default function Task({ }: any) { //태스크 정보를 가지고 올 예정
    const TASK_TYPE = [
        { 'title': 'board', 'name': '보드' },
        { 'title': 'chart', 'name': '표' },
        { 'title': 'calendar', 'name': '캘린더' },
    ] as const;

    const PROJECT_CATEGORY: ProjectCategory = {
        'favorite': '즐겨찾기',
        'my_project': '내 프로젝트',
        'un_known': '알 수 없음'
    }
    
    /* 현재 활성화된 테스크 */
    const [currentTaskContent, setCurrentTaskContent] = useState<any>([]);
    /* 현재 활성화된  프로젝트 */
    const [currentProject, setCurrentProject] = useState<any>();
    const [myProjects, setMyProjects] = useState<any>();
    const [favoriteProjects, setFavoriteProjects] = useState<any>();
    const [projectCategory, setProjectCategory] = useState<string | undefined>();

    const getCurrentProject = async () => {
        const params = new URLSearchParams(location.search);
        setProjectCategory(() => params.get('p_category') === null ? 'un_known' : params.get('p_category')?.toString());
        return await getProject(Number(params.get('iuni_project')));
    }

    const handleIsFavorite = () => {
        console.log("ㅋㅋㅋㅋㅋ");
    }
    /* 테스크 목록 불러오기 */
    const loadTaskByProjectId = async (projectId : number) => {
        console.log(projectId);
        const tasks = await loadByProjectId(projectId);
        setCurrentTaskContent(() => [...tasks]);
    }

    /* 테스크 컨텐츠 불러오기 */
    const loadTaskContent = (type: string, index: number) => {
        setCurrentTaskContent(() => type);
    }

    // const loadMyProject = async () => {
    //     const projects = await loadProject();
    //     console.log(projects);
    // }

    
    useEffect(() => {
        const initProject = async () => {
            const return_value = await getCurrentProject();
            setCurrentProject(() => return_value);
            loadTaskByProjectId(return_value.id);    
        }
        initProject();

        const loadMyProject = async () => {
            const return_value = await loadProject();
            setMyProjects(() => [...return_value.normal_projects]);
            setFavoriteProjects(() => [...return_value.favorite_projects]);
        }

        loadMyProject();
        
    }, [])

    return (
        <>
            <div className="task-container">
                <div className="task-side-menu">
                    <div className="task-search-box">
                        <input type="text" className="task-search" placeholder="프로젝트를 찾아보세요." />
                    </div>
                    <div className="recent-project-list">
                        <p className="side-menu-title">최근</p>
                        <div className="side-menu-project-name">
                            그림그리기 프로젝트
                        </div>
                    </div>
                    <div className="favorite-project-list">
                        <p className="side-menu-title">즐겨찾기</p>
                        {
                            favoriteProjects?.map((val: any) => (
                                <div key={`favorite_projects_${val.id}`} className="side-menu-project-name" onClick={() => loadTaskByProjectId(val.id)}>
                                    <div className="col-11">{val.name}</div>
                                    <img src='/img/task/favorite_active.webp'
                                        style={{ width: '1.19vw', height: '1.19vw' }}
                                        onClick={() => handleIsFavorite()}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-project-list">
                        <p className="side-menu-title">내 프로젝트</p>
                        {
                            myProjects?.map((val: any) => (
                                <div key={`my_projects_${val.id}`} className="side-menu-project-name" onClick={() => loadTaskByProjectId(val.id)}>
                                    <div className="col-11">{val.name}</div>

                                    <img src={val.isFavorite === true ? `/img/task/favorite_active.webp` : `/img/task/favorite.webp`}
                                        style={{ width: '1.19vw', height: '1.19vw' }}
                                        onClick={() => handleIsFavorite()}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="task-view-list">
                    <div className="task-view-header">
                        <div className="active-project-banner">
                            <div className="active-project-bread">
                                프로젝트 > {projectCategory === undefined ? '알 수 없음' : PROJECT_CATEGORY[projectCategory]} > {currentProject?.name}
                            </div>
                            <div className="active-project-description">
                                {currentProject?.name}
                            </div>
                            <div className="active-project-other">
                                {
                                    currentProject?.startDate === null || currentProject?.endDate === null ?
                                        <>
                                            <p className="project-during-date">프로젝트 기간이 설정 안되있어요.</p>
                                            <p className="project-during-date">프로젝트 기간 설정하기</p>
                                        </>
                                        :
                                        <>
                                            <p className="project-during-date">D-13</p>
                                            <p className="ml-1r project-remain-title">프로젝트 기간</p>
                                            <p className="ml-3 project-during-date">2022.10.1</p>
                                            <p className="ml-3 project-during-date">~</p>
                                            <p className="ml-3 project-during-date">2022.11.3</p>
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="task-view-body">
                        <div className="task-view-tab">
                            {
                                TASK_TYPE.map((val, index) => (
                                    <>
                                        <div className={currentTaskContent === val.title ? "task-view-tab-title active" : "task-view-tab-title"}
                                            key={val.title}
                                            onClick={() => loadTaskContent(`${val.title}`, index)}>
                                            {val.name}
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className="task-view-content">
                            <Kanban projectId={currentProject?.id}
                                tasks={currentTaskContent}
                                setCurrentTaskContent={setCurrentTaskContent}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <CalendarView></CalendarView> */}
        </>
    )
}