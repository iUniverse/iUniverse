import React, { useEffect, useState, Dispatch, SetStateAction, MouseEvent } from 'react';
import router, { useRouter } from 'next/router';
import { createProject, updateProject } from '../../api/project/project';
import { loadMyTheme } from 'api/theme/card-theme';
import { createProjectTheme } from 'api/project-theme-map/project-theme-map';
import { Project } from './interface';
import { initBaseTypeCheck } from 'api/baseType/baseType';
import { initCreateBoard } from 'api/task/board';



interface Props {
    projects: Project[]
    favorite_projects: Project[]
    setProjects: Dispatch<SetStateAction<Project[]>>
    setFavoriteProjects: Dispatch<SetStateAction<Project[]>>
}

export default function MyProject(props: Props) {
    function moveTaskPage(id: number) {
        router.push(`/task?iuni_project=${id}&p_category=my_project`);
    }

    /* 프로젝트 생성 */
    async function create() {
        const result = await createProject('무제');
        if (result.statusCode === 400)
            throw new Error('프로젝트 생성도중 에러가 발생 했어요.');
        props.setProjects(prev => [result, ...prev]);
        initCreateBoard(result.id);
        initBaseTypeCheck(result.id);
        
        const my_theme_list = await loadMyTheme();        
        my_theme_list.themeList.map((theme: any) => {

            createProjectTheme({
                'projectId': result.id,
                'themeId': theme.id,
                'userId': 0,
                'isUse': theme.otherName === 'basic' ? true : false
            });
        });
    }

    function checkFavoriteCount() {
        if (props.favorite_projects.length >= 4) {
            return false;
        } else {
            return true;
        }
    }
    /* 즐겨찾기 프로젝트로 수정 */
    async function updateFavorite(e: MouseEvent<HTMLElement>, id: number, type: boolean) {
        console.log('%c [ id ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', id)
        e.stopPropagation();
        const obj = {
            'key': 'isFavorite',
            'value': JSON.stringify(type),
            'id': id
        }

        const result = await updateProject(obj);
        console.log('%c [ result ]-63', 'font-size:13px; background:pink; color:#bf2c9f;', result)
        
        if (result.statusCode === 400) {
            throw new Error('즐겨찾기 추가 도중 에러가 발생 했어요.');
        } else {

            if (type === true) {
                const favorite_project = props.projects.find(p => p.id === id);
                if (favorite_project !== undefined) {
                    props.setFavoriteProjects(prev => [favorite_project, ...prev])
                }

                const data = props.projects.find(p => p.id === id);
                // if(data !== undefined){
                //     props.setProjects(prev => [data, ...prev]);
                // }
                props.setProjects(prev => {
                    const data = prev.find(p => p.id === id);
                    if (data !== undefined) {
                        data.isFavorite = true;
                    }
                    return [...prev];
                })

            } else {
                props.setFavoriteProjects(prev => {
                    const i = prev.findIndex(p => p.id === id);
                    prev.splice(i, 1);
                    return [...prev];
                });

                props.setProjects(prev => {
                    const data = prev.find(p => p.id === id);
                    if (data !== undefined) {
                        data.isFavorite = false;
                    }
                    return [...prev];
                })
            }

        }
    }



    return (
        <>
            <div className="project">
                <div className="add-project-btn" onClick={() => create()}>
                    <img src={"/img/project/bt-add-default.webp"}
                        style={{ width: "24px", height: "24px" }}
                    />
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
                {
                    props.projects.length > 0 ?
                        <div className="project-card-list">
                            {
                                props.projects.map((value, index) => (
                                    <div className="project-card no-content-card card-shadow" key={value.id} onClick={() => moveTaskPage(value.id)}>
                                        <div className="project-name">
                                            {value.name}
                                        </div>
                                        <div className="card-footer">
                                            <div className="favorite-project-icon-list">
                                                <div className="favorite-project-icon" onClick={(e:MouseEvent<HTMLElement>) => updateFavorite(e, value.id, !value.isFavorite)}>
                                                    <img src={value.isFavorite ? "/img/project/heart.png" : "/img/project/project_heart.png"} />
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
                        :
                        <div className="project-empty">
                            <div className="empty-card">
                                <div className="col-12 row-column theme-content-center">
                                    <div className="w-auto">
                                        <img src={"/img/project/empty-project.webp"}
                                            style={{ width: '16.6667vw', height: '10.1563vw' }} />
                                    </div>

                                    <div className="w-auto mt-1r" style={{ width: '11.1979vw' }} onClick={() => create()}>
                                        <div className="p-0-5 project-empty-create-btn">
                                            <img src={"/img/project/btn-add-blue.webp"}
                                                style={{ width: '1.2448vw', height: '1.2448vw', marginRight: '3%' }} />
                                            <span>
                                                새로운 프로젝트 만들기
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                }
            </div>
        </>
    )
}


