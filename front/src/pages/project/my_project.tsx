import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { createProject } from '../../api/project/project';

interface Project{
    id : number,
    name : string,
    description : string,
    createDate : string,
    dueDate : string,
    startDate : string,
    endDate : string,
    isFavorite : boolean,
    isPrivate : boolean,
    processRate : number,
    statusId : number,
    typeId : number,
    color : string
}

interface Props {
    projects: Project[]
    setProjects: Dispatch<SetStateAction<Project[]>>
}

export default function MyProject(props: Props) {
    /* 프로젝트 생성 */
    async function create() {
        createProject('무제').then(result => {
            if (result.statusCode === 400) {
                throw new Error('프로젝트 생성도중 에러가 발생 했어요.');
            }
            props.setProjects(prev => [result, ...prev]);
        })
    }

    return (
        <>
            <div className="project">
                <div className="add-project-btn" onClick={() => create()}>

                </div>
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
                    {
                        props.projects.map((value, index) => (
                            <div className="project-card no-content-card" key={value.id}>
                                <div className="project-name">
                                    {value.name}
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
                        ))
                    }
                </div>
            </div>
        </>
    )
}


