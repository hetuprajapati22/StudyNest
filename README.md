# StudyNest — Student Planner & Assignment Tracker

A polished, modern student productivity web application built with pure HTML5, CSS3 and Vanilla JavaScript. No frameworks, no build system, no backend required.

---

## Features

| Feature | Description |
|---|---|
| 📊 Dashboard | Live stats, today's tasks, upcoming deadlines, progress bars |
| ✅ Assignment Tracker | Add, edit, delete, filter, search and sort assignments |
| 📅 Weekly Timetable | Visual weekly class schedule with overlap detection |
| 🎯 Study Goals | Daily goals with history archiving |
| 🌙 Dark Mode | Full dark theme with instant toggle |
| 💾 LocalStorage | All data persists in the browser automatically |
| 🎓 Demo Data | Sample data to explore all features instantly |

---

## Getting Started

### Option 1: Open directly in a browser (Simplest)

1. Download or clone this repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No server, no installation, no build step required.

```bash
# Clone the repo
git clone https://github.com/yourusername/studynest.git
cd studynest

# Open in browser (Windows)
start index.html

# Open in browser (macOS)
open index.html

# Open in browser (Linux)
xdg-open index.html
```

### Option 2: Local development server (Recommended for development)

Use any simple static file server:

```bash
# Using Python 3
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8080` in your browser.

---

## Project Structure

```
StudyNest/
├── index.html          # Single-page application shell
├── css/
│   └── style.css       # All styles: variables, layout, components, dark mode, responsive
├── js/
│   ├── storage.js      # LocalStorage operations, data validation, demo data
│   └── app.js          # UI rendering, events, navigation, feature logic
├── assets/
│   └── README.md       # Assets placeholder
├── README.md           # This file
└── .gitignore
```

### Code Architecture

- **`storage.js`** — Pure data layer. Reads, writes, validates and generates IDs. No DOM access.
- **`app.js`** — UI layer. Renders components, handles events, delegates storage to `storage.js`.
- **`style.css`** — CSS custom properties for theming. Components follow a BEM-inspired naming convention.

---

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set source to **Deploy from a branch → main → / (root)**.
4. Your site will be live at `https://yourusername.github.io/studynest/`.

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign in.
2. Drag the entire `StudyNest/` folder onto the Netlify dashboard.
3. Done — Netlify gives you a live URL instantly.

### Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --dir . --prod
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

---

## LocalStorage Data Structure

StudyNest uses the following LocalStorage keys:

| Key | Type | Contents |
|---|---|---|
| `studynest_assignments` | Array | Assignment objects |
| `studynest_timetable` | Array | Timetable entry objects |
| `studynest_goals` | Array | Today's study goal objects |
| `studynest_goal_history` | Array | Archived goal history (last 30 days) |
| `studynest_settings` | Object | Theme, firstVisit flag |
| `studynest_last_date` | String | ISO date for daily goal reset detection |
| `studynest_is_demo` | Boolean | Whether demo data is currently loaded |

---

## Known Limitations (Version 1)

1. **Local storage only** — Data does not sync across devices or browsers.
2. **No user accounts** — Any person using the same browser profile sees the same data.
3. **No offline PWA** — No service worker or app manifest in v1.
4. **Timetable** — Displayed as a compact table. Time-slot grid (like Google Calendar) is planned for v2.
5. **No recurring assignments** — Each assignment is a one-off entry.
6. **No file attachments** — Notes are plain text only.

---

## Future Paid Features (Version 2+)

- ☁️ Cloud sync and multi-device support
- 👤 User accounts and secure login
- 🔔 Browser push notifications for deadlines
- 📱 Progressive Web App (offline support, installable)
- 📎 File attachments on assignments
- 🔄 Recurring assignments and events
- 📊 Analytics dashboard (study hours, streak tracking)
- 🤝 Group/collaborative study features
- 🎨 Custom colour themes and subjects
- 📤 PDF export of timetable and assignment list
- 🔗 Google Calendar / iCal integration

---

## Development Notes

- All code is in English with comments where helpful.
- CSS uses custom properties (variables) for easy theming.
- JavaScript follows the Module Pattern (IIFE) for clean encapsulation.
- No third-party dependencies — zero npm packages needed.
- All interactive elements have ARIA labels for accessibility.
- Form validation is inline with clear error messages.

---

## License

MIT License — Free to use, modify and distribute for personal and commercial projects.

---

*StudyNest v1.0 — Built with ❤️ for students, by a developer who understands the struggle.*
