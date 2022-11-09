import {
  faCoffee,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MENU from "../constants/menu";
import styles from "../styles/SideBar.module.scss";
import NavItem from "./NavItem";
import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";

export const SideBar = () => {
  const { data: session } = useSession();
  const imageLoader = () => {
    return `${session?.user?.image}?w=${50}`;
  };

  return (
    session && (
      <div className={styles.sidebar}>
        <div className={styles.logo_details}>
          <FontAwesomeIcon icon={faCoffee} className={styles.icon} />
          <span className={styles.logo_name}>MyCrypto</span>
        </div>
        <div className={styles.nav_links}>
          {MENU.map((item) => {
            return <NavItem {...item} key={item.text} />;
          })}
        </div>
        <div className={styles.profile_div}>
          <Image
            className={styles.profile_img}
            loader={imageLoader}
            src={session?.user?.image}
            alt="Profile picture"
            width={50}
            height={50}
          />
          <div className={styles.profile_details}>
            <div className={styles.profile_name}> {session?.user?.name}</div>
            <div className={styles.profile_email}> {session?.user?.email}</div>
          </div>
          <div onClick={signOut}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    )
  );
};
