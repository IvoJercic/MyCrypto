import React, { Component } from "react";
import { useSession, signOut, getSession } from "next-auth/react";

const account = () => {
  //required true nas automatski redirecta ako nismo auth
  //   const { data: session, status } = useSession({ required: true });
  const { data: session } = useSession();

  //   if (status === "authenticated") {
  if (session) {
    return (
      <div>
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
