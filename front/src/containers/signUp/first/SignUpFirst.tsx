import signUpStyle from "./SignUpFirst.module.css";
import RoundButton from "components/atoms/RoundButton/RoundButton";
import SlideInputText from "components/atoms/SlideInputText/SlideInputText";

export default function SignUpFirst() {
    return (
        <>
            <article className={signUpStyle.logo}>

            </article>
            <article className={signUpStyle.text}>
                <span className={'t_2'}>아이유니버스에</span>
                <span className={`t_2 ${signUpStyle.space}`}>오신걸 환영합니다!</span>
                <span className={'b_2'}>가입을 위해 아래 소셜 로그인을 하거나,</span>
                <span className={'b_2'}>아이디와 비밀번호를 입력해주세요.</span>
            </article>
            <article className={`${signUpStyle.social} ${signUpStyle.column}`}>
                <RoundButton color={"white"} title={"구글로 회원가입"} img={"/logos/logo.google.svg"}/>
            </article>
            <article className={signUpStyle.sign_up}>
                <div className={`${signUpStyle.division} ${signUpStyle.space_top}`}><span className={signUpStyle.text}>또는</span></div>
                <SlideInputText placeholder={'아이디'} space={35}/>
                <SlideInputText placeholder={'비밀번호'} space={31} password={true}/>
                <RoundButton title={"회원가입 계속하기"} disable={true}/>
            </article>
            <article className={signUpStyle.login}>
                <span className={'b_2'}>이미 회원이시라구요?</span><a href={"/login"} className={'b_2'}>로그인</a>
            </article>
        </>
    )
}