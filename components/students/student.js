import React, { useState } from "react";
import styles from "../../styles/components/students/Student.module.css";

const Student = ({ index }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        style={{
          borderTop: index !== 0 && "1px solid rgba(0, 0, 0, 0.2)",
        }}
        className={styles.container}
      >
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>{index + 1}</div>
        <div className={styles.cell}>
          <div
            className={styles.expander}
            style={{
              backgroundColor: selected && "#fbb532",
              height: selected ? 240 : 40,
            }}
            onClick={() => {
              setSelected((prev) => !prev);
            }}
          ></div>
        </div>
      </div>
      {selected && (
        <div className={styles.expand}>
          <div></div>
          <div className={styles.expandEnd}></div>
        </div>
      )}
    </>
  );
};

export default Student;
