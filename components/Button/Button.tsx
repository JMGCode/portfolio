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
  customStyle?: any;
  className?: string;
}
const Button: FC<buttonProps> = ({
  type = "primary",
  text,
  disabled,
  onClick,
  icon,
  isSubmit = false,
  customStyle,
  className: customClass,
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      className={`${styles.container} ${styles[type]} ${customClass}`}
      onClick={onClick}
      style={customStyle}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
