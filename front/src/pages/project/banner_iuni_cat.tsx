import { IuniCatStyle } from 'api/project/iuni-cat';
import { findMyIuniCat } from 'api/theme/iuni-cat-theme';
import IuniCat from 'pages/theme/iuni_cat';
import React, { useEffect, useState } from 'react';
import { CatStyle } from './interface';



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
        </>
    )
}