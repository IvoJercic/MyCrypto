import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { SideBar } from "../components/SideBar";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>MyCrypto</title>
        <meta name="description" content="MyCrypto app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <Component {...pageProps} style={{ backgroundColor: "red !important" }} />
    </SessionProvider>
  );
}

export default MyApp;
