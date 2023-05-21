import { getTheme, loadMyThemeInfo } from 'api/theme/card-theme';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';


interface ThemeInfo {
    id: number;
    name: string;
}


interface Props {
    setThemeId: Dispatch<SetStateAction<number>>
    setThemeColors : Dispatch<SetStateAction<string[]>>
    themeInfo: ThemeInfo[]
    
}


export default function ChoiceTheme(props: Props) {
    const CUSTOM_THEME = {
        id : 0,
        name : 'custom'
    }
    const handleTheme = async (theme : ThemeInfo) => {
        props.setThemeId(() => theme.id);
        if(theme.id === 0){
            props.setThemeColors(() => []);
        } else {
            const theme_colors = await getTheme(theme.id);
            props.setThemeColors(() => theme_colors.favoriteBColors);
        }
        
    };

    return (
        <>
            <div className="choice-theme-container">
                <div className="choice-theme-first-list">
                    {
                        props.themeInfo.map(val => (
                            <div className="row" key={val.id}>
                                <input type="radio" name="choice-theme" id={val.name} className="choice-font-color-radio" onClick={() => handleTheme(val)} />
                                <label htmlFor={val.name} className="ml-2">
                                    {val.name}
                                </label>
                            </div>
                        ))
                    }

                    <div className="row">
                        <input type="radio" name="choice-theme" id="choice-custom-theme" className="choice-font-color-radio" onClick={() => handleTheme(CUSTOM_THEME)} />
                        <label htmlFor="choice-custom-theme" className="ml-2">
                            커스텀테마
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}