import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { SideBar } from "../components/SideBar";
import Head from "next/head";
import { useState } from "react";
import { SideBarContext } from "../contexts/sidebarContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <SessionProvider session={session}>
      <SideBarContext.Provider value={{ openSideBar, setOpenSideBar }}>
        <Head>
          <title>MyCrypto</title>
          <meta name="description" content="MyCrypto app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar />
        <Component {...pageProps} />
      </SideBarContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
