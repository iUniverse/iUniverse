import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Space, Tooltip, Button, AutoComplete, Input} from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import ButtonSpace from './button_space';
import { loadProject } from 'api/project/project';
import { useRouter } from 'next/router';

export interface Project{
    id : number,
    name : string,
    description : string,
    createDate : string,
    dueDate : string,
    startDate : string,
    endDate : String,
    isPrivate : boolean,
    processRate : number,
    statusId : number,
    typeId : number,
    color : string
}

export default function Index(props : any) {
    const [projects, setProjects] = useState<Array<Project>>([]);
    const router = useRouter();    
    
    //프로젝트 전체 로드
    async function load(){
        let projects = await loadProject();
        setProjects(() => [...projects]);
    }

    useEffect(() => {
        load()
    }, []);

    return (
        <>
            <ButtonSpace setProjects={setProjects}></ButtonSpace>
            <Space direction='vertical' size="middle" style={{ display: 'flex' }}>
                <Row gutter={[16, 16]}>
                    <>
                    {
                        projects.map((project, index) => {
                            return <Col span={6} key={index}>
                                <Card 
                                    type="inner" 
                                    title={project.name}
                                    hoverable={true} 
                                    bordered={true} 
                                    style={{ width: '100%' }} 
                                    extra={<span onClick={() => router.push(`/project/detail?id=${project.id}`)}>More</span>}
                                    actions={[
                                        <Tooltip placement="bottom" color="cyan" title="설정하기">
                                            <SettingOutlined key="setting" />
                                        </Tooltip>,
                                        <Tooltip placement="bottom" color="cyan" title="연결된 프로젝트 보기">
                                            <LinkOutlined key="link" />
                                        </Tooltip>,
                                        <Tooltip placement="bottom" color="cyan" title="수정하기">
                                            <EditOutlined key="edit" />
                                        </Tooltip>,
                                        <Tooltip placement="bottom" color="cyan" title="삭제하기">
                                            <DeleteOutlined key="ellipsis" />
                                        </Tooltip>,
                                    ]}>
                                    <p>설명 : {project.description}</p>
                                    <p>상태 : {project.statusId}</p>
                                    <p>Card content</p>
                                    <p>생성날짜 : {project.createDate}</p>
                                </Card>
                            </Col>
                        })
                    }
                    </>
                </Row>
            </Space>
        </>
    )
}

