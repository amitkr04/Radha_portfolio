import React, { useEffect, useRef } from "react";
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Pic from "../assets/Radha_2.png";

function Home() {
  const particleRef = useRef(null);

  // Floating particles
  useEffect(() => {
    const canvas = particleRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.45 + 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239,68,68,${p.a})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socials = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=100021845257379",
      color: "#1877F2",
      label: "Facebook",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/",
      color: "#FF0000",
      label: "YouTube",
    },
    {
      icon: <FaTelegram />,
      href: "https://telegram.org/",
      color: "#229ED9",
      label: "Telegram",
    },
    {
      icon: <FaInstagramSquare />,
      href: "https://www.instagram.com/amit_kashyapa_/",
      color: "#E1306C",
      label: "Instagram",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --red: #ef4444;
          --red-soft: #fca5a5;
          --red-glow: rgba(239,68,68,0.18);
          --red-glow-strong: rgba(239,68,68,0.32);
        }

        .hm-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
        }

        /* ── SECTION ── */
        .hm-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0 60px;
          background: #fff;
        }

        .dark .hm-section {
          background: #04060f;
        }

        /* Subtle grid */
        .hm-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* Gradient blobs */
        .hm-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: blobFloat 8s ease-in-out infinite alternate;
        }

        .hm-blob-1 {
          width: 420px; height: 420px;
          top: -80px; right: -80px;
          background: radial-gradient(circle, rgba(239,68,68,0.12), transparent 70%);
          animation-delay: 0s;
        }

        .hm-blob-2 {
          width: 300px; height: 300px;
          bottom: -60px; left: -40px;
          background: radial-gradient(circle, rgba(239,68,68,0.08), transparent 70%);
          animation-delay: 3s;
        }

        @keyframes blobFloat {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(20px, 30px) scale(1.08); }
        }

        /* Particles canvas */
        .hm-canvas {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
        }

        /* ── CONTAINER ── */
        .hm-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          width: 100%;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 52px;
        }

        @media (min-width: 768px) {
          .hm-container {
            flex-direction: row;
            gap: 60px;
          }
        }

        /* ── LEFT ── */
        .hm-left {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 22px;
          animation: slideUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both;
        }

        @media (min-width: 768px) {
          .hm-left {
            width: 55%;
            text-align: left;
          }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Welcome badge */
        .hm-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 50px;
          border: 1px solid rgba(239,68,68,0.22);
          background: rgba(239,68,68,0.06);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--red);
          width: fit-content;
          margin: 0 auto;
          animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) 0.3s both;
        }

        @media (min-width: 768px) { .hm-badge { margin: 0; } }

        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }

        .hm-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--red);
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }

        /* Heading */
        .hm-heading {
          line-height: 1.15;
          animation: slideUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.2s both;
        }

        .hm-heading-static {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #0f172a;
          display: block;
          letter-spacing: -0.02em;
        }

        .dark .hm-heading-static { color: #f1f5f9; }

        .hm-typed-wrap {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 4px;
        }

        @media (min-width: 768px) { .hm-typed-wrap { justify-content: flex-start; } }

        .hm-typed-prefix {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 4vw, 3rem);
          font-weight: 600;
          color: #0f172a;
        }

        .dark .hm-typed-prefix { color: #f1f5f9; }

        .hm-typed {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 4vw, 3rem) !important;
          font-weight: 700 !important;
          color: var(--red) !important;
          position: relative;
        }

        .hm-typed::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, var(--red), transparent);
          border-radius: 2px;
        }

        /* Divider line */
        .hm-line {
          width: 60px; height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--red), transparent);
          margin: 0 auto;
          animation: lineGrow 0.8s ease 0.4s both;
        }

        @media (min-width: 768px) { .hm-line { margin: 0; } }

        @keyframes lineGrow {
          from { width: 0; opacity: 0; }
          to   { width: 60px; opacity: 1; }
        }

        /* Description */
        .hm-desc {
          font-size: 0.93rem;
          line-height: 1.85;
          color: #4b5563;
          text-align: justify;
          animation: slideUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.35s both;
        }

        .dark .hm-desc { color: #94a3b8; }

        /* ── BOTTOM ROW ── */
        .hm-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          animation: slideUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.45s both;
        }

        @media (min-width: 768px) {
          .hm-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        /* Social */
        .hm-social-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 12px;
          text-align: center;
        }

        @media (min-width: 768px) { .hm-social-label { text-align: left; } }

        .hm-social-list {
          display: flex;
          align-items: center;
          gap: 10px;
          list-style: none;
          margin: 0; padding: 0;
        }

        .hm-social-btn {
          width: 42px; height: 42px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.09);
          background: rgba(0,0,0,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
          color: #64748b;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .dark .hm-social-btn {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #94a3b8;
        }

        .hm-social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .hm-social-btn:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          color: #fff;
        }

        .hm-social-btn:hover::before { opacity: 1; }

        /* Working on card */
        .hm-work-card {
          padding: 14px 20px;
          border-radius: 16px;
          border: 1px solid rgba(239,68,68,0.14);
          background: rgba(239,68,68,0.04);
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 180px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
        }

        .hm-work-card:hover {
          border-color: var(--red);
          background: rgba(239,68,68,0.09);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px var(--red-glow);
        }

        .hm-work-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ff4e4e, #c00);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(192,0,0,0.35);
          animation: iconPulse 2.5s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(192,0,0,0.35); }
          50%       { box-shadow: 0 4px 28px rgba(192,0,0,0.6); }
        }

        .hm-work-info {}

        .hm-work-info p:first-child {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          margin: 0 0 2px;
        }

        .hm-work-info p:last-child {
          font-size: 0.88rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .dark .hm-work-info p:last-child { color: #f1f5f9; }

        /* ── RIGHT IMAGE ── */
        .hm-right {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
          animation: scaleIn 0.8s cubic-bezier(.22,.68,0,1.2) 0.15s both;
        }

        @media (min-width: 768px) { .hm-right { width: 40%; } }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .hm-img-frame {
          position: relative;
          width: 280px; height: 280px;
        }

        @media (min-width: 768px) {
          .hm-img-frame { width: 380px; height: 380px; }
        }

        /* Spinning dashed ring */
        .hm-ring-spin {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 2px dashed rgba(239,68,68,0.3);
          animation: spinSlow 18s linear infinite;
        }

        @keyframes spinSlow { to { transform: rotate(360deg); } }

        /* Outer glow ring */
        .hm-ring-glow {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: conic-gradient(var(--red) 0deg, transparent 100deg, var(--red) 200deg, transparent 300deg, var(--red) 360deg);
          animation: spinSlow 6s linear infinite;
          filter: blur(2px);
          opacity: 0.55;
        }

        /* Mask so glow ring shows only as outline */
        .hm-ring-mask {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #fff;
        }

        .dark .hm-ring-mask { background: #04060f; }

        /* White inner ring */
        .hm-img-inner {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 6px solid #fff;
          z-index: 2;
          box-shadow: 0 0 0 1px rgba(239,68,68,0.15), 0 20px 60px rgba(0,0,0,0.14);
          overflow: hidden;
        }

        .dark .hm-img-inner { border-color: #1e293b; }

        .hm-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(.22,.68,0,1.2);
        }

        .hm-img-frame:hover .hm-img { transform: scale(1.04); }

        /* Floating badges on image */
        .hm-float-badge {
          position: absolute;
          z-index: 4;
          padding: 8px 14px;
          border-radius: 14px;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(239,68,68,0.18);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          animation: floatBadge 3.5s ease-in-out infinite alternate;
          white-space: nowrap;
        }

        .dark .hm-float-badge {
          background: rgba(15,23,42,0.85);
          border-color: rgba(239,68,68,0.25);
        }

        .hm-float-badge-1 {
          bottom: 24px; left: -20px;
          animation-delay: 0s;
        }

        .hm-float-badge-2 {
          top: 28px; right: -16px;
          animation-delay: 1.5s;
        }

        @keyframes floatBadge {
          from { transform: translateY(0); }
          to   { transform: translateY(-8px); }
        }

        .hm-fb-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin: 0 0 2px;
        }

        .hm-fb-value {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dark .hm-fb-value { color: #f1f5f9; }

        .hm-fb-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* Decorative corner accent */
        .hm-corner {
          position: absolute;
          width: 80px; height: 80px;
          pointer-events: none;
        }

        .hm-corner-tl {
          top: -20px; left: -20px;
          border-top: 3px solid rgba(239,68,68,0.3);
          border-left: 3px solid rgba(239,68,68,0.3);
          border-radius: 4px 0 0 0;
        }

        .hm-corner-br {
          bottom: -20px; right: -20px;
          border-bottom: 3px solid rgba(239,68,68,0.3);
          border-right: 3px solid rgba(239,68,68,0.3);
          border-radius: 0 0 4px 0;
        }

        /* ── HR ── */
        .hm-hr {
          border: none;
          border-top: 1px solid rgba(239,68,68,0.12);
          margin: 0;
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="hm-root">
        <section name="Home" className="hm-section">
          {/* Backgrounds */}
          <div className="hm-grid-bg" />
          <div className="hm-blob hm-blob-1" />
          <div className="hm-blob hm-blob-2" />
          <canvas className="hm-canvas" ref={particleRef} />

          <div className="hm-container">
            {/* ── LEFT ── */}
            <div className="hm-left">
              {/* Badge */}
              <div>
                <div className="hm-badge">
                  <span className="hm-badge-dot" />
                  Welcome to my Portfolio
                </div>
              </div>

              {/* Heading */}
              <div className="hm-heading">
                <span className="hm-heading-static">Hello, I'm a</span>
                <div className="hm-typed-wrap">
                  <ReactTyped
                    className="hm-typed"
                    strings={[
                      "Student",
                      "Govt Exam Aspirant",
                      "Hardworking Learner",
                    ]}
                    typeSpeed={55}
                    backSpeed={38}
                    loop
                  />
                </div>
              </div>

              <div className="hm-line" />

              {/* Description */}
              <p className="hm-desc">
                Hi, I'm{" "}
                <strong style={{ color: "var(--red)", fontWeight: 600 }}>
                  Radha
                </strong>{" "}
                from Delhi. I completed my graduation in B.Sc with{" "}
                <strong>82%</strong> from Rajiv Gandhi Government Degree
                College, Kotshera. Currently preparing for government exams, my
                academic journey in science has equipped me with strong
                analytical skills and discipline.
                <br />
                <br />I am passionate about building a meaningful career in the
                government sector where I can contribute positively to society.
                With dedication, consistency, and a clear goal, I continue
                working hard every day toward success.
              </p>

              {/* Bottom row */}
              <div className="hm-bottom">
                {/* Social */}
                <div>
                  <p className="hm-social-label">Available On</p>
                  <ul className="hm-social-list">
                    {socials.map(({ icon, href, color, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hm-social-btn"
                          title={label}
                          style={{ "--hover-bg": color }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = color;
                            e.currentTarget.style.borderColor = color;
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "";
                            e.currentTarget.style.borderColor = "";
                            e.currentTarget.style.color = "";
                          }}
                        >
                          {icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working on */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hm-work-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="hm-work-icon">
                    <FaYoutube />
                  </div>
                  <div className="hm-work-info">
                    <p>Currently Working On</p>
                    <p>YouTube Channel</p>
                  </div>
                </a>
              </div>
            </div>

            {/* ── RIGHT IMAGE ── */}
            <div className="hm-right">
              <div className="hm-img-frame">
                {/* Corner accents */}
                <div className="hm-corner hm-corner-tl" />
                <div className="hm-corner hm-corner-br" />

                {/* Spinning rings */}
                <div className="hm-ring-spin" />
                <div
                  style={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <div className="hm-ring-glow" />
                  <div className="hm-ring-mask" />
                </div>

                {/* Photo */}
                <div className="hm-img-inner">
                  <img src={Pic} alt="Radha" className="hm-img" />
                </div>

                {/* Floating badge 1 — graduation */}
                <div className="hm-float-badge hm-float-badge-1">
                  <p className="hm-fb-label">Graduation</p>
                  <p className="hm-fb-value">🎓 B.Sc — 82%</p>
                </div>

                {/* Floating badge 2 — status */}
                <div className="hm-float-badge hm-float-badge-2">
                  <p className="hm-fb-label">Status</p>
                  <p className="hm-fb-value">
                    <span className="hm-fb-dot" />
                    Active Aspirant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="hm-hr" />
      </div>
    </>
  );
}

export default Home;
