import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React ,{ useState } from 'react'
import { useRouter } from 'next/router';
const {Sider} = Layout;


export default function IUniSider(props : any){
    const router = useRouter();
    const routerPush = (title : string, routerPath : string) => {
        props.handlePageTitle(title);
        router.push(routerPath);
    }

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
                            onClick: () => routerPush('프로젝트', '/project'),
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
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: '태스크',
                            onClick: () => routerPush('태스크', '/iuni_task')
                        },
                        ]}
                    />
                </Sider>
        </>
    )
}