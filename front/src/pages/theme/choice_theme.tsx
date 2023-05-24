import { SelectTheme, getTheme, loadMyThemeInfo, themeInfo } from 'api/theme/card-theme';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';



interface Props {
    setThemeId: Dispatch<SetStateAction<number>>
    setThemeColors: Dispatch<SetStateAction<string[]>>
    setfontColor: Dispatch<SetStateAction<string>>
    setCustom: Dispatch<SetStateAction<boolean>>
    themeInfo: SelectTheme[]
}

export default function ChoiceTheme(props: Props) {
    const CUSTOM_THEME = {
        id: 0,
        name: 'custom'
    }

    const handleTheme = (data: themeInfo | any) => {
        props.setThemeColors(() => data.colors);
        props.setfontColor(() => data.fontColor);
    }

    const changeTheme = async (theme: SelectTheme) => {
        props.setThemeId(() => theme.id);
        const theme_colors: themeInfo | string = await getTheme(theme.id);
        theme.id === 0 ? props.setCustom(() => true) : props.setCustom(() => false);
        theme_colors === '' ? props.setThemeColors(() => []) : handleTheme(theme_colors);
    };

    return (
        <>

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
        </>
    )
}