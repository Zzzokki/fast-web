import React from "react";
import styles from "../styles/components/Switcher.module.css";

const Switcher = (props) => {
  return (
    <div className={`flex ${styles.container}`}>
      <div className={`${styles.slider}`} />
      <div className={`${styles.options}`}>
        {props.options.map((item) => (
          <div key={item} onClick={props.onClick} className={styles.option}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Switcher;
