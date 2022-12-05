"use client";

import React, { FC } from "react";

import styles from "./Button.module.scss";

type ButtonType = "primary" | "secondary";

interface buttonProps {
  text: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  isSubmit?: boolean;
}
const Button: FC<buttonProps> = ({
  type = "primary",
  text,
  disabled,
  onClick,
  icon,
  isSubmit = false,
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      className={`${styles.container} ${styles[type]}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
