import React, { useEffect, useRef, useState } from 'react';
import ChoiceTheme from './choice_theme';
import ChoiceFontColor from './choice_font_color';
import PreviewTheme from './preview_theme';
import SubSideMenu from './sub_side_menu';

export default function Index() {
    const [theme, setTheme] = useState('basic');
    const [fontColor, setFontColor] = useState('white');

    return (
        <>
            <div className="theme-setting-container">
                <div className="theme-setting-menu">
                    <SubSideMenu />
                </div>
                <div className="theme-setting-content">
                    <div className="theme-setting-content-title">
                        <span>테마 설정</span>
                        <div className="theme-setting-save-btn">저장</div>
                    </div>
                    <ChoiceTheme />
                    <ChoiceFontColor />
                    <PreviewTheme />
                </div>
            </div>
        </>
    )
}