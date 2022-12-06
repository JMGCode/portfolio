"use client";

import GitHub from "../../components/Icons/github";
import LinkedIn from "../../components/Icons/linkedIn";
import Logo from "../../components/Icons/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Twitter from "../../components/Icons/twitter";
import { navbarItems } from "../../navbarItems";
import { primaryColor } from "../../abstracts/colors";
import styles from "./Header.module.scss";

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openLinkTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles["logo-link"]} onClick={handleScrollTop}>
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
              CONTACT
            </div>
          </div>
          <Twitter
            className="cursor-pointer"
            onClick={() => openLinkTab("https://twitter.com/JMGCode")}
          />
          <GitHub
            className="cursor-pointer"
            onClick={() => openLinkTab("https://github.com/JMGCode")}
          />
          <LinkedIn
            className="cursor-pointer"
            onClick={() =>
              openLinkTab(
                "https://linkedin.com/in/jesus-mezquiti-guerrero-00b93885"
              )
            }
          />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
