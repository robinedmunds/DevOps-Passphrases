import type { AppProps } from 'next/app'
import Head from "next/head"
import CssBaseline from '@mui/material/CssBaseline'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
