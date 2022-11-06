import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { SideBar } from "../components/SideBar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SideBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
