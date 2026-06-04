<div align="center">

<img src="https://phyansy.vercel.app/favicon.ico" width="80" height="80" alt="Phyansy Logo" />

# ⚛ Phyansy

### The Physics Reference Web App — Built for Curious Minds

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-phyansy.vercel.app-667eea?style=for-the-badge&labelColor=0d0d14)](https://phyansy.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-48bb78?style=for-the-badge&labelColor=0d0d14)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-No_Framework-f6c90e?style=for-the-badge&labelColor=0d0d14&logo=javascript&logoColor=f6c90e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Built_with-Vite-646cff?style=for-the-badge&labelColor=0d0d14&logo=vite)](https://vitejs.dev)
[![KaTeX](https://img.shields.io/badge/Math-KaTeX-9a75ea?style=for-the-badge&labelColor=0d0d14)](https://katex.org)

<br/>

*Constants. Equations. Symbols. Units. A Calculator. Everything a physics student needs — beautifully rendered, instantly searchable, multilingual.*

<br/>

---

</div>

## ✨ What is Phyansy?

**Phyansy** is a free, open-source physics reference web app. No sign-up. No ads. No fluff.

It gives students, researchers, and curious minds instant access to:
- **295 physics equations** across 13 categories — each with derivations, deep meanings, history, and misconceptions
- **79 physical constants** with exact values, uncertainties, and multilingual descriptions  
- **51 physics symbols** (Greek + mathematical) with usage context  
- A **unit reference** covering SI, derived, and non-SI units  
- A built-in **physics calculator**
- A **global fuzzy search engine** across every section

Everything is rendered with **KaTeX** for beautiful, accurate math — not plain text.

---

## 📸 Screenshots

> **Light Mode**

![Phyansy Light Mode — Physical Constants](https://phyansy.vercel.app/og-image.png)

> Live at **[phyansy.vercel.app](https://phyansy.vercel.app)**

---

## 🗂 Feature Overview

### ⚡ Physical Constants
79 fundamental constants of the universe — from the speed of light to the Planck constant.

| Field | Description |
|---|---|
| Symbol & Value | Exact SI value with uncertainty |
| Category | Universal, Electromagnetic, Thermodynamic, Atomic, Particle, Nuclear |
| Description | Multilingual explanations |
| Copy exact | One-click copy of precise value |

**Categories:** Universal · Electromagnetic · Thermodynamic · Atomic · Particle · Nuclear

---

### 📐 Equations
295 equations across 13 physics domains. Each equation goes beyond just the formula:

| Field | Description |
|---|---|
| `formula` | Clean human-readable form |
| `formulaLatex` | KaTeX-rendered math |
| `whatItSays` | Plain-English explanation |
| `deepMeaning` | The *why* behind the equation |
| `derivation` | Step-by-step mathematical derivation |
| `whoDiscovered` | Historical context and attribution |
| `whyItMatters` | Real-world significance |
| `misconception` | Common student mistakes explained |
| `dimensions` | Dimensional analysis |
| `SI_units` | Units for every variable |
| `difficulty` | GCSE / A-Level / Undergraduate / Graduate |
| `relatedEquations` | Linked equations in the database |

**Equation Categories:**
```
Classical Mechanics       Thermodynamics             Waves & Oscillations
Electromagnetism          Optics                     Relativity
Quantum Mechanics         Nuclear & Particle         Particle Physics & QFT
Astrophysics & Cosmology  Fluid Mechanics            Solid State & Condensed Matter
Mathematical Physics & Key Constants
```

---

### 🔣 Symbols
51 physics symbols — Greek alphabet and mathematical notation — with names, usage, and context.

---

### 📏 Units
Complete unit reference:
- **SI base units** — metre, kilogram, second, ampere, kelvin, mole, candela
- **Derived units** — newton, joule, watt, pascal, tesla, hertz, and more
- **Non-SI units** — electronvolt, astronomical unit, light-year, angstrom
- **Metric prefixes** — femto to yotta

---

### 🔍 Global Search Engine
A custom-built fuzzy search engine (`searchEngine.js`) indexes every constant, equation, symbol, and unit simultaneously.

- **Dropdown suggestions** as you type  
- **Full results overlay** on Enter  
- **Fuzzy matching** — finds results even with typos  
- **Keyboard shortcuts** — press `/` to focus search from anywhere  
- **Section-aware** — results tagged with source section  

---

### 🌐 Multilingual Support (i18n)
Phyansy supports **14 languages**. Equations, formulas, and variable names stay in English (the universal language of physics) — explanations and descriptions are translated.

| Flag | Language | Code |
|------|----------|------|
| 🌐 | English | `en` |
| 🇪🇸 | Español | `es` |
| 🇨🇳 | 中文 | `zh` |
| 🇮🇳 | हिन्दी | `hi` |
| 🇮🇳 | বাংলা | `bn` |
| 🇮🇳 | தமிழ் | `ta` |
| 🇮🇳 | తెలుగు | `te` |
| 🇮🇳 | मराठी | `mr` |
| 🇸🇦 | العربية | `ar` |
| 🇫🇷 | Français | `fr` |
| 🇧🇷 | Português | `pt` |
| 🇷🇺 | Русский | `ru` |
| 🇯🇵 | 日本語 | `ja` |
| 🇩🇪 | Deutsch | `de` |

Language is persisted via localStorage. The language picker is accessible from the navbar.

---

### 🖩 Calculator
A built-in physics calculator for common computations — no need to leave the app.

---

### 🎨 UI & UX
- **Dark / Light mode** — system preference detected, toggle in navbar, persisted across sessions  
- **Responsive** — works on mobile, tablet, and desktop  
- **Particle background** — animated canvas particle renderer  
- **Modal system** — desktop modal overlay / mobile expand-in-card for equation details  
- **Lazy rendering** — cards render on scroll for performance  
- **KaTeX math rendering** — beautiful, accurate math typesetting throughout  
- **Toast notifications** — non-intrusive feedback on copy, errors  
- **Cookie consent** — GDPR-aware cookie banner  

---

## 🏗 Architecture

```
Phyansy/
├── index.html                    # Entry point, Google Translate widget
├── script.js                     # App bootstrap, module orchestration
├── equationsData.js              # Root equations dataset (legacy entry)
│
├── css/
│   ├── base.css                  # Global reset & typography
│   ├── theme.css                 # CSS variables, dark/light themes
│   ├── search.css                # Global search bar styles
│   ├── equations.css             # Equation cards & modal
│   ├── constants.css             # Constants cards
│   ├── symbols.css               # Symbols grid
│   ├── units.css                 # Units table
│   ├── calculator.css            # Calculator UI
│   ├── lang.css                  # Language picker panel
│   ├── modal.css                 # Modal overlay system
│   └── cookie.css                # Cookie consent banner
│
├── js/
│   ├── modules/
│   │   ├── searchEngine.js       # Custom fuzzy search engine
│   │   ├── searchInit.js         # Search bootstrap & index builder
│   │   ├── equationsController.js
│   │   ├── constantsController.js
│   │   ├── symbolsController.js
│   │   ├── unitsController.js
│   │   ├── calculatorController.js
│   │   ├── langController.js     # i18n engine
│   │   ├── langPickerController.js # Language picker UI
│   │   ├── themeController.js    # Dark/light theme
│   │   ├── pageController.js     # Tab/section navigation
│   │   ├── lazyRenderer.js       # IntersectionObserver lazy loading
│   │   ├── bgRenderer.js         # Animated particle background
│   │   ├── particleRenderer.js
│   │   ├── toastController.js    # Toast notification system
│   │   ├── cookieController.js   # Cookie consent
│   │   ├── settingsController.js
│   │   └── faviconController.js
│   │
│   └── data/
│       ├── equationsData.js      # 295 equations with full metadata
│       ├── equationsData_bn.js   # Bengali equation translations
│       ├── constantsData.js      # 79 physical constants (English)
│       ├── constantsData.bn.js   # Bengali
│       ├── constantsData.zh.js   # Chinese
│       ├── constantsData.ja.js   # Japanese
│       ├── constantsData.ru.js   # Russian
│       ├── constantsData.ta.js   # Tamil
│       ├── constantsData.hi.js   # Hindi
│       ├── constantsData.es.js   # Spanish
│       ├── constantsData.ar.js   # Arabic
│       ├── constantsData.fr.js   # French
│       ├── constantsData.pt.js   # Portuguese
│       ├── constantsData.mr.js   # Marathi
│       ├── constantsData.te.js   # Telugu
│       ├── constantsData.de.js   # German
│       ├── symbolsData.js        # Greek + math symbols
│       ├── unitsData.js          # SI, derived, non-SI units
│       ├── calculatorData.js     # Calculator presets
│       └── locales/
│           └── ui-strings.js     # UI label translations (all 14 langs)
│
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/s4sxam/Phyansy.git
cd Phyansy

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Output is in `dist/`. Deploy to any static host.

### Lint & Syntax Check

```bash
npm run lint          # ESLint
npm run check:syntax  # Node syntax check on all JS files
npm run check         # lint + syntax + build (full CI check)
```

---

## 🌍 Deployment

Phyansy is deployed on **Vercel** with zero-config static hosting.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/s4sxam/Phyansy)

Any push to `main` triggers an automatic redeploy.

---

## 🤝 Contributing

Contributions are welcome! Here are the best ways to help:

### Add or fix equations
Edit `js/data/equationsData.js`. Each equation should include:
```js
{
  name: "Equation Name",
  difficulty: "GCSE" | "A-Level" | "Undergraduate" | "Graduate",
  tags: ["tag1", "tag2"],
  formula: "F = ma",
  formulaLatex: "F = ma",
  desc: "Short description.",
  vars: [{ s: "F", d: "Force (N)" }, ...],
  whatItSays: "...",
  deepMeaning: "...",
  derivation: "...",
  whoDiscovered: "...",
  whyItMatters: "...",
  misconception: "...",
  dimensions: "[M L T⁻²]",
  SI_units: { F: "N", m: "kg", a: "m/s²" },
  relatedEquations: ["Newton's Second Law", ...],
  year: 1687,
}
```

### Add a language translation
Create `js/data/constantsData.XX.js` following the pattern of an existing translation file. Add your language to `js/data/locales/ui-strings.js`.

### Report a bug
Open an [issue](https://github.com/s4sxam/Phyansy/issues) with steps to reproduce.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Vanilla JavaScript (ES Modules)** | Core app logic — no framework |
| **Vite** | Dev server, bundler, HMR |
| **KaTeX** | Math rendering (LaTeX → HTML) |
| **CSS Custom Properties** | Theming system (dark/light) |
| **Google Translate API** | Page-level translation widget |
| **Vercel** | Hosting & deployment |
| **ESLint** | Code quality |

---

## 📊 Data Scale

| Section | Count |
|---|---|
| Equations | **295** across 13 categories |
| Physical Constants | **79** across 6 categories |
| Symbols | **51** (Greek + mathematical) |
| Unit entries | SI + Derived + Non-SI + Prefixes |
| Languages | **14** |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

Free to use, fork, and build upon. If you use Phyansy in your project, a star ⭐ is appreciated.

---

## 👨‍💻 Author

**Tanay Guha** ([@s4sxam](https://github.com/s4sxam))  
Student developer from West Bengal, India.  
Built Phyansy independently as a free resource for physics students everywhere.

---

<div align="center">

**[⚛ Open Phyansy](https://phyansy.vercel.app)** · **[⭐ Star on GitHub](https://github.com/s4sxam/Phyansy)** · **[🐛 Report Bug](https://github.com/s4sxam/Phyansy/issues)**

<br/>

*Made with love for physics students everywhere.*

</div>
