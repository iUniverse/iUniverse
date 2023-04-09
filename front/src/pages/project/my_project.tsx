import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { createProject, updateProject } from '../../api/project/project';

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
    favorite_projects : Project[]   
    setProjects: Dispatch<SetStateAction<Project[]>>
    setFavoriteProjects : Dispatch<SetStateAction<Project[]>>
}

export default function MyProject(props: Props) {
    function moveTaskPage(){
        console.log('moveTaskPage!!');
    }
    /* 프로젝트 생성 */
    async function create() {
        const result = await createProject('무제');
    
        if(result.statusCode === 400)
            throw new Error('프로젝트 생성도중 에러가 발생 했어요.')
        
        props.setProjects(prev => [result, ...prev])
    }

    function checkFavoriteCount(){
        if(props.favorite_projects.length >= 4){
            return false;
        } else {
            return true;           
        }
    }
    /* 즐겨찾기 프로젝트로 수정 */
    async function updateFavorite(id:number){   
        if(checkFavoriteCount() === false){
            alert("즐겨찾기는 4개 까지만 추가할 수 있어요.");
            return;
        }
    
        const obj = {
            'key' : 'isFavorite',
            'value' : JSON.stringify(true),
            'id': id
        }

        const result = await updateProject(obj);        
        if(result.statusCode === 400){
            throw new Error('즐겨찾기 추가 도중 에러가 발생 했어요.');
        } else {
            const favorite_project = props.projects.find(p => p.id === id);
            if(favorite_project !== undefined){
                props.setFavoriteProjects(prev => [favorite_project, ...prev])
            }

            props.setProjects(prev => {
                const i = prev.findIndex(p => p.id === id);
                prev.splice(i, 1);
                return [...prev];
            })
        }
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
                            <div className="project-card no-content-card" key={value.id} onClick={() => moveTaskPage()}>
                                <div className="project-name">
                                    {value.name}
                                </div>
                                <div className="card-footer">
                                    <div className="favorite-project-icon-list">
                                        <div className="favorite-project-icon" onClick={() => updateFavorite(value.id)}>
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


