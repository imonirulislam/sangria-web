export const SITE = {
  name: "Sangria",
  tagline: "Open-source team communication.",
  description:
    "Channels, direct messages, huddles, threads, polls, and search in one secure workspace you can host yourself.",
};

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
];

// What the app is built on — shown as a subtle "built on a modern stack" strip.
export const STACK = [
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "React", href: "https://react.dev" },
  { name: "Convex", href: "https://www.convex.dev" },
  { name: "LiveKit", href: "https://livekit.io" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com" },
  { name: "TypeScript", href: "https://www.typescriptlang.org" },
  { name: "Electron", href: "https://www.electronjs.org" },
  { name: "Capacitor", href: "https://capacitorjs.com" },
];

export type Feature = { icon: string; title: string; description: string };

export const FEATURES: Feature[] = [
  {
    icon: "hash",
    title: "Channels",
    description:
      "Dedicated spaces for every team, project, and topic. Channels can be public or private, and announcement channels let administrators broadcast to everyone.",
  },
  {
    icon: "message",
    title: "Direct messages",
    description:
      "One-to-one and group conversations with typing indicators, reactions, and threaded replies.",
  },
  {
    icon: "headphones",
    title: "Huddles",
    description:
      "Start an audio or video call with screen sharing from any channel or conversation, without scheduling or meeting links.",
  },
  {
    icon: "thread",
    title: "Threads",
    description: "Reply in a thread to keep focused discussions separate from the main channel.",
  },
  {
    icon: "poll",
    title: "Polls",
    description:
      "Create a poll with /poll, with support for multiple choice, anonymous voting, and automatic closing.",
  },
  {
    icon: "search",
    title: "Search",
    description: "Find messages, files, and people quickly, with filters for channel and author.",
  },
  {
    icon: "bell",
    title: "Notifications",
    description:
      "Set preferences for each channel, mute conversations, and pause notifications when you need to focus.",
  },
  {
    icon: "bolt",
    title: "Built for speed",
    description:
      "A quick switcher, global keyboard shortcuts, and optimistic updates keep the interface responsive.",
  },
];

// Richer feature entries for the dedicated Features page, each with a few
// scannable sub-capabilities.
export type FeatureDetail = Feature & { bullets: string[] };

export const FEATURE_DETAILS: FeatureDetail[] = [
  {
    icon: "hash",
    title: "Channels",
    description: "Organized spaces for every team, project, and topic.",
    bullets: [
      "Announcement channels for broadcasts",
      "Custom sections with drag-and-drop ordering",
      "Topics, descriptions, and channel administrators",
    ],
  },
  {
    icon: "message",
    title: "Direct messages",
    description: "Private conversations between two or more people.",
    bullets: ["Typing indicators", "Reactions and threaded replies", "Group conversations"],
  },
  {
    icon: "headphones",
    title: "Huddles",
    description: "Audio and video calls that start in a single click.",
    bullets: ["Screen sharing", "No scheduling or meeting links", "Available in every channel and conversation"],
  },
  {
    icon: "thread",
    title: "Threads",
    description: "Focused discussions that stay out of the main channel.",
    bullets: ["Threaded replies", "Follow the threads you take part in", "A dedicated Threads view"],
  },
  {
    icon: "poll",
    title: "Polls",
    description: "Structured decisions with /poll.",
    bullets: ["Multiple-choice questions", "Anonymous voting", "Live results and automatic closing"],
  },
  {
    icon: "search",
    title: "Search",
    description: "Locate any message, file, or person in seconds.",
    bullets: [
      "Full-text search",
      "Filters for channel and author",
      "Files and links index",
      "Direct links to the original message",
    ],
  },
  {
    icon: "bell",
    title: "Notifications",
    description: "Control which notifications reach you, and when.",
    bullets: ["Per-channel preferences", "Muting and do not disturb", "Reminders with /remind"],
  },
  {
    icon: "bolt",
    title: "Built for speed",
    description: "A responsive interface designed for keyboard users.",
    bullets: [
      "Search (⌘K) and quick switcher (⌘J)",
      "Global keyboard shortcuts",
      "Optimistic updates",
      "Workspace themes in light and dark mode",
    ],
  },
];

export const WHY = [
  {
    icon: "server",
    title: "Open source and self-hosted",
    description:
      "Deploy Sangria on your own infrastructure. The source code is licensed under the GPL-3.0.",
  },
  {
    icon: "shield",
    title: "You own your data",
    description:
      "When you host Sangria yourself, your conversations stay on your systems, with no vendor lock-in.",
  },
  {
    icon: "monitor",
    title: "Available across platforms",
    description:
      "A full web app and a native macOS desktop app, with Windows, Linux, iOS, and Android in development.",
  },
  {
    icon: "bolt",
    title: "Built for speed",
    description:
      "A quick switcher, keyboard shortcuts, and optimistic updates mean the interface responds immediately.",
  },
];

export const FAQ = [
  {
    q: "Is Sangria open source?",
    a: "Yes. Sangria is released under the GPL-3.0 license and can be self-hosted, so your workspace and its data remain under your control.",
  },
  {
    q: "Which platforms are supported?",
    a: "Sangria runs as a full web app in any modern browser. A native desktop app is available for macOS, and apps for Windows, Linux, iOS, and Android are in development.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Sangria works in any modern browser. The desktop app is optional and uses the same account.",
  },
  {
    q: "Can I migrate from another chat tool?",
    a: "Yes. Sangria includes an importer for Mattermost that transfers your channels, messages, and history.",
  },
  {
    q: "How much does it cost?",
    a: "Sangria is free to self-host. There are no per-seat fees, and you decide where it runs.",
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

// hrefs are placeholders. Only the macOS desktop build ships today; the rest are
// labeled "coming soon" rather than pointing at store URLs that 404.
export const PLATFORMS: Platform[] = [
  {
    os: "mac",
    name: "macOS",
    kind: "Desktop app",
    href: "#",
    available: true,
    note: "Universal build for Apple silicon and Intel",
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
