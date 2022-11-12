import React, { Component } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import styles from "../styles/Home.module.scss";

const account = () => {
  //required true nas automatski redirecta ako nismo auth
  //   const { data: session, status } = useSession({ required: true });
  const { data: session } = useSession();

  //   if (status === "authenticated") {
  if (session) {
    return (
      <div className={styles.page}>
        Welcome {session.user.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return <div>You are not signed in</div>;
  }
};
export default account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};
