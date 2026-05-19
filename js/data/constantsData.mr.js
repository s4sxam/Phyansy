// =============================================================================
// constantsData.mr.js — भौतिक स्थिरांक डेटाबेस (मराठी आवृत्ती) — परिष्कृत
// मूल्ये: CODATA 2022 | सखोल स्पष्टीकरणे: Phyansy Reference Guide
// नियम:
//   • Velocity, mass, frequency, wavelength, energy, charge, current,
//     temperature, pressure, force, power, flux, spin, impedance,
//     permittivity, permeability, conductance, resistance, momentum,
//     capacitance इ. भौतिकशास्त्रीय परिभाषा शब्द इंग्रजीतच ठेवले आहेत.
//   • Oppenheimer, Planck, Boltzmann, Avogadro, Faraday, Sommerfeld,
//     Rutherford, Chadwick, Thomson, Millikan, Josephson, von Klitzing,
//     Rydberg, Bohr, Hartree, Wien, Stefan, Fermi, Higgs, Dirac,
//     Lorentz, Maxwell, Feynman, Schwinger, Landauer, Onsager,
//     Loschmidt, Essen, Perrin, Cavendish, Stern, Perl, Urey
//     इ. सर्व शास्त्रज्ञांची नावे इंग्रजीतच ठेवली आहेत.
//   • सर्व संख्या, SI symbol, mathematical expression, formula
//     इंग्रजीतच ठेवल्या आहेत.
//   • भाषा: शुद्ध, प्रमाणित मराठी — शालेय पातळीपेक्षा उच्च;
//     वैज्ञानिक व शैक्षणिक लेखनास योग्य.
// =============================================================================

export const CONSTANTS_MR = [

  // ── भाग १: सार्वत्रिक / परिभाषित स्थिरांक ────────────────────────────────

  {
    symbol: 'c',
    name: 'निर्वातातील प्रकाशाचा वेग',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (अचूक)',
    category: 'सार्वत्रिक',
    description: 'कार्यकारण-क्रमाची मूलभूत speed limit — कारणाचा अवकाश-काळातील सर्वोच्च वेग.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `प्रकाश एका परिपूर्ण निर्वातात एका सेकंदात अचूक 299,792,458 मीटर अंतर कापतो. हे मोजलेले अंदाजे मूल्य नाही — 1983 पासून 'मीटर' हाच या संख्येनुसार परिभाषित केला आहे. त्यामुळे c हे आता आंतरराष्ट्रीय व्याख्येनुसार एक अचूक, निश्चित पूर्णांक आहे.`,
    simpleExample: `चंद्रावरून येणारा प्रकाश तुमच्या डोळ्यांपर्यंत सुमारे 1.28 सेकंदात पोहोचतो. सूर्याचा प्रकाश अंदाजे 8 मिनिटे 20 सेकंदांत येतो. सर्वांत जवळचा तारा, Proxima Centauri, 4.24 प्रकाश-वर्षे दूर आहे — म्हणजे प्रकाशाला ते अंतर पार करायला 4.24 वर्षे लागतात.`,
    deepMeaning: `c हे केवळ 'प्रकाश किती जलद जातो' याचे मोजमाप नाही. ते विश्वातील कार्यकारण-क्रमाची मूलभूत speed limit आहे — कोणतीही माहिती, energy किंवा कारण-प्रभाव ज्या कमाल दराने पसरू शकतो तो दर. Einstein च्या Special Relativity ने दाखवले की c हे प्रत्येक निरीक्षकासाठी समान असते, मग ते कितीही वेगाने गतिमान असोत. यामुळे Newton चा 'परिपूर्ण काळ' हा संकल्पना कोलमडतो. दोन सापेक्ष गतीने चालणारे निरीक्षक अंतर, काळ-अंतराल आणि एकाच-वेळी घडणाऱ्या घटनांबद्दल वेगवेगळ्या मापाशी येतात — परंतु ते नेहमीच एकच c मोजतात. E = mc² सांगतो की mass आणि energy एकच गोष्ट आहे, फक्त c² हा रूपांतरण घटक आहे.`,
    whyItMatters: `c शिवाय Special Relativity नाही, E = mc² नाही, GPS दुरुस्ती नाही (GPS उपग्रहांना Special आणि General Relativistic time dilation दोन्हींसाठी दुरुस्ती करावी लागते), तार्यांचे आकलन नाही, कण-भौतिकशास्त्र नाही. हे आधुनिक भौतिकशास्त्राचा कणा आहे.`
  },

  {
    symbol: 'h',
    name: 'Planck स्थिरांक',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (अचूक)',
    category: 'सार्वत्रिक',
    description: 'विद्युत-चुंबकीय क्रियेचे quantum — photon च्या energy चे नियामक.',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `Energy ही 'quanta' म्हणजे विविक्त (discrete) पॅकेटमध्ये येते. एकाच विद्युत-चुंबकीय radiation च्या quantum — photon — ची energy E = hf आहे, जिथे f म्हणजे radiation ची frequency. h हा तरंग गुणधर्म (frequency) आणि कण गुणधर्म (energy) यांना जोडणारा आनुपातिकता स्थिरांक आहे.`,
    simpleExample: `दृश्यमान लाल प्रकाशाची frequency सुमारे 4.3 × 10¹⁴ Hz असते. लाल प्रकाशाच्या एका photon ची energy: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV. ही छोटी energy तुमच्या डोळ्यातील एका rhodopsin रेणूला उत्तेजित करण्यासाठी पुरेशी आहे — दृष्टीची सुरुवात इथेच होते.`,
    deepMeaning: `Planck च्या आधी, शास्त्रीय भौतिकशास्त्र सांगत होते की एखादी गरम वस्तू उच्च frequencies वर असीमित energy उत्सर्जित करते — याला 'ultraviolet catastrophe' म्हणतात. 1900 साली Max Planck ने हे सोडवले: energy सतत (continuous) नसून quantised आहे असे गृहीत धरून. Einstein ने याचा वापर photoelectric effect स्पष्ट करण्यासाठी केला. h ला 'क्रियेचे quantum' असेही म्हणतात — त्याचे मापन energy × time असे आहे. h चे संक्षिप्त रूप ħ = h/2π हे commutator [x̂, p̂] = iħ मध्ये दिसते — क्वांटम यंत्रशास्त्राचे गणितीय हृदय — आणि Heisenberg Uncertainty Principle मध्ये: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h हे क्वांटम विश्व आणि शास्त्रीय विश्व यांच्यातील सीमारेषा आहे. जेव्हा एखाद्या प्रणालीची क्रिया h पेक्षा खूप मोठी असते, तेव्हा शास्त्रीय यंत्रशास्त्र कार्य करते. h शिवाय atoms कोलमडतात, रसायनशास्त्र अस्तित्वात नसते, आणि आपण ओळखतो ते विश्व अस्तित्वात नसते.`
  },

  {
    symbol: 'ħ',
    name: 'संक्षिप्त Planck स्थिरांक',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (अचूक)',
    category: 'सार्वत्रिक',
    description: 'h/2π — क्वांटम यंत्रशास्त्रातील angular momentum चे नैसर्गिक एकक.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (ज्याला 'h-bar' म्हणतात) हे फक्त h ला 2π ने भागलेले आहे. जेव्हा साध्या frequency f (cycles per second) ऐवजी angular frequency ω (radians per second) वापरतो, तेव्हा हे येते, कारण ω = 2πf.`,
    simpleExample: `एका electron चा spin ħ/2 आहे. एका photon चा spin ħ आहे. Orbital angular momentum नेहमीच ħ च्या पूर्णांक पटींत असते — म्हणून ħ हे फिरण्याचे 'अणू' आहे.`,
    deepMeaning: `क्वांटम यंत्रशास्त्रात ħ केवळ एक सोयीस्कर संक्षेप नाही. ते angular momentum चे मूलभूत quantum आहे. Quantum field theory मध्ये ħ quantum fluctuations चे परिमाण नियंत्रित करतो. ħ → 0 केल्यास शास्त्रीय field theory परत मिळते. क्वांटम यंत्रशास्त्राची संपूर्ण रचना — commutation relations, path integrals, uncertainty principles — ħ द्वारे नियंत्रित होते.`,
    whyItMatters: `कण-भौतिकशास्त्रज्ञ वापरत असलेल्या natural units मध्ये ħ = c = 1 ठेवले जाते, ज्यामुळे समीकरणे मोठ्या प्रमाणात सोपी होतात आणि सिद्धांतांची खोल भौमितिक रचना प्रकट होते.`
  },

  {
    symbol: 'e',
    name: 'मूलभूत विद्युत-भार',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (अचूक)',
    category: 'विद्युत-चुंबकीय',
    description: 'स्वतंत्रपणे अस्तित्वात असू शकणारा सर्वांत लहान electric charge — charge हे quantised आहे.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `हे एका proton (धन) किंवा एका electron (ऋण) वर असणाऱ्या electric charge चे परिमाण आहे. निसर्गातील सर्व दृश्यमान electric charge हे e च्या पूर्णांक पटींत असते. Charge हे quantised आहे.`,
    simpleExample: `1 ampere च्या current म्हणजे एका ठिकाणाहून दर सेकंदाला 1 coulomb charge वाहते. प्रत्येक electron 1.602 × 10⁻¹⁹ C वाहत असल्याने, 1 A च्या current मध्ये दर सेकंदाला सुमारे 6.24 × 10¹⁸ electrons जातात.`,
    deepMeaning: `Charge चे quantisation Robert Millikan यांनी त्यांच्या प्रसिद्ध 'oil-drop experiment' मधून प्रायोगिकरित्या सिद्ध केले. त्यांनी एका electric field मध्ये तरंगणाऱ्या तेलाच्या थेंबांवरील charge मोजले आणि सर्व charges एका मूलभूत एककाच्या — e च्या — पूर्णांक पटींत असल्याचे आढळले. Fine-structure constant α ≈ 1/137 हे विद्युत-चुंबकीय बलाच्या ताकदीचे आयाम-विरहित (dimensionless) मोजमाप आहे. Quarks मध्ये e/3 आणि 2e/3 असे charge असतात, परंतु ते hadrons च्या आत कायमच बंदिस्त असतात — मुक्त अवस्थेत भिन्नांश charge कधी दिसत नाही.`,
    whyItMatters: `e हे सर्व atomic आणि आण्विक (molecular) परस्परक्रियांचे प्रमाण ठरवते. रसायनशास्त्र, जीवशास्त्र, इलेक्ट्रॉनिक्स आणि पदार्थविज्ञान (materials science) हे मूलतः e च्या मूल्यावर अवलंबून आहेत. e थोडे वेगळे असते तर आपल्याला माहीत असलेले जीवन अस्तित्वात नसते.`
  },

  {
    symbol: 'k',
    name: 'Boltzmann स्थिरांक',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (अचूक)',
    category: 'ऊष्मागतिकीय',
    description: 'temperature आणि kinetic energy यांच्यातील दुवा — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (kB असेही लिहितात) हे वैयक्तिक कणांच्या सूक्ष्म जगाला temperature च्या मॅक्रोस्कोपिक जगाशी जोडणारा दुवा आहे. ते temperature — एखाद्या समूहाचा सांख्यिकीय गुणधर्म — प्रति कण energy मध्ये रूपांतरित करते. प्रत्येक degree of freedom ला सरासरी (1/2)kT kinetic energy मिळते.`,
    simpleExample: `खोलीच्या temperature वर (T = 293 K): kT ≈ 0.0253 eV. हे खोलीच्या temperature वरील वैशिष्ट्यपूर्ण thermal energy मापन आहे. रासायनिक बंधांच्या energies काही eV असतात, त्यामुळे खोलीच्या temperature वरील thermal energy त्यापेक्षा खूपच कमी आहे — हेच कारण आहे की बहुतेक रासायनिक बंध स्थिर असतात.`,
    deepMeaning: `Temperature हे मूलभूत प्रमाण नाही — ते कणांच्या सरासरी kinetic energy चे मोजमाप आहे. S = k ln(Ω) हे entropy ची माहिती आणि संभाव्यतेच्या संदर्भात व्याख्या करते, ऊष्मागतिकीला सूक्ष्म भौतिकशास्त्राशी जोडते. Boltzmann distribution T temperature वर E energy असलेल्या अवस्थेत प्रणाली असण्याची शक्यता देते: P(E) ∝ e^(−E/kT). हा घातांकी घटक — Boltzmann factor — रासायनिक अभिक्रियांच्या दरांपासून पृथ्वीच्या वातावरणातील रेणूंच्या वितरणापर्यंत सर्वांवर नियंत्रण ठेवतो.`,
    whyItMatters: `k हा ऊष्मागतिकी आणि सांख्यिकीय यंत्रशास्त्राचा पाया आहे. याशिवाय, सूक्ष्म भौतिकशास्त्राला temperature, pressure आणि entropy सारख्या मॅक्रोस्कोपिक निरीक्षण करण्यायोग्य गोष्टींशी जोडता येत नाही. 2019 पासून k हा एक अचूक परिभाषित स्थिरांक आहे, आणि kelvin याद्वारे परिभाषित केला जातो.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro स्थिरांक',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (अचूक)',
    category: 'ऊष्मागतिकीय',
    description: 'एका mole मधील घटकांची संख्या — अणू आणि मानवी मापाला जोडणारा दुवा.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `कोणत्याही पदार्थाच्या एका mole मध्ये अचूक 6.022 140 76 × 10²³ मूलभूत घटक (atoms, molecules, ions इ.) असतात. ही संख्या अणू मापाला मानवी मापाशी जोडणारा दुवा आहे.`,
    simpleExample: `12 ग्रॅम carbon-12 मध्ये अचूक एक mole carbon atoms असतात. ही संख्या अकल्पनीयरीत्या मोठी आहे: तुमच्याकडे एक mole वाळूचे कण असतील तर ते पृथ्वीच्या पृष्ठभागाला अनेक किलोमीटर खोलीने झाकतील.`,
    deepMeaning: `NA अणू mass unit ला ग्रॅमशी जोडते. 1 u = 1 gram / NA = 1.660 539 × 10⁻²⁷ kg. Molar gas constant R आणि Boltzmann constant k यांचा संबंध: R = NA × k = 8.314 J mol⁻¹ K⁻¹. Faraday constant F = NAe = 96,485 C/mol हे एक mole electrons च्या charge आहे. ऐतिहासिकदृष्ट्या, NA मोजणे हे 19व्या आणि 20व्या शतकाच्या सुरुवातीच्या भौतिकशास्त्राचे एक केंद्रीय आव्हान होते. Jean Perrin यांनी 1908 साली Brownian motion च्या मोजमापाने atoms च्या अस्तित्वाचे सिद्धीकरण केले.`,
    whyItMatters: `NA रसायनशास्त्राला परिमाणात्मक बनवतो. यामुळे रसायनशास्त्रज्ञ atoms ला वजन करून मोजू शकतात. प्रत्येक stoichiometric गणना, प्रत्येक औषधांचा मात्रा (dosage) हिशेब, प्रत्येक पदार्थविज्ञान (materials science) गणना NA वर अवलंबून आहे.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'दीप्तिमान कार्यक्षमता (Luminous Efficacy)',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (अचूक)',
    category: 'सार्वत्रिक',
    description: 'candela परिभाषित करतो — SI मधील एकमेव मानवी जीवशास्त्राशी संबंधित स्थिरांक.',
    discoveredBy: 'आंतरराष्ट्रीय व्याख्या (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `540 × 10¹² Hz (हिरवा प्रकाश, wavelength ≈ 555 nm) या विशिष्ट एकवर्णीय (monochromatic) frequency वर 1 watt radiant power म्हणजे मानवी डोळ्याला जाणवणाऱ्या 683 lumens प्रकाशमान flux (दीप्ती) शी समकक्ष आहे. हे दिवसाच्या उजेडात मानवी डोळ्याच्या सर्वाधिक संवेदनशीलतेशी जुळते.`,
    simpleExample: `1 watt शुद्ध हिरवा प्रकाश उत्सर्जित करणारा प्रकाश-स्रोत अचूक 683 lumens दृश्यमान प्रकाश निर्माण करतो. इतर कोणताही रंग कमी lumens per watt निर्माण करतो, कारण डोळा त्यांच्याबद्दल कमी संवेदनशील आहे.`,
    deepMeaning: `हा स्थिरांक SI प्रणालीतील एकमेव असा आहे जो मानवी जीवशास्त्रावर — विशेषतः मानवी डोळ्याच्या photopic (दिवसाच्या उजेडातील) वर्णक्रमीय (spectral) संवेदनशीलतेवर — अवलंबून आहे. 2019 पासून, candela ला Kcd अचूक 683 lm/W ठेवून परिभाषित केले आहे.`,
    whyItMatters: `Photometry, प्रकाश अभियांत्रिकी आणि सर्व optical प्रणाली रचनेसाठी मूलभूत. प्रत्येक दिव्यावरील प्रत्येक lumen वैशिष्ट्य या स्थिरांकापर्यंत मागे जाते.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium Hyperfine आवृत्ती',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (अचूक)',
    category: 'सार्वत्रिक',
    description: 'सेकंद परिभाषित करतो — सर्व आधुनिक कालमापनाचे हृदयस्पंद.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `caesium-133 अणूच्या ground state ला दोन hyperfine levels आहेत — electron च्या magnetic moment आणि nuclear magnetic moment यांच्यातील परस्परक्रियेमुळे विभाजित. जेव्हा atom या दोन levels दरम्यान संक्रमण (transition) करतो, तेव्हा तो अचूक 9,192,631,770 Hz frequency वर विकिरण (radiation) उत्सर्जित किंवा शोषून घेतो.`,
    simpleExample: `1967 पासून, एक सेकंद म्हणजे या विकिरणाचे अचूक 9,192,631,770 दोलन (oscillation) कालावधी. Caesium atomic clocks हे आतापर्यंत बांधलेले सर्वाधिक अचूक कालमापन यंत्र आहेत, जे 300 दशलक्ष वर्षांत एका सेकंदापेक्षा कमी वेळ गमावतात.`,
    deepMeaning: `Hyperfine splitting हे quantum electrodynamics मधून येते — electron च्या magnetic dipole moment आणि nuclear spin द्वारे निर्माण होणाऱ्या magnetic field यांच्यातील परस्परक्रिया. ही frequency मूलभूत तत्त्वांपासून (first principles) गणना करणे हे QED ची एक महत्त्वाची परीक्षा आहे. GPS, इंटरनेट (ज्याला समक्रमित (synchronized) घड्याळे लागतात), आर्थिक व्यवस्था आणि सर्व आधुनिक दूरसंचार थेट caesium atomic clock मानकांवर अवलंबून आहेत.`,
    whyItMatters: `संपूर्ण विज्ञानातील सर्वाधिक अचूक मोजमाप. आधुनिक सभ्यता — GPS, इंटरनेट समक्रमण, आर्थिक व्यवहार, 5G networks — सर्व या स्थिरांकावर अवलंबून आहे.`
  },

  // ── भाग २: विद्युत-चुंबकीय स्थिरांक ─────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'निर्वात विद्युत Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'विद्युत-चुंबकीय',
    description: 'निर्वातातून electric fields किती सहजपणे प्रवेश करतात याचे मोजमाप.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-naught) हे निर्वातातून electric field किती सहजपणे प्रवेश करू शकते याचे मोजमाप करते. हे Coulomb च्या नियमात येते — दोन point charges मधील force: F = (1/4πε₀) × (q₁q₂/r²). ε₀ जितका मोठा, तितका दिलेल्या charges आणि अंतरासाठी electrostatic force कमी.`,
    simpleExample: `पाण्याचा सापेक्ष permittivity εr ≈ 80 आहे, म्हणजे पाणी निर्वाताशी तुलनेत charges मधील electrostatic forces 80 पटींनी कमी करते — हेच कारण आहे की पाणी ionic संयुगांसाठी इतका उत्कृष्ट विलायक (solvent) आहे.`,
    deepMeaning: `ε₀ हे स्वतंत्रपणे परिभाषित नाही — ते c आणि μ₀ च्या परिभाषित मूल्यांवरून प्राप्त होते: ε₀ = 1/(μ₀c²). हे Maxwell च्या चारही समीकरणांच्या निर्वात स्वरूपात येते. Gauss च्या नियमात: ∮ E · dA = Q_enc/ε₀. कोणत्याही बंद पृष्ठाद्वारे (closed surface) एकूण electric flux हे बंदिस्त charge ला ε₀ ने भागल्याइतके असते. हे electric field मध्ये साठवलेल्या electromagnetic energy घनतेचे मापही करते: u_E = (1/2)ε₀E².`,
    whyItMatters: `Maxwell च्या सर्व चार समीकरणांमध्ये येतो. ε₀ शिवाय परिमाणात्मक electrostatics नाही, capacitor रचना नाही, आणि dielectrics चे आकलन नाही.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'निर्वात चुंबकीय Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'विद्युत-चुंबकीय',
    description: 'निर्वातातून magnetic fields किती सहजपणे प्रवेश करतात याचे मोजमाप.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-naught) हे निर्वातातून magnetic field किती सहजपणे प्रवेश करतो याचे मोजमाप करते. हे Biot-Savart नियम आणि Ampère च्या नियमात येते. d अंतरावर असलेल्या I₁ आणि I₂ current वाहणाऱ्या दोन समांतर तारांमधील force प्रति एकक लांबी: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `लोखंडाचा सापेक्ष permeability μr ~10,000 पर्यंत असतो — लोखंड निर्वाताशी तुलनेत magnetic fields प्रचंड प्रमाणात एकत्रित (concentrate) करतो. म्हणूनच transformer cores लोखंडापासून बनवतात: magnetic flux कार्यक्षमतेने मार्गदर्शन करण्यासाठी आणि वाढवण्यासाठी.`,
    deepMeaning: `2019 च्या SI पुनर्व्याख्येपूर्वी, μ₀ हे व्याख्येनुसार अचूक 4π × 10⁻⁷ N/A² होते. आता ते एक मोजलेले प्रमाण आहे ज्यात थोडी अनिश्चितता आहे. μ₀ Maxwell च्या correction सह Ampère च्या नियमात येतो: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). दुसरा घटक — Maxwell चा displacement current — निर्वातात electromagnetic waves अस्तित्वात येण्यास कारणीभूत ठरला आणि प्रकाश हे एक electromagnetic wave आहे या भाकिताकडे थेट नेले.`,
    whyItMatters: `μ₀ शिवाय magnetic fields नाहीत, electromagnetic induction नाही, electric motors नाहीत, transformers नाहीत, आणि radio waves नाहीत.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'निर्वाताचा वैशिष्ट्यपूर्ण Impedance',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'विद्युत-चुंबकीय',
    description: 'निर्वातातील electromagnetic wave मध्ये electric आणि magnetic fields चे गुणोत्तर.',
    discoveredBy: 'Maxwell च्या समीकरणांपासून व्युत्पन्न',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `जेव्हा electromagnetic wave निर्वातातून जाते, तेव्हा electric field च्या amplitude आणि magnetic field च्या amplitude चे गुणोत्तर: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `एखादी antenna 377 Ω शी impedance जुळवल्यावर कार्यक्षमतेने विकिरण करते. प्रति एकक क्षेत्र उत्सर्जित power (Poynting vector) S = E²/Z₀ आहे. हे dipole antennas पासून satellite dishes पर्यंत सर्वांच्या रचनेसाठी वापरले जाते.`,
    deepMeaning: `Z₀ हे मुक्त अवकाशाचा impedance आहे — हे प्रसारित होणाऱ्या electromagnetic wave मध्ये प्रति एकक magnetic field किती electric field मिळते ते सांगते. हे electromagnetic wave प्रसारणासाठी निर्वाताचा 'प्रतिरोध' आहे, transmission line च्या characteristic impedance प्रमाणे. पृथ्वीपर्यंत पोहोचणाऱ्या सूर्यप्रकाशाचा electric field amplitude √(1361 × Z₀) ≈ 716 V/m इतका आहे.`,
    whyItMatters: `Antenna रचना, radar cross-sections, antenna gain आणि सर्व wireless communication link budgets साठी आवश्यक.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson स्थिरांक',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'विद्युत-चुंबकीय',
    description: 'अतिवाहक (superconducting) Josephson junctions मध्ये voltage आणि frequency यांचा संबंध.',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson constant AC Josephson effect मध्ये voltage आणि frequency यांचा संबंध जोडतो. जेव्हा Josephson junction (दोन superconductors मधील पातळ विरोधी अवरोध) वर DC voltage V लावला जातो, तेव्हा f = 2eV/h frequency वर alternating current निर्माण होतो.`,
    simpleExample: `Josephson junction वर 1 millivolt voltage लावल्यास ~483.6 GHz वर AC दोलन होते — microwave क्षेत्रात. हे 10¹⁰ मध्ये 1 भाग एवढ्या अचूकतेसह voltage मानके परिभाषित करण्यासाठी वापरले जाते.`,
    deepMeaning: `2 चा घटक यायला कारण म्हणजे superconductivity मध्ये Cooper pairs — 2e charge असलेले electron जोडे — असतात. Josephson junction हे एक macroscopic quantum यंत्र आहे जिथे दोन superconductors मधील quantum phase फरक supercurrent चालवतो. AC Josephson effect हे एक चमकदार प्रदर्शन आहे की quantum mechanics superconductors मध्ये macroscopic scales वर कार्य करते.`,
    whyItMatters: `जगभरात वापरला जाणारा प्राथमिक voltage मानक. उपलब्ध सर्वात अचूक electrical मोजमाप. Quantum metrology आणि superconducting quantum computing साठी मूलभूत.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing स्थिरांक',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'विद्युत-चुंबकीय',
    description: 'electrical resistance चे quantum — h/e² — quantum Hall effect मधून.',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² हे resistance चे quantum आहे. हे quantum Hall effect मध्ये येते: जेव्हा कमी temperature वर 2D electron gas ला एका तीव्र लंब magnetic field मध्ये ठेवले जाते, तेव्हा Hall resistance हे RK च्या अचूक भिन्नांशांमध्ये (fractions) quantised होते: RH = RK/n.`,
    simpleExample: `Quantisation इतकी अचूक आहे की RK हे प्राथमिक resistance मानक म्हणून वापरले जाते. ~1 K वर ~10 Tesla fields मध्ये silicon chips RK/2 = 12,906 Ω प्रति अब्जाच्या 1 भाग एवढ्या अचूकतेने पुनरुत्पादित करतात.`,
    deepMeaning: `Quantisation चे मूळ topology मध्ये आहे — ते पदार्थ, नमुन्याची भूमिती किंवा कोणत्याही समायोज्य मापदंडांवर अवलंबून नाही. हे मोजमाप अचूकतेच्या मर्यादेत अचूक आहे. Fractional quantum Hall effect (1982) मध्ये 1/3, 2/5 इत्यादी भिन्नांशांवर आणखी विदेशी quantisation असते — ज्यात ν = 5/2 अवस्थेसह प्रबळ सहसंबंधित electron अवस्थांमधून उद्भवते, जे topological quantum computing शी संबंधित non-Abelian anyons होस्ट करू शकते.`,
    whyItMatters: `जगभरातील प्राथमिक resistance मानक. Condensed matter physics मधील topology मध्ये खिडकी. Integer आणि fractional quantum Hall effects आधुनिक भौतिकशास्त्रातील काही सर्वात खोल शोध आहेत.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'चुंबकीय Flux Quantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'विद्युत-चुंबकीय',
    description: 'अतिवाहक (superconducting) loops मध्ये magnetic flux चे quantum — h/(2e).',
    discoveredBy: 'London & Onsager (सिद्धांत) · Doll & Näbauer (1961, पुष्टी)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `Superconducting loop मधून magnetic flux h/(2e) च्या पूर्णांक पटींमध्ये quantised होतो. Superconducting ring केवळ h/(2e) च्या पूर्णांक पटींमध्येच magnetic flux अडकवू शकतो.`,
    simpleExample: `SQUID (Superconducting Quantum Interference Device) 10⁻⁶ Φ₀ इतक्या लहान magnetic flux बदल शोधू शकते — ~10⁻¹⁸ Tesla च्या magnetic field बदलाशी समकक्ष. हे मेंदूचे चित्रण (MEG) साठी वापरले जाते.`,
    deepMeaning: `Magnetic flux चे quantisation हे क्वांटम यंत्रशास्त्राचे थेट macroscopic प्रकटीकरण आहे. Superconducting order parameter (macroscopic quantum wavefunction) एका loop भोवती एकल-मूल्यीय (single-valued) असणे आवश्यक आहे, जे enclosed flux ला quantised होण्यास भाग पाडते. SQUIDs Φ₀ चा वापर करून असाधारण संवेदनशीलतेने magnetic fields मोजतात — आतापर्यंत बांधलेले सर्वात संवेदनशील magnetic sensors.`,
    whyItMatters: `SQUID technology, magnetoencephalography, macroscopic scales वर क्वांटम यंत्रशास्त्राच्या मूलभूत चाचण्या, आणि superconducting quantum computing चा पाया.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance Quantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'विद्युत-चुंबकीय',
    description: 'electrical conductance चे मूलभूत एकक — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `जेव्हा electrons एखाद्या परिपूर्ण, एकल-चॅनेल quantum conductor (जसे एकल-अणू संपर्क किंवा quantum point contact) मधून वाहतात, तेव्हा conductance प्रति चॅनेल अचूक G₀ = 2e²/h असतो. Resistance 1/G₀ = h/(2e²) ≈ 12,906 Ω आहे.`,
    simpleExample: `एकट्या अणूच्या रुंदीपर्यंत ताणलेल्या सोन्याच्या nanowire ची conductance अंदाजे G₀ असते. हे प्रायोगिकरित्या मोठ्या अचूकतेने मोजले गेले आहे. दोन-अणू wire ची conductance ~2G₀ असते.`,
    deepMeaning: `शास्त्रीय resistance नमुन्याची भूमिती, पदार्थ आणि अशुद्धतेवर अवलंबून असते. परंतु quantum स्तरावर, अगदी परिपूर्ण conductor लाही resistance असतो — conductor आणि त्याच्या leads मधील propagating modes च्या quantum mechanical जुळणीमुळे. हे Landauer formula आहे: G = G₀ × Σ T, जिथे T हे वैयक्तिक quantum channels च्या transmission probabilities आहेत.`,
    whyItMatters: `Mesoscopic physics आणि nanoelectronics चा पाया. Molecular junctions, carbon nanotubes आणि quantum dots मधून electron transport नियंत्रित करतो.`
  },

  {
    symbol: 'F',
    name: 'Faraday स्थिरांक',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'विद्युत-चुंबकीय',
    description: 'एका mole electrons चा charge — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday constant हे एका mole मूलभूत charges चा charge आहे — एक mole electrons किंवा एक mole protons. Electrochemistry मध्ये, एका mole एकल-संयोजी (monovalent) ion जमा करण्यासाठी किंवा विरघळवण्यासाठी किती charge लागतो ते यावर नियंत्रण ठेवतो.`,
    simpleExample: `CuSO₄ द्रावणातून 1 mole copper (63.5 ग्रॅम) electroplate करण्यासाठी 2F = 192,970 C charge लागतो (copper द्विसंयोजी आहे, Cu²⁺ + 2e⁻ → Cu). म्हणूनच जाड थर electroplating साठी मोठे currents लागतात.`,
    deepMeaning: `Faraday च्या electrolysis नियमांनुसार (1833-1834) electrode वर जमा होणाऱ्या पदार्थाचे वस्तुमान हे वाहणाऱ्या charge च्या प्रमाणात आहे, F हे आनुपातिकता स्थिरांक (प्रति mole प्रति संयोजकता) आहे: m = (M/zF) × Q. Faraday ने हा संबंध electrons किंवा atoms बद्दल न जाणताच प्रायोगिकरित्या काढला — एक अद्भुत कामगिरी. F ला त्याचे नाव देणाऱ्या या स्थिरांकाचे आता NA आणि e च्या व्याख्यांद्वारे अचूक मूल्य आहे.`,
    whyItMatters: `सर्व electrochemistry चा पाया. प्रत्येक lithium-ion battery, प्रत्येक electroplating प्रक्रिया, प्रत्येक क्लोरीन संयंत्र, आणि धातूंचे प्रत्येक electrolytic शुद्धीकरण या स्थिरांकावर चालते.`
  },

  // ── भाग ३: अणू आणि नाभिकीय स्थिरांक ──────────────────────────────────

  {
    symbol: 'α',
    name: 'Fine-Structure स्थिरांक',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'अणू',
    description: 'विद्युत-चुंबकीय बलाचा आयाम-विरहित coupling constant.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α हे विद्युत-चुंबकीय परस्परक्रियेचा आयाम-विरहित coupling constant आहे. हे charged कणांमधील विद्युत-चुंबकीय बलाची ताकद मोजते — विशेषतः, एखाद्या charged कणाने photon उत्सर्जित करणे किंवा शोषून घेण्याची probability amplitude.`,
    simpleExample: `Quantum electrodynamics मध्ये, एखाद्या दिलेल्या प्रक्रियेत electron एक photon उत्सर्जित करण्याची probability α च्या प्रमाणात असते. दोन-photon प्रक्रिया α² च्या प्रमाणात असते, इत्यादी. α ≈ 1/137 असल्यामुळे, प्रत्येक अतिरिक्त photon vertex probability ~1/137 पटींनी कमी करतो, म्हणूनच QED साठी Feynman diagrams झपाट्याने एकत्र येतात.`,
    deepMeaning: `α हे भौतिकशास्त्रातील सर्वात रहस्यमय संख्यांपैकी एक आहे. ते पूर्णपणे आयाम-विरहित आहे — याला एकक नाही आणि एककांच्या कोणत्याही प्रणालीत समान मूल्य घेते. हे e (विद्युत-चुंबकत्व), ε₀ (electrostatics), ħ (क्वांटम यंत्रशास्त्र) आणि c (सापेक्षता) एकत्र करते. Richard Feynman ने α ला "भौतिकशास्त्राच्या एक महान गूढ रहस्यांपैकी एक" असे म्हटले. QED मध्ये, α खरोखर स्थिर नाही — vacuum polarisation मुळे energy scale सोबत 'चालतो': कमी energies वर: α ≈ 1/137. Z boson mass scale वर: α ≈ 1/128.`,
    whyItMatters: `α हे सर्व atomic physics, रसायनशास्त्र आणि आण्विक जीवशास्त्र नियंत्रित करतो. Atoms चा आकार, रासायनिक बंधांची ताकद, सर्व मूलद्रव्यांचे शोषण आणि उत्सर्जन spectra — सर्व α द्वारे नियंत्रित आहेत. हे भौतिकशास्त्रातील संभवतः सर्वात महत्त्वाचे dimensionless संख्या आहे.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg स्थिरांक',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'अणू',
    description: 'हायड्रोजनच्या सर्व वर्णक्रम (spectral) रेषांचे wavelengths निर्धारित करतो.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg constant हायड्रोजनमधील spectral lines चे wavenumbers (inverse wavelengths) देतो. हायड्रोजनच्या सर्व spectral lines चे wavelengths Rydberg formula द्वारे दिले जातात: 1/λ = R∞ × (1/n₁² − 1/n₂²), जिथे n₁ आणि n₂ हे n₂ > n₁ सह धन पूर्णांक आहेत.`,
    simpleExample: `Lyman series साठी (ground state कडे संक्रमण), पहिली रेषा (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121.6 nm (अतिनील — Lyman-alpha रेषा). खगोलशास्त्रात ही सर्वात महत्त्वाची spectral रेषा आहे — विश्वभरातील hydrogen शोधण्यासाठी आणि redshift द्वारे अवकाशाचा विस्तार मोजण्यासाठी वापरतात.`,
    deepMeaning: `R∞ सैद्धांतिकदृष्ट्या अधिक मूलभूत स्थिरांकांपासून काढला जातो: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). हा formula — Bohr model पासून काढलेला आणि क्वांटम यंत्रशास्त्राने परिष्कृत — हायड्रोजनचे spectrum electron च्या mass, elementary charge आणि इतर मूलभूत स्थिरांकांशी जोडतो. सिद्धांत आणि प्रयोग यांच्यातील जुळणी असाधारण आहे. Rydberg energy (Ry) — हायड्रोजनची binding energy — आहे: En = −Ry/n² = −13.6 eV/n².`,
    whyItMatters: `ज्या प्रारंभबिंदूने Bohr ला quantum atom कडे नेले. 12 significant figures ला ज्ञात असलेला सर्वाधिक अचूकतेने मोजलेला atomic constant; हे QED च्या काही भागांत per trillion च्या काही भागांवर परीक्षा सक्षम करते.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr त्रिज्या',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'अणू',
    description: 'Atoms च्या आकाराचे नैसर्गिक मापन — हायड्रोजनमधील electron-proton सर्वाधिक संभाव्य अंतर.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ हे हायड्रोजन atom च्या ground state (n = 1) मध्ये electron आणि proton मधील सर्वाधिक संभाव्य अंतर आहे. हे atoms च्या वैशिष्ट्यपूर्ण आकाराचे मापन ठरवते. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom). हा हायड्रोजन atom चा वैशिष्ट्यपूर्ण आकार आहे. बहुतेक atoms ची त्रिज्या a₀ च्या काही पटींमध्ये असते. हिऱ्यातील C-C bond length ~2.9a₀ आहे. DNA helix व्यास ~40Å ≈ 75a₀ आहे.`,
    deepMeaning: `Bohr त्रिज्या electron च्या kinetic energy (quantum mechanical, जी electron ला पसरवण्याची प्रवृत्ती आहे — uncertainty principle ला nucleus कडे कोलमडण्यापासून प्रतिबंधित करते) आणि Coulomb potential energy (जी त्याला nucleus कडे ओढते) यांच्यातील संतुलनातून निर्माण होते. Quantum mechanics मध्ये, हायड्रोजनचे ground state wavefunction r = a₀ वर सर्वोच्च आहे. Bohr त्रिज्या सर्व atomic wavefunctions चे मापन ठरवते — उच्च orbitals ची त्रिज्या ~ n²a₀ आहे.`,
    whyItMatters: `रसायनशास्त्र आणि पदार्थविज्ञानाचे मूलभूत लांबी मापन परिभाषित करतो. Condensed matter physics मध्ये, a₀ रासायनिक बंधांचे लांबी मापन, crystal lattice spacings आणि excitons चा आकार ठरवतो. हायड्रोजन atom चा आकार अखेरीस पदार्थाची घनता निर्धारित करतो.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree ऊर्जा',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'अणू',
    description: 'Atomic physics मधील नैसर्गिक energy एकक — हायड्रोजनच्या ionisation energy च्या दुप्पट.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree energy हे ground state मधून हायड्रोजनच्या ionisation energy च्या दुप्पट आहे. हे atomic physics मधील energy चे नैसर्गिक एकक आहे: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `हायड्रोजन ground state ची energy −(1/2)Eh = −13.6 eV आहे. वैशिष्ट्यपूर्ण रासायनिक bond energies ~0.1–0.2 Eh (3–5 eV) आहेत. C-H bond ~0.16 Eh आहे. या संख्या सर्व atomic units मध्ये order-unity आहेत — quantum chemistry साठी उत्तम.`,
    deepMeaning: `Atomic units मध्ये (ħ = me = e = a₀ = 1 ठेवल्यास), Eh = 1. Atomic units quantum chemistry च्या समीकरणांना मोठ्या प्रमाणात सोपे करतात. Atomic units मधील हायड्रोजनसाठी Schrödinger equation साधे बनते: −(1/2)∇²ψ − (1/r)ψ = Eψ, जिथे ground state साठी E = −1/2, म्हणजे −0.5 Hartree = −13.6 eV. Computational chemistry codes (density functional theory, Hartree-Fock) जवळपास सार्वत्रिकपणे अंतर्गत atomic units मध्ये काम करतात.`,
    whyItMatters: `Quantum chemistry चे workhorse एकक. प्रत्येक DFT गणना, molecular dynamics simulation आणि quantum chemistry परिणाम शेवटी Hartree energy कडे परत जातो. हे electronic structure गणनांचे मूलभूत energy मापन आहे.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'अणू',
    description: 'Electron magnetic moment चे नैसर्गिक एकक — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB हे electrons साठी magnetic moment चे नैसर्गिक एकक आहे. हे ħ च्या orbital angular momentum मुळे electron च्या magnetic moment चे प्रतिनिधित्व करते.`,
    simpleExample: `1 Tesla MRI magnetic field मध्ये, electron spin-up आणि spin-down अवस्थांमधील Zeeman splitting 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV आहे — microwave frequencies शी समकक्ष. म्हणूनच ESR microwaves वापरतो, तर NMR radiofrequency वापरतो.`,
    deepMeaning: `Electron च्या spin magnetic moment अंदाजे μB आहे (अचूकतः, ते ge × μB/2 आहे, जिथे ge ≈ 2.002 quantum electrodynamic corrections मुळे). Zeeman effect — magnetic field मध्ये atomic spectral lines चे विभाजन — μB द्वारे नियंत्रित होते: ΔE = ml × μB × B, जिथे ml हा magnetic quantum number आहे. μB Electron Spin Resonance (ESR) नियंत्रित करतो. 12 दशांश स्थळांपर्यंत प्रयोगाशी जुळणे, हे विज्ञानातील सर्वाधिक अचूकतेने गणना केलेले प्रमाण आहे.`,
    whyItMatters: `Electron spin resonance, चुंबकीय पदार्थ आणि सर्व magneto-optical effects चा पाया. Spintronics आणि spin qubits सह quantum computing साठी केंद्रीय.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'अणू',
    description: 'Nuclear magnetic moment चे नैसर्गिक एकक — Bohr magneton पेक्षा 1836 पट लहान.',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN हे nucleons (protons आणि neutrons) साठी magnetic moment चे नैसर्गिक एकक आहे. Proton electron पेक्षा 1836 पट जड असल्यामुळे हे μB पेक्षा 1836 पट लहान आहे.`,
    simpleExample: `Proton चा magnetic moment 2.793 μN आहे. 3 Tesla MRI scanner मध्ये, proton spin अवस्थांमधील energy gap 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J आहे, जे ~127 MHz radiofrequency शी समकक्ष आहे. MRI scanner वापरत असलेली frequency अचूक हीच आहे.`,
    deepMeaning: `विद्युत charge नसूनही, neutron ला −1.913 μN चा magnetic moment आहे. तटस्थ कणासाठी हा शून्येतर magnetic moment ऐतिहासिकदृष्ट्या पहिल्या संकेतांपैकी एक होता की neutron हा मूलभूत कण नसून अंतर्गत संरचना (quarks) असलेला आहे. Proton चा magnetic moment 2.793 μN — एखाद्या Dirac point particle ने भाकीत केलेल्या साध्या 1 μN ऐवजी — हा Stern चा Nobel Prize-विजयी शोध 1933 मध्ये होता. NMR (आणि MRI) proton spin transitions वर आधारित आहे.`,
    whyItMatters: `NMR spectroscopy आणि MRI चा पाया — structural chemistry आणि वैद्यकीय चित्रणातील सर्वात शक्तिशाली साधने. ऐतिहासिकदृष्ट्या nucleon ची अंतर्गत quark संरचना सिद्ध केली.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron द्रव्यमान',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'कण',
    description: 'Electron ची rest mass — सर्वात हलका mass असलेला मूलभूत कण.',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `ही electron ची rest mass आहे — सर्वात हलका mass असलेला मूलभूत कण. Energy units मध्ये E = mc² द्वारे: mec² = 0.510 998 950 MeV. Electron हा proton पेक्षा 1836.15 पट हलका आहे.`,
    simpleExample: `Pair production (γ → e⁺ + e⁻) साठी किमान 2mec² = 1.022 MeV चा photon लागतो. या energy च्या खाली, photons electron-positron pairs तयार करू शकत नाहीत — मग ते किती का असेनात. हा उंबरठा (threshold) matter मधील gamma-ray शोषण नियंत्रित करतो.`,
    deepMeaning: `Electron mass हा Standard Model चा एक मुक्त मापदंड आहे — तो सैद्धांतिकदृष्ट्या भाकीत केला जात नाही तर मोजला जाणे आवश्यक आहे. हे Higgs mechanism द्वारे निर्माण होतो: electron Higgs field शी संवाद साधतो, आणि या संवादाची ताकद (Yukawa coupling, ye ≈ 2.94 × 10⁻⁶) mass निर्धारित करते. Top quark च्या yt ≈ 1 शी तुलनेत electron च्या Yukawa coupling ची लहानपणा हे particle physics च्या अनुत्तरित 'hierarchy' कोड्यांपैकी एक आहे. Electron हा खऱ्या अर्थाने एक मूलभूत point particle दिसतो.`,
    whyItMatters: `सर्व atomic आणि रासायनिक वर्तन नियंत्रित करतो. a₀ = ħ²/(mee²k) द्वारे atoms चा आकार, electrons च्या binding energies, X-rays ची energy आणि beta radiation च्या प्रवेशाची खोली निर्धारित करतो.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-घटक',
    value: '−2.002319304',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '−2.00231930436256',
    category: 'कण',
    description: 'संपूर्ण विज्ञानातील सर्वाधिक अचूकतेने पडताळलेले भाकीत.',
    discoveredBy: 'Kusch & Foley (1948) · QED calculation: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g-factor हे electron च्या वास्तविक magnetic moment आणि साध्या Dirac particle (g = 2 अचूक) असल्यास असेल त्याचे गुणोत्तर आहे. असामान्य magnetic moment आहे: ae = (ge − 2)/2 = 0.001 159 65.`,
    simpleExample: `QED कडून ae च्या सैद्धांतिक भाकिताला 10 पर्यंत loops (केवळ चौथ्या क्रमावर 12,672 diagrams) असलेल्या Feynman diagrams बेरीज करणे आवश्यक आहे. परिणाम 12 दशांश स्थळांपर्यंत प्रयोगाशी जुळतो — trillion मध्ये 1 भाग.`,
    deepMeaning: `Electron च्या anomalous magnetic moment हे संपूर्ण विज्ञानातील सर्वाधिक अचूकतेने परीक्षित भाकीत आहे. Quantum electrodynamics (QED) g = 2 पासून विचलन fine-structure constant α मध्ये power series म्हणून गणना करतो: ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... QED भाकिताशी कोणतेही विचलन Standard Model च्या पलीकडे नवीन physics सूचित करेल. या गणनाचे यश हा सैद्धांतिक भौतिकशास्त्राचा सर्वात मोठा विजय आहे.`,
    whyItMatters: `सैद्धांतिक भौतिकशास्त्राचा सर्वात मोठा विजय. इतर कोणत्याही मोजमापापेक्षा अधिक कठोरपणे QED ची परीक्षा घेतो. Fine-structure constant α चे सर्वात अचूक निर्धारण प्रदान करतो.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton द्रव्यमान',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'कण',
    description: 'Proton ची rest mass — electron पेक्षा 1836 पट जड.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Energy units मध्ये: mpc² = 938.272 MeV. Proton electron पेक्षा 1836.15 पट जड आहे. हे mass ratio atomic physics मधील सर्वात महत्त्वाच्या संख्यांपैकी एक आहे.`,
    simpleExample: `Proton च्या मोठ्या mass मुळे thermal energies वर त्याचे de Broglie wavelength electron पेक्षा ~43 पट लहान असते — ज्यामुळे protons खूपच कमी quantum-wave-like आहेत. म्हणूनच Born-Oppenheimer approximation कार्य करते: nuclei शास्त्रीय कण म्हणून वागतात.`,
    deepMeaning: `Electron प्रमाणे, proton हा मूलभूत नाही — तो दोन up quarks आणि एक down quark यांनी बनलेला एक मिश्रित (composite) कण आहे, gluons द्वारे मध्यस्थ strong force ने एकत्र बांधलेला. विलक्षण गोष्ट म्हणजे, quarks च्या masses proton च्या mass च्या केवळ ~1% आहेत. उर्वरित 99% quarks च्या kinetic energy आणि gluon fields मध्ये साठवलेल्या energy मधून येतो — E = mc² चे एक गहन प्रकटीकरण. Mass म्हणजे मुख्यतः energy. Proton ला 0.8409 fm चा मर्यादित charge radius आहे.`,
    whyItMatters: `Protons atomic numbers आणि जवळजवळ सर्व atomic mass परिभाषित करतात. तुमच्या शरीरातील जवळजवळ सर्व mass म्हणजे खरंतर protons आणि neutrons मधील quantum chromodynamic (QCD) field ची energy आहे. हे थोडे वेगळे असते तर जीवन मूलतः बदललेले असते.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-घटक',
    value: '5.586',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '5.5856946893',
    category: 'कण',
    description: 'मोठा anomalous magnetic moment जो proton मिश्रित (composite) असल्याचे सिद्ध करतो.',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `साध्या Dirac proton साठी, gp 2 असावा. त्याऐवजी gp ≈ 5.586 — जवळपास तीन पट जास्त. हा प्रचंड anomalous magnetic moment proton च्या मिश्रित संरचनेकडे निर्देश करणाऱ्या पहिल्या प्रायोगिक शोधांपैकी एक होता.`,
    simpleExample: `Proton साधा, संरचनाहीन बिंदू असता तर तो 2 च्या ताकदीचा चुंबक असता. तो 5.586 आहे हे थेट संख्यात्मक पुरावा आहे की आत चार्ज असलेले घटक (quarks) फिरत आहेत.`,
    deepMeaning: `Otto Stern ने 1933 साली gp ≈ 5.6 मोजले, त्यावेळी proton हा मूलभूत Dirac particle समजला जात होता. या परिणामाने भौतिकशास्त्र समुदायाला चकित केले. मोठा anomalous magnetic moment — आणि neutron चा शून्येतर magnetic moment — quark model साठी महत्त्वाचे पुरावे होते. हे मूल्ये आता QCD गणनांद्वारे अंशतः समजले जाऊ शकतात, जरी QCD मधून पूर्णपणे अचूक first-principles गणना हे एक मोठे आव्हान आहे.`,
    whyItMatters: `Quark model कडे नेणारा ऐतिहासिकदृष्ट्या आवश्यक शोध. Atomic nuclei (NMR/MRI) मधील magnetic resonances गणना करण्यासाठी केंद्रीय. Hadron संरचना सिद्धांताची कठोर परीक्षा.`
  },

  // ── भाग ६: Neutron स्थिरांक ───────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron द्रव्यमान',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'नाभिकीय',
    description: 'Proton पेक्षा किंचित जड — mass फरक beta decay शक्य करतो.',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Neutron proton पेक्षा किंचित जड आहे — 1.293 MeV/c² ने. Energy units मध्ये: mnc² = 939.565 MeV. या छोट्या परंतु महत्त्वाच्या mass फरकाचा अर्थ म्हणजे मुक्त neutron हा अस्थिर आहे — तो beta decay द्वारे क्षय पावतो.`,
    simpleExample: `एक मुक्त neutron ~10 मिनिटांत (अर्ध-आयुष्य 613.9 s) क्षय पावतो. सोडलेली energy 1.293 MeV mass फरक आहे. Nuclei च्या आत, neutrons nuclear binding energy द्वारे स्थिर केले जातात आणि क्षय पावत नाहीत.`,
    deepMeaning: `Neutron proton पेक्षा electron mass पेक्षा जास्त हलका असता, तर मुक्त protons neutrons आणि positrons मध्ये क्षय पावतील — हायड्रोजन atoms अस्थिर असतील, मूलतः संपूर्ण रसायनशास्त्र बदलेल. Mass फरकाने Big Bang nucleosynthesis दरम्यान बंद झालेले neutron-to-proton ratio (n/p ≈ 1/7) निर्धारित केले, hydrogen (75%) आणि helium (25%) च्या वैश्विक विपुलता ठरवून.`,
    whyItMatters: `Nuclear stability, beta decay आणि मूलद्रव्यांची वैश्विक विपुलता नियंत्रित करतो. Hydrogen च्या अस्तित्वासाठी आणि म्हणूनच जीवनासाठी neutron mass फरक हा वैश्विकदृष्ट्या आवश्यक आहे.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron चुंबकीय Moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'नाभिकीय',
    description: 'शून्य charge असूनही ऋण magnetic moment — अंतर्गत quarks चा पुरावा.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `Neutron ला अगदी शून्य net electric charge असूनही एक ऋण magnetic moment (−1.913 nuclear magnetons) आहे.`,
    simpleExample: `संरचनाहीन तटस्थ कणाला magnetic moment नसावा. Neutron magnetic fields वर प्रतिक्रिया देतो हे स्पष्ट पुरावा आहे की त्यात charged उपघटक आहेत ज्यांचे परिणाम पूर्णपणे एकमेकांना रद्द करत नाहीत.`,
    deepMeaning: `Magnetic moment साठी एकतर charge किंवा spin distribution आवश्यक आहे. Neutron चा ऋण magnetic moment त्याच्या अंतर्गत quark संरचनेमुळे उद्भवतो: दोन down quarks (charge −e/3 प्रत्येकी) आणि एक up quark (charge +2e/3) सतत quantum गतीत असतात. फिरत असलेल्या charged quarks च्या अवकाशीय वितरणाने एक net ऋण magnetic moment तयार होतो. स्पष्टीकरण quark substructure मध्ये आहे: neutron मध्ये एक up quark आणि दोन down quarks आहेत.`,
    whyItMatters: `Nuclear physics मधील सर्वाधिक धक्कादायक परिणामांपैकी एक. Neutron Electric Dipole Moment (EDM) वरील सध्याच्या मर्यादा CP symmetry ची परीक्षा करण्यासाठी आणि विश्वातील matter-antimatter असममितता स्पष्ट करण्यासाठी वापरल्या जातात.`
  },

  // ── भाग ७: Muon आणि Tau स्थिरांक ─────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon द्रव्यमान',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'कण',
    description: 'Electron ची जड प्रत — "हे कोणी मागवले?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Muon electron पेक्षा 206.768 पट जड आहे. त्याच्यावर तोच charge आहे आणि सर्व गुरुत्वाकर्षण-रहित बाबतींमध्ये ते तसेच संवाद साधतात — जणू निसर्गाने electron ची दुसरी, जड प्रत तयार केली.`,
    simpleExample: `15 km उंचीवर तयार झालेले cosmic ray muons ~0.99c वेगाने प्रवास करतात. शास्त्रीयदृष्ट्या ते जमिनीपर्यंत पोहोचण्यापूर्वी क्षय व्हायला हवेत (2.2 μs आयुष्य → केवळ 650 m प्रवास). तरी ते मोठ्या संख्येने येतात कारण relativistic time dilation (γ ≈ 7) त्यांचे आयुष्य ~15 μs पर्यंत वाढवते.`,
    deepMeaning: `Muon कोणत्याही साध्या सैद्धांतिक चित्रात बसत नाही. त्याचे अस्तित्व हे केवळ निसर्गाचे एक सत्य आहे. ते क्षय पावते: μ⁻ → e⁻ + ν̄e + νμ. Muonic atoms (μ⁻ ने e⁻ ची जागा घेतलेले) nucleus च्या ~207 पट जवळ फिरतात, ज्यामुळे ते nuclear संरचनेबद्दल अत्यंत संवेदनशील असतात. Muon anomalous magnetic moment (g-2) सध्या ~4σ सिद्धांताशी विसंगती दाखवतो.`,
    whyItMatters: `Muon anomalous magnetic moment हे Standard Model च्या पलीकडे physics चे प्रमुख प्रायोगिक संकेत आहे. Muons ज्वालामुखींचे आतील भाग चित्रित करण्यासाठी आणि तस्करी केलेले nuclear साहित्य शोधण्यासाठी वापरले जातात.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon असामान्य चुंबकीय Moment',
    value: '0.0011659',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '0.00116592059',
    category: 'कण',
    description: 'Standard Model च्या पलीकडे physics चे प्रमुख प्रायोगिक संकेत.',
    discoveredBy: 'Fermilab Muon g-2 experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Electron प्रमाणे, muon ला anomalous magnetic moment आहे. ae = (ge − 2)/2 = 0.001 165 920 59. हे Dirac भाकीत g = 2 पासून विचलन मोजते.`,
    simpleExample: `Electron प्रमाणे नाही, muon जड कणांपासून virtual contributions बद्दल संवेदनशील आहे कारण quantum corrections (mμ/M)² प्रमाणे वाढतात जिथे M हे virtual कणाचे mass आहे.`,
    deepMeaning: `सिद्धांत आणि प्रयोग यांच्यात अंदाजे 4.2 standard deviations विसंगती आहे — निश्चित शोधाच्या 5-sigma उंबरठ्याच्या मोहकतेने जवळ. पुष्टी झाल्यास, हे Standard Model च्या पलीकडे physics चे — संभाव्यतः supersymmetric कण किंवा extra dimensions — पहिले स्पष्ट पुरावे असेल. निराकरण lattice QCD गणनांवर अवलंबून आहे.`,
    whyItMatters: `Particle physics मधील सर्वात गरम विषयांपैकी एक. पुष्टी झाल्यास, subatomic विश्वाच्या आपल्या आकलनाचे मूलभूत पुनर्लेखन आवश्यक असेल.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton द्रव्यमान',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'कण',
    description: 'सर्वात जड charged lepton — electron पेक्षा 3477 पट जड.',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Tau lepton हा तिसरा आणि सर्वात जड charged lepton आहे — electron पेक्षा 3477 पट जड आणि muon पेक्षा 16.8 पट जड.`,
    simpleExample: `Tau इतका जड आहे (1.78 GeV) की तो hadrons — pions आणि kaons — मध्ये क्षय पावू शकतो — muon प्रमाणे नाही. त्याचे अत्यंत लहान आयुष्य (~2.9 × 10⁻¹³ s) म्हणजे ते क्षय होण्यापूर्वी केवळ ~87 μm प्रवास करते, ज्यासाठी मायक्रॉन-स्तरावर अचूकता आवश्यक आहे.`,
    deepMeaning: `Tau हा तिसऱ्या generation चा charged lepton आहे. leptons च्या अचूक तीन generations का आहेत, आणि त्यांचे masses इतके भिन्न का आहेत, हे Standard Model च्या सखोल गूढांपैकी एक आहे. Mass hierarchy (0.511 MeV → 105.7 MeV → 1776.9 MeV) ला कोणताही सैद्धांतिक स्पष्टीकरण नाही. Tau neutrino 2000 पर्यंत थेट शोधला गेला नाही.`,
    whyItMatters: `Leptons च्या तीन generations चे अस्तित्व हे निसर्गाचे एक गहन गूढ आहे. Tau आणि त्याच्या neutrino ने Standard Model ला एक सातत्यपूर्ण सिद्धांत म्हणून स्थापित करण्यात महत्त्वाची भूमिका बजावली.`
  },

  // ── भाग ८: भौतिको-रासायनिक स्थिरांक ────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas स्थिरांक',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'ऊष्मागतिकीय',
    description: 'R = NA × k — ऊष्मागतिकी आणि रसायनशास्त्राचा कार्यभार स्थिरांक.',
    discoveredBy: 'विविध (19वे शतक)',
    formula: 'PV = nRT',
    whatItSays: `R हे Boltzmann चा स्थिरांक molar स्तरावर वाढवलेला आहे. Ideal gas law PV = nRT Boyle च्या नियम, Charles च्या नियम आणि Avogadro च्या नियमाला एकाच समीकरणात एकत्र करतो.`,
    simpleExample: `वायूमध्ये ध्वनीचा वेग: v = √(γRT/M). हवेसाठी (M = 0.029 kg/mol, γ = 1.4) 20°C वर, v ≈ 343 m/s. हे दाखवते की ध्वनीचा वेग मूलतः R आणि temperature द्वारे निर्धारित केला जातो.`,
    deepMeaning: `Ideal gases च्या molar heat capacities R च्या साध्या पटींत आहेत: एकाणू (monatomic) साठी Cv = (3/2)R, द्विाणू (diatomic) gases साठी (5/2)R. सांख्यिकीय यंत्रशास्त्रात, ideal gas ची entropy (Sackur-Tetrode equation) R समाविष्ट करते. हे mixing च्या entropy मध्ये, Clausius-Clapeyron equation मध्ये, osmotic pressure साठी van't Hoff equation मध्ये, आणि electrode potentials साठी Nernst equation मध्ये येतो.`,
    whyItMatters: `ऊष्मागतिकीचा सार्वत्रिक स्थिरांक. प्रत्येक gas नियम, प्रत्येक ऊष्मागतिकी गणना, प्रत्येक atmospheric model, आणि प्रत्येक रासायनिक अभिक्रिया energetic गणना R वापरते.`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann स्थिरांक',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'ऊष्मागतिकीय',
    description: 'Blackbody द्वारे उत्सर्जित power — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `एक परिपूर्ण blackbody प्रति एकक क्षेत्र electromagnetic power उत्सर्जित करते P/A = σT⁴. σ अधिक मूलभूत स्थिरांकांपासून प्राप्त होते: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `सूर्याचे पृष्ठभाग temperature ~5778 K एकूण power output σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W देतो. तुमचे शरीर (T ≈ 310 K) σ × (310)⁴ × (1.7 m²) ≈ 520 W उत्सर्जित करते — ज्यापैकी अंदाजे अर्धे metabolic heat द्वारे बदलले जाते.`,
    deepMeaning: `T⁴ अवलंबित्व सर्व frequencies वर Planck blackbody spectrum एकत्रित (integrate) केल्यावर येते. याचा अर्थ temperature दुप्पट केल्यास उत्सर्जित power 2⁴ = 16 पटींनी वाढते. Cosmic microwave background (CMB) — Big Bang चे अवशेष विकिरण — T = 2.725 K वर परिपूर्ण blackbody आहे. पृथ्वीचे प्रभावी temperature solar radiation आणि σT⁴ उत्सर्जन यांच्या संतुलनाने निर्धारित होते.`,
    whyItMatters: `Stellar luminosity, पृथ्वीचा energy संतुलन आणि हवामान, thermal cameras, optical pyrometry आणि विश्वाची temperature रचना नियंत्रित करतो.`
  },

  {
    symbol: 'b',
    name: 'Wien Displacement स्थिरांक',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'ऊष्मागतिकीय',
    description: 'Blackbody radiation च्या peak wavelength आणि temperature यांचा संबंध.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien चा displacement नियम blackbody radiation च्या peak wavelength आणि temperature यांचा संबंध जोडतो: λ_max × T = b. वस्तू जितकी गरम, तितके तिचे peak wavelength कमी (अधिक निळे).`,
    simpleExample: `सूर्य (T = 5778 K) λ_max ≈ 502 nm — हिरव्या प्रकाशावर सर्वोच्च आहे. मानवी डोळे अचूक या श्रेणीत सर्वाधिक संवेदनशील होण्यासाठी विकसित झाले. मानवी शरीर (T = 310 K) प्रामुख्याने λ_max ≈ 9.4 μm — mid-infrared — वर उत्सर्जित करते, म्हणूनच thermal cameras कार्य करतात.`,
    deepMeaning: `Peak frequency आवृत्ती f_max = b' × T वापरते, जिथे b' = 5.879 × 10¹⁰ Hz/K. लक्षात घ्या की peak frequency λ_max ला c/λ_max शी थेट समकक्ष नाही कारण wavelength आणि frequency distributions च्या वेगवेगळ्या आकार आहेत. ऐतिहासिकदृष्ट्या, radiation constants च्या गुणोत्तराचा वापर h आणि k स्वतंत्रपणे मोजण्यासाठी केला जात होता.`,
    whyItMatters: `Thermal imaging, stellar temperature मोजमाप, हवामानशास्त्र आणि blackbody radiation च्या भौतिकशास्त्रासाठी मूलभूत.`
  },

  // ── भाग ९: गुरुत्वाकर्षण आणि Electroweak स्थिरांक ───────────────────────

  {
    symbol: 'G',
    name: 'गुरुत्वाकर्षण स्थिरांक',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'सार्वत्रिक',
    description: 'सर्वात दुर्बळ बल — सर्वात कमी अचूकतेने ज्ञात मूलभूत स्थिरांक.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton चा नियम: F = Gm₁m₂/r². General Relativity मध्ये, G Einstein च्या field equations मध्ये येतो जे matter अवकाश-काळ कसा वाकवतो ते नियंत्रित करतो.`,
    simpleExample: `1 मीटर अंतरावर असलेल्या दोन 1 kg masses मधील गुरुत्वाकर्षण: F = 6.674 × 10⁻¹¹ N — एकाच जीवाणूच्या वजनाइतके. दोन protons मधील electromagnetic force 10³⁶ पट अधिक मजबूत आहे. म्हणूनच atomic scales वर गुरुत्वाकर्षण अप्रासंगिक आहे.`,
    deepMeaning: `G हा सर्वात कमी अचूकतेने ज्ञात मूलभूत स्थिरांक आहे — केवळ 5 significant figures पर्यंत ज्ञात. हे या कारणामुळे आहे की गुरुत्वाकर्षण हे सर्वात दुर्बळ बल आहे: प्रयोगशाळेत ते मोजणे म्हणजे seismic noise आणि अवशेष forces शी लढणे. 8πG/c⁴ घटक प्रति एकक energy अवकाश-काळ वक्रता (curvature) मोजतो. Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m — जिथे quantum gravity अपेक्षित आहे — proton पेक्षा 10²⁰ पट लहान आहे.`,
    whyItMatters: `फेकलेल्या चेंडूपासून ते black holes आणि विश्वाच्या मोठ्या प्रमाणावरील संरचनेपर्यंत सर्व गुरुत्वाकर्षण घटना नियंत्रित करतो. Gravity च्या quantum सिद्धांताची अनुपस्थिती हे भौतिकशास्त्रातील सर्वात खोल अनुत्तरित समस्या आहे.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling स्थिरांक',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'कण',
    description: 'दुर्बल nuclear force ची coupling ताकद — beta decay नियंत्रित करतो.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF हे beta decay च्या Fermi च्या four-fermion effective theory मधील दुर्बल nuclear force चा coupling constant आहे: n → p + e⁻ + ν̄e. दुर्बळ cross-section GF² च्या प्रमाणात आहे.`,
    simpleExample: `दुर्बळ परस्परक्रिया इतकी कमकुवत आहे की एक neutrino 50% थांबण्याच्या संभाव्यतेसह एक प्रकाश-वर्ष शिशाच्या (lead) मधून जाऊ शकतो. तरी ते सूर्याच्या energy साठी आवश्यक आहे — pp chain एका दुर्बळ परस्परक्रियेने सुरू होते.`,
    deepMeaning: `e² प्रमाणे नाही, GF ला energy⁻² चे मात्रा आहेत, ज्यामुळे Fermi चा सिद्धांत non-renormalisable बनतो. निराकरण electroweak unification होते (Nobel 1979): दुर्बळ बल massive W आणि Z bosons (~80–91 GeV) द्वारे मध्यस्थ केले जाते. कमी energies वर, W boson चा आदान-प्रदान point interaction सारखा दिसतो. मोठा W mass दुर्बळ परस्परक्रिया दडपतो, underlying coupling electromagnetism शी तुलनात्मक असूनही beta decay मंद करतो.`,
    whyItMatters: `सर्व beta decay, neutrino परस्परक्रिया आणि electroweak unification नियंत्रित करतो. दुर्बळ बल सूर्याची pp chain चालवतो आणि ताऱ्यांमध्ये जड मूलद्रव्यांच्या nuclear संश्लेषणासाठी जबाबदार आहे.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'दुर्बल Mixing कोन',
    value: '0.2229',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '0.22290',
    category: 'कण',
    description: 'विद्युत-चुंबकीय आणि दुर्बळ forces मधील मिश्रण मोजतो.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Weak mixing angle θW (Weinberg angle) electroweak unification मध्ये photon आणि Z boson मधील मिश्रण parameterize करतो. e = g sin θW = g' cos θW.`,
    simpleExample: `sin²θW ≈ 0.231 हे मूल्य particle colliders (LHC) वर आणि atomic parity violation experiments मधून असाधारण अचूकतेने मोजले जाते.`,
    deepMeaning: `Electroweak unification मध्ये, photon आणि Z boson हे दोन underlying gauge bosons (W⁰ आणि B) च्या मिश्रणे आहेत. Energy सोबत sin²θW चे running हे Standard Model द्वारे अचूकतेने भाकीत केले जाते आणि electroweak radiative corrections पुष्टी करण्यासाठी मोजले जाते — सिद्धांताची एक कठोर परीक्षा.`,
    whyItMatters: `Standard Model चा एक मूलभूत मापदंड जो विद्युत-चुंबकीय आणि दुर्बळ nuclear forces च्या गुणधर्मांना जोडतो.`
  },

  // ── भाग ११: अतिरिक्त अणू आणि नाभिकीय स्थिरांक ────────────────────────

  {
    symbol: 'κ',
    name: 'Circulation Quantum',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'अणू',
    description: 'Electron साठी circulation चे मूलभूत एकक — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `Quantum fluid (जसे superfluid helium किंवा superconductor) चे circulation h/m च्या एककांमध्ये quantised होते. Superconductors साठी, संबंधित कण 2me mass असलेला Cooper pair आहे.`,
    simpleExample: `Superfluid helium-4 मध्ये, vortices h/m_He च्या पटींत circulation वाहतात. फिरत असलेला superfluid helium या quantised vortices चे जाळे विकसित करतो — type-II superconductors मधील Abrikosov vortex lattice शी साधर्म्य.`,
    deepMeaning: `Circulation चे quantisation हे quantum mechanical wavefunction च्या एकल-मूल्यतेचा (single-valuedness) थेट परिणाम आहे. जर एखादा superfluid फिरत असेल, तर macroscopic wavefunction च्या phase ने कोणत्याही बंद loop भोवती समान मूल्यावर परत येणे आवश्यक आहे. हे circulation ला quantised होण्यास भाग पाडते: Γ = n × h/m.`,
    whyItMatters: `Superfluids आणि superconductors चे वर्तन स्पष्ट करतो. Circulation चे quantum Aharonov-Bohm effect मध्ये देखील येतो, quantum phase ला magnetic flux शी जोडतो.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson Cross Section',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'अणू',
    description: 'येणाऱ्या photon ला मुक्त electron कडून दिलेले प्रभावी क्षेत्र.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `कमी-energy photons (photon energy ≪ mec²) मुक्त electron वर विखुरले (scatter) जातात तेव्हा, एकूण scattering cross-section σT = (8π/3) × re² आहे, जिथे re हे classical electron radius आहे.`,
    simpleExample: `Electron ला येणाऱ्या photon साठी σT चे "लक्ष्य क्षेत्र" म्हणून विचार करा. जर तुम्ही electrons च्या बॉक्सवर photons सोडल्यास, scattering आधी mean free path λ = 1/(nσT) आहे.`,
    deepMeaning: `Thomson cross section अधिक सामान्य Compton scattering formula च्या elastic scattering मर्यादेत आहे. जेव्हा photon energy Eγ ≪ 0.511 MeV असते, तेव्हा electron चा recoil नगण्य असतो आणि scattering पूर्णपणे शास्त्रीय असते. Stellar interiors मध्ये, photon-electron Thomson scattering द्वारे radiation pressure प्रसारित होतो. Eddington luminosity — एखाद्या ताऱ्याची कमाल luminosity — σT वर अवलंबून असते.`,
    whyItMatters: `Thomson scattering आकाश निळे का आहे (कमी frequencies वर) आणि solar corona eclipse दरम्यान का दिसतो हे स्पष्ट करतो. Cosmic Microwave Background (CMB) तयार झाला जेव्हा electrons protons शी एकत्र होण्यासाठी विश्व थंड झाले, कारण यापूर्वी Thomson scattering मुळे विश्व अपारदर्शक होते.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Electron Charge-to-Mass गुणोत्तर',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'अणू',
    description: 'Electron electromagnetic forces ला किती जोरदारपणे प्रतिसाद देतो ते निर्धारित करतो.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `हे electron च्या charge आणि mass चे गुणोत्तर आहे. हे electromagnetic forces ला electron किती जोरदारपणे प्रतिसाद देतो ते निर्धारित करतो.`,
    simpleExample: `CRT (cathode ray tube) टेलिव्हिजनमध्ये, electric आणि magnetic fields द्वारे electron beam चे विचलन e/me द्वारे नियंत्रित होते. e/me चे मोठे मूल्य म्हणजे electrons ions पेक्षा खूप सहजपणे विचलित होतात.`,
    deepMeaning: `Thomson च्या प्रसिद्ध cathode ray experiment ने सिद्ध केले की cathode rays हे hydrogen ions पेक्षा ~1800 पट जास्त गुणोत्तर असलेल्या negatively charged कणांचे प्रवाह आहेत. Cyclotron frequency ωc = eB/me थेट e/me च्या प्रमाणात आहे. हे गुणोत्तर plasma frequency ωp² = ne²/(meε₀) मध्ये देखील येतो, जे ionosphere मधून radio waves कसे परावर्तित होतात ते नियंत्रित करते.`,
    whyItMatters: `Mass spectrometry, particle accelerators आणि vacuum electronics साठी मूलभूत. Fusion plasmas मध्ये electron cyclotron resonance heating नियंत्रित करतो.`
  },

  {
    symbol: 'M(e)',
    name: 'Electron Molar द्रव्यमान',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'अणू',
    description: 'एका mole electrons चे mass — me × NA.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `एका mole electrons चे mass अत्यंत लहान आहे — प्रति mole सुमारे 0.55 milligrams.`,
    simpleExample: `Electrochemistry मध्ये, electrolysis दरम्यान electrodes वरील mass बदल गणना करताना, ionic masses च्या तुलनेत electron molar mass नगण्य आहे.`,
    deepMeaning: `उच्च-अचूकता atomic mass मोजमापांमध्ये, binding energies आणि electron cloud चे mass यांची गणना करणे आवश्यक आहे. Atom चे atomic mass: M(atom) = M(nucleus) + Z × M(e) − (electron binding energy)/c². Penning trap mass spectrometry ला 10 significant figures पर्यंत पोहोचण्यासाठी या correction ची आवश्यकता आहे.`,
    whyItMatters: `भौतिकशास्त्रातील सर्वात अचूक mass तुलनांसाठी आणि SI एकक व्याख्यांची सातत्यता चाचणीसाठी आवश्यक.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton द्रव्यमान गुणोत्तर',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'अणू',
    description: 'Electron proton पेक्षा 1836.15 पट हलका आहे.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Proton शी तुलना केल्यास electron चे mass. हे गुणोत्तर अंदाजे 1/1836 आहे.`,
    simpleExample: `me/mp ≪ 1 असल्यामुळे, molecules मध्ये electrons nuclei पेक्षा खूप जलद फिरतात. हे निश्चित nuclear positions वर electronic Schrödinger equation सोडवण्यास सक्षम करते — Born-Oppenheimer approximation.`,
    deepMeaning: `हे गुणोत्तर रासायनिक energy scales (~eV) आणि nuclear energy scales (~MeV) वेगळे करते. हे गुणोत्तर stellar physics मध्ये देखील महत्त्वाचे आहे: Chandrasekhar limit — white dwarf चे कमाल mass — थेट (mp/me) वर अवलंबून आहे. दूरच्या quasars मध्ये molecular hydrogen absorption spectra द्वारे वैश्विक काळात भिन्नता परीक्षिल्या जातात.`,
    whyItMatters: `निसर्गातील सर्वात परिणामकारक dimensionless संख्यांपैकी एक. हे atomic संरचना, energy scales ची श्रेणी आणि ताऱ्यांची स्थिरता नियंत्रित करते.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Proton Charge-to-Mass गुणोत्तर',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'अणू',
    description: 'Elementary charge आणि proton mass चे गुणोत्तर — electron च्या पेक्षा 1836 पट लहान.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Elementary charge आणि proton mass चे गुणोत्तर. हे protons magnetic fields ला कसा प्रतिसाद देतात ते ठरवते.`,
    simpleExample: `Magnetic field मध्ये proton cyclotron frequency electron पेक्षा 1836 पट कमी आहे. म्हणूनच MRI microwave frequencies ऐवजी radiofrequency waves (MHz range) वापरते.`,
    deepMeaning: `Mass spectrometry मध्ये, ions त्यांच्या charge-to-mass ratios द्वारे विभक्त केले जातात. Proton चा e/mp हा एक मूलभूत calibration standard म्हणून काम करतो. Cyclotron resonance mass spectrometry (Penning traps) अत्यंत अचूकतेने atomic masses मोजण्यासाठी हे गुणोत्तर वापरते. Accelerator physics मध्ये, proton beam ची rigidity magnetic fields मध्ये bending radius निर्धारित करते.`,
    whyItMatters: `Medical imaging (MRI), mass spectrometry आणि LHC सारख्या high-energy particle accelerators च्या रचनेसाठी मूलभूत.`
  },

  {
    symbol: 'M(p)',
    name: 'Proton Molar द्रव्यमान',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'अणू',
    description: 'एका mole protons चे mass.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `एका mole protons चे mass अंदाजे 1.007 g/mol आहे.`,
    simpleExample: `हे 1 g/mol पेक्षा किंचित कमी आहे कारण atomic mass unit 1/12 carbon-12 च्या mass म्हणून परिभाषित आहे, ज्यात binding energy आणि electron mass contributions समाविष्ट आहेत.`,
    deepMeaning: `Nuclear physics मध्ये, nuclear अभिक्रियेचे Q-value — सोडलेली किंवा शोषलेली energy — molar masses वापरून mass फरकांपासून गणना केली जाते. Proton molar mass या गणनांमध्ये एक मूलभूत संदर्भ आहे.`,
    whyItMatters: `Nuclear chemistry आणि astrophysics मधील stoichiometric गणनांसाठी मूलभूत.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutron-Electron द्रव्यमान गुणोत्तर',
    value: '1838.68',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '1838.68366214',
    category: 'नाभिकीय',
    description: 'Neutron electron पेक्षा 1838.68 पट जड आहे.',
    discoveredBy: 'व्युत्पन्न',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `Neutron mass आणि electron mass चे गुणोत्तर. हे proton-electron ratio पेक्षा किंचित जास्त आहे.`,
    simpleExample: `Neutron proton पेक्षा 2.531 electron masses जड आहे. हा mass फरक 1.293 MeV शी समकक्ष आहे — neutron beta decay मध्ये सोडलेली energy.`,
    deepMeaning: `हे गुणोत्तर proton-electron ratio पेक्षा जास्त असल्याने मुक्त neutrons अस्थिर होतात. Neutron proton पेक्षा electron mass पेक्षा जास्त हलका असता, तर hydrogen स्थिर मूलद्रव्य म्हणून अस्तित्वात नसते. Penning traps वापरून हे गुणोत्तर असाधारण अचूकतेने मोजले जाते.`,
    whyItMatters: `विश्वाच्या building blocks च्या स्थिरतेवर नियंत्रण ठेवतो.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton द्रव्यमान गुणोत्तर',
    value: '1.00138',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '1.00137841931',
    category: 'नाभिकीय',
    description: 'Neutron proton पेक्षा 0.138% ने किंचित जड आहे.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Neutron proton पेक्षा 0.138% अंशाने जड आहे.`,
    simpleExample: `हा छोटा mass फरक (1.293 MeV/c²) निर्धारित केला की Big Bang दरम्यान सुमारे 25% baryonic matter helium-4 बनली, बाकी hydrogen म्हणून राहिली.`,
    deepMeaning: `प्रारंभिक विश्वात, neutrons आणि protons चे समतोल गुणोत्तर Boltzmann factor नुसार होते. विश्व थंड होताना आणि weak interactions freeze out होताना, n/p गुणोत्तर सुमारे 1/7 ला बंद झाले. Mass फरक थोडा वेगळा असता, तर stellar evolution आणि रसायनशास्त्र बदलले असते.`,
    whyItMatters: `~25% च्या निरीक्षित वैश्विक helium विपुलता हे या स्थिरांकामुळे Big Bang model च्या महान पुष्टींपैकी एक आहे.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutron g-घटक',
    value: '−3.826',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '−3.82608545',
    category: 'नाभिकीय',
    description: 'Electrically neutral neutron च्या अंतर्गत quark संरचना प्रकट करतो.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Neutron साठी g-factor −3.826 आहे. शून्य charge असलेल्या structureless Dirac particle साठी, ते अचूक 0 असायला हवे.`,
    simpleExample: `Neutral neutron चा शून्येतर magnetic moment nuclear physics मधील सर्वाधिक धक्कादायक परिणामांपैकी एक होता, हे सिद्ध करतो की neutral कणांमध्ये अंतर्गत भाग असू शकतात.`,
    deepMeaning: `Neutron मध्ये एक up quark आणि दोन down quarks आहेत. त्यांचे magnetic moments आणि orbital गती net ऋण magnetic moment निर्माण करतात. Non-relativistic quark model g ≈ −3.67 भाकीत करतो; विसंगती relativistic corrections आणि gluon effects मुळे आहे. अचूक मोजमाप hadron संरचनेच्या QCD गणनांची परीक्षा घेतात.`,
    whyItMatters: `Standard Model आणि quark संरचनेची कठोर परीक्षा. Neutron electric dipole moment वर मर्यादा घालण्यासाठी देखील वापरले जाते.`
  },

  {
    symbol: 'M(n)',
    name: 'Neutron Molar द्रव्यमान',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'नाभिकीय',
    description: 'एका mole neutrons चे mass.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `एक mole neutrons चे वजन अंदाजे 1.00866 ग्रॅम आहे.`,
    simpleExample: `जरी मुक्त neutrons 10 मिनिटांत क्षय पावतात, तरी neutron molar mass 'binding energy वक्र' (curve of binding energy) गणना करण्यासाठी आवश्यक आहे जे nuclear power plants किती energy निर्माण करू शकतात ते ठरवते.`,
    deepMeaning: `Nuclear binding energy per nucleon atomic masses वापरून गणना केली जाते: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². Proton mass पेक्षा मोठे neutron mass प्रत्येक nuclear binding energy गणनेवर परिणाम करते.`,
    whyItMatters: `Nuclear अभियांत्रिकी आणि nuclear isotopes च्या अभ्यासाचा पाया.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Neutron Compton तरंगलांबी',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'नाभिकीय',
    description: 'Nuclear physics चे नैसर्गिक लांबी मापन — h/mnc.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `ज्या photon ची energy neutron च्या rest mass energy इतकी आहे त्याचे wavelength. हे सुमारे 1.32 femtometres आहे.`,
    simpleExample: `हे wavelength neutron च्या स्वतःच्या आकाराशी (~0.8 fm) आणि nuclear forces च्या श्रेणीशी (~1.4 fm) तुलनात्मक आहे.`,
    deepMeaning: `Nuclear physics च्या वैशिष्ट्यपूर्ण अंतर मापने nucleons आणि pions च्या Compton wavelengths द्वारे ठरवल्या जातात. या मापनाखाली, vacuum polarisation सारखे quantum field theory effects महत्त्वाचे बनतात. Protein संरचना अभ्यासासाठी वापरल्या जाणाऱ्या neutron scattering experiments मध्ये, neutron wavelength interatomic spacings शी जुळवण्यासाठी sampled केले जाते.`,
    whyItMatters: `Neutron ला साध्या non-relativistic particle म्हणून मानले जाऊ शकत नाही याखालील मापन ठरवतो.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton तरंगलांबी',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'कण',
    description: 'Muon rest mass इतकी energy असलेल्या photon चे wavelength.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Muon Compton wavelength सुमारे 11.7 fm आहे — mass ratio (206.77) ने electron पेक्षा लहान.`,
    simpleExample: `Muonic atoms मध्ये, muon electron पेक्षा nucleus जवळ खूप जास्त फिरतो, कारण muon चा Bohr radius mass च्या व्यस्त प्रमाणात कमी होतो.`,
    deepMeaning: `Muonic hydrogen मध्ये muon ~256 fm वर फिरतो — proton च्या इतके जवळ की त्याचा मर्यादित आकार energy levels वर लक्षणीय परिणाम करतो. म्हणूनच muonic hydrogen spectroscopy proton charge radius चे सर्वात अचूक मोजमाप देते.`,
    whyItMatters: `'Proton radius puzzle' कडे नेले, आधुनिक precision atomic physics चा एक प्रमुख केंद्रबिंदू.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g-घटक',
    value: '−2.00233',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '−2.0023318418',
    category: 'कण',
    description: 'अनुशोधित जड कणांसाठी महत्त्वाचा प्रायोगिक तपास.',
    discoveredBy: 'प्रायोगिक / QED गणना',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Electron प्रमाणे, muon ला anomalous magnetic moment आहे: ae = 0.001 165 920 59.`,
    simpleExample: `Fermilab मधील g-2 experiment हे मोजते की supersymmetry किंवा इतर सिद्धांतांमधील 'virtual' जड कण muon च्या magnetic spin वर परिणाम करत आहेत का ते तपासण्यासाठी.`,
    deepMeaning: `सध्याचे प्रायोगिक मूल्य Standard Model भाकिताशी ~4.2 standard deviations ने असहमत आहे. निराकरण hadronic vacuum polarisation च्या lattice QCD गणनांच्या अचूकतेवर अवलंबून आहे.`,
    whyItMatters: `Standard Model आणि प्रयोग यांच्यात सध्या ज्ञात असलेल्या सर्वात लक्षणीय विसंगतींपैकी एक.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron द्रव्यमान',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'नाभिकीय',
    description: 'जड हायड्रोजनचे nucleus — सर्वात साधे nuclear bound state.',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Deuteron हे deuterium चे nucleus आहे (एक proton अधिक एक neutron). त्याची binding energy 2.224 MeV आहे.`,
    simpleExample: `Binding energy आश्चर्यकारकरित्या लहान आहे (helium-4 शी तुलना करा: 28.3 MeV). या ठिसूळपणाने Big Bang मध्ये 'deuterium bottleneck' तयार केला, जड मूलद्रव्यांच्या निर्मितीला उशीर केला.`,
    deepMeaning: `Deuteron हे सर्वात साधे nuclear bound state आहे — hydrogen atom प्रमाणे. त्याचा शून्येतर quadrupole moment सिद्ध करतो की nuclear force ला pion exchange मधून येणारा tensor component आहे. सूर्यातील fusion मधील पहिली पायरी (p + p → d + e⁺ + νe) असाधारणपणे मंद आहे; सूर्याची दीर्घायुष्य या bottleneck मुळे आहे.`,
    whyItMatters: `Nuclear force सिद्धांताचे मूलभूत परीक्षा क्षेत्र. Deuterium nuclear reactors मध्ये neutron moderator म्हणून आणि pharmaceutical संशोधनात वापरले जाते.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron चुंबकीय Moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'नाभिकीय',
    description: 'सर्वात साध्या nucleus चा magnetic moment.',
    discoveredBy: 'Nuclear Physics / NMR अभ्यास',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Deuteron चा magnetic moment 0.857 nuclear magnetons आहे.`,
    simpleExample: `जर spins साध्या पद्धतीने aligned असतील, तर बेरीज μp + μn = 0.880 μN असेल. वास्तविक मूल्य 0.857 μN आहे. ही विसंगती wavefunction मध्ये D-wave admixture च्या orbital magnetic moment द्वारे अचूकतेने स्पष्ट केली जाते.`,
    deepMeaning: `Deuteron magnetic moment च्या गणना आणि मोजमाप यांच्यातील जुळणी nuclear force models ला प्रमाणित करते. Deuteron NMR आण्विक dynamics अभ्यासासाठी वापरले जाते.`,
    whyItMatters: `Nuclear संरचना model आणि pion exchange सिद्धांताची सुंदर पुष्टी.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g-घटक',
    value: '0.8574',
    unit: 'आयाम-विरहित (dimensionless)',
    exact: '0.8574382335',
    category: 'नाभिकीय',
    description: 'Deuteron magnetic moment ला nuclear magneton शी जोडतो.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Electron (g ≈ −2) किंवा proton (g ≈ 5.586) प्रमाणे नाही, deuteron चा g-factor 1 पेक्षा कमी आहे.`,
    simpleExample: `हे मूल्य nucleus आत proton आणि neutron magnetic moments मधील आंशिक रद्दीकरण (cancellation) दर्शवते.`,
    deepMeaning: `Meson exchange currents आणि relativistic effects यांचा समावेश असलेल्या corrections द्वारे अचूक मोजमाप neutron magnetic moment काढण्यास अनुमती देते.`,
    whyItMatters: `0.1% स्तरावर जटिल nuclear force models प्रमाणित करण्यासाठी वापरले जाते.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion द्रव्यमान',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'नाभिकीय',
    description: 'Helium-3 चे nucleus — दोन protons आणि एक neutron.',
    discoveredBy: 'Nuclear physics प्रयोगशाळा डेटा',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Helion हे helium-3 चे nucleus आहे. त्याची binding energy 7.718 MeV आहे.`,
    simpleExample: `Superfluid helium-3 हे unconventional superconductivity आणि topological quantum states साठी एक model system आहे.`,
    deepMeaning: `He-3 हे triton चे mirror nucleus आहे. त्यांच्यातील लहान mass फरक nuclear forces च्या charge symmetry ची परीक्षा घेतो. Helion g-factor −4.255 μN आहे — एकट्या neutron च्या प्रभावी योगदान दर्शवतो.`,
    whyItMatters: `उच्च cross-section neutron detectors आणि hyperpolarised lung MRI साठी वापरले जाते.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha कण द्रव्यमान',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'नाभिकीय',
    description: 'Helium-4 nucleus — असाधारणपणे स्थिर, 28.3 MeV binding energy.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `Alpha particle हे helium-4 nucleus आहे. त्याची प्रति nucleon binding energy 7.074 MeV आहे — binding energy वक्राच्या शिखराजवळ.`,
    simpleExample: `Alpha decay अर्ध-आयुष्य 20 orders of magnitude पसरतो (0.3 μs ते 14 अब्ज वर्षे). दोन्ही Gamow च्या quantum tunnelling सिद्धांताने स्पष्ट केले जातात.`,
    deepMeaning: `Alpha particle ची असाधारण स्थिरता म्हणूनच radioactive decay मध्ये तो प्राधान्याने उत्सर्जित होतो. त्याचा शून्य spin आणि शून्य magnetic moment आहे — एक पूर्णतः बंद-शेल nucleus. Triple-alpha process (3α → ¹²C) ला carbon-12 मध्ये 7.65 MeV वर resonance आवश्यक आहे (Hoyle state). या resonance शिवाय, कोणताही carbon अस्तित्वात नसता.`,
    whyItMatters: `बहुतेक जड nucleus decay चे उत्पादन. Triple-alpha process विश्वातील सर्व carbon चा स्रोत आहे. Cancer साठी targeted alpha radiotherapy मध्ये वापरला जातो.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomic Mass स्थिरांक',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'ऊष्मागतिकीय',
    description: 'Carbon-12 mass चा 1/12 — atomic masses चे नैसर्गिक एकक.',
    discoveredBy: 'आंतरराष्ट्रीय मानक (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `Atomic mass unit (u, किंवा dalton, Da) carbon-12 च्या एका atom च्या mass च्या 1/12 म्हणून परिभाषित आहे.`,
    simpleExample: `Carbon-12 = अचूक 12 u. Hydrogen = 1.0078 u. 50 kDa च्या protein चे mass 50,000 × 1.661 × 10⁻²⁷ kg आहे.`,
    deepMeaning: `1 u = 931.494 MeV/c² हे nuclear physics मधील सर्वात उपयुक्त रूपांतरणांपैकी एक आहे. Milliatomic mass units च्या nuclear mass फरक MeV-scale energies सोडतात. Carbon-12 ची निवड हे 1961 चा physics आणि chemistry समुदायांमधील तडजोड होती.`,
    whyItMatters: `Nuclear physics, mass spectrometry आणि संपूर्ण biochemistry चा पाया जिथे protein masses daltons मध्ये व्यक्त केल्या जातात.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molar Mass स्थिरांक',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'ऊष्मागतिकीय',
    description: 'Atomic mass unit आणि molar mass यांचा संबंध.',
    discoveredBy: 'SI पुनर्व्याख्या (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu atomic mass unit ला molar mass शी जोडतो: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Mu ≈ 1 g/mol असल्यामुळे, पदार्थाचे molar mass ग्रॅममध्ये त्याच्या relative atomic mass इतके असते (उदा. Water ~18.015 g/mol आहे).`,
    deepMeaning: `ऐतिहासिकदृष्ट्या अचूक 1 g/mol. 2019 नंतर, NA आणि mu दोन्ही स्वतंत्रपणे परिभाषित आहेत, त्यामुळे Mu यापुढे अचूक 1 g/mol नाही — ते ~10⁻⁹ ने विचलित होते. व्यावहारिक हेतूंसाठी हे नगण्य आहे परंतु नवीन SI मूलतः भिन्न असल्याची आठवण करून देतो.`,
    whyItMatters: `रसायनशास्त्रातील stoichiometric गणनांचा पाया. प्रत्येक mole-to-gram रूपांतरण यावर अवलंबून आहे.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molar Planck स्थिरांक',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'ऊष्मागतिकीय',
    description: 'Planck constant molar स्तरावर — NA × h.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `प्रति एकक frequency प्रति mole photons ची energy.`,
    simpleExample: `Photochemistry मध्ये, एका 'Einstein' (एक mole photons) ची energy NAhf आहे.`,
    deepMeaning: `Ideal gas च्या परिपूर्ण entropy साठी Sackur-Tetrode equation मध्ये येतो. हे quantum mechanical partition function ला molar scale वर macroscopic thermodynamic quantities शी जोडतो.`,
    whyItMatters: `Photochemistry आणि statistical thermodynamics साठी मूलभूत.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Ideal Gas चे Molar Volume (STP वर)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'ऊष्मागतिकीय',
    description: 'STP वर एका mole ideal gas ने व्यापलेले आयतन.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `0°C आणि 101,325 Pa वर, कोणत्याही ideal gas च्या एका mole ने 22.413... litres व्यापले जातात.`,
    simpleExample: `STP वर हायड्रोजनचा एक litre आणि ऑक्सिजनचा एक litre मध्ये अचूक समान संख्येने molecules असतात (2.688 × 10²²).`,
    deepMeaning: `Ideal gas law पासून: V = nRT/P. हे 'molar volume' gas amount आणि volume मध्ये द्रुत रूपांतरण सक्षम करते. STP वर सर्व ideal gases चे समान molar volume असते हे Avogadro ने एक क्रांतिकारक अंतर्दृष्टी होती.`,
    whyItMatters: `Gas stoichiometry साठी रसायनशास्त्रातील सर्वाधिक व्यावहारिकदृष्ट्या उपयुक्त संख्यांपैकी एक.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt स्थिरांक',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'ऊष्मागतिकीय',
    description: 'STP वर ideal gas च्या प्रति घन मीटर molecules ची संख्या.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `समुद्रसपाटीवरील हवेतील molecules ची संख्या अंदाजे 2.687 × 10²⁵ प्रति घन मीटर आहे.`,
    simpleExample: `STP वर हवेच्या molecule चा mean free path अंदाजे 66 nm आहे. Collision frequency ~10¹⁰ प्रति सेकंद आहे.`,
    deepMeaning: `Loschmidt ने 1865 साली gas viscosity आणि molecular diameter वापरून हे अनुमान काढले. हे macroscopic volume मधील molecules चे पहिले गंभीर अनुमान होते आणि atoms ला निश्चित आकार असल्याचा पहिला थेट पुरावा होता. Rayleigh scattering (आकाश निळे का आहे) n₀ च्या प्रमाणात आहे.`,
    whyItMatters: `Atmospheric physics आणि atomic सिद्धांताच्या इतिहासासाठी मूलभूत.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Silicon चे Molar Volume',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'ऊष्मागतिकीय',
    description: 'Crystal lattice मध्ये एका mole silicon atoms ने व्यापलेले आयतन.',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `Diamond cubic structure मधील एका mole घन silicon चे आयतन.`,
    simpleExample: `X-ray diffraction ने lattice parameter 'a' आणि macroscopic घनता 'ρ' मोजा आणि NA प्रति billion मध्ये 2 भाग एवढ्या अचूकतेने मिळवा.`,
    deepMeaning: `Silicon हे X-ray crystal घनता पद्धतीसाठी संदर्भ पदार्थ आहे. Avogadro Project ने 2019 मध्ये kilogram पुनर्परिभाषित करण्यासाठी असाधारण परिपूर्णतेचे 1 kg silicon गोळे वापरले. हे X-ray crystallography ला macroscopic mass standards शी जोडते.`,
    whyItMatters: `2019 च्या kilogram पुनर्व्याख्येसाठी केंद्रीय.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Carbon-12 चे Molar Mass',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'ऊष्मागतिकीय',
    description: 'एका mole carbon-12 atoms चे mass.',
    discoveredBy: 'SI पुनर्व्याख्या (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `2019 पूर्वी, हे अचूक 12 g/mol होते. आता, नवीन SI मध्ये, त्यात एक लहानशी मोजलेली अनिश्चितता आहे.`,
    simpleExample: `अचूक 12 g/mol पासून विचलन सुमारे 10 parts per billion आहे — रसायनशास्त्रासाठी पूर्णपणे नगण्य परंतु metrology साठी महत्त्वाचे.`,
    deepMeaning: `NA अचूकतेने परिभाषित करणे आणि atomic mass unit च्या ऐतिहासिक व्याख्या यांच्यातील विसंगती दर्शवते. Base units आता fundamental constants निश्चित करून परिभाषित केले जातात.`,
    whyItMatters: `नवीन SI constants द्वारे परिभाषित केले आहे, पदार्थ artifacts द्वारे नाही याची आठवण करून देतो.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'प्रथम Radiation स्थिरांक',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'ऊष्मागतिकीय',
    description: 'Blackbody radiation intensity चे एकूण प्रमाण ठरवतो — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Planck blackbody radiation law मधील spectral radiance साठी येतो.`,
    simpleExample: `सूर्य ~502 nm (हिरवा) वर सर्वोच्च असतो. Solar cells हे Planck spectrum शी अचूकतेने जुळवण्यासाठी c₁ वापरून तयार केले जातात.`,
    deepMeaning: `Planck radiation law ने 1900 साली quantum mechanics सुरू केले. Planck च्या quantum hypothesis ने exponential factor सादर केला जो उच्च-frequency विचलन (ultraviolet catastrophe) दडपतो.`,
    whyItMatters: `Astrophysics, solar energy आणि cosmology साठी मूलभूत.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'Spectral Radiance साठी प्रथम Radiation स्थिरांक',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'ऊष्मागतिकीय',
    description: 'c₁ ला π ने भागलेले — प्रति unit solid angle radiance देते.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Hemispherical spectral irradiance ऐवजी प्रति unit solid angle spectral radiance देते.`,
    simpleExample: `Telescope sensitivity किंवा camera exposure सारख्या optical system performance योग्यरित्या गणना करण्यासाठी आवश्यक.`,
    deepMeaning: `Integrated hemisphere emission आणि specific direction मधील radiance मधील फरक दर्शवतो. Lambertian emitter साठी, संबंध π च्या घटकाचा समावेश करतो.`,
    whyItMatters: `Radiometry आणि satellite remote sensing साठी आवश्यक.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'द्वितीय Radiation स्थिरांक',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'ऊष्मागतिकीय',
    description: 'Planck function मध्ये wavelength आणि temperature जोडतो — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Planck function च्या exponent मध्ये येतो. Quantum आणि शास्त्रीय regimes मधील crossover ठरवतो.`,
    simpleExample: `Wien चा displacement नियम (λ_max × T = b) c₂ वरून काढला जातो. Thermal cameras लोकांना शोधतात कारण 310 K वरील शरीरे mid-infrared मध्ये सर्वोच्च उत्सर्जन करतात.`,
    deepMeaning: `ऐतिहासिकदृष्ट्या, c₁/c₂ च्या गुणोत्तराचा वापर Boltzmann चा स्थिरांक मोजण्यासाठी केला जात होता. खोलीच्या temperature वर, quantum corrections mid-infrared radiation साठी महत्त्वाचे होतात.`,
    whyItMatters: `हवामानशास्त्र, thermal imaging आणि stellar physics साठी मूलभूत.`
  },

  {
    symbol: 'g',
    name: 'गुरुत्वाकर्षणाचा मानक प्रवेग',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (अचूक)',
    category: 'सार्वत्रिक',
    description: 'पृथ्वीच्या पृष्ठभागावर गुरुत्वाकर्षण प्रवेगाचे मानक मूल्य.',
    discoveredBy: 'International Bureau of Weights and Measures (1901)',
    formula: 'W = mg',
    whatItSays: `गुरुत्वाकर्षण प्रवेगासाठी एक परिभाषित पारंपरिक मानक.`,
    simpleExample: `वास्तविक गुरुत्वाकर्षण विषुवृत्तावर ~9.780 m/s² ते ध्रुवांवर ~9.832 m/s² पर्यंत बदलते. मानक मूल्य 45° अक्षांशावर (latitude) मोजमापांशी जुळण्यासाठी निवडले गेले.`,
    deepMeaning: `Mass आणि force (kilogram-force) मधील conversion घटक म्हणून येतो. Gravimeters भूकंपाचे विकृती आणि भूजल बदल शोधण्यासाठी स्थानिक g 9 significant figures पर्यंत मोजतात. Equivalence principle (General Relativity) सांगतो की हे सपाट अवकाश-काळात प्रवेगापासून अभेद्य आहे.`,
    whyItMatters: `अभियांत्रिकी, atmospheric pressure व्याख्या आणि अचूक वजनासाठी आधारभूत.`
  },

  // ── भाग १९: अणू एकके ─────────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'लांबीचे a.u. एकक',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'अणू',
    description: 'Atomic units मधील Bohr त्रिज्या.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `Atomic प्रणालीतील लांबीचे एकक. सर्व bond lengths Bohr मध्ये व्यक्त केल्या जातात.`,
    simpleExample: `वैशिष्ट्यपूर्ण bond lengths: H-H = 1.40 a₀, C-C = 2.92 a₀.`,
    deepMeaning: `Atomic units मध्ये, ħ = me = e = 4πε₀ = 1. हे quantum chemistry समीकरणे मोठ्या प्रमाणात सोपे करते.`,
    whyItMatters: `Computational chemistry मधील मानक एकक.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Mass चे a.u. एकक',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'अणू',
    description: 'Atomic units मधील electron mass.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `Atomic प्रणालीतील mass चे एकक.`,
    simpleExample: `Quantum chemistry मध्ये, सर्व masses me च्या पटींत व्यक्त केल्या जातात.`,
    deepMeaning: `Schrödinger equation सोपे करण्यासाठी fundamental constants ला 1 ठेवणाऱ्या प्रणालीचा भाग.`,
    whyItMatters: `सर्व electronic structure गणनांसाठी आधार mass.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'काळाचे a.u. एकक',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'अणू',
    description: 'Atoms मधील electronic गतीचे नैसर्गिक कालमापन.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Hartree energy scale वर एका radian phase evolution साठी लागणारा वेळ.`,
    simpleExample: `हायड्रोजनच्या ground state मध्ये electron च्या orbital period 2π atomic time units ≈ 152 attoseconds आहे.`,
    deepMeaning: `Attosecond physics या कालमापनावर electron dynamics प्रत्यक्षात अभ्यासतो. Nobel Prize 2023 attosecond pulse technology साठी प्रदान केला.`,
    whyItMatters: `Atoms आत electron गती थेट निरीक्षण करण्यास अनुमती देतो.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Energy चे a.u. एकक',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'अणू',
    description: 'Atomic units मधील Hartree energy.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Atomic physics मधील energy चे एकक.`,
    simpleExample: `Hartrees मधील रासायनिक bond energies: H₂ bond = 0.174 Eh.`,
    deepMeaning: `सर्व electronic structure गणनांसाठी मूलभूत energy scale ठरवतो.`,
    whyItMatters: `DFT सारख्या computational codes मधील मानक energy एकक.`
  },

  {
    symbol: 'e',
    name: 'Charge चे a.u. एकक',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'अणू',
    description: 'Atomic units मधील elementary charge.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `Atomic units मध्ये, proton ला charge +1 आहे, electron ला charge −1 आहे.`,
    simpleExample: `Helium nucleus ला charge +2 a.u. आहे.`,
    deepMeaning: `Fundamental charge ला एकतेवर (unity) ठेवून electromagnetic परस्परक्रिया गणित सोपे करते.`,
    whyItMatters: `Molecules मधील charge distributions साठी आधार एकक.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'Velocity चे a.u. एकक',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'अणू',
    description: 'हायड्रोजनच्या ground state मधील electron चा velocity.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — Bohr model मधील electron चा velocity.`,
    simpleExample: `सोने (Z=79) मध्ये, 1s electron चा velocity ~0.58c आहे, ज्यामुळे सोन्याच्या पिवळ्या रंगासाठी जबाबदार relativistic संकोचन (contraction) होतो.`,
    deepMeaning: `जड atoms साठी, c जवळ जाणाऱ्या velocities ना relativistic corrections आवश्यक आहेत.`,
    whyItMatters: `रसायनशास्त्रात relativistic effects कधी महत्त्वाचे होतात ते निर्धारित करतो.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'Momentum चे a.u. एकक',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'अणू',
    description: 'हायड्रोजनमधील momentum अनिश्चिततेचे नैसर्गिक मापन.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. of velocity) = ħ/a₀.`,
    simpleExample: `Uncertainty principle नुसार, a₀ आत स्थानिकीकृत electron साठी momentum अनिश्चितता अचूक एक atomic unit आहे.`,
    deepMeaning: `Atoms च्या लांबी मापनाला फिरत्या electron च्या momentum शी थेट जोडतो.`,
    whyItMatters: `Electron diffraction आणि quantum chemistry scattering नियंत्रित करतो.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'Force चे a.u. एकक',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'अणू',
    description: 'Bohr त्रिज्येवर electron आणि proton मधील electrostatic force.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Atomic scales साठी प्रचंड (82 nN) परंतु मानवांना जाणवत नाही.`,
    simpleExample: `Atomic stability चा आधार: या force आणि quantum pressure यांच्यातील संतुलन.`,
    deepMeaning: `Atoms एकत्र ठेवणाऱ्या 'चिकटाची' ताकद मोजतो.`,
    whyItMatters: `Atomic bonding आणि पदार्थाची ताकद नियंत्रित करतो.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'Electric Field चे a.u. एकक',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'अणू',
    description: 'हायड्रोजनमधील electron ला जाणवणारे असाधारण तीव्र field.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Bohr त्रिज्येवरील electric field (514 GV/m).`,
    simpleExample: `Atomic fields हवेच्या breakdown field पेक्षा ~100,000 पट अधिक मजबूत आहेत.`,
    deepMeaning: `~10¹⁴ W/cm² पेक्षा जास्त intensities वर, laser fields atoms मधून electrons खेचण्याइतके मजबूत असतात, attosecond pulses निर्माण करतात.`,
    whyItMatters: `Strong-field laser physics आणि field ionisation साठी आधारभूत.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'Magnetic Flux Density चे a.u. एकक',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'अणू',
    description: 'एका atomic unit शी समकक्ष magnetic field ताकद.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — कोणत्याही प्रयोगशाळेच्या चुंबकापेक्षा (~45 T) खूप जास्त मजबूत.`,
    simpleExample: `Neutron star चे magnetic fields ~10⁸-10¹¹ Tesla पर्यंत पोहोचतात, atomic unit ओलांडतात.`,
    deepMeaning: `या scale वर, photon propagation वर QED effects (vacuum birefringence) लक्षणीय होतात.`,
    whyItMatters: `White dwarfs आणि magnetars समजण्यासाठी महत्त्वाचे.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'Permittivity चे a.u. एकक',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'अणू',
    description: 'Atomic units वर vacuum permittivity — 4πε₀.',
    discoveredBy: 'व्युत्पन्न',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `Atomic units मध्ये, Coulomb force नियम फक्त F = q₁q₂/r² बनतो.`,
    simpleExample: `Quantum chemistry code मधील सर्व electrostatic गणित सोपे करतो.`,
    deepMeaning: `4πε₀ घटक गणनांमधून काढून टाकणाऱ्या प्राथमिक सरलीकरणांपैकी एक.`,
    whyItMatters: `सैद्धांतिक भौतिकशास्त्रातील मानक normalization.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'Magnetizability चे a.u. एकक',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'अणू',
    description: 'Atom च्या energy चा magnetic field ला द्वितीय-क्रम प्रतिसाद.',
    discoveredBy: 'व्युत्पन्न',
    formula: '1 a.u.',
    whatItSays: `NMR chemical shifts आणि magnetic force मोजमापांद्वारे मोजले जाते.`,
    simpleExample: `MRI-scale magnetic fields ला molecules कसा प्रतिसाद देतात ते गणना करण्यासाठी वापरले जाते.`,
    deepMeaning: `Quantum स्तरावर molecular magnetic susceptibilities च्या अभ्यासातील मूलभूत प्रमाण.`,
    whyItMatters: `NMR spectroscopy आणि quantum chemistry simulations मध्ये वापरले जाते.`
  }
];
