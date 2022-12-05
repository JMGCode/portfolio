import { FC } from "react";
import { systemColors } from "../../abstracts/colors";

type directionType = "horizontal" | "vertical";

interface separatorProps {
  direction: directionType;
  lenght: string | number;
  thickness: string | number;
  color?: keyof typeof systemColors;
}

const Separator: FC<separatorProps> = ({
  direction,
  lenght,
  thickness,
  color = "black100",
}) => {
  return (
    <div
      className="separator"
      style={{
        height: `${direction === "horizontal" ? thickness : lenght}`,
        width: `${direction === "horizontal" ? lenght : thickness}`,
        backgroundColor: systemColors[color],
      }}
    ></div>
  );
};

export default Separator;
