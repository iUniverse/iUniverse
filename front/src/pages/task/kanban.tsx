import { findBasetypeByName } from "api/baseType/baseType";
import { createSubtype, loadProjectSubtype, removeSubtype } from "api/subtype/subtype";
import { create } from "api/task/task";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { StringLiteral } from "typescript";

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

interface Subtype {
    id: number;
    name: string;
    description: string;
    color: string;
    fontColor: string;
    createDate: Date;
    basetypeId: number;
    orderNum: number;
}

interface Props {
    projectId: number;
    tasks: Task[];
    setCurrentTaskContent: Dispatch<SetStateAction<Array<Task>>>
}

export default function Kanban(props: Props) {
    const [currentBasetypeId, setCurrentBasetypeId] = useState<number>();
    const addTask = async (statusId: number) => {
        const result = await create(props.projectId, '새로운 태스크', statusId);
        props.setCurrentTaskContent(prev => [result, ...prev]);
    }
    /* 태스크 추가 버튼 handle */
    const addBtnList = useRef<any>([]);
    const handleAddBtn = (type: string, index: number) => {
        addBtnList.current[index].value = type;
        addBtnList.current[index].src = `img/task/add-btn-${type}.webp`;
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

    const [taskStatus, setTaskStatus] = useState<Subtype[]>([]);
    const [currentTaskId, setCurrentTaskId] = useState<number>();

    const renderTaskDetail = (taskId: number) => {
        setCurrentTaskId(taskId);
    }

    const newBoardName = useRef<any>();
    const createBoard = async (e) => {
        if (e.key === 'Enter') {
            const result = await createSubtype({
                'basetypeId': currentBasetypeId!,
                'description': newBoardName.current!.value,
                'name': newBoardName.current!.value,
                'orderNum': taskStatus[taskStatus.length - 1].orderNum + 1,
                'color': '#1120ff',
                'fontColor': '#ffffff'
            });
            newBoardName.current.value = '';
            setTaskStatus((prev) => [...prev, result]);
        }
    }
    /* 보드 삭제 */
    const removeBoard = async (id: number, index: number) => {
        const result = await removeSubtype(id);
        if (result && result.status === 200) {
            setTaskStatus((prev) => [...prev.filter(e => e.id !== id)])
        }
    }

    useEffect(() => {
        const settingTaskStatus = async () => {
            console.log(props.projectId);
            if (props.projectId !== undefined) {
                const basetype = await findBasetypeByName('태스크 상태', props.projectId);

                if (basetype === 'noData') {
                    return;
                }
                ;
                const subtype = await loadProjectSubtype(basetype.id);
                setCurrentBasetypeId(() => basetype.id);
                setTaskStatus(() => [...subtype]);
            }
        }
        settingTaskStatus()
    }, [props.projectId]);

    return (
        <div className="kanban-board-view">
            <>
                {
                    taskStatus.map((status, index) => (
                        <div className="kanban-board" key={`kanban-board_${status.id}_${index}`}>
                            <div className="kanban-board-header">
                                <div className="kanban-task-category">
                                    {status.name}
                                </div>
                                {
                                    props.tasks.length > 0 &&
                                    <div className="kanban-task-count ml-3">
                                        <p>{props.tasks?.filter(z => z.statusId === status.id).length}</p>
                                    </div>
                                }
                                <div className="kanban-task-btn-list">
                                    <div className="kanban-task-add-btn"
                                        onMouseEnter={() => handleAddBtn('active', index)}
                                        onMouseLeave={() => handleAddBtn('default', index)}
                                        onClick={() => addTask(status.id)}>
                                        <img
                                            ref={(el) => addBtnList.current[index] = el}
                                            src="img/task/add-btn-default.webp"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div>

                                    <div className="kanban-task-setting-btn"
                                        onMouseOver={() => handleSettingBtn('hover', index)}
                                        onMouseLeave={() => handleSettingBtn('no-hover', index)}
                                        onClick={() => openSettingDropdown(status.id, index)}>
                                        <img
                                            ref={(el) => settingBtnList.current[index] = el}
                                            src="img/task/setting-btn-default.webp" style={{ width: '100%', height: '100%' }} />
                                        {
                                            boardDropdown === status.id &&
                                            <>
                                                <div className="kanban-setting-dropdown"
                                                    onMouseOver={(e) => e.stopPropagation()}
                                                    onMouseLeave={(e) => e.stopPropagation()}
                                                    onClick={() => removeBoard(status.id, index)}>
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
                                    props.tasks?.filter(z => z.statusId === status.id).map((val, index) => (
                                        <div className="kanban-card col-12" key={`task_${val.id}_${index}`} onClick={() => renderTaskDetail(val.id)}>
                                            <div className="kanban-card-header">
                                                {val.name}
                                            </div>
                                            <div className="kanban-card-body">
                                                <div className="kanban-card-body-content col-12">
                                                    {val.description}
                                                </div>
                                                <div className="kanban-card-body-status">
                                                    {status.name}
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
                        onKeyUp={createBoard}
                    //onBlur={() => createBoard()}
                    />
                </div>
                <div className="kanban-board-body">

                </div>
            </div>
        </div>
    )
}