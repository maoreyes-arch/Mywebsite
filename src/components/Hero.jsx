import { heroStats, profile } from "../data/content.js";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          HELLO, I'M MARIANE
        </span>

        <h1>
          Building ideas through <span>technology</span> and creativity.
        </h1>

        <p className="hero-description">
          I am a BSIT student who enjoys learning technology, creating digital
          solutions, and using my skills to contribute to school, organizations,
          and communities.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects <i className="fa-solid fa-arrow-right" />
          </a>
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.label}</strong>
              <span>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image">
          <img
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt={profile.name}
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
          />
        </div>

        <div className="floating-card">
          <div className="floating-icon">
            <i className="fa-solid fa-code" />
          </div>
          <div>
            <strong>BSIT Student</strong>
            <span>Learning • Creating • Growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
