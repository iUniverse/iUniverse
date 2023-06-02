import { useRef, useState } from "react";

interface Props {
    optionList: any[];
    defaultChecked: string | number | undefined;

}
export default function IuniSelect(props: Props) {
    /* 선택 되어 있는 옵션값 */
    const [selectVal, setSelectVal] = useState<any>(props.optionList.find(z => z.id === props.defaultChecked));
    /* 옵션 ref */
    const optionRef = useRef<any>([]);
    const [optionListState, setOptionListState] = useState<boolean>(false);

    /* 옵션 리스트 펼치기 / 접기 */
    const toggleOptionList = () => setOptionListState(() => !optionListState);
    /* 옵션값 클릭 */
    const handleOption = (val: any) => {
        setSelectVal(() => val);
        setOptionListState(() => !optionListState);
    }

    return (
        <>
            <div className={optionListState === true ? "iuni-select-box active" : "iuni-select-box"} onClick={() => toggleOptionList()}>
                <p>{selectVal.name}</p>
            </div>
            {
                optionListState === true &&
                <div className="iuni-select-option-list">
                    {
                        props.optionList.map((val: any, index) => (
                            <>
                                <div className={selectVal.id === val.id ? 'iuni-select-option f-bold' : 'iuni-select-option f-normal'}
                                    key={val.id}
                                    onClick={() => handleOption(val)}>
                                    <p>{val.name}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            }
        </>
    )
}