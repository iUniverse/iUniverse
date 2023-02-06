import { Col, Form, Row, Input, Card, DatePicker, Switch, Select } from "antd";
import { getProject } from "api/project/project";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;
export default function Detail(props : any){  
      
    const router = useRouter();
    const id : number = Number(router.query['id']);
    const [project, setProject] = useState({});

    function update(){

    }

    async function find(id : number) : Promise<void>{
        let project = await getProject(id);
        console.log(project);
        setProject(() => project);
    }

    useEffect(() => {
        find(id)
    },[]);


    return(
        <>
            <Form
                labelCol = {{span:4}}
                wrapperCol={{span :14}}
                layout="horizontal"
                style = {{maxWidth:600}}
            >
                <Card>
                    <Form.Item label="프로젝트">
                        <Input value={project.name} />
                    </Form.Item>
                    <Form.Item label="내용">
                        <Input value={project.description} />
                    </Form.Item>
                    <Form.Item label="생성날짜">
                        <Input value={project.createDate} />
                    </Form.Item>
                    <Form.Item label="색상">

                    </Form.Item>
                    <Form.Item label="프로젝트 기간">
                        <RangePicker />
                    </Form.Item>              
                    <Form.Item label="이행날짜">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="진행률">
                    </Form.Item> 
                    <Form.Item label="상태">
                        <Select>
                            <Select.Option value="0">대기중</Select.Option>
                            <Select.Option value="1">진행중</Select.Option>
                            <Select.Option value="2">완료</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="타입">
                    </Form.Item>
                    <Form.Item label="생성자">
                    </Form.Item>
                    <Form.Item label="공개 여부">
                        <Switch />
                    </Form.Item>
                </Card>                      
            </Form>
        </>
    );
}