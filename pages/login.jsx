import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Welcome, {session.user.email}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not signed in
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default login;
