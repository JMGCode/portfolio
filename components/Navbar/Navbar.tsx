"use client";

import { FC, PropsWithChildren, useState } from "react";

import BurgerMenu from "../Icons/BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";

interface navbarProps {
  items: {
    text: string;
    path: string;
  }[];
}

const Navbar: FC<PropsWithChildren<navbarProps>> = ({ items, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((prev) => {
      if (!prev) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  return (
    <nav className={styles.container}>
      <div
        className={`${styles.content} ${isActive ? styles["menu-active"] : ""}`}
      >
        {children}
      </div>
      <div className={styles.menu}>
        <BurgerMenu onClick={handleMenu} isActive={isActive} />
      </div>
    </nav>
  );
};

export default Navbar;
