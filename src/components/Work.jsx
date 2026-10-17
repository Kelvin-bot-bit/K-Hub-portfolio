import { useState } from "react";
import { filters, projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";

function ProjectCard({ p, i }) {
  const body = (
    <>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="proj-links">
        <a href={p.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} source code on GitHub`}>
          <Icon name="github" size={18} /><span>Source</span>
        </a>
        {p.live ? (
          <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.title} live site`}>
            <Icon name="external" size={18} /><span>Live site</span>
          </a>
        ) : (
          <span className="off" role="link" aria-disabled="true" title="No live site yet">
            <Icon name="external" size={18} /><span>Live site</span>
          </span>
        )}
      </div>
    </>
  );

  return p.img ? (
    <Reveal as="article" i={i} className="project big wide">
      <img src={p.img} alt={p.alt} loading="lazy" />
      <div>{body}</div>
    </Reveal>
  ) : (
    <Reveal as="article" i={i} className="project">{body}</Reveal>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const list = projects.filter((p) => filter === "all" || p.cat.includes(filter));

  return (
    <section id="work" className="wrap section">
      <Reveal as="h2">Selected work</Reveal>
      <Reveal as="p" className="intro" i={1}>
        Websites, full-stack systems and security projects. Pick a category to filter; each card links to its source code and, where deployed, its live site.
      </Reveal>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {filters.map(([key, label]) => (
          <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {`Showing ${list.length} project${list.length === 1 ? "" : "s"}`}
      </p>
      <div className="work">
        {/* the filter is part of the key so cards replay their entrance when it changes */}
        {list.map((p, idx) => <ProjectCard key={`${filter}-${p.id}`} p={p} i={idx % 3} />)}
      </div>
    </section>
  );
}
