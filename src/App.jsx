import { lazy, Suspense, useCallback, useRef, useState } from "react";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// The map (and the Leaflet library) only downloads when someone opens it
const MapModal = lazy(() => import("./components/MapModal.jsx"));

export default function App() {
  const [mapOpen, setMapOpen] = useState(false);
  const trigger = useRef(null);

  const openMap = useCallback((e) => {
    trigger.current = e.currentTarget;
    setMapOpen(true);
  }, []);

  const closeMap = useCallback(() => {
    setMapOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  }, []);

  return (
    <>
      <ScrollProgress />
      <a className="skip" href="#work">Skip to projects</a>
      <Nav onOpenMap={openMap} />
      <main id="top">
        <Hero onOpenMap={openMap} />
        <Work />
        <Experience />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      {mapOpen && (
        <Suspense fallback={null}>
          <MapModal onClose={closeMap} />
        </Suspense>
      )}
    </>
  );
}
