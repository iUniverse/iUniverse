import loginStyle from "styles/login.module.css";
import Login from "containers/login/login";

export default function login(){
    return (
        <>
            <main className={loginStyle.sign_up}>
                <section className={loginStyle.contents}>
                        <Login/>
                </section>
                <section className={loginStyle.image}>
                    <img className={loginStyle.image} src={'/image/img.iuni_main.png'}></img>
                </section>
            </main>
        </>
    )
}