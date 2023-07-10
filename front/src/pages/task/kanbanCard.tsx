import type { Identifier, XYCoord } from "dnd-core";
import * as taskIF from "api/task/task-interface";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';

export const ItemTypes = {
    'BOARDCARD': 'boardCard'
}

interface Props {
    taskStatus: taskIF.Subtype[];
    task: any;
    board: any;
    renderTaskDetail: any;
    index: number;
    hoverBoardId : number | null | undefined;
    moveKanbanCard : any
    setHoverBoardId : Dispatch<SetStateAction<any>>
}

interface DragItem {
    index: number;
    id: string;
    type: string;
    borderId : number;
}

export default function KanbanCard(props: Props) {
    const ref = useRef<HTMLDivElement>(null);
    
    const [{ handlerId, isOver }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null, isOver : any }>
        ({
            accept: ItemTypes.BOARDCARD,
            collect(monitor) {
                return {
                    handlerId: monitor.getHandlerId(),
                    isOver : props.setHoverBoardId(props.board.id)
                }
            },
            hover(item: DragItem, monitor) {
                if (!ref.current) {
                    return;
                }
                console.log(props.hoverBoardId);
                const dragIndex = item.index;
                const hoverIndex = props.index;

                // Determine rectangle on screen
                const hoverBoundingRect = ref.current?.getBoundingClientRect()

                // Get vertical middle
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

                // Determine mouse position
                const clientOffset = monitor.getClientOffset()
                console.log(clientOffset);
                // Get pixels to the top
                const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

                if (hoverClientY < hoverMiddleY) {
                    console.log("기존 카드가 아래로 가야됨");
                    console.log(props.task);
                    props.moveKanbanCard(props.task, hoverIndex === 0 ? 0 : hoverIndex-1);
                    return;
                }

                // Dragging upwards
                if (hoverClientY > hoverMiddleY) {
                    console.log("기존 카드가 위로 가야됨");
                    console.log(props.task)
                    props.moveKanbanCard(props.task, hoverIndex+1);
                    return;
                }
            
                item.index = hoverIndex
                console.log(item.index);
            }
        })


    const [{ isDragging }, drag] = useDrag(() =>
    ({
        type: ItemTypes.BOARDCARD,
        item: { 'id': props.task?.id, 'index' : props.index, 'boradId' : props.board.id },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging()
        }),
        end: (item, monitor) => {
            //const { id : originId, index : originIndex} = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                //원래 자리로 이동
                console.log('ㅋㅋㅋ');
            }
        }
    }), [props.task?.id, props.index]);
    drag(drop(ref))
    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            style={{ opacity: isDragging ? 1 : 0.5 }}
            className="kanban-card col-12" onClick={() => props.renderTaskDetail(props.board.id, props.task?.id)}>
            <div className="kanban-card-header">
                {props.task?.id}_{props.task?.name}
            </div>
            <div className="kanban-card-body">
                <div className="kanban-card-body-content col-12">
                    <div dangerouslySetInnerHTML={{ __html: props.task?.description }}></div>
                </div>
                <div className="kanban-card-body-status">
                    {
                        props.taskStatus?.find((z: any) => z.id === props.task?.statusId)?.name
                    }
                </div>
            </div>
            <div className="kanban-card-footer">
                프로필 들어감요
            </div>
        </div>
    )
}