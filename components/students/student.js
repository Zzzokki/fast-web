import React from "react";
import styles from "../../styles/components/students/Student.module.css";

const Student = ({ selected, setSelected, index }) => {
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
              backgroundColor: selected === index && "#fbb532",
              height: selected === index ? 240 : 40,
            }}
            onClick={() => {
              if (selected !== index) {
                setSelected(index);
              } else {
                setSelected(null);
              }
            }}
          ></div>
        </div>
      </div>
      {selected === index && (
        <div className={styles.expand}>
          <div></div>
          <div className={styles.expandEnd}></div>
        </div>
      )}
    </>
  );
};

export default Student;
