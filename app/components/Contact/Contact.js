import React from "react";
import { Section } from "../Section";
import styles from "./Contact.module.scss";

const contacts = [
  {
    name: "Cathy Rowe",
    phone: "(586) 612-3883",
    email: "crowephd@gmail.com",
  },
  {
    name: "Sue Bertolini-Fox",
    email: "feathertrail@gmail.com",
  },
];

export const Contact = () => {
  return (
    <Section variant="blue" title="Questions?">
      <div>For more information contact:</div>
      <div className={styles.contacts}>
        {contacts.map((contact) => {
          return (
            <div className={styles.contact}>
              <div className={styles.name}>{contact.name}</div>
              <div className={styles.info}>
                {contact.phone && (
                  <div>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                )}
                {contact.email && (
                  <div>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
