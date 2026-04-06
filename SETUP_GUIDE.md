# JC Gibbs Portfolio — Setup & GitHub Guide

---

## PART 1: FILE STRUCTURE IN VS CODE

After you pick your version (V1 = dark tech, V2 = warm editorial), your project folder should look like this:

```
jcgibbskc.github.io/          ← Root folder (this is your repo name)
│
├── index.html                 ← Main page (your entire site)
│
├── css/
│   └── style.css              ← All styling — fonts, colors, layout
│
├── js/
│   └── main.js                ← Navigation, animations, scroll effects
│
├── images/
│   └── headshot.jpg           ← Your profile photo (already included)
│   └── project1.jpg           ← Replace placeholder images here
│   └── project2.jpg
│   └── project3.jpg
│   └── project4.jpg
│
└── assets/
    └── JC_Gibbs_Resume.pdf    ← PUT YOUR RESUME PDF HERE for download
```

### How to open in VS Code:
1. Open VS Code
2. File → Open Folder → select your portfolio folder
3. You'll see the file tree on the left sidebar

---

## PART 2: HOW TO MAKE YOUR RESUME DOWNLOADABLE

1. Export your resume as a PDF (from Word: File → Save As → PDF)
2. Name it exactly: `JC_Gibbs_Resume.pdf`
3. Drop it into the `/assets/` folder in your project
4. The buttons in the site already point to `assets/JC_Gibbs_Resume.pdf`
5. That's it — the `download` attribute on the link handles the rest!

If you want to rename the file, just update this line in `index.html`:
```html
<a href="assets/JC_Gibbs_Resume.pdf" download class="btn btn-outline">Download Resume</a>
```

---

## PART 3: SWAPPING PROJECT IMAGES

1. Take a screenshot of your project (full browser window works great)
2. Save it as a .jpg or .png in your `/images/` folder (e.g., `project1.jpg`)
3. In `index.html`, find the placeholder image line:
```html
<img src="https://placehold.co/..." alt="..." />
```
4. Replace it with:
```html
<img src="images/project1.jpg" alt="Description of your project" />
```

---

## PART 4: UPLOADING TO GITHUB (Step by Step)

### Step 1 — Create a GitHub account
- Go to https://github.com and sign up (free)
- Your username will be part of your site URL, so pick a clean one like `jcgibbskc`

### Step 2 — Create your repository
1. Click the **+** icon → **New repository**
2. Repository name: `jcgibbskc.github.io`
   - ⚠️ IMPORTANT: The repo name MUST be `yourusername.github.io` exactly
   - This is what makes GitHub Pages work for free
3. Set it to **Public**
4. Do NOT check "Add a README"
5. Click **Create repository**

### Step 3 — Install Git (if you haven't)
- Download from https://git-scm.com/downloads
- Install with default settings

### Step 4 — Open VS Code Terminal
- In VS Code: Terminal → New Terminal (or press Ctrl+`)

### Step 5 — Initialize and push your code

Run these commands one at a time in the terminal:

```bash
# Navigate to your portfolio folder (adjust path as needed)
cd path/to/your/portfolio-folder

# Initialize git in this folder
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial portfolio commit"

# Connect to your GitHub repo (replace USERNAME with your actual GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 6 — Enable GitHub Pages
1. Go to your repo on GitHub.com
2. Click **Settings** tab
3. Scroll to **Pages** in the left sidebar
4. Under "Branch", select `main` → `/ (root)`
5. Click **Save**

### Step 7 — Wait 1-2 minutes, then visit:
`https://yourusername.github.io`

🎉 Your portfolio is live!

---

## PART 5: UPDATING YOUR SITE LATER

Every time you make changes to your files:

```bash
# In VS Code terminal, from your project folder:
git add .
git commit -m "Updated project descriptions"
git push
```

Changes go live on your GitHub Pages site within 1-2 minutes.

---

## PART 6: RECOMMENDED VS CODE EXTENSIONS

Install these from the Extensions panel (Ctrl+Shift+X):

- **Live Server** — preview your site locally in a browser with auto-refresh
  - After installing: right-click `index.html` → "Open with Live Server"
- **Prettier** — auto-formats your HTML/CSS/JS
- **GitLens** — better Git integration inside VS Code
- **HTML CSS Support** — autocomplete for class names

---

## QUICK CHECKLIST BEFORE GOING LIVE

- [ ] Added `JC_Gibbs_Resume.pdf` to `/assets/` folder
- [ ] Replaced placeholder project images in `/images/`
- [ ] Updated project titles, descriptions, and GitHub links in `index.html`
- [ ] Updated live demo links when you have them
- [ ] Tested on mobile (resize your browser or use Chrome DevTools → phone icon)
- [ ] Verified resume download works locally (right-click index.html → Open with Live Server)
