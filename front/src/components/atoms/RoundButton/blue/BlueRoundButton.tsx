import btnStyle from "components/atoms/RoundButton/RoundButton.module.css";
import blueStyle from "./BlueRoundButton.module.css";
import {RoundButtonOptions} from '../RoundButtonOptions';
import {useState} from "react";

export default function BlueRoundButton(props : RoundButtonOptions) {
    //recoil 로 바꿔야함
    //const [condition,setCondition] = useState(!props.disable);
    const onclick = () => {
        if(typeof props.func === "function") props.func();
    }
    return (
        <>
            <button className={props.disable ? `${btnStyle.round_button} ${blueStyle.blue} ${blueStyle.disable}` : `${btnStyle.round_button} ${blueStyle.blue} ${blueStyle.able}`} style={props?.width? {width:props?.width} : {}} onClick={onclick}>
                {props.img ? <img className={btnStyle.btn_img} src={props?.img}/> : null}
                <span>{props?.title ? props.title : "test"}</span>
            </button>
        </>
    )
}