import React from "react";
import styles from "./Hero.module.scss";
import { ButtonLink } from "../ButtonLink";

export const Hero = ({ variant, children }) => {
  return (
    <>
      {variant !== "home" ? (
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>{children}</h1>
            <div className={styles.colorBlock}></div>
            <div className={styles.imageBlock}></div>
          </div>
        </div>
      ) : (
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.logo}>
              <div>
                Lincoln <br />
                High School
              </div>
              <div className={styles.sub}>Class of 1973 50th Reunion</div>
            </h1>
            <div className={styles.date}>September 15–17th, 2023</div>
            <div className={styles.actions}>
              <ButtonLink href="/events">Events</ButtonLink>
            </div>
            <div className={styles.colorBlock}></div>
            <div className={styles.imageBlock}></div>
          </div>
        </div>
      )}
    </>
  );
};
