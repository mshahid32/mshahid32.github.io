# Muhammad Shahid Aslam, Developer Website

A production-ready Vite, React and TypeScript portfolio for independent mobile app developer Muhammad Shahid Aslam. It presents the Word Fuse and Hue Dive games, shipped production apps, experience, FAQ and contact details.

## Run locally

```sh
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:5173/`.

## Build and validate

```sh
npm run lint
npm run build
npm run preview
```

The static output is written to `dist/`.

## Deployment

### GitHub Pages

Push the repository to GitHub and enable Pages under repository Settings. Configure Pages to deploy from a GitHub Actions workflow. The Vite build must publish `dist/`; the repository currently contains the design exports, legacy static files and a new Vite build, so remove or leave legacy files outside the Pages publish directory as appropriate.

The generated `public/404.html` and `_redirects` provide refresh handling for static hosts. GitHub Pages uses the 404 fallback differently, but public routes must be redirected at the host level or through repository routing configuration.

### Netlify

Import the repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` routes refreshes to `index.html`.

### Vercel

Import the repository. Vercel detects Vite automatically. `vercel.json` contains an SPA rewrite for `/privacy`, `/terms` and unknown routes.

## Store links

The game store pills in `src/pages/Home.tsx` are intentionally non-linking coming-soon labels. When a listing is live:

1. Replace each `.store-pills` span with an anchor or add `href` fields to `src/data/content.ts`.
2. Preserve `rel="noopener noreferrer"` for external links.
3. Open Google Play and App Store listings in a new tab only if desired.

## Legal pages

Update the bracketed placeholders in `src/data/legal.ts` and review `TODO.md` before publishing. The same legal copy is rendered at:

- `/privacy`
- `/terms`

## Play Console checklist

1. Set the developer website to the deployed domain in Google Play Console.
2. Verify the deployed domain in Google Search Console.
3. Add `https://<your-domain>/privacy` as the app privacy policy URL.
4. Replace every placeholder and have the privacy and terms text reviewed before submission.

## Assets

Design images live in `public/images/`. The 540px-wide screenshot copies use `srcset`-style `<picture>` sources for smaller mobile loads. The website uses `public/favicon.svg` and `public/images/og-image.jpg` for metadata assets.
