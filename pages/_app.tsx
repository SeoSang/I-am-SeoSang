import "../styles/globals.css"
import "../styles/navigation.css"
import Head from "next/head"
import { AppPropsType } from "next/dist/next-server/lib/utils"
import AppLayout from "../components/AppLayout"

function MyApp({ Component, pageProps }: AppPropsType) {
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
