# James Mayen — Personal Portfolio

A production-ready personal portfolio built with React, Vite, and Tailwind CSS, positioning James Mayen as a cybersecurity enthusiast, software developer, and youth technology leader.

## Tech stack

- **React 18** — component architecture
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling with a custom design token system
- **Motion** (Framer Motion's successor) — scroll-triggered reveals, hover interactions, page-load sequences
- **React Router** — client-side routing (404 handling)
- **React Icons** — icon set (Feather icons via `react-icons/fi`)
- **EmailJS** (`@emailjs/browser`) — contact form email delivery, pre-wired but disabled until you add credentials

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build      # production build into /dist
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project structure

```
src/
  assets/
    images/          # portrait, project screenshots
    files/            # CV PDF, certificate PDFs
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Skills, Experience, Projects,
                        # Leadership, Certifications, Contact
    ui/                # Button, Card, SectionHeading, SkillBar,
                        # ProjectCard, StatCard, GridBackground, RoleRotator
    NotFound.jsx
  context/
    ThemeContext.jsx   # dark/light mode provider
  data/
    portfolioData.js   # ALL site content lives here
  hooks/
    useInView.js        # scroll-reveal trigger
    useCountUp.js        # animated number count-up
    useScrollSpy.js      # active nav-link tracking
  pages/
    HomePage.jsx
  styles/
    index.css           # Tailwind directives + base styles
  App.jsx
  main.jsx
```

## Editing content

Almost everything you'll want to change lives in **`src/data/portfolioData.js`**:
profile info, social links, stats, skill categories and levels, experience timeline, projects, leadership items, and certifications. You generally won't need to touch component code to update copy.

## Adding your real assets

The site currently uses clearly-labeled placeholders so it's obvious what to swap:

1. **Portrait photo** — add your image to `src/assets/images/portrait.jpg`, then in `portfolioData.js` set:
   ```js
   portraitSrc: '/src/assets/images/portrait.jpg'
   ```
   (or import it at the top of `Hero.jsx` and pass the imported reference for proper bundling)

2. **CV PDF** — place your CV in `public/james-mayen-cv.pdf` (the `cvSrc` in `portfolioData.js` already points there). Anything in `/public` is served as-is.

3. **Project screenshots** — add images under `src/assets/images/` and set each project's `image` field in `portfolioData.js`.

4. **Certificates** — place PDFs in `public/certificates/` and set each certification's `fileSrc` field.

## Setting up the contact form (EmailJS)

The contact form in `src/components/sections/Contact.jsx` is fully built but ships with email sending commented out so it doesn't fail on fake credentials.

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service and an Email Template (with `name`, `email`, `subject`, `message` variables)
3. Copy `.env.example` to `.env` and fill in your IDs:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
4. In `Contact.jsx`, uncomment the `emailjs` import and the `emailjs.send(...)` call, and replace the constants at the top of the file with `import.meta.env.VITE_EMAILJS_SERVICE_ID` etc.

## Dark / light mode

Handled by `src/context/ThemeContext.jsx`. Preference persists in `localStorage` under the key `jm-theme`. Defaults to dark mode, matching the brand's terminal-inspired identity.

## Design system notes

- **Colors**: near-black base (`#0A0E14`) with a single signal-green accent (`#39FF88`), used deliberately rather than scattered.
- **Type**: Space Grotesk (display/headings), Inter (body), JetBrains Mono (data points, role rotator, tags) — the monospace type is what ties the "developer" and "security" identity together visually.
- **Signature motif**: a "scan" hover effect (`.scan-border` in `index.css`) where a thin green line sweeps a card's border on hover, used consistently across skill, project, leadership, and certification cards instead of multiple competing animation ideas.
- Respects `prefers-reduced-motion`.

## Deployment

This is a static Vite app — deploy the `/dist` folder after `npm run build` to any static host:

- **Vercel**: import the repo, framework preset "Vite", done.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: build, then push `/dist` to a `gh-pages` branch (consider `vite-plugin-gh-pages` or `gh-pages` npm package for automation).

## SEO

`index.html` includes meta description, Open Graph tags, Twitter card tags, and JSON-LD structured data (`Person` schema). Update the placeholder URLs (`jamesmayen.dev`) and `og-image.jpg` once a real domain and share image exist. `public/robots.txt` is included; add a `sitemap.xml` once the site has a real domain.

## License

Personal project — all rights reserved to James Mayen.
