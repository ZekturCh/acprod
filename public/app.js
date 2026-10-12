// Completar solo con datos confirmados del negocio.
const CONTACTS = { whatsapp: '51931505279', tiktok: 'https://www.tiktok.com/', facebook: 'https://www.facebook.com/' };
if (CONTACTS.whatsapp) {
  const url = `https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('hola, me interesa este servicio.')}`;
  document.querySelectorAll('.contact, .service-contact').forEach(link => { link.href = url; });
  const label = document.querySelector('.featured div');
  if (label) label.innerHTML = 'WhatsApp<small>Cotiza tu evento</small>';
}
const list = document.querySelector('.link-list');
for (const [name, url] of [['TikTok', CONTACTS.tiktok], ['Facebook', CONTACTS.facebook]]) {
  if (!url || !list) continue;
  const link = document.createElement('a');
  link.className = 'link-row'; link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  const icon = document.createElement('span'); icon.textContent = name === 'TikTok' ? '♪' : 'f';
  const label = document.createElement('div'); label.textContent = name;
  const arrow = document.createElement('span'); arrow.textContent = '↗';
  link.append(icon, label, arrow); list.insertBefore(link, list.lastElementChild);
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const cards = document.querySelectorAll('.card');
const energyTitle = document.querySelector('.closing h2 span');
if (energyTitle && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('title-visible', entry.isIntersecting));
  }, { threshold: 0.5 }).observe(energyTitle);
} else if (energyTitle) {
  energyTitle.classList.add('title-visible');
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add('is-visible'));
}

// Chase: ida, vuelta, impares, pares y una pausa plateada.
if (list) {
  const links = [...list.querySelectorAll('.link-row')];
  const steps = [
    [], ...links.map((_, i) => [i]),
    ...links.map((_, i) => [links.length - 1 - i]).slice(1),
    [], links.map((_, i) => i).filter(i => i % 2 === 0),
    links.map((_, i) => i).filter(i => i % 2 === 1), []
  ];
  const colors = ['130,165,255', '189,145,255', '255,135,193', '113,223,240', '144,231,189'];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let step = 0, timer;
  const clear = () => links.forEach(link => link.classList.remove('chase-on'));
  const tick = () => {
    clear();
    steps[step].forEach(index => {
      links[index].style.setProperty('--chase-color', colors[(step + index) % colors.length]);
      links[index].classList.add('chase-on');
    });
    step = (step + 1) % steps.length;
    timer = setTimeout(tick, 850);
  };
  const sync = () => {
    clearTimeout(timer); clear(); step = 0;
    if (!document.hidden && !reducedMotion.matches) tick();
  };
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  sync();
}
