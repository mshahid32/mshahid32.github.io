# Muhammad Shahid Aslam - Developer Portfolio

A static, responsive portfolio for independent Android and iOS app developer Muhammad Shahid Aslam. The website showcases Word Fuse and Hue Dive and is prepared for GitHub Pages and AppLovin MAX publisher verification.

## Local preview

From this folder:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Configure site information

Edit `config/site-config.js` only:

- `contactEmail`: set a public email address. Keep it empty to show the placeholder state.
- `linkedinUrl`: set a LinkedIn profile URL. It remains hidden until configured.
- `games.wordFuse.googlePlayUrl`: set the Word Fuse Google Play listing URL.
- `games.wordFuse.appStoreUrl`: set the Word Fuse App Store listing URL.
- `games.hueDive.googlePlayUrl`: set the Hue Dive Google Play listing URL.
- `games.hueDive.appStoreUrl`: set the Hue Dive App Store listing URL.

Google Play and Coming Soon behavior are handled by `js/main.js`. A game link stays disabled and labeled **Coming Soon** while its URL is empty.

## Replace game images

Use the dedicated locations:

- `assets/images/word-fuse/app-icon.png`
- `assets/images/hue-dive/app-icon.png`

Replace these files while preserving the filenames, or update the image `src` attributes in `index.html`. To add real screenshots, place them in the corresponding folder and update the game card markup in `index.html`. Keep screenshots reasonably compressed for fast loading and provide descriptive alt text.

## Privacy policy

Review `privacy-policy.html` before publication. Marked placeholder sections must be updated with the actual data, advertising, SDK, child-directed status, and contact practices for each app. Do not publish unconfirmed collection or usage claims.

## AppLovin and app-ads.txt

`app-ads.txt` is public at the repository root and therefore can be reached from `/app-ads.txt` on GitHub Pages.

No AppLovin publisher ID or authorized seller declaration is included because none was supplied. Once AppLovin provides the exact declaration, replace the comment-only content in `app-ads.txt` with its exact seller line:

```text
domain, PUBLISHER_ID, DIRECT_OR_RESELLER, CERTIFICATION_AUTHORITY_ID
```

Use the exact line supplied by AppLovin.

## Deploy to GitHub Pages

1. Ensure the repository is named `muhammadshahidaslam.github.io` for the canonical root domain.
2. Push all files to the `main` branch.
3. In GitHub repository settings, open **Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow in `.github/workflows/deploy.yml` publishes the repository root on every push to `main`.

The existing `/play/` Word Fuse page remains available.
