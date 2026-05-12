import React, { useRef, useEffect, useState } from "react";

const SECTIONS = [
  {
    id: "education",
    icon: "🎓",
    title: "Education & Training",
    items: [
      {
        label: "B.Sc (Science)",
        sub: "Rajiv Gandhi Govt. Degree College, Kotshera",
        meta: "2023  ·  82%",
        accent: true,
      },
    ],
  },
  {
    id: "skills",
    icon: "⚡",
    title: "Core Skills",
    chips: [
      "Observation",
      "Decision Making",
      "Communication",
      "Multi-tasking",
      "Analytical Thinking",
      "Discipline",
    ],
  },
  {
    id: "achievements",
    icon: "🏆",
    title: "Achievements & Awards",
    items: [
      { label: "Best Student of the Year", meta: "2022", accent: true },
      { label: "NCC Certificate", meta: "2017", accent: false },
    ],
  },
  {
    id: "hobbies",
    icon: "✨",
    title: "Hobbies & Interests",
    chips: [
      "Reading",
      "Writing",
      "Travelling",
      "Photography",
      "Singing",
      "Dancing",
      "Cooking",
    ],
  },
  {
    id: "mission",
    icon: "🎯",
    title: "Mission Statement",
    quote:
      "To serve in a reputed government organisation where my skills, knowledge, and dedication contribute positively to society and to my own growth.",
  },
];

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function EducationCard({ item }) {
  return (
    <div className="ab-edu-card">
      <div className="ab-edu-icon">🎓</div>
      <div className="ab-edu-info">
        <p className="ab-edu-label">{item.label}</p>
        <p className="ab-edu-sub">{item.sub}</p>
      </div>
      <div className="ab-edu-meta">{item.meta}</div>
    </div>
  );
}

function AchievCard({ item }) {
  return (
    <div className={`ab-achiev-card${item.accent ? " ab-achiev-accent" : ""}`}>
      <span className="ab-achiev-icon">{item.accent ? "🥇" : "🎖️"}</span>
      <span className="ab-achiev-label">{item.label}</span>
      <span className="ab-achiev-meta">{item.meta}</span>
    </div>
  );
}

function Section({ sec, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="ab-section-block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
      }}
    >
      <div className="ab-section-header">
        <span className="ab-section-icon">{sec.icon}</span>
        <h2 className="ab-section-title">{sec.title}</h2>
      </div>

      {sec.items && sec.id === "education" && (
        <div className="ab-edu-list">
          {sec.items.map((it, i) => <EducationCard key={i} item={it} />)}
        </div>
      )}

      {sec.items && sec.id === "achievements" && (
        <div className="ab-achiev-list">
          {sec.items.map((it, i) => <AchievCard key={i} item={it} />)}
        </div>
      )}

      {sec.chips && (
        <div className="ab-chips">
          {sec.chips.map((chip, i) => (
            <span
              key={chip}
              className={`ab-chip${sec.id === "skills" ? " ab-chip-skill" : " ab-chip-hobby"}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.8)",
                transition: `opacity 0.4s ease ${delay + 80 + i * 60}ms, transform 0.4s cubic-bezier(.34,1.56,.64,1) ${delay + 80 + i * 60}ms`,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      {sec.quote && (
        <blockquote className="ab-quote">
          <span className="ab-quote-mark">"</span>
          {sec.quote}
          <span className="ab-quote-mark">"</span>
        </blockquote>
      )}
    </div>
  );
}

function About() {
  const heroRef = useRef(null);
  const heroIn = useInView(heroRef, 0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --red: #ef4444;
          --red-soft: #fca5a5;
          --red-glow: rgba(239,68,68,0.18);
        }

        /* ── WRAPPER ── */
        .ab-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
          background: #fff;
        }
        .dark .ab-root { background: #04060f; }

        /* ── SECTION ── */
        .ab-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0 80px;
        }

        /* Grid bg matching Home */
        .ab-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* Blobs */
        .ab-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .ab-blob-1 {
          width: 350px; height: 350px;
          top: -60px; left: -80px;
          background: radial-gradient(circle, rgba(239,68,68,0.10), transparent 70%);
          animation: abBlobFloat 9s ease-in-out infinite alternate;
        }
        .ab-blob-2 {
          width: 260px; height: 260px;
          bottom: -40px; right: -50px;
          background: radial-gradient(circle, rgba(239,68,68,0.07), transparent 70%);
          animation: abBlobFloat 11s ease-in-out infinite alternate-reverse;
        }
        @keyframes abBlobFloat {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(18px, 25px) scale(1.07); }
        }

        /* ── CONTAINER ── */
        .ab-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }

        /* ── HERO HEADER ── */
        .ab-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 18px;
          margin-bottom: 64px;
        }

        .ab-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 50px;
          border: 1px solid rgba(239,68,68,0.22);
          background: rgba(239,68,68,0.06);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--red);
        }

        .ab-hero-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--red);
          animation: abPulse 1.8s ease-in-out infinite;
        }
        @keyframes abPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.7); }
        }

        .ab-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .dark .ab-hero-title { color: #f1f5f9; }

        .ab-hero-title span {
          color: var(--red);
          position: relative;
        }
        .ab-hero-title span::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--red), transparent);
          border-radius: 2px;
        }

        .ab-hero-divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, var(--red), transparent);
          border-radius: 3px;
        }

        .ab-hero-intro {
          max-width: 620px;
          font-size: 0.95rem;
          line-height: 1.85;
          color: #4b5563;
        }
        .dark .ab-hero-intro { color: #94a3b8; }

        /* ── STATS ROW ── */
        .ab-stats {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        .ab-stat {
          padding: 16px 28px;
          border-radius: 16px;
          border: 1px solid rgba(239,68,68,0.14);
          background: rgba(239,68,68,0.04);
          text-align: center;
          transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
          cursor: default;
          min-width: 120px;
        }
        .ab-stat:hover {
          border-color: var(--red);
          background: rgba(239,68,68,0.09);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px var(--red-glow);
        }

        .ab-stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--red);
          line-height: 1;
          display: block;
        }

        .ab-stat-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-top: 4px;
          display: block;
        }

        /* ── GRID ── */
        .ab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 700px) {
          .ab-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ab-grid > *:last-child:nth-child(odd) {
            grid-column: 1 / -1;
          }
        }

        /* ── SECTION BLOCK ── */
        .ab-section-block {
          padding: 28px 28px 24px;
          border-radius: 20px;
          border: 1px solid rgba(239,68,68,0.1);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(4px);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .dark .ab-section-block {
          background: rgba(15,23,42,0.6);
          border-color: rgba(239,68,68,0.12);
        }
        .ab-section-block:hover {
          border-color: rgba(239,68,68,0.3);
          box-shadow: 0 8px 40px rgba(239,68,68,0.08);
          transform: translateY(-3px);
        }

        .ab-section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .ab-section-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .ab-section-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .dark .ab-section-title { color: #f1f5f9; }

        /* ── EDUCATION CARD ── */
        .ab-edu-list { display: flex; flex-direction: column; gap: 12px; }

        .ab-edu-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(239,68,68,0.05);
          border: 1px solid rgba(239,68,68,0.12);
          transition: all 0.3s;
        }
        .ab-edu-card:hover {
          background: rgba(239,68,68,0.1);
          transform: translateX(4px);
        }

        .ab-edu-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .ab-edu-info { flex: 1; }

        .ab-edu-label {
          font-size: 0.93rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 2px;
        }
        .dark .ab-edu-label { color: #f1f5f9; }

        .ab-edu-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
        }
        .dark .ab-edu-sub { color: #94a3b8; }

        .ab-edu-meta {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--red);
          white-space: nowrap;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(239,68,68,0.1);
        }

        /* ── ACHIEVEMENT CARDS ── */
        .ab-achiev-list { display: flex; flex-direction: column; gap: 10px; }

        .ab-achiev-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(0,0,0,0.07);
          transition: all 0.3s;
        }
        .dark .ab-achiev-card {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
        }
        .ab-achiev-accent {
          border-color: rgba(239,68,68,0.2);
          background: rgba(239,68,68,0.04);
        }
        .ab-achiev-card:hover { transform: translateX(4px); }

        .ab-achiev-icon { font-size: 1.2rem; }

        .ab-achiev-label {
          flex: 1;
          font-size: 0.9rem;
          font-weight: 500;
          color: #0f172a;
        }
        .dark .ab-achiev-label { color: #e2e8f0; }

        .ab-achiev-meta {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(0,0,0,0.05);
        }
        .dark .ab-achiev-meta { background: rgba(255,255,255,0.07); }

        /* ── CHIPS ── */
        .ab-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ab-chip {
          display: inline-block;
          padding: 7px 15px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: default;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s;
        }
        .ab-chip:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .ab-chip-skill {
          background: rgba(239,68,68,0.08);
          color: var(--red);
          border: 1px solid rgba(239,68,68,0.2);
        }
        .ab-chip-skill:hover {
          background: var(--red);
          color: #fff;
          box-shadow: 0 4px 16px rgba(239,68,68,0.35);
        }

        .ab-chip-hobby {
          background: rgba(0,0,0,0.04);
          color: #4b5563;
          border: 1px solid rgba(0,0,0,0.08);
        }
        .dark .ab-chip-hobby {
          background: rgba(255,255,255,0.06);
          color: #94a3b8;
          border-color: rgba(255,255,255,0.1);
        }
        .ab-chip-hobby:hover {
          background: #0f172a;
          color: #fff;
        }
        .dark .ab-chip-hobby:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* ── QUOTE / MISSION ── */
        .ab-quote {
          position: relative;
          font-size: 0.93rem;
          line-height: 1.85;
          color: #4b5563;
          margin: 0;
          padding: 16px 20px 16px 24px;
          border-left: 3px solid var(--red);
          border-radius: 0 12px 12px 0;
          background: rgba(239,68,68,0.04);
          font-style: italic;
        }
        .dark .ab-quote { color: #94a3b8; background: rgba(239,68,68,0.06); }

        .ab-quote-mark {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.8rem;
          color: var(--red);
          line-height: 0;
          vertical-align: -0.4em;
          font-style: normal;
          opacity: 0.6;
        }

        /* ── HR ── */
        .ab-hr {
          border: none;
          border-top: 1px solid rgba(239,68,68,0.12);
          margin: 0;
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="ab-root">
        <section name="About" className="ab-section">
          <div className="ab-grid-bg" />
          <div className="ab-blob ab-blob-1" />
          <div className="ab-blob ab-blob-2" />

          <div className="ab-container">
            {/* ── HERO HEADER ── */}
            <div
              ref={heroRef}
              className="ab-hero"
              style={{
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)",
              }}
            >
              <div className="ab-hero-badge">
                <span className="ab-hero-badge-dot" />
                Know More About Me
              </div>

              <h1 className="ab-hero-title">
                Meet <span>Radha</span>
              </h1>

              <div className="ab-hero-divider" />

              <p className="ab-hero-intro">
                Hi! I'm <strong style={{ color: "var(--red)", fontWeight: 600 }}>Radha</strong>, a determined
                B.Sc graduate from Delhi with a passion for public service. I'm currently preparing
                for government examinations with full dedication, driven by the goal of making a
                meaningful contribution to society.
              </p>
            </div>

            {/* ── STATS ROW ── */}
            <div className="ab-stats">
              {[
                { num: "82%", label: "Graduation Score" },
                { num: "2+", label: "Years Preparing" },
                { num: "6+", label: "Core Skills" },
                { num: "2", label: "Awards" },
              ].map(({ num, label }, i) => (
                <div
                  key={label}
                  className="ab-stat"
                  style={{
                    opacity: heroIn ? 1 : 0,
                    transform: heroIn ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${200 + i * 80}ms, transform 0.6s cubic-bezier(.22,.68,0,1.2) ${200 + i * 80}ms`,
                  }}
                >
                  <span className="ab-stat-num">{num}</span>
                  <span className="ab-stat-label">{label}</span>
                </div>
              ))}
            </div>

            {/* ── SECTIONS GRID ── */}
            <div className="ab-grid">
              {SECTIONS.map((sec, i) => (
                <Section key={sec.id} sec={sec} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>

        <hr className="ab-hr" />
      </div>
    </>
  );
}

export default About;