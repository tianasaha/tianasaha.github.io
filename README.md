# Tiana Saha — Architecture Portfolio (GitHub Pages)

Static portfolio site. **Desktop:** embedded native PDF viewer. **Phone/tablet:** opens `portfolio.pdf` directly in the browser’s built-in viewer (sharp zoom, no loading screen).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Desktop: full-screen iframe. Mobile: redirects to `portfolio.pdf` |
| `styles.css` | Full-viewport layout |
| `portfolio.pdf` | Portfolio (copy of *Tiana Saha - CMU Architecture Portfolio.pdf*) |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll |

## Crisp detail when zooming

Both desktop and mobile use the **browser’s native PDF viewer** (vector PDF), so pinch-zoom and zoom controls stay sharp.

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
