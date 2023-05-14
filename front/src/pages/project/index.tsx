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
    const [favoriteBColors, setFavoriteBColors] = useState<string[]>([]);
    const [favoriteBadgeColor,setFavoriteBadgeColors] = useState<string[]>([]);
    const [favoriteTColor, setFavoriteTColor] = useState<string>('');
    
    const router = useRouter();
    
    function load(){
        loadProject().then(result => {
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
                    setFavoriteBColors = {setFavoriteBColors}
                    setFavoriteTColor = {setFavoriteTColor}
                    setFavoriteBadgeColors = {setFavoriteBadgeColors}
                />
                {
                    projects.length > 0 &&
                    <Favorite 
                    projects = {favoriteProjects}
                    setProjects = {setProjects}
                    setFavoriteProjects = {setFavoriteProjects}
                    favoriteFontColor = {favoriteTColor}
                    favoriteBgColor = {favoriteBColors}
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

