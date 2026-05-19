// =============================================================================
// constantsData.es.js — Base de datos de constantes físicas
// Valores de CODATA 2022 | Explicaciones detalladas de la Guía de referencia Phyansy
// Idioma: Español (es)
// Traducción: i18n manual — versión 1.0
// Reglas de traducción:
//   · Los términos físicos (velocity, mass, energy, etc.) permanecen en inglés.
//   · Los nombres propios (Planck, Boltzmann, Oppenheimer, etc.) permanecen en inglés.
//   · Los valores numéricos y las unidades permanecen inalterados.
//   · Solo se traducen las cadenas de texto narrativo.
// =============================================================================

export const CONSTANTS_ES = [

  // ── PARTE 1: CONSTANTES UNIVERSALES / DEFINITORIAS ─────────────────────────

  {
    symbol: 'c',
    name: 'Speed of Light in Vacuum',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s (exacto)',
    category: 'Universal',
    description: 'El límite fundamental de velocidad de la causalidad misma.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `La light recorre exactamente 299,792,458 metres en un segundo a través del vacío perfecto. Esto no es una aproximación medida: desde 1983, el metro mismo se define a partir de este número. Por tanto, c es ahora un entero exacto y fijo según la definición internacional.`,
    simpleExample: `La light de la Luna llega a tu ojo en aproximadamente 1.28 segundos. La light del Sol tarda cerca de 8 minutos y 20 segundos. La estrella más cercana, Proxima Centauri, está a 4.24 años luz de distancia, lo que significa que la light tarda 4.24 años en recorrer esa distancia.`,
    deepMeaning: `c no es simplemente «la velocidad a la que se mueve la light». Es el límite fundamental de velocidad de la causalidad en sí misma: la tasa máxima a la que cualquier información, energy o influencia causal puede propagarse por el universo. La Relatividad Especial de Einstein reveló que c es la misma para todo observador, independientemente de su movimiento. Esto destruye el tiempo absoluto de Newton. Dos observadores en movimiento relativo discrepan sobre longitudes, intervalos de tiempo y simultaneidad, pero siempre medirán el mismo c. E = mc² indica que mass y energy son la misma cosa, separadas únicamente por un factor de conversión igual a c².`,
    whyItMatters: `Sin c no existe la Relatividad Especial, ni E = mc², ni la corrección del GPS (los satélites GPS deben corregir tanto la dilatación temporal de la Relatividad Especial como la de la General), ni la comprensión de las estrellas o la física de partículas. Es la columna vertebral de la física moderna.`
  },

  {
    symbol: 'h',
    name: 'Planck Constant',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (exacto)',
    category: 'Universal',
    description: 'Quantum de action electromagnética — gobierna la energy de los photons.',
    discoveredBy: 'Max Planck (1900) · Premio Nobel 1918',
    formula: 'E = hf',
    whatItSays: `La energy llega en paquetes discretos llamados quanta. La energy E de un solo quantum de radiación electromagnética —un photon— es E = hf, donde f es la frequency de la radiación. h es la constante de proporcionalidad que conecta la frequency (una propiedad de onda) con la energy (una propiedad de partícula).`,
    simpleExample: `La light roja visible tiene una frequency de aproximadamente 4.3 × 10¹⁴ Hz. Un photon de light roja transporta una energy de: (6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV. Esta tiny energy es suficiente para activar una molécula de rodopsina en la retina: el inicio de la visión.`,
    deepMeaning: `Antes de Planck, la física clásica predecía que un objeto caliente debía irradiar energy infinita a altas frecuencias —la «catástrofe ultravioleta»—. En 1900, Max Planck resolvió esto suponiendo que la energy no es continua sino cuantizada. Einstein usó este principio para explicar el efecto fotoeléctrico. h es también el quantum de action: sus unidades son energy × time. La forma reducida ħ = h/2π aparece en el conmutador [x̂, p̂] = iħ —el núcleo matemático de la mecánica cuántica— y en el Principio de Incertidumbre de Heisenberg: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h es la frontera entre el mundo cuántico y el mundo clásico. Cuando la action relevante de un sistema es mucho mayor que h, la mecánica clásica funciona. Sin h, los átomos colapsarían, la química no existiría y el universo tal como lo conocemos no podría existir.`
  },

  {
    symbol: 'ħ',
    name: 'Reduced Planck Constant',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (exacto)',
    category: 'Universal',
    description: 'h/2π — la unidad natural de angular momentum en mecánica cuántica.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (llamada «h-barra») es simplemente h dividida entre 2π. Aparece siempre que se usa la angular frequency ω (en radianes por segundo) en lugar de la frequency ordinaria f (en ciclos por segundo), ya que ω = 2πf.`,
    simpleExample: `El spin de un electron es ħ/2. El spin de un photon es ħ. El angular momentum orbital es siempre un múltiplo entero de ħ: por tanto, ħ es el átomo de la rotación misma.`,
    deepMeaning: `En mecánica cuántica, ħ no es simplemente una abreviatura cómoda: es el quantum fundamental de angular momentum. En teoría cuántica de campos, ħ controla la magnitud de las fluctuaciones cuánticas. Hacer ħ → 0 recupera la teoría de campos clásica. Toda la estructura de la mecánica cuántica —relaciones de conmutación, integrales de camino, principios de incertidumbre— está gobernada por ħ.`,
    whyItMatters: `En las unidades naturales que usan los físicos de partículas, ħ = c = 1, lo que simplifica enormemente las ecuaciones y revela la estructura geométrica profunda de las teorías.`
  },

  {
    symbol: 'e',
    name: 'Elementary Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (exacto)',
    category: 'Electromagnetic',
    description: 'La smaller charge eléctrica que existe libremente — la charge está cuantizada.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `Esta es la magnitud de la charge eléctrica que lleva un solo proton (positiva) o un solo electron (negativa). Toda charge eléctrica observable en la naturaleza es un múltiplo entero de e. La charge está cuantizada.`,
    simpleExample: `Una current de 1 ampere significa que 1 coulomb de charge fluye por un punto cada segundo. Dado que cada electron lleva 1.602 × 10⁻¹⁹ C, una current de 1 A corresponde a aproximadamente 6.24 × 10¹⁸ electrons por segundo.`,
    deepMeaning: `La cuantización de la charge fue establecida experimentalmente por Robert Millikan en su célebre experimento de la gota de aceite. Midió la charge en gotas individuales de aceite suspendidas en un campo eléctrico y encontró que todas las charges eran múltiplos enteros de una unidad fundamental: e. La fine-structure constant α ≈ 1/137 es la medida adimensional de la fuerza de la interacción electromagnética. Los quarks llevan charges de e/3 y 2e/3, pero están permanentemente confinados dentro de los hadrones y nunca se observan con charge fraccionaria de forma aislada.`,
    whyItMatters: `e establece la escala de todas las interacciones atómicas y moleculares. La química, la biología, la electrónica y la ciencia de materiales dependen todas fundamentalmente del valor de e. Si e fuera ligeramente diferente, la vida tal como la conocemos no podría existir.`
  },

  {
    symbol: 'k',
    name: 'Boltzmann Constant',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (exacto)',
    category: 'Thermodynamic',
    description: 'Puente entre temperature y kinetic energy — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (también escrito kB) es el puente entre el mundo microscópico de las partículas individuales y el mundo macroscópico de la temperature. Convierte la temperature —una propiedad estadística de un conjunto— en energy por partícula. Cada grado de libertad contribuye con (1/2)kT de kinetic energy promedio.`,
    simpleExample: `A temperature ambiente (T = 293 K): kT ≈ 0.0253 eV. Esta es la escala de energy térmica característica a temperature ambiente. Las energías de los enlaces químicos son de algunos eV, por lo que la energy térmica a temperature ambiente es mucho menor: por eso la mayoría de los enlaces químicos son estables.`,
    deepMeaning: `La temperature no es una cantidad fundamental: es una medida de la kinetic energy promedio de las partículas. S = k ln(Ω) define la entropy en términos de información y probabilidad, conectando la termodinámica con la física microscópica. La distribución de Boltzmann da la probabilidad de que un sistema esté en un estado de energy E a temperature T: P(E) ∝ e^(−E/kT). Este factor exponencial —el factor de Boltzmann— lo gobierna todo, desde las tasas de reacción química hasta la distribución de moléculas en la atmósfera terrestre.`,
    whyItMatters: `k es el fundamento de la termodinámica y la mecánica estadística. Sin él, no podemos conectar la física microscópica con los observables macroscópicos como la temperature, la presión y la entropy. Desde 2019, k es una constante exacta definida, y el kelvin se define a través de ella.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro Constant',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (exacto)',
    category: 'Thermodynamic',
    description: 'Número de entidades en un mol — conecta las escalas atómica y humana.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `Un mol de cualquier sustancia contiene exactamente 6.022 140 76 × 10²³ entidades elementales (átomos, moléculas, iones, etc.). Este número es el puente entre la escala atómica y la escala humana.`,
    simpleExample: `12 gramos de carbono-12 contienen exactamente un mol de átomos de carbono. Se trata de un número casi incomprensiblemente grande: si tuvieras un mol de granos de arena, cubrirían la superficie de la Tierra hasta una profundidad de varios kilómetros.`,
    deepMeaning: `NA conecta la unidad de mass atómica con los gramos: 1 u = 1 gramo / NA = 1.660 539 × 10⁻²⁷ kg. La constante molar de los gases R se relaciona con la Boltzmann Constant mediante: R = NA × k = 8.314 J mol⁻¹ K⁻¹. La constante de Faraday F = NAe = 96,485 C/mol es la charge de un mol de electrons. Históricamente, medir NA fue uno de los grandes retos de la física de los siglos XIX y XX. Las mediciones del movimiento browniano de Jean Perrin en 1908 probaron la existencia de los átomos.`,
    whyItMatters: `NA es lo que hace cuantitativa a la química. Permite a los químicos contar átomos por pesada. Cada cálculo estequiométrico, cada cálculo de dosificación farmacéutica y cada cálculo de ciencia de materiales depende de NA.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Luminous Efficacy',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (exacto)',
    category: 'Universal',
    description: 'Define la candela — la única constante del SI vinculada a la biología humana.',
    discoveredBy: 'Definición internacional (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W a 540 THz',
    whatItSays: `683 lúmenes de flujo luminoso (brillo percibido por el ojo humano) corresponden a 1 watt de potencia radiante a una frequency monocromática específica de 540 × 10¹² Hz (light verde, longitud de onda ≈ 555 nm) —el pico de sensibilidad del ojo humano bajo condiciones de luz diurna.`,
    simpleExample: `Una fuente de light que emite 1 watt de light verde pura produce exactamente 683 lúmenes de brillo visible. Cualquier otro color produce menos lúmenes por watt porque el ojo es menos sensible a ellos.`,
    deepMeaning: `Esta constante es la única del sistema SI que depende de la biología humana: específicamente, la sensibilidad espectral del ojo humano fotópico (diurno). Se define así para conectar la cantidad física de potencia radiante (watts) con la cantidad perceptual de brillo (lúmenes). Desde 2019, la candela se define fijando Kcd exactamente en 683 lm/W.`,
    whyItMatters: `Fundamental para la fotometría, la ingeniería de iluminación y el diseño de todos los sistemas ópticos. Cada especificación en lúmenes de cada bombilla se remonta a esta constante.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium Hyperfine Frequency',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz (exacto)',
    category: 'Universal',
    description: 'Define el segundo — el latido de toda la cronometría moderna.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `El estado fundamental del átomo de cesio-133 tiene dos niveles hiperfinos —divididos por la interacción entre el momento magnético del electron y el momento magnético nuclear—. Cuando el átomo transita entre estos dos niveles, emite o absorbe radiación exactamente a 9,192,631,770 Hz.`,
    simpleExample: `Desde 1967, un segundo se define como exactamente 9,192,631,770 períodos de oscilación de esta radiación. Los relojes atómicos de cesio son los dispositivos de cronometría más precisos jamás construidos, con una pérdida de menos de un segundo en 300 millones de años.`,
    deepMeaning: `La división hiperfina surge de la electrodinámica cuántica: la interacción entre el momento dipolar magnético del electron y el campo magnético generado por el spin nuclear. Calcular esta frequency desde primeros principios es una prueba profunda de la QED. El GPS, internet (que requiere relojes sincronizados), los sistemas financieros y todas las telecomunicaciones modernas dependen directamente de los estándares del reloj atómico de cesio.`,
    whyItMatters: `La medición más precisa de toda la ciencia. La civilización moderna —GPS, sincronización de internet, comercio financiero, redes 5G— depende de esta constante.`
  },

  // ── PARTE 2: CONSTANTES ELECTROMAGNÉTICAS ────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Vacuum Electric Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'Electromagnetic',
    description: 'Facilidad con la que los campos eléctricos atraviesan el vacío.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-cero) mide con qué facilidad un campo eléctrico puede atravesar el vacío. Aparece en la ley de Coulomb —la force entre dos cargas puntuales: F = (1/4πε₀) × (q₁q₂/r²)—. Cuanto mayor es ε₀, más débil es la force electrostática para cargas y distancia dadas.`,
    simpleExample: `El agua tiene una permitividad relativa εr ≈ 80, lo que significa que reduce las forces electrostáticas entre cargas en un factor de 80 en comparación con el vacío. Por eso el agua es un disolvente excelente para los compuestos iónicos.`,
    deepMeaning: `ε₀ no se define de forma independiente: se deriva de los valores definidos de c y μ₀ mediante: ε₀ = 1/(μ₀c²). Aparece en las cuatro ecuaciones de Maxwell en sus formas de vacío. En la ley de Gauss: ∮ E · dA = Q_enc/ε₀. El flujo eléctrico total a través de cualquier superficie cerrada es igual a la charge encerrada dividida entre ε₀. También establece la escala de la energy density electromagnética almacenada en un campo eléctrico: u_E = (1/2)ε₀E².`,
    whyItMatters: `Aparece en las cuatro ecuaciones de Maxwell. Sin ε₀ no existe la electrostática cuantitativa, el diseño de capacitores ni la comprensión de los dieléctricos.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Vacuum Magnetic Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'Electromagnetic',
    description: 'Facilidad con la que los campos magnéticos atraviesan el vacío.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-cero) mide con qué facilidad un campo magnético atraviesa el vacío. Aparece en la ley de Biot-Savart y en la ley de Ampère. La force por unidad de longitud entre dos cables paralelos que llevan corrientes I₁ e I₂ separados por una distancia d es: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `El hierro tiene una permeabilidad relativa μr de hasta ~10,000: concentra los campos magnéticos enormemente en comparación con el vacío. Por eso los núcleos de los transformadores se fabrican con hierro: para guiar y amplificar el flujo magnético eficientemente.`,
    deepMeaning: `Antes de la redefinición del SI de 2019, μ₀ era exactamente 4π × 10⁻⁷ N/A² por definición. Ahora es una cantidad medida con una pequeña incertidumbre. μ₀ aparece en la ley de Ampère con la corrección de Maxwell: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). El segundo término —la corriente de desplazamiento de Maxwell— permitió que las ondas electromagnéticas existieran en el vacío y llevó directamente a la predicción de que la light es una onda electromagnética.`,
    whyItMatters: `Sin μ₀ no hay campos magnéticos, ni inducción electromagnética, ni motores eléctricos, ni transformadores, ni ondas de radio.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Characteristic Impedance of Vacuum',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'Electromagnetic',
    description: 'Razón entre el campo eléctrico y el magnético en una onda electromagnética en el vacío.',
    discoveredBy: 'Derivado de las ecuaciones de Maxwell',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `Cuando una onda electromagnética se propaga por el vacío, la razón entre la amplitud del campo eléctrico y la amplitud del campo magnético es: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `Una antena irradia eficientemente cuando su impedancia coincide con 377 Ω. La potencia irradiada por unidad de área (el vector de Poynting) es S = E²/Z₀. Esto se usa para diseñar desde antenas dipolo hasta antenas parabólicas.`,
    deepMeaning: `Z₀ es la impedancia del espacio libre: indica cuánto campo eléctrico se obtiene por unidad de campo magnético en una onda electromagnética propagante. Es la «resistencia» del vacío a la propagación de ondas electromagnéticas, análoga a la impedancia característica de una línea de transmisión. La light solar que llega a la Tierra corresponde a una amplitud de campo eléctrico de √(1361 × Z₀) ≈ 716 V/m.`,
    whyItMatters: `Esencial para el diseño de antenas, las secciones transversales de radar y todos los cálculos de enlace de comunicaciones inalámbricas.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson Constant',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'Electromagnetic',
    description: 'Relaciona voltage y frequency en uniones Josephson superconductoras.',
    discoveredBy: 'Brian Josephson (1962) · Premio Nobel 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `La Josephson Constant relaciona voltage y frequency en el efecto Josephson de corriente alterna. Cuando se aplica un voltage en CC V a través de una unión Josephson (una barrera aislante delgada entre dos superconductores), genera una corriente alterna a frequency f = 2eV/h.`,
    simpleExample: `Un voltage de 1 milivoltio a través de una unión Josephson genera una oscilación de CA a ~483.6 GHz —en el rango de las microondas—. Esto se usa para definir estándares de voltage precisos a 1 parte en 10¹⁰.`,
    deepMeaning: `El factor 2 proviene del hecho de que la superconductividad involucra pares de Cooper —pares de electrons con charge 2e—. La unión Josephson es un dispositivo cuántico macroscópico en el que la diferencia de fase cuántica entre dos superconductores impulsa una supercorriente. El efecto Josephson de CA es una demostración impactante de que la mecánica cuántica opera a escalas macroscópicas en los superconductores.`,
    whyItMatters: `Estándar de voltage de referencia en todo el mundo. La medición eléctrica más precisa disponible. Fundamental para la metrología cuántica y la computación cuántica superconductora.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing Constant',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'Electromagnetic',
    description: 'Quantum de resistencia eléctrica — h/e² — del efecto Hall cuántico.',
    discoveredBy: 'Klaus von Klitzing (1980) · Premio Nobel 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² es el quantum de resistencia. Aparece en el efecto Hall cuántico: cuando un gas de electrons 2D se coloca en un campo magnético perpendicular intenso a baja temperature, la resistencia Hall se cuantiza en fracciones exactas de RK: RH = RK/n.`,
    simpleExample: `La cuantización es tan precisa que RK se usa como estándar de resistencia de referencia. Chips de silicio a ~1 K en campos de ~10 Tesla reproducen RK/2 = 12,906 Ω con una precisión mejor de 1 parte por billón.`,
    deepMeaning: `La cuantización tiene un origen topológico: no depende del material, la geometría de la muestra ni ningún parámetro ajustable. Es exacta dentro de la precisión de medición. El efecto Hall cuántico fraccional (1982) involucra una cuantización aún más exótica en fracciones de 1/3, 2/5, etc., que surge de estados electrónicos fuertemente correlacionados, incluido el estado ν = 5/2, que puede albergar anyones no abelianos relevantes para la computación cuántica topológica.`,
    whyItMatters: `Estándar de resistencia de referencia a nivel mundial. Ventana hacia la topología en la física de la materia condensada. Los efectos Hall cuánticos entero y fraccional representan algunos de los descubrimientos más profundos de la física moderna.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Magnetic Flux Quantum',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'Electromagnetic',
    description: 'Quantum de magnetic flux — h/(2e) — en lazos superconductores.',
    discoveredBy: 'London & Onsager (teoría) · Doll & Näbauer (1961, confirmado)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `El magnetic flux a través de un lazo superconductor está cuantizado en unidades de Φ₀. Un anillo superconductor solo puede atrapar magnetic flux en múltiplos enteros de h/(2e).`,
    simpleExample: `Un SQUID (Superconducting Quantum Interference Device) puede detectar cambios de magnetic flux tan pequeños como 10⁻⁶ Φ₀, correspondientes a un cambio de campo magnético de ~10⁻¹⁸ Tesla. Esto se usa en imágenes cerebrales (MEG).`,
    deepMeaning: `La cuantización del magnetic flux es una manifestación macroscópica directa de la mecánica cuántica. El parámetro de orden superconductor (la función de onda cuántica macroscópica) debe ser unívoco alrededor de un lazo, lo que obliga a que el flux encerrado esté cuantizado. Los SQUIDs explotan Φ₀ para medir campos magnéticos con una sensibilidad extraordinaria: los sensores magnéticos más sensibles jamás construidos.`,
    whyItMatters: `Fundamento de la tecnología SQUID, la magnetoencefalografía, pruebas fundamentales de la mecánica cuántica a escalas macroscópicas y la computación cuántica superconductora.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance Quantum',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'Electromagnetic',
    description: 'Unidad fundamental de conductancia eléctrica — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `Cuando los electrons fluyen a través de un conductor cuántico perfecto de un solo canal (como un contacto de un solo átomo o un contacto de punto cuántico), la conductancia es exactamente G₀ = 2e²/h por canal. La resistencia es 1/G₀ = h/(2e²) ≈ 12,906 Ω.`,
    simpleExample: `Un nanohilo de oro estirado hasta que tiene un solo átomo de ancho tiene una conductancia de aproximadamente G₀. Esto se ha medido experimentalmente con gran precisión. Un hilo de dos átomos tiene una conductancia de ~2G₀.`,
    deepMeaning: `La resistencia clásica depende de la geometría de la muestra, el material y las impurezas. Pero a nivel cuántico, incluso un conductor perfecto tiene resistencia, debido a la correspondencia mecánico-cuántica de los modos propagantes entre el conductor y sus contactos. Esta es la fórmula de Landauer: G = G₀ × Σ T, donde T son las probabilidades de transmisión de los canales cuánticos individuales.`,
    whyItMatters: `Fundamento de la física mesoscópica y la nanoelectrónica. Gobierna el transporte de electrons a través de uniones moleculares, nanotubos de carbono y puntos cuánticos.`
  },

  {
    symbol: 'F',
    name: 'Faraday Constant',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'Electromagnetic',
    description: 'Charge de un mol de electrons — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `La Faraday Constant es la charge de un mol de cargas elementales —un mol de electrons o un mol de protones—. En electroquímica, gobierna cuánta charge se necesita para depositar o disolver un mol de un ion monovalente.`,
    simpleExample: `Para galvanizar 1 mol de cobre (63.5 g) de una solución de CuSO₄ se necesitan 2F = 192,970 C de charge (el cobre es divalente, Cu²⁺ + 2e⁻ → Cu). Por eso depositar una capa gruesa requiere corrientes elevadas.`,
    deepMeaning: `Las leyes de electrólisis de Faraday (1833-1834) establecen que la mass de sustancia depositada en un electrodo es proporcional a la charge transmitida, con F como constante de proporcionalidad (por mol y por valencia): m = (M/zF) × Q. Faraday derivó esta relación empíricamente sin conocer los electrons ni los átomos —un logro notable—. La constante que lleva su nombre tiene ahora un valor exacto gracias a las definiciones de NA y e.`,
    whyItMatters: `Fundamento de toda la electroquímica. Cada batería de ion-litio, cada proceso de galvanizado, cada planta de cloro y cada refinación electrolítica de metales opera a partir de esta constante.`
  },

  // ── PARTE 3: CONSTANTES ATÓMICAS Y NUCLEARES ─────────────────────────────────

  {
    symbol: 'α',
    name: 'Fine-Structure Constant',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'adimensional',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atomic',
    description: 'Constante de acoplamiento adimensional de la force electromagnética.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α es la constante de acoplamiento adimensional de la interacción electromagnética. Mide la intensidad de la force electromagnética entre partículas cargadas: específicamente, la amplitud de probabilidad de que una partícula cargada emita o absorba un photon.`,
    simpleExample: `En la electrodinámica cuántica, la probabilidad de que un electron emita un photon en un proceso dado es proporcional a α. Los procesos con dos photons son proporcionales a α², y así sucesivamente. Dado que α ≈ 1/137, cada vértice adicional de photon suprime la probabilidad por un factor de ~1/137, razón por la cual los diagramas de Feynman convergen rápidamente en QED.`,
    deepMeaning: `α es uno de los números más misteriosos de la física. Es puramente adimensional: no tiene unidades y toma el mismo valor independientemente del sistema de unidades empleado. Combina e (electromagnetismo), ε₀ (electrostática), ħ (mecánica cuántica) y c (relatividad). Richard Feynman llamó a α «uno de los misterios más grandes de la física». En QED, α no es verdaderamente constante: «corre» con la escala de energy por efecto de la polarización del vacío. A bajas energías: α ≈ 1/137. A la escala de mass del bosón Z: α ≈ 1/128.`,
    whyItMatters: `α gobierna toda la física atómica, la química y la biología molecular. El tamaño de los átomos, la fuerza de los enlaces químicos y los espectros de absorción y emisión de todos los elementos están controlados por α. Es sin duda el número adimensional más importante de la física.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg Constant',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atomic',
    description: 'Determina las longitudes de onda de todas las líneas espectrales del hidrógeno.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `La Rydberg Constant proporciona los números de onda (inversas de las longitudes de onda) de las líneas espectrales del hidrógeno. Las longitudes de onda de todas las líneas espectrales del hidrógeno se obtienen con la fórmula de Rydberg: 1/λ = R∞ × (1/n₁² − 1/n₂²), donde n₁ y n₂ son enteros positivos con n₂ > n₁.`,
    simpleExample: `Para la serie de Lyman (transiciones al estado fundamental), la primera línea (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121.6 nm (ultravioleta — línea Lyman-alfa). Esta es la línea espectral más importante en astrofísica: se usa para detectar hidrógeno en todo el universo y medir la expansión del espacio mediante el redshift.`,
    deepMeaning: `R∞ se deriva teóricamente de constantes más fundamentales: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). Esta fórmula —derivada del modelo de Bohr y refinada por la mecánica cuántica— conecta el espectro del hidrógeno con la mass del electron, la elementary charge y otras constantes fundamentales. La concordancia entre teoría y experimento es extraordinaria. La energy de Rydberg (Ry) —la energy de enlace del hidrógeno— es: En = −Ry/n² = −13.6 eV/n².`,
    whyItMatters: `El punto de partida que llevó a Bohr al átomo cuántico. La constante atómica medida con mayor precisión; conocida con 12 cifras significativas, permite pruebas de QED a nivel de pocas partes por billón.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'Escala de tamaño natural de los átomos — distancia más probable entre electron y proton en el hidrógeno.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ es la distancia más probable entre el electron y el proton en un átomo de hidrógeno en su estado fundamental (n = 1). Establece la escala de tamaño característica de los átomos. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0.529 Å (Angstrom). Este es el tamaño típico de un átomo de hidrógeno. La mayoría de los átomos tienen radios dentro de un factor de pocos a₀. La longitud del enlace C-C en el diamante es ~2.9a₀. El diámetro de la hélice del ADN es ~40Å ≈ 75a₀.`,
    deepMeaning: `El Bohr Radius emerge del equilibrio entre la kinetic energy del electron (cuántica, que tiende a expandir al electron —el principio de incertidumbre le impide colapsar hacia el núcleo—) y la potential energy de Coulomb (que lo atrae hacia el núcleo). En mecánica cuántica, la función de onda del estado fundamental del hidrógeno alcanza su máximo en r = a₀. El Bohr Radius establece la escala de todas las funciones de onda atómicas: los orbitales superiores tienen radios ~ n²a₀.`,
    whyItMatters: `Define la escala de longitud fundamental de la química y la ciencia de materiales. En física de la materia condensada, a₀ establece la escala de longitud de los enlaces químicos, los espaciados de la red cristalina y el tamaño de los excitones. El tamaño del átomo de hidrógeno determina en última instancia la density de la materia.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atomic',
    description: 'Unidad natural de energy en física atómica — el doble de la energy de ionización del hidrógeno.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `La Hartree Energy es el doble de la energy de ionización del hidrógeno desde su estado fundamental. Es la unidad natural de energy en física atómica: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `El estado fundamental del hidrógeno tiene energy −(1/2)Eh = −13.6 eV. Las energías típicas de los enlaces químicos son ~0.1–0.2 Eh (3–5 eV). Un enlace C-H es ~0.16 Eh. Estos números son del orden de la unidad en unidades atómicas: ideales para la química cuántica.`,
    deepMeaning: `En unidades atómicas (con ħ = me = e = a₀ = 1), Eh = 1. Las unidades atómicas simplifican enormemente las ecuaciones de la química cuántica. La ecuación de Schrödinger para el hidrógeno en unidades atómicas se convierte simplemente en: −(1/2)∇²ψ − (1/r)ψ = Eψ, donde E = −1/2 para el estado fundamental, es decir, −0.5 Hartree = −13.6 eV. Los códigos de química computacional (teoría de funcional de density, Hartree-Fock) trabajan casi universalmente en unidades atómicas de manera interna.`,
    whyItMatters: `La unidad de trabajo en la química cuántica. Cada cálculo DFT, cada simulación de dinámica molecular y cada resultado de química cuántica se remonta en última instancia a la Hartree Energy. Es la escala de energy fundamental de los cálculos de estructura electrónica.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atomic',
    description: 'Unidad natural del momento magnético del electron — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB es la unidad natural de momento magnético para los electrons. Representa el momento magnético de un electron debido a su angular momentum orbital de ħ.`,
    simpleExample: `En un campo magnético de 1 Tesla (como en un MRI), la separación de Zeeman entre los estados de spin arriba y spin abajo del electron es 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV, correspondiente a frequencies de microondas. Por eso la ESR utiliza microondas, mientras que la NMR usa radiofrecuencias.`,
    deepMeaning: `El momento magnético de spin del electron es aproximadamente μB (exactamente, es ge × μB/2, donde ge ≈ 2.002 por correcciones de electrodinámica cuántica). El efecto Zeeman —la separación de las líneas espectrales atómicas en un campo magnético— está gobernado por μB: ΔE = ml × μB × B, donde ml es el número cuántico magnético. μB gobierna la Resonancia de Spin Electrónico (ESR). La concordancia con el experimento a 12 cifras decimales hace que la parte anómala sea la cantidad calculada con mayor precisión en toda la ciencia.`,
    whyItMatters: `Fundamento de la resonancia de spin electrónico, los materiales magnéticos y todos los efectos magneto-ópticos. Central para la espintrónica y la computación cuántica con qubits de spin.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atomic',
    description: 'Unidad natural del momento magnético nuclear — 1836 veces más pequeño que el Bohr Magneton.',
    discoveredBy: 'Otto Stern (1933) · Premio Nobel 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN es la unidad natural de momento magnético para los nucleones (protones y neutrones). Es 1836 veces más pequeño que μB porque el proton es 1836 veces más pesado que el electron.`,
    simpleExample: `El proton tiene un momento magnético de 2.793 μN. En un escáner MRI de 3 Tesla, la brecha de energy entre los estados de spin del proton es 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J, correspondiente a ~127 MHz de radiofrecuencia. Esta es precisamente la frequency que utiliza un escáner MRI.`,
    deepMeaning: `A pesar de no tener charge eléctrica, el neutron tiene un momento magnético de −1.913 μN. Este momento magnético no nulo para una partícula neutra fue históricamente una de las primeras indicaciones de que el neutron no es una partícula fundamental sino que tiene estructura interna (quarks). El momento magnético del proton de 2.793 μN —no simplemente 1 μN como predecirían las partículas de Dirac sin estructura— fue el descubrimiento Nobel de Stern en 1933. La NMR (y la MRI) se basa en las transiciones de spin del proton.`,
    whyItMatters: `Fundamento de la espectroscopía NMR y la MRI: las herramientas más poderosas en química estructural e imagen médica. Demostró históricamente la estructura interna de quarks del nucleón.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Particle',
    description: 'Rest mass del electron — la partícula fundamental masiva más ligera.',
    discoveredBy: 'J.J. Thomson (1897) · Premio Nobel 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `Esta es la rest mass del electron: la partícula fundamental masiva más ligera. En unidades de energy mediante E = mc²: mec² = 0.510 998 950 MeV. El electron es 1836.15 veces más ligero que el proton.`,
    simpleExample: `La producción de pares (γ → e⁺ + e⁻) requiere un photon de al menos 2mec² = 1.022 MeV. Por debajo de esta energy, los photons no pueden crear pares electron-positrón, sin importar cuántos haya. Este umbral gobierna la absorción de rayos gamma en la materia.`,
    deepMeaning: `La Electron Mass es un parámetro libre del Modelo Estándar: no se predice teóricamente, sino que debe medirse. Se genera mediante el mecanismo de Higgs: el electron interactúa con el campo de Higgs, y la fuerza de esta interacción (el acoplamiento de Yukawa, ye ≈ 2.94 × 10⁻⁶) determina la mass. La pequeñez del acoplamiento de Yukawa del electron en comparación con el del quark top (yt ≈ 1) es uno de los problemas de «jerarquía» no resueltos de la física de partículas. El electron parece ser una partícula verdaderamente elemental y puntual.`,
    whyItMatters: `Gobierna todo el comportamiento atómico y químico. Determina el tamaño de los átomos mediante a₀ = ħ²/(mee²k), las energías de enlace de los electrons, la energy de los rayos X y la profundidad de penetración de la radiación beta.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-factor',
    value: '−2.002319304',
    unit: 'adimensional',
    exact: '−2.00231930436256',
    category: 'Particle',
    description: 'La predicción verificada con mayor precisión en toda la ciencia.',
    discoveredBy: 'Kusch & Foley (1948) · Cálculo QED: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `El g-factor es la razón entre el momento magnético real del electron y el que tendría si fuera una partícula de Dirac simple (g = 2 exactamente). El momento magnético anómalo es ae = (ge − 2)/2 = 0.001 159 65.`,
    simpleExample: `La predicción teórica de ae en QED requiere sumar diagramas de Feynman con hasta 10 loops (que involucran 12,672 diagramas solo en el cuarto orden). El resultado concuerda con el experimento a 12 cifras decimales: 1 parte por billón.`,
    deepMeaning: `El momento magnético anómalo del electron es la predicción verificada con mayor precisión en toda la ciencia. La electrodinámica cuántica (QED) calcula la desviación respecto a g = 2 como una serie de potencias en la fine-structure constant α: ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... Cualquier desviación de la predicción de QED indicaría nueva física más allá del Modelo Estándar. El éxito de este cálculo es el mayor triunfo de la física teórica.`,
    whyItMatters: `El mayor triunfo de la física teórica. Pone a prueba la QED con mayor rigor que cualquier otra medición. Proporciona la determinación más precisa de la fine-structure constant α.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton Mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Particle',
    description: 'Rest mass del proton — 1836 veces más pesado que el electron.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `En unidades de energy: mpc² = 938.272 MeV. El proton es 1836.15 veces más pesado que el electron. Esta razón de masses es uno de los números más relevantes de la física atómica.`,
    simpleExample: `La gran mass del proton hace que su longitud de onda de de Broglie a energías térmicas sea ~43 veces más pequeña que la de un electron, con lo que los protones son mucho menos ondulatorios cuánticamente. Por eso funciona la aproximación de Born-Oppenheimer: los núcleos actúan como partículas clásicas.`,
    deepMeaning: `A diferencia del electron, el proton no es fundamental: es una partícula compuesta por dos quarks up y un quark down, unidos por la force fuerte mediada por gluones. Llamativamente, las masses de los quarks solo representan ~1% de la mass del proton. El 99% restante proviene de la kinetic energy de los quarks y de la energy almacenada en los campos de gluones —una manifestación profunda de E = mc²: la mass es mayoritariamente energy—. El proton tiene un radio de charge finito de 0.8409 fm.`,
    whyItMatters: `Los protones definen los números atómicos y casi toda la mass atómica. Casi toda la mass de tu cuerpo es en realidad la energy del campo de la cromodinámica cuántica (QCD) dentro de protones y neutrones. Si fuera significativamente diferente, la vida cambiaría de forma fundamental.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-factor',
    value: '5.586',
    unit: 'adimensional',
    exact: '5.5856946893',
    category: 'Particle',
    description: 'Gran momento magnético anómalo que demostró que el proton es compuesto.',
    discoveredBy: 'Otto Stern (1933) · Premio Nobel 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `Para un proton simple de Dirac, gp debería ser igual a 2. En cambio, gp ≈ 5.586, casi tres veces mayor. Este enorme momento magnético anómalo fue uno de los primeros descubrimientos experimentales que apuntaban a la estructura compuesta del proton.`,
    simpleExample: `Si el proton fuera una partícula puntual simple sin estructura, se comportaría como un imán de intensidad 2. El hecho de que sea 5.586 es la prueba numérica directa de que hay cargas internas en movimiento en su interior (quarks).`,
    deepMeaning: `Otto Stern midió gp ≈ 5.6 en 1933, cuando el proton se consideraba una partícula fundamental de Dirac. El resultado impactó a la comunidad física. El gran momento magnético anómalo —y el momento magnético no nulo del neutron— fueron evidencias clave para el modelo de quarks. Estos valores pueden entenderse parcialmente hoy mediante cálculos de QCD, aunque un cálculo de primeros principios totalmente preciso sigue siendo un gran desafío.`,
    whyItMatters: `Descubrimiento históricamente esencial que condujo al modelo de quarks. Central para calcular resonancias magnéticas en núcleos atómicos (NMR/MRI). Prueba rigurosa de la teoría de la estructura hadrónica.`
  },

  // ── PARTE 6: CONSTANTES DEL NEUTRÓN ──────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron Mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'Ligeramente más pesado que el proton — la diferencia de mass permite la desintegración beta.',
    discoveredBy: 'James Chadwick (1932) · Premio Nobel 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `El neutron es ligeramente más pesado que el proton: en 1.293 MeV/c². En unidades de energy: mnc² = 939.565 MeV. Esta pequeña pero crucial diferencia de mass significa que un neutron libre es inestable: decae por desintegración beta.`,
    simpleExample: `Un neutron libre decae en ~10 minutos (semivida 613.9 s). La energy liberada es la diferencia de mass de 1.293 MeV. Dentro de los núcleos, los neutrones se estabilizan por la energy de enlace nuclear y no se desintegran.`,
    deepMeaning: `Si el neutron fuera más ligero que el proton en más que la mass del electron, los protones libres decaerían en neutrones y positrones: los átomos de hidrógeno serían inestables, alterando fundamentalmente toda la química. La diferencia de mass determinó la razón neutrón-protón (n/p ≈ 1/7) fijada durante la nucleosíntesis del Big Bang, estableciendo las abundancias cósmicas de hidrógeno (75%) y helio (25%).`,
    whyItMatters: `Gobierna la estabilidad nuclear, la desintegración beta y la abundancia cósmica de los elementos. La diferencia de mass del neutron es cosmológicamente esencial para la existencia del hidrógeno y, por tanto, de la vida.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron Magnetic Moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Momento magnético negativo a pesar de tener charge nula — prueba de quarks internos.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `El neutron tiene un momento magnético negativo (−1.913 magnetones nucleares) a pesar de tener un charge eléctrico neto absolutamente nulo.`,
    simpleExample: `Una partícula neutra sin estructura interna no debería tener momento magnético. El hecho de que el neutron reaccione a los campos magnéticos es la prueba irrefutable de que contiene subpartículas cargadas cuyos efectos no se cancelan por completo.`,
    deepMeaning: `Un momento magnético requiere distribución de charge o de spin. El momento magnético negativo del neutron surge de su estructura interna de quarks: los dos quarks down (charge −e/3 cada uno) y un quark up (charge +2e/3) están en constante movimiento cuántico. La distribución espacial de los quarks cargados en rotación crea un momento magnético neto negativo. La explicación reside en la subestructura de quarks: el neutron contiene un quark up y dos quarks down.`,
    whyItMatters: `Uno de los resultados más sorprendentes de la física nuclear. Los límites actuales sobre el Momento Dipolar Eléctrico (EDM) del neutron se usan para poner a prueba la simetría CP y explicar la asimetría materia-antimateria del universo.`
  },

  // ── PARTE 7: CONSTANTES DEL MUÓN Y EL TAU ────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon Mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Particle',
    description: 'La copia más pesada del electron — «¿Quién pidió eso?»',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `El muon es 206.768 veces más pesado que el electron. Lleva la misma charge e interactúa de forma idéntica en todos los aspectos no gravitacionales, como si la naturaleza hubiera creado una segunda copia más pesada del electron.`,
    simpleExample: `Los muones de rayos cósmicos creados a 15 km de altitud viajan a ~0.99c. Clásicamente deberían desintegrarse antes de llegar al suelo (semivida 2.2 μs → solo 650 m de recorrido). Sin embargo, llegan en grandes cantidades porque la dilatación temporal relativista (γ ≈ 7) extiende su semivida a ~15 μs.`,
    deepMeaning: `El muon no encaja en ningún modelo teórico sencillo. Su existencia es simplemente un hecho de la naturaleza. Se desintegra: μ⁻ → e⁻ + ν̄e + νμ. Los átomos muónicos (μ⁻ reemplazando al e⁻) orbitan ~207 veces más cerca del núcleo, haciéndolos exquisitamente sensibles a la estructura nuclear. El momento magnético anómalo del muon (g-2) muestra actualmente una discrepancia de ~4σ respecto a la teoría.`,
    whyItMatters: `El momento magnético anómalo del muon es la principal pista experimental de física más allá del Modelo Estándar. Los muones se usan para obtener imágenes del interior de volcanes y detectar material nuclear de contrabando.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon Anomalous Magnetic Moment',
    value: '0.0011659',
    unit: 'adimensional',
    exact: '0.00116592059',
    category: 'Particle',
    description: 'La principal pista experimental de física más allá del Modelo Estándar.',
    discoveredBy: 'Experimento Muon g-2 de Fermilab',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Al igual que el electron, el muon tiene un momento magnético anómalo. ae = (ge − 2)/2 = 0.001 165 920 59. Mide la desviación respecto a la predicción de Dirac g = 2.`,
    simpleExample: `A diferencia del electron, el muon es sensible a las contribuciones virtuales de partículas más pesadas porque las correcciones cuánticas escalan como (mμ/M)², donde M es la mass de la partícula virtual.`,
    deepMeaning: `Existe una discrepancia de aproximadamente 4.2 desviaciones estándar entre la teoría y el experimento —peligrosamente cerca del umbral de 5 sigma para un descubrimiento definitivo—. Si se confirma, sería la primera evidencia clara de física más allá del Modelo Estándar, posiblemente partículas supersimétricas o dimensiones extra. La resolución depende de los cálculos de QCD en red.`,
    whyItMatters: `Uno de los temas más candentes de la física de partículas. Si se confirma, exigiría una reescritura fundamental de nuestra comprensión del mundo subatómico.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton Mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Particle',
    description: 'El leptón cargado más pesado — 3477 veces más pesado que el electron.',
    discoveredBy: 'Martin Perl et al. (1975) · Premio Nobel 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `El leptón tau es el tercero y más pesado de los leptones cargados: 3477 veces más pesado que el electron y 16.8 veces más pesado que el muon.`,
    simpleExample: `El tau es tan pesado (1.78 GeV) que puede desintegrarse en hadrones —piones y kaones—, a diferencia del muon. Su semivida extremadamente corta (~2.9 × 10⁻¹³ s) significa que recorre solo ~87 μm antes de desintegrarse, lo que requiere una precisión de micras para observarlo.`,
    deepMeaning: `El tau es el leptón cargado de tercera generación. Por qué existen exactamente tres generaciones de leptones, y por qué tienen masses tan radicalmente diferentes, es uno de los misterios más profundos del Modelo Estándar. La jerarquía de masses (0.511 MeV → 105.7 MeV → 1776.9 MeV) carece de explicación teórica. El neutrino tau no se detectó directamente hasta el año 2000.`,
    whyItMatters: `La existencia de tres generaciones de leptones es un misterio profundo de la naturaleza. El tau y su neutrino fueron cruciales para establecer el Modelo Estándar como una teoría consistente.`
  },

  // ── PARTE 8: CONSTANTES FÍSICO-QUÍMICAS ──────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas Constant',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'Thermodynamic',
    description: 'R = NA × k — pilar de la termodinámica y la química.',
    discoveredBy: 'Varios (siglo XIX)',
    formula: 'PV = nRT',
    whatItSays: `R es la Boltzmann Constant escalada al nivel molar. La ley del gas ideal PV = nRT combina la ley de Boyle, la ley de Charles y la ley de Avogadro en una única ecuación.`,
    simpleExample: `La speed of sound en un gas: v = √(γRT/M). Para el aire (M = 0.029 kg/mol, γ = 1.4) a 20°C, v ≈ 343 m/s. Esto muestra que la speed of sound está determinada fundamentalmente por R y la temperature.`,
    deepMeaning: `Las capacidades caloríficas molares de los gases ideales son múltiplos simples de R: Cv = (3/2)R para gases monóatómicos, (5/2)R para gases diatómicos. En mecánica estadística, la entropy de un gas ideal (ecuación de Sackur-Tetrode) contiene R. Aparece en la entropy de mezcla, en la ecuación de Clausius-Clapeyron, en la ecuación de van't Hoff para la presión osmótica y en la ecuación de Nernst para potenciales de electrodo.`,
    whyItMatters: `La constante universal de la termodinámica. Cada ley de los gases, cada cálculo termodinámico, cada modelo atmosférico y cada cálculo de energética de reacciones químicas usa R.`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann Constant',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Thermodynamic',
    description: 'Potencia irradiada por un cuerpo negro — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `Un cuerpo negro perfecto irradia potencia electromagnética por unidad de área P/A = σT⁴. σ se deriva de constantes más fundamentales: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `La temperature superficial del Sol de ~5778 K da una potencia total de σ × T⁴ × (4πR_sol²) ≈ 3.83 × 10²⁶ W. Tu cuerpo (T ≈ 310 K) irradia σ × (310)⁴ × (1.7 m²) ≈ 520 W, de los cuales aproximadamente la mitad son reemplazados por calor metabólico.`,
    deepMeaning: `La dependencia T⁴ surge de integrar el espectro del cuerpo negro de Planck sobre todas las frequencies. Significa que duplicar la temperature aumenta la potencia irradiada por un factor de 2⁴ = 16. El fondo cósmico de microondas (CMB) —radiación remanente del Big Bang— es un cuerpo negro perfecto a T = 2.725 K. La temperature efectiva de la Tierra se determina equilibrando la radiación solar con la emisión σT⁴.`,
    whyItMatters: `Gobierna la luminosidad estelar, el balance energético y el clima de la Tierra, las cámaras térmicas, la pirometría óptica y la estructura de temperature del universo.`
  },

  {
    symbol: 'b',
    name: 'Wien Displacement Constant',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'Thermodynamic',
    description: 'Relaciona la longitud de onda pico de un cuerpo negro con su temperature.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `La ley de desplazamiento de Wien relaciona la longitud de onda pico de la radiación de cuerpo negro con la temperature: λ_max × T = b. Cuanto más caliente es un objeto, más corta (más azul) es su longitud de onda pico.`,
    simpleExample: `El Sol (T = 5778 K) alcanza su máximo en λ_max ≈ 502 nm — light verde. Los ojos humanos evolucionaron para ser más sensibles exactamente en este rango. El cuerpo humano (T = 310 K) emite principalmente a λ_max ≈ 9.4 μm — infrarrojo medio, razón por la cual funcionan las cámaras térmicas.`,
    deepMeaning: `La versión de frequency pico f_max = b' × T utiliza b' = 5.879 × 10¹⁰ Hz/K. Nótese que la frequency pico no se corresponde simplemente con c/λ_max porque las distribuciones de longitud de onda y frequency tienen formas diferentes. Históricamente, la razón entre las constantes de radiación se utilizó para medir h y k de forma independiente.`,
    whyItMatters: `Fundamental para la imagen térmica, la medición de la temperature estelar, la ciencia del clima y la física de la radiación de cuerpo negro.`
  },

  // ── PARTE 9: CONSTANTES GRAVITACIONALES Y ELECTRODÉBILES ─────────────────────

  {
    symbol: 'G',
    name: 'Gravitational Constant',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universal',
    description: 'La force más débil — la constante fundamental conocida con menor precisión.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Ley de Newton: F = Gm₁m₂/r². En Relatividad General, G aparece en las ecuaciones de campo de Einstein, que gobiernan cómo la materia curva el espaciotiempo.`,
    simpleExample: `La gravitación entre dos masses de 1 kg separadas 1 metro: F = 6.674 × 10⁻¹¹ N —aproximadamente el weight de una sola bacteria—. La force electromagnética entre dos protones es 10³⁶ veces más fuerte. Por eso la gravedad es irrelevante a escalas atómicas.`,
    deepMeaning: `G es la constante fundamental conocida con menor precisión —solo con 5 cifras significativas—. Esto se debe a que la gravedad es la force más débil: medirla en el laboratorio implica luchar contra el ruido sísmico y las fuerzas residuales. El factor 8πG/c⁴ cuantifica la curvatura del espaciotiempo por unidad de energy. La longitud de Planck lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m es donde se espera la gravedad cuántica: 10²⁰ veces más pequeña que un proton.`,
    whyItMatters: `Controla todos los fenómenos gravitacionales, desde una pelota lanzada hasta los agujeros negros y la estructura a gran escala del universo. La ausencia de una teoría cuántica de la gravedad es el problema no resuelto más profundo de la física.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling Constant',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Particle',
    description: 'Fuerza de acoplamiento de la force nuclear débil — gobierna la desintegración beta.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF es la constante de acoplamiento de la force nuclear débil en la teoría efectiva de cuatro fermiones de Fermi para la desintegración beta: n → p + e⁻ + ν̄e. La sección eficaz débil es proporcional a GF².`,
    simpleExample: `La interacción débil es tan débil que un neutrino puede atravesar un año luz de plomo con solo un 50% de probabilidad de ser detenido. Sin embargo, es esencial para la energy del Sol: la cadena pp comienza con una interacción débil.`,
    deepMeaning: `A diferencia de e², GF tiene dimensiones de energy⁻², lo que hace que la teoría de Fermi no sea renormalizable. La solución fue la unificación electrodébil (Nobel 1979): la force débil está mediada por los bosones W y Z masivos (~80–91 GeV). A bajas energías, el intercambio de un bosón W parece una interacción puntual. La gran mass del W suprime las interacciones débiles, haciendo que la desintegración beta sea lenta a pesar de que el acoplamiento subyacente es comparable al electromagnetismo.`,
    whyItMatters: `Gobierna todas las desintegraciones beta, las interacciones de neutrinos y la unificación electrodébil. La force débil impulsa la cadena pp del Sol y es responsable de la síntesis nuclear de los elementos pesados en las estrellas.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Weak Mixing Angle',
    value: '0.2229',
    unit: 'adimensional',
    exact: '0.22290',
    category: 'Particle',
    description: 'Cuantifica la mezcla entre las forces electromagnética y débil.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `El ángulo de mezcla débil θW (ángulo de Weinberg) parametriza la mezcla entre el photon y el bosón Z en la unificación electrodébil. e = g sin θW = g' cos θW.`,
    simpleExample: `El valor sin²θW ≈ 0.231 se mide con extraordinaria precisión en colisionadores de partículas (LHC) y a partir de experimentos de violación de paridad atómica.`,
    deepMeaning: `En la unificación electrodébil, el photon y el bosón Z son mezclas de dos bosones gauge subyacentes (W⁰ y B). La «corrida» de sin²θW con la energy está predicha con precisión por el Modelo Estándar y se mide para confirmar las correcciones radiativas electrodébiles —una prueba rigurosa de la teoría—.`,
    whyItMatters: `Un parámetro fundamental del Modelo Estándar que vincula las propiedades de las forces electromagnética y nuclear débil.`
  },

  // ── PARTE 11: CONSTANTES ATÓMICAS Y NUCLEARES ADICIONALES ────────────────────

  {
    symbol: 'κ',
    name: 'Quantum of Circulation',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atomic',
    description: 'Unidad fundamental de circulación para un electron — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `La circulación de un fluido cuántico (como el helio superfluido o un superconductor) está cuantizada en unidades de h/m. Para los superconductores, la partícula relevante es un par de Cooper de mass 2me.`,
    simpleExample: `En el helio-4 superfluido, los vórtices llevan circulación en múltiplos de h/m_He. El helio superfluido en rotación desarrolla una red de estos vórtices cuantizados, análogos a la red de vórtices de Abrikosov en superconductores tipo II.`,
    deepMeaning: `La cuantización de la circulación es una consecuencia directa de la univaluedad de la función de onda en mecánica cuántica. Si un superfluido rota, la fase de la función de onda macroscópica debe recuperar el mismo valor tras dar una vuelta completa a cualquier lazo cerrado. Esto obliga a que la circulación esté cuantizada: Γ = n × h/m.`,
    whyItMatters: `Explica el comportamiento de los superfluidos y los superconductores. El quantum de circulación también aparece en el efecto Aharonov-Bohm, que conecta la fase cuántica con el magnetic flux.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson Cross Section',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atomic',
    description: 'Área efectiva que presenta un electron libre a un photon entrante.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `Cuando los photons de baja energy (energy del photon ≪ mec²) se dispersan por un electron libre, la sección eficaz de dispersión total es σT = (8π/3) × re², donde re es el radio clásico del electron.`,
    simpleExample: `Piensa en el electron como si presentara un «área objetivo» de σT a un photon entrante. Si envías photons a una caja de electrons, el camino libre medio antes de la dispersión es λ = 1/(nσT).`,
    deepMeaning: `La Thomson Cross Section es el límite de dispersión elástica de la fórmula de dispersión de Compton más general. Cuando la energy del photon Eγ ≪ 0.511 MeV, el retroceso del electron es despreciable y la dispersión es puramente clásica. En los interiores estelares, la presión de radiación se transmite por la dispersión Thomson de photons y electrons. La luminosidad de Eddington —la luminosidad máxima que puede tener una estrella antes de que la presión de radiación supere a la gravedad— depende de σT.`,
    whyItMatters: `La dispersión Thomson explica por qué el cielo es azul (a bajas frequencies) y por qué la corona solar es visible durante los eclipses. El Fondo Cósmico de Microondas (CMB) se creó cuando el universo se enfrió lo suficiente como para que los electrons se combinaran con los protones; antes de ese momento, el universo era opaco debido a la dispersión Thomson.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Electron Charge-to-Mass Ratio',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atomic',
    description: 'Determina con qué intensidad un electron responde a las forces electromagnéticas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `Esta es la razón entre la charge y la mass del electron. Determina con qué intensidad un electron responde a las forces electromagnéticas.`,
    simpleExample: `En un tubo de rayos catódicos (CRT), la desviación del haz de electrons por campos eléctricos y magnéticos está gobernada por e/me. El gran valor de e/me significa que los electrons se desvían mucho más fácilmente que los iones.`,
    deepMeaning: `El famoso experimento de Thomson con rayos catódicos demostró que estos eran corrientes de partículas cargadas negativamente con una razón ~1800 veces mayor que la de los iones de hidrógeno. La cyclotron frequency ωc = eB/me es directamente proporcional a e/me. Esta razón también aparece en la plasma frequency ωp² = ne²/(meε₀), que gobierna cómo las ondas de radio se reflejan en la ionosfera.`,
    whyItMatters: `Fundamental para la espectrometría de masses, los aceleradores de partículas y la electrónica de vacío. Gobierna el calentamiento por resonancia de ciclotron de electrons en plasmas de fusión.`
  },

  {
    symbol: 'M(e)',
    name: 'Electron Molar Mass',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atomic',
    description: 'Mass de un mol de electrons — me × NA.',
    discoveredBy: 'Derivado',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `La mass de un mol de electrons es extremadamente pequeña: aproximadamente 0.55 miligramos por mol.`,
    simpleExample: `En electroquímica, al calcular cambios de mass en los electrodos durante la electrólisis, la Electron Molar Mass es despreciable en comparación con las masses iónicas.`,
    deepMeaning: `En las mediciones de mass atómica de alta precisión, las energías de enlace y la mass de la nube de electrons deben tenerse en cuenta. La mass atómica de un átomo es M(átomo) = M(núcleo) + Z × M(e) − (energía de enlace del electron)/c². La espectrometría de masses por trampa de Penning requiere esta corrección para alcanzar 10 cifras significativas.`,
    whyItMatters: `Esencial para las comparaciones de mass más precisas de la física y para comprobar la consistencia de las definiciones del sistema SI.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton Mass Ratio',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'adimensional',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atomic',
    description: 'El electron es 1836.15 veces más ligero que el proton.',
    discoveredBy: 'Derivado',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `La mass de un electron en comparación con la de un proton. Esta razón es aproximadamente 1/1836.`,
    simpleExample: `Dado que me/mp ≪ 1, los electrons se mueven mucho más rápido que los núcleos en las moléculas. Esto permite resolver la ecuación de Schrödinger electrónica con posiciones nucleares fijas: la aproximación de Born-Oppenheimer.`,
    deepMeaning: `Esta razón separa las escalas de energy química (~eV) de las escalas de energy nuclear (~MeV). También es crítica en astrofísica estelar: el límite de Chandrasekhar —la mass máxima de una enana blanca— depende directamente de (mp/me). Las variaciones a lo largo del tiempo cósmico se comprueban mediante espectros de absorción de hidrógeno molecular en quásares lejanos.`,
    whyItMatters: `Uno de los números adimensionales más influyentes de la naturaleza. Gobierna la estructura atómica, la jerarquía de escalas de energy y la estabilidad de las estrellas.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Proton Charge-to-Mass Ratio',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atomic',
    description: 'Razón de la elementary charge a la Proton Mass — 1836 veces más pequeña que la del electron.',
    discoveredBy: 'Derivado',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `La razón de la elementary charge a la Proton Mass. Dicta cómo responden los protones a los campos magnéticos.`,
    simpleExample: `La cyclotron frequency del proton en un campo magnético es 1836 veces menor que la del electron. Por eso la MRI utiliza ondas de radiofrecuencia (rango de MHz) en lugar de microondas.`,
    deepMeaning: `En la espectrometría de masses, los iones se separan por sus razones charge-to-mass. La e/mp del proton sirve como estándar de calibración fundamental. La espectrometría de masses por resonancia de ciclotron (trampas de Penning) utiliza esta razón para medir masses atómicas con extrema precisión. En la física de aceleradores, la rigidez de un haz de protones determina el radio de curvatura en campos magnéticos.`,
    whyItMatters: `Fundamental para la imagen médica (MRI), la espectrometría de masses y el diseño de aceleradores de partículas de alta energy como el LHC.`
  },

  {
    symbol: 'M(p)',
    name: 'Proton Molar Mass',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Atomic',
    description: 'La mass de un mol de protones.',
    discoveredBy: 'Derivado',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `La mass de un mol de protones es aproximadamente 1.007 g/mol.`,
    simpleExample: `Es ligeramente menor que 1 g/mol porque la unidad de mass atómica se define como 1/12 de la mass del carbono-12, que incluye contribuciones de energy de enlace y mass del electron.`,
    deepMeaning: `En física nuclear, el valor Q de una reacción nuclear —la energy liberada o absorbida— se calcula a partir de la diferencia de mass usando masses molares. La Proton Molar Mass es una referencia fundamental en estos cálculos.`,
    whyItMatters: `Fundamental para los cálculos estequiométricos en química nuclear y astrofísica.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Neutron-Electron Mass Ratio',
    value: '1838.68',
    unit: 'adimensional',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'El neutron es 1838.68 veces más pesado que el electron.',
    discoveredBy: 'Derivado',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `La razón de la Neutron Mass a la Electron Mass. Es ligeramente mayor que la razón proton-electron.`,
    simpleExample: `El neutron es más pesado que el proton en 2.531 masses de electron. Esta diferencia de mass corresponde a 1.293 MeV: la energy liberada en la desintegración beta del neutron.`,
    deepMeaning: `El hecho de que esta razón sea mayor que la proton-electron hace que los neutrones libres sean inestables. Si el neutron fuera más ligero que el proton en más de la mass del electron, el hidrógeno no existiría como elemento estable. Esta razón se mide con extraordinaria precisión usando trampas de Penning.`,
    whyItMatters: `Gobierna la estabilidad de los bloques constructivos del universo.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton Mass Ratio',
    value: '1.00138',
    unit: 'adimensional',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'El neutron es ligeramente más pesado que el proton en un 0.138%.',
    discoveredBy: 'Derivado',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `El neutron es más pesado que el proton en una fracción de 0.138%.`,
    simpleExample: `Esta tiny diferencia de mass (1.293 MeV/c²) determinó que aproximadamente el 25% de la materia bariónica se convirtiera en helio-4 durante el Big Bang, y el resto permaneciera como hidrógeno.`,
    deepMeaning: `En el universo temprano, la razón de equilibrio de neutrones a protones seguía el factor de Boltzmann. A medida que el universo se enfriaba y las interacciones débiles se congelaban, la razón n/p quedó fijada en torno a 1/7. Si la diferencia de mass fuera ligeramente diferente, la evolución estelar y la química cambiarían.`,
    whyItMatters: `La abundancia cósmica observada de helio de ~25% es una de las mayores confirmaciones del modelo del Big Bang, gracias a esta constante.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Neutron g-factor',
    value: '−3.826',
    unit: 'adimensional',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'Revela la estructura interna de quarks del neutron eléctricamente neutro.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `El g-factor del neutron es −3.826. Para una partícula de Dirac sin estructura con charge nula, debería ser exactamente 0.`,
    simpleExample: `El momento magnético no nulo del neutron neutro fue uno de los resultados más impactantes de la física nuclear, demostrando que las partículas neutras pueden tener partes internas.`,
    deepMeaning: `El neutron contiene un quark up y dos quarks down. Sus momentos magnéticos y su movimiento orbital producen el momento magnético neto negativo. El modelo de quarks no relativista predice g ≈ −3.67; la discrepancia se debe a correcciones relativistas y efectos de gluones. Las mediciones precisas ponen a prueba los cálculos de QCD sobre la estructura de los hadrones.`,
    whyItMatters: `Prueba rigurosa del Modelo Estándar y la estructura de quarks. También se usa para establecer límites sobre el momento dipolar eléctrico del neutron.`
  },

  {
    symbol: 'M(n)',
    name: 'Neutron Molar Mass',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'La mass de un mol de neutrones.',
    discoveredBy: 'Derivado',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `Un mol de neutrones pesa aproximadamente 1.00866 gramos.`,
    simpleExample: `Aunque los neutrones libres decaen en 10 minutos, la Neutron Molar Mass es esencial para calcular la «curva de energy de enlace», que dicta cuánta energy pueden producir las centrales nucleares.`,
    deepMeaning: `La energy de enlace nuclear por nucleón se calcula usando masses atómicas: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². La mayor Neutron Mass en comparación con la Proton Mass afecta a cada cálculo de energy de enlace nuclear.`,
    whyItMatters: `Fundamento de la ingeniería nuclear y el estudio de los isótopos nucleares.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Neutron Compton Wavelength',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'Escala de longitud natural de la física nuclear — h/mnc.',
    discoveredBy: 'Derivado',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `La longitud de onda de un photon cuya energy es igual a la energy en reposo del neutron. Es aproximadamente 1.32 femtómetros.`,
    simpleExample: `Esta longitud de onda es comparable al tamaño del propio neutron (~0.8 fm) y al alcance de las forces nucleares (~1.4 fm).`,
    deepMeaning: `Las escalas de distancia características de la física nuclear están fijadas por las longitudes de onda de Compton de los nucleones y los piones. Por debajo de esta escala, los efectos de la teoría cuántica de campos como la polarización del vacío se vuelven importantes. En los experimentos de dispersión de neutrones usados para estudiar estructuras proteicas, la longitud de onda del neutron se ajusta para coincidir con los espaciados interatómicos.`,
    whyItMatters: `Establece la escala por debajo de la cual el neutron no puede tratarse como una simple partícula no relativista.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton Wavelength',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Particle',
    description: 'Longitud de onda de un photon cuya energy es igual a la rest mass del muon.',
    discoveredBy: 'Derivado',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `La Muon Compton Wavelength es aproximadamente 11.7 fm — más pequeña que la del electron por la razón de masses (206.77).`,
    simpleExample: `En los átomos muónicos, el muon orbita mucho más cerca del núcleo que lo haría un electron, porque el Bohr Radius del muon escala inversamente con la mass.`,
    deepMeaning: `El hidrógeno muónico tiene el muon orbitando a ~256 fm, suficientemente cerca del proton como para que su tamaño finito afecte significativamente a los niveles de energy. Por eso la espectroscopía del hidrógeno muónico proporciona las mediciones más precisas del radio de charge del proton.`,
    whyItMatters: `Llevó al «enigma del radio del proton», un importante foco de la física atómica de precisión moderna.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g-factor',
    value: '−2.00233',
    unit: 'adimensional',
    exact: '−2.0023318418',
    category: 'Particle',
    description: 'Sonda crucial para partículas pesadas no descubiertas.',
    discoveredBy: 'Experimental / cálculo QED',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Al igual que el electron, el muon tiene un momento magnético anómalo ae = 0.001 165 920 59.`,
    simpleExample: `El experimento g-2 en Fermilab mide esto para comprobar si las partículas pesadas «virtuales» procedentes de la supersimetría u otras teorías están afectando al spin magnético del muon.`,
    deepMeaning: `El valor experimental actual discrepa de la predicción del Modelo Estándar en ~4.2 desviaciones estándar. La resolución depende de la precisión de los cálculos en red de QCD de la polarización del vacío hadrónico.`,
    whyItMatters: `Una de las discrepancias más significativas entre el Modelo Estándar y el experimento conocidas en la actualidad.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron Mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo del hidrógeno pesado — el estado nuclear ligado más simple.',
    discoveredBy: 'Harold Urey (1931) · Premio Nobel 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `El deuterón es el núcleo del deuterio (un proton más un neutron). Su energy de enlace es 2.224 MeV.`,
    simpleExample: `La energy de enlace es notablemente pequeña (compárese con el helio-4: 28.3 MeV). Esta fragilidad creó el «cuello de botella del deuterio» en el Big Bang, retrasando la formación de elementos más pesados.`,
    deepMeaning: `El deuterón es el estado nuclear ligado más simple, análogo al átomo de hidrógeno. Su momento cuadrupolar no nulo demuestra que la force nuclear tiene un componente tensorial que surge del intercambio de piones. El primer paso de la fusión en el Sol (p + p → d + e⁺ + νe) es extraordinariamente lento; la longevidad del Sol se debe a este cuello de botella.`,
    whyItMatters: `Banco de pruebas fundamental de la teoría de la force nuclear. El deuterio se usa como moderador de neutrones en reactores nucleares y en investigación farmacéutica.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron Magnetic Moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Momento magnético del núcleo más simple.',
    discoveredBy: 'Física nuclear / estudios NMR',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `El momento magnético del deuterón es 0.857 magnetones nucleares.`,
    simpleExample: `Si los spins simplemente estuvieran alineados, la suma sería μp + μn = 0.880 μN. El valor real es 0.857 μN. Esta discrepancia se explica con precisión por el momento magnético orbital de la mezcla de onda D en la función de onda.`,
    deepMeaning: `La concordancia entre el momento magnético calculado y el medido del deuterón valida los modelos de force nuclear. La NMR del deuterón se usa para estudiar la dinámica molecular.`,
    whyItMatters: `Hermosa confirmación del modelo de estructura nuclear y la teoría del intercambio de piones.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g-factor',
    value: '0.8574',
    unit: 'adimensional',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'Relaciona el momento magnético del deuterón con el Nuclear Magneton.',
    discoveredBy: 'Derivado',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + correcciones',
    whatItSays: `A diferencia del electron (g ≈ −2) o el proton (g ≈ 5.586), el g-factor del deuterón es inferior a 1.`,
    simpleExample: `Este valor refleja la cancelación parcial entre los momentos magnéticos del proton y el neutron dentro del núcleo.`,
    deepMeaning: `Las mediciones de precisión permiten extraer el momento magnético del neutron mediante correcciones que incluyen corrientes de intercambio de mesones y efectos relativistas.`,
    whyItMatters: `Se usa para validar modelos complejos de force nuclear al nivel del 0.1%.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion Mass',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo del helio-3 — dos protones y un neutron.',
    discoveredBy: 'Datos experimentales de física nuclear',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `El helión es el núcleo del helio-3. Su energy de enlace es 7.718 MeV.`,
    simpleExample: `El helio-3 superfluido es un sistema modelo para la superconductividad no convencional y los estados cuánticos topológicos.`,
    deepMeaning: `He-3 es el núcleo espejo del tritón. La pequeña diferencia de mass entre ellos pone a prueba la simetría de carga de las forces nucleares. El g-factor del helión es −4.255 μN, reflejo de la contribución dominante del único neutron.`,
    whyItMatters: `Utilizado en detectores de neutrones de alta sección eficaz y para MRI pulmonar hiperpolarizado.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha Particle Mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo del helio-4 — extraordinariamente estable, energy de enlace de 28.3 MeV.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `La partícula alfa es el núcleo del helio-4. Tiene una energy de enlace de 7.074 MeV por nucleón —cerca del pico de la curva de energy de enlace—.`,
    simpleExample: `Las semividas de la desintegración alfa abarcan 20 órdenes de magnitud (de 0.3 μs a 14 mil millones de años). Ambos extremos se explican por la teoría de tunelaje cuántico de Gamow.`,
    deepMeaning: `La excepcional estabilidad de la partícula alfa explica por qué se emite preferentemente en la desintegración radiactiva. Tiene spin cero y momento magnético cero: un núcleo de capa completamente cerrada. El proceso triple alfa (3α → ¹²C) requiere una resonancia en el carbono-12 a 7.65 MeV (el estado Hoyle). Sin esta resonancia, no existiría carbono.`,
    whyItMatters: `Producto de la mayoría de las desintegraciones de núcleos pesados. El proceso triple alfa es el origen de todo el carbono del universo. Utilizado en radioterapia alfa dirigida contra el cáncer.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Atomic Mass Constant',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'Thermodynamic',
    description: '1/12 de la mass del carbono-12 — la unidad natural de masses atómicas.',
    discoveredBy: 'Estándar internacional (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `La unidad de mass atómica (u, o dalton, Da) se define como 1/12 de la mass de un átomo de carbono-12.`,
    simpleExample: `Carbono-12 = 12 u exactamente. Hidrógeno = 1.0078 u. Una proteína de 50 kDa tiene una mass de 50,000 × 1.661 × 10⁻²⁷ kg.`,
    deepMeaning: `La conversión 1 u = 931.494 MeV/c² es una de las más útiles en física nuclear. Diferencias de mass de miliunidades de mass atómica liberan energías en la escala de los MeV. La elección del carbono-12 fue un compromiso de 1961 entre las comunidades de física y química.`,
    whyItMatters: `Fundamento de la física nuclear, la espectrometría de masses y toda la bioquímica, donde las masses de las proteínas se expresan en daltons.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Molar Mass Constant',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'Relaciona la unidad de mass atómica con la mass molar.',
    discoveredBy: 'Redefinición del SI (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu relaciona la unidad de mass atómica con la mass molar: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Dado que Mu ≈ 1 g/mol, la mass molar de una sustancia en gramos es igual a su mass atómica relativa (por ejemplo, el agua es ~18.015 g/mol).`,
    deepMeaning: `Históricamente exactamente 1 g/mol. Tras 2019, tanto NA como mu se definen de forma independiente, por lo que Mu ya no es exactamente 1 g/mol: se desvía en torno a 10⁻⁹. Esto es despreciable para aplicaciones prácticas, pero un recordatorio de que el nuevo SI es fundamentalmente diferente.`,
    whyItMatters: `Fundamento de los cálculos estequiométricos en química. Cada conversión de moles a gramos depende de este valor.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Molar Planck Constant',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Thermodynamic',
    description: 'Planck Constant escalada al nivel molar — NA × h.',
    discoveredBy: 'Derivado',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `La energy por mol de photons por unidad de frequency.`,
    simpleExample: `En fotoquímica, la energy de un «Einstein» (un mol de photons) es NAhf.`,
    deepMeaning: `Aparece en la ecuación de Sackur-Tetrode para la entropy absoluta de un gas ideal. Conecta la función de partición mecánico-cuántica con las cantidades termodinámicas macroscópicas a escala molar.`,
    whyItMatters: `Fundamental para la fotoquímica y la termodinámica estadística.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Molar Volume of Ideal Gas (STP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'Thermodynamic',
    description: 'Volumen ocupado por un mol de gas ideal en condiciones normales.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `A 0°C y 101,325 Pa, un mol de cualquier gas ideal ocupa 22.413... litros.`,
    simpleExample: `Un litro de hidrógeno y un litro de oxígeno en condiciones normales contienen exactamente el mismo número de moléculas (2.688 × 10²²).`,
    deepMeaning: `De la ley del gas ideal: V = nRT/P. Este «volumen molar» permite convertir rápidamente entre cantidad de gas y volumen. El hecho de que todos los gases ideales tengan el mismo volumen molar en condiciones normales fue un hallazgo revolucionario de Avogadro.`,
    whyItMatters: `Uno de los números más útiles en la práctica de la química para la estequiometría de gases.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt Constant',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'Thermodynamic',
    description: 'Número de moléculas por metro cúbico de gas ideal en condiciones normales.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `El número de moléculas de aire a nivel del mar es aproximadamente 2.687 × 10²⁵ por metro cúbico.`,
    simpleExample: `El camino libre medio de una molécula de aire en condiciones normales es aproximadamente 66 nm. La frecuencia de colisiones es ~10¹⁰ por segundo.`,
    deepMeaning: `Loschmidt estimó esto en 1865 usando la viscosidad del gas y el diámetro molecular. Fue la primera estimación seria del número de moléculas en un volumen macroscópico y la primera evidencia directa de que los átomos tienen tamaños definidos. La dispersión de Rayleigh (por qué el cielo es azul) es proporcional a n₀.`,
    whyItMatters: `Fundamental para la física atmosférica y la historia de la teoría atómica.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Molar Volume of Silicon',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'Thermodynamic',
    description: 'Volumen ocupado por un mol de átomos de silicio en su red cristalina.',
    discoveredBy: 'Proyecto Avogadro',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `El volumen de un mol de silicio sólido en su estructura cúbica de diamante.`,
    simpleExample: `Mide el parámetro de red «a» por difracción de rayos X y la density macroscópica «ρ» para obtener NA con una precisión de 2 partes por billón.`,
    deepMeaning: `El silicio es el material de referencia para el método de density de cristal de rayos X. El Proyecto Avogadro usó esferas de silicio de 1 kg de extraordinaria perfección para redefinir el kilogramo en 2019. Conecta la cristalografía de rayos X con los estándares de mass macroscópicos.`,
    whyItMatters: `Central en la redefinición del kilogramo de 2019.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Molar Mass of Carbon-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'Thermodynamic',
    description: 'Mass de un mol de átomos de carbono-12.',
    discoveredBy: 'Redefinición del SI (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `Antes de 2019, este valor era exactamente 12 g/mol. Ahora, en el nuevo SI, tiene una pequeña incertidumbre medida.`,
    simpleExample: `La desviación respecto a exactamente 12 g/mol es de unas 10 partes por billón: completamente despreciable para la química, pero crítica para la metrología.`,
    deepMeaning: `Refleja la inconsistencia entre definir NA de forma exacta y la definición histórica de la unidad de mass atómica. Las unidades base se definen ahora fijando constantes fundamentales.`,
    whyItMatters: `Un recordatorio de que el nuevo SI se define mediante constantes, no mediante artefactos materiales.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'First Radiation Constant',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'Thermodynamic',
    description: 'Establece la escala general de la intensidad de la radiación de cuerpo negro — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Aparece en la ley de radiación de cuerpo negro de Planck para la radiancia espectral.`,
    simpleExample: `El Sol alcanza su máximo a ~502 nm (verde). Las células solares se diseñan para adaptarse a este espectro de Planck, calculado con precisión usando c₁.`,
    deepMeaning: `La ley de radiación de Planck lanzó la mecánica cuántica en 1900. La hipótesis cuántica de Planck introdujo el factor exponencial que suprime la divergencia a alta frequency (la catástrofe ultravioleta).`,
    whyItMatters: `Fundamental para la astrofísica, la energy solar y la cosmología.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'First Radiation Constant for Spectral Radiance',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Thermodynamic',
    description: 'c₁ dividida entre π — da la radiancia por unidad de ángulo sólido.',
    discoveredBy: 'Derivado',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Da la radiancia espectral por unidad de ángulo sólido en lugar de la irradiancia espectral hemisférica.`,
    simpleExample: `Esencial para calcular correctamente el rendimiento de los sistemas ópticos, como la sensibilidad de telescopios o la exposición de cámaras.`,
    deepMeaning: `Refleja la diferencia entre la emisión integrada en el hemisferio y la radiancia en una dirección específica. Para un emisor lambertiano, la relación involucra un factor de π.`,
    whyItMatters: `Esencial en radiometría y teledetección satelital.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Second Radiation Constant',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'Thermodynamic',
    description: 'Conecta longitud de onda y temperature en la función de Planck — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Aparece en el exponente de la función de Planck. Establece la transición entre los regímenes cuántico y clásico.`,
    simpleExample: `La ley de desplazamiento de Wien (λ_max × T = b) se deriva de c₂. Las cámaras térmicas detectan personas porque los cuerpos a 310 K emiten su máximo en el infrarrojo medio.`,
    deepMeaning: `Históricamente, la razón c₁/c₂ se usó para medir la Boltzmann Constant. A temperature ambiente, las correcciones cuánticas se vuelven importantes para la radiación infrarroja media.`,
    whyItMatters: `Fundamental para la ciencia del clima, la imagen térmica y la física estelar.`
  },

  {
    symbol: 'g',
    name: 'Standard Acceleration of Gravity',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (exacto)',
    category: 'Universal',
    description: 'Valor estándar de la acceleration gravitatoria en la superficie de la Tierra.',
    discoveredBy: 'Oficina Internacional de Pesas y Medidas (1901)',
    formula: 'W = mg',
    whatItSays: `Un valor convencional estándar definido para la acceleration gravitatoria.`,
    simpleExample: `La gravedad real varía desde ~9.780 m/s² en el ecuador hasta ~9.832 m/s² en los polos. El valor estándar se eligió para coincidir con las mediciones a 45° de latitud.`,
    deepMeaning: `Aparece como factor de conversión entre mass y force (kilogramo-fuerza). Los gravímetros miden la gravedad local con 9 cifras significativas para detectar deformaciones mareales y variaciones del nivel freático. El principio de equivalencia (Relatividad General) establece que esto es indistinguible de una acceleration en el espaciotiempo plano.`,
    whyItMatters: `Base de referencia para la ingeniería, la definición de la presión atmosférica y la pesada de precisión.`
  },

  // ── PARTE 19: UNIDADES ATÓMICAS ────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'a.u. of Length',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atomic',
    description: 'El Bohr Radius en unidades atómicas.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `La unidad de longitud en el sistema atómico. Todas las longitudes de enlace se expresan en Bohr.`,
    simpleExample: `Longitudes de enlace típicas: H-H = 1.40 a₀, C-C = 2.92 a₀.`,
    deepMeaning: `En unidades atómicas, ħ = me = e = 4πε₀ = 1. Esto simplifica enormemente las ecuaciones de la química cuántica.`,
    whyItMatters: `Unidad estándar en química computacional.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'a.u. of Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atomic',
    description: 'La Electron Mass en unidades atómicas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `La unidad de mass en el sistema atómico.`,
    simpleExample: `En química cuántica, todas las masses se expresan como múltiplos de me.`,
    deepMeaning: `Parte del sistema que fija las constantes fundamentales en 1 para simplificar la ecuación de Schrödinger.`,
    whyItMatters: `Mass base para todos los cálculos de estructura electrónica.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'a.u. of Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atomic',
    description: 'Escala de tiempo natural del movimiento electrónico en átomos.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `El tiempo para una evolución de fase de un radián a la escala de energy de Hartree.`,
    simpleExample: `El período orbital del electron en el estado fundamental del hidrógeno es 2π unidades atómicas de tiempo ≈ 152 attosegundos.`,
    deepMeaning: `La física de attosegundos estudia la dinámica electrónica en tiempo real a esta escala. El Premio Nobel de 2023 fue concedido por la tecnología de pulsos de attosegundos.`,
    whyItMatters: `Permite la observación directa del movimiento electrónico dentro de los átomos.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'a.u. of Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atomic',
    description: 'La Hartree Energy en unidades atómicas.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Unidad de energy en física atómica.`,
    simpleExample: `Energías de enlace en Hartrees: enlace H₂ = 0.174 Eh.`,
    deepMeaning: `Establece la escala de energy fundamental para todos los cálculos de estructura electrónica.`,
    whyItMatters: `Unidad de energy estándar en códigos computacionales como DFT.`
  },

  {
    symbol: 'e',
    name: 'a.u. of Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atomic',
    description: 'La elementary charge en unidades atómicas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `En unidades atómicas, el proton tiene charge +1 y el electron tiene charge −1.`,
    simpleExample: `El núcleo de helio tiene charge +2 a.u.`,
    deepMeaning: `Simplifica las matemáticas de la interacción electromagnética al fijar la charge fundamental en la unidad.`,
    whyItMatters: `Unidad base para las distribuciones de charge en moléculas.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'a.u. of Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atomic',
    description: 'Velocity del electron en el estado fundamental del hidrógeno.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — la velocity del electron en el modelo de Bohr.`,
    simpleExample: `En el oro (Z = 79), el electron 1s tiene una velocity de ~0.58c, lo que provoca la contracción relativista responsable del color amarillo del oro.`,
    deepMeaning: `Para los átomos más pesados, las velocidades que se aproximan a c requieren correcciones relativistas.`,
    whyItMatters: `Determina cuándo los efectos relativistas se vuelven importantes en la química.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'a.u. of Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atomic',
    description: 'Escala natural de la incertidumbre de momentum en el hidrógeno.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. de velocity) = ħ/a₀.`,
    simpleExample: `Por el principio de incertidumbre, la incertidumbre de momentum de un electron localizado dentro de a₀ es exactamente una unidad atómica.`,
    deepMeaning: `Conecta directamente la escala de longitud de los átomos con el momentum del electron en órbita.`,
    whyItMatters: `Gobierna la difracción electrónica y la dispersión en química cuántica.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'a.u. of Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atomic',
    description: 'Force electrostática entre el electron y el proton al Bohr Radius.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Enorme a escalas atómicas (82 nN), pero imperceptible para los seres humanos.`,
    simpleExample: `Fundamentos de la estabilidad atómica: el equilibrio entre esta force y la presión cuántica.`,
    deepMeaning: `Establece la escala de la fuerza del «pegamento» que mantiene unidos los átomos.`,
    whyItMatters: `Gobierna el enlace atómico y la resistencia de los materiales.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'a.u. of Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atomic',
    description: 'Campo eléctrico extraordinariamente intenso experimentado por el electron en el hidrógeno.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `El campo eléctrico al Bohr Radius (514 GV/m).`,
    simpleExample: `Los campos atómicos son ~100,000 veces más intensos que el campo de ruptura dieléctrica del aire.`,
    deepMeaning: `A intensidades superiores a ~10¹⁴ W/cm², los campos de los láseres son suficientemente intensos para arrancar electrons de los átomos, generando pulsos de attosegundos.`,
    whyItMatters: `Referencia para la física de campo intenso y la ionización por campo eléctrico.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'a.u. of Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atomic',
    description: 'Intensidad de campo magnético correspondiente a una unidad atómica.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 Tesla — enormemente más intenso que cualquier imán de laboratorio (~45 T).`,
    simpleExample: `Los campos magnéticos de las estrellas de neutrones alcanzan ~10⁸-10¹¹ Tesla, superando la unidad atómica.`,
    deepMeaning: `A esta escala, los efectos de QED sobre la propagación de los photons (birrefringencia del vacío) se vuelven significativos.`,
    whyItMatters: `Crítico para comprender las enanas blancas y los magnetares.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'a.u. of Permittivity',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atomic',
    description: 'Permitividad del vacío escalada a unidades atómicas — 4πε₀.',
    discoveredBy: 'Derivado',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `En unidades atómicas, la ley de Coulomb se convierte simplemente en F = q₁q₂/r².`,
    simpleExample: `Simplifica toda la matemática electrostática en los códigos de química cuántica.`,
    deepMeaning: `Una de las simplificaciones principales que elimina el factor 4πε₀ de los cálculos.`,
    whyItMatters: `Normalización estándar en física teórica.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'a.u. of Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atomic',
    description: 'Respuesta de segundo orden de la energy de un átomo a un campo magnético.',
    discoveredBy: 'Derivado',
    formula: '1 a.u.',
    whatItSays: `Se mide mediante desplazamientos químicos de NMR y mediciones de force magnética.`,
    simpleExample: `Se usa para calcular cómo responden las moléculas a los campos magnéticos de escala MRI.`,
    deepMeaning: `Cantidad fundamental en el estudio de las susceptibilidades magnéticas moleculares a nivel cuántico.`,
    whyItMatters: `Utilizado en espectroscopía NMR y simulaciones de química cuántica.`
  }
];
