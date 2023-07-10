import { useDrop } from "react-dnd";
import KanbanCard, { ItemTypes } from "./kanbanCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    boardTask: any;
    taskStatus: any;
    board: any;
    renderTaskDetail: any
    setProjectBoard :  Dispatch<SetStateAction<any>>
}

export default function KanbanBody(props: Props) {
    // console.log(props);    

    const [hoverBoardId, setHoverBoardId] = useState<number | null | undefined>();
    const [currentBoardTasks, setCurrentBoardTasks] = useState<any[]>();
    const moveKanbanCard = (task: any, index: number) => {
        // props.setProjectBoard((prev : any) => {
        //     prev.taskOrder = [-1, prev.taskOrder];
        //     return prev;
        // });
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
                        onMouseOver={() => setHoverBoardId(props.board.id)}
                        onMouseLeave={() => setHoverBoardId(null)}>
                        <KanbanCard
                            taskStatus={props.taskStatus}
                            task={currentBoardTasks?.find(z => z.id === val)}
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
