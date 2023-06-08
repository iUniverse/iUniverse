type InputText = {
    text : string|null;
    color: string|null;
    size : string|null;
}
export default function InputText(props : InputText) {
    return (
        <>
            <h1>{props.text}</h1>
        </>
    )
}