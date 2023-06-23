import { useEffect, useLayoutEffect, useRef, useState, MouseEvent } from "react";
import CalendarView from "./CalendarView";
import { getProject, loadProject, updateProject } from "api/project/project";
import Kanban from "./kanban";
import { loadByProjectId } from "api/task/task";
import SideMenu from "./sideMenu";
import ProjectDetail from "./projectDetail";
import Setting from "./setting";
import { initBaseTypeCheck } from "api/baseType/baseType";

interface ProjectCategory {
    [key: string]: string
}
interface TaskTypePage {
    [key: string]: JSX.Element
}

export default function Task({ }: any) { //태스크 정보를 가지고 올 예정
    const PROJECT_CATEGORY: ProjectCategory = {
        'favorite': '즐겨찾기',
        'my_project': '내 프로젝트',
        'un_known': '알 수 없음'
    }

    /* 현재 활성화된 테스크 */
    const [currentTaskContent, setCurrentTaskContent] = useState<any>([]);
    /* 현재 활성화된  프로젝트 */
    const [currentProject, setCurrentProject] = useState<any>();
    const [projects, setProjects] = useState<any>();
    const [projectCategory, setProjectCategory] = useState<string | undefined>();

    const [editProjectTitle, setEditProjectTitle] = useState<boolean>(false);
    const [currentTaskType, setCurrentTaskType] = useState<string>('board');

    const TASK_TYPE = [
        { 'title': 'board', 'name': '보드' },
        { 'title': 'chart', 'name': '표' },
        { 'title': 'calendar', 'name': '캘린더' },
        { 'title': 'project', 'name': '프로젝트' },
        { 'title': 'setting', 'name': '설정' },
        { 'title': 'trash', 'name' : '휴지통'}
    ] as const

    const TASK_TYPE_PAGE: TaskTypePage = {
        'board': <Kanban 
            projectId={currentProject?.id}
            tasks={currentTaskContent}
            setCurrentTaskContent={setCurrentTaskContent} />,
        'chart': <></>,
        'calendar': <CalendarView />,
        'project': <ProjectDetail />,
        'setting': <Setting projectId={currentProject?.id} />
    }

    const getCurrentProject = async () => {
        const params = new URLSearchParams(location.search);
        setProjectCategory(() => params.get('p_category') === null ? 'un_known' : params.get('p_category')?.toString());
        return await getProject(Number(params.get('iuni_project')));
    }
    const loadPage = (title: string) => {
        setCurrentTaskType(() => title)
    }
    const handleProjectTitle = (e: MouseEvent<HTMLDivElement>, type: boolean | undefined) => {
        e.stopPropagation();
        type === undefined ? setEditProjectTitle(() => !editProjectTitle) : setEditProjectTitle(() => type);
    }

    const projectTitle = useRef<any>();
    /* 테스크 컨텐츠 불러오기 */
    const loadTaskContent = (type: string, index: number) => {
        setCurrentTaskContent(() => type);
    }

    /* 테스크 목록 불러오기 */
    const loadTaskByProjectId = async (projectId: number) => {
        const tasks = await loadByProjectId(projectId);
        setCurrentTaskContent(() => [...tasks]);
    }

    const updateProjectTitle = async () => {
        if (currentProject === undefined) return;

        const editTitle: string = projectTitle.current.value;
        const result = await updateProject({
            'id': currentProject.id,
            'key': 'name',
            'value': editTitle
        });
        if (result.result === true) {
            setCurrentProject((prev: any) => {
                return { ...prev, 'name': editTitle };
            });
        }

    }

    const handlerTest = (e: any) => {
        if (e.key === 'Enter') {
            updateProjectTitle();
            setEditProjectTitle(() => false);
        }
    }
    useEffect(() => {
        const initProject = async () => {
            const return_value = await getCurrentProject();
            setCurrentProject(() => return_value);
            loadTaskByProjectId(return_value.id);            
        }
        initProject();

        const loadMyProject = async () => {
            const return_value = await loadProject();
            setProjects(() => return_value);
        }
        loadMyProject();

        
    }, [])

    return (
        <>
            <div className="task-container">
                <SideMenu
                    projects={projects}
                    loadTaskByProjectId={loadTaskByProjectId}
                    setCurrentProject={setCurrentProject}
                    currentProject={currentProject}
                />

                <div className="task-view-list">
                    <div className="task-view-header row"
                        onClick={(e: MouseEvent<HTMLDivElement>) => handleProjectTitle(e, false)}>
                        <div className="col-12">
                            <div className="active-project-banner">
                                <div className="active-project-bread">
                                프로젝트 > {projectCategory === undefined ? '알 수 없음' : PROJECT_CATEGORY[projectCategory]} > {currentProject?.name}
                                </div>
                                {
                                    editProjectTitle === false ?
                                        <div className="active-project-title row" onClick={(e: MouseEvent<HTMLDivElement>) => handleProjectTitle(e, true)}>
                                            <div className="col-12">
                                                {currentProject?.name}
                                            </div>
                                        </div>
                                        :
                                        <textarea
                                            className="active-project-title"
                                            ref={(el) => projectTitle.current = el}
                                            onClick={(e: any) => handleProjectTitle(e, true)}
                                            defaultValue={currentProject?.name}
                                            onKeyUp={handlerTest}></textarea>
                                }
                                <div className="active-project-member">
                                    <div className="project-member-add">
                                        <img src='/img/task/project-member-add.webp' style={{ width: '18px', height: '18px' }} />
                                        멤버추가
                                    </div>
                                </div>
                                <div className="active-project-other">
                                    {
                                        currentProject?.startDate === null || currentProject?.endDate === null ?
                                            <>
                                                <div className="add-project-date">
                                                    <img src='/img/task/project-date-add.webp' style={{ width: '18px', height: '18px' }} />
                                                    <p style={{ marginTop: '3px' }}>프로젝트 기간 설정</p>
                                                </div>
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
                    </div>

                    <div className="task-view-body">
                        <div className="task-view-tab">
                            {
                                TASK_TYPE.map((val, index) => (
                                    <div className={currentTaskContent === val.title ? "task-view-tab-title active" : "task-view-tab-title"}
                                        key={`task_Type_${val.title}_${index}`}
                                        onClick={() => loadPage(`${val.title}`)}
                                    >
                                        {val.name}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="task-view-content">
                            {
                                TASK_TYPE_PAGE[currentTaskType]
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <CalendarView></CalendarView> */}
        </>
    )
}