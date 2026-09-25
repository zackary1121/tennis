// ============================================================================
// CENTRAL i18n TABLES
// ----------------------------------------------------------------------------
// UI strings + content label maps for every supported language.
// Add a new language by adding its code here and a matching block in each map.
// Content (phases/hotspots/coaching) shares the SAME IDs across languages so
// switching language never changes the user's current selection.
// ============================================================================

export const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "zh-CN", label: "中文" },
];

// Resolve a localized value from a ZH map, falling back to the English value.
export const pick = (lang, zhMap, id, fallback) =>
  lang !== "en" && zhMap && zhMap[id] != null ? zhMap[id] : fallback;

// ---------------------------------------------------------------------------
// UI STRINGS
// ---------------------------------------------------------------------------
export const UI = {
  en: {
    "nav.forehand": "Forehand",
    "nav.backhand": "Backhand",
    "nav.serve": "Serve",
    "nav.volley": "Volley",
    "nav.soon": "soon",
    "nav.launchLab": "Launch Lab",
    "comingSoonTitle": "{name} lab is coming soon",
    "comingSoonDescNav": "The Forehand prototype is live now.",
    "comingSoonDescHome": "Explore the Forehand prototype in the meantime.",

    "home.kicker": "Interactive Tennis Biomechanics",
    "home.title1": "Master Your",
    "home.titleAccent": "Tennis Technique",
    "home.subtitle": "Explore every movement. Understand every detail.",
    "home.explore": "Explore Techniques",
    "home.viewDisciplines": "View Disciplines",
    "stat.phases": "Movement Phases",
    "stat.hotspots": "Biomechanical Hotspots",
    "stat.progression": "UTR Progression",
    "heroTag.contact": "Contact • 112 km/h",
    "heroTag.unitTurn": "Unit Turn • 92°",
    "cat.kicker": "Core Disciplines",
    "cat.title": "Choose a stroke to deconstruct",
    "cat.subtitle": "Each stroke is broken into biomechanically verified motion phases with interactive hotspots.",
    "cat.available": "Available",
    "cat.comingSoon": "Coming soon",
    "cat.phases": "{n} phases",
    "cat.hotspots": "{n} hotspots",
    "cat.openLab": "Open lab",
    "cat.notifyMe": "Notify me",
    "utr.kicker": "Calibrated by UTR",
    "utr.title": "Coaching tuned to your level",
    "utr.subtitle": "Every hotspot cue adapts from fundamental stability to high-rpm topspin mechanics.",
    "cta.title": "Step onto the biomechanics court",
    "cta.subtitle": "Click through the player's body and stroke phases to see exactly how a modern forehand works.",
    "cta.button": "Enter Forehand Lab",
    "footer.tagline": "Interactive tennis technique · Beginner to UTR 6",

    "fh.back": "Back",
    "fh.title1": "Forehand",
    "fh.titleAccent": "Studio",
    "fh.subtitle": "One continuous stroke · 7 movement frames",
    "fh.sequence": "Full Movement Sequence",
    "fh.sequenceHint": "Tap a frame · swipe on mobile",
    "fh.frame": "Frame {n} / 7",
    "fh.prev": "Previous",
    "fh.play": "Play Sequence",
    "fh.pause": "Pause",
    "fh.next": "Next",
    "speed.slow": "Slow",
    "speed.normal": "Normal",
    "fh.focus": "Focus Areas This Phase",
    "fh.save": "Save this cue",
    "fh.savedToast": "Saved to practice list",
    "fh.coachingDepth": "Coaching depth",
    "block.whatToDo": "What to do",
    "block.lookFor": "Look for",
    "block.why": "Why it matters",
    "block.mistake": "Common mistake",
    "block.cue": "Feel / cue",
  },
  "zh-CN": {
    "nav.forehand": "正手",
    "nav.backhand": "反手",
    "nav.serve": "发球",
    "nav.volley": "截击",
    "nav.soon": "即将推出",
    "nav.launchLab": "进入实验室",
    "comingSoonTitle": "{name}实验室即将推出",
    "comingSoonDescNav": "正手原型现已上线。",
    "comingSoonDescHome": "同时可以先体验正手原型。",

    "home.kicker": "互动式网球生物力学",
    "home.title1": "掌握你的",
    "home.titleAccent": "网球技术",
    "home.subtitle": "探索每一个动作，理解每一个细节。",
    "home.explore": "探索技术",
    "home.viewDisciplines": "查看项目",
    "stat.phases": "动作阶段",
    "stat.hotspots": "生物力学要点",
    "stat.progression": "UTR 进阶",
    "heroTag.contact": "击球接触 • 112 km/h",
    "heroTag.unitTurn": "单元转体 • 92°",
    "cat.kicker": "核心项目",
    "cat.title": "选择一项技术进行拆解",
    "cat.subtitle": "每项技术都被拆解为经生物力学验证的动作阶段，并配有互动要点。",
    "cat.available": "已上线",
    "cat.comingSoon": "即将推出",
    "cat.phases": "{n} 个阶段",
    "cat.hotspots": "{n} 个要点",
    "cat.openLab": "进入实验室",
    "cat.notifyMe": "通知我",
    "utr.kicker": "按 UTR 分级校准",
    "utr.title": "为你的水平量身定制的教学",
    "utr.subtitle": "每个要点提示都会从基础稳定性适配到高转速上旋技术。",
    "cta.title": "踏上生物力学球场",
    "cta.subtitle": "点击球员的身体部位与击球阶段，看清现代正手到底是如何完成的。",
    "cta.button": "进入正手实验室",
    "footer.tagline": "互动式网球技术 · 从入门到 UTR 6",

    "fh.back": "返回",
    "fh.title1": "正手",
    "fh.titleAccent": "工作室",
    "fh.subtitle": "一个连续的击球动作 · 7 个动作帧",
    "fh.sequence": "完整动作序列",
    "fh.sequenceHint": "点击某一帧 · 手机可左右滑动",
    "fh.frame": "第 {n} 阶段 / 共 7",
    "fh.prev": "上一步",
    "fh.next": "下一步",
    "fh.play": "播放动作序列",
    "fh.pause": "暂停",
    "speed.slow": "慢速",
    "speed.normal": "正常速度",
    "fh.focus": "本阶段重点",
    "fh.save": "保存提示",
    "fh.savedToast": "已保存到练习清单",
    "fh.coachingDepth": "教学深度",
    "block.whatToDo": "动作要领",
    "block.lookFor": "观察重点",
    "block.why": "为什么重要",
    "block.mistake": "常见错误",
    "block.cue": "动作感觉 / 提示",
  },
};

// ---------------------------------------------------------------------------
// CONTENT LABEL MAPS (zh-CN). English labels stay in the data files.
// ---------------------------------------------------------------------------
export const HOTSPOT_LABELS_ZH = {
  head: "头部与视线",
  racquet: "球拍",
  racquet_hands: "球拍与双手",
  feet_balance: "双脚与平衡",
  racquet_head: "拍头",
  racquet_head_face: "拍头与拍面",
  racquet_face: "拍面",
  spacing_feet: "间距 / 脚步",
  knees: "膝盖",
  feet: "双脚",
  left_hand: "左手",
  left_arm: "左臂",
  non_hitting_arm: "非持拍手臂",
  hitting_arm: "持拍手臂",
  hitting_arm_spacing: "持拍手臂与间距",
  shoulders: "肩部",
  shoulder: "肩部",
  hitting_shoulder: "持拍侧肩部",
  hips: "髋部",
  torso: "躯干",
  hips_torso: "髋部与躯干",
  wrist: "手腕",
  outside_leg: "外侧腿",
  outside_leg_balance: "外侧腿 / 平衡",
  contact_point: "击球点",
  weight_transfer: "重心转移",
  weight_transfer_balance: "重心转移 / 平衡",
  balance: "平衡",
  feet_repositioning: "脚步 / 重新站位",
};

export const PHASE_LABELS_ZH = {
  ready: "准备姿势",
  unit_turn: "单元转体",
  load: "蓄力 / 准备",
  forward_swing: "向前挥拍",
  contact: "击球接触",
  follow_through: "随挥",
  recovery: "回位",
};

export const PHASE_SUMMARY_ZH = {
  ready: "保持平衡、专注、随时准备移动——这是每一次击球的运动基础。",
  unit_turn: "一旦判断出是正手，双肩与髋部作为一个整体同时转动。",
  load: "重心沉入后腿，球拍下沉到球的下方——能量得以储存。",
  forward_swing: "髋部先启动，手臂随身体而动，球拍向上加速迎向来球。",
  contact: "最关键的一帧——在身体前方以稳定的手腕击球。",
  follow_through: "球拍在躯干充分转动的同时越过对侧肩部完成收拍。",
  recovery: "向中间蹬回，重置为平衡的准备姿势以迎接下一球。",
};

export const CATEGORY_ZH = {
  forehand: { title: "正手", tag: "原型已就绪" },
  backhand: { title: "反手", tag: "动力链蓄力" },
  serve: { title: "发球", tag: "蹬地与内旋" },
  volley: { title: "截击", tag: "重心转移" },
};

// Aligned with UTR_TIERS order in forehandData.js
export const TIER_ZH = [
  { badge: "基础", focus: "挥拍平面与击球稳定性", description: "解决击球不稳定、去除多余的抖腕，并建立平衡的准备姿势。" },
  { badge: "进阶", focus: "动力链蓄力与地面反作用力", description: "从手臂发力的挥拍过渡到髋部转动、深度屈膝蓄力和流畅的引拍下沉。" },
  { badge: "竞技", focus: "拍头速度与上旋", description: "精修时机：雨刷式收拍、肩部倾斜以及轻松的深度控制。" },
];

export const LEVEL_SUB_ZH = {
  utr12: "基础",
  utr24: "进阶中",
  utr46: "高级",
};
