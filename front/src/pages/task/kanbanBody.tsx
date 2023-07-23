import { useDrop } from "react-dnd";
import KanbanCard, { ItemTypes } from "./kanbanCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Task } from "api/task/task-interface";

interface Props {
    taskStatus: any;
    board: any;
    renderTaskDetail: any
    setProjectBoard :  Dispatch<SetStateAction<any>>
    tasks : Task[];
}

export default function KanbanBody(props: Props) {
    // console.log(props);    
    console.log(props);
    const [hoverBoardId, setHoverBoardId] = useState<number | null | undefined>();
    const [currentBoardTasks, setCurrentBoardTasks] = useState<any[]>();
    const moveKanbanCard = (task: any, index: number) => {
        // props.setProjectBoard((prev : any) => {
        //     prev.taskOrder = [-1, prev.taskOrder];
        //     return prev;
        // });
    }
    
    return (
        <div
            className="kanban-board-body">
            {
                props.tasks?.map((val : any, i: number) => (
                    <div key={`task_${i}`}
                        onMouseOver={() => setHoverBoardId(props.board.id)}
                        onMouseLeave={() => setHoverBoardId(null)}>
                        <KanbanCard
                            taskStatus={props.taskStatus}
                            task={val}
                            board={props.board}
                            hoverBoardId={hoverBoardId}
                            setHoverBoardId={setHoverBoardId}
                            moveKanbanCard={moveKanbanCard}
                            renderTaskDetail={props.renderTaskDetail}
                            index={i}
                        />
                    </div>
                )) 
            }
        </div>
    )
}
