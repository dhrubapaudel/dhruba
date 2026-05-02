# Er. Dhruba Paudel — Portfolio Website

Clean multi-file portfolio. No content duplication — each file has one job.

---

## 📁 File Structure

```
/
├── index.html          ← Shell only: nav, sidebar, modal, script tags
│
├── css/
│   └── style.css       ← ALL styles — edit colors, fonts, layout here
│
├── js/
│   ├── main.js         ← Navigation (fetch-based), modal, animations, form
│   └── projects.js     ← ★ YOUR PROJECT DATA — add/edit projects here
│
├── pages/              ← Each page's HTML content (loaded dynamically)
│   ├── home.html
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
│
└── assets/             ← Create this folder and put your files here
    ├── photo.jpg       ← Your profile photo
    └── cv.pdf          ← Your CV / resume
```

**How it works:** `index.html` is a shell. When you click a nav link,
`main.js` fetches the matching `pages/*.html` file and injects it into
the page. Each page file contains only its own content — no duplication.

---

## ⚠️ Important: Must Run on a Web Server

Because pages are loaded with `fetch()`, the site **cannot** be opened
by double-clicking `index.html` in a file browser — browsers block
fetch requests from `file://` URLs.

**Easy options:**

```bash
# Option 1 — Node.js serve (recommended)
npx serve .

# Option 2 — Python
python -m http.server 8000

# Option 3 — VS Code
Install the "Live Server" extension, right-click index.html → Open with Live Server
```

On GitHub Pages this works automatically because it serves over HTTPS.

---

## 🚀 Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `yourusername.github.io`)
2. Upload **all files and folders**, keeping the folder structure
3. Go to **Settings → Pages → Source → main branch / root → Save**
4. Live at `https://yourusername.github.io`

To use your custom domain `dhrubapaudel.com.np`:
- Add a `CNAME` file in the repo root containing just: `dhrubapaudel.com.np`
- Point your domain DNS CNAME record to `yourusername.github.io`

---

## ✏️ Customization Guide

### Add your profile photo
Replace in `index.html`:
```html
<!-- FROM: -->
<div class="photo-placeholder">👤</div>
<!-- TO: -->
<img src="assets/photo.jpg" alt="Er. Dhruba Paudel" />
```

### Update contact details
Edit `pages/contact.html` — find and replace:
- `dhruba@example.com` → your real email
- `+977 98XXXXXXXX` → your real phone

### Update social media links
Edit `index.html` — find the `.socials` section and replace `#` with your URLs.

---

## ➕ Add a New Project

Open `js/projects.js` and add a new object to the `PROJECTS` array:

```javascript
{
  id:         "my-new-project",       // unique ID, no spaces
  type:       "project",              // thesis | paper | project
  typeLabel:  "Academic Project",     // shown on badge
  category:   "academic",             // academic | work | blog
  title:      "My Project Title",
  year:       "2024",
  status:     "Completed",
  supervisor: "Er. Ramesh Karki",
  institution:"IOE Thapathali Campus, TU",
  thumb:      "🏗️",                  // emoji on card
  thumbBg:    "linear-gradient(135deg, #e8f4f0, #b8ddd4)",
  description:`Your description. Supports <strong>HTML tags</strong>.`,
  findings: [
    "Finding or highlight 1",
    "Finding or highlight 2",
  ],
  meta: [
    { label: "Software", value: "ABAQUS" },
    { label: "Year",     value: "2024" },
  ],
  doi:    "https://doi.org/10.xxxx/xxxxx",  // leave "" if none
  report: "",
  github: "",
},
```

### Add your DOI link
In `js/projects.js`, find the thesis object (`id: "thesis-sssi"`) and update:
```javascript
doi: "https://doi.org/10.xxxx/your-doi-here",
```
A **"View DOI / Full Text"** button will automatically appear in the modal.

---

## 🎨 Change the Color Theme
Edit `css/style.css` → `:root` section:
```css
:root {
  --teal:      #2eab8a;   /* main accent */
  --teal-dark: #1e8a6e;   /* hover accent */
  --orange:    #e8732a;   /* hero highlight */
  --bg:        #f4f6f8;   /* page background */
}
```

## 📬 Enable Real Contact Form Emails (Free)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint URL
3. Follow the instructions in `js/main.js` → `handleSubmit()` function
