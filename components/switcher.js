import React from "react";
import styles from "../styles/components/Switcher.module.css";

const Switcher = (props) => {
  return (
    <div className={styles.container}>
      <div
        style={{ left: props.value === 0 ? "6px" : "206px" }}
        className={styles.slider}
      />
      <div className={styles.options}>
        {props.options.map((item, index) => (
          <div
            key={item}
            onClick={props.onClick}
            style={{ color: props.value === index ? "#fff" : "#000" }}
            className={styles.option}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Switcher;
