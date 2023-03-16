import AntDesign from "./images/ant-design.svg";
import Css from "./images/css.svg";
import Image from "next/image";
import InfiniteList from "../../../components/InfiniteList/InfiniteList";
import Javascript from "/images/javascript.svg";
import Node from "./images/node.svg";
import Postgres from "./images/postgres.svg";
import ReactJs from "./images/react.svg";
import Tailwind from "./images/tailwind.svg";
import Typescript from "./images/typescript.svg";
import styles from "./about.module.scss";
import { useMemo } from "react";

export const About = () => {
  const techs = useMemo(
    () => [
      { name: "Javascript", logo: Javascript },
      { name: "Css", logo: Css },
      { name: "ReactJs", logo: ReactJs },
      { name: "Typecript", logo: Typescript },
      { name: "NodeJs", logo: Node },
      { name: "Postgresql", logo: Postgres },
      { name: "Tailwind", logo: Tailwind },
      { name: "Ant Design", logo: AntDesign },
    ],
    []
  );

  return (
    <div id="about-section" className={styles.container}>
      <div className={styles.text}>
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>About me</h2>

        <div className={styles.message}>
          <p>{` Hi I'm JmgCode, I'm a developer with 3 years of experience in React. I have a passion for creating high-quality and user-friendly software that meets the needs of my clients. `}</p>
          <p>{` My expertise in React has allowed me to develop a deep
      understanding of the latest web technologies and best practices, and I
      have applied this knowledge to build robust and scalable applications.  `}</p>
          <p>{` Whether I'm working on a new project or improving an existing system, 
        I always bring my full dedication and attention to detail to every task.  `}</p>
          <p>{` My goal is to create software that is not only functional
      and efficient, but also enjoyable for users to interact with.`}</p>

          <p>{`Here are a few technologies I use:`}</p>
        </div>
      </div>
      <InfiniteList>
        <div className={styles.list}>
          {techs.map((e) => {
            return (
              <div key={"tech-list" + e.name} className={styles.item}>
                <p>{e.name}</p>
                <Image priority alt="" src={e.logo} height={50} width={50} />
              </div>
            );
          })}
        </div>
      </InfiniteList>
    </div>
  );
};
