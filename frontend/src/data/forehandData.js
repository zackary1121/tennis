// Content model for the Forehand Biomechanics Lab.
// The stroke is taught as ONE continuous movement split into 7 consecutive frames.
// Learning hierarchy: Full Movement -> Phase -> Body Part -> Coaching Detail.
//
// Reference frame images live in ./phaseImages.js (one replaceable slot each).
// Coaching copy lives in ./coachingContent.js (placeholders for now).

// Coaching-specific hotspot labels. Hotspots are NOT a fixed anatomical list —
// each phase declares its own relevant items (see PHASES.hotspots), with
// per-phase coordinates because the body position changes between frames.
export const HOTSPOT_META = {
  head: { label: "Head & Eyes" },
  racquet: { label: "Racquet" },
  racquet_hands: { label: "Racquet & Hands" },
  feet_balance: { label: "Feet & Balance" },
  racquet_head: { label: "Racquet Head" },
  racquet_face: { label: "Racquet Face" },
  knees: { label: "Knees" },
  feet: { label: "Feet" },
  left_hand: { label: "Left Hand" },
  left_arm: { label: "Left Arm" },
  hitting_arm: { label: "Hitting Arm" },
  shoulders: { label: "Shoulders" },
  shoulder: { label: "Shoulder" },
  hips: { label: "Hips" },
  torso: { label: "Torso" },
  wrist: { label: "Wrist" },
  outside_leg: { label: "Outside Leg" },
  contact_point: { label: "Contact Point" },
  weight_transfer: { label: "Weight Transfer" },
  balance: { label: "Balance" },
};

export const LEVELS = [
  { key: "utr12", label: "UTR 1–2", sub: "Foundation" },
  { key: "utr24", label: "UTR 2–4", sub: "Developing" },
  { key: "utr46", label: "UTR 4–6", sub: "Advanced" },
];

// The 7 consecutive frames of a single forehand stroke.
// Each phase carries its OWN coaching-specific hotspot set with coordinates
// specific to that pose.
export const PHASES = [
  {
    id: "ready",
    num: 1,
    label: "Ready Position",
    summary: "Balanced, alert and ready to move — the athletic base every stroke starts from.",
    hotspots: [
      { id: "head", pos: { top: "12%", left: "50%" } },
      { id: "racquet_hands", pos: { top: "40%", left: "66%" } },
      { id: "knees", pos: { top: "72%", left: "48%" } },
      { id: "feet_balance", pos: { top: "92%", left: "50%" } },
    ],
  },
  {
    id: "unit_turn",
    num: 2,
    label: "Unit Turn",
    summary: "Shoulders and hips turn together as one unit the instant you recognise a forehand.",
    hotspots: [
      { id: "left_hand", pos: { top: "42%", left: "32%" } },
      { id: "hitting_arm", pos: { top: "34%", left: "60%" } },
      { id: "shoulders", pos: { top: "25%", left: "50%" } },
      { id: "hips", pos: { top: "52%", left: "52%" } },
      { id: "racquet", pos: { top: "37%", left: "73%" } },
      { id: "feet", pos: { top: "92%", left: "50%" } },
    ],
  },
  {
    id: "load",
    num: 3,
    label: "Load / Preparation",
    summary: "Weight sinks into the back leg and the racquet drops below the ball — energy stored.",
    hotspots: [
      { id: "left_arm", pos: { top: "40%", left: "34%" } },
      { id: "racquet_head", pos: { top: "66%", left: "26%" } },
      { id: "hips", pos: { top: "53%", left: "55%" } },
      { id: "outside_leg", pos: { top: "74%", left: "58%" } },
      { id: "feet", pos: { top: "92%", left: "52%" } },
    ],
  },
  {
    id: "forward_swing",
    num: 4,
    label: "Forward Swing",
    summary: "Hips fire first, the arm follows the body and the racquet accelerates up to the ball.",
    hotspots: [
      { id: "left_hand", pos: { top: "40%", left: "58%" } },
      { id: "hips", pos: { top: "52%", left: "48%" } },
      { id: "torso", pos: { top: "40%", left: "50%" } },
      { id: "hitting_arm", pos: { top: "46%", left: "38%" } },
      { id: "racquet_head", pos: { top: "56%", left: "30%" } },
      { id: "outside_leg", pos: { top: "74%", left: "56%" } },
    ],
  },
  {
    id: "contact",
    num: 5,
    label: "Contact",
    summary: "The most important frame — ball struck out in front with a firm, stable wrist.",
    hotspots: [
      { id: "head", pos: { top: "14%", left: "46%" } },
      { id: "hitting_arm", pos: { top: "40%", left: "58%" } },
      { id: "wrist", pos: { top: "46%", left: "66%" } },
      { id: "racquet_face", pos: { top: "37%", left: "80%" } },
      { id: "hips", pos: { top: "52%", left: "48%" } },
      { id: "contact_point", pos: { top: "41%", left: "74%" } },
    ],
  },
  {
    id: "follow_through",
    num: 6,
    label: "Follow Through",
    summary: "The racquet finishes over the opposite shoulder as the torso rotates fully through.",
    hotspots: [
      { id: "left_hand", pos: { top: "40%", left: "40%" } },
      { id: "hitting_arm", pos: { top: "30%", left: "58%" } },
      { id: "shoulder", pos: { top: "26%", left: "52%" } },
      { id: "torso", pos: { top: "45%", left: "50%" } },
      { id: "racquet", pos: { top: "20%", left: "40%" } },
      { id: "weight_transfer", pos: { top: "80%", left: "46%" } },
    ],
  },
  {
    id: "recovery",
    num: 7,
    label: "Recovery",
    summary: "Push back toward the middle and reset into a balanced ready position for the next ball.",
    hotspots: [
      { id: "head", pos: { top: "12%", left: "50%" } },
      { id: "hips", pos: { top: "52%", left: "50%" } },
      { id: "feet", pos: { top: "92%", left: "52%" } },
      { id: "balance", pos: { top: "40%", left: "50%" } },
    ],
  },
];

export const CATEGORIES = [
  { id: "forehand", title: "Forehand", tag: "Prototype Ready", phases: 7, hotspots: 9, available: true },
  { id: "backhand", title: "Backhand", tag: "Kinetic Coil", phases: 7, hotspots: 8, available: false },
  { id: "serve", title: "Serve", tag: "Leg Drive & Pronation", phases: 8, hotspots: 10, available: false },
  { id: "volley", title: "Volley", tag: "Weight Transfer", phases: 5, hotspots: 6, available: false },
];

export const UTR_TIERS = [
  { tier: "UTR 1–2", badge: "Foundational", focus: "Swing Plane & Contact Consistency", description: "Fix inconsistent contact, remove excess wrist flick, and build a balanced ready position." },
  { tier: "UTR 2–4", badge: "Developing", focus: "Kinetic Coil & Ground Force", description: "Move from arm-powered swings to hip rotation, deep knee load and a fluid racquet drop." },
  { tier: "UTR 4–6", badge: "Competitive", focus: "Racquet Head Velocity & Topspin", description: "Refine timing: windshield-wiper finish, shoulder tilt and effortless depth control." },
];

// Used only on the Homepage hero preview (not the instructional lab).
export const PLAYER_IMAGE = "https://static.prod-images.emergentagent.com/jobs/a0f2bd2a-abb8-4358-9243-dea017eb6307/images/ef100845e21ac0187d40289aa0e91cbed3f59839cfd412f4eec939fe2689ed16.jpeg";
