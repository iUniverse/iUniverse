import { findBasetypeByName } from "api/baseType/baseType";
import { loadProjectSubtype } from "api/subtype/subtype";
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

    const addTask = async (statusId : number) => {
        const result = await create(props.projectId, '새로운 태스크', statusId);
        props.setCurrentTaskContent(prev => [result, ...prev]);
    }
    const addBtnList = useRef<any>([]);
    const handleAddBtn = (type: string) => {
        addBtnList.current[0].value = type;
    }
    const [taskStatus, setTaskStatus] = useState<Subtype[]>([]);

    useEffect(() => {
        const settingTaskStatus = async () => {
            console.log(props.projectId);
            if (props.projectId !== undefined) {
                const basetype = await findBasetypeByName('태스크 상태', props.projectId);
                console.log(basetype)
                if (basetype === 'noData') {
                    return;
                }
                ;
                const subtype = await loadProjectSubtype(basetype.id);
                console.log(subtype);
                setTaskStatus(() => [...subtype]);
            }

            //const subtype = await loadProjectSubtype(basetype.id);
            //setTaskStatus(() => [...subtype]);
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
                                <div className="kanban-task-add-btn"
                                    onMouseEnter={() => handleAddBtn('hover')}
                                    onMouseLeave={() => handleAddBtn('default')}
                                    ref={(el) => addBtnList.current[0] = el}
                                    onClick={() => addTask(status.id)}>
                                    <img src="img/task/add-btn-default.webp" style={{ width: '1.25vw', height: '1.25vw' }} />
                                </div>
                            </div>
                            <div className="kanban-board-body">
                                {
                                    props.tasks?.filter(z => z.statusId === status.id).map((val, index) => (
                                        <div className="kanban-card col-12" key={`task_${val.id}_${index}`}>
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
        </div>
    )
}