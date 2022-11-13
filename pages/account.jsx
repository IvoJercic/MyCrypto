import React, { Component, useContext } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import styles from "../styles/Home.module.scss";
import { SideBarContext } from "../contexts/sidebarContext";
import { getServerSideProps } from "../utils/getServerSideProps";

const account = () => {
  const { openSideBar } = useContext(SideBarContext);

  //required true nas automatski redirecta ako nismo auth
  //   const { data: session, status } = useSession({ required: true });
  const { data: session } = useSession();

  //   if (status === "authenticated") {
  if (session) {
    return (
      <div className={`${styles.page} ${!openSideBar&& styles.closedSideBar}`}>
        Welcome {session.user.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
};
export default account;

export { getServerSideProps };
