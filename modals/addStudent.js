import React from "react";
import styles from "../styles/modals/AddStudent.module.css";

import Button from "../components/button";

const AddStudent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <input />
        <input />
        <input />
        <input />
        <Button>Болих</Button>
        <Button>Сурагч нэмэх</Button>
      </div>
    </div>
  );
};

export default AddStudent;
