import React from "react";
import ASCIIBox from "./ASCIIBox";
import styles from "./Card.module.scss";
import { ICard } from "../interfaces/Card";
import { PortableText } from "@portabletext/react";
import urlFor from "./../utils/urlfor";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={
            urlFor(value)
              .width(320)
              .height(240)
              .fit("max")
              .auto("format") as unknown as string
          }
        />
      );
    },
  },
};

const Card = ({ link, categories, title, img, description }: ICard) => {
  console.log("categories", categories);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgcontainer}>
          <img className={styles.img} src={img}></img>
        </div>
        <div className={styles.tech}>
          {categories &&
            categories.map((category) => <p key={category}>{category}</p>)}
        </div>
        <div className={styles.cardInfo}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            <PortableText value={description} components={ptComponents} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <a href={link} target="_blank" className={styles.link}>
          Live {`<~>`}
        </a>
      </div>
    </div>
  );
};

export default Card;
