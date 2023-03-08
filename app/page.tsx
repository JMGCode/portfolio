"use client";

import { About } from "./home/about";
import { Experiences } from "./home/experiences";
import { FC } from "react";
import { Hero } from "./home/hero";
import Info from "./home/info";
import { Works } from "./home/works";
import styles from "./page.module.scss";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Experiences />
      <Works />
      <Info />
    </div>
  );
};

export default page;
