import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
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