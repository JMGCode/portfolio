import React, {
  ChangeEvent,
  FC,
  Ref,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  label: string;
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  value: string;

  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  validation?: {
    rules: Array<RegExp>;
    msg: string;
  };
  ref: HTMLTextAreaElement;
}

interface InputRef {
  validate: () => void;
}

const Input = forwardRef(
  (
    {
      id,
      label,
      rows = 1,
      required,
      autoComplete = "off",
      resize = "none",
      placeholder,
      validation,
      onChange,
      value,
    }: InputProps,
    ref: Ref<InputRef>
  ) => {
    const [error, setError] = useState("");
    useImperativeHandle(ref, () => ({
      validate() {
        const isEmpty = value.trim() === "";

        if (required && isEmpty) {
          setError("This Field is Required");
          return false;
        }
        return handleValidation(value);
      },
    }));

    const handleValidation = (value: string) => {
      let isValid = true;
      if (validation)
        isValid = validation?.rules.reduce((acc, curr) => {
          if (!acc) return acc;
          return curr.test(value);
        }, true);

      setError(isValid || value === "" ? "" : validation?.msg || "");
      return isValid;
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event);
      handleValidation(event.target.value);
    };

    return (
      <div className={`${styles["input-container"]}`}>
        <textarea
          id={id}
          rows={rows}
          className={`${styles["text-input"]}`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          style={{ resize: resize }}
          value={value}
          onChange={handleChange}
          name={id}
        ></textarea>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <div
          style={{
            fontSize: "0.4em",
            color: "red",
            padding: "0 5px",
            position: "absolute",
          }}
        >
          {error}
        </div>
      </div>
    );
  }
);

export default Input;
