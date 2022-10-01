import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "../styles/globals.css"
import "../styles/navigation.css"
import "../styles/profile.css"
import AppLayout from "../components/AppLayout"
import React from "react"

function MyApp({Component, pageProps}: { Component: React.FC, pageProps: any }) {
    return (
        <>
            <div style={{height: "100vh"}}>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </div>
        </>
    )
}

export default MyApp
