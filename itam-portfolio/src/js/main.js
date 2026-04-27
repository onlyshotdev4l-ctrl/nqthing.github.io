
lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.15, ease: 'power2.out' });
});
const revealConfig = { opacity: 0, duration: 1.5, ease: 'power4.out' };
gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 90%' }, y: 100, ...revealConfig });
});
gsap.from('.reveal-left', { scrollTrigger: { trigger: '.reveal-left', start: 'top 80%' }, x: -100, ...revealConfig });
gsap.from('.reveal-right', { scrollTrigger: { trigger: '.reveal-right', start: 'top 80%' }, x: 100, ...revealConfig });
document.querySelectorAll('a, button, .glass').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 4, background: '#fff', opacity: 0.3 }));
    el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, background: '#ff0000', opacity: 1 }));
});

