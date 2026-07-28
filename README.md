# Soma & Soil

Marketing site for **Soma & Soil**, a sensory wellness app that turns candle rituals into guided breathwork, soundscapes, and mood check-ins.

BCIT Web Technologies — Assignment 2.

## Live

- Vercel: https://soma-and-soil.vercel.app
- GitHub Pages: https://esmeccy.github.io/soma-and-soil/

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, about, features, blog gallery, FAQ |
| `Blog.html` | Blog post detail page |

## Structure

```
├── index.html
├── Blog.html
├── css/
│   ├── reset.css   normalize defaults
│   ├── base.css    shared header, footer, typography
│   ├── home.css    home page sections
│   └── blog.css    blog page
├── js/
│   └── main.js     sticky header, mobile nav, scroll reveal, scroll spy
└── images/
```

## Built with

Hand-written HTML, CSS, and vanilla JavaScript — no framework, no build step. Open `index.html` in a browser to run it locally.

Notable bits:

- **SEO / social** — meta description, canonical URL, Open Graph tags, and JSON-LD structured data (`SoftwareApplication` + `FAQPage`) in `index.html`.
- **Accessibility** — semantic landmarks, `aria-label` on sections and icon links, `aria-expanded` on the menu toggle, `aria-current` on the active nav link.
- **Native over JS** — the FAQ accordion uses `<details>`/`<summary>`, so open/close, keyboard support, and screen-reader state come free from the browser.
- **Scroll behaviour** — `IntersectionObserver` drives both the reveal-on-scroll animations (stagger lives in CSS `transition-delay`) and the nav scroll spy.
- **Responsive** — hamburger nav collapses on tablet and phone widths.

Type: [Rubik](https://fonts.google.com/specimen/Rubik) via Google Fonts.

## Deploying

Pushes to this repo redeploy automatically — the Vercel project is connected to GitHub. To deploy manually:

```sh
vercel --prod
```

## Credits

Design and build by Esme Chan. © 2025 Soma & Soil.
