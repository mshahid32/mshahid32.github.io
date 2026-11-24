# Muhammad Shahid Aslam - Developer Portfolio

A static, responsive portfolio for independent Android and iOS app developer Muhammad Shahid Aslam. The website showcases Word Fuse and Hue Dive and is prepared for GitHub Pages and InMobi publisher verification.

## Local preview

From this folder:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Configure site information

Edit `config/site-config.js` only:

- `contactEmail`: the public contact email shown on the site.
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

`privacy-policy.html` describes the data and advertising practices for Word Fuse and Hue Dive. Update it whenever app data collection, advertising SDKs, or privacy practices change.

## InMobi and app-ads.txt

`app-ads.txt` is public at the repository root and therefore can be reached from `/app-ads.txt` on GitHub Pages.

`app-ads.txt` contains the supplied InMobi publisher ID. Confirm the seller declaration against the InMobi dashboard before verification:

```text
inmobi.com, fdb0c3d7bb89442d931cf93a64d196a4, DIRECT, 83e75a7ae333ca9d
```

Use the exact line supplied by InMobi.

## Deploy to GitHub Pages

1. Ensure the repository is named `mshahid32.github.io` for the canonical root domain.
2. Push all files to the `main` branch.
3. In GitHub repository settings, open **Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow in `.github/workflows/deploy.yml` publishes the repository root on every push to `main`.

The existing `/play/` Word Fuse page remains available.
