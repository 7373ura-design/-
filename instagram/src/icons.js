// Thin line icons in a gold ring, like the reference carousels.
const GOLD = '#A27B4F';
const P = {
  wave: '<path d="M5 15c2.5-4 5.5-4 7 0s4.5 4 7 0"/><path d="M5 10c2.5-3 5.5-3 7 0s4.5 3 7 0" opacity=".6"/>',
  pair: '<circle cx="9" cy="12" r="4"/><circle cx="15" cy="12" r="4"/>',
  house: '<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  leaf: '<path d="M6 18C6 10 11 6 19 6c0 8-4 13-12 12z"/><path d="M6 18l7-7"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',
  gift: '<rect x="4" y="10" width="16" height="10"/><path d="M3 7h18v3H3zM12 7v13"/><path d="M12 7c-2-4-6-3-5 0M12 7c2-4 6-3 5 0"/>',
  pin: '<path d="M12 21s6-6.5 6-11a6 6 0 10-12 0c0 4.5 6 11 6 11z"/><circle cx="12" cy="10" r="2"/>',
  cal: '<rect x="4" y="6" width="16" height="14" rx="1"/><path d="M4 10h16M8 4v4M16 4v4"/>',
  people: '<circle cx="9" cy="9" r="3"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="10" r="2.4"/><path d="M15.5 14.5c3 0 5.5 1.6 5.5 4.5"/>',
  camera: '<rect x="3" y="7" width="18" height="12" rx="1"/><circle cx="12" cy="13" r="3.5"/><path d="M8 7l1.5-2h5L16 7"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  share: '<circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8 11l8-4M8 13l8 4"/>',
  link: '<path d="M10 14a4 4 0 006 0l3-3a4 4 0 00-6-6l-1 1"/><path d="M14 10a4 4 0 00-6 0l-3 3a4 4 0 006 6l1-1"/>',
  bookmark: '<path d="M7 4h10v16l-5-4-5 4z"/>',
  bell: '<path d="M6 17V11a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21h4"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/>',
  pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
  key: '<circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v3M21 12v2"/>',
  star: '<path d="M12 4l2.4 5 5.6.8-4 3.9.9 5.5L12 16.6 7.1 19.2l.9-5.5-4-3.9 5.6-.8z"/>',
  hands: '<path d="M4 14c3 0 5 2 8 2s4-1 6-3"/><path d="M4 18c3 0 5 1.5 8 1.5S17 18 20 16"/><circle cx="12" cy="8" r="3"/>',
};
function icon(name, size = 58) {
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><circle cx="32" cy="32" r="30" fill="#EADFCB" fill-opacity=".55" stroke="${GOLD}" stroke-width="1.6"/>
  <g transform="translate(16 16) scale(1.333)" fill="none" stroke="${GOLD}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${P[name]}</g></svg>`;
}
module.exports = { icon };
