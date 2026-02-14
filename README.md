# Architecture Portfolio — GitHub Pages

A minimal, professional portfolio site for an architecture student (CMU). Built as static HTML/CSS/JS so it runs on **GitHub Pages** with no build step.

## What’s in the repo

- **`index.html`** — Single-page site: Hero, About, Education, Experience, Projects, Contact
- **`styles.css`** — Layout and typography (architect-themed, responsive)
- **`script.js`** — Nav toggle (mobile), smooth scroll, footer year
- **`portfolio26-27.pdf`** — Reference PDF (content and structure mirrored on the site)

## Deploy to GitHub Pages (so it shows when you click the portfolio link)

### 1. Create the repo on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Name the repo (e.g. `username.github.io` for a **user/org site**, or any name like `portfolio` for a **project site**).
3. Choose **Public**, leave “Add a README” unchecked if you’re pushing this folder.
4. Click **Create repository**.

### 2. Push this folder

From your machine, in the folder that contains `index.html`:

```bash
cd "/Users/deepmangrulkar/Desktop/deep/tin tin"

git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Replace `USERNAME` and `REPO` with the GitHub username and repo name.

### 3. Turn on GitHub Pages

1. On the repo page: **Settings** → **Pages** (left sidebar).
2. Under **Source**: choose **Deploy from a branch**.
3. **Branch**: `main` (or `master`), folder **/ (root)**.
4. Click **Save**.

The site will be at:

- **User/org site** (`username.github.io`):  
  **https://username.github.io**
- **Project site** (e.g. repo name `portfolio`):  
  **https://username.github.io/portfolio**

It may take 1–2 minutes to appear. If you see a 404, wait a bit and refresh.

## Customize content

- **Name / title**: In `index.html`, update the hero (`hero-title`, `hero-subtitle`) and footer.
- **About**: Edit the `.about` section text.
- **Education / Experience**: Edit the `.timeline` items; add or remove `<li class="timeline-item">` blocks.
- **Projects**: Edit each `.project` (title, tag, description). Replace `.project-placeholder` divs with real images, e.g.  
  `<img src="assets/chand-baori-axon.jpg" alt="Chand Baori axonometric">`  
  and add an `assets` folder with images exported from the PDF or scans.
- **Contact**: Update email, LinkedIn, and location in the `#contact` section.

## Optional: add images

1. Create an `assets` (or `images`) folder in the repo.
2. Export images from the PDF or add photos, then add `<img>` tags in `index.html` where the placeholders are.

## Tech notes

- No Jekyll or other generator required; GitHub Pages serves the files as-is.
- Fonts load from Google Fonts (Cormorant Garamond, Inter).
- Layout is responsive; nav collapses to a hamburger on small screens.
