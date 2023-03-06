import Image from "next/image";
import InfiniteList from "../../../components/InfiniteList/InfiniteList";
import styles from "./about.module.scss";
import { useMemo } from "react";

export const About = () => {
  const techs = useMemo(
    () => [
      { name: "Javascript", logo: "/images/javascript.svg" },
      { name: "Css", logo: "/images/css.svg" },
      { name: "ReactJs", logo: "/images/react.svg" },
      { name: "Typecript", logo: "/images/typescript.svg" },
      { name: "NodeJs", logo: "/images/node.svg" },
      { name: "Postgresql", logo: "/images/postgres.svg" },
      { name: "Tailwind", logo: "/images/tailwind.svg" },
      { name: "Ant Design", logo: "/images/ant-design.svg" },
    ],
    []
  );

  return (
    <div id="about-section" className={styles.container}>
      <h3 style={{ fontWeight: "bold" }}>About me</h3>
      <br />
      <div className={styles.message}>
        <p>{` Hi I'm JmgCode, I'm a developer with 3 years of experience in React. I have a passion for creating high-quality and user-friendly software that meets the needs of my clients. `}</p>
        <p>{` My expertise in React has allowed me to develop a deep
      understanding of the latest web technologies and best practices, and I
      have applied this knowledge to build robust and scalable applications.  `}</p>
        <p>{` Whether I'm working on a new project or improving an existing system, 
        I always bring my full dedication and attention to detail to every task.  `}</p>
        <p>{` My goal is to create software that is not only functional
      and efficient, but also enjoyable for users to interact with.`}</p>
        {/* <p>{` If you're looking for a talented and dedicated developer with a proven track record
      in React, I'd love to hear from you. Let's work together to build something amazing. `}</p> */}
        <p>{`Here are a few technologies I use:`}</p>

        <InfiniteList>
          <div className={styles.list}>
            {techs.map((e) => {
              return (
                <div key={"tech-list" + e.name} className={styles.item}>
                  <p>{e.name}</p>
                  <Image alt="" src={e.logo} height={50} width={50} />
                </div>
              );
            })}
          </div>
        </InfiniteList>
      </div>
    </div>
  );
};
