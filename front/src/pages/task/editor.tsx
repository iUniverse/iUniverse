import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { updateTask } from "api/task/task";
import { Dispatch, SetStateAction } from "react";



interface Props {
    description : string;
    taskId : number;
    boardId : number;
    setCurrentTask : Dispatch<SetStateAction<any>>
    setBoardTask : Dispatch<SetStateAction<any>>
}

export default function Editor(props : Props) {
    
    /* 태스크 내용 변경 */
    const handleTaskDescription = (description : string) => {     
        props.setCurrentTask((prev : any) => {
            return { ...prev, 'description' : description}
        });

        props.setBoardTask((prev : any) => {
            const tasks = prev[props.boardId];
            const update_task = tasks.find((e : any) => e.id === props.taskId);
            update_task.description = description;
            return { ...prev }
        })      
    }

    const update = async (description : string) => {
        const result = await updateTask({
            'id' : props.taskId,
            'key' : 'description',
            'value' : description 
        });

        if(result.result === true){
            handleTaskDescription(description);
        };
    }

    //필요한거
    return (
        <CKEditor
            editor={ClassicEditor}
            data={props?.description}
            // onReady={editor => {
            //     // You can store the "editor" and use when it is needed.
            //     console.log('Editor is ready to use!', editor);
            // }}
            // onChange={(e) => {
            //     //const data = e.getData();
            //     // console.log({ event, editor, data });
            //     console.log(e);
            // }}
           
            // onFocus={(event, editor) => {
            //     console.log('Focus.', editor);
            // }}
            onBlur={(event, editor) => {
                // console.log(editor.getData());
                update(editor.getData());
            }}
        />
    )
}