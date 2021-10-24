import React, { useState } from "react";
import styles from "../../../styles/components/Status.module.css";

const Status = ({ section, value }) => {
  const [status, setStatus] = useState(value);
  const statusNumber = [3, 2];

  return (
    <div
      onClick={() => {
        setStatus((prev) => (prev + 1) % statusNumber[section]);
      }}
      className={`${styles.container}`}
    >
      {section === 0 && (
        <div
          style={{
            backgroundColor:
              status === 0 ? "#7AF696" : status === 1 ? "#FF3636" : "#78C6FF",
          }}
          className={`${styles.chip}`}
        >
          {status === 0 ? "Ирсэн" : status === 1 ? "Тасалсан" : "Чөлөөтэй"}
        </div>
      )}
    </div>
  );
};

export default Status;
