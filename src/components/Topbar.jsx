import { profile } from "../data/content.js";

export default function Topbar({ scrolled, onMenu }) {
  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`}>
      <a href="#home" className="brand">
        <span className="brand-mark">M</span>
        <div>
          <strong>{profile.firstName}</strong>
          <small>BSIT Student</small>
        </div>
      </a>

      <div className="top-actions">
        <a href="#contact" className="talk-btn">
          Let's Talk
        </a>

        <button className="menu-btn" aria-label="Open menu" onClick={onMenu}>
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </header>
  );
}
