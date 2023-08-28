import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React ,{ useState } from 'react'


export default function IUniHeader(props : any) {
    return(
        <>
            {/* <Header style={{ padding: 0, background: colorBgContainer }}>
                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => props.toggleCollapse(),
                    })}
                <span>{props.pageTitle}</span>
            </Header> */}
            
            <div className="iuni_header item row center">
                <div className="col-5 p-1 pl-2 pb-2 pt-2">
                    <div className="banner card w-100">

                    </div>
                </div>
                <div className="col-7 p-1 pr-2 pb-2 pt-2">
                    <div className="banner card w-100">

                    </div>
                </div>
            </div>
        </>
    )
}