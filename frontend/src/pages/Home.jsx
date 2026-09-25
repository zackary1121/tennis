import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Activity, Target, Layers, Crosshair } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CATEGORIES, UTR_TIERS, PLAYER_IMAGE } from "@/data/forehandData";
import { useLang } from "@/i18n/LanguageContext";
import { pick, CATEGORY_ZH, TIER_ZH } from "@/i18n/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  const navigate = useNavigate();
  const { lang, t } = useLang();

  const stats = [
    { icon: Layers, value: "7", label: t("stat.phases") },
    { icon: Crosshair, value: "9", label: t("stat.hotspots") },
    { icon: Activity, value: "1–6", label: t("stat.progression") },
  ];

  const goCategory = (c) => {
    if (c.available) navigate("/forehand");
    else toast(t("comingSoonTitle", { name: pick(lang, null, c.id, c.title) || c.title }), { description: t("comingSoonDescHome") });
  };

  const catTitle = (c) => (lang !== "en" && CATEGORY_ZH[c.id] ? CATEGORY_ZH[c.id].title : c.title);
  const catTag = (c) => (lang !== "en" && CATEGORY_ZH[c.id] ? CATEGORY_ZH[c.id].tag : c.tag);

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
              <motion.p initial="hidden" animate="show" variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5">
                {t("home.kicker")}
              </motion.p>
              <motion.h1 initial="hidden" animate="show" custom={1} variants={fadeUp}
                className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05] text-balance">
                {t("home.title1")} <span className="text-primary">{t("home.titleAccent")}</span>
              </motion.h1>
              <motion.p initial="hidden" animate="show" custom={2} variants={fadeUp}
                className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t("home.subtitle")}
              </motion.p>

              <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  data-testid="explore-techniques-btn"
                  onClick={() => navigate("/forehand")}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(21,128,61,0.3)] transition-all hover:bg-primary/90 active:scale-[0.97]"
                >
                  {t("home.explore")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
                >
                  {t("home.viewDisciplines")}
                </button>
              </motion.div>

              <motion.div initial="hidden" animate="show" custom={4} variants={fadeUp}
                className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-white/70 px-4 py-4">
                    <s.icon className="h-4 w-4 text-primary mb-2" />
                    <div className="font-mono text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
              <div className="relative rounded-3xl border border-border bg-gradient-to-b from-[#F4F6F2] to-white p-4 shadow-[0_20px_60px_rgba(15,56,34,0.1)]">
                <div className="relative overflow-hidden rounded-2xl bg-[#EEF2EC]">
                  <img src={PLAYER_IMAGE} alt="Tennis player performing a forehand" className="w-full h-[420px] object-contain object-bottom" />
                  <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-primary backdrop-blur">
                    {t("heroTag.contact")}
                  </div>
                  <div className="absolute right-4 bottom-4 rounded-full border border-primary/30 bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-primary backdrop-blur">
                    {t("heroTag.unitTurn")}
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
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{t("cat.kicker")}</p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-foreground">{t("cat.title")}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t("cat.subtitle")}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.button
              key={c.id}
              data-testid={`category-${c.id}`}
              onClick={() => goCategory(c)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group text-left rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(21,128,61,0.1)] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.available ? t("cat.available") : t("cat.comingSoon")}
                </span>
                <span className={`h-2 w-2 rounded-full ${c.available ? "bg-primary" : "bg-border"}`} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{catTitle(c)}</h3>
              <p className="mt-1 text-sm text-primary font-medium">{catTag(c)}</p>
              <div className="mt-6 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span>{t("cat.phases", { n: c.phases })}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{t("cat.hotspots", { n: c.hotspots })}</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {c.available ? t("cat.openLab") : t("cat.notifyMe")}
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
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#84CC16] font-semibold mb-3">{t("utr.kicker")}</p>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">{t("utr.title")}</h2>
            <p className="mt-3 text-base text-white/70">{t("utr.subtitle")}</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {UTR_TIERS.map((tier, i) => {
              const zh = TIER_ZH[i];
              const badge = lang !== "en" && zh ? zh.badge : tier.badge;
              const focus = lang !== "en" && zh ? zh.focus : tier.focus;
              const description = lang !== "en" && zh ? zh.description : tier.description;
              return (
                <motion.div
                  key={tier.tier}
                  data-testid={`utr-tier-${i}`}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:bg-white/[0.07]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-2xl font-extrabold text-[#84CC16]">{tier.tier}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">{badge}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{focus}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section data-testid="cta-banner-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center">
        <Target className="mx-auto h-8 w-8 text-primary mb-6" />
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto text-balance">
          {t("cta.title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">{t("cta.subtitle")}</p>
        <button
          data-testid="enter-lab-btn"
          onClick={() => navigate("/forehand")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(21,128,61,0.3)] transition-all hover:bg-primary/90 active:scale-[0.97]"
        >
          {t("cta.button")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display text-lg font-extrabold text-foreground">Kinetic<span className="text-primary">Court</span></span>
          <p className="font-mono text-xs text-muted-foreground">{t("footer.tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
