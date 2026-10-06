import SectionHeading from "./SectionHeading.jsx";
import { skillGroups, techList } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <SectionHeading
        number="03"
        label="TECHNOLOGY STACK"
        title="Tools I use to"
        accent="build ideas."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-icon">
              <i className={`fa-solid ${group.icon}`} />
            </div>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-list">
        {techList.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
