import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Space, Tooltip, Button, AutoComplete, Input} from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import ButtonSpace from './button_space';
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
    
    const router = useRouter();
    
    function load(){
        loadProject().then(result => {
            console.log(result);
            setFavoriteProjects(() => [...result.favorite_projects]);
            setProjects(() => [...result.normal_projects])
        });
    }
    
    useEffect(() => {
        load()
    }, []);

    return(
        <>
            <div className="project-container">
                <Banner />
                <Favorite 
                    projects = {favoriteProjects}
                    setProjects = {setProjects}
                    setFavoriteProjects = {setFavoriteProjects}
                />
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

