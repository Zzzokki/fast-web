import axios from "../axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/Picker.module.css";

import Button from "../components/button";

const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

const MultiPicker = (props) => {
  const [schedule, setSchedule] = useState([]);
  const [day, setDay] = useState(days[0]);
  const [hours, setHours] = useState([]);
  const [id, setId] = useState();

  const getHours = () => {
    axios.get(`/schedule/${day}`).then((res) => {
      setHours(res.data.schedule);
      console.log(res.data.schedule);
      if (res.data.schedule.length > 0) setId(res.data.schedule[0]._id);
    });
  };

  useEffect(() => {
    getHours();
  }, [day]);

  return (
    <div
      style={{
        width: props.w ?? "100%",
        margin: props.m,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginBottom: props.mb,
        marginTop: props.mt,
      }}
    >
      <p className={styles.title}>{props.title}</p>
      {/* <div
        style={styles.killer}
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
      >
        <div className={styles.options}>
          {props.options.map(() => (
            <div></div>
          ))}
        </div>
      </div> */}
      <div>
        {schedule.map((item) => (
          <div>{`${item.day} ${item.id}`}</div>
        ))}
      </div>
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
        }}
      >
        {days.map((d) => (
          <option value={d}>{d}</option>
        ))}
      </select>
      <select
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      >
        {hours.map((option) => (
          <option value={option._id}>{option.time}</option>
        ))}
      </select>
      <Button
        onClick={() => {
          setSchedule((prev) => [...prev, { day: day, id: id }]);
        }}
        h='40px'
        w='60px'
      >
        Нэмэх
      </Button>
      <p className={styles.error}></p>
    </div>
  );
};

export default MultiPicker;
