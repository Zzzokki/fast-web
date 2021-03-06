import React from "react";
import styles from "../styles/modals/Modal.module.css";

import Button from "../components/button";
import Input from "../components/input";

const AddStudent = ({ close }) => {
  return (
    <div className={styles.container}>
      <div onClick={close} className={styles.background} />
      <div className={styles.card}>
        <div className={styles.grid}>
          <Input type='text' title='Овог' />
          <div />
          <Input type='text' title='Нэр' />
        </div>
        <Input type='text' title='Утас' />
        <Input type='text' title='Сургууль' />
        <div className={styles.grid}>
          <Button onClick={close} mt='12px' h='48px'>
            Болих
          </Button>
          <div />
          <Button mt='12px' h='48px'>
            Сурагч нэмэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
