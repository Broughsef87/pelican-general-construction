/* GA4 (FOR-81): set GA4_ID to the Measurement ID (e.g. 'G-XXXXXXXXXX') from Andrew
   to activate analytics across all /services, /tri-cities, /resources pages. Empty = off. */
(function () {
  var GA4_ID = '';
  if (!GA4_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA4_ID);
})();

/* Pelican sub-page nav behavior: scroll state + mobile menu. */
(function () {
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    var open = false;
    var toggle = function (force) {
      open = force !== undefined ? force : !open;
      burger.setAttribute('aria-expanded', String(open));
      if (open) {
        navLinks.style.cssText = 'display:flex;flex-direction:column;align-items:flex-start;position:fixed;top:72px;left:0;right:0;background:rgba(245,240,232,.98);padding:2rem;gap:1.5rem;border-bottom:1px solid #D0C8BA;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);z-index:99';
        navLinks.querySelectorAll('a').forEach(function (a) { a.style.color = '#1A1510'; a.style.textShadow = 'none'; });
      } else {
        navLinks.removeAttribute('style');
        navLinks.querySelectorAll('a').forEach(function (a) { a.style.color = ''; a.style.textShadow = ''; });
      }
    };
    burger.addEventListener('click', function () { toggle(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) toggle(false); });
    navLinks.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { if (open) toggle(false); }); });
  }
})();
