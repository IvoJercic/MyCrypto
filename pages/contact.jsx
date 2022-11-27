import React, { Component, useContext } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { SideBarContext } from "../contexts/sidebarContext";
import { getServerSideProps } from "../utils/getServerSideProps";
import { CryptoContext } from "../contexts/CryptoContext";
import styles from "../styles/Home.module.scss";

const contact = () => {
  const { openSideBar } = useContext(SideBarContext);
  const { cryptoData, setCryptoData } = useContext(CryptoContext);

  //   if (status === "authenticated") {
  return (
    <div className={`${styles.page} ${!openSideBar && styles.closedSideBar}`}>
      CONTACT {openSideBar.toString()}
    </div>
  );
};
export default contact;
