import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, CheckCircle2, Eye, HelpCircle, AlertTriangle, Sparkles, BookmarkPlus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PhaseImage } from "@/components/PhaseImage";
import { LEVELS, PHASES, HOTSPOT_META } from "@/data/forehandData";
import { getCoaching, LEVEL_BLOCKS, resolveContent, FIELD_ORDER } from "@/data/coachingContent";
import { useLang } from "@/i18n/LanguageContext";
import { pick, HOTSPOT_LABELS_ZH, PHASE_LABELS_ZH, PHASE_SUMMARY_ZH, LEVEL_SUB_ZH } from "@/i18n/translations";

const SPEEDS = { slow: 2400, normal: 1200 };

const BLOCK_META = {
  whatToDo: { icon: CheckCircle2, tone: "text-primary", bg: "bg-accent/60 border-primary/20" },
  lookFor: { icon: Eye, tone: "text-slate-700", bg: "bg-[#F4F6F2] border-border" },
  why: { icon: HelpCircle, tone: "text-slate-700", bg: "bg-secondary border-border" },
  mistake: { icon: AlertTriangle, tone: "text-[#E11D48]", bg: "bg-[#FFF1F2] border-[#FFE4E6]" },
  cue: { icon: Sparkles, tone: "text-[#0284C7]", bg: "bg-[#F0F9FF] border-[#BAE6FD]" },
};

export default function Forehand() {
  const { lang, t } = useLang();
  const [level, setLevel] = useState("utr12");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [hotspotId, setHotspotId] = useState(PHASES[0].hotspots[0].id);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState("normal");
  const touchX = useRef(null);

  const phase = PHASES[phaseIndex];
  const activeHotspot = phase.hotspots.find((h) => h.id === hotspotId) || phase.hotspots[0];

  const phaseLabel = (p) => pick(lang, PHASE_LABELS_ZH, p.id, p.label);
  const phaseSummary = (p) => pick(lang, PHASE_SUMMARY_ZH, p.id, p.summary);
  const hotspotLabel = (id) => pick(lang, HOTSPOT_LABELS_ZH, id, HOTSPOT_META[id].label);
  const levelSub = (l) => pick(lang, LEVEL_SUB_ZH, l.key, l.sub);

  const realContent = resolveContent(phase.id, activeHotspot.id, lang);
  const coaching = realContent || getCoaching(phase.label, HOTSPOT_META[activeHotspot.id].label, level);
  const visibleBlocks = realContent ? FIELD_ORDER : LEVEL_BLOCKS[level];

  const goToPhase = useCallback((i) => {
    const next = (i + PHASES.length) % PHASES.length;
    setPhaseIndex(next);
    setHotspotId(PHASES[next].hotspots[0].id);
  }, []);

  const selectPhase = (i) => { setPlaying(false); goToPhase(i); };

  useEffect(() => {
    if (!playing) return;
    const ms = SPEEDS[speed];
    if (phaseIndex === PHASES.length - 1) {
      const timer = setTimeout(() => setPlaying(false), ms);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => goToPhase(phaseIndex + 1), ms);
    return () => clearTimeout(timer);
  }, [playing, phaseIndex, speed, goToPhase]);

  const togglePlay = () => {
    if (!playing && phaseIndex === PHASES.length - 1) goToPhase(0);
    setPlaying((p) => !p);
  };

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 50) selectPhase(phaseIndex - 1);
    else if (dx < -50) selectPhase(phaseIndex + 1);
    touchX.current = null;
  };

  const activeLevel = LEVELS.find((l) => l.key === level);

  return (
    <div className="min-h-screen bg-background" data-testid="forehand-page">
      <Navbar />

      {/* Page header */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Link to="/" data-testid="back-home" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3">
              <ArrowLeft className="h-3.5 w-3.5" /> {t("fh.back")}
            </Link>
            <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-4xl text-foreground">
              {t("fh.title1")} <span className="text-primary">{t("fh.titleAccent")}</span>
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground font-mono">{t("fh.subtitle")}</p>
          </div>

          {/* Level selector — coaching depth only, not the images */}
          <div data-testid="utr-level-selector" className="flex items-center gap-1.5 rounded-full border border-border bg-secondary p-1.5">
            {LEVELS.map((l) => (
              <button
                key={l.key}
                data-testid={`level-${l.key}`}
                onClick={() => setLevel(l.key)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${level === l.key ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="block leading-none">{l.label}</span>
                <span className={`block text-[10px] font-mono font-normal mt-0.5 ${level === l.key ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>{levelSub(l)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FILMSTRIP */}
      <div data-testid="movement-filmstrip" className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{t("fh.sequence")}</span>
            <span className="font-mono text-[11px] text-muted-foreground hidden sm:block">{t("fh.sequenceHint")}</span>
          </div>
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {PHASES.map((p, i) => {
              const on = i === phaseIndex;
              return (
                <button
                  key={p.id}
                  data-testid={`frame-${p.id}`}
                  onClick={() => selectPhase(i)}
                  className={`group relative flex-shrink-0 w-[116px] sm:w-[150px] rounded-2xl border-2 p-2 text-left transition-all ${on ? "border-primary bg-accent/50 shadow-[0_8px_24px_rgba(21,128,61,0.15)]" : "border-border bg-white hover:border-primary/40"}`}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <PhaseImage phase={p} />
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className={`font-mono text-[10px] font-bold ${on ? "text-primary" : "text-muted-foreground"}`}>0{p.num}</span>
                    <span className={`text-[11px] sm:text-xs font-semibold leading-tight truncate ${on ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>{phaseLabel(p)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 grid lg:grid-cols-12 gap-8">
        {/* LEFT — large selected frame */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-border bg-gradient-to-b from-[#F1F5EF] to-white p-3 sm:p-5 shadow-[0_16px_50px_rgba(15,56,34,0.08)]">
            <div className="text-center pb-3">
              <span className="font-mono text-[11px] text-primary font-semibold">{t("fh.frame", { n: phase.num })}</span>
              <div className="font-display text-lg font-extrabold text-foreground leading-tight">{phaseLabel(phase)}</div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto w-full max-w-md"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <PhaseImage phase={phase} large />

                  {phase.hotspots.map((h) => {
                    const isActive = h.id === hotspotId;
                    const label = hotspotLabel(h.id);
                    return (
                      <button
                        key={h.id}
                        data-testid={`hotspot-${h.id}`}
                        onClick={() => setHotspotId(h.id)}
                        aria-label={label}
                        style={{ top: h.pos.top, left: h.pos.left }}
                        className="group absolute -translate-x-1/2 -translate-y-1/2 z-20 outline-none"
                      >
                        <span className={`absolute left-1/2 -translate-x-1/2 rounded-full ${isActive ? "bg-primary/40 h-6 w-6 -top-1" : "bg-primary/25 h-4 w-4 top-0"} animate-hotspot-ping`} />
                        <span className={`relative block rounded-full border-2 border-white transition-all duration-200 ${isActive ? "h-5 w-5 bg-primary shadow-[0_0_0_4px_rgba(21,128,61,0.3)]" : "h-4 w-4 bg-primary/90 shadow-md group-hover:scale-125 group-hover:bg-primary"}`} />
                        <span className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg transition-opacity duration-150 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-center text-sm text-muted-foreground max-w-md mx-auto">{phaseSummary(phase)}</p>

            {/* Playback controls */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <button data-testid="prev-frame" onClick={() => selectPhase(phaseIndex - 1)} className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 active:scale-95">
                  <ChevronLeft className="h-4 w-4" /> {t("fh.prev")}
                </button>
                <button data-testid="play-sequence" onClick={togglePlay} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_18px_rgba(21,128,61,0.25)] transition-all hover:bg-primary/90 active:scale-95">
                  {playing ? <><Pause className="h-4 w-4" /> {t("fh.pause")}</> : <><Play className="h-4 w-4" /> {t("fh.play")}</>}
                </button>
                <button data-testid="next-frame" onClick={() => selectPhase(phaseIndex + 1)} className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 active:scale-95">
                  {t("fh.next")} <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div data-testid="speed-selector" className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
                {["slow", "normal"].map((s) => (
                  <button
                    key={s}
                    data-testid={`speed-${s}`}
                    onClick={() => setSpeed(s)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${speed === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {t(`speed.${s}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus-area chips */}
            <div className="mt-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{t("fh.focus")}</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {phase.hotspots.map((h) => (
                  <button
                    key={h.id}
                    data-testid={`chip-${h.id}`}
                    onClick={() => setHotspotId(h.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${h.id === hotspotId ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
                  >
                    {hotspotLabel(h.id)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — coaching panel */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 rounded-3xl border border-border bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="border-b border-border bg-secondary/50 p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">{phaseLabel(phase)}</span>
              <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground">{hotspotLabel(activeHotspot.id)}</h2>
            </div>

            <div className="p-6 space-y-3 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${phase.id}-${activeHotspot.id}-${level}-${lang}`}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {visibleBlocks.map((key) => {
                    const b = BLOCK_META[key];
                    return (
                      <div key={key} data-testid={`detail-${key}`} className={`rounded-2xl border p-4 ${b.bg}`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <b.icon className={`h-4 w-4 ${b.tone}`} />
                          <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${b.tone}`}>{t(`block.${key}`)}</span>
                        </div>
                        <p className="text-sm text-foreground/85 leading-relaxed">{coaching[key]}</p>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <button
                data-testid="save-drill-btn"
                onClick={() => toast.success(t("fh.savedToast"), { description: `${phaseLabel(phase)} · ${hotspotLabel(activeHotspot.id)}` })}
                className="mt-1 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary active:scale-[0.97]"
              >
                <BookmarkPlus className="h-4 w-4" /> {t("fh.save")}
              </button>
            </div>

            <div className="border-t border-border bg-secondary/40 px-5 py-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted-foreground">{t("fh.coachingDepth")}</span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-primary">
                {activeLevel.label} <ChevronRight className="h-3 w-3" /> {levelSub(activeLevel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
