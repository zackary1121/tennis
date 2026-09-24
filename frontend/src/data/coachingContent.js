// ============================================================================
// COACHING CONTENT (PLACEHOLDERS)
// ----------------------------------------------------------------------------
// Short placeholders for now. Final technical content will be provided later.
// The UTR level controls the AMOUNT and COMPLEXITY of information shown — it
// does NOT change the reference movement images.
//
// To drop in final content later, replace getCoaching() with a lookup into a
// map keyed by `${phaseId}:${hotspotId}:${level}`.
// ============================================================================

// Which detail blocks are shown at each level (amount of information).
export const LEVEL_BLOCKS = {
  utr12: ["whatToDo", "cue"],
  utr24: ["whatToDo", "mistake", "cue"],
  utr46: ["whatToDo", "why", "mistake", "cue"],
};

export function getCoaching(phaseLabel, partLabel, level) {
  const part = partLabel.toLowerCase();
  const advanced = level === "utr46";
  return {
    whatToDo: `Placeholder — what to do with the ${part} during ${phaseLabel}.`,
    why: `Placeholder — why the ${part} matters in this phase${advanced ? ", including advanced timing detail" : ""}.`,
    mistake: `Placeholder — common ${part} mistake to avoid here.`,
    cue: `Placeholder cue for the ${part}.`,
  };
}
