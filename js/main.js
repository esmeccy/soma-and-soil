/* Shared by index.html and Blog.html. Loaded with `defer`, so the DOM is
   parsed before this runs and nothing needs a DOMContentLoaded wrapper. */

// Header picks up a solid background once you scroll off the top
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger opens the collapsed nav on tablet/phone
const hamburger = document.querySelector('.hamburger-menu');
hamburger.setAttribute('aria-expanded', 'false');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.site-header_nav');
    hamburger.setAttribute('aria-expanded', nav.classList.toggle('active'));
});

// Reveal on scroll. The stagger lives in CSS transition-delay; this only adds .visible.
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // animate once, not on every re-entry
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Scroll spy -> highlight the nav link for whichever section is in view.
// Home only: on Blog.html none of these sections exist, so the block is skipped
// and the nav-active authored into the markup is left alone.
const navSpy = [
    ['.hero',         '.nav-home'],
    ['.about',        '.nav-home'],
    ['#Features',     '.nav-features'],
    ['.blog-gallery', '.nav-blog'],
    ['#FAQ',          '.nav-faq'],
];

const spiedSections = navSpy
    .map(([sectionSelector, navSelector]) => [document.querySelector(sectionSelector), navSelector])
    .filter(([section]) => section);

if (spiedSections.length) {
    const setActiveNav = (navSelector) => {
        document.querySelectorAll('.site-header_nav li').forEach(li => {
            const on = li.matches(navSelector);
            li.classList.toggle('nav-active', on);
            const link = li.querySelector('a');
            if (on) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
    };

    const sectionToNav = new Map(spiedSections);
    // a thin band ~40-45% down the viewport acts as the "you are here" line,
    // so exactly one section is ever the current one
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveNav(sectionToNav.get(entry.target));
        });
    }, {
        rootMargin: '-40% 0px -55% 0px'
    });

    sectionToNav.forEach((_, section) => spyObserver.observe(section));
    setActiveNav('.nav-home'); // at the top of the page before any scrolling
}
