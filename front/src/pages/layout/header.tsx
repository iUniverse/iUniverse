import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme} from 'antd';
import React ,{ useState } from 'react'
const { Header } = Layout;

export default function IUniHeader(props : any) {

    const { token: { colorBgContainer }, } = theme.useToken();
    return(
        <>
            {/* <Header style={{ padding: 0, background: colorBgContainer }}>
                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => props.toggleCollapse(),
                    })}
                <span>{props.pageTitle}</span>
            </Header> */}
            <div className="iuni_header item">Header</div>
        </>
    )
}