import { FC } from "react";
import styles from "./TextInput.module.scss";

interface textInputProps {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input: FC<textInputProps> = ({ label, name, placeholder, disabled }) => {
  return (
    <div className={styles.container}>
      <input
        name={name}
        id={name}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
