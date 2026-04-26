"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const moments = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
    label: "Priya & Arjun's Wedding",
    category: "Wedding",
    quote: "The most magical night of our lives.",
    size: "tall", // col-span-1 row-span-2
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85",
    label: "Mehta Family Reception",
    category: "Reception",
    quote: "500 guests, zero worries.",
    size: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85",
    label: "Riya's 25th Birthday",
    category: "Birthday",
    quote: "Beyond every expectation.",
    size: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85",
    label: "TechCorp Annual Gala",
    category: "Corporate",
    quote: "Our team still talks about it.",
    size: "wide", // col-span-2 row-span-1
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
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85",
    label: "Kapoor-Iyer Wedding",
    category: "Wedding",
    quote: "Every detail was sheer perfection.",
    size: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85",
    label: "Kumar Baby Shower",
    category: "Celebration",
    quote: "Intimate, warm, and beautiful.",
    size: "normal",
  },
];

const counters = [
  { num: 500, suffix: "+", label: "Celebrations Hosted" },
  { num: 98, suffix: "%", label: "Happy Clients" },
  { num: 12, suffix: "+", label: "Years of Memories" },
  { num: 50000, suffix: "+", label: "Guests Delighted" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function Counter({ num, suffix, label, start }: { num: number; suffix: string; label: string; start: boolean }) {
  const value = useCountUp(num, 2000, start);
  return (
    <div className="text-center">
      <p
        className="text-3xl sm:text-4xl md:text-5xl font-black tabular-nums"
        style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}
      >
        {value.toLocaleString()}{suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-white/45 mt-1 font-light">{label}</p>
    </div>
  );
}

function MomentCard({ m, index }: { m: typeof moments[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const colSpan =
    m.size === "wide" ? "sm:col-span-2" :
    m.size === "tall" ? "col-span-1" : "col-span-1";

  const rowSpan =
    m.size === "tall" ? "sm:row-span-2" :
    m.size === "wide" ? "row-span-1" : "row-span-1";

  const height =
    m.size === "tall" ? "h-[420px] sm:h-full" :
    m.size === "wide" ? "h-[220px] sm:h-[260px]" :
    "h-[220px] sm:h-[260px]";

  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-pointer group ${colSpan} ${rowSpan} ${height}`}
      style={{
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(201,151,75,0.4)"
          : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.4s ease",
        animationDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={m.src}
        alt={m.label}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Base gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {/* Category pill */}
      <div
        className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
        style={{
          background: "rgba(201,151,75,0.15)",
          border: "1px solid rgba(201,151,75,0.4)",
          color: "#C9974B",
          backdropFilter: "blur(8px)",
        }}
      >
        {m.category}
      </div>

      {/* Content — slides up on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "transform 0.4s ease, opacity 0.4s ease",
        }}
      >
        <p
          className="text-white font-bold text-sm sm:text-base leading-snug mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {m.label}
        </p>

        {/* Quote fades in on hover */}
        <p
          className="text-amber-300/85 text-xs font-light italic leading-relaxed"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease 0.05s",
          }}
        >
          "{m.quote}"
        </p>
      </div>

      {/* Golden border shimmer on hover */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          border: "1.5px solid rgba(201,151,75,0)",
          borderColor: hovered ? "rgba(201,151,75,0.45)" : "rgba(201,151,75,0)",
          transition: "border-color 0.4s ease",
        }}
      />
    </div>
  );
}

export default function HappyMoments() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounterStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hm-fade { animation: fadeUp 0.7s ease both; }

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

      <section
        className="py-20 md:py-28 px-4 md:px-10 lg:px-20"
        style={{ background: "#0d0a05", fontFamily: "'Lato', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-14 hm-fade" style={{ animationDelay: "0s" }}>
            <span className="text-xs uppercase tracking-[0.38em] font-semibold" style={{ color: "#C9974B" }}>
              ✦ Memories We Made Together ✦
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Happy{" "}
              <em className="not-italic" style={{ color: "#C9974B" }}>
                Moments
              </em>
            </h2>
            <p className="text-white/45 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed">
              Every celebration leaves behind a story. Here are glimpses of the joy we've had the honour of hosting.
            </p>
            <div className="w-16 h-px mx-auto mt-7" style={{ background: "#C9974B" }} />
          </div>

          {/* ── Masonry-style photo grid ── */}
          <div className="hm-grid">
            {/* Row 1: tall left, 2 normals, tall right (on lg: 4 cols) */}

            {/* Card 0 — tall */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{
                gridRow: "span 2",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1.07)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "1";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "0";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0)";
              }}
            >
              <img src={moments[0].src} alt={moments[0].label} className="hm-img w-full h-full object-cover" style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "rgba(201,151,75,0.15)", border: "1px solid rgba(201,151,75,0.4)", color: "#C9974B", backdropFilter: "blur(8px)" }}>{moments[0].category}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base leading-snug mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{moments[0].label}</p>
                <p className="hm-quote text-amber-300/85 text-xs font-light italic" style={{ opacity: 0, transition: "opacity 0.35s ease" }}>"{moments[0].quote}"</p>
              </div>
              <div className="hm-border absolute inset-0 rounded-xl" style={{ border: "1.5px solid rgba(201,151,75,0)", transition: "border-color 0.4s ease" }} />
            </div>

            {/* Cards 1–5 — normal */}
            {[moments[1], moments[2], moments[4], moments[6]].map((m, i) => (
              <div
                key={m.id}
                className="relative rounded-xl overflow-hidden cursor-pointer group hm-fade"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  animationDelay: `${(i + 1) * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1.07)";
                  (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "1";
                  (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "0";
                  (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0)";
                }}
              >
                <img src={m.src} alt={m.label} className="hm-img w-full h-full object-cover" style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "rgba(201,151,75,0.15)", border: "1px solid rgba(201,151,75,0.4)", color: "#C9974B", backdropFilter: "blur(8px)" }}>{m.category}</div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm leading-snug mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{m.label}</p>
                  <p className="hm-quote text-amber-300/85 text-xs font-light italic" style={{ opacity: 0, transition: "opacity 0.35s ease" }}>"{m.quote}"</p>
                </div>
                <div className="hm-border absolute inset-0 rounded-xl" style={{ border: "1.5px solid rgba(201,151,75,0)", transition: "border-color 0.4s ease" }} />
              </div>
            ))}

            {/* Card — wide (corporate, spans 2 cols on sm+) */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group hm-fade"
              style={{
                gridColumn: "span 1",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                animationDelay: "0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1.07)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "1";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "0";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0)";
              }}
            >
              <img src={moments[3].src} alt={moments[3].label} className="hm-img w-full h-full object-cover" style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "rgba(201,151,75,0.15)", border: "1px solid rgba(201,151,75,0.4)", color: "#C9974B", backdropFilter: "blur(8px)" }}>{moments[3].category}</div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm leading-snug mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{moments[3].label}</p>
                <p className="hm-quote text-amber-300/85 text-xs font-light italic" style={{ opacity: 0, transition: "opacity 0.35s ease" }}>"{moments[3].quote}"</p>
              </div>
              <div className="hm-border absolute inset-0 rounded-xl" style={{ border: "1.5px solid rgba(201,151,75,0)", transition: "border-color 0.4s ease" }} />
            </div>

            {/* Card 0 — second tall */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group hm-fade"
              style={{
                gridRow: "span 2",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                animationDelay: "0.5s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1.07)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "1";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector(".hm-img") as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget.querySelector(".hm-quote") as HTMLElement).style.opacity = "0";
                (e.currentTarget.querySelector(".hm-border") as HTMLElement).style.borderColor = "rgba(201,151,75,0)";
              }}
            >
              <img src={moments[5].src} alt={moments[5].label} className="hm-img w-full h-full object-cover" style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: "rgba(201,151,75,0.15)", border: "1px solid rgba(201,151,75,0.4)", color: "#C9974B", backdropFilter: "blur(8px)" }}>{moments[5].category}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base leading-snug mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{moments[5].label}</p>
                <p className="hm-quote text-amber-300/85 text-xs font-light italic" style={{ opacity: 0, transition: "opacity 0.35s ease" }}>"{moments[5].quote}"</p>
              </div>
              <div className="hm-border absolute inset-0 rounded-xl" style={{ border: "1.5px solid rgba(201,151,75,0)", transition: "border-color 0.4s ease" }} />
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-5 my-16">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,151,75,0.25))" }} />
            <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase font-semibold whitespace-nowrap">
              ✦ By the Numbers ✦
            </span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(201,151,75,0.25))" }} />
          </div>

          {/* ── Animated counters ── */}
          
          {/* ── Testimonial strip ── */}
          <div
            className="mt-16 rounded-2xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
            style={{
              background: "rgba(201,151,75,0.05)",
              border: "1px solid rgba(201,151,75,0.15)",
            }}
          >
            {/* Big quote mark */}
            <div
              className="text-7xl leading-none flex-shrink-0 select-none"
              style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif", lineHeight: 0.8 }}
            >
              "
            </div>

            <div className="flex-1">
              <p
                className="text-white/80 text-base sm:text-lg font-light italic leading-relaxed mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Grand Vivah didn't just host our wedding — they turned it into a legacy our families will speak of for generations.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "#C9974B", color: "#0d0a05" }}
                >
                  SR
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Sneha & Rahul Verma</p>
                  <p className="text-white/35 text-xs">Wedding · March 2024 · 800 Guests</p>
                </div>
              </div>
            </div>

            {/* 5 stars */}
            <div className="flex gap-1 flex-shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C9974B">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center mt-14">
            <p className="text-white/40 text-sm font-light mb-5">
              Your celebration deserves to be in this gallery.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="text-xs uppercase tracking-widest px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: "#C9974B", color: "#0d0a05" }}
            >
              Start Planning Your Event
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
