(function () {
  initI18n();

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.06, 0.48)}s`;
    observer.observe(el);
  });

  const heroReveals = document.querySelectorAll(".hero .reveal");
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 120 + i * 100);
  });
})();
