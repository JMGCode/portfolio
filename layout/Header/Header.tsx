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
import useWindowSize from "../../hooks/useWindowSize";

type sectionType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const Header = () => {
  const windowSize = useWindowSize();

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
    if (windowSize) {
      if (windowSize.width >= 768) {
        setIsMenuOpen(false);
      }
    }
  }, [windowSize]);

  // return (
  //   <div
  //     className={styles.container}
  //     // style={{
  //     //   transition: "transform 200ms",
  //     //   // transform: "",
  //     //   // transform: `translateY(${scrollDir === "down" ? "-96" : "0"}px)`,
  //     // }}
  //   >
  //     <Image
  //       alt=""
  //       src="/images/logo.svg"
  //       height={60}
  //       width={150}
  //       onClick={scrollToTop}
  //     />

  //     <Navbar items={navbarItems}>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           flexDirection: "column",
  //           flex: "1",
  //         }}
  //       >
  //         <div className={styles.content}>
  //           {sections.map((section, idx) => (
  //             <MenuLink
  //               key={"menu-link" + section.id + idx}
  //               section={section}
  //             />
  //           ))}

  //           <Twitter
  //             className="cursor-pointer"
  //             onClick={() => openLinkTab("https://twitter.com/JMGCode")}
  //           />
  //           <GitHub
  //             className="cursor-pointer"
  //             onClick={() => openLinkTab("https://github.com/JMGCode")}
  //           />
  //           <LinkedIn
  //             className="cursor-pointer"
  //             onClick={() =>
  //               openLinkTab(
  //                 "https://linkedin.com/in/jesus-mezquiti-guerrero-00b93885"
  //               )
  //             }
  //           />
  //         </div>
  //       </div>
  //     </Navbar>
  //   </div>
  // );

  const handleLinkClick = (section: sectionType) => {
    setIsMenuOpen(false);
    scrollToSection(section.id);
  };
  return (
    <div className={styles.container}>
      <Image
        alt=""
        src={LogoSvg}
        height={60}
        width={150}
        onClick={scrollToTop}
      />
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
    <div
      className={`${styles["font-small"]} ${styles["nav-link"]}`}
      onClick={() => onClick(section)}
    >
      <div className={styles["nav-link-icon"]}>{section.icon}</div>
      {section.name}
    </div>
  );
};
export default Header;
