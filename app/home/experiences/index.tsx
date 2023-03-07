import { FC, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { Carousel } from "../../../components/Carousel/Carousel";
//
import Pak2go1 from "../../../public/images/pak2go/light/img1.jpeg";
import Pak2go2 from "../../../public/images/pak2go/light/img2.jpeg";
import Pak2go3 from "../../../public/images/pak2go/light/img3.jpeg";
import Pak2go4 from "../../../public/images/pak2go/light/img4.jpeg";
import Pak2go5 from "../../../public/images/pak2go/light/img5.jpeg";
//Images
import Sysca1 from "../../../public/images/sysca/light/img1.jpeg";
import Sysca2 from "../../../public/images/sysca/light/img2.jpeg";
import Sysca3 from "../../../public/images/sysca/light/img3.jpeg";
import Sysca4 from "../../../public/images/sysca/light/img4.jpeg";
import Tabs from "../../../components/Tabs/Tabs";
//
import Ultrazoom1 from "../../../public/images/ultrazoom/light/img1.jpeg";
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
        images: [Pak2go1, Pak2go2, Pak2go3, Pak2go4, Pak2go5],
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
        images: [Ultrazoom1],
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
        images: [Sysca1, Sysca3, Sysca4, Sysca2],
      },
    ],
    []
  );

  return (
    <div id="experience-section" className={styles.container}>
      <div className={styles["inner-container"]}>
        <h3 style={{ fontWeight: "bold" }}>Experiences</h3>
        <br />
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
      <p>
        {`${title} - `}{" "}
        <span
          style={{ color: primaryColor, fontWeight: "bold" }}
        >{`${companyFull}`}</span>
      </p>
      <p style={{ fontSize: "16px" }}>
        {from} - {to}
      </p>
      <br />
      <div>
        {role.images && (
          <Carousel
            infiniteLoop
            autoPlay
            intervalTime={6000}
            images={role.images}
          />
        )}
        <br />
        <ul>
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
    </div>
  );
};
