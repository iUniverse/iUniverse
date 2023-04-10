import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { updateProject } from "../../api/project/project";
interface Project {
    id: number,
    name: string,
    description: string,
    createDate: string,
    dueDate: string,
    startDate: string,
    endDate: string,
    isFavorite: boolean,
    isPrivate: boolean,
    processRate: number,
    statusId: number,
    typeId: number,
    color: string
}

interface Props {
    projects: Project[]
    favoriteBgColor : string[]
    setFavoriteProjects: Dispatch<SetStateAction<Project[]>>
    setProjects: Dispatch<SetStateAction<Project[]>>
    favoriteFontColor : string
}

export default function Favorite(props: Props) {

    /* 프로젝트 즐겨찾기 on / off */
    async function updateFavorite(id: number) {
        const obj = {
            'key': 'isFavorite',
            'value': JSON.stringify(false),
            'id': id
        }

        const result = await updateProject(obj);
        if (result.statusCode === 400) {
            throw new Error('즐겨찾기 추가 도중 에러가 발생 했어요.');
        } else {
            const data = props.projects.find(p => p.id === id);
            if(data !== undefined){
                props.setProjects(prev => [data, ...prev]);
            }

            props.setFavoriteProjects(prev => {
                const i = prev.findIndex(p => p.id === id);
                prev.splice(i, 1);
                return [...prev];
            });
        }
    }

    return (
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
                    {
                        props.projects.map((value, index) => (
                            <div className="favorite-card card" key={`favorite_${value.id}`} style={{backgroundColor : `${props.favoriteBgColor[index]}`}}>
                                <div className="card-header">
                                    <div className="favorite-d-day badge" style={{color : `${props.favoriteFontColor}`}}>
                                        <span>D-13</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="favorite-project-name" style={{color : `${props.favoriteFontColor}`}}>
                                        {value.name}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="favorite-project-icon-list">
                                        <div className="favorite-project-icon" onClick={() => updateFavorite(value.id)}>
                                            <img src={"/img/project/heart.png"} />
                                        </div>
                                        <div className="favorite-project-icon">
                                            <img src={"/img/project/mountain.png"} />
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