import { useState } from "react";
import { contact } from "../data.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGES = {
  name: "Enter your name.",
  email: "Enter a valid email address.",
  message: "Tell me what you need.",
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const val = (k) => form.elements[k].value.trim();
    const field = !val("name") ? "name" : !EMAIL.test(val("email")) ? "email" : !val("message") ? "message" : "";
    setStatus("idle");
    setError(field ? MESSAGES[field] : "");
    if (field) {
      form.elements[field].focus();
      return;
    }
    setStatus("sending");
    try {
      // Netlify Forms: post url-encoded fields (including form-name) to the site root
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setError("Sorry, that didn’t send. Please try again or message me on WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="wrap section contact">
      <Reveal>
        <h2>Let’s talk about your project</h2>
        <p className="intro">Tell me what you’re building or what needs securing. I reply within a day or two.</p>
        <ul className="contact-list">
          <li><a href={`mailto:${contact.email}`}><Icon name="mail" /><span>{contact.email}</span></a></li>
          <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /><span>{contact.whatsappLabel}</span></a></li>
          <li><a href={contact.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /><span>github.com/Kelvin-bot-bit</span></a></li>
        </ul>
      </Reveal>
      <Reveal as="form" i={1} id="form" name="contact" method="POST" action="/thank-you" noValidate onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="hp" aria-hidden="true">
          <label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
        </p>
        <label>Your name<input name="name" autoComplete="name" maxLength={80} required /></label>
        <label>Your email<input name="email" type="email" autoComplete="email" maxLength={120} required /></label>
        <label>What do you need?<textarea name="message" rows={5} maxLength={2000} required /></label>
        <p id="err" role="alert" hidden={!error}>{error}</p>
        <p id="ok" role="status" hidden={status !== "ok"}>Thanks, your message was sent. I’ll reply within a day or two.</p>
        <button className="btn primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </Reveal>
    </section>
  );
}
