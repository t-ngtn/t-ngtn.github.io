import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>t-ngtn home page</title>
        <meta name="description" content="t-ngtn's portfolio and blog site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
