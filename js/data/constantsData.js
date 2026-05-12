// =============================================================================
// constantsData.js — Physical Constants Database
// Values from CODATA 2022 | Deep explanations from Phyansy Reference Guide
// =============================================================================

export const CONSTANTS = [

  // ── PART 1: UNIVERSAL / DEFINING CONSTANTS ────────────────────────────────

  {
    symbol: 'c',
    name: 'Speed of Light in Vacuum',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (exact)',
    category: 'Universal',
    description: 'The fundamental speed limit of causality itself.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `Light travels exactly 299,792,458 metres in one second through a perfect vacuum. This is not a measured approximation — since 1983, the metre itself is defined by this number. So c is now an exact, fixed integer by international definition.`,
    simpleExample: `Light from the Moon reaches your eye in about 1.28 seconds. Light from the Sun takes roughly 8 minutes 20 seconds. The nearest star, Proxima Centauri, is 4.24 light-years away — meaning light takes 4.24 years to cross that distance.`,
    deepMeaning: `c is not simply "how fast light moves." It is the fundamental speed limit of causality itself — the maximum rate at which any information, energy, or causal influence can propagate through the universe. Einstein's Special Relativity revealed that c is the same for every observer regardless of their motion. This shatters Newtonian absolute time. Two observers moving relative to each other will disagree on lengths, time intervals, and simultaneity — but they will always measure the same c. E = mc² says mass and energy are the same thing, separated only by a conversion factor of c².`,
    whyItMatters: `Without c, there is no Special Relativity, no E = mc², no GPS correction (GPS satellites must correct for both Special and General Relativistic time dilation), no understanding of stars, or particle physics. It is the spine of modern physics.`
  },

  {
    symbol: 'h',
    name: 'Planck Constant',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (exact)',
    category: 'Universal',
    description: 'Quantum of electromagnetic action — governs energy of photons.',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `Energy comes in discrete packets called quanta. The energy E of a single quantum of electromagnetic radiation — a photon — is E = hf, where f is the frequency of the radiation. h is the proportionality constant that connects frequency (a wave property) to energy (a particle property).`,
    simpleExample: `Visible red light has a frequency of about 4.3 × 10¹⁴ Hz. One photon of red light carries energy: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV. This tiny energy is enough to trigger one rhodopsin molecule in your retina — the beginning of vision.`,
    deepMeaning: `Before Planck, classical physics predicted a hot object should radiate infinite energy at high frequencies — the "ultraviolet catastrophe." In 1900, Max Planck resolved this by assuming energy is not continuous but quantised. Einstein used it to explain the photoelectric effect. h is also the quantum of action — it has units of energy × time. The reduced form ħ = h/2π appears in the commutator [x̂, p̂] = iħ — the mathematical heart of quantum mechanics — and in the Heisenberg Uncertainty Principle: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h is the border between the quantum world and the classical world. When the relevant action of a system is much larger than h, classical mechanics works. Without h, atoms would collapse, chemistry would not exist, and the universe as we know it could not exist.`
  },

  {
    symbol: 'ħ',
    name: 'Reduced Planck Constant',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (exact)',
    category: 'Universal',
    description: 'h/2π — the natural unit of angular momentum in quantum mechanics.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (called "h-bar") is simply h divided by 2π. It appears whenever angular frequency ω (in radians per second) is used instead of ordinary frequency f (in cycles per second), since ω = 2πf.`,
    simpleExample: `The spin of an electron is ħ/2. The spin of a photon is ħ. Orbital angular momentum is always an integer multiple of ħ — so ħ is the atom of rotation itself.`,
    deepMeaning: `In quantum mechanics, ħ is not merely a convenient abbreviation. It is the fundamental quantum of angular momentum. In quantum field theory, ħ controls the magnitude of quantum fluctuations. Setting ħ → 0 recovers classical field theory. The entire structure of quantum mechanics — commutation relations, path integrals, uncertainty principles — is governed by ħ.`,
    whyItMatters: `In natural units used by particle physicists, ħ = c = 1, which simplifies equations enormously and reveals the deep geometric structure of the theories.`
  },

  {
    symbol: 'e',
    name: 'Elementary Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (exact)',
    category: 'Electromagnetic',
    description: 'The smallest freely existing electric charge — charge is quantised.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `This is the magnitude of the electric charge carried by a single proton (positive) or a single electron (negative). All observable electric charge in nature is an integer multiple of e. Charge is quantised.`,
    simpleExample: `A current of 1 ampere means 1 coulomb of charge flows per second past a point. Since each electron carries 1.602 × 10⁻¹⁹ C, a current of 1 A corresponds to approximately 6.24 × 10¹⁸ electrons passing per second.`,
    deepMeaning: `The quantisation of charge was established experimentally by Robert Millikan in his famous oil-drop experiment. He measured the charge on individual oil droplets suspended in an electric field and found all charges were integer multiples of a fundamental unit — e. The fine-structure constant α ≈ 1/137 is the dimensionless measure of the strength of the electromagnetic force. Quarks carry charges of e/3 and 2e/3, but they are permanently confined inside hadrons and are never observed with fractional charge in isolation.`,
    whyItMatters: `e sets the scale of all atomic and molecular interactions. Chemistry, biology, electronics, and materials science all fundamentally depend on the value of e. If e were slightly different, life as we know it could not exist.`
  },

  {
    symbol: 'k',
    name: 'Boltzmann Constant',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (exact)',
    category: 'Thermodynamic',
    description: 'Bridge between temperature and kinetic energy — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (also written kB) is the bridge between the microscopic world of individual particles and the macroscopic world of temperature. It converts temperature — a statistical property of an ensemble — into energy per particle. Each degree of freedom contributes (1/2)kT of average kinetic energy.`,
    simpleExample: `At room temperature (T = 293 K): kT ≈ 0.0253 eV. This is the characteristic thermal energy scale at room temperature. Chemical bond energies are a few eV, so thermal energy at room temperature is much smaller — which is why most chemical bonds are stable.`,
    deepMeaning: `Temperature is not a fundamental quantity — it is a measure of the average kinetic energy of particles. S = k ln(Ω) defines entropy in terms of information and probability, connecting thermodynamics to microscopic physics. The Boltzmann distribution gives the probability of a system being in a state of energy E at temperature T: P(E) ∝ e^(−E/kT). This exponential factor — the Boltzmann factor — governs everything from chemical reaction rates to the distribution of molecules in Earth's atmosphere.`,
    whyItMatters: `k is the foundation of thermodynamics and statistical mechanics. Without it, we cannot connect microscopic physics to macroscopic observables like temperature, pressure, and entropy. Since 2019, k is an exact defined constant, and the kelvin is defined through it.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro Constant',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (exact)',
    category: 'Thermodynamic',
    description: 'Number of entities in one mole — bridges atomic and human scales.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `One mole of any substance contains exactly 6.022 140 76 × 10²³ elementary entities (atoms, molecules, ions, etc.). This number is the bridge between the atomic scale and the human scale.`,
    simpleExample: `12 grams of carbon-12 contains exactly one mole of carbon atoms. This is an almost incomprehensibly large number: if you had one mole of sand grains, they would cover Earth's surface to a depth of several kilometres.`,
    deepMeaning: `NA connects the atomic mass unit to grams. 1 u = 1 gram / NA = 1.660 539 × 10⁻²⁷ kg. The molar gas constant R is related to the Boltzmann constant by: R = NA × k = 8.314 J mol⁻¹ K⁻¹. The Faraday constant F = NAe = 96,485 C/mol is the charge of one mole of electrons. Historically, measuring NA was one of the central challenges of 19th and early 20th century physics. Jean Perrin's measurements of Brownian motion in 1908 proved the existence of atoms.`,
    whyItMatters: `NA is what makes chemistry quantitative. It allows chemists to count atoms by weighing. Every stoichiometric calculation, every pharmaceutical dosage calculation, every materials science calculation depends on NA.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Luminous Efficacy',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (exact)',
    category: 'Universal',
    description: 'Defines the candela — the only SI constant linked to human biology.',
    discoveredBy: 'International definition (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `683 lumens of luminous flux (perceived brightness by the human eye) corresponds to 1 watt of radiant power at a specific monochromatic frequency of 540 × 10¹² Hz (green light, wavelength ≈ 555 nm) — the peak sensitivity of the human eye under daylight conditions.`,
    simpleExample: `A light source emitting 1 watt of pure green light produces exactly 683 lumens of visible brightness. Any other color produces fewer lumens per watt because the eye is less sensitive to them.`,
    deepMeaning: `This constant is the only one in the SI system that depends on human biology — specifically the spectral sensitivity of the photopic (daylight) human eye. It is defined this way to connect the physical quantity of radiant power (watts) to the perceptual quantity of brightness (lumens). Since 2019, the candela is defined by fixing Kcd at exactly 683 lm/W.`,
    whyItMatters: `Fundamental to photometry, lighting engineering, and all optical system design. Every lumen specification on every light bulb traces back to this constant.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium Hyperfine Frequency',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (exact)',
    category: 'Universal',
    description: 'Defines the second — the heartbeat of all modern timekeeping.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `The ground state of the caesium-133 atom has two hyperfine levels — split by the interaction between the electron's magnetic moment and the nuclear magnetic moment. When the atom transitions between these two levels, it emits or absorbs radiation at exactly 9,192,631,770 Hz.`,
    simpleExample: `Since 1967, one second is defined as exactly 9,192,631,770 oscillation periods of this radiation. Caesium atomic clocks are the most accurate timekeeping devices ever built, losing less than one second in 300 million years.`,
    deepMeaning: `The hyperfine splitting arises from quantum electrodynamics — the interaction between the magnetic dipole moment of the electron and the magnetic field generated by the nuclear spin. Calculating this frequency from first principles is a profound test of QED. GPS, the internet (which requires synchronised clocks), financial systems, and all modern telecommunications depend directly on caesium atomic clock standards.`,
    whyItMatters: `The most precise measurement in all of science. Modern civilisation — GPS, internet synchronisation, financial trading, 5G networks — all depend on this constant.`
  },

  // ── PART 2: ELECTROMAGNETIC CONSTANTS ────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Vacuum Electric Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'Electromagnetic',
    description: 'How easily electric fields permeate through vacuum.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-naught) measures how easily an electric field can permeate through a vacuum. It appears in Coulomb's law — the force between two point charges: F = (1/4πε₀) × (q₁q₂/r²). The larger ε₀ is, the weaker the electrostatic force for given charges and distance.`,
    simpleExample: `Water has relative permittivity εr ≈ 80, meaning water reduces electrostatic forces between charges by a factor of 80 compared to vacuum — which is why water is such an excellent solvent for ionic compounds.`,
    deepMeaning: `ε₀ is not independently defined — it is derived from the defined values of c and μ₀ through: ε₀ = 1/(μ₀c²). It appears in all four of Maxwell's equations in their vacuum forms. In Gauss's law: ∮ E · dA = Q_enc/ε₀. The total electric flux through any closed surface equals the enclosed charge divided by ε₀. It also sets the scale of the electromagnetic energy density stored in an electric field: u_E = (1/2)ε₀E².`,
    whyItMatters: `Appears in all four Maxwell equations. Without ε₀, there is no quantitative electrostatics, no capacitor design, and no understanding of dielectrics.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Vacuum Magnetic Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'Electromagnetic',
    description: 'How easily magnetic fields permeate through vacuum.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-naught) measures how easily a magnetic field permeates through a vacuum. It appears in the Biot-Savart law and Ampère's law. The force per unit length between two parallel wires carrying currents I₁ and I₂ separated by distance d is: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `Iron has relative permeability μr up to ~10,000 — iron concentrates magnetic fields enormously compared to vacuum. This is why transformer cores are made of iron: to guide and amplify the magnetic flux efficiently.`,
    deepMeaning: `Before the 2019 SI redefinition, μ₀ was exactly 4π × 10⁻⁷ N/A² by definition. Now it is a measured quantity with a small uncertainty. μ₀ appears in Ampère's law with Maxwell's correction: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). The second term — Maxwell's displacement current — allowed electromagnetic waves to exist in vacuum and led directly to the prediction that light is an electromagnetic wave.`,
    whyItMatters: `Without μ₀, there are no magnetic fields, no electromagnetic induction, no electric motors, no transformers, and no radio waves.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Characteristic Impedance of Vacuum',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'Electromagnetic',
    description: 'Ratio of electric to magnetic field in an electromagnetic wave in vacuum.',
    discoveredBy: 'Derived from Maxwell\'s equations',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `When an electromagnetic wave propagates through vacuum, the ratio of the electric field amplitude to the magnetic field amplitude is: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `An antenna radiates efficiently when its impedance is matched to 377 Ω. The power radiated per unit area (the Poynting vector) is S = E²/Z₀. This is used to design everything from dipole antennas to satellite dishes.`,
    deepMeaning: `Z₀ is the impedance of free space — it tells you how much electric field you get per unit of magnetic field in a propagating electromagnetic wave. It is the vacuum's "resistance" to electromagnetic wave propagation, analogous to the characteristic impedance of a transmission line. Sunlight reaching Earth corresponds to an electric field amplitude of √(1361 × Z₀) ≈ 716 V/m.`,
    whyItMatters: `Essential for antenna design, radar cross-sections, antenna gain, and all wireless communication link budgets.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson Constant',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'Electromagnetic',
    description: 'Relates voltage to frequency in superconducting Josephson junctions.',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `The Josephson constant relates voltage to frequency in the AC Josephson effect. When a DC voltage V is applied across a Josephson junction (a thin insulating barrier between two superconductors), it generates an alternating current at frequency f = 2eV/h.`,
    simpleExample: `A voltage of 1 millivolt across a Josephson junction generates AC oscillation at ~483.6 GHz — in the microwave range. This is used to define voltage standards accurate to 1 part in 10¹⁰.`,
    deepMeaning: `The factor of 2 comes from the fact that superconductivity involves Cooper pairs — pairs of electrons with charge 2e. The Josephson junction is a macroscopic quantum device where the quantum phase difference between two superconductors drives a supercurrent. The AC Josephson effect is a stunning demonstration that quantum mechanics operates at macroscopic scales in superconductors.`,
    whyItMatters: `Primary voltage standard used worldwide. The most accurate electrical measurement available. Fundamental to quantum metrology and superconducting quantum computing.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing Constant',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'Electromagnetic',
    description: 'Quantum of electrical resistance — h/e² — from the quantum Hall effect.',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² is the quantum of resistance. It appears in the quantum Hall effect: when a 2D electron gas is placed in a strong perpendicular magnetic field at low temperature, the Hall resistance is quantised in exact fractions of RK: RH = RK/n.`,
    simpleExample: `The quantisation is so precise that RK is used as the primary resistance standard. Silicon chips at ~1 K in ~10 Tesla fields reproduce RK/2 = 12,906 Ω to better than 1 part per billion.`,
    deepMeaning: `The quantisation is topological in origin — it does not depend on the material, sample geometry, or any adjustable parameters. It is exact to within measurement precision. The fractional quantum Hall effect (1982) involves even more exotic quantisation at fractions of 1/3, 2/5, etc. — arising from strongly correlated electron states including the ν = 5/2 state, which may host non-Abelian anyons relevant to topological quantum computing.`,
    whyItMatters: `Primary resistance standard worldwide. Window into topology in condensed matter physics. The integer and fractional quantum Hall effects represent some of the deepest discoveries in modern physics.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Magnetic Flux Quantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'Electromagnetic',
    description: 'Quantum of magnetic flux — h/(2e) — in superconducting loops.',
    discoveredBy: 'London & Onsager (theory) · Doll & Näbauer (1961, confirmed)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `Magnetic flux through a superconducting loop is quantised in units of Φ₀. A superconducting ring can only trap magnetic flux in integer multiples of h/(2e).`,
    simpleExample: `A SQUID (Superconducting Quantum Interference Device) can detect changes of magnetic flux as small as 10⁻⁶ Φ₀ — corresponding to a magnetic field change of ~10⁻¹⁸ Tesla. This is used for brain imaging (MEG).`,
    deepMeaning: `The quantisation of magnetic flux is a direct macroscopic manifestation of quantum mechanics. The superconducting order parameter (the macroscopic quantum wavefunction) must be single-valued around a loop, which forces the enclosed flux to be quantised. SQUIDs exploit Φ₀ to measure magnetic fields with extraordinary sensitivity — the most sensitive magnetic sensors ever built.`,
    whyItMatters: `Foundation of SQUID technology, magnetoencephalography, fundamental tests of quantum mechanics at macroscopic scales, and superconducting quantum computing.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance Quantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'Electromagnetic',
    description: 'Fundamental unit of electrical conductance — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `When electrons flow through a perfect, single-channel quantum conductor (such as a single atom contact or a quantum point contact), the conductance is exactly G₀ = 2e²/h per channel. The resistance is 1/G₀ = h/(2e²) ≈ 12,906 Ω.`,
    simpleExample: `A gold nanowire stretched until it is a single atom wide has a conductance of approximately G₀. This has been measured experimentally with great precision. A two-atom wire has conductance ~2G₀.`,
    deepMeaning: `Classical resistance depends on sample geometry, material, and impurities. But at the quantum level, even a perfect conductor has a resistance — because of the quantum mechanical matching of propagating modes between the conductor and its leads. This is the Landauer formula: G = G₀ × Σ T, where T are the transmission probabilities of individual quantum channels.`,
    whyItMatters: `Foundation of mesoscopic physics and nanoelectronics. Governs electron transport through molecular junctions, carbon nanotubes, and quantum dots.`
  },

  {
    symbol: 'F',
    name: 'Faraday Constant',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'Electromagnetic',
    description: 'Charge of one mole of electrons — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `The Faraday constant is the charge of one mole of elementary charges — one mole of electrons or one mole of protons. In electrochemistry, it governs how much charge is needed to deposit or dissolve one mole of a monovalent ion.`,
    simpleExample: `To electroplate 1 mole of copper (63.5 g) from CuSO₄ solution requires 2F = 192,970 C of charge (copper is divalent, Cu²⁺ + 2e⁻ → Cu). That is why electroplating a thick layer requires large currents.`,
    deepMeaning: `Faraday's laws of electrolysis (1833-1834) state that the mass of substance deposited at an electrode is proportional to the charge passed, with F as the proportionality constant (per mole per valence): m = (M/zF) × Q. Faraday derived this relationship empirically without knowing about electrons or atoms — a remarkable achievement. The constant that bears his name now has an exact value via the definitions of NA and e.`,
    whyItMatters: `Foundation of all electrochemistry. Every lithium-ion battery, every electroplating process, every chlorine plant, and every electrolytic refining of metals operates on this constant.`
  },

  // ── PART 3: ATOMIC & NUCLEAR CONSTANTS ───────────────────────────────────

  {
    symbol: 'α',
    name: 'Fine-Structure Constant',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'dimensionless',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atomic',
    description: 'Dimensionless coupling constant of the electromagnetic force.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α is the dimensionless coupling constant of the electromagnetic interaction. It measures the strength of the electromagnetic force between charged particles — specifically, the probability amplitude for a charged particle to emit or absorb a photon.`,
    simpleExample: `In quantum electrodynamics, the probability of an electron emitting one photon in a given process is proportional to α. Two-photon processes are proportional to α², and so on. Since α ≈ 1/137, each additional photon vertex suppresses the probability by a factor of ~1/137, which is why Feynman diagrams converge rapidly for QED.`,
    deepMeaning: `α is one of the most mysterious numbers in physics. It is purely dimensionless — it has no units and takes the same value regardless of the system of units used. It combines e (electromagnetism), ε₀ (electrostatics), ħ (quantum mechanics), and c (relativity). Richard Feynman called α "one of the greatest damn mysteries of physics." In QED, α is not truly constant — it "runs" with energy scale due to vacuum polarisation: At low energies: α ≈ 1/137. At the Z boson mass scale: α ≈ 1/128.`,
    whyItMatters: `α governs all of atomic physics, chemistry, and molecular biology. The size of atoms, the strength of chemical bonds, the absorption and emission spectra of all elements — all are controlled by α. It is arguably the most important dimensionless number in physics.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg Constant',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atomic',
    description: 'Determines wavelengths of all hydrogen spectral lines.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `The Rydberg constant gives the wavenumbers (inverse wavelengths) of spectral lines in hydrogen. The wavelengths of all hydrogen spectral lines are given by the Rydberg formula: 1/λ = R∞ × (1/n₁² − 1/n₂²), where n₁ and n₂ are positive integers with n₂ > n₁.`,
    simpleExample: `For the Lyman series (transitions to ground state), the first line (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121.6 nm (ultraviolet — Lyman-alpha line). This is the most important spectral line in astrophysics — used to detect hydrogen throughout the universe and measure the expansion of space via redshift.`,
    deepMeaning: `R∞ is theoretically derived from more fundamental constants: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). This formula — derived from the Bohr model and refined by quantum mechanics — connects the spectrum of hydrogen to the mass of the electron, the elementary charge, and other fundamental constants. The agreement between theory and experiment is extraordinary. The Rydberg energy (Ry) — the binding energy of hydrogen — is: En = −Ry/n² = −13.6 eV/n².`,
    whyItMatters: `The starting point that led Bohr to the quantum atom. The most precisely measured atomic constant. known to 12 significant figures, it enables tests of QED at the level of a few parts per trillion.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Natural size scale of atoms — most probable electron-proton distance in hydrogen.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ is the most probable distance between the electron and the proton in a hydrogen atom in its ground state (n = 1). It sets the characteristic size scale of atoms. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom). This is the typical size of a hydrogen atom. Most atoms have radii within a factor of a few of a₀. The C-C bond length in diamond is ~2.9a₀. DNA helix diameter is ~40Å ≈ 75a₀.`,
    deepMeaning: `The Bohr radius emerges from the balance between the electron's kinetic energy (quantum mechanical, which tends to spread the electron out — the uncertainty principle prevents it from collapsing to the nucleus) and the Coulomb potential energy (which pulls it toward the nucleus). In quantum mechanics, the ground state wavefunction of hydrogen peaks at r = a₀. The Bohr radius sets the scale of all atomic wavefunctions — higher orbitals have radii ~ n²a₀.`,
    whyItMatters: `Defines the fundamental length scale of chemistry and materials science. In condensed matter physics, a₀ sets the length scale of chemical bonds, crystal lattice spacings, and the size of excitons. The hydrogen atom's size is ultimately what determines the density of matter.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atomic',
    description: 'Natural unit of energy in atomic physics — twice the ionisation energy of hydrogen.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `The Hartree energy is twice the ionisation energy of hydrogen from its ground state. It is the natural unit of energy in atomic physics: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `The hydrogen ground state has energy −(1/2)Eh = −13.6 eV. Typical chemical bond energies are ~0.1–0.2 Eh (3–5 eV). A C-H bond is ~0.16 Eh. These numbers are all order-unity in atomic units — perfect for quantum chemistry.`,
    deepMeaning: `In atomic units (setting ħ = me = e = a₀ = 1), Eh = 1. Atomic units enormously simplify the equations of quantum chemistry. The Schrödinger equation for hydrogen in atomic units becomes simply: −(1/2)∇²ψ − (1/r)ψ = Eψ, where E = −1/2 for the ground state, meaning −0.5 Hartree = −13.6 eV. Computational chemistry codes (density functional theory, Hartree-Fock) almost universally work in atomic units internally.`,
    whyItMatters: `The workhorse unit of quantum chemistry. Every DFT calculation, molecular dynamics simulation, and quantum chemistry result ultimately traces back to the Hartree energy. It is the fundamental energy scale of electronic structure calculations.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atomic',
    description: 'Natural unit of electron magnetic moment — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB is the natural unit of magnetic moment for electrons. It represents the magnetic moment of an electron due to its orbital angular momentum of ħ.`,
    simpleExample: `In a 1 Tesla MRI magnetic field, the Zeeman splitting between electron spin-up and spin-down states is 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV — corresponding to microwave frequencies. This is why ESR uses microwaves, while NMR uses radiofrequency.`,
    deepMeaning: `The electron's spin magnetic moment is approximately μB (exactly, it is ge × μB/2, where ge ≈ 2.002 due to quantum electrodynamic corrections). The Zeeman effect — the splitting of atomic spectral lines in a magnetic field — is governed by μB: ΔE = ml × μB × B, where ml is the magnetic quantum number. μB governs Electron Spin Resonance (ESR). Agreeing with experiment to 12 decimal places, the anomalous part is the most precisely calculated quantity in science.`,
    whyItMatters: `Foundation of electron spin resonance, magnetic materials, and all magneto-optical effects. Central to spintronics and quantum computing with spin qubits.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atomic',
    description: 'Natural unit of nuclear magnetic moment — 1836× smaller than Bohr magneton.',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN is the natural unit of magnetic moment for nucleons (protons and neutrons). It is 1836 times smaller than μB because the proton is 1836 times heavier than the electron.`,
    simpleExample: `The proton has magnetic moment 2.793 μN. In a 3 Tesla MRI scanner, the energy gap between proton spin states is 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J, corresponding to ~127 MHz radiofrequency. This is precisely the frequency an MRI scanner uses.`,
    deepMeaning: `Despite having no electric charge, the neutron has a magnetic moment of −1.913 μN. This non-zero magnetic moment for a neutral particle was historically one of the first indications that the neutron is not a fundamental particle but has internal structure (quarks). The proton's magnetic moment of 2.793 μN — not simply 1 μN as a Dirac point particle would predict — was Stern's Nobel-winning discovery in 1933. NMR (and MRI) is based on proton spin transitions.`,
    whyItMatters: `Foundation of NMR spectroscopy and MRI — the most powerful tools in structural chemistry and medical imaging. Historically proved the internal quark structure of the nucleon.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Particle',
    description: 'Rest mass of the electron — the lightest massive fundamental particle.',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `This is the rest mass of the electron — the lightest massive fundamental particle. In energy units via E = mc²: mec² = 0.510 998 950 MeV. The electron is 1836.15 times lighter than the proton.`,
    simpleExample: `Pair production (γ → e⁺ + e⁻) requires a photon of at least 2mec² = 1.022 MeV. Below this energy, photons cannot create electron-positron pairs — no matter how many there are. This threshold governs gamma-ray absorption in matter.`,
    deepMeaning: `The electron mass is a free parameter of the Standard Model — it is not predicted theoretically but must be measured. It is generated by the Higgs mechanism: the electron interacts with the Higgs field, and the strength of this interaction (the Yukawa coupling, ye ≈ 2.94 × 10⁻⁶) determines the mass. The smallness of the electron's Yukawa coupling compared to the top quark's (yt ≈ 1) is one of the unsolved "hierarchy" puzzles of particle physics. The electron appears to be a truly elementary point particle.`,
    whyItMatters: `Governs all atomic and chemical behaviour. Determines the size of atoms via a₀ = ħ²/(mee²k), the binding energies of electrons, the energy of X-rays, and the depth of penetration of beta radiation.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-factor',
    value: '−2.002319304',
    unit: 'dimensionless',
    exact: '−2.00231930436256',
    category: 'Particle',
    description: 'The most precisely verified prediction in all of science.',
    discoveredBy: 'Kusch & Foley (1948) · QED calculation: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `The g-factor is the ratio of the electron's actual magnetic moment to what it would be if the electron were a simple Dirac particle (g = 2 exactly). The anomalous magnetic moment is ae = (ge − 2)/2 = 0.001 159 65.`,
    simpleExample: `The theoretical prediction of ae from QED requires summing Feynman diagrams with up to 10 loops (involving 12,672 diagrams at the fourth order alone). The result agrees with experiment to 12 decimal places — 1 part per trillion.`,
    deepMeaning: `The anomalous magnetic moment of the electron is the most precisely tested prediction in all of science. Quantum electrodynamics (QED) calculates the deviation from g = 2 as a power series in the fine-structure constant α: ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... Any deviation from the QED prediction would signal new physics beyond the Standard Model. The success of this calculation is the greatest triumph of theoretical physics.`,
    whyItMatters: `The greatest triumph of theoretical physics. Tests QED more stringently than any other measurement. Provides the most precise determination of the fine-structure constant α.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton Mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Particle',
    description: 'Rest mass of the proton — 1836× heavier than the electron.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `In energy units: mpc² = 938.272 MeV. The proton is 1836.15 times heavier than the electron. This mass ratio is one of the most consequential numbers in atomic physics.`,
    simpleExample: `The proton's large mass means its de Broglie wavelength at thermal energies is ~43× smaller than an electron's — making protons far less quantum-wave-like. This is why the Born-Oppenheimer approximation works: nuclei act as classical particles.`,
    deepMeaning: `Unlike the electron, the proton is not fundamental — it is a composite particle made of two up quarks and one down quark, bound together by the strong force mediated by gluons. Remarkably, the masses of the quarks account for only ~1% of the proton's mass. The remaining 99% comes from the kinetic energy of the quarks and the energy stored in the gluon fields — a profound manifestation of E = mc². Mass is mostly energy. The proton has a finite charge radius of 0.8409 fm.`,
    whyItMatters: `Protons define atomic numbers and nearly all atomic mass. Almost all the mass of your body is really the energy of the quantum chromodynamic (QCD) field inside protons and neutrons. If it were significantly different, life would be fundamentally altered.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-factor',
    value: '5.586',
    unit: 'dimensionless',
    exact: '5.5856946893',
    category: 'Particle',
    description: 'Large anomalous magnetic moment that proved the proton is composite.',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `For a simple Dirac proton, gp should equal 2. Instead, gp ≈ 5.586 — nearly three times larger. This enormous anomalous magnetic moment was one of the first experimental discoveries pointing to the proton's composite structure.`,
    simpleExample: `If the proton were a simple, structureless point, it would behave like a magnet of strength 2. The fact that it is 5.586 is direct numerical proof that there are internal charges moving inside it (quarks).`,
    deepMeaning: `Otto Stern measured gp ≈ 5.6 in 1933, at a time when the proton was thought to be a fundamental Dirac particle. This result shocked the physics community. The large anomalous magnetic moment — and the neutron's non-zero magnetic moment — were key evidence for the quark model. These values can now be partially understood through QCD calculations, though a fully precise first-principles calculation from QCD remains a major challenge.`,
    whyItMatters: `Historically essential discovery that led to the quark model. Central to calculating magnetic resonances in atomic nuclei (NMR/MRI). Stringent test of hadron structure theory.`
  },

  // ── PART 6: NEUTRON CONSTANTS ─────────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron Mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'Slightly heavier than the proton — the mass difference enables beta decay.',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `The neutron is slightly heavier than the proton — by 1.293 MeV/c². In energy units: mnc² = 939.565 MeV. This small but crucial mass difference means that a free neutron is unstable — it decays by beta decay.`,
    simpleExample: `A free neutron decays in ~10 minutes (half-life 613.9 s). The energy released is the 1.293 MeV mass difference. Inside nuclei, neutrons are stabilised by nuclear binding energy and do not decay.`,
    deepMeaning: `If the neutron were lighter than the proton by more than the electron mass, free protons would decay into neutrons and positrons — hydrogen atoms would be unstable, fundamentally changing all of chemistry. The mass difference determined the neutron-to-proton ratio (n/p ≈ 1/7) locked in during Big Bang nucleosynthesis, setting the cosmic abundances of hydrogen (75%) and helium (25%).`,
    whyItMatters: `Governs nuclear stability, beta decay, and the cosmic abundance of the elements. The neutron mass difference is cosmologically essential for the existence of hydrogen and therefore life.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron Magnetic Moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Negative magnetic moment despite zero charge — proof of internal quarks.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `The neutron has a negative magnetic moment (−1.913 nuclear magnetons) despite having absolutely zero net electric charge.`,
    simpleExample: `A structureless neutral particle should have no magnetic moment. The fact that the neutron reacts to magnetic fields is the smoking gun that it contains charged sub-particles whose effects do not quite cancel out.`,
    deepMeaning: `A magnetic moment requires either charge or spin distribution. The neutron's negative magnetic moment arises from its internal quark structure: the two down quarks (charge −e/3 each) and one up quark (charge +2e/3) are in constant quantum motion. The spatial distribution of the spinning charged quarks creates a net negative magnetic moment. The explanation lies in quark substructure: the neutron contains one up quark and two down quarks.`,
    whyItMatters: `One of the most shocking results in nuclear physics. Current limits on the neutron Electric Dipole Moment (EDM) are used to test CP symmetry and explain the matter-antimatter asymmetry of the universe.`
  },

  // ── PART 7: MUON & TAU CONSTANTS ─────────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon Mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Particle',
    description: 'The heavier copy of the electron — "Who ordered that?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `The muon is 206.768 times heavier than the electron. It carries the same charge and interacts identically in all non-gravitational respects — as if nature made a second, heavier copy of the electron.`,
    simpleExample: `Cosmic ray muons created at 15 km altitude travel at ~0.99c. Classically they should decay before reaching the ground (2.2 μs lifetime → only 650 m travel). Yet they arrive in large numbers because relativistic time dilation (γ ≈ 7) extends their lifetime to ~15 μs.`,
    deepMeaning: `The muon fits nowhere in any simple theoretical picture. Its existence is simply a fact of nature. It decays: μ⁻ → e⁻ + ν̄e + νμ. Muonic atoms (μ⁻ replacing e⁻) orbit ~207× closer to the nucleus, making them exquisitely sensitive to nuclear structure. The muon anomalous magnetic moment (g-2) currently shows a ~4σ discrepancy from theory.`,
    whyItMatters: `The muon anomalous magnetic moment is the leading experimental hint of physics beyond the Standard Model. Muons are used to image volcano interiors and detect smuggled nuclear material.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon Anomalous Magnetic Moment',
    value: '0.0011659',
    unit: 'dimensionless',
    exact: '0.00116592059',
    category: 'Particle',
    description: 'The leading experimental hint of physics beyond the Standard Model.',
    discoveredBy: 'Fermilab Muon g-2 experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Like the electron, the muon has an anomalous magnetic moment. ae = (ge − 2)/2 = 0.001 165 920 59. It measures the deviation from the Dirac prediction g = 2.`,
    simpleExample: `Unlike the electron, the muon is sensitive to virtual contributions from heavier particles because quantum corrections scale as (mμ/M)² where M is the mass of the virtual particle.`,
    deepMeaning: `There is a discrepancy of approximately 4.2 standard deviations between theory and experiment — tantalisingly close to the 5-sigma threshold for a definitive discovery. If confirmed, this would be the first clear evidence of physics beyond the Standard Model — potentially supersymmetric particles or extra dimensions. The resolution hinges on lattice QCD calculations.`,
    whyItMatters: `One of the hottest topics in particle physics. If confirmed, it would require a fundamental rewrite of our understanding of the subatomic world.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton Mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Particle',
    description: 'The heaviest charged lepton — 3477× heavier than the electron.',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `The tau lepton is the third and heaviest charged lepton — 3477 times heavier than the electron and 16.8 times heavier than the muon.`,
    simpleExample: `The tau is so heavy (1.78 GeV) it can decay into hadrons — pions and kaons — unlike the muon. Its extremely short lifetime (~2.9 × 10⁻¹³ s) means it travels only ~87 μm before decaying, requiring micron-scale precision to observe.`,
    deepMeaning: `The tau is the third generation charged lepton. Why there are exactly three generations of leptons, and why they have such wildly different masses, is one of the deepest mysteries of the Standard Model. The mass hierarchy (0.511 MeV → 105.7 MeV → 1776.9 MeV) has no theoretical explanation. The tau neutrino was not directly detected until 2000.`,
    whyItMatters: `The existence of three generations of leptons is a profound mystery of nature. The tau and its neutrino were crucial in establishing the Standard Model as a consistent theory.`
  },

  // ── PART 8: PHYSICO-CHEMICAL CONSTANTS ────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas Constant',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'Thermodynamic',
    description: 'R = NA × k — workhorse of thermodynamics and chemistry.',
    discoveredBy: 'Various (19th century)',
    formula: 'PV = nRT',
    whatItSays: `R is Boltzmann's constant scaled to the molar level. The ideal gas law PV = nRT combines Boyle's law, Charles's law, and Avogadro's law into a single equation.`,
    simpleExample: `The speed of sound in a gas: v = √(γRT/M). For air (M = 0.029 kg/mol, γ = 1.4) at 20°C, v ≈ 343 m/s. This shows the speed of sound is determined fundamentally by R and the temperature.`,
    deepMeaning: `Molar heat capacities of ideal gases are simple multiples of R: Cv = (3/2)R for monatomic, (5/2)R for diatomic gases. In statistical mechanics, the entropy of an ideal gas (the Sackur-Tetrode equation) contains R. It appears in the entropy of mixing, the Clausius-Clapeyron equation, the van't Hoff equation for osmotic pressure, and the Nernst equation for electrode potentials.`,
    whyItMatters: `The universal constant of thermodynamics. Every gas law, every thermodynamic calculation, every atmospheric model, and every chemical reaction energetic calculation uses R.`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann Constant',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamic',
    description: 'Power radiated by a blackbody — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `A perfect blackbody radiates electromagnetic power per unit area P/A = σT⁴. σ is derived from more fundamental constants: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `The Sun's surface temperature of ~5778 K gives a power output of σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W. Your body (T ≈ 310 K) radiates σ × (310)⁴ × (1.7 m²) ≈ 520 W — roughly half of which is replaced by metabolic heat.`,
    deepMeaning: `The T⁴ dependence arises from integrating the Planck blackbody spectrum over all frequencies. It means that doubling the temperature increases radiated power by a factor of 2⁴ = 16. The cosmic microwave background (CMB) — relic radiation from the Big Bang — is a perfect blackbody at T = 2.725 K. The effective temperature of Earth is determined by balancing solar radiation against σT⁴ emission.`,
    whyItMatters: `Governs stellar luminosity, Earth's energy balance and climate, thermal cameras, optical pyrometry, and the temperature structure of the universe.`
  },

  {
    symbol: 'b',
    name: 'Wien Displacement Constant',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'Thermodynamic',
    description: 'Relates peak blackbody wavelength to temperature.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien's displacement law relates the peak wavelength of blackbody radiation to temperature: λ_max × T = b. The hotter an object, the shorter (bluer) its peak wavelength.`,
    simpleExample: `The Sun (T = 5778 K) peaks at λ_max ≈ 502 nm — green light. Human eyes evolved to be most sensitive in exactly this range. The human body (T = 310 K) emits primarily at λ_max ≈ 9.4 μm — mid-infrared, which is why thermal cameras work.`,
    deepMeaning: `The peak frequency version f_max = b' × T uses b' = 5.879 × 10¹⁰ Hz/K. Note that peak frequency does not simply correspond to c/λ_max because the wavelength and frequency distributions have different shapes. Historically, the ratio of radiation constants was used to measure h and k independently.`,
    whyItMatters: `Fundamental to thermal imaging, stellar temperature measurement, climate science, and the physics of blackbody radiation.`
  },

  // ── PART 9: GRAVITATIONAL & ELECTROWEAK CONSTANTS ─────────────────────────

  {
    symbol: 'G',
    name: 'Gravitational Constant',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universal',
    description: 'The weakest force — least precisely known fundamental constant.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton's law: F = Gm₁m₂/r². In General Relativity, G appears in Einstein's field equations governing how matter curves spacetime.`,
    simpleExample: `Gravity between two 1 kg masses separated by 1 metre: F = 6.674 × 10⁻¹¹ N — roughly the weight of a single bacterium. The electromagnetic force between two protons is 10³⁶ times stronger. This is why gravity is irrelevant at atomic scales.`,
    deepMeaning: `G is the least precisely known fundamental constant — known to only 5 significant figures. This is because gravity is the weakest force: measuring it in the lab means fighting against seismic noise and residual forces. The factor 8πG/c⁴ quantifies spacetime curvature per unit energy. The Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m is where quantum gravity is expected — 10²⁰ times smaller than a proton.`,
    whyItMatters: `Controls all gravitational phenomena — from a thrown ball to black holes and the large-scale structure of the universe. The absence of a quantum theory of gravity is the deepest unsolved problem in physics.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling Constant',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particle',
    description: 'Coupling strength of the weak nuclear force — governs beta decay.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF is the coupling constant of the weak nuclear force in Fermi's four-fermion effective theory of beta decay: n → p + e⁻ + ν̄e. The weak cross-section is proportional to GF².`,
    simpleExample: `The weak interaction is so weak that a neutrino can pass through a light-year of lead with only a 50% chance of being stopped. Yet it is essential for the Sun's energy — the pp chain starts with a weak interaction.`,
    deepMeaning: `Unlike e², GF has dimensions of energy⁻², making Fermi's theory non-renormalisable. The resolution was electroweak unification (Nobel 1979): the weak force is mediated by massive W and Z bosons (~80–91 GeV). At low energies, the exchange of a W boson looks like a point interaction. The large W mass suppresses weak interactions, making beta decay slow despite the underlying coupling being comparable to electromagnetism.`,
    whyItMatters: `Governs all beta decay, neutrino interactions, and the electroweak unification. The weak force drives the Sun's pp chain and is responsible for nuclear synthesis of heavy elements in stars.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Weak Mixing Angle',
    value: '0.2229',
    unit: 'dimensionless',
    exact: '0.22290',
    category: 'Particle',
    description: 'Quantifies mixing between electromagnetic and weak forces.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `The weak mixing angle θW (Weinberg angle) parameterises the mixing between the photon and Z boson in electroweak unification. e = g sin θW = g' cos θW.`,
    simpleExample: `The value sin²θW ≈ 0.231 is measured with extraordinary precision at particle colliders (LHC) and from atomic parity violation experiments.`,
    deepMeaning: `In electroweak unification, the photon and Z boson are mixtures of two underlying gauge bosons (W⁰ and B). The running of sin²θW with energy is precisely predicted by the Standard Model and measured to confirm electroweak radiative corrections — a stringent test of the theory.`,
    whyItMatters: `A fundamental parameter of the Standard Model that links the properties of the electromagnetic and weak nuclear forces.`
  },

  // ── PART 11: ADDITIONAL ATOMIC & NUCLEAR CONSTANTS ────────────────────────

  {
    symbol: 'κ',
    name: 'Quantum of Circulation',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomic',
    description: 'Fundamental unit of circulation for an electron — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `The circulation of a quantum fluid (like superfluid helium or a superconductor) is quantised in units of h/m. For superconductors, the relevant particle is a Cooper pair of mass 2me.`,
    simpleExample: `In superfluid helium-4, vortices carry circulation in multiples of h/m_He. Rotating superfluid helium develops a lattice of these quantised vortices — analogous to the Abrikosov vortex lattice in type-II superconductors.`,
    deepMeaning: `The quantisation of circulation is a direct consequence of the single-valuedness of the quantum mechanical wavefunction. If a superfluid rotates, the phase of the macroscopic wavefunction must return to the same value after going around any closed loop. This forces the circulation to be quantised: Γ = n × h/m.`,
    whyItMatters: `Explains the behavior of superfluids and superconductors. The quantum of circulation also appears in the Aharonov-Bohm effect, connecting quantum phase to magnetic flux.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson Cross Section',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atomic',
    description: 'Effective area presented by a free electron to an incoming photon.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `When low-energy photons (photon energy ≪ mec²) scatter off a free electron, the total scattering cross-section is σT = (8π/3) × re², where re is the classical electron radius.`,
    simpleExample: `Think of the electron as presenting a "target area" of σT to an incoming photon. If you fire photons at a box of electrons, the mean free path before scattering is λ = 1/(nσT).`,
    deepMeaning: `The Thomson cross section is the elastic scattering limit of the more general Compton scattering formula. When photon energy Eγ ≪ 0.511 MeV, the recoil of the electron is negligible and scattering is purely classical. In stellar interiors, radiation pressure is transmitted by photon-electron Thomson scattering. The Eddington luminosity — the maximum luminosity a star can have before radiation pressure overcomes gravity — depends on σT.`,
    whyItMatters: `Thomson scattering explains why the sky is blue (at low frequencies) and why the solar corona is visible during eclipses. The Cosmic Microwave Background (CMB) was created when the universe cooled enough for electrons to combine with protons, as before this the universe was opaque due to Thomson scattering.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Electron Charge-to-Mass Ratio',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atomic',
    description: 'Determines how strongly an electron responds to electromagnetic forces.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `This is the ratio of the electron's charge to its mass. It determines how strongly an electron responds to electromagnetic forces.`,
    simpleExample: `In a CRT (cathode ray tube) television, the deflection of the electron beam by electric and magnetic fields is governed by e/me. The large value of e/me means electrons are far more easily deflected than ions.`,
    deepMeaning: `Thomson's famous cathode ray experiment proved that cathode rays were streams of negatively charged particles with a ratio ~1800 times larger than hydrogen ions. The cyclotron frequency ωc = eB/me is directly proportional to e/me. This ratio also appears in the plasma frequency ωp² = ne²/(meε₀), which governs how radio waves reflect off the ionosphere.`,
    whyItMatters: `Fundamental to mass spectrometry, particle accelerators, and vacuum electronics. Governs electron cyclotron resonance heating in fusion plasmas.`
  },

  {
    symbol: 'M(e)',
    name: 'Electron Molar Mass',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomic',
    description: 'Mass of one mole of electrons — me × NA.',
    discoveredBy: 'Derived',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `The mass of one mole of electrons is extremely small — about 0.55 milligrams per mole.`,
    simpleExample: `In electrochemistry, when calculating mass changes at electrodes during electrolysis, the electron molar mass is negligible compared to the ionic masses.`,
    deepMeaning: `In high-precision atomic mass measurements, the binding energies and the mass of the electron cloud must be accounted for. The atomic mass of an atom is M(atom) = M(nucleus) + Z × M(e) − (electron binding energy)/c². Penning trap mass spectrometry requires this correction to reach 10 significant figures.`,
    whyItMatters: `Essential for the most precise mass comparisons in physics and for testing the consistency of the SI unit definitions.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton Mass Ratio',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'dimensionless',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atomic',
    description: 'The electron is 1836.15 times lighter than the proton.',
    discoveredBy: 'Derived',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `The mass of an electron compared to a proton. This ratio is approximately 1/1836.`,
    simpleExample: `Because me/mp ≪ 1, electrons move much faster than nuclei in molecules. This allows us to solve the electronic Schrödinger equation at fixed nuclear positions — the Born-Oppenheimer approximation.`,
    deepMeaning: `This ratio separates chemical energy scales (~eV) from nuclear energy scales (~MeV). The ratio is also critical in stellar physics: the Chandrasekhar limit — the maximum mass of a white dwarf — depends directly on (mp/me). Variations across cosmic time are tested through molecular hydrogen absorption spectra in distant quasars.`,
    whyItMatters: `One of the most consequential dimensionless numbers in nature. It governs atomic structure, the hierarchy of energy scales, and the stability of stars.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Proton Charge-to-Mass Ratio',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atomic',
    description: 'Ratio of elementary charge to proton mass — 1836× smaller than electron\'s.',
    discoveredBy: 'Derived',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `The ratio of the elementary charge to the proton mass. It dictates how protons respond to magnetic fields.`,
    simpleExample: `The proton cyclotron frequency in a magnetic field is 1836 times lower than the electron's. This is why MRI uses radiofrequency waves (MHz range) rather than microwave frequencies.`,
    deepMeaning: `In mass spectrometry, ions are separated by their charge-to-mass ratios. The proton's e/mp serves as a fundamental calibration standard. Cyclotron resonance mass spectrometry (Penning traps) uses this ratio to measure atomic masses with extreme precision. In accelerator physics, the rigidity of a proton beam determines the bending radius in magnetic fields.`,
    whyItMatters: `Fundamental to medical imaging (MRI), mass spectrometry, and the design of high-energy particle accelerators like the LHC.`
  },

  {
    symbol: 'M(p)',
    name: 'Proton Molar Mass',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Atomic',
    description: 'The mass of one mole of protons.',
    discoveredBy: 'Derived',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `The mass of one mole of protons is approximately 1.007 g/mol.`,
    simpleExample: `It is slightly less than 1 g/mol because the atomic mass unit is defined as 1/12 the mass of carbon-12, which includes binding energy and electron mass contributions.`,
    deepMeaning: `In nuclear physics, the Q-value of a nuclear reaction — the energy released or absorbed — is calculated from the mass difference using molar masses. The proton molar mass is a fundamental reference in these calculations.`,
    whyItMatters: `Fundamental to stoichiometric calculations in nuclear chemistry and astrophysics.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutron-Electron Mass Ratio',
    value: '1838.68',
    unit: 'dimensionless',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'The neutron is 1838.68 times heavier than the electron.',
    discoveredBy: 'Derived',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `The ratio of the neutron mass to the electron mass. It is slightly higher than the proton-electron ratio.`,
    simpleExample: `The neutron is heavier than a proton by 2.531 electron masses. This mass difference corresponds to 1.293 MeV — the energy released in neutron beta decay.`,
    deepMeaning: `The fact that this ratio is higher than the proton-electron ratio makes free neutrons unstable. If the neutron were lighter than the proton by more than the electron mass, hydrogen would not exist as a stable element. This ratio is measured with extraordinary precision using Penning traps.`,
    whyItMatters: `Governs the stability of the building blocks of the universe.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton Mass Ratio',
    value: '1.00138',
    unit: 'dimensionless',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'The neutron is slightly heavier than the proton by 0.138%.',
    discoveredBy: 'Derived',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `The neutron is heavier than the proton by a fraction of 0.138%.`,
    simpleExample: `This tiny mass difference (1.293 MeV/c²) determined that about 25% of baryonic matter became helium-4 during the Big Bang, with the rest remaining as hydrogen.`,
    deepMeaning: `In the early universe, the equilibrium ratio of neutrons to protons followed the Boltzmann factor. As the universe cooled and weak interactions froze out, the n/p ratio was locked at about 1/7. If the mass difference were slightly different, stellar evolution and chemistry would be changed.`,
    whyItMatters: `The observed cosmic helium abundance of ~25% is one of the greatest confirmations of the Big Bang model, all thanks to this constant.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutron g-factor',
    value: '−3.826',
    unit: 'dimensionless',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'Reveals the internal quark structure of the electrically neutral neutron.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `The g-factor for the neutron is −3.826. For a structureless Dirac particle with zero charge, it should be exactly 0.`,
    simpleExample: `The non-zero magnetic moment of the neutral neutron was one of the most shocking results in nuclear physics, proving that neutral particles can have internal parts.`,
    deepMeaning: `The neutron contains one up quark and two down quarks. Their magnetic moments and orbital motion produce the net negative magnetic moment. The non-relativistic quark model predicts g ≈ −3.67; the discrepancy is due to relativistic corrections and gluon effects. Precise measurements test QCD calculations of hadron structure.`,
    whyItMatters: `Stringent test of the Standard Model and quark structure. Also used to place limits on the neutron electric dipole moment.`
  },

  {
    symbol: 'M(n)',
    name: 'Neutron Molar Mass',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'The mass of one mole of neutrons.',
    discoveredBy: 'Derived',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `One mole of neutrons weighs about 1.00866 grams.`,
    simpleExample: `Although free neutrons decay in 10 minutes, the neutron molar mass is essential for calculating the "curve of binding energy" which dictates how much energy nuclear power plants can produce.`,
    deepMeaning: `The nuclear binding energy per nucleon is calculated using atomic masses: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². The larger neutron mass compared to the proton mass affects every nuclear binding energy calculation.`,
    whyItMatters: `Foundation of nuclear engineering and the study of nuclear isotopes.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Neutron Compton Wavelength',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'Natural length scale of nuclear physics — h/mnc.',
    discoveredBy: 'Derived',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `The wavelength of a photon whose energy equals the neutron rest mass energy. It is about 1.32 femtometres.`,
    simpleExample: `This wavelength is comparable to the size of the neutron itself (~0.8 fm) and to the range of nuclear forces (~1.4 fm).`,
    deepMeaning: `Characteristic distance scales of nuclear physics are set by the Compton wavelengths of nucleons and pions. Below this scale, quantum field theory effects like vacuum polarisation become important. In neutron scattering experiments used to study protein structures, the neutron wavelength is tuned to match interatomic spacings.`,
    whyItMatters: `Sets the scale below which the neutron cannot be treated as a simple non-relativistic particle.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton Wavelength',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Particle',
    description: 'Wavelength of a photon whose energy equals the muon rest mass.',
    discoveredBy: 'Derived',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `The muon Compton wavelength is about 11.7 fm — smaller than the electron's by the mass ratio (206.77).`,
    simpleExample: `In muonic atoms, the muon orbits much closer to the nucleus than an electron would, because the muon's Bohr radius scales inversely with mass.`,
    deepMeaning: `Muonic hydrogen has the muon orbiting at ~256 fm — close enough to the proton that its finite size significantly affects energy levels. This is why muonic hydrogen spectroscopy provides the most precise measurements of the proton charge radius.`,
    whyItMatters: `Led to the "proton radius puzzle," a major focus of modern precision atomic physics.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g-factor',
    value: '−2.00233',
    unit: 'dimensionless',
    exact: '−2.0023318418',
    category: 'Particle',
    description: 'Crucial probe for undiscovered heavy particles.',
    discoveredBy: 'Experimental / QED calculation',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Like the electron, the muon has an anomalous magnetic moment ae = 0.001 165 920 59.`,
    simpleExample: `The g-2 experiment at Fermilab measures this to check if "virtual" heavy particles from supersymmetry or other theories are affecting the muon's magnetic spin.`,
    deepMeaning: `The current experimental value disagrees with the Standard Model prediction by ~4.2 standard deviations. The resolution hinges on the precision of lattice QCD calculations of the hadronic vacuum polarisation.`,
    whyItMatters: `One of the most significant discrepancies between the Standard Model and experiment currently known.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron Mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'Nucleus of heavy hydrogen — simplest nuclear bound state.',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `The deuteron is the nucleus of deuterium (one proton plus one neutron). Its binding energy is 2.224 MeV.`,
    simpleExample: `The binding energy is remarkably small (compare helium-4: 28.3 MeV). This fragility created the "deuterium bottleneck" in the Big Bang, delaying the formation of heavier elements.`,
    deepMeaning: `The deuteron is the simplest nuclear bound state — analogous to the hydrogen atom. Its non-zero quadrupole moment proves the nuclear force has a tensor component arising from pion exchange. The first step of fusion in the Sun (p + p → d + e⁺ + νe) is extraordinarily slow; the Sun's longevity is due to this bottleneck.`,
    whyItMatters: `Fundamental test bed of nuclear force theory. Deuterium is used as a neutron moderator in nuclear reactors and in pharmaceutical research.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron Magnetic Moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Magnetic moment of the simplest nucleus.',
    discoveredBy: 'Nuclear Physics / NMR studies',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `The deuteron's magnetic moment is 0.857 nuclear magnetons.`,
    simpleExample: `If spins were simply aligned, the sum would be μp + μn = 0.880 μN. The actual value is 0.857 μN. This discrepancy is precisely explained by the orbital magnetic moment of the D-wave admixture in the wavefunction.`,
    deepMeaning: `The agreement between the calculated and measured deuteron magnetic moment validates nuclear force models. Deuteron NMR is used to study molecular dynamics.`,
    whyItMatters: `Beautiful confirmation of the nuclear structure model and pion exchange theory.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g-factor',
    value: '0.8574',
    unit: 'dimensionless',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'Relates deuteron magnetic moment to the nuclear magneton.',
    discoveredBy: 'Derived',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Unlike the electron (g ≈ −2) or proton (g ≈ 5.586), the deuteron's g-factor is less than 1.`,
    simpleExample: `This value reflects the partial cancellation between the proton and neutron magnetic moments within the nucleus.`,
    deepMeaning: `Precision measurements allow extraction of the neutron magnetic moment through corrections including meson exchange currents and relativistic effects.`,
    whyItMatters: `Used to validate complex nuclear force models at the 0.1% level.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion Mass',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'Nucleus of helium-3 — two protons and one neutron.',
    discoveredBy: 'Nuclear physics experimental data',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `The helion is the nucleus of helium-3. Its binding energy is 7.718 MeV.`,
    simpleExample: `Superfluid helium-3 is a model system for unconventional superconductivity and topological quantum states.`,
    deepMeaning: `He-3 is the mirror nucleus of the triton. The small mass difference between them tests the charge symmetry of nuclear forces. The helion g-factor is −4.255 μN — reflecting the dominant contribution of the single neutron.`,
    whyItMatters: `Used in high cross-section neutron detectors and for hyperpolarised lung MRI.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha Particle Mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'Helium-4 nucleus — extraordinarily stable, 28.3 MeV binding energy.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `The alpha particle is the helium-4 nucleus. It has a binding energy of 7.074 MeV per nucleon — near the peak of the binding energy curve.`,
    simpleExample: `Alpha decay half-lives span 20 orders of magnitude (from 0.3 μs to 14 billion years). Both are explained by Gamow's quantum tunnelling theory.`,
    deepMeaning: `The alpha particle's exceptional stability is why it is preferentially emitted in radioactive decay. It has zero spin and zero magnetic moment — a completely closed-shell nucleus. The triple-alpha process (3α → ¹²C) requires a resonance in carbon-12 at 7.65 MeV (the Hoyle state). Without this resonance, no carbon would exist.`,
    whyItMatters: `Product of most heavy nucleus decays. The triple-alpha process is the source of all carbon in the universe. Used in targeted alpha radiotherapy for cancer.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomic Mass Constant',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'Thermodynamic',
    description: '1/12 of carbon-12 mass — the natural unit of atomic masses.',
    discoveredBy: 'International standard (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `The atomic mass unit (u, or dalton, Da) is defined as 1/12 of the mass of one atom of carbon-12.`,
    simpleExample: `Carbon-12 = 12 u exactly. Hydrogen = 1.0078 u. A protein of 50 kDa has a mass of 50,000 × 1.661 × 10⁻²⁷ kg.`,
    deepMeaning: `The conversion 1 u = 931.494 MeV/c² is one of the most useful in nuclear physics. Nuclear mass differences of milliatomic mass units release MeV-scale energies. The choice of carbon-12 was a 1961 compromise between physics and chemistry communities.`,
    whyItMatters: `Foundation of nuclear physics, mass spectrometry, and all of biochemistry where protein masses are expressed in daltons.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molar Mass Constant',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'Relates atomic mass unit to the molar mass.',
    discoveredBy: 'SI redefinition (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu relates the atomic mass unit to the molar mass: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Because Mu ≈ 1 g/mol, the molar mass of a substance in grams equals its relative atomic mass (e.g. Water is ~18.015 g/mol).`,
    deepMeaning: `Historically exactly 1 g/mol. After 2019, both NA and mu are independently defined, so Mu is no longer exactly 1 g/mol — it deviates by about 10⁻⁹. This is negligible for practical purposes but a reminder that the new SI is fundamentally different.`,
    whyItMatters: `Foundation of stoichiometric calculations in chemistry. Every mole-to-gram conversion depends on this.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molar Planck Constant',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamic',
    description: 'Planck constant scaled to the molar level — NA × h.',
    discoveredBy: 'Derived',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `The energy per mole of photons per unit frequency.`,
    simpleExample: `In photochemistry, the energy of one "Einstein" (one mole of photons) is NAhf.`,
    deepMeaning: `Appears in the Sackur-Tetrode equation for the absolute entropy of an ideal gas. It connects the quantum mechanical partition function to macroscopic thermodynamic quantities at the molar scale.`,
    whyItMatters: `Fundamental to photochemistry and statistical thermodynamics.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Molar Volume of Ideal Gas (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamic',
    description: 'Volume occupied by one mole of ideal gas at STP.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `At 0°C and 101,325 Pa, one mole of any ideal gas occupies 22.413... litres.`,
    simpleExample: `A litre of hydrogen and a litre of oxygen at STP contain exactly the same number of molecules (2.688 × 10²²).`,
    deepMeaning: `From the ideal gas law: V = nRT/P. This "molar volume" allows rapid conversion between gas amount and volume. The fact that all ideal gases have the same molar volume at STP was a revolutionary insight by Avogadro.`,
    whyItMatters: `One of the most practically useful numbers in chemistry for gas stoichiometry.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt Constant',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamic',
    description: 'Number of molecules per cubic metre of an ideal gas at STP.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `The number of air molecules at sea level is approximately 2.687 × 10²⁵ per cubic metre.`,
    simpleExample: `The mean free path of an air molecule at STP is roughly 66 nm. The collision frequency is ~10¹⁰ per second.`,
    deepMeaning: `Loschmidt estimated this in 1865 using gas viscosity and molecular diameter. It was the first serious estimate of molecules in a macroscopic volume and the first direct evidence that atoms had definite sizes. Rayleigh scattering (why the sky is blue) is proportional to n₀.`,
    whyItMatters: `Fundamental to atmospheric physics and the history of atomic theory.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Molar Volume of Silicon',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamic',
    description: 'Volume occupied by one mole of silicon atoms in its crystal lattice.',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `The volume of one mole of solid silicon in its diamond cubic structure.`,
    simpleExample: `Measure the lattice parameter 'a' by X-ray diffraction and macroscopic density 'ρ' to find NA to 2 parts per billion.`,
    deepMeaning: `Silicon is the reference material for the X-ray crystal density method. The Avogadro Project used 1 kg silicon spheres of extraordinary perfection to redefine the kilogram in 2019. It connects X-ray crystallography to macroscopic mass standards.`,
    whyItMatters: `Central to the 2019 redefinition of the kilogram.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Molar Mass of Carbon-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'Mass of one mole of carbon-12 atoms.',
    discoveredBy: 'SI redefinition (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `Before 2019, this was exactly 12 g/mol. Now, in the new SI, it has a tiny measured uncertainty.`,
    simpleExample: `The deviation from exactly 12 g/mol is about 10 parts per billion — completely negligible for chemistry but critical for metrology.`,
    deepMeaning: `Reflects the inconsistency between defining NA exactly and the historical definition of the atomic mass unit. Base units are now defined by fixing fundamental constants.`,
    whyItMatters: `A reminder that the new SI is defined by constants, not material artifacts.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'First Radiation Constant',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamic',
    description: 'Sets overall scale of blackbody radiation intensity — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Appears in the Planck blackbody radiation law for spectral radiance.`,
    simpleExample: `The Sun peaks at ~502 nm (green). Solar cells are designed to match this Planck spectrum precisely calculated using c₁.`,
    deepMeaning: `The Planck radiation law launched quantum mechanics in 1900. Planck's quantum hypothesis introduced the exponential factor that suppresses high-frequency divergence (the ultraviolet catastrophe).`,
    whyItMatters: `Fundamental to astrophysics, solar energy, and cosmology.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'First Radiation Constant for Spectral Radiance',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamic',
    description: 'c₁ divided by π — gives radiance per unit solid angle.',
    discoveredBy: 'Derived',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Gives spectral radiance per unit solid angle rather than hemispherical spectral irradiance.`,
    simpleExample: `Essential for correctly calculating optical system performance like telescope sensitivity or camera exposure.`,
    deepMeaning: `Reflects the difference between integrated hemisphere emission and radiance in a specific direction. For a Lambertian emitter, the relationship involves a factor of π.`,
    whyItMatters: `Essential in radiometry and satellite remote sensing.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Second Radiation Constant',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'Thermodynamic',
    description: 'Connects wavelength and temperature in the Planck function — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Appears in the exponent of the Planck function. Sets the crossover between quantum and classical regimes.`,
    simpleExample: `Wien's displacement law (λ_max × T = b) is derived from c₂. Thermal cameras detect people because bodies at 310 K peak in the mid-infrared.`,
    deepMeaning: `Historically, the ratio c₁/c₂ was used to measure Boltzmann's constant. At room temperature, quantum corrections become important for mid-infrared radiation.`,
    whyItMatters: `Fundamental to climate science, thermal imaging, and stellar physics.`
  },

  {
    symbol: 'g',
    name: 'Standard Acceleration of Gravity',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (exact)',
    category: 'Universal',
    description: 'Standard value of gravitational acceleration at Earth\'s surface.',
    discoveredBy: 'International Bureau of Weights and Measures (1901)',
    formula: 'W = mg',
    whatItSays: `A defined conventional standard for gravitational acceleration.`,
    simpleExample: `Actual gravity varies from ~9.780 m/s² at the equator to ~9.832 m/s² at the poles. The standard value was chosen to match measurements at 45° latitude.`,
    deepMeaning: `Appears as a conversion factor between mass and force (kilogram-force). Gravimeters measure local g to 9 significant figures to detect tidal deformations and groundwater changes. The equivalence principle (General Relativity) states this is indistinguishable from acceleration in flat spacetime.`,
    whyItMatters: `Baseline for engineering, atmospheric pressure definition, and precise weighing.`
  },

  // ── PART 19: ATOMIC UNITS ──────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'a.u. of Length',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'The Bohr radius in atomic units.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `The unit of length in the atomic system. All bond lengths are expressed in Bohr.`,
    simpleExample: `Typical bond lengths: H-H = 1.40 a₀, C-C = 2.92 a₀.`,
    deepMeaning: `In atomic units, ħ = me = e = 4πε₀ = 1. This enormously simplifies quantum chemistry equations.`,
    whyItMatters: `Standard unit in computational chemistry.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'a.u. of Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atomic',
    description: 'The electron mass in atomic units.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `The unit of mass in the atomic system.`,
    simpleExample: `In quantum chemistry, all masses are expressed as multiples of me.`,
    deepMeaning: `Part of the system that sets fundamental constants to 1 to simplify the Schrödinger equation.`,
    whyItMatters: `Base mass for all electronic structure calculations.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'a.u. of Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atomic',
    description: 'Natural timescale of electronic motion in atoms.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `The time for one radian of phase evolution at the Hartree energy scale.`,
    simpleExample: `The orbital period of the electron in the ground state of hydrogen is 2π atomic time units ≈ 152 attoseconds.`,
    deepMeaning: `Attosecond physics study electron dynamics in real time on this timescale. Nobel Prize 2023 was awarded for attosecond pulse technology.`,
    whyItMatters: `Allows direct observation of electron motion within atoms.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'a.u. of Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atomic',
    description: 'The Hartree energy in atomic units.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Unit of energy in atomic physics.`,
    simpleExample: `Chemical bond energies in Hartrees: H₂ bond = 0.174 Eh.`,
    deepMeaning: `Sets the fundamental energy scale for all electronic structure calculations.`,
    whyItMatters: `Standard energy unit in computational codes like DFT.`
  },

  {
    symbol: 'e',
    name: 'a.u. of Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atomic',
    description: 'The elementary charge in atomic units.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `In atomic units, the proton has charge +1, the electron has charge −1.`,
    simpleExample: `Helium nucleus has charge +2 a.u.`,
    deepMeaning: `Simplifies electromagnetic interaction math by setting the fundamental charge to unity.`,
    whyItMatters: `Base unit for charge distributions in molecules.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'a.u. of Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atomic',
    description: 'Velocity of the electron in the ground state of hydrogen.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — the velocity of the electron in the Bohr model.`,
    simpleExample: `In gold (Z=79), the 1s electron has velocity ~0.58c, causing the relativistic contraction responsible for gold's yellow colour.`,
    deepMeaning: `For heavier atoms, velocities approaching c require relativistic corrections.`,
    whyItMatters: `Determines when relativistic effects become important in chemistry.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'a.u. of Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomic',
    description: 'Natural scale of momentum uncertainty in hydrogen.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. of velocity) = ħ/a₀.`,
    simpleExample: `By the uncertainty principle, momentum uncertainty for an electron localised within a₀ is exactly one atomic unit.`,
    deepMeaning: `Connects the length scale of atoms directly to the momentum of the orbiting electron.`,
    whyItMatters: `Governs electron diffraction and quantum chemistry scattering.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'a.u. of Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atomic',
    description: 'Electrostatic force between electron and proton at the Bohr radius.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Enormous for atomic scales (82 nN) but imperceptible to humans.`,
    simpleExample: `Basics of atomic stability: the balance of this force against quantum pressure.`,
    deepMeaning: `Sets the scale for the strength of the "glue" holding atoms together.`,
    whyItMatters: `Governs atomic bonding and material strength.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'a.u. of Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atomic',
    description: 'Extraordinarily intense field experienced by electron in hydrogen.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `The electric field at the Bohr radius (514 GV/m).`,
    simpleExample: `Atomic fields are ~100,000 times stronger than the breakdown field of air.`,
    deepMeaning: `At intensities above ~10¹⁴ W/cm², laser fields are strong enough to rip electrons off atoms, generating attosecond pulses.`,
    whyItMatters: `Baseline for strong-field laser physics and field ionisation.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'a.u. of Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atomic',
    description: 'Magnetic field strength corresponding to one atomic unit.',
    discoveredBy: 'Derived',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — vastly stronger than any laboratory magnet (~45 T).`,
    simpleExample: `Neutron star magnetic fields reach ~10⁸-10¹¹ Tesla, exceeding the atomic unit.`,
    deepMeaning: `At this scale, QED effects on photon propagation (vacuum birefringence) become significant.`,
    whyItMatters: `Critical for understanding white dwarfs and magnetars.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'a.u. of Permittivity',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atomic',
    description: 'Vacuum permittivity scaled to atomic units — 4πε₀.',
    discoveredBy: 'Derived',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `In atomic units, the Coulomb force law becomes simply F = q₁q₂/r².`,
    simpleExample: `Simplifies all electrostatic math in quantum chemistry code.`,
    deepMeaning: `One of the primary simplifications that removes the 4πε₀ factor from calculations.`,
    whyItMatters: `Standard normalization in theoretical physics.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'a.u. of Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomic',
    description: 'Second-order response of an atom\'s energy to a magnetic field.',
    discoveredBy: 'Derived',
    formula: '1 a.u.',
    whatItSays: `Measured by NMR chemical shifts and magnetic force measurements.`,
    simpleExample: `Used to compute how molecules respond to MRI-scale magnetic fields.`,
    deepMeaning: `Fundamental quantity in the study of molecular magnetic susceptibilities at the quantum level.`,
    whyItMatters: `Used in NMR spectroscopy and quantum chemistry simulations.`
  }
];