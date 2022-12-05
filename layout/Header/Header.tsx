"use client";

import Dribbble from "../../components/Icons/dribbble";
import Instagram from "../../components/Icons/instagram";
import Logo from "../../components/Icons/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Twitter from "../../components/Icons/twitter";
import { navbarItems } from "../../navbarItems";
import { primaryColor } from "../../abstracts/colors";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles["logo-link"]}>
        <Logo />
      </div>

      <Navbar items={navbarItems}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <div
              className={styles["font-small"]}
              style={{ color: primaryColor, textDecoration: "none" }}
              onClick={() => {
                const infoSection = document.getElementById("info-section");
                const offsetHeight =
                  document.body.scrollHeight - infoSection!!.scrollHeight - 96;

                window.scrollTo({
                  top: offsetHeight,
                  behavior: "smooth",
                });
              }}
            >
              {/* hello@jmgcode.com */}
              CONTACT
            </div>
            {/* <p className="font-small">(+52) 81-1537-8739</p> */}
          </div>
          {/* <Separator direction="vertical" lenght="16px" thickness="1px" /> */}
          <Twitter />
          <Dribbble />
          <Instagram />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
