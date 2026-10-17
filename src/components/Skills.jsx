import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="wrap section">
      <Reveal as="h2">Skills</Reveal>
      <dl className="skills">
        {skills.map(([name, items], i) => (
          <Reveal key={name} i={i}>
            <dt>{name}</dt>
            <dd>{items}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
