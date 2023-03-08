"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { openLinkTab, scrollToSection } from "../../helpers";

import AboutIcon from "../../components/Icons/NavIcons/about";
import BurgerMenu from "../../components/Icons/BurgerMenu/BurgerMenu";
import ContactIcon from "../../components/Icons/NavIcons/contact";
import ExpIcon from "../../components/Icons/NavIcons/experiences";
import GitHub from "../../components/Icons/github";
import Image from "next/image";
import LinkedIn from "../../components/Icons/linkedIn";
import LogoSvg from "../../public/images/logo.svg";
import Twitter from "../../components/Icons/twitter";
import WorkIcon from "../../components/Icons/NavIcons/work";
import { primaryColor } from "../../abstracts/colors";
import scrollToTop from "../../helpers/scrollToTop";
import styles from "./Header.module.scss";
import useBreakpoint from "../../hooks/useBreakpoint";
import useScrollDirection from "../../hooks/useScrollDirection";

type sectionType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const Header = () => {
  const scrollDir = useScrollDirection();
  const breakpoint = useBreakpoint();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections: Array<sectionType> = useMemo(
    () => [
      {
        id: "about-section",
        name: "about",
        icon: <AboutIcon color={primaryColor} />,
      },
      {
        id: "experience-section",
        name: "experience",
        icon: <ExpIcon color={primaryColor} />,
      },
      {
        id: "works-section",
        name: "work",
        icon: <WorkIcon color={primaryColor} />,
      },
      {
        id: "contact-section",
        name: "contact",
        icon: <ContactIcon color={primaryColor} />,
      },
    ],
    []
  );

  useEffect(() => {
    if (breakpoint === "sm" || breakpoint == "xs") return;
    if (isMenuOpen) handleCloseMenu();
  }, [breakpoint]);

  const handleLinkClick = (section: sectionType) => {
    handleCloseMenu();
    scrollToSection(section.id, window.innerWidth > 768 ? 100 : 60);
  };

  const handleCloseMenu = () => {
    document.body.style.overflowY = "auto";
    setIsMenuOpen(false);
  };

  return (
    <div
      className={styles.container}
      style={{
        transform: `translateY(${
          scrollDir === "none" || scrollDir === "up" || window.pageYOffset < 10
            ? "0"
            : "-100px"
        })`,
      }}
    >
      <div className={styles.logo}>
        <Image
          alt=""
          src={LogoSvg}
          fill
          onClick={scrollToTop}
          priority
          style={{ zIndex: "2" }}
          sizes="(max-width: 768px) 100px,150px"
        />
      </div>
      <div className={styles["nav-container"]}>
        <div
          className={`${styles["nav-link-container"]} ${
            isMenuOpen ? styles["menu-active"] : ""
          }`}
        >
          {sections.map((section, idx) => (
            <MenuLink
              key={"menu-link" + section.id + idx}
              section={section}
              onClick={handleLinkClick}
            />
          ))}
          <div className={styles["nav-social-container"]}>
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
        </div>

        <div className={styles.burger}>
          <BurgerMenu
            onClick={() => {
              document.body.style.overflowY = `${
                isMenuOpen ? "auto" : "hidden"
              }`;
              setIsMenuOpen((prev) => !prev);
            }}
            isActive={isMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

const MenuLink: FC<{ section: sectionType; onClick: any }> = ({
  section,
  onClick,
}) => {
  return (
    <div className={`${styles["nav-link"]}`} onClick={() => onClick(section)}>
      <div className={styles["nav-link-icon"]}>{section.icon}</div>
      {section.name}
    </div>
  );
};
export default Header;
