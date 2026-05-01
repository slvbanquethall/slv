"use client";

import { useState, useEffect, useRef } from "react";

const menuItems = [
  {
    title: "Royal Buffet",
    desc: "An extravagant spread of 40+ dishes curated by Michelin-trained chefs. From aromatic biryanis to decadent desserts.",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    tag: "Most Popular",
    color: "#C9974B",
  },
  {
    title: "Mughlai Feast",
    desc: "Rich gravies, slow-cooked dum preparations, and regal kebabs that echo the grandeur of Mughal courts.",
    images: [
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    ],
    tag: "Heritage",
    color: "#8B4513",
  },
  {
    title: "Continental Elegance",
    desc: "European classics reimagined for the discerning palate — pastas, roasts, soufflés, and artisan breads.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    ],
    tag: "Premium",
    color: "#4A7C59",
  },
  {
    title: "Sweet Indulgence",
    desc: "A dessert paradise — live jalebi stations, custom wedding cakes, kulfi bars, and international patisserie.",
    images: [
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&q=80",
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    ],
    tag: "Signature",
    color: "#C2185B",
  },
];

const galleryImages = [
  { src: "/data3.jpeg", size: "big", label: "Birthday Bash" },
  { src: "/data2.jpeg", size: "small", label: "Elegant Wedding Haven" },
  { src: "/data1.jpeg", size: "small", label: "Floral Wedding Symphony" },
  { src: "/HERO5.jpeg", size: "big", label: "Vibrant Birthday Extravaganza" },
  { src: "/data6.jpeg", size: "small", label: "Traditional Saree Soirée" },
  { src: "/data7.jpeg", size: "small", label: "Chic Reception Lounge" },
  { src: "/data4.jpeg", size: "big", label: "Joyful Birthday Celebration" },
  { src: "/data8.jpeg", size: "small", label: "Fun-Filled Party Moments" },
  { src: "/data5.jpeg", size: "small", label: "Energetic College Fest" },
];

const eventVideos = [
  { poster: "HERO1.png", label: "Reception", icon: "" },
  { poster: "data1.jpeg", label: "Wedding", icon: "" },
  { poster: "HERO5.jpeg", label: "Birthday Soirée", icon: "" },
  { poster: "data9.jpeg", label: "Festive Feast", icon: "" },
];

function MenuCard({ item, index }: { item: typeof menuItems[0]; index: number }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setImgIdx((prev) => (prev + 1) % item.images.length);
        setFading(false);
      }, 400);
    }, 3000 + index * 500);
    return () => clearInterval(interval);
  }, [item.images.length, index]);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 0.15}s`,
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
      }}
    >
      {/* Image */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <img
          src={item.images[imgIdx]}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease, transform 0.6s ease" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Tag */}
        <span
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white tracking-widest uppercase"
          style={{ background: item.color }}
        >
          {item.tag}
        </span>

        {/* Dot indicators */}
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {item.images.map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === imgIdx ? "#fff" : "rgba(255,255,255,0.4)", transform: i === imgIdx ? "scale(1.4)" : "scale(1)" }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3
          className="text-xl md:text-2xl font-bold mb-2 tracking-tight"
          style={{ color: item.color, fontFamily: "'Playfair Display', serif" }}
        >
          {item.title}
        </h3>
        <p className="text-sm text-amber-100/70 leading-relaxed">{item.desc}</p>

      </div>
    </div>
  );
}

function GalleryGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#0d0a05] px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Visual Stories</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Glimpse of <span style={{ color: "#C9974B" }}>Grandeur</span>
          </h2>
          <div className="w-20 h-0.5 bg-amber-500 mx-auto" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                img.size === "big"
                  ? i % 4 === 0
                    ? "col-span-2 row-span-2"
                    : "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                  : "col-span-1 row-span-1"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide">{img.label}</span>
              </div>
              {/* Golden border on hover */}
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-500/60 transition-all duration-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BanquetHallWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setHeroLoaded(true), 300);
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0a05] text-white overflow-x-hidden" style={{ fontFamily: "'Lato', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 80px; }
        }
        .animate-fade-up { animation: fadeUp 0.9s ease both; }
        .animate-fade-in { animation: fadeIn 1.2s ease both; }
        .animate-float { animation: floatUp 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .line-grow { animation: lineGrow 1.2s ease both 0.8s; }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0d0a05; }
        ::-webkit-scrollbar-thumb { background: #C9974B; border-radius: 10px; }

        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(201,151,75,0.25); }
      `}</style>

      {/* ═══════════════════════════════════ NAVBAR ═══════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5 md:px-12 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? "rgba(13,10,5,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,151,75,0.2)" : "none",
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

      {/* ═══════════════════════════════════ HERO — FULL VIEWPORT VIDEO ═══════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: "100dvh", minHeight: "600px" }}
      >
        {/* Background video (replaced with a cinematic image as fallback) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=90"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        >
          <source src="/cateringhero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(13,10,5,0.6) 100%)",
          }}
        />

        {/* Decorative corners */}
        <div className="absolute top-28 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-500/40 hidden md:block" />
        <div className="absolute top-28 right-8 w-16 h-16 border-r-2 border-t-2 border-amber-500/40 hidden md:block" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-amber-500/40 hidden md:block" />
        <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-500/40 hidden md:block" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <div style={{ opacity: heroLoaded ? 1 : 0, transition: "opacity 0.8s ease" }}>
            <p
              className="text-amber-400 text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s", fontWeight: 600 }}
            >
              ✦ Hyderabad's Premier Banquet Hall ✦
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-4 animate-fade-up"
              style={{
                fontFamily: "'Playfair Display', serif",
                animationDelay: "0.4s",
                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              Where Every
              <br />
              <em className="not-italic" style={{ color: "#C9974B" }}>Celebration</em>
              <br />
              Becomes Legacy
            </h1>

            <p
              className="text-white/75 text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed animate-fade-up font-light"
              style={{ animationDelay: "0.6s" }}
            >From grand feasts to intimate gatherings, we serve moments worth celebrating
            </p>


          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════ STATS RIBBON ═══════════════════════════════════ */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(201,151,75,0.2)", background: "rgba(201,151,75,0.05)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { num: "200+", label: "Events Hosted" },
            { num: "20+", label: "Signature Dishes" },
            { num: "5+", label: "Years of Legacy" },
            { num: "100%", label: "Satisfaction" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-black" style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}>
                {s.num}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/50 mt-1 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════ CATERING SERVICES ═══════════════════════════════════ */}
      <section id="services" className="py-20 md:py-28 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">What We Offer</span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Catering <span style={{ color: "#C9974B" }}>Excellence</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
              From intimate gatherings of 50 to grand celebrations of 5000 — our catering adapts to your vision with uncompromising quality.
            </p>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
  { 
    icon: "LC", 
    title: "Live Counters", 
    desc: "Chat Panipuri,Tawa Sweet,Fruit stations manned by expert chefs for interactive, live dining experiences." 
  },
  { 
    icon: "CM", 
    title: "Custom Menus", 
    desc: "Fully bespoke menus crafted around your culture, preferences, and dietary requirements." 
  },
  { 
    icon: "OC", 
    title: "Outdoor Catering", 
    desc: "Complete mobile kitchen setups ideal for farmhouses, resorts, and destination events." 
  },
  { 
    icon: "IC", 
    title: "Ice Creams", 
    desc: "A delightful range of flavors including Vanilla, Strawberry, and Butterscotch, served as a perfect sweet ending." 
  },
].map((s, i) => (
              <div
                key={i}
                className="hover-lift p-6 md:p-8 rounded-2xl border text-center group"
                style={{
                  background: "rgba(201,151,75,0.04)",
                  borderColor: "rgba(201,151,75,0.15)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,151,75,0.12)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ MENU CARDS ═══════════════════════════════════ */}
      <section id="menu" className="py-20 md:py-28 px-4 md:px-10 lg:px-20" style={{ background: "#100c06" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Our Menus</span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Curated <span style={{ color: "#C9974B" }}>Collections</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed">
              Each menu tells a story. Images transition to reveal the full richness of every culinary experience.
            </p>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {menuItems.map((item, i) => (
              <MenuCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ GALLERY ═══════════════════════════════════ */}
      <GalleryGrid />

      {/* ═══════════════════════════════════ EVENTS VIDEO/IMAGE GRID ═══════════════════════════════════ */}
      <section id="events" className="py-20 md:py-28 px-4 md:px-10 lg:px-20" style={{ background: "#100c06" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Event Types</span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Occasion, <span style={{ color: "#C9974B" }}>Elevated</span>
            </h2>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {eventVideos.map((ev, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden cursor-pointer group hover-lift"
                style={{ height: "280px", boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}
              >
                <img
                  src={ev.poster}
                  alt={ev.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Play button */}

                {/* Label */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-3xl">{ev.icon}</span>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white mt-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {ev.label}
                  </h3>
                </div>

                {/* Golden border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/50 transition-all duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ TESTIMONIALS ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-10" style={{ background: "#0d0a05" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Words of <span style={{ color: "#C9974B" }}>Honour</span>
            </h2>
            <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya & Arjun", event: "Wedding, Feb 2024", quote: "Grand Vivah turned our dream wedding into reality. The food was extraordinary — every guest still talks about the biryani counter!" },
              { name: "ISTA GROUP OF INSTITUTIONS", event: "Annual Gala, Dec 2023", quote: "The level of professionalism and the sheer variety of the continental spread left our 800 guests completely mesmerised." },
              { name: "Meera Sharma", event: "50th Birthday, Jan 2024", quote: "From setup to the last bite of dessert — flawless. The team understood our vision and executed it beyond our imagination." },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl border hover-lift"
                style={{
                  background: "rgba(201,151,75,0.04)",
                  borderColor: "rgba(201,151,75,0.15)",
                }}
              >
                <p className="text-amber-400 text-2xl mb-4">"</p>
                <p className="text-white/70 text-sm leading-relaxed font-light mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "#C9974B", color: "#0d0a05" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CTA BANNER ═══════════════════════════════════ */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1005 0%, #2d1e08 50%, #1a1005 100%)",
          borderTop: "1px solid rgba(201,151,75,0.2)",
          borderBottom: "1px solid rgba(201,151,75,0.2)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(201,151,75,0.08) 0%, transparent 70%)",
          }}
        />
        <p className="text-amber-500 text-xs uppercase tracking-[0.4em] mb-4 font-semibold">Start Planning Today</p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let's Create Your <span style={{ color: "#C9974B" }}>Dream Event</span> Together
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mb-10 text-sm md:text-base font-light">
          Talk to our event specialists and get a fully customised catering proposal within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full border border-amber-500/40 text-amber-400 hover:border-amber-400 transition-all duration-300">
            📞 +91 90523 41300
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════ FLOATING GET MENU BUTTON ═══════════════════════════════════ */}
      <button
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:scale-110 hover:shadow-lg"
        style={{
          background: "#C9974B",
          color: "#0d0a05",
          boxShadow: "0 4px 20px rgba(201,151,75,0.3)",
          fontFamily: "'Playfair Display', serif",
        }}
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/menu.pdf';
          link.download = 'menu.pdf';
          link.click();
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(201,151,75,0.5)";
          (e.currentTarget as HTMLButtonElement).style.background = "#d4b85f";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(201,151,75,0.3)";
          (e.currentTarget as HTMLButtonElement).style.background = "#C9974B";
        }}
      >
        Get Menu
      </button>

      {/* ═══════════════════════════════════ FOOTER ═══════════════════════════════════ */}
      <footer className="py-12 px-6 md:px-20 border-t" style={{ borderColor: "rgba(201,151,75,0.15)", background: "#080603" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#C9974B", fontFamily: "'Playfair Display', serif" }}>
              Grand Vivah
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Hyderabad's most celebrated banquet hall and catering service since 2009.
            </p>
          </div>
          {[
            { heading: "Services", links: ["Wedding Catering", "Corporate Events", "Birthday Parties", "Outdoor Catering"] },
            { heading: "Menus", links: ["Royal Buffet", "Mughlai Feast", "Continental", "Sweet Indulgence"] },
            { heading: "Contact", links: ["Banjara Hills, Hyderabad", "+91 90523 41300", "info@grandvivah.in", "Mon–Sun: 9AM–9PM"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((l, j) => (
                  <li key={j} className="text-white/40 text-sm font-light hover:text-amber-400 transition-colors duration-200 cursor-pointer">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t text-center text-white/25 text-xs" style={{ borderColor: "rgba(201,151,75,0.1)" }}>
          © 2025 Grand Vivah Banquet Hall. All rights reserved. Crafted with passion in Hyderabad.
        </div>
      </footer>
    </div>
  );
}