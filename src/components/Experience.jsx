import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="wrap section">
      <Reveal as="h2">Experience</Reveal>
      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.title} i={i}>
            <time>{e.when}</time>
            <div>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
