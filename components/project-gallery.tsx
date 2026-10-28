"use client";

import { useRef, useState } from "react";
import { Expand, X } from "lucide-react";

const screens = [
  { file: "create-listing", role: "DONOR", title: "Post food to share", caption: "Set a pickup location on the map, food quantity, and availability window." },
  { file: "browse-nearby", role: "RECIPIENT", title: "Find food nearby", caption: "Search around a request’s chosen radius and claim an available portion." },
  { file: "active-claim", role: "RECIPIENT", title: "Get a pickup code", caption: "View a waiting-for-pickup claim with its six-digit code and expiry time." },
  { file: "verify-pickup", role: "DONOR", title: "Confirm the handover", caption: "Enter the recipient’s code for a listing. This capture shows a successful pickup confirmation." },
  { file: "request-history", role: "RECIPIENT", title: "Track request status", caption: "View requests across searching, claimed, completed, cancelled, and expired states." },
];

export default function ProjectGallery() {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const screen = screens[selected];

  return (
    <div className="project-gallery">
      <div className="gallery-heading">
        <h4>A look inside BagiPangan</h4>
        <span>5 screenshots · select a step to explore</span>
      </div>
      <div className="gallery-tabs" aria-label="Walkthrough steps">
        {screens.map((item, index) => (
          <button key={item.file} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <span>0{index + 1}</span> {item.title}
          </button>
        ))}
      </div>
      <figure className="gallery-figure">
        <button className="gallery-image-button" type="button" onClick={() => { setZoomed(false); dialog.current?.showModal(); }} aria-label={`Enlarge screenshot: ${screen.title}`}>
          {/* Original screenshots are served as static assets without an image transformation service. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/projects/bagipangan/${screen.file}.png`} alt={`${screen.role === "DONOR" ? "Donor" : "Recipient"} view of BagiPangan: ${screen.title}`} width={1920} height={960} loading="lazy" />
          <span className="gallery-expand"><Expand size={14} aria-hidden="true" /> Enlarge screenshot</span>
        </button>
        <figcaption aria-live="polite"><span>{screen.role} / 0{selected + 1}</span><p>{screen.caption}</p></figcaption>
      </figure>
      <dialog ref={dialog} className="screenshot-dialog" aria-label={screen.title} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="dialog-toolbar"><strong>{screen.title}</strong><button className="screenshot-zoom" type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? "Fit image" : "Zoom in"}</button><button type="button" onClick={() => dialog.current?.close()} aria-label="Close screenshot"><X size={22} /></button></div>
        <div className={`screenshot-scroll${zoomed ? " is-zoomed" : ""}`} tabIndex={0} role="region" aria-label="Screenshot detail; scroll to explore when zoomed">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/projects/bagipangan/${screen.file}.png`} alt={screen.caption} width={1920} height={960} />
        </div>
        <p>{screen.caption}</p>
      </dialog>
    </div>
  );
}
