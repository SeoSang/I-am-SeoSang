import "../styles/globals.css"
import "../styles/navigation.css"
import "../styles/profile.css"
import Head from "next/head"
import AppLayout from "../components/AppLayout"
import React from "react"

function MyApp({ Component, pageProps }:{ Component:React.FC, pageProps:any }) {
  return (
    <>
      <Head>
        <title>I am SeoSang</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div style={{ height: "100vh" }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </div>
    </>
  )
}

export default MyApp
