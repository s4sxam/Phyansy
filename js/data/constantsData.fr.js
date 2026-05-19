// =============================================================================
// constantsData.fr.js — Base de données des constantes physiques (Français)
// i18n (Internationalisation) — Version manuelle · Langue : Français (fr)
// Valeurs issues de CODATA 2022 | Explications approfondies : Guide de référence Phyansy
//
// Règles de traduction appliquées :
//   • Les termes physiques (mass, spin, etc.) sont conservés en anglais.
//   • Les noms propres de physiciens (Oppenheimer, Planck, Bohr, etc.) sont conservés en anglais.
//   • Les valeurs numériques, unités et formules sont conservées telles quelles.
//   • Le texte explicatif est traduit en français soutenu et précis.
// =============================================================================

export const CONSTANTS_FR = [

  // ── PARTIE 1 : CONSTANTES UNIVERSELLES / FONDAMENTALES ────────────────────

  {
    symbol: 'c',
    name: 'Vitesse de la lumière dans le vide',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299 792 458 m/s (exacte)',
    category: 'Universel',
    description: 'La limite de vitesse fondamentale de la causalité elle-même.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `La lumière parcourt exactement 299 792 458 mètres en une seconde dans le vide parfait. Il ne s'agit pas d'une approximation mesurée — depuis 1983, le mètre lui-même est défini par ce nombre. Ainsi, c est désormais un entier exact, fixé par définition internationale.`,
    simpleExample: `La lumière de la Lune parvient à nos yeux en environ 1,28 seconde. Celle du Soleil met approximativement 8 minutes et 20 secondes. L'étoile la plus proche, Proxima Centauri, se trouve à 4,24 années-lumière — la lumière met donc 4,24 années pour franchir cette distance.`,
    deepMeaning: `c n'est pas simplement « la vitesse à laquelle la lumière se déplace ». C'est la limite de vitesse fondamentale de la causalité elle-même — la vitesse maximale à laquelle toute information, toute énergie ou toute influence causale peut se propager dans l'univers. La Relativité Restreinte d'Einstein révèle que c est identique pour tout observateur, quel que soit son mouvement. Cela remet en cause la notion newtonienne de temps absolu. Deux observateurs en mouvement relatif ne s'accorderont pas sur les longueurs, les intervalles de temps ni la simultanéité — mais ils mesureront toujours le même c. E = mc² exprime que la masse et l'énergie sont une seule et même chose, séparées uniquement par le facteur de conversion c².`,
    whyItMatters: `Sans c, il n'y a ni Relativité Restreinte, ni E = mc², ni correction du GPS (qui doit corriger à la fois la dilatation du temps relativiste restreinte et générale), ni compréhension des étoiles, ni physique des particules. C'est l'épine dorsale de la physique moderne.`
  },

  {
    symbol: 'h',
    name: 'Constante de Planck',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6,62607015 × 10⁻³⁴ J·s (exacte)',
    category: 'Universel',
    description: 'Quantum d\'action électromagnétique — régit l\'énergie des photons.',
    discoveredBy: 'Max Planck (1900) · Prix Nobel 1918',
    formula: 'E = hf',
    whatItSays: `L'énergie se présente sous forme de paquets discrets appelés quanta. L'énergie E d'un quantum unique de rayonnement électromagnétique — un photon — est E = hf, où f est la fréquence du rayonnement. h est la constante de proportionnalité qui relie la fréquence (propriété ondulatoire) à l'énergie (propriété corpusculaire).`,
    simpleExample: `La lumière rouge visible a une fréquence d'environ 4,3 × 10¹⁴ Hz. Un photon de lumière rouge porte l'énergie : (6,626 × 10⁻³⁴) × (4,3 × 10¹⁴) ≈ 2,85 × 10⁻¹⁹ J ≈ 1,78 eV. Cette infime énergie suffit à activer une molécule de rhodopsine dans votre rétine — le commencement de la vision.`,
    deepMeaning: `Avant Planck, la physique classique prédisait qu'un objet chaud devait rayonner une énergie infinie aux hautes fréquences — la « catastrophe ultraviolette ». En 1900, Max Planck résolut ce paradoxe en postulant que l'énergie n'est pas continue mais quantifiée. Einstein s'en servit pour expliquer l'effet photoélectrique. h est aussi le quantum d'action — il possède les unités d'énergie × temps. La forme réduite ħ = h/2π apparaît dans le commutateur [x̂, p̂] = iħ — le cœur mathématique de la mécanique quantique — et dans le Principe d'Incertitude de Heisenberg : Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h marque la frontière entre le monde quantique et le monde classique. Lorsque l'action d'un système est bien supérieure à h, la mécanique classique s'applique. Sans h, les atomes s'effondreraient, la chimie n'existerait pas, et l'univers tel que nous le connaissons ne pourrait exister.`
  },

  {
    symbol: 'ħ',
    name: 'Constante de Planck réduite',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1,054571817 × 10⁻³⁴ J·s (exacte)',
    category: 'Universel',
    description: 'h/2π — l\'unité naturelle de moment cinétique en mécanique quantique.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (prononcé « h-barre ») est simplement h divisé par 2π. Il apparaît chaque fois que la fréquence angulaire ω (en radians par seconde) est utilisée à la place de la fréquence ordinaire f (en cycles par seconde), puisque ω = 2πf.`,
    simpleExample: `Le spin d'un électron vaut ħ/2. Le spin d'un photon vaut ħ. Le moment cinétique orbital est toujours un multiple entier de ħ — ħ est donc l'atome de la rotation elle-même.`,
    deepMeaning: `En mécanique quantique, ħ n'est pas simplement une abréviation commode. C'est le quantum fondamental de moment cinétique. En théorie quantique des champs, ħ contrôle l'amplitude des fluctuations quantiques. Prendre la limite ħ → 0 redonne la théorie des champs classique. Toute la structure de la mécanique quantique — relations de commutation, intégrales de chemin, principes d'incertitude — est gouvernée par ħ.`,
    whyItMatters: `Dans les unités naturelles utilisées par les physiciens des particules, ħ = c = 1, ce qui simplifie considérablement les équations et révèle la structure géométrique profonde des théories.`
  },

  {
    symbol: 'e',
    name: 'Charge élémentaire',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1,602176634 × 10⁻¹⁹ C (exacte)',
    category: 'Électromagnétique',
    description: 'La plus petite charge électrique librement existante — la charge est quantifiée.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Prix Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `C'est la magnitude de la charge électrique portée par un proton (positive) ou un électron (négative). Toute charge électrique observable dans la nature est un multiple entier de e. La charge est quantifiée.`,
    simpleExample: `Un courant de 1 ampère signifie qu'1 coulomb de charge passe par seconde en un point donné. Puisque chaque électron porte 1,602 × 10⁻¹⁹ C, un courant de 1 A correspond à environ 6,24 × 10¹⁸ électrons passant par seconde.`,
    deepMeaning: `La quantification de la charge fut établie expérimentalement par Robert Millikan dans sa célèbre expérience des gouttes d'huile. Il mesura la charge de gouttelettes d'huile en suspension dans un champ électrique et constata que toutes les charges étaient des multiples entiers d'une unité fondamentale — e. La constante de structure fine α ≈ 1/137 est la mesure sans dimension de la force de l'interaction électromagnétique. Les quarks portent des charges de e/3 et 2e/3, mais ils sont définitivement confinés à l'intérieur des hadrons et ne s'observent jamais isolément avec une charge fractionnaire.`,
    whyItMatters: `e fixe l'échelle de toutes les interactions atomiques et moléculaires. La chimie, la biologie, l'électronique et la science des matériaux dépendent fondamentalement de la valeur de e. Si e était légèrement différent, la vie telle que nous la connaissons ne pourrait exister.`
  },

  {
    symbol: 'k',
    name: 'Constante de Boltzmann',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1,380649 × 10⁻²³ J/K (exacte)',
    category: 'Thermodynamique',
    description: 'Pont entre la température et l\'énergie cinétique — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (également noté kB) est le pont entre le monde microscopique des particules individuelles et le monde macroscopique de la température. Il convertit la température — propriété statistique d'un ensemble — en énergie par particule. Chaque degré de liberté contribue en moyenne (1/2)kT d'énergie cinétique.`,
    simpleExample: `À température ambiante (T = 293 K) : kT ≈ 0,0253 eV. C'est l'échelle d'énergie thermique caractéristique à température ambiante. Les énergies de liaisons chimiques sont de l'ordre de quelques eV, donc l'énergie thermique à température ambiante est bien plus faible — d'où la stabilité de la plupart des liaisons chimiques.`,
    deepMeaning: `La température n'est pas une grandeur fondamentale — c'est une mesure de l'énergie cinétique moyenne des particules. S = k ln(Ω) définit l'entropie en termes d'information et de probabilité, reliant la thermodynamique à la physique microscopique. La distribution de Boltzmann donne la probabilité qu'un système se trouve dans un état d'énergie E à la température T : P(E) ∝ e^(−E/kT). Ce facteur exponentiel — le facteur de Boltzmann — gouverne tout, des taux de réaction chimique à la distribution des molécules dans l'atmosphère terrestre.`,
    whyItMatters: `k est le fondement de la thermodynamique et de la mécanique statistique. Sans lui, il est impossible de relier la physique microscopique aux observables macroscopiques tels que la température, la pression et l'entropie. Depuis 2019, k est une constante définie exacte, et le kelvin est défini à travers elle.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Constante d\'Avogadro',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6,02214076 × 10²³ mol⁻¹ (exacte)',
    category: 'Thermodynamique',
    description: 'Nombre d\'entités dans une mole — relie les échelles atomique et humaine.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `Une mole de toute substance contient exactement 6,022 140 76 × 10²³ entités élémentaires (atomes, molécules, ions, etc.). Ce nombre est le pont entre l'échelle atomique et l'échelle humaine.`,
    simpleExample: `12 grammes de carbone-12 contiennent exactement une mole d'atomes de carbone. Ce nombre est d'une immensité à peine concevable : si vous disposiez d'une mole de grains de sable, ils recouvriraient la surface de la Terre sur plusieurs kilomètres de profondeur.`,
    deepMeaning: `NA relie l'unité de masse atomique aux grammes. 1 u = 1 gramme / NA = 1,660 539 × 10⁻²⁷ kg. La constante molaire des gaz R est reliée à la constante de Boltzmann par : R = NA × k = 8,314 J mol⁻¹ K⁻¹. La constante de Faraday F = NAe = 96 485 C/mol est la charge d'une mole d'électrons. Historiquement, mesurer NA constituait l'un des grands défis de la physique des XIXᵉ et début XXᵉ siècles. Les mesures du mouvement brownien par Jean Perrin en 1908 ont prouvé l'existence des atomes.`,
    whyItMatters: `NA rend la chimie quantitative. Il permet aux chimistes de compter les atomes par pesée. Tout calcul stœchiométrique, toute dose pharmaceutique, tout calcul en science des matériaux repose sur NA.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Efficacité lumineuse',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (exacte)',
    category: 'Universel',
    description: 'Définit la candela — la seule constante du SI liée à la biologie humaine.',
    discoveredBy: 'Définition internationale (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W à 540 THz',
    whatItSays: `683 lumens de flux lumineux (luminosité perçue par l'œil humain) correspondent à 1 watt de puissance rayonnante à une fréquence monochromatique précise de 540 × 10¹² Hz (lumière verte, longueur d'onde ≈ 555 nm) — le pic de sensibilité de l'œil humain en vision diurne.`,
    simpleExample: `Une source lumineuse émettant 1 watt de lumière verte pure produit exactement 683 lumens de luminosité visible. Toute autre couleur produit moins de lumens par watt car l'œil y est moins sensible.`,
    deepMeaning: `C'est la seule constante du système SI qui dépend de la biologie humaine — plus précisément de la sensibilité spectrale de l'œil humain photopique (diurne). Elle est définie ainsi pour relier la grandeur physique de puissance rayonnante (watts) à la grandeur perceptive de luminosité (lumens). Depuis 2019, la candela est définie en fixant Kcd à exactement 683 lm/W.`,
    whyItMatters: `Fondamentale pour la photométrie, l'ingénierie de l'éclairage et toute conception de système optique. Chaque spécification en lumens sur chaque ampoule remonte à cette constante.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Fréquence hyperfine du césium',
    value: '9 192 631 770',
    unit: 'Hz',
    exact: '9 192 631 770 Hz (exacte)',
    category: 'Universel',
    description: 'Définit la seconde — le battement de cœur de toute mesure du temps moderne.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9 192 631 770 / Δν<sub>Cs</sub>',
    whatItSays: `L'état fondamental de l'atome de césium-133 possède deux niveaux hyperfins — séparés par l'interaction entre le moment magnétique de l'électron et le moment magnétique nucléaire. Lorsque l'atome effectue une transition entre ces deux niveaux, il émet ou absorbe un rayonnement à exactement 9 192 631 770 Hz.`,
    simpleExample: `Depuis 1967, une seconde est définie comme exactement 9 192 631 770 périodes d'oscillation de ce rayonnement. Les horloges atomiques au césium sont les instruments de mesure du temps les plus précis jamais construits, perdant moins d'une seconde en 300 millions d'années.`,
    deepMeaning: `La structure hyperfine résulte de l'électrodynamique quantique — l'interaction entre le moment dipolaire magnétique de l'électron et le champ magnétique généré par le spin nucléaire. Calculer cette fréquence à partir des premiers principes constitue un test profond de l'électrodynamique quantique (QED). Le GPS, Internet (qui nécessite des horloges synchronisées), les systèmes financiers et toutes les télécommunications modernes dépendent directement des standards d'horloges atomiques au césium.`,
    whyItMatters: `La mesure la plus précise de toute la science. La civilisation moderne — GPS, synchronisation d'Internet, transactions financières, réseaux 5G — repose entièrement sur cette constante.`
  },

  // ── PARTIE 2 : CONSTANTES ÉLECTROMAGNÉTIQUES ──────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Permittivité électrique du vide',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8,8541878188 × 10⁻¹² F/m',
    category: 'Électromagnétique',
    description: 'Facilité avec laquelle les champs électriques traversent le vide.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon zéro) mesure la facilité avec laquelle un champ électrique peut traverser le vide. Elle apparaît dans la loi de Coulomb — la force entre deux charges ponctuelles : F = (1/4πε₀) × (q₁q₂/r²). Plus ε₀ est grande, plus la force électrostatique est faible pour des charges et une distance données.`,
    simpleExample: `L'eau a une permittivité relative εr ≈ 80, ce qui signifie qu'elle réduit les forces électrostatiques entre charges d'un facteur 80 par rapport au vide — d'où les propriétés remarquables de l'eau comme solvant pour les composés ioniques.`,
    deepMeaning: `ε₀ n'est pas définie indépendamment — elle est dérivée des valeurs définies de c et μ₀ via : ε₀ = 1/(μ₀c²). Elle apparaît dans les quatre équations de Maxwell sous leurs formes dans le vide. Dans la loi de Gauss : ∮ E · dA = Q_enc/ε₀. Le flux électrique total à travers toute surface fermée est égal à la charge enfermée divisée par ε₀. Elle fixe également l'échelle de la densité d'énergie électromagnétique stockée dans un champ électrique : u_E = (1/2)ε₀E².`,
    whyItMatters: `Apparaît dans les quatre équations de Maxwell. Sans ε₀, ni l'électrostatique quantitative, ni la conception de condensateurs, ni la compréhension des diélectriques ne sont possibles.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Perméabilité magnétique du vide',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1,2566370621 × 10⁻⁶ N/A²',
    category: 'Électromagnétique',
    description: 'Facilité avec laquelle les champs magnétiques traversent le vide.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu zéro) mesure la facilité avec laquelle un champ magnétique traverse le vide. Elle apparaît dans la loi de Biot-Savart et la loi d'Ampère. La force par unité de longueur entre deux fils parallèles portant des courants I₁ et I₂, séparés d'une distance d, est : F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `Le fer a une perméabilité relative μr pouvant atteindre ~10 000 — il concentre considérablement les champs magnétiques par rapport au vide. C'est pourquoi les noyaux de transformateurs sont en fer : pour canaliser et amplifier efficacement le flux magnétique.`,
    deepMeaning: `Avant la redéfinition du SI en 2019, μ₀ valait exactement 4π × 10⁻⁷ N/A² par définition. Elle est désormais une grandeur mesurée avec une légère incertitude. μ₀ apparaît dans la loi d'Ampère avec la correction de Maxwell : ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). Le second terme — le courant de déplacement de Maxwell — permit l'existence des ondes électromagnétiques dans le vide et conduisit directement à la prédiction que la lumière est une onde électromagnétique.`,
    whyItMatters: `Sans μ₀, il n'y a ni champs magnétiques, ni induction électromagnétique, ni moteurs électriques, ni transformateurs, ni ondes radio.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Impédance caractéristique du vide',
    value: '376.730',
    unit: 'Ω',
    exact: '376,730313412 Ω',
    category: 'Électromagnétique',
    description: 'Rapport du champ électrique au champ magnétique dans une onde électromagnétique dans le vide.',
    discoveredBy: 'Dérivée des équations de Maxwell',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `Lorsqu'une onde électromagnétique se propage dans le vide, le rapport de l'amplitude du champ électrique à celle du champ magnétique est : Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `Une antenne rayonne efficacement lorsque son impédance est adaptée à 377 Ω. La puissance rayonnée par unité de surface (le vecteur de Poynting) est S = E²/Z₀. Ce résultat est utilisé pour concevoir tout, des antennes dipôles aux antennes paraboliques satellitaires.`,
    deepMeaning: `Z₀ est l'impédance de l'espace libre — elle indique le champ électrique obtenu par unité de champ magnétique dans une onde électromagnétique en propagation. C'est la « résistance » du vide à la propagation des ondes électromagnétiques, analogue à l'impédance caractéristique d'une ligne de transmission. La lumière solaire atteignant la Terre correspond à une amplitude de champ électrique de √(1361 × Z₀) ≈ 716 V/m.`,
    whyItMatters: `Indispensable pour la conception d'antennes, les sections efficaces radar, le gain d'antenne et tous les bilans de liaison pour les communications sans fil.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Constante de Josephson',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597,8484 × 10⁹ Hz/V',
    category: 'Électromagnétique',
    description: 'Relie la tension à la fréquence dans les jonctions Josephson supraconductrices.',
    discoveredBy: 'Brian Josephson (1962) · Prix Nobel 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `La constante de Josephson relie la tension à la fréquence dans l'effet Josephson alternatif. Lorsqu'une tension continue V est appliquée à une jonction Josephson (une mince barrière isolante entre deux supraconducteurs), elle génère un courant alternatif à la fréquence f = 2eV/h.`,
    simpleExample: `Une tension de 1 millivolt aux bornes d'une jonction Josephson génère une oscillation alternative à ~483,6 GHz — dans la gamme des micro-ondes. Cela est utilisé pour définir des standards de tension précis à 1 partie sur 10¹⁰.`,
    deepMeaning: `Le facteur 2 provient du fait que la supraconductivité met en jeu des paires de Cooper — des paires d'électrons de charge 2e. La jonction Josephson est un dispositif quantique macroscopique dans lequel la différence de phase quantique entre deux supraconducteurs entraîne un supercourant. L'effet Josephson alternatif est une démonstration saisissante que la mécanique quantique opère à des échelles macroscopiques dans les supraconducteurs.`,
    whyItMatters: `Standard de tension primaire utilisé dans le monde entier. La mesure électrique la plus précise disponible. Fondamental pour la métrologie quantique et l'informatique quantique supraconductrice.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Constante de Von Klitzing',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812,80745 Ω',
    category: 'Électromagnétique',
    description: 'Quantum de résistance électrique — h/e² — issu de l\'effet Hall quantique.',
    discoveredBy: 'Klaus von Klitzing (1980) · Prix Nobel 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² est le quantum de résistance. Il apparaît dans l'effet Hall quantique : lorsqu'un gaz d'électrons bidimensionnel est placé dans un champ magnétique perpendiculaire intense à basse température, la résistance de Hall est quantifiée en fractions exactes de RK : RH = RK/n.`,
    simpleExample: `La quantification est si précise que RK est utilisé comme standard de résistance primaire. Des puces en silicium à ~1 K dans des champs de ~10 Tesla reproduisent RK/2 = 12 906 Ω à mieux qu'1 partie par milliard.`,
    deepMeaning: `La quantification est d'origine topologique — elle ne dépend pas du matériau, de la géométrie de l'échantillon, ni d'aucun paramètre ajustable. Elle est exacte à la précision de mesure près. L'effet Hall quantique fractionnaire (1982) implique des quantifications encore plus exotiques aux fractions 1/3, 2/5, etc. — issues d'états électroniques fortement corrélés, dont l'état ν = 5/2 qui pourrait héberger des anyons non-abéliens pertinents pour l'informatique quantique topologique.`,
    whyItMatters: `Standard de résistance primaire mondial. Fenêtre sur la topologie en physique de la matière condensée. Les effets Hall quantiques entier et fractionnaire représentent certaines des découvertes les plus profondes de la physique moderne.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Quantum de flux magnétique',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2,067833848 × 10⁻¹⁵ Wb',
    category: 'Électromagnétique',
    description: 'Quantum de flux magnétique — h/(2e) — dans les boucles supraconductrices.',
    discoveredBy: 'London & Onsager (théorie) · Doll & Näbauer (1961, confirmé)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `Le flux magnétique à travers une boucle supraconductrice est quantifié en unités de Φ₀. Un anneau supraconducteur ne peut piéger le flux magnétique qu'en multiples entiers de h/(2e).`,
    simpleExample: `Un SQUID (dispositif d'interférence quantique supraconducteur) peut détecter des variations de flux magnétique aussi faibles que 10⁻⁶ Φ₀ — correspondant à une variation de champ magnétique de ~10⁻¹⁸ Tesla. Cela est utilisé pour l'imagerie cérébrale (MEG).`,
    deepMeaning: `La quantification du flux magnétique est une manifestation macroscopique directe de la mécanique quantique. Le paramètre d'ordre supraconducteur (la fonction d'onde quantique macroscopique) doit être univoque autour d'une boucle, ce qui contraint le flux enfermé à être quantifié. Les SQUIDs exploitent Φ₀ pour mesurer les champs magnétiques avec une sensibilité extraordinaire — les capteurs magnétiques les plus sensibles jamais construits.`,
    whyItMatters: `Fondement de la technologie SQUID, de la magnétoencéphalographie, des tests fondamentaux de la mécanique quantique à des échelles macroscopiques, et de l'informatique quantique supraconductrice.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Quantum de conductance',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7,748091729 × 10⁻⁵ S',
    category: 'Électromagnétique',
    description: 'Unité fondamentale de conductance électrique — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `Lorsque des électrons traversent un conducteur quantique parfait à canal unique (tel qu'un contact monoatomique ou un contact ponctuel quantique), la conductance est exactement G₀ = 2e²/h par canal. La résistance correspondante est 1/G₀ = h/(2e²) ≈ 12 906 Ω.`,
    simpleExample: `Un fil nanométrique d'or étiré jusqu'à n'être large que d'un seul atome présente une conductance d'environ G₀. Cela a été mesuré expérimentalement avec une grande précision. Un fil de deux atomes de large a une conductance d'environ 2G₀.`,
    deepMeaning: `La résistance classique dépend de la géométrie de l'échantillon, du matériau et des impuretés. Mais au niveau quantique, même un conducteur parfait présente une résistance — en raison de l'adaptation quantique des modes de propagation entre le conducteur et ses contacts. C'est la formule de Landauer : G = G₀ × Σ T, où T sont les probabilités de transmission des canaux quantiques individuels.`,
    whyItMatters: `Fondement de la physique mésoscopique et de la nanoélectronique. Gouverne le transport d'électrons à travers les jonctions moléculaires, les nanotubes de carbone et les points quantiques.`
  },

  {
    symbol: 'F',
    name: 'Constante de Faraday',
    value: '96 485.332',
    unit: 'C/mol',
    exact: '96485,33212 C/mol',
    category: 'Électromagnétique',
    description: 'Charge d\'une mole d\'électrons — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `La constante de Faraday est la charge d'une mole de charges élémentaires — une mole d'électrons ou une mole de protons. En électrochimie, elle régit la quantité de charge nécessaire pour déposer ou dissoudre une mole d'un ion monovalent.`,
    simpleExample: `Pour électrodéposer 1 mole de cuivre (63,5 g) à partir d'une solution de CuSO₄, il faut 2F = 192 970 C de charge (le cuivre est divalent, Cu²⁺ + 2e⁻ → Cu). C'est pourquoi le dépôt d'une couche épaisse par électrodéposition nécessite des courants élevés.`,
    deepMeaning: `Les lois de Faraday de l'électrolyse (1833-1834) stipulent que la masse de substance déposée à une électrode est proportionnelle à la charge transmise, avec F comme constante de proportionnalité (par mole par valence) : m = (M/zF) × Q. Faraday établit cette relation empiriquement, sans connaître l'existence des électrons ni des atomes — une réalisation remarquable. La constante qui porte son nom possède désormais une valeur exacte via les définitions de NA et e.`,
    whyItMatters: `Fondement de toute l'électrochimie. Chaque batterie lithium-ion, chaque processus d'électrodéposition, chaque unité de production de chlore et chaque raffinage électrolytique de métaux repose sur cette constante.`
  },

  // ── PARTIE 3 : CONSTANTES ATOMIQUES ET NUCLÉAIRES ─────────────────────────

  {
    symbol: 'α',
    name: 'Constante de structure fine',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'sans dimension',
    exact: '7,2973525643 × 10⁻³ (≈ 1/137,036)',
    category: 'Atomique',
    description: 'Constante de couplage sans dimension de la force électromagnétique.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α est la constante de couplage sans dimension de l'interaction électromagnétique. Elle mesure la force de la force électromagnétique entre particules chargées — plus précisément, la probabilité d'amplitude qu'une particule chargée émette ou absorbe un photon.`,
    simpleExample: `En électrodynamique quantique, la probabilité qu'un électron émette un photon dans un processus donné est proportionnelle à α. Les processus à deux photons sont proportionnels à α², et ainsi de suite. Puisque α ≈ 1/137, chaque vertex photonique supplémentaire supprime la probabilité d'un facteur ~1/137, d'où la convergence rapide des diagrammes de Feynman en QED.`,
    deepMeaning: `α est l'un des nombres les plus mystérieux de la physique. Il est purement sans dimension — sans unités, et prend la même valeur quel que soit le système d'unités. Il combine e (électromagnétisme), ε₀ (électrostatique), ħ (mécanique quantique) et c (relativité). Richard Feynman qualifiait α d'« un des plus grands mystères de la physique ». En QED, α n'est pas vraiment constant — il « court » avec l'échelle d'énergie en raison de la polarisation du vide : À basse énergie : α ≈ 1/137. À l'échelle de masse du boson Z : α ≈ 1/128.`,
    whyItMatters: `α gouverne toute la physique atomique, la chimie et la biologie moléculaire. La taille des atomes, la force des liaisons chimiques, les spectres d'absorption et d'émission de tous les éléments — tout cela est contrôlé par α. C'est sans doute le nombre sans dimension le plus important de la physique.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Constante de Rydberg',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10 973 731,568157 m⁻¹',
    category: 'Atomique',
    description: 'Détermine les longueurs d\'onde de toutes les raies spectrales de l\'hydrogène.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `La constante de Rydberg donne les nombres d'onde (inverses des longueurs d'onde) des raies spectrales de l'hydrogène. Les longueurs d'onde de toutes les raies spectrales de l'hydrogène sont données par la formule de Rydberg : 1/λ = R∞ × (1/n₁² − 1/n₂²), où n₁ et n₂ sont des entiers positifs avec n₂ > n₁.`,
    simpleExample: `Pour la série de Lyman (transitions vers l'état fondamental), la première raie (n₂ = 2) : 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121,6 nm (ultraviolet — raie Lyman-alpha). C'est la raie spectrale la plus importante en astrophysique — utilisée pour détecter l'hydrogène dans l'univers et mesurer l'expansion de l'espace via le décalage vers le rouge.`,
    deepMeaning: `R∞ est dérivée théoriquement de constantes plus fondamentales : R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). Cette formule — dérivée du modèle de Bohr et affinée par la mécanique quantique — relie le spectre de l'hydrogène à la masse de l'électron, à la charge élémentaire et à d'autres constantes fondamentales. L'accord entre théorie et expérience est extraordinaire. L'énergie de Rydberg (Ry) — l'énergie de liaison de l'hydrogène — vaut : En = −Ry/n² = −13,6 eV/n².`,
    whyItMatters: `Le point de départ qui conduisit Bohr à l'atome quantique. La constante atomique mesurée avec la plus grande précision. Connue à 12 chiffres significatifs, elle permet des tests de la QED à quelques parties par trillion.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Rayon de Bohr',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5,29177210544 × 10⁻¹¹ m',
    category: 'Atomique',
    description: 'Échelle de taille naturelle des atomes — distance la plus probable entre l\'électron et le proton dans l\'hydrogène.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ est la distance la plus probable entre l'électron et le proton dans un atome d'hydrogène en état fondamental (n = 1). Il fixe l'échelle de taille caractéristique des atomes. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0,529 Å (angström). C'est la taille typique d'un atome d'hydrogène. La plupart des atomes ont des rayons dans un facteur de quelques fois a₀. La longueur de liaison C-C dans le diamant est ~2,9a₀. Le diamètre de la double hélice de l'ADN est ~40 Å ≈ 75a₀.`,
    deepMeaning: `Le rayon de Bohr résulte de l'équilibre entre l'énergie cinétique de l'électron (quantique, qui tend à disperser l'électron — le principe d'incertitude l'empêche de s'effondrer sur le noyau) et l'énergie potentielle coulombienne (qui l'attire vers le noyau). En mécanique quantique, la fonction d'onde de l'état fondamental de l'hydrogène atteint son maximum en r = a₀. Le rayon de Bohr fixe l'échelle de toutes les fonctions d'onde atomiques — les orbitales supérieures ont des rayons ~n²a₀.`,
    whyItMatters: `Définit l'échelle de longueur fondamentale de la chimie et de la science des matériaux. En physique de la matière condensée, a₀ fixe l'échelle des liaisons chimiques, des espacements des réseaux cristallins et de la taille des excitons. La taille de l'atome d'hydrogène détermine en définitive la densité de la matière.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Énergie de Hartree',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4,359744722 × 10⁻¹⁸ J (27,211 eV)',
    category: 'Atomique',
    description: 'Unité naturelle d\'énergie en physique atomique — le double de l\'énergie d\'ionisation de l\'hydrogène.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `L'énergie de Hartree est le double de l'énergie d'ionisation de l'hydrogène depuis son état fondamental. C'est l'unité naturelle d'énergie en physique atomique : Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `L'état fondamental de l'hydrogène a une énergie de −(1/2)Eh = −13,6 eV. Les énergies de liaisons chimiques typiques sont de ~0,1–0,2 Eh (3–5 eV). Une liaison C-H vaut ~0,16 Eh. Ces nombres sont tous de l'ordre de l'unité en unités atomiques — idéal pour la chimie quantique.`,
    deepMeaning: `En unités atomiques (avec ħ = me = e = a₀ = 1), Eh = 1. Les unités atomiques simplifient considérablement les équations de la chimie quantique. L'équation de Schrödinger pour l'hydrogène en unités atomiques devient simplement : −(1/2)∇²ψ − (1/r)ψ = Eψ, où E = −1/2 pour l'état fondamental, soit −0,5 Hartree = −13,6 eV. Les codes de chimie computationnelle (théorie de la fonctionnelle de la densité, Hartree-Fock) travaillent presque universellement en unités atomiques en interne.`,
    whyItMatters: `L'unité de travail de la chimie quantique. Tout calcul DFT, toute simulation de dynamique moléculaire et tout résultat de chimie quantique remonte en définitive à l'énergie de Hartree. C'est l'échelle d'énergie fondamentale des calculs de structure électronique.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Magnéton de Bohr',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9,2740100657 × 10⁻²⁴ J/T',
    category: 'Atomique',
    description: 'Unité naturelle du moment magnétique de l\'électron — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB est l'unité naturelle de moment magnétique pour les électrons. Il représente le moment magnétique d'un électron dû à son moment cinétique orbital de ħ.`,
    simpleExample: `Dans un champ magnétique d'IRM de 1 Tesla, la séparation Zeeman entre les états spin-haut et spin-bas de l'électron est 2μB × B ≈ 1,9 × 10⁻²³ J ≈ 0,12 meV — correspondant aux fréquences micro-ondes. C'est pourquoi la résonance de spin électronique (ESR) utilise les micro-ondes, tandis que la RMN utilise les radiofréquences.`,
    deepMeaning: `Le moment magnétique de spin de l'électron est approximativement μB (exactement, il vaut ge × μB/2, où ge ≈ 2,002 en raison des corrections de l'électrodynamique quantique). L'effet Zeeman — la séparation des raies spectrales atomiques dans un champ magnétique — est régi par μB : ΔE = ml × μB × B, où ml est le nombre quantique magnétique. μB gouverne la résonance de spin électronique (ESR). L'accord avec l'expérience à 12 décimales constitue la grandeur la plus précisément calculée de la science.`,
    whyItMatters: `Fondement de la résonance de spin électronique, des matériaux magnétiques et de tous les effets magnéto-optiques. Central en spintronique et en informatique quantique à bits quantiques de spin.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Magnéton nucléaire',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5,0507837461 × 10⁻²⁷ J/T',
    category: 'Atomique',
    description: 'Unité naturelle du moment magnétique nucléaire — 1836 fois plus petite que le magnéton de Bohr.',
    discoveredBy: 'Otto Stern (1933) · Prix Nobel 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN est l'unité naturelle de moment magnétique pour les nucléons (protons et neutrons). Elle est 1836 fois plus petite que μB car le proton est 1836 fois plus lourd que l'électron.`,
    simpleExample: `Le proton a un moment magnétique de 2,793 μN. Dans un scanner IRM à 3 Tesla, l'écart d'énergie entre les états de spin protonique est 2 × 2,793 × μN × 3T ≈ 8,4 × 10⁻²⁶ J, correspondant à ~127 MHz en radiofréquence. C'est précisément la fréquence utilisée par un scanner IRM.`,
    deepMeaning: `Malgré l'absence de charge électrique, le neutron possède un moment magnétique de −1,913 μN. Ce moment magnétique non nul d'une particule neutre fut historiquement l'une des premières indications que le neutron n'est pas une particule fondamentale mais possède une structure interne (quarks). Le moment magnétique du proton de 2,793 μN — et non simplement 1 μN comme le prédirait une particule de Dirac ponctuelle — constitua la découverte nobélisée de Stern en 1933. La RMN (et l'IRM) est fondée sur les transitions de spin protonique.`,
    whyItMatters: `Fondement de la spectroscopie RMN et de l'IRM — les outils les plus puissants en chimie structurale et en imagerie médicale. A historiquement prouvé la structure interne en quarks du nucléon.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Masse de l\'électron',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9,1093837139 × 10⁻³¹ kg (0,511 MeV/c²)',
    category: 'Particule',
    description: 'Masse au repos de l\'électron — la particule massive fondamentale la plus légère.',
    discoveredBy: 'J.J. Thomson (1897) · Prix Nobel 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `C'est la masse au repos de l'électron — la particule massive fondamentale la plus légère. En unités d'énergie via E = mc² : mec² = 0,510 998 950 MeV. L'électron est 1836,15 fois plus léger que le proton.`,
    simpleExample: `La création de paires (γ → e⁺ + e⁻) nécessite un photon d'au moins 2mec² = 1,022 MeV. En dessous de cette énergie, les photons ne peuvent pas créer de paires électron-positron — quel que soit leur nombre. Ce seuil gouverne l'absorption des rayons gamma dans la matière.`,
    deepMeaning: `La masse de l'électron est un paramètre libre du Modèle Standard — elle n'est pas prédite théoriquement mais doit être mesurée. Elle est générée par le mécanisme de Higgs : l'électron interagit avec le champ de Higgs, et la force de cette interaction (le couplage de Yukawa, ye ≈ 2,94 × 10⁻⁶) détermine la masse. La petitesse du couplage de Yukawa de l'électron par rapport à celui du quark top (yt ≈ 1) constitue l'un des problèmes non résolus de « hiérarchie » de la physique des particules. L'électron semble être une particule vraiment élémentaire et ponctuelle.`,
    whyItMatters: `Gouverne tout le comportement atomique et chimique. Détermine la taille des atomes via a₀ = ħ²/(mee²k), les énergies de liaison des électrons, l'énergie des rayons X, et la profondeur de pénétration du rayonnement bêta.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Facteur g de l\'électron',
    value: '−2.002319304',
    unit: 'sans dimension',
    exact: '−2,00231930436256',
    category: 'Particule',
    description: 'La prédiction la plus précisément vérifiée de toute la science.',
    discoveredBy: 'Kusch & Foley (1948) · Calcul QED : Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `Le facteur g est le rapport du moment magnétique réel de l'électron à ce qu'il serait si l'électron était une simple particule de Dirac (g = 2 exactement). Le moment magnétique anormal est ae = (ge − 2)/2 = 0,001 159 65.`,
    simpleExample: `La prédiction théorique de ae depuis la QED nécessite la sommation de diagrammes de Feynman comportant jusqu'à 10 boucles (impliquant 12 672 diagrammes au quatrième ordre). Le résultat s'accorde avec l'expérience à 12 décimales — 1 partie par trillion.`,
    deepMeaning: `Le moment magnétique anormal de l'électron est la prédiction la plus précisément testée de toute la science. L'électrodynamique quantique (QED) calcule l'écart par rapport à g = 2 sous forme de série en puissances de la constante de structure fine α : ae = (α/2π) − 0,328(α/π)² + 1,181(α/π)³ − ... Toute déviation par rapport à la prédiction de la QED signalerait une nouvelle physique au-delà du Modèle Standard. Le succès de ce calcul constitue le plus grand triomphe de la physique théorique.`,
    whyItMatters: `Le plus grand triomphe de la physique théorique. Teste la QED plus rigoureusement que toute autre mesure. Fournit la détermination la plus précise de la constante de structure fine α.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Masse du proton',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,67262192595 × 10⁻²⁷ kg (938,272 MeV/c²)',
    category: 'Particule',
    description: 'Masse au repos du proton — 1836 fois plus lourd que l\'électron.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `En unités d'énergie : mpc² = 938,272 MeV. Le proton est 1836,15 fois plus lourd que l'électron. Ce rapport de masse est l'un des nombres les plus déterminants en physique atomique.`,
    simpleExample: `La grande masse du proton signifie que sa longueur d'onde de de Broglie à des énergies thermiques est ~43 fois plus petite que celle d'un électron — rendant les protons bien moins ondulaires quantiquement. C'est pourquoi l'approximation de Born-Oppenheimer fonctionne : les noyaux agissent comme des particules classiques.`,
    deepMeaning: `Contrairement à l'électron, le proton n'est pas fondamental — c'est une particule composite formée de deux quarks up et un quark down, liés par la force forte médiée par les gluons. Remarquablement, les masses des quarks ne représentent qu'environ 1% de la masse du proton. Les 99% restants proviennent de l'énergie cinétique des quarks et de l'énergie stockée dans les champs de gluons — une manifestation profonde de E = mc². La masse est avant tout de l'énergie. Le proton possède un rayon de charge fini de 0,8409 fm.`,
    whyItMatters: `Les protons définissent les numéros atomiques et la quasi-totalité de la masse atomique. Presque toute la masse de votre corps est en réalité l'énergie du champ de la chromodynamique quantique (QCD) à l'intérieur des protons et des neutrons. Si elle était significativement différente, la vie serait fondamentalement altérée.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Facteur g du proton',
    value: '5.586',
    unit: 'sans dimension',
    exact: '5,5856946893',
    category: 'Particule',
    description: 'Grand moment magnétique anormal qui prouvait que le proton est composite.',
    discoveredBy: 'Otto Stern (1933) · Prix Nobel 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `Pour un proton de Dirac simple, gp devrait valoir 2. Au lieu de cela, gp ≈ 5,586 — près de trois fois plus grand. Ce vaste moment magnétique anormal fut l'une des premières découvertes expérimentales pointant vers la structure composite du proton.`,
    simpleExample: `Si le proton était un point simple et sans structure interne, il se comporterait comme un aimant de force 2. Le fait qu'il soit 5,586 est la preuve numérique directe qu'il existe des charges internes en mouvement à l'intérieur de lui (les quarks).`,
    deepMeaning: `Otto Stern mesura gp ≈ 5,6 en 1933, à une époque où le proton était considéré comme une particule de Dirac fondamentale. Ce résultat stupéfia la communauté des physiciens. Le large moment magnétique anormal — et le moment magnétique non nul du neutron — constituèrent des preuves essentielles en faveur du modèle des quarks. Ces valeurs peuvent aujourd'hui être partiellement comprises via les calculs de la QCD, bien qu'un calcul entièrement précis à partir des premiers principes reste un défi majeur.`,
    whyItMatters: `Découverte historiquement décisive qui conduisit au modèle des quarks. Central pour le calcul des résonances magnétiques dans les noyaux atomiques (RMN/IRM). Test rigoureux de la théorie de la structure des hadrons.`
  },

  // ── PARTIE 6 : CONSTANTES DU NEUTRON ─────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Masse du neutron',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,67492750056 × 10⁻²⁷ kg (939,565 MeV/c²)',
    category: 'Nucléaire',
    description: 'Légèrement plus lourd que le proton — la différence de masse permet la désintégration bêta.',
    discoveredBy: 'James Chadwick (1932) · Prix Nobel 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `Le neutron est légèrement plus lourd que le proton — de 1,293 MeV/c². En unités d'énergie : mnc² = 939,565 MeV. Cette petite mais cruciale différence de masse signifie que le neutron libre est instable — il se désintègre par désintégration bêta.`,
    simpleExample: `Un neutron libre se désintègre en ~10 minutes (demi-vie 613,9 s). L'énergie libérée correspond à la différence de masse de 1,293 MeV. À l'intérieur des noyaux, les neutrons sont stabilisés par l'énergie de liaison nucléaire et ne se désintègrent pas.`,
    deepMeaning: `Si le neutron était plus léger que le proton par plus que la masse de l'électron, les protons libres se désintégreraient en neutrons et positrons — les atomes d'hydrogène seraient instables, modifiant fondamentalement toute la chimie. La différence de masse a déterminé le rapport neutrons/protons (n/p ≈ 1/7) figé durant la nucléosynthèse primordiale, fixant ainsi les abondances cosmiques de l'hydrogène (75%) et de l'hélium (25%).`,
    whyItMatters: `Gouverne la stabilité nucléaire, la désintégration bêta et l'abondance cosmique des éléments. La différence de masse du neutron est cosmologiquement essentielle à l'existence de l'hydrogène et donc de la vie.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Moment magnétique du neutron',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9,6623653 × 10⁻²⁷ J/T',
    category: 'Nucléaire',
    description: 'Moment magnétique négatif malgré une charge nulle — preuve de la structure interne en quarks.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `Le neutron possède un moment magnétique négatif (−1,913 magnétons nucléaires) malgré une charge électrique nette absolument nulle.`,
    simpleExample: `Une particule neutre sans structure interne ne devrait avoir aucun moment magnétique. Le fait que le neutron réagisse aux champs magnétiques est la preuve indiscutable qu'il contient des sous-particules chargées dont les effets ne s'annulent pas complètement.`,
    deepMeaning: `Un moment magnétique requiert soit une charge, soit une distribution de spin. Le moment magnétique négatif du neutron provient de sa structure interne en quarks : les deux quarks down (charge −e/3 chacun) et un quark up (charge +2e/3) sont en mouvement quantique permanent. La distribution spatiale des quarks chargés en rotation crée un moment magnétique net négatif. L'explication réside dans la sous-structure en quarks : le neutron contient un quark up et deux quarks down.`,
    whyItMatters: `L'un des résultats les plus saisissants de la physique nucléaire. Les limites actuelles sur le moment dipolaire électrique (EDM) du neutron sont utilisées pour tester la symétrie CP et expliquer l'asymétrie matière-antimatière de l'univers.`
  },

  // ── PARTIE 7 : CONSTANTES DU MUON ET DU TAU ──────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Masse du muon',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1,883531627 × 10⁻²⁸ kg (105,658 MeV/c²)',
    category: 'Particule',
    description: 'La copie plus lourde de l\'électron — « Qui a commandé ça ? »',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Le muon est 206,768 fois plus lourd que l'électron. Il porte la même charge et interagit de façon identique dans tous les aspects non gravitationnels — comme si la nature avait créé une deuxième copie plus lourde de l'électron.`,
    simpleExample: `Les muons des rayons cosmiques créés à 15 km d'altitude voyagent à ~0,99c. Classiquement, ils devraient se désintégrer avant d'atteindre le sol (durée de vie 2,2 μs → seulement 650 m de parcours). Pourtant, ils arrivent en grand nombre car la dilatation du temps relativiste (γ ≈ 7) prolonge leur durée de vie à ~15 μs.`,
    deepMeaning: `Le muon ne s'inscrit dans aucun tableau théorique simple. Son existence est simplement un fait de la nature. Il se désintègre selon : μ⁻ → e⁻ + ν̄e + νμ. Les atomes muoniques (μ⁻ remplaçant e⁻) orbitent ~207 fois plus près du noyau, les rendant extraordinairement sensibles à la structure nucléaire. Le moment magnétique anormal du muon (g-2) présente actuellement un écart de ~4σ par rapport à la théorie.`,
    whyItMatters: `Le moment magnétique anormal du muon est le principal indice expérimental de physique au-delà du Modèle Standard. Les muons sont utilisés pour imager l'intérieur des volcans et détecter des matières nucléaires en contrebande.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Moment magnétique anormal du muon',
    value: '0.0011659',
    unit: 'sans dimension',
    exact: '0,00116592059',
    category: 'Particule',
    description: 'Le principal indice expérimental de physique au-delà du Modèle Standard.',
    discoveredBy: 'Expérience Muon g-2, Fermilab',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Comme l'électron, le muon possède un moment magnétique anormal. ae = (ge − 2)/2 = 0,001 165 920 59. Il mesure l'écart par rapport à la prédiction de Dirac g = 2.`,
    simpleExample: `Contrairement à l'électron, le muon est sensible aux contributions virtuelles de particules plus lourdes car les corrections quantiques évoluent en (mμ/M)² où M est la masse de la particule virtuelle.`,
    deepMeaning: `Il existe un écart d'environ 4,2 déviations standard entre la théorie et l'expérience — tentant proche du seuil de 5 sigma pour une découverte définitive. Si confirmé, ce serait la première preuve claire de physique au-delà du Modèle Standard — potentiellement des particules supersymétriques ou des dimensions supplémentaires. La résolution dépend des calculs de la QCD sur réseau.`,
    whyItMatters: `L'un des sujets les plus brûlants de la physique des particules. Si confirmé, cela nécessiterait une réécriture fondamentale de notre compréhension du monde subatomique.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Masse du lepton tau',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3,16754 × 10⁻²⁷ kg (1776,86 MeV/c²)',
    category: 'Particule',
    description: 'Le lepton chargé le plus lourd — 3477 fois plus lourd que l\'électron.',
    discoveredBy: 'Martin Perl et al. (1975) · Prix Nobel 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Le lepton tau est le troisième et le plus lourd des leptons chargés — 3477 fois plus lourd que l'électron et 16,8 fois plus lourd que le muon.`,
    simpleExample: `Le tau est si lourd (1,78 GeV) qu'il peut se désintégrer en hadrons — pions et kaons — contrairement au muon. Sa durée de vie extrêmement courte (~2,9 × 10⁻¹³ s) signifie qu'il ne parcourt que ~87 μm avant de se désintégrer, exigeant une précision à l'échelle du micromètre pour être observé.`,
    deepMeaning: `Le tau est le lepton chargé de la troisième génération. Pourquoi il existe exactement trois générations de leptons, et pourquoi leurs masses sont si radicalement différentes, est l'un des mystères les plus profonds du Modèle Standard. La hiérarchie de masses (0,511 MeV → 105,7 MeV → 1776,9 MeV) n'a aucune explication théorique. Le neutrino tau ne fut pas directement détecté avant l'an 2000.`,
    whyItMatters: `L'existence de trois générations de leptons est un profond mystère de la nature. Le tau et son neutrino furent essentiels à l'établissement du Modèle Standard comme théorie cohérente.`
  },

  // ── PARTIE 8 : CONSTANTES PHYSICO-CHIMIQUES ───────────────────────────────

  {
    symbol: 'R',
    name: 'Constante molaire des gaz',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8,314462618 J/(mol·K)',
    category: 'Thermodynamique',
    description: 'R = NA × k — constante de travail de la thermodynamique et de la chimie.',
    discoveredBy: 'Divers (XIXᵉ siècle)',
    formula: 'PV = nRT',
    whatItSays: `R est la constante de Boltzmann mise à l'échelle molaire. La loi des gaz parfaits PV = nRT combine la loi de Boyle, la loi de Charles et la loi d'Avogadro en une seule équation.`,
    simpleExample: `La vitesse du son dans un gaz : v = √(γRT/M). Pour l'air (M = 0,029 kg/mol, γ = 1,4) à 20°C, v ≈ 343 m/s. Cela montre que la vitesse du son est fondamentalement déterminée par R et la température.`,
    deepMeaning: `Les capacités thermiques molaires des gaz parfaits sont des multiples simples de R : Cv = (3/2)R pour les gaz monoatomiques, (5/2)R pour les gaz diatomiques. En mécanique statistique, l'entropie d'un gaz parfait (équation de Sackur-Tetrode) contient R. Il apparaît dans l'entropie de mélange, l'équation de Clausius-Clapeyron, l'équation de van't Hoff pour la pression osmotique et l'équation de Nernst pour les potentiels d'électrode.`,
    whyItMatters: `La constante universelle de la thermodynamique. Toute loi sur les gaz, tout calcul thermodynamique, tout modèle atmosphérique et tout calcul d'énergie de réaction chimique utilise R.`
  },

  {
    symbol: 'σ',
    name: 'Constante de Stefan-Boltzmann',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5,670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamique',
    description: 'Puissance rayonnée par un corps noir — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `Un corps noir parfait rayonne une puissance électromagnétique par unité de surface P/A = σT⁴. σ est dérivée de constantes plus fondamentales : σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `La température de surface du Soleil, ~5778 K, donne une puissance de sortie de σ × T⁴ × (4πR_soleil²) ≈ 3,83 × 10²⁶ W. Votre corps (T ≈ 310 K) rayonne σ × (310)⁴ × (1,7 m²) ≈ 520 W — dont environ la moitié est compensée par la chaleur métabolique.`,
    deepMeaning: `La dépendance en T⁴ résulte de l'intégration du spectre de corps noir de Planck sur toutes les fréquences. Elle signifie que doubler la température augmente la puissance rayonnée d'un facteur 2⁴ = 16. Le fond diffus cosmologique (CMB) — rayonnement relique du Big Bang — est un corps noir parfait à T = 2,725 K. La température effective de la Terre est déterminée par l'équilibre entre le rayonnement solaire et l'émission σT⁴.`,
    whyItMatters: `Gouverne la luminosité stellaire, le bilan énergétique de la Terre et le climat, les caméras thermiques, la pyrométrie optique et la structure de température de l'univers.`
  },

  {
    symbol: 'b',
    name: 'Constante de déplacement de Wien',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2,897771955 × 10⁻³ m·K',
    category: 'Thermodynamique',
    description: 'Relie la longueur d\'onde de pic d\'un corps noir à sa température.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `La loi de déplacement de Wien relie la longueur d'onde maximale du rayonnement de corps noir à la température : λ_max × T = b. Plus un objet est chaud, plus sa longueur d'onde de pic est courte (plus bleue).`,
    simpleExample: `Le Soleil (T = 5778 K) a un pic à λ_max ≈ 502 nm — la lumière verte. Les yeux humains ont évolué pour être les plus sensibles précisément dans cette gamme. Le corps humain (T = 310 K) émet principalement à λ_max ≈ 9,4 μm — infrarouge moyen, d'où le fonctionnement des caméras thermiques.`,
    deepMeaning: `La version en fréquence de pic donne f_max = b' × T, avec b' = 5,879 × 10¹⁰ Hz/K. Notez que la fréquence de pic ne correspond pas simplement à c/λ_max car les distributions en longueur d'onde et en fréquence ont des formes différentes. Historiquement, le rapport des constantes de rayonnement fut utilisé pour mesurer h et k indépendamment.`,
    whyItMatters: `Fondamentale pour l'imagerie thermique, la mesure de la température des étoiles, la climatologie et la physique du rayonnement de corps noir.`
  },

  // ── PARTIE 9 : CONSTANTES GRAVITATIONNELLES ET ÉLECTROFAIBLES ─────────────

  {
    symbol: 'G',
    name: 'Constante gravitationnelle',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6,67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universel',
    description: 'La force la plus faible — la constante fondamentale la moins bien connue.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Loi de Newton : F = Gm₁m₂/r². En Relativité Générale, G apparaît dans les équations de champ d'Einstein gouvernant la façon dont la matière courbe l'espace-temps.`,
    simpleExample: `La gravité entre deux masses de 1 kg séparées d'1 mètre : F = 6,674 × 10⁻¹¹ N — environ le poids d'une bactérie. La force électromagnétique entre deux protons est 10³⁶ fois plus forte. C'est pourquoi la gravité est négligeable à l'échelle atomique.`,
    deepMeaning: `G est la constante fondamentale la moins bien connue — connue à seulement 5 chiffres significatifs. C'est parce que la gravité est la force la plus faible : la mesurer en laboratoire signifie lutter contre le bruit sismique et les forces résiduelles. Le facteur 8πG/c⁴ quantifie la courbure de l'espace-temps par unité d'énergie. La longueur de Planck lP = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m est l'échelle où la gravité quantique est attendue — 10²⁰ fois plus petite qu'un proton.`,
    whyItMatters: `Contrôle tous les phénomènes gravitationnels — d'un objet lancé aux trous noirs et à la structure à grande échelle de l'univers. L'absence d'une théorie quantique de la gravité est le problème non résolu le plus profond de la physique.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Constante de couplage de Fermi',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1,1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particule',
    description: 'Force de couplage de la force nucléaire faible — gouverne la désintégration bêta.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF est la constante de couplage de la force nucléaire faible dans la théorie effective des quatre fermions de Fermi de la désintégration bêta : n → p + e⁻ + ν̄e. La section efficace de l'interaction faible est proportionnelle à GF².`,
    simpleExample: `L'interaction faible est si faible qu'un neutrino peut traverser une année-lumière de plomb avec seulement 50% de chances d'être arrêté. Pourtant, elle est essentielle à l'énergie du Soleil — la chaîne pp commence par une interaction faible.`,
    deepMeaning: `Contrairement à e², GF a les dimensions d'une énergie⁻², rendant la théorie de Fermi non renormalisable. La solution fut l'unification électrofaible (Prix Nobel 1979) : la force faible est médiée par des bosons W et Z massifs (~80–91 GeV). À basse énergie, l'échange d'un boson W ressemble à une interaction ponctuelle. La grande masse du W supprime les interactions faibles, rendant la désintégration bêta lente malgré un couplage sous-jacent comparable à celui de l'électromagnétisme.`,
    whyItMatters: `Gouverne toute la désintégration bêta, les interactions des neutrinos et l'unification électrofaible. La force faible alimente la chaîne pp du Soleil et est responsable de la synthèse nucléaire des éléments lourds dans les étoiles.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Angle de mélange électrofaible',
    value: '0.2229',
    unit: 'sans dimension',
    exact: '0,22290',
    category: 'Particule',
    description: 'Quantifie le mélange entre les forces électromagnétique et faible.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `L'angle de mélange électrofaible θW (angle de Weinberg) paramètre le mélange entre le photon et le boson Z dans l'unification électrofaible. e = g sin θW = g' cos θW.`,
    simpleExample: `La valeur sin²θW ≈ 0,231 est mesurée avec une précision extraordinaire dans les collisionneurs de particules (LHC) et à partir des expériences de violation de parité atomique.`,
    deepMeaning: `Dans l'unification électrofaible, le photon et le boson Z sont des mélanges de deux bosons de jauge sous-jacents (W⁰ et B). La variation de sin²θW avec l'énergie est précisément prédite par le Modèle Standard et mesurée pour confirmer les corrections radiatives électrofaibles — un test rigoureux de la théorie.`,
    whyItMatters: `Un paramètre fondamental du Modèle Standard qui relie les propriétés de la force électromagnétique et de la force nucléaire faible.`
  },

  // ── PARTIE 11 : CONSTANTES ATOMIQUES ET NUCLÉAIRES SUPPLÉMENTAIRES ─────────

  {
    symbol: 'κ',
    name: 'Quantum de circulation',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3,6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomique',
    description: 'Unité fondamentale de circulation pour un électron — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `La circulation d'un fluide quantique (comme l'hélium superfluide ou un supraconducteur) est quantifiée en unités de h/m. Pour les supraconducteurs, la particule concernée est une paire de Cooper de masse 2me.`,
    simpleExample: `Dans l'hélium-4 superfluide, les vortex portent une circulation en multiples de h/m_He. L'hélium superfluide en rotation développe un réseau de ces vortex quantifiés — analogue au réseau de vortex d'Abrikosov dans les supraconducteurs de type II.`,
    deepMeaning: `La quantification de la circulation est une conséquence directe de l'univocité de la fonction d'onde en mécanique quantique. Si un superfluide tourne, la phase de la fonction d'onde macroscopique doit retrouver la même valeur après avoir parcouru toute boucle fermée. Cela contraint la circulation à être quantifiée : Γ = n × h/m.`,
    whyItMatters: `Explique le comportement des superfluides et des supraconducteurs. Le quantum de circulation apparaît également dans l'effet Aharonov-Bohm, reliant la phase quantique au flux magnétique.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Section efficace de Thomson',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6,6524587051 × 10⁻²⁹ m²',
    category: 'Atomique',
    description: 'Surface effective présentée par un électron libre à un photon incident.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `Lorsque des photons de basse énergie (énergie du photon ≪ mec²) diffusent sur un électron libre, la section efficace totale de diffusion est σT = (8π/3) × re², où re est le rayon classique de l'électron.`,
    simpleExample: `Représentez l'électron comme présentant une « surface cible » de σT à un photon incident. Si l'on tire des photons sur une boîte d'électrons, le libre parcours moyen avant diffusion est λ = 1/(nσT).`,
    deepMeaning: `La section efficace de Thomson est la limite de diffusion élastique de la formule de diffusion Compton plus générale. Lorsque l'énergie du photon Eγ ≪ 0,511 MeV, le recul de l'électron est négligeable et la diffusion est purement classique. Dans les intérieurs stellaires, la pression de radiation est transmise par la diffusion Thomson photon-électron. La luminosité d'Eddington — la luminosité maximale qu'une étoile peut avoir avant que la pression de radiation ne surmonte la gravité — dépend de σT.`,
    whyItMatters: `La diffusion Thomson explique pourquoi le ciel est bleu (à basses fréquences) et pourquoi la couronne solaire est visible lors des éclipses. Le fond diffus cosmologique (CMB) fut créé lorsque l'univers fut suffisamment refroidi pour que les électrons se combinent avec les protons, car avant cela l'univers était opaque en raison de la diffusion Thomson.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Rapport charge-masse de l\'électron',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1,75882000838 × 10¹¹ C/kg',
    category: 'Atomique',
    description: 'Détermine la réponse d\'un électron aux forces électromagnétiques.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `C'est le rapport de la charge de l'électron à sa masse. Il détermine la force de la réponse d'un électron aux forces électromagnétiques.`,
    simpleExample: `Dans un tube cathodique (TRC), la déviation du faisceau d'électrons par des champs électriques et magnétiques est régie par e/me. La grande valeur de e/me signifie que les électrons sont bien plus facilement déviés que les ions.`,
    deepMeaning: `La célèbre expérience de rayons cathodiques de Thomson prouva que les rayons cathodiques étaient des flux de particules chargées négativement avec un rapport ~1800 fois supérieur à celui des ions d'hydrogène. La fréquence cyclotron ωc = eB/me est directement proportionnelle à e/me. Ce rapport apparaît également dans la fréquence plasma ωp² = ne²/(meε₀), qui gouverne la façon dont les ondes radio se réfléchissent sur la ionosphère.`,
    whyItMatters: `Fondamental pour la spectrométrie de masse, les accélérateurs de particules et l'électronique sous vide. Gouverne le chauffage par résonance cyclotron électronique dans les plasmas de fusion.`
  },

  {
    symbol: 'M(e)',
    name: 'Masse molaire de l\'électron',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5,4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomique',
    description: 'Masse d\'une mole d\'électrons — me × NA.',
    discoveredBy: 'Dérivée',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `La masse d'une mole d'électrons est extrêmement faible — environ 0,55 milligramme par mole.`,
    simpleExample: `En électrochimie, lors du calcul des variations de masse aux électrodes pendant l'électrolyse, la masse molaire de l'électron est négligeable par rapport aux masses ioniques.`,
    deepMeaning: `Dans les mesures de masse atomique de haute précision, les énergies de liaison et la masse du nuage électronique doivent être prises en compte. La masse atomique d'un atome est M(atome) = M(noyau) + Z × M(e) − (énergie de liaison électronique)/c². La spectrométrie de masse par piège de Penning nécessite cette correction pour atteindre 10 chiffres significatifs.`,
    whyItMatters: `Essentielle pour les comparaisons de masses les plus précises en physique et pour tester la cohérence des définitions des unités du SI.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Rapport masse électron-proton',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'sans dimension',
    exact: '5,44617021487 × 10⁻⁴',
    category: 'Atomique',
    description: 'L\'électron est 1836,15 fois plus léger que le proton.',
    discoveredBy: 'Dérivé',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `Le rapport de la masse d'un électron à celle d'un proton. Ce rapport est approximativement 1/1836.`,
    simpleExample: `Parce que me/mp ≪ 1, les électrons se déplacent bien plus rapidement que les noyaux dans les molécules. Cela nous permet de résoudre l'équation de Schrödinger électronique à positions nucléaires fixes — l'approximation de Born-Oppenheimer.`,
    deepMeaning: `Ce rapport sépare les échelles d'énergie chimique (~eV) des échelles d'énergie nucléaire (~MeV). Il est également critique en physique stellaire : la limite de Chandrasekhar — la masse maximale d'une naine blanche — dépend directement de (mp/me). Les variations au cours du temps cosmique sont testées via les spectres d'absorption de l'hydrogène moléculaire dans des quasars lointains.`,
    whyItMatters: `L'un des nombres sans dimension les plus déterminants de la nature. Il gouverne la structure atomique, la hiérarchie des échelles d'énergie et la stabilité des étoiles.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Rapport charge-masse du proton',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9,5788331442 × 10⁷ C/kg',
    category: 'Atomique',
    description: 'Rapport de la charge élémentaire à la masse du proton — 1836 fois plus petit que celui de l\'électron.',
    discoveredBy: 'Dérivé',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `Le rapport de la charge élémentaire à la masse du proton. Il dicte la façon dont les protons répondent aux champs magnétiques.`,
    simpleExample: `La fréquence cyclotron du proton dans un champ magnétique est 1836 fois plus basse que celle de l'électron. C'est pourquoi l'IRM utilise des ondes radiofréquences (gamme MHz) plutôt que des micro-ondes.`,
    deepMeaning: `En spectrométrie de masse, les ions sont séparés par leur rapport charge-masse. Le e/mp du proton sert d'étalon de calibration fondamental. La spectrométrie de masse par résonance cyclotron (pièges de Penning) utilise ce rapport pour mesurer les masses atomiques avec une précision extrême. En physique des accélérateurs, la rigidité d'un faisceau de protons détermine le rayon de courbure dans les champs magnétiques.`,
    whyItMatters: `Fondamental pour l'imagerie médicale (IRM), la spectrométrie de masse et la conception des accélérateurs de particules à haute énergie comme le LHC.`
  },

  {
    symbol: 'M(p)',
    name: 'Masse molaire du proton',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00727646662 × 10⁻³ kg/mol',
    category: 'Atomique',
    description: 'La masse d\'une mole de protons.',
    discoveredBy: 'Dérivée',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `La masse d'une mole de protons est d'environ 1,007 g/mol.`,
    simpleExample: `Elle est légèrement inférieure à 1 g/mol car l'unité de masse atomique est définie comme 1/12 de la masse du carbone-12, qui comprend l'énergie de liaison et les contributions de la masse des électrons.`,
    deepMeaning: `En physique nucléaire, la valeur Q d'une réaction nucléaire — l'énergie libérée ou absorbée — est calculée à partir de la différence de masse en utilisant les masses molaires. La masse molaire du proton est une référence fondamentale dans ces calculs.`,
    whyItMatters: `Fondamentale pour les calculs stœchiométriques en chimie nucléaire et en astrophysique.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Rapport masse neutron-électron',
    value: '1838.68',
    unit: 'sans dimension',
    exact: '1838,68366214',
    category: 'Nucléaire',
    description: 'Le neutron est 1838,68 fois plus lourd que l\'électron.',
    discoveredBy: 'Dérivé',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `Le rapport de la masse du neutron à celle de l'électron. Il est légèrement supérieur au rapport proton-électron.`,
    simpleExample: `Le neutron est plus lourd qu'un proton de 2,531 masses d'électron. Cette différence de masse correspond à 1,293 MeV — l'énergie libérée lors de la désintégration bêta du neutron.`,
    deepMeaning: `Le fait que ce rapport soit supérieur au rapport proton-électron rend les neutrons libres instables. Si le neutron était plus léger que le proton de plus que la masse de l'électron, l'hydrogène n'existerait pas comme élément stable. Ce rapport est mesuré avec une précision extraordinaire à l'aide de pièges de Penning.`,
    whyItMatters: `Gouverne la stabilité des blocs de construction de l'univers.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Rapport masse neutron-proton',
    value: '1.00138',
    unit: 'sans dimension',
    exact: '1,00137841931',
    category: 'Nucléaire',
    description: 'Le neutron est légèrement plus lourd que le proton de 0,138%.',
    discoveredBy: 'Dérivé',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `Le neutron est plus lourd que le proton d'une fraction de 0,138%.`,
    simpleExample: `Cette infime différence de masse (1,293 MeV/c²) a déterminé qu'environ 25% de la matière baryonique est devenue de l'hélium-4 lors du Big Bang, le reste demeurant de l'hydrogène.`,
    deepMeaning: `Dans le jeune univers, le rapport d'équilibre neutrons/protons suivait le facteur de Boltzmann. Au refroidissement de l'univers et au gel des interactions faibles, le rapport n/p fut figé à environ 1/7. Si la différence de masse avait été légèrement différente, l'évolution stellaire et la chimie auraient été radicalement modifiées.`,
    whyItMatters: `L'abondance cosmique observée d'hélium de ~25% est l'une des plus grandes confirmations du modèle du Big Bang, grâce à cette constante.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Facteur g du neutron',
    value: '−3.826',
    unit: 'sans dimension',
    exact: '−3,82608545',
    category: 'Nucléaire',
    description: 'Révèle la structure interne en quarks du neutron électriquement neutre.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `Le facteur g du neutron est −3,826. Pour une particule de Dirac sans structure interne et de charge nulle, il devrait valoir exactement 0.`,
    simpleExample: `Le moment magnétique non nul du neutron neutre fut l'un des résultats les plus saisissants de la physique nucléaire, prouvant que des particules neutres peuvent avoir des composants internes.`,
    deepMeaning: `Le neutron contient un quark up et deux quarks down. Leurs moments magnétiques et leur mouvement orbital produisent le moment magnétique négatif net. Le modèle des quarks non relativiste prédit g ≈ −3,67 ; la discordance est due aux corrections relativistes et aux effets des gluons. Des mesures précises testent les calculs de la QCD sur la structure des hadrons.`,
    whyItMatters: `Test rigoureux du Modèle Standard et de la structure des quarks. Également utilisé pour placer des limites sur le moment dipolaire électrique du neutron.`
  },

  {
    symbol: 'M(n)',
    name: 'Masse molaire du neutron',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00866491560 × 10⁻³ kg/mol',
    category: 'Nucléaire',
    description: 'La masse d\'une mole de neutrons.',
    discoveredBy: 'Dérivée',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `Une mole de neutrons pèse environ 1,00866 grammes.`,
    simpleExample: `Bien que les neutrons libres se désintègrent en 10 minutes, la masse molaire du neutron est essentielle pour calculer la « courbe d'énergie de liaison » qui détermine la quantité d'énergie que les centrales nucléaires peuvent produire.`,
    deepMeaning: `L'énergie de liaison nucléaire par nucléon est calculée à partir des masses atomiques : B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². La masse plus grande du neutron par rapport au proton affecte chaque calcul d'énergie de liaison nucléaire.`,
    whyItMatters: `Fondement du génie nucléaire et de l'étude des isotopes nucléaires.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Longueur d\'onde de Compton du neutron',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1,31959090581 × 10⁻¹⁵ m',
    category: 'Nucléaire',
    description: 'Échelle de longueur naturelle de la physique nucléaire — h/mnc.',
    discoveredBy: 'Dérivée',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `La longueur d'onde d'un photon dont l'énergie est égale à l'énergie de masse au repos du neutron. Elle vaut environ 1,32 femtomètres.`,
    simpleExample: `Cette longueur d'onde est comparable à la taille du neutron lui-même (~0,8 fm) et à la portée des forces nucléaires (~1,4 fm).`,
    deepMeaning: `Les échelles de distance caractéristiques de la physique nucléaire sont fixées par les longueurs d'onde de Compton des nucléons et des pions. En dessous de cette échelle, les effets de la théorie quantique des champs comme la polarisation du vide deviennent importants. Dans les expériences de diffusion de neutrons utilisées pour étudier les structures des protéines, la longueur d'onde des neutrons est accordée pour correspondre aux espacements interatomiques.`,
    whyItMatters: `Fixe l'échelle en dessous de laquelle le neutron ne peut plus être traité comme une simple particule non relativiste.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Longueur d\'onde de Compton du muon',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1,173444110 × 10⁻¹⁴ m',
    category: 'Particule',
    description: 'Longueur d\'onde d\'un photon dont l\'énergie est égale à la masse au repos du muon.',
    discoveredBy: 'Dérivée',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `La longueur d'onde de Compton du muon est d'environ 11,7 fm — plus petite que celle de l'électron d'un facteur égal au rapport de masse (206,77).`,
    simpleExample: `Dans les atomes muoniques, le muon orbite bien plus près du noyau qu'un électron, car le rayon de Bohr du muon est inversement proportionnel à sa masse.`,
    deepMeaning: `L'hydrogène muonique a le muon orbitant à ~256 fm — assez proche du proton pour que sa taille finie affecte significativement les niveaux d'énergie. C'est pourquoi la spectroscopie de l'hydrogène muonique fournit les mesures les plus précises du rayon de charge du proton.`,
    whyItMatters: `A conduit au « problème du rayon du proton », un sujet majeur de la physique atomique de précision moderne.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Facteur g du muon',
    value: '−2.00233',
    unit: 'sans dimension',
    exact: '−2,0023318418',
    category: 'Particule',
    description: 'Sonde cruciale pour des particules lourdes non encore découvertes.',
    discoveredBy: 'Calcul expérimental / QED',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Comme l'électron, le muon possède un moment magnétique anormal ae = 0,001 165 920 59.`,
    simpleExample: `L'expérience g-2 du Fermilab mesure cette valeur pour vérifier si des particules lourdes « virtuelles » issues de la supersymétrie ou d'autres théories influencent le spin magnétique du muon.`,
    deepMeaning: `La valeur expérimentale actuelle est en désaccord avec la prédiction du Modèle Standard d'environ 4,2 déviations standard. La résolution dépend de la précision des calculs de la polarisation du vide hadronique par la QCD sur réseau.`,
    whyItMatters: `L'une des discordances les plus significatives actuellement connues entre le Modèle Standard et l'expérience.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Masse du deutéron',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3,3435837768 × 10⁻²⁷ kg (1875,613 MeV/c²)',
    category: 'Nucléaire',
    description: 'Noyau de l\'hydrogène lourd — l\'état lié nucléaire le plus simple.',
    discoveredBy: 'Harold Urey (1931) · Prix Nobel 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Le deutéron est le noyau du deutérium (un proton plus un neutron). Son énergie de liaison est de 2,224 MeV.`,
    simpleExample: `L'énergie de liaison est remarquablement faible (comparer avec l'hélium-4 : 28,3 MeV). Cette fragilité a créé le « goulot d'étranglement du deutérium » lors du Big Bang, retardant la formation d'éléments plus lourds.`,
    deepMeaning: `Le deutéron est l'état lié nucléaire le plus simple — analogue à l'atome d'hydrogène. Son moment quadrupolaire non nul prouve que la force nucléaire possède une composante tensorielle issue de l'échange de pions. La première étape de la fusion dans le Soleil (p + p → d + e⁺ + νe) est extraordinairement lente ; la longévité du Soleil est due à ce goulot d'étranglement.`,
    whyItMatters: `Banc d'essai fondamental de la théorie de la force nucléaire. Le deutérium est utilisé comme modérateur de neutrons dans les réacteurs nucléaires et dans la recherche pharmaceutique.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Moment magnétique du deutéron',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4,330735094 × 10⁻²⁷ J/T',
    category: 'Nucléaire',
    description: 'Moment magnétique du noyau le plus simple.',
    discoveredBy: 'Physique nucléaire / Études RMN',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Le moment magnétique du deutéron est de 0,857 magnétons nucléaires.`,
    simpleExample: `Si les spins étaient simplement alignés, la somme serait μp + μn = 0,880 μN. La valeur réelle est 0,857 μN. Cette discordance est précisément expliquée par le moment magnétique orbital de l'admixture de l'onde D dans la fonction d'onde.`,
    deepMeaning: `L'accord entre le moment magnétique calculé et mesuré du deutéron valide les modèles de force nucléaire. La RMN du deutéron est utilisée pour étudier la dynamique moléculaire.`,
    whyItMatters: `Belle confirmation du modèle de structure nucléaire et de la théorie de l'échange de pions.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Facteur g du deutéron',
    value: '0.8574',
    unit: 'sans dimension',
    exact: '0,8574382335',
    category: 'Nucléaire',
    description: 'Relie le moment magnétique du deutéron au magnéton nucléaire.',
    discoveredBy: 'Dérivé',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `Contrairement à l'électron (g ≈ −2) ou au proton (g ≈ 5,586), le facteur g du deutéron est inférieur à 1.`,
    simpleExample: `Cette valeur reflète l'annulation partielle entre les moments magnétiques du proton et du neutron au sein du noyau.`,
    deepMeaning: `Des mesures de précision permettent d'extraire le moment magnétique du neutron par le biais de corrections incluant les courants d'échange mésoniques et les effets relativistes.`,
    whyItMatters: `Utilisé pour valider des modèles de force nucléaire complexes au niveau de 0,1%.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Masse de l\'hélion',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5,006412778 × 10⁻²⁷ kg (2808,391 MeV/c²)',
    category: 'Nucléaire',
    description: 'Noyau de l\'hélium-3 — deux protons et un neutron.',
    discoveredBy: 'Données expérimentales de physique nucléaire',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `L'hélion est le noyau de l'hélium-3. Son énergie de liaison est de 7,718 MeV.`,
    simpleExample: `L'hélium-3 superfluide est un système modèle pour la supraconductivité non conventionnelle et les états quantiques topologiques.`,
    deepMeaning: `He-3 est le noyau miroir du triton. La petite différence de masse entre eux teste la symétrie de charge des forces nucléaires. Le facteur g de l'hélion est −4,255 μN — reflétant la contribution dominante du neutron unique.`,
    whyItMatters: `Utilisé dans les détecteurs de neutrons à grande section efficace et pour l'IRM pulmonaire hyperpolarisée.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Masse de la particule alpha',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6,6446573357 × 10⁻²⁷ kg (3727,379 MeV/c²)',
    category: 'Nucléaire',
    description: 'Noyau d\'hélium-4 — extraordinairement stable, énergie de liaison de 28,3 MeV.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `La particule alpha est le noyau d'hélium-4. Son énergie de liaison est de 7,074 MeV par nucléon — proche du sommet de la courbe d'énergie de liaison.`,
    simpleExample: `Les demi-vies de la désintégration alpha couvrent 20 ordres de grandeur (de 0,3 μs à 14 milliards d'années). Toutes s'expliquent par la théorie de l'effet tunnel quantique de Gamow.`,
    deepMeaning: `La stabilité exceptionnelle de la particule alpha explique pourquoi elle est émise préférentiellement lors de la désintégration radioactive. Elle a un spin nul et un moment magnétique nul — un noyau à couches complètement fermées. Le processus triple-alpha (3α → ¹²C) nécessite une résonance dans le carbone-12 à 7,65 MeV (l'état de Hoyle). Sans cette résonance, il n'existerait pas de carbone.`,
    whyItMatters: `Produit de la plupart des désintégrations des noyaux lourds. Le processus triple-alpha est la source de tout le carbone de l'univers. Utilisé en radiothérapie alpha ciblée pour le traitement du cancer.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Constante de masse atomique',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1,66053906892 × 10⁻²⁷ kg (931,494 MeV/c²)',
    category: 'Thermodynamique',
    description: '1/12 de la masse du carbone-12 — l\'unité naturelle des masses atomiques.',
    discoveredBy: 'Standard international (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `L'unité de masse atomique (u, ou dalton, Da) est définie comme 1/12 de la masse d'un atome de carbone-12.`,
    simpleExample: `Carbone-12 = 12 u exactement. Hydrogène = 1,0078 u. Une protéine de 50 kDa a une masse de 50 000 × 1,661 × 10⁻²⁷ kg.`,
    deepMeaning: `La conversion 1 u = 931,494 MeV/c² est l'une des plus utiles en physique nucléaire. Les différences de masse nucléaire de l'ordre du millième d'unité de masse atomique libèrent des énergies de l'ordre du MeV. Le choix du carbone-12 fut un compromis de 1961 entre les communautés de physique et de chimie.`,
    whyItMatters: `Fondement de la physique nucléaire, de la spectrométrie de masse et de toute la biochimie où les masses des protéines sont exprimées en daltons.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Constante de masse molaire',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1,00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamique',
    description: 'Relie l\'unité de masse atomique à la masse molaire.',
    discoveredBy: 'Redéfinition du SI (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu relie l'unité de masse atomique à la masse molaire : Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Parce que Mu ≈ 1 g/mol, la masse molaire d'une substance en grammes est égale à sa masse atomique relative (par exemple, l'eau est ~18,015 g/mol).`,
    deepMeaning: `Historiquement exactement 1 g/mol. Après 2019, NA et mu sont définis indépendamment, de sorte que Mu n'est plus exactement 1 g/mol — il s'en écarte d'environ 10⁻⁹. C'est négligeable à des fins pratiques, mais un rappel que le nouveau SI est fondamentalement différent.`,
    whyItMatters: `Fondement des calculs stœchiométriques en chimie. Toute conversion mole-gramme en dépend.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Constante de Planck molaire',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3,990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamique',
    description: 'Constante de Planck mise à l\'échelle molaire — NA × h.',
    discoveredBy: 'Dérivée',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `L'énergie par mole de photons par unité de fréquence.`,
    simpleExample: `En photochimie, l'énergie d'un « Einstein » (une mole de photons) est NAhf.`,
    deepMeaning: `Apparaît dans l'équation de Sackur-Tetrode pour l'entropie absolue d'un gaz parfait. Elle relie la fonction de partition de la mécanique quantique aux grandeurs thermodynamiques macroscopiques à l'échelle molaire.`,
    whyItMatters: `Fondamentale pour la photochimie et la thermodynamique statistique.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Volume molaire du gaz parfait (CNT)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22,41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamique',
    description: 'Volume occupé par une mole de gaz parfait aux conditions normales de température et de pression.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `À 0°C et 101 325 Pa, une mole de tout gaz parfait occupe 22,413... litres.`,
    simpleExample: `Un litre d'hydrogène et un litre d'oxygène aux CNT contiennent exactement le même nombre de molécules (2,688 × 10²²).`,
    deepMeaning: `D'après la loi des gaz parfaits : V = nRT/P. Ce « volume molaire » permet une conversion rapide entre la quantité de gaz et le volume. Le fait que tous les gaz parfaits aient le même volume molaire aux CNT fut une idée révolutionnaire d'Avogadro.`,
    whyItMatters: `L'un des nombres les plus pratiquement utiles en chimie pour la stœchiométrie des gaz.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Constante de Loschmidt',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2,686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamique',
    description: 'Nombre de molécules par mètre cube d\'un gaz parfait aux CNT.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `Le nombre de molécules d'air au niveau de la mer est d'environ 2,687 × 10²⁵ par mètre cube.`,
    simpleExample: `Le libre parcours moyen d'une molécule d'air aux CNT est d'environ 66 nm. La fréquence de collision est ~10¹⁰ par seconde.`,
    deepMeaning: `Loschmidt estima cette valeur en 1865 à l'aide de la viscosité des gaz et du diamètre moléculaire. Ce fut la première estimation sérieuse du nombre de molécules dans un volume macroscopique et la première preuve directe que les atomes avaient des dimensions définies. La diffusion Rayleigh (pourquoi le ciel est bleu) est proportionnelle à n₀.`,
    whyItMatters: `Fondamentale pour la physique atmosphérique et l'histoire de la théorie atomique.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Volume molaire du silicium',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1,205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamique',
    description: 'Volume occupé par une mole d\'atomes de silicium dans son réseau cristallin.',
    discoveredBy: 'Projet Avogadro',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `Le volume d'une mole de silicium solide dans sa structure cubique diamant.`,
    simpleExample: `Mesurez le paramètre de maille 'a' par diffraction des rayons X et la densité macroscopique 'ρ' pour obtenir NA à 2 parties par milliard.`,
    deepMeaning: `Le silicium est le matériau de référence pour la méthode de densité cristalline aux rayons X. Le Projet Avogadro a utilisé des sphères de silicium de 1 kg d'une perfection extraordinaire pour redéfinir le kilogramme en 2019. Il relie la cristallographie aux rayons X aux étalons de masse macroscopiques.`,
    whyItMatters: `Central dans la redéfinition du kilogramme en 2019.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Masse molaire du carbone-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12,0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamique',
    description: 'Masse d\'une mole d\'atomes de carbone-12.',
    discoveredBy: 'Redéfinition du SI (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `Avant 2019, cette valeur était exactement 12 g/mol. Désormais, dans le nouveau SI, elle présente une légère incertitude mesurée.`,
    simpleExample: `L'écart par rapport à exactement 12 g/mol est d'environ 10 parties par milliard — complètement négligeable pour la chimie mais critique pour la métrologie.`,
    deepMeaning: `Reflète l'incompatibilité entre la définition exacte de NA et la définition historique de l'unité de masse atomique. Les unités de base sont désormais définies en fixant des constantes fondamentales.`,
    whyItMatters: `Un rappel que le nouveau SI est défini par des constantes, et non par des artefacts matériels.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'Première constante de rayonnement',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3,741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamique',
    description: 'Fixe l\'échelle globale de l\'intensité du rayonnement de corps noir — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Apparaît dans la loi du rayonnement de corps noir de Planck pour la luminance spectrique.`,
    simpleExample: `Le Soleil a son pic à ~502 nm (vert). Les cellules photovoltaïques sont conçues pour correspondre précisément à ce spectre de Planck calculé à l'aide de c₁.`,
    deepMeaning: `La loi du rayonnement de Planck lança la mécanique quantique en 1900. L'hypothèse quantique de Planck introduisit le facteur exponentiel qui supprime la divergence à haute fréquence (la catastrophe ultraviolette).`,
    whyItMatters: `Fondamentale pour l'astrophysique, l'énergie solaire et la cosmologie.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'Première constante de rayonnement pour la luminance spectrique',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1,191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamique',
    description: 'c₁ divisée par π — donne la luminance par unité d\'angle solide.',
    discoveredBy: 'Dérivée',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Donne la luminance spectrique par unité d'angle solide plutôt que l'éclairement spectrique hémisphérique.`,
    simpleExample: `Indispensable pour calculer correctement les performances des systèmes optiques tels que la sensibilité des télescopes ou l'exposition des caméras.`,
    deepMeaning: `Reflète la différence entre l'émission intégrée sur un hémisphère et la luminance dans une direction spécifique. Pour un émetteur lambertien, la relation implique un facteur π.`,
    whyItMatters: `Essentielle en radiométrie et en télédétection par satellite.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Deuxième constante de rayonnement',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1,438776877 × 10⁻² m·K',
    category: 'Thermodynamique',
    description: 'Relie longueur d\'onde et température dans la fonction de Planck — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Apparaît dans l'exposant de la fonction de Planck. Fixe le croisement entre les régimes quantique et classique.`,
    simpleExample: `La loi de déplacement de Wien (λ_max × T = b) est dérivée de c₂. Les caméras thermiques détectent les personnes car les corps à 310 K ont leur pic dans l'infrarouge moyen.`,
    deepMeaning: `Historiquement, le rapport c₁/c₂ fut utilisé pour mesurer la constante de Boltzmann. À température ambiante, les corrections quantiques deviennent importantes pour le rayonnement infrarouge moyen.`,
    whyItMatters: `Fondamentale pour la climatologie, l'imagerie thermique et la physique stellaire.`
  },

  {
    symbol: 'g',
    name: 'Accélération standard de la pesanteur',
    value: '9.807',
    unit: 'm/s²',
    exact: '9,80665 m/s² (exacte)',
    category: 'Universel',
    description: 'Valeur standard de l\'accélération gravitationnelle à la surface de la Terre.',
    discoveredBy: 'Bureau international des poids et mesures (1901)',
    formula: 'W = mg',
    whatItSays: `Une valeur conventionnelle standard définie pour l'accélération gravitationnelle.`,
    simpleExample: `La gravité réelle varie de ~9,780 m/s² à l'équateur à ~9,832 m/s² aux pôles. La valeur standard fut choisie pour correspondre aux mesures effectuées à 45° de latitude.`,
    deepMeaning: `Apparaît comme facteur de conversion entre la masse et la force (kilogramme-force). Les gravimètres mesurent la valeur locale de g à 9 chiffres significatifs pour détecter les déformations dues aux marées et les variations de nappe phréatique. Le principe d'équivalence (Relativité Générale) stipule que cette situation est indiscernable d'une accélération dans un espace-temps plat.`,
    whyItMatters: `Référence de base pour l'ingénierie, la définition de la pression atmosphérique et la pesée de précision.`
  },

  // ── PARTIE 19 : UNITÉS ATOMIQUES ──────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'u.a. de longueur',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5,29177210544 × 10⁻¹¹ m',
    category: 'Atomique',
    description: 'Le rayon de Bohr en unités atomiques.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 u.a. = a<sub>0</sub>',
    whatItSays: `L'unité de longueur dans le système atomique. Toutes les longueurs de liaison sont exprimées en Bohr.`,
    simpleExample: `Longueurs de liaison typiques : H-H = 1,40 a₀, C-C = 2,92 a₀.`,
    deepMeaning: `En unités atomiques, ħ = me = e = 4πε₀ = 1. Cela simplifie considérablement les équations de la chimie quantique.`,
    whyItMatters: `Unité standard en chimie computationnelle.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'u.a. de masse',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9,1093837139 × 10⁻³¹ kg',
    category: 'Atomique',
    description: 'La masse de l\'électron en unités atomiques.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 u.a. = m<sub>e</sub>',
    whatItSays: `L'unité de masse dans le système atomique.`,
    simpleExample: `En chimie quantique, toutes les masses sont exprimées en multiples de me.`,
    deepMeaning: `Fait partie du système qui fixe les constantes fondamentales à 1 pour simplifier l'équation de Schrödinger.`,
    whyItMatters: `Masse de base pour tous les calculs de structure électronique.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'u.a. de temps',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2,4188843265864 × 10⁻¹⁷ s',
    category: 'Atomique',
    description: 'Échelle de temps naturelle du mouvement électronique dans les atomes.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = ħ / E<sub>h</sub>',
    whatItSays: `Le temps correspondant à une évolution de phase d'un radian à l'échelle d'énergie de Hartree.`,
    simpleExample: `La période orbitale de l'électron dans l'état fondamental de l'hydrogène est 2π unités de temps atomiques ≈ 152 attosecondes.`,
    deepMeaning: `La physique des attosecondes étudie la dynamique électronique en temps réel à cette échelle temporelle. Le Prix Nobel 2023 fut décerné pour la technologie des impulsions attoseconde.`,
    whyItMatters: `Permet l'observation directe du mouvement des électrons au sein des atomes.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'u.a. d\'énergie',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4,359744722 × 10⁻¹⁸ J',
    category: 'Atomique',
    description: 'L\'énergie de Hartree en unités atomiques.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 u.a. = E<sub>h</sub>',
    whatItSays: `Unité d'énergie en physique atomique.`,
    simpleExample: `Énergies de liaison chimiques en Hartrees : liaison H₂ = 0,174 Eh.`,
    deepMeaning: `Fixe l'échelle d'énergie fondamentale pour tous les calculs de structure électronique.`,
    whyItMatters: `Unité d'énergie standard dans les codes de calcul comme la DFT.`
  },

  {
    symbol: 'e',
    name: 'u.a. de charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1,602176634 × 10⁻¹⁹ C',
    category: 'Atomique',
    description: 'La charge élémentaire en unités atomiques.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 u.a. = e',
    whatItSays: `En unités atomiques, le proton a la charge +1, l'électron la charge −1.`,
    simpleExample: `Le noyau d'hélium a la charge +2 u.a.`,
    deepMeaning: `Simplifie les calculs d'interaction électromagnétique en fixant la charge fondamentale à l'unité.`,
    whyItMatters: `Unité de base pour les distributions de charge dans les molécules.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'u.a. de vitesse',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2,18769126364 × 10⁶ m/s',
    category: 'Atomique',
    description: 'Vitesse de l\'électron dans l\'état fondamental de l\'hydrogène.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = αc',
    whatItSays: `α × c — la vitesse de l'électron dans le modèle de Bohr.`,
    simpleExample: `Dans l'or (Z=79), l'électron 1s a une vitesse de ~0,58c, provoquant la contraction relativiste responsable de la couleur jaune de l'or.`,
    deepMeaning: `Pour les atomes plus lourds, des vitesses approchant c nécessitent des corrections relativistes.`,
    whyItMatters: `Détermine le moment à partir duquel les effets relativistes deviennent importants en chimie.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'u.a. de momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1,992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomique',
    description: 'Échelle naturelle d\'incertitude de momentum dans l\'hydrogène.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (u.a. de vitesse) = ħ/a₀.`,
    simpleExample: `D'après le principe d'incertitude, l'incertitude de momentum d'un électron localisé dans un rayon a₀ est exactement une unité atomique.`,
    deepMeaning: `Relie directement l'échelle de longueur des atomes au momentum de l'électron en orbite.`,
    whyItMatters: `Gouverne la diffraction électronique et la diffusion en chimie quantique.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'u.a. de force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8,238723498 × 10⁻⁸ N',
    category: 'Atomique',
    description: 'Force électrostatique entre l\'électron et le proton au rayon de Bohr.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Énorme à l'échelle atomique (82 nN) mais imperceptible à l'échelle humaine.`,
    simpleExample: `Les bases de la stabilité atomique : l'équilibre entre cette force et la pression quantique.`,
    deepMeaning: `Fixe l'échelle de la force de la « colle » qui maintient les atomes ensemble.`,
    whyItMatters: `Gouverne la liaison atomique et la résistance des matériaux.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'u.a. de champ électrique',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5,142206747 × 10¹¹ V/m',
    category: 'Atomique',
    description: 'Champ extraordinairement intense ressenti par l\'électron dans l\'hydrogène.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Le champ électrique au rayon de Bohr (514 GV/m).`,
    simpleExample: `Les champs atomiques sont ~100 000 fois plus forts que le champ de claquage de l'air.`,
    deepMeaning: `À des intensités supérieures à ~10¹⁴ W/cm², les champs laser sont suffisamment forts pour arracher les électrons des atomes, générant des impulsions attoseconde.`,
    whyItMatters: `Référence de base pour la physique laser en champ fort et l'ionisation par champ.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'u.a. de densité de flux magnétique',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2,350517570 × 10⁵ T',
    category: 'Atomique',
    description: 'Intensité de champ magnétique correspondant à une unité atomique.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235 000 Tesla — immensément plus fort que n'importe quel aimant de laboratoire (~45 T).`,
    simpleExample: `Les champs magnétiques des étoiles à neutrons atteignent ~10⁸-10¹¹ Tesla, dépassant l'unité atomique.`,
    deepMeaning: `À cette échelle, les effets de la QED sur la propagation des photons (biréfringence du vide) deviennent significatifs.`,
    whyItMatters: `Critique pour la compréhension des naines blanches et des magnétars.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'u.a. de permittivité',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1,112650056 × 10⁻¹⁰ F/m',
    category: 'Atomique',
    description: 'Permittivité du vide mise à l\'échelle des unités atomiques — 4πε₀.',
    discoveredBy: 'Dérivée',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `En unités atomiques, la loi de Coulomb devient simplement F = q₁q₂/r².`,
    simpleExample: `Simplifie tous les calculs électrostatiques dans les codes de chimie quantique.`,
    deepMeaning: `L'une des principales simplifications qui supprime le facteur 4πε₀ des calculs.`,
    whyItMatters: `Normalisation standard en physique théorique.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'u.a. de magnétisabilité',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7,8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomique',
    description: 'Réponse du second ordre de l\'énergie d\'un atome à un champ magnétique.',
    discoveredBy: 'Dérivée',
    formula: '1 u.a.',
    whatItSays: `Mesurée par les déplacements chimiques RMN et les mesures de force magnétique.`,
    simpleExample: `Utilisée pour calculer la réponse des molécules aux champs magnétiques d'échelle IRM.`,
    deepMeaning: `Grandeur fondamentale dans l'étude des susceptibilités magnétiques moléculaires au niveau quantique.`,
    whyItMatters: `Utilisée en spectroscopie RMN et dans les simulations de chimie quantique.`
  }
];
