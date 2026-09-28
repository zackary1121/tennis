// ============================================================================
// REPLACEABLE FOREHAND FRAME IMAGES
// ----------------------------------------------------------------------------
// Drop the final instructional image for each phase here — one slot per frame.
// Accepts a URL string OR an imported asset. Leave as null to show the
// labelled placeholder. Each frame can be replaced individually.
// ============================================================================

export const PHASE_IMAGES = {
  // Advanced 7-phase model (UTR 2–4 / UTR 4–6)
  ready: null,          // 01 · Ready Position
  unit_turn: null,      // 02 · Unit Turn
  load: null,           // 03 · Load / Preparation
  forward_swing: null,  // 04 · Forward Swing
  contact: null,        // 05 · Contact
  follow_through: null, // 06 · Follow Through
  recovery: null,       // 07 · Recovery

  // Simplified 5-phase model (UTR 1–2 beginners)
  b_ready: null,         // 1 · Ready Position
  b_racquet_back: null,  // 2 · Racquet Back (low, right side)
  b_forward_swing: null, // 3 · Forward Swing
  b_contact: null,       // 4 · Contact
  b_finish: null,        // 5 · Finish (above left shoulder)
};
