"use client";

import { useState, useEffect, useRef } from "react";

const moments = [
  {
    id: 1,
    src: "/HappyMoments/hm1.mp4",
    label: "Priya & Arjun's Wedding",
    category: "Wedding",
    quote: "The most magical night of our lives.",
    size: "tall",
  },
  {
    id: 2,
    src: "/HappyMoments/hm2.jpeg",
    label: "Mehta Family Reception",
    category: "Reception",
    quote: "500 guests, zero worries.",
    size: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85",
    label: "Riya's 25th Birthday",
    category: "Birthday",
    quote: "Beyond every expectation.",
    size: "normal",
  },
  {
    id: 4,
    src: "/HappyMoments/hm4.jpeg",
    label: "TechCorp Annual Gala",
    category: "Corporate",
    quote: "Our team still talks about it.",
    size: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85",
    label: "Sharma 50th Anniversary",
    category: "Anniversary",
    quote: "A golden evening, perfectly crafted.",
    size: "normal",
  },
  {
    id: 6,
    src: "/HappyMoments/hm7.mp4",
    label: "Kapoor-Iyer Wedding",
    category: "Wedding",
    quote: "Every detail was sheer perfection.",
    size: "tall",
  },
  {
    id: 7,
    src: "/HappyMoments/hm3.jpeg",
    label: "Kumar Baby Shower",
    category: "Celebration",
    quote: "Intimate, warm, and beautiful.",
    size: "normal",
  },
];

export default function HappyMoments() {
  return (
    <>
      <style>{`
        .hm-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: 220px;
          gap: 12px;
        }
        @media (min-width: 640px) {
          .hm-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 240px;
          }
        }
        @media (min-width: 1024px) {
          .hm-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 260px;
          }
        }
      `}</style>

      <section className="py-20 px-10 bg-[#0d0a05]">
        <div className="hm-grid">

          {/* CARD 0 */}
          <div className="relative rounded-xl overflow-hidden group" style={{ gridRow: "span 2" }}>
            {moments[0].src.endsWith(".mp4") ? (
              <video src={moments[0].src} autoPlay muted loop playsInline className="hm-img w-full h-full object-cover" />
            ) : (
              <img src={moments[0].src} alt={moments[0].label} className="hm-img w-full h-full object-cover" />
            )}
          </div>

          {/* NORMAL */}
          {[moments[1], moments[2], moments[4], moments[6]].map((m) => (
            <div key={m.id} className="relative rounded-xl overflow-hidden group">
              {m.src.endsWith(".mp4") ? (
                <video src={m.src} autoPlay muted loop playsInline className="hm-img w-full h-full object-cover" />
              ) : (
                <img src={m.src} alt={m.label} className="hm-img w-full h-full object-cover" />
              )}
            </div>
          ))}

          {/* WIDE */}
          <div className="relative rounded-xl overflow-hidden group">
            {moments[3].src.endsWith(".mp4") ? (
              <video src={moments[3].src} autoPlay muted loop playsInline className="hm-img w-full h-full object-cover" />
            ) : (
              <img src={moments[3].src} alt={moments[3].label} className="hm-img w-full h-full object-cover" />
            )}
          </div>

          {/* LAST */}
          <div className="relative rounded-xl overflow-hidden group" style={{ gridRow: "span 2" }}>
            {moments[5].src.endsWith(".mp4") ? (
              <video src={moments[5].src} autoPlay muted loop playsInline className="hm-img w-full h-full object-cover" />
            ) : (
              <img src={moments[5].src} alt={moments[5].label} className="hm-img w-full h-full object-cover" />
            )}
          </div>

        </div>
      </section>
    </>
  );
}