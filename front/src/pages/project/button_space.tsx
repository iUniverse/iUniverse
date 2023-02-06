import React from 'react';
import { Space, Tooltip, Button } from 'antd';
import { SearchOutlined, PlusOutlined, UnorderedListOutlined, TableOutlined } from '@ant-design/icons';
import { createProject } from '../../api/project/project'; 

interface Props {
    setProjects : React.Dispatch<React.SetStateAction<Array<object>>>
}

export default function ButtonSpace(props : Props){
    async function create() {
        const project : object = await createProject('무제');
        props.setProjects(prev => [project, ...prev])
    }
    return(
        <>
            <Space size="middle" style={{ display: 'flex' }}>
                <Tooltip title="찾아보기">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Tooltip title="추가하기">
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => create()}/>
                </Tooltip>
                <Tooltip title="리스트 형식으로 보기">
                    <Button type="primary" shape="circle" icon={<UnorderedListOutlined />} />
                </Tooltip>
                <Tooltip title="테이블 형식으로 보기">
                    <Button type="primary" shape="circle" icon={<TableOutlined />} />
                </Tooltip>
            </Space>
            <br/>
        </>
    )
}