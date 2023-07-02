import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import * as taskIF from "api/task/task-interface";
import { Project } from "pages/project/interface";
import { updateTask } from "api/task/task";

interface TaskDetailViewType {
    [key: string]: string
}

interface Props {
    taskDetailType: string;
    setTaskDetailType: Dispatch<SetStateAction<string>>;
    project: Project;
    currentTask: taskIF.Task;
    setCurrentTask: Dispatch<SetStateAction<taskIF.Task | undefined>>;
    currentBoard: taskIF.Board | undefined;
    taskStatus: taskIF.Subtype[];
    projectBoard: taskIF.Board[];
    setBoardTask: Dispatch<SetStateAction<any>>
}

export default function TaskDetail(props: Props) {
    console.log(props.currentBoard);
    const [currentMode, setCurrentMode] = useState<string>();
    const handleCurrentMode = (mode: string) => {
        setCurrentMode(() => mode);
    }
    const [currentTaskStatus, setCurrentTaskStatus] = useState<taskIF.Subtype>();

    
    /* detail 기본 세팅값 */
    //const [taskDetailType, setTaskDetailType] = useState<string>('hide');
    const TASK_DETAIL_VIEW_TYPE: TaskDetailViewType = {
        'hide': 'task-detail-view-hide',
        'half': 'task-detail-view-half',
        'full': 'task-detail-view-full'
    }

    /* editor 불러오기 */
    const Editor = dynamic(() => import("../task/editor"), { ssr: false });

    const [editPosition, setEditPosition] = useState<string>();
    const editVal = useRef<any>();

    /* ui에 표현되는 정보 변경 */
    const changeTaskContent = (type: string, val: any) => {
        if (type === 'name') {
            props.setCurrentTask((prev: any) => {
                return { ...prev, 'name': val }
            })
        }

        props.setBoardTask((prev: any) => {
            const tasks = prev[props.currentBoard!.id];
            const update_task = tasks.find((e: any) => e.id === props.currentTask.id);
            update_task[type] = val;
            return { ...prev }
        });
    }

    const update = async (type: string) => {
        const result = await updateTask({
            'id': props.currentTask.id,
            'key': type,
            'value': editVal.current.value
        });

        if (result.result === true) {
            setEditPosition(() => 'none');
            changeTaskContent(type, editVal.current.value);
        }
    }

    return (
        <div className={props.taskDetailType}>
            <div className="task-detail-view-bread">
                <div className="task-detail-expand-btn" onClick={() => props.setTaskDetailType(TASK_DETAIL_VIEW_TYPE['hide'])}>
                </div>

                <div className="task-bread-name">
                    프로젝트
                </div>
                <div>
                    <img src="/img/task/task-bread.webp" style={{ width: '18px', height: '18px' }} />
                </div>

                <div className="task-bread-name">
                    내 프로젝트
                </div>

                <div>
                    <img src="/img/task/task-bread.webp" style={{ width: '18px', height: '18px' }} />
                </div>

                <div className="task-bread-name">
                    {props.project.name}
                </div>
            </div>

            <div className="task-detail-view-container">
                <div className="task-detail-view-header">
                    <div className="task-detail-view-title" onClick={() => setEditPosition(() => 'name')}>
                        {
                            editPosition === 'name' ?
                                <input type="text"
                                    className="active-task-title"
                                    defaultValue={props.currentTask.name}
                                    ref={(el) => editVal.current = el}
                                    onBlur={() => update('name')} /> :
                                props.currentTask.name
                        }
                    </div>

                    <div className="task-detail-view-during-date">

                        {
                            props.currentTask.startDate === null || props.currentTask.completionDate === null ?
                                <div className="during-date-add-btn">
                                    <img src="img/task/date-add-btn.webp" style={{ width: '18px', height: '18px' }} />
                                    <p>일정추가</p>
                                </div> :
                                <>
                                    <div className="during-date-badge">D-13</div>
                                    <div className="during-date-title">태스크 기간</div>
                                    <div className="during-date-start-date">2022.10.01</div>
                                    <div className="during-date-connection">~</div>
                                    <div className="during-date-end-date">2022.10.03</div>
                                </>
                        }

                    </div>

                    <div className="task-detail-view-writor">
                        <div className="task-creator">
                            <div className="task-writor-title">생성자</div>
                            <div className="task-writor">
                                <div className="task-writor-iuni-cat"></div>
                                김태호
                            </div>
                        </div>

                        <div className="task-gap">
                            <img src="/img/task/division-line.webp" style={{ width: '18px', height: '18px', marginTop: '3px' }} />
                        </div>

                        <div className="task-editor">
                            <div className="task-writor-title">편집자</div>
                            <div className="task-writor">
                                <div className="task-writor-iuni-cat"></div>
                                김망고
                            </div>
                            <div className="task-latest-update-date">2022.11.03 최종편집</div>
                        </div>
                    </div>

                    <div className="task-detail-status">
                        <div className="task-detail-status-title" onClick={() => setEditPosition(() => 'statusId')}>
                            <p>상태</p>
                            {
                                editPosition === 'statusId' ?
                                    <div className="task-status-select">
                                        <div className="option-selected">
                                            <p style={{backgroundColor : props.taskStatus.find((e) => e.id === props.currentTask.statusId)?.color}}>
                                                {
                                                    props.taskStatus.find((e) => e.id === props.currentTask.statusId)?.name
                                                }
                                            </p>
                                        </div>
                                        <div className="option-title">
                                            보드 {props.taskStatus.filter((e) => e.id !== props.currentTask.statusId && e.orderNum !== -1)?.length}
                                        </div>
                                        <>
                                            {
                                                props.taskStatus.filter((e) => e.id !== props.currentTask.statusId && e.orderNum !== -1).map((val) => (
                                                    <div className="status-option" key={`select_status_${val.id}`}>
                                                        <p className="status-badge">
                                                            {val.name}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </>

                                    </div> :
                                    <div className="task-status-badge">
                                        {
                                            props.taskStatus?.find((z: any) => z.id === props.currentTask.statusId)?.name
                                        }
                                    </div>
                            }
                        </div>

                        <div className="task-detail-status-title">
                            <p>보드</p>
                            <div className="task-status-badge">
                                {
                                    props.projectBoard?.find((z: any) => z.id === props.currentTask.boardId)?.name
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="task-detail-view-body" onClick={() => handleCurrentMode('edit')}>
                    {
                        currentMode !== 'edit' ?
                            props.currentTask.description === null ? '내용을 입력 해주세요' :
                                <div dangerouslySetInnerHTML={{ __html: props.currentTask.description }}></div>
                            : <Editor
                                taskId={props.currentTask.id}
                                boardId={props.currentBoard!.id}
                                setCurrentTask={props.setCurrentTask}
                                setBoardTask={props.setBoardTask}
                                description={props.currentTask!.description} />
                    }
                </div>
            </div>
        </div>
    )
}