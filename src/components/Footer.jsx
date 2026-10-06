import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.fullName}</strong>
        <p>{profile.footerLine}</p>
      </div>

      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
