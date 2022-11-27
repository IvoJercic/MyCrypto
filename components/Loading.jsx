import React, { useContext } from "react";
import { SideBarContext } from "../contexts/sidebarContext";
import styles from "../styles/Loading.module.scss";

function Loading() {
  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);

  return (
    <div className={styles.loading_screen}>
      <img src="/logoText.png" className={styles.loading_logo_text} />
      <img src="/logoSmall.png" className={styles.loading_spiner} />
      <p className={styles.loading_text}>Fetching data...</p>
    </div>
  );
}

export default Loading;
