// Detects the visitor's platform and (1) personalizes the hero's primary
// download label, (2) flags the matching card on the download page. Vanilla TS,
// no framework. Runs on pages that include it via <script>.
type OS = "mac" | "windows" | "linux" | "ios" | "android" | "unknown";

function detectOS(): OS {
  const ua = navigator.userAgent;
  const touch = navigator.maxTouchPoints ?? 0;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  // iPadOS 13+ reports a desktop Mac UA — tell it apart by touch points.
  if (/Macintosh/i.test(ua) && touch > 1) return "ios";
  if (/Android/i.test(ua)) return "android";
  if (/Mac/i.test(ua)) return "mac";
  if (/Windows|Win32|Win64/i.test(ua)) return "windows";
  if (/Linux/i.test(ua)) return "linux";
  return "unknown";
}

const LABELS: Record<OS, string> = {
  mac: "Download for macOS",
  windows: "Download for Windows",
  linux: "Download for Linux",
  ios: "Get the iOS app",
  android: "Get the Android app",
  unknown: "Get Sangria",
};

const os = detectOS();

// Personalize any hero CTA marked for it.
document.querySelectorAll<HTMLElement>("[data-download-primary]").forEach((el) => {
  el.textContent = LABELS[os];
});

// Flag the matching download card, if present.
const card = document.querySelector<HTMLElement>(`[data-os-card="${os}"]`);
if (card) {
  card.classList.add("ring-2", "ring-brand-500");
  card.querySelector<HTMLElement>("[data-detected-badge]")?.classList.remove("hidden");
}
