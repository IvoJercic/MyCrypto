import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useSession, signOut, getSession } from "next-auth/react";
import { getServerSideProps } from "../utils/getServerSideProps";

export default function Home() {
  return (
    <div className={styles.container}>
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
