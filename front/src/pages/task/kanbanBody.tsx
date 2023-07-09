import { useDrop } from "react-dnd";
import KanbanCard, { ItemTypes } from "./kanbanCard";
import { useState } from "react";

interface Props {
    boardTask: any;
    taskStatus: any;
    board: any;
    renderTaskDetail: any
}

export default function KanbanBody(props: Props) {
    const [dragId, setDragId] = useState<number>(-1);
    const moveKanbanCard = (boardTask: any, board: any) => {
        console.log(boardTask);
        console.log(board);
    }

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOARDCARD,
        canDrop: () => false,
        hover(id) {
            console.log(id);
        }
    }), []);

    return (
        <div
            className="kanban-board-body">
            {
                props.boardTask[props.board.id]?.map((task: any, i: number) => (
                    <div ref={drop} key={`task_${task.id}_${i}`} >
                        <KanbanCard
                            taskStatus={props.taskStatus}
                            task={task}
                            board={props.board}
                            setDragId={setDragId}
                            renderTaskDetail={props.renderTaskDetail}
                            index={i}
                        />
                    </div>

                ))
            }
        </div>
    )
}
