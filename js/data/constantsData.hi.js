// =============================================================================
// constantsData.hi.js — Physical Constants Database (Hindi i18n)
// Language: Hindi (हिन्दी) | Script: Devanagari
// Source: constantsData.js (CODATA 2022) | Phyansy Reference Guide
//
// Translation Rules:
//   1. Physics terms (velocity, mass, charge, etc.) → kept in English
//   2. Scientist names (Planck, Einstein, Bohr, etc.) → kept in English
//   3. All numbers, units, formulas → kept as-is
//   4. Pure Hindi prose — no mixing of Hinglish
//   5. Field names identical to source for runtime key-matching
//   6. `name` field → translated to Hindi throughout (consistent)
//   7. `discoveredBy` → scientist names kept; role/context in Hindi where needed
// =============================================================================

export const CONSTANTS_HI = [

  // ── PART 1: UNIVERSAL / DEFINING CONSTANTS ────────────────────────────────

  {
    symbol: 'c',
    name: 'निर्वात में प्रकाश की गति',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (सटीक)',
    category: 'Universal',
    description: 'causality की मूलभूत गति सीमा — ब्रह्मांड की सर्वोच्च गति।',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `प्रकाश एक आदर्श निर्वात में ठीक 299,792,458 metre प्रति second की गति से चलता है। यह कोई अनुमानित मापी गई राशि नहीं है — 1983 से, metre की परिभाषा ही इस संख्या पर आधारित है। अतः c अब एक सटीक, नियत पूर्णांक है।`,
    simpleExample: `चन्द्रमा से प्रकाश आपकी आँख तक पहुँचने में लगभग 1.28 second लगते हैं। सूर्य से प्रकाश लगभग 8 minute 20 second में आता है। निकटतम तारा Proxima Centauri 4.24 light-years दूर है — अर्थात् उस दूरी को पार करने में प्रकाश को 4.24 वर्ष लगते हैं।`,
    deepMeaning: `c केवल "प्रकाश की गति" नहीं है। यह causality की मूलभूत गति सीमा है — वह अधिकतम दर जिस पर कोई भी information, energy, या कारण-प्रभाव सम्बन्ध ब्रह्मांड में फैल सकता है। Einstein के Special Relativity ने दर्शाया कि c प्रत्येक observer के लिए समान है, चाहे वे किसी भी गति से चल रहे हों। इससे Newtonian absolute time की अवधारणा ध्वस्त हो जाती है। दो observers जो एक-दूसरे के सापेक्ष गतिमान हों — वे length, time interval, और simultaneity पर मतभेद रखेंगे — परन्तु c का माप सदैव एकसमान होगा। E = mc² बताता है कि mass और energy एक ही वस्तु हैं, जिनके बीच c² का conversion factor है।`,
    whyItMatters: `c के बिना न Special Relativity है, न E = mc², न GPS correction (GPS satellites को Special और General Relativistic time dilation दोनों के लिए सुधार करना पड़ता है), न तारों की समझ, और न particle physics। यह आधुनिक physics की रीढ़ है।`
  },

  {
    symbol: 'h',
    name: 'Planck नियतांक',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (सटीक)',
    category: 'Universal',
    description: 'electromagnetic action का quantum — photons की energy को नियंत्रित करता है।',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `Energy असतत (discrete) पैकेटों में आती है जिन्हें quanta कहते हैं। एक photon की energy E = hf होती है, जहाँ f विकिरण की frequency है। h वह proportionality constant है जो frequency (एक wave गुण) को energy (एक particle गुण) से जोड़ता है।`,
    simpleExample: `दृश्य लाल प्रकाश की frequency लगभग 4.3 × 10¹⁴ Hz है। एक photon की energy: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV। यह सूक्ष्म energy आपकी retina में एक rhodopsin molecule को सक्रिय करने के लिए पर्याप्त है — दृष्टि की शुरुआत यहीं होती है।`,
    deepMeaning: `Planck से पहले, classical physics यह भविष्यवाणी करती थी कि एक गर्म वस्तु उच्च frequencies पर अनन्त energy विकिरित करेगी — जिसे "ultraviolet catastrophe" कहते हैं। 1900 में Max Planck ने यह मानकर इसे सुलझाया कि energy सतत नहीं बल्कि quantised है। Einstein ने इसका उपयोग photoelectric effect को समझाने के लिए किया। h "action का quantum" भी है — इसकी units energy × time हैं। इसका संक्षिप्त रूप ħ = h/2π, commutator [x̂, p̂] = iħ में प्रकट होता है — जो quantum mechanics का गणितीय हृदय है — और Heisenberg Uncertainty Principle में: Δx · Δp ≥ ħ/2।`,
    whyItMatters: `h quantum जगत और classical जगत के बीच की सीमा है। जब किसी system का action h से बहुत बड़ा हो, तो classical mechanics काम करती है। h के बिना atoms नष्ट हो जाते, chemistry अस्तित्वहीन हो जाती, और ब्रह्मांड वैसा न रहता जैसा हम जानते हैं।`
  },

  {
    symbol: 'ħ',
    name: 'न्यूनीकृत Planck नियतांक',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (सटीक)',
    category: 'Universal',
    description: 'h/2π — quantum mechanics में angular momentum की प्राकृतिक इकाई।',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (जिसे "h-bar" कहते हैं) केवल h को 2π से भाग देने पर मिलता है। यह तब प्रकट होता है जब ordinary frequency f के स्थान पर angular frequency ω (radians per second में) का उपयोग किया जाता है, क्योंकि ω = 2πf।`,
    simpleExample: `एक electron की spin ħ/2 है। एक photon की spin ħ है। Orbital angular momentum सदैव ħ के पूर्णांक गुणज में होता है — अतः ħ घूर्णन का मूल परमाणु है।`,
    deepMeaning: `Quantum mechanics में ħ महज एक सुविधाजनक संक्षेप नहीं है। यह angular momentum का मूलभूत quantum है। Quantum field theory में ħ quantum fluctuations की परिमाण को नियंत्रित करता है। ħ → 0 करने पर classical field theory पुनः प्राप्त होती है। Quantum mechanics की सम्पूर्ण संरचना — commutation relations, path integrals, uncertainty principles — ħ द्वारा संचालित है।`,
    whyItMatters: `Particle physicists द्वारा उपयोग की जाने वाली natural units में ħ = c = 1 रखा जाता है, जिससे equations अत्यन्त सरल हो जाती हैं और सिद्धान्तों की गहरी ज्यामितीय संरचना उजागर होती है।`
  },

  {
    symbol: 'e',
    name: 'मूल आवेश',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (सटीक)',
    category: 'Electromagnetic',
    description: 'सबसे छोटा स्वतन्त्र रूप से अस्तित्ववान electric charge — charge quantised है।',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `यह एक proton (धनात्मक) या एक electron (ऋणात्मक) पर electric charge का परिमाण है। प्रकृति में सभी observable electric charge, e के पूर्णांक गुणज हैं। Charge quantised है।`,
    simpleExample: `1 ampere की current का अर्थ है कि 1 coulomb charge प्रति second एक बिन्दु से गुज़रती है। चूँकि प्रत्येक electron 1.602 × 10⁻¹⁹ C वहन करता है, 1 A की current में लगभग 6.24 × 10¹⁸ electrons प्रति second प्रवाहित होते हैं।`,
    deepMeaning: `Charge के quantisation को Robert Millikan ने अपने प्रसिद्ध oil-drop प्रयोग में प्रयोगात्मक रूप से स्थापित किया। उन्होंने पाया कि सभी charges एक मूलभूत इकाई e के पूर्णांक गुणज हैं। Fine-structure constant α ≈ 1/137 electromagnetic force की तीव्रता का आयामरहित माप है। Quarks पर e/3 और 2e/3 के fractional charges होते हैं, किन्तु वे hadrons के भीतर स्थायी रूप से बंधे रहते हैं और अलग-थलग अवस्था में कभी नहीं देखे जाते।`,
    whyItMatters: `e सभी atomic और molecular अन्योन्यक्रियाओं की scale निर्धारित करता है। Chemistry, biology, electronics, और materials science मूलतः e के मान पर निर्भर हैं। यदि e थोड़ा भी भिन्न होता, तो जैसा हम जानते हैं वैसा जीवन संभव न होता।`
  },

  {
    symbol: 'k',
    name: 'Boltzmann नियतांक',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (सटीक)',
    category: 'Thermodynamic',
    description: 'temperature और kinetic energy के बीच सेतु — S = k ln(Ω)।',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (जिसे kB भी लिखते हैं) सूक्ष्म कणों की दुनिया और temperature की स्थूल दुनिया के बीच सेतु है। यह temperature — एक ensemble का सांख्यिकीय गुण — को प्रति कण energy में बदलता है। प्रत्येक degree of freedom औसतन (1/2)kT kinetic energy का योगदान करता है।`,
    simpleExample: `कमरे के तापमान (T = 293 K) पर: kT ≈ 0.0253 eV। यह कमरे के तापमान पर thermal energy की characteristic scale है। Chemical bond energies कुछ eV होती हैं, अतः thermal energy बहुत छोटी है — यही कारण है कि अधिकांश chemical bonds स्थिर रहते हैं।`,
    deepMeaning: `Temperature कोई मूलभूत राशि नहीं है — यह कणों की औसत kinetic energy का माप है। S = k ln(Ω) entropy को information और probability के पदों में परिभाषित करता है, जो thermodynamics को microscopic physics से जोड़ता है। Boltzmann distribution किसी system के energy E की अवस्था में होने की probability देता है: P(E) ∝ e^(−E/kT)। यह exponential factor — Boltzmann factor — chemical reaction rates से लेकर वायुमण्डल में molecules के वितरण तक सब कुछ नियंत्रित करता है।`,
    whyItMatters: `k thermodynamics और statistical mechanics की नींव है। इसके बिना हम microscopic physics को temperature, pressure और entropy जैसे macroscopic observables से नहीं जोड़ सकते। 2019 से k एक सटीक परिभाषित constant है, और kelvin इसी के माध्यम से परिभाषित होता है।`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro नियतांक',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (सटीक)',
    category: 'Thermodynamic',
    description: 'एक mole में entities की संख्या — atomic और मानवीय scale के बीच सेतु।',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `किसी भी पदार्थ के एक mole में ठीक 6.022 140 76 × 10²³ elementary entities (atoms, molecules, ions आदि) होती हैं। यह संख्या atomic scale और मानवीय scale के बीच सेतु है।`,
    simpleExample: `12 gram carbon-12 में ठीक एक mole carbon atoms होते हैं। यह एक लगभग अकल्पनीय बड़ी संख्या है: यदि आपके पास एक mole रेत के कण होते, तो वे पृथ्वी की सतह को कई kilometre की गहराई तक ढँक देते।`,
    deepMeaning: `NA atomic mass unit को grams से जोड़ता है: 1 u = 1 gram / NA = 1.660 539 × 10⁻²⁷ kg। Molar gas constant R, Boltzmann constant से इस प्रकार सम्बन्धित है: R = NA × k = 8.314 J mol⁻¹ K⁻¹। Faraday constant F = NAe = 96,485 C/mol एक mole electrons का charge है। ऐतिहासिक रूप से NA का मापन 19वीं और 20वीं शताब्दी की एक केन्द्रीय चुनौती थी। Jean Perrin के 1908 में Brownian motion के मापन ने atoms के अस्तित्व को सिद्ध किया।`,
    whyItMatters: `NA chemistry को मात्रात्मक बनाता है। यह chemists को तौल कर atoms गिनने की अनुमति देता है। प्रत्येक stoichiometric गणना, pharmaceutical dosage calculation, और materials science गणना NA पर निर्भर करती है।`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'दीप्तिमान दक्षता',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (सटीक)',
    category: 'Universal',
    description: 'candela को परिभाषित करता है — एकमात्र SI constant जो मानव biology से जुड़ा है।',
    discoveredBy: 'अन्तर्राष्ट्रीय परिभाषा (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `540 × 10¹² Hz (हरा प्रकाश, wavelength ≈ 555 nm) — मानव नेत्र की दिन के प्रकाश में peak sensitivity — पर 1 watt radiant power से 683 lumens की perceived brightness उत्पन्न होती है।`,
    simpleExample: `1 watt शुद्ध हरे प्रकाश का उत्सर्जन करने वाला स्रोत ठीक 683 lumens की दृश्य चमक देता है। किसी अन्य रंग के लिए नेत्र कम संवेदनशील होने के कारण प्रति watt lumens कम होते हैं।`,
    deepMeaning: `यह SI प्रणाली का एकमात्र constant है जो मानव biology — विशेष रूप से photopic (दिन के प्रकाश में) मानव नेत्र की spectral sensitivity — पर निर्भर करता है। 2019 से candela को Kcd = 683 lm/W नियत करके परिभाषित किया गया है।`,
    whyItMatters: `Photometry, lighting engineering, और सभी optical system design के लिए मूलभूत। प्रत्येक light bulb की lumen specification इसी constant पर आधारित है।`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium अतिसूक्ष्म संरचना आवृत्ति',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (सटीक)',
    category: 'Universal',
    description: 'second को परिभाषित करता है — आधुनिक समयमापन की धड़कन।',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `Caesium-133 atom की ground state के दो hyperfine levels हैं — electron के magnetic moment और nuclear magnetic moment की अन्योन्यक्रिया से विभाजित। जब atom इन दो levels के बीच transition करता है, तो यह ठीक 9,192,631,770 Hz पर विकिरण उत्सर्जित या अवशोषित करता है।`,
    simpleExample: `1967 से, एक second को इस विकिरण के ठीक 9,192,631,770 oscillation periods के रूप में परिभाषित किया गया है। Caesium atomic clocks अब तक के सबसे सटीक timekeeping उपकरण हैं, जो 30 करोड़ वर्षों में एक second से भी कम की त्रुटि देते हैं।`,
    deepMeaning: `Hyperfine splitting quantum electrodynamics से उत्पन्न होती है — electron के magnetic dipole moment और nuclear spin द्वारा उत्पन्न magnetic field के बीच अन्योन्यक्रिया से। GPS, internet (जिसे synchronised clocks की आवश्यकता है), financial systems, और आधुनिक telecommunications प्रत्यक्षतः caesium atomic clock standards पर निर्भर हैं।`,
    whyItMatters: `सम्पूर्ण विज्ञान का सबसे सटीक मापन। आधुनिक सभ्यता — GPS, internet synchronisation, financial trading, 5G networks — सभी इस constant पर निर्भर हैं।`
  },

  // ── PART 2: ELECTROMAGNETIC CONSTANTS ────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'निर्वात विद्युत पारगम्यता',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'Electromagnetic',
    description: 'निर्वात में electric fields कितनी सहजता से प्रवेश कर सकती हैं।',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-naught) मापता है कि एक electric field निर्वात में कितनी आसानी से प्रवेश कर सकती है। यह Coulomb के नियम में प्रकट होता है: F = (1/4πε₀) × (q₁q₂/r²)। ε₀ जितना बड़ा होगा, दिए गए charges और दूरी पर electrostatic force उतनी कमज़ोर होगी।`,
    simpleExample: `जल की relative permittivity εr ≈ 80 है, अर्थात् जल निर्वात की तुलना में charges के बीच electrostatic forces को 80 गुना कम कर देता है — यही कारण है कि जल ionic compounds के लिए इतना उत्कृष्ट विलायक है।`,
    deepMeaning: `ε₀ स्वतन्त्र रूप से परिभाषित नहीं है — यह c और μ₀ के परिभाषित मानों से निकाला जाता है: ε₀ = 1/(μ₀c²)। यह Maxwell के चारों समीकरणों में प्रकट होता है। Gauss के नियम में: ∮ E · dA = Q_enc/ε₀। यह electric field में stored electromagnetic energy density का scale भी निर्धारित करता है: u_E = (1/2)ε₀E²।`,
    whyItMatters: `Maxwell के सभी चार समीकरणों में उपस्थित। ε₀ के बिना न quantitative electrostatics है, न capacitor design, और न dielectrics की समझ।`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'निर्वात चुम्बकीय पारगम्यता',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'Electromagnetic',
    description: 'निर्वात में magnetic fields कितनी सहजता से प्रवेश कर सकती हैं।',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-naught) मापता है कि एक magnetic field निर्वात में कितनी आसानी से प्रवेश करती है। यह Biot-Savart law और Ampère के नियम में प्रकट होता है। दूरी d पर, I₁ और I₂ current वाले दो parallel wires के बीच प्रति unit length बल: F/L = (μ₀/2π) × (I₁I₂/d)।`,
    simpleExample: `लोहे की relative permeability μr ~10,000 तक होती है — लोहा निर्वात की तुलना में magnetic fields को बहुत अधिक संकेन्द्रित करता है। इसीलिए transformer cores लोहे के बनाए जाते हैं।`,
    deepMeaning: `2019 के SI redefinition से पहले, μ₀ ठीक 4π × 10⁻⁷ N/A² था। अब यह एक मापी गई राशि है। μ₀ Maxwell के correction सहित Ampère के नियम में प्रकट होता है: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt)। दूसरा पद — Maxwell का displacement current — ने निर्वात में electromagnetic waves को सम्भव बनाया और यह भविष्यवाणी की कि प्रकाश एक electromagnetic wave है।`,
    whyItMatters: `μ₀ के बिना न magnetic fields हैं, न electromagnetic induction, न electric motors, न transformers, और न radio waves।`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'निर्वात की अभिलाक्षणिक प्रतिबाधा',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'Electromagnetic',
    description: 'निर्वात में electromagnetic wave में electric और magnetic field का अनुपात।',
    discoveredBy: 'Maxwell के equations से व्युत्पन्न',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `जब एक electromagnetic wave निर्वात में फैलती है, तो electric field amplitude और magnetic field amplitude का अनुपात: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω होता है।`,
    simpleExample: `एक antenna तब कुशलतापूर्वक radiate करता है जब उसकी impedance 377 Ω से matched हो। प्रति unit area radiated power (Poynting vector): S = E²/Z₀। इसका उपयोग dipole antennas से satellite dishes तक सभी की design में होता है।`,
    deepMeaning: `Z₀ free space की impedance है — यह बताता है कि एक propagating electromagnetic wave में प्रति unit magnetic field कितना electric field मिलता है। Sunlight: पृथ्वी पर electric field amplitude = √(1361 × Z₀) ≈ 716 V/m।`,
    whyItMatters: `Antenna design, radar cross-sections, और सभी wireless communication link budgets के लिए आवश्यक।`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson नियतांक',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'Electromagnetic',
    description: 'superconducting Josephson junctions में voltage को frequency से जोड़ता है।',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson constant, AC Josephson effect में voltage को frequency से जोड़ता है। जब एक Josephson junction (दो superconductors के बीच पतला insulating barrier) पर DC voltage V लगाया जाता है, तो f = 2eV/h frequency पर alternating current उत्पन्न होता है।`,
    simpleExample: `एक Josephson junction पर 1 millivolt का voltage ~483.6 GHz पर AC oscillation उत्पन्न करता है — microwave range में। इसका उपयोग 10¹⁰ में 1 भाग की सटीकता वाले voltage standards के लिए होता है।`,
    deepMeaning: `2 का factor इसलिए है क्योंकि superconductivity में Cooper pairs — charge 2e वाले electron के जोड़े — शामिल होते हैं। AC Josephson effect यह दर्शाता है कि quantum mechanics superconductors में macroscopic scales पर भी कार्य करती है।`,
    whyItMatters: `विश्वभर में primary voltage standard। Quantum metrology और superconducting quantum computing के लिए मूलभूत।`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing नियतांक',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'Electromagnetic',
    description: 'electrical resistance का quantum — quantum Hall effect से h/e²।',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² resistance का quantum है। Quantum Hall effect में: जब एक 2D electron gas को low temperature पर strong perpendicular magnetic field में रखा जाता है, तो Hall resistance RK के exact fractions में quantised हो जाता है: RH = RK/n।`,
    simpleExample: `यह quantisation इतनी सटीक है कि RK primary resistance standard के रूप में उपयोग किया जाता है। ~1 K पर ~10 Tesla field में silicon chips RK/2 = 12,906 Ω को एक अरब में 1 भाग से बेहतर सटीकता से reproduce करती हैं।`,
    deepMeaning: `यह quantisation topological मूल का है — यह material, sample geometry, या किसी भी adjustable parameter पर निर्भर नहीं करती। Fractional quantum Hall effect (1982) में ν = 5/2 की exotic states संभावित रूप से topological quantum computing के लिए उपयोगी हैं।`,
    whyItMatters: `विश्वभर में primary resistance standard। Integer और fractional quantum Hall effects आधुनिक physics की सबसे गहरी खोजों में से हैं।`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'चुम्बकीय फ्लक्स क्वान्टम',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'Electromagnetic',
    description: 'superconducting loops में magnetic flux का quantum — h/(2e)।',
    discoveredBy: 'London & Onsager (सैद्धान्तिक) · Doll & Näbauer (1961, प्रयोगात्मक)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `एक superconducting loop से गुज़रने वाला magnetic flux Φ₀ के पूर्णांक गुणजों में quantised होता है। एक superconducting ring केवल h/(2e) के integer multiples में magnetic flux को trap कर सकती है।`,
    simpleExample: `एक SQUID (Superconducting Quantum Interference Device) 10⁻⁶ Φ₀ जितने छोटे magnetic flux परिवर्तन को detect कर सकती है — यह ~10⁻¹⁸ Tesla के magnetic field change के बराबर है। इसका उपयोग brain imaging (MEG) में होता है।`,
    deepMeaning: `Magnetic flux का quantisation quantum mechanics की एक प्रत्यक्ष macroscopic अभिव्यक्ति है। Superconducting order parameter (macroscopic quantum wavefunction) एक loop के चारों ओर single-valued होना चाहिए, जो enclosed flux को quantised करने पर विवश करता है।`,
    whyItMatters: `SQUID technology, magnetoencephalography, और superconducting quantum computing की नींव।`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'चालकता क्वान्टम',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'Electromagnetic',
    description: 'electrical conductance की मूलभूत इकाई — 2e²/h।',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `जब electrons एक perfect, single-channel quantum conductor (जैसे single atom contact या quantum point contact) से प्रवाहित होते हैं, तो conductance प्रति channel ठीक G₀ = 2e²/h होती है। Resistance 1/G₀ = h/(2e²) ≈ 12,906 Ω है।`,
    simpleExample: `Single atom wide खींचा गया एक gold nanowire की conductance लगभग G₀ होती है। यह प्रयोगात्मक रूप से बड़ी सटीकता से मापा गया है। दो-atom wire की conductance ~2G₀ होती है।`,
    deepMeaning: `Classical resistance sample geometry, material, और impurities पर निर्भर करती है। परन्तु quantum level पर, एक perfect conductor में भी resistance होती है — क्योंकि conductor और उसके leads के बीच propagating modes की quantum mechanical matching होती है। यह Landauer formula है: G = G₀ × Σ T।`,
    whyItMatters: `Mesoscopic physics और nanoelectronics की नींव। Molecular junctions, carbon nanotubes, और quantum dots से electron transport को नियंत्रित करती है।`
  },

  {
    symbol: 'F',
    name: 'Faraday नियतांक',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'Electromagnetic',
    description: 'एक mole electrons का charge — NA × e।',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday constant एक mole elementary charges — एक mole electrons या एक mole protons — का charge है। Electrochemistry में, यह नियंत्रित करता है कि एक mole monovalent ion को deposit या dissolve करने के लिए कितना charge चाहिए।`,
    simpleExample: `CuSO₄ solution से 1 mole copper (63.5 g) का electroplating करने के लिए 2F = 192,970 C charge चाहिए (copper द्विसंयोजी है: Cu²⁺ + 2e⁻ → Cu)।`,
    deepMeaning: `Faraday के electrolysis के नियम (1833-1834) बताते हैं कि electrode पर deposited पदार्थ का mass, गुज़रे charge के समानुपाती है: m = (M/zF) × Q। Faraday ने electrons या atoms के बारे में जाने बिना यह empirically निकाला — एक असाधारण उपलब्धि।`,
    whyItMatters: `सम्पूर्ण electrochemistry की नींव। प्रत्येक lithium-ion battery, electroplating process, chlorine plant, और electrolytic metal refining इस constant पर आधारित है।`
  },

  // ── PART 3: ATOMIC & NUCLEAR CONSTANTS ───────────────────────────────────

  {
    symbol: 'α',
    name: 'सूक्ष्म संरचना नियतांक',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'dimensionless',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atomic',
    description: 'electromagnetic force का dimensionless coupling constant।',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α electromagnetic अन्योन्यक्रिया का dimensionless coupling constant है। यह charged particles के बीच electromagnetic force की तीव्रता मापता है — विशेष रूप से, एक charged particle द्वारा photon उत्सर्जित या अवशोषित करने की probability amplitude।`,
    simpleExample: `Quantum electrodynamics में, एक electron द्वारा एक photon उत्सर्जित करने की probability α के समानुपाती है। दो-photon processes α² के समानुपाती हैं। चूँकि α ≈ 1/137, प्रत्येक अतिरिक्त photon vertex probability को ~1/137 से दबाता है।`,
    deepMeaning: `α physics का सबसे रहस्यमय नम्बरों में से एक है। यह पूर्णतः dimensionless है — इसकी कोई unit नहीं है और किसी भी unit system में एकसमान है। Richard Feynman ने α को "physics के सबसे बड़े रहस्यों में से एक" कहा। QED में α वास्तव में constant नहीं है — यह vacuum polarisation के कारण energy scale के साथ "run" करता है: निम्न energies पर α ≈ 1/137; Z boson mass पर α ≈ 1/128।`,
    whyItMatters: `α सम्पूर्ण atomic physics, chemistry, और molecular biology को नियंत्रित करता है। Atoms का आकार, chemical bonds की तीव्रता, सभी elements के absorption और emission spectra — सब α द्वारा नियन्त्रित हैं। यह संभवतः physics का सबसे महत्त्वपूर्ण dimensionless नम्बर है।`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg नियतांक',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atomic',
    description: 'hydrogen की सभी spectral lines की wavelengths निर्धारित करता है।',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg constant hydrogen की spectral lines के wavenumbers (inverse wavelengths) देता है: 1/λ = R∞ × (1/n₁² − 1/n₂²), जहाँ n₁ और n₂ धनात्मक integers हैं और n₂ > n₁।`,
    simpleExample: `Lyman series की पहली line (n₂ = 2): 1/λ = R∞ × 3/4। λ = 121.6 nm (ultraviolet — Lyman-alpha line)। यह astrophysics की सबसे महत्त्वपूर्ण spectral line है — पूरे ब्रह्मांड में hydrogen को detect करने और redshift से space के विस्तार को मापने के लिए उपयोग होती है।`,
    deepMeaning: `R∞ सैद्धान्तिक रूप से अधिक मूलभूत constants से निकाला गया है: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h)। यह formula — Bohr model से व्युत्पन्न और quantum mechanics द्वारा परिष्कृत — hydrogen के spectrum को electron mass, elementary charge, और अन्य fundamental constants से जोड़ता है। Hydrogen की binding energy: En = −13.6 eV/n²।`,
    whyItMatters: `वह प्रारम्भिक बिन्दु जिसने Bohr को quantum atom तक पहुँचाया। सबसे सटीक रूप से मापा गया atomic constant, जो कुछ parts per trillion पर QED की जाँच करता है।`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr त्रिज्या',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'atoms का प्राकृतिक size scale — hydrogen में electron-proton की सर्वाधिक सम्भावित दूरी।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ ground state (n = 1) में hydrogen atom में electron और proton के बीच सर्वाधिक सम्भावित दूरी है। यह atoms की characteristic size scale निर्धारित करती है: a₀ = ħ/(mecα)।`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom)। यह hydrogen atom का सामान्य आकार है। अधिकांश atoms की radii a₀ के कुछ गुणजों के भीतर होती हैं। Diamond में C-C bond length ~2.9a₀ है। DNA helix का diameter ~40Å ≈ 75a₀ है।`,
    deepMeaning: `Bohr radius electron की kinetic energy (quantum mechanical, जो electron को फैलाती है — uncertainty principle उसे nucleus में collapse होने से रोकती है) और Coulomb potential energy (जो उसे nucleus की ओर खींचती है) के संतुलन से उत्पन्न होती है। Quantum mechanics में hydrogen की ground state wavefunction r = a₀ पर peak करती है।`,
    whyItMatters: `Chemistry और materials science की मूलभूत length scale। Condensed matter physics में a₀ chemical bonds, crystal lattice spacings, और excitons के size की scale निर्धारित करती है।`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree ऊर्जा',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atomic',
    description: 'atomic physics में energy की प्राकृतिक इकाई — hydrogen की ionisation energy का दोगुना।',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree energy, hydrogen atom को ground state से ionise करने के लिए आवश्यक energy की दोगुनी है। यह atomic physics में energy की प्राकृतिक इकाई है: Eh = e²/(4πε₀a₀) = α²mec²।`,
    simpleExample: `Hydrogen ground state की energy −(1/2)Eh = −13.6 eV है। Typical chemical bond energies ~0.1–0.2 Eh (3–5 eV) हैं। C-H bond ~0.16 Eh है। Atomic units में ये सब order-unity हैं — quantum chemistry के लिए आदर्श।`,
    deepMeaning: `Atomic units में (ħ = me = e = a₀ = 1 रखने पर) Eh = 1। Atomic units quantum chemistry की equations को बहुत सरल बनाती हैं। Hydrogen का Schrödinger equation: −(1/2)∇²ψ − (1/r)ψ = Eψ, जहाँ ground state पर E = −1/2 Hartree = −13.6 eV।`,
    whyItMatters: `Quantum chemistry का मुख्य energy unit। प्रत्येक DFT calculation, molecular dynamics simulation, और quantum chemistry परिणाम अन्ततः Hartree energy पर आधारित है।`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr मैग्नेटॉन',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atomic',
    description: 'electron magnetic moment की प्राकृतिक इकाई — eħ/(2me)।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB electrons के लिए magnetic moment की प्राकृतिक इकाई है। यह ħ के orbital angular momentum के कारण electron के magnetic moment को दर्शाता है।`,
    simpleExample: `1 Tesla MRI magnetic field में, electron spin-up और spin-down states के बीच Zeeman splitting: 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV — microwave frequencies के अनुरूप। इसीलिए ESR microwaves उपयोग करता है, जबकि NMR radiofrequency।`,
    deepMeaning: `Electron का spin magnetic moment लगभग μB है (सटीकतः ge × μB/2, जहाँ ge ≈ 2.002 quantum electrodynamic corrections के कारण)। Zeeman effect — magnetic field में atomic spectral lines का विभाजन — μB द्वारा संचालित है: ΔE = ml × μB × B।`,
    whyItMatters: `Electron spin resonance, magnetic materials, और सभी magneto-optical effects की नींव। Spintronics और spin qubits के साथ quantum computing में केन्द्रीय भूमिका।`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'नाभिकीय मैग्नेटॉन',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atomic',
    description: 'nuclear magnetic moment की प्राकृतिक इकाई — Bohr magneton से 1836× छोटा।',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN nucleons (protons और neutrons) के लिए magnetic moment की प्राकृतिक इकाई है। यह μB से 1836 गुना छोटा है क्योंकि proton electron से 1836 गुना भारी है।`,
    simpleExample: `Proton का magnetic moment 2.793 μN है। 3 Tesla MRI scanner में proton spin states के बीच energy gap ~127 MHz radiofrequency के अनुरूप है। MRI scanner ठीक इसी frequency पर कार्य करता है।`,
    deepMeaning: `Neutron का magnetic moment −1.913 μN है — एक neutral particle का non-zero magnetic moment। यह ऐतिहासिक रूप से पहले संकेतों में से एक था कि neutron कोई fundamental particle नहीं है बल्कि उसकी internal quark structure है। NMR (और MRI) proton spin transitions पर आधारित है।`,
    whyItMatters: `NMR spectroscopy और MRI — structural chemistry और medical imaging के सबसे शक्तिशाली उपकरण — की नींव। Nucleon की internal quark structure को ऐतिहासिक रूप से सिद्ध किया।`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'इलेक्ट्रॉन द्रव्यमान',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Particle',
    description: 'electron का rest mass — सबसे हल्का massive fundamental particle।',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `यह electron का rest mass है — सबसे हल्का massive fundamental particle। Energy units में: mec² = 0.510 998 950 MeV। Electron, proton से 1836.15 गुना हल्का है।`,
    simpleExample: `Pair production (γ → e⁺ + e⁻) के लिए कम से कम 2mec² = 1.022 MeV की photon चाहिए। इससे कम energy पर photons electron-positron pairs नहीं बना सकते — यही threshold gamma-ray absorption को नियंत्रित करता है।`,
    deepMeaning: `Electron mass Standard Model का एक free parameter है — इसे theoretically predict नहीं किया जा सकता, केवल मापा जा सकता है। यह Higgs mechanism द्वारा उत्पन्न होता है। Electron का Yukawa coupling ye ≈ 2.94 × 10⁻⁶ top quark के yt ≈ 1 की तुलना में अत्यन्त छोटा है — particle physics का एक अनसुलझा "hierarchy" पहेली।`,
    whyItMatters: `सभी atomic और chemical व्यवहार को नियंत्रित करता है। Atoms का आकार, electrons की binding energies, X-rays की energy, और beta radiation की penetration depth — सब electron mass पर निर्भर।`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'इलेक्ट्रॉन g-गुणक',
    value: '−2.002319304',
    unit: 'dimensionless',
    exact: '−2.00231930436256',
    category: 'Particle',
    description: 'सम्पूर्ण विज्ञान की सबसे सटीक रूप से सत्यापित भविष्यवाणी।',
    discoveredBy: 'Kusch & Foley (1948) · QED calculation: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g-factor, electron के वास्तविक magnetic moment और एक simple Dirac particle (g = 2) के magnetic moment का अनुपात है। Anomalous magnetic moment: ae = (ge − 2)/2 = 0.001 159 65।`,
    simpleExample: `QED की भविष्यवाणी के लिए 10 loops तक के Feynman diagrams का योग आवश्यक है। परिणाम experiment से 12 दशमलव स्थानों तक — 1 part per trillion — मेल खाता है।`,
    deepMeaning: `Electron का anomalous magnetic moment सम्पूर्ण विज्ञान की सबसे सटीक रूप से जाँची गई भविष्यवाणी है। QED, α की power series के रूप में गणना करता है: ae = (α/2π) − 0.328(α/π)² + ... Standard Model से कोई भी विचलन नई physics का संकेत होगा।`,
    whyItMatters: `Theoretical physics की सबसे बड़ी उपलब्धि। किसी भी अन्य मापन से अधिक कठोरता से QED की जाँच करती है। Fine-structure constant α का सबसे सटीक निर्धारण प्रदान करती है।`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'प्रोटॉन द्रव्यमान',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Particle',
    description: 'proton का rest mass — electron से 1836× भारी।',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Energy units में: mpc² = 938.272 MeV। Proton, electron से 1836.15 गुना भारी है। यह mass ratio atomic physics में सबसे महत्त्वपूर्ण numbers में से एक है।`,
    simpleExample: `Proton का बड़ा mass इसकी thermal energies पर de Broglie wavelength को electron की तुलना में ~43× छोटा बनाता है — जिससे protons बहुत कम quantum-wave-like होते हैं। इसीलिए Born-Oppenheimer approximation काम करती है।`,
    deepMeaning: `Electron के विपरीत, proton fundamental नहीं है — यह दो up quarks और एक down quark से बना composite particle है। उल्लेखनीय है कि quarks का mass proton के mass का केवल ~1% है। शेष 99% quarks की kinetic energy और gluon fields में stored energy से आता है — E = mc² की एक गहरी अभिव्यक्ति: mass मूलतः energy है। Proton का charge radius 0.8409 fm है।`,
    whyItMatters: `Protons atomic numbers और लगभग सभी atomic mass को परिभाषित करते हैं। आपके शरीर का लगभग सारा mass protons और neutrons के भीतर quantum chromodynamic (QCD) field की energy है।`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'प्रोटॉन g-गुणक',
    value: '5.586',
    unit: 'dimensionless',
    exact: '5.5856946893',
    category: 'Particle',
    description: 'बड़ा anomalous magnetic moment जिसने सिद्ध किया कि proton composite है।',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `एक simple Dirac proton के लिए gp = 2 होना चाहिए। इसके बजाय gp ≈ 5.586 — लगभग तीन गुना बड़ा। यह enormous anomalous magnetic moment proton की composite structure के पहले प्रयोगात्मक संकेतों में से था।`,
    simpleExample: `यदि proton एक simple, बिना आंतरिक संरचना का point particle होता, तो यह 2 की strength का magnet होता। इसका 5.586 होना इस बात का प्रत्यक्ष संख्यात्मक प्रमाण है कि इसके भीतर internal charges (quarks) गतिशील हैं।`,
    deepMeaning: `Otto Stern ने 1933 में gp ≈ 5.6 मापा, जब proton को fundamental Dirac particle माना जाता था। यह परिणाम physics community के लिए एक झटका था। ये values अब QCD calculations से आंशिक रूप से समझी जा सकती हैं।`,
    whyItMatters: `Quark model की ओर ले जाने वाली ऐतिहासिक रूप से आवश्यक खोज। Atomic nuclei में magnetic resonances (NMR/MRI) की गणना के लिए केन्द्रीय।`
  },

  // ── PART 6: NEUTRON CONSTANTS ─────────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'न्यूट्रॉन द्रव्यमान',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'proton से थोड़ा भारी — mass का यह अन्तर beta decay को सम्भव बनाता है।',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Neutron, proton से थोड़ा भारी है — 1.293 MeV/c² से। Energy units में: mnc² = 939.565 MeV। यह छोटा परन्तु निर्णायक mass अन्तर इसका मतलब है कि एक free neutron अस्थिर है — यह beta decay द्वारा क्षय होता है।`,
    simpleExample: `एक free neutron ~10 minute में क्षय होता है (half-life 613.9 s)। Nuclei के भीतर, neutrons nuclear binding energy द्वारा स्थिर हो जाते हैं और क्षय नहीं होते।`,
    deepMeaning: `यदि neutron, proton से electron mass से अधिक हल्का होता, तो free protons neutrons और positrons में क्षय हो जाते — hydrogen atoms अस्थिर होते। Mass difference ने Big Bang nucleosynthesis के दौरान लॉक हुए neutron-to-proton ratio (n/p ≈ 1/7) को निर्धारित किया, जिसने hydrogen (75%) और helium (25%) की cosmic abundances निर्धारित कीं।`,
    whyItMatters: `Nuclear stability, beta decay, और elements की cosmic abundance को नियंत्रित करता है।`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'न्यूट्रॉन चुम्बकीय आघूर्ण',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'शून्य charge के बावजूद ऋणात्मक magnetic moment — internal quarks का प्रमाण।',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `Neutron का ऋणात्मक magnetic moment (−1.913 nuclear magnetons) है, इस तथ्य के बावजूद कि उसका कुल electric charge बिल्कुल शून्य है।`,
    simpleExample: `एक बिना आंतरिक संरचना वाले neutral particle का कोई magnetic moment नहीं होना चाहिए। Neutron का magnetic fields के प्रति प्रतिक्रिया करना इस बात का प्रत्यक्ष प्रमाण है कि इसके भीतर charged sub-particles हैं जिनके प्रभाव पूरी तरह रद्द नहीं होते।`,
    deepMeaning: `Neutron का ऋणात्मक magnetic moment इसके quark structure से उत्पन्न होता है: दो down quarks (charge −e/3 प्रत्येक) और एक up quark (charge +2e/3) निरन्तर quantum गति में हैं।`,
    whyItMatters: `Nuclear physics में सबसे चौंकाने वाले परिणामों में से एक। Neutron Electric Dipole Moment (EDM) की वर्तमान सीमाएँ CP symmetry और ब्रह्मांड की matter-antimatter asymmetry को समझने के लिए उपयोग होती हैं।`
  },

  // ── PART 7: MUON & TAU CONSTANTS ─────────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'म्यूऑन द्रव्यमान',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Particle',
    description: 'electron की भारी प्रतिलिपि — "यह किसने order किया था?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Muon, electron से 206.768 गुना भारी है। इसका charge समान है और यह सभी non-gravitational अन्योन्यक्रियाओं में identically व्यवहार करता है — मानो प्रकृति ने electron की एक भारी प्रतिलिपि बनाई हो।`,
    simpleExample: `Cosmic ray muons 15 km ऊँचाई पर ~0.99c की speed से चलते हैं। Classically उन्हें ground तक पहुँचने से पहले क्षय हो जाना चाहिए था (2.2 μs lifetime → केवल 650 m)। परन्तु वे relativistic time dilation (γ ≈ 7) के कारण बड़ी संख्या में पहुँचते हैं।`,
    deepMeaning: `Muon किसी भी simple theoretical picture में fit नहीं होता। यह क्षय होता है: μ⁻ → e⁻ + ν̄e + νμ। Muonic atoms (e⁻ के स्थान पर μ⁻) nucleus के ~207× करीब orbit करते हैं। Muon anomalous magnetic moment (g-2) वर्तमान में theory से ~4σ का विचलन दिखाता है।`,
    whyItMatters: `Muon anomalous magnetic moment Standard Model से परे physics का सबसे महत्त्वपूर्ण प्रयोगात्मक संकेत है।`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'म्यूऑन असामान्य चुम्बकीय आघूर्ण',
    value: '0.0011659',
    unit: 'dimensionless',
    exact: '0.00116592059',
    category: 'Particle',
    description: 'Standard Model से परे physics का सबसे महत्त्वपूर्ण प्रयोगात्मक संकेत।',
    discoveredBy: 'Fermilab Muon g-2 Experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Electron की तरह, muon का भी एक anomalous magnetic moment है: aμ = (gμ − 2)/2 = 0.001 165 920 59। यह Dirac भविष्यवाणी g = 2 से विचलन मापता है।`,
    simpleExample: `Electron के विपरीत, muon भारी particles के virtual contributions के प्रति संवेदनशील है क्योंकि quantum corrections (mμ/M)² के रूप में scale होते हैं।`,
    deepMeaning: `Theory और experiment के बीच ~4.2 standard deviations का अन्तर है — निर्णायक 5-sigma threshold से tantalizingly करीब। यदि confirmed हो, तो यह Standard Model से परे physics का पहला स्पष्ट प्रमाण होगा।`,
    whyItMatters: `Particle physics का सबसे चर्चित विषय। यदि confirmed हो, तो subatomic world की हमारी समझ का एक मूलभूत पुनर्लेखन आवश्यक होगा।`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'टाउ लेप्टॉन द्रव्यमान',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Particle',
    description: 'सबसे भारी charged lepton — electron से 3477× भारी।',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Tau lepton तीसरा और सबसे भारी charged lepton है — electron से 3477 गुना और muon से 16.8 गुना भारी।`,
    simpleExample: `Tau इतना भारी है (1.78 GeV) कि यह hadrons — pions और kaons — में क्षय हो सकता है, muon के विपरीत। इसकी अत्यन्त अल्प lifetime (~2.9 × 10⁻¹³ s) का अर्थ है कि यह क्षय होने से पहले केवल ~87 μm चलता है।`,
    deepMeaning: `Tau तीसरी generation का charged lepton है। तीन generations क्यों हैं, और उनके mass इतने भिन्न क्यों हैं, यह Standard Model का सबसे गहरा रहस्य है। Tau neutrino 2000 तक directly detect नहीं हुआ था।`,
    whyItMatters: `Leptons की तीन generations का अस्तित्व प्रकृति का एक गहरा रहस्य है। Tau और उसके neutrino ने Standard Model को एक consistent theory के रूप में स्थापित करने में महत्त्वपूर्ण भूमिका निभाई।`
  },

  // ── PART 8: PHYSICO-CHEMICAL CONSTANTS ────────────────────────────────────

  {
    symbol: 'R',
    name: 'मोलर गैस नियतांक',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'Thermodynamic',
    description: 'R = NA × k — thermodynamics और chemistry का workhorse।',
    discoveredBy: 'विभिन्न वैज्ञानिक (19वीं शताब्दी)',
    formula: 'PV = nRT',
    whatItSays: `R, Boltzmann constant का molar level पर scaled version है। Ideal gas law PV = nRT, Boyle के नियम, Charles के नियम, और Avogadro के नियम को एक equation में जोड़ता है।`,
    simpleExample: `किसी gas में sound की speed: v = √(γRT/M)। हवा के लिए (M = 0.029 kg/mol, γ = 1.4) 20°C पर v ≈ 343 m/s। यह दर्शाता है कि sound की speed मूलतः R और temperature द्वारा निर्धारित होती है।`,
    deepMeaning: `Ideal gases की molar heat capacities R के सरल गुणज हैं: monatomic के लिए Cv = (3/2)R, diatomic gases के लिए (5/2)R। Statistical mechanics में, ideal gas की entropy (Sackur-Tetrode equation) में R सम्मिलित है। यह entropy of mixing, Clausius-Clapeyron equation, osmotic pressure के लिए van't Hoff equation, और electrode potentials के लिए Nernst equation में भी प्रकट होता है।`,
    whyItMatters: `Thermodynamics का universal constant। प्रत्येक gas law, thermodynamic गणना, atmospheric model, और chemical reaction energetic calculation R का उपयोग करती है।`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann नियतांक',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamic',
    description: 'blackbody द्वारा radiated power — P/A = σT⁴।',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `एक perfect blackbody प्रति unit area electromagnetic power radiate करता है: P/A = σT⁴। σ अधिक मूलभूत constants से व्युत्पन्न है: σ = 2π⁵k⁴/(15h³c²)।`,
    simpleExample: `सूर्य की surface temperature ~5778 K है, जो power output देती है: σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W। आपका शरीर (T ≈ 310 K) σ × (310)⁴ × (1.7 m²) ≈ 520 W radiate करता है — जिसका लगभग आधा metabolic heat से पूरा होता है।`,
    deepMeaning: `T⁴ की निर्भरता Planck blackbody spectrum को सभी frequencies पर integrate करने से उत्पन्न होती है। Temperature दोगुनी करने पर radiated power 2⁴ = 16 गुना बढ़ जाती है। Cosmic microwave background (CMB) — Big Bang का relic radiation — T = 2.725 K पर perfect blackbody है।`,
    whyItMatters: `Stellar luminosity, Earth की energy balance और climate, thermal cameras, optical pyrometry, और ब्रह्मांड की temperature structure को नियंत्रित करता है।`
  },

  {
    symbol: 'b',
    name: 'Wien विस्थापन नियतांक',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'Thermodynamic',
    description: 'peak blackbody wavelength को temperature से जोड़ता है।',
    discoveredBy: 'Wilhelm Wien (1893)',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien का displacement law blackbody radiation की peak wavelength को temperature से जोड़ता है: λ_max × T = b। कोई वस्तु जितनी गर्म होती है, उसकी peak wavelength उतनी ही छोटी (नीली) होती है।`,
    simpleExample: `सूर्य (T = 5778 K) λ_max ≈ 502 nm (हरा प्रकाश) पर peak करता है। मानव नेत्र ठीक इसी range में सबसे अधिक संवेदनशील है। मानव शरीर (T = 310 K) मुख्यतः λ_max ≈ 9.4 μm — mid-infrared पर emit करता है — इसीलिए thermal cameras काम करते हैं।`,
    deepMeaning: `Peak frequency version f_max = b' × T, b' = 5.879 × 10¹⁰ Hz/K उपयोग करता है। ध्यान दें कि peak frequency का सीधे c/λ_max से संगत नहीं है क्योंकि wavelength और frequency distributions के आकार भिन्न होते हैं।`,
    whyItMatters: `Thermal imaging, stellar temperature measurement, climate science, और blackbody radiation physics के लिए मूलभूत।`
  },

  // ── PART 9: GRAVITATIONAL & ELECTROWEAK CONSTANTS ─────────────────────────

  {
    symbol: 'G',
    name: 'गुरुत्वाकर्षण नियतांक',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universal',
    description: 'सबसे कमज़ोर बल — सबसे कम सटीकता से ज्ञात fundamental constant।',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton का नियम: F = Gm₁m₂/r²। General Relativity में, G, Einstein के field equations में प्रकट होता है जो बताते हैं कि matter spacetime को कैसे मोड़ती है।`,
    simpleExample: `1 metre दूर रखे दो 1 kg masses के बीच gravity: F = 6.674 × 10⁻¹¹ N — लगभग एक bacterium के weight के बराबर। दो protons के बीच electromagnetic force 10³⁶ गुना अधिक शक्तिशाली है। इसीलिए gravity atomic scales पर अप्रासंगिक है।`,
    deepMeaning: `G सबसे कम सटीकता से ज्ञात fundamental constant है — केवल 5 significant figures तक। Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m वह scale है जहाँ quantum gravity की अपेक्षा है — proton से 10²⁰ गुना छोटा।`,
    whyItMatters: `सभी gravitational घटनाओं को नियंत्रित करता है — एक thrown ball से black holes और ब्रह्मांड की large-scale structure तक। Gravity के quantum theory का अभाव physics की सबसे गहरी अनसुलझी समस्या है।`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi युग्मन नियतांक',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particle',
    description: 'weak nuclear force की coupling strength — beta decay को नियंत्रित करती है।',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF, beta decay की Fermi की four-fermion effective theory में weak nuclear force का coupling constant है: n → p + e⁻ + ν̄e। Weak cross-section GF² के समानुपाती है।`,
    simpleExample: `Weak interaction इतनी कमज़ोर है कि एक neutrino lead की एक light-year मोटाई से गुज़र सकती है और उसके रुकने की probability केवल 50% होगी। फिर भी यह सूर्य की energy के लिए आवश्यक है — pp chain एक weak interaction से शुरू होती है।`,
    deepMeaning: `e² के विपरीत, GF की dimensions energy⁻² हैं, जो Fermi की theory को non-renormalisable बनाती है। इसका समाधान electroweak unification (Nobel 1979) था: weak force massive W और Z bosons (~80–91 GeV) द्वारा mediated है।`,
    whyItMatters: `सभी beta decay, neutrino interactions, और electroweak unification को नियंत्रित करता है। Weak force सूर्य की pp chain को चलाती है और तारों में heavy elements के nuclear synthesis के लिए उत्तरदायी है।`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'दुर्बल मिश्रण कोण',
    value: '0.2229',
    unit: 'dimensionless',
    exact: '0.22290',
    category: 'Particle',
    description: 'electromagnetic और weak forces के बीच mixing को quantify करता है।',
    discoveredBy: 'Glashow, Weinberg, Salam (Nobel 1979)',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Weak mixing angle θW (Weinberg angle), electroweak unification में photon और Z boson के बीच mixing को parameterise करता है: e = g sin θW = g' cos θW।`,
    simpleExample: `sin²θW ≈ 0.231 का मान particle colliders (LHC) और atomic parity violation experiments में असाधारण सटीकता से मापा गया है।`,
    deepMeaning: `Electroweak unification में, photon और Z boson दो underlying gauge bosons (W⁰ और B) के mixture हैं। sin²θW का energy के साथ running Standard Model द्वारा precisely predict किया गया है।`,
    whyItMatters: `Standard Model का एक fundamental parameter जो electromagnetic और weak nuclear forces के गुणों को जोड़ता है।`
  },

  // ── PART 11: ADDITIONAL ATOMIC & NUCLEAR CONSTANTS ────────────────────────

  {
    symbol: 'κ',
    name: 'परिसंचरण क्वान्टम',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomic',
    description: 'electron के लिए circulation की मूलभूत इकाई — h/2me।',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `एक quantum fluid (जैसे superfluid helium या superconductor) का circulation h/m के units में quantised होता है। Superconductors के लिए, relevant particle Cooper pair है जिसका mass 2me है।`,
    simpleExample: `Superfluid helium-4 में, vortices h/m_He के multiples में circulation वहन करते हैं। Rotating superfluid helium इन quantised vortices का एक lattice विकसित करता है — type-II superconductors में Abrikosov vortex lattice के analogous।`,
    deepMeaning: `Circulation का quantisation quantum mechanical wavefunction की single-valuedness का प्रत्यक्ष परिणाम है। यदि कोई superfluid rotate करे, तो macroscopic wavefunction का phase किसी भी closed loop के चारों ओर जाने पर समान मान पर वापस आना चाहिए। यह circulation को quantised करने पर विवश करता है।`,
    whyItMatters: `Superfluids और superconductors के व्यवहार को समझाता है। Circulation का quantum Aharonov-Bohm effect में भी प्रकट होता है।`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson प्रकीर्णन अनुप्रस्थ काट',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atomic',
    description: 'आने वाले photon को एक free electron द्वारा प्रस्तुत effective area।',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `जब low-energy photons (photon energy ≪ mec²) एक free electron से scatter होते हैं, तो total scattering cross-section σT = (8π/3) × re² होता है, जहाँ re classical electron radius है।`,
    simpleExample: `Electron को एक incoming photon के लिए "target area" σT प्रस्तुत करने वाले particle के रूप में सोचें। यदि आप electrons के एक box पर photons fire करें, तो scattering से पहले mean free path λ = 1/(nσT) है।`,
    deepMeaning: `Thomson cross section, अधिक सामान्य Compton scattering formula की elastic scattering limit है। Stellar interiors में, radiation pressure Thomson scattering द्वारा transmitted होता है। Eddington luminosity — किसी तारे की वह अधिकतम luminosity जिसके बाद radiation pressure gravity को पार कर लेती है — σT पर निर्भर करती है।`,
    whyItMatters: `Thomson scattering बताता है कि आकाश नीला क्यों है और solar corona eclipses के दौरान दृश्य क्यों है।`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'इलेक्ट्रॉन आवेश-द्रव्यमान अनुपात',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atomic',
    description: 'यह निर्धारित करता है कि electron electromagnetic forces के प्रति कितनी प्रबलता से प्रतिक्रिया करता है।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `यह electron के charge और mass का अनुपात है। यह निर्धारित करता है कि electron electromagnetic forces के प्रति कितनी प्रबलता से प्रतिक्रिया करता है।`,
    simpleExample: `एक CRT (cathode ray tube) television में, electron beam का electric और magnetic fields द्वारा विक्षेपण e/me द्वारा नियंत्रित होता है। e/me का बड़ा मान इसका अर्थ है कि electrons ions की तुलना में बहुत आसानी से deflect होते हैं।`,
    deepMeaning: `Thomson के प्रसिद्ध cathode ray प्रयोग ने सिद्ध किया कि cathode rays ऋणात्मक charged particles की धाराएँ हैं जिनका ratio hydrogen ions से ~1800 गुना बड़ा है। Cyclotron frequency ωc = eB/me सीधे e/me के समानुपाती है। Plasma frequency ωp² = ne²/(meε₀) ionosphere से radio waves के reflection को नियंत्रित करती है।`,
    whyItMatters: `Mass spectrometry, particle accelerators, और vacuum electronics के लिए मूलभूत। Fusion plasmas में electron cyclotron resonance heating को नियंत्रित करता है।`
  },

  {
    symbol: 'M(e)',
    name: 'इलेक्ट्रॉन मोलर द्रव्यमान',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomic',
    description: 'एक mole electrons का mass — me × NA।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `एक mole electrons का mass अत्यन्त छोटा है — लगभग 0.55 milligrams प्रति mole।`,
    simpleExample: `Electrochemistry में, electrolysis के दौरान electrodes पर mass परिवर्तनों की गणना करते समय electron molar mass ionic masses की तुलना में नगण्य है।`,
    deepMeaning: `High-precision atomic mass measurements में, electron cloud का mass और binding energies को ध्यान में रखना पड़ता है: M(atom) = M(nucleus) + Z × M(e) − (electron binding energy)/c²। Penning trap mass spectrometry को 10 significant figures तक पहुँचने के लिए इस correction की आवश्यकता होती है।`,
    whyItMatters: `Physics में सबसे सटीक mass comparisons और SI unit definitions की consistency की जाँच के लिए आवश्यक।`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'इलेक्ट्रॉन-प्रोटॉन द्रव्यमान अनुपात',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'dimensionless',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atomic',
    description: 'electron, proton से 1836.15 गुना हल्का है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Proton की तुलना में electron का mass। यह अनुपात लगभग 1/1836 है।`,
    simpleExample: `चूँकि me/mp ≪ 1, molecules में electrons nuclei की तुलना में बहुत तेज़ गति से चलते हैं। यह हमें fixed nuclear positions पर electronic Schrödinger equation को हल करने की अनुमति देता है — Born-Oppenheimer approximation।`,
    deepMeaning: `यह ratio chemical energy scales (~eV) को nuclear energy scales (~MeV) से अलग करता है। यह ratio stellar physics में भी महत्त्वपूर्ण है: Chandrasekhar limit — white dwarf का अधिकतम mass — सीधे (mp/me) पर निर्भर करती है।`,
    whyItMatters: `प्रकृति में सबसे महत्त्वपूर्ण dimensionless numbers में से एक। Atomic structure, energy scales की hierarchy, और stars की stability को नियंत्रित करता है।`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'प्रोटॉन आवेश-द्रव्यमान अनुपात',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atomic',
    description: 'elementary charge और proton mass का अनुपात — electron से 1836× छोटा।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Elementary charge और proton mass का अनुपात। यह निर्धारित करता है कि protons magnetic fields के प्रति कैसे प्रतिक्रिया करते हैं।`,
    simpleExample: `एक magnetic field में proton cyclotron frequency, electron की तुलना में 1836 गुना कम है। इसीलिए MRI microwave frequencies के बजाय radiofrequency waves (MHz range) उपयोग करता है।`,
    deepMeaning: `Mass spectrometry में, ions उनके charge-to-mass ratios द्वारा अलग किए जाते हैं। Penning trap mass spectrometry इस ratio का उपयोग atomic masses को extreme precision से मापने के लिए करती है।`,
    whyItMatters: `Medical imaging (MRI), mass spectrometry, और LHC जैसे high-energy particle accelerators के design के लिए मूलभूत।`
  },

  {
    symbol: 'M(p)',
    name: 'प्रोटॉन मोलर द्रव्यमान',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Atomic',
    description: 'एक mole protons का mass।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `एक mole protons का mass लगभग 1.007 g/mol है।`,
    simpleExample: `यह ठीक 1 g/mol से थोड़ा कम है क्योंकि atomic mass unit, carbon-12 के mass के 1/12 के रूप में परिभाषित है, जिसमें binding energy और electron mass contributions शामिल हैं।`,
    deepMeaning: `Nuclear physics में, एक nuclear reaction का Q-value — release या absorb हुई energy — molar masses का उपयोग करके mass difference से गणना होती है।`,
    whyItMatters: `Nuclear chemistry और astrophysics में stoichiometric calculations के लिए मूलभूत।`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'न्यूट्रॉन-इलेक्ट्रॉन द्रव्यमान अनुपात',
    value: '1838.68',
    unit: 'dimensionless',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'neutron, electron से 1838.68 गुना भारी है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `Neutron mass और electron mass का अनुपात। यह proton-electron ratio से थोड़ा अधिक है।`,
    simpleExample: `Neutron, proton से 2.531 electron masses भारी है। यह mass difference 1.293 MeV के बराबर है — neutron beta decay में release होने वाली energy।`,
    deepMeaning: `इस ratio का proton-electron ratio से अधिक होना free neutrons को अस्थिर बनाता है। यदि neutron proton से electron mass से अधिक हल्का होता, तो hydrogen एक stable element के रूप में अस्तित्वहीन होता।`,
    whyItMatters: `ब्रह्मांड के building blocks की stability को नियंत्रित करता है।`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'न्यूट्रॉन-प्रोटॉन द्रव्यमान अनुपात',
    value: '1.00138',
    unit: 'dimensionless',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'neutron, proton से 0.138% भारी है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Neutron, proton से 0.138% के अंश से भारी है।`,
    simpleExample: `यह tiny mass difference (1.293 MeV/c²) ने निर्धारित किया कि Big Bang के दौरान लगभग 25% baryonic matter helium-4 बना, और शेष hydrogen रहा।`,
    deepMeaning: `ब्रह्मांड के प्रारम्भिक काल में, neutrons और protons का equilibrium ratio Boltzmann factor का अनुसरण करता था। जैसे-जैसे ब्रह्मांड ठण्डा हुआ और weak interactions "freeze out" हुईं, n/p ratio लगभग 1/7 पर lock हो गया।`,
    whyItMatters: `~25% helium की observed cosmic abundance Big Bang model की सबसे बड़ी पुष्टियों में से एक है — यह सब इस constant के कारण है।`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'न्यूट्रॉन g-गुणक',
    value: '−3.826',
    unit: 'dimensionless',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'electrically neutral neutron की internal quark structure को उजागर करता है।',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Neutron का g-factor −3.826 है। शून्य charge वाले एक structureless Dirac particle के लिए यह ठीक 0 होना चाहिए।`,
    simpleExample: `Neutral neutron का non-zero magnetic moment nuclear physics के सबसे चौंकाने वाले परिणामों में से एक था, जिसने सिद्ध किया कि neutral particles के भी आंतरिक घटक हो सकते हैं।`,
    deepMeaning: `Neutron में एक up quark और दो down quarks हैं। उनके magnetic moments और orbital motion net ऋणात्मक magnetic moment उत्पन्न करते हैं। Non-relativistic quark model g ≈ −3.67 predict करता है; अन्तर relativistic corrections और gluon effects के कारण है।`,
    whyItMatters: `Standard Model और quark structure का stringent test। Neutron electric dipole moment पर सीमाएँ लगाने के लिए भी उपयोग होता है।`
  },

  {
    symbol: 'M(n)',
    name: 'न्यूट्रॉन मोलर द्रव्यमान',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'एक mole neutrons का mass।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `एक mole neutrons का weight लगभग 1.00866 grams है।`,
    simpleExample: `यद्यपि free neutrons 10 minute में क्षय होते हैं, neutron molar mass "binding energy की वक्र" की गणना के लिए आवश्यक है जो यह निर्धारित करती है कि nuclear power plants कितनी energy उत्पन्न कर सकते हैं।`,
    deepMeaning: `Nuclear binding energy per nucleon molar masses से गणना होती है: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c²। Proton mass की तुलना में अधिक neutron mass प्रत्येक nuclear binding energy गणना को प्रभावित करती है।`,
    whyItMatters: `Nuclear engineering और nuclear isotopes के अध्ययन की नींव।`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'न्यूट्रॉन Compton तरंगदैर्ध्य',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'nuclear physics की प्राकृतिक length scale — h/mnc।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `उस photon की wavelength जिसकी energy neutron के rest mass energy के बराबर है। यह लगभग 1.32 femtometres है।`,
    simpleExample: `यह wavelength neutron के आकार (~0.8 fm) और nuclear forces की range (~1.4 fm) के तुलनीय है।`,
    deepMeaning: `Nuclear physics की characteristic distance scales nucleons और pions के Compton wavelengths द्वारा निर्धारित होती हैं। Protein structures का अध्ययन करने के लिए उपयोग किए जाने वाले neutron scattering experiments में neutron wavelength को interatomic spacings से मेल खाने के लिए tune किया जाता है।`,
    whyItMatters: `वह scale निर्धारित करता है जिसके नीचे neutron को simple non-relativistic particle के रूप में treat नहीं किया जा सकता।`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'म्यूऑन Compton तरंगदैर्ध्य',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Particle',
    description: 'उस photon की wavelength जिसकी energy muon के rest mass के बराबर है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Muon Compton wavelength लगभग 11.7 fm है — electron की तुलना में mass ratio (206.77) से छोटी।`,
    simpleExample: `Muonic atoms में, muon electron की तुलना में nucleus के ~207× करीब orbit करता है, क्योंकि muon की Bohr radius mass के व्युत्क्रम में scale होती है।`,
    deepMeaning: `Muonic hydrogen में muon ~256 fm पर orbit करता है — proton के इतने करीब कि उसका finite size energy levels को महत्त्वपूर्ण रूप से प्रभावित करता है। इसीलिए muonic hydrogen spectroscopy proton charge radius का सबसे सटीक माप प्रदान करती है।`,
    whyItMatters: `"Proton radius puzzle" की ओर ले गया — आधुनिक precision atomic physics का एक प्रमुख विषय।`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'म्यूऑन g-गुणक',
    value: '−2.00233',
    unit: 'dimensionless',
    exact: '−2.0023318418',
    category: 'Particle',
    description: 'अनदेखे भारी particles के लिए महत्त्वपूर्ण probe।',
    discoveredBy: 'प्रयोगात्मक / QED गणना',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Electron की तरह, muon का भी एक anomalous magnetic moment है: aμ = 0.001 165 920 59।`,
    simpleExample: `Fermilab का g-2 experiment इसे इसलिए मापता है ताकि जाँचा जा सके कि supersymmetry या अन्य theories के "virtual" heavy particles muon की magnetic spin को प्रभावित कर रहे हैं या नहीं।`,
    deepMeaning: `वर्तमान experimental value, Standard Model prediction से ~4.2 standard deviations में असहमत है। इसका resolution hadronic vacuum polarisation की lattice QCD calculations की precision पर निर्भर करता है।`,
    whyItMatters: `Standard Model और experiment के बीच वर्तमान में ज्ञात सबसे महत्त्वपूर्ण विसंगतियों में से एक।`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'ड्यूटेरॉन द्रव्यमान',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'heavy hydrogen का nucleus — सबसे सरल nuclear bound state।',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Deuteron, deuterium का nucleus है (एक proton और एक neutron)। इसकी binding energy 2.224 MeV है।`,
    simpleExample: `Binding energy उल्लेखनीय रूप से छोटी है (helium-4 से तुलना करें: 28.3 MeV)। इस नाज़ुकता ने Big Bang में "deuterium bottleneck" उत्पन्न किया, जिसने भारी elements के निर्माण में विलम्ब किया।`,
    deepMeaning: `Deuteron सबसे सरल nuclear bound state है — hydrogen atom के analogous। इसका non-zero quadrupole moment सिद्ध करता है कि nuclear force में pion exchange से उत्पन्न एक tensor component है। सूर्य में fusion का पहला कदम (p + p → d + e⁺ + νe) असाधारण रूप से धीमा है — सूर्य की दीर्घायु इसी bottleneck के कारण है।`,
    whyItMatters: `Nuclear force theory का fundamental test bed। Deuterium nuclear reactors में neutron moderator के रूप में और pharmaceutical research में उपयोग होता है।`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'ड्यूटेरॉन चुम्बकीय आघूर्ण',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'सबसे सरल nucleus का magnetic moment।',
    discoveredBy: 'Nuclear Physics / NMR studies',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Deuteron का magnetic moment 0.857 nuclear magnetons है।`,
    simpleExample: `यदि spins simply aligned होती, तो योग μp + μn = 0.880 μN होता। वास्तविक मान 0.857 μN है। यह अन्तर wavefunction में D-wave admixture के orbital magnetic moment से precisely explain होता है।`,
    deepMeaning: `Deuteron magnetic moment की calculated और measured values के बीच समझौता nuclear force models को validate करता है। Deuteron NMR का उपयोग molecular dynamics के अध्ययन में होता है।`,
    whyItMatters: `Nuclear structure model और pion exchange theory की सुन्दर पुष्टि।`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'ड्यूटेरॉन g-गुणक',
    value: '0.8574',
    unit: 'dimensionless',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'deuteron magnetic moment को nuclear magneton से जोड़ता है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Electron (g ≈ −2) या proton (g ≈ 5.586) के विपरीत, deuteron का g-factor 1 से कम है।`,
    simpleExample: `यह मान nucleus के भीतर proton और neutron magnetic moments के partial cancellation को दर्शाता है।`,
    deepMeaning: `Precision measurements meson exchange currents और relativistic effects सहित corrections के माध्यम से neutron magnetic moment की extraction की अनुमति देते हैं।`,
    whyItMatters: `Complex nuclear force models को 0.1% स्तर पर validate करने के लिए उपयोग होता है।`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'हीलियॉन द्रव्यमान',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'helium-3 का nucleus — दो protons और एक neutron।',
    discoveredBy: 'Nuclear physics experimental data',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Helion, helium-3 का nucleus है। इसकी binding energy 7.718 MeV है।`,
    simpleExample: `Superfluid helium-3 unconventional superconductivity और topological quantum states के लिए एक model system है।`,
    deepMeaning: `He-3, triton का mirror nucleus है। उनके बीच छोटा mass difference nuclear forces की charge symmetry को test करता है। Helion g-factor −4.255 μN है — single neutron के dominant contribution को दर्शाता है।`,
    whyItMatters: `High cross-section neutron detectors और hyperpolarised lung MRI में उपयोग होता है।`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'अल्फा कण द्रव्यमान',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'helium-4 nucleus — असाधारण रूप से स्थिर, 28.3 MeV binding energy।',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `Alpha particle, helium-4 nucleus है। इसकी binding energy 7.074 MeV per nucleon है — binding energy curve के peak के करीब।`,
    simpleExample: `Alpha decay half-lives 20 orders of magnitude (0.3 μs से 14 billion years तक) में फैली हैं। दोनों Gamow की quantum tunnelling theory से explained हैं।`,
    deepMeaning: `Alpha particle की असाधारण stability इसीलिए है कि यह radioactive decay में preferentially emit होती है। इसकी zero spin और zero magnetic moment है — एक completely closed-shell nucleus। Triple-alpha process (3α → ¹²C) के लिए carbon-12 में 7.65 MeV (Hoyle state) पर एक resonance आवश्यक है। इस resonance के बिना ब्रह्मांड में कोई carbon नहीं होता।`,
    whyItMatters: `अधिकांश heavy nucleus decays का उत्पाद। Triple-alpha process ब्रह्मांड के सभी carbon का स्रोत है। Cancer के targeted alpha radiotherapy में उपयोग होता है।`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'परमाणु द्रव्यमान नियतांक',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'Thermodynamic',
    description: 'carbon-12 mass का 1/12 — atomic masses की प्राकृतिक इकाई।',
    discoveredBy: 'अन्तर्राष्ट्रीय मानक (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `Atomic mass unit (u, या dalton, Da) carbon-12 के एक atom के mass के 1/12 के रूप में परिभाषित है।`,
    simpleExample: `Carbon-12 = ठीक 12 u। Hydrogen = 1.0078 u। 50 kDa का एक protein: 50,000 × 1.661 × 10⁻²⁷ kg।`,
    deepMeaning: `Conversion 1 u = 931.494 MeV/c² nuclear physics में सबसे उपयोगी में से एक है। Nuclear mass differences के milliatomic mass units, MeV-scale energies release करते हैं। Carbon-12 का चुनाव 1961 में physics और chemistry communities के बीच एक समझौता था।`,
    whyItMatters: `Nuclear physics, mass spectrometry, और सम्पूर्ण biochemistry — जहाँ protein masses daltons में express होती हैं — की नींव।`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'मोलर द्रव्यमान नियतांक',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'atomic mass unit को molar mass से जोड़ता है।',
    discoveredBy: 'SI पुनर्परिभाषा (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu, atomic mass unit को molar mass से जोड़ता है: Mu = NA × mu ≈ 1 g/mol।`,
    simpleExample: `चूँकि Mu ≈ 1 g/mol, किसी पदार्थ का molar mass (grams में) उसके relative atomic mass के बराबर होता है (जैसे Water ~18.015 g/mol)।`,
    deepMeaning: `ऐतिहासिक रूप से ठीक 1 g/mol। 2019 के बाद, NA और mu दोनों स्वतन्त्र रूप से परिभाषित हैं, इसलिए Mu अब ठीक 1 g/mol नहीं है — यह लगभग 10⁻⁹ से विचलित होता है। यह practical purposes के लिए नगण्य है लेकिन नए SI की एक reminder है।`,
    whyItMatters: `Chemistry में stoichiometric calculations की नींव। प्रत्येक mole-to-gram conversion इस पर निर्भर करता है।`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'मोलर Planck नियतांक',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamic',
    description: 'Planck constant को molar level पर scaled — NA × h।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `प्रति unit frequency photons के एक mole की energy।`,
    simpleExample: `Photochemistry में, एक "Einstein" (एक mole photons) की energy NAhf है।`,
    deepMeaning: `Ideal gas की absolute entropy के लिए Sackur-Tetrode equation में प्रकट होता है। यह quantum mechanical partition function को molar scale पर macroscopic thermodynamic quantities से जोड़ता है।`,
    whyItMatters: `Photochemistry और statistical thermodynamics के लिए मूलभूत।`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'आदर्श गैस का मोलर आयतन (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamic',
    description: 'STP पर ideal gas के एक mole द्वारा occupied volume।',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `0°C और 101,325 Pa पर, किसी भी ideal gas का एक mole 22.413... litres occupy करता है।`,
    simpleExample: `STP पर एक litre hydrogen और एक litre oxygen में ठीक समान संख्या में molecules होते हैं (2.688 × 10²²)।`,
    deepMeaning: `Ideal gas law से: V = nRT/P। यह तथ्य कि सभी ideal gases का STP पर एक ही molar volume होता है, Avogadro की एक revolutionary insight थी।`,
    whyItMatters: `Gas stoichiometry में chemistry के सबसे practically उपयोगी numbers में से एक।`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt नियतांक',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamic',
    description: 'STP पर ideal gas के प्रति cubic metre molecules की संख्या।',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `समुद्र तल पर हवा के molecules की संख्या लगभग 2.687 × 10²⁵ प्रति cubic metre है।`,
    simpleExample: `STP पर एक हवा के molecule का mean free path लगभग 66 nm है। Collision frequency ~10¹⁰ प्रति second है।`,
    deepMeaning: `Loschmidt ने 1865 में gas viscosity और molecular diameter का उपयोग करके इसका अनुमान लगाया। यह एक macroscopic volume में molecules की पहली serious estimate और atoms के निश्चित आकार होने का पहला direct evidence था। Rayleigh scattering (आकाश नीला क्यों है) n₀ के समानुपाती है।`,
    whyItMatters: `Atmospheric physics और atomic theory के इतिहास के लिए मूलभूत।`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'सिलिकॉन का मोलर आयतन',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamic',
    description: 'crystal lattice में silicon atoms के एक mole द्वारा occupied volume।',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `अपनी diamond cubic structure में solid silicon के एक mole का volume।`,
    simpleExample: `X-ray diffraction से lattice parameter 'a' और macroscopic density 'ρ' मापकर NA को 2 parts per billion तक ज्ञात किया जा सकता है।`,
    deepMeaning: `Silicon, X-ray crystal density method के लिए reference material है। Avogadro Project ने 2019 में kilogram को redefine करने के लिए असाधारण precision के 1 kg silicon spheres का उपयोग किया।`,
    whyItMatters: `2019 के kilogram के redefinition के लिए केन्द्रीय।`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'कार्बन-12 का मोलर द्रव्यमान',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'carbon-12 atoms के एक mole का mass।',
    discoveredBy: 'SI पुनर्परिभाषा (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `2019 से पहले यह ठीक 12 g/mol था। अब नए SI में इसमें एक tiny measured uncertainty है।`,
    simpleExample: `ठीक 12 g/mol से विचलन लगभग 10 parts per billion है — chemistry के लिए पूर्णतः नगण्य परन्तु metrology के लिए महत्त्वपूर्ण।`,
    deepMeaning: `NA को exactly परिभाषित करने और atomic mass unit की ऐतिहासिक definition के बीच असंगति को दर्शाता है। Base units अब material artifacts के बजाय fundamental constants से परिभाषित हैं।`,
    whyItMatters: `एक reminder कि नया SI constants द्वारा परिभाषित है, material artifacts द्वारा नहीं।`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'प्रथम विकिरण नियतांक',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamic',
    description: 'blackbody radiation intensity की overall scale निर्धारित करता है — 2πhc²।',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Planck blackbody radiation law में spectral radiance के लिए प्रकट होता है।`,
    simpleExample: `सूर्य ~502 nm (हरा) पर peak करता है। Solar cells इस Planck spectrum से ठीक मेल खाने के लिए design किए जाते हैं, जिसकी गणना c₁ से होती है।`,
    deepMeaning: `Planck radiation law ने 1900 में quantum mechanics की शुरुआत की। Planck की quantum hypothesis ने exponential factor introduce किया जो high-frequency divergence (ultraviolet catastrophe) को दबाता है।`,
    whyItMatters: `Astrophysics, solar energy, और cosmology के लिए मूलभूत।`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'वर्णक्रमीय दीप्ति के लिए प्रथम विकिरण नियतांक',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamic',
    description: 'c₁ को π से भाग — प्रति unit solid angle radiance देता है।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Hemispherical spectral irradiance के बजाय प्रति unit solid angle spectral radiance देता है।`,
    simpleExample: `Optical system performance जैसे telescope sensitivity या camera exposure की सही गणना के लिए आवश्यक।`,
    deepMeaning: `Integrated hemisphere emission और एक specific direction में radiance के बीच के अन्तर को दर्शाता है। एक Lambertian emitter के लिए, सम्बन्ध में π का factor होता है।`,
    whyItMatters: `Radiometry और satellite remote sensing में आवश्यक।`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'द्वितीय विकिरण नियतांक',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'Thermodynamic',
    description: 'Planck function में wavelength और temperature को जोड़ता है — hc/k।',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Planck function के exponent में प्रकट होता है। Quantum और classical regimes के बीच crossover की scale निर्धारित करता है।`,
    simpleExample: `Wien का displacement law (λ_max × T = b) c₂ से derived है। Thermal cameras लोगों को detect करते हैं क्योंकि 310 K के शरीर mid-infrared में peak करते हैं।`,
    deepMeaning: `ऐतिहासिक रूप से, c₁/c₂ का अनुपात Boltzmann constant को मापने के लिए उपयोग किया जाता था। कमरे के तापमान पर, mid-infrared radiation के लिए quantum corrections महत्त्वपूर्ण हो जाते हैं।`,
    whyItMatters: `Climate science, thermal imaging, और stellar physics के लिए मूलभूत।`
  },

  {
    symbol: 'g',
    name: 'गुरुत्वीय त्वरण का मानक मान',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (सटीक)',
    category: 'Universal',
    description: 'पृथ्वी की सतह पर gravitational acceleration का standard मान।',
    discoveredBy: 'International Bureau of Weights and Measures (1901)',
    formula: 'W = mg',
    whatItSays: `Gravitational acceleration के लिए एक परिभाषित conventional standard।`,
    simpleExample: `वास्तविक gravity भूमध्य रेखा पर ~9.780 m/s² से ध्रुवों पर ~9.832 m/s² तक भिन्न होती है। Standard मान 45° latitude पर measurements से मेल खाने के लिए चुना गया था।`,
    deepMeaning: `Mass और force (kilogram-force) के बीच conversion factor के रूप में प्रकट होता है। Gravimeters local g को 9 significant figures तक मापते हैं। General Relativity का equivalence principle बताता है कि यह flat spacetime में acceleration से अप्रभेद्य है।`,
    whyItMatters: `Engineering, atmospheric pressure definition, और precise weighing के लिए baseline।`
  },

  // ── PART 19: ATOMIC UNITS ──────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'परमाण्वीय इकाई — लम्बाई',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'atomic units में Bohr radius।',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `Atomic system में length की इकाई। सभी bond lengths Bohr में express होती हैं।`,
    simpleExample: `Typical bond lengths: H-H = 1.40 a₀, C-C = 2.92 a₀।`,
    deepMeaning: `Atomic units में ħ = me = e = 4πε₀ = 1। यह quantum chemistry equations को बहुत सरल बनाता है।`,
    whyItMatters: `Computational chemistry में standard unit।`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'परमाण्वीय इकाई — द्रव्यमान',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atomic',
    description: 'atomic units में electron mass।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `Atomic system में mass की इकाई।`,
    simpleExample: `Quantum chemistry में, सभी masses me के गुणज के रूप में express होती हैं।`,
    deepMeaning: `Fundamental constants को 1 पर set करने वाली उस प्रणाली का हिस्सा जो Schrödinger equation को सरल बनाती है।`,
    whyItMatters: `सभी electronic structure calculations का base mass।`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'परमाण्वीय इकाई — समय',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atomic',
    description: 'atoms में electronic motion का प्राकृतिक timescale।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Hartree energy scale पर एक radian phase evolution का समय।`,
    simpleExample: `Hydrogen की ground state में electron का orbital period 2π atomic time units ≈ 152 attoseconds है।`,
    deepMeaning: `Attosecond physics इस timescale पर real time में electron dynamics का अध्ययन करती है। Nobel Prize 2023 attosecond pulse technology के लिए प्रदान किया गया।`,
    whyItMatters: `Atoms के भीतर electron motion के प्रत्यक्ष अवलोकन की अनुमति देता है।`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'परमाण्वीय इकाई — ऊर्जा',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atomic',
    description: 'atomic units में Hartree energy।',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Atomic physics में energy की इकाई।`,
    simpleExample: `Hartrees में chemical bond energies: H₂ bond = 0.174 Eh।`,
    deepMeaning: `सभी electronic structure calculations के लिए मूलभूत energy scale निर्धारित करता है।`,
    whyItMatters: `DFT जैसे computational codes में standard energy unit।`
  },

  {
    symbol: 'e',
    name: 'परमाण्वीय इकाई — आवेश',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atomic',
    description: 'atomic units में elementary charge।',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `Atomic units में, proton का charge +1 है, electron का charge −1 है।`,
    simpleExample: `Helium nucleus का charge +2 a.u. है।`,
    deepMeaning: `Fundamental charge को unity पर set करके electromagnetic interaction के mathematics को सरल बनाता है।`,
    whyItMatters: `Molecules में charge distributions के लिए base unit।`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'परमाण्वीय इकाई — वेग',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atomic',
    description: 'hydrogen की ground state में electron की velocity।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — Bohr model में electron की velocity।`,
    simpleExample: `Gold (Z=79) में, 1s electron की velocity ~0.58c है, जिससे relativistic contraction होता है — जो gold के पीले रंग के लिए उत्तरदायी है।`,
    deepMeaning: `भारी atoms के लिए, c के करीब velocities के लिए relativistic corrections आवश्यक हो जाते हैं।`,
    whyItMatters: `Chemistry में relativistic effects कब महत्त्वपूर्ण हो जाते हैं, यह निर्धारित करता है।`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'परमाण्वीय इकाई — संवेग',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomic',
    description: 'hydrogen में momentum uncertainty की प्राकृतिक scale।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. of velocity) = ħ/a₀।`,
    simpleExample: `Uncertainty principle के अनुसार, a₀ के भीतर localised electron के लिए momentum uncertainty ठीक एक atomic unit है।`,
    deepMeaning: `Atoms की length scale को orbiting electron के momentum से सीधे जोड़ता है।`,
    whyItMatters: `Electron diffraction और quantum chemistry scattering को नियंत्रित करता है।`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'परमाण्वीय इकाई — बल',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atomic',
    description: 'Bohr radius पर electron और proton के बीच electrostatic force।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²)। Atomic scales के लिए enormous (82 nN) परन्तु मानव के लिए imperceptible।`,
    simpleExample: `Atomic stability की मूल बात: इस force और quantum pressure का संतुलन।`,
    deepMeaning: `Atoms को एक साथ रखने वाले "गोंद" की तीव्रता की scale निर्धारित करता है।`,
    whyItMatters: `Atomic bonding और material strength को नियंत्रित करता है।`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'परमाण्वीय इकाई — विद्युत क्षेत्र',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atomic',
    description: 'hydrogen में electron द्वारा अनुभव किया जाने वाला अत्यन्त तीव्र field।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Bohr radius पर electric field (514 GV/m)।`,
    simpleExample: `Atomic fields, हवा के breakdown field से ~100,000 गुना अधिक शक्तिशाली हैं।`,
    deepMeaning: `~10¹⁴ W/cm² से ऊपर की intensities पर, laser fields इतने शक्तिशाली होते हैं कि atoms से electrons को छीन सकते हैं, जिससे attosecond pulses उत्पन्न होती हैं।`,
    whyItMatters: `Strong-field laser physics और field ionisation के लिए baseline।`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'परमाण्वीय इकाई — चुम्बकीय फ्लक्स घनत्व',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atomic',
    description: 'एक atomic unit के अनुरूप magnetic field strength।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — किसी भी laboratory magnet (~45 T) से बहुत अधिक शक्तिशाली।`,
    simpleExample: `Neutron star के magnetic fields ~10⁸-10¹¹ Tesla तक पहुँचते हैं — atomic unit से अधिक।`,
    deepMeaning: `इस scale पर, photon propagation पर QED effects (vacuum birefringence) महत्त्वपूर्ण हो जाते हैं।`,
    whyItMatters: `White dwarfs और magnetars को समझने के लिए महत्त्वपूर्ण।`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'परमाण्वीय इकाई — विद्युतशीलता',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atomic',
    description: 'atomic units में scaled vacuum permittivity — 4πε₀।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `Atomic units में, Coulomb force law सरल रूप से F = q₁q₂/r² हो जाता है।`,
    simpleExample: `Quantum chemistry code में सभी electrostatic mathematics को सरल बनाता है।`,
    deepMeaning: `Primary simplifications में से एक जो calculations से 4πε₀ factor को हटाती है।`,
    whyItMatters: `Theoretical physics में standard normalization।`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'परमाण्वीय इकाई — चुम्बकन क्षमता',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomic',
    description: 'magnetic field के प्रति किसी atom की energy की second-order response।',
    discoveredBy: 'व्युत्पन्न राशि',
    formula: '1 a.u.',
    whatItSays: `NMR chemical shifts और magnetic force measurements द्वारा मापा जाता है।`,
    simpleExample: `MRI-scale magnetic fields के प्रति molecules की प्रतिक्रिया की गणना में उपयोग होता है।`,
    deepMeaning: `Quantum level पर molecular magnetic susceptibilities के अध्ययन में मूलभूत राशि।`,
    whyItMatters: `NMR spectroscopy और quantum chemistry simulations में उपयोगी।`
  }

];
