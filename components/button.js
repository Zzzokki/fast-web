import React from "react";
import styles from "../styles/components/Button.module.css";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: props.bg, color: props.c }}
      className={styles.button}
    >
      {props.children}
    </div>
  );
};

export default Button;
