import { Col, Form, Row, Input, Card, DatePicker, Switch, Select } from "antd";
import { getProject, updateProject } from "api/project/project";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
export interface Project {
    id: number,
    name: string,
    description: string,
    createDate: string,
    dueDate : string,
    startDate : string,
    endDate : string,
    isPrivate :boolean,
    processRate : number,
    statusId : number,
    typeId : number,
    color : string
}
export default function Detail(props: any) {

    const router = useRouter();
    const id: number = Number(router.query['id']);
    const [project, setProject] = useState<Project>({
        id : 0,
        name : '',
        description: '',
        createDate: '',
        dueDate : '',
        startDate : '',
        endDate : '',
        isPrivate :false,
        processRate : 0,
        statusId : 0,
        typeId : 0,
        color : ''
    });

    /** 이름 변경 */
    function handlerNameChange(e: any) {
        setProject({ ...project, name: e.target.value } as Project);
    }
    /* 내용 변경 */
    function handlerDescriptionChange(e: any) {
        setProject({...project, description : e.target.value} as Project);
    }
    /* 색상 변경 */
    function handlerColorChange(e: any) {
        setProject({...project, color : e.target.value} as Project);
    }
    /* 시작날짜 변경 */
    function handlerStartDateChange(e: any){
        setProject({...project, startDate : e.target.value}as Project);
    }
    /* 종료날짜 변경 */
    function handlerEndDateChange(e: any){
        setProject({...project, endDate : e.target.value}as Project);
    }
    /* 이행날짜 변경 */
    function handlerDueDateChange(e: any){
        setProject({...project, dueDate : e.target.value} as Project);
    }
    /* 상태 변경 */
    function handlerStatusChange(e: any){
        setProject({...project, }as Project);
    }
    /* 타입 변경 */
    function handlerTypeChange(e: any){
        setProject({...project, }as Project);
    }
    /* 공개 여부 변경 */
    function handlerPrivateChange(e: any){
        setProject({...project, }as Project);
    }

    async function find (id: number): Promise<void> {
        const result = await getProject(id);
        setProject(() => result);
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
                </Card>
            </Form>
        </>
    );
}