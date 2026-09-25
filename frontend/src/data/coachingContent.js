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

  contact: {
    contact_point: {
      whatToDo: "Meet the ball in front of the body with enough space to swing freely through the contact zone.",
      lookFor: "The ball is clearly in front of the hitting side rather than beside or behind the body.",
      why: "Contact in front allows the racquet to meet the ball after the forward swing has developed naturally.",
      mistake: "Letting the ball travel too close to the body or too far behind before making contact.",
      cue: "“Meet it in front.”",
    },
    racquet_face: {
      whatToDo: "Present the racquet face appropriately to the ball through the contact area.",
      lookFor: "At contact, the racquet face is no longer in the clearly downward preparation orientation shown during Frame 3.",
      why: "Racquet-face orientation strongly influences the direction and trajectory of the outgoing ball.",
      mistake: "Opening the racquet face excessively through contact and unintentionally sending the ball too high or long.",
      cue: "“Present the strings to the ball.”",
    },
    hitting_arm_spacing: {
      whatToDo: "Maintain comfortable separation between the hitting arm and torso as the racquet reaches the ball.",
      lookFor: "The arm has room to move through contact without becoming trapped against the body.",
      why: "Good spacing allows the swing path to continue freely through the hitting zone.",
      mistake: "Getting too close to the ball and creating a cramped contact position.",
      cue: "“Give yourself room.”",
    },
    wrist: {
      whatToDo: "Maintain a controlled wrist position through contact without deliberately forcing or snapping the wrist.",
      lookFor: "The wrist supports the racquet through contact while remaining part of the overall arm-and-racquet movement.",
      why: "Contact should come from the coordinated swing rather than an isolated last-second wrist action.",
      mistake: "Deliberately flicking or snapping the wrist at the ball in an attempt to create extra power or topspin.",
      cue: "“Swing through — don’t flick.”",
    },
    head: {
      whatToDo: "Keep the head controlled and attention directed toward the contact area as the ball reaches the racquet.",
      lookFor: "The head does not immediately turn away with the torso before contact is completed.",
      why: "A controlled head position supports visual tracking and helps avoid unnecessary movement during the strike.",
      mistake: "Looking toward the target too early and turning the head away before the ball reaches the strings.",
      cue: "“Stay with contact.”",
    },
    hips_torso: {
      whatToDo: "Allow the hips and torso to continue rotating through the strike while maintaining balance.",
      lookFor: "The body has progressed forward from the loaded Frame 3 position and the early rotation of Frame 4.",
      why: "Contact is part of one continuous movement from preparation through the forward swing — not an isolated arm action.",
      mistake: "Stopping the body completely and trying to create the entire stroke with the hitting arm.",
      cue: "“Rotate through.”",
    },
  },

  follow_through: {
    hitting_arm: {
      whatToDo: "Allow the hitting arm to continue naturally across and upward after contact.",
      lookFor: "The arm continues its path rather than stopping immediately after the ball leaves the strings.",
      why: "A complete follow through reflects a continuous swing through the contact zone rather than a stroke that decelerates abruptly at the ball.",
      mistake: "Stopping the racquet and hitting arm immediately after contact.",
      cue: "“Swing through the ball.”",
    },
    racquet: {
      whatToDo: "Let the racquet continue its natural path forward, upward and across the body after contact.",
      lookFor: "The racquet is clearly beyond the contact point and progressing toward the finishing side of the body.",
      why: "The follow through is the continuation of the swing path created before and through contact.",
      mistake: "Trying to place the racquet into a finishing position instead of allowing it to arrive there naturally.",
      cue: "“Let it finish.”",
    },
    hitting_shoulder: {
      whatToDo: "Allow the hitting-side shoulder to continue rotating through the stroke.",
      lookFor: "The right shoulder has moved significantly forward compared with the preparation and contact phases.",
      why: "Continued shoulder rotation shows that the stroke has travelled through the ball rather than being produced only by the arm.",
      mistake: "Stopping the shoulders at contact while the arm continues by itself.",
      cue: "“Shoulder comes through.”",
    },
    torso: {
      whatToDo: "Allow the torso to continue rotating as the racquet completes its follow-through path.",
      lookFor: "The chest has rotated substantially farther forward than it was during Contact.",
      why: "The follow through should remain connected to the body’s rotation rather than becoming an isolated arm movement.",
      mistake: "Finishing with the arm while the torso remains behind.",
      cue: "“Finish the rotation.”",
    },
    non_hitting_arm: {
      whatToDo: "Keep the non-hitting arm relaxed and balanced as the body completes the stroke.",
      lookFor: "The left arm remains naturally organized with the body rather than becoming rigid or swinging excessively behind the player.",
      why: "The non-hitting arm contributes to overall balance while the torso and hitting side complete the movement.",
      mistake: "Throwing the left arm excessively behind the body and disturbing balance.",
      cue: "“Stay balanced.”",
    },
    weight_transfer_balance: {
      whatToDo: "Allow the body’s momentum to continue through the stroke while maintaining a controlled, balanced finish.",
      lookFor: "The player remains stable after the swing rather than falling dramatically backward, sideways or toward the ball.",
      why: "A balanced finish makes it easier to transition immediately into recovery for the next shot.",
      mistake: "Over-rotating or falling out of the shot after contact.",
      cue: "“Finish balanced.”",
    },
  },

  recovery: {
    head: {
      whatToDo: "Redirect your visual attention toward the opponent and prepare to read the next ball.",
      lookFor: "The player is no longer visually fixed on the previous contact point and is beginning to re-engage with what is happening across the court.",
      why: "Recovery is not complete if the body resets but the player is late reading the next shot.",
      mistake: "Watching the previous shot for too long instead of preparing to read the opponent’s response.",
      cue: "“Find the next ball.”",
    },
    racquet: {
      whatToDo: "Allow the racquet to return from the completed follow through toward a neutral ready position.",
      lookFor: "The racquet is no longer continuing farther into the follow through and has begun reorganizing toward the front of the body.",
      why: "Returning the racquet toward neutral reduces unnecessary movement when preparing for the next forehand or backhand.",
      mistake: "Leaving the racquet in the finished position while waiting to see where the next ball goes.",
      cue: "“Bring the racquet back.”",
    },
    hips_torso: {
      whatToDo: "Reorganize the hips and torso from the completed rotation toward a balanced, neutral position.",
      lookFor: "The body is beginning to unwind from the finished forehand position rather than remaining fully rotated.",
      why: "A neutral body position makes it easier to respond in either direction to the next shot.",
      mistake: "Remaining turned after the stroke and reacting late when the opponent changes direction.",
      cue: "“Reset the body.”",
    },
    feet_repositioning: {
      whatToDo: "Begin moving immediately after the stroke to recover an appropriate court position.",
      lookFor: "The feet are actively repositioning rather than remaining where the forehand was completed.",
      why: "The end of one stroke is the beginning of preparation for the next.",
      mistake: "Standing still after the forehand and waiting until the opponent hits before beginning recovery.",
      cue: "“Hit — then move.”",
    },
    balance: {
      whatToDo: "Regain a controlled athletic posture while transitioning out of the stroke.",
      lookFor: "The player can move again immediately without needing an extra step simply to regain balance.",
      why: "Good recovery allows the player to transition efficiently into the next movement sequence.",
      mistake: "Over-rotating or allowing momentum from the forehand to carry the body too far out of position.",
      cue: "“Finish ready to move.”",
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
