import React, { useEffect, useState } from "react";
import styles from "../../styles/components/classroom/Dates.module.css";

const Dates = ({ data, scroll }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let ref = scroll.current;
    ref.addEventListener("scroll", () => {
      setScrollLeft(ref.scrollLeft);
    });
  }, []);

  return (
    <div
      style={{ transform: `translateX(${-scrollLeft}px)` }}
      className={styles.dates}
    >
      {data.map((item, index) => (
        <div
          style={{
            borderLeft: index === 0 && "none",
          }}
          className={styles.recordCell}
        ></div>
      ))}
    </div>
  );
};

export default Dates;
