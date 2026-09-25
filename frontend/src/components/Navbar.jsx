import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLang } from "@/i18n/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";

const LanguageToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <div data-testid="language-toggle" className="flex items-center rounded-full border border-border bg-secondary p-0.5">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          data-testid={`lang-${l.code}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all ${
            lang === l.code ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLang();

  const links = [
    { id: "forehand", to: "/forehand", available: true },
    { id: "backhand", available: false },
    { id: "serve", available: false },
    { id: "volley", available: false },
  ];

  const handleLink = (link) => {
    if (link.available) navigate(link.to);
    else toast(t("comingSoonTitle", { name: t(`nav.${link.id}`) }), { description: t("comingSoonDescNav") });
  };

  return (
    <header
      data-testid="navbar"
      className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-border/60"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" data-testid="brand-logo" className="flex items-center gap-2.5 group">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 animate-hotspot-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(21,128,61,0.6)]" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
            Kinetic<span className="text-primary">Court</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = link.available && location.pathname === link.to;
            return (
              <button
                key={link.id}
                data-testid={`nav-${link.id}`}
                onClick={() => handleLink(link)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active ? "text-primary bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {t(`nav.${link.id}`)}
                {!link.available && (
                  <span className="ml-1.5 text-[9px] font-mono uppercase tracking-wider text-muted-foreground/70">
                    {t("nav.soon")}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <button
            data-testid="nav-launch-lab"
            onClick={() => navigate("/forehand")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 sm:px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_20px_rgba(21,128,61,0.25)] transition-all hover:bg-primary/90 active:scale-[0.97]"
          >
            {t("nav.launchLab")}
          </button>
        </div>
      </div>
    </header>
  );
};
