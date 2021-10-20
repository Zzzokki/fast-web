import React from "react";
import styles from "../styles/components/Input.module.css";

const Input = (props) => {
  return (
    <div>
      <p className={styles.title}>{props.title}</p>
      <input
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
