import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

function Document() {
    return (
        <Html>
            <Head>
                <meta property="og:type" content="website"/>
                
                <meta property="og:site_name" content="FE 개발자 서상혁 🧑🏻‍💻" key="site_name"/>
                <meta property="og:title" content="FE 개발자 서상혁 🧑🏻‍💻" key="title"/>
                <meta property="og:description" content="네이버 쇼핑 FE 개발자. TypeScript, React 를 주로 다룹니다. 💻"
                      key="description"/>
                <meta property="og:image" content="/me_2023.jpeg" key="image"/>
                <meta property="og:image:alt" content="이미지 로드 실패ㅠ" key="image_alt"/>
                <meta property="og:url" content="https://i-am-seo-sang.vercel.app/" key="url"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document