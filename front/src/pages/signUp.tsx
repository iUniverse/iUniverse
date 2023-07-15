import { Inter } from '@next/font/google';
import signUpStyle from "/src/styles/SignUp.module.css";
import SingUpFirst from 'containers/signUp/first/SignUpFirst';
import SignUpSecond from "containers/signUp/second/SignUpSecond";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import SignUpContainer from "containers/signUp/container/SignUpContainer";

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
    return (
        <RecoilRoot>
            <SignUpContainer/>
        </RecoilRoot>
    )
}