import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Space, Tooltip, Button, AutoComplete, Input} from 'antd';
import { SearchOutlined, PlusOutlined, UnorderedListOutlined, TableOutlined,
    EditOutlined, DeleteOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';
import ButtonSpace from './button_space';

export default function Index(props : any) {
    const [ids, setId] = useState<Array<number>>([]);
    function handleIds(id: number): void { setId(prev => [id, ...prev]) }
    
    //프로젝트 전체 로드
    function load(){

    }

    useEffect(() => {
        load()
    }, []);
    
    return (
        <>
            <ButtonSpace></ButtonSpace>
            <Space direction='vertical' size="middle" style={{ display: 'flex' }}>
                <Row gutter={[16, 16]}>
                    {
                        ids.map(id => {
                            <Col span={6}>
                                <Card 
                                    type="inner" 
                                    title="프로젝트 001" 
                                    hoverable={true} 
                                    bordered={true} 
                                    style={{ width: '100%' }} 
                                    extra={<a href="#">More</a>}
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
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Col>
                        })
                    }
                    <Col span={6}>
                        <Card type="inner" 
                            title="프로젝트 002" 
                            hoverable={true} bordered={true} 
                            style={{ width: '100%' }} 
                            extra={<a href="#">More</a>}
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <DeleteOutlined key="ellipsis" />
                            ]}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card type="inner" 
                            title="프로젝트 003" 
                            hoverable={true} 
                            bordered={true} 
                            style={{ width: '100%' }} 
                            extra={<a href="#">More</a>}
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <DeleteOutlined key="ellipsis" />
                            ]}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card type="inner" 
                            title="프로젝트 004" 
                            hoverable={true} 
                            bordered={true} 
                            style={{ width: '100%' }} 
                            extra={<a href="#">More</a>}
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <DeleteOutlined key="ellipsis" />
                            ]}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </Space>
        </>
    )
}

