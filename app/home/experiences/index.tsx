import { FC, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

import Pak2goGroup from "../../../public/images/pak2go/light/img-group.jpeg";
import SyscaGroup from "../../../public/images/sysca/light/img-group.jpeg";
import Tabs from "../../../components/Tabs/Tabs";
import UltrazoomGroup from "../../../public/images/ultrazoom/light/img-group.jpeg";
import { primaryColor } from "../../../abstracts/colors";
import styles from "./experiences.module.scss";

type RoleType = {
  title: string;
  company: string;
  companyFull: string;
  from: string;
  to: string;
  responsabilities: Array<string>;
  images?: Array<StaticImageData>;
  image: StaticImageData;
};

//unordered list
export const Experiences = () => {
  const roles: Array<RoleType> = useMemo(
    () => [
      {
        title: "Fullstack developer",
        company: "Pak2Go",
        companyFull: "Pak2Go Logistics Forwarding",
        from: "feb. 2020",
        to: "may. 2021",
        responsabilities: [
          "Collaborate with a small team of developers and designers to develop a Transport Management System",
          "Develop a track application using flutter with connection to the TMS backend",
          "Webscrap multiple platforms to concentrate tracking data into a single app",
        ],
        image: Pak2goGroup,
      },
      {
        title: "Fullstack developer",
        company: "Ultrazoom",
        companyFull: "Ultrazoom Soluciones Web y de Geolocalización",
        from: "jan. 2019",
        to: "jan. 2020",
        responsabilities: [
          "Collabore with a small team of developers to develop a Management System using ReactJs on the frontend, DJango on the backend and Postgres as database",
        ],
        image: UltrazoomGroup,
      },
      {
        title: "Software Enginner",
        company: "SYSCA",
        companyFull: "SYSCA Soluciones",
        from: "feb. 2016",
        to: "oct. 2018",
        responsabilities: [
          "Develop of firmware for a RTU (Remote Terminal Unit)",
          "Implementation of MODBUS protocol for serial comunication via RS232 - USB",
          "Implementation of DNP3 protocol for comunication via radio",
          "Development of configuration software for the RTU using windows forms",
        ],
        image: SyscaGroup,
      },
    ],
    []
  );

  return (
    <div id="experience-section" className={styles.container}>
      <div className={styles["inner-container"]}>
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Experiences</h2>

        <Tabs
          tabs={roles.map((role) => ({
            name: role.company,
            content: <Role role={role} />,
          }))}
        />
      </div>
    </div>
  );
};

const Role: FC<{ role: RoleType }> = ({ role }) => {
  const { title, company, from, to, responsabilities, companyFull } = role;
  return (
    <div className={styles["role-container"]}>
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {`${title} - `}{" "}
        <span
          style={{
            color: primaryColor,
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >{`${companyFull}`}</span>
      </p>
      <p
        style={{
          fontSize: "16px",
        }}
      >
        {from} - {to}
      </p>
      <br />

      <div className={styles["image-container"]}>
        <Image
          src={role.image}
          alt={role.image.src}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>

      <br />
      <ul className={styles["resp-list"]}>
        {responsabilities.map((res, idx) => {
          return (
            <li key={"resp-bullet" + idx}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div className={styles.bullet}>{"› "}</div>
                <p>{res}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
