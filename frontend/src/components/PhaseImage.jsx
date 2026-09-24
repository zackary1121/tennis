import { ImageIcon } from "lucide-react";

/**
 * Replaceable per-phase image asset.
 * Drop a real instructional image by setting `phase.image` in src/data/forehandData.js
 * (a URL or an imported asset). When null, a labelled placeholder renders instead.
 * Each phase renders its own instance, so images can be swapped individually.
 */
export const PhaseImage = ({ phase, large = false }) => {
  if (phase.image) {
    return (
      <img
        src={phase.image}
        alt={`Forehand — ${phase.label}`}
        className="absolute inset-0 h-full w-full object-contain select-none"
        draggable={false}
      />
    );
  }

  return (
    <div
      data-testid={`phase-placeholder-${phase.id}`}
      className="absolute inset-0 flex flex-col items-center justify-center court-grid bg-[#EAF1E7] text-center"
    >
      {/* Simple biomechanical figure guide so hotspots have anatomical context */}
      {large && (
        <svg viewBox="0 0 100 160" className="absolute inset-0 h-full w-full opacity-[0.18]" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <g fill="none" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="20" r="9" />
            <line x1="50" y1="29" x2="50" y2="82" />
            <line x1="50" y1="40" x2="30" y2="60" />
            <line x1="30" y1="60" x2="22" y2="78" />
            <line x1="50" y1="40" x2="70" y2="58" />
            <line x1="70" y1="58" x2="80" y2="70" />
            <line x1="50" y1="82" x2="36" y2="120" />
            <line x1="36" y1="120" x2="34" y2="150" />
            <line x1="50" y1="82" x2="64" y2="118" />
            <line x1="64" y1="118" x2="70" y2="150" />
          </g>
        </svg>
      )}
      <div className="relative z-10 flex flex-col items-center px-4">
        <span className={`flex items-center justify-center rounded-full border-2 border-dashed border-primary/50 bg-white/70 font-display font-extrabold text-primary ${large ? "h-14 w-14 text-2xl" : "h-8 w-8 text-sm"}`}>
          {phase.num}
        </span>
        {large && (
          <>
            <ImageIcon className="mt-4 h-5 w-5 text-primary/60" />
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold">Image Placeholder</p>
            <p className="mt-1 text-xs text-muted-foreground max-w-[200px]">Replace with the “{phase.label}” frame</p>
          </>
        )}
      </div>
    </div>
  );
};
