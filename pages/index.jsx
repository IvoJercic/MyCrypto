import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useSession, signOut, getSession } from "next-auth/react";
import { getServerSideProps } from "../utils/getServerSideProps";
import { useContext } from "react";
import { SideBarContext } from "../contexts/sidebarContext";

export default function Home() {
  const { openSideBar } = useContext(SideBarContext);

  return (
    <div className={`${styles.page} ${!openSideBar && styles.closedSideBar}`}>
      <Head>
        <title>MyCrypto</title>
        <meta name="description" content="MyCrypto app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>STRAMNA</main>
    </div>
  );
}

export { getServerSideProps };
