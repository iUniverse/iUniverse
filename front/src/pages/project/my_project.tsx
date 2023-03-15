import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function MyProject(props:any){
    return(
        <>
            <div className="project">
                <div className="project-btn-list">
                    <div className="project-btn">
                        <div className="project-btn-icon">
                            <img src={"/img/project/my_project.png"} />
                        </div>
                        <span className="favorite-btn-name col-8">
                            내 프로젝트
                        </span>
                    </div>
                </div>
                <div className="project-card-list">
                    <div className="project-card no-content-card">
                        <div className="no-content-card-header">
                            <div className="project-name">
                                김링고의 집사 수명줄이기 프로젝트1
                                김링고의 집사 수명줄이기 프로젝트2
                                김링고의 집사 수명줄이기 프로젝트3
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="favorite-project-icon-list">
                                <div className="favorite-project-icon">
                                    <img src={"/img/project/project_heart.png"} />
                                </div>
                                <div className="favorite-project-icon">
                                    <img src={"/img/project/project_mountain.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card no-content-card">
                        <div className="no-content-card-header">
                            <div className="project-name">
                                김링고의 집사 수명줄이기 프로젝트1
                            </div>
                        </div>
                        <div className="no-content-card-footer">
                            <div className="project-icon-list">
                                <div className="project-icon">
                                    <img src={"/img/project/project_heart.png"} />
                                </div>
                                <div className="project-icon">
                                    <img src={"/img/project/project_mountain.png"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-card card">

                    </div>
                    <div className="project-card card">

                    </div>
                    <div className="project-card card">

                    </div>
                </div>
            </div>
        </>
    )
}


