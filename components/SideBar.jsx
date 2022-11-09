import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MENU from "../constants/menu";
import styles from "../styles/SideBar.module.scss";
import NavItem from "./NavItem";

export const SideBar = () => {
  return (
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
    </div>
  );
};
