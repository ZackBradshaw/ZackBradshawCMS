import React from "react";
import ASCIIBox from "./ASCIIBox";
import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <div className={styles.container}>
      <ASCIIBox>
        <h1 className={styles.quoteText}>
          With great power comes great electricity bill
        </h1>
      </ASCIIBox>
      <ASCIIBox>
        <h2 className={styles.author}>- Dr. Who</h2>
      </ASCIIBox>
    </div>
  );
};

export default Quote;
