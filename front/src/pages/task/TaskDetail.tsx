import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import * as taskIF from "api/task/task-interface";
import { Project } from "pages/project/interface";
import { updateTask } from "api/task/task";
import { updateBoardTaskMap } from "api/task/boardTaskMap";
import { getBoardById, updateBoard } from "api/task/board";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

interface TaskDetailViewType {
    [key: string]: string
}

interface Props {
    taskDetailType: string;
    setTaskDetailType: Dispatch<SetStateAction<string>>;
    project: Project;
    currentTask: taskIF.Task;
    setCurrentTask: Dispatch<SetStateAction<taskIF.Task | undefined>>;
    setCurrentBoard : Dispatch<SetStateAction<any>>
    setProjectBoard : Dispatch<SetStateAction<any>>
    setTasks : Dispatch<SetStateAction<any>>
    currentBoard: taskIF.Board | undefined;
    taskStatus: taskIF.Subtype[];
    updateCurrentTask : any;
    projectBoard: taskIF.Board[] | undefined;
}

interface DuringDateInfo {
    [key:string] : string
}

export default function TaskDetail(props: Props) {
    const [openDuringDate, setOpenDuringDate] = useState<boolean>(false)
    const [duringDateInfo, setDuringDateInfo] = useState<DuringDateInfo>()
    /* detail 기본 세팅값 */
    //const [taskDetailType, setTaskDetailType] = useState<string>('hide');
    const TASK_DETAIL_VIEW_TYPE: TaskDetailViewType = {
        'hide': 'task-detail-view-hide',
        'half': 'task-detail-view-half',
        'full': 'task-detail-view-full'
    }

    /* editor 불러오기 */
    const Editor = dynamic(() => import("../task/editor"), { ssr: false });

    const [editPosition, setEditPosition] = useState<string>('none');
    const editVal = useRef<any>();
    const changeStatusId = (statusId: number) => {
        props.setTasks((prev : any) => {
            const data = prev[props.currentTask.id];
            data.statusId = statusId;
            return { ...prev };
        })
  
    }

    const changeName = (name : string) => {
        props.setTasks((prev : any) => {
            const data = prev[props.currentTask.id];
            data.name = name;
            return { ...prev };
        })
    }

    /* ui에 표현되는 정보 변경 */
    const changeTaskContent = (type: string, val: any) => {
        if (type === 'name') {
            props.setCurrentTask((prev: any) => {
                return { ...prev, 'name': val }
            });
            changeName(val);
        } else if (type === 'statusId') {
            props.setCurrentTask((prev: any) => {
                return { ...prev, 'statusId': val }
            });
            changeStatusId(val);
        } else if(type === 'startDate'){
            props.setCurrentTask((prev: any) => {
                return { ...prev, 'startDate' : val }
            });
        } else if(type === 'endDate') {
            props.setCurrentTask((prev : any) => {
                return { ...prev, 'completionDate' : val}
            })
        }

        
        // props.setBoardTask((prev: any) => {
        //     const tasks = prev[props.currentBoard!.id];
        //     const update_task = tasks.find((e: any) => e.id === props.currentTask.id);
        //     console.log(update_task);
        //     update_task[type] = val;
            
        //     return { ...prev }
        // });
    }

    const checkKey = (e: any, type: string, value: string) => {
        if (e.key === 'Enter') {
            update(type, value);
        }
    }

    /* 기존 보드의 taskOrder 업데이트(해당 보드 아이디 삭제) */
    const removeTaskOrderUpdate = async (currentBoard : any, currentTask : any, updateBoardId : number) => {
        const remove_update_task_order = props.currentBoard?.taskOrder?.filter(e => e !== props.currentTask.id);
        const remove_update_board_result = await updateBoard({
            'id' : props.currentBoard.id,
            'key' : 'taskOrder',
            'value' : remove_update_task_order
        });
        return remove_update_board_result;
    }

    /* 기존 보드의 taskOrder 업데이트(해당 보드 아이디 추가) */
    const addTaskOrderUpdate = async (currentBoard : any, currentTask : any, updateBoardId : number) => {
        const add_update_board = await getBoardById(updateBoardId);
        const add_update_task_order = [props.currentTask.id, ...add_update_board.taskOrder];
        const add_update_board_result = await updateBoard({
            'id' : add_update_board.id,
            'key' : 'taskOrder',
            'value' : add_update_task_order
        });

        return add_update_board_result;
    }

    /* BoardBadge 업데이트 */
    const changeBoardBadge = (boardId : number) => {
        const updateBoard = props.projectBoard?.find((e) => e.id === boardId);
        props.setCurrentBoard(() => updateBoard);
    }

    /* Card에 표현된 상태값 변경 */
    const changeCardStatus = () => {

    }

    /* Card 위치 업데이트 */
    const changeCardPosition = (boardId : number) => {
        props.setProjectBoard((prev : any) => {
            let old_data = prev.find((e : any) => e.id === props.currentBoard?.id);
            old_data.taskOrder = old_data.taskOrder.filter((e : any) => e !== props.currentTask.id);

            let new_data = prev.find((e : any) => e.id === boardId);
            new_data.taskOrder.push(props.currentTask.id);
            
            return [...prev]
        });

    }

    /* 해당부분 수정 해야됨 */
    const updateBoardId = async (updateBoardId : number) => {
        return new Promise((resolve) => {        
            Promise.all([
                updateBoardTaskMap(props.currentBoard!.id, props.currentTask.id, updateBoardId),
                removeTaskOrderUpdate(props.currentBoard, props.currentTask, updateBoardId),
                addTaskOrderUpdate(props.currentBoard, props.currentTask, updateBoardId)
            ]).then((result) => {
                if(result[0] && result[1] && result[2]){
                    changeBoardBadge(updateBoardId);
                    changeCardPosition(updateBoardId);
                    resolve(result)
                }
            })
        })
    }

    const makePrettyDay = (date : Date) => {
        let year = date.getFullYear();
        let month = ("0" + (1 + date.getMonth())).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return year + "." + month + "." + day;
    }

    const updateDuringDate = (dateList : Array<Date>) => {
        return new Promise((resolve) => {
            try{
                update('startDate', dateList[0]);
                update('completionDate', dateList[1]);
                resolve(true);
            }
            catch(e){
                resolve(false);
            }
        });
    }

    /* 업데이트 */
    const update = async (type: string, value: any) => {
        const result = await updateTask({
            'id': props.currentTask.id,
            'key': type,
            'value': value
        });
        
        if (result.result === true) {
            setEditPosition(() => 'none');
            changeTaskContent(type, value);
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

            <div className="task-detail-view-container" onClick={() => editPosition !== 'none' && editPosition !== 'description' && setEditPosition(() => 'none')}>
                <div className="task-detail-view-header">
                    <div className="task-detail-view-title" onClick={() => setEditPosition(() => 'name')}>
                        {
                            editPosition === 'name' ?
                                <input type="text"
                                    className="active-task-title"
                                    defaultValue={props.currentTask.name}
                                    ref={(el) => editVal.current = el}
                                    onKeyUp={(e) => checkKey(e, 'name', editVal.current.value)}
                                    onBlur={() => update('name', editVal.current.value)}
                                    autoFocus
                                    onFocus={(e) => e.target.select()} /> :
                                props.currentTask.name
                        }
                    </div>

                    <div className="task-detail-view-during-date">
                        {
                            duringDateInfo === undefined ?
                                <div className="during-date-add-btn" onClick={() => setOpenDuringDate((prev) => !prev)}>
                                    <img src="img/task/date-add-btn.webp" style={{ width: '18px', height: '18px' }} />
                                    <p>일정추가</p>
                                </div> :
                                <>
                                    <div className="during-date-badge">{duringDateInfo.d_day}</div>
                                    <div className="during-date-title">태스크 기간</div>
                                    <div className="during-date-start-date">{duringDateInfo.start_date}</div>
                                    <div className="during-date-connection">~</div>
                                    <div className="during-date-end-date">{duringDateInfo.completion_date}</div>
                                </>
                        }
                        {
                            openDuringDate === true &&
                            <div className="duringdate-container">
                                <p className="react-calendar-title">일정 설정하기</p>
                                <Calendar 
                                    selectRange={true}
                                    onChange={(data : any) => {
                                        updateDuringDate(data).then(() => {
                                            setDuringDateInfo(() => {
                                                let temp_day = data[1]-data[0];
                                                let result = {
                                                    'd_day' : `D-${String(Math.floor(temp_day / (1000*60*60*24)))}`,
                                                    'start_date' : makePrettyDay(data[0]),
                                                    'completion_date' : makePrettyDay(data[1])
                                                };
                                                return { ...result }
                                            });
    
                                            setOpenDuringDate(false);
                                        });
                                    }}
                                />
                            </div>
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
                                            <p style={{
                                                backgroundColor: props.taskStatus.find((e) => e.id === props.currentTask.statusId)?.color,
                                                color: props.taskStatus.find((e) => e.id === props.currentTask.statusId)?.fontColor
                                            }}>
                                                {
                                                    props.taskStatus.find((e) => e.id === props.currentTask.statusId)?.name
                                                }
                                            </p>
                                        </div>
                                        <div className="option-title">
                                            상태 <span>{props.taskStatus.filter((e) => e.id !== props.currentTask.statusId && e.orderNum !== -1)?.length}</span>
                                        </div>
                                        <>
                                            {
                                                props.taskStatus.filter((e) => e.id !== props.currentTask.statusId && e.orderNum !== -1).map((val) => (
                                                    <div className="status-option"
                                                        key={`select_status_${val.id}`}
                                                        onClick={() => update('statusId', val.id)}>
                                                        <p className="status-badge" style={{ backgroundColor: val.color, color: val.fontColor }}>
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

                        <div className="task-detail-status-title" onClick={() => setEditPosition(() => 'boardId')}>
                            <p>보드</p>
                            {
                                editPosition === 'boardId' ?
                                    <div className="task-status-select">
                                        <div className="option-selected">
                                            <p style={{
                                                backgroundColor: props.currentBoard?.color,
                                                color: props.currentBoard?.fontColor
                                            }}>
                                                {props.currentBoard?.name}
                                            </p>
                                        </div>
                                        <div className="option-title">
                                            보드 <span>{props.projectBoard?.filter((e) => e.id !== props.currentBoard!.id && e.orderNum !== -1)?.length}</span>
                                        </div>
                                        <>
                                            {
                                                props.projectBoard?.filter((e) => e.id !== props.currentBoard!.id && e.orderNum !== -1).map((val) => (
                                                    <div className="status-option"
                                                        key={`select_status_${val.id}`}
                                                        onClick={() => updateBoardId(val.id)}>
                                                        <p className="status-badge" style={{ backgroundColor: val.color, color: val.fontColor }}>
                                                            {val.name}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </>

                                    </div> :
                                    <div className="task-status-badge">
                                        {
                                            //props.projectBoard?.find((z: any) => z.id === props.currentTask.boardId)?.name
                                            props.currentBoard?.name
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="task-detail-view-body" onClick={() => setEditPosition(() => 'description')}>
                    {
                        editPosition === 'description' ?
                            <Editor
                                taskId={props.currentTask.id}
                                boardId={props.currentBoard!.id}
                                updateCurrentTask={props.updateCurrentTask}
                                setCurrentTask={props.setCurrentTask}
                                setEditPosition={setEditPosition}
                                description={props.currentTask!.description} />
                            : props.currentTask.description === null ? '내용을 입력 해주세요' :
                                <div dangerouslySetInnerHTML={{ __html: props.currentTask.description }}></div>
                    }
                </div>
            </div>
        </div>
    )
}