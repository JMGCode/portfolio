import Dribbble from "../../components/Icons/dribbble";
import Instagram from "../../components/Icons/instagram";
import Navbar from "../../components/Navbar/Navbar";
import Twitter from "../../components/Icons/twitter";
import { navbarItemsFooter } from "../../navbarItems";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.copyright} ${styles["font-small"]}`}>
        (c)Copyright JmgCode 2022. All rights reserved.
      </p>
      <div className={styles["nav-container"]}>
        <Navbar items={navbarItemsFooter}>
          <>
            <Twitter />
            <Dribbble />
            <Instagram />
          </>
        </Navbar>
      </div>
    </div>
  );
};

export default Footer;
