import React, { FC, useMemo } from "react";

import Demo from "../../../components/Icons/demo";
import GitHub from "../../../components/Icons/github";
import HandClick from "../../../components/Icons/handClick";
import Image from "next/image";
import Spotify from "../../../public/images/works/spotify-player/light/img2.jpeg";
import { StaticImageData } from "next/image";
import Sudoku from "../../../public/images/works/sudoku/light/img1.jpeg";
import Sysca3 from "../../../public/images/sysca/light/img3.jpeg";
import { primaryColor } from "../../../abstracts/colors";
import styles from "./Works.module.scss";

interface IWorkImageProps {
  id?: number | string;
  image: StaticImageData;
  content?: React.ReactNode;
}

const WorkImage: FC<IWorkImageProps> = ({ image, content }) => {
  return (
    <>
      <div className={styles["image-container"]}>
        <Image
          src={image}
          alt="project img"
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          // style={{ objectFit: "contain" }}
        />
        <div className={styles["img-click-icon"]}>
          <HandClick color="white" />
          Click me
        </div>
        <div className={styles.overlay}>{content}</div>
      </div>
    </>
  );
};

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
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ cursor: "pointer" }}>
              <a href="https://youtube.com" target={"_blank"}>
                <Demo color="white" />
              </a>
            </div>
            <div style={{ cursor: "pointer" }}>
              <a href="https://github.com" target={"_blank"}>
                <GitHub color={"white"} />
              </a>
            </div>
          </div>
        ),
      },
      {
        type: "featured",
        name: "Spotify Player",
        description:
          "The application includes WebPlayer SDK (require premium), notifications, navigation of the user's spotify library, search by category, OAuth2",
        techs: [
          "ReacJs",
          "Typescript",
          "Redux Tool Kit",
          "Css",
          "RTK Query",
          "Redux Persist",
        ],
        img: Spotify,
        extraContent: (
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ cursor: "pointer" }}>
              <a href="https://youtube.com" target={"_blank"}>
                <Demo color="white" />
              </a>
            </div>
            <div style={{ cursor: "pointer" }}>
              <a href="https://github.com" target={"_blank"}>
                <GitHub color={"white"} />
              </a>
            </div>
          </div>
        ),
      },
      {
        type: "featured",
        name: "Sudoku Game",
        description:
          "The application includes a feature to automatically check the player's solution for correctness, and highlights any incorrect entries.",
        techs: ["ReacJs", "Typescript", "Css"],
        img: Sysca3,

        extraContent: (
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ cursor: "pointer" }}>
              <a href="https://youtube.com" target={"_blank"}>
                <Demo color="white" />
              </a>
            </div>
            <div style={{ cursor: "pointer" }}>
              <a href="https://github.com" target={"_blank"}>
                <GitHub color={"white"} />
              </a>
            </div>
          </div>
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

      <div className={styles["main-project-container"]}>
        {mainProjects.map((project, idx) => {
          const { name, img, description, techs, type, extraContent } = project;
          return (
            <WorkImage
              key={"work-img" + name + idx}
              image={img}
              content={
                <div style={{ color: "white", padding: "20px" }}>
                  <p
                    style={{
                      color: primaryColor,
                      fontSize: "16px",
                    }}
                  >
                    {type === "featured"
                      ? "Featured Project"
                      : "Freelance Project"}
                  </p>
                  <h4 style={{ margin: "2px 0 10px 0" }}>{name}</h4>
                  <p style={{ fontSize: "18px" }}>{description}</p>
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "40px 0",
                      gap: "10px",
                    }}
                  >
                    {techs.map((tech, idx) => {
                      return (
                        <li
                          key={"work-tech-project" + name + idx}
                          style={{
                            backgroundColor: "hotpink",
                            borderRadius: "20px",
                            padding: "5px 15px",
                            fontSize: "14px",
                            fontWeight: "bold",
                          }}
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  {extraContent}
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
};
