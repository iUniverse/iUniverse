import React, { useEffect, useState } from 'react';
import { checkInitTheme, createInitTheme } from 'api/theme/card-theme';

export default function Index(props : any){
    const [catHead, setCatHead] = useState("");
    const [catEye, setCatEye] = useState("");
    const [catBody, setCatBody] = useState("");
    const [currentColors, setCurrentColor] = useState([]);
    const cardCount = 12;
    function load(){
        
    }

    function update(){

    }

    function create(){

    }

    // function createInit(theme_name_list : string[]) : Promise<boolean> {
    //     return new Promise(resolve => {
    //         let funcs = [];
    //         for(let theme_name of theme_name_list){
    //             funcs.push(createInitTheme(theme_name));
    //         }
    //         Promise.all([...funcs])
    //         .then(result => {
    //             const error = result.find(d => d === false);
    //             if(error === undefined){
    //                 resolve(true);
    //             } else {
    //                 resolve(false);
    //             }
    //         })
    //     })
    // }

    // function checkInit() : Promise<string[]>{
    //     const theme_name_list = ['기본테마', '모노테마', '코지테마','트로피컬테마'];        
    //     return new Promise(resolve => {
    //         Promise.all([
    //             checkInitTheme(theme_name_list[0]), 
    //             checkInitTheme(theme_name_list[1]), 
    //             checkInitTheme(theme_name_list[2]),
    //             checkInitTheme(theme_name_list[4])
    //         ])
    //         .then(async result => {
    //             let not_exist_theme = [];
    //             let i = 0;
    //             for(const value of result){
    //                 if(value === false){
    //                     not_exist_theme.push(theme_name_list[i])
    //                 }
    //                 i++;
    //             }
    //             resolve(not_exist_theme);
    //         })
    //     })
    // }

    useEffect(() => {
        //load();
        load();
    }, []);

    return(
        <>
            <div className="theme-container">

            </div>
            <div className="iuni-mascort">
                <div className="cat-head">
                    
                </div>
                <div className="cat-eye">

                </div>
                <div className="cat-body">

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