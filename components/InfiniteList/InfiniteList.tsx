import { FC } from "react";
import styles from "./InifiniteList.module.scss";
interface Props {
  children: React.ReactNode;
  rev?: boolean;
}
const InfiniteList: FC<Props> = ({ children, rev = false }) => {
  return (
    <div className={`${styles.container} ${styles.rev}`}>
      <div className={styles.wrapper}>
        <div className={styles.item}>{children}</div>
        <div className={styles.item}>{children}</div>
        <div className={styles.item}>{children}</div>
      </div>
    </div>
  );
};

export default InfiniteList;
