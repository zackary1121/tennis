// Content model for the Forehand Biomechanics Lab.
// The stroke is taught as ONE continuous movement split into 7 consecutive frames.
// Learning hierarchy: Full Movement -> Phase -> Body Part -> Coaching Detail.
//
// Reference frame images live in ./phaseImages.js (one replaceable slot each).
// Coaching copy lives in ./coachingContent.js (placeholders for now).

// Body-part labels + tooltip subtitle. Positions are PER-PHASE (see PHASES.hotspots).
export const HOTSPOT_META = {
  head: { label: "Head & Eyes" },
  shoulder: { label: "Shoulder" },
  elbow: { label: "Elbow" },
  wrist: { label: "Wrist" },
  hip: { label: "Hip" },
  knee: { label: "Knee" },
  feet: { label: "Feet" },
  racquet: { label: "Racquet" },
  contact_point: { label: "Contact Point" },
};

export const LEVELS = [
  { key: "utr12", label: "UTR 1–2", sub: "Foundation" },
  { key: "utr24", label: "UTR 2–4", sub: "Developing" },
  { key: "utr46", label: "UTR 4–6", sub: "Advanced" },
];

// The 7 consecutive frames of a single forehand stroke.
// Each phase carries its OWN hotspot set with coordinates specific to that pose.
export const PHASES = [
  {
    id: "ready",
    num: 1,
    label: "Ready Position",
    summary: "Balanced, alert and ready to move — the athletic base every stroke starts from.",
    hotspots: [
      { id: "head", pos: { top: "12%", left: "50%" } },
      { id: "shoulder", pos: { top: "26%", left: "44%" } },
      { id: "racquet", pos: { top: "40%", left: "66%" } },
      { id: "knee", pos: { top: "72%", left: "46%" } },
      { id: "feet", pos: { top: "92%", left: "50%" } },
    ],
  },
  {
    id: "unit_turn",
    num: 2,
    label: "Unit Turn",
    summary: "Shoulders and hips turn together as one unit the instant you recognise a forehand.",
    hotspots: [
      { id: "head", pos: { top: "12%", left: "47%" } },
      { id: "shoulder", pos: { top: "25%", left: "53%" } },
      { id: "hip", pos: { top: "52%", left: "53%" } },
      { id: "racquet", pos: { top: "37%", left: "73%" } },
    ],
  },
  {
    id: "load",
    num: 3,
    label: "Load / Preparation",
    summary: "Weight sinks into the back leg and the racquet drops below the ball — energy stored.",
    hotspots: [
      { id: "hip", pos: { top: "53%", left: "55%" } },
      { id: "wrist", pos: { top: "57%", left: "30%" } },
      { id: "racquet", pos: { top: "66%", left: "26%" } },
      { id: "knee", pos: { top: "74%", left: "53%" } },
    ],
  },
  {
    id: "forward_swing",
    num: 4,
    label: "Forward Swing",
    summary: "Hips fire first, the elbow leads into the slot and the racquet accelerates up to the ball.",
    hotspots: [
      { id: "shoulder", pos: { top: "27%", left: "46%" } },
      { id: "elbow", pos: { top: "44%", left: "40%" } },
      { id: "wrist", pos: { top: "50%", left: "34%" } },
      { id: "hip", pos: { top: "52%", left: "48%" } },
    ],
  },
  {
    id: "contact",
    num: 5,
    label: "Contact",
    summary: "The most important frame — ball struck out in front with a firm, stable wrist.",
    hotspots: [
      { id: "head", pos: { top: "14%", left: "46%" } },
      { id: "wrist", pos: { top: "46%", left: "64%" } },
      { id: "racquet", pos: { top: "37%", left: "80%" } },
      { id: "contact_point", pos: { top: "41%", left: "74%" } },
    ],
  },
  {
    id: "follow_through",
    num: 6,
    label: "Follow Through",
    summary: "The racquet finishes over the opposite shoulder as the torso rotates fully through.",
    hotspots: [
      { id: "racquet", pos: { top: "20%", left: "40%" } },
      { id: "shoulder", pos: { top: "26%", left: "52%" } },
      { id: "elbow", pos: { top: "31%", left: "60%" } },
    ],
  },
  {
    id: "recovery",
    num: 7,
    label: "Recovery",
    summary: "Push back toward the middle and reset into a balanced ready position for the next ball.",
    hotspots: [
      { id: "head", pos: { top: "12%", left: "50%" } },
      { id: "knee", pos: { top: "72%", left: "48%" } },
      { id: "feet", pos: { top: "92%", left: "52%" } },
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
