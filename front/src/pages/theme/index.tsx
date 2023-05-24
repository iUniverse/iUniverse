import React, { useEffect, useRef, useState } from 'react';
import CustomChoiceTheme from './custom_choice_theme';
import ChoiceFontColor from './choice_font_color';
import PreviewTheme from './preview_theme';
import SubSideMenu from './sub_side_menu';
import ChoiceTheme from './choice_theme';
import { loadMyThemeInfo } from 'api/theme/card-theme';


export interface ThemeInfo {
    id: number;
    name: string;
}

export default function Index() {
    const [themeId, setThemeId] = useState(-1);
    const [isCustom, setCustom] = useState(false);
    const [fontColor, setFontColor] = useState<string>('#fff');
    const [themeInfo, setThemeInfo] = useState<Array<ThemeInfo>>([]);
    const [themeColors, setThemeColors] = useState<Array<string>>([]);
    
    const [imgPickImg, setImgPickImg] = useState<string>("/img/theme/theme-img-pick.webp");
    const [favoriteImg, setFavoriteImg] = useState<string>("/img/theme/theme-favorite.webp");

    /* 테마 선택 박스 정보 */
    const settingThemeSelectBox = async () => {
        const my_theme_list = await loadMyThemeInfo(['name', 'id']);

        for (const my_theme of my_theme_list) {
            setThemeInfo(prev => {
                return [...prev, { 'id': my_theme.id, 'name': my_theme.name }]
            })
        }
    }
    
    useEffect(() => {
        settingThemeSelectBox();
    }, []);

    return (
        <>
            <div className="theme-setting-container">
                <div className="theme-setting-menu">
                    <SubSideMenu />
                </div>
                <div className="theme-setting-content ml-1r mr-1r mt-3r">
                    <div className="theme-setting-content-title">
                        <span>테마 설정</span>
                        <div className="theme-setting-save-btn">저장</div>
                    </div>
                    <ChoiceTheme 
                        setThemeId={setThemeId}
                        setThemeColors = {setThemeColors}
                        setfontColor = {setFontColor}
                        setCustom = {setCustom}
                        themeInfo={themeInfo}
                        
                    />
                    { 
                        isCustom === true && 
                        <CustomChoiceTheme 
                        setThemeId={setThemeId}
                        setThemeColors = {setThemeColors}
                        setfontColor = {setFontColor}
                        themeInfo={themeInfo}/>
                    }
                    <ChoiceFontColor 
                        setFontColor = {setFontColor}
                        setImgPickImg = {setImgPickImg}
                        setFavoriteImg = {setFavoriteImg}
                    />
                    <PreviewTheme 
                        fontColor = {fontColor}
                        themeId={themeId}
                        imgPickImg={imgPickImg}
                        favoriteImg={favoriteImg}
                        themeColors={themeColors}
                        setThemeColors={setThemeColors}
                        isCustom = {isCustom}
                    />
                </div>
            </div>
        </>
    )
}