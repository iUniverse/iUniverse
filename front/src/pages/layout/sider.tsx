import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React ,{ useState } from 'react'
const {Sider} = Layout;

export default function IUniSider(props : any){
    return(
        <>
            <Sider trigger={null} collapsible collapsed={props.collapsed}>
                <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: '프로젝트',
                            onClick: () => props.handlePageTitle('프로젝트'),
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: '나의 업무',
                            onClick: () => props.handlePageTitle('나의업무'),
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: '난나나나나',
                            onClick: () => props.handlePageTitle('난나나나나'),
                        },
                        ]}
                    />
                </Sider>
        </>
    )
}