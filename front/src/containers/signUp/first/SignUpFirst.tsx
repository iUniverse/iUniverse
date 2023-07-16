import signUpStyle from "./SignUpFirst.module.css";
import RoundButton from "components/atoms/RoundButton/RoundButton";
import SlideInputText from "components/atoms/SlideInputText/SlideInputText";
import {atom, useRecoilState} from "recoil";
import {accountBtnInfo, accountInfo, pageInfo, passwordInfo} from "store/signUp";
import {signUpFirstValidation} from "./SingUpFirst.handle";
import {useState} from "react";

export default function SignUpFirst() {
    const [page,setPage] = useRecoilState(pageInfo);
    const [account,setAccount] = useRecoilState(accountInfo);
    const [password,setPassword] = useRecoilState(passwordInfo);
    const [accountBtn,setAccountBtn] = useRecoilState(accountBtnInfo);
    const [idAdviser,setIdAdviser] = useState('');
    const [pwAdviser,setPwAdviser] = useState('');
    const btnToggle = () => {
        if( account.replace(/\s/g,"").length > 4
            && password.replace(/\s/g,"").length > 7){
            setAccountBtn(true);
        }
        else{
            setAccountBtn(false);
        }
    }
    const accountValidation = async () => {
        if(!accountBtn) return false;
        const result = await signUpFirstValidation(account,password);
        if(!result.status) {
            await printAdviser(result.func,result.code);
            return;
        }
        else {
            setIdAdviser('');
            setPwAdviser('');
            setPage(1);
            return;
        }
    }
    const printAdviser = async (func:string,code:string) => {
        if(code!==null&&code==='00') {
            setIdAdviser('오류가 발생하였습니다. 관리자에게 문의해주세요.');
            console.log(`[Error] ${func}${code}`);
        }
        else{
            switch(func){
                case '00':
                    switch(code){
                        case '01':
                            setIdAdviser('ID 는 알파벳 대소문자와  숫자 혼합으로 정해주세요.');
                            break;
                    }
                    break;
                case '01':
                    switch(code){
                        case '01':
                            setIdAdviser('ID 는 5글자 이상 15글자 이하로 정해주세요.');
                            break;
                    }
                    break;
                case '02':
                    switch(code){
                        case '01':
                            setPwAdviser('비밀번호는 영어 대소문자와 숫자가 포함되어야해요.');
                            break;
                    }
                    break;
                case '03':
                    switch(code){
                        case '01':
                            setPwAdviser('비밀번호에 사용할 수 없는 문자가 포함되어있어요.');
                            break;
                    }
                    break;
                case '04':
                    switch(code){
                        case '01':
                            setPwAdviser('비밀번호는 8글자 이상으로 정해주세요.');
                            break;
                    }
                    break;
                case '05':
                    switch(code){
                        case '01':
                            setIdAdviser('이미 사용중인 아이디에요.');
                            break;
                    }
                    break;
            }
        }
    }

    return (
        <>
            <article className={signUpStyle.text}>
                <span className={'t_2'}>아이유니버스에</span>
                <span className={`t_2 ${signUpStyle.space}`}>오신걸 환영합니다!</span>
                <span className={'b_2'}>가입을 위해 아래 소셜 로그인을 하거나,</span>
                <span className={'b_2'}>아이디와 비밀번호를 입력해주세요.{accountBtn.toString()}</span>
            </article>
            <article className={`${signUpStyle.social} ${signUpStyle.column}`}>
                <RoundButton color={"white"} title={"구글로 회원가입"} img={"/logos/logo.google.svg"}/>
            </article>
            <article className={signUpStyle.sign_up}>
                <div className={`${signUpStyle.division} ${signUpStyle.space_top}`}><span className={signUpStyle.text}>또는</span></div>
                <div className={`${signUpStyle.id_container}`}>
                    <SlideInputText placeholder={'아이디'} space={6} maxLength={15} setData={setAccount} onChange={btnToggle}/>
                    <span className={signUpStyle.adviser}>{idAdviser}</span>
                </div>
                <div className={`${signUpStyle.pw_container}`}>
                    <SlideInputText placeholder={'비밀번호'} space={6} maxLength={30} password={true} setData={setPassword} onChange={btnToggle}/>
                    <span className={signUpStyle.adviser}>{pwAdviser}</span>
                </div>
                {
                    accountBtn === true
                    ? <RoundButton title={"회원가입 계속하기"} disable={false} func={accountValidation}/>
                    : <RoundButton title={"회원가입 계속하기"} disable={true} func={accountValidation}/>
                }
            </article>
            <article className={signUpStyle.login}>
                <span className={'b_2'}>이미 회원이시라구요?</span><a href={"/login"} className={'b_2'}>로그인</a>
            </article>
        </>
    )
}