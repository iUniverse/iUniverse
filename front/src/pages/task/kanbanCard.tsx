import type { Identifier, XYCoord } from "dnd-core";
import * as taskIF from "api/task/task-interface";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { Identifier } from "typescript";

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
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export default function KanbanCard(props: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>
        ({
            accept: ItemTypes.BOARDCARD,
            collect(monitor) {
                return {
                    handlerId: monitor.getHandlerId()
                }
            },
            hover(item: DragItem, monitor) {
                if (!ref.current) {
                    return;
                }
                console.log(item);
                const dragIndex = item.index;
                const hoverIndex = props.index;

                console.log(dragIndex);
                console.log(hoverIndex);
                console.log(props.hoverBoardId);
                if (dragIndex === hoverIndex) {
                    return;
                }
                // Determine rectangle on screen
                const hoverBoundingRect = ref.current?.getBoundingClientRect()

                // Get vertical middle
                const hoverMiddleY =
                    (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

                // Determine mouse position
                const clientOffset = monitor.getClientOffset()

                // Get pixels to the top
                const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    console.log("아래쪽");
                    return;
                }

                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    console.log("위쪽");
                    return;
                }
    
                item.index = hoverIndex
            }
        })


    const [{ isDragging }, drag] = useDrag(() =>
    ({
        type: ItemTypes.BOARDCARD,
        item: { 'id': props.task?.id },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging()
        }),
        end: (item, monitor) => {
            //const { id : originId, index : originIndex} = item;

            console.log(item);
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