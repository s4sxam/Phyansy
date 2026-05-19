// =============================================================================
// constantsData.bn.js — Physical Constants Database (Bengali i18n)
// মূল ফাইল: constantsData.js (CODATA 2022 | Phyansy Reference Guide)
// অনুবাদ নীতি:
//   • name ও Physics পরিভাষা (Velocity, Mass, Charge ইত্যাদি) ইংরেজিতে অপরিবর্তিত
//   • বিজ্ঞানীদের নাম (Planck, Einstein, Bohr ইত্যাদি) ইংরেজিতে অপরিবর্তিত
//   • সংখ্যা ও গাণিতিক প্রতীক ইংরেজিতে অপরিবর্তিত
//   • discoveredBy: প্রাপ্ত ধ্রুবকের জন্য সর্বদা 'প্রাপ্ত'
//   • ব্যাখ্যামূলক বাংলা গদ্য গভীর ও পেশাদার
// =============================================================================

export const CONSTANTS_BN = [

  // ── PART 1: UNIVERSAL / DEFINING CONSTANTS ────────────────────────────────

  {
    symbol: 'c',
    name: 'Speed of Light in Vacuum',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'কার্যকারণ সম্পর্কের মৌলিক গতির সীমা।',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `আলো প্রতি সেকেন্ডে একটি পূর্ণ শূন্যমাধ্যমে ঠিক 299,792,458 metre অতিক্রম করে। এটি কোনো পরিমাপকৃত আনুমানিক মান নয় — 1983 সাল থেকে metre-এর সংজ্ঞাই এই সংখ্যার উপর নির্মিত। তাই c এখন একটি নির্ভুল, নির্দিষ্ট পূর্ণ সংখ্যা, আন্তর্জাতিক সংজ্ঞা অনুযায়ী।`,
    simpleExample: `চাঁদ থেকে আলো আমাদের চোখে পৌঁছাতে প্রায় 1.28 সেকেন্ড লাগে। সূর্য থেকে আলো আসতে সময় লাগে প্রায় 8 মিনিট 20 সেকেন্ড। নিকটতম তারা Proxima Centauri 4.24 light-year দূরে — অর্থাৎ আলোর সেই দূরত্ব পার করতে 4.24 বছর লাগে।`,
    deepMeaning: `c শুধু "আলো কত দ্রুত চলে" তা নয়। এটি হলো কার্যকারণ সম্পর্কের মৌলিক গতির সীমা — মহাবিশ্বে কোনো তথ্য, Energy, বা কার্যকারণের প্রভাব যে সর্বোচ্চ হারে ছড়াতে পারে। Einstein-এর Special Relativity প্রমাণ করেছে যে c সব পর্যবেক্ষকের কাছে একই, তাদের গতি নির্বিশেষে। এটি Newtonian পরম সময়ের ধারণাকে ভেঙে দেয়। দুজন পর্যবেক্ষক যারা একে অপরের তুলনায় গতিশীল, তারা Length, সময়ের ব্যবধান ও একসাথে ঘটার ধারণায় ভিন্নমত পোষণ করবে — কিন্তু c সবসময় একই পাবে। E = mc² বলে Mass ও Energy একই জিনিস, c² রূপান্তর গুণক মাত্র।`,
    whyItMatters: `c ছাড়া Special Relativity নেই, E = mc² নেই, GPS সংশোধন নেই (GPS satellite-এ Special ও General Relativistic উভয় time dilation-এর জন্য সংশোধন করতে হয়), তারার পদার্থবিদ্যা বা Particle Physics বোঝার উপায় নেই। এটি আধুনিক Physics-এর মেরুদণ্ড।`
  },

  {
    symbol: 'h',
    name: 'Planck Constant',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'Electromagnetic action-এর Quantum — Photon-এর Energy নিয়ন্ত্রণ করে।',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `Energy আসে বিচ্ছিন্ন প্যাকেটে, যাকে Quantum বলা হয়। Electromagnetic Radiation-এর একটি একক Quantum — অর্থাৎ একটি Photon — এর Energy E = hf, যেখানে f হলো Radiation-এর Frequency। h হলো সেই আনুপাতিক ধ্রুবক যা একটি তরঙ্গ-ধর্ম (Frequency) এবং একটি কণা-ধর্ম (Energy) কে সংযুক্ত করে।`,
    simpleExample: `দৃশ্যমান লাল আলোর Frequency প্রায় 4.3 × 10¹⁴ Hz। লাল আলোর একটি Photon বহন করে Energy: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV। এই ক্ষুদ্র Energy আপনার রেটিনার একটি Rhodopsin অণুকে সক্রিয় করতে যথেষ্ট — এটিই দৃষ্টিশক্তির শুরু।`,
    deepMeaning: `Planck-এর আগে, Classical Physics ভবিষ্যদ্বাণী করেছিল যে একটি উত্তপ্ত বস্তু উচ্চ Frequency-তে অসীম Energy বিকিরণ করবে — এটিই "Ultraviolet Catastrophe"। 1900 সালে Max Planck এটি সমাধান করেন এই অনুমান করে যে Energy অবিচ্ছিন্ন নয় বরং Quantised। Einstein এটি ব্যবহার করে Photoelectric Effect ব্যাখ্যা করেন। h হলো action-এর Quantum — এর একক Energy × সময়। হ্রাসকৃত রূপ ħ = h/2π Commutator [x̂, p̂] = iħ-তে আসে — Quantum Mechanics-এর গাণিতিক হৃদয়ে — এবং Heisenberg Uncertainty Principle-এ: Δx · Δp ≥ ħ/2।`,
    whyItMatters: `h হলো Quantum জগৎ ও Classical জগতের মধ্যকার সীমানা। যখন কোনো System-এর প্রাসঙ্গিক action h-এর চেয়ে অনেক বেশি, তখন Classical Mechanics কাজ করে। h ছাড়া Atom ভেঙে পড়ত, Chemistry অস্তিত্ব পেত না, এবং আমাদের পরিচিত মহাবিশ্ব থাকত না।`
  },

  {
    symbol: 'ħ',
    name: 'Reduced Planck Constant',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'h/2π — Quantum Mechanics-এ Angular Momentum-এর স্বাভাবিক একক।',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ ("h-bar" উচ্চারিত) হলো h-কে 2π দিয়ে ভাগ। এটি তখন আসে যখন সাধারণ Frequency f (cycles per second)-এর পরিবর্তে Angular Frequency ω (radians per second) ব্যবহার করা হয়, কারণ ω = 2πf।`,
    simpleExample: `Electron-এর Spin হলো ħ/2। Photon-এর Spin হলো ħ। Orbital Angular Momentum সর্বদা ħ-এর পূর্ণসংখ্যার গুণিতক — তাই ħ নিজেই ঘূর্ণনের atom।`,
    deepMeaning: `Quantum Mechanics-এ ħ কেবল একটি সুবিধাজনক সংক্ষেপণ নয়। এটি Angular Momentum-এর মৌলিক Quantum। Quantum Field Theory-তে ħ, Quantum Fluctuation-এর মাত্রা নিয়ন্ত্রণ করে। ħ → 0 করলে Classical Field Theory পুনরুদ্ধার হয়। Quantum Mechanics-এর সমগ্র কাঠামো — Commutation Relations, Path Integrals, Uncertainty Principles — ħ দ্বারা পরিচালিত।`,
    whyItMatters: `Particle Physicist-দের ব্যবহৃত Natural Units-এ ħ = c = 1, যা সমীকরণ সরল করে এবং তত্ত্বগুলোর গভীর জ্যামিতিক কাঠামো প্রকাশ করে।`
  },

  {
    symbol: 'e',
    name: 'Elementary Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (সংজ্ঞায়িত মান)',
    category: 'Electromagnetic',
    description: 'স্বাধীনভাবে বিদ্যমান সর্বক্ষুদ্র Electric Charge — Charge সর্বদা Quantised।',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `এটি একটি একক Proton (ধনাত্মক) বা একটি একক Electron (ঋণাত্মক)-এর বহনকৃত Electric Charge-এর পরিমাণ। প্রকৃতিতে সমস্ত পর্যবেক্ষণযোগ্য Electric Charge, e-এর পূর্ণসংখ্যার গুণিতক — Charge সর্বদা Quantised।`,
    simpleExample: `1 Ampere Current মানে প্রতি সেকেন্ডে একটি বিন্দু দিয়ে 1 Coulomb Charge প্রবাহিত হয়। যেহেতু প্রতিটি Electron 1.602 × 10⁻¹⁹ C বহন করে, তাই 1 A Current মানে প্রায় 6.24 × 10¹⁸ টি Electron প্রতি সেকেন্ডে প্রবাহিত হচ্ছে।`,
    deepMeaning: `Charge-এর Quantization পরীক্ষামূলকভাবে প্রতিষ্ঠা করেছিলেন Robert Millikan তার বিখ্যাত Oil-drop Experiment-এ। তিনি Electric Field-এ ঝুলন্ত তেলের ফোঁটার Charge পরিমাপ করেছিলেন এবং দেখেছিলেন সব Charge একটি মৌলিক এককের পূর্ণসংখ্যার গুণিতক — সেটাই e। Fine-Structure Constant α ≈ 1/137 হলো Electromagnetic Force-এর শক্তির মাত্রাহীন পরিমাপ। Quark-রা e/3 ও 2e/3 Charge বহন করে, কিন্তু এগুলো Hadron-এর ভেতরে চিরতরে আবদ্ধ এবং খণ্ডিত Charge নিয়ে আলাদাভাবে পর্যবেক্ষিত হয় না।`,
    whyItMatters: `e সমস্ত Atomic ও Molecular মিথস্ক্রিয়ার স্কেল নির্ধারণ করে। Chemistry, Biology, Electronics ও Materials Science সবই মৌলিকভাবে e-এর মানের উপর নির্ভরশীল। যদি e সামান্য ভিন্ন হতো, আমাদের পরিচিত জীবন থাকত না।`
  },

  {
    symbol: 'k',
    name: 'Boltzmann Constant',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (সংজ্ঞায়িত মান)',
    category: 'Thermodynamic',
    description: 'Temperature ও Kinetic Energy-র মধ্যে সেতু — S = k ln(Ω)।',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (kB-ও লেখা হয়) হলো পৃথক কণার Microscopic জগৎ ও Temperature-এর Macroscopic জগতের মধ্যে সেতু। এটি Temperature — একটি Ensemble-এর পরিসংখ্যানগত বৈশিষ্ট্য — কে প্রতি কণার Energy-তে রূপান্তরিত করে। প্রতিটি Degree of Freedom গড় Kinetic Energy-তে (1/2)kT অবদান রাখে।`,
    simpleExample: `ঘরের Temperature-এ (T = 293 K): kT ≈ 0.0253 eV। এটি ঘরের Temperature-এ Thermal Energy-এর বৈশিষ্ট্যমূলক স্কেল। Chemical Bond Energy-গুলো কয়েক eV, তাই ঘরের Temperature-এ Thermal Energy অনেক ছোট — এজন্যই বেশিরভাগ Chemical Bond স্থিতিশীল।`,
    deepMeaning: `Temperature একটি মৌলিক রাশি নয় — এটি কণাগুলোর গড় Kinetic Energy-এর একটি পরিমাপ। S = k ln(Ω) তথ্য ও সম্ভাব্যতার ভিত্তিতে Entropy সংজ্ঞায়িত করে, Thermodynamics কে Microscopic Physics-এর সাথে সংযুক্ত করে। Boltzmann Distribution Temperature T-এ Energy E অবস্থায় একটি System-এর থাকার সম্ভাবনা দেয়: P(E) ∝ e^(−E/kT)। এই Exponential উৎপাদক — Boltzmann Factor — Chemical Reaction Rate থেকে পৃথিবীর Atmosphere-এ অণুর বিতরণ পর্যন্ত সব কিছু নিয়ন্ত্রণ করে।`,
    whyItMatters: `k হলো Thermodynamics ও Statistical Mechanics-এর ভিত্তি। এটি ছাড়া Microscopic Physics কে Temperature, Pressure ও Entropy-র মতো Macroscopic পর্যবেক্ষণযোগ্য রাশির সাথে যুক্ত করা যায় না। 2019 সাল থেকে k একটি নির্ভুল সংজ্ঞায়িত ধ্রুবক, এবং Kelvin এর মাধ্যমে সংজ্ঞায়িত।`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro Constant',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (সংজ্ঞায়িত মান)',
    category: 'Thermodynamic',
    description: 'এক Mole-এ সত্তার সংখ্যা — Atomic ও মানবিক স্কেলের সেতু।',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `যেকোনো পদার্থের এক Mole-এ ঠিক 6.022 140 76 × 10²³ টি Elementary সত্তা (Atom, Molecule, Ion ইত্যাদি) থাকে। এই সংখ্যাটি Atomic স্কেল ও মানবিক স্কেলের মধ্যে সেতু।`,
    simpleExample: `12 gram Carbon-12-এ ঠিক এক Mole Carbon Atom থাকে। এটি একটি প্রায় অকল্পনীয় বড় সংখ্যা: যদি আপনার কাছে এক Mole বালির দানা থাকত, তাহলে সেগুলো পৃথিবীর পৃষ্ঠকে কয়েক কিলোমিটার গভীরে ঢেকে ফেলত।`,
    deepMeaning: `NA, Atomic Mass Unit কে Gram-এর সাথে সংযুক্ত করে। 1 u = 1 gram / NA = 1.660 539 × 10⁻²⁷ kg। Molar Gas Constant R, Boltzmann Constant-এর সাথে সম্পর্কিত: R = NA × k = 8.314 J mol⁻¹ K⁻¹। Faraday Constant F = NAe = 96,485 C/mol হলো এক Mole Electron-এর Charge। ঐতিহাসিকভাবে NA পরিমাপ করা ছিল 19ম ও 20শ শতাব্দীর Physics-এর কেন্দ্রীয় চ্যালেঞ্জগুলোর একটি। 1908 সালে Jean Perrin-এর Brownian Motion পরিমাপ Atom-এর অস্তিত্ব প্রমাণ করেছিল।`,
    whyItMatters: `NA Chemistry কে পরিমাণগত করে তোলে। এটি Chemist-দের ওজন করে Atom গণনা করতে দেয়। প্রতিটি Stoichiometric গণনা, প্রতিটি Pharmaceutical Dosage গণনা, প্রতিটি Materials Science গণনা NA-এর উপর নির্ভর করে।`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Luminous Efficacy',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'Candela সংজ্ঞায়িত করে — মানব জীববিদ্যার সাথে যুক্ত একমাত্র SI ধ্রুবক।',
    discoveredBy: 'International definition (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `540 × 10¹² Hz Frequency-তে (সবুজ আলো, তরঙ্গদৈর্ঘ্য ≈ 555 nm) — মানুষের চোখের Daylight সংবেদনশীলতার শীর্ষ বিন্দু — 1 Watt বিকিরণ শক্তির সাথে ঠিক 683 Lumen Luminous Flux (মানুষের দ্বারা অনুভূত উজ্জ্বলতা) সমকক্ষ।`,
    simpleExample: `বিশুদ্ধ সবুজ আলো নির্গতকারী একটি 1 Watt আলোর উৎস ঠিক 683 Lumen উজ্জ্বল আলো উৎপন্ন করে। অন্য যেকোনো রং প্রতি Watt-এ কম Lumen উৎপন্ন করে কারণ চোখ সেগুলোর প্রতি কম সংবেদনশীল।`,
    deepMeaning: `এই ধ্রুবকটি SI System-এর একমাত্র ধ্রুবক যা মানব জীববিদ্যার উপর নির্ভরশীল — বিশেষত মানুষের চোখের Photopic (Daylight) Spectral Sensitivity। এটি এইভাবে সংজ্ঞায়িত করা হয়েছে যাতে Radiant Power (Watt)-এর ভৌত রাশিকে উজ্জ্বলতার (Lumen) Perceptual রাশির সাথে যুক্ত করা যায়। 2019 সাল থেকে Candela ঠিক 683 lm/W-এ Kcd স্থির রেখে সংজ্ঞায়িত।`,
    whyItMatters: `Photometry, আলোক প্রকৌশল এবং সমস্ত Optical System Design-এর ভিত্তিগত। প্রতিটি বৈদ্যুতিক বাল্বের প্রতিটি Lumen specification এই ধ্রুবকে ফিরে আসে।`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium Hyperfine Frequency',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'Second সংজ্ঞায়িত করে — সমস্ত আধুনিক Timekeeping-এর হৃৎস্পন্দন।',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `Caesium-133 Atom-এর Ground State-এ দুটি Hyperfine Level রয়েছে — Electron-এর Magnetic Moment ও Nuclear Magnetic Moment-এর মিথস্ক্রিয়ার ফলে বিভক্ত। এই দুটি Level-এর মধ্যে পরিবর্তনের সময় Atom ঠিক 9,192,631,770 Hz Frequency-তে Radiation নির্গত বা শোষণ করে।`,
    simpleExample: `1967 সাল থেকে এক Second কে ঠিক এই Radiation-এর 9,192,631,770 টি Oscillation Period হিসেবে সংজ্ঞায়িত করা হয়েছে। Caesium Atomic Clock সর্বকালের নির্মিত সবচেয়ে নির্ভুল Timekeeping ডিভাইস, যা 300 মিলিয়ন বছরে এক Second-এরও কম ভুল করে।`,
    deepMeaning: `Hyperfine Splitting উদ্ভূত হয় Quantum Electrodynamics থেকে — Electron-এর Magnetic Dipole Moment ও Nuclear Spin দ্বারা উৎপন্ন Magnetic Field-এর মধ্যে মিথস্ক্রিয়া। এই Frequency-কে প্রথম নীতি থেকে গণনা করা QED-এর একটি গভীর পরীক্ষা। GPS, ইন্টারনেট (যার জন্য সমলয়িত Clock প্রয়োজন), আর্থিক ব্যবস্থা, এবং সমস্ত আধুনিক Telecommunications সরাসরি Caesium Atomic Clock মানের উপর নির্ভর করে।`,
    whyItMatters: `সমস্ত বিজ্ঞানের মধ্যে সবচেয়ে নির্ভুল পরিমাপ। আধুনিক সভ্যতা — GPS, ইন্টারনেট সমলয়করণ, আর্থিক লেনদেন, 5G Network — সবই এই ধ্রুবকের উপর নির্ভরশীল।`
  },

  // ── PART 2: ELECTROMAGNETIC CONSTANTS ────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Vacuum Electric Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'Electromagnetic',
    description: 'শূন্যমাধ্যমে Electric Field কত সহজে প্রবেশ করতে পারে।',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (Epsilon-naught) পরিমাপ করে একটি Electric Field কত সহজে শূন্যমাধ্যম ভেদ করতে পারে। এটি Coulomb's Law-এ আসে — দুটি Point Charge-এর মধ্যে Force: F = (1/4πε₀) × (q₁q₂/r²)। ε₀ যত বড়, নির্দিষ্ট Charge ও দূরত্বের জন্য Electrostatic Force তত দুর্বল।`,
    simpleExample: `জলের Relative Permittivity εr ≈ 80, মানে জল Vacuum-এর তুলনায় Charge-গুলোর মধ্যে Electrostatic Force 80 গুণ কমিয়ে দেয় — এজন্যই Ionic যৌগের জন্য জল এত চমৎকার দ্রাবক।`,
    deepMeaning: `ε₀ স্বাধীনভাবে সংজ্ঞায়িত নয় — এটি c ও μ₀-এর সংজ্ঞায়িত মান থেকে পাওয়া যায়: ε₀ = 1/(μ₀c²)। এটি Vacuum Form-এ Maxwell-এর চারটি সমীকরণেই আসে। Gauss's Law-এ: ∮ E · dA = Q_enc/ε₀। যেকোনো Closed Surface-এর মধ্য দিয়ে মোট Electric Flux, ε₀ দিয়ে ভাগ করা আবদ্ধ Charge-এর সমান। এটি Electric Field-এ সঞ্চিত Electromagnetic Energy Density-এর স্কেলও নির্ধারণ করে: u_E = (1/2)ε₀E²।`,
    whyItMatters: `Maxwell-এর চারটি সমীকরণেই আসে। ε₀ ছাড়া পরিমাণগত Electrostatics, Capacitor Design বা Dielectric বোঝার কোনো উপায় নেই।`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Vacuum Magnetic Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'Electromagnetic',
    description: 'শূন্যমাধ্যমে Magnetic Field কত সহজে প্রবেশ করতে পারে।',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (Mu-naught) পরিমাপ করে একটি Magnetic Field কত সহজে শূন্যমাধ্যম ভেদ করতে পারে। এটি Biot-Savart Law ও Ampère's Law-এ আসে। I₁ ও I₂ Current বহনকারী দুটি সমান্তরাল তার, d দূরত্বে পৃথক, প্রতি একক Length-এ Force: F/L = (μ₀/2π) × (I₁I₂/d)।`,
    simpleExample: `লোহার Relative Permeability μr প্রায় 10,000 পর্যন্ত হয় — লোহা Vacuum-এর তুলনায় Magnetic Field প্রচণ্ডভাবে কেন্দ্রীভূত করে। এজন্যই Transformer Core লোহা দিয়ে তৈরি: Magnetic Flux দক্ষতার সাথে পরিচালিত ও বিবর্ধিত করতে।`,
    deepMeaning: `2019 SI পুনর্সংজ্ঞার আগে, μ₀ সংজ্ঞা অনুযায়ী ঠিক 4π × 10⁻⁷ N/A² ছিল। এখন এটি একটি পরিমিত রাশি যার সামান্য অনিশ্চয়তা আছে। μ₀ Maxwell-এর Correction-সহ Ampère's Law-এ আসে: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt)। দ্বিতীয় পদটি — Maxwell-এর Displacement Current — Vacuum-এ Electromagnetic Wave অস্তিত্বের সুযোগ দিয়েছিল এবং সরাসরি আলো Electromagnetic Wave-এর পূর্বাভাসে নিয়ে গিয়েছিল।`,
    whyItMatters: `μ₀ ছাড়া কোনো Magnetic Field নেই, Electromagnetic Induction নেই, Electric Motor নেই, Transformer নেই, এবং Radio Wave নেই।`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Characteristic Impedance of Vacuum',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'Electromagnetic',
    description: 'Vacuum-এ Electromagnetic Wave-এ Electric ও Magnetic Field-এর অনুপাত।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `যখন কোনো Electromagnetic Wave শূন্যমাধ্যমে প্রসারিত হয়, তখন Electric Field Amplitude ও Magnetic Field Amplitude-এর অনুপাত: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω।`,
    simpleExample: `একটি Antenna দক্ষতার সাথে বিকিরণ করে যখন এর Impedance 377 Ω-এর সাথে মিলে। প্রতি একক ক্ষেত্রফলে বিকিরিত Power (Poynting Vector) হলো S = E²/Z₀। এটি Dipole Antenna থেকে Satellite Dish পর্যন্ত সবকিছু Design করতে ব্যবহৃত হয়।`,
    deepMeaning: `Z₀ হলো Free Space-এর Impedance — এটি বলে একটি প্রসারমান Electromagnetic Wave-এ Magnetic Field-এর প্রতি Unit-এ কতটুকু Electric Field পাওয়া যায়। এটি Vacuum-এর Electromagnetic Wave Propagation-এর প্রতি "Resistance", একটি Transmission Line-এর Characteristic Impedance-এর সাদৃশ্যে। পৃথিবীতে আসা সূর্যালোক একটি Electric Field Amplitude-এর সাথে সঙ্গতিপূর্ণ: √(1361 × Z₀) ≈ 716 V/m।`,
    whyItMatters: `Antenna Design, Radar Cross-Section, Antenna Gain এবং সমস্ত Wireless Communication Link Budget-এর জন্য অপরিহার্য।`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson Constant',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'Electromagnetic',
    description: 'Superconducting Josephson Junction-এ Voltage ও Frequency সম্পর্কিত করে।',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson Constant, AC Josephson Effect-এ Voltage ও Frequency সম্পর্কিত করে। যখন একটি DC Voltage V একটি Josephson Junction (দুটি Superconductor-এর মধ্যে একটি পাতলা Insulating Barrier)-এ প্রয়োগ করা হয়, তখন এটি Frequency f = 2eV/h-তে একটি Alternating Current উৎপন্ন করে।`,
    simpleExample: `একটি Josephson Junction-এর উপর 1 Millivolt Voltage, AC Oscillation উৎপন্ন করে ~483.6 GHz-এ — Microwave Range-এ। এটি Voltage Standard তৈরিতে ব্যবহৃত হয় যা 10¹⁰ ভাগে 1 অংশ নির্ভুল।`,
    deepMeaning: `2 গুণকটি এই কারণে যে Superconductivity-তে Cooper Pair জড়িত — 2e Charge-এর Electron-এর জোড়া। Josephson Junction হলো একটি Macroscopic Quantum Device যেখানে দুটি Superconductor-এর মধ্যে Quantum Phase পার্থক্য একটি Supercurrent চালিত করে। AC Josephson Effect একটি চমৎকার প্রদর্শন যে Quantum Mechanics Macroscopic স্কেলে Superconductor-এ কাজ করে।`,
    whyItMatters: `বিশ্বব্যাপী ব্যবহৃত Primary Voltage Standard। সবচেয়ে নির্ভুল Electrical পরিমাপ। Quantum Metrology ও Superconducting Quantum Computing-এর ভিত্তিগত।`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing Constant',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'Electromagnetic',
    description: 'Electrical Resistance-এর Quantum — h/e² — Quantum Hall Effect থেকে।',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² হলো Resistance-এর Quantum। এটি Quantum Hall Effect-এ আসে: যখন একটি 2D Electron Gas কম Temperature-এ একটি শক্তিশালী লম্ব Magnetic Field-এ রাখা হয়, Hall Resistance, RK-এর ঠিক ভগ্নাংশে Quantised হয়: RH = RK/n।`,
    simpleExample: `Quantization এত নির্ভুল যে RK Primary Resistance Standard হিসেবে ব্যবহৃত হয়। ~1 K-এ ~10 Tesla Field-এ Silicon Chip RK/2 = 12,906 Ω কে এক Billion-এ 1 অংশেরও ভালো নির্ভুলতায় পুনরুৎপাদন করে।`,
    deepMeaning: `Quantization-এর উৎস Topological — এটি Material, Sample Geometry বা কোনো সমন্বয়যোগ্য Parameter-এর উপর নির্ভর করে না। পরিমাপের নির্ভুলতার মধ্যে এটি নির্ভুল। Fractional Quantum Hall Effect (1982) ১/৩, ২/৫ ইত্যাদি ভগ্নাংশে আরও অদ্ভুত Quantization জড়িত — অত্যন্ত Correlated Electron অবস্থা থেকে উদ্ভূত, যার মধ্যে ν = 5/2 অবস্থা রয়েছে, যা Topological Quantum Computing-এর জন্য প্রাসঙ্গিক Non-Abelian Anyon ধারণ করতে পারে।`,
    whyItMatters: `বিশ্বব্যাপী Primary Resistance Standard। Condensed Matter Physics-এ Topology-র একটি দরজা। Integer ও Fractional Quantum Hall Effect আধুনিক Physics-এর গভীরতম আবিষ্কারগুলোর প্রতিনিধিত্ব করে।`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Magnetic Flux Quantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'Electromagnetic',
    description: 'Magnetic Flux-এর Quantum — h/(2e) — Superconducting Loop-এ।',
    discoveredBy: 'London & Onsager (তত্ত্ব) · Doll & Näbauer (1961, নিশ্চিত)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `একটি Superconducting Loop-এর মধ্য দিয়ে Magnetic Flux, Φ₀-এর একক গুণিতকে Quantised। একটি Superconducting Ring শুধুমাত্র h/(2e)-এর পূর্ণসংখ্যার গুণিতকে Magnetic Flux আটকাতে পারে।`,
    simpleExample: `একটি SQUID (Superconducting Quantum Interference Device) Magnetic Flux-এর পরিবর্তন 10⁻⁶ Φ₀ পর্যন্ত সনাক্ত করতে পারে — যা ~10⁻¹⁸ Tesla Magnetic Field পরিবর্তনের সমকক্ষ। এটি মস্তিষ্কের Imaging-এর জন্য (MEG) ব্যবহৃত হয়।`,
    deepMeaning: `Magnetic Flux-এর Quantization হলো Quantum Mechanics-এর একটি সরাসরি Macroscopic প্রকাশ। Superconducting Order Parameter (Macroscopic Quantum Wavefunction) একটি Loop-এর চারপাশে Single-Valued হতে হবে, যা আবদ্ধ Flux-কে Quantised হতে বাধ্য করে। SQUID, Φ₀ ব্যবহার করে অসাধারণ সংবেদনশীলতায় Magnetic Field পরিমাপ করে — এখন পর্যন্ত নির্মিত সবচেয়ে সংবেদনশীল Magnetic Sensor।`,
    whyItMatters: `SQUID Technology, Magnetoencephalography, Macroscopic স্কেলে Quantum Mechanics-এর মৌলিক পরীক্ষা এবং Superconducting Quantum Computing-এর ভিত্তি।`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance Quantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'Electromagnetic',
    description: 'Electrical Conductance-এর মৌলিক একক — 2e²/h।',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `যখন Electron একটি নিখুঁত, Single-Channel Quantum Conductor-এর মধ্য দিয়ে প্রবাহিত হয় (যেমন Single Atom Contact বা Quantum Point Contact), Conductance ঠিক G₀ = 2e²/h প্রতি Channel। Resistance হলো 1/G₀ = h/(2e²) ≈ 12,906 Ω।`,
    simpleExample: `Single Atom পর্যন্ত প্রসারিত একটি Gold Nanowire-এর Conductance প্রায় G₀। এটি পরীক্ষামূলকভাবে অনেক নির্ভুলতায় পরিমাপ করা হয়েছে। একটি দুই-Atom তারের Conductance ~2G₀।`,
    deepMeaning: `Classical Resistance Sample Geometry, Material ও অপদ্রব্যের উপর নির্ভর করে। কিন্তু Quantum স্তরে, এমনকি একটি নিখুঁত Conductor-এরও Resistance আছে — কারণ Conductor ও এর Lead-এর মধ্যে Propagating Mode-গুলোর Quantum Mechanical মিলনের কারণে। এটি Landauer Formula: G = G₀ × Σ T, যেখানে T হলো পৃথক Quantum Channel-এর Transmission Probability।`,
    whyItMatters: `Mesoscopic Physics ও Nanoelectronics-এর ভিত্তি। Molecular Junction, Carbon Nanotube ও Quantum Dot-এর মধ্য দিয়ে Electron Transport নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'F',
    name: 'Faraday Constant',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'Electromagnetic',
    description: 'এক Mole Electron-এর Charge — NA × e।',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday Constant হলো এক Mole Elementary Charge-এর Charge — এক Mole Electron বা এক Mole Proton। Electrochemistry-তে, এটি একটি Monovalent Ion-এর এক Mole জমা বা দ্রবীভূত করতে কত Charge প্রয়োজন তা নিয়ন্ত্রণ করে।`,
    simpleExample: `CuSO₄ দ্রবণ থেকে 1 Mole Copper (63.5 g) Electroplate করতে 2F = 192,970 C Charge লাগে (Copper Divalent, Cu²⁺ + 2e⁻ → Cu)। এজন্যই পুরু Layer Electroplate করতে বড় Current প্রয়োজন।`,
    deepMeaning: `Faraday-এর Electrolysis সূত্র (1833-1834) বলে Electrode-এ জমা পদার্থের Mass, প্রবাহিত Charge-এর সমানুপাতিক, F আনুপাতিক ধ্রুবক (প্রতি Mole প্রতি Valence): m = (M/zF) × Q। Faraday Electron বা Atom সম্পর্কে না জেনেই এই সম্পর্ক পরীক্ষামূলকভাবে বের করেছিলেন — এটি একটি উল্লেখযোগ্য অর্জন। NA ও e-এর সংজ্ঞার মাধ্যমে এই ধ্রুবকটির এখন একটি নির্ভুল মান রয়েছে।`,
    whyItMatters: `সমস্ত Electrochemistry-এর ভিত্তি। প্রতিটি Lithium-ion Battery, প্রতিটি Electroplating প্রক্রিয়া, প্রতিটি Chlorine Plant এবং Metals-এর প্রতিটি Electrolytic Refining এই ধ্রুবকের উপর কাজ করে।`
  },

  // ── PART 3: ATOMIC & NUCLEAR CONSTANTS ───────────────────────────────────

  {
    symbol: 'α',
    name: 'Fine-Structure Constant',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'মাত্রাহীন',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atomic',
    description: 'Electromagnetic Force-এর মাত্রাহীন Coupling Constant।',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α হলো Electromagnetic Interaction-এর মাত্রাহীন Coupling Constant। এটি Charged কণার মধ্যে Electromagnetic Force-এর শক্তি পরিমাপ করে — বিশেষত, একটি Charged কণা একটি Photon নির্গত বা শোষণ করার Probability Amplitude।`,
    simpleExample: `Quantum Electrodynamics-এ, একটি Electron একটি নির্দিষ্ট প্রক্রিয়ায় একটি Photon নির্গত করার Probability α-এর সমানুপাতিক। দুই-Photon প্রক্রিয়া α²-এর সমানুপাতিক, ইত্যাদি। যেহেতু α ≈ 1/137, প্রতিটি অতিরিক্ত Photon Vertex Probability কে ~1/137 গুণ দমন করে, এজন্যই QED-এর জন্য Feynman Diagram দ্রুত Converge করে।`,
    deepMeaning: `α Physics-এর সবচেয়ে রহস্যময় সংখ্যাগুলোর একটি। এটি সম্পূর্ণ মাত্রাহীন — এর কোনো একক নেই এবং ব্যবহৃত একক সিস্টেম নির্বিশেষে এটি একই মান নেয়। এটি e (Electromagnetism), ε₀ (Electrostatics), ħ (Quantum Mechanics) ও c (Relativity) একত্রিত করে। Richard Feynman α কে "Physics-এর সবচেয়ে বড় অভিশাপ রহস্যগুলোর একটি" বলেছিলেন। QED-এ, α সত্যিকার অর্থে স্থির নয় — এটি Vacuum Polarization-এর কারণে Energy Scale-এর সাথে "Run" করে: কম Energy-তে: α ≈ 1/137। Z Boson Mass Scale-এ: α ≈ 1/128।`,
    whyItMatters: `α সমস্ত Atomic Physics, Chemistry ও Molecular Biology নিয়ন্ত্রণ করে। Atom-এর আকার, Chemical Bond-এর শক্তি, সমস্ত মৌলের Absorption ও Emission Spectra — সবই α দ্বারা নিয়ন্ত্রিত। এটি Physics-এর সম্ভবত সবচেয়ে গুরুত্বপূর্ণ মাত্রাহীন সংখ্যা।`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg Constant',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atomic',
    description: 'Hydrogen-এর সমস্ত Spectral Line-এর তরঙ্গদৈর্ঘ্য নির্ধারণ করে।',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg Constant, Hydrogen-এ Spectral Line-এর Wavenumber (বিপরীত তরঙ্গদৈর্ঘ্য) দেয়। Hydrogen-এর সমস্ত Spectral Line-এর তরঙ্গদৈর্ঘ্য Rydberg Formula দ্বারা পাওয়া যায়: 1/λ = R∞ × (1/n₁² − 1/n₂²), যেখানে n₁ ও n₂ ধনাত্মক পূর্ণসংখ্যা এবং n₂ > n₁।`,
    simpleExample: `Lyman Series (Ground State-এ Transition)-এর জন্য, প্রথম রেখা (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4। λ = 121.6 nm (Ultraviolet — Lyman-alpha Line)। এটি Astrophysics-এর সবচেয়ে গুরুত্বপূর্ণ Spectral Line — মহাবিশ্ব জুড়ে Hydrogen সনাক্ত করতে এবং Redshift-এর মাধ্যমে Space-এর প্রসারণ পরিমাপ করতে ব্যবহৃত।`,
    deepMeaning: `R∞ তাত্ত্বিকভাবে আরও মৌলিক ধ্রুবক থেকে পাওয়া যায়: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h)। এই Formula — Bohr Model থেকে পাওয়া ও Quantum Mechanics দ্বারা পরিমার্জিত — Hydrogen-এর Spectrum কে Electron-এর Mass, Elementary Charge ও অন্যান্য মৌলিক ধ্রুবকের সাথে সংযুক্ত করে। Rydberg Energy (Ry) — Hydrogen-এর Binding Energy — হলো: En = −Ry/n² = −13.6 eV/n²।`,
    whyItMatters: `Bohr কে Quantum Atom-এর দিকে নিয়ে যাওয়া শুরুর বিন্দু। সবচেয়ে নির্ভুলভাবে পরিমাপকৃত Atomic Constant। 12 Significant Figure পর্যন্ত জানা, এটি প্রতি Trillion-এ কয়েক অংশের স্তরে QED-এর পরীক্ষা সক্ষম করে।`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Atom-এর স্বাভাবিক আকার স্কেল — Hydrogen-এ Electron-Proton-এর সবচেয়ে সম্ভাব্য দূরত্ব।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ হলো Ground State (n = 1)-এ Hydrogen Atom-এ Electron ও Proton-এর মধ্যে সবচেয়ে সম্ভাব্য দূরত্ব। এটি Atom-এর বৈশিষ্ট্যমূলক আকার স্কেল নির্ধারণ করে। a₀ = ħ/(mecα)।`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom)। এটি একটি Hydrogen Atom-এর সাধারণ আকার। বেশিরভাগ Atom-এর Radius a₀-এর কয়েক গুণের মধ্যে। Diamond-এ C-C Bond Length ~2.9a₀। DNA Helix-এর ব্যাস ~40Å ≈ 75a₀।`,
    deepMeaning: `Bohr Radius উদ্ভূত হয় Electron-এর Kinetic Energy (Quantum Mechanical, যা Electron কে ছড়িয়ে দিতে চায় — Uncertainty Principle এটিকে Nucleus-এ ভাঁজ হতে বাধা দেয়) ও Coulomb Potential Energy (যা এটিকে Nucleus-এর দিকে টানে)-এর ভারসাম্য থেকে। Quantum Mechanics-এ, Hydrogen-এর Ground State Wavefunction r = a₀-তে সর্বোচ্চ। Bohr Radius সমস্ত Atomic Wavefunction-এর স্কেল নির্ধারণ করে — উচ্চতর Orbital-এর Radius ~ n²a₀।`,
    whyItMatters: `Chemistry ও Materials Science-এর মৌলিক Length স্কেল সংজ্ঞায়িত করে। Condensed Matter Physics-এ, a₀ Chemical Bond, Crystal Lattice Spacing এবং Exciton-এর আকারের Length স্কেল নির্ধারণ করে। Hydrogen Atom-এর আকারই শেষ পর্যন্ত Matter-এর ঘনত্ব নির্ধারণ করে।`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atomic',
    description: 'Atomic Physics-এ Energy-এর স্বাভাবিক একক — Hydrogen-এর Ionisation Energy-এর দ্বিগুণ।',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree Energy হলো Ground State থেকে Hydrogen-এর Ionisation Energy-এর দ্বিগুণ। এটি Atomic Physics-এ Energy-এর স্বাভাবিক একক: Eh = e²/(4πε₀a₀) = α²mec²।`,
    simpleExample: `Hydrogen Ground State-এর Energy −(1/2)Eh = −13.6 eV। সাধারণ Chemical Bond Energy ~0.1–0.2 Eh (3–5 eV)। C-H Bond হলো ~0.16 Eh। এই সংখ্যাগুলো Atomic Units-এ সবই প্রায় এক — Quantum Chemistry-এর জন্য নিখুঁত।`,
    deepMeaning: `Atomic Units-এ (ħ = me = e = a₀ = 1 সেট করে), Eh = 1। Atomic Units Quantum Chemistry-এর সমীকরণকে প্রচণ্ড সরল করে। Atomic Units-এ Hydrogen-এর Schrödinger Equation সহজ হয়: −(1/2)∇²ψ − (1/r)ψ = Eψ, যেখানে Ground State-এর জন্য E = −1/2, মানে −0.5 Hartree = −13.6 eV। Computational Chemistry Code (Density Functional Theory, Hartree-Fock) প্রায় সর্বজনীনভাবে অভ্যন্তরীণভাবে Atomic Units-এ কাজ করে।`,
    whyItMatters: `Quantum Chemistry-এর কার্যকরী একক। প্রতিটি DFT গণনা, Molecular Dynamics Simulation এবং Quantum Chemistry ফলাফল শেষ পর্যন্ত Hartree Energy-তে ফিরে আসে। এটি Electronic Structure গণনার মৌলিক Energy স্কেল।`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atomic',
    description: 'Electron Magnetic Moment-এর স্বাভাবিক একক — eħ/(2me)।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB হলো Electron-এর জন্য Magnetic Moment-এর স্বাভাবিক একক। এটি ħ Angular Momentum-এর কারণে Electron-এর Orbital Magnetic Moment প্রতিনিধিত্ব করে।`,
    simpleExample: `1 Tesla MRI Magnetic Field-এ, Electron Spin-up ও Spin-down অবস্থার মধ্যে Zeeman Splitting হলো 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV — Microwave Frequency-এর সাথে সামঞ্জস্যপূর্ণ। এজন্যই ESR Microwave ব্যবহার করে, যেখানে NMR Radiofrequency ব্যবহার করে।`,
    deepMeaning: `Electron-এর Spin Magnetic Moment প্রায় μB (ঠিকভাবে, এটি ge × μB/2, যেখানে ge ≈ 2.002 Quantum Electrodynamic Correction-এর কারণে)। Zeeman Effect — Magnetic Field-এ Atomic Spectral Line-এর বিভাজন — μB দ্বারা নিয়ন্ত্রিত: ΔE = ml × μB × B, যেখানে ml হলো Magnetic Quantum Number। μB, Electron Spin Resonance (ESR) নিয়ন্ত্রণ করে। পরীক্ষার সাথে 12 Decimal Place পর্যন্ত মিলে, Anomalous অংশটি বিজ্ঞানের সবচেয়ে নির্ভুলভাবে গণনাকৃত রাশি।`,
    whyItMatters: `Electron Spin Resonance, Magnetic Material এবং সমস্ত Magneto-optical Effect-এর ভিত্তি। Spintronics ও Spin Qubit-এর সাথে Quantum Computing-এর কেন্দ্রীয়।`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atomic',
    description: 'Nuclear Magnetic Moment-এর স্বাভাবিক একক — Bohr Magneton-এর চেয়ে 1836 গুণ ছোট।',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN হলো Nucleon (Proton ও Neutron)-এর Magnetic Moment-এর স্বাভাবিক একক। এটি μB-এর চেয়ে 1836 গুণ ছোট কারণ Proton Electron-এর চেয়ে 1836 গুণ ভারী।`,
    simpleExample: `Proton-এর Magnetic Moment 2.793 μN। 3 Tesla MRI Scanner-এ, Proton Spin অবস্থার মধ্যে Energy Gap হলো 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J, যা ~127 MHz Radiofrequency-এর সাথে সামঞ্জস্যপূর্ণ। এটি ঠিক সেই Frequency যা MRI Scanner ব্যবহার করে।`,
    deepMeaning: `কোনো Electric Charge না থাকা সত্ত্বেও, Neutron-এর Magnetic Moment −1.913 μN। একটি Neutral কণার এই Non-zero Magnetic Moment ছিল ঐতিহাসিকভাবে প্রথম ইঙ্গিতগুলোর একটি যে Neutron একটি মৌলিক কণা নয় বরং এর অভ্যন্তরীণ কাঠামো আছে (Quark)। Proton-এর Magnetic Moment 2.793 μN — একটি Dirac Point Particle-এর মতো সহজভাবে 1 μN নয় — ছিল 1933 সালে Stern-এর Nobel Prize বিজয়ী আবিষ্কার। NMR (ও MRI) Proton Spin Transition-এর উপর ভিত্তি করে।`,
    whyItMatters: `NMR Spectroscopy ও MRI-এর ভিত্তি — Structural Chemistry ও Medical Imaging-এ সবচেয়ে শক্তিশালী হাতিয়ার। ঐতিহাসিকভাবে Nucleon-এর অভ্যন্তরীণ Quark কাঠামো প্রমাণ করেছে।`
  },

  // ── PART 4: PARTICLE CONSTANTS ────────────────────────────────────────────

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Particle',
    description: 'Electron-এর Rest Mass — ক্ষুদ্রতম Massive মৌলিক কণা।',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `এটি Electron-এর Rest Mass — ক্ষুদ্রতম Massive মৌলিক কণা। E = mc²-এর মাধ্যমে Energy Unit-এ: mec² = 0.510 998 950 MeV। Electron, Proton-এর চেয়ে 1836.15 গুণ হালকা।`,
    simpleExample: `Pair Production (γ → e⁺ + e⁻) একটি Photon-এর কমপক্ষে 2mec² = 1.022 MeV প্রয়োজন। এই Energy-এর নিচে, Photon যতই থাকুক না কেন Electron-Positron Pair তৈরি করতে পারে না। এই সীমানা Matter-এ Gamma-Ray শোষণ নিয়ন্ত্রণ করে।`,
    deepMeaning: `Electron Mass, Standard Model-এর একটি Free Parameter — এটি তাত্ত্বিকভাবে পূর্বাভাস দেওয়া যায় না বরং পরিমাপ করতে হয়। এটি Higgs Mechanism দ্বারা উৎপন্ন: Electron, Higgs Field-এর সাথে মিথস্ক্রিয়া করে, এবং এই মিথস্ক্রিয়ার শক্তি (Yukawa Coupling, ye ≈ 2.94 × 10⁻⁶) Mass নির্ধারণ করে। Top Quark-এর Yukawa Coupling (yt ≈ 1)-এর তুলনায় Electron-এর Yukawa Coupling-এর ক্ষুদ্রতা, Particle Physics-এর অসমাধৃত "Hierarchy" ধাঁধার একটি। Electron একটি সত্যিকারের Elementary Point Particle বলে মনে হয়।`,
    whyItMatters: `সমস্ত Atomic ও Chemical আচরণ নিয়ন্ত্রণ করে। a₀ = ħ²/(mee²k) দ্বারা Atom-এর আকার, Electron-এর Binding Energy, X-Ray-এর Energy এবং Beta Radiation-এর অনুপ্রবেশের গভীরতা নির্ধারণ করে।`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-factor',
    value: '−2.002319304',
    unit: 'মাত্রাহীন',
    exact: '−2.00231930436256',
    category: 'Particle',
    description: 'সমগ্র বিজ্ঞানে সবচেয়ে নির্ভুলভাবে যাচাইকৃত পূর্বাভাস।',
    discoveredBy: 'Kusch & Foley (1948) · QED গণনা: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g-factor হলো Electron-এর প্রকৃত Magnetic Moment ও একটি সাধারণ Dirac Particle হলে যা হতো (g = 2 ঠিক) তার অনুপাত। Anomalous Magnetic Moment হলো ae = (ge − 2)/2 = 0.001 159 65।`,
    simpleExample: `QED থেকে ae-এর তাত্ত্বিক পূর্বাভাসে 10 Loop পর্যন্ত Feynman Diagram (শুধু চতুর্থ Order-এ 12,672 Diagram) যোগ করা প্রয়োজন। ফলাফল 12 Decimal Place পর্যন্ত পরীক্ষার সাথে মেলে — প্রতি Trillion-এ 1 অংশ।`,
    deepMeaning: `Electron-এর Anomalous Magnetic Moment সমগ্র বিজ্ঞানের সবচেয়ে নির্ভুলভাবে পরীক্ষিত পূর্বাভাস। Quantum Electrodynamics (QED) g = 2 থেকে বিচ্যুতি Fine-Structure Constant α-এর Power Series হিসেবে গণনা করে: ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... QED পূর্বাভাস থেকে যেকোনো বিচ্যুতি Standard Model-এর বাইরে নতুন Physics-এর সংকেত দেবে। এই গণনার সাফল্য Theoretical Physics-এর সর্বশ্রেষ্ঠ বিজয়।`,
    whyItMatters: `Theoretical Physics-এর সর্বশ্রেষ্ঠ বিজয়। অন্য যেকোনো পরিমাপের চেয়ে কঠোরভাবে QED পরীক্ষা করে। Fine-Structure Constant α-এর সবচেয়ে নির্ভুল নির্ধারণ প্রদান করে।`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton Mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Particle',
    description: 'Proton-এর Rest Mass — Electron-এর চেয়ে 1836 গুণ ভারী।',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Energy Unit-এ: mpc² = 938.272 MeV। Proton Electron-এর চেয়ে 1836.15 গুণ ভারী। এই Mass Ratio Atomic Physics-এর সবচেয়ে পরিণামশালী সংখ্যাগুলোর একটি।`,
    simpleExample: `Proton-এর বড় Mass মানে Thermal Energy-তে এর de Broglie Wavelength Electron-এর চেয়ে ~43 গুণ ছোট — Proton-গুলো অনেক কম Quantum-Wave-like। এজন্যই Born-Oppenheimer Approximation কাজ করে: Nucleus Classical কণার মতো আচরণ করে।`,
    deepMeaning: `Electron-এর মতো নয়, Proton মৌলিক নয় — এটি দুটি Up Quark ও একটি Down Quark দিয়ে তৈরি একটি Composite কণা, যা Gluon-দ্বারা মধ্যস্থতায় Strong Force দ্বারা আবদ্ধ। উল্লেখযোগ্যভাবে, Quark-দের Mass মোট Proton Mass-এর মাত্র ~1% হিসেব করে। বাকি 99% আসে Quark-দের Kinetic Energy ও Gluon Field-এ সঞ্চিত Energy থেকে — E = mc²-এর একটি গভীর প্রকাশ। Mass মূলত Energy। Proton-এর একটি সীমিত Charge Radius 0.8409 fm রয়েছে।`,
    whyItMatters: `Proton Atomic Number ও প্রায় সমস্ত Atomic Mass নির্ধারণ করে। আপনার শরীরের প্রায় সমস্ত Mass আসলে Proton ও Neutron-এর ভেতরে Quantum Chromodynamic (QCD) Field-এর Energy। যদি এটি উল্লেখযোগ্যভাবে ভিন্ন হতো, জীবন মৌলিকভাবে পরিবর্তিত হতো।`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-factor',
    value: '5.586',
    unit: 'মাত্রাহীন',
    exact: '5.5856946893',
    category: 'Particle',
    description: 'বড় Anomalous Magnetic Moment যা প্রমাণ করে Proton Composite।',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `একটি সাধারণ Dirac Proton-এর জন্য, gp = 2 হওয়া উচিত। কিন্তু gp ≈ 5.586 — প্রায় তিন গুণ বড়। এই বিশাল Anomalous Magnetic Moment ছিল Proton-এর Composite কাঠামোর দিকে নির্দেশকারী প্রথম পরীক্ষামূলক আবিষ্কারগুলোর একটি।`,
    simpleExample: `যদি Proton একটি সাধারণ, কাঠামোহীন Point হতো, তাহলে এটি শক্তির 2 একটি Magnet-এর মতো আচরণ করত। এটি যে 5.586 সেটি এর ভেতরে Internal Charge-এর গতিশীলতার (Quark) সরাসরি সংখ্যাত্মক প্রমাণ।`,
    deepMeaning: `Otto Stern 1933 সালে gp ≈ 5.6 পরিমাপ করেছিলেন, এমন সময়ে যখন Proton কে একটি মৌলিক Dirac Particle মনে করা হতো। এই ফলাফল Physics সমাজকে হতবাক করেছিল। বড় Anomalous Magnetic Moment — ও Neutron-এর Non-zero Magnetic Moment — Quark Model-এর মূল প্রমাণ ছিল। এই মানগুলো এখন আংশিকভাবে QCD গণনার মাধ্যমে বোঝা যায়, যদিও QCD থেকে একটি সম্পূর্ণ নির্ভুল First-principles গণনা একটি বড় চ্যালেঞ্জ।`,
    whyItMatters: `ঐতিহাসিকভাবে গুরুত্বপূর্ণ আবিষ্কার যা Quark Model-এর দিকে নিয়ে গিয়েছিল। Atomic Nucleus-এ Magnetic Resonance (NMR/MRI) গণনার কেন্দ্রীয়। Hadron কাঠামো তত্ত্বের কঠোর পরীক্ষা।`
  },

  // ── PART 6: NEUTRON CONSTANTS ─────────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron Mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'Proton-এর চেয়ে সামান্য ভারী — Mass পার্থক্য Beta Decay সক্ষম করে।',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Neutron, Proton-এর চেয়ে সামান্য ভারী — 1.293 MeV/c² দ্বারা। Energy Unit-এ: mnc² = 939.565 MeV। এই ছোট কিন্তু গুরুত্বপূর্ণ Mass পার্থক্যের মানে হলো একটি Free Neutron অস্থির — এটি Beta Decay দ্বারা ক্ষয় হয়।`,
    simpleExample: `একটি Free Neutron ~10 মিনিটে (Half-life 613.9 s) ক্ষয় হয়। নির্গত Energy হলো 1.293 MeV Mass পার্থক্য। Nucleus-এর ভেতরে, Neutron Nuclear Binding Energy দ্বারা স্থিতিশীল এবং ক্ষয় হয় না।`,
    deepMeaning: `যদি Neutron, Proton-এর চেয়ে Electron Mass-এর বেশি হালকা হতো, তাহলে Free Proton Neutron ও Positron-এ ক্ষয় হতো — Hydrogen Atom অস্থির হতো, Chemistry মৌলিকভাবে বদলে যেত। Mass পার্থক্য Big Bang Nucleosynthesis-এর সময় আটকে যাওয়া Neutron-to-Proton Ratio (n/p ≈ 1/7) নির্ধারণ করে, Hydrogen (75%) ও Helium (25%)-এর মহাজাগতিক প্রাচুর্য নির্ধারণ করে।`,
    whyItMatters: `Nuclear Stability, Beta Decay ও মৌলগুলোর মহাজাগতিক প্রাচুর্য নিয়ন্ত্রণ করে। Neutron Mass পার্থক্য Hydrogen ও তাই জীবনের অস্তিত্বের জন্য মহাজাগতিকভাবে অপরিহার্য।`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron Magnetic Moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'শূন্য Charge সত্ত্বেও ঋণাত্মক Magnetic Moment — অভ্যন্তরীণ Quark-এর প্রমাণ।',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `Neutron-এর একটি ঋণাত্মক Magnetic Moment (−1.913 Nuclear Magneton) আছে সম্পূর্ণ শূন্য Net Electric Charge থাকা সত্ত্বেও।`,
    simpleExample: `একটি কাঠামোহীন Neutral কণার Magnetic Moment থাকা উচিত নয়। Neutron Magnetic Field-এর প্রতি প্রতিক্রিয়া দেখায় এই সত্যটিই প্রমাণ করে যে এর মধ্যে Charged উপ-কণা রয়েছে যাদের প্রভাব পুরোপুরি বাতিল হয় না।`,
    deepMeaning: `Magnetic Moment-এর জন্য হয় Charge অথবা Spin Distribution প্রয়োজন। Neutron-এর ঋণাত্মক Magnetic Moment এর অভ্যন্তরীণ Quark কাঠামো থেকে উদ্ভূত হয়: দুটি Down Quark (প্রতিটি Charge −e/3) ও একটি Up Quark (Charge +2e/3) ধ্রুবক Quantum গতিতে থাকে। ঘূর্ণায়মান Charged Quark-দের Spatial বিতরণ একটি Net ঋণাত্মক Magnetic Moment তৈরি করে।`,
    whyItMatters: `Nuclear Physics-এর সবচেয়ে চমকপ্রদ ফলাফলগুলোর একটি। Neutron Electric Dipole Moment (EDM)-এর বর্তমান সীমা CP Symmetry পরীক্ষা করতে ও মহাবিশ্বের Matter-Antimatter Asymmetry ব্যাখ্যা করতে ব্যবহৃত হয়।`
  },

  // ── PART 7: MUON & TAU CONSTANTS ─────────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon Mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Particle',
    description: 'Electron-এর ভারী Copy — "কে এটা চেয়েছিল?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Muon, Electron-এর চেয়ে 206.768 গুণ ভারী। এটি একই Charge বহন করে এবং সমস্ত Non-gravitational দিক থেকে অভিন্নভাবে মিথস্ক্রিয়া করে — যেন প্রকৃতি Electron-এর একটি দ্বিতীয়, ভারী Copy তৈরি করেছে।`,
    simpleExample: `Cosmic Ray Muon, 15 km উচ্চতায় তৈরি হয়ে ~0.99c-এ চলে। শাস্ত্রীয়ভাবে তাদের মাটিতে পৌঁছানোর আগেই ক্ষয় হওয়া উচিত (2.2 μs Lifetime → মাত্র 650 m গমন)। তবুও তারা বড় সংখ্যায় পৌঁছায় কারণ Relativistic Time Dilation (γ ≈ 7) তাদের Lifetime ~15 μs-এ বাড়িয়ে দেয়।`,
    deepMeaning: `Muon কোনো সহজ তাত্ত্বিক চিত্রে ফিট করে না। এর অস্তিত্ব প্রকৃতির একটি বাস্তবতা। এটি ক্ষয় হয়: μ⁻ → e⁻ + ν̄e + νμ। Muonic Atom (μ⁻ যেখানে e⁻ প্রতিস্থাপন করে) ~207 গুণ বেশি Nucleus-এর কাছে Orbit করে, Nuclear কাঠামোর প্রতি এদের অত্যন্ত সংবেদনশীল করে তোলে। Muon Anomalous Magnetic Moment (g-2) বর্তমানে Theory থেকে ~4σ বিচ্যুতি দেখায়।`,
    whyItMatters: `Muon Anomalous Magnetic Moment হলো Standard Model-এর বাইরে Physics-এর প্রধান পরীক্ষামূলক ইঙ্গিত। Muon ব্যবহার করা হয় আগ্নেয়গিরির অভ্যন্তর চিত্রণ করতে ও চোরাচালান করা Nuclear উপাদান সনাক্ত করতে।`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon Anomalous Magnetic Moment',
    value: '0.0011659',
    unit: 'মাত্রাহীন',
    exact: '0.00116592059',
    category: 'Particle',
    description: 'Standard Model-এর বাইরে Physics-এর প্রধান পরীক্ষামূলক ইঙ্গিত।',
    discoveredBy: 'Fermilab Muon g-2 Experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Electron-এর মতো, Muon-এরও একটি Anomalous Magnetic Moment রয়েছে। aμ = (gμ − 2)/2 = 0.001 165 920 59। এটি Dirac-এর পূর্বাভাস g = 2 থেকে বিচ্যুতি পরিমাপ করে।`,
    simpleExample: `Electron-এর মতো নয়, Muon ভারী কণার Virtual অবদানের প্রতি অধিক সংবেদনশীল, কারণ Quantum সংশোধন (mμ/M)² অনুপাতে বৃদ্ধি পায়, যেখানে M হলো Virtual কণার Mass — Muon-এর বৃহত্তর Mass-এর কারণে এই প্রভাব Electron-এর চেয়ে অনেক বেশি।`,
    deepMeaning: `Theory ও Experiment-এর মধ্যে প্রায় 4.2 Standard Deviation বিচ্যুতি আছে — একটি নির্ধারণমূলক আবিষ্কারের 5-Sigma সীমানার কাছাকাছি। যদি নিশ্চিত হয়, এটি Standard Model-এর বাইরে Physics-এর প্রথম স্পষ্ট প্রমাণ হবে — সম্ভবত Supersymmetric কণা বা অতিরিক্ত মাত্রা। সমাধান Lattice QCD গণনার নির্ভুলতার উপর নির্ভর করে।`,
    whyItMatters: `Particle Physics-এর সবচেয়ে আলোচিত বিষয়গুলোর একটি। যদি নিশ্চিত হয়, এর জন্য Subatomic জগৎ সম্পর্কে আমাদের বোঝার একটি মৌলিক পুনর্লিখন প্রয়োজন হবে।`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton Mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Particle',
    description: 'সবচেয়ে ভারী Charged Lepton — Electron-এর চেয়ে 3477 গুণ ভারী।',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Tau Lepton হলো তৃতীয় ও সবচেয়ে ভারী Charged Lepton — Electron-এর চেয়ে 3477 গুণ ভারী ও Muon-এর চেয়ে 16.8 গুণ ভারী।`,
    simpleExample: `Tau এত ভারী (1.78 GeV) যে এটি Hadron-এ — Pion ও Kaon-এ — ক্ষয় হতে পারে, Muon-এর মতো নয়। এর অত্যন্ত স্বল্প Lifetime (~2.9 × 10⁻¹³ s) মানে ক্ষয় হওয়ার আগে এটি মাত্র ~87 μm যায়, পর্যবেক্ষণের জন্য Micron-scale নির্ভুলতা প্রয়োজন।`,
    deepMeaning: `Tau হলো তৃতীয় প্রজন্মের Charged Lepton। কেন ঠিক তিনটি প্রজন্মের Lepton আছে, এবং কেন এগুলোর Mass এত ব্যাপকভাবে ভিন্ন, এটি Standard Model-এর গভীরতম রহস্যগুলোর একটি। Mass Hierarchy (0.511 MeV → 105.7 MeV → 1776.9 MeV) এর কোনো তাত্ত্বিক ব্যাখ্যা নেই। Tau Neutrino 2000 সাল পর্যন্ত সরাসরি সনাক্ত হয়নি।`,
    whyItMatters: `তিনটি প্রজন্মের Lepton-এর অস্তিত্ব প্রকৃতির একটি গভীর রহস্য। Tau ও এর Neutrino Standard Model কে একটি সামঞ্জস্যপূর্ণ তত্ত্ব হিসেবে প্রতিষ্ঠায় গুরুত্বপূর্ণ ছিল।`
  },

  // ── PART 8: PHYSICO-CHEMICAL CONSTANTS ────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas Constant',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'Thermodynamic',
    description: 'R = NA × k — Thermodynamics ও Chemistry-এর কার্যকরী ধ্রুবক।',
    discoveredBy: 'Various (19th century)',
    formula: 'PV = nRT',
    whatItSays: `R হলো Molar স্তরে Boltzmann-এর Constant-কে Scaled করা। Ideal Gas Law PV = nRT, Boyle's Law, Charles's Law ও Avogadro's Law কে একটি সমীকরণে একত্রিত করে।`,
    simpleExample: `Gas-এ Sound-এর Speed: v = √(γRT/M)। বাতাসের জন্য (M = 0.029 kg/mol, γ = 1.4) 20°C-এ, v ≈ 343 m/s। এটি দেখায় যে Sound-এর Speed মৌলিকভাবে R ও Temperature দ্বারা নির্ধারিত।`,
    deepMeaning: `Ideal Gas-এর Molar Heat Capacity হলো R-এর সহজ গুণিতক: Monatomic-এর জন্য Cv = (3/2)R, Diatomic Gas-এর জন্য (5/2)R। Statistical Mechanics-এ, Ideal Gas-এর Entropy (Sackur-Tetrode Equation) R ধারণ করে। এটি Entropy of Mixing, Clausius-Clapeyron Equation, Osmotic Pressure-এর জন্য van't Hoff Equation এবং Electrode Potential-এর জন্য Nernst Equation-এ আসে।`,
    whyItMatters: `Thermodynamics-এর Universal Constant। প্রতিটি Gas Law, প্রতিটি Thermodynamic গণনা, প্রতিটি Atmospheric Model এবং প্রতিটি Chemical Reaction Energetic গণনা R ব্যবহার করে।`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann Constant',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamic',
    description: 'Blackbody দ্বারা বিকিরিত Power — P/A = σT⁴।',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `একটি নিখুঁত Blackbody প্রতি একক ক্ষেত্রফলে Electromagnetic Power বিকিরণ করে P/A = σT⁴। σ আরও মৌলিক ধ্রুবক থেকে পাওয়া যায়: σ = 2π⁵k⁴/(15h³c²)।`,
    simpleExample: `সূর্যের Surface Temperature ~5778 K এর Power Output: σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W দেয়। আপনার শরীর (T ≈ 310 K) σ × (310)⁴ × (1.7 m²) ≈ 520 W বিকিরণ করে — যার মধ্যে প্রায় অর্ধেক Metabolic Heat দ্বারা পূরণ হয়।`,
    deepMeaning: `T⁴ নির্ভরতা আসে সব Frequency-তে Planck Blackbody Spectrum Integrate করা থেকে। এর মানে Temperature দ্বিগুণ করলে বিকিরিত Power 2⁴ = 16 গুণ বাড়ে। Cosmic Microwave Background (CMB) — Big Bang-এর Relic Radiation — T = 2.725 K-এ একটি নিখুঁত Blackbody। পৃথিবীর Effective Temperature, Solar Radiation ও σT⁴ Emission-এর ভারসাম্যের মাধ্যমে নির্ধারিত।`,
    whyItMatters: `Stellar Luminosity, পৃথিবীর Energy Balance ও Climate, Thermal Camera, Optical Pyrometry ও মহাবিশ্বের Temperature কাঠামো নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'b',
    name: 'Wien Displacement Constant',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'Thermodynamic',
    description: 'Blackbody-এর Peak তরঙ্গদৈর্ঘ্যকে Temperature-এর সাথে সম্পর্কিত করে।',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien-এর Displacement Law, Blackbody Radiation-এর Peak তরঙ্গদৈর্ঘ্যকে Temperature-এর সাথে সম্পর্কিত করে: λ_max × T = b। বস্তু যত গরম, তার Peak তরঙ্গদৈর্ঘ্য তত ছোট (নীল)।`,
    simpleExample: `সূর্য (T = 5778 K) λ_max ≈ 502 nm-তে Peak — সবুজ আলো। মানুষের চোখ বিকশিত হয়েছে ঠিক এই Range-এ সবচেয়ে সংবেদনশীল হতে। মানবদেহ (T = 310 K) λ_max ≈ 9.4 μm-এ নির্গত করে — Mid-Infrared, এজন্যই Thermal Camera কাজ করে।`,
    deepMeaning: `Peak Frequency সংস্করণ f_max = b' × T, b' = 5.879 × 10¹⁰ Hz/K ব্যবহার করে। উল্লেখ্য যে Peak Frequency সহজভাবে c/λ_max-এর সাথে সামঞ্জস্যপূর্ণ নয় কারণ তরঙ্গদৈর্ঘ্য ও Frequency Distribution-এর আকার আলাদা। ঐতিহাসিকভাবে, Radiation Constant-এর অনুপাত h ও k স্বাধীনভাবে পরিমাপ করতে ব্যবহৃত হয়েছিল।`,
    whyItMatters: `Thermal Imaging, Stellar Temperature পরিমাপ, Climate Science ও Blackbody Radiation Physics-এর মূলগত।`
  },

  // ── PART 9: GRAVITATIONAL & ELECTROWEAK CONSTANTS ─────────────────────────

  {
    symbol: 'G',
    name: 'Gravitational Constant',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universal',
    description: 'সবচেয়ে দুর্বল Force — সবচেয়ে কম নির্ভুলভাবে জানা মৌলিক ধ্রুবক।',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton-এর Law: F = Gm₁m₂/r²। General Relativity-তে, G Einstein-এর Field Equation-এ আসে যা নিয়ন্ত্রণ করে কীভাবে Matter Spacetime বক্র করে।`,
    simpleExample: `1 metre দূরত্বে দুটি 1 kg Mass-এর মধ্যে Gravity: F = 6.674 × 10⁻¹¹ N — মোটামুটি একটি ব্যাকটেরিয়ার Weight। দুটি Proton-এর মধ্যে Electromagnetic Force 10³⁶ গুণ শক্তিশালী। এজন্যই Atomic স্কেলে Gravity অপ্রাসঙ্গিক।`,
    deepMeaning: `G হলো সবচেয়ে কম নির্ভুলভাবে জানা মৌলিক ধ্রুবক — মাত্র 5 Significant Figure পর্যন্ত জানা। এটি কারণ Gravity হলো সবচেয়ে দুর্বল Force: Lab-এ এটি পরিমাপ মানে Seismic Noise ও Residual Force-এর বিরুদ্ধে লড়াই। 8πG/c⁴ গুণক প্রতি Energy Unit-এ Spacetime বক্রতা পরিমাপ করে। Planck Length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m যেখানে Quantum Gravity প্রত্যাশিত — Proton-এর চেয়ে 10²⁰ গুণ ছোট।`,
    whyItMatters: `একটি নিক্ষিপ্ত বল থেকে Black Hole ও মহাবিশ্বের বড় স্কেলের কাঠামো পর্যন্ত সমস্ত Gravitational ঘটনা নিয়ন্ত্রণ করে। Gravity-এর Quantum তত্ত্বের অনুপস্থিতি Physics-এর গভীরতম অসমাধৃত সমস্যা।`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling Constant',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particle',
    description: 'Weak Nuclear Force-এর Coupling Strength — Beta Decay নিয়ন্ত্রণ করে।',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF হলো Fermi-এর Beta Decay-এর Four-Fermion Effective Theory-তে Weak Nuclear Force-এর Coupling Constant: n → p + e⁻ + ν̄e। Weak Cross-section, GF²-এর সমানুপাতিক।`,
    simpleExample: `Weak Interaction এত দুর্বল যে একটি Neutrino এক Light-year সীসা দিয়ে মাত্র 50% সম্ভাবনায় থামে। তবুও এটি সূর্যের Energy-এর জন্য অপরিহার্য — pp Chain একটি Weak Interaction দিয়ে শুরু হয়।`,
    deepMeaning: `e²-এর মতো নয়, GF-এর Energy⁻²-এর মাত্রা আছে, যা Fermi-এর তত্ত্বকে Non-renormalisable করে তোলে। সমাধান ছিল Electroweak Unification (Nobel 1979): Weak Force, Massive W ও Z Boson (~80–91 GeV) দ্বারা মধ্যস্থতাকৃত। কম Energy-তে, একটি W Boson-এর বিনিময় একটি Point Interaction-এর মতো দেখায়। বড় W Mass, Weak Interaction কে দমন করে, Beta Decay কে ধীর করে।`,
    whyItMatters: `সমস্ত Beta Decay, Neutrino মিথস্ক্রিয়া ও Electroweak Unification নিয়ন্ত্রণ করে। Weak Force সূর্যের pp Chain চালিত করে ও তারায় ভারী মৌলের Nuclear Synthesis-এর জন্য দায়ী।`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Weak Mixing Angle',
    value: '0.2229',
    unit: 'মাত্রাহীন',
    exact: '0.22290',
    category: 'Particle',
    description: 'Electromagnetic ও Weak Force-এর মধ্যে Mixing পরিমাপ করে।',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Weak Mixing Angle θW (Weinberg Angle) Electroweak Unification-এ Photon ও Z Boson-এর মধ্যে Mixing Parameterize করে। e = g sin θW = g' cos θW।`,
    simpleExample: `sin²θW ≈ 0.231 মান, Particle Collider (LHC) ও Atomic Parity Violation Experiment থেকে অসাধারণ নির্ভুলতায় পরিমাপ করা হয়েছে।`,
    deepMeaning: `Electroweak Unification-এ, Photon ও Z Boson, দুটি Underlying Gauge Boson (W⁰ ও B)-এর মিশ্রণ। Energy-এর সাথে sin²θW-এর Runnings Standard Model দ্বারা সুনির্দিষ্টভাবে পূর্বাভাস দেওয়া হয়েছে ও Electroweak Radiative Correction নিশ্চিত করতে পরিমাপ করা হয়েছে।`,
    whyItMatters: `Standard Model-এর একটি মৌলিক Parameter যা Electromagnetic ও Weak Nuclear Force-এর Properties সংযুক্ত করে।`
  },

  // ── PART 11: ADDITIONAL ATOMIC & NUCLEAR CONSTANTS ────────────────────────

  {
    symbol: 'κ',
    name: 'Quantum of Circulation',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomic',
    description: 'Electron-এর জন্য Circulation-এর মৌলিক একক — h/2me।',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `একটি Quantum Fluid (যেমন Superfluid Helium বা Superconductor)-এর Circulation, h/m-এর একক গুণিতকে Quantised। Superconductor-এর জন্য, প্রাসঙ্গিক কণা হলো Mass 2me-এর Cooper Pair।`,
    simpleExample: `Superfluid Helium-4-এ, Vortex h/m_He-এর গুণিতকে Circulation বহন করে। Rotating Superfluid Helium এই Quantised Vortex-এর একটি Lattice তৈরি করে — Type-II Superconductor-এ Abrikosov Vortex Lattice-এর সাদৃশ্যে।`,
    deepMeaning: `Circulation-এর Quantization হলো Quantum Mechanical Wavefunction-এর Single-Valuedness-এর সরাসরি পরিণতি। যদি একটি Superfluid ঘুরে, তাহলে Macroscopic Wavefunction-এর Phase যেকোনো Closed Loop-এর চারপাশে একই মানে ফিরে আসতে হবে। এটি Circulation কে Quantised হতে বাধ্য করে: Γ = n × h/m।`,
    whyItMatters: `Superfluid ও Superconductor-এর আচরণ ব্যাখ্যা করে। Circulation-এর Quantum Aharonov-Bohm Effect-এও আসে, Quantum Phase কে Magnetic Flux-এর সাথে সংযুক্ত করে।`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson Cross Section',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atomic',
    description: 'একটি আগত Photon-এ একটি Free Electron-এর কার্যকর ক্ষেত্রফল।',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `যখন Low-energy Photon (Photon Energy ≪ mec²) একটি Free Electron থেকে ছড়িয়ে পড়ে, মোট Scattering Cross-Section হলো σT = (8π/3) × re², যেখানে re হলো Classical Electron Radius।`,
    simpleExample: `Electron কে Incoming Photon-এ একটি "Target Area" σT উপস্থাপন করছে বলে ভাবুন। যদি আপনি Electron-এর একটি বাক্সে Photon ছোড়েন, তাহলে Scattering-এর আগে Mean Free Path হলো λ = 1/(nσT)।`,
    deepMeaning: `Thomson Cross Section হলো আরও সাধারণ Compton Scattering Formula-এর Elastic Scattering সীমা। যখন Photon Energy Eγ ≪ 0.511 MeV, Electron-এর Recoil নগণ্য ও Scattering সম্পূর্ণ Classical। Stellar Interior-এ, Radiation Pressure, Photon-Electron Thomson Scattering দ্বারা সংক্রামিত হয়। Eddington Luminosity — একটি তারার সর্বোচ্চ Luminosity যার বাইরে Radiation Pressure Gravity কে অতিক্রম করে — σT-এর উপর নির্ভর করে।`,
    whyItMatters: `Thomson Scattering ব্যাখ্যা করে কেন আকাশ নীল (কম Frequency-তে) ও কেন Solar Corona সূর্যগ্রহণের সময় দৃশ্যমান। Cosmic Microwave Background (CMB) তৈরি হয়েছিল যখন মহাবিশ্ব Electron-গুলো Proton-এর সাথে মিলিত হওয়ার মতো যথেষ্ট ঠান্ডা হয়েছিল, কারণ এর আগে মহাবিশ্ব Thomson Scattering-এর কারণে অস্বচ্ছ ছিল।`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Electron Charge-to-Mass Ratio',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atomic',
    description: 'একটি Electron Electromagnetic Force-এ কত দৃঢ়ভাবে সাড়া দেয় তা নির্ধারণ করে।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `এটি Electron-এর Charge ও Mass-এর অনুপাত। এটি নির্ধারণ করে একটি Electron Electromagnetic Force-এ কত দৃঢ়ভাবে সাড়া দেয়।`,
    simpleExample: `CRT (Cathode Ray Tube) Television-এ, Electric ও Magnetic Field দ্বারা Electron Beam-এর Deflection, e/me দ্বারা নিয়ন্ত্রিত। e/me-এর বড় মান মানে Electron, Ion-এর চেয়ে অনেক সহজে Deflect হয়।`,
    deepMeaning: `Thomson-এর বিখ্যাত Cathode Ray Experiment প্রমাণ করেছিল যে Cathode Ray হলো ~1800 গুণ বড় Ratio-সহ ঋণাত্মক Charged কণার স্ট্রিম, Hydrogen Ion-এর তুলনায়। Cyclotron Frequency ωc = eB/me সরাসরি e/me-এর সমানুপাতিক। এই Ratio Plasma Frequency ωp² = ne²/(meε₀)-তেও আসে, যা Ionosphere থেকে Radio Wave কীভাবে Reflect হয় তা নিয়ন্ত্রণ করে।`,
    whyItMatters: `Mass Spectrometry, Particle Accelerator ও Vacuum Electronics-এর মৌলগত। Fusion Plasma-তে Electron Cyclotron Resonance Heating নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'M(e)',
    name: 'Electron Molar Mass',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomic',
    description: 'এক Mole Electron-এর Mass — me × NA।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `এক Mole Electron-এর Mass অত্যন্ত ছোট — প্রায় 0.55 Milligram প্রতি Mole।`,
    simpleExample: `Electrochemistry-তে, Electrolysis-এর সময় Electrode-এ Mass পরিবর্তন গণনা করার সময়, Electron Molar Mass, Ion Mass-এর তুলনায় নগণ্য।`,
    deepMeaning: `উচ্চ-নির্ভুলতার Atomic Mass পরিমাপে, Binding Energy ও Electron Cloud-এর Mass হিসাব করতে হয়। একটি Atom-এর Atomic Mass হলো M(atom) = M(nucleus) + Z × M(e) − (Electron Binding Energy)/c²। 10 Significant Figure-এ পৌঁছাতে Penning Trap Mass Spectrometry-তে এই সংশোধন প্রয়োজন।`,
    whyItMatters: `Physics-এ সবচেয়ে নির্ভুল Mass তুলনার জন্য ও SI Unit সংজ্ঞার সামঞ্জস্য পরীক্ষার জন্য অপরিহার্য।`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton Mass Ratio',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'মাত্রাহীন',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atomic',
    description: 'Electron, Proton-এর চেয়ে 1836.15 গুণ হালকা।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Proton-এর তুলনায় Electron-এর Mass। এই অনুপাত প্রায় 1/1836।`,
    simpleExample: `যেহেতু me/mp ≪ 1, Electron Molecule-এ Nucleus-এর চেয়ে অনেক দ্রুত গতিশীল। এটি আমাদের স্থির Nuclear অবস্থানে Electronic Schrödinger Equation সমাধান করতে দেয় — Born-Oppenheimer Approximation।`,
    deepMeaning: `এই অনুপাত Chemical Energy Scale (~eV) কে Nuclear Energy Scale (~MeV) থেকে আলাদা করে। Stellar Physics-এও গুরুত্বপূর্ণ: Chandrasekhar Limit — একটি White Dwarf-এর সর্বোচ্চ Mass — সরাসরি (mp/me)-এর উপর নির্ভর করে। দূরবর্তী Quasar-গুলোতে Molecular Hydrogen Absorption Spectra-র মাধ্যমে মহাজাগতিক সময়ের পরিবর্তন পরীক্ষা করা হয়।`,
    whyItMatters: `প্রকৃতির সবচেয়ে পরিণামশালী মাত্রাহীন সংখ্যাগুলোর একটি। Atomic কাঠামো, Energy Scale-এর Hierarchy এবং তারার স্থিতিশীলতা নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Proton Charge-to-Mass Ratio',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atomic',
    description: 'Elementary Charge ও Proton Mass-এর অনুপাত — Electron-এর চেয়ে 1836 গুণ ছোট।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Elementary Charge ও Proton Mass-এর অনুপাত। এটি নির্ধারণ করে Proton Magnetic Field-এ কীভাবে সাড়া দেয়।`,
    simpleExample: `Magnetic Field-এ Proton Cyclotron Frequency Electron-এর চেয়ে 1836 গুণ কম। এজন্যই MRI Microwave Frequency-এর পরিবর্তে Radiofrequency Wave (MHz Range) ব্যবহার করে।`,
    deepMeaning: `Mass Spectrometry-তে, Ion-গুলো তাদের Charge-to-Mass Ratio দ্বারা পৃথক করা হয়। Proton-এর e/mp একটি মৌলিক Calibration Standard হিসেবে কাজ করে। Cyclotron Resonance Mass Spectrometry (Penning Trap) Atomic Mass অসাধারণ নির্ভুলতায় পরিমাপ করতে এই Ratio ব্যবহার করে।`,
    whyItMatters: `Medical Imaging (MRI), Mass Spectrometry ও LHC-র মতো উচ্চ-Energy Particle Accelerator Design-এর ভিত্তিগত।`
  },

  {
    symbol: 'M(p)',
    name: 'Proton Molar Mass',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'এক Mole Proton-এর Mass।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `এক Mole Proton-এর Mass প্রায় 1.007 g/mol।`,
    simpleExample: `এটি ঠিক 1 g/mol-এর চেয়ে সামান্য কম কারণ Atomic Mass Unit কে Carbon-12-এর Mass-এর 1/12 হিসেবে সংজ্ঞায়িত করা হয়েছে, যার মধ্যে Binding Energy ও Electron Mass অন্তর্ভুক্ত।`,
    deepMeaning: `Nuclear Physics-এ, Nuclear Reaction-এর Q-value — নির্গত বা শোষিত Energy — Molar Mass ব্যবহার করে Mass পার্থক্য থেকে গণনা করা হয়। Proton Molar Mass এই গণনায় একটি মৌলিক Reference।`,
    whyItMatters: `Nuclear Chemistry ও Astrophysics-এ Stoichiometric গণনার মৌলগত।`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutron-Electron Mass Ratio',
    value: '1838.68',
    unit: 'মাত্রাহীন',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'Neutron, Electron-এর চেয়ে 1838.68 গুণ ভারী।',
    discoveredBy: 'প্রাপ্ত',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `Neutron Mass ও Electron Mass-এর অনুপাত। এটি Proton-Electron Ratio-এর চেয়ে সামান্য বেশি।`,
    simpleExample: `Neutron, Proton-এর চেয়ে 2.531 Electron Mass দ্বারা ভারী। এই Mass পার্থক্য 1.293 MeV-এর সমকক্ষ — Neutron Beta Decay-এ নির্গত Energy।`,
    deepMeaning: `এই Ratio Proton-Electron Ratio-এর চেয়ে বেশি হওয়ার কারণে Free Neutron অস্থির। যদি Neutron, Proton-এর চেয়ে Electron Mass-এর বেশি হালকা হতো, তাহলে Hydrogen একটি স্থিতিশীল মৌল হিসেবে অস্তিত্ব পেত না। Penning Trap ব্যবহার করে এই Ratio অসাধারণ নির্ভুলতায় পরিমাপ করা হয়।`,
    whyItMatters: `মহাবিশ্বের Building Block-এর স্থিতিশীলতা নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton Mass Ratio',
    value: '1.00138',
    unit: 'মাত্রাহীন',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'Neutron, Proton-এর চেয়ে 0.138% ভারী।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Neutron, Proton-এর চেয়ে 0.138% ভগ্নাংশে ভারী।`,
    simpleExample: `এই ক্ষুদ্র Mass পার্থক্য (1.293 MeV/c²) নির্ধারণ করেছিল যে Big Bang-এর সময় প্রায় 25% Baryonic Matter Helium-4 হয়ে যাবে, বাকিটা Hydrogen থাকবে।`,
    deepMeaning: `প্রাথমিক মহাবিশ্বে, Neutron ও Proton-এর Equilibrium Ratio Boltzmann Factor অনুসরণ করেছিল। মহাবিশ্ব ঠান্ডা হওয়া ও Weak Interaction Freeze-out হওয়ার সাথে সাথে, n/p Ratio প্রায় 1/7-এ আটকে গিয়েছিল। যদি Mass পার্থক্য সামান্য ভিন্ন হতো, Stellar Evolution ও Chemistry পরিবর্তিত হতো।`,
    whyItMatters: `পর্যবেক্ষিত মহাজাগতিক Helium প্রাচুর্য ~25% হলো Big Bang Model-এর সর্বশ্রেষ্ঠ নিশ্চিতকরণগুলোর একটি, এই ধ্রুবকের কারণে।`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutron g-factor',
    value: '−3.826',
    unit: 'মাত্রাহীন',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'Electrically Neutral Neutron-এর অভ্যন্তরীণ Quark কাঠামো প্রকাশ করে।',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Neutron-এর g-factor হলো −3.826। শূন্য Charge-সহ একটি Structureless Dirac কণার জন্য এটি ঠিক 0 হওয়া উচিত।`,
    simpleExample: `Neutral Neutron-এর Non-zero Magnetic Moment ছিল Nuclear Physics-এর সবচেয়ে চমকপ্রদ ফলাফলগুলোর একটি, প্রমাণ করে যে Neutral কণারও অভ্যন্তরীণ অংশ থাকতে পারে।`,
    deepMeaning: `Neutron একটি Up Quark ও দুটি Down Quark ধারণ করে। তাদের Magnetic Moment ও Orbital গতি Net ঋণাত্মক Magnetic Moment উৎপন্ন করে। Non-relativistic Quark Model g ≈ −3.67 পূর্বাভাস দেয়; বিচ্যুতি Relativistic Correction ও Gluon Effect-এর কারণে। নির্ভুল পরিমাপ Hadron কাঠামোর QCD গণনা পরীক্ষা করে।`,
    whyItMatters: `Standard Model ও Quark কাঠামোর কঠোর পরীক্ষা। Neutron Electric Dipole Moment-এ সীমা স্থাপনেও ব্যবহৃত হয়।`
  },

  {
    symbol: 'M(n)',
    name: 'Neutron Molar Mass',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'এক Mole Neutron-এর Mass।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `এক Mole Neutron-এর ওজন প্রায় 1.00866 Gram।`,
    simpleExample: `যদিও Free Neutron 10 মিনিটে ক্ষয় হয়, Neutron Molar Mass "Binding Energy Curve" গণনার জন্য অপরিহার্য যা নির্ধারণ করে Nuclear Power Plant কতটুকু Energy উৎপাদন করতে পারে।`,
    deepMeaning: `Nucleon প্রতি Nuclear Binding Energy, Atomic Mass ব্যবহার করে গণনা করা হয়: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c²। Proton Mass-এর তুলনায় বড় Neutron Mass প্রতিটি Nuclear Binding Energy গণনাকে প্রভাবিত করে।`,
    whyItMatters: `Nuclear Engineering ও Nuclear Isotope গবেষণার ভিত্তি।`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Neutron Compton Wavelength',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'Nuclear Physics-এর স্বাভাবিক Length স্কেল — h/mnc।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `একটি Photon-এর তরঙ্গদৈর্ঘ্য যার Energy Neutron-এর Rest Mass Energy-এর সমান। এটি প্রায় 1.32 Femtometre।`,
    simpleExample: `এই তরঙ্গদৈর্ঘ্য Neutron-এর নিজের আকারের (~0.8 fm) সাথে ও Nuclear Force-এর পরিসরের (~1.4 fm) সাথে তুলনীয়।`,
    deepMeaning: `Nuclear Physics-এর Characteristic Distance Scale Nucleon ও Pion-এর Compton Wavelength দ্বারা নির্ধারিত। এই স্কেলের নিচে, Vacuum Polarisation-এর মতো Quantum Field Theory Effect গুরুত্বপূর্ণ হয়ে ওঠে। Protein কাঠামো অধ্যয়নে ব্যবহৃত Neutron Scattering Experiment-এ, Neutron তরঙ্গদৈর্ঘ্য Interatomic Spacing-এর সাথে মেলানো হয়।`,
    whyItMatters: `যে স্কেলের নিচে Neutron কে একটি সাধারণ Non-relativistic কণা হিসেবে গণ্য করা যায় না তা নির্ধারণ করে।`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton Wavelength',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Particle',
    description: 'একটি Photon-এর তরঙ্গদৈর্ঘ্য যার Energy Muon-এর Rest Mass-এর সমান।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Muon Compton Wavelength প্রায় 11.7 fm — Electron-এর চেয়ে Mass Ratio (206.77) দ্বারা ছোট।`,
    simpleExample: `Muonic Atom-এ, Muon Nucleus-এর অনেক কাছে Orbit করে যতটা Electron করত, কারণ Muon-এর Bohr Radius Mass-এর বিপরীতভাবে Scale করে।`,
    deepMeaning: `Muonic Hydrogen-এ Muon ~256 fm-এ Orbit করে — Proton-এর কাছে যথেষ্ট যাতে এর সীমিত আকার Energy Level-কে উল্লেখযোগ্যভাবে প্রভাবিত করে। এজন্যই Muonic Hydrogen Spectroscopy, Proton Charge Radius-এর সবচেয়ে নির্ভুল পরিমাপ প্রদান করে।`,
    whyItMatters: `"Proton Radius Puzzle"-এর দিকে নিয়ে গেছে, যা আধুনিক Precision Atomic Physics-এর একটি বড় ফোকাস।`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g-factor',
    value: '−2.00233',
    unit: 'মাত্রাহীন',
    exact: '−2.0023318418',
    category: 'Particle',
    description: 'অনবিষ্কৃত ভারী কণার জন্য গুরুত্বপূর্ণ Probe।',
    discoveredBy: 'পরীক্ষামূলক পরিমাপ / QED গণনা',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Electron-এর মতো, Muon-এর একটি Anomalous Magnetic Moment আছে ae = 0.001 165 920 59।`,
    simpleExample: `Fermilab-এ g-2 Experiment এটি পরিমাপ করে যাচাই করে যে Supersymmetry বা অন্যান্য তত্ত্বের "Virtual" ভারী কণা Muon-এর Magnetic Spin-কে প্রভাবিত করছে কিনা।`,
    deepMeaning: `বর্তমান পরীক্ষামূলক মান Standard Model পূর্বাভাস থেকে ~4.2 Standard Deviation দ্বারা দ্বিমত করে। সমাধান Hadronic Vacuum Polarisation-এর Lattice QCD গণনার নির্ভুলতার উপর নির্ভর করে।`,
    whyItMatters: `Standard Model ও Experiment-এর মধ্যে বর্তমানে জানা সবচেয়ে উল্লেখযোগ্য বিচ্যুতিগুলোর একটি।`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron Mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'ভারী Hydrogen-এর Nucleus — সরলতম Nuclear Bound State।',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Deuteron হলো Deuterium-এর Nucleus (একটি Proton ও একটি Neutron)। এর Binding Energy 2.224 MeV।`,
    simpleExample: `Binding Energy উল্লেখযোগ্যভাবে ছোট (Helium-4-এর সাথে তুলনা করুন: 28.3 MeV)। এই ভঙ্গুরতা Big Bang-এ "Deuterium Bottleneck" তৈরি করেছিল, ভারী মৌলের গঠন বিলম্বিত করেছিল।`,
    deepMeaning: `Deuteron হলো সরলতম Nuclear Bound State — Hydrogen Atom-এর সাদৃশ্যে। এর Non-zero Quadrupole Moment প্রমাণ করে Nuclear Force-এর একটি Tensor Component আছে Pion Exchange থেকে উদ্ভূত। সূর্যে Fusion-এর প্রথম ধাপ (p + p → d + e⁺ + νe) অসাধারণভাবে ধীর; সূর্যের দীর্ঘ জীবন এই Bottleneck-এর কারণে।`,
    whyItMatters: `Nuclear Force তত্ত্বের মৌলিক Test Bed। Deuterium Nuclear Reactor-এ Neutron Moderator ও Pharmaceutical গবেষণায় ব্যবহৃত হয়।`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron Magnetic Moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'সরলতম Nucleus-এর Magnetic Moment।',
    discoveredBy: 'Nuclear Physics / NMR পরীক্ষা',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Deuteron-এর Magnetic Moment হলো 0.857 Nuclear Magneton।`,
    simpleExample: `Spin সহজভাবে Aligned হলে, যোগফল হবে μp + μn = 0.880 μN। প্রকৃত মান 0.857 μN। এই পার্থক্য Wavefunction-এ D-Wave Admixture-এর Orbital Magnetic Moment দ্বারা নির্ভুলভাবে ব্যাখ্যা করা হয়।`,
    deepMeaning: `Calculated ও Measured Deuteron Magnetic Moment-এর মিল Nuclear Force Model যাচাই করে। Deuteron NMR Molecular Dynamics অধ্যয়নে ব্যবহৃত হয়।`,
    whyItMatters: `Nuclear কাঠামো Model ও Pion Exchange তত্ত্বের সুন্দর নিশ্চিতকরণ।`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g-factor',
    value: '0.8574',
    unit: 'মাত্রাহীন',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'Deuteron Magnetic Moment কে Nuclear Magneton-এর সাথে সম্পর্কিত করে।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Electron (g ≈ −2) বা Proton (g ≈ 5.586)-এর মতো নয়, Deuteron-এর g-factor 1-এর কম।`,
    simpleExample: `এই মান Nucleus-এর মধ্যে Proton ও Neutron Magnetic Moment-এর আংশিক বাতিলকরণ প্রতিফলিত করে।`,
    deepMeaning: `নির্ভুল পরিমাপ Meson Exchange Current ও Relativistic Effect-এর Correction সহ Neutron Magnetic Moment বের করার সুযোগ দেয়।`,
    whyItMatters: `0.1% স্তরে জটিল Nuclear Force Model যাচাই করতে ব্যবহৃত।`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion Mass',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'Helium-3-এর Nucleus — দুটি Proton ও একটি Neutron।',
    discoveredBy: 'Nuclear Physics পরীক্ষামূলক পরিমাপ',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Helion হলো Helium-3-এর Nucleus। এর Binding Energy 7.718 MeV।`,
    simpleExample: `Superfluid Helium-3 হলো Unconventional Superconductivity ও Topological Quantum State-এর একটি Model System।`,
    deepMeaning: `He-3 হলো Triton-এর Mirror Nucleus। তাদের মধ্যে ক্ষুদ্র Mass পার্থক্য Nuclear Force-এর Charge Symmetry পরীক্ষা করে। Helion g-factor হলো −4.255 μN — একক Neutron-এর প্রধান অবদান প্রতিফলিত করে।`,
    whyItMatters: `উচ্চ Cross-Section Neutron Detector ও Hyperpolarised Lung MRI-তে ব্যবহৃত।`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha Particle Mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'Helium-4 Nucleus — অসাধারণভাবে স্থিতিশীল, 28.3 MeV Binding Energy।',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `Alpha Particle হলো Helium-4 Nucleus। প্রতি Nucleon-এ এর Binding Energy 7.074 MeV — Binding Energy Curve-এর কাছাকাছি Peak।`,
    simpleExample: `Alpha Decay Half-life 20 Order of Magnitude জুড়ে বিস্তৃত (0.3 μs থেকে 14 বিলিয়ন বছর)। উভয়ই Gamow-এর Quantum Tunnelling তত্ত্ব দ্বারা ব্যাখ্যা করা হয়।`,
    deepMeaning: `Alpha Particle-এর ব্যতিক্রমী স্থিতিশীলতার কারণেই এটি Radioactive Decay-তে পছন্দের নির্গতকারী। এর Zero Spin ও Zero Magnetic Moment — সম্পূর্ণ Closed-shell Nucleus। Triple-Alpha Process (3α → ¹²C)-এ Carbon-12-এ 7.65 MeV-এ একটি Resonance প্রয়োজন (Hoyle State)। এই Resonance ছাড়া, কোনো Carbon থাকত না।`,
    whyItMatters: `বেশিরভাগ ভারী Nucleus Decay-এর Product। Triple-Alpha Process হলো মহাবিশ্বের সমস্ত Carbon-এর উৎস। Cancer-এর Targeted Alpha Radiotherapy-তে ব্যবহৃত।`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomic Mass Constant',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'Thermodynamic',
    description: 'Carbon-12 Mass-এর 1/12 — Atomic Mass-এর স্বাভাবিক একক।',
    discoveredBy: 'International Standard (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `Atomic Mass Unit (u, বা Dalton, Da) Carbon-12 Atom-এর Mass-এর 1/12 হিসেবে সংজ্ঞায়িত।`,
    simpleExample: `Carbon-12 = ঠিক 12 u। Hydrogen = 1.0078 u। 50 kDa-এর একটি Protein-এর Mass হলো 50,000 × 1.661 × 10⁻²⁷ kg।`,
    deepMeaning: `রূপান্তর 1 u = 931.494 MeV/c² Nuclear Physics-এ সবচেয়ে দরকারীগুলোর একটি। Milliatomic Mass Unit-এর Nuclear Mass পার্থক্য MeV-scale Energy নির্গত করে। Carbon-12-এর পছন্দ ছিল 1961 সালের Physics ও Chemistry সমাজের মধ্যে একটি আপোষ।`,
    whyItMatters: `Nuclear Physics, Mass Spectrometry ও সমস্ত Biochemistry-এর ভিত্তি যেখানে Protein Mass Dalton-এ প্রকাশ করা হয়।`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molar Mass Constant',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'Atomic Mass Unit কে Molar Mass-এর সাথে সম্পর্কিত করে।',
    discoveredBy: 'SI Redefinition (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu, Atomic Mass Unit কে Molar Mass-এর সাথে সম্পর্কিত করে: Mu = NA × mu ≈ 1 g/mol।`,
    simpleExample: `যেহেতু Mu ≈ 1 g/mol, Gram-এ একটি পদার্থের Molar Mass তার Relative Atomic Mass-এর সমান (যেমন জল ~18.015 g/mol)।`,
    deepMeaning: `ঐতিহাসিকভাবে ঠিক 1 g/mol। 2019-এর পরে, NA ও mu উভয়ই স্বাধীনভাবে সংজ্ঞায়িত, তাই Mu আর ঠিক 1 g/mol নয় — এটি প্রায় 10⁻⁹ দ্বারা বিচ্যুত। এটি ব্যবহারিক উদ্দেশ্যে নগণ্য কিন্তু স্মরণ করিয়ে দেয় যে নতুন SI মৌলিকভাবে আলাদা।`,
    whyItMatters: `Chemistry-এ Stoichiometric গণনার ভিত্তি। প্রতিটি Mole-to-Gram রূপান্তর এর উপর নির্ভর করে।`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molar Planck Constant',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamic',
    description: 'Molar স্তরে Planck Constant — NA × h।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `প্রতি একক Frequency-এ প্রতি Mole Photon-এর Energy।`,
    simpleExample: `Photochemistry-তে, এক "Einstein" (এক Mole Photon)-এর Energy হলো NAhf।`,
    deepMeaning: `Ideal Gas-এর পরম Entropy-এর জন্য Sackur-Tetrode Equation-এ আসে। এটি Molar স্কেলে Quantum Mechanical Partition Function কে Macroscopic Thermodynamic রাশির সাথে সংযুক্ত করে।`,
    whyItMatters: `Photochemistry ও Statistical Thermodynamics-এর মৌলগত।`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Molar Volume of Ideal Gas (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamic',
    description: 'STP-তে এক Mole Ideal Gas-এর দখলকৃত Volume।',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `0°C ও 101,325 Pa-তে, যেকোনো Ideal Gas-এর এক Mole 22.413... Litre দখল করে।`,
    simpleExample: `STP-তে এক Litre Hydrogen ও এক Litre Oxygen-এ ঠিক একই সংখ্যক Molecule (2.688 × 10²²) থাকে।`,
    deepMeaning: `Ideal Gas Law থেকে: V = nRT/P। এই "Molar Volume" Gas-এর পরিমাণ ও Volume-এর মধ্যে দ্রুত রূপান্তর সক্ষম করে। সমস্ত Ideal Gas-এর STP-তে একই Molar Volume আছে — এটি Avogadro-এর বৈপ্লবিক অন্তর্দৃষ্টি ছিল।`,
    whyItMatters: `Gas Stoichiometry-তে Chemistry-এর সবচেয়ে ব্যবহারিক উপযোগী সংখ্যাগুলোর একটি।`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt Constant',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamic',
    description: 'STP-তে Ideal Gas-এর প্রতি ঘন Metre-এ Molecule-এর সংখ্যা।',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `Sea Level-এ বাতাসের Molecule-এর সংখ্যা প্রায় 2.687 × 10²⁵ প্রতি ঘন Metre।`,
    simpleExample: `STP-তে একটি বায়ু Molecule-এর Mean Free Path প্রায় 66 nm। Collision Frequency ~10¹⁰ প্রতি সেকেন্ড।`,
    deepMeaning: `Loschmidt 1865 সালে Gas Viscosity ও Molecular Diameter ব্যবহার করে এটি আনুমানিক করেছিলেন। এটি ছিল একটি Macroscopic Volume-এ Molecule-এর প্রথম গুরুতর আনুমানিক হিসাব ও প্রথম সরাসরি প্রমাণ যে Atom-এর নির্দিষ্ট আকার আছে। Rayleigh Scattering (কেন আকাশ নীল) n₀-এর সমানুপাতিক।`,
    whyItMatters: `Atmospheric Physics ও Atomic তত্ত্বের ইতিহাসের মৌলগত।`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Molar Volume of Silicon',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamic',
    description: 'এর Crystal Lattice-এ এক Mole Silicon Atom-এর দখলকৃত Volume।',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `Diamond Cubic কাঠামোতে এক Mole Solid Silicon-এর Volume।`,
    simpleExample: `X-ray Diffraction দ্বারা Lattice Parameter 'a' ও Macroscopic Density 'ρ' পরিমাপ করে NA কে 2 Parts per Billion-এ নির্ণয় করুন।`,
    deepMeaning: `Silicon হলো X-ray Crystal Density Method-এর Reference Material। Avogadro Project 2019 সালে Kilogram পুনর্সংজ্ঞায়িত করতে অসাধারণ নিখুঁততার 1 kg Silicon Sphere ব্যবহার করেছিল। এটি X-ray Crystallography কে Macroscopic Mass Standard-এর সাথে সংযুক্ত করে।`,
    whyItMatters: `2019 সালে Kilogram-এর পুনর্সংজ্ঞার কেন্দ্রীয়।`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Molar Mass of Carbon-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'এক Mole Carbon-12 Atom-এর Mass।',
    discoveredBy: 'SI Redefinition (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `2019-এর আগে এটি ঠিক 12 g/mol ছিল। এখন, নতুন SI-তে, এর একটি ক্ষুদ্র পরিমিত অনিশ্চয়তা আছে।`,
    simpleExample: `ঠিক 12 g/mol থেকে বিচ্যুতি প্রায় 10 Parts per Billion — Chemistry-এর জন্য সম্পূর্ণ নগণ্য কিন্তু Metrology-এর জন্য গুরুত্বপূর্ণ।`,
    deepMeaning: `NA নির্ভুলভাবে সংজ্ঞায়িত করা ও Atomic Mass Unit-এর ঐতিহাসিক সংজ্ঞার মধ্যে অসামঞ্জস্য প্রতিফলিত করে। Base Unit এখন Material Artifact দ্বারা নয়, ধ্রুবক Fixed করে সংজ্ঞায়িত।`,
    whyItMatters: `মনে করিয়ে দেয় যে নতুন SI ধ্রুবক দ্বারা সংজ্ঞায়িত, Material Artifact দ্বারা নয়।`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'First Radiation Constant',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamic',
    description: 'Blackbody Radiation Intensity-এর সামগ্রিক স্কেল নির্ধারণ করে — 2πhc²।',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Planck Blackbody Radiation Law-এ Spectral Radiance-এর জন্য আসে।`,
    simpleExample: `সূর্য ~502 nm-এ (সবুজ) Peak করে। Solar Cell ঠিক এই Planck Spectrum-এর সাথে মিল রেখে c₁ ব্যবহার করে নির্ভুলভাবে গণনা করা।`,
    deepMeaning: `Planck Radiation Law 1900 সালে Quantum Mechanics শুরু করেছিল। Planck-এর Quantum Hypothesis সেই Exponential উৎপাদক প্রবর্তন করেছিল যা High-frequency Divergence (Ultraviolet Catastrophe) দমন করে।`,
    whyItMatters: `Astrophysics, Solar Energy ও Cosmology-এর মৌলগত।`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'First Radiation Constant for Spectral Radiance',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamic',
    description: 'c₁ কে π দিয়ে ভাগ — প্রতি একক Solid Angle-এ Radiance দেয়।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Hemispherical Spectral Irradiance-এর পরিবর্তে প্রতি একক Solid Angle-এ Spectral Radiance দেয়।`,
    simpleExample: `Telescope Sensitivity বা Camera Exposure-এর মতো Optical System Performance সঠিকভাবে গণনার জন্য অপরিহার্য।`,
    deepMeaning: `Integrated Hemisphere Emission ও একটি নির্দিষ্ট দিকে Radiance-এর মধ্যে পার্থক্য প্রতিফলিত করে। একটি Lambertian Emitter-এর জন্য, সম্পর্কটি π-এর গুণক জড়িত।`,
    whyItMatters: `Radiometry ও Satellite Remote Sensing-এ অপরিহার্য।`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Second Radiation Constant',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'Thermodynamic',
    description: 'Planck Function-এ তরঙ্গদৈর্ঘ্য ও Temperature সংযুক্ত করে — hc/k।',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Planck Function-এর Exponent-এ আসে। Quantum ও Classical Regime-এর মধ্যে Crossover নির্ধারণ করে।`,
    simpleExample: `Wien-এর Displacement Law (λ_max × T = b), c₂ থেকে প্রাপ্ত। Thermal Camera মানুষ সনাক্ত করে কারণ 310 K-এ শরীর Mid-Infrared-এ Peak করে।`,
    deepMeaning: `ঐতিহাসিকভাবে, c₁/c₂-এর অনুপাত Boltzmann-এর Constant পরিমাপ করতে ব্যবহৃত হয়েছিল। ঘরের Temperature-এ, Mid-Infrared Radiation-এর জন্য Quantum Correction গুরুত্বপূর্ণ হয়ে ওঠে।`,
    whyItMatters: `Climate Science, Thermal Imaging ও Stellar Physics-এর মৌলগত।`
  },

  {
    symbol: 'g',
    name: 'Standard Acceleration of Gravity',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (সংজ্ঞায়িত মান)',
    category: 'Universal',
    description: 'পৃথিবীর Surface-এ Gravitational Acceleration-এর Standard মান।',
    discoveredBy: 'International Bureau of Weights and Measures (1901)',
    formula: 'W = mg',
    whatItSays: `Gravitational Acceleration-এর একটি সংজ্ঞায়িত প্রচলিত Standard।`,
    simpleExample: `প্রকৃত Gravity Equator-এ ~9.780 m/s² থেকে Pole-এ ~9.832 m/s² পর্যন্ত পরিবর্তিত হয়। Standard মানটি 45° Latitude-এর পরিমাপের সাথে মিলে।`,
    deepMeaning: `Mass ও Force-এর মধ্যে রূপান্তর গুণক হিসেবে আসে (Kilogram-force)। Gravimeter, Tidal Deformation ও Groundwater পরিবর্তন সনাক্ত করতে Local g, 9 Significant Figure পর্যন্ত পরিমাপ করে। Equivalence Principle (General Relativity) বলে এটি Flat Spacetime-এ Acceleration থেকে অপ্রতিবেদ্য।`,
    whyItMatters: `Engineering, Atmospheric Pressure সংজ্ঞা ও নির্ভুল Weighing-এর Baseline।`
  },

  // ── PART 19: ATOMIC UNITS ──────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'a.u. of Length',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Atomic Unit-এ Bohr Radius।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `Atomic System-এ Length-এর একক। সমস্ত Bond Length, Bohr-এ প্রকাশ করা হয়।`,
    simpleExample: `সাধারণ Bond Length: H-H = 1.40 a₀, C-C = 2.92 a₀।`,
    deepMeaning: `Atomic Unit-এ ħ = me = e = 4πε₀ = 1। এটি Quantum Chemistry সমীকরণকে প্রচণ্ডভাবে সরল করে।`,
    whyItMatters: `Computational Chemistry-এ Standard একক।`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'a.u. of Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atomic',
    description: 'Atomic Unit-এ Electron Mass।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `Atomic System-এ Mass-এর একক।`,
    simpleExample: `Quantum Chemistry-তে, সমস্ত Mass, me-এর গুণিতক হিসেবে প্রকাশ করা হয়।`,
    deepMeaning: `সেই System-এর অংশ যা Schrödinger Equation সরল করতে মৌলিক ধ্রুবককে 1-এ সেট করে।`,
    whyItMatters: `সমস্ত Electronic Structure গণনার Base Mass।`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'a.u. of Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atomic',
    description: 'Atom-এ Electronic গতির স্বাভাবিক Timescale।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Hartree Energy Scale-এ Phase Evolution-এর এক Radian-এর সময়।`,
    simpleExample: `Hydrogen-এর Ground State-এ Electron-এর Orbital Period হলো 2π Atomic Time Unit ≈ 152 Attosecond।`,
    deepMeaning: `Attosecond Physics এই Timescale-এ Real-time-এ Electron Dynamics অধ্যয়ন করে। Nobel Prize 2023 Attosecond Pulse Technology-এর জন্য প্রদান করা হয়েছিল।`,
    whyItMatters: `Atom-এর মধ্যে Electron গতির সরাসরি পর্যবেক্ষণ সক্ষম করে।`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'a.u. of Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atomic',
    description: 'Atomic Unit-এ Hartree Energy।',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Atomic Physics-এ Energy-এর একক।`,
    simpleExample: `Hartree-তে Chemical Bond Energy: H₂ Bond = 0.174 Eh।`,
    deepMeaning: `সমস্ত Electronic Structure গণনার মৌলিক Energy Scale নির্ধারণ করে।`,
    whyItMatters: `DFT-র মতো Computational Code-এ Standard Energy একক।`
  },

  {
    symbol: 'e',
    name: 'a.u. of Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atomic',
    description: 'Atomic Unit-এ Elementary Charge।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `Atomic Unit-এ Proton-এর Charge +1, Electron-এর Charge −1।`,
    simpleExample: `Helium Nucleus-এর Charge +2 a.u.।`,
    deepMeaning: `মৌলিক Charge কে Unity-তে সেট করে Electromagnetic Interaction গণিত সরল করে।`,
    whyItMatters: `Charge Distribution-এ Molecule-এর Base একক।`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'a.u. of Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atomic',
    description: 'Hydrogen-এর Ground State-এ Electron-এর Velocity।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — Bohr Model-এ Electron-এর Velocity।`,
    simpleExample: `Gold (Z=79)-এ, 1s Electron-এর Velocity ~0.58c। এই উচ্চ গতি Relativistic সংকোচন ঘটায় যা Gold-এর বৈশিষ্ট্যগত হলুদ রঙের জন্য দায়ী।`,
    deepMeaning: `ভারী Atom-এর জন্য, c-এর কাছাকাছি Velocity, Relativistic Correction প্রয়োজন।`,
    whyItMatters: `Chemistry-এ Relativistic Effect কখন গুরুত্বপূর্ণ হয় তা নির্ধারণ করে।`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'a.u. of Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomic',
    description: 'Hydrogen-এ Momentum Uncertainty-এর স্বাভাবিক স্কেল।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. of Velocity) = ħ/a₀।`,
    simpleExample: `Uncertainty Principle অনুযায়ী, a₀-এর মধ্যে স্থানীয়করণ করা Electron-এর Momentum Uncertainty ঠিক এক Atomic Unit।`,
    deepMeaning: `Atom-এর Length Scale কে Orbiting Electron-এর Momentum-এর সাথে সরাসরি সংযুক্ত করে।`,
    whyItMatters: `Electron Diffraction ও Quantum Chemistry Scattering নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'a.u. of Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atomic',
    description: 'Bohr Radius-এ Electron ও Proton-এর মধ্যে Electrostatic Force।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²)। Atomic Scale-এ বিশাল (82 nN) কিন্তু মানুষের কাছে অবোধ্য।`,
    simpleExample: `Atomic Stability-এর মূল বিষয়: এই Force ও Quantum Pressure-এর ভারসাম্য।`,
    deepMeaning: `Atom গুলোকে একত্রে আটকে রাখা "আঠার" শক্তির স্কেল নির্ধারণ করে।`,
    whyItMatters: `Atomic Bonding ও Material শক্তি নিয়ন্ত্রণ করে।`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'a.u. of Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atomic',
    description: 'Hydrogen-এ Electron-এর অনুভূত অসাধারণ তীব্র Field।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Bohr Radius-এ Electric Field (514 GV/m)।`,
    simpleExample: `Atomic Field বায়ুর Breakdown Field-এর ~100,000 গুণ শক্তিশালী।`,
    deepMeaning: `~10¹⁴ W/cm²-এর উপরে Intensity-তে, Laser Field Atom থেকে Electron ছিনিয়ে নেওয়ার মতো যথেষ্ট শক্তিশালী, Attosecond Pulse উৎপন্ন করে।`,
    whyItMatters: `Strong-field Laser Physics ও Field Ionisation-এর Baseline।`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'a.u. of Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atomic',
    description: 'এক Atomic Unit-এর সাথে সামঞ্জস্যপূর্ণ Magnetic Field Strength।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — যেকোনো Laboratory Magnet (~45 T)-এর চেয়ে অনেক শক্তিশালী।`,
    simpleExample: `Neutron Star-এর Magnetic Field ~10⁸-10¹¹ Tesla পর্যন্ত পৌঁছায়, Atomic Unit ছাড়িয়ে।`,
    deepMeaning: `এই স্কেলে, Photon Propagation-এ QED Effect (Vacuum Birefringence) গুরুত্বপূর্ণ হয়ে ওঠে।`,
    whyItMatters: `White Dwarf ও Magnetar বোঝার জন্য গুরুত্বপূর্ণ।`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'a.u. of Permittivity',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atomic',
    description: 'Atomic Unit-এ স্কেলকৃত Vacuum Permittivity — 4πε₀।',
    discoveredBy: 'প্রাপ্ত',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `Atomic Unit-এ, Coulomb Force Law সহজভাবে হয় F = q₁q₂/r²।`,
    simpleExample: `Quantum Chemistry Code-এ সমস্ত Electrostatic গণিত সরল করে।`,
    deepMeaning: `Theoretical Physics-এ গণনা থেকে 4πε₀ উৎপাদক সরিয়ে দেওয়ার প্রাথমিক সরলীকরণ — Coulomb বলের সমীকরণকে F = q₁q₂/r² আকারে লেখা সম্ভব করে।`,
    whyItMatters: `Theoretical Physics-এ Standard Normalization।`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'a.u. of Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomic',
    description: 'Magnetic Field-এ Atom-এর Energy-এর দ্বিতীয়-ক্রম প্রতিক্রিয়া।',
    discoveredBy: 'প্রাপ্ত',
    formula: '1 a.u.',
    whatItSays: `NMR Chemical Shift ও Magnetic Force পরিমাপ দ্বারা পরিমাপ করা হয়।`,
    simpleExample: `MRI-scale Magnetic Field-এ Molecule কীভাবে সাড়া দেয় তা গণনা করতে ব্যবহৃত।`,
    deepMeaning: `Quantum স্তরে Molecular Magnetic Susceptibility অধ্যয়নের মৌলিক রাশি।`,
    whyItMatters: `NMR Spectroscopy ও Quantum Chemistry Simulation-এ ব্যবহৃত।`
  }
];
