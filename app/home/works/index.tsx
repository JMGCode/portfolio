import React, { CSSProperties, FC, useMemo } from "react";

import Demo from "../../../components/Icons/demo";
import GitHub from "../../../components/Icons/github";
import Image from "next/image";
import Spotify from "../../../public/images/works/spotify-player/device.jpeg";
import { StaticImageData } from "next/image";
import Sudoku from "../../../public/images/works/sudoku/device.jpeg";
import { primaryColor } from "../../../abstracts/colors";
import styles from "./Works.module.scss";

type ProjectType = "featured" | "freelance";

interface WorkItem {
  type: ProjectType;
  name: string;
  description: string;
  techs: Array<string>;
  img: StaticImageData;
  extraContent?: React.ReactNode;
}

export const Works = () => {
  const mainProjects = useMemo<Array<WorkItem>>(
    () => [
      {
        type: "featured",
        name: "Sudoku Game",
        description:
          "The application includes a feature to automatically check the player's solution for correctness, and highlights any incorrect entries.",
        techs: ["ReacJs", "Typescript", "Css"],
        img: Sudoku,
        extraContent: (
          <>
            <div style={{ cursor: "pointer" }}>
              <a href="https://sudoku.jmgcode.com/" target={"_blank"}>
                <Demo color={primaryColor} />
              </a>
            </div>
            {/* <div style={{ cursor: "pointer" }}>
              <a href="https://github.com" target={"_blank"}>
                <GitHub color={primaryColor} />
              </a>
            </div> */}
          </>
        ),
      },
      {
        type: "featured",
        name: "Spotify Player",
        description:
          "The application includes WebPlayer SDK (require premium), notifications, navigation of the user's spotify library,etc.",
        techs: [
          "ReacJs",
          "Typescript",
          "Redux Tool Kit",
          "Scss",
          "RTK Query",
          "Redux Persist",
          "Spotify API",
          "Spotify Web SDK Player",
        ],
        img: Spotify,
        extraContent: (
          <>
            <div style={{ cursor: "pointer" }}>
              <a href="https://youtube.com" target={"_blank"}>
                <Demo color={primaryColor} />
              </a>
            </div>
            <div style={{ cursor: "pointer" }}>
              <a href="https://github.com" target={"_blank"}>
                <GitHub color={primaryColor} />
              </a>
            </div>
          </>
        ),
      },
    ],
    []
  );

  return (
    <div id="works-section" className={styles.container}>
      <div className={styles.text}>
        <h2 style={{ fontWeight: "bold" }}>My work</h2>
        <p>
          {`I specialize in webside development, but I've also make mobile apps in
          flutter`}
        </p>
      </div>

      <div className={styles["work-container"]}>
        {mainProjects.map((project, index) => {
          const lvalue = (index + 1) * 2;
          const mvalue = lvalue - 1;
          const isOdd = index % 2;

          return (
            <>
              <div
                style={{ "--order": isOdd ? lvalue : mvalue } as CSSProperties}
                className={styles["work-img-container"]}
              >
                <Image
                  fill
                  src={project.img}
                  style={{ objectFit: "contain" }}
                  alt={`work-img-${project.name}`}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>

              <div
                style={
                  {
                    "--order": isOdd ? mvalue : lvalue,
                    "--text-align": isOdd ? "start" : "end",
                  } as CSSProperties
                }
                className={`${styles["work-content-container"]} ${styles["work-text"]}`}
              >
                <p>{project.description}</p>
                <ul
                  style={
                    {
                      "--tech-justify": isOdd ? "flex-start" : "flex-end",
                    } as CSSProperties
                  }
                  className={styles["work-tech-project-container"]}
                >
                  {project.techs.map((tech, idx) => {
                    return (
                      <li
                        className={styles["work-tech-project"]}
                        key={"work-tech-project" + name + idx}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <div
                  className={styles["extra-content"]}
                  style={
                    {
                      "--extra-justify": isOdd ? "flex-start" : "flex-end",
                    } as CSSProperties
                  }
                >
                  {project.extraContent}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
