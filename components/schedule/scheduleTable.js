import React from "react";
import styles from "../../styles/components/schedule/ScheduleTable.module.css";

const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

const ScheduleTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div />
        {days.map((day) => (
          <div className={styles.day}>{day}</div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.time}>8:30 - 10:30</div>
        {days.map((_day, index) => {
          if (index > 0) {
            return <div className={styles.class}></div>;
          } else {
            return (
              <div
                style={{ backgroundColor: "#fbb532", color: "#fff" }}
                className={styles.class}
              >
                <p>Түшиг</p>
              </div>
            );
          }
        })}
      </div>
      <div className={styles.row}>
        <div className={styles.time}>11:00 - 13:00</div>
        {days.map((day) => (
          <div className={styles.class}></div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.time}>14:00 - 16:00</div>
        {days.map((day) => (
          <div className={styles.class}></div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.time}>16:30 - 18:30</div>
        {days.map((day) => (
          <div className={styles.class}></div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTable;
