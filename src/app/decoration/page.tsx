"use client";

import { useState } from "react";

const decorCategories = [
  "All",
  "Wedding",
  "Reception",
  "Birthday",
  "Corporate",
  "Floral",
  "Lighting",
];

const decorItems = [
  {
    id: 1,
    title: "Grand Floral Arch",
    category: "Wedding",
    tag: "Signature",
    tagColor: "#C9974B",
    desc: "An opulent entrance arch adorned with cascading roses, orchids, and fairy lights — setting the tone for an unforgettable ceremony.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    accent: "#C9974B",
  },
  {
    id: 2,
    title: "Candlelit Tablescape",
    category: "Reception",
    tag: "Bestseller",
    tagColor: "#8B4513",
    desc: "Gold candelabras, lush greenery runners, and crystal glassware arranged to create an intimate, luxurious dining atmosphere.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    accent: "#8B4513",
  },
  {
    id: 3,
    title: "Marigold Mandap",
    category: "Wedding",
    tag: "Heritage",
    tagColor: "#D4A017",
    desc: "Traditional marigold and jasmine strands draped over a bespoke mandap frame, richly layered with silk and golden motifs.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    accent: "#D4A017",
  },
  {
    id: 4,
    title: "Balloon Dreamscape",
    category: "Birthday",
    tag: "Playful",
    tagColor: "#C2185B",
    desc: "Floor-to-ceiling balloon installations in curated palettes, with organic garlands, metallic spheres, and neon marquee letters.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accent: "#C2185B",
  },
  {
    id: 5,
    title: "Celestial Draping",
    category: "Reception",
    tag: "Premium",
    tagColor: "#4A7C59",
    desc: "Ceiling-to-floor ivory and champagne drapes with suspended floral clusters and Edison bulb constellations above the dance floor.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    accent: "#4A7C59",
  },
  {
    id: 6,
    title: "Royal Stage Setup",
    category: "Wedding",
    tag: "Exclusive",
    tagColor: "#7B1FA2",
    desc: "A regal bride-and-groom stage with tufted velvet seating, a towering floral backdrop, and bespoke monogram lighting.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    accent: "#7B1FA2",
  },
  {
    id: 7,
    title: "Edison Fairy Garden",
    category: "Lighting",
    tag: "Trending",
    tagColor: "#C9974B",
    desc: "Warm Edison bulb canopies interwoven with trailing greenery, creating a magical golden glow across the entire venue.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    accent: "#C9974B",
  },
  {
    id: 8,
    title: "Executive Conference Décor",
    category: "Corporate",
    tag: "Professional",
    tagColor: "#37474F",
    desc: "Sleek floral centrepieces, branded backdrop panels, and ambient lighting tailored to elevate corporate milestones.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    accent: "#37474F",
  },
  {
    id: 9,
    title: "Rose Petal Aisle",
    category: "Floral",
    tag: "Romantic",
    tagColor: "#C2185B",
    desc: "A stunning aisle lined with fresh rose petals, flanked by tall glass vases of white lilies and trailing ribbons.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    accent: "#C2185B",
  },
  {
    id: 10,
    title: "Bohemian Dreamcatcher Wall",
    category: "Birthday",
    tag: "Boho",
    tagColor: "#8D6E63",
    desc: "Macramé backdrops, pampas grass, dried florals, and rattan lanterns for a warm, earthy celebration aesthetic.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    accent: "#8D6E63",
  },
  {
    id: 11,
    title: "Mirror & Marble Lounge",
    category: "Reception",
    tag: "Luxury",
    tagColor: "#B8860B",
    desc: "Gold-framed mirrors, alabaster urns, and cascading white floral pieces creating a palatial, editorial lounge space.",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800&q=80",
    accent: "#B8860B",
  },
  {
    id: 12,
    title: "Neon Glow Backdrop",
    category: "Birthday",
    tag: "Modern",
    tagColor: "#E91E63",
    desc: "Custom neon signage, sequin walls, and LED strip accents for a vibrant, Instagram-worthy birthday celebration.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    accent: "#E91E63",
  },
];

const highlights = [
  { num: "100+", label: "Décor Styles" },
  { num: "200+", label: "Events Decorated" },
  { num: "15+", label: "In-House Artists" },
  { num: "100%", label: "Custom Designs" },
];

export default function DecorationCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? decorItems
      : decorItems.filter((d) => d.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-[#0d0a05] text-white overflow-x-hidden"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fade-up { animation: fadeUp 0.85s ease both; }
        .animate-fade-in { animation: fadeIn 1s ease both; }
        .animate-float { animation: floatUp 4s ease-in-out infinite; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0d0a05; }
        ::-webkit-scrollbar-thumb { background: #C9974B; border-radius: 10px; }

        .card-img { transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .card-wrap:hover .card-img { transform: scale(1.08); }

        .filter-btn { transition: all 0.25s ease; }
        .filter-btn.active {
          background: #C9974B;
          color: #0d0a05;
          border-color: #C9974B;
        }
        .filter-btn:not(.active):hover {
          border-color: rgba(201,151,75,0.6);
          color: rgba(201,151,75,0.9);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 py-4 flex items-center justify-between"
        style={{
          background: "rgba(13,10,5,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,151,75,0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 text-xs font-bold">G</span>
          </div>
          <span
            className="text-xl font-bold tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif", color: "#C9974B" }}
          >
            Grand Vivah
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-light tracking-widest uppercase">
          {["Services", "Menu", "Gallery", "Events", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-amber-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          className="text-xs uppercase tracking-widest px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          style={{ background: "#C9974B", color: "#0d0a05" }}
        >
          Book Now
        </button>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(201,151,75,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Thin decorative lines */}
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-px"
          style={{ height: "60px", background: "linear-gradient(to bottom, transparent, rgba(201,151,75,0.5))" }}
        />

        <p
          className="text-amber-500 text-xs uppercase tracking-[0.45em] mb-5 font-semibold animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          ✦ Décor Catalog 2025 ✦
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-5 animate-fade-up px-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            animationDelay: "0.25s",
            textShadow: "0 4px 40px rgba(0,0,0,0.4)",
          }}
        >
          The Art of
          <br />
          <em className="not-italic" style={{ color: "#C9974B" }}>
            Decoration
          </em>
        </h1>

        <p
          className="text-white/55 text-sm md:text-base max-w-md mx-auto leading-relaxed font-light px-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Browse our handcrafted décor collections — each style thoughtfully designed to transform your venue into a living masterpiece.
        </p>

        <div
          className="w-16 h-px mx-auto mt-8 animate-fade-up"
          style={{ background: "#C9974B", animationDelay: "0.55s" }}
        />
      </section>

      {/* ── STATS RIBBON ── */}
      <section
        className="py-8 border-y"
        style={{
          borderColor: "rgba(201,151,75,0.2)",
          background: "rgba(201,151,75,0.04)",
        }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center px-6">
          {highlights.map((s, i) => (
            <div key={i}>
              <p
                className="text-3xl md:text-4xl font-black"
                style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/45 mt-1 font-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATALOG SECTION ── */}
      <section className="py-16 md:py-24 px-4 md:px-10 lg:px-20" id="catalog">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {decorCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn text-xs uppercase tracking-widest px-4 md:px-5 py-2 rounded-full border font-semibold ${
                  activeCategory === cat ? "active" : "border-white/20 text-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="card-wrap group rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "#100c06",
                  boxShadow:
                    hoveredId === item.id
                      ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${item.accent}40`
                      : "0 6px 30px rgba(0,0,0,0.25)",
                  transition: "box-shadow 0.4s ease",
                  animation: `fadeUp 0.6s ease both`,
                  animationDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img w-full h-full object-cover"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Tag */}
                  <span
                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white tracking-widest uppercase"
                    style={{ background: item.tagColor }}
                  >
                    {item.tag}
                  </span>

                  {/* Category badge */}
                  <span
                    className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
                    style={{
                      background: "rgba(13,10,5,0.75)",
                      border: "1px solid rgba(201,151,75,0.3)",
                      color: "rgba(201,151,75,0.9)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Thin accent line */}
                  <div
                    className="w-8 h-0.5 mb-4 transition-all duration-500 group-hover:w-16"
                    style={{ background: item.accent }}
                  />

                  <h3
                    className="text-lg md:text-xl font-bold mb-2 leading-snug"
                    style={{
                      color: "#fff",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>

                  {/* Enquire link */}
                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                      style={{ color: item.accent }}
                    >
                      Enquire About This Style
                    </span>
                    <span
                      className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: item.accent }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24 text-white/30 text-sm">
              No styles in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section
        className="py-16 md:py-20 px-4 md:px-10 border-y"
        style={{
          borderColor: "rgba(201,151,75,0.15)",
          background: "rgba(201,151,75,0.03)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">
              How It Works
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Vision to <span style={{ color: "#C9974B" }}>Reality</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Consultation", desc: "Share your vision and event details with our décor specialists." },
              { step: "02", title: "Mood Board", desc: "We craft a bespoke mood board tailored to your theme and venue." },
              { step: "03", title: "Setup", desc: "Our team of 30+ artists transforms the venue with meticulous care." },
              { step: "04", title: "Reveal", desc: "Walk into a space that takes your breath away — guaranteed." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-4 border-2"
                  style={{ borderColor: "#C9974B", color: "#C9974B", fontFamily: "'Playfair Display', serif" }}
                >
                  {s.step}
                </div>
                <h4 className="text-white font-bold mb-2 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 md:py-28 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1005 0%, #2d1e08 50%, #1a1005 100%)",
          borderBottom: "1px solid rgba(201,151,75,0.2)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,151,75,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-amber-500 text-xs uppercase tracking-[0.4em] mb-4 font-semibold">
          Custom Décor, Crafted for You
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bring Your Dream <span style={{ color: "#C9974B" }}>Décor</span> to Life
        </h2>
        <p className="text-white/45 max-w-md mx-auto mb-10 text-sm font-light leading-relaxed">
          Tell us your occasion, your palette, your story — and we'll create something extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: "#C9974B", color: "#0d0a05" }}
          >
            Request a Consultation
          </button>
          <button className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full border border-amber-500/40 text-amber-400 hover:border-amber-400 transition-all duration-300">
            📞 +91 90523 41300
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-6 md:px-20 border-t"
        style={{ borderColor: "rgba(201,151,75,0.15)", background: "#080603" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}
            >
              Grand Vivah
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Hyderabad's most celebrated banquet hall and décor studio since 2019.
            </p>
          </div>
          {[
            {
              heading: "Décor",
              links: ["Wedding Décor", "Birthday Setups", "Reception Design", "Corporate Events"],
            },
            {
              heading: "Styles",
              links: ["Floral Extravaganza", "Lighting & Ambience", "Bohemian", "Royal Classic"],
            },
            {
              heading: "Contact",
              links: ["Banjara Hills, Hyderabad", "+91 90523 41300", "info@grandvivah.in", "Mon–Sun: 9AM–9PM"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l, j) => (
                  <li
                    key={j}
                    className="text-white/40 text-sm font-light hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-10 pt-6 border-t text-center text-white/25 text-xs"
          style={{ borderColor: "rgba(201,151,75,0.1)" }}
        >
          © 2025 Grand Vivah Banquet Hall. All rights reserved. Crafted with passion in Hyderabad.
        </div>
      </footer>
    </div>
  );
}