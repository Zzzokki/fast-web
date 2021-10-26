import React, { useState } from "react";
import styles from "../../styles/components/Status.module.css";

const colors = ["#7AF696", "#FF3636", "#78C6FF", "#78C6FF", "#78C6FF"];

const PersonalExam = ({ value }) => {
  const [result, setResult] = useState(value);

  const color = (value) => {
    if (value >= 90) {
      return colors[0];
    } else if (value >= 80) {
      return colors[1];
    } else if (value >= 70) {
      return colors[2];
    } else if (value >= 60) {
      return colors[3];
    } else {
      return colors[4];
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: color(result),
        }}
        className={styles.chip}
      >
        {result}
      </div>
    </div>
  );
};

export default PersonalExam;
