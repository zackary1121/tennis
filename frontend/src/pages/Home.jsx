import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Activity, Target, Layers, Crosshair } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES, UTR_TIERS, PLAYER_IMAGE } from "@/data/forehandData";

const stat = [
  { icon: Layers, value: "7", label: "Movement Phases" },
  { icon: Crosshair, value: "9", label: "Biomechanical Hotspots" },
  { icon: Activity, value: "1–6", label: "UTR Progression" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  const navigate = useNavigate();
  const goCategory = (c) => {
    if (c.available) navigate("/forehand");
    else toast(`${c.title} lab is coming soon`, { description: "Explore the Forehand prototype in the meantime." });
  };

  return (
    <div className="min-h-screen bg-background" data-testid="home-page">
      <Navbar />

      {/* HERO */}
      <section data-testid="hero-section" className="relative overflow-hidden">
        <div className="absolute inset-0 court-grid opacity-70" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.p
                initial="hidden" animate="show" variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5"
              >
                Interactive Tennis Biomechanics
              </motion.p>
              <motion.h1
                initial="hidden" animate="show" custom={1} variants={fadeUp}
                className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05] text-balance"
              >
                Master Your <span className="text-primary">Tennis Technique</span>
              </motion.h1>
              <motion.p
                initial="hidden" animate="show" custom={2} variants={fadeUp}
                className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Explore every movement. Understand every detail.
              </motion.p>

              <motion.div
                initial="hidden" animate="show" custom={3} variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <button
                  data-testid="explore-techniques-btn"
                  onClick={() => navigate("/forehand")}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(21,128,61,0.3)] transition-all hover:bg-primary/90 active:scale-[0.97]"
                >
                  Explore Techniques
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
                >
                  View Disciplines
                </button>
              </motion.div>

              <motion.div
                initial="hidden" animate="show" custom={4} variants={fadeUp}
                className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
              >
                {stat.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-white/70 px-4 py-4">
                    <s.icon className="h-4 w-4 text-primary mb-2" />
                    <div className="font-mono text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl border border-border bg-gradient-to-b from-[#F4F6F2] to-white p-4 shadow-[0_20px_60px_rgba(15,56,34,0.1)]">
                <div className="relative overflow-hidden rounded-2xl bg-[#EEF2EC]">
                  <img
                    src={PLAYER_IMAGE}
                    alt="Tennis player performing a forehand"
                    className="w-full h-[420px] object-contain object-bottom"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-primary backdrop-blur">
                    Contact • 112 km/h
                  </div>
                  <div className="absolute right-4 bottom-4 rounded-full border border-primary/30 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-primary backdrop-blur">
                    Unit Turn • 92°
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" data-testid="technique-categories" className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">Core Disciplines</p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-foreground">Choose a stroke to deconstruct</h2>
          <p className="mt-3 text-base text-muted-foreground">Each stroke is broken into biomechanically verified motion phases with interactive hotspots.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.button
              key={c.id}
              data-testid={`category-${c.id}`}
              onClick={() => goCategory(c)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group text-left rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(21,128,61,0.1)] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.available ? "Available" : "Coming soon"}
                </span>
                <span className={`h-2 w-2 rounded-full ${c.available ? "bg-primary" : "bg-border"}`} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-primary font-medium">{c.tag}</p>
              <div className="mt-6 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span>{c.phases} phases</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{c.hotspots} hotspots</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {c.available ? "Open lab" : "Notify me"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* UTR LEVELS */}
      <section data-testid="utr-level-section" className="bg-[#0F3822] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#84CC16] font-semibold mb-3">Calibrated by UTR</p>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">Coaching tuned to your level</h2>
            <p className="mt-3 text-base text-white/70">Every hotspot cue adapts from fundamental stability to high-rpm topspin mechanics.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {UTR_TIERS.map((t, i) => (
              <motion.div
                key={t.tier}
                data-testid={`utr-tier-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl font-extrabold text-[#84CC16]">{t.tier}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">{t.badge}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t.focus}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section data-testid="cta-banner-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center">
        <Target className="mx-auto h-8 w-8 text-primary mb-6" />
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto text-balance">
          Step onto the biomechanics court
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Click through the player's body and stroke phases to see exactly how a modern forehand works.
        </p>
        <button
          data-testid="enter-lab-btn"
          onClick={() => navigate("/forehand")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(21,128,61,0.3)] transition-all hover:bg-primary/90 active:scale-[0.97]"
        >
          Enter Forehand Lab
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display text-lg font-extrabold text-foreground">Kinetic<span className="text-primary">Court</span></span>
          <p className="font-mono text-xs text-muted-foreground">Interactive tennis technique · Beginner to UTR 6</p>
        </div>
      </footer>
    </div>
  );
}
