import React, { useState } from "react";
import styles from "../../styles/components/classroom/Fullname.module.css";

import Button from "../button";

const Fullname = () => {
  const [search, setSearch] = useState(null);

  return (
    <div className={styles.container}>
      {search !== null ? <input /> : <p>Овог нэр</p>}

      <Button
        onClick={() => {
          setSearch("");
        }}
        h="24px"
        w="24px"
      >
        o
      </Button>
    </div>
  );
};

export default Fullname;
