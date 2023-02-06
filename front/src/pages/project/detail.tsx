import { Col, Row } from "antd";
import { getProject } from "api/project/project";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function Detail(props : any){    
    const router = useRouter();
    const id : number = Number(router.query['id']);
    const [project, setProject] = useState({});

    function update(){

    }

    async function find(id : number) : Promise<void>{
        let project = await getProject(id);
        setProject(() => project);
    }

    useEffect(() => {
        find(id)
    },[]);


    return(
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <h3>프로젝트 이름 : {project.name}</h3>
            </Col>
            <Col span={24}>
                <h3>프로젝트 내용 : {project.description}</h3>
            </Col>
            <Col span={24}>
                <h3>프로젝트 생성날짜 : {project.createDate}</h3>
            </Col>
        </Row>
    );
}