import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { updateTask } from "api/task/task";

interface Props {
    description : string
    taskId : number;
}
export default function Editor(props : Props) {
    const update = async (description : string) => {
        const result = await updateTask({
            'id' : props.taskId,
            'key' : 'description',
            'value' : description 
        });
        console.log(result);
    }

    return (
        <CKEditor
            editor={ClassicEditor}
            data={props.description === null ? '내용을 입력해주세요' : props.description}
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(e) => {
                //const data = e.getData();
                // console.log({ event, editor, data });
                console.log(e);
            }}
            onBlur={(event, editor) => {
                // console.log(editor.getData());
                update(editor.getData());
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
        />
    )
}