import { useRef, useState } from "react";

interface Props {
    optionList : Array<any>;
    defaultChecked : string | number | undefined;

}
export default function IuniSelect(props : Props){
    /* 선택 되어 있는 옵션값 */
    const [selectId, setSelectId] = useState<any>();
    /* 옵션 ref */
    const optionRef = useRef<any>([]);
    const [optionListState , setOptionListState] = useState<boolean>(false);
    const toggleOptionList = () => setOptionListState(() => !optionListState);

    return(
        <>
            <div style={{width : '100%', height :'48px'}} onClick={() => toggleOptionList()}>
                테마 설정
            </div>
            <div className="iuni-select-option-list">
                <div className="iuni-select-option">
                    내 정보 변경
                </div>
                <div className="iuni-select-option">
                    테마 설정
                </div>
                <div className="iuni-select-option">
                    캐릭터 설정
                </div>
            </div>
        </>
    )
}