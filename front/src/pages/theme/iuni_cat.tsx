import React, { useEffect, useState } from 'react';
export interface CatStyle {
    background : string;
    leftEye : string;
    leftWhiteEye : string;
    rightEye : string,
    rightWhiteEye : string;
    nose : string
    body : string;
}

export default function IuniCat(props){
    const [catStyle, setCatStyle] = useState<CatStyle>();
    const [background, setBackground] = useState<string>();
    const [leftEye, setLeftEye] = useState<string>();
    const [leftWhiteEye, setLeftWhiteEye] = useState<string>();
    const [rightEye, setRightEye] = useState<string>();
    const [rightWhiteEye, setRightWhiteEye] = useState<string>();
    const [nose, setNose] = useState<string>();
    const [body, setBody] = useState<string>();

    function handlePart(part : string){
        console.log(part);
    }

    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 48 48">
                <path data-name="iuni-cat-background" 
                    d="M24 0A24 24 0 1 1 0 24 24 24 0 0 1 24 0" 
                    fill="#b7bbff" 
                    onClick={() => handlePart('background')}/>
                <path data-name="iuni-cat-body" 
                    d="M33.945 10.305h-2.42l-3.337 6.936h-8.375l-3.337-6.936h-2.421S5.275 22.35 1.391 32.058a24 24 0 0 0 45.219 0c-3.885-9.708-12.665-21.753-12.665-21.753" 
                    fill="#5762ff"
                    onClick={() => handlePart('body')} />
                <path data-name="iuni-cat-nose" d="m24 37.624-1.39-1.54h2.78z" fill="#fff" onClick={() => handlePart('nose')}/>`;
                <path data-name="iuni-cat-left-eye-white" 
                    d="M16.119 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    fill="#fff"
                    onClick={() => handlePart('leftEyeWhite')} />
                <path data-name="iuni-cat-left-eye"
                     d="M16.119 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865"
                    fill="#020918"
                    onClick={() => handlePart('leftEye')} />
                <path data-name="iuni-cat-right-eye-white" 
                    d="M31.882 35.59a5.3 5.3 0 1 1 5.3-5.3 5.3 5.3 0 0 1-5.3 5.3" 
                    fill="#fff"
                    onClick={() => handlePart('rightEyeWhite')} />
                <path data-name="iuni-cat-right-eye" 
                    d="M31.882 33.153a2.865 2.865 0 1 1 2.864-2.865 2.865 2.865 0 0 1-2.864 2.865" 
                    fill="#020918"
                    onClick={() => handlePart('rightEye')} />
            </svg>  
        </>
    )
}
