// =============================================================================
// constantsData.te.js — భౌతిక స్థిరాంకాల డేటాబేస్ (తెలుగు అనువాదం)
// i18n (Internationalization) Files — Manual Version
// మూలం: CODATA 2022 | లోతైన వివరణలు: Phyansy Reference Guide
//
// అనువాద నియమాలు:
//   1. Velocity, mass, frequency వంటి భౌతికశాస్త్ర పారిభాషిక పదాలు ఇంగ్లీషులోనే ఉంచబడ్డాయి.
//   2. Oppenheimer, Planck, Boltzmann వంటి శాస్త్రవేత్తల పేర్లు ఇంగ్లీషులోనే ఉంచబడ్డాయి.
//   3. సంఖ్యలు, సమీకరణాలు, symbols అన్నీ అసలు రూపంలోనే ఉన్నాయి.
//   4. వాక్య నిర్మాణం సహజమైన, మానక తెలుగులో ఉంది.
// =============================================================================

export const CONSTANTS_TE = [

  // ── భాగం 1: విశ్వజనీన / నిర్వచన స్థిరాంకాలు ─────────────────────────────

  {
    symbol: 'c',
    name: 'శూన్యంలో కాంతి వేగం',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'కారణత్వం యొక్క మూలభూత speed limit.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `కాంతి, పరిపూర్ణమైన vacuum లో సరిగ్గా ఒక సెకనులో 299,792,458 మీటర్లు ప్రయాణిస్తుంది. ఇది కొలిచిన అంచనా కాదు — 1983 నుండి, metre అనే కొలత ప్రమాణమే ఈ సంఖ్యతో నిర్వచించబడింది. కాబట్టి c అనేది అంతర్జాతీయ నిర్వచనం ప్రకారం ఖచ్చితమైన పూర్ణాంకం.`,
    simpleExample: `చంద్రుని నుండి కాంతి మీ కంటికి చేరుకోవడానికి సుమారు 1.28 సెకన్లు పడుతుంది. సూర్యుని నుండి కాంతి రావడానికి సుమారు 8 నిమిషాలు 20 సెకన్లు పడుతుంది. అతి సమీపంలో ఉన్న నక్షత్రం Proxima Centauri 4.24 కాంతి-సంవత్సరాల దూరంలో ఉంది — అంటే కాంతి ఆ దూరం దాటడానికి 4.24 సంవత్సరాలు పడుతుంది.`,
    deepMeaning: `c అనేది కేవలం "కాంతి ఎంత వేగంగా కదులుతుందో" అని కాదు. ఇది కారణత్వం యొక్క మూలభూత speed limit — విశ్వంలో ఏ సమాచారం, శక్తి, లేదా కారణ ప్రభావం వ్యాపించగల గరిష్ట రేటు. Einstein యొక్క Special Relativity ప్రకారం, c అన్ని పరిశీలకులకు వారి motion తో సంబంధం లేకుండా సమానంగా ఉంటుంది. ఇది Newton యొక్క పరమ కాలం అనే భావనను పూర్తిగా నిరాకరిస్తుంది. E = mc² అంటే mass మరియు energy ఒకే విషయం — వాటి మధ్య c² అనే conversion factor మాత్రమే తేడా.`,
    whyItMatters: `c లేనిదే Special Relativity లేదు, E = mc² లేదు, GPS correction లేదు, నక్షత్రాలు లేదా particle physics అర్థం కాదు. ఇది ఆధునిక physics యొక్క వెన్నెముక.`
  },

  {
    symbol: 'h',
    name: 'Planck స్థిరాంకం',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'విద్యుదయస్కాంత చర్య యొక్క quantum — photon ల energy ను నిర్ణయిస్తుంది.',
    discoveredBy: 'Max Planck (1900) · Nobel బహుమతి 1918',
    formula: 'E = hf',
    whatItSays: `Energy, quanta అనే విడతల రూపంలో వస్తుంది. విద్యుదయస్కాంత వికిరణం యొక్క ఒక్కొక్క quantum — అంటే photon — యొక్క energy E = hf, ఇక్కడ f అనేది వికిరణం యొక్క frequency. h అనేది frequency (తరంగ లక్షణం) ను energy (కణ లక్షణం) తో జోడించే proportionality constant.`,
    simpleExample: `కనిపించే ఎరుపు కాంతికి frequency సుమారు 4.3 × 10¹⁴ Hz. ఒక ఎరుపు కాంతి photon యొక్క energy: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV. ఈ చిన్న energy మీ కంటిలో ఒక rhodopsin అణువును ప్రేరేపించడానికి సరిపోతుంది — దృష్టి అనే ప్రక్రియ ఇక్కడ మొదలవుతుంది.`,
    deepMeaning: `Planck కాలానికి ముందు, classical physics ప్రకారం వేడి వస్తువు అధిక frequencies వద్ద అనంతమైన energy వికిరించాలని అంచనా వేసింది — దీన్ని "ultraviolet catastrophe" అంటారు. 1900లో Max Planck ఈ సమస్యను energy నిరంతరంగా కాదు, వివిక్తంగా ఉంటుందని భావించడం ద్వారా పరిష్కరించాడు. Einstein దీన్ని photoelectric effect వివరించడానికి ఉపయోగించాడు. ħ = h/2π అనేది commutator [x̂, p̂] = iħ లో కనిపిస్తుంది — quantum mechanics యొక్క గాఢమైన గణిత హృదయం — మరియు Heisenberg Uncertainty Principle లో: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h అనేది quantum ప్రపంచం మరియు classical ప్రపంచం మధ్య సరిహద్దు. h లేనిదే atoms కుప్పకూలేవి, chemistry ఉండేది కాదు, మనకు తెలిసిన విశ్వమే ఉండేది కాదు.`
  },

  {
    symbol: 'ħ',
    name: 'తగ్గించిన Planck స్థిరాంకం',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'h/2π — quantum mechanics లో angular momentum యొక్క సహజ ప్రమాణం.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ ("h-bar" అని పలుకుతారు) అనేది h ని 2π తో భాగిస్తే వచ్చే విలువ. సాధారణ frequency f (cycles per second) కు బదులు angular frequency ω (radians per second) వాడినప్పుడు ఇది కనిపిస్తుంది, ఎందుకంటే ω = 2πf.`,
    simpleExample: `ఒక electron యొక్క spin ħ/2. ఒక photon యొక్క spin ħ. Orbital angular momentum ఎల్లప్పుడూ ħ యొక్క పూర్ణాంక గుణిజాలుగా ఉంటుంది — కాబట్టి ħ అనేది rotation యొక్క అతి చిన్న ప్రమాణం.`,
    deepMeaning: `quantum mechanics లో ħ కేవలం సులభమైన సంక్షిప్తం కాదు. ఇది angular momentum యొక్క మూలభూత quantum. Quantum field theory లో ħ, quantum fluctuations యొక్క పరిమాణాన్ని నియంత్రిస్తుంది. ħ → 0 గా తీసుకుంటే classical field theory వస్తుంది. Commutation relations, path integrals, uncertainty principles వంటి quantum mechanics యొక్క మొత్తం నిర్మాణం ħ చేత నిర్ణయించబడుతుంది.`,
    whyItMatters: `Particle physicists వాడే natural units లో ħ = c = 1, ఇది సమీకరణాలను చాలా సులభం చేస్తుంది మరియు సిద్ధాంతాల లోతైన గణిత నిర్మాణాన్ని వెల్లడిస్తుంది.`
  },

  {
    symbol: 'e',
    name: 'మూలభూత విద్యుదావేశం',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (ఖచ్చితమైన విలువ)',
    category: 'విద్యుదయస్కాంత',
    description: 'స్వతంత్రంగా ఉండే అతి చిన్న electric charge — charge వివిక్తంగా ఉంటుంది.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `ఇది ఒక్కొక్క proton (ధనాత్మకం) లేదా ఒక్కొక్క electron (ఋణాత్మకం) వహించే electric charge యొక్క పరిమాణం. ప్రకృతిలో కనిపించే మొత్తం electric charge e యొక్క పూర్ణాంక గుణిజంగా ఉంటుంది. అంటే charge వివిక్తంగా ఉంటుంది.`,
    simpleExample: `1 ampere current అంటే 1 సెకనుకు 1 coulomb charge ఒక బిందువు దాటి ప్రవహించడం. ప్రతి electron 1.602 × 10⁻¹⁹ C వహిస్తున్నందున, 1 A current కు సుమారు 6.24 × 10¹⁸ electrons ప్రతి సెకను దాటుతాయి.`,
    deepMeaning: `Charge యొక్క వివిక్తతను Robert Millikan తన ప్రసిద్ధమైన oil-drop experiment ద్వారా నిరూపించాడు. అతను ఒక electric field లో వేలాడుతున్న నూనె చినుకులపై charge ని కొలిచి, అన్ని charges e యొక్క పూర్ణాంక గుణిజాలు అని కనుగొన్నాడు. Fine-structure constant α ≈ 1/137 అనేది విద్యుదయస్కాంత force యొక్క strength యొక్క dimensionless కొలత. Quarks e/3 మరియు 2e/3 charges వహిస్తాయి, కానీ అవి hadrons లో శాశ్వతంగా బంధింపబడి ఉంటాయి.`,
    whyItMatters: `e అన్ని atomic మరియు molecular interactions యొక్క scale ను నిర్ణయిస్తుంది. Chemistry, biology, electronics మరియు materials science అన్నీ e విలువపై ఆధారపడతాయి.`
  },

  {
    symbol: 'k',
    name: 'Boltzmann స్థిరాంకం',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (ఖచ్చితమైన విలువ)',
    category: 'ఉష్ణగతిక',
    description: 'Temperature మరియు kinetic energy మధ్య వారధి — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (kB అని కూడా రాస్తారు) అనేది వ్యక్తిగత కణాల సూక్ష్మ ప్రపంచానికి మరియు temperature యొక్క స్థూల ప్రపంచానికి మధ్య వారధి. ఇది temperature — ఒక సమూహం యొక్క గణాంక లక్షణం — ను కణం వారీగా energy గా మారుస్తుంది. ప్రతి degree of freedom సగటు kinetic energy (1/2)kT అందిస్తుంది.`,
    simpleExample: `గది temperature (T = 293 K) వద్ద: kT ≈ 0.0253 eV. ఇది గది temperature వద్ద చారిత్రక thermal energy scale. Chemical bond energies కొన్ని eV ఉంటాయి, కాబట్టి గది temperature వద్ద thermal energy చాలా తక్కువగా ఉంటుంది — దీనివల్లనే చాలా chemical bonds స్థిరంగా ఉంటాయి.`,
    deepMeaning: `Temperature అనేది మూలభూత రాశి కాదు — ఇది కణాల సగటు kinetic energy యొక్క కొలత. S = k ln(Ω) entropy ని information మరియు probability పరంగా నిర్వచిస్తుంది. Temperature T వద్ద energy E స్థితిలో వ్యవస్థ ఉండే probability: P(E) ∝ e^(−E/kT). ఈ exponential factor — Boltzmann factor — chemical reaction rates నుండి Earth వాతావరణంలో అణువుల పంపిణీ వరకు అన్నింటినీ నిర్ణయిస్తుంది.`,
    whyItMatters: `k అనేది thermodynamics మరియు statistical mechanics యొక్క పునాది. 2019 నుండి, k ఖచ్చితంగా నిర్వచించబడిన స్థిరాంకం, మరియు kelvin దాని ద్వారా నిర్వచించబడింది.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro స్థిరాంకం',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (ఖచ్చితమైన విలువ)',
    category: 'ఉష్ణగతిక',
    description: 'ఒక mole లో ఉన్న కణాల సంఖ్య — atomic మరియు మానవ స్థాయిల మధ్య వారధి.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `ఏ పదార్థం యొక్క ఒక mole లోనైనా సరిగ్గా 6.022 140 76 × 10²³ మూలభూత కణాలు (atoms, molecules, ions మొ.) ఉంటాయి. ఈ సంఖ్య atomic స్థాయికి మరియు మానవ స్థాయికి మధ్య వారధి.`,
    simpleExample: `12 గ్రాముల carbon-12 లో సరిగ్గా ఒక mole carbon atoms ఉంటాయి. ఇది అర్థం చేసుకోవడం కష్టమైన పెద్ద సంఖ్య: మీకు ఒక mole ఇసుక గింజలు ఉంటే, అవి Earth ఉపరితలాన్ని చాలా కిలోమీటర్ల లోతులో కప్పివేస్తాయి.`,
    deepMeaning: `NA atomic mass unit ను grams కు అనుసంధానిస్తుంది. 1 u = 1 gram / NA = 1.660 539 × 10⁻²⁷ kg. Molar gas constant R = NA × k = 8.314 J mol⁻¹ K⁻¹. Faraday constant F = NAe = 96,485 C/mol అనేది ఒక mole electrons యొక్క charge. Jean Perrin 1908లో Brownian motion కొలతల ద్వారా atoms ఉనికిని నిరూపించాడు.`,
    whyItMatters: `NA chemistry ను పరిమాణాత్మకంగా చేస్తుంది. ఇది chemists కు atoms ను వారి weight కొలవడం ద్వారా లెక్కించడానికి వీలు కల్పిస్తుంది. ప్రతి stoichiometric calculation, ప్రతి pharmaceutical dosage, ప్రతి materials science calculation NA పై ఆధారపడతాయి.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Luminous Efficacy',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'candela ని నిర్వచిస్తుంది — మానవ జీవశాస్త్రంతో అనుసంధానమైన ఏకైక SI స్థిరాంకం.',
    discoveredBy: 'అంతర్జాతీయ నిర్వచనం (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `540 × 10¹² Hz (ఆకుపచ్చ కాంతి, తరంగ దైర్ఘ్యం ≈ 555 nm) వద్ద — పగటి పరిస్థితులలో మానవ కన్ను అత్యంత సంవేదనగలిగే frequency — 1 watt radiant power కు సరిగ్గా 683 lumens luminous flux కనిపిస్తుంది.`,
    simpleExample: `1 watt స్వచ్ఛమైన ఆకుపచ్చ కాంతి విడుదల చేసే source నుండి సరిగ్గా 683 lumens కనిపించే ప్రకాశం వస్తుంది. ఏ ఇతర రంగు తక్కువ lumens per watt అందిస్తుంది, ఎందుకంటే కన్ను వాటికి తక్కువ సంవేదనగలదు.`,
    deepMeaning: `ఈ స్థిరాంకం SI వ్యవస్థలో మానవ జీవశాస్త్రంపై ఆధారపడిన ఏకైక స్థిరాంకం — నిర్దిష్టంగా మానవ కన్ను యొక్క spectral sensitivity పై. 2019 నుండి candela, Kcd ని సరిగ్గా 683 lm/W గా నిర్ణయించడం ద్వారా నిర్వచించబడింది.`,
    whyItMatters: `Photometry, lighting engineering మరియు అన్ని optical system design లకు అవసరమైనది. ప్రతి electric bulb పై ఉన్న lumen specification ఈ స్థిరాంకం నుండి వస్తుంది.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium Hyperfine Frequency',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'second ని నిర్వచిస్తుంది — ఆధునిక కాల పరిమాణం యొక్క హృదయ స్పందన.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `Caesium-133 atom యొక్క ground state లో రెండు hyperfine స్థాయులు ఉంటాయి — electron యొక్క magnetic moment మరియు nuclear magnetic moment మధ్య చర్య వల్ల విభజించబడతాయి. atom ఈ రెండు స్థాయుల మధ్య మారినప్పుడు, అది సరిగ్గా 9,192,631,770 Hz వద్ద వికిరణం విడుదల చేస్తుంది లేదా గ్రహిస్తుంది.`,
    simpleExample: `1967 నుండి, ఒక second అంటే ఈ వికిరణం యొక్క సరిగ్గా 9,192,631,770 oscillation cycles. Caesium atomic clocks ఇప్పటివరకు నిర్మించిన అత్యంత ఖచ్చితమైన కాల పరికరాలు — 300 మిలియన్ సంవత్సరాలలో ఒక్క second కూడా తప్పు చెప్పవు.`,
    deepMeaning: `ఈ hyperfine splitting quantum electrodynamics నుండి వస్తుంది — electron యొక్క magnetic dipole moment మరియు nuclear spin వల్ల ఏర్పడిన magnetic field మధ్య చర్య. GPS, internet, ఆర్థిక వ్యవస్థలు మరియు అన్ని ఆధునిక telecommunications caesium atomic clock ప్రమాణాలపై నేరుగా ఆధారపడతాయి.`,
    whyItMatters: `సమస్త శాస్త్రంలో అత్యంత ఖచ్చితమైన కొలత. GPS, internet synchronization, ఆర్థిక వ్యాపారం, 5G networks అన్నీ ఈ స్థిరాంకంపై ఆధారపడతాయి.`
  },

  // ── భాగం 2: విద్యుదయస్కాంత స్థిరాంకాలు ─────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'శూన్యం యొక్క Electric Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'విద్యుదయస్కాంత',
    description: 'Vacuum లో electric fields ఎంత సులభంగా వ్యాపిస్తాయో కొలుస్తుంది.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-naught) vacuum లో electric field ఎంత సులభంగా వ్యాపించగలదో కొలుస్తుంది. Coulomb నియమంలో — రెండు point charges మధ్య force: F = (1/4πε₀) × (q₁q₂/r²). ε₀ పెద్దగా ఉంటే, ఇచ్చిన charges మరియు దూరానికి electrostatic force తక్కువగా ఉంటుంది.`,
    simpleExample: `నీటికి relative permittivity εr ≈ 80, అంటే నీరు vacuum తో పోల్చినప్పుడు charges మధ్య electrostatic forces ను 80 రెట్లు తగ్గిస్తుంది — దీనివల్లనే నీరు ionic compounds కి అద్భుతమైన solvent.`,
    deepMeaning: `ε₀ స్వతంత్రంగా నిర్వచించబడదు — ఇది c మరియు μ₀ నిర్వచిత విలువల నుండి పొందబడుతుంది: ε₀ = 1/(μ₀c²). Gauss నియమంలో: ∮ E · dA = Q_enc/ε₀. ఇది electric field లో నిల్వ అయిన electromagnetic energy density యొక్క scale ను కూడా నిర్ణయిస్తుంది: u_E = (1/2)ε₀E².`,
    whyItMatters: `Maxwell యొక్క నాలుగు equations అన్నిటిలో కనిపిస్తుంది. ε₀ లేనిదే పరిమాణాత్మక electrostatics లేదు, capacitor design లేదు, dielectrics అర్థం కావు.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'శూన్యం యొక్క Magnetic Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'విద్యుదయస్కాంత',
    description: 'Vacuum లో magnetic fields ఎంత సులభంగా వ్యాపిస్తాయో కొలుస్తుంది.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-naught) vacuum లో magnetic field ఎంత సులభంగా వ్యాపించగలదో కొలుస్తుంది. ఇది Biot-Savart నియమంలో మరియు Ampère నియమంలో కనిపిస్తుంది. ప్రవాహాలు I₁ మరియు I₂ వహించే, d దూరంలో ఉన్న రెండు సమాంతర తీగల మధ్య unit length కి force: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `ఇనుమునకు relative permeability μr ~10,000 వరకు ఉంటుంది — ఇనుము vacuum తో పోల్చి magnetic fields ని చాలా రెట్లు కేంద్రీకరిస్తుంది. అందుకే transformer cores ఇనుముతో తయారవుతాయి.`,
    deepMeaning: `2019 SI redefinition కి ముందు, μ₀ అనేది నిర్వచనం ప్రకారం సరిగ్గా 4π × 10⁻⁷ N/A². ఇప్పుడు ఇది కొలవబడిన రాశి. μ₀, Maxwell correction తో కూడిన Ampère నియమంలో కనిపిస్తుంది: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). రెండవ పదం — Maxwell's displacement current — vacuum లో electromagnetic waves ఉండేందుకు వీలు కల్పించింది మరియు కాంతి ఒక electromagnetic wave అనే నేరుగా prediction కు దారితీసింది.`,
    whyItMatters: `μ₀ లేనిదే magnetic fields లేవు, electromagnetic induction లేదు, electric motors లేవు, transformers లేవు, radio waves లేవు.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Vacuum యొక్క Characteristic Impedance',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'విద్యుదయస్కాంత',
    description: 'Vacuum లో electromagnetic wave లో electric మరియు magnetic field నిష్పత్తి.',
    discoveredBy: 'Maxwell సమీకరణాల నుండి పొందబడింది',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `ఒక electromagnetic wave vacuum లో వ్యాప్తి చెందినప్పుడు, electric field amplitude మరియు magnetic field amplitude నిష్పత్తి: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `ఒక antenna దాని impedance 377 Ω తో సరిపోయినప్పుడు సమర్థంగా వికిరిస్తుంది. Unit area కి వికిరించే power (Poynting vector) S = E²/Z₀. ఇది dipole antennas నుండి satellite dishes వరకు అన్నింటినీ design చేయడానికి ఉపయోగపడుతుంది.`,
    deepMeaning: `Z₀ అనేది free space యొక్క impedance — propagating electromagnetic wave లో unit magnetic field కి ఎంత electric field వస్తుందో చెప్తుంది. ఇది transmission line యొక్క characteristic impedance కి అనాలాగ్. Earth కి చేరే సూర్యప్రకాశం √(1361 × Z₀) ≈ 716 V/m electric field amplitude కి సమానం.`,
    whyItMatters: `Antenna design, radar cross-sections, antenna gain మరియు అన్ని wireless communication link budgets కు అవసరమైనది.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson స్థిరాంకం',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'విద్యుదయస్కాంత',
    description: 'Superconducting Josephson junctions లో voltage ను frequency కు అనుసంధానిస్తుంది.',
    discoveredBy: 'Brian Josephson (1962) · Nobel బహుమతి 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson constant, AC Josephson effect లో voltage ను frequency తో అనుసంధానిస్తుంది. Josephson junction అంటే రెండు superconductors మధ్య సన్నటి insulating barrier — దానికి DC voltage V వేసినప్పుడు, frequency f = 2eV/h తో alternating current వస్తుంది.`,
    simpleExample: `Josephson junction కి 1 millivolt voltage వేస్తే ~483.6 GHz వద్ద AC oscillation వస్తుంది — microwave range లో. ఇది 10¹⁰ లో ఒక భాగం ఖచ్చితత్వంతో voltage standards నిర్వచించడానికి ఉపయోగపడుతుంది.`,
    deepMeaning: `2 అనే factor superconductivity లో Cooper pairs — 2e charge ఉన్న electron జంటలు — వల్ల వస్తుంది. AC Josephson effect, superconductors లో quantum mechanics macroscopic స్థాయిలో పనిచేస్తుందనే విషయాన్ని అద్భుతంగా నిరూపిస్తుంది.`,
    whyItMatters: `ప్రపంచవ్యాప్తంగా వాడే primary voltage standard. అత్యంత ఖచ్చితమైన electrical measurement. Quantum metrology మరియు superconducting quantum computing కు మూలభూతం.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing స్థిరాంకం',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'విద్యుదయస్కాంత',
    description: 'Electrical resistance యొక్క quantum — h/e² — quantum Hall effect నుండి.',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel బహుమతి 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² అనేది resistance యొక్క quantum. Quantum Hall effect లో కనిపిస్తుంది: తక్కువ temperature లో బలమైన perpendicular magnetic field లో ఒక 2D electron gas ఉంచినప్పుడు, Hall resistance RH = RK/n గా quantized అవుతుంది.`,
    simpleExample: `ఈ quantization చాలా ఖచ్చితంగా ఉంటుంది కాబట్టి RK primary resistance standard గా వాడబడుతుంది. ~1 K వద్ద ~10 Tesla fields లో silicon chips, 1 part per billion కంటే ఖచ్చితంగా RK/2 = 12,906 Ω ని పునరుత్పత్తి చేస్తాయి.`,
    deepMeaning: `Quantization అనేది topological మూలం నుండి వస్తుంది — ఇది material, sample geometry లేదా ఏ adjustable parameters పై ఆధారపడదు. ఇది కొలత ఖచ్చితత్వం పరిమితి వరకు ఖచ్చితంగా ఉంటుంది. Fractional quantum Hall effect (1982) మరింత exotic quantization ను చూపిస్తుంది.`,
    whyItMatters: `ప్రపంచవ్యాప్తంగా primary resistance standard. Condensed matter physics లో topology ని అర్థం చేసుకోవడానికి ద్వారం.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Magnetic Flux Quantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'విద్యుదయస్కాంత',
    description: 'Superconducting loops లో magnetic flux యొక్క quantum — h/(2e).',
    discoveredBy: 'London & Onsager (సిద్ధాంతం) · Doll & Näbauer (1961, నిరూపించారు)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `Superconducting loop ద్వారా magnetic flux, Φ₀ యొక్క పూర్ణాంక గుణిజాల రూపంలో quantized అవుతుంది. ఒక superconducting ring లో trap అయ్యే magnetic flux h/(2e) యొక్క integer multiples మాత్రమే.`,
    simpleExample: `SQUID (Superconducting Quantum Interference Device) 10⁻⁶ Φ₀ అంత చిన్న magnetic flux మార్పులను గుర్తించగలదు — ఇది ~10⁻¹⁸ Tesla magnetic field మార్పుకు సమానం. ఇది మెదడు imaging (MEG) కు ఉపయోగపడుతుంది.`,
    deepMeaning: `Magnetic flux యొక్క quantization అనేది quantum mechanics యొక్క ప్రత్యక్ష macroscopic వ్యక్తీకరణ. SQUIDs అసాధారణ sensitivity తో magnetic fields ను కొలవడానికి Φ₀ ని ఉపయోగిస్తాయి — ఇప్పటివరకు నిర్మించిన అత్యంత సంవేదనగల magnetic sensors.`,
    whyItMatters: `SQUID technology, magnetoencephalography, quantum mechanics యొక్క మూలభూత పరీక్షలు మరియు superconducting quantum computing కు పునాది.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance Quantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'విద్యుదయస్కాంత',
    description: 'Electrical conductance యొక్క మూలభూత ప్రమాణం — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `Electrons ఒక పరిపూర్ణమైన, single-channel quantum conductor ద్వారా ప్రవహించినప్పుడు (ఒక atom వెడల్పున్న నానో తీగ వంటిది), conductance సరిగ్గా G₀ = 2e²/h per channel. Resistance = 1/G₀ = h/(2e²) ≈ 12,906 Ω.`,
    simpleExample: `ఒక atom వెడల్పుకు సాగదీసిన gold nanowire conductance సుమారు G₀ ఉంటుంది. ఇది experimentally చాలా ఖచ్చితంగా కొలవబడింది. రెండు-atom వెడల్పు తీగ conductance ~2G₀.`,
    deepMeaning: `Classical resistance sample geometry, material మరియు impurities పై ఆధారపడుతుంది. కానీ quantum స్థాయిలో, పరిపూర్ణ conductor కూడా resistance కలిగి ఉంటుంది — conductor మరియు దాని leads మధ్య propagating modes యొక్క quantum mechanical matching వల్ల. Landauer formula: G = G₀ × Σ T, ఇక్కడ T అనేది individual quantum channels యొక్క transmission probabilities.`,
    whyItMatters: `Mesoscopic physics మరియు nanoelectronics కు పునాది. Molecular junctions, carbon nanotubes మరియు quantum dots ద్వారా electron transport ని నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'F',
    name: 'Faraday స్థిరాంకం',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'విద్యుదయస్కాంత',
    description: 'ఒక mole electrons యొక్క charge — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday constant అనేది ఒక mole మూలభూత charges యొక్క charge — ఒక mole electrons లేదా ఒక mole protons. Electrochemistry లో, ఒక mole monovalent ion ని జమ చేయడానికి లేదా కరగించడానికి ఎంత charge అవసరమో ఇది నిర్ణయిస్తుంది.`,
    simpleExample: `CuSO₄ solution నుండి 1 mole copper (63.5 g) ని electroplate చేయడానికి 2F = 192,970 C charge కావాలి (copper divalent, Cu²⁺ + 2e⁻ → Cu). అందుకే thick layer electroplating కి పెద్ద currents అవసరం.`,
    deepMeaning: `Faraday ఎలక్ట్రోలైసిస్ నియమాలు (1833-1834): electrode వద్ద జమ అయ్యే పదార్థం యొక్క mass, పంపిన charge కి అనులోమానుపాతంలో ఉంటుంది. Faraday ఈ సంబంధాన్ని electrons గురించి లేదా atoms గురించి తెలియకుండానే అనుభవపూర్వకంగా నిర్ణయించాడు.`,
    whyItMatters: `మొత్తం electrochemistry కు పునాది. ప్రతి lithium-ion battery, ప్రతి electroplating process, ప్రతి electrolytic metal refining ఈ స్థిరాంకంపై ఆధారపడుతుంది.`
  },

  // ── భాగం 3: Atomic & Nuclear స్థిరాంకాలు ────────────────────────────────

  {
    symbol: 'α',
    name: 'Fine-Structure స్థిరాంకం',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'dimensionless',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atomic',
    description: 'విద్యుదయస్కాంత force యొక్క dimensionless coupling constant.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α అనేది విద్యుదయస్కాంత interaction యొక్క dimensionless coupling constant. ఇది charged particles మధ్య విద్యుదయస్కాంత force యొక్క strength ను కొలుస్తుంది — నిర్దిష్టంగా, ఒక charged particle ఒక photon ని విడుదల చేయడం లేదా గ్రహించడం యొక్క probability amplitude.`,
    simpleExample: `QED లో, ఒక electron ఒక photon విడుదల చేసే probability α కి అనులోమానుపాతంలో ఉంటుంది. α ≈ 1/137, కాబట్టి ప్రతి అదనపు photon vertex probability ని ~1/137 కారకంతో తగ్గిస్తుంది — అందుకే QED కి Feynman diagrams శీఘ్రంగా converge అవుతాయి.`,
    deepMeaning: `α physics లో అత్యంత మర్మభూతమైన సంఖ్యల్లో ఒకటి. ఇది పూర్తిగా dimensionless — దీనికి ఏ units లేవు మరియు ఉపయోగించే units వ్యవస్థతో సంబంధం లేకుండా అదే విలువ ఉంటుంది. ఇది e (electromagnetism), ε₀ (electrostatics), ħ (quantum mechanics) మరియు c (relativity) ని మిళితం చేస్తుంది. Richard Feynman దీన్ని "physics యొక్క అతి పెద్ద మర్మాల్లో ఒకటి" అన్నాడు. Low energies వద్ద: α ≈ 1/137. Z boson mass scale వద్ద: α ≈ 1/128.`,
    whyItMatters: `α అన్ని atomic physics, chemistry మరియు molecular biology ను నియంత్రిస్తుంది. Atoms పరిమాణం, chemical bonds యొక్క strength, అన్ని మూలకాల absorption మరియు emission spectra — అన్నీ α చేత నిర్ణయించబడతాయి.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg స్థిరాంకం',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atomic',
    description: 'హైడ్రోజన్ యొక్క అన్ని spectral lines వెలుతురు తరంగ దైర్ఘ్యాలను నిర్ణయిస్తుంది.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg constant హైడ్రోజన్ లో spectral lines యొక్క wavenumbers (inverse wavelengths) ఇస్తుంది. హైడ్రోజన్ యొక్క అన్ని spectral lines వెలుతురు తరంగ దైర్ఘ్యాలు Rydberg formula ద్వారా ఇవ్వబడతాయి: 1/λ = R∞ × (1/n₁² − 1/n₂²), ఇక్కడ n₁ మరియు n₂ n₂ > n₁ తో ధన పూర్ణాంకాలు.`,
    simpleExample: `Lyman series (ground state కి transitions) కి, మొదటి రేఖ (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121.6 nm (ultraviolet — Lyman-alpha line). ఇది astrophysics లో అత్యంత ముఖ్యమైన spectral line — విశ్వంలో హైడ్రోజన్ ను గుర్తించడానికి మరియు redshift ద్వారా అంతరిక్షం వ్యాప్తి కొలవడానికి ఉపయోగపడుతుంది.`,
    deepMeaning: `R∞ సైద్ధాంతికంగా మరింత మూలభూత స్థిరాంకాల నుండి పొందబడుతుంది: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). హైడ్రోజన్ atom యొక్క binding energy: En = −Ry/n² = −13.6 eV/n².`,
    whyItMatters: `Bohr కు quantum atom కు దారితీసిన ప్రారంభ బిందువు. 12 significant figures కు తెలిసిన అత్యంత ఖచ్చితమైన atomic constant, ఇది several parts per trillion స్థాయిలో QED పరీక్షలను అనుమతిస్తుంది.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Atoms యొక్క సహజ పరిమాణ scale — హైడ్రోజన్ లో electron-proton మధ్య అత్యంత ఎక్కువ probability దూరం.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ అనేది ground state (n = 1) లో హైడ్రోజన్ atom లో electron మరియు proton మధ్య అత్యంత ఎక్కువ probability దూరం. ఇది atoms యొక్క characteristic పరిమాణ scale నిర్ణయిస్తుంది. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom). ఇది హైడ్రోజన్ atom యొక్క సాధారణ పరిమాణం. చాలా atoms కు radii a₀ కంటే కొన్ని రెట్లు ఉంటాయి. Diamond లో C-C bond length ~2.9a₀. DNA helix diameter ~40Å ≈ 75a₀.`,
    deepMeaning: `Bohr radius, electron యొక్క kinetic energy (quantum mechanical — uncertainty principle వల్ల nucleus కి కూలిపోకుండా spread out అవ్వాలని) మరియు Coulomb potential energy (nucleus వైపు లాగడం) మధ్య సమతుల్యత నుండి ఏర్పడుతుంది. Higher orbitals radii ~ n²a₀.`,
    whyItMatters: `Chemistry మరియు materials science యొక్క మూలభూత length scale నిర్వచిస్తుంది. హైడ్రోజన్ atom పరిమాణం పదార్థం యొక్క density ని నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atomic',
    description: 'Atomic physics లో సహజ energy ప్రమాణం — హైడ్రోజన్ యొక్క ionization energy కి రెట్టింపు.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree energy అనేది హైడ్రోజన్ ను ground state నుండి ionize చేయడానికి అవసరమైన energy కి రెట్టింపు. ఇది atomic physics లో సహజ energy ప్రమాణం: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `హైడ్రోజన్ ground state energy −(1/2)Eh = −13.6 eV. Typical chemical bond energies ~0.1–0.2 Eh (3–5 eV). C-H bond ~0.16 Eh. ఈ సంఖ్యలు atomic units లో order-unity గా ఉంటాయి — quantum chemistry కి అనుకూలం.`,
    deepMeaning: `Atomic units లో (ħ = me = e = a₀ = 1 అని నిర్ణయించినప్పుడు), Eh = 1. Atomic units హైడ్రోజన్ కి Schrödinger equation ను −(1/2)∇²ψ − (1/r)ψ = Eψ గా సులభం చేస్తాయి. DFT, Hartree-Fock వంటి computational chemistry codes దాదాపు అన్నీ internally atomic units లో పనిచేస్తాయి.`,
    whyItMatters: `Quantum chemistry యొక్క workhorse unit. ప్రతి DFT calculation, molecular dynamics simulation మరియు quantum chemistry result అంతిమంగా Hartree energy కి trace back అవుతుంది.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atomic',
    description: 'Electron magnetic moment యొక్క సహజ ప్రమాణం — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB అనేది electrons కి magnetic moment యొక్క సహజ ప్రమాణం. ఇది ħ angular momentum వల్ల ఒక electron యొక్క magnetic moment ను సూచిస్తుంది.`,
    simpleExample: `1 Tesla MRI magnetic field లో, electron spin-up మరియు spin-down states మధ్య Zeeman splitting 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV — microwave frequencies కి సమానం. అందుకే ESR microwaves వాడుతుంది, NMR radiofrequency వాడుతుంది.`,
    deepMeaning: `Electron యొక్క spin magnetic moment సుమారు μB (ఖచ్చితంగా, ge × μB/2, ఇక్కడ ge ≈ 2.002, QED corrections వల్ల). Zeeman effect — magnetic field లో atomic spectral lines విభజన — μB చేత నిర్ణయించబడుతుంది: ΔE = ml × μB × B. Electron Spin Resonance (ESR) μB నిర్ణయిస్తుంది. Theory మరియు experiment మధ్య 12 decimal places వరకు అంగీకారం — science లో అత్యంత ఖచ్చితంగా లెక్కించబడిన రాశి.`,
    whyItMatters: `Electron spin resonance, magnetic materials మరియు అన్ని magneto-optical effects కు పునాది. Spintronics మరియు spin qubits తో quantum computing కు కేంద్రం.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atomic',
    description: 'Nuclear magnetic moment యొక్క సహజ ప్రమాణం — Bohr magneton కంటే 1836 రెట్లు చిన్నది.',
    discoveredBy: 'Otto Stern (1933) · Nobel బహుమతి 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN అనేది nucleons (protons మరియు neutrons) కి magnetic moment యొక్క సహజ ప్రమాణం. Proton, electron కంటే 1836 రెట్లు భారంగా ఉంటుంది కాబట్టి μB కంటే 1836 రెట్లు చిన్నది.`,
    simpleExample: `Proton magnetic moment 2.793 μN. 3 Tesla MRI scanner లో proton spin states మధ్య energy gap 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J — ~127 MHz radiofrequency కి సమానం. ఇదే frequency MRI scanner వాడుతుంది.`,
    deepMeaning: `Zero electric charge ఉన్నప్పటికీ neutron కి −1.913 μN magnetic moment ఉంటుంది. Neutral particle కి zero కాని magnetic moment చారిత్రకంగా neutron fundamental కాదని — దాని లోపల quark structure ఉందని — మొదటి సంకేతాల్లో ఒకటి. Proton magnetic moment 2.793 μN — simple Dirac point particle కి ఉండాల్సిన 1 μN కాదు — ఇది Stern యొక్క Nobel-winning discovery. NMR (మరియు MRI) proton spin transitions పై ఆధారపడుతుంది.`,
    whyItMatters: `NMR spectroscopy మరియు MRI కు పునాది — structural chemistry మరియు medical imaging లో అత్యంత శక్తివంతమైన సాధనాలు. చారిత్రకంగా nucleon యొక్క అంతర్గత quark structure ని నిరూపించింది.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Particle',
    description: 'Electron యొక్క rest mass — అతి తేలికైన massive fundamental particle.',
    discoveredBy: 'J.J. Thomson (1897) · Nobel బహుమతి 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `ఇది electron యొక్క rest mass — అతి తేలికైన massive fundamental particle. Energy units లో E = mc² ద్వారా: mec² = 0.510 998 950 MeV. Electron, proton కంటే 1836.15 రెట్లు తేలికగా ఉంటుంది.`,
    simpleExample: `Pair production (γ → e⁺ + e⁻) కి కనీసం 2mec² = 1.022 MeV శక్తి ఉన్న photon కావాలి. ఈ energy కంటే తక్కువ ఉన్న photons electron-positron pairs సృష్టించలేవు. ఈ threshold, matter లో gamma-ray absorption ను నిర్ణయిస్తుంది.`,
    deepMeaning: `Electron mass అనేది Standard Model యొక్క free parameter — ఇది సైద్ధాంతికంగా అంచనా వేయబడదు, కొలవాల్సి ఉంటుంది. Higgs mechanism ద్వారా ఉత్పత్తి అవుతుంది: electron, Higgs field తో interact అవుతుంది, మరియు ఈ interaction యొక్క strength (Yukawa coupling, ye ≈ 2.94 × 10⁻⁶) mass ని నిర్ణయిస్తుంది. Electron నిజంగా elementary point particle గా కనిపిస్తోంది.`,
    whyItMatters: `అన్ని atomic మరియు chemical behaviour ను నిర్ణయిస్తుంది. a₀ = ħ²/(mee²k) ద్వారా atoms పరిమాణాన్ని, electrons binding energies ను, X-rays శక్తిని నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-factor',
    value: '−2.002319304',
    unit: 'dimensionless',
    exact: '−2.00231930436256',
    category: 'Particle',
    description: 'సమస్త శాస్త్రంలో అత్యంత ఖచ్చితంగా నిరూపించబడిన prediction.',
    discoveredBy: 'Kusch & Foley (1948) · QED calculation: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g-factor అనేది electron యొక్క actual magnetic moment మరియు simple Dirac particle (g = 2 ఖచ్చితంగా) లాగా ఉంటే ఉండే దాని నిష్పత్తి. Anomalous magnetic moment ae = (ge − 2)/2 = 0.001 159 65.`,
    simpleExample: `QED నుండి ae యొక్క సైద్ధాంతిక prediction కి 10 loops వరకు Feynman diagrams summation అవసరం (neljännen order వద్ద 12,672 diagrams సహా). ఫలితం experiment తో 12 decimal places వరకు అంగీకరిస్తుంది — 1 part per trillion.`,
    deepMeaning: `Electron యొక్క anomalous magnetic moment సమస్త శాస్త్రంలో అత్యంత ఖచ్చితంగా పరీక్షించబడిన prediction. QED దీన్ని α power series గా లెక్కిస్తుంది: ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... QED prediction నుండి ఏ deviation అయినా Standard Model అటు వైపు కొత్త physics సంకేతం.`,
    whyItMatters: `Theoretical physics యొక్క అతి పెద్ద విజయం. మరే కొలత కంటే ఖచ్చితంగా QED పరీక్షిస్తుంది. Fine-structure constant α యొక్క అత్యంత ఖచ్చితమైన నిర్ణయం అందిస్తుంది.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton Mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Particle',
    description: 'Proton యొక్క rest mass — electron కంటే 1836 రెట్లు భారం.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Energy units లో: mpc² = 938.272 MeV. Proton, electron కంటే 1836.15 రెట్లు భారంగా ఉంటుంది. ఈ mass ratio atomic physics లో అత్యంత ముఖ్యమైన సంఖ్యల్లో ఒకటి.`,
    simpleExample: `Proton యొక్క పెద్ద mass వల్ల thermal energies వద్ద దాని de Broglie wavelength, electron కంటే ~43 రెట్లు చిన్నది — protons far less quantum-wave-like గా ఉంటాయి. అందుకే Born-Oppenheimer approximation పనిచేస్తుంది: nuclei classical particles గా వ్యవహరిస్తాయి.`,
    deepMeaning: `Electron లాగా కాకుండా, proton fundamental కాదు — ఇది రెండు up quarks మరియు ఒక down quark తో తయారైన composite particle, strong force ద్వారా gluons బంధించబడి. Quarks యొక్క masses proton mass లో కేవలం ~1% మాత్రమే. మిగతా 99% quarks యొక్క kinetic energy మరియు gluon fields లో నిల్వ అయిన energy నుండి వస్తుంది — E = mc² యొక్క ఒక అద్భుతమైన వ్యక్తీకరణ. Mass అనేది చాలా వరకు energy. Proton యొక్క charge radius 0.8409 fm.`,
    whyItMatters: `Protons atomic numbers మరియు దాదాపు అన్ని atomic mass ని నిర్ణయిస్తాయి. మీ శరీరంలోని దాదాపు మొత్తం mass నిజానికి protons మరియు neutrons లోపల QCD field యొక్క energy.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-factor',
    value: '5.586',
    unit: 'dimensionless',
    exact: '5.5856946893',
    category: 'Particle',
    description: 'Proton composite structure ని నిరూపించిన పెద్ద anomalous magnetic moment.',
    discoveredBy: 'Otto Stern (1933) · Nobel బహుమతి 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `Simple Dirac proton కి gp 2 అయ్యుండాలి. కానీ gp ≈ 5.586 — దాదాపు మూడు రెట్లు పెద్దది. ఈ పెద్ద anomalous magnetic moment proton యొక్క composite structure ని సూచించే మొదటి experimental discoveries లో ఒకటి.`,
    simpleExample: `Proton simple, structureless point అయితే, ఇది 2 strength యొక్క magnet లాగా వ్యవహరించాలి. 5.586 అనే విలువ దాని లోపల charges కదులుతున్నాయని (quarks) నిరూపించే direct numerical proof.`,
    deepMeaning: `Otto Stern 1933లో gp ≈ 5.6 కొలిచాడు, ఆ సమయంలో proton fundamental Dirac particle అని భావించారు. ఈ ఫలితం physics community ని ఆశ్చర్యానికి గురిచేసింది. పెద్ద anomalous magnetic moment — మరియు neutron యొక్క zero కాని magnetic moment — quark model కి కీలకమైన evidence.`,
    whyItMatters: `Quark model కి దారితీసిన చారిత్రకంగా అవసరమైన discovery. Atomic nuclei లో magnetic resonances (NMR/MRI) లెక్కించడానికి కేంద్రం.`
  },

  // ── భాగం 6: Neutron స్థిరాంకాలు ─────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron Mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'Proton కంటే కొంచెం భారం — ఈ mass తేడా beta decay ని అనుమతిస్తుంది.',
    discoveredBy: 'James Chadwick (1932) · Nobel బహుమతి 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Neutron, proton కంటే కొంచెం భారంగా ఉంటుంది — 1.293 MeV/c² తేడా. Energy units లో: mnc² = 939.565 MeV. ఈ చిన్న కానీ కీలకమైన mass తేడా వల్ల free neutron అస్థిరంగా ఉంటుంది — ఇది beta decay ద్వారా క్షయమవుతుంది.`,
    simpleExample: `Free neutron ~10 నిమిషాలలో క్షయమవుతుంది (half-life 613.9 s). విడుదలయ్యే energy 1.293 MeV mass తేడాకు సమానం. Nuclei లోపల, neutrons nuclear binding energy వల్ల స్థిరపడతాయి మరియు క్షయమవ్వవు.`,
    deepMeaning: `Neutron, proton కంటే electron mass కంటే ఎక్కువ తేలికైనట్లయితే, free protons, neutrons మరియు positrons గా క్షయమయ్యేవి — hydrogen atoms అస్థిరంగా ఉండేవి, chemistry పూర్తిగా మారిపోయేది. Mass తేడా Big Bang nucleosynthesis సమయంలో neutron-to-proton ratio (n/p ≈ 1/7) ను నిర్ణయించింది, hydrogen (75%) మరియు helium (25%) యొక్క cosmic abundances ను నిర్ణయించింది.`,
    whyItMatters: `Nuclear stability, beta decay మరియు మూలకాల cosmic abundance ను నిర్ణయిస్తుంది. Neutron mass తేడా hydrogen మరియు అందువల్ల జీవం ఉనికికి cosmologically అవసరం.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron Magnetic Moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Zero charge ఉన్నప్పటికీ ఋణాత్మక magnetic moment — అంతర్గత quarks ని నిరూపిస్తుంది.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `Neutron కి పూర్తిగా zero net electric charge ఉన్నప్పటికీ ఋణాత్మక magnetic moment (−1.913 nuclear magnetons) ఉంటుంది.`,
    simpleExample: `Structureless neutral particle కి magnetic moment ఉండకూడదు. Neutron magnetic fields కు react అవుతుంది అనే వాస్తవం దాని లోపల charged sub-particles ఉన్నాయని నిరూపిస్తుంది.`,
    deepMeaning: `Magnetic moment కి charge లేదా spin distribution అవసరం. Neutron యొక్క ఋణాత్మక magnetic moment దాని అంతర్గత quark structure నుండి వస్తుంది: రెండు down quarks (ప్రతి ఒక్కటి charge −e/3) మరియు ఒక up quark (charge +2e/3) నిరంతరం quantum motion లో ఉంటాయి. ఈ spinning charged quarks యొక్క spatial distribution ఒక net ఋణాత్మక magnetic moment సృష్టిస్తుంది.`,
    whyItMatters: `Nuclear physics లో అత్యంత ఆశ్చర్యకరమైన ఫలితాల్లో ఒకటి. Neutron Electric Dipole Moment (EDM) పై current limits, CP symmetry ను పరీక్షించడానికి మరియు విశ్వంలో matter-antimatter asymmetry ని వివరించడానికి ఉపయోగపడతాయి.`
  },

  // ── భాగం 7: Muon & Tau స్థిరాంకాలు ──────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon Mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Particle',
    description: 'Electron యొక్క భారమైన కాపీ — "దీన్ని ఎవరు ఆర్డర్ చేశారు?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Muon, electron కంటే 206.768 రెట్లు భారంగా ఉంటుంది. ఇది అదే charge వహిస్తుంది మరియు అన్ని non-gravitational విషయాలలో identically interact అవుతుంది — nature electron యొక్క రెండో, భారమైన copy సృష్టించినట్లుంది.`,
    simpleExample: `15 km altitude లో cosmic rays వల్ల సృష్టించబడిన cosmic ray muons ~0.99c వేగంతో ప్రయాణిస్తాయి. Classically అవి నేలకు చేరుకోవడానికి ముందే క్షయమవ్వాలి (2.2 μs lifetime → కేవలం 650 m). అయినప్పటికీ పెద్ద సంఖ్యలో చేరుకుంటాయి ఎందుకంటే relativistic time dilation (γ ≈ 7) వాటి lifetime ని ~15 μs కి పెంచుతుంది.`,
    deepMeaning: `Muon ఏ సరళమైన సైద్ధాంతిక చిత్రంలోనూ చేరదు. దాని ఉనికి అనేది nature యొక్క వాస్తవం. ఇది ఇలా క్షయమవుతుంది: μ⁻ → e⁻ + ν̄e + νμ. Muonic atoms (μ⁻, e⁻ స్థానంలో) nucleus కి ~207 రెట్లు దగ్గరగా orbit చేస్తాయి. Muon anomalous magnetic moment (g-2) ప్రస్తుతం theory నుండి ~4σ discrepancy చూపిస్తోంది.`,
    whyItMatters: `Muon anomalous magnetic moment Standard Model అటు వైపు physics యొక్క ప్రముఖ experimental hint. Muons volcano interiors చిత్రీకరించడానికి మరియు అక్రమంగా దాచిన nuclear material గుర్తించడానికి ఉపయోగపడతాయి.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon Anomalous Magnetic Moment',
    value: '0.0011659',
    unit: 'dimensionless',
    exact: '0.00116592059',
    category: 'Particle',
    description: 'Standard Model అటు వైపు physics యొక్క ప్రముఖ experimental hint.',
    discoveredBy: 'Fermilab Muon g-2 experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Electron లాగే, muon కి ఒక anomalous magnetic moment ఉంటుంది. ae = (ge − 2)/2 = 0.001 165 920 59. ఇది Dirac prediction g = 2 నుండి వ్యత్యాసాన్ని కొలుస్తుంది.`,
    simpleExample: `Electron కాదు, muon, భారమైన particles నుండి virtual contributions కి sensitive, ఎందుకంటే quantum corrections (mμ/M)² తో scale అవుతాయి, ఇక్కడ M అనేది virtual particle mass.`,
    deepMeaning: `Theory మరియు experiment మధ్య సుమారు 4.2 standard deviations తేడా ఉంది — definitive discovery కి కావాల్సిన 5-sigma threshold కు అనుమానపు దగ్గర. నిరూపించబడితే, ఇది Standard Model అటు వైపు physics యొక్క మొదటి స్పష్టమైన evidence — సంభావ్యంగా supersymmetric particles లేదా extra dimensions. Resolution lattice QCD calculations పై ఆధారపడుతుంది.`,
    whyItMatters: `Particle physics లో అత్యంత వేడి topics లో ఒకటి. నిరూపించబడితే, subatomic ప్రపంచం గురించి మన అర్థాన్ని మూలభూతంగా మార్చాల్సి ఉంటుంది.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton Mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Particle',
    description: 'అత్యంత భారమైన charged lepton — electron కంటే 3477 రెట్లు భారం.',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel బహుమతి 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Tau lepton మూడవ మరియు అత్యంత భారమైన charged lepton — electron కంటే 3477 రెట్లు మరియు muon కంటే 16.8 రెట్లు భారం.`,
    simpleExample: `Tau చాలా భారంగా (1.78 GeV) ఉంటుంది కాబట్టి ఇది hadrons — pions మరియు kaons — గా క్షయమవుతుంది, muon కాదు. దాని అత్యంత తక్కువ lifetime (~2.9 × 10⁻¹³ s) వల్ల క్షయమవ్వడానికి ముందు కేవలం ~87 μm ప్రయాణిస్తుంది, దీన్ని గమనించడానికి micron-scale precision అవసరం.`,
    deepMeaning: `Tau మూడవ generation charged lepton. ఎందుకు సరిగ్గా మూడు generations leptons ఉన్నాయి, మరియు అవి ఎందుకు అంత విభిన్న masses కలిగి ఉన్నాయి, Standard Model యొక్క అత్యంత లోతైన mysteries లో ఒకటి. Tau neutrino 2000 వరకు directly detect అవ్వలేదు.`,
    whyItMatters: `మూడు generations leptons ఉనికి nature యొక్క ఒక గాఢమైన mystery. Tau మరియు దాని neutrino Standard Model ని consistent theory గా స్థాపించడంలో కీలకం.`
  },

  // ── భాగం 8: భౌతిక-రసాయన స్థిరాంకాలు ────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas స్థిరాంకం',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'ఉష్ణగతిక',
    description: 'R = NA × k — thermodynamics మరియు chemistry యొక్క workhorse.',
    discoveredBy: 'వివిధులు (19వ శతాబ్దం)',
    formula: 'PV = nRT',
    whatItSays: `R అనేది molar స్థాయికి scale చేసిన Boltzmann's constant. Ideal gas law PV = nRT, Boyle's law, Charles's law మరియు Avogadro's law అన్నింటినీ ఒకే సమీకరణంలో మిళితం చేస్తుంది.`,
    simpleExample: `Gas లో sound velocity: v = √(γRT/M). గాలికి (M = 0.029 kg/mol, γ = 1.4) 20°C వద్ద, v ≈ 343 m/s. ఇది sound velocity R మరియు temperature చేత fundamentally నిర్ణయించబడుతుందని చూపిస్తుంది.`,
    deepMeaning: `Ideal gases యొక్క molar heat capacities R యొక్క simple multiples: Cv = (3/2)R monatomic కి, (5/2)R diatomic gases కి. Statistical mechanics లో, Sackur-Tetrode equation R కలిగి ఉంటుంది. Entropy of mixing, Clausius-Clapeyron equation, osmotic pressure కి van't Hoff equation, electrode potentials కి Nernst equation అన్నిటిలో R కనిపిస్తుంది.`,
    whyItMatters: `Thermodynamics యొక్క universal constant. ప్రతి gas law, ప్రతి thermodynamic calculation, ప్రతి atmospheric model మరియు ప్రతి chemical reaction energetic calculation R ని వాడుతుంది.`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann స్థిరాంకం',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'ఉష్ణగతిక',
    description: 'Blackbody వికిరించే power — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `పరిపూర్ణమైన blackbody unit area కి electromagnetic power P/A = σT⁴ వికిరిస్తుంది. σ మరింత మూలభూత స్థిరాంకాల నుండి పొందబడుతుంది: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `సూర్యుని surface temperature ~5778 K, power output σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W. మీ శరీరం (T ≈ 310 K) σ × (310)⁴ × (1.7 m²) ≈ 520 W వికిరిస్తుంది — దాదాపు సగం metabolic heat ద్వారా భర్తీ అవుతుంది.`,
    deepMeaning: `T⁴ dependence అన్ని frequencies పై Planck blackbody spectrum ను integrate చేయడం వల్ల వస్తుంది. Temperature రెట్టింపు చేస్తే radiated power 2⁴ = 16 రెట్లు పెరుగుతుంది. Cosmic microwave background (CMB) — Big Bang నుండి అవశేష వికిరణం — T = 2.725 K వద్ద పరిపూర్ణమైన blackbody. Earth యొక్క effective temperature, solar radiation మరియు σT⁴ emission balance వల్ల నిర్ణయించబడుతుంది.`,
    whyItMatters: `Stellar luminosity, Earth యొక్క energy balance మరియు climate, thermal cameras, optical pyrometry మరియు విశ్వం యొక్క temperature structure ను నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'b',
    name: 'Wien Displacement స్థిరాంకం',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'ఉష్ణగతిక',
    description: 'Blackbody radiation యొక్క peak wavelength ను temperature కు అనుసంధానిస్తుంది.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien's displacement law, blackbody radiation యొక్క peak wavelength ను temperature కు అనుసంధానిస్తుంది: λ_max × T = b. వస్తువు వేడిగా ఉంటే peak wavelength తక్కువగా (నీలిరంగుగా) ఉంటుంది.`,
    simpleExample: `సూర్యుడు (T = 5778 K) λ_max ≈ 502 nm — ఆకుపచ్చ కాంతి వద్ద peak అవుతుంది. మానవ కళ్ళు సరిగ్గా ఈ range లో అత్యంత sensitive గా ఉండేందుకు evolve అయ్యాయి. మానవ శరీరం (T = 310 K) λ_max ≈ 9.4 μm — mid-infrared వద్ద emit చేస్తుంది, అందుకే thermal cameras పనిచేస్తాయి.`,
    deepMeaning: `Peak frequency version f_max = b' × T, b' = 5.879 × 10¹⁰ Hz/K ఉపయోగిస్తుంది. Peak frequency c/λ_max కు సమానంగా ఉండదు, ఎందుకంటే wavelength మరియు frequency distributions వేర్వేరు shapes కలిగి ఉంటాయి.`,
    whyItMatters: `Thermal imaging, stellar temperature measurement, climate science మరియు blackbody radiation physics కు మూలభూతం.`
  },

  // ── భాగం 9: Gravitational & Electroweak స్థిరాంకాలు ─────────────────────

  {
    symbol: 'G',
    name: 'గురుత్వ స్థిరాంకం',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'విశ్వజనీన',
    description: 'అత్యంత బలహీనమైన force — అత్యంత తక్కువ ఖచ్చితత్వంతో తెలిసిన మూలభూత స్థిరాంకం.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton's law: F = Gm₁m₂/r². General Relativity లో, G అనేది Einstein's field equations లో కనిపిస్తుంది — matter spacetime ని ఎలా వంచుతుందో నిర్ణయిస్తుంది.`,
    simpleExample: `1 metre దూరంలో ఉన్న రెండు 1 kg masses మధ్య gravity: F = 6.674 × 10⁻¹¹ N — ఒక్క bacterium యొక్క weight తో సమానం. రెండు protons మధ్య electromagnetic force 10³⁶ రెట్లు బలంగా ఉంటుంది. అందుకే gravity atomic scales వద్ద negligible.`,
    deepMeaning: `G అనేది అత్యంత తక్కువ ఖచ్చితత్వంతో తెలిసిన మూలభూత స్థిరాంకం — కేవలం 5 significant figures మాత్రమే. Gravity అత్యంత బలహీనమైన force కావడం వల్ల దీన్ని lab లో కొలవడానికి seismic noise మరియు residual forces తో పోరాడాల్సి ఉంటుంది. Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m అనేది quantum gravity అంచనా వేయబడే స్థాయి — proton కంటే 10²⁰ రెట్లు చిన్నది.`,
    whyItMatters: `ఒక విసిరిన బంతి నుండి black holes వరకు, విశ్వం యొక్క large-scale structure వరకు అన్ని gravitational phenomena ను నియంత్రిస్తుంది. Quantum gravity సిద్ధాంతం లేకపోవడం physics లో అత్యంత లోతైన అపరిష్కృత సమస్య.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling స్థిరాంకం',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particle',
    description: 'Weak nuclear force యొక్క coupling strength — beta decay ను నిర్ణయిస్తుంది.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF అనేది Fermi's four-fermion effective theory లో weak nuclear force యొక్క coupling constant: n → p + e⁻ + ν̄e. Weak cross-section GF² కి అనులోమానుపాతంలో ఉంటుంది.`,
    simpleExample: `Weak interaction చాలా బలహీనంగా ఉంటుంది కాబట్టి neutrino ఒక కాంతి-సంవత్సరం పొడవున్న సీసంలో 50% chance తో ఆగుతుంది. అయినప్పటికీ ఇది సూర్యుని energy కి అవసరం — pp chain ఒక weak interaction తో మొదలవుతుంది.`,
    deepMeaning: `e² కాదు, GF కి energy⁻² dimensions ఉంటాయి, Fermi's theory ని non-renormalisable చేస్తుంది. పరిష్కారం electroweak unification (Nobel 1979): weak force massive W మరియు Z bosons (~80–91 GeV) ద్వారా mediated. తక్కువ energies వద్ద, W boson exchange ఒక point interaction లాగా కనిపిస్తుంది.`,
    whyItMatters: `అన్ని beta decay, neutrino interactions మరియు electroweak unification ను నిర్ణయిస్తుంది. Weak force సూర్యుని pp chain ని నడిపిస్తుంది మరియు stars లో heavy elements nuclear synthesis కి బాధ్యత.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Weak Mixing Angle',
    value: '0.2229',
    unit: 'dimensionless',
    exact: '0.22290',
    category: 'Particle',
    description: 'Electromagnetic మరియు weak forces మధ్య mixing ని quantify చేస్తుంది.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Weak mixing angle θW (Weinberg angle) electroweak unification లో photon మరియు Z boson మిళితాన్ని parameterize చేస్తుంది. e = g sin θW = g' cos θW.`,
    simpleExample: `sin²θW ≈ 0.231 విలువ particle colliders (LHC) మరియు atomic parity violation experiments వద్ద అసాధారణ ఖచ్చితత్వంతో కొలవబడుతుంది.`,
    deepMeaning: `Electroweak unification లో, photon మరియు Z boson రెండు underlying gauge bosons (W⁰ మరియు B) యొక్క mixtures. Energy తో sin²θW యొక్క running Standard Model ద్వారా ఖచ్చితంగా అంచనా వేయబడుతుంది మరియు electroweak radiative corrections ని నిరూపించడానికి కొలవబడుతుంది.`,
    whyItMatters: `Electromagnetic మరియు weak nuclear forces యొక్క properties ని అనుసంధానించే Standard Model యొక్క మూలభూత parameter.`
  },

  // ── భాగం 11: అదనపు Atomic & Nuclear స్థిరాంకాలు ───────────────────────

  {
    symbol: 'κ',
    name: 'Quantum of Circulation',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomic',
    description: 'Electron కి circulation యొక్క మూలభూత ప్రమాణం — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `Quantum fluid (superfluid helium లేదా superconductor వంటిది) యొక్క circulation h/m యొక్క units లో quantized అవుతుంది. Superconductors కి, relevant particle 2me mass కలిగిన Cooper pair.`,
    simpleExample: `Superfluid helium-4 లో, vortices h/m_He గుణిజాల రూపంలో circulation వహిస్తాయి. Rotating superfluid helium ఈ quantized vortices యొక్క lattice ను అభివృద్ధి చేస్తుంది.`,
    deepMeaning: `Circulation యొక్క quantization అనేది quantum mechanical wavefunction యొక్క single-valuedness యొక్క నేరుగా consequence. Superfluid rotate అయినట్లయితే, macroscopic wavefunction యొక్క phase ఏ closed loop చుట్టూ వెళ్ళినా అదే విలువకు తిరిగి రావాలి. ఇది circulation ని quantize చేస్తుంది: Γ = n × h/m.`,
    whyItMatters: `Superfluids మరియు superconductors యొక్క behaviour వివరిస్తుంది. Circulation quantum Aharonov-Bohm effect లో కూడా కనిపిస్తుంది.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson Cross Section',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atomic',
    description: 'Incoming photon కి free electron సమర్పించే effective area.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `Low-energy photons (photon energy ≪ mec²) free electron పై scatter అయినప్పుడు, total scattering cross-section σT = (8π/3) × re², ఇక్కడ re classical electron radius.`,
    simpleExample: `Electron, incoming photon కి "target area" σT ని సమర్పిస్తున్నదని భావించండి. Electrons box పై photons పంపితే, scatter అవ్వడానికి ముందు mean free path λ = 1/(nσT).`,
    deepMeaning: `Thomson cross section అనేది మరింత సాధారణ Compton scattering formula యొక్క elastic scattering limit. Photon energy Eγ ≪ 0.511 MeV అయినప్పుడు, electron recoil negligible మరియు scattering పూర్తిగా classical. Stellar interiors లో, radiation pressure, photon-electron Thomson scattering ద్వారా transmitted అవుతుంది. Eddington luminosity — star కలిగి ఉండగల maximum luminosity — σT పై ఆధారపడుతుంది.`,
    whyItMatters: `Thomson scattering ఆకాశం నీలిరంగులో ఉండటాన్ని (తక్కువ frequencies వద్ద) మరియు eclipses సమయంలో solar corona కనిపించడాన్ని వివరిస్తుంది. CMB, electrons protons తో combine అయ్యే వరకు Thomson scattering వల్ల universe opaque గా ఉండేది.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Electron Charge-to-Mass Ratio',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atomic',
    description: 'Electron electromagnetic forces కి ఎంత strongly respond అవుతుందో నిర్ణయిస్తుంది.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `ఇది electron యొక్క charge మరియు mass నిష్పత్తి. Electron electromagnetic forces కి ఎంత strongly respond అవుతుందో నిర్ణయిస్తుంది.`,
    simpleExample: `CRT (cathode ray tube) television లో, electric మరియు magnetic fields వల్ల electron beam deflection, e/me చేత నిర్ణయించబడుతుంది. e/me యొక్క పెద్ద విలువ వల్ల electrons ions కంటే చాలా సులభంగా deflect అవుతాయి.`,
    deepMeaning: `Thomson యొక్క ప్రసిద్ధ cathode ray experiment, cathode rays hydrogen ions కంటే ~1800 రెట్లు పెద్ద ratio తో ఋణాత్మకంగా charged particles యొక్క streams అని నిరూపించింది. Cyclotron frequency ωc = eB/me నేరుగా e/me కి అనులోమానుపాతంలో ఉంటుంది.`,
    whyItMatters: `Mass spectrometry, particle accelerators మరియు vacuum electronics కు మూలభూతం. Fusion plasmas లో electron cyclotron resonance heating ను నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'M(e)',
    name: 'Electron Molar Mass',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomic',
    description: 'ఒక mole electrons యొక్క mass — me × NA.',
    discoveredBy: 'పొందబడింది',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `ఒక mole electrons యొక్క mass చాలా చిన్నది — సుమారు 0.55 milligrams per mole.`,
    simpleExample: `Electrochemistry లో, electrolysis సమయంలో electrodes వద్ద mass మార్పులు లెక్కించేటప్పుడు, ionic masses తో పోల్చి electron molar mass negligible.`,
    deepMeaning: `High-precision atomic mass measurements లో, binding energies మరియు electron cloud mass తప్పక account చేయాలి. Atom యొక్క atomic mass: M(atom) = M(nucleus) + Z × M(e) − (electron binding energy)/c². Penning trap mass spectrometry 10 significant figures కు చేరడానికి ఈ correction అవసరం.`,
    whyItMatters: `Physics లో అత్యంత ఖచ్చితమైన mass comparisons మరియు SI unit definitions యొక్క consistency పరీక్షించడానికి అవసరం.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton Mass Ratio',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'dimensionless',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atomic',
    description: 'Electron, proton కంటే 1836.15 రెట్లు తేలికగా ఉంటుంది.',
    discoveredBy: 'పొందబడింది',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Proton తో పోల్చి electron యొక్క mass నిష్పత్తి. ఈ ratio సుమారు 1/1836.`,
    simpleExample: `me/mp ≪ 1 కావడం వల్ల, electrons nuclei కంటే చాలా వేగంగా కదులుతాయి. ఇది fixed nuclear positions వద్ద electronic Schrödinger equation పరిష్కరించడానికి వీలు కల్పిస్తుంది — Born-Oppenheimer approximation.`,
    deepMeaning: `ఈ ratio, chemical energy scales (~eV) ను nuclear energy scales (~MeV) నుండి వేరు చేస్తుంది. Stellar physics లో కూడా కీలకం: Chandrasekhar limit — white dwarf యొక్క maximum mass — నేరుగా (mp/me) పై ఆధారపడుతుంది.`,
    whyItMatters: `Nature లో అత్యంత ముఖ్యమైన dimensionless numbers లో ఒకటి. Atomic structure, energy scales యొక్క hierarchy మరియు stars యొక్క stability ను నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Proton Charge-to-Mass Ratio',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atomic',
    description: 'Elementary charge మరియు proton mass నిష్పత్తి — electron కంటే 1836 రెట్లు చిన్నది.',
    discoveredBy: 'పొందబడింది',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Elementary charge మరియు proton mass నిష్పత్తి. Protons magnetic fields కు ఎలా respond అవుతాయో నిర్ణయిస్తుంది.`,
    simpleExample: `Magnetic field లో proton cyclotron frequency, electron కంటే 1836 రెట్లు తక్కువ. అందుకే MRI radiofrequency waves (MHz range) వాడుతుంది, microwaves కాదు.`,
    deepMeaning: `Mass spectrometry లో, ions వాటి charge-to-mass ratios వల్ల వేరు చేయబడతాయి. Proton యొక్క e/mp fundamental calibration standard గా ఉంటుంది. LHC వంటి accelerator physics లో, proton beam యొక్క rigidity magnetic fields లో bending radius ను నిర్ణయిస్తుంది.`,
    whyItMatters: `Medical imaging (MRI), mass spectrometry మరియు LHC వంటి high-energy particle accelerators design కు మూలభూతం.`
  },

  {
    symbol: 'M(p)',
    name: 'Proton Molar Mass',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Atomic',
    description: 'ఒక mole protons యొక్క mass.',
    discoveredBy: 'పొందబడింది',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `ఒక mole protons యొక్క mass సుమారు 1.007 g/mol.`,
    simpleExample: `ఇది 1 g/mol కంటే కొంచెం తక్కువ, ఎందుకంటే atomic mass unit 1/12 mass of carbon-12 గా నిర్వచించబడింది, ఇది binding energy మరియు electron mass contributions కలిగి ఉంటుంది.`,
    deepMeaning: `Nuclear physics లో, nuclear reaction యొక్క Q-value — విడుదలైన లేదా గ్రహించబడిన energy — molar masses ఉపయోగించి mass తేడా నుండి లెక్కించబడుతుంది.`,
    whyItMatters: `Nuclear chemistry మరియు astrophysics లో stoichiometric calculations కు మూలభూతం.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutron-Electron Mass Ratio',
    value: '1838.68',
    unit: 'dimensionless',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'Neutron, electron కంటే 1838.68 రెట్లు భారం.',
    discoveredBy: 'పొందబడింది',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `Neutron mass మరియు electron mass నిష్పత్తి. ఇది proton-electron ratio కంటే కొంచెం ఎక్కువ.`,
    simpleExample: `Neutron, proton కంటే 2.531 electron masses భారంగా ఉంటుంది. ఈ mass తేడా 1.293 MeV — neutron beta decay లో విడుదలయ్యే energy.`,
    deepMeaning: `ఈ ratio, proton-electron ratio కంటే ఎక్కువ కావడం వల్ల free neutrons అస్థిరంగా ఉంటాయి. Neutron, proton కంటే electron mass కంటే ఎక్కువ తేలికైనట్లయితే, hydrogen stable element గా ఉండేది కాదు. ఈ ratio Penning traps ఉపయోగించి అసాధారణ ఖచ్చితత్వంతో కొలవబడుతుంది.`,
    whyItMatters: `విశ్వం యొక్క building blocks స్థిరత్వాన్ని నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton Mass Ratio',
    value: '1.00138',
    unit: 'dimensionless',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'Neutron, proton కంటే 0.138% భారంగా ఉంటుంది.',
    discoveredBy: 'పొందబడింది',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Neutron, proton కంటే 0.138% భారంగా ఉంటుంది.`,
    simpleExample: `ఈ చిన్న mass తేడా (1.293 MeV/c²) Big Bang సమయంలో సుమారు 25% baryonic matter helium-4 గా మారాలని, మిగతాది hydrogen గా ఉండాలని నిర్ణయించింది.`,
    deepMeaning: `ప్రారంభ విశ్వంలో, neutrons మరియు protons సమతుల్య నిష్పత్తి Boltzmann factor ను అనుసరించింది. Universe చల్లబడి weak interactions freeze out అయినప్పుడు, n/p ratio సుమారు 1/7 వద్ద fixed అయింది.`,
    whyItMatters: `గమనించిన ~25% cosmic helium abundance Big Bang model యొక్క అతి పెద్ద confirmations లో ఒకటి, ఇది ఈ స్థిరాంకానికి కృతజ్ఞతలు.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutron g-factor',
    value: '−3.826',
    unit: 'dimensionless',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'Electrically neutral neutron యొక్క అంతర్గత quark structure ని వెల్లడిస్తుంది.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Neutron కి g-factor −3.826. Zero charge కలిగిన structureless Dirac particle కి ఇది సరిగ్గా 0 అయ్యుండాలి.`,
    simpleExample: `Neutral neutron యొక్క zero కాని magnetic moment, neutral particles కి అంతర్గత భాగాలు ఉండగలవని నిరూపించిన nuclear physics లో అత్యంత ఆశ్చర్యకరమైన ఫలితాల్లో ఒకటి.`,
    deepMeaning: `Neutron ఒక up quark మరియు రెండు down quarks కలిగి ఉంటుంది. వాటి magnetic moments మరియు orbital motion net ఋణాత్మక magnetic moment ఉత్పత్తి చేస్తాయి. Non-relativistic quark model g ≈ −3.67 అంచనా వేస్తుంది; తేడా relativistic corrections మరియు gluon effects వల్ల. ఖచ్చితమైన కొలతలు hadron structure యొక్క QCD calculations పరీక్షిస్తాయి.`,
    whyItMatters: `Standard Model మరియు quark structure యొక్క stringent పరీక్ష. Neutron electric dipole moment పై limits ఉంచడానికి కూడా ఉపయోగపడుతుంది.`
  },

  {
    symbol: 'M(n)',
    name: 'Neutron Molar Mass',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'ఒక mole neutrons యొక్క mass.',
    discoveredBy: 'పొందబడింది',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `ఒక mole neutrons సుమారు 1.00866 grams బరువు ఉంటుంది.`,
    simpleExample: `Free neutrons 10 నిమిషాలలో క్షయమైనప్పటికీ, neutron molar mass nuclear power plants ఎంత energy ఉత్పత్తి చేయగలవో నిర్ణయించే "binding energy curve" లెక్కించడానికి అవసరం.`,
    deepMeaning: `Nuclear binding energy per nucleon, atomic masses ఉపయోగించి లెక్కించబడుతుంది: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². Proton mass తో పోల్చి పెద్ద neutron mass, ప్రతి nuclear binding energy calculation ను ప్రభావితం చేస్తుంది.`,
    whyItMatters: `Nuclear engineering మరియు nuclear isotopes అధ్యయనానికి పునాది.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Neutron Compton Wavelength',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'Nuclear physics యొక్క సహజ length scale — h/mnc.',
    discoveredBy: 'పొందబడింది',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `దాని energy neutron rest mass energy కి సమానమైన photon యొక్క wavelength. ఇది సుమారు 1.32 femtometres.`,
    simpleExample: `ఈ wavelength neutron పరిమాణానికి (~0.8 fm) మరియు nuclear forces పరిధికి (~1.4 fm) సమానంగా ఉంటుంది.`,
    deepMeaning: `Nuclear physics యొక్క characteristic distance scales, nucleons మరియు pions యొక్క Compton wavelengths చేత నిర్ణయించబడతాయి. ఈ scale కంటే తక్కువ వద్ద, vacuum polarisation వంటి quantum field theory effects ముఖ్యమవుతాయి.`,
    whyItMatters: `Neutron ను simple non-relativistic particle గా treat చేయలేని scale ని నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton Wavelength',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Particle',
    description: 'దాని energy muon rest mass కి సమానమైన photon wavelength.',
    discoveredBy: 'పొందబడింది',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Muon Compton wavelength సుమారు 11.7 fm — electron కంటే mass ratio (206.77) చేత చిన్నది.`,
    simpleExample: `Muonic atoms లో, muon electron కంటే nucleus కి చాలా దగ్గరగా orbit చేస్తుంది, ఎందుకంటే muon యొక్క Bohr radius mass కి inversely proportional.`,
    deepMeaning: `Muonic hydrogen లో muon ~256 fm వద్ద orbit చేస్తుంది — proton యొక్క finite size energy levels ను గణనీయంగా ప్రభావితం చేసే స్థాయికి దగ్గరగా. అందుకే muonic hydrogen spectroscopy proton charge radius యొక్క అత్యంత ఖచ్చితమైన కొలతలు అందిస్తుంది.`,
    whyItMatters: `"Proton radius puzzle" కి దారితీసింది, ఇది ఆధునిక precision atomic physics యొక్క ప్రధాన focus.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g-factor',
    value: '−2.00233',
    unit: 'dimensionless',
    exact: '−2.0023318418',
    category: 'Particle',
    description: 'కనుగొనబడని heavy particles కి కీలకమైన probe.',
    discoveredBy: 'Experimental / QED calculation',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Electron లాగే, muon కి anomalous magnetic moment ae = 0.001 165 920 59 ఉంటుంది.`,
    simpleExample: `Fermilab లో g-2 experiment, supersymmetry లేదా ఇతర theories నుండి "virtual" heavy particles muon యొక్క magnetic spin ని ప్రభావితం చేస్తున్నాయా అని తనిఖీ చేయడానికి దీన్ని కొలుస్తుంది.`,
    deepMeaning: `ప్రస్తుత experimental విలువ Standard Model prediction తో ~4.2 standard deviations తేడా చూపిస్తుంది. Resolution అనేది hadronic vacuum polarisation యొక్క lattice QCD calculations యొక్క ఖచ్చితత్వంపై ఆధారపడుతుంది.`,
    whyItMatters: `ప్రస్తుతం తెలిసిన Standard Model మరియు experiment మధ్య అత్యంత ముఖ్యమైన discrepancies లో ఒకటి.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron Mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'Heavy hydrogen యొక్క nucleus — అతి సరళమైన nuclear bound state.',
    discoveredBy: 'Harold Urey (1931) · Nobel బహుమతి 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Deuteron అనేది deuterium యొక్క nucleus (ఒక proton మరియు ఒక neutron). దాని binding energy 2.224 MeV.`,
    simpleExample: `Binding energy చాలా చిన్నది (helium-4 తో పోల్చండి: 28.3 MeV). ఈ పెళుసుదనం Big Bang లో "deuterium bottleneck" సృష్టించింది, భారమైన మూలకాల నిర్మాణాన్ని ఆలస్యం చేసింది.`,
    deepMeaning: `Deuteron అతి సరళమైన nuclear bound state — hydrogen atom కి analogue. దాని zero కాని quadrupole moment nuclear force కి tensor component ఉందని నిరూపిస్తుంది. సూర్యుని మొదటి fusion step (p + p → d + e⁺ + νe) అసాధారణంగా మందగా ఉంటుంది; సూర్యుని దీర్ఘాయువు ఈ bottleneck వల్ల.`,
    whyItMatters: `Nuclear force theory యొక్క fundamental test bed. Deuterium nuclear reactors లో neutron moderator గా మరియు pharmaceutical research లో ఉపయోగపడుతుంది.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron Magnetic Moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'అతి సరళమైన nucleus యొక్క magnetic moment.',
    discoveredBy: 'Nuclear Physics / NMR studies',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Deuteron యొక్క magnetic moment 0.857 nuclear magnetons.`,
    simpleExample: `Spins simply aligned అయితే, sum μp + μn = 0.880 μN అవుతుంది. వాస్తవ విలువ 0.857 μN. ఈ తేడా wavefunction లో D-wave admixture యొక్క orbital magnetic moment ద్వారా ఖచ్చితంగా వివరించబడుతుంది.`,
    deepMeaning: `Deuteron magnetic moment లెక్కించిన మరియు కొలిచిన దానికి మధ్య agreement nuclear force models ని validate చేస్తుంది. Deuteron NMR molecular dynamics అధ్యయనంలో ఉపయోగపడుతుంది.`,
    whyItMatters: `Nuclear structure model మరియు pion exchange theory యొక్క అందమైన confirmation.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g-factor',
    value: '0.8574',
    unit: 'dimensionless',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'Deuteron magnetic moment ను nuclear magneton కు అనుసంధానిస్తుంది.',
    discoveredBy: 'పొందబడింది',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Electron (g ≈ −2) లేదా proton (g ≈ 5.586) కాదు, deuteron యొక్క g-factor 1 కంటే తక్కువ.`,
    simpleExample: `ఈ విలువ nucleus లోపల proton మరియు neutron magnetic moments మధ్య partial cancellation ని reflect చేస్తుంది.`,
    deepMeaning: `Precision measurements, meson exchange currents మరియు relativistic effects వంటి corrections ద్వారా neutron magnetic moment extraction ని అనుమతిస్తాయి.`,
    whyItMatters: `Complex nuclear force models ని 0.1% స్థాయిలో validate చేయడానికి ఉపయోగపడుతుంది.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion Mass',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'Helium-3 యొక్క nucleus — రెండు protons మరియు ఒక neutron.',
    discoveredBy: 'Nuclear physics experimental data',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Helion అనేది helium-3 యొక్క nucleus. దాని binding energy 7.718 MeV.`,
    simpleExample: `Superfluid helium-3 అనేది unconventional superconductivity మరియు topological quantum states కి model system.`,
    deepMeaning: `He-3, triton యొక్క mirror nucleus. వాటి మధ్య చిన్న mass తేడా nuclear forces యొక్క charge symmetry ని పరీక్షిస్తుంది. Helion g-factor −4.255 μN — single neutron యొక్క dominant contribution ని reflect చేస్తుంది.`,
    whyItMatters: `High cross-section neutron detectors లో మరియు hyperpolarized lung MRI లో ఉపయోగపడుతుంది.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha Particle Mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'Helium-4 nucleus — అసాధారణంగా స్థిరంగా, 28.3 MeV binding energy.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `Alpha particle అనేది helium-4 nucleus. ఇది nucleon వారీ 7.074 MeV binding energy కలిగి ఉంటుంది — binding energy curve యొక్క peak కు దగ్గరగా.`,
    simpleExample: `Alpha decay half-lives 20 orders of magnitude విస్తరిస్తాయి (0.3 μs నుండి 14 billion years వరకు). రెండూ Gamow యొక్క quantum tunnelling theory ద్వారా వివరించబడతాయి.`,
    deepMeaning: `Alpha particle యొక్క అసాధారణ stability వల్లనే ఇది radioactive decay లో ప్రాధాన్యంగా emit అవుతుంది. ఇది zero spin మరియు zero magnetic moment కలిగి ఉంటుంది — పూర్తిగా closed-shell nucleus. Triple-alpha process (3α → ¹²C) కి carbon-12 లో 7.65 MeV (Hoyle state) వద్ద resonance అవసరం. ఈ resonance లేనిదే carbon ఉండేది కాదు.`,
    whyItMatters: `చాలా heavy nucleus decays యొక్క product. Triple-alpha process విశ్వంలో సమస్త carbon యొక్క మూలం. Cancer కి targeted alpha radiotherapy లో ఉపయోగపడుతుంది.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomic Mass స్థిరాంకం',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'ఉష్ణగతిక',
    description: 'Carbon-12 mass యొక్క 1/12 — atomic masses యొక్క సహజ ప్రమాణం.',
    discoveredBy: 'అంతర్జాతీయ ప్రమాణం (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `Atomic mass unit (u, లేదా dalton, Da) అనేది carbon-12 atom యొక్క ఒక atom mass యొక్క 1/12 గా నిర్వచించబడింది.`,
    simpleExample: `Carbon-12 = సరిగ్గా 12 u. Hydrogen = 1.0078 u. 50 kDa protein mass 50,000 × 1.661 × 10⁻²⁷ kg.`,
    deepMeaning: `Conversion 1 u = 931.494 MeV/c² nuclear physics లో అత్యంత ఉపయోగకరమైన వాటిల్లో ఒకటి. Nuclear mass differences of milliatomic mass units, MeV-scale energies విడుదల చేస్తాయి. Carbon-12 ఎంపిక 1961లో physics మరియు chemistry communities మధ్య compromise.`,
    whyItMatters: `Nuclear physics, mass spectrometry మరియు protein masses daltons లో వ్యక్తపరిచే biochemistry అన్నింటికీ పునాది.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molar Mass స్థిరాంకం',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'ఉష్ణగతిక',
    description: 'Atomic mass unit ను molar mass కు అనుసంధానిస్తుంది.',
    discoveredBy: 'SI redefinition (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu, atomic mass unit ను molar mass కు అనుసంధానిస్తుంది: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Mu ≈ 1 g/mol కావడం వల్ల, ఒక పదార్థం యొక్క molar mass grams లో దాని relative atomic mass కి సమానం (ఉదా. Water ~18.015 g/mol).`,
    deepMeaning: `చారిత్రకంగా సరిగ్గా 1 g/mol. 2019 తర్వాత, NA మరియు mu రెండూ స్వతంత్రంగా నిర్వచించబడ్డాయి, కాబట్టి Mu ఇకపై సరిగ్గా 1 g/mol కాదు — సుమారు 10⁻⁹ తేడా ఉంటుంది. ఇది practical purposes కి negligible కానీ కొత్త SI ముఖ్యంగా వేరుగా ఉందని reminder.`,
    whyItMatters: `Chemistry లో stoichiometric calculations కు పునాది. ప్రతి mole-to-gram conversion దీనిపై ఆధారపడుతుంది.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molar Planck స్థిరాంకం',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'ఉష్ణగతిక',
    description: 'Molar స్థాయికి scale చేసిన Planck constant — NA × h.',
    discoveredBy: 'పొందబడింది',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `Unit frequency కి ఒక mole photons energy.`,
    simpleExample: `Photochemistry లో, ఒక "Einstein" (ఒక mole photons) energy NAhf.`,
    deepMeaning: `Ideal gas యొక్క absolute entropy కి Sackur-Tetrode equation లో కనిపిస్తుంది. ఇది molar స్థాయిలో quantum mechanical partition function ను macroscopic thermodynamic quantities కు అనుసంధానిస్తుంది.`,
    whyItMatters: `Photochemistry మరియు statistical thermodynamics కు మూలభూతం.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Ideal Gas యొక్క Molar Volume (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'ఉష్ణగతిక',
    description: 'STP వద్ద ఒక mole ideal gas ఆక్రమించే volume.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `0°C మరియు 101,325 Pa వద్ద, ఏ ideal gas యొక్క ఒక mole 22.413... litres ఆక్రమిస్తుంది.`,
    simpleExample: `STP వద్ద ఒక litre hydrogen మరియు ఒక litre oxygen సరిగ్గా అదే సంఖ్యలో molecules (2.688 × 10²²) కలిగి ఉంటాయి.`,
    deepMeaning: `Ideal gas law నుండి: V = nRT/P. అన్ని ideal gases STP వద్ద అదే molar volume కలిగి ఉంటాయని Avogadro యొక్క insight ఒక విప్లవాత్మక ఆవిష్కరణ.`,
    whyItMatters: `Gas stoichiometry లో చాలా practically ఉపయోగకరమైన సంఖ్యల్లో ఒకటి.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt స్థిరాంకం',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'ఉష్ణగతిక',
    description: 'STP వద్ద ideal gas యొక్క cubic metre లో molecules సంఖ్య.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `సముద్ర మట్టం వద్ద గాలి molecules సంఖ్య సుమారు 2.687 × 10²⁵ per cubic metre.`,
    simpleExample: `STP వద్ద గాలి molecule యొక్క mean free path సుమారు 66 nm. Collision frequency ~10¹⁰ per second.`,
    deepMeaning: `Loschmidt 1865లో gas viscosity మరియు molecular diameter ఉపయోగించి దీన్ని అంచనా వేశాడు. ఇది macroscopic volume లో molecules యొక్క మొదటి serious estimate మరియు atoms definite sizes కలిగి ఉన్నాయని మొదటి direct evidence. Rayleigh scattering (ఆకాశం ఎందుకు నీలిరంగులో ఉంటుందో) n₀ కి అనులోమానుపాతంలో ఉంటుంది.`,
    whyItMatters: `Atmospheric physics మరియు atomic theory చరిత్రకు మూలభూతం.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Silicon యొక్క Molar Volume',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'ఉష్ణగతిక',
    description: 'Silicon atoms ఒక mole దాని crystal lattice లో ఆక్రమించే volume.',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `Diamond cubic structure లో solid silicon యొక్క ఒక mole volume.`,
    simpleExample: `X-ray diffraction ద్వారా lattice parameter 'a' మరియు macroscopic density 'ρ' కొలిచి NA ని 2 parts per billion కు కనుగొనండి.`,
    deepMeaning: `Silicon, X-ray crystal density method కి reference material. Avogadro Project 2019లో kilogram ను redefine చేయడానికి అసాధారణ perfection యొక్క 1 kg silicon spheres ఉపయోగించింది. ఇది X-ray crystallography ను macroscopic mass standards కు అనుసంధానిస్తుంది.`,
    whyItMatters: `2019లో kilogram పునర్నిర్వచనానికి కేంద్రం.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Carbon-12 యొక్క Molar Mass',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'ఉష్ణగతిక',
    description: 'ఒక mole carbon-12 atoms యొక్క mass.',
    discoveredBy: 'SI redefinition (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `2019 కి ముందు, ఇది సరిగ్గా 12 g/mol. ఇప్పుడు, కొత్త SI లో, ఇది చిన్న measured uncertainty కలిగి ఉంటుంది.`,
    simpleExample: `సరిగ్గా 12 g/mol నుండి deviation సుమారు 10 parts per billion — chemistry కి పూర్తిగా negligible కానీ metrology కి critical.`,
    deepMeaning: `NA ని ఖచ్చితంగా నిర్వచించడం మరియు atomic mass unit యొక్క చారిత్రక నిర్వచనం మధ్య inconsistency ని reflect చేస్తుంది. Base units ఇప్పుడు మూలభూత స్థిరాంకాలను నిర్ణయించడం ద్వారా నిర్వచించబడ్డాయి.`,
    whyItMatters: `కొత్త SI, material artifacts చేత కాకుండా constants చేత నిర్వచించబడుతుందని reminder.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'మొదటి Radiation స్థిరాంకం',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'ఉష్ణగతిక',
    description: 'Blackbody radiation intensity యొక్క overall scale నిర్ణయిస్తుంది — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Planck blackbody radiation law లో spectral radiance కి కనిపిస్తుంది.`,
    simpleExample: `సూర్యుడు ~502 nm (ఆకుపచ్చ) వద్ద peak అవుతుంది. Solar cells c₁ ఉపయోగించి ఖచ్చితంగా లెక్కించిన ఈ Planck spectrum కి match అవ్వేందుకు design చేయబడ్డాయి.`,
    deepMeaning: `Planck radiation law 1900లో quantum mechanics ను ప్రారంభించింది. Planck యొక్క quantum hypothesis high-frequency divergence (ultraviolet catastrophe) ను అణిచే exponential factor ని ప్రవేశపెట్టింది.`,
    whyItMatters: `Astrophysics, solar energy మరియు cosmology కు మూలభూతం.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'Spectral Radiance కి మొదటి Radiation స్థిరాంకం',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'ఉష్ణగతిక',
    description: 'c₁ ని π తో భాగిస్తే వచ్చేది — unit solid angle కి radiance ఇస్తుంది.',
    discoveredBy: 'పొందబడింది',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Hemispherical spectral irradiance కాదు, unit solid angle కి spectral radiance ఇస్తుంది.`,
    simpleExample: `Telescope sensitivity లేదా camera exposure వంటి optical system performance సరిగ్గా లెక్కించడానికి అవసరం.`,
    deepMeaning: `Integrated hemisphere emission మరియు నిర్దిష్ట direction లో radiance మధ్య తేడాను reflect చేస్తుంది. Lambertian emitter కి, సంబంధం π factor కలిగి ఉంటుంది.`,
    whyItMatters: `Radiometry మరియు satellite remote sensing లో అవసరమైనది.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'రెండవ Radiation స్థిరాంకం',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'ఉష్ణగతిక',
    description: 'Planck function లో wavelength మరియు temperature ని అనుసంధానిస్తుంది — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Planck function యొక్క exponent లో కనిపిస్తుంది. Quantum మరియు classical regimes మధ్య crossover ని నిర్ణయిస్తుంది.`,
    simpleExample: `Wien's displacement law (λ_max × T = b) c₂ నుండి derived. 310 K వద్ద శరీరాలు mid-infrared లో peak అవుతాయి కాబట్టి thermal cameras పనిచేస్తాయి.`,
    deepMeaning: `చారిత్రకంగా, c₁/c₂ నిష్పత్తి Boltzmann's constant స్వతంత్రంగా కొలవడానికి ఉపయోగించబడింది. గది temperature వద్ద, mid-infrared radiation కి quantum corrections ముఖ్యమవుతాయి.`,
    whyItMatters: `Climate science, thermal imaging మరియు stellar physics కు మూలభూతం.`
  },

  {
    symbol: 'g',
    name: 'Gravity యొక్క Standard Acceleration',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (ఖచ్చితమైన విలువ)',
    category: 'విశ్వజనీన',
    description: 'Earth ఉపరితలంపై gravitational acceleration యొక్క standard విలువ.',
    discoveredBy: 'International Bureau of Weights and Measures (1901)',
    formula: 'W = mg',
    whatItSays: `Gravitational acceleration కి ఒక నిర్వచించిన conventional standard.`,
    simpleExample: `Actual gravity equator వద్ద ~9.780 m/s² నుండి poles వద్ద ~9.832 m/s² వరకు మారుతుంది. Standard విలువ 45° latitude వద్ద కొలతలతో match అయ్యేందుకు ఎంచుకోబడింది.`,
    deepMeaning: `Mass మరియు force మధ్య conversion factor గా కనిపిస్తుంది (kilogram-force). Gravimeters tidal deformations మరియు groundwater మార్పులు గుర్తించడానికి local g ని 9 significant figures కు కొలుస్తాయి. Equivalence principle (General Relativity) ఇది flat spacetime లో acceleration నుండి వేరు చేయలేదని చెప్తుంది.`,
    whyItMatters: `Engineering, atmospheric pressure నిర్వచనం మరియు ఖచ్చితమైన weighing కు baseline.`
  },

  // ── భాగం 19: Atomic Units ─────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'Length యొక్క a.u.',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Atomic units లో Bohr radius.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `Atomic system లో length యొక్క ప్రమాణం. అన్ని bond lengths Bohr లో వ్యక్తపరచబడతాయి.`,
    simpleExample: `Typical bond lengths: H-H = 1.40 a₀, C-C = 2.92 a₀.`,
    deepMeaning: `Atomic units లో ħ = me = e = 4πε₀ = 1. ఇది quantum chemistry సమీకరణాలను చాలా సులభం చేస్తుంది.`,
    whyItMatters: `Computational chemistry లో standard ప్రమాణం.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Mass యొక్క a.u.',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atomic',
    description: 'Atomic units లో electron mass.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `Atomic system లో mass యొక్క ప్రమాణం.`,
    simpleExample: `Quantum chemistry లో, అన్ని masses me యొక్క multiples గా వ్యక్తపరచబడతాయి.`,
    deepMeaning: `Schrödinger equation ను సులభం చేయడానికి మూలభూత constants ని 1 కు set చేసే వ్యవస్థలో భాగం.`,
    whyItMatters: `అన్ని electronic structure calculations కు base mass.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'Time యొక్క a.u.',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atomic',
    description: 'Atoms లో electronic motion యొక్క సహజ timescale.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Hartree energy scale వద్ద ఒక radian phase evolution కి time.`,
    simpleExample: `హైడ్రోజన్ ground state లో electron యొక్క orbital period 2π atomic time units ≈ 152 attoseconds.`,
    deepMeaning: `Attosecond physics ఈ timescale లో real time లో electron dynamics అధ్యయనం చేస్తుంది. Nobel Prize 2023 attosecond pulse technology కి అందించబడింది.`,
    whyItMatters: `Atoms లో electron motion ని నేరుగా observe చేయడానికి అనుమతిస్తుంది.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Energy యొక్క a.u.',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atomic',
    description: 'Atomic units లో Hartree energy.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Atomic physics లో energy ప్రమాణం.`,
    simpleExample: `Hartrees లో chemical bond energies: H₂ bond = 0.174 Eh.`,
    deepMeaning: `అన్ని electronic structure calculations కు మూలభూత energy scale నిర్ణయిస్తుంది.`,
    whyItMatters: `DFT వంటి computational codes లో standard energy ప్రమాణం.`
  },

  {
    symbol: 'e',
    name: 'Charge యొక్క a.u.',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atomic',
    description: 'Atomic units లో elementary charge.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `Atomic units లో, proton కి charge +1, electron కి charge −1.`,
    simpleExample: `Helium nucleus charge +2 a.u.`,
    deepMeaning: `మూలభూత charge ను unity కు set చేయడం ద్వారా electromagnetic interaction math ని సులభం చేస్తుంది.`,
    whyItMatters: `Molecules లో charge distributions కు base unit.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'Velocity యొక్క a.u.',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atomic',
    description: 'హైడ్రోజన్ ground state లో electron యొక్క velocity.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — Bohr model లో electron యొక్క velocity.`,
    simpleExample: `Gold (Z=79) లో, 1s electron velocity ~0.58c, ఇది gold యొక్క పసుపు రంగుకు బాధ్యత వహించే relativistic contraction కి దారితీస్తుంది.`,
    deepMeaning: `భారమైన atoms కి, c కు దగ్గరయ్యే velocities relativistic corrections ని అవసరం చేస్తాయి.`,
    whyItMatters: `Chemistry లో relativistic effects ఎప్పుడు ముఖ్యమవుతాయో నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'Momentum యొక్క a.u.',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomic',
    description: 'హైడ్రోజన్ లో momentum uncertainty యొక్క సహజ scale.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. of velocity) = ħ/a₀.`,
    simpleExample: `Uncertainty principle ప్రకారం, a₀ లో localised అయిన electron కి momentum uncertainty సరిగ్గా ఒక atomic unit.`,
    deepMeaning: `Atoms యొక్క length scale ని orbiting electron యొక్క momentum కు నేరుగా అనుసంధానిస్తుంది.`,
    whyItMatters: `Electron diffraction మరియు quantum chemistry scattering ను నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'Force యొక్క a.u.',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atomic',
    description: 'Bohr radius వద్ద electron మరియు proton మధ్య electrostatic force.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Atomic scales కి చాలా పెద్దది (82 nN) కానీ మానవులకు imperceptible.`,
    simpleExample: `Atomic stability యొక్క basics: ఈ force మరియు quantum pressure మధ్య సమతుల్యత.`,
    deepMeaning: `Atoms ను కలిపి ఉంచే "జిగురు" యొక్క strength scale నిర్ణయిస్తుంది.`,
    whyItMatters: `Atomic bonding మరియు material strength ను నిర్ణయిస్తుంది.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'Electric Field యొక్క a.u.',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atomic',
    description: 'హైడ్రోజన్ లో electron అనుభవించే అసాధారణంగా తీవ్రమైన field.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Bohr radius వద్ద electric field (514 GV/m).`,
    simpleExample: `Atomic fields గాలి యొక్క breakdown field కంటే ~100,000 రెట్లు బలంగా ఉంటాయి.`,
    deepMeaning: `~10¹⁴ W/cm² కంటే ఎక్కువ intensities వద్ద, laser fields atoms నుండి electrons ను చింపేంత బలంగా ఉంటాయి, attosecond pulses సృష్టిస్తాయి.`,
    whyItMatters: `Strong-field laser physics మరియు field ionization కి baseline.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'Magnetic Flux Density యొక్క a.u.',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atomic',
    description: 'ఒక atomic unit కి సమానమైన magnetic field strength.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — ఏ laboratory magnet (~45 T) కంటే చాలా బలంగా.`,
    simpleExample: `Neutron star magnetic fields ~10⁸-10¹¹ Tesla కు చేరుతాయి, atomic unit ని మించిపోతాయి.`,
    deepMeaning: `ఈ scale వద్ద, photon propagation పై QED effects (vacuum birefringence) ముఖ్యమవుతాయి.`,
    whyItMatters: `White dwarfs మరియు magnetars అర్థం చేసుకోవడానికి critical.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'Permittivity యొక్క a.u.',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atomic',
    description: 'Atomic units కి scale చేసిన vacuum permittivity — 4πε₀.',
    discoveredBy: 'పొందబడింది',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `Atomic units లో, Coulomb force law కేవలం F = q₁q₂/r² అవుతుంది.`,
    simpleExample: `Quantum chemistry code లో అన్ని electrostatic math ని సులభం చేస్తుంది.`,
    deepMeaning: `Calculations నుండి 4πε₀ factor ను తొలగించే primary simplifications లో ఒకటి.`,
    whyItMatters: `Theoretical physics లో standard normalization.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'Magnetizability యొక్క a.u.',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomic',
    description: 'Magnetic field కి atom యొక్క energy యొక్క second-order response.',
    discoveredBy: 'పొందబడింది',
    formula: '1 a.u.',
    whatItSays: `NMR chemical shifts మరియు magnetic force measurements ద్వారా కొలవబడుతుంది.`,
    simpleExample: `MRI-scale magnetic fields కి molecules ఎలా respond అవుతాయో లెక్కించడానికి ఉపయోగపడుతుంది.`,
    deepMeaning: `Quantum స్థాయిలో molecular magnetic susceptibilities అధ్యయనంలో మూలభూత రాశి.`,
    whyItMatters: `NMR spectroscopy మరియు quantum chemistry simulations లో ఉపయోగపడుతుంది.`
  }

];

// =============================================================================
// i18n మెటాడేటా
// =============================================================================

export const I18N_METADATA_TE = {
  language: 'te',
  languageName: 'తెలుగు',
  languageNameEnglish: 'Telugu',
  translationVersion: '1.0.0',
  sourceVersion: 'CODATA 2022',
  translationDate: '2026-05-17',
  translationRules: {
    physicsTerms: 'ఇంగ్లీషులోనే ఉంచబడ్డాయి (velocity, mass, force, energy, etc.)',
    scientistNames: 'ఇంగ్లీషులోనే ఉంచబడ్డాయి (Planck, Boltzmann, Newton, etc.)',
    numbers: 'అసలు రూపంలోనే ఉన్నాయి',
    symbols: 'అసలు రూపంలోనే ఉన్నాయి',
    units: 'అసలు రూపంలోనే ఉన్నాయి (SI units)',
    formulas: 'అసలు రూపంలోనే ఉన్నాయి'
  },
  categoryTranslations: {
    'Universal':      'విశ్వజనీన',
    'Electromagnetic': 'విద్యుదయస్కాంత',
    'Thermodynamic':  'ఉష్ణగతిక',
    'Atomic':         'Atomic',
    'Particle':       'Particle',
    'Nuclear':        'Nuclear'
  }
};
