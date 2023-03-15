import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

export default function Favorite(props:any){
    return(
        <>
            <div className="favorite">
                <div className="favorite-btn-list">
                    <div className="favorite-btn">
                        <div className="favorite-btn-icon">
                            <img src={"/img/project/favorite.png"} />
                        </div>
                        <span className="favorite-btn-name col-8">
                            즐겨찾기
                        </span>
                    </div>
                </div>
                <div className="favorite-card-list">
                    <div className="favorite-card card">
                        <div className="card-header">
                            <div className="favorite-d-day badge">
                                <span>D-13</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="favorite-project-name">
                                김망고의 감성 꾹꾹이 아지트
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="favorite-project-icon-list">
                                <div className="favorite-project-icon">
                                    <img src={"/img/project/heart.png"} />
                                </div>
                                <div className="favorite-project-icon">
                                    <img src={"/img/project/mountain.png"} />
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}