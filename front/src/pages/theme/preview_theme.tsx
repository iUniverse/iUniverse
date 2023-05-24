import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import PreviewBanner from "./preview_banner";
import { loadSkeleton } from "api/theme/card-theme";
import { SketchPicker, ChromePicker } from 'react-color';

interface Props {
    themeColors: string[];
    themeId: number;
    fontColor: string;
    setThemeColors: Dispatch<SetStateAction<string[]>>;
    isCustom: boolean;
}

type SKELETON_INFO = {
    [index: number]: object;
}

export default function PreviewTheme(props: Props) {
    console.log(props);
    const INIT_COLOR_PICKER_SETTING = [false, false, false, false, false, false, false, false, false, false, false, false];
    const SKELETON_INFO: any = loadSkeleton();
    const themeCardRefs = useRef<any>([]);
    const [showColorPicker, setShowColorPicker] = useState<Array<boolean>>(INIT_COLOR_PICKER_SETTING);
    const [currentColor, setCurrentColor] = useState<string>('#fff');
    const [currentIndex, setCurrentIndex] = useState<number>(999);

    const [showBannerColorPicker, setShowBannerColorPicker] = useState<boolean>(false);
    

    /* ColorPicker에서 색상을 선택할 시 테마 카드 색상 변경 */
    const handleThemeColor = (color: any) => {
        handleCurrentColor(color.hex);
        props.setThemeColors(prev => {
            prev[currentIndex] = color.hex;
            return [...prev];
        });
    }

    const handleBannerColor = (color : any) => {
        handleCurrentBannerColor(color.hex);
    }
    /*
    컬러 picker  불러오기 
    index //테마 컬러 순서
    -1 : 배너
    0 ~ 11 : 카드
    */
    const renderColorPicker = (index: number, val: string) => {
        if (props.isCustom === false) {
            return false;
        }

        handleCurrentColor(val);

        if (index === -1) {
            setShowColorPicker(() => [...INIT_COLOR_PICKER_SETTING])
            handleShowBannerColorPicker();
            handleCurrentBannerColor(val);
        } else {
            handleShowColorPicker(index);
            index === currentIndex ? handleCurrentIndex(999) : handleCurrentIndex(index);
            if(showBannerColorPicker === true) {
                setShowBannerColorPicker(() => false);
            }
        }

    }

    /* 배너 쪽 colorPicker ON/OFF */
    const handleShowBannerColorPicker = () => {
        setShowBannerColorPicker(prev => !prev);
    }

    /* 배너 colorPicker 색상 변경 */
    const handleCurrentBannerColor = (val : string) => {
        
    }

    /* colorPicker 생성될 위치 번호*/
    const handleShowColorPicker = (index: number) => {
        setShowColorPicker(prev => {
            if (index !== currentIndex) {
                prev[currentIndex] = !prev[currentIndex];
            }

            prev[index] = !prev[index];
            return [...prev];
        });
    }

    /* 현재 컬러 */
    const handleCurrentColor = (val: string) => {
        setCurrentColor(() => val);
    }

    /* 현재 활성화된 위치 번호 */
    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(() => index);
    }

    return (
        <>
            <div className="preview-theme-container">
                <div className="choice-theme-title">미리보기</div>
                <div className="preview-theme-content">
                    <div className="choice-theme-container">
                        <div className="preview-banner">
                            <PreviewBanner />
                            <div className="preview-banner-recent-project">
                                <div className="preview-banner-recent-project-card" style={{ background: `` }}>
                                    <div className="preview-recent-project-badge-list row">
                                        <div className="preview-recent-project-badge mr-1r">

                                        </div>
                                    </div>
                                    <div className="preview-recent-project-title row theme-flex-center" style={{color:`${props.fontColor}`}}>
                                        최근 프로젝트
                                    </div>
                                    <div className="row theme-flex-center">
                                        <div className="preview-recent-project-first-skeleton" style={{backgroundColor: `${props.fontColor}`}}>

                                        </div>
                                    </div>
                                    <div className="row theme-flex-center">
                                        <div className="preview-recent-project-second-skeleton" style={{backgroundColor: `${props.fontColor}`}}>

                                        </div>
                                    </div>
                                    <div className="row preview-recent-project-btn-list" >
                                        <img src={"/img/theme/theme-favorite.webp"} style={{ width: '25px', height: '25px' }} />
                                        <img src={"/img/theme/theme-color-pick.webp"} style={{ width: '25px', height: '25px',  cursor: 'pointer'  }}  />
                                        <img src={"/img/theme/theme-img-pick.webp"} style={{ width: '25px', height: '25px' }} />
                                    </div>
                                    {
                                        showBannerColorPicker === true && 
                                         <div style={{ background: '#fff', position: 'absolute', top: '97%', left: '71%', zIndex: '9999' }}>
                                            <ChromePicker
                                                
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="favorite-btn-list">
                        <div>즐겨찾기</div>
                    </div>
                    <div className="preview-favorite-project-list">
                        {
                            props.themeColors.map((val, index) => (
                                <div className="preview-favorite-project-card" data-index={`${index}`} ref={el => themeCardRefs.current[index] = el} key={`${val}_${index}`} style={{ background: `${val}` }}>
                                    <div className="preview-project-badge-content">
                                        <div className="preview-project-badge" style={{ opacity: '0.1', backgroundColor: `${props.fontColor}` }}>

                                        </div>
                                    </div>

                                    <div className="preview-project-skeleton-content">
                                        <div className="preview-project-first-skeleton" style={{ width: `${SKELETON_INFO[index].firstWidth}`, height: '26px', backgroundColor: `${props.fontColor}` }}>
                                        </div>
                                    </div>
                                    <div className="preview-project-skeleton-content" style={{ marginTop: '5px' }}>
                                        <div className="preview-project-second-skeleton" style={{ width: `${SKELETON_INFO[index].secondWidth}`, height: '26px', backgroundColor: `${props.fontColor}` }}>
                                        </div>
                                    </div>
                                    <div className="preview-project-skeleton-content"></div>
                                    <div className="preview-project-btn-content row">
                                        <div className="col-6 row preview-project-left-btn-list">
                                            <img src={"/img/theme/theme-favorite.webp"} style={{ width: '25px', height: '25px', marginLeft: '19px' }} />
                                        </div>
                                        <div className="col-6 row preview-project-right-btn-list">
                                            <img src={"/img/theme/theme-img-pick.webp"} style={{ width: '25px', height: '25px', marginRight: '19px' }} />
                                            <img src={currentIndex === index ? "/img/theme/theme-active-color-pick.webp" : "/img/theme/theme-color-pick.webp"} style={{ width: '25px', height: '25px', cursor: 'pointer' }} onClick={() => renderColorPicker(index, val)} />
                                        </div>
                                    </div>
                                    {
                                        showColorPicker[index] === true &&
                                        <div style={{ background: '#fff', position: 'absolute', top: '90%', left: '20%', zIndex: '9999' }}>
                                            <ChromePicker
                                                color={currentColor}
                                                onChange={handleThemeColor}
                                            />
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}