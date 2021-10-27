import React from "react";
import styles from "../styles/components/Picker.module.css";

const Picker = (props) => {
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
      {/* <div
        style={styles.killer}
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      >
        <div className={styles.options}>
          {props.options.map(() => (
            <div></div>
          ))}
        </div>
      </div> */}
      <select>
        {props.options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
      <p className={styles.error}></p>
    </div>
  );
};

export default Picker;
