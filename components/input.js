import React from "react";
import styles from "../styles/components/Input.module.css";

const Input = (props) => {
  return (
    <div
      style={{
        width: props.w ?? "100%",
        margin: props.m,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginBottom: props.mb,
        marginTop: props.mt,
      }}
    >
      <p className={styles.title}>{props.title}</p>
      <input
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      />
      <p className={styles.error}></p>
    </div>
  );
};

export default Input;
