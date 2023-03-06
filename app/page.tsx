"use client";

import { About } from "./home/about";
import { Experiences } from "./home/experiences";
import { FC } from "react";
import { Hero } from "./home/hero";
import Info from "./home/info";
import { Works } from "./home/works";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        rowGap: "64px",
        flexDirection: "column",
        marginBottom: "64px",
      }}
    >
      <Hero />
      <About />
      <Experiences />
      <Works />
      <Info />
    </div>
  );
};

export default page;
