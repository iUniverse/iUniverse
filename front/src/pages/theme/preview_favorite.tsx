import React, { useRef } from "react";


//props에는 폰트컬러, 컬러색상 리스트 받아옴

export default function PreviewFavorite() {
    const themeColors = useRef<Array<string>>([]);

    /* 카드 컬러 바꾸기 */
    const handleCardColor = (position: number, color: string) => {
        
    }


    return (
        <>
            <div className="favorite-btn-list">
                <div>즐겨찾기</div>
            </div>
            <div className="preview-favorite-project-list">
                <div className="preview-favorite-project-card" data-name="0">

                </div>

                <div className="preview-favorite-project-card" data-name="1">

                </div>

                <div className="preview-favorite-project-card" data-name="2">

                </div>

                <div className="preview-favorite-project-card" data-name="3">

                </div>

                <div className="preview-favorite-project-card" data-name="4">

                </div>

                <div className="preview-favorite-project-card" data-name="5">

                </div>

                <div className="preview-favorite-project-card" data-name="6">

                </div>

                <div className="preview-favorite-project-card" data-name="7">

                </div>

                <div className="preview-favorite-project-card" data-name="8">

                </div>

                <div className="preview-favorite-project-card" data-name="9">

                </div>

                <div className="preview-favorite-project-card" data-name="10">

                </div>

                <div className="preview-favorite-project-card" data-name="11">

                </div>
            </div>
        </>
    )
}