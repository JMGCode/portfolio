import ArrowDownCircle from "../../../components/Icons/arrowDownCircle";
import Button from "../../../components/Button/Button";
import { FC } from "react";
import { primaryColor } from "../../../abstracts/colors";
import { scrollToSection } from "../../../helpers";
import styles from "./hero.module.scss";

export const Hero = () => (
  <div className={styles.container}>
    <h3 style={{ color: primaryColor }}>{`Hey there,I'm Jesus`}</h3>
    <h1>Web developer</h1>
    <div className={styles.message}>
      <p>
        {`I build amazing web experiences,If you're looking for a developer that
        likes to get stuff done, let's talk`}
      </p>
      <Button
        text="See my work"
        onClick={() => scrollToSection("works-section")}
        icon={<ArrowDownCircle style={{ minWidth: "32px" }} />}
      />
    </div>
  </div>
);
