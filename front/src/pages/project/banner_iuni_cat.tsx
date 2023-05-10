import { IuniCatStyle } from 'api/project/iuni-cat';
import { findMyIuniCat } from 'api/theme/iuni-cat-theme';
import IuniCat from 'pages/theme/iuni_cat';
import React, { useEffect, useState } from 'react';
import { Cron } from 'react-js-cron';
export interface CatStyle {
    background : string;
    leftEye : string;
    leftEyeWhite : string;
    rightEye : string,
    rightEyeWhite : string;
    nose : string
    body : string;
}

interface Props{
    timePeriod : string;
}

export default function BannerIuniCat(props : Props){
    const [catStyle, setCatStyle] = useState<CatStyle>();
    const [myCat, setMyCat] = useState<string>('');
    function handlePart(val : string) {
        console.log(val);
    }
    const [value, setValue] = useState('')
    async function findMyCatStyle(){
        const result = await findMyIuniCat();
        const cat = new IuniCatStyle();
        cat.timePeriod = props.timePeriod;
        cat.background = result.background;
        cat.body = result.body;
        cat.leftEye = result.leftEye;
        cat.leftEyeWhite = result.leftEyeWhite;
        cat.rightEye = result.rightEye;
        cat.rightEyeWhite = result.rightEyeWhite;
        cat.nose = result.nose;

        cat.draw().then(result => {
            if(result === 'Draw Cat Error'){
                alert("고양이가 도망갔어요");
                return false;
            } else {
                setMyCat(() => result);
            }
        })
        
    }   

    
    useEffect(() => {
        findMyCatStyle()
    }, [props.timePeriod]);

    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: myCat }}>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path data-name="iuni-cat-background" 
                    d="M24 0A24 24 0 1 1 0 24 24 24 0 0 1 24 0" 
                    fill={catStyle?.background} 
                    onClick={() => handlePart('background')}/>
                <path data-name="iuni-cat-body" 
                    d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" 
                    fill={catStyle?.body} 
                    onClick={() => handlePart('body')} />
                <path data-name="iuni-cat-nose" d="m24 37.624-1.39-1.54h2.78z" fill="#fff" onClick={() => handlePart('nose')}/>`;
                <path data-name="iuni-cat-left-eye-white" 
                    d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    fill={catStyle?.leftEyeWhite} 
                    onClick={() => handlePart('leftEyeWhite')} />
                <path data-name="iuni-cat-left-eye"
                     d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865"
                    fill={catStyle?.leftEye} 
                    onClick={() => handlePart('leftEye')} />
                <path data-name="iuni-cat-right-eye-white" 
                    d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    fill={catStyle?.rightEyeWhite} 
                    onClick={() => handlePart('rightEyeWhite')} />
                <path data-name="iuni-cat-right-eye" 
                    d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" 
                    fill={catStyle?.rightEye} 
                    onClick={() => handlePart('rightEye')} />
            </svg>   */}
        </>
    )
}