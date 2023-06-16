import React from "react";
import styles from "./Section.module.scss";

export const Section = ({ children, title, subtitle, variant }) => {
  const className = !variant
    ? styles.homeSection
    : `${styles.homeSection} ${styles[variant]}`;

  return (
    <section className={className}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <div>{title}</div>
          <div className={styles.sub}>{subtitle}</div>
        </h2>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};
