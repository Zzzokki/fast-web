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
    <div className={`container flex ${styles.container}`}>
      <div className="f1"></div>
      <div className={`h100 flex ${styles.formContainer}`}>
        <div className={`${styles.form}`}>
          <div></div>
          <Input title="Имэйл" value={email} onChange={emailHandler} />
          <Input title="Нууц үг" value={password} onChange={passwordHandler} />
          <Button
            onClick={() => {
              router.push("/dashboard/classrooms");
            }}
            bg="#4163E3"
            c="#fff"
          >
            Нэвтрэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
