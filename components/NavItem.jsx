import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/NavItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSubItem from "./NavSubItem";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CURRENT_ROUTE } from "../constants/routes";
import isSubItem from "../utils/isSubiItem";
import { useRouter } from "next/router";

const NavItem = ({ href, text, icon, child, closed }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (href === router.pathname) {
      setOpen(true);
      setActive(true);
    } else {
      setOpen(false);
      setActive(false);
      const res = isSubItem(href, router.pathname);
      if (res) {
        setOpen(true);
      }
    }
  }, [router.pathname]);

  return (
    <div
      className={`${styles.navItemContainer} ${
        open ? styles.show : styles.hide
      } ${closed && styles.closed}`}
    >
      <div
        className={`${styles.navMainItem} ${active && styles.active}`}
        data-value={text}
      >
        <Link
          href={child ? CURRENT_ROUTE : href}
          className={styles.link}
          onClick={() => setOpen((val) => !val)}
        >
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          <span className={styles.navItemText}>{text}</span>
          {child &&
            (open ? (
              <FontAwesomeIcon icon={faArrowUp} className={styles.arrowIcon} />
            ) : (
              <FontAwesomeIcon
                icon={faArrowDown}
                className={styles.arrowIcon}
              />
            ))}
        </Link>
      </div>
      {child && (
        <div
          className={`${styles.navSubItems} ${
            open ? styles.show : styles.hide
          }`}
        >
          {child.map((item) => {
            return (
              <NavSubItem
                {...item}
                key={item.text}
                currentPath={router.pathname}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavItem;
