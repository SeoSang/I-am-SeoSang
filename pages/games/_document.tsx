import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

class WebAppDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <title>I am SeoSang</title>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}


export default WebAppDocument
