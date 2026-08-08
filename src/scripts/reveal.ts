// Adds `.in` to `.reveal` elements as they scroll into view (one-shot). Vanilla,
// no framework. Falls back to showing everything if IntersectionObserver is
// missing or the user prefers reduced motion.
const reveals = document.querySelectorAll<HTMLElement>(".reveal");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduced || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  reveals.forEach((el) => io.observe(el));
}
