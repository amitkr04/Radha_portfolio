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

const EXPERIENCES = [
  {
    role: "Class Representative (CR)",
    duration: "1 Year",
    icon: "🎓",
    color: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20",
    border: "border-green-200 dark:border-green-800/40",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    accentColor: "text-green-600 dark:text-green-400",
    dotColor: "bg-green-500",
    lineBg: "bg-green-200 dark:bg-green-800/40",
    points: [
      { icon: "🗣️", text: "Facilitated communication between students and faculty." },
      { icon: "📅", text: "Organized academic and extracurricular activities for the class." },
      { icon: "📖", text: "Coordinated study groups to help peers with problem-solving." },
      { icon: "🏛️", text: "Represented the class in faculty meetings and contributed to decision-making." },
    ],
  },
  {
    role: "Teaching Assistant (TA)",
    duration: "2 Years",
    icon: "🧑‍🏫",
    color: "from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20",
    border: "border-blue-200 dark:border-blue-800/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    accentColor: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-500",
    lineBg: "bg-blue-200 dark:bg-blue-800/40",
    points: [
      { icon: "📐", text: "Assisted in teaching Mathematics, Science, and Computer Science to 9th and 10th-grade students." },
      { icon: "🤝", text: "Provided one-on-one support to students for better understanding of complex topics." },
      { icon: "📝", text: "Helped grade assignments and quizzes, giving feedback to aid student improvement." },
      { icon: "🎨", text: "Collaborated with the lead teacher to create engaging learning activities." },
      { icon: "👥", text: "Conducted small group tutoring sessions to ensure thorough understanding before exams." },
    ],
  },
];

const STATS = [
  { num: "3+", label: "Years Active" },
  { num: "2", label: "Roles Held" },
  { num: "9–10", label: "Grades Taught" },
  { num: "100+", label: "Students Supported" },
];

function Experience() {
  const heroRef = useRef(null);
  const heroIn = useInView(heroRef, 0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .exp-root { font-family: 'Outfit', sans-serif; }

        .exp-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0 80px;
          background: #fff;
        }
        .dark .exp-section { background: #04060f; }

        .exp-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .exp-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .exp-blob-1 {
          width: 400px; height: 400px;
          top: -80px; right: -60px;
          background: radial-gradient(circle, rgba(34,197,94,0.09), transparent 70%);
          animation: expBlobA 10s ease-in-out infinite alternate;
        }
        .exp-blob-2 {
          width: 280px; height: 280px;
          bottom: -50px; left: -40px;
          background: radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%);
          animation: expBlobA 13s ease-in-out infinite alternate-reverse;
        }
        @keyframes expBlobA {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(20px, 28px) scale(1.08); }
        }

        .exp-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .exp-ribbon {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #22c55e, #3b82f6, #22c55e);
          background-size: 200% 100%;
          animation: expRibbon 4s linear infinite;
        }
        @keyframes expRibbon {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .exp-card {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
        }
        .exp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(34,197,94,0.1);
        }

        .exp-stat {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
        }
        .exp-stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(34,197,94,0.15);
        }

        .exp-point {
          transition: transform 0.2s ease;
        }
        .exp-point:hover {
          transform: translateX(4px);
        }

        @keyframes badgePulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.65); }
        }

        /* Timeline dot pulse on card hover */
        .exp-card:hover .exp-dot {
          animation: dotPop 0.4s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes dotPop {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div className="exp-root">
        <section name="Experience" className="exp-section">
          <div className="exp-ribbon" />
          <div className="exp-grid-bg" />
          <div className="exp-blob exp-blob-1" />
          <div className="exp-blob exp-blob-2" />

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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 dark:border-green-800/40 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 text-xs font-semibold tracking-widest uppercase">
                <span
                  className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
                  style={{ animation: "badgePulse 1.8s ease-in-out infinite" }}
                />
                Professional Journey
              </div>

              {/* Title */}
              <h1 className="exp-serif text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                My{" "}
                <span className="text-green-500 relative">
                  Experience
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
                </span>
              </h1>

              {/* Divider */}
              <div className="w-14 h-0.5 bg-gradient-to-r from-green-500 to-transparent rounded-full" />

              {/* Tagline */}
              <p className="max-w-xl text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Building leadership, communication, and teaching skills through hands-on academic roles — shaping both my growth and those around me.
              </p>
            </div>

            {/* ── STATS ROW ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {STATS.map(({ num, label }, i) => (
                <AnimBlock key={label} delay={i * 80}>
                  <div className="exp-stat flex flex-col items-center text-center p-5 rounded-2xl border border-green-100 dark:border-green-900/30 bg-green-50/60 dark:bg-green-950/20 cursor-default">
                    <span className="exp-serif text-3xl font-bold text-green-500">{num}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-1">{label}</span>
                  </div>
                </AnimBlock>
              ))}
            </div>

            {/* ── SECTION HEADING ── */}
            <AnimBlock delay={0}>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent dark:from-green-800/40" />
                <h2 className="exp-serif text-2xl font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                  Roles & Responsibilities
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-green-200 to-transparent dark:from-green-800/40" />
              </div>
            </AnimBlock>

            {/* ── EXPERIENCE CARDS ── */}
            <div className="flex flex-col gap-8 mb-16">
              {EXPERIENCES.map((exp, i) => (
                <AnimBlock key={exp.role} delay={i * 120}>
                  <div className={`exp-card rounded-2xl border bg-gradient-to-br ${exp.color} ${exp.border} overflow-hidden`}>

                    {/* Card Header */}
                    <div className="flex items-start gap-4 p-6 pb-4">
                      <div className={`w-14 h-14 rounded-2xl ${exp.iconBg} flex items-center justify-center text-3xl flex-shrink-0`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className={`exp-serif text-xl font-bold text-slate-900 dark:text-slate-100`}>
                            {exp.role}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${exp.border} ${exp.accentColor} bg-white/60 dark:bg-white/5`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${exp.dotColor} exp-dot`} />
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                          {exp.points.length} key responsibilities
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`mx-6 h-px ${exp.lineBg}`} />

                    {/* Responsibilities */}
                    <div className="p-6 pt-4 grid sm:grid-cols-2 gap-3">
                      {exp.points.map((point, j) => (
                        <div
                          key={j}
                          className="exp-point flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/70 dark:border-white/10"
                        >
                          <span className="text-lg flex-shrink-0 mt-0.5">{point.icon}</span>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimBlock>
              ))}
            </div>

            {/* ── CONCLUSION / TAKEAWAY ── */}
            <AnimBlock delay={0}>
              <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl border border-green-100 dark:border-green-900/30 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/20">
                {/* Large quote decoration */}
                <span className="absolute top-[-10px] left-[10px] text-[6rem] leading-none text-green-500/10 font-serif pointer-events-none select-none">❝</span>

                <div className="flex items-start gap-4 mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg shadow-green-200 dark:shadow-green-900/40">
                    🌱
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-green-500 mb-0.5">Takeaway</p>
                    <h2 className="exp-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                      Growth Through Giving Back
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify relative z-10">
                  These experiences shaped my ability to lead, communicate, and teach effectively. As a Class Representative and Teaching Assistant, I learned that true growth comes not just from acquiring knowledge, but from{" "}
                  <strong className="text-green-600 dark:text-green-400 font-semibold">empowering those around you</strong>{" "}
                  — whether by amplifying student voices or making complex concepts accessible to every learner.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                  {["Leadership", "Communication", "Teaching", "Mentorship", "Teamwork"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimBlock>

          </div>
        </section>

        <hr className="border-none m-0 relative z-10" style={{ borderTop: "1px solid", borderColor: "rgba(34,197,94,0.1)" }} />
      </div>
    </>
  );
}

export default Experience;