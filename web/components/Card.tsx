import React from "react";
import ASCIIBox from "./ASCIIBox";
import styles from "./Card.module.scss";
import { ICard } from "../interfaces/Card";

const Card = (Card: ICard) => {
  return (
    <div className={styles.container}>
      <ASCIIBox>
        <img className={styles.img} src={Card.img}></img>
        <div className={styles.tech}>
          <ASCIIBox>
            <h3>{Card.tech}</h3>
          </ASCIIBox>
        </div>
        <div className={styles.cardInfo}>
          <h1 className={styles.title}>{Card.title}</h1>
          <p className={styles.description}>{Card.description}</p>
          <div>
            <button className={styles.button} aria-hidden={Card.hidden}>
              {Card.button}
            </button>
          </div>
        </div>
      </ASCIIBox>
    </div>
  );
};

export default Card;
