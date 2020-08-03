import "../styles/globals.css"
import Head from "next/head"
import { AppPropsType } from "next/dist/next-server/lib/utils"

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <title>I am SeoSang</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
