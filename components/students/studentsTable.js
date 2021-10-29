import React, { useState } from "react";
import styles from "../../styles/components/students/StudentsTable.module.css";

import Student from "./student";
import Head from "./head";

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const heads = [
  "№",
  "Овог нэр",
  "Ирц",
  "Гэрийн даалгавар",
  "Шалгалт",
  "Хувийн Шалгалт",
  "",
];

const StudentsTable = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {heads.map((title) => (
          <Head filter={filter} setFilter={setFilter}>
            {title}
          </Head>
        ))}
      </div>
      <div className={styles.students}>
        {a
          .filter((item) => {
            if (filter) {
              return filter.function(item);
            } else {
              return true;
            }
          })
          .map((_item, index) => (
            <Student index={index} />
          ))}
      </div>
    </div>
  );
};

export default StudentsTable;
