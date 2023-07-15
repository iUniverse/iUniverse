import signUpStyle from "./SignUpSecond.module.css";
import RoundButton from "components/atoms/RoundButton/RoundButton";
import SlideInputText from "components/atoms/SlideInputText/SlideInputText";
import {atom, useRecoilState} from "recoil";
import {pageInfo} from "store/signUp";

export default function SignUpSecond() {

    return (
        <>
            <article className={signUpStyle.text}>
                <span className={`t_2 `}>회원가입이</span>
                <span className={`t_2 ${signUpStyle.space}`}>거의 끝나가요.</span>
                <span className={'b_2'}>더욱 편리한 서비스 이용을 위해</span>
                <span className={'b_2'}>개인정보를 입력해주세요.</span>
            </article>
            <article className={signUpStyle.sign_up}>
                <SlideInputText placeholder={'닉네임'} space={35}/>
                <SlideInputText placeholder={'성'} space={35}/>
                <SlideInputText placeholder={'이름'} space={35}/>
                <SlideInputText placeholder={'통신사'} space={35}/>
                <SlideInputText placeholder={'휴대폰'} space={35}/>
                <SlideInputText placeholder={'이메일'} space={35}/>
                <RoundButton title={"회원가입 완료"} disable={true} func={function temp (){}}/>
            </article>
            <article className={signUpStyle.login}>
                <span className={'b_2'}>이미 회원이시라구요?</span><a href={"/login"} className={'b_2'}>로그인</a>
            </article>
        </>
    )
}