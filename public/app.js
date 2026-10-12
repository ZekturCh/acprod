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
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.35, rootMargin: '0px 0px -8% 0px' });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add('is-visible'));
}
