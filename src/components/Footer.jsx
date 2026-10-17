import { socials } from "../data.js";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="wrap">
      <ul className="socials" aria-label="Social media">
        {socials.map(([icon, label, href]) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon name={icon} />
            </a>
          </li>
        ))}
      </ul>
      <div className="foot-row">
        <span>© {new Date().getFullYear()} Kelvin Kaiseyie</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
