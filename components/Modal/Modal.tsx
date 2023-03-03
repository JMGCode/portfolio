import { useEffect, useState } from "react";

import styles from "./Modal.module.scss";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add(styles["active-modal"]);
    } else {
      document.body.classList.remove(styles["active-modal"]);
    }
  }, [modal]);

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles["modal-content"]}>
        <div
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
                  stroke="purple"
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
        <button className={styles["close-modal"]} onClick={toggleModal}>
          <p>x</p>
        </button>
      </div>
    </div>
  );
};

export default Modal;
