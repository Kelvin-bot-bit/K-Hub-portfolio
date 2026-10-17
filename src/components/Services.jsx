import { services } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services" className="wrap section">
      <Reveal as="h2">How I can help</Reveal>
      <div className="services">
        {services.map(([title, text], i) => (
          <Reveal key={title} i={i}>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
