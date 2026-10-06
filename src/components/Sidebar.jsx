import { navItems, profile } from "../data/content.js";

export default function Sidebar({ open, active, onClose }) {
  return (
    <>
      <aside className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">M</div>
          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
        </div>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-link${active === item.id ? " active" : ""}`}
              onClick={onClose}
            >
              <i className={`fa-solid ${item.icon}`} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <div className="sidebar-socials">
          <a href={profile.facebook} aria-label="Facebook">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>

        <div className="sidebar-footer">
          <p>© {new Date().getFullYear()} {profile.firstName}</p>
        </div>
      </aside>

      <div
        className={`sidebar-overlay${open ? " active" : ""}`}
        onClick={onClose}
      />
    </>
  );
}
