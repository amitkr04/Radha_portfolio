// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import pic from "../assets/Radha_pic.jpg";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { Link } from "react-scroll";

// function Navbar({ darkMode, setDarkMode }) {
//   const [menu, setMenu] = useState(false);

//   const navItems = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "About",
//     },
//     {
//       id: 3,
//       text: "Ngo",
//     },
//     {
//       id: 4,
//       text: "Experience",
//     },
//     {
//       id: 5,
//       text: "Contact",
//     },
//   ];
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex space-x-2 items-center">
//             <img src={pic} className="h-12 w-12 rounded-full" alt="" />
//             <h1 className="font-semibold text-xl cursor-pointer">
//               Radh<span className="text-green-500 text-2xl">a</span>
//               <p className="text-sm">student</p>
//             </h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
//               type="button"
//             >
//               {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
//               <span>{darkMode ? "Light" : "Dark"}</span>
//             </button>
//             <div>
//               <ul className="hidden md:flex space-x-8">
//                 {navItems.map(({ id, text }) => (
//                   <li
//                     className="hover:scale-105 duration-200 cursor-pointer"
//                     key={id}
//                   >
//                     <Link
//                       className="text-slate-900 dark:text-slate-100"
//                       to={text}
//                       smooth={true}
//                       duration={500}
//                       offset={-70}
//                       activeClass="active"
//                     >
//                       {text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <div className="md:hidden flex items-center gap-4">
//                 <button
//                   onClick={() => setDarkMode(!darkMode)}
//                   className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
//                   type="button"
//                 >
//                   {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//                 </button>
//                 <button
//                   onClick={() => setMenu(!menu)}
//                   className="p-2 rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
//                   type="button"
//                 >
//                   {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* mobile navbar */}

//         {menu && (
//           <div className="bg-white dark:bg-slate-900">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-slate-900 dark:text-slate-100">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     className="text-slate-900 dark:text-slate-100"
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import pic from "../assets/Radha_pic.jpg";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar({ darkMode, setDarkMode }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuRef = useRef(null);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Ngo" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    if (menu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menu]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --green: #22c55e;
          --green-glow: rgba(34,197,94,0.25);
          --nav-bg-light: rgba(255,255,255,0.85);
          --nav-bg-dark: rgba(10,15,30,0.88);
          --border-light: rgba(0,0,0,0.07);
          --border-dark: rgba(255,255,255,0.07);
          --text-light: #0f172a;
          --text-dark: #e2e8f0;
        }

        .nb-root {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── NAVBAR SHELL ── */
        .nb-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: all 0.45s cubic-bezier(.22,.68,0,1.2);
        }

        .nb-bar.scrolled {
          top: 10px;
          left: 16px;
          right: 16px;
          border-radius: 20px;
        }

        .nb-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--nav-bg-light);
          border-bottom: 1.5px solid var(--border-light);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          transition: all 0.45s cubic-bezier(.22,.68,0,1.2);
        }

        .dark .nb-inner {
          background: var(--nav-bg-dark);
          border-bottom-color: var(--border-dark);
        }

        .nb-bar.scrolled .nb-inner {
          border-radius: 20px;
          border: 1.5px solid var(--border-light);
          box-shadow: 0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(34,197,94,0.06);
        }

        .dark .nb-bar.scrolled .nb-inner {
          border-color: var(--border-dark);
          box-shadow: 0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(34,197,94,0.08);
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
        }

        .nb-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .nb-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid transparent;
          background-clip: padding-box;
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.4s;
          position: relative;
          z-index: 1;
        }

        .nb-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(var(--green) 0deg, transparent 120deg, var(--green) 240deg, transparent 360deg);
          animation: spin-ring 4s linear infinite;
          z-index: 0;
        }

        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }

        .nb-logo:hover .nb-avatar {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 4px 20px var(--green-glow);
        }

        .nb-logo-text {
          line-height: 1;
        }

        .nb-logo-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: -0.02em;
          transition: color 0.3s;
        }

        .dark .nb-logo-name { color: var(--text-dark); }

        .nb-logo-name .accent {
          color: var(--green);
          font-size: 1.35rem;
        }

        .nb-logo-sub {
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-top: 2px;
        }

        /* ── DESKTOP NAV LINKS ── */
        .nb-links {
          display: none;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 768px) {
          .nb-links { display: flex; }
        }

        .nb-link-item {
          position: relative;
        }

        .nb-link {
          display: block;
          padding: 7px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #64748b;
          cursor: pointer;
          border-radius: 10px;
          transition: color 0.25s;
          position: relative;
          z-index: 1;
          white-space: nowrap;
        }

        .dark .nb-link { color: #94a3b8; }

        .nb-link:hover,
        .nb-link.active {
          color: var(--text-light);
        }

        .dark .nb-link:hover,
        .dark .nb-link.active {
          color: #f1f5f9;
        }

        .nb-link-pill {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: rgba(0,0,0,0.05);
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(.34,1.56,.64,1);
          pointer-events: none;
        }

        .dark .nb-link-pill {
          background: rgba(255,255,255,0.07);
        }

        .nb-link-item:hover .nb-link-pill,
        .nb-link-item.active .nb-link-pill {
          opacity: 1;
          transform: scale(1);
        }

        .nb-link-item.active .nb-link-pill {
          background: rgba(34,197,94,0.12);
        }

        .nb-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%) scale(0);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--green);
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
        }

        .nb-link-item.active .nb-dot {
          transform: translateX(-50%) scale(1);
        }

        /* ── ACTIONS ── */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Theme toggle */
        .nb-theme-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 50px;
          border: 1.5px solid rgba(0,0,0,0.09);
          background: rgba(0,0,0,0.03);
          color: #475569;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
        }

        .dark .nb-theme-btn {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #94a3b8;
        }

        .nb-theme-btn:hover {
          border-color: var(--green);
          color: var(--green);
          background: var(--green-glow);
          transform: scale(1.05);
        }

        .nb-theme-btn .icon {
          transition: transform 0.5s cubic-bezier(.34,1.56,.64,1);
        }

        .nb-theme-btn:hover .icon {
          transform: rotate(20deg) scale(1.2);
        }

        .nb-theme-label { display: none; }

        @media (min-width: 768px) {
          .nb-theme-label { display: inline; }
        }

        /* Hamburger */
        .nb-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          border-radius: 12px;
          border: 1.5px solid rgba(0,0,0,0.09);
          background: rgba(0,0,0,0.03);
          cursor: pointer;
          transition: all 0.3s;
        }

        .dark .nb-hamburger {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }

        .nb-hamburger:hover {
          border-color: var(--green);
          background: var(--green-glow);
        }

        .nb-hamburger .bar {
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: #475569;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), opacity 0.3s, width 0.3s;
        }

        .dark .nb-hamburger .bar { background: #94a3b8; }

        .nb-hamburger.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-hamburger.open .bar:nth-child(2) { opacity: 0; width: 0; }
        .nb-hamburger.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        @media (min-width: 768px) {
          .nb-hamburger { display: none; }
        }

        /* ── MOBILE DRAWER ── */
        .nb-drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .nb-drawer {
          position: fixed;
          top: 0; right: 0;
          z-index: 9999;
          width: min(320px, 85vw);
          height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          box-shadow: -8px 0 48px rgba(0,0,0,0.18);
          animation: slideIn 0.38s cubic-bezier(.22,.68,0,1.2) forwards;
        }

        .dark .nb-drawer {
          background: #0f172a;
          box-shadow: -8px 0 48px rgba(0,0,0,0.55);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }

        .nb-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }

        .dark .nb-drawer-header { border-color: rgba(255,255,255,0.07); }

        .nb-drawer-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-light);
        }

        .dark .nb-drawer-title { color: var(--text-dark); }

        .nb-drawer-close {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1.5px solid rgba(0,0,0,0.09);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-size: 1.2rem;
          transition: all 0.25s;
        }

        .dark .nb-drawer-close { border-color: rgba(255,255,255,0.1); color: #94a3b8; }

        .nb-drawer-close:hover {
          border-color: var(--green);
          color: var(--green);
          background: var(--green-glow);
        }

        .nb-drawer-links {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .nb-drawer-item {
          animation: itemIn 0.4s cubic-bezier(.22,.68,0,1.2) both;
        }

        @keyframes itemIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 500;
          color: #475569;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(.34,1.56,.64,1);
          position: relative;
          overflow: hidden;
        }

        .dark .nb-drawer-link { color: #94a3b8; }

        .nb-drawer-link::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          border-radius: 0 3px 3px 0;
          background: var(--green);
          transform: scaleY(0);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }

        .nb-drawer-link:hover,
        .nb-drawer-link.active {
          background: rgba(34,197,94,0.08);
          color: #16a34a;
          padding-left: 22px;
        }

        .dark .nb-drawer-link:hover,
        .dark .nb-drawer-link.active {
          color: var(--green);
        }

        .nb-drawer-link:hover::before,
        .nb-drawer-link.active::before {
          transform: scaleY(1);
        }

        .nb-drawer-num {
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: #cbd5e1;
          min-width: 20px;
        }

        .dark .nb-drawer-num { color: #334155; }

        .nb-drawer-footer {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.07);
        }

        .dark .nb-drawer-footer { border-color: rgba(255,255,255,0.07); }

        .nb-drawer-tag {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 300;
        }

        /* Entrance animation for desktop links */
        @keyframes navLinkIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nb-link-item {
          animation: navLinkIn 0.5s cubic-bezier(.22,.68,0,1.2) both;
        }

        .nb-link-item:nth-child(1) { animation-delay: 0.05s; }
        .nb-link-item:nth-child(2) { animation-delay: 0.10s; }
        .nb-link-item:nth-child(3) { animation-delay: 0.15s; }
        .nb-link-item:nth-child(4) { animation-delay: 0.20s; }
        .nb-link-item:nth-child(5) { animation-delay: 0.25s; }

        @keyframes logoIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nb-logo { animation: logoIn 0.5s cubic-bezier(.22,.68,0,1.2) 0.05s both; }
      `}</style>

      <div className={`nb-root ${darkMode ? "dark" : ""}`}>
        <nav className={`nb-bar ${scrolled ? "scrolled" : ""}`}>
          <div className="nb-inner">

            {/* ── LOGO ── */}
            <div className="nb-logo">
              <div className="nb-avatar-wrap">
                <div className="nb-avatar-ring" />
                <img src={pic} className="nb-avatar" alt="Radha" />
              </div>
              <div className="nb-logo-text">
                <div className="nb-logo-name">
                  Radh<span className="accent">a</span>
                </div>
                <div className="nb-logo-sub">Portfolio</div>
              </div>
            </div>

            {/* ── DESKTOP LINKS ── */}
            <ul className="nb-links">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className={`nb-link-item ${activeSection === text ? "active" : ""}`}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="nb-link-pill" />
                  <Link
                    className={`nb-link ${activeSection === text ? "active" : ""}`}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    onSetActive={() => setActiveSection(text)}
                  >
                    {text}
                  </Link>
                  <div className="nb-dot" />
                </li>
              ))}
            </ul>

            {/* ── ACTIONS ── */}
            <div className="nb-actions">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="nb-theme-btn"
                type="button"
                aria-label="Toggle theme"
              >
                <span className="icon">
                  {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
                </span>
                <span className="nb-theme-label">{darkMode ? "Light" : "Dark"}</span>
              </button>

              <button
                className={`nb-hamburger ${menu ? "open" : ""}`}
                onClick={() => setMenu(!menu)}
                type="button"
                aria-label="Toggle menu"
              >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
            </div>
          </div>
        </nav>

        {/* ── MOBILE DRAWER ── */}
        {menu && (
          <>
            <div
              className="nb-drawer-overlay"
              onClick={() => setMenu(false)}
              aria-hidden="true"
            />
            <div className="nb-drawer" ref={menuRef}>
              <div className="nb-drawer-header">
                <span className="nb-drawer-title">Navigation</span>
                <button
                  className="nb-drawer-close"
                  onClick={() => setMenu(false)}
                  type="button"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <ul className="nb-drawer-links">
                {navItems.map(({ id, text }, idx) => (
                  <li
                    key={id}
                    className="nb-drawer-item"
                    style={{ animationDelay: `${idx * 0.06}s` }}
                  >
                    <Link
                      className={`nb-drawer-link ${activeSection === text ? "active" : ""}`}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      onSetActive={() => setActiveSection(text)}
                      onClick={() => setMenu(false)}
                    >
                      <span className="nb-drawer-num">0{id}</span>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="nb-drawer-footer">
                <p className="nb-drawer-tag">Radha · Student Portfolio</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;