"use client";

import { useState } from "react";

const moments = [
  {
    id: 1,
    src: "/HappyMoments/hm1.mp4",
    label: "Priya & Arjun's Wedding",
    category: "Wedding",
    size: "tall",
  },
  {
    id: 2,
    src: "/HappyMoments/hm2.jpeg",
    label: "Mehta Family Reception",
    category: "Reception",
    size: "normal",
  },
  {
    id: 4,
    src: "/HappyMoments/hm3.jpeg",
    label: "TechCorp Annual Gala",
    category: "Corporate",
    size: "wide",
  },
  {
    id: 6,
    src: "/HappyMoments/hm7.mp4",
    label: "Kapoor-Iyer Wedding",
    category: "Wedding",
    size: "tall",
  },
  {
    id: 7,
    src: "/HappyMoments/hm4.jpeg",
    label: "Kumar Baby Shower",
    category: "Celebration",
    size: "normal",
  },
];

export default function HappyMoments() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .hm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          grid-auto-rows: 180px;
        }

        @media (min-width: 640px) {
          .hm-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 220px;
          }
        }

        @media (min-width: 1024px) {
          .hm-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 260px;
          }
        }

        .fadeUp {
          animation: fadeUp 0.7s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="py-16 px-4 sm:px-10 bg-[#0d0a05]">

        {/* 🔥 HEADER BACK */}
        <div className="text-center mb-14 fadeUp">
          <span
            className="text-xs uppercase tracking-[0.35em] font-semibold"
            style={{ color: "#C9974B" }}
          >
            ✦ Memories We Made Together ✦
          </span>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white mt-4 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Happy{" "}
            <span style={{ color: "#C9974B" }}>
              Moments
            </span>
          </h2>

          <p className="text-white/50 max-w-md mx-auto text-sm sm:text-base font-light leading-relaxed">
            Every celebration leaves behind a story. Here are glimpses of the joy we've had the honour of hosting.
          </p>

          <div className="w-16 h-px mx-auto mt-6 bg-[#C9974B]" />
        </div>

        {/* 🔥 GRID */}
        <div className="hm-grid">

          {moments.map((m, i) => {
            const isVideo = m.src.endsWith(".mp4");

            return (
              <div
                key={m.id}
                className={`relative rounded-xl overflow-hidden group fadeUp ${
                  m.size === "tall" ? "row-span-2" : ""
                } ${m.size === "wide" ? "col-span-2" : ""}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  boxShadow:
                    hovered === m.id
                      ? "0 20px 60px rgba(0,0,0,0.6)"
                      : "0 4px 20px rgba(0,0,0,0.3)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* MEDIA */}
                {isVideo ? (
                  <video
                    src={m.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                      transform:
                        hovered === m.id ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.7s ease",
                    }}
                  />
                ) : (
                  <img
                    src={m.src}
                    alt={m.label}
                    className="w-full h-full object-cover"
                    style={{
                      transform:
                        hovered === m.id ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.7s ease",
                    }}
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute top-3 left-3 text-[10px] tracking-widest px-2 py-1 rounded-full border border-[#C9974B]/50 text-[#C9974B] bg-[#C9974B]/10 backdrop-blur">
                  {m.category}
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 p-3 sm:p-4">
                  <p className="text-white text-sm sm:text-base font-semibold">
                    {m.label}
                  </p>
                </div>

                {/* BORDER GLOW */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    border:
                      hovered === m.id
                        ? "1px solid rgba(201,151,75,0.4)"
                        : "1px solid transparent",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            );
          })}

        </div>
      </section>
    </>
  );
}