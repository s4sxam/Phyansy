<div align="center">

<img src="assets/logo.svg" width="120" height="120" alt="Phyansy Logo" />

# ⚛ Phyansy

### The physics reference you wish existed in college.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-phyansy.vercel.app-667eea?style=for-the-badge&labelColor=0d0d14)](https://phyansy.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-48bb78?style=for-the-badge&labelColor=0d0d14)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-No_Framework-f6c90e?style=for-the-badge&labelColor=0d0d14&logo=javascript&logoColor=f6c90e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Built_with-Vite-646cff?style=for-the-badge&labelColor=0d0d14&logo=vite)](https://vitejs.dev)
[![KaTeX](https://img.shields.io/badge/Math-KaTeX-9a75ea?style=for-the-badge&labelColor=0d0d14)](https://katex.org)
[![Stars](https://img.shields.io/github/stars/s4sxam/Phyansy?style=for-the-badge&labelColor=0d0d14&color=f6c90e&logo=github)](https://github.com/s4sxam/Phyansy/stargazers)

<br/>

**295 equations · 79 constants · 14 languages · 0 ads · 0 login · forever free**

<br/>

> *Built by a CS student at IIT Bombay who was tired of Googling physics constants mid-problem.*

<br/>

---

</div>

## The problem

You're mid-derivation at 1 AM. You need the Boltzmann constant. You Google it. You get a Wikipedia page, three ads, and a table that doesn't render on mobile.

Or you need to understand *why* Schrödinger's equation works — not just what it looks like. No site gives you that cleanly.

**Phyansy fixes this.** One app. Every equation, constant, symbol, and unit you'll ever need — with real explanations, beautiful math, and support for 14 languages including Hindi, Bengali, Tamil, Telugu, and Marathi.

---

## What's inside

| Section | What you get |
|---|---|
| ⚡ **295 Equations** | Formula + derivation + deep meaning + misconceptions + history. Not just the formula. |
| 🔬 **79 Constants** | Exact CODATA values with uncertainty, category, one-click copy, multilingual descriptions |
| 🔣 **51 Symbols** | Greek + mathematical notation with usage context |
| 📏 **Units** | SI, derived, non-SI, and metric prefixes |
| 🖩 **Calculator** | Built-in physics calculator — no tab switching |
| 🔍 **Search** | Fuzzy global search across everything. Press `/` anywhere. |
| 🌐 **14 Languages** | Physics in your language — Hindi, Bengali, Tamil, Telugu, Marathi, Arabic, Spanish, French, Portuguese, Russian, Japanese, Chinese, German |

---

## Why it's different

Every other physics reference site gives you one of these:
- ✅ Good content, ❌ terrible UI (HyperPhysics — bless its heart, it's from 2003)
- ✅ Good UI, ❌ shallow content
- ✅ Accurate values, ❌ zero explanation (NIST CODATA)
- ✅ Everything, ❌ 47 ads and a login wall

Phyansy gives you all the content, all the explanation, a modern UI, 14 languages, and nothing you didn't ask for.

---

## Screenshots

> **Dark Mode**

![Phyansy Dark Mode](https://phyansy.vercel.app/og-image.png)

> Live at **[phyansy.vercel.app](https://phyansy.vercel.app)**

---

## Each equation has

```
Formula (KaTeX rendered)     → beautiful, not plain text
What it says                 → plain English
Deep meaning                 → the WHY, not just the what
Step-by-step derivation      → follow the math
Who discovered it            → historical context
Why it matters               → real-world significance
Common misconceptions        → what students get wrong
Dimensional analysis         → [M L T⁻²] etc.
SI units per variable        → no ambiguity
Difficulty tag               → GCSE / A-Level / Undergraduate / Graduate
Related equations            → linked, not isolated
```

No other free site does all of this. Check.

---

## Language support

Physics equations stay in English (the universal language of physics). Descriptions, explanations, and UI — in your language.

| | Language | | Language |
|---|---|---|---|
| 🌐 | English | 🇮🇳 | हिन्दी |
| 🇮🇳 | বাংলা | 🇮🇳 | தமிழ் |
| 🇮🇳 | తెలుగు | 🇮🇳 | मराठी |
| 🇸🇦 | العربية | 🇪🇸 | Español |
| 🇫🇷 | Français | 🇧🇷 | Português |
| 🇷🇺 | Русский | 🇯🇵 | 日本語 |
| 🇨🇳 | 中文 | 🇩🇪 | Deutsch |

---

## Get started locally

```bash
git clone https://github.com/s4sxam/Phyansy.git
cd Phyansy
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

```bash
npm run build   # production build → dist/
npm run lint    # ESLint
npm run check   # lint + syntax + build
```

---

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/s4sxam/Phyansy)

One click. Works out of the box.

---

## Architecture

```
Phyansy/
├── index.html                        # Entry point
├── script.js                         # App bootstrap & module orchestration
├── css/                              # Modular stylesheets
│   ├── base.css / theme.css          # Global reset, CSS variables, dark/light
│   ├── equations.css / constants.css # Section-specific styles
│   └── ...
├── js/
│   ├── modules/
│   │   ├── searchEngine.js           # Custom fuzzy search — built from scratch
│   │   ├── equationsController.js    # Equation card rendering & modal
│   │   ├── constantsController.js
│   │   ├── langController.js         # i18n engine
│   │   ├── lazyRenderer.js           # IntersectionObserver lazy loading
│   │   ├── bgRenderer.js             # Particle background canvas
│   │   └── ...
│   └── data/
│       ├── equationsData.js          # 295 equations — full metadata
│       ├── constantsData.js          # 79 constants — CODATA values
│       ├── constantsData.hi.js       # + 12 more language files
│       └── locales/ui-strings.js     # UI translations (all 14 langs)
└── vite.config.js
```

**Zero external frameworks.** Vanilla JS + Vite + KaTeX. Fast, lean, no dependency hell.

---

## Contributing

PRs welcome. Best ways to help:

**Add or fix an equation** → edit `js/data/equationsData.js`

```js
{
  name: "Newton's Second Law",
  difficulty: "GCSE",              // GCSE | A-Level | Undergraduate | Graduate
  formula: "F = ma",
  formulaLatex: "F = ma",
  whatItSays: "...",
  deepMeaning: "...",
  derivation: "...",
  whoDiscovered: "Isaac Newton, 1687",
  whyItMatters: "...",
  misconception: "...",
  dimensions: "[M L T⁻²]",
  SI_units: { F: "N", m: "kg", a: "m/s²" },
  relatedEquations: ["Momentum", "Impulse"],
}
```

**Add a language** → create `js/data/constantsData.XX.js` + add to `ui-strings.js`

**Report a bug** → [open an issue](https://github.com/s4sxam/Phyansy/issues)

---

## Tech stack

| Tech | Why |
|---|---|
| **Vanilla JS (ES Modules)** | No framework overhead. Fast. Transparent. |
| **Vite** | Dev server + bundler with HMR |
| **KaTeX** | Sub-millisecond LaTeX → HTML math rendering |
| **CSS Custom Properties** | Theming system — dark/light, zero JS |
| **Vercel** | Static hosting, zero config |

---

## Data scale

| | Count |
|---|---|
| Equations | **295** across 13 categories |
| Physical constants | **79** across 6 categories |
| Symbols | **51** |
| Languages | **14** |
| Ads | **0** |
| Login required | **Never** |

---

## Support

Phyansy is free and will always be free. If it saved you from a late-night Google spiral, consider [buying me a coffee](https://ko-fi.com/s4sxam) ☕

---

## License

MIT — free to use, fork, and build on. If it helped you, a ⭐ means a lot.

---

<div align="center">

**[⚛ Open Phyansy](https://phyansy.vercel.app)** · **[⭐ Star on GitHub](https://github.com/s4sxam/Phyansy)** · **[🐛 Report a Bug](https://github.com/s4sxam/Phyansy/issues)** · **[☕ Support](https://ko-fi.com/s4sxam)**

<br/>

*Built solo. Kept free. For every student who deserved better tools.*

</div>
