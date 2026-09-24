import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, Activity, AlertTriangle, Target, BookmarkPlus, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { LEVELS, PHASES, HOTSPOTS, PLAYER_IMAGE } from "@/data/forehandData";

const TABS = [
  { key: "technique", label: "Technique", icon: Activity },
  { key: "mistakes", label: "Common Mistakes", icon: AlertTriangle },
  { key: "drills", label: "Practice Drill", icon: Target },
];

export default function Forehand() {
  const [level, setLevel] = useState("utr12");
  const [activeId, setActiveId] = useState("hip");
  const [phaseId, setPhaseId] = useState("contact");
  const [tab, setTab] = useState("technique");

  const active = HOTSPOTS.find((h) => h.id === activeId);
  const phase = PHASES.find((p) => p.id === phaseId);
  const content = active.levels[level];
  const focusSet = new Set(phase.focus);

  return (
    <div className="min-h-screen bg-background" data-testid="forehand-page">
      <Navbar />

      {/* Page header */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Link to="/" data-testid="back-home" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3">
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </Link>
            <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-4xl text-foreground">
              Forehand <span className="text-primary">Studio</span>
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground font-mono">Interactive kinematic analysis · Modern semi-western drive</p>
          </div>

          {/* Level selector */}
          <div data-testid="utr-level-selector" className="flex items-center gap-1.5 rounded-full border border-border bg-secondary p-1.5">
            {LEVELS.map((l) => (
              <button
                key={l.key}
                data-testid={`level-${l.key}`}
                onClick={() => setLevel(l.key)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                  level === l.key ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="block leading-none">{l.label}</span>
                <span className={`block text-[10px] font-mono font-normal mt-0.5 ${level === l.key ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>{l.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 grid lg:grid-cols-12 gap-8">
        {/* LEFT — player stage */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-border bg-gradient-to-b from-[#F1F5EF] to-white p-3 sm:p-5 shadow-[0_16px_50px_rgba(15,56,34,0.08)]">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl bg-[#E9EFE6] court-grid">
                <img
                  src={PLAYER_IMAGE}
                  alt="Tennis player performing a forehand"
                  className="w-full h-auto object-contain select-none"
                  draggable={false}
                />

                {/* Hotspots */}
                {HOTSPOTS.map((h) => {
                  const isActive = h.id === activeId;
                  const isFocus = focusSet.has(h.id);
                  return (
                    <button
                      key={h.id}
                      data-testid={`hotspot-${h.id}`}
                      onClick={() => setActiveId(h.id)}
                      aria-label={h.label}
                      style={{ top: h.pos.top, left: h.pos.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 outline-none"
                    >
                      {(isActive || isFocus) && (
                        <span className={`absolute inset-0 rounded-full ${isActive ? "bg-primary/40" : "bg-primary/25"} animate-hotspot-ping`} />
                      )}
                      <span
                        className={`relative flex items-center justify-center rounded-full font-mono text-xs font-bold border-2 transition-all duration-200 ${
                          isActive
                            ? "h-8 w-8 bg-primary text-white border-white shadow-[0_0_0_5px_rgba(21,128,61,0.25)] scale-110"
                            : isFocus
                            ? "h-7 w-7 bg-white text-primary border-primary shadow-md hover:scale-125"
                            : "h-7 w-7 bg-white/95 text-foreground border-primary/70 shadow-sm hover:scale-125 hover:border-primary"
                        }`}
                      >
                        {h.num}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active part chip */}
              <div className="mt-3 flex items-center justify-center gap-2 text-center">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Selected</span>
                <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">{active.num}. {active.label}</span>
              </div>
            </div>
          </div>

          {/* Phase cue banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={phaseId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-5 rounded-2xl border border-primary/20 bg-accent/60 p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">Phase · {phase.label}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{phase.timing}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{phase.cue}</p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline */}
          <div data-testid="movement-timeline" className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Movement Timeline</span>
              <span className="font-mono text-[11px] text-muted-foreground">{PHASES.findIndex((p) => p.id === phaseId) + 1} / {PHASES.length}</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {PHASES.map((p, i) => {
                const isOn = p.id === phaseId;
                return (
                  <button
                    key={p.id}
                    data-testid={`phase-${p.id}`}
                    onClick={() => setPhaseId(p.id)}
                    className={`flex-shrink-0 rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                      isOn ? "border-primary bg-primary text-primary-foreground shadow-[0_6px_18px_rgba(21,128,61,0.25)]" : "border-border bg-white text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span className={`block font-mono text-[10px] ${isOn ? "text-primary-foreground/80" : "text-muted-foreground"}`}>0{i + 1}</span>
                    <span className="block text-xs font-semibold whitespace-nowrap mt-0.5">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT — telemetry panel */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 rounded-3xl border border-border bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Header */}
            <div className="border-b border-border bg-secondary/50 p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">{active.subtitle}</span>
              <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground">{active.label}</h2>
            </div>

            {/* Tabs */}
            <div data-testid="technique-tabs" className="flex border-b border-border">
              {TABS.map((t) => {
                const on = tab === t.key;
                return (
                  <button
                    key={t.key}
                    data-testid={`tab-${t.key}`}
                    onClick={() => setTab(t.key)}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-3.5 text-xs sm:text-sm font-semibold transition-colors relative ${
                      on ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <t.icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{t.label}</span>
                    <span className="sm:hidden">{t.label.split(" ")[0]}</span>
                    {on && <motion.span layoutId="tab-underline" className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />}
                  </button>
                );
              })}
            </div>

            {/* Body */}
            <div className="p-6 min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeId}-${level}-${tab}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  {tab === "technique" && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="h-4 w-4 text-primary" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">Biomechanical Role</span>
                      </div>
                      <p className="text-base text-foreground/85 leading-relaxed">{content.role}</p>
                    </div>
                  )}

                  {tab === "mistakes" && (
                    <div className="rounded-2xl border border-[#FFE4E6] bg-[#FFF1F2] p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-4 w-4 text-[#E11D48]" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#E11D48] font-semibold">Common Mistake</span>
                      </div>
                      <p className="text-base text-foreground/85 leading-relaxed">{content.mistake}</p>
                    </div>
                  )}

                  {tab === "drills" && (
                    <div>
                      <div className="rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-4 w-4 text-[#0284C7]" />
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#0284C7] font-semibold">Targeted Drill</span>
                        </div>
                        <p className="text-base text-foreground/85 leading-relaxed">{content.drill}</p>
                      </div>
                      <button
                        data-testid="save-drill-btn"
                        onClick={() => toast.success("Drill saved", { description: `${active.label} · ${LEVELS.find((l) => l.key === level).label}` })}
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary active:scale-[0.97]"
                      >
                        <BookmarkPlus className="h-4 w-4" /> Save this drill
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hotspot quick-nav */}
            <div className="border-t border-border p-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Jump to body area</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    data-testid={`chip-${h.id}`}
                    onClick={() => setActiveId(h.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                      h.id === activeId ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono">{h.num}</span> {h.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border bg-secondary/40 px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted-foreground">Coaching depth</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-primary">
                {LEVELS.find((l) => l.key === level).label} <ChevronRight className="h-3 w-3" /> {LEVELS.find((l) => l.key === level).sub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
