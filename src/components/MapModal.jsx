import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./Icon.jsx";

const PLACE = [-1.2921, 36.8219]; // Nairobi
const WORLD = [10, 20];
const CITY_ZOOM = 11;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function MapModal({ onClose }) {
  const overlay = useRef(null);
  const canvas = useRef(null);
  const closeBtn = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeBtn.current.focus();

    // Start zoomed out on the whole world, then fly in to Nairobi (skipped for reduced motion)
    const m = L.map(canvas.current, {
      center: reduceMotion ? PLACE : WORLD,
      zoom: reduceMotion ? CITY_ZOOM : 1,
      minZoom: 1,
      maxZoom: 17,
      zoomControl: false,
      attributionControl: false,
      worldCopyJump: true,
      zoomAnimation: !reduceMotion,
      fadeAnimation: !reduceMotion,
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(m);
    L.marker(PLACE, {
      icon: L.divIcon({ className: "map-pin", html: "<i></i>", iconSize: [0, 0] }),
      keyboard: false,
    })
      .addTo(m)
      .bindTooltip("Nairobi, Kenya", { permanent: true, direction: "top", offset: [0, -16], className: "map-tip" });
    map.current = m;

    const timer = reduceMotion ? 0 : setTimeout(() => m.flyTo(PLACE, CITY_ZOOM, { duration: 2.4 }), 500);

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      // keep keyboard focus inside the dialog
      const items = [...overlay.current.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      m.remove();
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const go = (center, zoom) => (reduceMotion ? map.current.setView(center, zoom) : map.current.flyTo(center, zoom));

  return createPortal(
    <div ref={overlay} className="map-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="map-card" role="dialog" aria-modal="true" aria-labelledby="map-title">
        <div className="map-head">
          <h2 id="map-title">Where I’m based</h2>
          <button ref={closeBtn} type="button" className="icon-btn" aria-label="Close map" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="map-round">
          <div ref={canvas} className="map-canvas" role="region" aria-label="Interactive map of Nairobi, Kenya. Drag to move, scroll or pinch to zoom, arrow keys to pan." />
        </div>
        <div className="map-tools">
          <button type="button" className="btn" aria-label="Zoom out" onClick={() => map.current.zoomOut()}><Icon name="minus" size={18} /></button>
          <button type="button" className="btn" aria-label="Zoom in" onClick={() => map.current.zoomIn()}><Icon name="plus" size={18} /></button>
          <button type="button" className="btn" onClick={() => go(WORLD, 1)}><Icon name="globe" size={18} /><span>World</span></button>
          <button type="button" className="btn" onClick={() => go(PLACE, CITY_ZOOM)}><Icon name="pin" size={18} /><span>Nairobi</span></button>
        </div>
        <p className="map-credit">
          Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors ·{" "}
          <a href="https://www.openstreetmap.org/?mlat=-1.2921&mlon=36.8219#map=11/-1.2921/36.8219" target="_blank" rel="noopener noreferrer">Open larger map</a>
        </p>
      </div>
    </div>,
    document.body
  );
}
