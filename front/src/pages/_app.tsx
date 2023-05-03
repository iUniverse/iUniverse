import 'styles/globals.css'
import 'styles/layout.css'
import 'styles/card.css'
import 'styles/project.css';
import 'styles/theme.css';

import type { AppProps } from 'next/app'
import IUniLayout from './layout/layout'
import { useEffect } from 'react';
import { checkInitTheme, createInitTheme } from 'api/theme/card-theme';

export default function App({ Component, pageProps }: AppProps) {
  function createInit(theme_name_list: string[]): Promise<boolean> {
    return new Promise(resolve => {
      let funcs = [];
      for (let theme_name of theme_name_list) {
        funcs.push(createInitTheme(theme_name));
      }
      Promise.all([...funcs])
        .then(result => {
          const error = result.find(d => d === false);
          if (error === undefined) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
    })
  }

  function checkInit(): Promise<string[]> {
    const theme_name_list = ['기본테마', '모노테마', '코지테마', '트로피컬테마'];
    return new Promise(resolve => {
      Promise.all([
        checkInitTheme(theme_name_list[0]),
        checkInitTheme(theme_name_list[1]),
        checkInitTheme(theme_name_list[2]),
        checkInitTheme(theme_name_list[3])
      ])
        .then(async result => {
          let not_exist_theme = [];
          let i = 0;
          for (const value of result) {
            if (value === false) {
              not_exist_theme.push(theme_name_list[i])
            }
            i++;
          }
          resolve(not_exist_theme);
        })
    })
  }

  useEffect(() => {
    //load();
    checkInit()
      .then(not_exist_theme => {
        if (not_exist_theme.length !== 0) {
          createInit(not_exist_theme)
          .then(result => {
            if (!result) {
              alert("기초 테마 데이터를 기입하는 도중 에러가 발생했어요");
            } 
          })  
        }
      })
  }, []);
  return (
    <IUniLayout>
      <Component {...pageProps} />
    </IUniLayout>
  )
}
