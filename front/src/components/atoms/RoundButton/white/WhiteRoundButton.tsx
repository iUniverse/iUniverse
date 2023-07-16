import btnStyle from "components/atoms/RoundButton/RoundButton.module.css";
import whiteStyle from "./WhiteRoundButton.module.css";
import {RoundButtonOptions} from '../RoundButtonOptions';

export default function WhiteRoundButton(props : RoundButtonOptions) {
    const clickHandler = () => {
        if(props.func) props.func();
    }
    return (
        <>
            <button className={`${btnStyle.round_button} ${whiteStyle.white}`} onClick={clickHandler}>
                {props.img ? <img className={btnStyle.btn_img} src={props?.img}/> : null}
                <span>{props?.title ? props.title : "test"}</span>
            </button>
        </>
    )
}