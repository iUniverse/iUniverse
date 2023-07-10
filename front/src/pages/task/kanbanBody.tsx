import { useDrop } from "react-dnd";
import KanbanCard, { ItemTypes } from "./kanbanCard";
import { useEffect, useState } from "react";

interface Props {
    boardTask: any;
    taskStatus: any;
    board: any;
    renderTaskDetail: any
}

export default function KanbanBody(props: Props) {
    console.log(props);    

    const [hoverBoardId, setHoverBoardId] = useState<number | null | undefined>();
    const [currentBoardTasks, setCurrentBoardTasks] = useState<any[]>();
    const moveKanbanCard = (boardId: number, taskId: number) => {

    }

    //console.log(currentBoardTasks);
    useEffect(() => {
        setCurrentBoardTasks((prev: any) => {
            if (props.boardTask[props.board.id] !== undefined) {
                return [...props.boardTask[props.board.id]];
            }
        });
    }, [props.boardTask, props.board]);

    
    return (
        <div
            className="kanban-board-body">
            {
                props.board?.taskOrder?.map((val: number, i: number) => (
                    <div key={`task_${i}`}
                        onMouseEnter={() => setHoverBoardId(props.board.id)}
                        onMouseLeave={() => setHoverBoardId(null)}>
                        <KanbanCard
                            taskStatus={props.taskStatus}
                            task={currentBoardTasks?.find(z => z.id === val)}
                            board={props.board}
                            hoverBoardId={hoverBoardId}
                            renderTaskDetail={props.renderTaskDetail}
                            index={i}
                        />
                    </div>
                ))



            }
        </div>
    )
}
