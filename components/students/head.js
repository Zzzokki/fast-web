import React from "react";
import styles from "../../styles/components/students/Head.module.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Head = ({ children, filter, setFilter }) => {
  return (
    <div className={styles.container}>
      {children}
      {filter?.name === children && <BsArrowUp />}
    </div>
  );
};

export default Head;
