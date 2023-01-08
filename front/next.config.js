const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = (phase, {defaultConfig}) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */

    }
  }

  return {
    nextConfig,
    /* config options for all phases except development here */
    env: {
      /**
       * .env랑 여기랑 차이는 없으나 관리의 편의성을 위해 .env 사용 (.env가 동작 안하면 'dotenv'모듈 알아보기)
       * 'NEXT_PUBLIC_' 앞에 붙이면 네트워크 상에서 유출이 안됨 (추후 웹 개발자모드 터미널에서 쳐보면 알수 있다.)
       * */
    },
    webpack: {
      /**
       * nextjs는 자체 웹팩 및 번들링을 제공해줌...
       * 사용법은 추후에;;
       * entry, output만 사용한 번들링 custom이 필요하면 여기 추가;
       */

    }


  }
}

