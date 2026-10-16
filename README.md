# Hyang Gu Unmanned Aviation

A small static website about the fictional unmanned aviation program of Hyang Gu: the HG-12 Yǎnshí and HG-21 Fēngyǔ. Hyang Gu and all aircraft shown are fictional.

## Files

- `index.html`: home page and side-by-side comparison
- `hg-12.html`: HG-12 Yǎnshí
- `hg-21.html`: HG-21 Fēngyǔ
- `assets/style.css`: shared styles (light and dark mode follow the visitor's device)
- `assets/site.js`: the sensor toggle and terrain lines on the HG-12 page

No build step or dependencies. Open `index.html` in a browser to preview it locally. Fonts load from Google Fonts, so a connection is needed for the intended typefaces.

## Publish with GitHub Pages

1. Create a repository on GitHub and upload everything in this folder to the top level (so `index.html` is at the root).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

Note: on a free GitHub account, Pages needs a **public** repository, and the published site is public. A private repository can't publish Pages on the Free plan, and private (access-controlled) Pages sites need an organization on GitHub Enterprise Cloud.

## Editing

- Each aircraft has its own accent colour, set at the top of `assets/style.css` (`--lake`, `--ember`).
