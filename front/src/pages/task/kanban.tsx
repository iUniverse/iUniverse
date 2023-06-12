import { create } from "api/task/task";
import { Dispatch, SetStateAction } from "react";

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
    projectId: number;
    tasks: Task[];
    setCurrentTaskContent:Dispatch<SetStateAction<Task[]>>
}

export default function Kanban(props: Props) {
    const addTask = async () => {
        const result = await create(props.projectId, '새로운 태스크');
        props.setCurrentTaskContent(prev => [ result, ...prev]);
    }

    return (
        <div className="kanban-board-view">
            <div className="kanban-board my-duty">
                <div className="kanban-board-header">
                    <div className="kanban-task-category">
                        할 일
                    </div>
                    <div className="kanban-task-count ml-3">
                        {
                            props.tasks.length > 0 &&
                            <p>{props.tasks.length}</p>
                        }
                    </div>

                    <div className="kanban-task-add-btn" onClick={() => addTask()}>
                        <img src="img/task/add-btn-default.webp" style={{ width: '1.25vw', height: '1.25vw' }} />
                    </div>
                </div>
                <div className="kanban-board-body">
                    {
                        props.tasks.map((val, index) => (
                            <>
                                <div className="kanban-card col-12" key={`task_${val.id}`}>
                                    <div className="kanban-card-header">
                                        {val.name}
                                    </div>
                                    <div className="kanban-card-body">
                                        <div className="kanban-card-body-content col-12">
                                            {val.description}
                                        </div>
                                        <div className="kanban-card-body-status">
                                            {val.statusId}
                                        </div>
                                    </div>
                                    <div className="kanban-card-footer">
                                        프로필 들어감요
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

            <div className="kanban-board inprogress">

            </div>

            <div className="kanban-board complete">

            </div>



        </div>
    )
}