import React from "react";
import styles from "../styles/components/Button.module.css";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: props.bg ?? "#fbb532",
        color: props.c ?? "#fff",
        width: props.w,
        height: props.h,
        margin: props.m,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginBottom: props.mb,
        marginTop: props.mt,
      }}
      className={styles.button}
    >
      <div className={styles.background} />
      <p>{props.children}</p>
    </div>
  );
};

export default Button;
