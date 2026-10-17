import Icon from "./Icon.jsx";

export default function Hero({ onOpenMap }) {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="status"><i></i>Open to freelance and junior roles</p>
        <h1>Kelvin <span className="redact">Kaiseyie</span></h1>
        <p className="lead">I build full-stack web apps, then try to break them before someone else does.</p>
        <p className="sub">
          Computer science graduate in Nairobi. React, Flask,PHP and Spring Boot on the build side; Burp Suite, Nmap, Metasploit and the OWASP Top 10 on the testing side, plus artificial intelligence and machine learning.
        </p>
        <div className="actions">
          <a className="btn primary" href="#work">See my work</a>
          <a className="btn" href="/assets/KELVIN_CV%203.pdf" download>Download CV</a>
        </div>
      </div>
      <figure className="portrait">
        <img src="/imgs/profile.jpeg" alt="Kelvin Kaiseyie looking out over the Nairobi skyline" width="480" height="640" />
        <figcaption>
          <span>Nairobi, Kenya</span>
          <button type="button" className="pin-btn" aria-label="Show Nairobi on an interactive map" aria-haspopup="dialog" onClick={onOpenMap}>
            <Icon name="pin" size={20} />
          </button>
        </figcaption>
      </figure>
    </section>
  );
}
