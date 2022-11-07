import React, { Children } from "react";
import styles from "./ASCIIBox.module.scss";
import { Ibutton } from "../interfaces/Button";

const Button = (button: Ibutton) => (
  <div className={styles.box}>
    <div className={styles.inner}>{button.children}</div>
  </div>
);

export default Button;
