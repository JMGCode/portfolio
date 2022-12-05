import ArrowDownCircle from "../../../components/Icons/arrowDownCircle";
import Button from "../../../components/Button/Button";
import { FC } from "react";
import { primaryColor } from "../../../abstracts/colors";
import styles from "./Hero.module.scss";

interface heroProps {
  onClick: Function;
}
export const Hero: FC<heroProps> = ({ onClick }) => (
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
        onClick={() => onClick()}
        icon={<ArrowDownCircle style={{ minWidth: "32px" }} />}
      />
    </div>
  </div>
);
