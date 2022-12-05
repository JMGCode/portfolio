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
//TODO: fix links
const Navbar: FC<PropsWithChildren<navbarProps>> = ({ items, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div
        className={`${styles.items} ${isActive ? styles["menu-active"] : ""}`}
      >
        {items.map((item) => {
          return (
            // <NavLink to={item.path} key={item.text} className="navbar-link">
            //   {item.text}
            // </NavLink>
            <div className="link" key={item.path + item.text}>
              {item.text}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        {children}

        {/* <div className={styles.menu}>
          <BurgerMenu onClick={handleMenu} isActive={isActive} />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
