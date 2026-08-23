# __myWayToZenith__

The portfolio of Karthik Gogisetty, Senior Machine Learning Engineer — laid out as a magazine
issue rather than a conventional portfolio page.

## The idea

A masthead, a cover, a numbered contents page, then six pieces of work presented as case-study
spreads: a plate on one side, standfirst and body on the other, alternating sides down the page.
Career, writing, an index of the toolkit and a colophon close the issue. Type and hairline rules
carry the design — there are no gradients, glows or cards anywhere.

Set in **Instrument Serif** for display, **Inter** for body, **JetBrains Mono** for labels and
folios. Paper ivory by default, warm near-black in dark mode, one print vermilion accent.

## Local Development

### Prerequisites
- Node.js 18 or 20
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000).

### Building for Production
```bash
npm run build
```

### Tests
```bash
npm test
```

## Adding photographs

The layout is photo-led, and every image slot is empty by default. An empty slot renders a
designed *plate* — ruled tint, corner crop marks, roman numeral and a spec line — so the page
reads as a print layout awaiting art rather than a broken frame.

To fill one:

1. Put the file in `public/plates/`, e.g. `public/plates/shop-ai.jpg`
2. In [`src/data/work.js`](src/data/work.js), set the entry's `image` and `alt`:

```js
{
  id: 'shop-ai',
  // …
  image: '/plates/shop-ai.jpg',
  alt: 'A shopfront photograph as submitted during merchant onboarding',
}
```

The plate scaffolding disappears and the photograph takes its place. Lazy loading, `object-fit`
and the caption are already handled. The cover has its own `image` field in the same file.

## Editing content

Everything user-facing lives in [`src/data/work.js`](src/data/work.js) — the cover, all six case
studies with their fact tables, career history, essays and the toolkit index. Components read
from it, so copy changes never require touching a component.

## Project structure

```
src/
  App.js                  page order
  index.css               design tokens, both themes, editorial utilities
  data/work.js            all content — edit this first
  hooks/useTheme.js       light/dark with localStorage persistence
  components/
    Masthead.js           sticky masthead and section links
    Cover.js              issue line, display headline, standfirst, lead plate
    Contents.js           numbered index of the case studies
    Work.js               sequences the case studies
    CaseStudy.js          one spread; plates alternate side
    Plate.js              image slot, or a composed placeholder plate
    Career.js             roles and achievements
    Writing.js            essays, incl. unpublished drafts
    Colophon.js           toolkit index, contact, footer
    Reveal.js             restrained scroll entrance, reduced-motion aware
    ThemeToggle.js
```

## Theming

Colours resolve through HSL custom properties in `src/index.css`: `:root` holds the paper palette,
`.dark` overrides it. A small inline script in `public/index.html` applies the stored theme before
first paint, so there is no flash of the wrong palette. Change `--accent` to re-tint every
numeral, drop cap and rule on the site.

## Motion

Motion is deliberately minimal — a short lift and fade as sections arrive. Every animation is
gated on `prefers-reduced-motion`, and elements render at their final state when it is set, so
nothing can be left invisible by an instant anchor jump.

## Deployment

Built by Cloudflare Pages from `main`.

- Build command: `npm run build`
- Output directory: `build`

Cloudflare sets `CI=true`, which turns lint warnings into build failures — the build is verified
clean under `CI=true`.

If client-side routes are added later, Cloudflare needs an SPA fallback or direct links will 404.
Add `public/_redirects` containing `/* /index.html 200`; Create React App copies `public/` into
`build/`, so it lands where Cloudflare expects it.

## Reference
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
