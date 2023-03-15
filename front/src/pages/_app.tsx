import 'styles/globals.css'
import 'styles/layout.css'
import 'styles/card.css'
import 'styles/project.css';
import type { AppProps } from 'next/app'
import IUniLayout from './layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IUniLayout>
        <Component {...pageProps} />
    </IUniLayout>
    )
}
