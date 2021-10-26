import React from "react";
import styles from "../styles/modals/Modal.module.css";

import Button from "../components/button";
import Input from "../components/input";
import Picker from "../components/picker";

const AddClassroom = ({ close }) => {
  return (
    <div className={styles.container}>
      <div onClick={close} className={styles.background} />
      <div className={styles.card}>
        <Picker title='Багш' />
        <div className={styles.grid}>
          <Picker title='Анги' />
          <div />
          <Input type='number' title='Анги дүүргэлт' />
        </div>
        <div className={styles.grid}>
          <Input type='date' title='Эхлэх хугацаа' />
          <div />
          <Input type='date' title='Дуусах хугацаа' />
        </div>

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
