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

  load: {
    left_arm: {
      whatToDo: "Release the racquet with the left hand while keeping the left arm active and extended away from the body.",
      lookFor: "The left hand is no longer holding the racquet. The left arm remains visible in front of or toward the side of the body rather than collapsing immediately against the torso.",
      why: "The non-hitting arm helps organize spacing and balance as the preparation transitions into the forward swing.",
      mistake: "Dropping the left arm immediately after releasing the racquet or pulling it tightly into the body too early.",
      cue: "“Release — but keep the left arm active.”",
    },
    racquet_head_face: {
      whatToDo: "Complete the preparation with the racquet positioned behind the hitting side and the racquet face oriented downward.",
      lookFor: "The racquet is clearly behind the player rather than already moving toward the contact point. The strings / racquet face should show a downward orientation during this preparation stage.",
      why: "This creates a clear transition between preparation and the forward acceleration that follows.",
      mistake: "Opening the racquet face too early, or beginning the forward swing before the preparation has been completed.",
      cue: "“Set the racquet — then go.”",
    },
    hips_torso: {
      whatToDo: "Maintain the body turn created during the Unit Turn while preparing to transition into the forward swing.",
      lookFor: "The torso remains turned rather than prematurely opening completely toward the net.",
      why: "Holding the preparation briefly allows the body and racquet to transition together into the forward swing.",
      mistake: "Opening the torso too early while the racquet is still completing its preparation.",
      cue: "“Stay loaded.”",
    },
    outside_leg: {
      whatToDo: "Establish a stable load through the outside leg while maintaining an athletic knee bend.",
      lookFor: "The outside leg provides a stable base underneath the turned body rather than the player standing upright or falling away from the ball.",
      why: "A stable base supports balance and prepares the body for the movement into the forward swing.",
      mistake: "Remaining upright with little lower-body engagement or allowing the body to drift away from the hitting position.",
      cue: "“Load and stay balanced.”",
    },
    spacing_feet: {
      whatToDo: "Complete the foot adjustment so there is enough room between the body and the expected contact point.",
      lookFor: "The player is positioned at a comfortable hitting distance rather than crowded by the incoming ball.",
      why: "Good spacing gives the hitting arm and racquet room to accelerate through the next phase.",
      mistake: "Moving too close to the ball and leaving insufficient room for the forward swing.",
      cue: "“Create room to swing.”",
    },
  },

  forward_swing: {
    left_hand: {
      whatToDo: "Allow the left hand to move toward the left side of the body as the forward swing begins.",
      lookFor: "The left hand is around the left side of the waist, with the palm generally facing upward. It is no longer extended across the front of the body.",
      why: "The movement of the non-hitting arm accompanies the body’s transition from preparation into forward rotation.",
      mistake: "Leaving the left arm extended across the body for too long or pulling it violently behind the torso.",
      cue: "“Left hand comes home.”",
    },
    hips: {
      whatToDo: "Begin releasing the hips from the loaded position as the racquet starts travelling forward.",
      lookFor: "The hips are beginning to rotate toward the court rather than remaining completely locked in the loaded position.",
      why: "This connects the lower-body preparation with the forward movement of the stroke.",
      mistake: "Starting the forward swing using only the hitting arm while the hips remain passive.",
      cue: "“Start the release.”",
    },
    torso: {
      whatToDo: "Allow the torso to rotate forward with the swing while maintaining balance and control.",
      lookFor: "The chest is beginning to rotate forward from the turned position, but has not yet reached the final follow-through position.",
      why: "The torso helps connect the loaded body position to the forward movement of the hitting arm and racquet.",
      mistake: "Swinging the arm independently while the torso remains frozen.",
      cue: "“Body and arm move together.”",
    },
    hitting_arm: {
      whatToDo: "Move the hitting arm forward toward the contact zone while maintaining enough space between the arm and the body.",
      lookFor: "The hitting arm is travelling forward but has not yet reached the contact position.",
      why: "Maintaining space allows the racquet to travel freely toward the ball.",
      mistake: "Allowing the elbow and hitting arm to become crowded too close to the torso.",
      cue: "“Keep your hitting space.”",
    },
    racquet_head: {
      whatToDo: "Accelerate the racquet forward from the preparation position toward the incoming ball.",
      lookFor: "The racquet has clearly moved forward from its Frame 3 position, but there is still visible space between the racquet and the ball/contact point.",
      why: "This frame should show the transition from preparation into acceleration without confusing it with Contact.",
      mistake: "Showing the racquet already at the ball, which would make this a Contact frame rather than a Forward Swing frame.",
      cue: "“Forward to the ball.”",
    },
    outside_leg_balance: {
      whatToDo: "Maintain a stable base as the body begins releasing from the loaded position.",
      lookFor: "The player remains balanced while the lower body supports the forward rotation.",
      why: "The forward swing should develop from a controlled base rather than from falling toward or away from the ball.",
      mistake: "Losing balance as soon as the racquet begins moving forward.",
      cue: "“Release from a stable base.”",
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
