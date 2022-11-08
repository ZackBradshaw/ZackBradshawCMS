import React from "react";
import styles from "./SectionHeader.module.scss";
import { IHeader } from "../interfaces/Header";

const SectionHeader = (header: IHeader) => {
  return (
    <div className={styles.header}>
      <span>#</span>
      <h1 className={styles.title}>{header.title}</h1>
      <div className={styles.line}></div>
    </div>
  );
};

export default SectionHeader;
