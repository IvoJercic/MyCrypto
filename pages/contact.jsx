import React, { Component, useContext } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { SideBarContext } from "../contexts/sidebarContext";
import { getServerSideProps } from "../utils/getServerSideProps";

const contact = () => {
  const { openSideBar } = useContext(SideBarContext);
  //   if (status === "authenticated") {
  return <div>CONTACT {openSideBar.toString()}</div>;
};
export default contact;
