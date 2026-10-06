import { profile } from "../data/content.js";

const links = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    external: true,
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <div className="contact-wrapper">
        <div className="contact-intro">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Let's create something <span>meaningful.</span>
          </h2>

          <p>
            Whether it is a school project, collaboration, organization-related
            work, or simply a conversation about technology, feel free to reach
            out.
          </p>

          <div className="contact-details">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <div className="contact-icon">
                  <i className={link.icon} />
                </div>
                <div>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
