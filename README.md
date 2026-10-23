# StudyNest 🎓
> Modern Student Planner, Assignment Tracker & Official GU Semester 5 Timetable Dashboard.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://hetuprajapati22.github.io/StudyNest/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

StudyNest is a clean, lightweight productivity web application designed specifically for engineering students. It features an interactive student dashboard, assignment manager, daily study goals, and Gandhinagar University (GIT) B.Tech Semester 5 master timetable with division selection.

🌐 **Live Demo:** [hetuprajapati22.github.io/StudyNest](https://hetuprajapati22.github.io/StudyNest/)

---

## ✨ Features

- 📅 **Official GU Sem 5 Timetable**
  - Branch & division selector for:
    - **CE:** 5A-CE, 5B-CE
    - **IT:** 5A-IT, 5B-IT
    - **CSE:** 5A-CSE, 5B-CSE, 5C-CSE
    - **AI:** 5A-AI
    - **CS:** 5A-CS
  - Visual distinction for Lectures, 2-Hour Labs (with Batch 1/2/3 breakdown), and Free periods.
  - Quick Day-tabs (Mon–Sat) and current day highlighting.
- 📊 **Smart Dashboard**
  - Live "Today's Classes" card showing upcoming lectures and venues.
  - Real-time statistics: Total, Pending, Completed, and Overdue assignments.
  - Overall study completion progress bar.
- 📝 **Assignment Tracker**
  - Add, edit, delete, and mark assignments complete/pending.
  - Filter by Subject, Status, Priority (Low/Medium/High), or search by keyword.
  - Auto-suggests subjects based on your selected college division.
- 🎯 **Daily Study Goals**
  - Set daily focus targets with completion tracking.
  - Daily reset logic with automatic 30-day history archiving.
- 🌙 **Dark & Light Mode**
  - Instant theme toggle with full persistence.
- 💾 **100% Client-Side & Private**
  - Powered by browser `LocalStorage`. No servers, no sign-ups, zero tracking.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Design:** Modern design system (Lavender, Sage Green & Warm Cream)
- **Data Source:** Official GU Class Master Timetable (AY 2026–27, R2)
- **Deployment:** GitHub Pages

---

## 🚀 Quick Start

Run it locally without any installation or build tools:

```bash
# Clone the repository
git clone https://github.com/hetuprajapati22/StudyNest.git

# Open index.html in your browser
cd StudyNest
start index.html   # On Windows (or open directly in any browser)
```

---

## 📁 Project Structure

```
StudyNest/
├── index.html                  # Single-page application shell
├── css/
│   └── style.css               # Design system & responsive styles
├── js/
│   ├── app.js                  # UI controllers & event logic
│   ├── storage.js              # LocalStorage CRUD & persistence
│   └── timetable-data.js       # Official GU timetable dataset
├── MTT_SEM_5_2026_Div_R2.pdf   # Source master timetable PDF
└── README.md
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
