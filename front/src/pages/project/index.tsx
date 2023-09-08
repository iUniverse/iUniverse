import React, { useEffect, useState } from 'react';
import { loadProject } from 'api/project/project';
import { useRouter } from 'next/router';
import Favorite from './favorite';
import MyProject from './my_project';
import { Project } from './interface';
import { getMyInitTheme } from 'api/theme/card-theme';
import dynamic from 'next/dynamic';

export default function Index(props : any) {
    const Banner = dynamic(() => import("./banner"), { ssr: false });
    const [favoriteProjects, setFavoriteProjects] = useState<Array<Project>>([]);
    const [projects, setProjects] = useState<Array<Project>>([]);
    const [colors, setcolors] = useState<string[]>([]);
    const [fontColor, setfontColor] = useState<string>('');
    
    const router = useRouter();
    
    function load(){
        loadProject().then(result => {
            setFavoriteProjects(() => [...result.favorite_projects]);
            setProjects(() => [...result.normal_projects])
        });
    }
     /* 기본 테마 설정 */
     async function settingTheme(id: number) {
        //현재 설정한 나의 테마 정보 가져오기
        const theme = await getMyInitTheme();
        if (theme !== null) {
            setcolors(() => theme.colors);
            setfontColor(() => theme.fontColor);
        }
    }

    useEffect(() => {
        load();
        settingTheme(0);
    }, []);

    return(
        <>
            <div className="project-container">
                <Banner 
                    setcolors = {setcolors}
                    bannerColor = {colors[0] === undefined ? "" : colors[0]}
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

