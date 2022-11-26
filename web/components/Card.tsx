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
  // console.log("Desc", description);
  return (
    <div className={styles.container}>
      <ASCIIBox>
        <div className={styles.imgcontainer}>
          <img className={styles.img} src={img}></img>
        </div>
        <div className={styles.tech}>
          <ASCIIBox>
            {categories.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </ASCIIBox>
        </div>
        <div className={styles.cardInfo}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            <PortableText value={description} components={ptComponents} />
          </div>
          <a href={link}>Live {`<~>`}</a>
        </div>
      </ASCIIBox>
    </div>
  );
};

export default Card;
