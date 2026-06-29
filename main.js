// Marque que JS est actif (active le masquage progressif des .reveal)
document.documentElement.classList.add('js');

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Année dynamique
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Reveal au scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => {
  // Révèle immédiatement ce qui est déjà visible au chargement
  const r = el.getBoundingClientRect();
  if (r.top < window.innerHeight) el.classList.add('in');
  else io.observe(el);
});

// Compteurs animés (bandeau stats)
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = (el.dataset.decimals) ? parseInt(el.dataset.decimals) : 0;
      let start = null;
      const dur = 1400;
      function fmt(n) { return n.toFixed(decimals).replace('.', ','); }
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const val = (target * (0.5 - Math.cos(Math.PI * p) / 2));
        el.firstChild.textContent = fmt(val);
        if (p < 1) requestAnimationFrame(step);
        else el.firstChild.textContent = fmt(target);
      }
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => cio.observe(c));
}

// Formulaire contact (démo — pas de backend)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const profile = document.getElementById('profile')?.value || '';
    const message = (document.getElementById('message')?.value || '').trim();
    const to = 'meftahcomholding@gmail.com';
    const subject = `Contact MeftahCom — ${name || 'Nouveau message'}`;
    const body =
      `Nom : ${name}\n` +
      `Email : ${email}\n` +
      `Profil : ${profile}\n\n` +
      `Message :\n${message}\n`;
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const msg = document.getElementById('form-msg');
    if (msg) {
      msg.textContent = "Votre messagerie va s'ouvrir avec le message pré-rempli. Il ne reste qu'à cliquer sur Envoyer.";
      msg.style.color = 'var(--green-700)';
    }
  });
}
