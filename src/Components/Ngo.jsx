import React, { useRef, useEffect, useState } from "react";

function useInView(ref, threshold = 0.12) {
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

function AnimBlock({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const MISSIONS = [
  {
    icon: "📚",
    title: "Education & Skill Development",
    desc: "Provide access to quality education, vocational training, and technical skills to women, enabling them to secure employment or start their own businesses.",
    color: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20",
    border: "border-red-200 dark:border-red-800/40",
    iconBg: "bg-red-100 dark:bg-red-900/40",
  },
  {
    icon: "💗",
    title: "Health & Well-being",
    desc: "Conduct workshops and awareness programs on women's health, mental wellness, and reproductive rights, ensuring every woman is informed and empowered.",
    color: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20",
    border: "border-pink-200 dark:border-pink-800/40",
    iconBg: "bg-pink-100 dark:bg-pink-900/40",
  },
  {
    icon: "💰",
    title: "Financial Independence",
    desc: "Empower women through financial literacy programs, entrepreneurship training, and micro-financing opportunities to become economically self-sufficient.",
    color: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20",
    border: "border-amber-200 dark:border-amber-800/40",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
  },
  {
    icon: "⚖️",
    title: "Legal Awareness & Advocacy",
    desc: "Educate women about their legal rights and offer support for victims of domestic violence, harassment, and discrimination through legal aid and advocacy.",
    color: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/20",
    border: "border-violet-200 dark:border-violet-800/40",
    iconBg: "bg-violet-100 dark:bg-violet-900/40",
  },
  {
    icon: "👑",
    title: "Leadership & Community Engagement",
    desc: "Encourage women to take leadership roles, foster mentorship programs, and create platforms to voice opinions, share experiences, and drive positive change.",
    color: "from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/20",
    border: "border-teal-200 dark:border-teal-800/40",
    iconBg: "bg-teal-100 dark:bg-teal-900/40",
  },
];

const STATS = [
  { num: "500+", label: "Women Empowered" },
  { num: "5", label: "Core Programs" },
  { num: "Delhi", label: "Based In" },
  { num: "∞", label: "Impact Goal" },
];

function Ngo() {
  const heroRef = useRef(null);
  const heroIn = useInView(heroRef, 0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .ngo-root { font-family: 'Outfit', sans-serif; }

        .ngo-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0 80px;
          background: #fff;
        }
        .dark .ngo-section { background: #04060f; }

        .ngo-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .ngo-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .ngo-blob-1 {
          width: 400px; height: 400px;
          top: -80px; right: -60px;
          background: radial-gradient(circle, rgba(239,68,68,0.1), transparent 70%);
          animation: ngoBlobA 10s ease-in-out infinite alternate;
        }
        .ngo-blob-2 {
          width: 280px; height: 280px;
          bottom: -50px; left: -40px;
          background: radial-gradient(circle, rgba(244,114,182,0.09), transparent 70%);
          animation: ngoBlobA 13s ease-in-out infinite alternate-reverse;
        }
        @keyframes ngoBlobA {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(20px, 28px) scale(1.08); }
        }

        .ngo-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        /* Ribbon accent top of section */
        .ngo-ribbon {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #f472b6, #ef4444);
          background-size: 200% 100%;
          animation: ngoRibbon 4s linear infinite;
        }
        @keyframes ngoRibbon {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Mission cards hover lift */
        .ngo-mission-card {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
        }
        .ngo-mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(239,68,68,0.1);
        }

        /* Stat hover */
        .ngo-stat {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
        }
        .ngo-stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(239,68,68,0.15);
        }

        /* Quote block */
        .ngo-conclusion {
          position: relative;
          overflow: hidden;
        }
        .ngo-conclusion::before {
          content: '❝';
          position: absolute;
          top: -10px; left: 10px;
          font-size: 6rem;
          color: rgba(239,68,68,0.08);
          font-family: Georgia, serif;
          line-height: 1;
          pointer-events: none;
        }

        @keyframes badgePulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.65); }
        }
      `}</style>

      <div className="ngo-root">
        <section name="Ngo" className="ngo-section">
          <div className="ngo-ribbon" />
          <div className="ngo-grid-bg" />
          <div className="ngo-blob ngo-blob-1" />
          <div className="ngo-blob ngo-blob-2" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">

            {/* ── HERO HEADER ── */}
            <div
              ref={heroRef}
              className="flex flex-col items-center text-center gap-5 mb-16"
              style={{
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)",
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/40 bg-red-50 dark:bg-red-950/30 text-red-500 text-xs font-semibold tracking-widest uppercase">
                <span
                  className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"
                  style={{ animation: "badgePulse 1.8s ease-in-out infinite" }}
                />
                Social Initiative
              </div>

              {/* Title */}
              <h1 className="ngo-serif text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                Empower<span className="text-red-500 relative">
                  Her
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                </span>
              </h1>

              {/* Location pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium">
                📍 Delhi, India
              </div>

              {/* Divider */}
              <div className="w-14 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-full" />

              {/* Tagline */}
              <p className="max-w-xl text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Empowering women from underprivileged backgrounds through education, skills, and resources — building financially independent lives, one woman at a time.
              </p>
            </div>

            {/* ── STATS ROW ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {STATS.map(({ num, label }, i) => (
                <AnimBlock key={label} delay={i * 80}>
                  <div className="ngo-stat flex flex-col items-center text-center p-5 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/60 dark:bg-red-950/20 cursor-default">
                    <span className="ngo-serif text-3xl font-bold text-red-500">{num}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-1">{label}</span>
                  </div>
                </AnimBlock>
              ))}
            </div>

            {/* ── AIM & VISION ── */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <AnimBlock delay={0}>
                <div className="h-full p-7 rounded-2xl border border-red-100 dark:border-red-900/30 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-xl">🎯</div>
                    <h2 className="ngo-serif text-xl font-bold text-slate-900 dark:text-slate-100">Our Aim</h2>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                    To empower women, particularly from underprivileged backgrounds, by providing them with education, skills, and resources needed to become financially independent, socially aware, and active contributors to society — fostering a safe, supportive, and inclusive environment.
                  </p>
                </div>
              </AnimBlock>

              <AnimBlock delay={100}>
                <div className="h-full p-7 rounded-2xl border border-pink-100 dark:border-pink-900/30 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-xl">🌅</div>
                    <h2 className="ngo-serif text-xl font-bold text-slate-900 dark:text-slate-100">Our Vision</h2>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                    To create a society where every woman has equal opportunities in education, employment, and leadership roles — regardless of socioeconomic status, background, or location. A world where gender is never a barrier to potential.
                  </p>
                </div>
              </AnimBlock>
            </div>

            {/* ── MISSION HEADING ── */}
            <AnimBlock delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent dark:from-red-800/40" />
                <h2 className="ngo-serif text-2xl font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                  Our Mission
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-red-200 to-transparent dark:from-red-800/40" />
              </div>
            </AnimBlock>

            {/* ── MISSION CARDS ── */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {MISSIONS.map((m, i) => (
                <AnimBlock key={m.title} delay={i * 70}>
                  <div className={`ngo-mission-card h-full p-6 rounded-2xl border bg-gradient-to-br ${m.color} ${m.border}`}>
                    <div className={`w-11 h-11 rounded-xl ${m.iconBg} flex items-center justify-center text-2xl mb-4`}>
                      {m.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </AnimBlock>
              ))}
            </div>

            {/* ── CONCLUSION ── */}
            <AnimBlock delay={0}>
              <div className="ngo-conclusion p-8 md:p-10 rounded-3xl border border-red-100 dark:border-red-900/30 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/30 dark:via-rose-950/20 dark:to-pink-950/20">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg shadow-red-200 dark:shadow-red-900/40">
                    🌸
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-red-400 mb-0.5">Conclusion</p>
                    <h2 className="ngo-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                      A Ripple Effect of Change
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify relative z-10">
                  EmpowerHer aims to break the cycle of poverty and discrimination that many women face by equipping them with the tools and confidence needed to thrive in all aspects of life. Through education, financial empowerment, and advocacy, we hope to create a ripple effect that will uplift entire communities —{" "}
                  <strong className="text-red-500 font-semibold">one empowered woman at a time.</strong>
                </p>

                {/* Bottom accent row */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Education", "Empowerment", "Advocacy", "Community", "Leadership"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimBlock>

          </div>
        </section>

        <hr className="border-none border-t border-red-100 dark:border-red-900/20 m-0 relative z-10" style={{ borderTopWidth: "1px" }} />
      </div>
    </>
  );
}

export default Ngo;