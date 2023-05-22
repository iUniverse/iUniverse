import React, { useState } from "react";
import PreviewBanner from "./preview_banner";


interface Props {
    themeColors: string[];
    badgeColor : string[];
    fontColor : string[];
}

export default function PreviewTheme(props: Props) {
    const [skeletonSize, setSkeletonSize] = useState({});
    const [skeletonColor, setSkeletonColor] = useState<string>();

    return (
        <>
            <div className="preview-theme-container">
                <div className="choice-theme-title">미리보기</div>
                <div className="preview-theme-content">
                    <PreviewBanner />
                    <div className="favorite-btn-list">
                        <div>즐겨찾기</div>
                    </div>
                    <div className="preview-favorite-project-list">
                        {
                            props.themeColors.map((val, index) => (
                                <div className="preview-favorite-project-card" key={`${val}_${index}`} style={{ background: `${val}` }}>
                                    <div className="preview-project-badge-content">
                                        <div className="preview-project-badge">

                                        </div>
                                    </div>
                                    <div className="preview-project-skeleton-content">
                                        <div className="preview-project-first-skeleton" style={{ width: '286px', height: '26px', backgroundColor: '#fff' }}>
                                        </div>
                                    </div>
                                    <div className="preview-project-skeleton-content" style={{ marginTop: '5px' }}>
                                        <div className="preview-project-second-skeleton" style={{ width: '159px', height: '26px', backgroundColor: '#fff' }}>
                                        </div>
                                    </div>
                                    <div className="preview-project-skeleton-content"></div>
                                    <div className="preview-project-btn-content row">
                                        <div className="col-6 row preview-project-left-btn-list">
                                            <img src={"/img/theme/theme-favorite.webp"} style={{ width: '25px', height: '25px', marginLeft: '19px' }} />
                                        </div>
                                        <div className="col-6 row preview-project-right-btn-list">
                                            <img src={"/img/theme/theme-img-pick.webp"} style={{ width: '25px', height: '25px', marginRight:'19px' }} />
                                            <img src={"/img/theme/theme-color-pick.webp"} style={{ width: '25px', height: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}