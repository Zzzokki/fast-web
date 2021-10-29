import React, { useEffect, useState } from "react";
import styles from "../../styles/components/classroom/Fullnames.module.css";

const Fullnames = ({ data, scroll }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let ref = scroll.current;
    ref.addEventListener("scroll", () => {
      setScrollTop(ref.scrollTop);
    });
  }, []);

  return (
    <div style={{ transform: `translateY(${-scrollTop}px)` }}>
      {data.map((item) => (
        <div
          className={styles.fullname}
        >{`${item.firstname} ${item.lastname}`}</div>
      ))}
    </div>
  );
};

export default Fullnames;
