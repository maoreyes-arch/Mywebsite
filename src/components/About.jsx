import SectionHeading from "./SectionHeading.jsx";
import { aboutInfo, aboutLead, aboutParagraphs } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <SectionHeading
        number="01"
        label="ABOUT ME"
        title="A student who loves"
        accent="learning and creating."
      />

      <div className="about-grid">
        <div className="about-text">
          <p className="large-text">{aboutLead}</p>
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="about-info">
          {aboutInfo.map((item) => (
            <div className="info-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
