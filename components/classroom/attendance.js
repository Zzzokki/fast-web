import React, { useState } from "react";
import styles from "../../styles/components/Status.module.css";

const colors = ["#7CDF64", "#AB3428", "#78C6FF"];
const values = ["Ирсэн", "Тасалсан", "Чөлөөтэй"];

const Attendance = ({ value }) => {
  const [status, setStatus] = useState(value);

  return (
    <div
      onClick={() => {
        setStatus((prev) => (prev + 1) % 3);
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

export default Attendance;
