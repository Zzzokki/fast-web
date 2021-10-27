import React, { useEffect, useState } from "react";
import styles from "../styles/modals/Modal.module.css";

import Button from "../components/button";
import Input from "../components/input";
import Picker from "../components/picker";
import axios from "../axios";
import MultiPicker from "../components/multiPicker";

const grades = [
  { name: "4-р анги", value: 4 },
  { name: "5-р анги", value: 5 },
  { name: "6-р анги", value: 6 },
  { name: "7-р анги", value: 7 },
  { name: "8-р анги", value: 8 },
];

const AddClassroom = ({ close }) => {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = () => {
    axios.get("/employee").then((res) => {
      setTeachers(
        res.data.employees.map((item) => ({
          value: item.id,
          name: `${item.lastname} ${item.firstname}`,
        }))
      );
    });
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className={styles.container}>
      <div onClick={close} className={styles.background} />
      <div className={styles.card}>
        <Picker options={teachers} title='Багш' />
        <div className={styles.grid}>
          <Picker options={grades} title='Анги' />
          <div />
          <Input type='number' title='Анги дүүргэлт' />
        </div>
        <div className={styles.grid}>
          <Input type='date' title='Эхлэх хугацаа' />
          <div />
          <Input type='date' title='Дуусах хугацаа' />
        </div>
        <MultiPicker title='Хуваарь' />

        <div className={styles.grid}>
          <Button onClick={close} mt='12px' h='48px'>
            Болих
          </Button>
          <div />
          <Button mt='12px' h='48px'>
            Анги нэмэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddClassroom;
