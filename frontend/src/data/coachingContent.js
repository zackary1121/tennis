// ============================================================================
// COACHING CONTENT
// ----------------------------------------------------------------------------
// Two content sources:
//  1) PHASE_CONTENT  -> real, verbatim coaching per phase/hotspot with the full
//                       5-field structure. Shown in full regardless of UTR level.
//  2) getCoaching()  -> placeholder text for phases that don't have real content
//                       yet, filtered by LEVEL_BLOCKS (amount varies by level).
//
// Full 5-field order for real content.
// ============================================================================

export const FIELD_ORDER = ["whatToDo", "lookFor", "why", "mistake", "cue"];

// Which placeholder blocks show at each level (used only for phases without real content).
export const LEVEL_BLOCKS = {
  utr12: ["whatToDo", "cue"],
  utr24: ["whatToDo", "mistake", "cue"],
  utr46: ["whatToDo", "why", "mistake", "cue"],
};

// -----------------------------------------------------------------------------
// REAL CONTENT
// Frame 1 — Ready Position. Replace the placeholder strings below with the
// final verbatim copy for each of the 5 fields. Do NOT add numerical angles,
// speeds or timing values.
// -----------------------------------------------------------------------------
export const PHASE_CONTENT = {
  ready: {
    head: {
      whatToDo: "[Placeholder — WHAT TO DO for Head & Eyes]",
      lookFor: "[Placeholder — LOOK FOR for Head & Eyes]",
      why: "[Placeholder — WHY IT MATTERS for Head & Eyes]",
      mistake: "[Placeholder — COMMON MISTAKE for Head & Eyes]",
      cue: "[Placeholder — FEEL / CUE for Head & Eyes]",
    },
    racquet_hands: {
      whatToDo: "[Placeholder — WHAT TO DO for Racquet & Hands]",
      lookFor: "[Placeholder — LOOK FOR for Racquet & Hands]",
      why: "[Placeholder — WHY IT MATTERS for Racquet & Hands]",
      mistake: "[Placeholder — COMMON MISTAKE for Racquet & Hands]",
      cue: "[Placeholder — FEEL / CUE for Racquet & Hands]",
    },
    knees: {
      whatToDo: "[Placeholder — WHAT TO DO for Knees]",
      lookFor: "[Placeholder — LOOK FOR for Knees]",
      why: "[Placeholder — WHY IT MATTERS for Knees]",
      mistake: "[Placeholder — COMMON MISTAKE for Knees]",
      cue: "[Placeholder — FEEL / CUE for Knees]",
    },
    feet_balance: {
      whatToDo: "[Placeholder — WHAT TO DO for Feet & Balance]",
      lookFor: "[Placeholder — LOOK FOR for Feet & Balance]",
      why: "[Placeholder — WHY IT MATTERS for Feet & Balance]",
      mistake: "[Placeholder — COMMON MISTAKE for Feet & Balance]",
      cue: "[Placeholder — FEEL / CUE for Feet & Balance]",
    },
  },
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
