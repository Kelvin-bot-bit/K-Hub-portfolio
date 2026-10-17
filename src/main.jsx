import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThankYou from "./components/ThankYou.jsx";
import "./index.css";

// Netlify redirects the form fallback to /thank-you; the _redirects file serves this app there.
const isThanks = window.location.pathname.replace(/\/$/, "") === "/thank-you";

createRoot(document.getElementById("root")).render(
  <StrictMode>{isThanks ? <ThankYou /> : <App />}</StrictMode>
);
