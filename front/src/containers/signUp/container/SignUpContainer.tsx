import { Inter } from '@next/font/google';
import signUpStyle from "/src/styles/SignUp.module.css";
import SingUpFirst from 'containers/signUp/first/SignUpFirst';
import SignUpSecond from "containers/signUp/second/SignUpSecond";
import {atom, useRecoilState} from "recoil";
import {pageInfo} from "store/signUp";

const inter = Inter({ subsets: ['latin'] })

export default function SignUpContainer() {
    const [page,setPage] = useRecoilState(pageInfo);

    return (
        <>
            <main className={signUpStyle.sign_up}>
                <div className={signUpStyle.contents}>
                    <section className={signUpStyle.base}>
                        <article className={signUpStyle.logo}>
                            <img className={signUpStyle.image} src={'/logos/logo.iuni.svg'} alt={'iuniverse logo'}></img>
                        </article>
                        <article className={signUpStyle.step}>
                            <div className={signUpStyle.step_container}>
                                <div className={page === 0 ? `${signUpStyle.step_box} ${signUpStyle.active}` : `${signUpStyle.step_box}`}>
                                    <span className={signUpStyle.step}>Step 1</span>
                                </div>
                                <div className={page === 1 ? `${signUpStyle.step_box} ${signUpStyle.active}` : `${signUpStyle.step_box}`}>
                                    <span className={signUpStyle.step}>Step 2</span>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className={signUpStyle.contents}>
                        {
                            page === 0
                                ? <SingUpFirst/>
                                : page === 1
                                ? <SignUpSecond/>
                                : null
                        }
                    </section>
                </div>
                <section className={signUpStyle.blank}>
                </section>
                <section className={signUpStyle.image}>
                    <img className={signUpStyle.image} src={'/image/img.iuni_main.png'}></img>
                </section>
            </main>
        </>
    )
}
