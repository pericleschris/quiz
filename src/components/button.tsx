import React from "react";
import styles from "./button.module.css";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonType) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
