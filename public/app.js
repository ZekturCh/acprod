// Completar solo con datos confirmados del negocio.
const CONTACTS = { whatsapp: '', tiktok: 'https://www.tiktok.com/', facebook: 'https://www.facebook.com/' };
if (CONTACTS.whatsapp) {
  const url = `https://wa.me/${CONTACTS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola AC Producciones, quisiera cotizar un evento.')}`;
  document.querySelectorAll('.contact').forEach(link => { link.href = url; });
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
