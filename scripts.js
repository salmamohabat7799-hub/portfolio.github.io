// scripts.js

// 1 — Greeting (updates header <p>)
(function showGreeting() {
  const headerPara = document.querySelector('header p');
  if (!headerPara) return;

  const hour = new Date().getHours();
  let greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌞"
      : "Good Evening 🌙";

  headerPara.textContent = `${greeting}! I'm salma mohabat, a Web Developer.`;
})();

// 2 — Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -50; // adjust to avoid hiding section title
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// 3 — Back to top button
(function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.className = 'back-to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '⬆ Top';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
})();

// 4 — Dark mode toggle (class toggling + localStorage)
(function initDarkMode() {
  const darkBtn = document.createElement('button');
  darkBtn.id = 'darkModeBtn';
  darkBtn.type = 'button';
  darkBtn.textContent = '🌙 Toggle Dark Mode';
  document.body.prepend(darkBtn);

  // restore preference
  if (localStorage.getItem('yusra-portfolio-dark') === '1')
    document.body.classList.add('dark');

  darkBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('yusra-portfolio-dark', isDark ? '1' : '0');
  });
})();

