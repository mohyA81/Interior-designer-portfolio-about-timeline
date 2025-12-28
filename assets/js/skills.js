console.log("فایل جاوااسکریپت با موفقیت لود شد!");
(() => {
  const skillRows = document.querySelectorAll('.skill-row');

  if (!skillRows.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateSkills = () => {
    skillRows.forEach((row, index) => {
      const percent = row.dataset.percent;
      const fill = row.querySelector('.progress-fill');

      if (!fill) return;

      setTimeout(() => {
        fill.style.width = percent + '%';
      }, index * 120);
    });
  };

  if (prefersReducedMotion) {
    animateSkills();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('#skills'));
})();

setTimeout(() => {
    document.querySelectorAll('.skill-row').forEach(row => {
        const percent = row.dataset.percent;
        const fill = row.querySelector('.progress-fill');
        if (fill) fill.style.width = percent + '%';
    });
    console.log("The animation was done manually.");
}, 1000);