import { SelectTheme, getTheme, themeInfo } from 'api/theme/card-theme';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';


interface Props {
    themeInfo: SelectTheme[]
    setThemeId: Dispatch<SetStateAction<number>>
    setThemeColors : Dispatch<SetStateAction<string[]>>
    setfontColor : Dispatch<SetStateAction<string>>
    setBannerColor : Dispatch<SetStateAction<string>>
}

type init_theme_info = {
    [key : string] : string;
}
export default function CustomChoiceTheme(props: Props) {

    const INIT_THEME_INFO : init_theme_info = {
        '기본테마': 'basic',
        '모노테마': 'mono',
        '코지테마': 'cozy',
        '트로피컬테마': 'tropical'
    }

    const handleTheme = (data : themeInfo | any) => {
        props.setThemeColors(() => data.favoriteBColors);
        props.setfontColor(() => data.fontColor);
        props.setBannerColor(() => data.bannerBC);
    }

    const changeTheme = async (theme : SelectTheme) => {
        props.setThemeId(() => theme.id);
        const theme_colors : themeInfo | string = await getTheme(theme.id);
        theme_colors === '' ? props.setThemeColors(() => []) : handleTheme(theme_colors);
    };

    return (
        <>
            <div className="choice-theme-container">
                <div className="choice-theme-title">테마 선택</div>
                <div className="choice-theme-content-list">
                    {
                        props.themeInfo.map((val, index) => (
                            <div key={`custom_${val}_${index}`} className={`row-reverse col-12 theme-flex-center ${INIT_THEME_INFO[val.name]}`}>
                                <label htmlFor={`${INIT_THEME_INFO[val.name]}_custom`} className="ml-2 mt-2">
                                    <div className="choice-theme-content-name">
                                        {val.name}
                                    </div>
                                </label>
                                <input type="radio" name="choice-custom-theme" id={`${INIT_THEME_INFO[val.name]}_custom`} className="choice-theme-radio" onClick={() => changeTheme(val)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}