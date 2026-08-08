// Brings the chat/thread mocks to life: messages arrive one by one, their
// reaction pills pop in, and reactions keep ticking up ("people reacting"), then
// it loops — only while on screen. Reduced-motion shows everything, static.
const reducedChat = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupChat(chat: HTMLElement) {
  const msgs = Array.from(chat.querySelectorAll<HTMLElement>("[data-msg]"));
  const reacts = Array.from(chat.querySelectorAll<HTMLElement>("[data-react]"));
  const timers: number[] = [];
  let tickTimer = 0;
  let running = false;

  const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
  const clearAll = () => {
    timers.splice(0).forEach((t) => window.clearTimeout(t));
    window.clearTimeout(tickTimer);
  };
  const countEl = (r: HTMLElement) => r.querySelector<HTMLElement>("[data-count]");
  const target = (r: HTMLElement) => parseInt(r.dataset.target || "1", 10) || 1;
  const setCount = (r: HTMLElement, n: number) => {
    const c = countEl(r);
    if (c) c.textContent = String(n);
  };
  const bump = (r: HTMLElement, n: number) => {
    setCount(r, n);
    r.classList.remove("pop");
    void r.offsetWidth; // reflow so the pop restarts
    r.classList.add("pop");
  };

  if (reducedChat) {
    msgs.forEach((m) => m.classList.add("in"));
    reacts.forEach((r) => {
      r.classList.add("in");
      setCount(r, target(r));
    });
    return;
  }

  const startTicking = () => {
    const tick = () => {
      const live = reacts.filter((r) => r.classList.contains("in"));
      if (live.length) {
        const r = live[Math.floor(Math.random() * live.length)];
        bump(r, (parseInt(countEl(r)?.textContent || "0", 10) || 0) + 1);
      }
      tickTimer = window.setTimeout(tick, 1600 + Math.random() * 1500);
    };
    tickTimer = window.setTimeout(tick, 1400);
  };

  const run = () => {
    clearAll();
    msgs.forEach((m) => m.classList.remove("in"));
    reacts.forEach((r) => {
      r.classList.remove("in", "pop");
      setCount(r, Math.max(1, target(r) - 2));
    });
    msgs.forEach((m, i) => at(350 + i * 750, () => m.classList.add("in")));
    reacts.forEach((r) => {
      const idx = parseInt(r.dataset.at || "0", 10);
      at(350 + idx * 750 + 450, () => {
        r.classList.add("in", "pop");
        setCount(r, target(r));
      });
    });
    const done = 350 + msgs.length * 750 + 900;
    at(done, startTicking);
    at(done + 6500, run);
  };

  const start = () => {
    if (running) return;
    running = true;
    run();
  };
  const stop = () => {
    running = false;
    clearAll();
  };

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0.25 },
  );
  io.observe(chat);
}

document.querySelectorAll<HTMLElement>("[data-chat]").forEach(setupChat);
