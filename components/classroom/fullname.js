import React from "react";
import styles from "../../styles/components/classroom/Fullname.module.css";

import Button from "../button";

const Fullname = () => {
  return (
    <div className={styles.container}>
      <p>Овог нэр</p>
      <Button h='24px' w='24px'>
        o
      </Button>
    </div>
  );
};

export default Fullname;
