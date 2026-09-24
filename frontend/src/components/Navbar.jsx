import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: "forehand", label: "Forehand", to: "/forehand", available: true },
    { id: "backhand", label: "Backhand", available: false },
    { id: "serve", label: "Serve", available: false },
    { id: "volley", label: "Volley", available: false },
  ];

  const handleLink = (link) => {
    if (link.available) navigate(link.to);
    else toast(`${link.label} lab is coming soon`, { description: "The Forehand prototype is live now." });
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
                  active
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
                {!link.available && (
                  <span className="ml-1.5 text-[9px] font-mono uppercase tracking-wider text-muted-foreground/70">
                    soon
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <button
          data-testid="nav-launch-lab"
          onClick={() => navigate("/forehand")}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_20px_rgba(21,128,61,0.25)] transition-all hover:bg-primary/90 active:scale-[0.97]"
        >
          Launch Lab
        </button>
      </div>
    </header>
  );
};
