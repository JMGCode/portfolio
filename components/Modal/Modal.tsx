import { FC, useEffect, useState } from "react";

import styles from "./Modal.module.scss";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}
const Modal: FC<Props> = ({ children, isVisible, setIsVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(styles["active-modal"]);
    } else {
      document.body.classList.remove(styles["active-modal"]);
    }
  }, [isVisible]);

  return isVisible ? (
    <div className={styles.modal}>
      <div onClick={() => setIsVisible(false)} className={styles.overlay}></div>
      <div className={styles["modal-content"]}>
        {children}
        <button
          className={styles["close-modal"]}
          onClick={() => setIsVisible(false)}
        >
          <p>x</p>
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
