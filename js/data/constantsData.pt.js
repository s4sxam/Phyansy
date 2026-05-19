// =============================================================================
// constantsData.pt.js — Banco de Dados de Constantes Físicas (Português)
// Versão i18n Manual — Tradução: Português do Brasil / Português Europeu
// Valores do CODATA 2022 | Explicações do Phyansy Reference Guide
//
// REGRAS DE TRADUÇÃO APLICADAS:
//   • Termos físicos mantidos em inglês: velocity, mass, energy, force, etc.
//   • Nomes de cientistas mantidos em inglês: Oppenheimer, Boltzmann, etc.
//   • Valores numéricos sem alteração
//   • Símbolos matemáticos e fórmulas sem alteração
//   • Tags HTML sem alteração
// =============================================================================

export const CONSTANTS_PT = [

  // ── PARTE 1: CONSTANTES UNIVERSAIS / DEFINIDORAS ──────────────────────────

  {
    symbol: 'c',
    name: 'Velocidade da Luz no Vácuo',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299.792.458 m/s (exato)',
    category: 'Universal',
    description: 'O limite fundamental de velocidade da causalidade em si.',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `A light percorre exatamente 299.792.458 metros em um segundo num vácuo perfeito. Não se trata de uma aproximação medida — desde 1983, o próprio metro é definido por esse número. Portanto, c é hoje um inteiro exato e fixo por definição internacional.`,
    simpleExample: `A light da Lua chega ao olho humano em cerca de 1,28 segundos. A light do Sol leva aproximadamente 8 minutos e 20 segundos. A estrela mais próxima, Proxima Centauri, está a 4,24 anos-luz de distância — o que significa que a light leva 4,24 anos para cruzar essa distância.`,
    deepMeaning: `c não é simplesmente "a velocidade com que a light se move". Trata-se do limite fundamental de speed da própria causalidade — a taxa máxima com que qualquer informação, energy ou influência causal pode se propagar pelo universo. A Relatividade Especial de Einstein revelou que c é igual para todo observador, independentemente do seu movimento. Isso destrói a noção newtoniana de tempo absoluto. Dois observadores em movimento relativo discordarão sobre comprimentos, intervalos de tempo e simultaneidade — mas sempre medirão o mesmo c. E = mc² afirma que mass e energy são a mesma coisa, separadas apenas por um fator de conversão igual a c².`,
    whyItMatters: `Sem c, não existem a Relatividade Especial, nem E = mc², nem a correção do GPS (os satélites GPS precisam corrigir tanto a dilatação temporal da Relatividade Especial quanto da Relatividade Geral), nem a compreensão das estrelas ou da física de partículas. É a espinha dorsal da física moderna.`
  },

  {
    symbol: 'h',
    name: 'Constante de Planck',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s (exato)',
    category: 'Universal',
    description: 'Quantum de ação eletromagnética — governa a energy dos fótons.',
    discoveredBy: 'Max Planck (1900) · Prêmio Nobel 1918',
    formula: 'E = hf',
    whatItSays: `A energy vem em pacotes discretos chamados quanta. A energy E de um único quantum de radiação eletromagnética — um fóton — é E = hf, em que f é a frequency da radiação. h é a constante de proporcionalidade que conecta a frequency (uma propriedade ondulatória) à energy (uma propriedade corpuscular).`,
    simpleExample: `A light vermelha visível tem uma frequency de cerca de 4,3 × 10¹⁴ Hz. Um fóton de luz vermelha carrega energy: (6,626 × 10⁻³⁴) × (4,3 × 10¹⁴) ≈ 2,85 × 10⁻¹⁹ J ≈ 1,78 eV. Essa ínfima energy é suficiente para ativar uma única molécula de rodopsina na retina — o início da visão.`,
    deepMeaning: `Antes de Planck, a física clássica previa que um objeto quente deveria irradiar energy infinita em altas frequencies — a "catástrofe ultravioleta". Em 1900, Max Planck resolveu isso ao postular que a energy não é contínua, mas quantizada. Einstein usou esse conceito para explicar o efeito fotoelétrico. h é também o quantum de ação — possui unidades de energy × time. A forma reduzida ħ = h/2π aparece no comutador [x̂, p̂] = iħ — o núcleo matemático da mecânica quântica — e no Princípio da Incerteza de Heisenberg: Δx · Δp ≥ ħ/2.`,
    whyItMatters: `h é a fronteira entre o mundo quântico e o mundo clássico. Quando a ação relevante de um sistema é muito maior que h, a mecânica clássica funciona. Sem h, os átomos entrariam em colapso, a química não existiria e o universo como conhecemos não poderia existir.`
  },

  {
    symbol: 'ħ',
    name: 'Constante de Planck Reduzida',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s (exato)',
    category: 'Universal',
    description: 'h/2π — a unidade natural de angular momentum na mecânica quântica.',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ (chamado de "h-barra") é simplesmente h dividido por 2π. Aparece sempre que se utiliza a angular frequency ω (em radianos por segundo) em vez da frequency comum f (em ciclos por segundo), uma vez que ω = 2πf.`,
    simpleExample: `O spin do elétron é ħ/2. O spin do fóton é ħ. O orbital angular momentum é sempre um múltiplo inteiro de ħ — portanto, ħ é o átomo da rotação em si.`,
    deepMeaning: `Na mecânica quântica, ħ não é apenas uma abreviatura conveniente. É o quantum fundamental de angular momentum. Na teoria quântica de campos, ħ controla a magnitude das flutuações quânticas. Fazer ħ → 0 recupera a teoria de campos clássica. Toda a estrutura da mecânica quântica — relações de comutação, integrais de caminho, princípios de incerteza — é governada por ħ.`,
    whyItMatters: `Nas unidades naturais usadas pelos físicos de partículas, ħ = c = 1, o que simplifica enormemente as equações e revela a profunda estrutura geométrica das teorias.`
  },

  {
    symbol: 'e',
    name: 'Carga Elementar',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C (exato)',
    category: 'Eletromagnética',
    description: 'A menor charge elétrica livremente existente — a charge é quantizada.',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `Esta é a magnitude da charge elétrica carregada por um único próton (positiva) ou por um único elétron (negativa). Toda charge elétrica observável na natureza é um múltiplo inteiro de e. A charge é quantizada.`,
    simpleExample: `Uma corrente de 1 ampère significa que 1 coulomb de charge flui por segundo por um ponto. Como cada elétron carrega 1,602 × 10⁻¹⁹ C, uma corrente de 1 A corresponde a aproximadamente 6,24 × 10¹⁸ elétrons passando por segundo.`,
    deepMeaning: `A quantização da charge foi estabelecida experimentalmente por Robert Millikan em seu famoso experimento da gota de óleo. Ele mediu a charge em gotículas individuais de óleo suspensas num campo elétrico e descobriu que todas as charges eram múltiplos inteiros de uma unidade fundamental — e. A fine-structure constant α ≈ 1/137 é a medida adimensional da força da força eletromagnética. Os quarks carregam charges de e/3 e 2e/3, mas estão permanentemente confinados dentro dos hádrons e nunca são observados com charge fracionária isoladamente.`,
    whyItMatters: `e define a escala de todas as interações atômicas e moleculares. A química, a biologia, a eletrônica e a ciência dos materiais dependem fundamentalmente do valor de e. Se e fosse ligeiramente diferente, a vida como a conhecemos não poderia existir.`
  },

  {
    symbol: 'k',
    name: 'Constante de Boltzmann',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K (exato)',
    category: 'Termodinâmica',
    description: 'Ponte entre temperature e kinetic energy — S = k ln(Ω).',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k (também escrito kB) é a ponte entre o mundo microscópico das partículas individuais e o mundo macroscópico da temperature. Converte a temperature — uma propriedade estatística de um conjunto — em energy por partícula. Cada grau de liberdade contribui com (1/2)kT de kinetic energy média.`,
    simpleExample: `À temperature ambiente (T = 293 K): kT ≈ 0,0253 eV. Esta é a escala de thermal energy característica à temperature ambiente. As energias das ligações químicas são de poucos eV, portanto a thermal energy à temperature ambiente é muito menor — razão pela qual a maioria das ligações químicas é estável.`,
    deepMeaning: `Temperature não é uma grandeza fundamental — é uma medida da kinetic energy média das partículas. S = k ln(Ω) define a entropy em termos de informação e probabilidade, conectando a termodinâmica à física microscópica. A distribuição de Boltzmann fornece a probabilidade de um sistema estar num estado de energy E à temperature T: P(E) ∝ e^(−E/kT). Esse fator exponencial — o fator de Boltzmann — governa tudo, desde as taxas de reação química até a distribuição de moléculas na atmosfera terrestre.`,
    whyItMatters: `k é o alicerce da termodinâmica e da mecânica estatística. Sem ele, não podemos conectar a física microscópica a observáveis macroscópicos como temperature, pressure e entropy. Desde 2019, k é uma constante exata definida, e o kelvin é definido por meio dela.`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Constante de Avogadro',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹ (exato)',
    category: 'Termodinâmica',
    description: 'Número de entidades em um mol — faz a ponte entre as escalas atômica e humana.',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `Um mol de qualquer substância contém exatamente 6,022 140 76 × 10²³ entidades elementares (átomos, moléculas, íons, etc.). Esse número é a ponte entre a escala atômica e a escala humana.`,
    simpleExample: `12 gramas de carbono-12 contêm exatamente um mol de átomos de carbono. Trata-se de um número quase incompreensivelmente grande: se você tivesse um mol de grãos de areia, eles cobririam a superfície da Terra a uma profundidade de vários quilômetros.`,
    deepMeaning: `NA conecta a unidade de mass atômica aos gramas. 1 u = 1 grama / NA = 1,660 539 × 10⁻²⁷ kg. A constante molar dos gases R está relacionada à Boltzmann Constant por: R = NA × k = 8,314 J mol⁻¹ K⁻¹. A Faraday Constant F = NAe = 96.485 C/mol é a charge de um mol de elétrons. Historicamente, medir NA foi um dos principais desafios da física dos séculos XIX e XX. As medições do movimento browniano feitas por Jean Perrin em 1908 provaram a existência dos átomos.`,
    whyItMatters: `NA é o que torna a química quantitativa. Permite que os químicos contem átomos pesando-os. Todos os cálculos estequiométricos, todos os cálculos de dosagem farmacêutica e todos os cálculos de ciência dos materiais dependem de NA.`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: 'Eficácia Luminosa',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W (exato)',
    category: 'Universal',
    description: 'Define a candela — a única constante do SI ligada à biologia humana.',
    discoveredBy: 'Definição internacional (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W a 540 THz',
    whatItSays: `683 lúmens de flux luminoso (brilho percebido pelo olho humano) corresponde a 1 watt de potência radiante em uma frequency monocromática específica de 540 × 10¹² Hz (luz verde, comprimento de onda ≈ 555 nm) — o pico de sensibilidade do olho humano em condições de luz diurna.`,
    simpleExample: `Uma fonte de light que emite 1 watt de luz verde pura produz exatamente 683 lúmens de brilho visível. Qualquer outra cor produz menos lúmens por watt porque o olho é menos sensível a elas.`,
    deepMeaning: `Esta constante é a única do sistema SI que depende da biologia humana — especificamente da sensibilidade espectral do olho humano fotópico (diurno). É definida dessa forma para conectar a grandeza física de potência radiante (watts) à grandeza perceptiva de brilho (lúmens). Desde 2019, a candela é definida fixando Kcd exatamente em 683 lm/W.`,
    whyItMatters: `Fundamental para a fotometria, a engenharia de iluminação e todo o design de sistemas ópticos. Toda especificação de lúmens em qualquer lâmpada remonta a esta constante.`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Frequência Hiperfina do Césio',
    value: '9.192.631.770',
    unit: 'Hz',
    exact: '9.192.631.770 Hz (exato)',
    category: 'Universal',
    description: 'Define o segundo — o batimento cardíaco de toda a marcação de tempo moderna.',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9.192.631.770 / Δν<sub>Cs</sub>',
    whatItSays: `O estado fundamental do átomo de césio-133 possui dois níveis hiperfinos — separados pela interação entre o momento magnético do elétron e o momento magnético nuclear. Quando o átomo faz a transição entre esses dois níveis, emite ou absorve radiação exatamente a 9.192.631.770 Hz.`,
    simpleExample: `Desde 1967, um segundo é definido como exatamente 9.192.631.770 períodos de oscilação dessa radiação. Os relógios atômicos de césio são os dispositivos de marcação de tempo mais precisos já construídos, perdendo menos de um segundo em 300 milhões de anos.`,
    deepMeaning: `A separação hiperfina decorre da eletrodinâmica quântica — a interação entre o momento de dipolo magnético do elétron e o campo magnético gerado pelo spin nuclear. Calcular essa frequency a partir de primeiros princípios é um teste profundo da QED. O GPS, a internet (que requer relógios sincronizados), os sistemas financeiros e todas as telecomunicações modernas dependem diretamente dos padrões dos relógios atômicos de césio.`,
    whyItMatters: `A medição mais precisa de toda a ciência. A civilização moderna — GPS, sincronização da internet, negociação financeira, redes 5G — depende desta constante.`
  },

  // ── PARTE 2: CONSTANTES ELETROMAGNÉTICAS ─────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: 'Permissividade Elétrica do Vácuo',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: 'Eletromagnética',
    description: 'Com que facilidade os campos elétricos permeiam o vácuo.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀ (epsilon-zero) mede com que facilidade um campo elétrico pode permear o vácuo. Aparece na lei de Coulomb — a force entre duas cargas pontuais: F = (1/4πε₀) × (q₁q₂/r²). Quanto maior ε₀, mais fraca é a force eletrostática para cargas e distâncias dadas.`,
    simpleExample: `A água possui permissividade relativa εr ≈ 80, o que significa que a água reduz as forças eletrostáticas entre as cargas por um fator de 80 em comparação ao vácuo — razão pela qual a água é um excelente solvente para compostos iônicos.`,
    deepMeaning: `ε₀ não é definido de forma independente — é derivado dos valores definidos de c e μ₀ por meio de: ε₀ = 1/(μ₀c²). Aparece nas quatro equações de Maxwell em suas formas no vácuo. Na lei de Gauss: ∮ E · dA = Q_enc/ε₀. O flux elétrico total através de qualquer superfície fechada é igual à charge total contida dividida por ε₀. Também define a escala da densidade de energy eletromagnética armazenada num campo elétrico: u_E = (1/2)ε₀E².`,
    whyItMatters: `Aparece nas quatro equações de Maxwell. Sem ε₀, não há eletrostática quantitativa, não há design de capacitores e não há compreensão dos dielétricos.`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: 'Permeabilidade Magnética do Vácuo',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: 'Eletromagnética',
    description: 'Com que facilidade os campos magnéticos permeiam o vácuo.',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀ (mu-zero) mede com que facilidade um campo magnético permeia o vácuo. Aparece na lei de Biot-Savart e na lei de Ampère. A force por unidade de comprimento entre dois fios paralelos conduzindo correntes I₁ e I₂ separados pela distância d é: F/L = (μ₀/2π) × (I₁I₂/d).`,
    simpleExample: `O ferro tem permeabilidade relativa μr de até ~10.000 — o ferro concentra os campos magnéticos enormemente em comparação ao vácuo. É por isso que os núcleos de transformadores são feitos de ferro: para guiar e amplificar o flux magnético de forma eficiente.`,
    deepMeaning: `Antes da redefinição do SI em 2019, μ₀ era exatamente 4π × 10⁻⁷ N/A² por definição. Agora é uma grandeza medida com uma pequena incerteza. μ₀ aparece na lei de Ampère com a correção de Maxwell: ∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt). O segundo termo — a corrente de deslocamento de Maxwell — permitiu a existência de ondas eletromagnéticas no vácuo e levou diretamente à previsão de que a light é uma onda eletromagnética.`,
    whyItMatters: `Sem μ₀, não há campos magnéticos, não há indução eletromagnética, não há motores elétricos, não há transformadores e não há ondas de rádio.`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: 'Impedância Característica do Vácuo',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: 'Eletromagnética',
    description: 'Razão do campo elétrico ao campo magnético em uma onda eletromagnética no vácuo.',
    discoveredBy: 'Derivado das equações de Maxwell',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `Quando uma onda eletromagnética se propaga pelo vácuo, a razão entre a amplitude do campo elétrico e a amplitude do campo magnético é: Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω.`,
    simpleExample: `Uma antena irradia eficientemente quando sua impedância está adaptada a 377 Ω. A potência irradiada por unidade de área (o vetor de Poynting) é S = E²/Z₀. Isso é usado para projetar tudo, desde antenas de dipolo até antenas parabólicas.`,
    deepMeaning: `Z₀ é a impedância do espaço livre — indica quanta intensidade de campo elétrico se obtém por unidade de campo magnético em uma onda eletromagnética que se propaga. É a "resistência" do vácuo à propagação de ondas eletromagnéticas, análoga à impedância característica de uma linha de transmissão. A luz solar que chega à Terra corresponde a uma amplitude de campo elétrico de √(1361 × Z₀) ≈ 716 V/m.`,
    whyItMatters: `Essencial para o design de antenas, seções transversais de radar, ganho de antena e todos os balanços de enlace de comunicações sem fio.`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Constante de Josephson',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: 'Eletromagnética',
    description: 'Relaciona voltage a frequency em junções Josephson supercondutoras.',
    discoveredBy: 'Brian Josephson (1962) · Prêmio Nobel 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `A Josephson Constant relaciona voltage a frequency no efeito Josephson AC. Quando uma voltage DC V é aplicada através de uma junção Josephson (uma fina barreira isolante entre dois supercondutores), ela gera uma corrente alternada na frequency f = 2eV/h.`,
    simpleExample: `Uma voltage de 1 milivolt através de uma junção Josephson gera oscilação AC a ~483,6 GHz — na faixa de micro-ondas. Isso é usado para definir padrões de voltage com precisão de 1 parte em 10¹⁰.`,
    deepMeaning: `O fator 2 decorre do fato de que a supercondutividade envolve pares de Cooper — pares de elétrons com charge 2e. A junção Josephson é um dispositivo quântico macroscópico em que a diferença de phase quântica entre dois supercondutores impulsiona uma supercorrente. O efeito Josephson AC é uma demonstração impressionante de que a mecânica quântica opera em escalas macroscópicas nos supercondutores.`,
    whyItMatters: `Padrão primário de voltage usado em todo o mundo. A medição elétrica mais precisa disponível. Fundamental para a metrologia quântica e a computação quântica supercondutora.`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Constante de Von Klitzing',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: 'Eletromagnética',
    description: 'Quantum de resistance elétrica — h/e² — do efeito Hall quântico.',
    discoveredBy: 'Klaus von Klitzing (1980) · Prêmio Nobel 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² é o quantum de resistance. Aparece no efeito Hall quântico: quando um gás eletrônico 2D é colocado num campo magnético perpendicular intenso a baixa temperature, a Hall resistance é quantizada em frações exatas de RK: RH = RK/n.`,
    simpleExample: `A quantização é tão precisa que RK é usado como padrão primário de resistance. Chips de silício a ~1 K em campos de ~10 Tesla reproduzem RK/2 = 12.906 Ω com precisão melhor que 1 parte por bilhão.`,
    deepMeaning: `A quantização tem origem topológica — não depende do material, da geometria da amostra ou de quaisquer parâmetros ajustáveis. É exata dentro da precisão de medição. O efeito Hall quântico fracionário (1982) envolve quantizações ainda mais exóticas em frações de 1/3, 2/5, etc. — decorrentes de estados eletrônicos fortemente correlacionados, incluindo o estado ν = 5/2, que pode abrigar anyons não-abelianos relevantes para a computação quântica topológica.`,
    whyItMatters: `Padrão primário de resistance em todo o mundo. Janela para a topologia na física da matéria condensada. Os efeitos Hall quânticos inteiro e fracionário representam algumas das descobertas mais profundas da física moderna.`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: 'Quantum de Fluxo Magnético',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: 'Eletromagnética',
    description: 'Quantum de magnetic flux — h/(2e) — em laços supercondutores.',
    discoveredBy: 'London & Onsager (teoria) · Doll & Näbauer (1961, confirmado)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `O magnetic flux através de um laço supercondutor é quantizado em unidades de Φ₀. Um anel supercondutor só pode aprisionar magnetic flux em múltiplos inteiros de h/(2e).`,
    simpleExample: `Um SQUID (Superconducting Quantum Interference Device) pode detectar variações de magnetic flux tão pequenas quanto 10⁻⁶ Φ₀ — correspondendo a uma variação de campo magnético de ~10⁻¹⁸ Tesla. Isso é usado em imageamento cerebral (MEG).`,
    deepMeaning: `A quantização do magnetic flux é uma manifestação macroscópica direta da mecânica quântica. O parâmetro de ordem supercondutor (a função de onda quântica macroscópica) deve ser unívoco ao longo de um laço, o que força o flux contido a ser quantizado. Os SQUIDs exploram Φ₀ para medir campos magnéticos com sensibilidade extraordinária — os sensores magnéticos mais sensíveis já construídos.`,
    whyItMatters: `Fundamento da tecnologia SQUID, da magnetoencefalografia, dos testes fundamentais da mecânica quântica em escalas macroscópicas e da computação quântica supercondutora.`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Quantum de Condutância',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: 'Eletromagnética',
    description: 'Unidade fundamental de conductance elétrica — 2e²/h.',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `Quando elétrons fluem por um condutor quântico perfeito de um único canal (como um contato de átomo único ou um ponto de contato quântico), a conductance é exatamente G₀ = 2e²/h por canal. A resistance é 1/G₀ = h/(2e²) ≈ 12.906 Ω.`,
    simpleExample: `Um nanofio de ouro esticado até ter apenas um átomo de largura possui conductance de aproximadamente G₀. Isso foi medido experimentalmente com grande precisão. Um fio de dois átomos tem conductance ~2G₀.`,
    deepMeaning: `A resistance clássica depende da geometria da amostra, do material e das impurezas. Mas no nível quântico, mesmo um condutor perfeito possui uma resistance — devido à adaptação quântica dos modos propagantes entre o condutor e seus eletrodos. Trata-se da fórmula de Landauer: G = G₀ × Σ T, em que T são as probabilidades de transmissão dos canais quânticos individuais.`,
    whyItMatters: `Fundamento da física mesoscópica e da nanoeletrônica. Governa o transporte de elétrons por junções moleculares, nanotubos de carbono e pontos quânticos.`
  },

  {
    symbol: 'F',
    name: 'Constante de Faraday',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: 'Eletromagnética',
    description: 'Charge de um mol de elétrons — NA × e.',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `A Faraday Constant é a charge de um mol de cargas elementares — um mol de elétrons ou um mol de prótons. Na eletroquímica, governa quanta charge é necessária para depositar ou dissolver um mol de um íon monovalente.`,
    simpleExample: `Para eletrodepositar 1 mol de cobre (63,5 g) a partir de uma solução de CuSO₄, são necessários 2F = 192.970 C de charge (o cobre é divalente, Cu²⁺ + 2e⁻ → Cu). Por isso, depositar uma camada espessa requer grandes correntes.`,
    deepMeaning: `As leis da eletrólise de Faraday (1833–1834) afirmam que a mass de substância depositada em um eletrodo é proporcional à charge passada, com F como a constante de proporcionalidade (por mol por valência): m = (M/zF) × Q. Faraday derivou essa relação empiricamente, sem conhecer elétrons ou átomos — uma realização notável. A constante que carrega seu nome possui hoje um valor exato por meio das definições de NA e e.`,
    whyItMatters: `Fundamento de toda a eletroquímica. Cada bateria de íon-lítio, cada processo de eletrodeposição, cada planta de cloro e cada refinamento eletrolítico de metais opera sobre esta constante.`
  },

  // ── PARTE 3: CONSTANTES ATÔMICAS E NUCLEARES ──────────────────────────────

  {
    symbol: 'α',
    name: 'Constante de Estrutura Fina',
    value: '7.297 × 10<sup>−3</sup>',
    unit: 'adimensional',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: 'Atômica',
    description: 'Constante de acoplamento adimensional da força eletromagnética.',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α é a constante de acoplamento adimensional da interação eletromagnética. Mede a intensidade da força eletromagnética entre partículas carregadas — especificamente, a amplitude de probabilidade de uma partícula carregada emitir ou absorver um fóton.`,
    simpleExample: `Na eletrodinâmica quântica, a probabilidade de um elétron emitir um fóton num dado processo é proporcional a α. Processos com dois fótons são proporcionais a α², e assim por diante. Como α ≈ 1/137, cada vértice adicional de fóton suprime a probabilidade por um fator de ~1/137, o que explica por que os diagramas de Feynman convergem rapidamente para a QED.`,
    deepMeaning: `α é um dos números mais misteriosos da física. É puramente adimensional — não tem unidades e assume o mesmo valor independentemente do sistema de unidades utilizado. Combina e (eletromagnetismo), ε₀ (eletrostática), ħ (mecânica quântica) e c (relatividade). Richard Feynman chamou α de "um dos maiores mistérios da física". Na QED, α não é verdadeiramente constante — ele "corre" com a escala de energy devido à polarização do vácuo: Em baixas energias: α ≈ 1/137. Na escala de mass do bóson Z: α ≈ 1/128.`,
    whyItMatters: `α governa toda a física atômica, a química e a biologia molecular. O tamanho dos átomos, a intensidade das ligações químicas, os espectros de absorção e emissão de todos os elementos — tudo é controlado por α. É sem dúvida o número adimensional mais importante da física.`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Constante de Rydberg',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: 'Atômica',
    description: 'Determina os comprimentos de onda de todas as linhas espectrais do hidrogênio.',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `A Rydberg Constant fornece os números de onda (inversores de comprimento de onda) das linhas espectrais do hidrogênio. Os comprimentos de onda de todas as linhas espectrais do hidrogênio são dados pela fórmula de Rydberg: 1/λ = R∞ × (1/n₁² − 1/n₂²), em que n₁ e n₂ são inteiros positivos com n₂ > n₁.`,
    simpleExample: `Para a série de Lyman (transições para o estado fundamental), a primeira linha (n₂ = 2): 1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4. λ = 121,6 nm (ultravioleta — linha Lyman-alfa). Esta é a linha espectral mais importante da astrofísica — usada para detectar hidrogênio em todo o universo e medir a expansão do espaço pelo redshift.`,
    deepMeaning: `R∞ é teoricamente derivado de constantes mais fundamentais: R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h). Essa fórmula — derivada do modelo de Bohr e refinada pela mecânica quântica — conecta o espectro do hidrogênio à mass do elétron, à elementary charge e a outras constantes fundamentais. A concordância entre teoria e experimento é extraordinária. A Rydberg energy (Ry) — a binding energy do hidrogênio — é: En = −Ry/n² = −13,6 eV/n².`,
    whyItMatters: `O ponto de partida que levou Bohr ao átomo quântico. A constante atômica mais precisamente medida. Conhecida com 12 algarismos significativos, possibilita testes da QED na faixa de algumas partes por trilhão.`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Raio de Bohr',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atômica',
    description: 'Escala de tamanho natural dos átomos — distância mais provável elétron-próton no hidrogênio.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ é a distância mais provável entre o elétron e o próton em um átomo de hidrogênio no estado fundamental (n = 1). Define a escala de tamanho característica dos átomos. a₀ = ħ/(mecα).`,
    simpleExample: `a₀ ≈ 0,529 Å (Angstrom). Este é o tamanho típico de um átomo de hidrogênio. A maioria dos átomos possui raios dentro de um fator de alguns múltiplos de a₀. O comprimento da ligação C-C no diamante é ~2,9a₀. O diâmetro da hélice do DNA é ~40Å ≈ 75a₀.`,
    deepMeaning: `O Raio de Bohr emerge do equilíbrio entre a kinetic energy do elétron (quântico-mecânica, que tende a espalhar o elétron — o princípio da incerteza o impede de colapsar ao núcleo) e a energia potencial de Coulomb (que o atrai ao núcleo). Na mecânica quântica, a função de onda do estado fundamental do hidrogênio atinge seu máximo em r = a₀. O Raio de Bohr define a escala de todas as funções de onda atômicas — orbitais mais altos têm raios ~ n²a₀.`,
    whyItMatters: `Define a escala de comprimento fundamental da química e da ciência dos materiais. Na física da matéria condensada, a₀ define a escala dos comprimentos de ligação química, dos espaçamentos de rede cristalina e do tamanho dos éxcitons. O tamanho do átomo de hidrogênio é em última análise o que determina a densidade da matéria.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Energia de Hartree',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: 'Atômica',
    description: 'Unidade natural de energy na física atômica — duas vezes a ionisation energy do hidrogênio.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `A Hartree Energy é duas vezes a ionisation energy do hidrogênio a partir do seu estado fundamental. É a unidade natural de energy na física atômica: Eh = e²/(4πε₀a₀) = α²mec².`,
    simpleExample: `O estado fundamental do hidrogênio tem energy −(1/2)Eh = −13,6 eV. Energias típicas de ligações químicas ficam em ~0,1–0,2 Eh (3–5 eV). Uma ligação C-H é ~0,16 Eh. Esses números são todos de ordem unitária em unidades atômicas — perfeito para a química quântica.`,
    deepMeaning: `Em unidades atômicas (com ħ = me = e = a₀ = 1), Eh = 1. As unidades atômicas simplificam enormemente as equações da química quântica. A equação de Schrödinger para o hidrogênio em unidades atômicas torna-se simplesmente: −(1/2)∇²ψ − (1/r)ψ = Eψ, em que E = −1/2 para o estado fundamental, ou seja, −0,5 Hartree = −13,6 eV. Códigos de química computacional (teoria do funcional da densidade, Hartree-Fock) trabalham quase universalmente em unidades atômicas internamente.`,
    whyItMatters: `A unidade de trabalho da química quântica. Todo cálculo de DFT, toda simulação de dinâmica molecular e todo resultado de química quântica remontam em última análise à Hartree Energy. É a escala de energy fundamental dos cálculos de estrutura eletrônica.`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Magneton de Bohr',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: 'Atômica',
    description: 'Unidade natural de momento magnético do elétron — eħ/(2me).',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB é a unidade natural de momento magnético para elétrons. Representa o momento magnético de um elétron devido ao seu orbital angular momentum de ħ.`,
    simpleExample: `Num campo magnético de 1 Tesla de um aparelho de MRI, a separação Zeeman entre os estados de spin-up e spin-down do elétron é 2μB × B ≈ 1,9 × 10⁻²³ J ≈ 0,12 meV — correspondendo a frequencies de micro-ondas. É por isso que a ESR usa micro-ondas, enquanto a NMR usa radiofrequência.`,
    deepMeaning: `O momento magnético de spin do elétron é aproximadamente μB (exatamente, é ge × μB/2, em que ge ≈ 2,002 devido a correções eletrodinâmicas quânticas). O efeito Zeeman — a separação das linhas espectrais atômicas num campo magnético — é governado por μB: ΔE = ml × μB × B, em que ml é o número quântico magnético. μB governa a Electron Spin Resonance (ESR). Concordando com o experimento em 12 casas decimais, a parte anômala é a grandeza mais precisamente calculada da ciência.`,
    whyItMatters: `Fundamento da electron spin resonance, dos materiais magnéticos e de todos os efeitos magneto-ópticos. Central para a spintrônica e a computação quântica com spin qubits.`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Magneton Nuclear',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: 'Atômica',
    description: 'Unidade natural de momento magnético nuclear — 1836× menor que o Magneton de Bohr.',
    discoveredBy: 'Otto Stern (1933) · Prêmio Nobel 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN é a unidade natural de momento magnético para nucleons (prótons e nêutrons). É 1836 vezes menor que μB porque o próton é 1836 vezes mais massivo que o elétron.`,
    simpleExample: `O próton possui momento magnético de 2,793 μN. Num scanner de MRI de 3 Tesla, a diferença de energy entre os estados de spin do próton é 2 × 2,793 × μN × 3T ≈ 8,4 × 10⁻²⁶ J, correspondendo a ~127 MHz de radiofrequência. Essa é precisamente a frequency que um scanner de MRI utiliza.`,
    deepMeaning: `Apesar de não possuir charge elétrica, o nêutron tem um momento magnético de −1,913 μN. Esse momento magnético não nulo de uma partícula neutra foi historicamente um dos primeiros indícios de que o nêutron não é uma partícula fundamental, mas possui estrutura interna (quarks). O momento magnético do próton de 2,793 μN — e não simplesmente 1 μN, como previsto para uma partícula de Dirac pontual — foi a descoberta de Stern que rendeu o Nobel em 1933. A NMR (e a MRI) baseia-se nas transições de spin do próton.`,
    whyItMatters: `Fundamento da espectroscopia de NMR e da MRI — as ferramentas mais poderosas da química estrutural e do imageamento médico. Historicamente provou a estrutura interna de quarks dos nucleons.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'Massa do Elétron',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: 'Partículas',
    description: 'Rest mass do elétron — a menor partícula fundamental com mass.',
    discoveredBy: 'J.J. Thomson (1897) · Prêmio Nobel 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `Esta é a rest mass do elétron — a menor partícula fundamental com mass. Em unidades de energy via E = mc²: mec² = 0,510 998 950 MeV. O elétron é 1836,15 vezes mais leve que o próton.`,
    simpleExample: `A produção de pares (γ → e⁺ + e⁻) requer um fóton de ao menos 2mec² = 1,022 MeV. Abaixo dessa energy, fótons não podem criar pares elétron-pósitron — independentemente do número de fótons. Esse limiar governa a absorção de raios gama na matéria.`,
    deepMeaning: `A electron mass é um parâmetro livre do Modelo Padrão — não é prevista teoricamente, mas deve ser medida. É gerada pelo mecanismo de Higgs: o elétron interage com o campo de Higgs, e a intensidade dessa interação (o acoplamento de Yukawa, ye ≈ 2,94 × 10⁻⁶) determina a mass. A pequenez do acoplamento de Yukawa do elétron em comparação ao do quark top (yt ≈ 1) é um dos quebra-cabeças não resolvidos de "hierarquia" da física de partículas. O elétron parece ser verdadeiramente uma partícula pontual elementar.`,
    whyItMatters: `Governa todo o comportamento atômico e químico. Determina o tamanho dos átomos via a₀ = ħ²/(mee²k), as energias de binding dos elétrons, a energy dos raios X e a profundidade de penetração da radiação beta.`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Fator g do Elétron',
    value: '−2.002319304',
    unit: 'adimensional',
    exact: '−2.00231930436256',
    category: 'Partículas',
    description: 'A previsão mais precisamente verificada de toda a ciência.',
    discoveredBy: 'Kusch & Foley (1948) · Cálculo QED: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `O g-factor é a razão entre o momento magnético real do elétron e o que seria se o elétron fosse uma partícula de Dirac simples (g = 2 exatamente). O momento magnético anômalo é ae = (ge − 2)/2 = 0,001 159 65.`,
    simpleExample: `A previsão teórica de ae pela QED requer a soma de diagramas de Feynman com até 10 laços (envolvendo 12.672 diagramas na quarta ordem). O resultado concorda com o experimento em 12 casas decimais — 1 parte por trilhão.`,
    deepMeaning: `O momento magnético anômalo do elétron é a previsão mais precisamente testada em toda a ciência. A eletrodinâmica quântica (QED) calcula o desvio de g = 2 como uma série de potências da fine-structure constant α: ae = (α/2π) − 0,328(α/π)² + 1,181(α/π)³ − ... Qualquer desvio da previsão da QED sinalizaria uma nova física além do Modelo Padrão. O sucesso desse cálculo é o maior triunfo da física teórica.`,
    whyItMatters: `O maior triunfo da física teórica. Testa a QED de forma mais rigorosa do que qualquer outra medição. Fornece a determinação mais precisa da fine-structure constant α.`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Massa do Próton',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: 'Partículas',
    description: 'Rest mass do próton — 1836× mais massivo que o elétron.',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Em unidades de energy: mpc² = 938,272 MeV. O próton é 1836,15 vezes mais massivo que o elétron. Essa razão de mass é um dos números mais consequentes da física atômica.`,
    simpleExample: `A grande mass do próton significa que seu comprimento de onda de de Broglie a energias térmicas é ~43× menor que o de um elétron — tornando os prótons muito menos parecidos com ondas quânticas. É por isso que a aproximação de Born-Oppenheimer funciona: os núcleos agem como partículas clássicas.`,
    deepMeaning: `Ao contrário do elétron, o próton não é fundamental — é uma partícula composta por dois quarks up e um quark down, unidos pela força forte mediada por glúons. Notavelmente, as massas dos quarks correspondem a apenas ~1% da mass do próton. Os 99% restantes provêm da kinetic energy dos quarks e da energy armazenada nos campos de glúons — uma manifestação profunda de E = mc². Mass é, em sua maior parte, energy. O próton possui um raio de charge finito de 0,8409 fm.`,
    whyItMatters: `Os prótons definem os números atômicos e quase toda a mass atômica. Quase toda a mass do seu corpo é, na verdade, a energy do campo de cromodinâmica quântica (QCD) dentro de prótons e nêutrons. Se fosse significativamente diferente, a vida seria fundamentalmente alterada.`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Fator g do Próton',
    value: '5.586',
    unit: 'adimensional',
    exact: '5.5856946893',
    category: 'Partículas',
    description: 'Grande momento magnético anômalo que provou que o próton é composto.',
    discoveredBy: 'Otto Stern (1933) · Prêmio Nobel 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `Para um próton de Dirac simples, gp deveria ser igual a 2. Em vez disso, gp ≈ 5,586 — quase três vezes maior. Esse enorme momento magnético anômalo foi uma das primeiras descobertas experimentais a apontar para a estrutura composta do próton.`,
    simpleExample: `Se o próton fosse um ponto simples e sem estrutura, se comportaria como um ímã de intensidade 2. O fato de ser 5,586 é uma prova numérica direta de que há cargas internas em movimento dentro dele (quarks).`,
    deepMeaning: `Otto Stern mediu gp ≈ 5,6 em 1933, numa época em que se acreditava que o próton era uma partícula de Dirac fundamental. Esse resultado chocou a comunidade de física. O grande momento magnético anômalo — e o momento magnético não nulo do nêutron — foram evidências-chave para o modelo de quarks. Esses valores agora podem ser parcialmente compreendidos por meio de cálculos de QCD, embora um cálculo preciso de primeiros princípios da QCD permaneça um grande desafio.`,
    whyItMatters: `Descoberta historicamente essencial que levou ao modelo de quarks. Central para calcular as ressonâncias magnéticas nos núcleos atômicos (NMR/MRI). Teste rigoroso da teoria de estrutura dos hádrons.`
  },

  // ── PARTE 6: CONSTANTES DO NÊUTRON ────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Massa do Nêutron',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: 'Nuclear',
    description: 'Ligeiramente mais massivo que o próton — a diferença de mass possibilita o decaimento beta.',
    discoveredBy: 'James Chadwick (1932) · Prêmio Nobel 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `O nêutron é ligeiramente mais massivo que o próton — em 1,293 MeV/c². Em unidades de energy: mnc² = 939,565 MeV. Essa pequena, mas crucial, diferença de mass significa que um nêutron livre é instável — decai por decaimento beta.`,
    simpleExample: `Um nêutron livre decai em ~10 minutos (meia-vida de 613,9 s). A energy liberada é a diferença de mass de 1,293 MeV. Dentro dos núcleos, os nêutrons são estabilizados pela binding energy nuclear e não decaem.`,
    deepMeaning: `Se o nêutron fosse mais leve que o próton em mais de uma electron mass, os prótons livres decairiam em nêutrons e pósitrons — os átomos de hidrogênio seriam instáveis, alterando fundamentalmente toda a química. A diferença de mass determinou a razão nêutron-próton (n/p ≈ 1/7) fixada durante a nucleossíntese do Big Bang, estabelecendo as abundâncias cósmicas de hidrogênio (75%) e hélio (25%).`,
    whyItMatters: `Governa a estabilidade nuclear, o decaimento beta e a abundância cósmica dos elementos. A diferença de mass do nêutron é cosmologicamente essencial para a existência do hidrogênio e, portanto, da vida.`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Momento Magnético do Nêutron',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Momento magnético negativo apesar de charge zero — prova da existência interna de quarks.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `O nêutron possui um momento magnético negativo (−1,913 nuclear magnetons), apesar de ter charge líquida absolutamente nula.`,
    simpleExample: `Uma partícula neutra sem estrutura deveria ter momento magnético zero. O fato de o nêutron reagir a campos magnéticos é a prova irrefutável de que ele contém subpartículas carregadas cujos efeitos não se cancelam completamente.`,
    deepMeaning: `Um momento magnético requer distribuição de charge ou de spin. O momento magnético negativo do nêutron decorre de sua estrutura interna de quarks: os dois quarks down (charge −e/3 cada) e um quark up (charge +2e/3) estão em constante movimento quântico. A distribuição espacial dos quarks giratórios carregados cria um momento magnético líquido negativo. A explicação reside na subestrutura de quarks: o nêutron contém um quark up e dois quarks down.`,
    whyItMatters: `Um dos resultados mais chocantes da física nuclear. Os limites atuais do Neutron Electric Dipole Moment (EDM) são usados para testar a simetria CP e explicar a assimetria matéria-antimatéria do universo.`
  },

  // ── PARTE 7: CONSTANTES DO MÚON E DO TAU ─────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Massa do Múon',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: 'Partículas',
    description: 'A cópia mais massiva do elétron — "Quem pediu isso?"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `O múon é 206,768 vezes mais massivo que o elétron. Carrega a mesma charge e interage de forma idêntica em todos os aspectos não gravitacionais — como se a natureza tivesse feito uma segunda cópia mais massiva do elétron.`,
    simpleExample: `Os múons criados pelos raios cósmicos a 15 km de altitude viajam a ~0,99c. Classicamente, eles deveriam decair antes de alcançar o solo (meia-vida de 2,2 μs → apenas 650 m de percurso). No entanto, chegam em grandes quantidades porque a dilatação temporal relativística (γ ≈ 7) estende sua meia-vida para ~15 μs.`,
    deepMeaning: `O múon não se encaixa em nenhum quadro teórico simples. Sua existência é simplesmente um fato da natureza. Ele decai: μ⁻ → e⁻ + ν̄e + νμ. Os átomos muônicos (μ⁻ substituindo e⁻) orbitam ~207× mais perto do núcleo, tornando-os extremamente sensíveis à estrutura nuclear. O momento magnético anômalo do múon (g-2) apresenta atualmente uma discrepância de ~4σ em relação à teoria.`,
    whyItMatters: `O momento magnético anômalo do múon é o principal indício experimental de física além do Modelo Padrão. Os múons são usados para criar imagens do interior de vulcões e detectar material nuclear contrabandeado.`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Momento Magnético Anômalo do Múon',
    value: '0.0011659',
    unit: 'adimensional',
    exact: '0.00116592059',
    category: 'Partículas',
    description: 'O principal indício experimental de física além do Modelo Padrão.',
    discoveredBy: 'Experimento Muon g-2 do Fermilab',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `Assim como o elétron, o múon possui um momento magnético anômalo. ae = (ge − 2)/2 = 0,001 165 920 59. Mede o desvio da previsão de Dirac g = 2.`,
    simpleExample: `Ao contrário do elétron, o múon é sensível às contribuições virtuais de partículas mais massivas porque as correções quânticas escalam como (mμ/M)², em que M é a mass da partícula virtual.`,
    deepMeaning: `Há uma discrepância de aproximadamente 4,2 desvios-padrão entre teoria e experimento — tentadoramente próxima do limiar de 5 sigma para uma descoberta definitiva. Se confirmada, seria a primeira evidência clara de física além do Modelo Padrão — potencialmente partículas supersimétricas ou dimensões extras. A resolução depende dos cálculos de QCD em rede.`,
    whyItMatters: `Um dos tópicos mais quentes da física de partículas. Se confirmada, exigiria uma reescrita fundamental de nossa compreensão do mundo subatômico.`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Massa do Lépton Tau',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: 'Partículas',
    description: 'O léptons carregado mais massivo — 3477× mais massivo que o elétron.',
    discoveredBy: 'Martin Perl et al. (1975) · Prêmio Nobel 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `O tau lepton é o terceiro e mais massivo lépton carregado — 3477 vezes mais massivo que o elétron e 16,8 vezes mais massivo que o múon.`,
    simpleExample: `O tau é tão massivo (1,78 GeV) que pode decair em hádrons — pions e kaons — ao contrário do múon. Sua meia-vida extremamente curta (~2,9 × 10⁻¹³ s) significa que percorre apenas ~87 μm antes de decair, exigindo precisão na escala de mícrons para ser observado.`,
    deepMeaning: `O tau é o lépton carregado da terceira geração. Por que existem exatamente três gerações de léptons, e por que elas possuem massas tão diferentes, é um dos mistérios mais profundos do Modelo Padrão. A hierarquia de mass (0,511 MeV → 105,7 MeV → 1776,9 MeV) não tem explicação teórica. O neutrino do tau não foi detectado diretamente até 2000.`,
    whyItMatters: `A existência de três gerações de léptons é um profundo mistério da natureza. O tau e seu neutrino foram cruciais para estabelecer o Modelo Padrão como uma teoria consistente.`
  },

  // ── PARTE 8: CONSTANTES FÍSICO-QUÍMICAS ──────────────────────────────────

  {
    symbol: 'R',
    name: 'Constante Molar dos Gases',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: 'Termodinâmica',
    description: 'R = NA × k — a constante mais utilizada na termodinâmica e na química.',
    discoveredBy: 'Vários (século XIX)',
    formula: 'PV = nRT',
    whatItSays: `R é a Boltzmann Constant escalonada para o nível molar. A lei dos gases ideais PV = nRT combina as leis de Boyle, Charles e Avogadro em uma única equação.`,
    simpleExample: `A speed do som em um gás: v = √(γRT/M). Para o ar (M = 0,029 kg/mol, γ = 1,4) a 20°C, v ≈ 343 m/s. Isso mostra que a speed do som é determinada fundamentalmente por R e pela temperature.`,
    deepMeaning: `As heat capacities molares dos gases ideais são múltiplos simples de R: Cv = (3/2)R para gases monoatômicos e (5/2)R para gases diatômicos. Na mecânica estatística, a entropy de um gás ideal (a equação de Sackur-Tetrode) contém R. Aparece na entropy de mistura, na equação de Clausius-Clapeyron, na equação de van't Hoff para a pressão osmótica e na equação de Nernst para os potenciais de eletrodo.`,
    whyItMatters: `A constante universal da termodinâmica. Toda lei dos gases, todo cálculo termodinâmico, todo modelo atmosférico e todo cálculo de energética de reações químicas usa R.`
  },

  {
    symbol: 'σ',
    name: 'Constante de Stefan-Boltzmann',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: 'Termodinâmica',
    description: 'Potência irradiada por um corpo negro — P/A = σT⁴.',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `Um corpo negro perfeito irradia potência eletromagnética por unidade de área P/A = σT⁴. σ é derivado de constantes mais fundamentais: σ = 2π⁵k⁴/(15h³c²).`,
    simpleExample: `A temperature superficial do Sol de ~5778 K resulta em uma potência de saída de σ × T⁴ × (4πR_sol²) ≈ 3,83 × 10²⁶ W. O corpo humano (T ≈ 310 K) irradia σ × (310)⁴ × (1,7 m²) ≈ 520 W — aproximadamente metade do que é reposto pelo heat metabólico.`,
    deepMeaning: `A dependência em T⁴ decorre da integração do espectro de corpo negro de Planck sobre todas as frequencies. Isso significa que dobrar a temperature aumenta a potência irradiada por um fator de 2⁴ = 16. O fundo cósmico de micro-ondas (CMB) — radiação remanescente do Big Bang — é um corpo negro perfeito a T = 2,725 K. A temperature efetiva da Terra é determinada pelo balanço entre a radiação solar e a emissão σT⁴.`,
    whyItMatters: `Governa a luminosidade estelar, o balanço de energy da Terra e o clima, as câmeras termais, a pirometria óptica e a estrutura de temperature do universo.`
  },

  {
    symbol: 'b',
    name: 'Constante de Deslocamento de Wien',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: 'Termodinâmica',
    description: 'Relaciona o comprimento de onda de pico do corpo negro à temperature.',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `A lei de deslocamento de Wien relaciona o comprimento de onda de pico da radiação do corpo negro à temperature: λ_max × T = b. Quanto mais quente o objeto, mais curto (mais azul) é o comprimento de onda de pico.`,
    simpleExample: `O Sol (T = 5778 K) apresenta pico em λ_max ≈ 502 nm — light verde. Os olhos humanos evoluíram para ser mais sensíveis exatamente nessa faixa. O corpo humano (T = 310 K) emite principalmente em λ_max ≈ 9,4 μm — infravermelho médio, razão pela qual as câmeras termais funcionam.`,
    deepMeaning: `A versão de frequency de pico f_max = b' × T usa b' = 5,879 × 10¹⁰ Hz/K. Note que a frequency de pico não corresponde simplesmente a c/λ_max porque as distribuições de comprimento de onda e frequency têm formas diferentes. Historicamente, a razão das constantes de radiação foi usada para medir h e k de forma independente.`,
    whyItMatters: `Fundamental para o imageamento térmico, a medição da temperature de estrelas, a ciência do clima e a física da radiação do corpo negro.`
  },

  // ── PARTE 9: CONSTANTES GRAVITACIONAIS E ELETROFRACAS ─────────────────────

  {
    symbol: 'G',
    name: 'Constante Gravitacional',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: 'Universal',
    description: 'A força mais fraca — a constante fundamental menos precisamente conhecida.',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Lei de Newton: F = Gm₁m₂/r². Na Relatividade Geral, G aparece nas equações de campo de Einstein, que governam como a matéria curva o espaço-tempo.`,
    simpleExample: `A gravidade entre duas massas de 1 kg separadas por 1 metro: F = 6,674 × 10⁻¹¹ N — aproximadamente o weight de uma única bactéria. A força eletromagnética entre dois prótons é 10³⁶ vezes mais forte. É por isso que a gravidade é irrelevante na escala atômica.`,
    deepMeaning: `G é a constante fundamental menos precisamente conhecida — conhecida com apenas 5 algarismos significativos. Isso ocorre porque a gravidade é a força mais fraca: medi-la em laboratório significa lutar contra o ruído sísmico e as forças residuais. O fator 8πG/c⁴ quantifica a curvatura do espaço-tempo por unidade de energy. O comprimento de Planck lP = √(ħG/c³) ≈ 1,616 × 10⁻³⁵ m é onde se espera a gravidade quântica — 10²⁰ vezes menor que um próton.`,
    whyItMatters: `Controla todos os fenômenos gravitacionais — de uma bola lançada a buracos negros e à estrutura em grande escala do universo. A ausência de uma teoria quântica da gravidade é o problema não resolvido mais profundo da física.`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Constante de Acoplamento de Fermi',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: 'Partículas',
    description: 'Intensidade de acoplamento da força nuclear fraca — governa o decaimento beta.',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF é a constante de acoplamento da força nuclear fraca na teoria efetiva de quatro férmions de Fermi do decaimento beta: n → p + e⁻ + ν̄e. A seção transversal fraca é proporcional a GF².`,
    simpleExample: `A interação fraca é tão fraca que um neutrino pode atravessar um ano-luz de chumbo com apenas 50% de chance de ser detido. No entanto, é essencial para a energy do Sol — a cadeia pp começa com uma interação fraca.`,
    deepMeaning: `Ao contrário de e², GF tem dimensões de energy⁻², tornando a teoria de Fermi não renormalizável. A solução foi a unificação eletrofraca (Nobel 1979): a força fraca é mediada por bósons W e Z massivos (~80–91 GeV). A baixas energias, a troca de um bóson W se parece com uma interação pontual. A grande mass do W suprime as interações fracas, tornando o decaimento beta lento apesar do acoplamento subjacente ser comparável ao eletromagnetismo.`,
    whyItMatters: `Governa todo o decaimento beta, as interações de neutrinos e a unificação eletrofraca. A força fraca impulsiona a cadeia pp do Sol e é responsável pela síntese nuclear de elementos pesados nas estrelas.`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Ângulo de Mistura Fraca',
    value: '0.2229',
    unit: 'adimensional',
    exact: '0.22290',
    category: 'Partículas',
    description: 'Quantifica a mistura entre as forças eletromagnética e fraca.',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `O weak mixing angle θW (ângulo de Weinberg) parametriza a mistura entre o fóton e o bóson Z na unificação eletrofraca. e = g sin θW = g' cos θW.`,
    simpleExample: `O valor sin²θW ≈ 0,231 é medido com extraordinária precisão em colisonadores de partículas (LHC) e em experimentos de violação de paridade atômica.`,
    deepMeaning: `Na unificação eletrofraca, o fóton e o bóson Z são misturas de dois bósons de gauge subjacentes (W⁰ e B). O "running" de sin²θW com a energy é precisamente previsto pelo Modelo Padrão e medido para confirmar as correções radiativas eletrofracas — um teste rigoroso da teoria.`,
    whyItMatters: `Um parâmetro fundamental do Modelo Padrão que conecta as propriedades das forças eletromagnética e nuclear fraca.`
  },

  // ── PARTE 11: CONSTANTES ATÔMICAS E NUCLEARES ADICIONAIS ──────────────────

  {
    symbol: 'κ',
    name: 'Quantum de Circulação',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: 'Atômica',
    description: 'Unidade fundamental de circulação para um elétron — h/2me.',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `A circulação de um fluido quântico (como o hélio superflúido ou um supercondutor) é quantizada em unidades de h/m. Para supercondutores, a partícula relevante é um par de Cooper com mass 2me.`,
    simpleExample: `No hélio-4 superflúido, os vórtices carregam circulação em múltiplos de h/m_He. O hélio superflúido em rotação desenvolve uma rede desses vórtices quantizados — análogo à rede de vórtices de Abrikosov em supercondutores do tipo II.`,
    deepMeaning: `A quantização da circulação é uma consequência direta da univocidade da função de onda quântica-mecânica. Se um superfluido está em rotação, a fase da função de onda macroscópica deve retornar ao mesmo valor após percorrer qualquer laço fechado. Isso força a circulação a ser quantizada: Γ = n × h/m.`,
    whyItMatters: `Explica o comportamento dos superfluidos e supercondutores. O quantum de circulação também aparece no efeito Aharonov-Bohm, conectando a phase quântica ao magnetic flux.`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Seção de Choque de Thomson',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: 'Atômica',
    description: 'Área efetiva apresentada por um elétron livre a um fóton incidente.',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `Quando fótons de baixa energy (energy do fóton ≪ mec²) se espelham em um elétron livre, a seção transversal total de espalhamento é σT = (8π/3) × re², em que re é o raio clássico do elétron.`,
    simpleExample: `Pense no elétron como uma "área-alvo" de σT que um fóton incidente enxerga. Se você disparar fótons em uma caixa de elétrons, o livre caminho médio antes do espalhamento é λ = 1/(nσT).`,
    deepMeaning: `A Thomson Cross Section é o limite de espalhamento elástico da fórmula mais geral de espalhamento Compton. Quando a energy do fóton Eγ ≪ 0,511 MeV, o recuo do elétron é desprezível e o espalhamento é puramente clássico. No interior das estrelas, a pressure de radiação é transmitida pelo espalhamento Thomson fóton-elétron. A luminosidade de Eddington — a luminosidade máxima que uma estrela pode ter antes que a pressure de radiação supere a gravidade — depende de σT.`,
    whyItMatters: `O espalhamento Thomson explica por que o céu é azul (em baixas frequencies) e por que a coroa solar é visível durante os eclipses. O Fundo Cósmico de Micro-ondas (CMB) foi criado quando o universo esfriou o suficiente para os elétrons se combinarem com os prótons, pois antes disso o universo era opaco devido ao espalhamento Thomson.`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: 'Razão Carga-Massa do Elétron',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: 'Atômica',
    description: 'Determina quão fortemente um elétron responde às forças eletromagnéticas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `Esta é a razão da charge do elétron pela sua mass. Determina quão fortemente um elétron responde às forças eletromagnéticas.`,
    simpleExample: `Num CRT (tubo de raios catódicos) de televisão, a deflexão do feixe de elétrons por campos elétricos e magnéticos é governada por e/me. O grande valor de e/me significa que os elétrons são muito mais facilmente deflectidos do que os íons.`,
    deepMeaning: `O famoso experimento de raios catódicos de Thomson provou que os raios catódicos eram fluxos de partículas negativamente carregadas com uma razão ~1800 vezes maior que os íons de hidrogênio. A cyclotron frequency ωc = eB/me é diretamente proporcional a e/me. Essa razão também aparece na plasma frequency ωp² = ne²/(meε₀), que governa como as ondas de rádio se refletem na ionosfera.`,
    whyItMatters: `Fundamental para a espectrometria de mass, os aceleradores de partículas e a eletrônica de vácuo. Governa o aquecimento por ressonância cíclotron eletrônica em plasmas de fusão.`
  },

  {
    symbol: 'M(e)',
    name: 'Massa Molar do Elétron',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: 'Atômica',
    description: 'Mass de um mol de elétrons — me × NA.',
    discoveredBy: 'Derivado',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `A mass de um mol de elétrons é extremamente pequena — cerca de 0,55 miligrama por mol.`,
    simpleExample: `Na eletroquímica, ao calcular variações de mass nos eletrodos durante a eletrólise, a electron molar mass é desprezível em comparação às massas iônicas.`,
    deepMeaning: `Nas medições de mass atômica de alta precisão, as energias de binding e a mass da nuvem de elétrons devem ser contabilizadas. A mass atômica de um átomo é M(átomo) = M(núcleo) + Z × M(e) − (energia de binding dos elétrons)/c². A espectrometria de mass por armadilha de Penning requer essa correção para atingir 10 algarismos significativos.`,
    whyItMatters: `Essencial para as comparações de mass mais precisas da física e para testar a consistência das definições das unidades do SI.`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Razão Massa Elétron-Próton',
    value: '5.446 × 10<sup>−4</sup>',
    unit: 'adimensional',
    exact: '5.44617021487 × 10⁻⁴',
    category: 'Atômica',
    description: 'O elétron é 1836,15 vezes mais leve que o próton.',
    discoveredBy: 'Derivado',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `A mass de um elétron em comparação a um próton. Essa razão é de aproximadamente 1/1836.`,
    simpleExample: `Como me/mp ≪ 1, os elétrons se movem muito mais rápido que os núcleos nas moléculas. Isso nos permite resolver a equação de Schrödinger eletrônica em posições nucleares fixas — a aproximação de Born-Oppenheimer.`,
    deepMeaning: `Essa razão separa as escalas de energy química (~eV) das escalas de energy nuclear (~MeV). A razão também é crítica na astrofísica estelar: o limite de Chandrasekhar — a mass máxima de uma anã branca — depende diretamente de (mp/me). As variações ao longo do tempo cósmico são testadas por meio dos espectros de absorção do hidrogênio molecular em quasares distantes.`,
    whyItMatters: `Um dos números adimensionais mais consequentes da natureza. Governa a estrutura atômica, a hierarquia das escalas de energy e a estabilidade das estrelas.`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: 'Razão Carga-Massa do Próton',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: 'Atômica',
    description: 'Razão da carga elementar à massa do próton — 1836× menor que a do elétron.',
    discoveredBy: 'Derivado',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `A razão da carga elementar à massa do próton. Ela dita como os prótons respondem aos campos magnéticos.`,
    simpleExample: `A cyclotron frequency do próton num campo magnético é 1836 vezes menor que a do elétron. É por isso que a MRI usa ondas de radiofrequência (faixa de MHz) em vez de micro-ondas.`,
    deepMeaning: `Na espectrometria de mass, os íons são separados por suas razões charge-mass. A razão e/mp do próton serve como padrão de calibração fundamental. A espectrometria de mass por ressonância cíclotron (armadilhas de Penning) usa essa razão para medir massas atômicas com precisão extrema. Na física de aceleradores, a rigidez de um feixe de prótons determina o raio de curvatura nos campos magnéticos.`,
    whyItMatters: `Fundamental para o imageamento médico (MRI), a espectrometria de mass e o design de aceleradores de partículas de alta energia como o LHC.`
  },

  {
    symbol: 'M(p)',
    name: 'Massa Molar do Próton',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: 'Atômica',
    description: 'A mass de um mol de prótons.',
    discoveredBy: 'Derivado',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `A mass de um mol de prótons é de aproximadamente 1,007 g/mol.`,
    simpleExample: `É ligeiramente menor que 1 g/mol porque a unidade de mass atômica é definida como 1/12 da mass do carbono-12, o que inclui contribuições de binding energy e mass do elétron.`,
    deepMeaning: `Na física nuclear, o valor Q de uma reação nuclear — a energy liberada ou absorvida — é calculado a partir da diferença de mass usando as massas molares. A massa molar do próton é uma referência fundamental nesses cálculos.`,
    whyItMatters: `Fundamental para cálculos estequiométricos em química nuclear e astrofísica.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: 'Razão Massa Nêutron-Elétron',
    value: '1838.68',
    unit: 'adimensional',
    exact: '1838.68366214',
    category: 'Nuclear',
    description: 'O nêutron é 1838,68 vezes mais massivo que o elétron.',
    discoveredBy: 'Derivado',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `A razão da massa do nêutron à massa do elétron. É ligeiramente maior que a razão próton-elétron.`,
    simpleExample: `O nêutron é mais massivo que o próton por 2,531 massas de elétrons. Essa diferença de mass corresponde a 1,293 MeV — a energy liberada no decaimento beta do nêutron.`,
    deepMeaning: `O fato de que essa razão é maior que a razão próton-elétron torna os nêutrons livres instáveis. Se o nêutron fosse mais leve que o próton em mais de uma electron mass, o hidrogênio não existiria como elemento estável. Essa razão é medida com precisão extraordinária usando armadilhas de Penning.`,
    whyItMatters: `Governa a estabilidade dos blocos de construção do universo.`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Razão Massa Nêutron-Próton',
    value: '1.00138',
    unit: 'adimensional',
    exact: '1.00137841931',
    category: 'Nuclear',
    description: 'O nêutron é ligeiramente mais massivo que o próton em 0,138%.',
    discoveredBy: 'Derivado',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `O nêutron é mais massivo que o próton por uma fração de 0,138%.`,
    simpleExample: `Essa pequena diferença de mass (1,293 MeV/c²) determinou que cerca de 25% da matéria bariônica se tornasse hélio-4 durante o Big Bang, com o restante permanecendo como hidrogênio.`,
    deepMeaning: `No universo primordial, a razão de equilíbrio nêutrons-prótons seguia o fator de Boltzmann. À medida que o universo esfriou e as interações fracas "congelaram", a razão n/p ficou bloqueada em cerca de 1/7. Se a diferença de mass fosse ligeiramente diferente, a evolução estelar e a química seriam alteradas.`,
    whyItMatters: `A abundância cósmica de hélio observada de ~25% é uma das maiores confirmações do modelo do Big Bang, tudo graças a esta constante.`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: 'Fator g do Nêutron',
    value: '−3.826',
    unit: 'adimensional',
    exact: '−3.82608545',
    category: 'Nuclear',
    description: 'Revela a estrutura interna de quarks do nêutron eletricamente neutro.',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `O g-factor do nêutron é −3,826. Para uma partícula de Dirac sem estrutura e com charge zero, deveria ser exatamente 0.`,
    simpleExample: `O momento magnético não nulo do nêutron neutro foi um dos resultados mais chocantes da física nuclear, provando que partículas neutras podem ter partes internas.`,
    deepMeaning: `O nêutron contém um quark up e dois quarks down. Seus momentos magnéticos e movimentos orbitais produzem o momento magnético líquido negativo. O modelo de quarks não relativístico prevê g ≈ −3,67; a discrepância se deve a correções relativísticas e efeitos dos glúons. Medições precisas testam os cálculos de QCD da estrutura dos hádrons.`,
    whyItMatters: `Teste rigoroso do Modelo Padrão e da estrutura dos quarks. Também usado para impor limites ao neutron electric dipole moment.`
  },

  {
    symbol: 'M(n)',
    name: 'Massa Molar do Nêutron',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: 'Nuclear',
    description: 'A mass de um mol de nêutrons.',
    discoveredBy: 'Derivado',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `Um mol de nêutrons pesa cerca de 1,00866 gramas.`,
    simpleExample: `Embora os nêutrons livres decaiam em 10 minutos, a massa molar do nêutron é essencial para calcular a "curva de binding energy", que dita quanta energy as usinas de energia nuclear podem produzir.`,
    deepMeaning: `A binding energy nuclear por nucleon é calculada usando massas atômicas: B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c². A maior massa do nêutron em comparação à do próton afeta todos os cálculos de binding energy nuclear.`,
    whyItMatters: `Fundamento da engenharia nuclear e do estudo dos isótopos nucleares.`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: 'Comprimento de Onda de Compton do Nêutron',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: 'Nuclear',
    description: 'Escala de comprimento natural da física nuclear — h/mnc.',
    discoveredBy: 'Derivado',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `O comprimento de onda de um fóton cuja energy é igual à rest mass energy do nêutron. É de cerca de 1,32 femtometros.`,
    simpleExample: `Esse comprimento de onda é comparável ao tamanho do próprio nêutron (~0,8 fm) e ao alcance das forças nucleares (~1,4 fm).`,
    deepMeaning: `As escalas de distância características da física nuclear são definidas pelos Compton Wavelengths dos nucleons e pions. Abaixo dessa escala, os efeitos da teoria quântica de campos, como a polarização do vácuo, tornam-se importantes. Em experimentos de espalhamento de nêutrons usados para estudar estruturas de proteínas, o comprimento de onda do nêutron é ajustado para corresponder aos espaçamentos interatômicos.`,
    whyItMatters: `Define a escala abaixo da qual o nêutron não pode ser tratado como uma partícula não relativística simples.`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Comprimento de Onda de Compton do Múon',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: 'Partículas',
    description: 'Comprimento de onda de um fóton cuja energy é igual à rest mass do múon.',
    discoveredBy: 'Derivado',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `O Muon Compton Wavelength é de cerca de 11,7 fm — menor que o do elétron pela razão de mass (206,77).`,
    simpleExample: `Nos átomos muônicos, o múon orbita muito mais perto do núcleo do que um elétron, porque o raio de Bohr do múon escala inversamente com a mass.`,
    deepMeaning: `O hidrogênio muônico tem o múon orbitando a ~256 fm — perto o suficiente do próton para que seu tamanho finito afete significativamente os níveis de energy. É por isso que a espectroscopia do hidrogênio muônico fornece as medições mais precisas do raio de carga do próton.`,
    whyItMatters: `Levou ao "enigma do raio do próton", um importante foco da física atômica de precisão moderna.`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Fator g do Múon',
    value: '−2.00233',
    unit: 'adimensional',
    exact: '−2.0023318418',
    category: 'Partículas',
    description: 'Sonda crucial para partículas pesadas ainda não descobertas.',
    discoveredBy: 'Experimental / Cálculo QED',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `Assim como o elétron, o múon possui um momento magnético anômalo ae = 0,001 165 920 59.`,
    simpleExample: `O experimento g-2 no Fermilab mede isso para verificar se partículas "virtuais" pesadas da supersimetria ou outras teorias estão afetando o spin magnético do múon.`,
    deepMeaning: `O valor experimental atual discorda da previsão do Modelo Padrão por ~4,2 desvios-padrão. A resolução depende da precisão dos cálculos de QCD em rede da polarização do vácuo hadrônico.`,
    whyItMatters: `Uma das discrepâncias mais significativas atualmente conhecidas entre o Modelo Padrão e o experimento.`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Massa do Deuteron',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo do hidrogênio pesado — o estado ligado nuclear mais simples.',
    discoveredBy: 'Harold Urey (1931) · Prêmio Nobel 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `O deuteron é o núcleo do deutério (um próton mais um nêutron). Sua binding energy é 2,224 MeV.`,
    simpleExample: `A binding energy é notavelmente pequena (compare com o hélio-4: 28,3 MeV). Essa fragilidade criou o "gargalo do deutério" no Big Bang, atrasando a formação de elementos mais pesados.`,
    deepMeaning: `O deuteron é o estado ligado nuclear mais simples — análogo ao átomo de hidrogênio. Seu momento de quadrupolo não nulo prova que a força nuclear tem um componente de tensor decorrente da troca de pions. O primeiro passo da fusão no Sol (p + p → d + e⁺ + νe) é extraordinariamente lento; a longevidade do Sol se deve a esse gargalo.`,
    whyItMatters: `Campo de teste fundamental para a teoria da força nuclear. O deutério é usado como moderador de nêutrons em reatores nucleares e na pesquisa farmacêutica.`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Momento Magnético do Deuteron',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: 'Nuclear',
    description: 'Momento magnético do núcleo mais simples.',
    discoveredBy: 'Física Nuclear / Estudos de NMR',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `O momento magnético do deuteron é 0,857 nuclear magnetons.`,
    simpleExample: `Se os spins fossem simplesmente alinhados, a soma seria μp + μn = 0,880 μN. O valor real é 0,857 μN. Essa discrepância é precisamente explicada pelo momento magnético orbital da admixtura da onda D na função de onda.`,
    deepMeaning: `A concordância entre o Deuteron Magnetic Moment calculado e medido valida os modelos de força nuclear. O NMR de deuteron é usado para estudar a dinâmica molecular.`,
    whyItMatters: `Bela confirmação do modelo de estrutura nuclear e da teoria de troca de pions.`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Fator g do Deuteron',
    value: '0.8574',
    unit: 'adimensional',
    exact: '0.8574382335',
    category: 'Nuclear',
    description: 'Relaciona o Momento Magnético do Deuteron ao Magneton Nuclear.',
    discoveredBy: 'Derivado',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + correções',
    whatItSays: `Ao contrário do elétron (g ≈ −2) ou do próton (g ≈ 5,586), o g-factor do deuteron é menor que 1.`,
    simpleExample: `Esse valor reflete o cancelamento parcial entre os momentos magnéticos do próton e do nêutron dentro do núcleo.`,
    deepMeaning: `As medições de precisão permitem extrair o momento magnético do nêutron por meio de correções que incluem correntes de troca de mésons e efeitos relativísticos.`,
    whyItMatters: `Usado para validar modelos complexos de força nuclear no nível de 0,1%.`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Massa do Hélio-3',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo do hélio-3 — dois prótons e um nêutron.',
    discoveredBy: 'Dados experimentais de física nuclear',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `O helion é o núcleo do hélio-3. Sua binding energy é 7,718 MeV.`,
    simpleExample: `O hélio-3 superflúido é um sistema modelo para a supercondutividade não convencional e os estados quânticos topológicos.`,
    deepMeaning: `He-3 é o núcleo espelho do trítio. A pequena diferença de mass entre eles testa a simetria de charge das forças nucleares. O g-factor do helion é −4,255 μN — refletindo a contribuição dominante do único nêutron.`,
    whyItMatters: `Usado em detectores de nêutrons de alta seção transversal e para MRI hiperpolarizada dos pulmões.`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Massa da Partícula Alfa',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: 'Nuclear',
    description: 'Núcleo do hélio-4 — extraordinariamente estável, binding energy de 28,3 MeV.',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `A alpha particle é o núcleo do hélio-4. Possui uma binding energy de 7,074 MeV por nucleon — próximo ao pico da curva de binding energy.`,
    simpleExample: `As meias-vidas do decaimento alfa cobrem 20 ordens de grandeza (de 0,3 μs a 14 bilhões de anos). Ambas são explicadas pela teoria de tunelamento quântico de Gamow.`,
    deepMeaning: `A estabilidade excepcional da alpha particle é a razão pela qual ela é preferencialmente emitida no decaimento radioativo. Tem spin zero e momento magnético zero — um núcleo de camada completamente fechada. O processo triplo-alfa (3α → ¹²C) requer uma ressonância no carbono-12 a 7,65 MeV (o estado de Hoyle). Sem essa ressonância, nenhum carbono existiria.`,
    whyItMatters: `Produto da maioria dos decaimentos de núcleos pesados. O processo triplo-alfa é a fonte de todo o carbono do universo. Usado na radioterapia alfa direcionada para o câncer.`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: 'Constante de Massa Atômica',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: 'Termodinâmica',
    description: '1/12 da mass do carbono-12 — a unidade natural das massas atômicas.',
    discoveredBy: 'Padrão internacional (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `A unidade de mass atômica (u, ou dalton, Da) é definida como 1/12 da mass de um átomo de carbono-12.`,
    simpleExample: `Carbono-12 = 12 u exatamente. Hidrogênio = 1,0078 u. Uma proteína de 50 kDa tem mass de 50.000 × 1,661 × 10⁻²⁷ kg.`,
    deepMeaning: `A conversão 1 u = 931,494 MeV/c² é uma das mais úteis na física nuclear. Diferenças de mass nuclear de miliatomic mass units liberam energias na escala de MeV. A escolha do carbono-12 foi um compromisso de 1961 entre as comunidades de física e química.`,
    whyItMatters: `Fundamento da física nuclear, da espectrometria de mass e de toda a bioquímica, em que as massas de proteínas são expressas em daltons.`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: 'Constante de Massa Molar',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: 'Termodinâmica',
    description: 'Relaciona a unidade de mass atômica à molar mass.',
    discoveredBy: 'Redefinição do SI (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu relaciona a unidade de mass atômica à molar mass: Mu = NA × mu ≈ 1 g/mol.`,
    simpleExample: `Como Mu ≈ 1 g/mol, a molar mass de uma substância em gramas é igual à sua massa atômica relativa (ex.: a água é ~18,015 g/mol).`,
    deepMeaning: `Historicamente, exatamente 1 g/mol. Após 2019, tanto NA quanto mu são definidos de forma independente, portanto Mu não é mais exatamente 1 g/mol — desvia-se em cerca de 10⁻⁹. Isso é negligenciável para fins práticos, mas é um lembrete de que o novo SI é fundamentalmente diferente.`,
    whyItMatters: `Fundamento dos cálculos estequiométricos em química. Toda conversão de mol para grama depende disso.`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: 'Constante de Planck Molar',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: 'Termodinâmica',
    description: 'Planck Constant escalada para o nível molar — NA × h.',
    discoveredBy: 'Derivado',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `A energy por mol de fótons por unidade de frequency.`,
    simpleExample: `Na fotoquímica, a energy de um "Einstein" (um mol de fótons) é NAhf.`,
    deepMeaning: `Aparece na equação de Sackur-Tetrode para a entropy absoluta de um gás ideal. Conecta a função de partição quântica-mecânica às grandezas termodinâmicas macroscópicas na escala molar.`,
    whyItMatters: `Fundamental para a fotoquímica e a termodinâmica estatística.`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: 'Volume Molar do Gás Ideal (CNTP)',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: 'Termodinâmica',
    description: 'Volume ocupado por um mol de gás ideal nas CNTP.',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `A 0°C e 101.325 Pa, um mol de qualquer gás ideal ocupa 22,413... litros.`,
    simpleExample: `Um litro de hidrogênio e um litro de oxigênio nas CNTP contêm exatamente o mesmo número de moléculas (2,688 × 10²²).`,
    deepMeaning: `Da lei dos gases ideais: V = nRT/P. Esse "volume molar" permite a conversão rápida entre a quantidade de gás e o volume. O fato de todos os gases ideais terem o mesmo volume molar nas CNTP foi uma percepção revolucionária de Avogadro.`,
    whyItMatters: `Um dos números mais praticamente úteis da química para a estequiometria de gases.`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Constante de Loschmidt',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: 'Termodinâmica',
    description: 'Número de moléculas por metro cúbico de gás ideal nas CNTP.',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `O número de moléculas de ar ao nível do mar é de aproximadamente 2,687 × 10²⁵ por metro cúbico.`,
    simpleExample: `O livre caminho médio de uma molécula de ar nas CNTP é de aproximadamente 66 nm. A frequency de colisão é ~10¹⁰ por segundo.`,
    deepMeaning: `Loschmidt estimou isso em 1865 usando a viscosidade do gás e o diâmetro molecular. Foi a primeira estimativa séria de moléculas num volume macroscópico e a primeira evidência direta de que os átomos tinham tamanhos definidos. O espalhamento de Rayleigh (por que o céu é azul) é proporcional a n₀.`,
    whyItMatters: `Fundamental para a física atmosférica e a história da teoria atômica.`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: 'Volume Molar do Silício',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: 'Termodinâmica',
    description: 'Volume ocupado por um mol de átomos de silício em sua rede cristalina.',
    discoveredBy: 'Projeto Avogadro',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `O volume de um mol de silício sólido em sua estrutura cúbica de diamante.`,
    simpleExample: `Meça o parâmetro de rede 'a' por difração de raios X e a densidade macroscópica 'ρ' para encontrar NA com 2 partes por bilhão de precisão.`,
    deepMeaning: `O silício é o material de referência para o método de densidade de cristal de raios X. O Projeto Avogadro usou esferas de silício de 1 kg com perfeição extraordinária para redefinir o quilograma em 2019. Conecta a cristalografia de raios X aos padrões de mass macroscópicos.`,
    whyItMatters: `Central para a redefinição de 2019 do quilograma.`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: 'Massa Molar do Carbono-12',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: 'Termodinâmica',
    description: 'Mass de um mol de átomos de carbono-12.',
    discoveredBy: 'Redefinição do SI (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `Antes de 2019, esse valor era exatamente 12 g/mol. Agora, no novo SI, possui uma pequena incerteza medida.`,
    simpleExample: `O desvio de exatamente 12 g/mol é de cerca de 10 partes por bilhão — completamente negligenciável para a química, mas crítico para a metrologia.`,
    deepMeaning: `Reflete a inconsistência entre definir NA exatamente e a definição histórica da unidade de mass atômica. As unidades de base agora são definidas fixando as constantes fundamentais.`,
    whyItMatters: `Um lembrete de que o novo SI é definido por constantes, não por artefatos materiais.`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: 'Primeira Constante de Radiação',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: 'Termodinâmica',
    description: 'Define a escala geral da intensidade de radiação do corpo negro — 2πhc².',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Aparece na lei de radiação do corpo negro de Planck para a radiância espectral.`,
    simpleExample: `O Sol apresenta pico em ~502 nm (verde). As células solares são projetadas para corresponder precisamente a esse espectro de Planck, calculado usando c₁.`,
    deepMeaning: `A lei de radiação de Planck lançou a mecânica quântica em 1900. A hipótese quântica de Planck introduziu o fator exponencial que suprime a divergência de alta frequency (a catástrofe ultravioleta).`,
    whyItMatters: `Fundamental para a astrofísica, a energia solar e a cosmologia.`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: 'Primeira Constante de Radiação para Radiância Espectral',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: 'Termodinâmica',
    description: 'c₁ dividido por π — fornece a radiância por unidade de ângulo sólido.',
    discoveredBy: 'Derivado',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `Fornece a radiância espectral por unidade de ângulo sólido, em vez da irradiância espectral hemisférica.`,
    simpleExample: `Essencial para calcular corretamente o desempenho de sistemas ópticos como a sensibilidade de telescópios ou a exposição de câmeras.`,
    deepMeaning: `Reflete a diferença entre a emissão hemisférica integrada e a radiância numa direção específica. Para um emissor lambertiano, a relação envolve um fator de π.`,
    whyItMatters: `Essencial em radiometria e sensoriamento remoto por satélite.`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: 'Segunda Constante de Radiação',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: 'Termodinâmica',
    description: 'Conecta comprimento de onda e temperature na função de Planck — hc/k.',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Aparece no expoente da função de Planck. Define o ponto de cruzamento entre os regimes quântico e clássico.`,
    simpleExample: `A lei de deslocamento de Wien (λ_max × T = b) é derivada de c₂. As câmeras termais detectam pessoas porque corpos a 310 K apresentam pico no infravermelho médio.`,
    deepMeaning: `Historicamente, a razão c₁/c₂ foi usada para medir a Boltzmann Constant. À temperature ambiente, as correções quânticas tornam-se importantes para a radiação no infravermelho médio.`,
    whyItMatters: `Fundamental para a ciência do clima, o imageamento térmico e a física estelar.`
  },

  {
    symbol: 'g',
    name: 'Aceleração Padrão da Gravidade',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s² (exato)',
    category: 'Universal',
    description: 'Valor padrão da aceleração gravitacional na superfície da Terra.',
    discoveredBy: 'Bureau Internacional de Pesos e Medidas (1901)',
    formula: 'W = mg',
    whatItSays: `Um valor convencional padrão definido para a aceleração gravitacional.`,
    simpleExample: `A gravidade real varia de ~9,780 m/s² no equador a ~9,832 m/s² nos polos. O valor padrão foi escolhido para corresponder às medições a 45° de latitude.`,
    deepMeaning: `Aparece como fator de conversão entre mass e force (quilograma-force). Os gravímetros medem a gravidade local com 9 algarismos significativos para detectar deformações por maré e variações no nível do lençol freático. O princípio da equivalência (Relatividade Geral) afirma que esse valor é indistinguível da aceleração num espaço-tempo plano.`,
    whyItMatters: `Referência para engenharia, definição de pressão atmosférica e pesagem precisa.`
  },

  // ── PARTE 19: UNIDADES ATÔMICAS ────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: 'a.u. de Comprimento',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: 'Atômica',
    description: 'O Raio de Bohr nas unidades atômicas.',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `A unidade de comprimento no sistema atômico. Todos os comprimentos de ligação são expressos em Bohr.`,
    simpleExample: `Comprimentos de ligação típicos: H-H = 1,40 a₀, C-C = 2,92 a₀.`,
    deepMeaning: `Nas unidades atômicas, ħ = me = e = 4πε₀ = 1. Isso simplifica enormemente as equações da química quântica.`,
    whyItMatters: `Unidade padrão na química computacional.`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: 'a.u. de Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: 'Atômica',
    description: 'A electron mass nas unidades atômicas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `A unidade de mass no sistema atômico.`,
    simpleExample: `Na química quântica, todas as massas são expressas como múltiplos de me.`,
    deepMeaning: `Parte do sistema que define as constantes fundamentais como 1 para simplificar a equação de Schrödinger.`,
    whyItMatters: `Mass de base para todos os cálculos de estrutura eletrônica.`
  },

  {
    symbol: 't<sub>au</sub>',
    name: 'a.u. de Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: 'Atômica',
    description: 'Escala de time natural do movimento eletrônico nos átomos.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `O time para um radiano de evolução de phase na escala de energy de Hartree.`,
    simpleExample: `O período orbital do elétron no estado fundamental do hidrogênio é 2π unidades atômicas de time ≈ 152 attosegundos.`,
    deepMeaning: `A física de attosegundos estuda a dinâmica eletrônica em tempo real nessa escala de time. O Prêmio Nobel de 2023 foi concedido pela tecnologia de pulsos de attossegundos.`,
    whyItMatters: `Permite a observação direta do movimento de elétrons dentro dos átomos.`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'a.u. de Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: 'Atômica',
    description: 'A Energia de Hartree nas unidades atômicas.',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `Unidade de energy na física atômica.`,
    simpleExample: `Energias de ligações químicas em Hartrees: ligação H₂ = 0,174 Eh.`,
    deepMeaning: `Define a escala de energy fundamental para todos os cálculos de estrutura eletrônica.`,
    whyItMatters: `Unidade de energy padrão em códigos computacionais como o DFT.`
  },

  {
    symbol: 'e',
    name: 'a.u. de Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: 'Atômica',
    description: 'A carga elementar nas unidades atômicas.',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `Nas unidades atômicas, o próton tem charge +1 e o elétron tem charge −1.`,
    simpleExample: `O núcleo do hélio tem charge +2 a.u.`,
    deepMeaning: `Simplifica a matemática da interação eletromagnética ao definir a charge fundamental como unidade.`,
    whyItMatters: `Unidade de base para distribuições de charge em moléculas.`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: 'a.u. de Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: 'Atômica',
    description: 'Velocity do elétron no estado fundamental do hidrogênio.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = αc',
    whatItSays: `α × c — a velocity do elétron no modelo de Bohr.`,
    simpleExample: `No ouro (Z=79), o elétron 1s tem velocity ~0,58c, causando a contração relativística responsável pela cor amarela do ouro.`,
    deepMeaning: `Para átomos mais pesados, velocidades próximas a c requerem correções relativísticas.`,
    whyItMatters: `Determina quando os efeitos relativísticos tornam-se importantes na química.`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: 'a.u. de Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: 'Atômica',
    description: 'Escala natural da incerteza de momentum no hidrogênio.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (a.u. de velocity) = ħ/a₀.`,
    simpleExample: `Pelo princípio da incerteza, a incerteza de momentum para um elétron localizado dentro de a₀ é exatamente uma unidade atômica.`,
    deepMeaning: `Conecta a escala de comprimento dos átomos diretamente ao momentum do elétron em órbita.`,
    whyItMatters: `Governa a difração de elétrons e o espalhamento em química quântica.`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: 'a.u. de Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: 'Atômica',
    description: 'Força eletrostática entre o elétron e o próton no Raio de Bohr.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²). Enorme em escalas atômicas (82 nN), mas imperceptível para os humanos.`,
    simpleExample: `Fundamentos da estabilidade atômica: o equilíbrio dessa force contra a pressure quântica.`,
    deepMeaning: `Define a escala da intensidade da "cola" que mantém os átomos unidos.`,
    whyItMatters: `Governa a ligação atômica e a resistência dos materiais.`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: 'a.u. de Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: 'Atômica',
    description: 'Campo extraordinariamente intenso sentido pelo elétron no hidrogênio.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `O campo elétrico no Raio de Bohr (514 GV/m).`,
    simpleExample: `Os campos atômicos são ~100.000 vezes mais intensos do que o campo de ruptura do ar.`,
    deepMeaning: `A intensidades acima de ~10¹⁴ W/cm², os campos laser são fortes o suficiente para arrancar elétrons dos átomos, gerando pulsos de attossegundos.`,
    whyItMatters: `Referência para a física de campo forte com laser e a ionização por campo.`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: 'a.u. de Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: 'Atômica',
    description: 'Intensidade de campo magnético correspondente a uma unidade atômica.',
    discoveredBy: 'Derivado',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235.000 Tesla — vastamente mais forte do que qualquer ímã de laboratório (~45 T).`,
    simpleExample: `Os campos magnéticos de estrelas de nêutrons atingem ~10⁸–10¹¹ Tesla, superando a unidade atômica.`,
    deepMeaning: `Nessa escala, os efeitos da QED na propagação de fótons (birrefringência do vácuo) tornam-se significativos.`,
    whyItMatters: `Crítico para a compreensão de anãs brancas e magnetares.`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: 'a.u. de Permittivity',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: 'Atômica',
    description: 'Permissividade do vácuo escalada para unidades atômicas — 4πε₀.',
    discoveredBy: 'Derivado',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `Nas unidades atômicas, a lei da força de Coulomb torna-se simplesmente F = q₁q₂/r².`,
    simpleExample: `Simplifica toda a matemática eletrostática no código de química quântica.`,
    deepMeaning: `Uma das simplificações primárias que remove o fator 4πε₀ dos cálculos.`,
    whyItMatters: `Normalização padrão na física teórica.`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: 'a.u. de Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: 'Atômica',
    description: 'Resposta de segunda ordem da energy de um átomo a um campo magnético.',
    discoveredBy: 'Derivado',
    formula: '1 a.u.',
    whatItSays: `Medida pelos deslocamentos químicos de NMR e medições de force magnética.`,
    simpleExample: `Usado para calcular como as moléculas respondem a campos magnéticos na escala da MRI.`,
    deepMeaning: `Grandeza fundamental no estudo das suscetibilidades magnéticas moleculares no nível quântico.`,
    whyItMatters: `Usado na espectroscopia de NMR e em simulações de química quântica.`
  }

];
