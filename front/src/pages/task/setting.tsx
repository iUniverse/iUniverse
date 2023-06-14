export default function Setting(){
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <h1>베이스 타입</h1>
                </div>
                <div className="col-6">
                    <h1>베이스 서브타입</h1>
                </div>
            </div>
            <div>
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
            </div>
        </>
    )
}