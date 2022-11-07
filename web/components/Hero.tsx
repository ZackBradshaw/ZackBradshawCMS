import React from "react";
import styles from "./Hero.module.scss";
import ASCIIBox from "./ASCIIBox";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        {/* <h1 className={styles.name}>Zack</h1> */}
        <p className={styles.info}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto itaque
          facere reprehenderit. Laborum blanditiis at nulla natus, corrupti
          temporibus accusamus. Reprehenderit sint consequatur illo ratione
          doloremque exercitationem labore quis suscipit.
        </p>

        <button className={styles.button}>Contact me !!</button>
      </div>
      <div className={styles.profile}>
        <span className={styles.photo}>¯\_(ツ)_/¯</span>
        <ASCIIBox>
          <h2 className={styles.status}>
            Currently working on <span>Portfolio</span>
          </h2>
        </ASCIIBox>
      </div>
    </div>
  );
};

export default Hero;
