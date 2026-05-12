import React, { useRef, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Projects" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

const SOCIALS = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=100021845257379",
    label: "Facebook",
    color: "hover:text-blue-500 hover:border-blue-400/40 hover:bg-blue-50/60 dark:hover:bg-blue-950/30",
  },
  {
    icon: FaTwitterSquare,
    href: "https://x.com/Amitkum73951900",
    label: "Twitter / X",
    color: "hover:text-sky-500 hover:border-sky-400/40 hover:bg-sky-50/60 dark:hover:bg-sky-950/30",
  },
  {
    icon: FaInstagramSquare,
    href: "https://www.instagram.com/amit_kashyapa_/",
    label: "Instagram",
    color: "hover:text-pink-500 hover:border-pink-400/40 hover:bg-pink-50/60 dark:hover:bg-pink-950/30",
  },
];

function Footer() {
  const rootRef = useRef(null);
  const rootIn = useInView(rootRef, 0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .foot-root { font-family: 'Outfit', sans-serif; }
        .foot-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .foot-section {
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .dark .foot-section { background: #04060f; }

        .foot-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .foot-blob {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none;
        }
        .foot-blob-1 {
          width: 340px; height: 340px;
          bottom: -60px; right: -60px;
          background: radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%);
          animation: footBlob 11s ease-in-out infinite alternate;
        }
        .foot-blob-2 {
          width: 240px; height: 240px;
          top: -40px; left: -40px;
          background: radial-gradient(circle, rgba(244,114,182,0.07), transparent 70%);
          animation: footBlob 14s ease-in-out infinite alternate-reverse;
        }
        @keyframes footBlob {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(16px, 20px) scale(1.07); }
        }

        /* Top ribbon */
        .foot-ribbon {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #ec4899, #6366f1);
          background-size: 200% 100%;
          animation: footRibbon 5s linear infinite;
        }
        @keyframes footRibbon {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Social icon buttons */
        .foot-social {
          width: 46px; height: 46px;
          border-radius: 14px;
          border: 1.5px solid;
          border-color: rgba(99,102,241,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), color 0.2s, border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .foot-social:hover {
          transform: translateY(-4px) scale(1.08);
        }

        /* Nav links */
        .foot-nav-link {
          font-size: 13px;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .foot-nav-link:hover {
          color: #6366f1;
          transform: translateY(-1px);
        }

        /* Heart beat */
        @keyframes heartBeat {
          0%,100% { transform: scale(1); }
          25%      { transform: scale(1.3); }
          50%      { transform: scale(1); }
          75%      { transform: scale(1.15); }
        }
        .foot-heart {
          display: inline-block;
          animation: heartBeat 1.6s ease-in-out infinite;
          color: #ec4899;
        }

        @keyframes badgePulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.65); }
        }
      `}</style>

      <div className="foot-root">
        <footer className="foot-section">
          <div className="foot-ribbon" />
          <div className="foot-grid-bg" />
          <div className="foot-blob foot-blob-1" />
          <div className="foot-blob foot-blob-2" />

          <div
            ref={rootRef}
            className="max-w-5xl mx-auto px-6 pt-16 pb-10 relative z-10"
            style={{
              opacity: rootIn ? 1 : 0,
              transform: rootIn ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)",
            }}
          >

            {/* ── TOP ROW: Name + tagline ── */}
            <div className="flex flex-col items-center text-center gap-3 mb-10">
              <h2 className="foot-serif text-4xl font-bold text-slate-900 dark:text-slate-100">
                Amit
                <span className="text-indigo-500 relative ml-1">
                  Kashyap
                  <span className="absolute bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
                </span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                Developer · Educator · Leader — building meaningful things, one line at a time.
              </p>
            </div>

            {/* ── NAV LINKS ── */}
            <AnimBlock delay={0}>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
                {NAV_LINKS.map((link) => (
                  <a key={link.label} href={link.href} className="foot-nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </AnimBlock>

            {/* ── DIVIDER ── */}
            <AnimBlock delay={60}>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800/40 to-transparent" />
                <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase px-2">
                  Let's connect
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800/40 to-transparent" />
              </div>
            </AnimBlock>

            {/* ── SOCIAL ICONS ── */}
            <AnimBlock delay={120}>
              <div className="flex justify-center gap-4 mb-12">
                {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`foot-social ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </AnimBlock>

            {/* ── BOTTOM BAR ── */}
            <AnimBlock delay={180}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                <p className="text-xs text-slate-400">
                  &copy; {new Date().getFullYear()} Amit Kashyap. All rights reserved.
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  Made with{" "}
                  <span className="foot-heart">❤️</span>{" "}
                  &amp; supported by{" "}
                  <span className="font-semibold text-pink-400">Radha</span>
                </p>
              </div>
            </AnimBlock>

          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;