import { loadProjectBasetype } from "api/baseType/baseType";
import { loadProjectSubtype } from "api/subtype/subtype";
import { useEffect, useState } from "react";

interface Props {
    projectId: number;
}

interface Basetype {
    id: number;
    name: string;
    description: string;
    color: string;
    fontColor: string;
    createDate: Date;
    basetypeId: number;
    orderNum: number;
}

interface Subtype {
    id: number;
    name: string;
    description: string;
    color: string;
    fontColor: string;
    createDate: Date;
    basetypeId: number;
    orderNum: number;
}

interface BaseSubtype {
    [key: number]: Subtype[]
}
export default function Setting(props: Props) {
    const [basetype, setBasetype] = useState<Basetype[]>();
    const [subtype, setSubtype] = useState<Subtype[]>();


    const findSubtype = async (basetypeId : number) => {
        const subtype = await loadProjectSubtype(basetypeId);
        setSubtype(() => subtype);
    }

    useEffect(() => {
        const settingBaseAndSubType = async () => {
            const basetypes = await loadProjectBasetype(props.projectId)
            setBasetype(() => [...basetypes]);

            // for (const basetype of basetypes) {
            //     const subtype = await loadProjectSubtype(basetype.id);
            //     setSubtype((prev) => {
            //         let data: any = {}
            //         data[basetype.id] = subtype;
            //         return { ...prev, data };
            //     })
            // }
        }
        settingBaseAndSubType()

    }, []);
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h1>베이스 타입</h1>
                    <>
                        {
                            basetype?.map((val, index) => (
                                <div key={`basetype_${val.id}`} onClick={() => findSubtype(val.id)}>
                                    {val.name}
                                </div>
                            ))
                        }
                    </>
                </div>
                <div className="col-6">
                    <h1>베이스 서브타입</h1>
                    <>
                        {
                            subtype?.map((val, index) => (
                                <div key={`subtype_${val.id}`}>
                                    {val.name}
                                </div>
                            ))
                        }
                    </>
                </div>
            </div>
            {/* <div>
                <h1>베이스 타입</h1>
                <p>프로젝트 참여자 역할</p>
                <p>프로젝트 상태</p>
                <p>태스크 상태</p>
            </div>

            <div>
                <br></br>
                <h1>서브 타입</h1>
                <h3>프로젝트 참여자 역할</h3>
                <p>관리자</p>
                <p>매니저</p>
                <p>참여자</p>
                <br></br>
                <h3>프로젝트 상태</h3>
                <p>대기중</p>
                <p>진행중</p>
                <p>완료</p>
                <br></br>
                <h3>태스크 상태</h3>
                <p>대기중</p>
                <p>진행중</p>
                <p>완료</p>
            </div> */}
        </>
    )
}