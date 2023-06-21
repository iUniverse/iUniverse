import { Col, Form, Row, Input, Card, DatePicker, Switch, Select } from "antd";
import { getProject, updateProject } from "api/project/project";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import { create } from "api/task/task";
import dayjs from 'dayjs';
import { Project } from "./interface";

const { RangePicker } = DatePicker;


export interface Task {
    id : number,
    name : string,
    description : string,
    createDate : string
}
export default function Detail(props: any) {

    const router = useRouter();
    const id: number = Number(router.query['id']);
    const [project, setProject] = useState<Project>();

    /** 이름 변경 */
    function handlerNameChange(e: any) : void{
        setProject({ ...project, name: e.target.value } as Project);
    }
    /* 내용 변경 */
    function handlerDescriptionChange(e: any):void {
        setProject({...project, description : e.target.value} as Project);
    }
    /* 색상 변경 */
    function handlerColorChange(e: any) :void {
        setProject({...project, color : e.target.value} as Project);
    }
    /* 시작날짜 변경 */
    function handlerStartDateChange(e: any):void{
        setProject({...project, startDate : e.target.value}as Project);
    }
    /* 종료날짜 변경 */
    function handlerEndDateChange(e: any):void{
        setProject({...project, endDate : e.target.value}as Project);
    }
    /* 이행날짜 변경 */
    function handlerDueDateChange(e: any):void{
        setProject({...project, dueDate : e.target.value} as Project);
    }
    /* 상태 변경 */
    function handlerStatusChange(e: any):void{
        setProject({...project, }as Project);
    }
    /* 타입 변경 */
    function handlerTypeChange(e: any):void{
        setProject({...project, }as Project);
    }
    /* 공개 여부 변경 */
    function handlerPrivateChange(e: any):void{
        setProject({...project, }as Project);
    }

    async function find (id: number): Promise<void> {
        const result = await getProject(id);
        setProject(() => result);
    }
    
    async function createTask():Promise<any>{
        create(id, '태스크 생성').then(result => console.log(result));
    }
    
    /* 업데이트 */
    async function update(e: any){
        const obj ={
            'key' : e.target.name,
            'value' : e.target.value,
            'id': id
        }
        await updateProject(obj);
    }

    useEffect(() => {
        find(id);
    }, []);

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Card>
                    <Form.Item label="프로젝트">
                        <Input type="text" name="name" value={project.name} onChange={handlerNameChange} onBlur={update}/>
                    </Form.Item>
                    <Form.Item label="내용">
                        <Input value={project.description} />
                    </Form.Item>
                    <Form.Item label="생성날짜">
                        <Input value={project.createDate} disabled/>
                    </Form.Item>
                    <Form.Item label="색상">
                        <Input value={project.color} />
                    </Form.Item>
                 
                    <Form.Item label="진행률">
                        <Input value={project.processRate} disabled/>
                    </Form.Item>
                    <Form.Item label="상태">
                        <Select >
                            <Select.Option value="0">대기중</Select.Option>
                            <Select.Option value="1">진행중</Select.Option>
                            <Select.Option value="2">완료</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="타입">
                        <Input value={project.typeId} />
                    </Form.Item>
                    <Form.Item label="생성자">
                    </Form.Item>
                    <Form.Item label="공개 여부">
                        <Switch />
                    </Form.Item>
                    <button onClick={() => createTask()}>태스크 생성하기</button>
                </Card>
            </Form>

            <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            >
                <Card>
                    <Form.Item label="태스크 이름">
                        <Input type="text" name="name" value={project.name} onChange={handlerNameChange} onBlur={update}/>
                    </Form.Item>
                </Card>
            </Form>
        </>
    );
}