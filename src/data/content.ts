export const SITE = {
  name: "Sangria",
  tagline: "Team chat that feels like home.",
  description:
    "Channels, DMs, huddles, threads, polls, and search — the team chat app your whole company will actually enjoy using.",
};

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
];

// What the app is built on — shown as a subtle "built on a modern stack" strip.
export const STACK = [
  "Next.js",
  "React",
  "Convex",
  "LiveKit",
  "Tailwind CSS",
  "TypeScript",
  "Electron",
  "Capacitor",
];

export type Feature = { icon: string; title: string; description: string };

export const FEATURES: Feature[] = [
  {
    icon: "hash",
    title: "Channels",
    description:
      "Organized spaces for every team, project, and topic — public or private, plus announcement-only channels for broadcasts.",
  },
  {
    icon: "message",
    title: "Direct messages",
    description:
      "1:1 and group DMs with typing indicators, reactions, and threads — right where the conversation happens.",
  },
  {
    icon: "headphones",
    title: "Huddles",
    description:
      "Drop into a live audio & video huddle with screen sharing — no meeting link required.",
  },
  {
    icon: "thread",
    title: "Threads",
    description:
      "Keep side conversations tidy — reply in a thread and the main channel stays readable.",
  },
  {
    icon: "poll",
    title: "Polls",
    description: "Ask the room with /poll — multiple choice, anonymous voting, and auto-close.",
  },
  {
    icon: "search",
    title: "Search",
    description:
      "Find any message, file, or person in seconds, with filters by channel and author.",
  },
  {
    icon: "bell",
    title: "Notifications",
    description:
      "Tune what pings you per channel, mute the noisy ones, and pause notifications to focus.",
  },
  {
    icon: "bolt",
    title: "Fast & keyboard-first",
    description: "A command palette, global shortcuts, and a snappy UI that keeps up with you.",
  },
];

// Richer feature entries for the dedicated Features page — each with a few
// scannable sub-capabilities.
export type FeatureDetail = Feature & { bullets: string[] };

export const FEATURE_DETAILS: FeatureDetail[] = [
  {
    icon: "hash",
    title: "Channels",
    description: "Shared spaces for every team, project, and topic — public or private.",
    bullets: [
      "Announcement (read-only) channels",
      "Custom sections & drag-to-organize",
      "Topics, descriptions & channel admins",
    ],
  },
  {
    icon: "message",
    title: "Direct messages",
    description: "1:1 and group conversations, right where the work happens.",
    bullets: ["Typing indicators", "Reactions & threads", "Group DMs"],
  },
  {
    icon: "headphones",
    title: "Huddles",
    description: "Jump into live audio & video in a single click.",
    bullets: ["Screen sharing", "No links or scheduling", "In any channel or DM"],
  },
  {
    icon: "thread",
    title: "Threads",
    description: "Keep focused side conversations out of the main flow.",
    bullets: ["Reply without clutter", "Follow threads you're in", "A dedicated Threads view"],
  },
  {
    icon: "poll",
    title: "Polls",
    description: "Decide together with a quick /poll.",
    bullets: ["Multiple choice", "Anonymous voting", "Auto-close & live results"],
  },
  {
    icon: "search",
    title: "Search",
    description: "Find any message, file, or person in seconds.",
    bullets: [
      "Full-text search",
      "Filter by channel or author",
      "Files & links index",
      "Jump straight to the message",
    ],
  },
  {
    icon: "bell",
    title: "Notifications",
    description: "Tune exactly what reaches you, and when.",
    bullets: ["Per-channel preferences", "Mute & pause", "Reminders with /remind"],
  },
  {
    icon: "bolt",
    title: "Fast & keyboard-first",
    description: "A snappy, considered UI that keeps up with you.",
    bullets: [
      "Command palette (⌘K)",
      "Global keyboard shortcuts",
      "Optimistic updates",
      "Light, dark & system themes",
    ],
  },
];

export const WHY = [
  {
    icon: "server",
    title: "Open & self-hostable",
    description: "Run Sangria on your own infrastructure — it's open source, so your workspace is yours.",
  },
  {
    icon: "shield",
    title: "Your data, your servers",
    description: "Self-host and your conversations never leave your systems. No lock-in.",
  },
  {
    icon: "monitor",
    title: "Every platform",
    description: "Native desktop and mobile apps plus a full web app — one account, always in sync.",
  },
  {
    icon: "bolt",
    title: "Fast & keyboard-first",
    description: "A command palette, global shortcuts, and an optimistic UI that never makes you wait.",
  },
];

export const FAQ = [
  {
    q: "Is Sangria open source?",
    a: "Yes. Sangria is open source and self-hostable — run it on your own infrastructure so your workspace and its data stay yours.",
  },
  {
    q: "What platforms can I use it on?",
    a: "A full web app plus native apps — the macOS desktop app is available today, with Windows, Linux, iOS, and Android in progress.",
  },
  {
    q: "Do I need to install anything?",
    a: "No — Sangria runs in any modern browser. Install the desktop or mobile apps whenever you want the native experience; it's the same account either way.",
  },
  {
    q: "Can I move over from another chat tool?",
    a: "Yes. Sangria includes an importer (for example, from Mattermost) that brings your channels, messages, and history across.",
  },
  {
    q: "How much does it cost?",
    a: "Because Sangria is open source and self-hostable, you can run it yourself for free — no per-seat pricing, and you control where it lives.",
  },
];

export type OS = "mac" | "windows" | "linux" | "ios" | "android";

export type Platform = {
  os: OS;
  name: string;
  kind: "Desktop app" | "Mobile app";
  href: string;
  available: boolean;
  note: string;
};

// hrefs are placeholders — only the macOS desktop build ships today; the rest
// are honestly labeled "coming soon" rather than pointing at store URLs that 404.
export const PLATFORMS: Platform[] = [
  {
    os: "mac",
    name: "macOS",
    kind: "Desktop app",
    href: "#",
    available: true,
    note: "Universal .dmg — Apple silicon & Intel",
  },
  { os: "windows", name: "Windows", kind: "Desktop app", href: "#", available: false, note: "Coming soon" },
  { os: "linux", name: "Linux", kind: "Desktop app", href: "#", available: false, note: "Coming soon" },
  {
    os: "ios",
    name: "iOS",
    kind: "Mobile app",
    href: "#",
    available: false,
    note: "Coming soon to the App Store",
  },
  {
    os: "android",
    name: "Android",
    kind: "Mobile app",
    href: "#",
    available: false,
    note: "Coming soon to Google Play",
  },
];
