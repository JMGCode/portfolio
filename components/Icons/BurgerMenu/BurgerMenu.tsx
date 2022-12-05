import { FC, useState } from "react";

import { black100 } from "../../../abstracts/colors";
import styles from "./BurgerMenu.module.scss";

interface burgerMenuProps {
  onClick: Function;
  color?: string;
  isActive: boolean;
}
const BurgerMenu: FC<burgerMenuProps> = ({
  isActive,
  onClick,
  color = { black100 },
}) => {
  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
      onClick={() => {
        onClick();
      }}
    >
      <span
        className={styles.line}
        style={{ backgroundColor: black100 }}
      ></span>
      <span
        className={styles.line}
        style={{ backgroundColor: black100 }}
      ></span>
      <span
        className={styles.line}
        style={{ backgroundColor: black100 }}
      ></span>
    </button>
  );
};

export default BurgerMenu;
