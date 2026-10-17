import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    document.title = "Message sent · Kelvin Kaiseyie";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);
  return (
    <main className="wrap thanks">
      <h1>Thank you.</h1>
      <p className="lead">Your message is in. I’ll reply within a day or two.</p>
      <a className="btn primary" href="/">Back to the portfolio</a>
    </main>
  );
}
