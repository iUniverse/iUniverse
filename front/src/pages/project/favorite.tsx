import React, { useEffect, useState, Dispatch, SetStateAction, MouseEvent } from 'react';
import router, { useRouter } from 'next/router';
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
    console.log(props.projects);

    function moveTaskPage(id: number) {
        console.log('moveTaskPage!!');
        router.push(`/task?iuni_project=${id}&p_category=favorite`);
    }
    /* 프로젝트 즐겨찾기 on / off */
    async function updateFavorite(e : MouseEvent<HTMLDivElement>,id: number) {
        e.stopPropagation();
    
        const obj = {
            'key': 'isFavorite',
            'value': JSON.stringify(false),
            'id': id
        }

        const result = await updateProject(obj);
        if (result.statusCode === 400) {
            throw new Error('즐겨찾기 추가 도중 에러가 발생 했어요.');
        } else {

            props.setFavoriteProjects(prev => {
                const i = prev.findIndex(p => p.id === id);
                prev.splice(i, 1);
                return [...prev];
            });
            
        }
    }


    function hexToRgb(hex: string, alpha:number) {
        console.log(hex);
        let r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
      
        if (0 <= alpha && alpha <= 1) {
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        } else {
          return `rgb(${r}, ${g}, ${b})`
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
                            <div className="favorite-card card" 
                                onClick={() => moveTaskPage(value.id)} 
                                key={`favorite_${value.id}`} 
                                style={{background : `${props.favoriteBgColor[index]}`}}>
                                <div className="card-header">
                                    <div className="favorite-d-day badge" style={{background:`${hexToRgb(props.favoriteFontColor, 0.1)}`}}>
                                        <p style={{color : `${props.favoriteFontColor}`}}>D-13</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="favorite-project-name" style={{color : `${props.favoriteFontColor}`}}>
                                        {value.name}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="favorite-project-icon-list">
                                        <div className="favorite-project-icon" onClick={(e : MouseEvent<HTMLDivElement>) => updateFavorite(e, value.id)}>
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