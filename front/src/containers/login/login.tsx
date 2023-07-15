import signUpStyle from "./login.module.css";
import RoundButton from "components/atoms/RoundButton/RoundButton";
import SlideInputText from "components/atoms/SlideInputText/SlideInputText";

export default function Login() {
    return (
        <>
            <article className={signUpStyle.logo}>

            </article>
            <article className={signUpStyle.text}>
                <span className={'t_2'}>로그인</span>
                <span className={'b_2'}>아이유니버스에 오신걸 환영합니다.</span>
                <span className={'b_2'}>로그인 후 아이유니버스를 즐겨보세요.</span>
            </article>
            <article className={`${signUpStyle.social} ${signUpStyle.column}`}>
                <RoundButton color={"white"} title={"구글로 로그인"} img={"/logos/logo.google.svg"}/>
            </article>
            <article className={signUpStyle.sign_up}>
                <div className={`${signUpStyle.division} ${signUpStyle.space_top}`}><span className={signUpStyle.text}>또는</span></div>
                <SlideInputText placeholder={'아이디'} space={35}/>
                <SlideInputText placeholder={'비밀번호'} space={31} password={true}/>
                <RoundButton title={"로그인"} disable={true}/>
            </article>
            <article className={signUpStyle.login}>
                <span className={'b_2'}>아직 계정이 없으신가요?</span><a href={"/signup"} className={'b_2'}>회원가입</a>
            </article>
        </>
    )
}