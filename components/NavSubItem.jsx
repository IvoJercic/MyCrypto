import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/NavSubItem.module.scss";

const NavSubItem = ({ href, text, currentPath }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (href === currentPath) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentPath]);

  return (
    <div className={`${styles.navSubItem} ${active && styles.active}`}>
      <Link href={href} className={styles.link}>
        <div className={styles.icon}></div>
        {text}
      </Link>
    </div>
  );
};

export default NavSubItem;
