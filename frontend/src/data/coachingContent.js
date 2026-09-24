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

  unit_turn: {
    left_hand: {
      whatToDo: "Keep the left hand on the racquet during the initial turn and use both arms to help organize the preparation.",
      lookFor: "Both hands are still involved with the racquet rather than the left hand releasing too early.",
      why: "Keeping the left hand involved helps the upper body turn as one coordinated unit instead of starting with an isolated hitting-arm movement.",
      mistake: "Releasing the left hand immediately and pulling the racquet back using only the right arm.",
      cue: "“Turn together.”",
    },
    shoulders: {
      whatToDo: "Turn the shoulders to the right as you recognize the ball coming to the forehand side.",
      lookFor: "The chest begins turning away from the net while the head remains oriented toward the incoming ball.",
      why: "The shoulder turn creates the preparation for the forward swing without relying on the hitting arm alone.",
      mistake: "Keeping the chest facing the net while moving only the racquet backward.",
      cue: "“Turn the shoulders.”",
    },
    hips_torso: {
      whatToDo: "Allow the torso and hips to begin turning with the shoulders as the body organizes for the forehand.",
      lookFor: "The body is no longer completely square to the net and has begun turning toward the forehand side.",
      why: "This turn prepares the body for the loading phase that follows.",
      mistake: "Moving only the arms and racquet while the body remains facing forward.",
      cue: "“Turn the body, not just the racquet.”",
    },
    racquet: {
      whatToDo: "Let the racquet move with the body turn while both hands are still involved in the preparation.",
      lookFor: "The racquet has moved away from the Ready Position but has not yet reached the final Load position.",
      why: "Unit Turn is the beginning of preparation and should flow naturally into the Load phase.",
      mistake: "Pulling the racquet too far behind the body immediately and skipping the gradual preparation sequence.",
      cue: "“Turn first — load next.”",
    },
    feet: {
      whatToDo: "Begin adjusting the feet as the body turns to establish appropriate spacing for the incoming ball.",
      lookFor: "The feet respond to the incoming ball rather than remaining fixed in the original Ready Position.",
      why: "The body turn needs to connect with movement so the player can establish appropriate spacing before the forward swing.",
      mistake: "Turning the upper body while leaving the feet completely planted.",
      cue: "“Turn and adjust.”",
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
