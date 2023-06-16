import React from "react";
import Link from "next/link";
import styles from "./ButtonLink.module.scss";

export const ButtonLink = ({ children, href }) => {
  return (
    <Link className={styles.button} href={href}>
      {children} <span>➞</span>
    </Link>
  );
};
