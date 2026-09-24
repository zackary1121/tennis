// Content model for the Forehand Biomechanics Lab.
// Each hotspot carries level-specific role / mistake / drill copy.

export const LEVELS = [
  { key: "utr12", label: "UTR 1–2", sub: "Foundation" },
  { key: "utr24", label: "UTR 2–4", sub: "Developing" },
  { key: "utr46", label: "UTR 4–6", sub: "Advanced" },
];

export const PHASES = [
  { id: "ready", label: "Ready", timing: "0.00s", cue: "Wide athletic base, racquet head up, weight forward on the balls of the feet.", focus: ["feet", "knee", "head"] },
  { id: "unit_turn", label: "Unit Turn", timing: "+0.24s", cue: "Shoulders and hips rotate together as one unit; off-hand tracks the ball across the body.", focus: ["shoulder", "hip"] },
  { id: "load", label: "Load", timing: "+0.45s", cue: "Back leg flexes and stores ground energy in the hip coil; racquet drops below the ball line.", focus: ["knee", "hip", "racquet"] },
  { id: "forward_swing", label: "Forward Swing", timing: "+0.60s", cue: "Hips fire first, the elbow leads into the slot and the wrist lags naturally behind the handle.", focus: ["hip", "elbow", "wrist"] },
  { id: "contact", label: "Contact", timing: "+0.72s", cue: "Ball struck comfortably out in front with a stable wrist; eyes locked on the impact zone.", focus: ["contact_point", "wrist", "head"] },
  { id: "follow_through", label: "Follow Through", timing: "+0.88s", cue: "Windshield-wiper motion finishes over the opposite shoulder with the torso fully rotated.", focus: ["shoulder", "racquet"] },
  { id: "recovery", label: "Recovery", timing: "+1.10s", cue: "Outside leg pushes back toward the centre mark and resets into a split step.", focus: ["feet", "knee"] },
];

export const HOTSPOTS = [
  {
    id: "head", num: 1, label: "Head & Eye Tracking",
    subtitle: "Balance & Vision", pos: { top: "21%", left: "42%" },
    levels: {
      utr12: {
        role: "Your head is your balance anchor. Keep it still and your eyes on the ball — a quiet head keeps the whole swing steady.",
        mistake: "Looking up to see where the ball is going before you've actually hit it.",
        drill: "Say the ball's colour out loud at the moment you make contact to force your eyes down.",
      },
      utr24: {
        role: "Keep the head still through the contact zone so the shoulders can rotate around a stable axis for cleaner ball striking.",
        mistake: "Pulling the head off contact early, which opens the chest too soon and sprays the ball wide.",
        drill: "Freeze your gaze on the empty impact airspace until the follow-through touches the opposite shoulder.",
      },
      utr46: {
        role: "Head remains motionless for ~0.2s post-strike to prevent frame mishits at high racquet-head speed and preserve the rotational axis.",
        mistake: "Micro head-lift under pressure that de-syncs eye tracking from the shoulder-over-shoulder tilt.",
        drill: "Shadow at full speed keeping the chin pinned to the front shoulder until the wiper finish completes.",
      },
    },
  },
  {
    id: "shoulder", num: 2, label: "Shoulder & Rotation",
    subtitle: "Rotational Axis", pos: { top: "30%", left: "48%" },
    levels: {
      utr12: {
        role: "Turn your shoulders sideways so your body — not just your arm — helps swing the racquet.",
        mistake: "Facing the net the whole time and swinging with the arm only.",
        drill: "Point your off-hand at the side fence during the turn, then swing.",
      },
      utr24: {
        role: "Shoulders coil during the unit turn and uncoil to deliver angular momentum; the front shoulder pulls through as the back shoulder drives up.",
        mistake: "Passive torso rotation where the arm swings alone ('arming the ball').",
        drill: "Shadow swings focused on finishing with your chest pointing at the target fence.",
      },
      utr46: {
        role: "Shoulder-over-shoulder tilt converts stored coil into racquet-head velocity while sequencing after the hips in the kinetic chain.",
        mistake: "Firing the shoulders simultaneously with the hips, collapsing the separation angle and losing whip.",
        drill: "Resistance-band rotational pulls to train hip-lead, shoulder-follow separation timing.",
      },
    },
  },
  {
    id: "elbow", num: 3, label: "Elbow Slot",
    subtitle: "Extension Lever", pos: { top: "37%", left: "61%" },
    levels: {
      utr12: {
        role: "Keep your elbow a little away from your body — not glued to your side — so the arm can swing freely.",
        mistake: "Jamming the elbow into the ribs, which cramps the swing.",
        drill: "Make slow shadow swings feeling a fist-sized gap between elbow and body.",
      },
      utr24: {
        role: "The elbow sits in the 'slot' 4–6 inches off the rib cage and extends toward the target line during acceleration.",
        mistake: "Elbow hyper-straightened during the backswing, killing the topspin whip.",
        drill: "Towel-under-armpit drill: pinch a small towel until forward racquet acceleration begins.",
      },
      utr46: {
        role: "The elbow leads the forearm into the slot, creating the lag that stores elastic energy before release into contact.",
        mistake: "Leading with the hand instead of the elbow, removing lag and flattening the swing arc.",
        drill: "Slow-motion 'elbow-first' pulls, then progressively add speed keeping the wrist passive.",
      },
    },
  },
  {
    id: "wrist", num: 4, label: "Wrist Lag",
    subtitle: "Radial Stability", pos: { top: "40%", left: "72%" },
    levels: {
      utr12: {
        role: "Keep your wrist firm and steady — don't flick it. A stable wrist means more control.",
        mistake: "Flicking the wrist to try to add power, causing wild misses.",
        drill: "Hold a firm 'L' shape at the wrist and hit slow, controlled balls.",
      },
      utr24: {
        role: "The wrist lags behind the handle during the forward drive, then arrives at a stable, firm contact without active flicking.",
        mistake: "Actively flicking to manufacture spin, leading to errant spray and strain.",
        drill: "L-shape freeze drill: maintain a firm ~90° wrist extension at address and into contact.",
      },
      utr46: {
        role: "Natural wrist lag stores and releases elastic energy; the radial-to-ulnar snap arrives passively for maximum racquet-head speed.",
        mistake: "Timing the wrist snap manually, which de-synchronises the release and reduces spin consistency.",
        drill: "Heavy-ball drops feeling the racquet 'fall then whip' with zero conscious wrist action.",
      },
    },
  },
  {
    id: "hip", num: 5, label: "Hip Coil",
    subtitle: "Power Engine", pos: { top: "50%", left: "53%" },
    levels: {
      utr12: {
        role: "Turn your hips sideways when you prepare, then turn them toward the net as you swing. This is where power starts.",
        mistake: "Keeping the hips facing the net so all the effort comes from the arm.",
        drill: "Turn your belt buckle to the side fence, then rotate it to face the net as you swing.",
      },
      utr24: {
        role: "The hips are the primary engine of ground power — the back hip uncoils first, pulling the torso, arm and racquet through the chain.",
        mistake: "Hips staying static and square to the net throughout the backswing.",
        drill: "Medicine-ball rotational tosses against a wall to program hip-initiated power.",
      },
      utr46: {
        role: "Hip drive initiates the kinetic sequence, converting ground-reaction force into rotational velocity before the shoulders release.",
        mistake: "Over-rotating the hips past the shoulders, breaking separation and leaking power.",
        drill: "Weighted rotational tosses timed so hips lead shoulders by a beat under fatigue.",
      },
    },
  },
  {
    id: "knee", num: 6, label: "Knee Bend",
    subtitle: "Vertical Drive", pos: { top: "63%", left: "41%" },
    levels: {
      utr12: {
        role: "Bend your knees to get low and balanced. Then push up gently through the shot.",
        mistake: "Standing up tall with straight, stiff legs.",
        drill: "Touch a low cone before each shadow swing to groove the knee bend.",
      },
      utr24: {
        role: "The back knee flexes to lower the centre of gravity, then extends to push explosively up into the shot for lift and depth.",
        mistake: "Straight, stiff legs that force the upper body to compensate for the lack of lift.",
        drill: "Low-to-high cone touch before every stroke to link knee load with the low-to-high swing path.",
      },
      utr46: {
        role: "Knee flexion (~110°) stores ground-reaction force; timed leg drive adds vertical component for heavy topspin and effortless depth.",
        mistake: "Extending the legs too early, dumping the drive before the kinetic chain releases.",
        drill: "Depth-jump into shadow strokes to sync explosive leg drive with racquet acceleration.",
      },
    },
  },
  {
    id: "feet", num: 7, label: "Feet & Stance",
    subtitle: "Ground Anchor", pos: { top: "90%", left: "45%" },
    levels: {
      utr12: {
        role: "Set your feet before you swing. A stable, shoulder-width stance keeps you balanced.",
        mistake: "Feet too close together or still moving at contact.",
        drill: "Split-step, set both feet, then hit — pause to check your balance after each shot.",
      },
      utr24: {
        role: "A semi-open stance anchors the back foot ~45° to the baseline for torque distribution and quick recovery.",
        mistake: "Crossing into a fully closed stance on fast balls, locking the hips.",
        drill: "Figure-8 footwork around two cones set 4 feet apart on the baseline.",
      },
      utr46: {
        role: "Stance adapts on the fly — open for pace and recovery, semi-open for balance — while the outside foot loads for explosive push-off.",
        mistake: "Defaulting to one stance regardless of ball speed, sacrificing court coverage.",
        drill: "Live rallying while a coach calls stance types to build adaptive footwork under pressure.",
      },
    },
  },
  {
    id: "racquet", num: 8, label: "Racquet Path",
    subtitle: "Face & Arc", pos: { top: "42%", left: "87%" },
    levels: {
      utr12: {
        role: "Start the racquet low and finish high. Low-to-high brushing is what lifts the ball over the net safely.",
        mistake: "Swinging flat and level, sending balls into the net.",
        drill: "Draw a 'smile' shape with the racquet: start by the pocket, brush up to the shoulder.",
      },
      utr24: {
        role: "A slightly closed face brushes up the back-outside quadrant of the ball on a low-to-high path to generate topspin.",
        mistake: "An open racquet face launching balls long or floating them short.",
        drill: "Fence-brush exercise: shadow along a chain-link fence keeping the face parallel to it.",
      },
      utr46: {
        role: "The racquet path steepens for heavy topspin — face closed 8–12° on descent, brushing up ~45° across the ball with high head speed.",
        mistake: "Over-brushing with too little forward drive, producing spin without depth or penetration.",
        drill: "Alternate 'drive' and 'spin' targets to dial the balance of forward vs upward racquet path.",
      },
    },
  },
  {
    id: "contact_point", num: 9, label: "Contact Point",
    subtitle: "Ball Strike", pos: { top: "41%", left: "79%" },
    levels: {
      utr12: {
        role: "Hit the ball out in front of your body, around waist height. Meeting it in front gives you power and control.",
        mistake: "Letting the ball get beside or behind you before you swing.",
        drill: "Partner drop-feeds a ball 1.5 ft in front; you step and strike it out front every time.",
      },
      utr24: {
        role: "Contact is made 12–18 inches in front of the front hip at waist-to-rib height with the ball on the sweet spot.",
        mistake: "Letting the ball drift behind the body plane, losing leverage and control.",
        drill: "Drop-feed and freeze: catch the ball on the strings out front and hold the contact shape.",
      },
      utr46: {
        role: "Precise contact window forward of the hip lets the closed face and racquet speed impart heavy spin while directing pace on demand.",
        mistake: "Taking the ball slightly late under pressure, shrinking the window and reducing spin quality.",
        drill: "Deep-ball live drills taking every ball on the rise, forced contact out in front.",
      },
    },
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

export const PLAYER_IMAGE = "https://static.prod-images.emergentagent.com/jobs/a0f2bd2a-abb8-4358-9243-dea017eb6307/images/ef100845e21ac0187d40289aa0e91cbed3f59839cfd412f4eec939fe2689ed16.jpeg";
