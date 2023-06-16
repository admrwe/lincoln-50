import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Contact } from "../components/Contact";
import { ButtonLink } from "../components/ButtonLink";
import styles from "./page.module.scss";

const events = [
  {
    name: "Pre-party",
    date: "Friday, September 15th",
    venueName: "Dryden Bar & Grill",
    address1: "5505 Main St",
    address2: "Dryden, MI 48428",
    url: "https://goo.gl/maps/rCH3eEZAwrSN4aBDA",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11682.085471260949!2d-83.1250795!3d42.9462163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824f64b1a8c19f1%3A0xd6f8bea027b7b4db!2sDryden%20Bar%20and%20Grill!5e0!3m2!1sen!2sus!4v1686797615601!5m2!1sen!2sus",
    info: ["7pm to ?"],
  },
  {
    name: "Reunion Party",
    date: "Saturday, September 16th",
    venueName: "Fraternal Order of Police (F.O.P.) Lodge",
    time: "5:30 to 11:30pm",
    address1: "11304 E 14 Mile Rd",
    address2: "Warren, MI 48093",
    url: "https://goo.gl/maps/VuoL4J2dwyEyWCff6",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.872789457368!2d-83.015661087511!3d42.53675692379867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824dbca5df27859%3A0x1908236f95aff8d9!2s11304%2014%20Mile%20Rd%2C%20Warren%2C%20MI%2048093!5e0!3m2!1sen!2sus!4v1686799727206!5m2!1sen!2sus",
    info: [
      "Join us for the official reunion party, ticket prices include dinner and open bar.",
      "5:30 to 11:30pm",
      "Tickets: $60 per person",
    ],
  },
  {
    name: "Class Picnic",
    date: "Sunday, September 17th",
    venueName: "Time and location TBD",
  },
];

export default function Events() {
  return (
    <>
      <Hero>Events</Hero>
      {events.map((event) => {
        return (
          <Section title={event.name} subtitle={event.date} key={event.name}>
            <div>
              {event.info && (
                <div className={styles.info}>
                  {event.info.map((p, i) => {
                    return <div key={`p-${i}`}>{p}</div>;
                  })}
                </div>
              )}
              {event.name === "Reunion Party" && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Ways to pay</h3>
                  <section>
                    <h4>By check</h4>
                    Make out the check to "LHS 50th Reunion" and send to: <br />
                    <br />
                    Cathy Rowe-Lonczynski
                    <br />
                    8060 32 Mile Road
                    <br />
                    Washington, MI 48095
                  </section>
                  <section>
                    <h4>Online</h4>
                    Send money via Zelle in your banking app to:
                    <br />
                    <br />
                    $ZelleUserName
                  </section>
                </div>
              )}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Location</h3>
                {event.venueName && (
                  <div className={styles.venueName}>{event.venueName}</div>
                )}
                {event.address1 && event.address2 && (
                  <div className={styles.address}>
                    <a href={event.url}>
                      {event.address1} <br />
                      {event.address2}
                    </a>
                  </div>
                )}
                {event.url && (
                  <div className={styles.actions}>
                    <ButtonLink href={event.url}>Get directions</ButtonLink>
                  </div>
                )}
              </div>
            </div>
            {event.mapURL && (
              <div className={styles.map}>
                <iframe
                  src={event.mapURL}
                  style={{ border: "none" }}
                  width="100%"
                  height="400"
                  allowFullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            )}
          </Section>
        );
      })}
      <Contact />
    </>
  );
}
