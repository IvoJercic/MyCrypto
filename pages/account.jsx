import React, { Component, useContext } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import styles from "../styles/Home.module.scss";
import { SideBarContext } from "../contexts/sidebarContext";
import { getServerSideProps } from "../utils/getServerSideProps";
import { CryptoContext } from "../contexts/CryptoContext";

const account = () => {
  const { openSideBar } = useContext(SideBarContext);
  const { cryptoData, setCryptoData } = useContext(CryptoContext);

  const { data: session } = useSession();

  if (session) {
    return (
      <div className={`${styles.page} ${!openSideBar && styles.closedSideBar}`}>
        Welcome {session.user.name}
        {/* <button onClick={() => funkicja()}>Dohvati </button> */}
        <button onClick={() => signOut()}>Sign out</button>
        {cryptoData && cryptoData["BTC"].symbol}
      </div>
    );
  }
};
export default account;

export { getServerSideProps };
