import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { createProject, updateProject } from '../../api/project/project';

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
    favorite_projects: Project[]
    setProjects: Dispatch<SetStateAction<Project[]>>
    setFavoriteProjects: Dispatch<SetStateAction<Project[]>>
}

export default function MyProject(props: Props) {
    function moveTaskPage() {
        console.log('moveTaskPage!!');
    }
    /* 프로젝트 생성 */
    async function create() {
        const result = await createProject('무제');

        if (result.statusCode === 400)
            throw new Error('프로젝트 생성도중 에러가 발생 했어요.')

        props.setProjects(prev => [result, ...prev])
    }

    function checkFavoriteCount() {
        if (props.favorite_projects.length >= 4) {
            return false;
        } else {
            return true;
        }
    }
    /* 즐겨찾기 프로젝트로 수정 */
    async function updateFavorite(id: number, type: boolean) {
        const obj = {
            'key': 'isFavorite',
            'value': JSON.stringify(type),
            'id': id
        }

        const result = await updateProject(obj);
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
                        style={{ width: '35px', height: '35px' }}
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
                                    <div className="project-card no-content-card" key={value.id} onClick={() => moveTaskPage()}>
                                        <div className="project-name">
                                            {value.name}
                                        </div>
                                        <div className="card-footer">
                                            <div className="favorite-project-icon-list">
                                                {
                                                    value.isFavorite === false ?
                                                        <div className="favorite-project-icon" onClick={() => updateFavorite(value.id, true)}>
                                                            <img src={"/img/project/project_heart.png"} />
                                                        </div> :
                                                        <div className="favorite-project-icon" onClick={() => updateFavorite(value.id, false)}>
                                                            <img src={"/img/project/heart.png"} />
                                                        </div>
                                                }

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
                                            style={{ width: '320px', height: '195px' }} />
                                    </div>

                                    <div className="w-auto mt-2">
                                        <div className="p-1 project-empty-create-btn">
                                            새로운 프로젝트 만들기
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


