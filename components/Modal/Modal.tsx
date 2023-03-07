import { FC, useEffect, useState } from "react";

import styles from "./Modal.module.scss";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}
const Modal: FC<Props> = ({ children, isVisible, setIsVisible }) => {
  // const [modal, setModal] = useState(false);

  const toggleModal = () => {
    // setModal(!modal);
  };

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

/**
 * 
 *    <div
          className={styles["ava-alert__icon"]}
          style={{ background: "#438C5E" }}
        >
          <div className={styles["svg-box"]}>
            <svg className={`${styles.circular} ${styles["green-stroke"]}`}>
              <circle
                className={styles.path}
                cx="75"
                cy="75"
                r="50"
                fill="none"
                stroke-width="5"
                stroke-miterlimit="10"
              />
            </svg>
            <svg className={`${styles.checkmark} ${styles["green-stroke"]}`}>
              <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                <path
                  className={styles["checkmark__check"]}
                  fill="none"
                  d="M616.306,283.025L634.087,300.805L673.361,261.53"
                  stroke="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <div style={{ padding: "10px 15px" }}>
          <h4 style={{ fontSize: "21px" }}>The Email has been seen</h4>
          <p style={{ fontSize: "18px" }}>
            I'll reach to you as soon as possible
          </p>
        </div>
 */
