"use client";

import { About } from "./about";
import { Companies } from "./experiences";
import { Hero } from "./hero";
import Info from "./info";
import { Works } from "./works";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Companies />
      <About />
      <Works />
      <Info />
    </div>
  );
};

export default Home;
