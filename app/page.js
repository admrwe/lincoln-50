import styles from "./page.module.scss";
import { Section } from "./components/Section";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <header>
        <Hero variant="home" />
      </header>
      <main className={styles.main}>
        <Section title="About the weekend" variant="yellow">
          <div>
            Join us for a weekend of events celebrating the 50th reunion of
            Lincoln High School’s class of 1973.
          </div>
          <div>
            The festivities begin on Friday, September 15th with a pre-party at
            Venue Name in Lake Orion.
          </div>
          <div>
            The official reunion party kicks of Saturday, September 16th at
            5:30pm at the Fraternal Order of Police Hall in Warren. Join us for
            dinner and open bar, buy your tickets now!
          </div>
          <div>
            Wrap up the weekend Sunday, September 17th with a picnic at Park
            Name from 11:00am to 2:00pm.
          </div>
        </Section>
        <Contact />
      </main>
    </>
  );
}
