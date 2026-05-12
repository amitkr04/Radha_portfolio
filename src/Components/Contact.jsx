import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

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

const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "yourname@email.com",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    border: "border-blue-200 dark:border-blue-800/40",
    color: "from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Delhi, India",
    iconBg: "bg-rose-100 dark:bg-rose-900/40",
    border: "border-rose-200 dark:border-rose-800/40",
    color: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/20",
  },
  {
    icon: "💼",
    label: "Open To",
    value: "Internships & Roles",
    iconBg: "bg-violet-100 dark:bg-violet-900/40",
    border: "border-violet-200 dark:border-violet-800/40",
    color: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/20",
  },
];

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();
  const heroRef = useRef(null);
  const heroIn = useInView(heroRef, 0.1);
  const [sending, setSending] = useState(false);

  const sendEmail = () => {
    setSending(true);
    emailjs
      .sendForm(
        "service_t17bcpg",
        "template_xq95d8i",
        form.current,
        "7FPCAvyXXGUL2KREG"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          setSending(false);
          toast.success("Message sent successfully! 🎉");
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  const onSubmit = () => sendEmail();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .con-root { font-family: 'Outfit', sans-serif; }

        .con-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0 80px;
          background: #fff;
        }
        .dark .con-section { background: #04060f; }

        .con-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        .con-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
        .con-blob-1 {
          width: 400px; height: 400px;
          top: -80px; right: -60px;
          background: radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%);
          animation: conBlobA 10s ease-in-out infinite alternate;
        }
        .con-blob-2 {
          width: 280px; height: 280px;
          bottom: -50px; left: -40px;
          background: radial-gradient(circle, rgba(59,130,246,0.09), transparent 70%);
          animation: conBlobA 13s ease-in-out infinite alternate-reverse;
        }
        @keyframes conBlobA {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(20px,28px) scale(1.08); }
        }

        .con-serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .con-ribbon {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
          background-size: 200% 100%;
          animation: conRibbon 4s linear infinite;
        }
        @keyframes conRibbon {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .con-info-card {
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
        }
        .con-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(139,92,246,0.1);
        }

        /* Form field focus glow */
        .con-input {
          width: 100%;
          padding: 11px 14px;
          border-radius: 12px;
          border: 1.5px solid;
          border-color: #e2e8f0;
          background: #fff;
          color: #0f172a;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .dark .con-input {
          border-color: rgba(139,92,246,0.2);
          background: rgba(139,92,246,0.05);
          color: #f1f5f9;
        }
        .con-input::placeholder { color: #94a3b8; }
        .con-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139,92,246,0.12);
        }
        .con-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
        }

        .con-textarea {
          min-height: 110px;
          resize: vertical;
        }

        .con-submit {
          width: 100%;
          padding: 12px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.04em;
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 20px rgba(139,92,246,0.3);
        }
        .con-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(139,92,246,0.4);
        }
        .con-submit:active:not(:disabled) { transform: scale(0.98); }
        .con-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        @keyframes badgePulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.65); }
        }

        @keyframes spinDot {
          to { transform: rotate(360deg); }
        }
        .spin { animation: spinDot 0.8s linear infinite; display: inline-block; }
      `}</style>

      <div className="con-root">
        <section name="Contact" className="con-section">
          <div className="con-ribbon" />
          <div className="con-grid-bg" />
          <div className="con-blob con-blob-1" />
          <div className="con-blob con-blob-2" />

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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/40 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 text-xs font-semibold tracking-widest uppercase">
                <span
                  className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0"
                  style={{ animation: "badgePulse 1.8s ease-in-out infinite" }}
                />
                Get In Touch
              </div>

              <h1 className="con-serif text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">
                Let's{" "}
                <span className="text-violet-500 relative">
                  Connect
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
                </span>
              </h1>

              <div className="w-14 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />

              <p className="max-w-xl text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Have a project, opportunity, or just want to say hello? Drop a message and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* ── CONTACT INFO CARDS ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {CONTACT_INFO.map((info, i) => (
                <AnimBlock key={info.label} delay={i * 90}>
                  <div className={`con-info-card flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br ${info.color} ${info.border}`}>
                    <div className={`w-11 h-11 rounded-xl ${info.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-0.5">{info.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{info.value}</p>
                    </div>
                  </div>
                </AnimBlock>
              ))}
            </div>

            {/* ── FORM SECTION HEADING ── */}
            <AnimBlock delay={0}>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent dark:from-violet-800/40" />
                <h2 className="con-serif text-2xl font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                  Send a Message
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-violet-200 to-transparent dark:from-violet-800/40" />
              </div>
            </AnimBlock>

            {/* ── FORM CARD ── */}
            <AnimBlock delay={80}>
              <div className="max-w-2xl mx-auto">
                <div className="rounded-3xl border border-violet-100 dark:border-violet-900/30 bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-blue-950/20 p-8 md:p-10">

                  <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                          Full Name
                        </label>
                        <input
                          {...register("name", { required: "Full name is required" })}
                          className={`con-input${errors.name ? " error" : ""}`}
                          type="text"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs flex items-center gap-1">
                            ⚠ {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                          Email Address
                        </label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          className={`con-input${errors.email ? " error" : ""}`}
                          type="email"
                          placeholder="you@email.com"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs flex items-center gap-1">
                            ⚠ {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                        Message
                      </label>
                      <textarea
                        {...register("message", { required: "Message is required" })}
                        className={`con-input con-textarea${errors.message ? " error" : ""}`}
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs flex items-center gap-1">
                          ⚠ {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="con-submit" disabled={sending}>
                      {sending ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="spin">⟳</span> Sending…
                        </span>
                      ) : (
                        "Send Message ✦"
                      )}
                    </button>

                  </form>

                  {/* Footer note */}
                  <p className="text-center text-xs text-slate-400 mt-5">
                    I typically respond within 24 hours 📬
                  </p>
                </div>
              </div>
            </AnimBlock>

          </div>
        </section>

        <hr className="border-none m-0 relative z-10" style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }} />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
        transition={Slide}
      />
    </>
  );
}

export default Contact;