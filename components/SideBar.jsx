import {
  faAngleLeft,
  faAngleRight,
  faCoffee,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import MENU from "../constants/menu";
import styles from "../styles/SideBar.module.scss";
import NavItem from "./NavItem";
import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import { SideBarContext } from "../contexts/sidebarContext";

export const SideBar = () => {
  const { data: session } = useSession();
  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);

  const imageLoader = () => {
    return `${session.user.image}?w=${50}`;
  };
  console.log(session);

  return (
    session && (
      <div className={`${styles.sidebar} ${!openSideBar && styles.closed}`}>
        <div className={styles.logo_details} data-value={"MyCrpyto"}>
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <span className={styles.logo_name}>MyCrypto</span>
        </div>
        <div className={styles.nav_links}>
          {MENU.map((item) => {
            return <NavItem {...item} key={item.text} closed={!openSideBar} />;
          })}
        </div>
        <div className={styles.profile_div}>
          {/* <Image
            className={styles.profile_img}
            loader={imageLoader}
            src={session?.user?.image}
            alt="Profile picture"
            width={50}
            height={50}
          /> */}
          {/* <img src={session?.user?.image} /> */}

          <div className={styles.profile_details}>
            <div className={styles.profile_name}> {session?.user?.name}</div>
            <div className={styles.profile_email}> {session?.user?.email}</div>
          </div>
          <div className={styles.iconDiv}>
            <div onClick={signOut}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={styles.icon}
              />
            </div>
            <FontAwesomeIcon
              icon={!openSideBar ? faAngleRight : faAngleLeft}
              className={styles.icon}
              onClick={() => setOpenSideBar((val) => !val)}
            />
          </div>
        </div>
      </div>
    )
  );
};
