
lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});
gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 95%' }, y: 50, opacity: 0, duration: 1.5, ease: 'power4.out' });
});
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 5, background: 'rgba(255,0,0,0.2)', border: '1px solid #ff0000' }));
    el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, background: '#ff0000', border: 'none' }));
});

