import { useEffect, useRef, useState } from "react";

const canObserve = typeof window !== "undefined" && "IntersectionObserver" in window;
const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fades and slides an element in when it scrolls into view. `i` staggers siblings.
// After the entrance it drops the reveal classes so normal hover effects take over.
export default function Reveal({ as: Tag = "div", i = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState(canObserve && !reduceMotion ? "hidden" : "done");

  useEffect(() => {
    if (phase !== "hidden") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("in");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [phase]);

  useEffect(() => {
    if (phase !== "in") return;
    const t = setTimeout(() => setPhase("done"), 1300 + i * 90);
    return () => clearTimeout(t);
  }, [phase, i]);

  const cls = [className, phase !== "done" && "reveal", phase === "in" && "in"].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={cls} style={{ "--i": i }} {...rest}>
      {children}
    </Tag>
  );
}
