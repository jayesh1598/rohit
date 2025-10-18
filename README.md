# Silverfy — Exact Preview → PDF (Pixel-Perfect)

This creates a **pixel-accurate PDF** from the live preview by rendering the site in a headless Chromium and printing to PDF.

## Quick Start
```bash
# 1) Unzip and cd into folder
npm i
npm run dev        # starts Vite (http://localhost:5173)
# new terminal:
npm run export     # creates Silverfy_Preview_EXACT.pdf
```

- If your dev server runs on a different port:
  ```bash
  PREVIEW_URL=http://localhost:5174 OUT=Silverfy_Custom.pdf npm run export
  ```

## Chrome manual export (also pixel-accurate)
1. Run `npm run dev` and open the page in Chrome.
2. Press **Ctrl/Cmd + P → Save as PDF**
3. **Options**: Background graphics = ON, Margins = None, Scale = 100 (or Fit to page), Paper = A4 or Custom.

---

## Files
- `index.html` + `main.jsx` + `App.jsx` — your site.
- `export-pdf.mjs` — Puppeteer script to render and export to PDF.
- `package.json` — includes scripts: `dev`, `export`.

## Notes
- This approach prints the *actual rendered page*, keeping gradients, glass, and fonts.
- For ultra-long pages, increase `height` in `export-pdf.mjs` or switch to `page.pdf({ format: 'A4', preferCSSPageSize: true })` and add CSS `@page` rules.
