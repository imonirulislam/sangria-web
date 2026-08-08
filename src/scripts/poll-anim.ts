// Animates the poll mock like a live vote: votes stream in (weighted per option),
// bars grow, counts tick, the leader shifts, then it resets and loops — only
// while on screen. Reduced-motion shows the final tally, static.
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupPoll(poll: HTMLElement) {
  const opts = Array.from(poll.querySelectorAll<HTMLElement>("[data-opt]"));
  const totalEl = poll.querySelector<HTMLElement>("[data-total]");
  const weights = opts.map((o) => parseFloat(o.dataset.weight || "1"));
  const CAP = 24;
  let counts = opts.map(() => 0);
  let timer = 0;
  let running = false;

  const render = () => {
    const total = counts.reduce((a, b) => a + b, 0);
    const denom = total || 1;
    const lead = counts.indexOf(Math.max(...counts));
    opts.forEach((el, i) => {
      const pct = Math.round((counts[i] / denom) * 100);
      const bar = el.querySelector<HTMLElement>("[data-bar]");
      const count = el.querySelector<HTMLElement>("[data-count]");
      if (bar) bar.style.width = pct + "%";
      if (count) count.textContent = `${counts[i]} · ${pct}%`;
      const isLead = total > 0 && i === lead;
      el.classList.toggle("is-lead", isLead);
      el.querySelector<HTMLElement>("[data-trophy]")?.classList.toggle("hidden", !isLead);
    });
    if (totalEl) {
      const t = counts.reduce((a, b) => a + b, 0);
      totalEl.textContent = `${t} vote${t === 1 ? "" : "s"}`;
    }
  };

  const pick = () => {
    const sum = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * sum;
    for (let i = 0; i < weights.length; i++) {
      r -= weights[i];
      if (r <= 0) return i;
    }
    return weights.length - 1;
  };

  const tick = () => {
    if (counts.reduce((a, b) => a + b, 0) >= CAP) {
      timer = window.setTimeout(() => {
        counts = opts.map(() => 0);
        render();
        timer = window.setTimeout(tick, 900);
      }, 2200);
      return;
    }
    counts[pick()]++;
    render();
    timer = window.setTimeout(tick, 480 + Math.random() * 520);
  };

  const start = () => {
    if (running) return;
    running = true;
    timer = window.setTimeout(tick, 500);
  };
  const stop = () => {
    running = false;
    window.clearTimeout(timer);
  };

  if (reduced) {
    counts = opts.map((o) => parseInt(o.dataset.final || "0", 10));
    render();
    return;
  }
  render();

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0.3 },
  );
  io.observe(poll);
}

document.querySelectorAll<HTMLElement>("[data-poll]").forEach(setupPoll);
