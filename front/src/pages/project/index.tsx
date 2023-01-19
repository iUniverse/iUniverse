import React from 'react';
import { Col, Row, Card, Space, Tooltip, Button, AutoComplete, Input} from 'antd';
import { SearchOutlined, PlusOutlined, UnorderedListOutlined, TableOutlined,
    EditOutlined, DeleteOutlined, SettingOutlined, LinkOutlined} from '@ant-design/icons';

export default function Index(props : any) {
    return (
        <>
            <Space size="middle" style={{ display: 'flex' }}>
                <Tooltip title="찾아보기">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Tooltip title="추가하기">
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                </Tooltip>
                <Tooltip title="리스트 형식으로 보기">
                    <Button type="primary" shape="circle" icon={<UnorderedListOutlined />} />
                </Tooltip>
                <Tooltip title="테이블 형식으로 보기">
                    <Button type="primary" shape="circle" icon={<TableOutlined />} />
                </Tooltip>
            </Space>
            <br />
            <Space direction='vertical' size="middle" style={{ display: 'flex' }}>
                <Row gutter={[16, 16]}>
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

