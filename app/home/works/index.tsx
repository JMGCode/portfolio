import { FC, forwardRef } from "react";
import { greenImg, pinkImg, purpleImg } from "../../../assets/imgs";

import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./Works.module.scss";

//TODO: fix image
interface IWorkImageProps {
  id?: number | string;
  backgroundColor: string;
  image: StaticImageData;
}

const workData: IWorkImageProps[] = [
  {
    id: "b6a6db10-f0ca-430d-8d67-22d1eea99f29",
    backgroundColor: "#AF94F8",
    image: purpleImg,
  },
  {
    id: "eea01df9-bedf-4ccb-adcb-c84a0a23a01e",
    backgroundColor: "#55AF33",
    image: greenImg,
  },
  {
    id: "b67f4e3b-a693-4391-af5f-335ac52e5806",
    backgroundColor: "#EE93AD",
    image: pinkImg,
  },
];

const WorkImage: FC<IWorkImageProps> = ({ backgroundColor, image }) => {
  return (
    <div style={{ backgroundColor }} className={styles["image-background"]}>
      <div className={styles["image-container"]}>
        <Image src={image} alt="project img" />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
export const Works = forwardRef((props, ref) => {
  return (
    //@ts-ignore
    <div id="works-section" ref={ref} className={styles.container}>
      <div className={styles.text}>
        <h2 style={{ fontWeight: "bold" }}>My work</h2>
        <p>
          {`I specialize in webside development, but I've also make mobile apps in
          flutter`}
        </p>
      </div>

      <div className={styles["list-container"]}>
        {workData.map((work) => {
          const { id, image, backgroundColor } = work;
          return (
            <WorkImage
              key={id}
              image={image}
              backgroundColor={backgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
});
