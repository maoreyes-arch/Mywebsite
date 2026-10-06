import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projects" className="section light-section reveal">
      <SectionHeading
        label="SELECTED WORK"
        title="Projects I've"
        accent="worked on."
        className="projects-heading"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-image${project.alt ? " project-image-two" : ""}`}>
              <div className="project-number">{project.number}</div>
              <i className={`fa-solid ${project.icon}`} />
            </div>

            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a href="#contact" className="project-link">
                Discuss Project <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
