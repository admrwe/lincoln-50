import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Contact } from "../components/Contact";

export default function WhosComing() {
  return (
    <>
      <Hero>Who’s coming?</Hero>
      <Section title="Pre-party">Friday, September 15</Section>
      <Section title="Reunion">Saturday, September 16</Section>
      <Section title="Picnic">Sunday, September 17</Section>
      <Contact />
    </>
  );
}
