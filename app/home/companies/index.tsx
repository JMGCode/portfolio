import Dribbble from "../../../components/Icons/dribbble";
import Instagram from "../../../components/Icons/instagram";
import Twitter from "../../../components/Icons/twitter";
import styles from "./companies.module.scss";

export const Companies = () => (
  <div className={styles.container}>
    <p>I have the pleasure to work with these companies</p>
    <div className={styles.list}>
      <Twitter />
      <Dribbble />
      <Instagram />
    </div>
  </div>
);
