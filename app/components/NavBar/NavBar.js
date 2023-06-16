import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          LHS73 <span>50th</span>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        {/* <Link href="/whos-coming">Who’s coming?</Link> */}
      </div>
    </div>
  );
};
