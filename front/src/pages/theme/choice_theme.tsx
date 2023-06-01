import { SelectTheme, getTheme, loadMyThemeInfo, themeInfo } from 'api/theme/card-theme';
import React, { useEffect, useState, Dispatch, SetStateAction, useRef } from 'react';



interface Props {
    setThemeId: Dispatch<SetStateAction<number>>
    setThemeColors: Dispatch<SetStateAction<string[]>>
    setfontColor: Dispatch<SetStateAction<string>>
    setCustom: Dispatch<SetStateAction<boolean>>
    themeInfo: SelectTheme[]
    currentSize: string
}

export default function ChoiceTheme(props: Props) {
    const [activeThemeId, setActiveThemeId] = useState<number>(-1);
    const CUSTOM_THEME = {
        id: 0,
        name: 'custom'
    }

    const handleTheme = (data: themeInfo | any) => {
        props.setThemeColors(() => data.colors);
        props.setfontColor(() => data.fontColor);
    }

    const changeTheme = async (theme: SelectTheme) => {
        if (props.currentSize === 'small') {
            props.setThemeId(() => theme.id);
            const theme_colors: themeInfo | string = await getTheme(theme.id);
            theme.id === 0 ? props.setCustom(() => true) : props.setCustom(() => false);
            theme_colors === '' ? props.setThemeColors(() => []) : handleTheme(theme_colors);

            if(activeThemeId !== -1){
                selectThemeRef.current[activeThemeId].style.background = '#fff';    
            }
            
            selectThemeRef.current[theme.id].style.background = 'rgb(0, 225, 90, 0.1)';
            setActiveThemeId(() => theme.id);
            
            
        } else {
            props.setThemeId(() => theme.id);
            const theme_colors: themeInfo | string = await getTheme(theme.id);
            theme.id === 0 ? props.setCustom(() => true) : props.setCustom(() => false);
            theme_colors === '' ? props.setThemeColors(() => []) : handleTheme(theme_colors);
        }

    };

    /* 선택된 테마 */
    const selectThemeRef = useRef<any>([]);
    return (
        <>
            {
                props.currentSize !== 'small' ?
                    <div className="choice-theme-first-list">
                        {
                            props.themeInfo.map(val => (
                                <div className="row" key={val.id}>
                                    <input type="radio" name="choice-theme" id={val.name} className="choice-font-color-radio" onClick={() => changeTheme(val)} />
                                    <label htmlFor={val.name} className="ml-2">
                                        {val.name}
                                    </label>
                                </div>
                            ))
                        }

                        <div className="row">
                            <input type="radio" name="choice-theme" id="choice-custom-theme" className="choice-font-color-radio" onClick={() => changeTheme(CUSTOM_THEME)} />
                            <label htmlFor="choice-custom-theme" className="ml-2">
                                커스텀테마
                            </label>
                        </div>
                    </div>
                    :
                    <>
                        {
                            props.themeInfo.map((val, index) => (
                                <label className="small-choice-theme row" 
                                    style={{ height: '48px', alignContent: 'center' }} 
                                    htmlFor={val.name} 
                                    key={val.id}
                                    ref = {(el) => (selectThemeRef.current[val.id] = el)}
                                    onClick={() => changeTheme(val)}>
                                    <input type="radio" name="theme" id={val.name} className="" style={{ width: '20px', height: '20px' }} />
                                    <p className="ml-3">{val.name}</p>
                                </label>
                            ))
                        }
                    </>
            }
        </>
    )
}