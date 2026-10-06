import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="section light-section reveal">
      <SectionHeading
        number="02"
        label="EDUCATION"
        title="My academic"
        accent="journey."
      />

      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.school}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
