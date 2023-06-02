import React, { useEffect, useRef, useState } from 'react';
import CustomChoiceTheme from './custom_choice_theme';
import ChoiceFontColor from './choice_font_color';
import PreviewTheme from './preview_theme';
import SubSideMenu from './sub_side_menu';
import ChoiceTheme from './choice_theme';
import { loadMyThemeInfo } from 'api/theme/card-theme';
import Modal from 'react-modal';
import IuniAlert from 'pages/layout/iuniAlert';
import { throttle } from 'lodash';
import IuniSelect from 'pages/layout/iuniSelect';

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

    const [modalState, setModalState] = useState<boolean>(false);

    //default, middle, small
    const [currentSize, setCurrentSize] = useState<string>('big');

    /* 테마 선택 박스 정보 */
    const settingThemeSelectBox = async () => {
        const my_theme_list = await loadMyThemeInfo(['name', 'id']);

        for (const my_theme of my_theme_list) {
            setThemeInfo(prev => {
                return [...prev, { 'id': my_theme.id, 'name': my_theme.name }]
            })
        }
    }

    const handleModal = (val: boolean): void => {
        setModalState(() => val);
    }

    const resizeObserver = throttle(() => {
        const current_inner_width = window.innerWidth;
        console.log(current_inner_width);
        if (current_inner_width <= 768) {
            setCurrentSize(() => 'small');
        }
        else if (current_inner_width <= 1024) {
            setCurrentSize(() => 'middle');
        }
        else {
            setCurrentSize(() => 'big');
        }
    }, 1000);

    useEffect(() => {
        window.addEventListener('resize', resizeObserver);
        return (() => {
            //clean up
            window.removeEventListener("resize", resizeObserver);
        })
    });

    const customModalStyle = {
        overlay: {
            background: 'none'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '480px',
            height: '300px',
            borderRadius: '24px',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 12px 0 rgba(34, 34, 34, 0.18)',
            overflow: 'hidden'
        }
    }

    useEffect(() => {
        settingThemeSelectBox();
        resizeObserver();

    }, []);
    useEffect(() => {
        resizeObserver();
    }, [themeId]);



    return (
        <>
            <div className="theme-setting-container">
                <div className="theme-setting-menu">
                    <SubSideMenu currentSize={currentSize} />
                </div>

                <div className="theme-setting-content mt-3r">
                    <div className="theme-setting-content-title">
                        {
                            currentSize !== 'small' ?
                                <>
                                    <span className='default-title'>테마 설정</span>
                                    <div className="theme-setting-save-btn w-5" onClick={() => handleModal(true)}>저장</div>
                                </>
                                :
                                <>
                                    <span className='small-title'>테마 설정</span>
                                </>
                        }
                    </div>

                    <ChoiceTheme
                        setThemeId={setThemeId}
                        setThemeColors={setThemeColors}
                        setfontColor={setFontColor}
                        setCustom={setCustom}
                        themeInfo={themeInfo}
                        currentSize={currentSize}
                    />
                    {
                        isCustom === true &&
                        <CustomChoiceTheme
                            setThemeId={setThemeId}
                            setThemeColors={setThemeColors}
                            setfontColor={setFontColor}
                            themeInfo={themeInfo}
                            currentSize={currentSize}
                        />
                    }
                    <ChoiceFontColor
                        setFontColor={setFontColor}
                        setImgPickImg={setImgPickImg}
                        setFavoriteImg={setFavoriteImg}
                        currentSize={currentSize}
                    />
                    <PreviewTheme
                        fontColor={fontColor}
                        themeId={themeId}
                        imgPickImg={imgPickImg}
                        favoriteImg={favoriteImg}
                        themeColors={themeColors}
                        setThemeColors={setThemeColors}
                        isCustom={isCustom}
                        currentSize={currentSize}
                    />
                    <Modal
                        isOpen={modalState}
                        style={customModalStyle}
                        ariaHideApp={false}
                    >
                        <IuniAlert
                            setModalState={setModalState}
                            currentSize={currentSize}
                        />
                    </Modal>
                    {
                        currentSize === 'small' &&
                        <div className="theme-setting-save-btn mt-2r w-100" onClick={() => handleModal(true)}>저장</div>
                    }
                </div>
            </div>
        </>
    )
}