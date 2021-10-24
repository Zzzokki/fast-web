import React, { useState } from "react";
import styles from "../../styles/Login.module.css";

import Input from "../../components/input";
import Button from "../../components/button";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className='f1'></div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div></div>
          <Input
            mb='16px'
            title='Имэйл'
            value={email}
            onChange={emailHandler}
          />
          <Input
            mb='16px'
            title='Нууц үг'
            value={password}
            onChange={passwordHandler}
          />
          <Button
            h='48px'
            mt='60px'
            onClick={() => {
              router.push("/dashboard/classrooms");
            }}
          >
            Нэвтрэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
