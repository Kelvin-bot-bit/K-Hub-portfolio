import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const links = [
  ["work", "Work"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["services", "Services"],
];

export default function Nav({ onOpenMap }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [spin, setSpin] = useState(false);

  // shadow under the bar once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setSpin((s) => !s);
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="logo" href="#top" aria-label="Kelvin Kaiseyie, home">K-Hub</a>
      <nav id="menu" aria-label="Main" className={open ? "open" : ""} onClick={(e) => e.target.closest("a") && setOpen(false)}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>{label}</a>
        ))}
        <a className="cta" href="#contact">Contact</a>
      </nav>
      <button type="button" className="loc-btn" aria-label="Show Nairobi, Kenya on an interactive map" aria-haspopup="dialog" onClick={onOpenMap}>
        <Icon name="pin" size={18} /><span>Nairobi</span>
      </button>
      <button id="theme" type="button" className={`icon-btn${spin ? " spin" : ""}`} aria-label="Switch colour theme" onClick={toggleTheme}>
        <span aria-hidden="true">◐</span>
      </button>
      <button type="button" className="icon-btn burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
        <span aria-hidden="true">☰</span>
      </button>
    </header>
  );
}
