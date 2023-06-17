import { Inter } from '@next/font/google'
import signUpStyle from "/src/styles/SignUp.module.css"
import SingUpFirst from 'containers/signUp/first/SignUpFirst'
import SignUpSecond from "containers/signUp/second/SignUpSecond";

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
    let page = 0;
    return (
        <>
            <main className={signUpStyle.sign_up}>
                <section className={signUpStyle.contents}>
                    {
                        page === 0
                        ? <SingUpFirst/>
                        : page === 1
                        ? <SignUpSecond/>
                        : null
                    }
                </section>
                <section className={signUpStyle.image}>
                    <img className={signUpStyle.image} src={'/image/img.iuni_main.png'}></img>
                </section>
            </main>
        </>
    )
}
