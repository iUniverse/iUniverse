import React, { useEffect, useState } from 'react';
import { loadProject } from 'api/project/project';
import { useRouter } from 'next/router';
import Banner from './banner';
import Favorite from './favorite';
import MyProject from './my_project';



export interface Project{
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

export default function Index(props : any) {
    const [favoriteProjects, setFavoriteProjects] = useState<Array<Project>>([]);
    const [projects, setProjects] = useState<Array<Project>>([]);
    const [colors, setcolors] = useState<string[]>([]);
    const [fontColor, setfontColor] = useState<string>('');
    
    const router = useRouter();
    
    function load(){
        loadProject().then(result => {
            console.log(result);
            setFavoriteProjects(() => [...result.favorite_projects]);
            setProjects(() => [...result.normal_projects])
        });
    }
    
    useEffect(() => {
        load();
    }, []);

    return(
        <>
            <div className="project-container">
                <Banner 
                    setcolors = {setcolors}
                    bannerColor = {colors[0]}
                    fontColor = {fontColor}
                    setfontColor = {setfontColor}
                />
                {
                    projects.length > 0 &&
                    <Favorite 
                    projects = {favoriteProjects}
                    setProjects = {setProjects}
                    setFavoriteProjects = {setFavoriteProjects}
                    favoriteFontColor = {fontColor}
                    favoriteBgColor = {colors}
                    />
                }
                
                <MyProject
                    projects = {projects}
                    favorite_projects = {favoriteProjects}
                    setProjects = {setProjects}
                    setFavoriteProjects = {setFavoriteProjects}
                />
            </div>            
        </>
    )
}

