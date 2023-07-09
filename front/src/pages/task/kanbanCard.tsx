import * as taskIF from "api/task/task-interface";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useDrag, useDrop } from 'react-dnd';

export const ItemTypes = {
    'BOARDCARD': 'boardCard'
}

interface Props {
    taskStatus: taskIF.Subtype[];
    task: any;
    board: any;
    renderTaskDetail : any;
    index : number;
    setDragId : Dispatch<SetStateAction<number>>;
}

export default function KanbanCard(props: Props) {
    const [{ isDragging }, drag] = useDrag(() => 
    ({    
        type: ItemTypes.BOARDCARD,
        item : { 'id' : props.task.id},
        collect: (monitor) => ({
            isDragging: !monitor.isDragging()
        }),
        end : (item, monitor) => {
            //const { id : originId, index : originIndex} = item;
            
            console.log(item);
            const didDrop = monitor.didDrop();
            if(!didDrop){
                //원래 자리로 이동
                console.log('ㅋㅋㅋ');
            }
        }
    }), [props.task.id, props.index]);


    return (
        <div
            ref={drag}
            style={{ opacity: isDragging ? 1 : 0.5 }}
            className="kanban-card col-12" onClick={() => props.renderTaskDetail(props.board.id, props.task.id)}>
            <div className="kanban-card-header">
                {props.task.id}
            </div>
            <div className="kanban-card-body">
                <div className="kanban-card-body-content col-12">
                    <div dangerouslySetInnerHTML={{ __html: props.task?.description }}></div>
                </div>
                <div className="kanban-card-body-status">
                    {
                        props.taskStatus?.find((z: any) => z.id === props.task.statusId)?.name
                    }
                </div>
            </div>
            <div className="kanban-card-footer">
                프로필 들어감요
            </div>
        </div>
    )
}