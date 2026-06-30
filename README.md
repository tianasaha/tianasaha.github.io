# Tiana Saha — Architecture Portfolio (GitHub Pages)

Static portfolio site that displays the PDF full-screen. Works on desktop (native PDF viewer) and mobile (PDF.js).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page layout — iframe on desktop, mobile container on phone/tablet |
| `styles.css` | Full-viewport layout and mobile styles |
| `mobile-pdf.js` | PDF.js viewer for screens ≤ 1024px (fit-to-width, scrollable) |
| `portfolio.pdf` | Deployed portfolio (copy of *Tiana Saha - CMU Architecture Portfolio.pdf*) |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll |

## Crisp detail when zooming

- **Desktop / laptop:** The browser’s native PDF viewer handles zoom (pinch or Ctrl +/-). Vector PDF stays sharp at any zoom.
- **Mobile / tablet:** PDF.js renders each page at 3× resolution so pinch-zoom stays reasonably sharp without re-rendering on every zoom change.

## Deploy / update

From this folder:

```bash
cd "/Users/deepmangrulkar/Desktop/deep/tin tin"

# After updating the source PDF, refresh portfolio.pdf:
cp "Tiana Saha - CMU Architecture Portfolio.pdf" portfolio.pdf

git add .
git commit -m "Update portfolio PDF"
git push
```

**GitHub Pages:** Repo → **Settings** → **Pages** → Deploy from branch **main**, folder **/ (root)**.

Site URL (example): `https://tianasaha.github.io`

## Updating the PDF later

1. Replace `Tiana Saha - CMU Architecture Portfolio.pdf` with the new file (same name or update the `cp` command).
2. Run: `cp "Tiana Saha - CMU Architecture Portfolio.pdf" portfolio.pdf`
3. Commit and push both files (or just `portfolio.pdf` if you only deploy that).

The site references **`portfolio.pdf`** (no spaces) so URLs work reliably on GitHub Pages.
