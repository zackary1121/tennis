// Content model for the Forehand Biomechanics Lab.
// The stroke is taught as ONE continuous movement split into 7 consecutive frames.
// Learning hierarchy: Stroke -> Movement Sequence -> Phase -> Body Part -> Technical Detail.
//
// Each phase owns its own replaceable image asset (`image`). Leave `image` as null to
// render the labelled placeholder; drop in a URL/import later WITHOUT touching the page.

// Shared metadata for every body part. `pos` = generic overlay coordinate (percent).
// A phase may override a hotspot position via the hotspot's own `pos`.
export const HOTSPOT_META = {
  head: { num: 1, label: "Head & Eyes", subtitle: "Balance & Vision", pos: { top: "12%", left: "50%" } },
  shoulder: { num: 2, label: "Shoulder", subtitle: "Rotational Axis", pos: { top: "26%", left: "44%" } },
  elbow: { num: 3, label: "Elbow", subtitle: "Extension Lever", pos: { top: "40%", left: "37%" } },
  wrist: { num: 4, label: "Wrist", subtitle: "Radial Stability", pos: { top: "52%", left: "31%" } },
  hip: { num: 5, label: "Hip", subtitle: "Power Engine", pos: { top: "52%", left: "50%" } },
  knee: { num: 6, label: "Knee", subtitle: "Vertical Drive", pos: { top: "72%", left: "46%" } },
  feet: { num: 7, label: "Feet", subtitle: "Ground Anchor", pos: { top: "92%", left: "50%" } },
  racquet: { num: 8, label: "Racquet", subtitle: "Face & Path", pos: { top: "40%", left: "68%" } },
  contact_point: { num: 9, label: "Contact Point", subtitle: "Ball Strike", pos: { top: "42%", left: "72%" } },
};

export const LEVELS = [
  { key: "utr12", label: "UTR 1–2", sub: "Foundation" },
  { key: "utr24", label: "UTR 2–4", sub: "Developing" },
  { key: "utr46", label: "UTR 4–6", sub: "Advanced" },
];

// The 7 consecutive frames of a single forehand stroke.
export const PHASES = [
  {
    id: "ready",
    num: 1,
    label: "Ready Position",
    timing: "0.00s",
    image: null,
    summary: "Balanced, alert and ready to move — the athletic base every stroke starts from.",
    levelFocus: {
      utr12: "Just get balanced and hold the racquet up in front of you.",
      utr24: "Add a small split step as your opponent strikes the ball.",
      utr46: "Load the split step to explode in any direction on the bounce read.",
    },
    hotspots: [
      { id: "head", whatToDo: "Keep your eyes up and read the incoming ball early.", why: "Early reading buys time to set up the whole stroke.", mistake: "Watching your own feet instead of the ball and opponent.", cue: "\"Eyes on the strings across the net.\"" },
      { id: "shoulder", whatToDo: "Relax the shoulders and hold the racquet with a light two-hand support at the throat.", why: "Loose shoulders react faster and rotate freely.", mistake: "Tense, hunched shoulders that delay the turn.", cue: "\"Soft hands, tall chest.\"" },
      { id: "knee", whatToDo: "Soft knee bend, weight on the balls of your feet.", why: "A flexed base lets you push off instantly.", mistake: "Standing tall with locked, straight knees.", cue: "\"Sit into a light athletic squat.\"" },
      { id: "feet", whatToDo: "Feet just wider than shoulders, ready to split step.", why: "A wide base gives balance and a fast first step.", mistake: "Feet together and flat-footed.", cue: "\"Bounce on your toes.\"" },
      { id: "racquet", whatToDo: "Hold the racquet head up and out in front, centred.", why: "A neutral start makes either wing quick to prepare.", mistake: "Letting the racquet drop by your side.", cue: "\"Racquet up, pointing at the net.\"" },
    ],
  },
  {
    id: "unit_turn",
    num: 2,
    label: "Unit Turn",
    timing: "+0.24s",
    image: null,
    summary: "Shoulders and hips turn together as one unit the instant you recognise a forehand.",
    levelFocus: {
      utr12: "Turn your shoulders sideways and take the racquet back with your body.",
      utr24: "Track the ball with your non-dominant hand as you coil.",
      utr46: "Create shoulder–hip separation to store elastic energy.",
    },
    hotspots: [
      { id: "shoulder", whatToDo: "Rotate both shoulders roughly 90° so your back faces the side fence.", why: "The turn is the first link in the power chain.", mistake: "Only taking the arm back while the chest stays facing forward.", cue: "\"Show your back to the opponent.\"" },
      { id: "hip", whatToDo: "Let the hips coil with the shoulders as one piece.", why: "A unified turn loads the whole body, not just the arm.", mistake: "Hips staying square while the arm swings back.", cue: "\"Turn belt buckle to the fence.\"" },
      { id: "head", whatToDo: "Keep the head level and eyes locked on the ball.", why: "A quiet head keeps the turn balanced.", mistake: "Head tilting or dropping during the coil.", cue: "\"Still head, turning body.\"" },
      { id: "racquet", whatToDo: "Take the racquet back with the turn, non-hitting hand guiding it.", why: "Using the off-hand keeps the take-back compact and on plane.", mistake: "A long, loopy one-handed take-back.", cue: "\"Two hands start the turn.\"" },
    ],
  },
  {
    id: "load",
    num: 3,
    label: "Load / Racquet Preparation",
    timing: "+0.45s",
    image: null,
    summary: "Weight sinks into the back leg and the racquet drops below the ball — energy stored.",
    levelFocus: {
      utr12: "Bend your back leg and get the racquet a little below the ball.",
      utr24: "Feel weight load into the back hip before you swing forward.",
      utr46: "Set a deep racquet drop with a relaxed wrist to maximise lag.",
    },
    hotspots: [
      { id: "knee", whatToDo: "Flex the back knee to lower your centre of gravity.", why: "The bend stores ground force you'll release upward.", mistake: "Staying upright with no leg load.", cue: "\"Sit into the back leg.\"" },
      { id: "hip", whatToDo: "Load weight into the back hip and keep it coiled.", why: "The hip is the engine that fires the forward swing.", mistake: "Leaking the coil early by rotating too soon.", cue: "\"Coil and hold.\"" },
      { id: "wrist", whatToDo: "Let the wrist lay back and stay relaxed.", why: "A relaxed wrist creates natural lag for racquet speed.", mistake: "Tensing the wrist and forcing the racquet down.", cue: "\"Loose wrist, heavy racquet.\"" },
      { id: "racquet", whatToDo: "Drop the racquet head below the height of the oncoming ball.", why: "Starting low sets the low-to-high path for topspin.", mistake: "Keeping the racquet high, forcing a flat swing.", cue: "\"Racquet under the ball.\"" },
    ],
  },
  {
    id: "forward_swing",
    num: 4,
    label: "Forward Swing",
    timing: "+0.60s",
    image: null,
    summary: "Hips fire first, the elbow leads into the slot and the racquet accelerates up to the ball.",
    levelFocus: {
      utr12: "Swing low to high, brushing up the back of the ball.",
      utr24: "Let the hips lead so the arm follows the body.",
      utr46: "Sequence hips → torso → arm to whip the racquet head.",
    },
    hotspots: [
      { id: "hip", whatToDo: "Fire the back hip forward to start the swing.", why: "Hip-led swings are powerful and repeatable.", mistake: "Starting the swing with the arm, leaving the hips behind.", cue: "\"Hips go first.\"" },
      { id: "elbow", whatToDo: "Lead with the elbow into the hitting slot near the ribs.", why: "The elbow slot keeps the racquet on an efficient path.", mistake: "Chicken-winging the elbow high and away.", cue: "\"Elbow leads into the slot.\"" },
      { id: "wrist", whatToDo: "Let the wrist lag naturally behind the handle.", why: "Lag stores speed that releases into contact.", mistake: "Actively flicking to add spin too early.", cue: "\"Let the racquet trail.\"" },
      { id: "shoulder", whatToDo: "Uncoil the shoulders after the hips.", why: "Correct sequencing transfers energy up the chain.", mistake: "Opening the shoulders at the same time as the hips.", cue: "\"Hips, then shoulders.\"" },
    ],
  },
  {
    id: "contact",
    num: 5,
    label: "Contact",
    timing: "+0.72s",
    image: null,
    summary: "The single most important frame — ball struck out in front with a firm, stable wrist.",
    levelFocus: {
      utr12: "Meet the ball out in front around waist height.",
      utr24: "Keep a firm wrist and stable racquet face at impact.",
      utr46: "Brush up the outer-back of the ball for heavy, controlled spin.",
    },
    hotspots: [
      { id: "contact_point", whatToDo: "Strike the ball 12–18 inches in front of your front hip.", why: "Contact out front gives leverage, power and control.", mistake: "Letting the ball drift level with or behind the body.", cue: "\"Catch it out in front.\"" },
      { id: "wrist", whatToDo: "Firm the wrist into a stable position at impact.", why: "A stable wrist means a predictable racquet face.", mistake: "A loose, flicking wrist that sprays the ball.", cue: "\"Firm at the strike.\"" },
      { id: "head", whatToDo: "Keep the head still and eyes on the contact point.", why: "A still head stops mishits and keeps balance.", mistake: "Pulling the head up to look where the ball is going.", cue: "\"Watch the ball hit the strings.\"" },
      { id: "racquet", whatToDo: "Present a slightly closed face brushing low to high.", why: "The face angle and path create topspin and depth.", mistake: "An open face that floats the ball long.", cue: "\"Brush up the back.\"" },
    ],
  },
  {
    id: "follow_through",
    num: 6,
    label: "Follow Through",
    timing: "+0.88s",
    image: null,
    summary: "The racquet finishes over the opposite shoulder as the torso rotates fully through.",
    levelFocus: {
      utr12: "Finish with the racquet over your opposite shoulder.",
      utr24: "Let the torso rotate fully so the chest faces the target.",
      utr46: "Use a windshield-wiper finish to control heavy spin.",
    },
    hotspots: [
      { id: "shoulder", whatToDo: "Rotate the shoulders through until the chest faces the target.", why: "Full rotation means you used the whole body.", mistake: "Stopping the rotation and finishing with just the arm.", cue: "\"Turn the chest to the net.\"" },
      { id: "elbow", whatToDo: "Let the elbow travel up and across the body.", why: "A free follow-through protects the arm and adds spin.", mistake: "Cutting the swing off abruptly at contact.", cue: "\"Swing all the way through.\"" },
      { id: "racquet", whatToDo: "Finish the racquet over the opposite shoulder or wiping across.", why: "The finish shape confirms a correct swing path.", mistake: "A short poke with no follow-through.", cue: "\"Catch the racquet by your ear.\"" },
    ],
  },
  {
    id: "recovery",
    num: 7,
    label: "Recovery",
    timing: "+1.10s",
    image: null,
    summary: "Push back toward the middle and reset into a balanced ready position for the next ball.",
    levelFocus: {
      utr12: "Get back to the middle and get ready again.",
      utr24: "Push off the outside leg to recover quickly.",
      utr46: "Recover with an explosive first step and early split.",
    },
    hotspots: [
      { id: "feet", whatToDo: "Push off the outside foot back toward the centre mark.", why: "Fast recovery keeps you in the point.", mistake: "Admiring the shot and staying planted.", cue: "\"Push back to the middle.\"" },
      { id: "knee", whatToDo: "Re-bend the knees into an athletic base.", why: "A loaded base is ready to move for the next ball.", mistake: "Recovering upright and flat-footed.", cue: "\"Land soft and low.\"" },
      { id: "head", whatToDo: "Bring the eyes back up to read the next ball.", why: "Early reading restarts the whole cycle.", mistake: "Losing focus after your shot.", cue: "\"Reset eyes, reset feet.\"" },
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
