# Gob Noqo

A calm, dependency-free screen-to-paper thinking garden for children aged 6–12.

## What is included

- Six thinking pillars
- Three guided chapters in every pillar (18 total)
- Five recurring worlds across the curriculum: plants/trees, animals, water, kidneys, and human-body reflection
- One consistent Draw → Reasoning MCQ → Critical Thinking + Science Clue → Qur’an Reflection + mini-badge flow
- Three mini-badges collect into one pillar badge, followed by a high-five finish and Next Gate
- Large original SVG line art for tracing
- Live line-drawing animation on the landing page and every drawing screen
- Keyboard-friendly controls and responsive tablet/mobile layouts
- No accounts, ads, analytics, scores, streaks, storage, or child data collection

## Preview on your computer

Double-click `index.html`, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

These instructions deliberately add only the website files, so unrelated working files in this folder are not published.

1. Create a free account at [github.com](https://github.com) if you do not have one.
2. On GitHub, choose **New repository**.
3. Name it `gob-noqo`, make it **Public**, and create the repository without adding starter files.
4. Open Terminal and move into this folder:

   ```bash
   cd /Users/asm/Documents/Gob-noqo
   ```

5. Create the local Git repository and add only the publishable site:

   ```bash
   git init
   git add index.html styles.css app.js README.md .gitignore .nojekyll
   git commit -m "Publish Gob Noqo learning garden"
   git branch -M main
   ```

6. Connect it to your GitHub repository. Replace `YOUR-USERNAME` with your GitHub username:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/gob-noqo.git
   git push -u origin main
   ```

7. On the repository page, open **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Select branch **main**, folder **/(root)**, then choose **Save**.
10. Wait a few minutes. GitHub will show the published address, normally:

    `https://YOUR-USERNAME.github.io/gob-noqo/`

## Send it to children

1. Open the published link yourself on a phone or tablet.
2. Complete one mission to check the buttons, drawing, and screen size.
3. Copy the GitHub Pages link—not the private `file:///` address.
4. Send the link with this message:

   > I made you a little thinking garden. Open it on a tablet or laptop, bring one sheet of paper and a pencil, then choose any garden pillar. Place the paper gently on the screen, trace slowly, lift it, and follow the thinking steps. Please ask a grown-up to help with the screen.

Children do not need a GitHub account. The site does not ask for names, email addresses, or other personal information.

## Updating the published site

After editing the files, publish the update with:

```bash
git add index.html styles.css app.js README.md
git commit -m "Update Gob Noqo"
git push
```
