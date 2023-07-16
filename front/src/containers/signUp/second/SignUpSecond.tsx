import signUpStyle from "./SignUpSecond.module.css";
import RoundButton from "components/atoms/RoundButton/RoundButton";
import SlideInputText from "components/atoms/SlideInputText/SlideInputText";
import {atom, useRecoilState} from "recoil";
import {accountInfo, emailInfo, firstNameInfo, infoBtnInfo, lastNameInfo, mobileCarrierInfo, mobileInfo, nickNameInfo, passwordInfo} from "store/signUp";
import {useState} from "react";
import {signUpSecondValidation} from "containers/signUp/second/SignUpSecond.handle";
import {signUp} from "containers/signUp/second/SignUpSecond.fetch";

export default function SignUpSecond() {

    const [account,setAccount] = useRecoilState(accountInfo);
    const [password,setPassword] = useRecoilState(passwordInfo);
    const [nickName,setNickName] = useRecoilState(nickNameInfo);
    const [lastName,setLastName] = useRecoilState(lastNameInfo);
    const [firstName,setFirstName] = useRecoilState(firstNameInfo);
    const [mobileCarrier,setMobileCarrier] = useRecoilState(mobileCarrierInfo);
    const [mobile,setMobile] = useRecoilState(mobileInfo);
    const [email,setEmail] = useRecoilState(emailInfo);
    const [infoBtn,setInfoBtn] = useRecoilState(infoBtnInfo);

    const [nickNameAdviser,setNickNameAdviser] = useState('');
    const [lastNameAdviser,setLastNameAdviser] = useState('');
    const [firstNameAdviser,setFirstNameAdviser] = useState('');
    const [mobileCarrierAdviser,setMobileCarrierAdviser] = useState('');
    const [mobileAdviser,setMobileAdviser] = useState('');
    const [emailAdviser,setEmailAdviser] = useState('');

    const btnToggle = () => {
        clearAdviser();
        if( nickName.replace(/\s/g, "").length > 0
            && lastName.replace(/\s/g,"").length > 0
            && firstName.replace(/\s/g,"").length > 0
            && email.replace(/\s/g,"").length > 0)
        {
            setInfoBtn(true);
        }
        else
            {
            setInfoBtn(false);
        }
    }
    const printAdviser = (func:string,code:string) => {
        switch(func){
            case "00":
                switch(code){
                    case "00":
                        setNickNameAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setNickNameAdviser('닉네임은 한글, 알파벳 대소문자, 숫자만 입력할 수 있어요.');
                        break;
                }
                break;
            case "01":
                switch(code){
                    case "00":
                        setLastNameAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setLastNameAdviser('성은 한글, 알파벳 대소문자만 입력할 수 있어요.');
                        break;
                }
                break;
            case "02":
                switch(code){
                    case "00":
                        setFirstNameAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setFirstNameAdviser('이름은 한글, 알파벳 대소문자만 입력할 수 있어요.');
                        break;
                }
                break;
            case "03": //미완성 만들어야함
                switch(code){
                    case "00":
                        setMobileCarrierAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setMobileCarrierAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                }
                break;
            case "04":
                switch(code){
                    case "00":
                        setMobileAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setMobileAdviser('전화번호 형식이 올바르지 않아요. 다시 확인해주세요.');
                        break;
                }
                break;
            case "05":
                switch(code){
                    case "00":
                        setEmailAdviser('오류가 발생했습니다. 관리자에게 문의해주세요.');
                        break;
                    case "01":
                        setEmailAdviser('이메일 형식이 올바르지 않아요. 다시 확인해주세요.');
                        break;
                }
                break;
        }
    }
    const clearAdviser = () => {
        setNickNameAdviser('');
        setLastNameAdviser('');
        setFirstNameAdviser('');
        setMobileCarrierAdviser('');
        setMobileAdviser('');
        setEmailAdviser('');
    }
    const infoValidation = async () => {
        if(!infoBtn) return false;
        const result = await signUpSecondValidation({
            'nickName':nickName,
            'lastName':lastName,
            'firstName':firstName,
            'mobileCarrier':mobileCarrier,
            'mobile':mobile,
            'email':email
        });
        if(!result.status) {
            printAdviser(result.func,result.code);
        }
        else {
            clearAdviser();
        }
        return result;
    }
    const signModule = async () => {
        const validationResult = await infoValidation();
        if(!validationResult.status) return;
        const signUpResult = await signUp({
            'account':account,
            'password':password,
            'nickName':nickName,
            'lastName':lastName,
            'firstName':firstName,
            'mobileCarrier':mobileCarrier,
            'mobile':mobile,
            'email':email
        });
        if(signUpResult.status) location.href = '/login';
        else alert('계정 생성 중 오류가 발생했어요. 관리자에게 문의해주세요.');
    }

    return (
        <>
            <article className={signUpStyle.text}>
                <span className={`t_2 `}>회원가입이</span>
                <span className={`t_2 ${signUpStyle.space}`}>거의 끝나가요.</span>
                <span className={'b_2'}>더욱 편리한 서비스 이용을 위해</span>
                <span className={'b_2'}>개인정보를 입력해주세요.</span>
            </article>
            <article className={signUpStyle.sign_up}>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'닉네임(필수)'} space={6} setData={setNickName} onChange={btnToggle}/>
                    <span className={signUpStyle.adviser}>{nickNameAdviser}</span>
                </div>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'성(필수)'} space={6} setData={setLastName} onChange={btnToggle}/>
                    <span className={signUpStyle.adviser}>{lastNameAdviser}</span>
                </div>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'이름(필수)'} space={6} setData={setFirstName} onChange={btnToggle}/>
                    <span className={signUpStyle.adviser}>{firstNameAdviser}</span>
                </div>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'통신사'} space={6} setData={setMobileCarrier} onChange={clearAdviser}/>
                    <span className={signUpStyle.adviser}>{mobileCarrierAdviser}</span>
                </div>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'휴대폰'} space={6} setData={setMobile} number={true} onChange={clearAdviser} maxLength={11}/>
                    <span className={signUpStyle.adviser}>{mobileAdviser}</span>
                </div>
                <div className={signUpStyle.input_container}>
                    <SlideInputText placeholder={'이메일(필수)'} space={6} setData={setEmail} onChange={btnToggle} />
                    <span className={signUpStyle.adviser}>{emailAdviser}</span>
                </div>
                {
                    infoBtn === true
                    ? <RoundButton title={"회원가입 완료"} disable={false} func={signModule}/>
                    : <RoundButton title={"회원가입 완료"} disable={true} func={signModule}/>
                }
            </article>
            <article className={signUpStyle.login}>
                <span className={'b_2'}>이미 회원이시라구요?</span><a href={"/login"} className={'b_2'}>로그인</a>
            </article>
        </>
    )
}