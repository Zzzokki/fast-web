import React, { useState } from "react";
import styles from "../../styles/components/Status.module.css";

const colors = ["#7AF696", "#FF3636"];
const values = ["Хангалттай", "Хангалтгүй"];

const Homework = ({ value }) => {
  const [status, setStatus] = useState(value);

  return (
    <div
      onClick={() => {
        setStatus((prev) => (prev + 1) % 2);
      }}
      className={styles.container}
    >
      <div
        style={{
          backgroundColor: colors[status],
        }}
        className={styles.chip}
      >
        {values[status]}
      </div>
    </div>
  );
};

export default Homework;
