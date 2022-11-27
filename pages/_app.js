import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { SideBar } from "../components/SideBar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SideBarContext } from "../contexts/sidebarContext";
import { CryptoContext } from "../contexts/CryptoContext";
import useCryptoData from "../hooks/useCryptoData";
import useFetch from "../hooks/useCryptoData";
import Error from "../components/Error";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [cryptoData, setCryptoData] = useState();

  const { data, error, loading } = useCryptoData();
  useEffect(() => {
    if (data) {
      setCryptoData(data);
    }
  }, [data]);

  return (
    <SessionProvider session={session}>
      <SideBarContext.Provider value={{ openSideBar, setOpenSideBar }}>
        <CryptoContext.Provider value={{ cryptoData, setCryptoData }}>
          <Head>
            <title>MyCrypto</title>
            <meta name="description" content="MyCrypto app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {loading ? (
            <Loading />
          ) : cryptoData ? (
            <>
              <SideBar />
              <Component {...pageProps} />
            </>
          ) : (
            <>
              <Error />
              <button onClick={() => setReset((val) => !val)}>OPET</button>
            </>
          )}
        </CryptoContext.Provider>
      </SideBarContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
