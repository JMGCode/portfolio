"use client";

import { Companies } from "./companies";
import { Hero } from "./hero";
import Info from "./info";
import { Works } from "./works";
import styles from "./Home.module.scss";
import { useRef } from "react";

const Home = () => {
  const worksRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const navigateToWorks = () => {
    const header = document.querySelector("nav");
    const linkOffset = worksRef.current?.offsetTop || 0;
    let headerOffset = header?.offsetHeight || 0;

    const sectionOffset = headerOffset < 90 ? 96 : 128;

    window.scrollTo({
      top: linkOffset - headerOffset - sectionOffset,
      behavior: "smooth",
    });
  };

  const navigateToInfo = () => {
    const linkOffset = infoRef.current?.offsetTop || 0;
    const headerOffset = -96;
    window.scrollTo({
      top: linkOffset + headerOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.home}>
      <Hero onClick={navigateToWorks} />
      {/* <Companies /> */}
      <Works ref={worksRef} />
      <Info ref={infoRef} />
    </div>
  );
};

export default Home;
