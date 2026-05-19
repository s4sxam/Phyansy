// =============================================================================
// constantsData_de.js — Physikalische Konstanten Datenbank (Deutsch)
// i18n Übersetzung: Manuell · Sprachvariante: de-DE
// Werte: CODATA 2022 | Erklärungen: Phyansy Referenzhandbuch
// Regel: Physikalische Fachbegriffe (velocity, mass, spin usw.) bleiben Englisch.
//        Personennamen (Planck, Oppenheimer, Fermi usw.) bleiben unverändert.
//        Zahlenwerte und Einheiten bleiben unverändert.
// =============================================================================

export const CONSTANTS_DE = [

  // ── TEIL 1: UNIVERSELLE / DEFINIERENDE KONSTANTEN ─────────────────────────

  {
    symbol: 'c',
    name: 'Lichtgeschwindigkeit im Vakuum',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299.792.458 m/s (exakt)',
    category: 'Universell',
    description: 'Die fundamentale Geschwindigkeitsgrenze der Kausalität.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `Licht legt in einer Sekunde durch ein perfektes Vakuum genau 299.792.458 Meter zurück. Dies ist keine gemessene Näherung – seit 1983 wird der Meter selbst durch diese Zahl definiert. Damit ist c heute eine exakte, international festgelegte ganze Zahl.`,
    simpleExample: `Licht vom Mond erreicht das Auge in etwa 1,28 Sekunden. Licht von der Sonne benötigt rund 8 Minuten und 20 Sekunden. Zum nächsten Stern, Proxima Centauri (4,24 Lichtjahre entfernt), braucht Licht 4,24 Jahre.`,
    deepMeaning: `c ist nicht einfach „die Geschwindigkeit des Lichts". Es ist die fundamentale Geschwindigkeitsgrenze der Kausalität – die maximale Rate, mit der Information, Energie oder kausaler Einfluss durch das Universum propagieren kann. Einsteins Spezielle Relativitätstheorie zeigte, dass c für jeden Beobachter identisch ist, unabhängig von seiner Bewegung. Das zerstört Newtons absoluten Zeitbegriff. Zwei Beobachter, die sich relativ zueinander bewegen, werden über Längen, Zeitintervalle und Gleichzeitigkeit uneins sein – aber sie messen immer dasselbe c. E = mc² besagt, dass mass und energy dasselbe sind, getrennt nur durch den Umrechnungsfaktor c².`,
    whyItMatters: `Ohne c gibt es keine Spezielle Relativitätstheorie, kein E = mc², keine GPS-Korrektur (GPS-Satelliten müssen sowohl die Spezielle als auch die Allgemeine Relativitätstheorie berücksichtigen), kein Verständnis von Sternen oder Teilchenphysik. c ist das Rückgrat der modernen Physik.`
  },

  {
    symbol: 'h',
    name: 'Planck-Konstante',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6,62607015 × 10⁻³⁴ J·s (exakt)',
    category: 'Universell',
    description: 'Wirkungsquantum der elektromagnetischen Strahlung – bestimmt die Energie von Photonen.',
    discoveredBy: 'Max Planck (1900) · Nobelpreis 1918',
    formula: 'E = hf',
    whatItSays: `Energie tritt in diskreten Paketen auf, die man Quanten nennt. Die Energie E eines einzelnen Quants elektromagnetischer Strahlung – eines Photons – beträgt E = hf, wobei f die Frequenz der Strahlung ist. h ist die Proportionalitätskonstante, die Frequenz (eine Welleneigenschaft) mit Energie (einer Teilcheneigenschaft) verbindet.`,
    simpleExample: `Sichtbares rotes Licht hat eine Frequenz von etwa 4,3 × 10¹⁴ Hz. Ein Photon des roten Lichts trägt die Energie: (6,626 × 10⁻³⁴) × (4,3 × 10¹⁴) ≈ 2,85 × 10⁻¹⁹ J ≈ 1,78 eV. Diese winzige Energie reicht aus, um ein einzelnes Rhodopsin-Molekül in der Netzhaut zu aktivieren – der Beginn des Sehens.`,
    deepMeaning: `Vor Planck sagte die klassische Physik voraus, ein heißer Körper sollte bei hohen Frequenzen unendlich viel Energie abstrahlen – die sogenannte „Ultraviolettkatastrophe". Im Jahr 1900 löste Max Planck dieses Problem, indem er annahm, Energie sei nicht kontinuierlich, sondern gequantelt. Einstein nutzte dies zur Erklärung des photoelektrischen Effekts. h ist auch das Wirkungsquantum – es hat die Einheit Energie × Zeit. Die reduzierte Form ħ = h/2π erscheint im Kommutator [x̂, p̂] = iħ – dem mathematischen Kern der Quantenmechanik – und im Heisenbergschen Unschärfeprinzip: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h ist die Grenze zwischen der Quantenwelt und der klassischen Welt. Wenn die relevante Wirkung eines Systems viel größer als h ist, funktioniert die klassische Mechanik. Ohne h würden Atome kollabieren, Chemie würde nicht existieren, und das Universum, wie wir es kennen, könnte nicht bestehen.`
  },

  {
    symbol: 'ħ',
    name: 'Reduzierte Planck-Konstante',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1,054571817 × 10⁻³⁴ J·s (exakt)',
    category: 'Universell',
    description: 'h/2π – die natürliche Einheit des angular momentum in der Quantenmechanik.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (sprich „h-quer") ist schlicht h dividiert durch 2π. Es erscheint immer dann, wenn die Kreisfrequenz ω (in Radiant pro Sekunde) anstelle der gewöhnlichen Frequenz f (in Schwingungen pro Sekunde) verwendet wird, da ω = 2πf gilt.`,
    simpleExample: `Der spin eines Elektrons beträgt ħ/2. Der spin eines Photons ist ħ. Orbitaler angular momentum ist immer ein ganzzahliges Vielfaches von ħ – ħ ist also das Atom der Rotation selbst.`,
    deepMeaning: `In der Quantenmechanik ist ħ nicht bloß eine bequeme Abkürzung. Es ist das fundamentale Quantum des angular momentum. In der Quantenfeldtheorie bestimmt ħ die Stärke der Quantenfluktuationen. Setzt man ħ → 0, erhält man die klassische Feldtheorie zurück. Die gesamte Struktur der Quantenmechanik – Kommutationsrelationen, Pfadintegrale, Unschärferelationen – wird durch ħ bestimmt.`,
    whyItMatters: `In natürlichen Einheiten, die Teilchenphysiker verwenden, gilt ħ = c = 1. Dies vereinfacht Gleichungen enorm und enthüllt die tiefe geometrische Struktur der Theorien.`
  },

  {
    symbol: 'e',
    name: 'Elementarladung',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1,602176634 × 10⁻¹⁹ C (exakt)',
    category: 'Elektromagnetisch',
    description: 'Die kleinste frei existierende elektrische Ladung – Ladung ist gequantelt.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobelpreis 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `Dies ist der Betrag der elektrischen Ladung, die ein einzelnes Proton (positiv) oder ein einzelnes Elektron (negativ) trägt. Alle beobachtbare elektrische Ladung in der Natur ist ein ganzzahliges Vielfaches von e. Ladung ist gequantelt.`,
    simpleExample: `Ein Strom von 1 Ampere bedeutet, dass pro Sekunde 1 Coulomb Ladung an einem Punkt vorbeifließt. Da jedes Elektron 1,602 × 10⁻¹⁹ C trägt, entspricht ein Strom von 1 A dem Durchgang von etwa 6,24 × 10¹⁸ Elektronen pro Sekunde.`,
    deepMeaning: `Die Quantelung der Ladung wurde experimentell von Robert Millikan in seinem berühmten Öltröpfchenversuch nachgewiesen. Er maß die Ladung auf einzelnen, in einem elektrischen Feld schwebenden Öltröpfchen und stellte fest, dass alle Ladungen ganzzahlige Vielfache einer Grundeinheit – e – waren. Die Feinstrukturkonstante α ≈ 1/137 ist das dimensionslose Maß der Stärke der elektromagnetischen Kraft. Quarks tragen Ladungen von e/3 und 2e/3, sind jedoch dauerhaft in Hadronen eingeschlossen und werden nie mit gebrochener Ladung frei beobachtet.`,
    whyItMatters: `e setzt den Maßstab aller atomaren und molekularen Wechselwirkungen. Chemie, Biologie, Elektronik und Materialwissenschaften hängen fundamental vom Wert von e ab. Wäre e auch nur geringfügig anders, könnte das Leben, wie wir es kennen, nicht existieren.`
  },

  {
    symbol: 'k',
    name: 'Boltzmann-Konstante',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1,380649 × 10⁻²³ J/K (exakt)',
    category: 'Thermodynamisch',
    description: 'Brücke zwischen Temperatur und kinetischer Energie – S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (auch kB geschrieben) ist die Brücke zwischen der mikroskopischen Welt einzelner Teilchen und der makroskopischen Welt der Temperatur. Es wandelt Temperatur – eine statistische Eigenschaft eines Ensembles – in Energie pro Teilchen um. Jeder Freiheitsgrad trägt im Mittel (1/2)kT an kinetischer Energie bei.`,
    simpleExample: `Bei Raumtemperatur (T = 293 K): kT ≈ 0,0253 eV. Dies ist die charakteristische thermische Energieskala bei Raumtemperatur. Chemische Bindungsenergien liegen bei einigen eV, daher ist die thermische Energie bei Raumtemperatur viel kleiner – weshalb die meisten chemischen Bindungen stabil sind.`,
    deepMeaning: `Temperatur ist keine fundamentale Größe – sie ist ein Maß der mittleren kinetischen Energie von Teilchen. S = k ln(Ω) definiert Entropie in Begriffen von Information und Wahrscheinlichkeit und verbindet Thermodynamik mit mikroskopischer Physik. Die Boltzmann-Verteilung gibt die Wahrscheinlichkeit an, dass ein System bei Temperatur T den Energiezustand E besetzt: P(E) ∝ e^(−E/kT). Dieser Exponentialfaktor – der Boltzmann-Faktor – bestimmt alles, von chemischen Reaktionsraten bis hin zur Verteilung von Molekülen in der Erdatmosphäre.`,
    whyItMatters: `k ist das Fundament der Thermodynamik und statistischen Mechanik. Ohne k können wir mikroskopische Physik nicht mit makroskopisch messbaren Größen wie Temperatur, Druck und Entropie verknüpfen. Seit 2019 ist k eine exakt definierte Konstante, durch die das Kelvin festgelegt wird.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro-Konstante',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6,02214076 × 10²³ mol⁻¹ (exakt)',
    category: 'Thermodynamisch',
    description: 'Anzahl der Entitäten in einem Mol – Brücke zwischen atomarer und menschlicher Skala.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `Ein Mol eines jeden Stoffes enthält genau 6,02214076 × 10²³ elementare Einheiten (Atome, Moleküle, Ionen usw.). Diese Zahl ist die Brücke zwischen der atomaren Skala und der menschlichen Skala.`,
    simpleExample: `12 Gramm Kohlenstoff-12 enthalten genau ein Mol Kohlenstoffatome. Das ist eine kaum vorstellbar große Zahl: Hätte man ein Mol Sandkörner, würden sie die Erdoberfläche in mehreren Kilometern Tiefe bedecken.`,
    deepMeaning: `NA verbindet die atomare Masseneinheit mit Gramm: 1 u = 1 Gramm / NA = 1,660539 × 10⁻²⁷ kg. Die molare Gaskonstante R ist mit der Boltzmann-Konstante verknüpft: R = NA × k = 8,314 J mol⁻¹ K⁻¹. Die Faraday-Konstante F = NA × e = 96.485 C/mol ist die Ladung eines Mols Elektronen. Historisch war die Messung von NA eine der zentralen Herausforderungen der Physik des 19. und frühen 20. Jahrhunderts. Jean Perrins Messungen der Brownschen Bewegung (1908) bewiesen die Existenz von Atomen.`,
    whyItMatters: `NA macht Chemie quantitativ. Es erlaubt Chemikern, Atome durch Wiegen zu zählen. Jede stöchiometrische Berechnung, jede pharmazeutische Dosierungsberechnung und jede Berechnung in der Materialwissenschaft setzt NA voraus.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Lichtausbeute',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (exakt)',
    category: 'Universell',
    description: 'Definiert die Candela – die einzige SI-Konstante, die an die menschliche Biologie geknüpft ist.',
    discoveredBy: 'Internationale Definition (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W bei 540 THz',
    whatItSays: `683 Lumen Lichtstrom (vom menschlichen Auge wahrgenommene Helligkeit) entsprechen 1 Watt abgestrahlter Leistung bei der spezifischen monochromatischen Frequenz 540 × 10¹² Hz (grünes Licht, Wellenlänge ≈ 555 nm) – der Empfindlichkeitsspitze des menschlichen Auges bei Tageslicht.`,
    simpleExample: `Eine Lichtquelle, die 1 Watt reines grünes Licht emittiert, erzeugt genau 683 Lumen sichtbare Helligkeit. Jede andere Farbe erzeugt weniger Lumen pro Watt, da das Auge für sie weniger empfindlich ist.`,
    deepMeaning: `Diese Konstante ist die einzige im SI-System, die von menschlicher Biologie abhängt – genauer von der spektralen Empfindlichkeit des photopischen (Tages-)Auges. Sie ist so definiert, um die physikalische Größe der Strahlungsleistung (Watt) mit der Wahrnehmungsgröße Helligkeit (Lumen) zu verbinden. Seit 2019 wird die Candela durch die exakte Festlegung von Kcd = 683 lm/W definiert.`,
    whyItMatters: `Grundlegend für Photometrie, Lichttechnik und die Auslegung aller optischen Systeme. Jede Lumen-Angabe auf jeder Glühbirne geht auf diese Konstante zurück.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Hyperfein-Übergangsfrequenz des Cäsiums',
    value: '9.192.631.770',
    unit: 'Hz',
    exact: '9.192.631.770 Hz (exakt)',
    category: 'Universell',
    description: 'Definiert die Sekunde – der Herzschlag aller modernen Zeitmessung.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9.192.631.770 / Δν<sub>Cs</sub>',
    whatItSays: `Der Grundzustand des Cäsium-133-Atoms besitzt zwei Hyperfeinzustände – aufgespalten durch die Wechselwirkung des magnetischen Moments des Elektrons mit dem magnetischen Moment des Kerns. Beim Übergang zwischen diesen beiden Zuständen emittiert oder absorbiert das Atom Strahlung bei genau 9.192.631.770 Hz.`,
    simpleExample: `Seit 1967 wird eine Sekunde als genau 9.192.631.770 Schwingungsperioden dieser Strahlung definiert. Cäsium-Atomuhren sind die präzisesten Zeitmeßgeräte, die je gebaut wurden: Sie verlieren weniger als eine Sekunde in 300 Millionen Jahren.`,
    deepMeaning: `Die Hyperfeinaufspaltung entsteht durch die Quantenelektrodynamik – die Wechselwirkung zwischen dem magnetischen Dipolmoment des Elektrons und dem vom Kernspin erzeugten Magnetfeld. Die Berechnung dieser Frequenz aus ersten Prinzipien ist ein tiefgreifender Test der QED. GPS, das Internet (das synchronisierte Uhren erfordert), Finanzsysteme und alle modernen Telekommunikation hängen direkt von Cäsium-Atomuhren-Standards ab.`,
    whyItMatters: `Die präziseste Messung in der gesamten Wissenschaft. Die moderne Zivilisation – GPS, Internet-Synchronisation, Finanzhandel, 5G-Netzwerke – hängt von dieser Konstante ab.`
  },

  // ── TEIL 2: ELEKTROMAGNETISCHE KONSTANTEN ────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Elektrische Feldkonstante des Vakuums',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8,8541878188 × 10⁻¹² F/m',
    category: 'Elektromagnetisch',
    description: 'Wie leicht elektrische Felder das Vakuum durchdringen.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (Epsilon-Null) misst, wie leicht ein elektrisches Feld das Vakuum durchdringt. Es erscheint im Coulombschen Gesetz – der Kraft zwischen zwei Punktladungen: F = (1/4πε₀) × (q₁q₂/r²). Je größer ε₀, desto schwächer ist die elektrostatische Kraft bei gegebenen Ladungen und gegebenem Abstand.`,
    simpleExample: `Wasser hat eine relative Permittivität εr ≈ 80, das heißt, Wasser reduziert elektrostatische Kräfte zwischen Ladungen um einen Faktor 80 gegenüber dem Vakuum – weshalb Wasser ein exzellentes Lösungsmittel für ionische Verbindungen ist.`,
    deepMeaning: `ε₀ ist nicht unabhängig definiert – es wird aus den definierten Werten von c und μ₀ abgeleitet: ε₀ = 1/(μ₀c²). Es erscheint in allen vier Maxwell-Gleichungen in ihrer Vakuumform. Im Gaußschen Gesetz: ∮ E · dA = Q_enc/ε₀. Der gesamte elektrische Fluss durch eine beliebige geschlossene Fläche ist gleich der eingeschlossenen Ladung dividiert durch ε₀. Ferner setzt es den Maßstab der in einem elektrischen Feld gespeicherten elektromagnetischen Energiedichte: u_E = (1/2)ε₀E².`,
    whyItMatters: `Erscheint in allen vier Maxwell-Gleichungen. Ohne ε₀ gibt es keine quantitative Elektrostatik, kein Kondensatordesign und kein Verständnis von Dielektrika.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Magnetische Feldkonstante des Vakuums',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1,2566370621 × 10⁻⁶ N/A²',
    category: 'Elektromagnetisch',
    description: 'Wie leicht Magnetfelder das Vakuum durchdringen.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (Mu-Null) misst, wie leicht ein Magnetfeld das Vakuum durchdringt. Es erscheint im Biot-Savart-Gesetz und im Ampèreschen Gesetz. Die Kraft pro Längeneinheit zwischen zwei parallelen, stromdurchflossenen Leitern mit Strömen I₁ und I₂ im Abstand d beträgt: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `Eisen hat eine relative Permeabilität μr bis zu ~10.000 – Eisen konzentriert Magnetfelder enorm gegenüber dem Vakuum. Deshalb werden Transformatorkerne aus Eisen gefertigt: um den magnetischen Fluss effizient zu leiten und zu verstärken.`,
    deepMeaning: `Vor der SI-Neudefinition 2019 war μ₀ per Definition genau 4π × 10⁻⁷ N/A². Jetzt ist es eine gemessene Größe mit kleiner Unsicherheit. μ₀ erscheint in Ampères Gesetz mit Maxwells Ergänzung: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). Der zweite Term – Maxwells Verschiebungsstrom – erlaubte elektromagnetischen Wellen, im Vakuum zu existieren, und führte direkt zur Vorhersage, dass Licht eine elektromagnetische Welle ist.`,
    whyItMatters: `Ohne μ₀ gibt es keine Magnetfelder, keine elektromagnetische Induktion, keine Elektromotoren, keine Transformatoren und keine Radiowellen.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Wellenwiderstand des Vakuums',
    value: '376.730',
    unit: 'Ω',
    exact: '376,730313412 Ω',
    category: 'Elektromagnetisch',
    description: 'Verhältnis von elektrischem zu magnetischem Feld in einer elektromagnetischen Welle im Vakuum.',
    discoveredBy: 'Abgeleitet aus den Maxwell-Gleichungen',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `Wenn eine elektromagnetische Welle durch das Vakuum propagiert, ist das Verhältnis der Amplitude des elektrischen Feldes zur Amplitude des magnetischen Feldes: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `Eine Antenne strahlt effizient, wenn ihre Impedanz auf 377 Ω angepasst ist. Die abgestrahlte Leistung pro Flächeneinheit (der Poynting-Vektor) beträgt S = E²/Z₀. Dies wird für die Auslegung von Dipolantennen bis hin zu Satellitenschüsseln verwendet.`,
    deepMeaning: `Z₀ ist die Impedanz des freien Raums – sie sagt, wie viel elektrisches Feld man pro Einheit magnetischem Feld in einer propagierenden elektromagnetischen Welle erhält. Es ist der „Widerstand" des Vakuums gegenüber der elektromagnetischen Wellenausbreitung, analog zum charakteristischen Leitungswellenwiderstand. Das die Erde erreichende Sonnenlicht entspricht einer elektrischen Feldamplitude von √(1361 × Z₀) ≈ 716 V/m.`,
    whyItMatters: `Unentbehrlich für Antennendesign, Radarquerschnitte, Antennengewinn und alle drahtlosen Kommunikations-Linkbudgets.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson-Konstante',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597,8484 × 10⁹ Hz/V',
    category: 'Elektromagnetisch',
    description: 'Verbindet Spannung mit Frequenz in supraleitenden Josephson-Kontakten.',
    discoveredBy: 'Brian Josephson (1962) · Nobelpreis 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Die Josephson-Konstante verbindet Spannung mit Frequenz im Wechselstrom-Josephson-Effekt. Legt man eine Gleichspannung V an einen Josephson-Kontakt (eine dünne isolierende Barriere zwischen zwei Supraleitern), erzeugt er einen Wechselstrom der Frequenz f = 2eV/h.`,
    simpleExample: `Eine Spannung von 1 Millivolt an einem Josephson-Kontakt erzeugt eine Wechselstromschwingung bei ~483,6 GHz – im Mikrowellenbereich. Dies wird zur Realisierung von Spannungsnormalen mit einer Genauigkeit von 1 Teil in 10¹⁰ verwendet.`,
    deepMeaning: `Der Faktor 2 stammt daher, dass Supraleitung Cooper-Paare – Elektronenpaare mit der Ladung 2e – betrifft. Der Josephson-Kontakt ist ein makroskopisches Quantenbauelement, bei dem die Quantenphasendifferenz zwischen zwei Supraleitern einen Suprastrom antreibt. Der Wechselstrom-Josephson-Effekt ist ein verblüffender Nachweis, dass Quantenmechanik bei makroskopischen Größenordnungen in Supraleitern operiert.`,
    whyItMatters: `Primäres Spannungsnormal weltweit. Die präziseste verfügbare elektrische Messung. Fundamental für die Quantenmetrologie und das supraleitende Quantencomputing.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von-Klitzing-Konstante',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812,80745 Ω',
    category: 'Elektromagnetisch',
    description: 'Quantum des elektrischen Widerstands – h/e² – aus dem Quanten-Hall-Effekt.',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobelpreis 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² ist das Quantum des elektrischen Widerstands. Es erscheint im Quanten-Hall-Effekt: Bringt man ein zweidimensionales Elektronengas bei tiefer Temperatur in ein starkes senkrechtes Magnetfeld, ist der Hall-Widerstand in genauen Bruchteilen von RK gequantelt: RH = RK/n.`,
    simpleExample: `Die Quantelung ist so präzise, dass RK als primäres Widerstandsnormal verwendet wird. Siliziumchips bei ~1 K in ~10 Tesla reproduzieren RK/2 = 12.906 Ω auf besser als 1 Teil pro Milliarde.`,
    deepMeaning: `Die Quantelung hat topologischen Ursprung – sie hängt nicht vom Material, der Probengeometrie oder einstellbaren Parametern ab. Sie ist bis zur Messgenauigkeit exakt. Der fraktionelle Quanten-Hall-Effekt (1982) beinhaltet eine noch exotischere Quantelung bei Bruchteilen wie 1/3, 2/5 usw. – entstehend aus stark korrelierten Elektronenzuständen, darunter der ν = 5/2-Zustand, der möglicherweise nicht-abelsche Anyonen beherbergt, die für topologisches Quantencomputing relevant sind.`,
    whyItMatters: `Primäres Widerstandsnormal weltweit. Fenster in die Topologie der Festkörperphysik. Der ganzzahlige und der fraktionelle Quanten-Hall-Effekt gehören zu den tiefgründigsten Entdeckungen der modernen Physik.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Magnetisches Flussquantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2,067833848 × 10⁻¹⁵ Wb',
    category: 'Elektromagnetisch',
    description: 'Quantum des magnetischen Flusses – h/(2e) – in supraleitenden Schleifen.',
    discoveredBy: 'London & Onsager (Theorie) · Doll & Näbauer (1961, Bestätigung)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `Der magnetische Fluss durch eine supraleitende Schleife ist in Einheiten von Φ₀ gequantelt. Eine supraleitende Ringschleife kann magnetischen Fluss nur in ganzzahligen Vielfachen von h/(2e) einschließen.`,
    simpleExample: `Ein SQUID (Superconducting Quantum Interference Device) kann Änderungen des magnetischen Flusses bis zu 10⁻⁶ Φ₀ detektieren – was einer Magnetfeldänderung von ~10⁻¹⁸ Tesla entspricht. Dies wird für die Hirnbildgebung (MEG) genutzt.`,
    deepMeaning: `Die Quantelung des magnetischen Flusses ist eine direkte makroskopische Manifestation der Quantenmechanik. Der supraleitende Ordnungsparameter (die makroskopische Quantenwellenfunktion) muss bei einer Umrundung einer Schleife einwertig sein, was den eingeschlossenen Fluss quantelt. SQUIDs nutzen Φ₀, um Magnetfelder mit außergewöhnlicher Empfindlichkeit zu messen – die empfindlichsten Magnetsensoren, die je gebaut wurden.`,
    whyItMatters: `Grundlage der SQUID-Technologie, der Magnetoenzephalographie, fundamentaler Tests der Quantenmechanik auf makroskopischen Skalen und des supraleitenden Quantencomputings.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Leitfähigkeitsquantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7,748091729 × 10⁻⁵ S',
    category: 'Elektromagnetisch',
    description: 'Fundamentale Einheit der elektrischen Leitfähigkeit – 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `Wenn Elektronen durch einen perfekten Einkanalquantenleiter fließen (z. B. einen Einzelatomkontakt oder einen Quantenpunktkontakt), ist die Leitfähigkeit genau G₀ = 2e²/h pro Kanal. Der Widerstand beträgt 1/G₀ = h/(2e²) ≈ 12.906 Ω.`,
    simpleExample: `Ein auf einen einzelnen Atomdurchmesser gedünnter Goldnanodraht hat eine Leitfähigkeit von näherungsweise G₀. Dies wurde experimentell mit großer Präzision gemessen. Ein Zwei-Atom-Draht hat eine Leitfähigkeit von ~2G₀.`,
    deepMeaning: `Klassischer Widerstand hängt von der Probengeometrie, dem Material und Verunreinigungen ab. Auf Quantenebene jedoch hat selbst ein perfekter Leiter einen Widerstand – aufgrund der quantenmechanischen Anpassung der propagierenden Moden zwischen dem Leiter und seinen Kontakten. Dies ist die Landauer-Formel: G = G₀ × Σ T, wobei T die Transmissionswahrscheinlichkeiten der einzelnen Quantenkanäle sind.`,
    whyItMatters: `Grundlage der mesoskopischen Physik und der Nanoelektronik. Bestimmt den Elektronentransport durch molekulare Kontakte, Kohlenstoffnanoröhren und Quantenpunkte.`
  },

  {
    symbol: 'F',
    name: 'Faraday-Konstante',
    value: '96.485.332',
    unit: 'C/mol',
    exact: '96485,33212 C/mol',
    category: 'Elektromagnetisch',
    description: 'Ladung eines Mols Elektronen – NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Die Faraday-Konstante ist die Ladung eines Mols elementarer Ladungsträger – eines Mols Elektronen oder eines Mols Protonen. In der Elektrochemie gibt sie an, wie viel Ladung benötigt wird, um ein Mol eines einwertigen Ions abzuscheiden oder aufzulösen.`,
    simpleExample: `Um 1 Mol Kupfer (63,5 g) aus einer CuSO₄-Lösung abzuscheiden, werden 2F = 192.970 C Ladung benötigt (Kupfer ist zweiwertig: Cu²⁺ + 2e⁻ → Cu). Deshalb erfordert eine dicke Galvanisierungsschicht hohe Ströme.`,
    deepMeaning: `Faradays Gesetze der Elektrolyse (1833–1834) besagen, dass die an einer Elektrode abgeschiedene Substanzmasse proportional zur durchgeflossenen Ladung ist, mit F als Proportionalitätskonstante (pro Mol pro Valenz): m = (M/zF) × Q. Faraday leitete diesen Zusammenhang empirisch ab, ohne Elektronen oder Atome zu kennen – eine bemerkenswerte Leistung. Die nach ihm benannte Konstante hat heute durch die Definitionen von NA und e einen exakten Wert.`,
    whyItMatters: `Grundlage der gesamten Elektrochemie. Jede Lithium-Ionen-Batterie, jeder Galvanisierungsprozess, jede Chloranlage und jede elektrolytische Metallraffination arbeitet mit dieser Konstante.`
  },

  // ── TEIL 3: ATOMARE UND NUKLEARE KONSTANTEN ──────────────────────────────

  {
    symbol: 'α',
    name: 'Feinstrukturkonstante',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'dimensionslos',
    exact: '7,2973525643 × 10⁻³ (≈ 1/137,036)',
    category: 'Atomar',
    description: 'Dimensionslose Kopplungskonstante der elektromagnetischen Kraft.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α ist die dimensionslose Kopplungskonstante der elektromagnetischen Wechselwirkung. Sie misst die Stärke der elektromagnetischen Kraft zwischen geladenen Teilchen – genauer: die Wahrscheinlichkeitsamplitude dafür, dass ein geladenes Teilchen ein Photon emittiert oder absorbiert.`,
    simpleExample: `In der Quantenelektrodynamik ist die Wahrscheinlichkeit, dass ein Elektron in einem bestimmten Prozess ein Photon emittiert, proportional zu α. Zwei-Photonen-Prozesse sind proportional zu α², und so weiter. Da α ≈ 1/137 gilt, unterdrückt jeder zusätzliche Photon-Vertex die Wahrscheinlichkeit um den Faktor ~1/137 – weshalb Feynman-Diagramme in der QED rasch konvergieren.`,
    deepMeaning: `α ist eine der geheimnisvollsten Zahlen in der Physik. Sie ist rein dimensionslos – sie hat keine Einheit und nimmt denselben Wert unabhängig vom Einheitensystem an. Sie kombiniert e (Elektromagnetismus), ε₀ (Elektrostatik), ħ (Quantenmechanik) und c (Relativität). Richard Feynman nannte α „eines der verdammten größten Rätsel der Physik". In der QED ist α nicht wirklich konstant – sie „läuft" mit der Energieskala durch Vakuumpolarisation: Bei niedrigen Energien: α ≈ 1/137. Auf der Massenskala des Z-Bosons: α ≈ 1/128.`,
    whyItMatters: `α bestimmt alle Atomphysik, Chemie und Molekularbiologie. Die Größe von Atomen, die Stärke chemischer Bindungen, die Absorptions- und Emissionsspektren aller Elemente – alles wird von α kontrolliert. Es ist wohl die wichtigste dimensionslose Zahl in der Physik.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg-Konstante',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10.973.731,568157 m⁻¹',
    category: 'Atomar',
    description: 'Bestimmt die Wellenlängen aller Wasserstoff-Spektrallinien.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Die Rydberg-Konstante liefert die Wellenzahlen (inverse Wellenlängen) der Spektrallinien des Wasserstoffs. Die Wellenlängen aller Wasserstoff-Spektrallinien ergeben sich aus der Rydberg-Formel: 1/λ = R∞ × (1/n₁² − 1/n₂²), wobei n₁ und n₂ positive ganze Zahlen mit n₂ > n₁ sind.`,
    simpleExample: `Für die Lyman-Serie (Übergänge in den Grundzustand), erste Linie (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121,6 nm (ultraviolett – Lyman-Alpha-Linie). Dies ist die wichtigste Spektrallinie in der Astrophysik – verwendet zur Detektion von Wasserstoff im gesamten Universum und zur Messung der Raumausdehnung durch Rotverschiebung.`,
    deepMeaning: `R∞ wird theoretisch aus fundamentaleren Konstanten abgeleitet: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). Diese Formel – abgeleitet aus dem Bohr-Modell und durch die Quantenmechanik verfeinert – verknüpft das Spektrum des Wasserstoffs mit der Elektronenmasse, der Elementarladung und anderen Fundamentalkonstanten. Die Übereinstimmung zwischen Theorie und Experiment ist außerordentlich. Die Rydberg-Energie (Ry) – die Bindungsenergie des Wasserstoffs – beträgt: En = −Ry/n² = −13,6 eV/n².`,
    whyItMatters: `Der Ausgangspunkt, der Bohr zum Quantenatom führte. Die präziseste gemessene Atomkonstante, bekannt auf 12 signifikante Stellen, ermöglicht Tests der QED auf dem Niveau weniger Teile pro Billion.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr-Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5,29177210544 × 10⁻¹¹ m',
    category: 'Atomar',
    description: 'Natürliche Größenskala von Atomen – wahrscheinlichster Elektron-Proton-Abstand im Wasserstoff.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ ist der wahrscheinlichste Abstand zwischen Elektron und Proton in einem Wasserstoffatom im Grundzustand (n = 1). Es setzt die charakteristische Größenskala von Atomen fest. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0,529 Å (Angström). Dies ist die typische Größe eines Wasserstoffatoms. Die meisten Atome haben Radien im Bereich weniger Vielfacher von a₀. Die C-C-Bindungslänge im Diamant beträgt ~2,9a₀. Der DNA-Helixdurchmesser ist ~40 Å ≈ 75a₀.`,
    deepMeaning: `Der Bohr-Radius entsteht aus dem Gleichgewicht zwischen der kinetischen Energie des Elektrons (quantenmechanisch, sie tendiert dazu, das Elektron auszubreiten – das Unschärfeprinzip verhindert den Kollaps in den Kern) und der Coulomb-potenzialenergie (die es zum Kern zieht). In der Quantenmechanik hat die Grundzustands-Wellenfunktion des Wasserstoffs ihr Maximum bei r = a₀. Der Bohr-Radius setzt den Maßstab aller atomaren Wellenfunktionen – höhere Orbitale haben Radien ~ n²a₀.`,
    whyItMatters: `Definiert die fundamentale Längenskala der Chemie und Materialwissenschaft. In der Festkörperphysik setzt a₀ den Maßstab chemischer Bindungen, Kristallgitterkonstanten und der Größe von Exzitonen. Die Größe des Wasserstoffatoms bestimmt letztendlich die Dichte von Materie.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree-Energie',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4,359744722 × 10⁻¹⁸ J (27,211 eV)',
    category: 'Atomar',
    description: 'Natürliche Energieeinheit der Atomphysik – doppelte Ionisierungsenergie des Wasserstoffs.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Die Hartree-Energie ist das Doppelte der Ionisierungsenergie des Wasserstoffs aus seinem Grundzustand. Sie ist die natürliche Energieeinheit der Atomphysik: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `Der Wasserstoff-Grundzustand hat die Energie −(1/2)Eh = −13,6 eV. Typische chemische Bindungsenergien liegen bei ~0,1–0,2 Eh (3–5 eV). Eine C-H-Bindung beträgt ~0,16 Eh. Diese Zahlen sind in atomaren Einheiten alle von der Größenordnung 1 – ideal für die Quantenchemie.`,
    deepMeaning: `In atomaren Einheiten (ħ = me = e = a₀ = 1) gilt Eh = 1. Atomare Einheiten vereinfachen die Gleichungen der Quantenchemie enorm. Die Schrödinger-Gleichung für Wasserstoff in atomaren Einheiten lautet einfach: −(1/2)∇²ψ − (1/r)ψ = Eψ, wobei E = −1/2 für den Grundzustand gilt, d. h. −0,5 Hartree = −13,6 eV. Quantenchemie-Programme (Dichtefunktionaltheorie, Hartree-Fock) arbeiten intern fast ausnahmslos in atomaren Einheiten.`,
    whyItMatters: `Die zentrale Einheit der Quantenchemie. Jede DFT-Rechnung, jede Molekulardynamiksimulation und jedes Quantenchemie-Ergebnis geht letztendlich auf die Hartree-Energie zurück. Sie ist die fundamentale Energieskala der Berechnungen zur elektronischen Struktur.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr-Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9,2740100657 × 10⁻²⁴ J/T',
    category: 'Atomar',
    description: 'Natürliche Einheit des magnetischen Moments des Elektrons – eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB ist die natürliche Einheit des magnetischen Moments für Elektronen. Es repräsentiert das magnetische Moment eines Elektrons aufgrund seines orbitalen angular momentum von ħ.`,
    simpleExample: `In einem 1-Tesla-MRT-Magnetfeld beträgt die Zeeman-Aufspaltung zwischen Elektronen-spin-auf und spin-ab 2μB × B ≈ 1,9 × 10⁻²³ J ≈ 0,12 meV – was Mikrowellenfrequenzen entspricht. Deshalb verwendet ESR Mikrowellen, während NMR Radiofrequenzen nutzt.`,
    deepMeaning: `Das magnetische spin-Moment des Elektrons beträgt näherungsweise μB (genau genommen ist es ge × μB/2, wobei ge ≈ 2,002 aufgrund quantenelektrodynamischer Korrekturen gilt). Der Zeeman-Effekt – die Aufspaltung atomarer Spektrallinien in einem Magnetfeld – wird durch μB bestimmt: ΔE = ml × μB × B, wobei ml die magnetische Quantenzahl ist. μB bestimmt die Elektronenspinresonanz (ESR). Die Übereinstimmung mit dem Experiment auf 12 Dezimalstellen macht die anomale Komponente zur am präzisesten berechneten Größe in der Wissenschaft.`,
    whyItMatters: `Grundlage der Elektronenspinresonanz, magnetischer Materialien und aller magnetooptischer Effekte. Zentral für Spintronik und Quantencomputing mit spin-Qubits.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Kernmagneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5,0507837461 × 10⁻²⁷ J/T',
    category: 'Atomar',
    description: 'Natürliche Einheit des nuklearen magnetischen Moments – 1836-mal kleiner als das Bohr-Magneton.',
    discoveredBy: 'Otto Stern (1933) · Nobelpreis 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN ist die natürliche Einheit des magnetischen Moments für Nukleonen (Protonen und Neutronen). Es ist 1836-mal kleiner als μB, weil das Proton 1836-mal schwerer als das Elektron ist.`,
    simpleExample: `Das Proton hat ein magnetisches Moment von 2,793 μN. In einem 3-Tesla-MRT-Scanner beträgt die Energielücke zwischen Proton-spin-Zuständen 2 × 2,793 × μN × 3T ≈ 8,4 × 10⁻²⁶ J, was einer Radiofrequenz von ~127 MHz entspricht. Genau diese Frequenz verwendet ein MRT-Scanner.`,
    deepMeaning: `Obwohl es keine elektrische Ladung trägt, hat das Neutron ein magnetisches Moment von −1,913 μN. Dieses nicht verschwindende magnetische Moment eines neutralen Teilchens war historisch ein erster Hinweis, dass das Neutron kein fundamentales Teilchen, sondern intern strukturiert ist (Quarks). Das magnetische Moment des Protons von 2,793 μN – nicht einfach 1 μN, wie es ein Dirac-Punktteilchen vorhersagen würde – war Sterns nobelpreisgekrönte Entdeckung von 1933. NMR (und MRT) basiert auf Proton-spin-Übergängen.`,
    whyItMatters: `Grundlage der NMR-Spektroskopie und MRT – den wirksamsten Werkzeugen der Strukturchemie und medizinischen Bildgebung. Hat historisch die interne Quarkstruktur des Nukleons bewiesen.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Elektronenmasse',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9,1093837139 × 10⁻³¹ kg (0,511 MeV/c²)',
    category: 'Teilchen',
    description: 'Ruhemasse des Elektrons – das leichteste massive fundamentale Teilchen.',
    discoveredBy: 'J.J. Thomson (1897) · Nobelpreis 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0,511 MeV',
    whatItSays: `Dies ist die Ruhemasse des Elektrons – des leichtesten massiven Fundamentalteilchens. In Energieeinheiten via E = mc²: mec² = 0,510 998 950 MeV. Das Elektron ist 1836,15-mal leichter als das Proton.`,
    simpleExample: `Paarbildung (γ → e⁺ + e⁻) erfordert ein Photon von mindestens 2mec² = 1,022 MeV. Unterhalb dieser Energie können Photonen keine Elektron-Positron-Paare erzeugen – unabhängig von ihrer Anzahl. Diese Schwelle bestimmt die Gamma-Strahlungsabsorption in Materie.`,
    deepMeaning: `Die Elektronenmasse ist ein freier Parameter des Standardmodells – sie wird nicht theoretisch vorhergesagt, sondern muss gemessen werden. Sie wird durch den Higgs-Mechanismus erzeugt: Das Elektron wechselwirkt mit dem Higgs-Feld, und die Stärke dieser Wechselwirkung (die Yukawa-Kopplung, ye ≈ 2,94 × 10⁻⁶) bestimmt die mass. Die Geringfügigkeit der Yukawa-Kopplung des Elektrons im Vergleich zum Top-Quark (yt ≈ 1) ist eines der ungelösten „Hierarchie"-Rätsel der Teilchenphysik. Das Elektron scheint ein wirklich elementares Punktteilchen zu sein.`,
    whyItMatters: `Bestimmt das gesamte atomare und chemische Verhalten. Legt die Größe von Atomen via a₀ = ħ²/(mee²k) fest, die Bindungsenergien von Elektronen, die Energie von Röntgenstrahlen und die Eindringtiefe von Betastrahlung.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Elektronen-g-Faktor',
    value: '−2.002319304',
    unit: 'dimensionslos',
    exact: '−2,00231930436256',
    category: 'Teilchen',
    description: 'Die am präzisesten verifizierte Vorhersage in der gesamten Wissenschaft.',
    discoveredBy: 'Kusch & Foley (1948) · QED-Rechnung: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `Der g-Faktor ist das Verhältnis des tatsächlichen magnetischen Moments des Elektrons zu dem, das es hätte, wäre es ein einfaches Dirac-Teilchen (g = 2 exakt). Das anomale magnetische Moment beträgt ae = (ge − 2)/2 = 0,001 159 65.`,
    simpleExample: `Die theoretische Vorhersage von ae aus der QED erfordert die Summation von Feynman-Diagrammen mit bis zu 10 Schleifen (einschließlich 12.672 Diagrammen vierter Ordnung allein). Das Ergebnis stimmt mit dem Experiment auf 12 Dezimalstellen überein – 1 Teil pro Billion.`,
    deepMeaning: `Das anomale magnetische Moment des Elektrons ist die am präzisesten getestete Vorhersage in der gesamten Wissenschaft. Die Quantenelektrodynamik (QED) berechnet die Abweichung von g = 2 als Potenzreihe in der Feinstrukturkonstante α: ae = (α/2π) − 0,328(α/π)² + 1,181(α/π)³ − ... Jede Abweichung von der QED-Vorhersage würde auf neue Physik jenseits des Standardmodells hinweisen. Der Erfolg dieser Berechnung ist der größte Triumph der theoretischen Physik.`,
    whyItMatters: `Der größte Triumph der theoretischen Physik. Testet die QED strenger als jede andere Messung. Liefert die präziseste Bestimmung der Feinstrukturkonstante α.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Protonenmasse',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,67262192595 × 10⁻²⁷ kg (938,272 MeV/c²)',
    category: 'Teilchen',
    description: 'Ruhemasse des Protons – 1836-mal schwerer als das Elektron.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836,15',
    whatItSays: `In Energieeinheiten: mpc² = 938,272 MeV. Das Proton ist 1836,15-mal schwerer als das Elektron. Dieses Massenverhältnis ist eine der folgenreichsten Zahlen der Atomphysik.`,
    simpleExample: `Die große mass des Protons bedeutet, dass seine de-Broglie-Wellenlänge bei thermischen Energien ~43-mal kleiner als die eines Elektrons ist – Protonen sind also weit weniger quantenwellenartig. Deshalb funktioniert die Born-Oppenheimer-Näherung: Kerne verhalten sich als klassische Teilchen.`,
    deepMeaning: `Im Gegensatz zum Elektron ist das Proton nicht fundamental – es ist ein zusammengesetztes Teilchen aus zwei Up-Quarks und einem Down-Quark, gebunden durch die starke Kraft, vermittelt durch Gluonen. Bemerkenswerterweise machen die Massen der Quarks nur ~1 % der Protonenmasse aus. Die verbleibenden 99 % entstammen der kinetischen Energie der Quarks und der im Gluonenfeld gespeicherten Energie – eine tiefgreifende Manifestation von E = mc². mass ist größtenteils Energie. Das Proton hat einen endlichen Ladungsradius von 0,8409 fm.`,
    whyItMatters: `Protonen definieren Ordnungszahlen und fast alle atomare mass. Fast die gesamte mass Ihres Körpers ist tatsächlich die Energie des quantenchromodynamischen (QCD) Feldes innerhalb von Protonen und Neutronen. Wäre sie wesentlich anders, wäre das Leben grundlegend verändert.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Protonen-g-Faktor',
    value: '5.586',
    unit: 'dimensionslos',
    exact: '5,5856946893',
    category: 'Teilchen',
    description: 'Großes anomales magnetisches Moment – Beweis für die zusammengesetzte Struktur des Protons.',
    discoveredBy: 'Otto Stern (1933) · Nobelpreis 1943',
    formula: 'g<sub>p</sub> ≈ 5,586',
    whatItSays: `Für ein einfaches Dirac-Proton sollte gp gleich 2 sein. Stattdessen gilt gp ≈ 5,586 – fast dreimal größer. Dieses enorme anomale magnetische Moment war eine der ersten experimentellen Entdeckungen, die auf die zusammengesetzte Struktur des Protons hinwiesen.`,
    simpleExample: `Wäre das Proton ein einfaches, strukturloses Punktteilchen, würde es sich wie ein Magnet der Stärke 2 verhalten. Die Tatsache, dass es 5,586 ist, ist ein direkter numerischer Beweis dafür, dass sich im Inneren bewegende Ladungen (Quarks) existieren.`,
    deepMeaning: `Otto Stern maß gp ≈ 5,6 im Jahr 1933, zu einer Zeit, als das Proton für ein fundamentales Dirac-Teilchen gehalten wurde. Dieses Ergebnis schockierte die Physikgemeinschaft. Das große anomale magnetische Moment – und das von null verschiedene magnetische Moment des Neutrons – waren Schlüsselbelege für das Quarkmodell. Diese Werte können heute teilweise durch QCD-Rechnungen verstanden werden, obwohl eine vollständig präzise Berechnung aus den ersten Prinzipien der QCD eine große Herausforderung bleibt.`,
    whyItMatters: `Historisch wesentliche Entdeckung, die zum Quarkmodell führte. Zentral für die Berechnung magnetischer Resonanzen in Atomkernen (NMR/MRT). Strenger Test der Hadronstrukturtheorie.`
  },

  // ── TEIL 6: NEUTRONENKONSTANTEN ───────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutronenmasse',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,67492750056 × 10⁻²⁷ kg (939,565 MeV/c²)',
    category: 'Nuklear',
    description: 'Geringfügig schwerer als das Proton – der Massenunterschied ermöglicht den Betazerfall.',
    discoveredBy: 'James Chadwick (1932) · Nobelpreis 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Das Neutron ist geringfügig schwerer als das Proton – um 1,293 MeV/c². In Energieeinheiten: mnc² = 939,565 MeV. Dieser kleine, aber entscheidende Massenunterschied bedeutet, dass ein freies Neutron instabil ist – es zerfällt durch Betazerfall.`,
    simpleExample: `Ein freies Neutron zerfällt in ~10 Minuten (Halbwertszeit 613,9 s). Die freigesetzte Energie ist der Massenunterschied von 1,293 MeV. In Kernen werden Neutronen durch die Kernbindungsenergie stabilisiert und zerfallen nicht.`,
    deepMeaning: `Wäre das Neutron leichter als das Proton um mehr als die Elektronenmasse, würden freie Protonen in Neutronen und Positronen zerfallen – Wasserstoffatome wären instabil, was die gesamte Chemie grundlegend verändern würde. Der Massenunterschied bestimmte das Neutronen-zu-Protonen-Verhältnis (n/p ≈ 1/7), das während der primordialen Nukleosynthese eingefroren wurde und die kosmischen Häufigkeiten von Wasserstoff (75 %) und Helium (25 %) festlegte.`,
    whyItMatters: `Bestimmt die Kernstabilität, den Betazerfall und die kosmische Häufigkeit der Elemente. Der Neutronenmassen-Unterschied ist kosmologisch wesentlich für die Existenz von Wasserstoff und damit von Leben.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Magnetisches Moment des Neutrons',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9,6623653 × 10⁻²⁷ J/T',
    category: 'Nuklear',
    description: 'Negatives magnetisches Moment trotz Nullladung – Beweis für interne Quarks.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1,913 μ<sub>N</sub>',
    whatItSays: `Das Neutron hat ein negatives magnetisches Moment (−1,913 Kernmagnetonen) trotz absolut verschwindender Nettoladung.`,
    simpleExample: `Ein strukturloses neutrales Teilchen sollte kein magnetisches Moment haben. Die Tatsache, dass das Neutron auf Magnetfelder reagiert, ist der rauchende Beweis dafür, dass es geladene Subteilchen enthält, deren Effekte sich nicht vollständig aufheben.`,
    deepMeaning: `Ein magnetisches Moment erfordert entweder Ladung oder eine Spinverteilung. Das negative magnetische Moment des Neutrons entsteht aus seiner inneren Quarkstruktur: Die beiden Down-Quarks (Ladung −e/3 je) und ein Up-Quark (Ladung +2e/3) befinden sich in ständiger Quantenbewegung. Die räumliche Verteilung der rotierenden geladenen Quarks erzeugt ein netto-negatives magnetisches Moment. Die Erklärung liegt in der Quark-Substruktur: Das Neutron enthält ein Up-Quark und zwei Down-Quarks.`,
    whyItMatters: `Eines der schockierendsten Ergebnisse der Kernphysik. Aktuelle Grenzen für das elektrische Dipolmoment des Neutrons werden verwendet, um die CP-Symmetrie zu testen und die Materie-Antimaterie-Asymmetrie des Universums zu erklären.`
  },

  // ── TEIL 7: MYON- UND TAU-KONSTANTEN ─────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Myonenmasse',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1,883531627 × 10⁻²⁸ kg (105,658 MeV/c²)',
    category: 'Teilchen',
    description: 'Die schwerere Kopie des Elektrons – „Wer hat das bestellt?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206,768 × m<sub>e</sub>',
    whatItSays: `Das Myon ist 206,768-mal schwerer als das Elektron. Es trägt dieselbe Ladung und wechselwirkt in allen nicht-gravitativen Aspekten identisch – als hätte die Natur eine zweite, schwerere Kopie des Elektrons angefertigt.`,
    simpleExample: `Kosmische Myonen, die in 15 km Höhe erzeugt werden, bewegen sich mit ~0,99c. Klassisch sollten sie vor Erreichen des Bodens zerfallen (Lebensdauer 2,2 μs → nur 650 m Weg). Dennoch treffen sie in großer Zahl ein, da die relativistische Zeitdilatation (γ ≈ 7) ihre Lebensdauer auf ~15 μs verlängert.`,
    deepMeaning: `Das Myon passt in kein einfaches theoretisches Bild. Seine Existenz ist schlicht eine Tatsache der Natur. Es zerfällt: μ⁻ → e⁻ + ν̄e + νμ. Myonische Atome (μ⁻ ersetzt e⁻) orbiten ~207-mal näher am Kern und sind damit außerordentlich empfindlich für die Kernstruktur. Das anomale magnetische Moment des Myons (g-2) zeigt derzeit eine ~4σ-Abweichung von der Theorie.`,
    whyItMatters: `Das anomale magnetische Moment des Myons ist der führende experimentelle Hinweis auf Physik jenseits des Standardmodells. Myonen werden verwendet, um Vulkankerne zu durchleuchten und geschmuggelte Nuklearmaterialien aufzuspüren.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Anomales magnetisches Moment des Myons',
    value: '0.0011659',
    unit: 'dimensionslos',
    exact: '0,00116592059',
    category: 'Teilchen',
    description: 'Der führende experimentelle Hinweis auf Physik jenseits des Standardmodells.',
    discoveredBy: 'Fermilab Muon g-2 Experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Wie das Elektron hat das Myon ein anomales magnetisches Moment. ae = (ge − 2)/2 = 0,001 165 920 59. Es misst die Abweichung von der Dirac-Vorhersage g = 2.`,
    simpleExample: `Anders als beim Elektron ist das Myon empfindlich für virtuelle Beiträge schwererer Teilchen, da Quantenkorrekturen skalieren als (mμ/M)², wobei M die mass des virtuellen Teilchens ist.`,
    deepMeaning: `Es besteht eine Diskrepanz von etwa 4,2 Standardabweichungen zwischen Theorie und Experiment – verlockend nahe an der 5-Sigma-Schwelle für eine definitive Entdeckung. Eine Bestätigung würde den ersten klaren Nachweis von Physik jenseits des Standardmodells bedeuten – möglicherweise supersymmetrische Teilchen oder extra Dimensionen. Die Lösung hängt von Gitter-QCD-Berechnungen ab.`,
    whyItMatters: `Eines der heißesten Themen der Teilchenphysik. Eine Bestätigung würde eine fundamentale Neuschreibung unseres Verständnisses der subatomaren Welt erfordern.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau-Lepton-Masse',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3,16754 × 10⁻²⁷ kg (1776,86 MeV/c²)',
    category: 'Teilchen',
    description: 'Das schwerste geladene Lepton – 3477-mal schwerer als das Elektron.',
    discoveredBy: 'Martin Perl et al. (1975) · Nobelpreis 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776,86 MeV',
    whatItSays: `Das Tau-Lepton ist das dritte und schwerste geladene Lepton – 3477-mal schwerer als das Elektron und 16,8-mal schwerer als das Myon.`,
    simpleExample: `Das Tau ist so schwer (1,78 GeV), dass es – anders als das Myon – in Hadronen (Pionen und Kaonen) zerfallen kann. Seine extrem kurze Lebensdauer (~2,9 × 10⁻¹³ s) bedeutet, dass es nur ~87 μm zurücklegt, bevor es zerfällt, was eine Präzision im Mikrometerbereich für die Beobachtung erfordert.`,
    deepMeaning: `Das Tau ist das Lepton der dritten Generation. Warum es genau drei Generationen von Leptonen gibt und warum sie so wildunterschiede in der mass aufweisen, ist eines der tiefsten Rätsel des Standardmodells. Die Massenhierarchie (0,511 MeV → 105,7 MeV → 1776,9 MeV) hat keine theoretische Erklärung. Das Tau-Neutrino wurde erst im Jahr 2000 direkt nachgewiesen.`,
    whyItMatters: `Die Existenz dreier Leptonengenerationen ist ein tiefes Rätsel der Natur. Das Tau und sein Neutrino waren entscheidend dafür, das Standardmodell als konsistente Theorie zu etablieren.`
  },

  // ── TEIL 8: PHYSIKALISCH-CHEMISCHE KONSTANTEN ─────────────────────────────

  {
    symbol: 'R',
    name: 'Molare Gaskonstante',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8,314462618 J/(mol·K)',
    category: 'Thermodynamisch',
    description: 'R = NA × k – das Arbeitspferd der Thermodynamik und Chemie.',
    discoveredBy: 'Verschiedene (19. Jahrhundert)',
    formula: 'PV = nRT',
    whatItSays: `R ist die Boltzmann-Konstante auf die molare Ebene skaliert. Das ideale Gasgesetz PV = nRT fasst das Boyle-Gesetz, das Charles-Gesetz und das Avogadro-Gesetz in einer einzigen Gleichung zusammen.`,
    simpleExample: `Die Schallgeschwindigkeit in einem Gas: v = √(γRT/M). Für Luft (M = 0,029 kg/mol, γ = 1,4) bei 20 °C ergibt sich v ≈ 343 m/s. Dies zeigt, dass die Schallgeschwindigkeit fundamental durch R und die Temperatur bestimmt wird.`,
    deepMeaning: `Molare Wärmekapazitäten idealer Gase sind einfache Vielfache von R: Cv = (3/2)R für einatomige, (5/2)R für zweiatomige Gase. In der statistischen Mechanik enthält die Entropie eines idealen Gases (Sackur-Tetrode-Gleichung) R. Es erscheint in der Mischungsentropie, der Clausius-Clapeyron-Gleichung, der van't-Hoff-Gleichung für den osmotischen Druck und der Nernst-Gleichung für Elektrodenpotenziale.`,
    whyItMatters: `Die universelle Konstante der Thermodynamik. Jedes Gasgesetz, jede thermodynamische Berechnung, jedes Atmosphärenmodell und jede energetische Berechnung chemischer Reaktionen verwendet R.`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann-Konstante',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5,670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamisch',
    description: 'Von einem schwarzen Körper abgestrahlte Leistung – P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `Ein idealer schwarzer Körper strahlt elektromagnetische Leistung pro Flächeneinheit P/A = σT⁴ ab. σ wird aus fundamentaleren Konstanten abgeleitet: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `Die Oberflächentemperatur der Sonne von ~5778 K ergibt eine Leistungsabgabe von σ × T⁴ × (4πR_Sonne²) ≈ 3,83 × 10²⁶ W. Ihr Körper (T ≈ 310 K) strahlt σ × (310)⁴ × (1,7 m²) ≈ 520 W ab – etwa die Hälfte davon wird durch Stoffwechselwärme ersetzt.`,
    deepMeaning: `Die T⁴-Abhängigkeit entsteht durch Integration des Planck'schen Schwarzkörperspektrums über alle Frequenzen. Sie bedeutet, dass eine Verdoppelung der Temperatur die abgestrahlte Leistung um den Faktor 2⁴ = 16 erhöht. Der kosmische Mikrowellenhintergrund (CMB) – Reststrahlung des Urknalls – ist ein idealer schwarzer Körper bei T = 2,725 K. Die effektive Temperatur der Erde wird durch den Ausgleich zwischen Sonnenstrahlung und σT⁴-Emission bestimmt.`,
    whyItMatters: `Bestimmt Sternenleuchtkraft, Erdenergiebilanz und Klima, Wärmebildkameras, optische Pyrometrie und die Temperaturstruktur des Universums.`
  },

  {
    symbol: 'b',
    name: 'Wiensches Verschiebungsgesetz-Konstante',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2,897771955 × 10⁻³ m·K',
    category: 'Thermodynamisch',
    description: 'Verbindet die Peakwellenlänge der Schwarzkörperstrahlung mit der Temperatur.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Das Wiensche Verschiebungsgesetz verknüpft die Peakwellenlänge der Schwarzkörperstrahlung mit der Temperatur: λ_max × T = b. Je heißer ein Objekt, desto kürzer (blauer) ist seine Peakwellenlänge.`,
    simpleExample: `Die Sonne (T = 5778 K) hat ihr Maximum bei λ_max ≈ 502 nm – grünes Licht. Das menschliche Auge hat sich genau in diesem Bereich mit der höchsten Empfindlichkeit entwickelt. Der menschliche Körper (T = 310 K) emittiert vorwiegend bei λ_max ≈ 9,4 μm – mittleres Infrarot, weshalb Wärmebildkameras funktionieren.`,
    deepMeaning: `Die Peakfrequenz-Version verwendet f_max = b' × T mit b' = 5,879 × 10¹⁰ Hz/K. Zu beachten: Die Peakfrequenz entspricht nicht einfach c/λ_max, da Wellenlängen- und Frequenzverteilungen unterschiedliche Formen haben. Historisch wurde das Verhältnis der Strahlungskonstanten genutzt, um h und k unabhängig voneinander zu messen.`,
    whyItMatters: `Fundamental für Wärmebildgebung, Messung von Sterntemperaturen, Klimaforschung und die Physik der Schwarzkörperstrahlung.`
  },

  // ── TEIL 9: GRAVITATIONS- UND ELEKTROSCHWACHE KONSTANTEN ──────────────────

  {
    symbol: 'G',
    name: 'Gravitationskonstante',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6,67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universell',
    description: 'Die schwächste Kraft – am ungenauesten bekannte Fundamentalkonstante.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newtons Gesetz: F = Gm₁m₂/r². In der Allgemeinen Relativitätstheorie erscheint G in den Einsteinschen Feldgleichungen, die bestimmen, wie Materie die Raumzeit krümmt.`,
    simpleExample: `Die Gravitationskraft zwischen zwei 1-kg-Massen im Abstand von 1 Meter: F = 6,674 × 10⁻¹¹ N – ungefähr das Gewicht eines einzelnen Bakteriums. Die elektromagnetische Kraft zwischen zwei Protonen ist 10³⁶-mal stärker. Deshalb ist die Gravitation auf atomaren Skalen irrelevant.`,
    deepMeaning: `G ist die am ungenauesten bekannte Fundamentalkonstante – sie ist nur auf 5 signifikante Stellen bekannt. Dies liegt daran, dass die Gravitation die schwächste Kraft ist: ihre Labormessung erfordert den Kampf gegen seismisches Rauschen und Restkräfte. Der Faktor 8πG/c⁴ quantifiziert die Raumzeitkrümmung pro Energieeinheit. Die Planck-Länge lP = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m ist die Skala, auf der Quantengravitation erwartet wird – 10²⁰-mal kleiner als ein Proton.`,
    whyItMatters: `Bestimmt alle Gravitationsphänomene – vom geworfenen Ball über schwarze Löcher bis zur Großraumstruktur des Universums. Das Fehlen einer Quantentheorie der Gravitation ist das tiefste ungelöste Problem der Physik.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi-Kopplungskonstante',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1,1663787 × 10⁻⁵ GeV⁻²',
    category: 'Teilchen',
    description: 'Kopplungsstärke der schwachen Kernkraft – bestimmt den Betazerfall.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF ist die Kopplungskonstante der schwachen Kernkraft in Fermis Vier-Fermionen-Effektivtheorie des Betazerfalls: n → p + e⁻ + ν̄e. Der Wirkungsquerschnitt der schwachen Wechselwirkung ist proportional zu GF².`,
    simpleExample: `Die schwache Wechselwirkung ist so schwach, dass ein Neutrino mit nur 50-prozentiger Wahrscheinlichkeit durch ein Lichtjahr Blei gestoppt wird. Dennoch ist sie für die Energie der Sonne unentbehrlich – die pp-Kette beginnt mit einer schwachen Wechselwirkung.`,
    deepMeaning: `Im Gegensatz zu e² hat GF die Dimension Energie⁻², was Fermis Theorie nicht-renormierbar macht. Die Auflösung war die elektroschwache Vereinigung (Nobelpreis 1979): Die schwache Kraft wird durch massive W- und Z-Bosonen (~80–91 GeV) vermittelt. Bei niedrigen Energien erscheint der Austausch eines W-Bosons wie eine Punktwechselwirkung. Die große W-Masse unterdrückt schwache Wechselwirkungen und verlangsamt den Betazerfall, obwohl die zugrunde liegende Kopplung mit dem Elektromagnetismus vergleichbar ist.`,
    whyItMatters: `Bestimmt jeden Betazerfall, Neutrinowechselwirkungen und die elektroschwache Vereinigung. Die schwache Kraft treibt die pp-Kette der Sonne an und ist für die nukleare Synthese schwerer Elemente in Sternen verantwortlich.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Schwacher Mischungswinkel',
    value: '0.2229',
    unit: 'dimensionslos',
    exact: '0,22290',
    category: 'Teilchen',
    description: 'Quantifiziert die Mischung zwischen elektromagnetischer und schwacher Kraft.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Der schwache Mischungswinkel θW (Weinberg-Winkel) parametrisiert die Mischung zwischen Photon und Z-Boson in der elektroschwachen Vereinigung. Es gilt: e = g sin θW = g' cos θW.`,
    simpleExample: `Der Wert sin²θW ≈ 0,231 wird am LHC und in Experimenten zur atomaren Paritätsverletzung mit außerordentlicher Präzision gemessen.`,
    deepMeaning: `In der elektroschwachen Vereinigung sind Photon und Z-Boson Mischungen zweier fundamentaler Eichbosonen (W⁰ und B). Das Laufen von sin²θW mit der Energie wird vom Standardmodell präzise vorhergesagt und gemessen, um elektroschwache Strahlungskorrekturen zu bestätigen – ein strenger Test der Theorie.`,
    whyItMatters: `Ein fundamentaler Parameter des Standardmodells, der die Eigenschaften der elektromagnetischen und der schwachen Kernkraft verknüpft.`
  },

  // ── TEIL 11: WEITERE ATOMARE UND NUKLEARE KONSTANTEN ──────────────────────

  {
    symbol: 'κ',
    name: 'Zirkulationsquantum',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3,6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomar',
    description: 'Fundamentale Zirkulationseinheit für ein Elektron – h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `Die Zirkulation einer Quantenflüssigkeit (wie superfluides Helium oder ein Supraleiter) ist in Einheiten von h/m gequantelt. Bei Supraleitern ist das relevante Teilchen ein Cooper-Paar der mass 2me.`,
    simpleExample: `In superfluiden Helium-4 tragen Wirbel Zirkulation in Vielfachen von h/m_He. Rotierendes superfluides Helium bildet ein Gitter solcher gequantelten Wirbel – analog zum Abrikosov-Wirbelgitter in Typ-II-Supraleitern.`,
    deepMeaning: `Die Quantelung der Zirkulation ist eine direkte Konsequenz der Einwertigkeit der quantenmechanischen Wellenfunktion. Wenn eine Superflüssigkeit rotiert, muss die Phase der makroskopischen Wellenfunktion nach einem geschlossenen Umlauf denselben Wert annehmen. Dies erzwingt eine Quantelung der Zirkulation: Γ = n × h/m.`,
    whyItMatters: `Erklärt das Verhalten von Superflüssigkeiten und Supraleitern. Das Zirkulationsquantum erscheint auch im Aharonov-Bohm-Effekt und verbindet die Quantenphase mit dem magnetischen Fluss.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson-Streuquerschnitt',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6,6524587051 × 10⁻²⁹ m²',
    category: 'Atomar',
    description: 'Effektive Fläche, die ein freies Elektron einem eintreffenden Photon bietet.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `Wenn Photonen niedriger Energie (Photonenenergie ≪ mec²) an einem freien Elektron streuen, beträgt der gesamte Streuquerschnitt σT = (8π/3) × re², wobei re der klassische Elektronenradius ist.`,
    simpleExample: `Man stelle sich vor, das Elektron präsentiere einem eintreffenden Photon eine „Zielfläche" von σT. Schießt man Photonen auf einen Kasten mit Elektronen, beträgt die mittlere freie Weglänge vor der Streuung λ = 1/(nσT).`,
    deepMeaning: `Der Thomson-Streuquerschnitt ist der Grenzfall elastischer Streuung der allgemeineren Compton-Streuformel. Wenn die Photonenenergie Eγ ≪ 0,511 MeV ist, ist der Rückstoß des Elektrons vernachlässigbar und die Streuung rein klassisch. In Sterneninneren wird der Strahlungsdruck durch Photon-Elektron-Thomson-Streuung übertragen. Die Eddington-Leuchtkraft – die maximale Leuchtkraft, die ein Stern haben kann, bevor Strahlungsdruck die Schwerkraft überwindet – hängt von σT ab.`,
    whyItMatters: `Thomson-Streuung erklärt, warum der Himmel blau ist (bei niedrigen Frequenzen) und warum die Sonnenkorona bei Sonnenfinsternissen sichtbar ist. Der kosmische Mikrowellenhintergrund (CMB) entstand, als das Universum genug abkühlte, damit Elektronen mit Protonen rekombinieren konnten, da das Universum zuvor wegen der Thomson-Streuung undurchsichtig war.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Ladungs-zu-Masse-Verhältnis des Elektrons',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1,75882000838 × 10¹¹ C/kg',
    category: 'Atomar',
    description: 'Bestimmt, wie stark ein Elektron auf elektromagnetische Kräfte reagiert.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `Dies ist das Verhältnis der Ladung des Elektrons zu seiner mass. Es bestimmt, wie stark ein Elektron auf elektromagnetische Kräfte reagiert.`,
    simpleExample: `In einer Kathodenstrahlröhre (CRT) wird die Ablenkung des Elektronenstrahls durch elektrische und magnetische Felder durch e/me bestimmt. Der große Wert von e/me bedeutet, dass Elektronen weitaus leichter abgelenkt werden als Ionen.`,
    deepMeaning: `Thomsons berühmtes Kathodenstrahlexperiment bewies, dass Kathodenstrahlen Ströme negativ geladener Teilchen mit einem Verhältnis von ~1800-mal größer als bei Wasserstoffionen sind. Die Zyklotronfrequenz ωc = eB/me ist direkt proportional zu e/me. Dieses Verhältnis erscheint auch in der Plasmafrequenz ωp² = ne²/(meε₀), die bestimmt, wie Radiowellen an der Ionosphäre reflektiert werden.`,
    whyItMatters: `Fundamental für Massenspektrometrie, Teilchenbeschleuniger und Vakuumelektronik. Bestimmt die Elektronen-Zyklotron-Resonanzheizung in Fusionsplasmen.`
  },

  {
    symbol: 'M(e)',
    name: 'Molare Masse des Elektrons',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5,4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomar',
    description: 'Masse eines Mols Elektronen – me × NA.',
    discoveredBy: 'Abgeleitet',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `Die Masse eines Mols Elektronen ist außerordentlich klein – etwa 0,55 Milligramm pro Mol.`,
    simpleExample: `In der Elektrochemie ist bei Berechnungen von Massenänderungen an Elektroden während der Elektrolyse die molare Masse des Elektrons im Vergleich zu den Ionenmassen vernachlässigbar.`,
    deepMeaning: `Bei hochpräzisen Atommassenmessungen müssen die Bindungsenergien und die Masse der Elektronenhülle berücksichtigt werden. Die Atommasse eines Atoms berechnet sich als: M(Atom) = M(Kern) + Z × M(e) − (Elektronenbindungsenergie)/c². Die Penning-Fallen-Massenspektrometrie erfordert diese Korrektur, um 10 signifikante Stellen zu erreichen.`,
    whyItMatters: `Unentbehrlich für die präzisesten Massenvergleiche in der Physik und für die Überprüfung der Konsistenz der SI-Einheitendefinitionen.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Elektron-Proton-Massenverhältnis',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'dimensionslos',
    exact: '5,44617021487 × 10⁻⁴',
    category: 'Atomar',
    description: 'Das Elektron ist 1836,15-mal leichter als das Proton.',
    discoveredBy: 'Abgeleitet',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Die mass eines Elektrons im Vergleich zu einem Proton. Dieses Verhältnis beträgt näherungsweise 1/1836.`,
    simpleExample: `Da me/mp ≪ 1 gilt, bewegen sich Elektronen in Molekülen viel schneller als Kerne. Dies erlaubt uns, die elektronische Schrödinger-Gleichung bei festen Kernpositionen zu lösen – die Born-Oppenheimer-Näherung.`,
    deepMeaning: `Dieses Verhältnis trennt chemische Energieskalen (~eV) von nuklearen Energieskalen (~MeV). Das Verhältnis ist auch in der Stellarphysik entscheidend: Die Chandrasekhar-Grenze – die maximale mass eines weißen Zwerges – hängt direkt von (mp/me) ab. Variationen über kosmische Zeit werden anhand der Absorptionsspektren molekularen Wasserstoffs in fernen Quasaren getestet.`,
    whyItMatters: `Eine der folgenreichsten dimensionslosen Zahlen in der Natur. Sie bestimmt die Atomstruktur, die Hierarchie der Energieskalen und die Stabilität von Sternen.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Ladungs-zu-Masse-Verhältnis des Protons',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9,5788331442 × 10⁷ C/kg',
    category: 'Atomar',
    description: 'Verhältnis der Elementarladung zur Protonenmasse – 1836-mal kleiner als beim Elektron.',
    discoveredBy: 'Abgeleitet',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Das Verhältnis der Elementarladung zur Protonenmasse. Es bestimmt, wie Protonen auf Magnetfelder reagieren.`,
    simpleExample: `Die Proton-Zyklotronfrequenz in einem Magnetfeld ist 1836-mal niedriger als die des Elektrons. Deshalb verwendet MRT Radiofrequenzwellen (MHz-Bereich) anstelle von Mikrowellenfrequenzen.`,
    deepMeaning: `In der Massenspektrometrie werden Ionen anhand ihrer Ladungs-zu-Masse-Verhältnisse getrennt. Das Verhältnis e/mp des Protons dient als fundamentaler Kalibrierungsstandard. Zyklotron-Resonanz-Massenspektrometrie (Penning-Fallen) verwendet dieses Verhältnis, um Atommassen mit extremer Präzision zu messen. In der Beschleunigerphysik bestimmt die Steifigkeit eines Protonenstrahls den Biegungsradius in Magnetfeldern.`,
    whyItMatters: `Fundamental für die medizinische Bildgebung (MRT), Massenspektrometrie und die Auslegung von Hochenergie-Teilchenbeschleunigern wie dem LHC.`
  },

  {
    symbol: 'M(p)',
    name: 'Molare Masse des Protons',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00727646662 × 10⁻³ kg/mol',
    category: 'Atomar',
    description: 'Die Masse eines Mols Protonen.',
    discoveredBy: 'Abgeleitet',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `Die Masse eines Mols Protonen beträgt etwa 1,007 g/mol.`,
    simpleExample: `Sie ist geringfügig kleiner als 1 g/mol, da die atomare Masseneinheit als 1/12 der Masse von Kohlenstoff-12 definiert ist, was Bindungsenergie- und Elektronenmassenbeiträge einschließt.`,
    deepMeaning: `In der Kernphysik wird der Q-Wert einer Kernreaktion – die freigesetzte oder absorbierte Energie – aus der Massendifferenz mithilfe molarer Massen berechnet. Die molare Masse des Protons ist ein fundamentaler Referenzwert in diesen Berechnungen.`,
    whyItMatters: `Fundamental für stöchiometrische Berechnungen in der Kernchemie und Astrophysik.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutronen-Elektronen-Massenverhältnis',
    value: '1838.68',
    unit: 'dimensionslos',
    exact: '1838,68366214',
    category: 'Nuklear',
    description: 'Das Neutron ist 1838,68-mal schwerer als das Elektron.',
    discoveredBy: 'Abgeleitet',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2,531',
    whatItSays: `Das Verhältnis der Neutronenmasse zur Elektronenmasse. Es ist geringfügig größer als das Proton-Elektron-Verhältnis.`,
    simpleExample: `Das Neutron ist um 2,531 Elektronenmassen schwerer als ein Proton. Dieser Massenunterschied entspricht 1,293 MeV – der beim Neutron-Betazerfall freigesetzten Energie.`,
    deepMeaning: `Die Tatsache, dass dieses Verhältnis größer als das Proton-Elektronen-Verhältnis ist, macht freie Neutronen instabil. Wäre das Neutron um mehr als eine Elektronenmasse leichter als das Proton, würde Wasserstoff nicht als stabiles Element existieren. Dieses Verhältnis wird mit Penning-Fallen außerordentlich präzise gemessen.`,
    whyItMatters: `Bestimmt die Stabilität der Bausteine des Universums.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutronen-Protonen-Massenverhältnis',
    value: '1.00138',
    unit: 'dimensionslos',
    exact: '1,00137841931',
    category: 'Nuklear',
    description: 'Das Neutron ist um 0,138 % schwerer als das Proton.',
    discoveredBy: 'Abgeleitet',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Das Neutron ist um den Bruchteil 0,138 % schwerer als das Proton.`,
    simpleExample: `Dieser kleine Massenunterschied (1,293 MeV/c²) sorgte dafür, dass etwa 25 % der baryonischen Materie beim Urknall zu Helium-4 wurden, während der Rest als Wasserstoff verblieb.`,
    deepMeaning: `Im frühen Universum folgte das Gleichgewichtsverhältnis von Neutronen zu Protonen dem Boltzmann-Faktor. Als das Universum abkühlte und schwache Wechselwirkungen einfroren, wurde das n/p-Verhältnis bei etwa 1/7 eingefroren. Wäre der Massenunterschied geringfügig anders, würde die Sternentwicklung und Chemie grundlegend verändert.`,
    whyItMatters: `Die beobachtete kosmische Heliumhäufigkeit von ~25 % ist eine der größten Bestätigungen des Urknall-Modells – alles dank dieser Konstanten.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutronen-g-Faktor',
    value: '−3.826',
    unit: 'dimensionslos',
    exact: '−3,82608545',
    category: 'Nuklear',
    description: 'Enthüllt die innere Quarkstruktur des elektrisch neutralen Neutrons.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Der g-Faktor des Neutrons beträgt −3,826. Für ein strukturloses Dirac-Teilchen mit Nullladung sollte er genau 0 sein.`,
    simpleExample: `Das von null verschiedene magnetische Moment des neutralen Neutrons war eines der schockierendsten Ergebnisse der Kernphysik und bewies, dass neutrale Teilchen innere Bestandteile haben können.`,
    deepMeaning: `Das Neutron enthält ein Up-Quark und zwei Down-Quarks. Ihre magnetischen Momente und ihre Bahnbewegung erzeugen das netto-negative magnetische Moment. Das nicht-relativistische Quarkmodell sagt g ≈ −3,67 voraus; die Abweichung ist auf relativistische Korrekturen und Gluonen-Effekte zurückzuführen. Präzisionsmessungen testen QCD-Berechnungen der Hadronstruktur.`,
    whyItMatters: `Strenger Test des Standardmodells und der Quarkstruktur. Wird auch verwendet, um Grenzen für das elektrische Dipolmoment des Neutrons zu setzen.`
  },

  {
    symbol: 'M(n)',
    name: 'Molare Masse des Neutrons',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00866491560 × 10⁻³ kg/mol',
    category: 'Nuklear',
    description: 'Die Masse eines Mols Neutronen.',
    discoveredBy: 'Abgeleitet',
    formula: 'M(n) ≈ 1,00866 g/mol',
    whatItSays: `Ein Mol Neutronen wiegt etwa 1,00866 Gramm.`,
    simpleExample: `Obwohl freie Neutronen in 10 Minuten zerfallen, ist die molare Masse des Neutrons unentbehrlich für die Berechnung der „Bindungsenergiekurve", die bestimmt, wie viel Energie Kernkraftwerke erzeugen können.`,
    deepMeaning: `Die Kernbindungsenergie pro Nukleon wird mithilfe von Atommassen berechnet: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². Die größere Neutronenmasse im Vergleich zur Protonenmasse beeinflusst jede Kernbindungsenergie-Berechnung.`,
    whyItMatters: `Grundlage der Kerntechnik und der Erforschung nuklearer Isotope.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Compton-Wellenlänge des Neutrons',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1,31959090581 × 10⁻¹⁵ m',
    category: 'Nuklear',
    description: 'Natürliche Längenskala der Kernphysik – h/mnc.',
    discoveredBy: 'Abgeleitet',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `Die Wellenlänge eines Photons, dessen Energie gleich der Ruhemassenenergie des Neutrons ist. Sie beträgt etwa 1,32 Femtometer.`,
    simpleExample: `Diese Wellenlänge ist vergleichbar mit der Größe des Neutrons selbst (~0,8 fm) und der Reichweite der Kernkräfte (~1,4 fm).`,
    deepMeaning: `Charakteristische Längenskalen der Kernphysik werden durch die Compton-Wellenlängen von Nukleonen und Pionen gesetzt. Unterhalb dieser Skala werden Effekte der Quantenfeldtheorie wie Vakuumpolarisation wichtig. In Neutronenstreuexperimenten zur Untersuchung von Proteinstrukturen wird die Neutronenwellenlänge auf interatomare Abstände abgestimmt.`,
    whyItMatters: `Setzt die Skala, unterhalb derer das Neutron nicht mehr als einfaches nicht-relativistisches Teilchen behandelt werden kann.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Compton-Wellenlänge des Myons',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1,173444110 × 10⁻¹⁴ m',
    category: 'Teilchen',
    description: 'Wellenlänge eines Photons, dessen Energie der Ruheenergie des Myons entspricht.',
    discoveredBy: 'Abgeleitet',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Die Compton-Wellenlänge des Myons beträgt etwa 11,7 fm – um das Massenverhältnis (206,77) kleiner als die des Elektrons.`,
    simpleExample: `In myonischen Atomen orbitet das Myon viel näher am Kern als ein Elektron, da der Bohr-Radius des Myons umgekehrt proportional zur mass skaliert.`,
    deepMeaning: `Myonischer Wasserstoff hat das Myon auf einer Umlaufbahn von ~256 fm – nah genug am Proton, dass dessen endliche Größe die Energieniveaus signifikant beeinflusst. Deshalb liefert die Spektroskopie myonischen Wasserstoffs die präzisesten Messungen des Proton-Ladungsradius.`,
    whyItMatters: `Führte zum „Proton-Radius-Rätsel", einem zentralen Thema der modernen Präzisionsatomphysik.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Myon-g-Faktor',
    value: '−2.00233',
    unit: 'dimensionslos',
    exact: '−2,0023318418',
    category: 'Teilchen',
    description: 'Entscheidende Sonde für noch unentdeckte schwere Teilchen.',
    discoveredBy: 'Experiment / QED-Rechnung',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Wie das Elektron hat das Myon ein anomales magnetisches Moment ae = 0,001 165 920 59.`,
    simpleExample: `Das g-2-Experiment am Fermilab misst dies, um zu prüfen, ob „virtuelle" schwere Teilchen aus der Supersymmetrie oder anderen Theorien das magnetische spin des Myons beeinflussen.`,
    deepMeaning: `Der derzeitige experimentelle Wert weicht um ~4,2 Standardabweichungen von der Standardmodell-Vorhersage ab. Die Auflösung hängt von der Präzision der Gitter-QCD-Berechnungen der hadronischen Vakuumpolarisation ab.`,
    whyItMatters: `Eine der bedeutendsten Diskrepanzen zwischen dem Standardmodell und dem Experiment, die derzeit bekannt sind.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteronenmasse',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3,3435837768 × 10⁻²⁷ kg (1875,613 MeV/c²)',
    category: 'Nuklear',
    description: 'Kern des schweren Wasserstoffs – einfachster nuklearer Gebundener Zustand.',
    discoveredBy: 'Harold Urey (1931) · Nobelpreis 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Das Deuteron ist der Kern des Deuteriums (ein Proton plus ein Neutron). Seine Bindungsenergie beträgt 2,224 MeV.`,
    simpleExample: `Die Bindungsenergie ist bemerkenswert gering (zum Vergleich Helium-4: 28,3 MeV). Diese Zerbrechlichkeit erzeugte den „Deuterium-Flaschenhals" beim Urknall, der die Bildung schwererer Elemente verzögerte.`,
    deepMeaning: `Das Deuteron ist der einfachste nukleare Gebundene Zustand – analog zum Wasserstoffatom. Sein von null verschiedenes Quadrupolmoment beweist, dass die Kernkraft eine Tensorkomponente hat, die aus dem Pionenaustausch entsteht. Der erste Schritt der Fusion in der Sonne (p + p → d + e⁺ + νe) ist außerordentlich langsam; die Langlebigkeit der Sonne ist auf diesen Flaschenhals zurückzuführen.`,
    whyItMatters: `Grundlegendes Testfeld der Kernkrafttheorie. Deuterium wird als Neutronenmoderator in Kernreaktoren und in der pharmazeutischen Forschung verwendet.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Magnetisches Moment des Deuterons',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4,330735094 × 10⁻²⁷ J/T',
    category: 'Nuklear',
    description: 'Magnetisches Moment des einfachsten Kerns.',
    discoveredBy: 'Kernphysik / NMR-Studien',
    formula: 'μ<sub>d</sub> = 0,857 μ<sub>N</sub>',
    whatItSays: `Das magnetische Moment des Deuterons beträgt 0,857 Kernmagnetonen.`,
    simpleExample: `Wären die Spins einfach addiert, ergäbe die Summe μp + μn = 0,880 μN. Der tatsächliche Wert ist 0,857 μN. Diese Diskrepanz wird genau durch das orbitale magnetische Moment der D-Wellen-Beimischung in der Wellenfunktion erklärt.`,
    deepMeaning: `Die Übereinstimmung zwischen berechneten und gemessenen magnetischen Momenten des Deuterons bestätigt Kernkraftmodelle. Deuteronen-NMR wird zur Untersuchung molekularer Dynamik verwendet.`,
    whyItMatters: `Elegante Bestätigung des Kernstrukturmodells und der Pionenaustauschtheorie.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteronen-g-Faktor',
    value: '0.8574',
    unit: 'dimensionslos',
    exact: '0,8574382335',
    category: 'Nuklear',
    description: 'Verbindet das magnetische Moment des Deuterons mit dem Kernmagneton.',
    discoveredBy: 'Abgeleitet',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + Korrekturen',
    whatItSays: `Im Gegensatz zum Elektron (g ≈ −2) oder Proton (g ≈ 5,586) ist der g-Faktor des Deuterons kleiner als 1.`,
    simpleExample: `Dieser Wert spiegelt die partielle Aufhebung der magnetischen Momente von Proton und Neutron im Kern wider.`,
    deepMeaning: `Präzisionsmessungen erlauben die Extraktion des magnetischen Moments des Neutrons durch Korrekturen einschließlich Mesonenaustauschströmen und relativistischen Effekten.`,
    whyItMatters: `Zur Validierung komplexer Kernkraftmodelle auf dem 0,1-%-Niveau verwendet.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion-Masse',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5,006412778 × 10⁻²⁷ kg (2808,391 MeV/c²)',
    category: 'Nuklear',
    description: 'Kern des Helium-3 – zwei Protonen und ein Neutron.',
    discoveredBy: 'Kernphysikalische experimentelle Daten',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Das Helion ist der Kern des Helium-3. Seine Bindungsenergie beträgt 7,718 MeV.`,
    simpleExample: `Superfluides Helium-3 ist ein Modellsystem für unkonventionelle Supraleitung und topologische Quantenzustände.`,
    deepMeaning: `He-3 ist der Spiegelkern des Tritons. Der kleine Massenunterschied zwischen beiden testet die Ladungssymmetrie der Kernkräfte. Der Helion-g-Faktor beträgt −4,255 μN – was den dominanten Beitrag des einzelnen Neutrons widerspiegelt.`,
    whyItMatters: `Verwendet in hochempfindlichen Neutronendetektoren und für hyperpolarisierte Lungen-MRT.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha-Teilchen-Masse',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6,6446573357 × 10⁻²⁷ kg (3727,379 MeV/c²)',
    category: 'Nuklear',
    description: 'Helium-4-Kern – außerordentlich stabil, 28,3 MeV Bindungsenergie.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28,296 MeV',
    whatItSays: `Das Alpha-Teilchen ist der Helium-4-Kern. Es hat eine Bindungsenergie von 7,074 MeV pro Nukleon – nahe am Gipfel der Bindungsenergiekurve.`,
    simpleExample: `Halbwertszeiten des Alpha-Zerfalls spannen 20 Größenordnungen (von 0,3 μs bis 14 Milliarden Jahre). Beides wird durch Gamows Quantentunneltheorie erklärt.`,
    deepMeaning: `Die außergewöhnliche Stabilität des Alpha-Teilchens erklärt, warum es bevorzugt beim radioaktiven Zerfall emittiert wird. Es hat den spin null und kein magnetisches Moment – ein vollständig abgeschlossener Schalenkern. Der dreifache Alpha-Prozess (3α → ¹²C) erfordert eine Resonanz im Kohlenstoff-12 bei 7,65 MeV (der Hoyle-Zustand). Ohne diese Resonanz gäbe es keinen Kohlenstoff.`,
    whyItMatters: `Produkt der meisten Schwerkernnzerfälle. Der dreifache Alpha-Prozess ist die Quelle allen Kohlenstoffs im Universum. Einsatz in der gezielten Alpha-Strahlentherapie gegen Krebs.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomare Massenkonstante',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,66053906892 × 10⁻²⁷ kg (931,494 MeV/c²)',
    category: 'Thermodynamisch',
    description: '1/12 der Kohlenstoff-12-Masse – die natürliche Einheit der Atommassen.',
    discoveredBy: 'Internationaler Standard (1961)',
    formula: '1 u × c<sup>2</sup> = 931,494 MeV',
    whatItSays: `Die atomare Masseneinheit (u, oder Dalton, Da) ist als 1/12 der Masse eines Kohlenstoff-12-Atoms definiert.`,
    simpleExample: `Kohlenstoff-12 = 12 u (exakt). Wasserstoff = 1,0078 u. Ein Protein von 50 kDa hat eine Masse von 50.000 × 1,661 × 10⁻²⁷ kg.`,
    deepMeaning: `Die Umrechnung 1 u = 931,494 MeV/c² ist eine der nützlichsten in der Kernphysik. Massenunterschiede von Milli-Atommassen-Einheiten setzen MeV-Energien frei. Die Wahl von Kohlenstoff-12 war ein Kompromiss aus dem Jahr 1961 zwischen den Physik- und Chemie-Gemeinschaften.`,
    whyItMatters: `Grundlage der Kernphysik, Massenspektrometrie und der gesamten Biochemie, in der Proteinmassen in Dalton angegeben werden.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molare Massenkonstante',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamisch',
    description: 'Verbindet die atomare Masseneinheit mit der molaren Masse.',
    discoveredBy: 'SI-Neudefinition (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu verknüpft die atomare Masseneinheit mit der molaren Masse: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Da Mu ≈ 1 g/mol gilt, entspricht die molare Masse eines Stoffes in Gramm numerisch seiner relativen Atommasse (z. B. Wasser: ~18,015 g/mol).`,
    deepMeaning: `Historisch genau 1 g/mol. Nach 2019 sind sowohl NA als auch mu unabhängig definiert, sodass Mu nicht mehr exakt 1 g/mol beträgt – es weicht um etwa 10⁻⁹ ab. Dies ist für praktische Zwecke vernachlässigbar, erinnert aber daran, dass das neue SI grundlegend anders ist.`,
    whyItMatters: `Grundlage stöchiometrischer Berechnungen in der Chemie. Jede Mol-zu-Gramm-Umrechnung hängt davon ab.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molare Planck-Konstante',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3,990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamisch',
    description: 'Planck-Konstante auf die molare Ebene skaliert – NA × h.',
    discoveredBy: 'Abgeleitet',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `Die Energie pro Mol Photonen pro Frequenzeinheit.`,
    simpleExample: `In der Photochemie ist die Energie eines „Einsteins" (eines Mols Photonen) gleich NAhf.`,
    deepMeaning: `Erscheint in der Sackur-Tetrode-Gleichung für die absolute Entropie eines idealen Gases. Es verbindet die quantenmechanische Zustandssumme mit makroskopischen thermodynamischen Größen auf molarer Skala.`,
    whyItMatters: `Fundamental für Photochemie und statistische Thermodynamik.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Molares Volumen des idealen Gases (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22,41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamisch',
    description: 'Von einem Mol idealen Gases bei STP eingenommenes Volumen.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `Bei 0 °C und 101.325 Pa nimmt ein Mol eines jeden idealen Gases 22,413... Liter ein.`,
    simpleExample: `Ein Liter Wasserstoff und ein Liter Sauerstoff bei STP enthalten genau dieselbe Anzahl von Molekülen (2,688 × 10²²).`,
    deepMeaning: `Aus dem idealen Gasgesetz: V = nRT/P. Dieses „molare Volumen" ermöglicht die schnelle Umrechnung zwischen Gasmenge und Volumen. Die Tatsache, dass alle idealen Gase bei STP dasselbe molare Volumen besitzen, war eine revolutionäre Erkenntnis Avogadros.`,
    whyItMatters: `Eine der praktisch nützlichsten Zahlen der Chemie für die Stöchiometrie von Gasen.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt-Konstante',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2,686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamisch',
    description: 'Anzahl der Moleküle pro Kubikmeter eines idealen Gases bei STP.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `Die Anzahl der Luftmoleküle auf Meereshöhe beträgt näherungsweise 2,687 × 10²⁵ pro Kubikmeter.`,
    simpleExample: `Die mittlere freie Weglänge eines Luftmoleküls bei STP beträgt etwa 66 nm. Die Stoßhäufigkeit liegt bei ~10¹⁰ pro Sekunde.`,
    deepMeaning: `Loschmidt schätzte dies 1865 mithilfe der Gasviskosität und des Moleküldurchmessers. Es war die erste ernsthafte Schätzung der Molekülanzahl in einem makroskopischen Volumen und der erste direkte Beweis, dass Atome eine definite Größe besitzen. Rayleigh-Streuung (warum der Himmel blau ist) ist proportional zu n₀.`,
    whyItMatters: `Fundamental für Atmosphärenphysik und die Geschichte der Atomtheorie.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Molares Volumen von Silizium',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1,205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamisch',
    description: 'Von einem Mol Siliziumatomen im Kristallgitter eingenommenes Volumen.',
    discoveredBy: 'Avogadro-Projekt',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `Das Volumen eines Mols festen Siliziums in seiner diamantischen Kubikstruktur.`,
    simpleExample: `Man misst den Gitterparameter „a" durch Röntgenbeugung und die makroskopische Dichte „ρ", um NA auf 2 Teile pro Milliarde zu bestimmen.`,
    deepMeaning: `Silizium ist das Referenzmaterial für die Röntgenkristalldichtemethode. Das Avogadro-Projekt nutzte 1-kg-Siliziumkugeln außergewöhnlicher Perfektion, um das Kilogramm im Jahr 2019 neu zu definieren. Es verbindet Röntgenkristallographie mit makroskopischen Massestandards.`,
    whyItMatters: `Zentral für die Neudefinition des Kilogramms im Jahr 2019.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Molare Masse von Kohlenstoff-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12,0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamisch',
    description: 'Masse eines Mols Kohlenstoff-12-Atome.',
    discoveredBy: 'SI-Neudefinition (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `Vor 2019 war diese Größe genau 12 g/mol. Im neuen SI hat sie eine kleine gemessene Unsicherheit.`,
    simpleExample: `Die Abweichung von genau 12 g/mol beträgt etwa 10 Teile pro Milliarde – für die Chemie vollständig vernachlässigbar, für die Metrologie jedoch entscheidend.`,
    deepMeaning: `Spiegelt die Inkonsistenz zwischen der exakten Definition von NA und der historischen Definition der atomaren Masseneinheit wider. Basiseinheiten sind jetzt durch die Fixierung fundamentaler Konstanten definiert.`,
    whyItMatters: `Eine Erinnerung daran, dass das neue SI durch Konstanten und nicht durch materielle Artefakte definiert ist.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'Erste Strahlungskonstante',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3,741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamisch',
    description: 'Setzt die Gesamtskala der Schwarzkörper-Strahlungsintensität – 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Erscheint im Planckschen Schwarzkörper-Strahlungsgesetz für die spektrale Strahldichte.`,
    simpleExample: `Die Sonne hat ihr Maximum bei ~502 nm (grün). Solarzellen sind so ausgelegt, dass sie diesem Planck-Spektrum entsprechen, das präzise mithilfe von c₁ berechnet wird.`,
    deepMeaning: `Das Plancksche Strahlungsgesetz läutete 1900 die Quantenmechanik ein. Plancks Quantenhypothese führte den Exponentialfaktor ein, der die Hochfrequenz-Divergenz (die Ultraviolettkatastrophe) unterdrückt.`,
    whyItMatters: `Fundamental für Astrophysik, Solarenergie und Kosmologie.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'Erste Strahlungskonstante für die spektrale Strahldichte',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1,191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamisch',
    description: 'c₁ dividiert durch π – gibt die Strahldichte pro Raumwinkeleinheit.',
    discoveredBy: 'Abgeleitet',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Gibt die spektrale Strahldichte pro Raumwinkeleinheit anstelle der hemisphärischen spektralen Bestrahlungsstärke.`,
    simpleExample: `Unentbehrlich für die korrekte Berechnung der optischen Systemleistung, z. B. der Teleskopempfindlichkeit oder der Kamerabelichtung.`,
    deepMeaning: `Spiegelt den Unterschied zwischen der integrierten hemisphärischen Emission und der Strahldichte in einer bestimmten Richtung wider. Für einen Lambertschen Strahler beinhaltet der Zusammenhang einen Faktor π.`,
    whyItMatters: `Unentbehrlich für Radiometrie und satellitengestützte Fernerkundung.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Zweite Strahlungskonstante',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1,438776877 × 10⁻² m·K',
    category: 'Thermodynamisch',
    description: 'Verbindet Wellenlänge und Temperatur in der Planck-Funktion – hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Erscheint im Exponenten der Planck-Funktion. Setzt den Übergang zwischen Quanten- und klassischem Regime.`,
    simpleExample: `Das Wiensche Verschiebungsgesetz (λ_max × T = b) wird aus c₂ abgeleitet. Wärmebildkameras detektieren Menschen, da Körper bei 310 K im mittleren Infrarot ihr Maximum haben.`,
    deepMeaning: `Historisch wurde das Verhältnis c₁/c₂ zur Messung der Boltzmann-Konstante verwendet. Bei Raumtemperatur werden Quantenkorrekturen für mittel-infrarote Strahlung wichtig.`,
    whyItMatters: `Fundamental für Klimawissenschaft, Wärmebildgebung und Stellarphysik.`
  },

  {
    symbol: 'g',
    name: 'Normfallbeschleunigung',
    value: '9.807',
    unit: 'm/s²',
    exact: '9,80665 m/s² (exakt)',
    category: 'Universell',
    description: 'Genormter Wert der Fallbeschleunigung an der Erdoberfläche.',
    discoveredBy: 'Internationales Büro für Maß und Gewicht (1901)',
    formula: 'W = mg',
    whatItSays: `Ein festgelegter konventioneller Standard für die Fallbeschleunigung.`,
    simpleExample: `Die tatsächliche Fallbeschleunigung variiert von ~9,780 m/s² am Äquator bis ~9,832 m/s² an den Polen. Der Normwert wurde so gewählt, dass er Messungen auf 45° Breite entspricht.`,
    deepMeaning: `Erscheint als Umrechnungsfaktor zwischen mass und Kraft (Kilopondkraft). Gravimeter messen das lokale g auf 9 signifikante Stellen, um Gezeitenverformungen und Grundwasserveränderungen zu detektieren. Das Äquivalenzprinzip der Allgemeinen Relativitätstheorie besagt, dass g von Beschleunigung im flachen Raumzeit nicht unterscheidbar ist.`,
    whyItMatters: `Grundlage für Ingenieurwesen, die Definition des Atmosphärendrucks und präzises Wiegen.`
  },

  // ── TEIL 19: ATOMARE EINHEITEN ─────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'Atomare Längeneinheit',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5,29177210544 × 10⁻¹¹ m',
    category: 'Atomar',
    description: 'Der Bohr-Radius in atomaren Einheiten.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `Die Längeneinheit im atomaren System. Alle Bindungslängen werden in Bohr angegeben.`,
    simpleExample: `Typische Bindungslängen: H-H = 1,40 a₀, C-C = 2,92 a₀.`,
    deepMeaning: `In atomaren Einheiten gilt ħ = me = e = 4πε₀ = 1. Dies vereinfacht quantenchemische Gleichungen enorm.`,
    whyItMatters: `Standardeinheit in der Computerchemie.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Atomare Masseneinheit',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9,1093837139 × 10⁻³¹ kg',
    category: 'Atomar',
    description: 'Die Elektronenmasse in atomaren Einheiten.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `Die Masseneinheit im atomaren System.`,
    simpleExample: `In der Quantenchemie werden alle Massen als Vielfache von me angegeben.`,
    deepMeaning: `Teil des Systems, das fundamentale Konstanten auf 1 setzt, um die Schrödinger-Gleichung zu vereinfachen.`,
    whyItMatters: `Basismasse für alle Berechnungen der elektronischen Struktur.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'Atomare Zeiteinheit',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2,4188843265864 × 10⁻¹⁷ s',
    category: 'Atomar',
    description: 'Natürliche Zeitskala der elektronischen Bewegung in Atomen.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Die Zeit für eine Radian Phasenentwicklung auf der Hartree-Energieskala.`,
    simpleExample: `Die Umlaufperiode des Elektrons im Grundzustand des Wasserstoffs beträgt 2π atomare Zeiteinheiten ≈ 152 Attosekunden.`,
    deepMeaning: `Die Attosekundenphysik untersucht die Elektronendynamik auf dieser Zeitskala in Echtzeit. Der Nobelpreis 2023 wurde für die Attosekundenpuls-Technologie verliehen.`,
    whyItMatters: `Ermöglicht die direkte Beobachtung der Elektronenbewegung in Atomen.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Atomare Energieeinheit',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4,359744722 × 10⁻¹⁸ J',
    category: 'Atomar',
    description: 'Die Hartree-Energie in atomaren Einheiten.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Energieeinheit der Atomphysik.`,
    simpleExample: `Chemische Bindungsenergien in Hartree: H₂-Bindung = 0,174 Eh.`,
    deepMeaning: `Setzt die fundamentale Energieskala für alle Berechnungen der elektronischen Struktur.`,
    whyItMatters: `Standardenergieeinheit in Berechnungscodes wie DFT.`
  },

  {
    symbol: 'e',
    name: 'Atomare Ladungseinheit',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1,602176634 × 10⁻¹⁹ C',
    category: 'Atomar',
    description: 'Die Elementarladung in atomaren Einheiten.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `In atomaren Einheiten hat das Proton die Ladung +1, das Elektron die Ladung −1.`,
    simpleExample: `Der Heliumkern hat die Ladung +2 a.u.`,
    deepMeaning: `Vereinfacht die Mathematik der elektromagnetischen Wechselwirkung, indem die fundamentale Ladung auf Eins gesetzt wird.`,
    whyItMatters: `Basiseinheit für Ladungsverteilungen in Molekülen.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'Atomare Geschwindigkeitseinheit',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2,18769126364 × 10⁶ m/s',
    category: 'Atomar',
    description: 'Geschwindigkeit des Elektrons im Grundzustand des Wasserstoffs.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = αc',
    whatItSays: `α × c – die velocity des Elektrons im Bohr-Modell.`,
    simpleExample: `In Gold (Z=79) hat das 1s-Elektron eine velocity von ~0,58c, was zur relativistischen Kontraktion führt, die für die gelbe Farbe des Goldes verantwortlich ist.`,
    deepMeaning: `Bei schwereren Atomen erfordern velocities nahe c relativistische Korrekturen.`,
    whyItMatters: `Bestimmt, ab wann relativistische Effekte in der Chemie wichtig werden.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'Atomare Impulseinheit',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1,992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomar',
    description: 'Natürliche Skala der Impulsunschärfe im Wasserstoff.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. der velocity) = ħ/a₀.`,
    simpleExample: `Nach dem Unschärfeprinzip beträgt die Impulsunschärfe eines auf a₀ lokalisierten Elektrons genau eine atomare Einheit.`,
    deepMeaning: `Verbindet die Längenskala von Atomen direkt mit dem Impuls des orbitierenden Elektrons.`,
    whyItMatters: `Bestimmt die Elektronenbeugung und die Quantenchemie-Streuung.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'Atomare Krafteinheit',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8,238723498 × 10⁻⁸ N',
    category: 'Atomar',
    description: 'Elektrostatische Kraft zwischen Elektron und Proton im Bohr-Radius.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Enorm für atomare Skalen (82 nN), für Menschen jedoch nicht wahrnehmbar.`,
    simpleExample: `Grundlage der atomaren Stabilität: das Gleichgewicht dieser Kraft gegenüber dem Quantendruck.`,
    deepMeaning: `Setzt den Maßstab für die Stärke des „Klebers", der Atome zusammenhält.`,
    whyItMatters: `Bestimmt atomare Bindungen und Materialeigenschaften.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'Atomare Elektrische-Feld-Einheit',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5,142206747 × 10¹¹ V/m',
    category: 'Atomar',
    description: 'Außerordentlich intensives Feld, das das Elektron im Wasserstoff erfährt.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Das elektrische Feld beim Bohr-Radius (514 GV/m).`,
    simpleExample: `Atomare Felder sind ~100.000-mal stärker als das Durchschlagfeld der Luft.`,
    deepMeaning: `Bei Intensitäten über ~10¹⁴ W/cm² sind Laserfelder stark genug, um Elektronen von Atomen abzureißen und Attosekundenimpulse zu erzeugen.`,
    whyItMatters: `Referenzgröße für Starkfeld-Laserphysik und Feldionisierung.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'Atomare Einheit der magnetischen Flussdichte',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2,350517570 × 10⁵ T',
    category: 'Atomar',
    description: 'Magnetfeldstärke entsprechend einer atomaren Einheit.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235.000 Tesla – weitaus stärker als jeder Labormagnet (~45 T).`,
    simpleExample: `Magnetfelder von Neutronensternen erreichen ~10⁸–10¹¹ Tesla und übertreffen damit die atomare Einheit.`,
    deepMeaning: `Auf dieser Skala werden QED-Effekte auf die Photonenpropagation (Vakuumdoppelbrechung) bedeutend.`,
    whyItMatters: `Entscheidend für das Verständnis von weißen Zwergen und Magnetaren.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'Atomare Einheit der Permittivität',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1,112650056 × 10⁻¹⁰ F/m',
    category: 'Atomar',
    description: 'Vakuumpermittivität in atomaren Einheiten skaliert – 4πε₀.',
    discoveredBy: 'Abgeleitet',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `In atomaren Einheiten vereinfacht sich das Coulombsche Kraftgesetz zu F = q₁q₂/r².`,
    simpleExample: `Vereinfacht die gesamte elektrostatische Mathematik in quantenchemischen Programmen.`,
    deepMeaning: `Eine der wesentlichen Vereinfachungen, die den 4πε₀-Faktor aus Berechnungen entfernt.`,
    whyItMatters: `Standardnormierung in der theoretischen Physik.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'Atomare Einheit der Magnetisierbarkeit',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7,8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomar',
    description: 'Reaktion zweiter Ordnung der Energie eines Atoms auf ein Magnetfeld.',
    discoveredBy: 'Abgeleitet',
    formula: '1 a.u.',
    whatItSays: `Gemessen durch NMR-chemische Verschiebungen und magnetische Kraftmessungen.`,
    simpleExample: `Wird verwendet, um zu berechnen, wie Moleküle auf Magnetfelder in MRT-Stärke reagieren.`,
    deepMeaning: `Fundamentale Größe bei der Untersuchung molekularer magnetischer Suszeptibilitäten auf quantenmechanischer Ebene.`,
    whyItMatters: `Verwendet in der NMR-Spektroskopie und quantenchemischen Simulationen.`
  }

];
