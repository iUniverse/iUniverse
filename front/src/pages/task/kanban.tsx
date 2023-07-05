
import { findBasetypeByName } from "api/baseType/baseType";
import { createSubtype, loadProjectSubtype, removeSubtype } from "api/subtype/subtype";
import { create, updateAllTaskByStatus } from "api/task/task";
import { Project } from "pages/project/interface";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import { createNewBoard, loadBoardByProjectId, removeProjectBoard, updateBoard } from "api/task/board";
import { addBoardTaskMap, loadTaskByBoardId } from "api/task/boardTaskMap";
import TaskDetail from "./TaskDetail";
import * as taskIF from "api/task/task-interface";


interface Props {
    project: Project;
    tasks: taskIF.Task[];
    setTasks: Dispatch<SetStateAction<Array<taskIF.Task>>>
}

export default function Kanban(props: Props) {
    const TASK_DETAIL_VIEW_TYPE: taskIF.TaskDetailViewType = {
        'hide': 'task-detail-view-hide',
        'half': 'task-detail-view-half',
        'full': 'task-detail-view-full'
    }
    
    /* 태스크 상세보기 타입 */
    const [taskDetailType, setTaskDetailType] = useState<string>('hide');
    const handleTaskDetailView = (type: string) => {
        setTaskDetailType(() => TASK_DETAIL_VIEW_TYPE[type])
    }

    /* 현재 활성화된 태스크 */
    const [currentTask, setCurrentTask] = useState<taskIF.Task | undefined>();
    //const [currentBasetypeId, setCurrentBasetypeId] = useState<number>();
    const [taskStatus, setTaskStatus] = useState<taskIF.Subtype[]>([]);
    const [projectBoard, setProjectBoard] = useState<taskIF.Board[]>([]);
    const [boardTask, setBoardTask] = useState<any>({});
    /* 테스크 추가 */
    const addTask = async (boardId: number) => {
        const task = await create(props.project.id, '새로운 태스크', taskStatus!.find(e => e.orderNum === 0 && e.defaultVal === true)!.id);
        //생성후 board-task-map에 추가
        props.setTasks(prev => [task, ...prev]);
        const boardTaskMap = await addBoardTaskMap(boardId, task.id);
        let taskOrder = projectBoard.find(e => e.id === boardId)?.taskOrder;


        const updateBoardResult = await updateBoard({
            'id': boardId,
            'key': 'taskOrder',
            'value': taskOrder = taskOrder ? [task.id, ...taskOrder] : [task.id]
        });

        setBoardTask((prev: any) => {
            let temp = prev[boardId];
            console.log(temp);
            prev[boardId] = [
                {
                    'completionDate' : task.completionDate,
                    'description' : task.description,
                    'dueDate' : task.dueDate,
                    'id' : task.id,
                    'name' : task.name,
                    'projectId' : task.projectId,
                    'score' : task.score,
                    'startDate' : task.startDate,
                    'statusId' : task.statusId,
                    'typeId' : task.typeId
                },
                ...temp];
            
            return {...prev};
        });
    }

    /* 태스크 추가 버튼 handle */
    const addBtnList = useRef<any>([]);
    const handleAddBtn = (type: string, index: number) => {
        addBtnList.current[index].value = type;
        addBtnList.current[index].src = `img/task/add-btn-${type}.webp`;
    }

    const [currentMode, setCurrentMode] = useState<string>();
    const handleCurrentMode = (type: string) => {
        setCurrentMode(() => type);
    }
    /* 태스크 셋팅 버튼 handle */
    const settingBtnList = useRef<any>([]);
    const handleSettingBtn = (type: string, index: number) => {
        if (settingBtnList.current[index].value === 'active' && (type === 'no-hover' || type === 'hover')) {
            return;
        }

        settingBtnList.current[index].value = type;

        if (type === 'hover') {
            type = 'active';
        } else if (type === 'no-hover') {
            type = 'default';
        }
        settingBtnList.current[index].src = `img/task/setting-btn-${type}.webp`;
    }

    /* 태스크 셋팅 드롭다운 */
    const [boardDropdown, setBoardDropdown] = useState<number>(-1);
    const openSettingDropdown = (id: number, index: number) => {
        settingBtnList.current[index].value === 'active' ? handleSettingBtn('default', index) : handleSettingBtn('active', index);
        setBoardDropdown((prev) => prev === id ? -1 : id);
    }

    const [currentBoard, setCurrentBoard] = useState<taskIF.Board | undefined>();
    const renderTaskDetail = (projectBoardId: number, taskId: number) => {

        const temp_currentTask = props.tasks.find((e) => e.id === taskId);
        const temp_currentBoard = projectBoard.find((e) => e.id === projectBoardId);
        console.log(temp_currentBoard);
        if (temp_currentTask !== undefined && temp_currentBoard !== undefined) {
            temp_currentTask.boardId = projectBoardId;
            console.log(temp_currentTask);
            setCurrentTask(() => temp_currentTask);
            setCurrentBoard(() => temp_currentBoard);
            handleTaskDetailView('half');
        }       
    }

    const newBoardName = useRef<any>();
    const createBoard = async (e: any) => {
        if (e.key === 'Enter') {
            const result = await createNewBoard({
                'name': newBoardName.current!.value,
                'projectId': props.project.id,
                'orderNum': projectBoard[projectBoard.length - 1].orderNum + 1,
                'color': '#1120ff',
                'fontColor': '#ffffff',
            })

            // const result = await createSubtype({
            //     'basetypeId': currentBasetypeId!,
            //     'description': newBoardName.current!.value,
            //     'name': newBoardName.current!.value,
            //     'orderNum': taskStatus[taskStatus.length - 1].orderNum + 1,

            //     'defaultVal': false,
            // });

            newBoardName.current.value = '';
            setProjectBoard((prev) => [...prev, result]);
        }
    }

    /* 보드 삭제 */
    const removeBoard = async (id: number, index: number) => {
        // const removeStatus = taskStatus.find(e => e.orderNum === -1)
        // if (removeStatus === undefined) {
        //     return false;
        // }

        // const all_task_status_update_result = await updateAllTaskByStatus(id, removeStatus.id);

        // if (all_task_status_update_result.result === false) {
        //     return false;
        // }

        // const result = await removeSubtype(id);
        // if (result && result.status === 200) {
        //     setTaskStatus((prev) => [...prev.filter(e => e.id !== id)])
        // }
        /* board-task-map 수정(즉 없애는것) */
        const result = await removeProjectBoard(id);
        if (result && result.status === 200) {
            setProjectBoard((prev) => [...prev.filter(e => e.id !== id)]);
        }
    }

    /* 테스크 데이터 저장 */
    const saveTaskData = (type: string, value: any) => {
        console.log(type);
        console.log(value);
    }
    /* 테스크의 정보가 바뀔때 */
    useEffect(() => {
        if (currentTask !== undefined) {
            handleTaskDetailView('half');
        }
    }, [currentTask]);

    const settingBoardTask = (boardIds: number[]) => {
        return new Promise((resolve) => {
            let funcs = [];
            for (const boardId of boardIds) {
                funcs.push(loadTaskByBoardId(boardId));
            }
            Promise.all(funcs).then((result) => {
                resolve(result);
            });
        })
    }

    /* 프로젝트 상태값 불러오기 */
    useEffect(() => {
        /* 프로젝트 상태값 불러오기 */
        const settingTaskStatus = async () => {
            if (props.project?.id !== undefined) {
                const basetype = await findBasetypeByName('태스크 상태', props.project.id);

                if (basetype === 'noData') {
                    return;
                };
                const subtype = await loadProjectSubtype(basetype.id);
                //setCurrentBasetypeId(() => basetype.id);

                setTaskStatus(() => [...subtype]);
                // setTaskStatus(() => {
                //     const normal_status = subtype.filter((e: any) => e.orderNum !== -1);
                //     return [...normal_status];
                // });
            }
        }
        settingTaskStatus()

        const settingBoard = async () => {
            if (props.project?.id !== undefined) {
                const boards = await loadBoardByProjectId(props.project.id);
                setProjectBoard(() => [...boards])
                const boardTasks: any = await settingBoardTask(boards.map((e: any) => e.id));
                console.log(boardTasks);

                boardTasks.map((val: any, i: number) => {
                    setBoardTask((prev: any) => { return { ...val, ...prev } })
                });

            }
        }
        settingBoard()
    }, [props.project]);

    return (
        <div className="kanban-board-view">
            <>
                {
                    projectBoard.filter((e) => e.orderNum !== -1).map((val, index) => (
                        <div className="kanban-board" key={`kanban-board_${val.id}_${index}`}>
                            <div className="kanban-board-header">
                                <div className="kanban-task-category">
                                    {val.name}
                                </div>
                                {
                                    props.tasks.length > 0 &&
                                    <div className="kanban-task-count ml-3">
                                        <p>{boardTask[val.id]?.length}</p>
                                    </div>
                                }
                                <div className="kanban-task-btn-list">
                                    <div className="kanban-task-add-btn"
                                        onMouseEnter={() => handleAddBtn('active', index)}
                                        onMouseLeave={() => handleAddBtn('default', index)}
                                        onClick={() => addTask(val.id)}>
                                        <img
                                            ref={(el) => addBtnList.current[index] = el}
                                            src="img/task/add-btn-default.webp"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    <div className="kanban-task-setting-btn"
                                        onMouseOver={() => handleSettingBtn('hover', index)}
                                        onMouseLeave={() => handleSettingBtn('no-hover', index)}
                                        onClick={() => openSettingDropdown(val.id, index)}>
                                        <img
                                            ref={(el) => settingBtnList.current[index] = el}
                                            src="img/task/setting-btn-default.webp" style={{ width: '100%', height: '100%' }} />
                                        {
                                            boardDropdown === val.id &&
                                            <>
                                                <div className="kanban-setting-dropdown"
                                                    onMouseOver={(e) => e.stopPropagation()}
                                                    onMouseLeave={(e) => e.stopPropagation()}
                                                    onClick={() => removeBoard(val.id, index)}>
                                                    <img
                                                        src="img/task/board-remove-btn-default.webp"
                                                        style={{ width: '28px', height: '28px' }} />
                                                    <p>보드 삭제</p>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="kanban-board-body">
                                {
                                    boardTask[val.id]?.map((task: any, i: number) => (
                                        <div className="kanban-card col-12" key={`task_${task.id}_${index}`} onClick={() => renderTaskDetail(val.id, task.id)}>
                                            <div className="kanban-card-header">
                                                {task.name}
                                            </div>
                                            <div className="kanban-card-body">
                                                <div className="kanban-card-body-content col-12">
                                                    <div dangerouslySetInnerHTML={{__html : task?.description }}></div> 
                                                </div>
                                                <div className="kanban-card-body-status">
                                                    {
                                                        taskStatus?.find((z: any) => z.id === task.statusId)?.name
                                                    }
                                                </div>
                                            </div>
                                            <div className="kanban-card-footer">
                                                프로필 들어감요
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </>

            <div className="kanban-board add">
                <div className="kanban-board-header">
                    <input className="kanban-task-add-category"
                        ref={newBoardName}
                        placeholder="새 보드 이름"
                        onKeyUp={(e) => createBoard(e)}
                    />
                </div>
                <div className="kanban-board-body">

                </div>
            </div>
            {
               currentTask !== undefined &&
               <TaskDetail 
                    taskDetailType={taskDetailType}
                    setTaskDetailType={setTaskDetailType}
                    project={props.project}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                    setCurrentBoard={setCurrentBoard}
                    currentBoard={currentBoard}
                    taskStatus={taskStatus}
                    projectBoard={projectBoard}
                    setBoardTask={setBoardTask}
               />
            }
        </div>
    )
}