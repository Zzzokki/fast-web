import React, { useMemo, useState } from "react";
import styles from "../../styles/components/Status.module.css";

const colors = ["#7AF696", "#FF3636", "#78C6FF", "#78C6FF", "#78C6FF"];
const marks = ["A", "B", "C", "D", "F"];

const Exam = ({ value }) => {
  const [result, setResult] = useState(value);

  const detail = useMemo(() => {
    let res = parseInt(result);
    if (res >= 90) {
      return { color: colors[0], value: `${result}% ${marks[0]}` };
    } else if (res >= 80) {
      return { color: colors[1], value: `${result}% ${marks[1]}` };
    } else if (res >= 70) {
      return { color: colors[2], value: `${result}% ${marks[2]}` };
    } else if (res >= 60) {
      return { color: colors[3], value: `${result}% ${marks[3]}` };
    } else {
      return { color: colors[4], value: `${result}% ${marks[4]}` };
    }
  }, [result]);

  return (
    <div className={styles.container}>
      <input
        style={{
          color: detail.color,
        }}
        onChange={(e) => {
          setResult(e.target.value);
        }}
        value={detail.value}
      />
    </div>
  );
};

export default Exam;
