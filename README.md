# PureM Designs — Website

## Project structure
```
purem-designs-website/
├── index.html              ← the page itself
├── css/
│   └── styles.css          ← all styling (colors, type, layout, responsive rules)
├── js/
│   └── script.js           ← smooth-scroll nav behavior
└── assets/
    ├── fonts/               ← Space Grotesk + Inter, self-hosted (no internet needed)
    └── images/              ← empty — drop your real screenshots here
```

## 1. Open it in VS Code
- Unzip this folder somewhere on your machine.
- In VS Code: **File → Open Folder…** → select `purem-designs-website`.

## 2. View it live as you edit
The easiest way to preview changes instantly:
- Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions panel.
- Right-click `index.html` → **Open with Live Server**.
- It opens in your browser and auto-refreshes every time you save a file.

(You can also just double-click `index.html` to open it directly in a browser, but Live Server is nicer for active editing.)

## 3. Where to make changes

| What you want to change | Where to look |
|---|---|
| Any text/copy on the page | `index.html` — it's plain readable HTML, organized by section (`<!-- WHO WE ARE -->` etc. — search for `id="who"`, `id="build"`, `id="systems"`, `id="rental"`, `id="pos"`, `id="inventory"`, `id="custom"`, `id="work"`, `id="why"`, `id="contact"`) |
| Colors | `css/styles.css` — top of the file, inside `:root { ... }`. Change `--forest`, `--gold`, `--paper`, `--charcoal` etc. and it updates everywhere. |
| Fonts / text sizes | `css/styles.css` — search for `font-family` or `font-size` |
| Screenshots (replacing the `[INSERT ... SCREENSHOT]` placeholders) | Drop your image files into `assets/images/`, then in `index.html` find the matching `<div class="screenframe">...</div>` block and replace the placeholder `<div class="placeholder">` with `<img src="assets/images/your-file.png" alt="...">` |
| Contact details | `index.html` — search for `[INSERT PHONE NUMBER]`, `[INSERT EMAIL ADDRESS]`, etc. near the bottom |

## 4. Publishing it
Once you're happy with it, you can put it online for free with any static host — no backend needed since this is plain HTML/CSS/JS:
- **Netlify** or **Vercel** — drag-and-drop the whole folder, get a live URL in seconds.
- **GitHub Pages** — push the folder to a GitHub repo and enable Pages in settings.

Let me know when you're ready for that step and I can walk you through it.
