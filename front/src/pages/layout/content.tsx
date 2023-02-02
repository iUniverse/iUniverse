import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

export default function IUniContent(props : any){
    const { token: { colorBgContainer }, } = theme.useToken();
    return(
        <>
            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '30vh',
                background: colorBgContainer,
                }}>
                {props.page}
            </Content>
        </>
    )
}