import React, { useEffect, useRef, useState } from 'react';
import { IuniCatStyle } from 'api/project/iuni-cat';
import { BlockPicker } from 'react-color';
import IuniCat from './iuni_cat';

/* 아유니 켓 스타일 */
export interface CatStyle {
    background: string;
    leftEye: string;
    leftWhiteEye: string;
    rightEye: string,
    rightWhiteEye: string;
    nose: string
    body: string;
}

export default function Index(props: any) {
    const [iuniCat, setIuniCat] = useState<string>('');
    const [currentColors, setCurrentColor] = useState([]);
    const cardCount = 12;
    const [catColor, setCatColor] = useState<string>('#fff');
    const catRef = useRef(null);

    function handleCatColor(color: any) {
        setCatColor(() => color.hex);
    }

    const [firstIuniCat, setFirstIuniCat] = useState<string>(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <defs>
        <clipPath id="v9rysr40ha">
            <path data-name="사각형 5950" style="fill:none" d="M0 0h48v48H0z" />
        </clipPath>
        <clipPath id="umety7wn7b">
            <path data-name="사각형 5951" style="fill:#7079ff" d="M0 0h10.604v5.301H0z" />
        </clipPath>
    </defs>
    <g data-name="그룹 14147" style="clip-path:url(#v9rysr40ha)">
        <path data-name="패스 10963" d="M24 0A24 24 0 1 1 0 24 24 24 0 0 1 24 0" style="fill:#b7bbff" />
        <path data-name="패스 10964" d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" style="fill:#5762ff" />
        <path data-name="패스 10965" d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" transform="translate(.184 .014)" style="fill:#fff" />
        <path data-name="패스 10967" d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" transform="translate(0 .014)" style="fill:#fff" />
        <path data-name="패스 10988" d="M74.288 33.475c-.655 0-1.187-2.531-1.187-3.187s.532-3.186 1.187-3.186 1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.169 -.102)" style="fill:#020918" />
        <path data-name="패스 10989" d="M90.051 33.475c-.655 0-1.187-2.531-1.187-3.187S89.4 27.1 90.051 27.1s1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.169 -.102)" style="fill:#020918" />
        <g data-name="그룹 14149">
            <g data-name="그룹 14148" style="clip-path:url(#umety7wn7b)" transform="translate(26.58 24.773)">
                <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff" />
            </g>
        </g>
        <g data-name="그룹 14148" style="clip-path:url(#umety7wn7b)" transform="translate(11 25)">
            <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff" />
        </g>
    </g>
    <path data-name="패스 10991" d="m82.169 37.624-1.39-1.54h2.78z" transform="translate(-57.779)" style="fill:#fff" />
</svg>`);
    const [secondIuniCat, setSecondIuniCat] = useState<string>(`  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <path data-name="패스 10977" d="M82.17 0a24 24 0 1 1-24 24 24 24 0 0 1 24-24" transform="translate(-58.17)" style="fill:#b7bbff" />
    <path data-name="패스 10978" d="M92.114 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S63.444 22.35 59.56 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" transform="translate(-58.17)" style="fill:#5762ff" />
    <path data-name="패스 10979" d="M74.289 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" transform="translate(-58.17)" style="fill:#fff" />
    <path data-name="패스 10980" d="M74.288 33.475c-.655 0-1.187-2.531-1.187-3.187s.532-3.186 1.187-3.186 1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918" />
    <path data-name="패스 10981" d="M90.052 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" transform="translate(-58.17)" style="fill:#fff" />
    <path data-name="패스 10982" d="M90.051 31.475a1.187 1.187 0 1 1 1.186-1.187 1.187 1.187 0 0 1-1.186 1.187" transform="translate(-58.17)" style="fill:#020918" />
    <path data-name="패스 10983" d="M90.051 33.475c-.655 0-1.187-2.531-1.187-3.187S89.4 27.1 90.051 27.1s1.186 2.531 1.186 3.186-.531 3.187-1.186 3.187" transform="translate(-58.17)" style="fill:#020918" />
    <path data-name="패스 10984" d="m82.169 37.624-1.39-1.54h2.78z" transform="translate(-58.17)" style="fill:#fff" />
</svg>`);
    const [thirdIuniCat, setThridIuniCat] = useState<string>(`  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <defs>
        <clipPath id="luodfoc8ua">
            <path data-name="사각형 5950" style="fill:none" d="M0 0h48v48H0z" />
        </clipPath>
        <clipPath id="6trxzx9fjb">
            <path data-name="사각형 5951" style="fill:#7079ff" d="M0 0h10.604v5.301H0z" />
        </clipPath>
    </defs>
    <g data-name="그룹 14147" style="clip-path:url(#luodfoc8ua)">
        <path data-name="패스 10963" d="M24 0A24 24 0 1 1 0 24 24 24 0 0 1 24 0" style="fill:#b7bbff" />
        <path data-name="패스 10964" d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" transform="translate(-.001)" style="fill:#5762ff" />
        <path data-name="패스 10965" d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" transform="translate(.184)" style="fill:#fff" />
        <path data-name="패스 10966" d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:#020918" />
        <path data-name="패스 10967" d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" style="fill:#fff" />
        <path data-name="패스 10968" d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" style="fill:#020918" />
        <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(11 25)">
            <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff" />
        </g>
        <g data-name="그룹 14149">
            <g data-name="그룹 14148" style="clip-path:url(#6trxzx9fjb)" transform="translate(26.58 24.773)">
                <path data-name="패스 10969" d="M0 5.3a5.3 5.3 0 0 1 10.6 0" style="fill:#7079ff" />
            </g>
        </g>
        <path data-name="패스 10990" d="m24 37.624-1.39-1.54h2.78z" transform="translate(.39)" style="fill:#fff" />
    </g>
</svg>`);
    const [forthIuniCat, setForthIuniCat] = useState<string>(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <path data-name="패스 10985" d="M140.339 1.729a24 24 0 1 1-24 24 24 24 0 0 1 24-24" transform="translate(-116.339 -1.729)" style="fill:#b7bbff" />
    <path data-name="패스 10986" d="M150.284 12.034h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421s-8.78 12.045-12.664 21.753a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" transform="translate(-116.339 -1.729)" style="fill:#5762ff" />
    <path data-name="패스 10987" d="m140.339 37.624-1.39-1.54h2.78z" transform="translate(-116.339 -1.729)" style="fill:#fff" />
    <path data-name="사각형 5955" transform="translate(10.817 29.898)" style="fill:#fff" d="M0 0h10.604v1.051H0z" />
    <path data-name="사각형 5956" transform="translate(26.579 29.898)" style="fill:#fff" d="M0 0h10.604v1.051H0z" />
</svg>`);

    function catStyleLoad(){
        
    }

    function load() {

    }

    function update() {

    }

    function create() {

    }

    function getIuniCurrentCat() {
        return new Promise<IuniCatStyle>(resolve => {
            const iuniCat = new IuniCatStyle();
            iuniCat.background = '#b7bbff';
            iuniCat.body = '#5762ff';
            iuniCat.nose = '#fff';
            iuniCat.leftEyeWhite = '#fff';
            iuniCat.leftEye = '#020918';
            iuniCat.rightEyeWhite = '#fff';
            iuniCat.rightEye = '#020918';

            iuniCat.defaultDraw()
                .then(result => {
                    setIuniCat(() => result);
                    resolve(iuniCat);
                })
        })

    }

    /* 현재 선택된 부분 */
    const [activeCatPosition, setActiveCatPosition] = useState<string>();
    const [catStyle, setCatStyle] = useState<string>();

    useEffect(() => {
        load();
        getIuniCurrentCat().then(iuniCat => {
            iuniCat.injectEvent();
        })
    }, []);


    return (
        <>
            <div className="theme">
                <div className="theme-container">
                    <div className="theme-cat tallest-default-card">
                        <div className='p-1 theme-cat-setting-header'>
                            <div className='col theme-other-cat theme-content-center'>
                                <div>
                                    <div className="col-12">
                                        <div className="my-cat theme-flex theme-flex-center">
                                            <IuniCat />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 theme-flex theme-flex-center">
                                        <BlockPicker
                                            color={catColor}
                                            onChangeComplete={handleCatColor}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="theme-other-cat theme-flex-center">
                                    <div className="col">
                                        <h2>아유니 시간대별 모습들</h2>
                                    </div>
                                </div>

                                <div className="theme-other-cat theme-flex-center mt-2">
                                    <div className="col">
                                        <div dangerouslySetInnerHTML={{ __html: firstIuniCat }}>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2>6am ~ 9am</h2>
                                    </div>
                                </div>

                                <div className="theme-other-cat theme-flex-center mt-1">
                                    <div className="col">
                                        <div dangerouslySetInnerHTML={{ __html: secondIuniCat }}>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2>9am ~ 2pm</h2>
                                    </div>
                                </div>

                                <div className="theme-other-cat theme-flex-center mt-1">
                                    <div className="col">
                                        <div dangerouslySetInnerHTML={{ __html: thirdIuniCat }}>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2>6pm ~ 10pm</h2>
                                    </div>
                                </div>

                                <div className="theme-other-cat theme-flex-center">
                                    <div className="col">
                                        <div dangerouslySetInnerHTML={{ __html: forthIuniCat }}>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h2>10pm ~ 6am</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="favorite-card-theme">

                <div className="theme-list">
                    테마리스트
                </div>
                <div className="favorite-cards">
                    테마 카드
                    <div className="card" data-index="0">

                    </div>
                </div>

                <div className="theme-color-picker">
                    테마 색상 코르기
                </div>
            </div>
        </>
    )
}