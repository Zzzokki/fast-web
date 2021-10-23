import React, { useEffect, useState } from "react";
import styles from "../styles/components/Scroll.module.css";

const Scroll = ({ scroll, scrollLeft }) => {
  const [clientWidth, setClientWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scroll && clientWidth === 0 && scrollWidth === 0) {
      let ref = scroll.current;
      setClientWidth(ref.clientWidth);
      setScrollWidth(ref.scrollWidth);
    }
  }, [scroll]);

  return (
    <div className={`${styles.track}`}>
      <div
        className={`${styles.thumb}`}
        style={{
          width: `${(100 * clientWidth) / scrollWidth}%`,
          transform: `translateX(${(100 * scrollLeft) / clientWidth}%)`,
        }}
      />
    </div>
  );
};

export default Scroll;
