import { ChangeEvent, FC } from "react";

import styles from "./Input.module.scss";

interface inputProps {
  id: string;
  label: string;
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: FC<inputProps> = ({
  id,
  label,
  rows = 1,
  required,
  autoComplete = "off",
  resize = "none",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles["input-container"]}`}>
      <textarea
        id={id}
        rows={rows}
        className={`${styles["text-input"]}`}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        style={{ resize: resize }}
        value={value}
        onChange={onChange}
        name={id}
      ></textarea>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
