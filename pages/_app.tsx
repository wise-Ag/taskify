import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Taskify</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
