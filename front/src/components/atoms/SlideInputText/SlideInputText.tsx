import {useEffect, useLayoutEffect, useRef, useState} from "react";
import sitStyles from './SlideInputText.module.css'

type Options = {
    placeholder?: string;
    space?      : number;
    password ?  : boolean;
}

export default function SlideInputText(props : Options) {
    const isPass = !props.password ? false : true;
    const [condition,setCondition] = useState(false);
    const [inputType,setType] = useState(isPass ? "password" : "text");
    const [value,setValue] = useState("");
    const [visible,setVisible] = useState("hidden");
    const inputRef = useRef<HTMLInputElement>(null);
    const onChange = async (e:any) => {
        setCondition(e.target.value.length > 0 ? true : false);
        if(!isPass) setValue(e.target.value);
    }
    const onClick = async () => {
        if(isPass === true){
            setType(inputType === "password" ? "text" : "password");
            setVisible(visible === "hidden" ? "show" : "hidden");
        }
        else{
            setValue("");
            setCondition(false);
        }
        if(inputRef.current !== null) inputRef.current.focus();
    }

    return (
        <>
            <div className={sitStyles.input} style={props?.space ? {marginBottom:props.space} : {}}>
                {
                    !isPass
                    ? <input ref={inputRef} className={sitStyles.sit} type={inputType} onChange={onChange} value={value} required={true}/>
                    : <input ref={inputRef} className={sitStyles.sit} type={inputType} onChange={onChange} required={true} />
                }                <span className={sitStyles.highlight}></span>
                <span className={sitStyles.bar}></span>
                {
                    condition
                    ?
                        !isPass
                        ?   <button className={sitStyles.clear} onClick={onClick}>
                                <img src={"/icons/icon.clear.svg"}/>
                            </button>
                        :   <button className={sitStyles.show} onClick={onClick}>
                            {
                                visible === "show"
                                ? <img src={"/icons/icon.show.svg"}/>
                                : <img src={"/icons/icon.hidden.svg"}/>
                            }
                        </button>
                    : null
                }
                <label className={sitStyles.placeholder}>{props.placeholder}</label>
            </div>
        </>
    )
}