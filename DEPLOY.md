# How to publish your lab website on GitHub Pages

This guide takes you from zero to a live URL in about 10 minutes.
No server, no hosting bill — GitHub Pages is free.

---

## Before you start

You'll need:
- A GitHub account (free at github.com)
- Git installed on your computer (`git --version` to check)
- The three files from this project: `index.html`, `style.css`, `main.js`

---

## Step 1 — Create a GitHub repository

1. Go to **github.com** and sign in.
2. Click the **+** icon in the top-right → **New repository**.
3. Name it exactly: `YOUR-USERNAME.github.io`
   - Replace `YOUR-USERNAME` with your actual GitHub username.
   - Example: if your username is `nexuslab`, name it `nexuslab.github.io`.
   - This special name tells GitHub to serve it as a website at that URL.
4. Set visibility to **Public**.
5. Leave "Add a README" unchecked.
6. Click **Create repository**.

---

## Step 2 — Push your files

Open a terminal in the folder that contains your three files, then run:

```bash
git init
git add index.html style.css main.js
git commit -m "Initial lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

Replace `YOUR-USERNAME` in the remote URL with your actual username.

---

## Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Set Branch to **main** and folder to **/ (root)**.
5. Click **Save**.

GitHub will show a banner: *"Your site is being published…"*

Wait about 60–90 seconds, then visit:
**`https://YOUR-USERNAME.github.io`**

Your lab website is live.

---

## Step 4 — Update your content

Edit `index.html` with your lab's real information:

| What to change | Where in index.html |
|---|---|
| Lab name | `<title>` tag and `.nav-logo` text |
| University & department | `.hero-eyebrow` paragraph |
| Lab description | `.hero-sub` paragraph |
| Stats (members, papers, funding) | `.stat` blocks in the stats bar |
| Research areas | `.research-card` blocks |
| Publications | `.pub-item` articles |
| Team members | `.team-card` blocks |
| Contact email & address | `.contact-info` section |

After editing, push the changes:

```bash
git add index.html
git commit -m "Update lab content"
git push
```

The site updates automatically within ~30 seconds.

---

## Step 5 — Add team photos (optional)

The site currently shows initials avatars. To add real photos:

1. Create an `images/` folder.
2. Add your photos: `images/kim.jpg`, `images/chen.jpg`, etc.
3. In `index.html`, replace the avatar `<div>` with an `<img>`:

```html
<!-- Before -->
<div class="team-avatar" style="--hue: 240">SK</div>

<!-- After -->
<img class="team-avatar" src="images/kim.jpg" alt="Prof. Soo-Jin Kim" style="object-fit: cover;" />
```

4. Push the images folder and updated HTML.

---

## Step 6 — Use a custom domain (optional)

If you have a domain like `nexuslab.org`:

1. In your repository, create a file named `CNAME` (no extension):
   ```
   nexuslab.org
   ```
2. At your domain registrar, add a DNS CNAME record:
   - Name: `www`
   - Value: `YOUR-USERNAME.github.io`
3. Back in GitHub → Settings → Pages, your domain will appear.
4. Check **Enforce HTTPS** once DNS propagates (~24 hours).

---

## Keeping the site updated

Every time you publish a new paper or add a team member:

```bash
# Edit index.html, then:
git add index.html
git commit -m "Add NeurIPS 2025 paper"
git push
```

The live site refreshes within about 30 seconds.

---

## File structure reference

```
YOUR-USERNAME.github.io/
├── index.html      ← all page content and structure
├── style.css       ← all visual styling
├── main.js         ← filter, nav, and form interactions
└── images/         ← team photos (add as needed)
    ├── pi.jpg
    └── ...
```

---

## Troubleshooting

**Site shows a 404** — Check that the repository is named exactly `YOUR-USERNAME.github.io` and Pages is enabled in Settings.

**Changes not appearing** — Wait 60 seconds and hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`). GitHub Pages has a short cache.

**Styles not loading** — Make sure `style.css` is in the same folder as `index.html`, and that the `<link>` tag references it as `style.css` (no leading slash).

**Custom domain not working** — DNS changes can take up to 24 hours to propagate. Check your registrar's CNAME record and make sure the `CNAME` file in your repo contains only the domain, nothing else.
