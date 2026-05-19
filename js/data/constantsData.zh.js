// =============================================================================
// zh-CN.js — 简体中文国际化文件 (i18n)
// 物理常数数据库 · 中文翻译版
// 数据来源: CODATA 2022 | 原始参考: Phyansy Reference Guide
//
// 翻译规则:
//   · 物理量名称 (velocity, mass, charge 等) 保留英文
//   · 物理学家姓名 (Oppenheimer, Planck, Einstein 等) 保留英文
//   · 所有数值、单位、公式保持不变
//   · 中文语言力求自然、精准、符合专业学术规范
// =============================================================================

export const CONSTANTS_ZH = [

  // ── 第一部分：普适常数 / 定义常数 ────────────────────────────────────────

  {
    symbol: 'c',
    name: '真空中的光速',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s（精确值）',
    category: '普适',
    description: '因果律本身的基本speed limit。',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `光在完美真空中每秒精确传播 299,792,458 米。这并非测量近似值——自1983年起，"米"本身便由此数值定义。因此，c 现在是国际定义下的一个精确整数。`,
    simpleExample: `月球反射的光抵达你眼睛约需 1.28 秒；太阳光到达地球约需 8 分 20 秒。距离最近的恒星 Proxima Centauri 距我们 4.24 光年——意味着光需要整整 4.24 年才能跨越这段距离。`,
    deepMeaning: `c 并非仅仅是"光的移动速度"，而是因果律的基本speed limit——是任何信息、能量或因果影响在宇宙中传播速度的上限。Einstein 的狭义相对论揭示：无论观测者运动状态如何，c 对所有人都相同。这彻底颠覆了Newton的绝对时间概念。相对运动的两个观测者对长度、时间间隔和同时性的判断会不同——但他们测得的 c 永远一致。E = mc² 表明：mass 与energy 是同一事物，仅以 c² 为换算系数。`,
    whyItMatters: `没有 c，就没有狭义相对论，没有 E = mc²，没有GPS时间修正（GPS卫星必须同时修正狭义和广义相对论导致的时间膨胀），也无法理解恒星或粒子物理。c 是现代物理学的脊梁。`
  },

  {
    symbol: 'h',
    name: 'Planck 常数',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s（精确值）',
    category: '普适',
    description: '电磁作用量子——决定光子的energy。',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `energy 以离散的"量子"形式存在。单个电磁辐射量子（光子）所携带的energy为 E = hf，其中 f 是辐射的frequency。h 是连接frequency（波的性质）与energy（粒子性质）的比例常数。`,
    simpleExample: `可见红光的frequency约为 4.3 × 10¹⁴ Hz。一个红光光子携带的energy为：(6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV。这微小的energy足以激活视网膜中的一个视紫红质分子——这就是视觉的起点。`,
    deepMeaning: `在Planck之前，经典物理预言热物体在高frequency下应辐射无限energy——即"紫外灾难"。1900年，Max Planck 假设energy不是连续的而是量子化的，从而解决了这一问题。Einstein 用此解释了光电效应。h 也是作用量子——其单位为energy × time。约化形式 ħ = h/2π 出现在对易关系 [x̂, p̂] = iħ 中——这是量子力学的数学核心——以及Heisenberg 不确定性原理：Δx · Δp ≥ ħ/2。`,
    whyItMatters: `h 是量子世界与经典世界之间的分界线。当一个系统的相关作用量远大于h时，经典力学成立。若没有h，原子将坍缩，化学将不复存在，我们所知的宇宙也无法存在。`
  },

  {
    symbol: 'ħ',
    name: '约化 Planck 常数',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s（精确值）',
    category: '普适',
    description: 'h/2π——量子力学中angular momentum 的自然单位。',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ（读作"h-bar"）即 h 除以 2π。凡使用angular frequency ω（单位：弧度/秒）而非普通frequency f（单位：周期/秒）时，ħ 便会出现，因为 ω = 2πf。`,
    simpleExample: `电子的spin为 ħ/2；光子的spin为 ħ。轨道angular momentum 始终是 ħ 的整数倍——因此 ħ 是旋转的最小单元。`,
    deepMeaning: `在量子力学中，ħ 并非仅仅是一个方便的缩写，而是angular momentum 的基本量子。在量子场论中，ħ 控制量子涨落的大小。令 ħ → 0 可还原为经典场论。量子力学的整体结构——对易关系、路径积分、不确定性原理——均由 ħ 主导。`,
    whyItMatters: `在粒子物理学家使用的自然单位制中，令 ħ = c = 1，可大幅简化方程，并揭示理论深层的几何结构。`
  },

  {
    symbol: 'e',
    name: '基本电荷',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C（精确值）',
    category: '电磁',
    description: '自由存在的最小电荷——charge 是量子化的。',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `这是单个质子（正）或单个电子（负）所携带的电荷大小。自然界中所有可观测的电荷均为 e 的整数倍。Charge 是量子化的。`,
    simpleExample: `1安培的电流意味着每秒有1库仑的charge通过某截面。由于每个电子携带 1.602 × 10⁻¹⁹ C，因此1 A电流对应每秒约 6.24 × 10¹⁸ 个电子通过。`,
    deepMeaning: `Charge 的量子化由Robert Millikan 通过著名的油滴实验确立。他测量了悬浮在电场中的油滴上的charge，发现所有charge均为某一基本单位的整数倍，即 e。精细结构常数 α ≈ 1/137 是电磁力强度的无量纲度量。夸克携带 e/3 和 2e/3 的charge，但它们被永久禁闭在强子内部，从未以分数charge的形式被单独观测到。`,
    whyItMatters: `e 决定了所有原子和分子相互作用的尺度。化学、生物学、电子学和材料科学在根本上都依赖于 e 的具体数值。若 e 略有不同，我们所知的生命将无法存在。`
  },

  {
    symbol: 'k',
    name: 'Boltzmann 常数',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K（精确值）',
    category: '热力学',
    description: '温度与kinetic energy 之间的桥梁——S = k ln(Ω)。',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k（也写作 kB）是微观粒子世界与宏观温度世界之间的桥梁。它将temperature——一种系综的统计性质——转换为每个粒子的energy。每个自由度平均贡献 (1/2)kT 的kinetic energy。`,
    simpleExample: `在室温（T = 293 K）下：kT ≈ 0.0253 eV。这是室温下的特征热energy尺度。化学键的energy约为几个eV，因此室温下的热energy远小于此——这就是为什么大多数化学键在室温下是稳定的。`,
    deepMeaning: `Temperature 并非基本量——它是粒子平均kinetic energy 的度量。S = k ln(Ω) 以信息和概率的语言定义了entropy，将热力学与微观物理学相连接。Boltzmann 分布给出了系统在温度 T 下处于energy为 E 的状态的概率：P(E) ∝ e^(−E/kT)。这一指数因子——Boltzmann 因子——主导着从化学反应速率到地球大气中分子分布的一切现象。`,
    whyItMatters: `k 是热力学和统计力学的基础。若没有它，我们便无法将微观物理学与温度、pressure、entropy等宏观可观测量联系起来。自2019年起，k 是一个精确的定义常数，开尔文（K）通过它来定义。`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro 常数',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹（精确值）',
    category: '热力学',
    description: '一摩尔中的实体数目——连接原子尺度与人类尺度的桥梁。',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `任何物质的一摩尔恰好包含 6.022 140 76 × 10²³ 个基本实体（原子、分子、离子等）。这个数字是原子尺度与人类尺度之间的桥梁。`,
    simpleExample: `12克碳-12 精确包含一摩尔碳原子。这是一个几乎难以想象的庞大数字：若你拥有一摩尔沙粒，它们将把地球表面覆盖至数公里深。`,
    deepMeaning: `NA 将原子质量单位与克联系起来：1 u = 1 克 / NA = 1.660 539 × 10⁻²⁷ kg。摩尔气体常数R与Boltzmann常数的关系为：R = NA × k = 8.314 J mol⁻¹ K⁻¹。Faraday 常数 F = NAe = 96,485 C/mol 是一摩尔电子的charge。从历史上看，测量 NA 是19世纪和20世纪初物理学的核心挑战之一。Jean Perrin 于1908年对布朗运动的测量证明了原子的存在。`,
    whyItMatters: `NA 使化学成为定量科学。它让化学家能通过称量来计数原子。每一个化学计量计算、每一个药物剂量计算、每一个材料科学计算都依赖于 NA。`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: '发光效能',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W（精确值）',
    category: '普适',
    description: '定义坎德拉——SI中唯一与人类生物学相关的常数。',
    discoveredBy: '国际定义 (1979)',
    formula: 'K<sub>cd</sub> = 683 lm/W at 540 THz',
    whatItSays: `在特定单色frequency 540 × 10¹² Hz（绿光，波长 ≈ 555 nm）——即人眼在日光条件下最敏感的frequency——下，1瓦辐射功率对应683流明的光通量（人眼感知的亮度）。`,
    simpleExample: `一个发射1瓦纯绿光的光源恰好产生683流明的视觉亮度。其他任何颜色的光每瓦流明数都更低，因为人眼对其敏感度较低。`,
    deepMeaning: `这是SI制中唯一依赖人类生物学——具体来说是人眼明视觉（日间）光谱灵敏度——的常数。它以此方式定义，是为了将物理量辐射功率（瓦特）与感知量亮度（流明）联系起来。自2019年起，坎德拉通过将 Kcd 固定为精确的 683 lm/W 来定义。`,
    whyItMatters: `是光度学、照明工程及所有光学系统设计的基础。每个灯泡上的每一个流明规格，最终都追溯至这个常数。`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: '铯超精细跃迁频率',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz（精确值）',
    category: '普适',
    description: '定义"秒"——所有现代计时的心跳。',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `铯-133 原子基态有两个超精细能级——由电子磁矩与核磁矩之间的相互作用分裂而成。当原子在这两个能级之间跃迁时，它精确地辐射或吸收frequency为 9,192,631,770 Hz 的辐射。`,
    simpleExample: `自1967年起，一秒被定义为这种辐射精确的 9,192,631,770 个振荡周期。铯原子钟是人类有史以来制造的最精确计时装置，每3亿年误差不超过一秒。`,
    deepMeaning: `超精细分裂源于量子电动力学——电子磁偶极矩与核自旋产生的磁场之间的相互作用。从第一性原理计算这个frequency是对量子电动力学的深刻检验。GPS、互联网（需要同步时钟）、金融系统以及所有现代通信都直接依赖铯原子钟标准。`,
    whyItMatters: `这是所有科学领域中最精确的测量。现代文明——GPS、互联网同步、金融交易、5G网络——都依赖于这个常数。`
  },

  // ── 第二部分：电磁常数 ────────────────────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: '真空电容率',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: '电磁',
    description: '电场穿透真空的容易程度。',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀（读作"epsilon-naught"）度量电场穿透真空的容易程度。它出现在Coulomb定律中——两点charge之间的force：F = (1/4πε₀) × (q₁q₂/r²)。ε₀越大，给定charge和distance下的静电force越弱。`,
    simpleExample: `水的相对介电常数 εr ≈ 80，意味着水将charge之间的静电force削弱至真空中的1/80——这正是水成为离子化合物绝佳溶剂的原因。`,
    deepMeaning: `ε₀并非独立定义——它由c和μ₀的定义值通过 ε₀ = 1/(μ₀c²) 导出。它出现在Maxwell方程组真空形式的全部四个方程中。在Gauss定律中：∮ E · dA = Q_enc/ε₀——任意封闭曲面的总电通量等于封闭charge除以ε₀。它还决定了储存在电场中的电磁energy密度的尺度：u_E = (1/2)ε₀E²。`,
    whyItMatters: `出现在Maxwell方程组全部四个方程中。没有ε₀，就没有定量静电学，没有电容器设计，也无法理解电介质。`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: '真空磁导率',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: '电磁',
    description: '磁场穿透真空的容易程度。',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀（读作"mu-naught"）度量磁场穿透真空的容易程度。它出现在Biot-Savart 定律和Ampère 定律中。两根载有电流 I₁ 和 I₂、间距为 d 的平行导线之间，单位长度受到的force为：F/L = (μ₀/2π) × (I₁I₂/d)。`,
    simpleExample: `铁的相对磁导率 μr 可高达约10,000——铁对磁场的集中能力远超真空。这就是变压器铁芯由铁制成的原因：高效地引导和增强磁通量。`,
    deepMeaning: `在2019年SI重新定义之前，μ₀ 被定义为精确的 4π × 10⁻⁷ N/A²。现在它是一个具有小不确定度的测量量。μ₀ 出现在含Maxwell修正项的Ampère 定律中：∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt)。第二项——Maxwell 的位移电流——使电磁波能够在真空中存在，并直接导致了"光是电磁波"的预测。`,
    whyItMatters: `没有μ₀，就没有磁场，没有电磁感应，没有电动机，没有变压器，也没有无线电波。`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: '真空特性阻抗',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: '电磁',
    description: '电磁波在真空中传播时电场与磁场之比。',
    discoveredBy: '由Maxwell方程组导出',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `当电磁波在真空中传播时，电场振幅与磁场振幅之比为：Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω。`,
    simpleExample: `天线在其阻抗与377 Ω匹配时辐射效率最高。单位面积辐射功率（Poynting 矢量）为 S = E²/Z₀。这被用于设计从偶极天线到卫星天线的一切装置。`,
    deepMeaning: `Z₀ 是自由空间的阻抗——它告诉你在传播的电磁波中，单位磁场对应多大的电场。它是真空对电磁波传播的"阻力"，类比于传输线的特性阻抗。到达地球的太阳光对应的电场振幅为 √(1361 × Z₀) ≈ 716 V/m。`,
    whyItMatters: `对于天线设计、雷达截面积、天线增益以及所有无线通信链路预算均不可或缺。`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson 常数',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: '电磁',
    description: '在超导Josephson结中，电压与frequency的关系。',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson 常数将voltage与frequency联系起来，体现于交流Josephson效应中。当直流voltage V 施加在Josephson结（两个超导体之间的薄绝缘势垒）两端时，它产生frequency为 f = 2eV/h 的交变电流。`,
    simpleExample: `Josephson结两端1毫伏的voltage产生约483.6 GHz的交流振荡——处于微波波段。这被用于建立精度达 10¹⁰ 分之一的电压标准。`,
    deepMeaning: `系数2来源于超导涉及Cooper对——charge为2e的电子对。Josephson结是一种宏观量子器件，其中两个超导体之间的量子相位差驱动超电流。交流Josephson效应有力地证明了量子力学在宏观尺度上于超导体中发挥作用。`,
    whyItMatters: `全球通用的主要电压标准。现有最精确的电气测量手段。对量子计量学和超导量子计算至关重要。`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'von Klitzing 常数',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: '电磁',
    description: '电阻量子——h/e²——源自量子Hall效应。',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² 是电阻量子。它出现在量子Hall效应中：当二维电子气在低温下置于强垂直磁场中时，Hall resistance 以 RK 的精确分数量子化：RH = RK/n。`,
    simpleExample: `这种量子化是如此精确，以至于 RK 被用作主要电阻标准。约1 K温度、约10特斯拉磁场中的硅芯片可以将 RK/2 = 12,906 Ω 再现至十亿分之一以内。`,
    deepMeaning: `这种量子化在拓扑上源起——它不依赖于材料、样品几何形状或任何可调参数，在测量精度范围内是精确的。分数量子Hall效应（1982年）涉及更奇异的1/3、2/5等分数量子化——源于强关联电子态，包括可能承载非阿贝尔任意子的 ν = 5/2 态，与拓扑量子计算相关。`,
    whyItMatters: `全球通用的主要电阻标准。凝聚态物理中拓扑学的窗口。整数和分数量子Hall效应代表了现代物理学中最深刻的发现之一。`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: '磁通量子',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: '电磁',
    description: '磁通量子——h/(2e)——存在于超导回路中。',
    discoveredBy: 'London & Onsager（理论）· Doll & Näbauer (1961，实验证实)',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `穿过超导回路的磁通量以 Φ₀ 为单位量子化。超导环只能俘获 h/(2e) 整数倍的磁通量。`,
    simpleExample: `SQUID（超导量子干涉器件）能够探测小至 10⁻⁶ Φ₀ 的磁通量变化——对应约 10⁻¹⁸ 特斯拉的磁场变化。这被用于脑成像（磁脑图，MEG）。`,
    deepMeaning: `磁通量的量子化是量子力学的直接宏观体现。超导序参量（宏观量子波函数）必须在回路中单值，这迫使封闭磁通量是量子化的：Γ = n × h/m。SQUID 利用 Φ₀ 以非凡的灵敏度测量磁场——是有史以来最灵敏的磁传感器。`,
    whyItMatters: `SQUID技术、脑磁图、宏观尺度量子力学基本测试以及超导量子计算的基础。`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: '电导量子',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: '电磁',
    description: '电导的基本单位——2e²/h。',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `当电子流经完美的单通道量子导体（如单原子接触或量子点接触）时，每个通道的电导恰好为 G₀ = 2e²/h。相应的电阻为 1/G₀ = h/(2e²) ≈ 12,906 Ω。`,
    simpleExample: `将金纳米线拉伸至单原子宽时，其电导约为 G₀。这已被实验精确测量。双原子线的电导约为 2G₀。`,
    deepMeaning: `经典电阻依赖于样品几何形状、材料和杂质。但在量子层面上，即使是完美的导体也具有电阻——这源于导体与其引线之间传播模式的量子力学匹配。这就是Landauer公式：G = G₀ × Σ T，其中 T 是各量子通道的透射概率。`,
    whyItMatters: `介观物理和纳米电子学的基础。主导电子在分子结、碳纳米管和量子点中的传输。`
  },

  {
    symbol: 'F',
    name: 'Faraday 常数',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: '电磁',
    description: '一摩尔电子的charge——NA × e。',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday 常数是一摩尔基本charge的总量——即一摩尔电子或一摩尔质子的charge。在电化学中，它决定了沉积或溶解一摩尔一价离子所需的charge量。`,
    simpleExample: `从CuSO₄溶液中电镀1摩尔铜（63.5克）需要 2F = 192,970 C 的charge（铜是二价的，Cu²⁺ + 2e⁻ → Cu）。这就是为什么电镀较厚的层需要大电流。`,
    deepMeaning: `Faraday 的电解定律（1833-1834年）表明，在电极处沉积的物质质量与通过的charge量成正比，F 是比例常数（每摩尔每价）：m = (M/zF) × Q。Faraday 在不了解电子或原子的情况下凭经验推导出了这一关系——这是一项卓越的成就。以他名字命名的常数现在通过 NA 和 e 的定义而具有精确值。`,
    whyItMatters: `所有电化学的基础。每块锂离子电池、每个电镀过程、每个氯气生产厂以及每个金属电解精炼过程都依赖这个常数运作。`
  },

  // ── 第三部分：原子与核常数 ───────────────────────────────────────────────

  {
    symbol: 'α',
    name: '精细结构常数',
    value: '7.297 × 10<sup>−3</sup>',
    unit: '无量纲',
    exact: '7.2973525643 × 10⁻³（≈ 1/137.036）',
    category: '原子',
    description: '电磁力的无量纲耦合常数。',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α 是电磁相互作用的无量纲耦合常数。它度量带charge粒子之间电磁force的强度——具体地说，是带charge粒子发射或吸收光子的概率幅。`,
    simpleExample: `在量子电动力学中，电子在给定过程中发射一个光子的概率正比于α；双光子过程正比于α²，依此类推。由于 α ≈ 1/137，每增加一个光子顶点，概率就降低约1/137，这就是为什么QED的Feynman图可以快速收敛。`,
    deepMeaning: `α 是物理学中最神秘的数字之一。它是纯粹无量纲的——无单位，且无论使用何种单位制，其值均相同。它将 e（电磁学）、ε₀（静电学）、ħ（量子力学）和 c（相对论）融合为一体。Richard Feynman 称 α "是物理学中最令人费解的谜团之一"。在QED中，α并非真正的常数——由于真空极化，它随energy尺度"跑动"：在低energy下 α ≈ 1/137；在Z玻色子质量尺度下 α ≈ 1/128。`,
    whyItMatters: `α 主导着所有原子物理、化学和分子生物学。原子的大小、化学键的强度、所有元素的吸收和发射光谱——这一切都由 α 控制。它可以说是物理学中最重要的无量纲数字。`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg 常数',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: '原子',
    description: '决定所有氢原子谱线的wavelength。',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg 常数给出氢原子谱线的波数（wavelength的倒数）。所有氢原子谱线的wavelength由Rydberg公式给出：1/λ = R∞ × (1/n₁² − 1/n₂²)，其中 n₁ 和 n₂ 是满足 n₂ > n₁ 的正整数。`,
    simpleExample: `对于Lyman系（跃迁至基态），第一条谱线（n₂ = 2）：1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4，λ = 121.6 nm（紫外线——Lyman-α线）。这是天体物理学中最重要的谱线——用于探测整个宇宙中的氢，并通过红移测量空间的膨胀。`,
    deepMeaning: `R∞ 由更基本的常数理论推导而来：R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h)。这个公式——从Bohr 模型推导并由量子力学完善——将氢的光谱与电子mass、基本电荷和其他基本常数联系起来。理论与实验之间的吻合令人叹为观止。Rydberg energy（Ry）——氢的束缚能——为：En = −Ry/n² = −13.6 eV/n²。`,
    whyItMatters: `引导Bohr 建立量子原子模型的出发点。最精确的原子常数，已知精确至12位有效数字，可以在万亿分之几的精度上对QED进行检验。`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr 半径',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: '原子',
    description: '原子的自然尺度——氢原子基态中电子-质子距离的最概然值。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ 是氢原子基态（n = 1）中电子与质子之间距离的最概然值。它确立了原子大小的特征尺度：a₀ = ħ/(mecα)。`,
    simpleExample: `a₀ ≈ 0.529 Å（埃）。这是氢原子的典型大小。大多数原子的半径在a₀的几倍范围内。金刚石中的C-C键长约为 2.9a₀；DNA双螺旋直径约为 40 Å ≈ 75a₀。`,
    deepMeaning: `Bohr 半径来源于电子kinetic energy（量子力学性质，倾向于使电子扩展——不确定性原理阻止它坍缩到原子核）与Coulomb势能（将电子拉向原子核）之间的平衡。在量子力学中，氢原子基态波函数在 r = a₀ 处达到最大值。Bohr半径确立了所有原子波函数的尺度——高能级轨道的半径约为 n²a₀。`,
    whyItMatters: `定义了化学和材料科学的基本length尺度。在凝聚态物理中，a₀ 确立了化学键、晶格间距和激子大小的尺度。氢原子的大小最终决定了物质的密度。`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: '原子',
    description: '原子物理的自然energy单位——氢原子电离energy的两倍。',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree energy 是将氢原子从基态电离所需energy的两倍。它是原子物理的自然energy单位：Eh = e²/(4πε₀a₀) = α²mec²。`,
    simpleExample: `氢的基态energy为 −(1/2)Eh = −13.6 eV。典型的化学键energy约为 0.1–0.2 Eh（3–5 eV）。C-H键约为 0.16 Eh。这些数字在原子单位中均为量级1——非常适用于量子化学。`,
    deepMeaning: `在原子单位（令 ħ = me = e = a₀ = 1）中，Eh = 1。原子单位极大地简化了量子化学方程。氢的Schrödinger方程在原子单位中简化为：−(1/2)∇²ψ − (1/r)ψ = Eψ，基态对应 E = −1/2，即 −0.5 Hartree = −13.6 eV。计算化学程序（密度泛函理论DFT、Hartree-Fock方法）几乎普遍在内部使用原子单位。`,
    whyItMatters: `量子化学的核心单位。每一项DFT计算、分子动力学模拟以及量子化学结果，最终都追溯至Hartree energy。它是电子结构计算的基本energy尺度。`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr 磁子',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: '原子',
    description: '电子magnetic moment的自然单位——eħ/(2me)。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB 是电子magnetic moment的自然单位。它代表角动量为ħ的电子轨道运动所产生的magnetic moment。`,
    simpleExample: `在1特斯拉的MRI磁场中，电子自旋向上和向下两个状态之间的Zeeman分裂为 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV——对应微波frequency。这就是为什么ESR使用微波，而NMR使用射频。`,
    deepMeaning: `电子的spin magnetic moment近似为μB（精确地说是 ge × μB/2，其中 ge ≈ 2.002，源于量子电动力学修正）。Zeeman效应——磁场中原子谱线的分裂——由μB 主导：ΔE = ml × μB × B，其中ml是磁量子数。μB 主导电子自旋共振（ESR）。与实验吻合至12位小数，其反常部分是科学史上计算最精确的量。`,
    whyItMatters: `电子自旋共振、磁性材料及所有磁光效应的基础。是自旋电子学和自旋量子比特量子计算的核心。`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: '核磁子',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: '原子',
    description: '核magnetic moment的自然单位——比Bohr磁子小1836倍。',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN 是核子（质子和中子）magnetic moment的自然单位。由于质子比电子重1836倍，μN 比μB 小1836倍。`,
    simpleExample: `质子的magnetic moment为 2.793 μN。在3特斯拉的MRI扫描仪中，质子自旋态之间的energy差为 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J，对应约127 MHz的射频。这正是MRI扫描仪使用的frequency。`,
    deepMeaning: `尽管中子不带电，其magnetic moment却为 −1.913 μN。中性粒子具有非零magnetic moment这一事实，是核结构存在内部组成（夸克）的最早历史迹象之一。质子magnetic moment为 2.793 μN——而非简单Dirac点粒子预测的1 μN——是Stern在1933年获诺贝尔奖的发现。NMR（及MRI）基于质子自旋跃迁。`,
    whyItMatters: `NMR光谱学和MRI的基础——结构化学和医学成像中最强大的工具。历史上证明了核子具有夸克内部结构。`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: '电子 mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: '粒子',
    description: '电子的静止mass——最轻的有质量基本粒子。',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `这是电子的静止mass——最轻的有质量基本粒子。通过 E = mc² 转换为energy：mec² = 0.510 998 950 MeV。电子比质子轻1836.15倍。`,
    simpleExample: `正负电子对的产生（γ → e⁺ + e⁻）需要光子至少具有 2mec² = 1.022 MeV 的energy。低于这个energy的光子无论数量多少都无法产生电子-正电子对。这个阈值决定了伽马射线在物质中的吸收。`,
    deepMeaning: `电子mass是标准模型的自由参数——它不是理论预测的，而必须通过测量得到。它由Higgs机制产生：电子与Higgs场发生相互作用，该相互作用的强度（Yukawa耦合，ye ≈ 2.94 × 10⁻⁶）决定了mass。与顶夸克（yt ≈ 1）相比，电子极小的Yukawa耦合是粒子物理中尚未解决的"等级制度"谜题之一。电子表现为真正的基本点粒子。`,
    whyItMatters: `主导所有原子和化学行为。通过 a₀ = ħ²/(mee²k) 决定原子大小、电子束缚能、X射线的energy以及贝塔辐射的穿透深度。`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: '电子 g 因子',
    value: '−2.002319304',
    unit: '无量纲',
    exact: '−2.00231930436256',
    category: '粒子',
    description: '整个科学史上验证最精确的理论预言。',
    discoveredBy: 'Kusch & Foley (1948) · QED calculation: Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g因子是电子实际magnetic moment与它作为简单Dirac粒子时的magnetic moment之比（后者精确等于2）。反常magnetic moment为 ae = (ge − 2)/2 = 0.001 159 65。`,
    simpleExample: `ae 的理论预言来自对最多10圈的Feynman图的求和（仅第四阶就涉及12,672个图）。结果与实验吻合至12位小数——达到万亿分之一的精度。`,
    deepMeaning: `电子的反常magnetic moment是整个科学史上检验最精确的预言。量子电动力学（QED）将对g = 2的偏差计算为精细结构常数α的幂级数：ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... 任何对QED预言的偏差都将意味着超越标准模型的新物理。这一计算的成功是理论物理的最大胜利。`,
    whyItMatters: `理论物理最伟大的胜利。以超过任何其他测量的严格程度检验QED。提供了精细结构常数α最精确的测定值。`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: '质子 mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: '粒子',
    description: '质子的静止mass——比电子重1836倍。',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `以energy单位表示：mpc² = 938.272 MeV。质子比电子重1836.15倍。这一mass比是原子物理中最重要的数字之一。`,
    simpleExample: `质子的大mass意味着它在热能量级下的de Broglie wavelength比电子小约43倍——使质子远不像电子那样表现出量子波动性。这就是Born-Oppenheimer近似成立的原因：原子核表现为经典粒子。`,
    deepMeaning: `与电子不同，质子不是基本粒子——它是由两个上夸克和一个下夸克组成的复合粒子，通过胶子媒介的强力束缚在一起。值得注意的是，夸克的mass仅占质子mass的约1%。其余99%来自夸克的kinetic energy以及存储在胶子场中的energy——这是 E = mc² 的深刻体现。Mass 本质上是 energy。质子具有有限的charge半径，约为0.8409 fm。`,
    whyItMatters: `质子定义了原子序数，并构成了几乎所有的原子mass。你身体的几乎所有mass实际上是质子和中子内部量子色动力学（QCD）场的energy。若质子mass显著不同，生命的形态将从根本上改变。`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: '质子 g 因子',
    value: '5.586',
    unit: '无量纲',
    exact: '5.5856946893',
    category: '粒子',
    description: '巨大的反常magnetic moment——证明质子是复合粒子。',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `对于简单的Dirac质子，gp 应等于2。而实际上 gp ≈ 5.586——几乎是预期值的三倍。这个巨大的反常magnetic moment是最早指向质子具有复合结构的实验发现之一。`,
    simpleExample: `如果质子是一个简单的、无结构的点粒子，其磁性强度应为2。它实际上是5.586这一事实，是内部有带charge粒子（夸克）运动的直接数值证明。`,
    deepMeaning: `Otto Stern 于1933年测得 gp ≈ 5.6，那时质子还被认为是基本的Dirac粒子。这一结果震惊了物理学界。巨大的反常magnetic moment——以及中子的非零magnetic moment——是夸克模型的关键证据。这些数值现在可以通过QCD计算部分地得到理解，但从QCD出发的完全精确第一性原理计算仍是一项重大挑战。`,
    whyItMatters: `历史上导致夸克模型诞生的关键发现。对于计算原子核中的磁共振（NMR/MRI）至关重要。是对强子结构理论的严格检验。`
  },

  // ── 第六部分：中子常数 ───────────────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: '中子 mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: '核物理',
    description: '略重于质子——这一mass差使贝塔衰变成为可能。',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `中子比质子略重——重1.293 MeV/c²。以energy单位：mnc² = 939.565 MeV。这一微小但至关重要的mass差意味着自由中子是不稳定的——它通过贝塔衰变而衰变。`,
    simpleExample: `自由中子的寿命约为10分钟（半衰期613.9秒）。释放的energy就是1.293 MeV的mass差。在原子核内部，中子被核束缚能稳定而不发生衰变。`,
    deepMeaning: `如果中子比质子轻超过电子mass，自由质子将衰变为中子和正电子——氢原子将变得不稳定，从根本上改变所有化学。mass差决定了大爆炸核合成期间锁定的中子质子比（n/p ≈ 1/7），从而确立了氢（75%）和氦（25%）的宇宙丰度。`,
    whyItMatters: `主导核稳定性、贝塔衰变以及元素的宇宙丰度。中子mass差在宇宙中氢的存在——也因此对生命的存在——具有根本性意义。`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: '中子 magnetic moment',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: '核物理',
    description: '不带电却具有负magnetic moment——内部夸克的证明。',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `中子具有负magnetic moment（−1.913核磁子），尽管其净电荷绝对为零。`,
    simpleExample: `一个无结构的中性粒子应具有零magnetic moment。中子能对磁场作出响应，这是其内含带charge亚粒子的确凿证据，尽管这些亚粒子的效应并未完全相消。`,
    deepMeaning: `Magnetic moment 需要charge分布或spin分布。中子的负magnetic moment源于其内部夸克结构：两个下夸克（各带−e/3的charge）和一个上夸克（带+2e/3的charge）处于持续的量子运动之中。旋转带charge夸克的空间分布产生了净负magnetic moment。解释来自夸克的亚结构：中子含有一个上夸克和两个下夸克。`,
    whyItMatters: `核物理中最令人震惊的结果之一。目前对中子电偶极矩（EDM）的精确限制被用于检验CP对称性，并解释宇宙中物质-反物质不对称的原因。`
  },

  // ── 第七部分：μ子与τ子常数 ────────────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: '粒子',
    description: '电子的更重副本——"谁点了这道菜？"',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `Muon 比电子重206.768倍。它携带相同的charge，并在所有非引力相互作用中表现得一模一样——仿佛大自然制造了第二个更重的电子副本。`,
    simpleExample: `宇宙射线Muon在15公里高空生成，以约0.99c的speed运动。按经典计算，它们应在到达地面之前衰变（寿命2.2 μs → 传播距离仅650米）。然而由于相对论性时间膨胀（γ ≈ 7），其寿命延长至约15 μs，大量Muon得以抵达地面。`,
    deepMeaning: `Muon 不适合任何简单的理论框架，其存在纯粹是大自然的事实。它通过 μ⁻ → e⁻ + ν̄e + νμ 发生衰变。Muon 原子（μ⁻取代e⁻）的轨道半径约小207倍，使其对核结构极为敏感。Muon 反常magnetic moment（g-2）目前与理论值存在约4σ的偏差。`,
    whyItMatters: `Muon 反常magnetic moment是超越标准模型物理的最重要实验线索。Muon 还被用于对火山内部成像以及探测走私核材料。`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon 反常 magnetic moment',
    value: '0.0011659',
    unit: '无量纲',
    exact: '0.00116592059',
    category: '粒子',
    description: '超越标准模型物理的最重要实验线索。',
    discoveredBy: 'Fermilab Muon g-2 experiment',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `如同电子一样，Muon 也具有反常magnetic moment。ae = (ge − 2)/2 = 0.001 165 920 59。它度量对Dirac预言 g = 2 的偏差。`,
    simpleExample: `与电子不同，Muon 对虚重粒子的贡献更为敏感，因为量子修正以 (mμ/M)² 的形式缩放，其中M是虚粒子的mass。`,
    deepMeaning: `理论值与实验值之间约有4.2个标准差的差异——令人心动地接近5σ决定性发现的阈值。若得到确认，这将是超越标准模型物理的首个明确证据——可能涉及超对称粒子或额外维度。分辨率的关键在于强子真空极化的格点QCD计算精度。`,
    whyItMatters: `粒子物理领域最热门的话题之一。若得到确认，将需要从根本上重写我们对亚原子世界的理解。`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau 轻子 mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: '粒子',
    description: '最重的带charge轻子——比电子重3477倍。',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `Tau 轻子是第三代、也是最重的带charge轻子——比电子重3477倍，比Muon重16.8倍。`,
    simpleExample: `Tau 因质量极大（1.78 GeV），可以衰变为强子——π介子和K介子——这是Muon所不能做到的。其极短的寿命（约2.9 × 10⁻¹³ 秒）意味着它衰变前仅传播约87微米，因此需要微米级的精度才能观测到。`,
    deepMeaning: `Tau 是第三代带charge轻子。为何恰好存在三代轻子，以及它们为何具有如此悬殊的mass，是标准模型最深刻的谜题之一。这种mass等级（0.511 MeV → 105.7 MeV → 1776.9 MeV）没有理论解释。Tau 中微子直到2000年才被直接探测到。`,
    whyItMatters: `轻子存在三代这一事实是大自然的深刻谜题。Tau 及其中微子对确立标准模型为自洽理论至关重要。`
  },

  // ── 第八部分：物理化学常数 ────────────────────────────────────────────────

  {
    symbol: 'R',
    name: '摩尔气体常数',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: '热力学',
    description: 'R = NA × k——热力学与化学的主力常数。',
    discoveredBy: '各方（19世纪）',
    formula: 'PV = nRT',
    whatItSays: `R 是Boltzmann 常数在摩尔层面上的缩放。理想气体定律 PV = nRT 将Boyle 定律、Charles 定律和Avogadro 定律整合为一个方程。`,
    simpleExample: `气体中的声速为：v = √(γRT/M)。对于空气（M = 0.029 kg/mol，γ = 1.4），在20°C时 v ≈ 343 m/s。这表明声速从根本上由 R 和温度决定。`,
    deepMeaning: `理想气体的摩尔热容是R的简单倍数：单原子气体Cv = (3/2)R，双原子气体Cv = (5/2)R。在统计力学中，理想气体的熵（Sackur-Tetrode方程）包含 R。它出现在混合熵、Clausius-Clapeyron方程、渗透pressure的van't Hoff方程以及电极电位的Nernst方程中。`,
    whyItMatters: `热力学的普适常数。每一个气体定律、每一个热力学计算、每一个大气模型以及每一个化学反应热计算都会用到 R。`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann 常数',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: '热力学',
    description: '黑体辐射的功率——P/A = σT⁴。',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `完美黑体每单位面积辐射的电磁功率为 P/A = σT⁴。σ 由更基本的常数导出：σ = 2π⁵k⁴/(15h³c²)。`,
    simpleExample: `太阳表面temperature约为5778 K，其功率输出为 σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W。你的身体（T ≈ 310 K）辐射 σ × (310)⁴ × (1.7 m²) ≈ 520 W——大约一半由代谢热量补充。`,
    deepMeaning: `T⁴的依赖关系来自将Planck黑体谱对所有frequency积分。这意味着temperature加倍，辐射功率增加 2⁴ = 16 倍。宇宙微波背景辐射（CMB）——大爆炸的遗迹辐射——是T = 2.725 K时的完美黑体。地球的有效temperature由太阳辐射与σT⁴发射之间的平衡决定。`,
    whyItMatters: `主导恒星光度、地球能量平衡与气候、热像仪、光学高温测量以及宇宙的temperature结构。`
  },

  {
    symbol: 'b',
    name: 'Wien 位移常数',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: '热力学',
    description: '将黑体辐射峰值wavelength与temperature联系起来。',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien 位移定律将黑体辐射的峰值wavelength与temperature联系起来：λ_max × T = b。物体越热，其峰值wavelength越短（越蓝）。`,
    simpleExample: `太阳（T = 5778 K）的峰值wavelength约为502 nm——绿光。人眼恰好在这一波段最为敏感，这绝非巧合。人体（T = 310 K）主要在 λ_max ≈ 9.4 μm 处辐射——中红外，这就是热像仪能探测人体的原因。`,
    deepMeaning: `峰值frequency版本为 f_max = b' × T，其中 b' = 5.879 × 10¹⁰ Hz/K。注意：峰值frequency并不简单对应于 c/λ_max，因为wavelength分布和frequency分布形状不同。历史上，辐射常数之比被用于独立测定 h 和 k。`,
    whyItMatters: `对热成像、恒星temperature测量、气候科学以及黑体辐射物理至关重要。`
  },

  // ── 第九部分：引力与电弱常数 ─────────────────────────────────────────────

  {
    symbol: 'G',
    name: '万有引力常数',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: '普适',
    description: '最弱的力——已知基本常数中精度最低的。',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton 定律：F = Gm₁m₂/r²。在广义相对论中，G出现在Einstein场方程中，支配着物质如何弯曲时空。`,
    simpleExample: `两个相距1米的1千克mass之间的引力：F = 6.674 × 10⁻¹¹ N——大约相当于一个细菌的重量。两个质子之间的电磁force是这个值的10³⁶倍。这就是为什么引力在原子尺度上无关紧要。`,
    deepMeaning: `G 是已知基本常数中精度最低的——仅知道5位有效数字。这是因为引力是最弱的力：在实验室中测量它意味着要对抗地震噪声和残余力。系数 8πG/c⁴ 量化了单位energy引起的时空曲率。Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m 是量子引力预期发生的尺度——比质子小10²⁰倍。`,
    whyItMatters: `控制所有引力现象——从抛射的球体到黑洞以及宇宙的大尺度结构。引力量子理论的缺失是物理学中最深刻的未解难题。`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi 耦合常数',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: '粒子',
    description: '弱核力的耦合强度——主导贝塔衰变。',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF 是Fermi 四费米子贝塔衰变有效理论中弱核力的耦合常数：n → p + e⁻ + ν̄e。弱相互作用截面正比于 GF²。`,
    simpleExample: `弱相互作用是如此微弱，以至于一个中微子穿过一光年厚的铅只有50%的概率被阻停。然而它对太阳的energy至关重要——pp链以弱相互作用开始。`,
    deepMeaning: `与e²不同，GF的量纲为energy⁻²，使Fermi理论不可重整化。解决之道是电弱统一（1979年Nobel奖）：弱力由具有质量的W和Z玻色子（约80–91 GeV）媒介。在低energy下，W玻色子的交换看起来像一个点相互作用。W玻色子的大mass抑制了弱相互作用，使贝塔衰变变得缓慢，尽管底层耦合与电磁力相当。`,
    whyItMatters: `主导所有贝塔衰变、中微子相互作用以及电弱统一。弱力驱动太阳的pp链，并负责恒星中重元素的核合成。`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: '弱混合角',
    value: '0.2229',
    unit: '无量纲',
    exact: '0.22290',
    category: '粒子',
    description: '量化电磁force与弱force之间的混合程度。',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `弱混合角θW（Weinberg角）参数化了电弱统一中光子与Z玻色子之间的混合：e = g sin θW = g' cos θW。`,
    simpleExample: `sin²θW ≈ 0.231 的值已在粒子对撞机（LHC）和原子宇称破坏实验中以超高精度测量。`,
    deepMeaning: `在电弱统一中，光子和Z玻色子是两个基本规范玻色子（W⁰和B）的混合态。sin²θW随energy的跑动由标准模型精确预测，并通过测量证实了电弱辐射修正——对该理论的严格检验。`,
    whyItMatters: `标准模型的基本参数，连接电磁force与弱核force的性质。`
  },

  // ── 第十一部分：附加原子与核常数 ─────────────────────────────────────────

  {
    symbol: 'κ',
    name: '环量量子',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: '原子',
    description: '电子环量的基本单位——h/2me。',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `量子流体（如超流体氦或超导体）的环量以 h/m 为单位量子化。对于超导体，相关粒子是mass为 2me 的Cooper对。`,
    simpleExample: `在超流体氦-4中，涡旋以 h/m_He 的整数倍携带环量。旋转的超流体氦会发展出这些量子化涡旋的晶格——类似于II型超导体中的Abrikosov 涡旋晶格。`,
    deepMeaning: `环量量子化是量子力学波函数单值性的直接结果。若超流体旋转，宏观波函数的相位必须在绕任意闭合回路一周后回到相同值，这迫使环量量子化：Γ = n × h/m。`,
    whyItMatters: `解释超流体和超导体的行为。环量量子也出现在Aharonov-Bohm效应中，将量子相位与磁通量联系起来。`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson 散射截面',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: '原子',
    description: '自由电子对入射光子呈现的有效面积。',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `当低energy光子（光子energy ≪ mec²）被自由电子散射时，总散射截面为 σT = (8π/3) × re²，其中 re 是经典电子半径。`,
    simpleExample: `可以将电子看作对入射光子呈现 σT 的"靶面积"。若向一箱电子射入光子，散射前的平均自由程为 λ = 1/(nσT)。`,
    deepMeaning: `Thomson 截面是更一般的Compton散射公式在弹性散射极限下的形式。当光子energy Eγ ≪ 0.511 MeV时，电子的反冲可忽略，散射是纯经典的。在恒星内部，辐射pressure通过光子-电子Thomson散射传递。Eddington 光度——恒星辐射pressure克服引力前的最大光度——依赖于σT。`,
    whyItMatters: `Thomson散射解释了天空为何是蓝色的（低frequency下），以及为何日食期间太阳日冕可见。宇宙微波背景辐射（CMB）正是在宇宙冷却到足以使电子与质子复合时产生的，因为在此之前，宇宙因Thomson散射而对辐射不透明。`
  },

  {
    symbol: '−e/m<sub>e</sub>',
    name: '电子 charge-to-mass 比',
    value: '−1.759 × 10<sup>11</sup>',
    unit: 'C/kg',
    exact: '−1.75882000838 × 10¹¹ C/kg',
    category: '原子',
    description: '决定电子对电磁force响应的强烈程度。',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: 'ω<sub>c</sub> = eB / m<sub>e</sub>',
    whatItSays: `这是电子charge与其mass之比。它决定了电子对电磁force的响应强度。`,
    simpleExample: `在CRT（阴极射线管）电视中，电子束被电场和磁场偏转的程度由 e/me 决定。e/me 的较大值意味着电子比离子更容易被偏转。`,
    deepMeaning: `Thomson 著名的阴极射线实验证明，阴极射线是带负charge的粒子流，其比值约为氢离子的1800倍。回旋frequency ωc = eB/me 与 e/me 直接成正比。这个比值还出现在等离子体frequency ωp² = ne²/(meε₀)中，该frequency决定了无线电波如何在电离层中反射。`,
    whyItMatters: `对质谱仪、粒子加速器和真空电子器件至关重要。主导聚变等离子体中的电子回旋共振加热。`
  },

  {
    symbol: 'M(e)',
    name: '电子摩尔 mass',
    value: '5.486 × 10<sup>−7</sup>',
    unit: 'kg/mol',
    exact: '5.4857990888 × 10⁻⁷ kg/mol',
    category: '原子',
    description: '一摩尔电子的mass——me × NA。',
    discoveredBy: '导出量',
    formula: 'M(e) = m<sub>e</sub> × N<sub>A</sub>',
    whatItSays: `一摩尔电子的mass极小——每摩尔约0.55毫克。`,
    simpleExample: `在电化学中，计算电解过程中电极处的mass变化时，电子的摩尔mass与离子mass相比完全可忽略不计。`,
    deepMeaning: `在高精度原子mass测量中，束缚能和电子云的mass必须加以考虑。原子的原子mass为：M(atom) = M(nucleus) + Z × M(e) − (电子束缚能)/c²。Penning 阱质谱仪要达到10位有效数字的精度，必须进行这一修正。`,
    whyItMatters: `对物理学中最精确的mass比较以及检验SI单位定义的一致性至关重要。`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: '电子-质子 mass 比',
    value: '5.446 × 10<sup>−4</sup>',
    unit: '无量纲',
    exact: '5.44617021487 × 10⁻⁴',
    category: '原子',
    description: '电子比质子轻1836.15倍。',
    discoveredBy: '导出量',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `电子mass与质子mass之比，约为1/1836。`,
    simpleExample: `由于 me/mp ≪ 1，分子中的电子运动远比原子核快。这使我们能够在固定核位置下求解电子Schrödinger方程——即Born-Oppenheimer近似。`,
    deepMeaning: `这一比值将化学energy尺度（~eV）与核energy尺度（~MeV）分离开来。该比值在恒星物理中也至关重要：Chandrasekhar极限——白矮星的最大mass——直接依赖于 (mp/me)。通过遥远类星体的分子氢吸收光谱，可以检验该比值是否随宇宙时间而变化。`,
    whyItMatters: `自然界中最重要的无量纲数之一。它主导原子结构、energy尺度的等级制度以及恒星的稳定性。`
  },

  {
    symbol: 'e/m<sub>p</sub>',
    name: '质子 charge-to-mass 比',
    value: '9.579 × 10<sup>7</sup>',
    unit: 'C/kg',
    exact: '9.5788331442 × 10⁷ C/kg',
    category: '原子',
    description: '基本电荷与质子mass之比——比电子的小1836倍。',
    discoveredBy: '导出量',
    formula: 'ω<sub>cp</sub> = eB / m<sub>p</sub>',
    whatItSays: `基本电荷与质子mass之比。它决定了质子对磁场的响应方式。`,
    simpleExample: `质子在磁场中的回旋frequency比电子低1836倍。这就是MRI使用射频波（MHz量级）而非微波frequency的原因。`,
    deepMeaning: `在质谱仪中，离子按其charge-to-mass比分离。质子的 e/mp 是一个基本校准标准。回旋共振质谱法（Penning阱）利用这一比值以极高精度测量原子mass。在加速器物理中，质子束的磁刚度决定了其在磁场中的弯曲半径。`,
    whyItMatters: `对医学成像（MRI）、质谱分析以及LHC等高能粒子加速器的设计至关重要。`
  },

  {
    symbol: 'M(p)',
    name: '质子摩尔 mass',
    value: '1.007 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00727646662 × 10⁻³ kg/mol',
    category: '原子',
    description: '一摩尔质子的mass。',
    discoveredBy: '导出量',
    formula: 'M(p) = m<sub>p</sub> × N<sub>A</sub>',
    whatItSays: `一摩尔质子的mass约为1.007 g/mol。`,
    simpleExample: `它略小于1 g/mol，因为原子质量单位定义为碳-12质量的1/12，其中包含了束缚energy和电子mass的贡献。`,
    deepMeaning: `在核物理中，核反应的Q值——释放或吸收的energy——由摩尔mass差通过 Q = Δm × c² 计算得出。质子摩尔mass是这些计算中的基本参考量。`,
    whyItMatters: `核化学和天体物理中化学计量计算的基础。`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>e</sub>',
    name: '中子-电子 mass 比',
    value: '1838.68',
    unit: '无量纲',
    exact: '1838.68366214',
    category: '核物理',
    description: '中子比电子重1838.68倍。',
    discoveredBy: '导出量',
    formula: '(m<sub>n</sub> − m<sub>p</sub>)/m<sub>e</sub> = 2.531',
    whatItSays: `中子mass与电子mass之比。它略高于质子-电子mass比。`,
    simpleExample: `中子比质子重2.531个电子mass。这一mass差对应1.293 MeV——中子贝塔衰变中释放的energy。`,
    deepMeaning: `这一比值高于质子-电子mass比这一事实，使得自由中子不稳定。若中子比质子轻超过一个电子mass，氢将不会作为稳定元素存在。这一比值已通过Penning阱以极高精度测量。`,
    whyItMatters: `主导宇宙基本构件的稳定性。`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: '中子-质子 mass 比',
    value: '1.00138',
    unit: '无量纲',
    exact: '1.00137841931',
    category: '核物理',
    description: '中子比质子重0.138%。',
    discoveredBy: '导出量',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `中子比质子重0.138%。`,
    simpleExample: `这一微小的mass差（1.293 MeV/c²）决定了大爆炸期间约25%的重子物质成为氦-4，其余保持为氢的格局。`,
    deepMeaning: `在早期宇宙中，中子与质子的平衡比遵循Boltzmann因子。随着宇宙冷却，弱相互作用冻结，n/p比在约1/7时被锁定。若mass差略有不同，恒星演化和化学将发生根本改变。`,
    whyItMatters: `观测到的宇宙氦丰度约25%是大爆炸模型最有力的证实之一，这一切都归功于这个常数。`
  },

  {
    symbol: 'g<sub>n</sub>',
    name: '中子 g 因子',
    value: '−3.826',
    unit: '无量纲',
    exact: '−3.82608545',
    category: '核物理',
    description: '揭示不带电中子内部夸克结构的直接证据。',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ = g × μ<sub>N</sub> / 2',
    whatItSays: `中子的g因子为−3.826。对于一个净charge为零的无结构Dirac粒子，这个值应该精确等于0。`,
    simpleExample: `中性中子具有非零magnetic moment，是核物理中最令人震惊的结果之一，证明了中性粒子可以具有内部组成。`,
    deepMeaning: `中子含有一个上夸克和两个下夸克。它们的magnetic moment和轨道运动产生了净负magnetic moment。非相对论夸克模型预测 g ≈ −3.67；差异源于相对论修正和胶子效应。精确测量可对QCD中强子结构的计算进行检验。`,
    whyItMatters: `标准模型和夸克结构的严格检验。也用于对中子电偶极矩设定限制。`
  },

  {
    symbol: 'M(n)',
    name: '中子摩尔 mass',
    value: '1.00866 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00866491560 × 10⁻³ kg/mol',
    category: '核物理',
    description: '一摩尔中子的mass。',
    discoveredBy: '导出量',
    formula: 'M(n) ≈ 1.00866 g/mol',
    whatItSays: `一摩尔中子重约1.00866克。`,
    simpleExample: `尽管自由中子在10分钟内衰变，中子摩尔mass对计算"结合能曲线"至关重要，该曲线决定核电站能产生多少energy。`,
    deepMeaning: `原子核的结合能通过原子mass计算：B(Z,N) = [Z × M(H) + N × M(n) − M(Z,N)] × c²。中子mass大于质子mass这一事实影响着每一个核结合能的计算。`,
    whyItMatters: `核工程和核同位素研究的基础。`
  },

  {
    symbol: 'λ<sub>Cn</sub>',
    name: '中子 Compton wavelength',
    value: '1.320 × 10<sup>−15</sup>',
    unit: 'm',
    exact: '1.31959090581 × 10⁻¹⁵ m',
    category: '核物理',
    description: '核物理的自然length尺度——h/mnc。',
    discoveredBy: '导出量',
    formula: 'λ<sub>Cn</sub> = h / (m<sub>n</sub>c)',
    whatItSays: `energy等于中子静止mass energy的光子的wavelength，约为1.32飞米。`,
    simpleExample: `这一wavelength与中子自身大小（~0.8 fm）和核力的力程（~1.4 fm）相当。`,
    deepMeaning: `核物理的特征distance尺度由核子和π介子的Compton wavelength确定。在这一尺度以下，真空极化等量子场论效应变得重要。在用于研究蛋白质结构的中子散射实验中，中子wavelength被调节至与原子间距匹配。`,
    whyItMatters: `确立了中子不能再被视为简单非相对论粒子的尺度下限。`
  },

  {
    symbol: 'λ<sub>Cμ</sub>',
    name: 'Muon Compton wavelength',
    value: '1.173 × 10<sup>−14</sup>',
    unit: 'm',
    exact: '1.173444110 × 10⁻¹⁴ m',
    category: '粒子',
    description: 'energy等于Muon静止mass的光子的wavelength。',
    discoveredBy: '导出量',
    formula: 'λ<sub>Cμ</sub> = h / (m<sub>μ</sub>c)',
    whatItSays: `Muon Compton wavelength约为11.7 fm——比电子的小206.77倍（即mass比）。`,
    simpleExample: `在Muon原子中，Muon的轨道半径比电子小得多，因为Bohr半径与mass成反比。`,
    deepMeaning: `Muon氢原子中，Muon的轨道半径约为256 fm——与质子足够近，以至于质子的有限大小对能级有显著影响。这就是为什么Muon氢光谱学能提供质子charge半径的最精确测量。`,
    whyItMatters: `引发了"质子半径谜题"，是现代精密原子物理的重要研究焦点。`
  },

  {
    symbol: 'g<sub>μ</sub>',
    name: 'Muon g 因子',
    value: '−2.00233',
    unit: '无量纲',
    exact: '−2.0023318418',
    category: '粒子',
    description: '探测未知重粒子存在的关键探针。',
    discoveredBy: '实验值 / QED计算',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2) / 2',
    whatItSays: `如同电子一样，Muon也具有反常magnetic moment：ae = 0.001 165 920 59。`,
    simpleExample: `Fermilab 的g-2实验测量这一值，以检验来自超对称或其他理论中"虚"重粒子是否影响Muon的磁自旋。`,
    deepMeaning: `当前实验值与标准模型预测之间存在约4.2个标准差的差异。分辨率取决于格点QCD对强子真空极化计算的精度。`,
    whyItMatters: `目前已知的标准模型与实验之间最重要的差异之一。`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: '核物理',
    description: '重氢的原子核——最简单的核束缚态。',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `Deuteron 是氘（重氢）的原子核，由一个质子和一个中子组成。其结合energy为2.224 MeV。`,
    simpleExample: `这一结合energy极小（相比之下，氦-4的结合energy为28.3 MeV）。这种脆弱性在大爆炸中造成了"氘瓶颈"，延迟了重元素的形成。`,
    deepMeaning: `Deuteron 是最简单的核束缚态——类比于氢原子。其非零四极矩证明了核力具有源于π介子交换的张量分量。太阳中聚变的第一步（p + p → d + e⁺ + νe）极为缓慢；太阳的长寿命正是由于这一瓶颈。`,
    whyItMatters: `核力理论的基本检验平台。氘被用作核反应堆中的中子慢化剂以及药学研究中的同位素标记物。`
  },

  {
    symbol: 'μ<sub>d</sub>',
    name: 'Deuteron magnetic moment',
    value: '4.331 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '4.330735094 × 10⁻²⁷ J/T',
    category: '核物理',
    description: '最简单原子核的magnetic moment。',
    discoveredBy: '核物理 / NMR研究',
    formula: 'μ<sub>d</sub> = 0.857 μ<sub>N</sub>',
    whatItSays: `Deuteron 的magnetic moment为0.857核磁子。`,
    simpleExample: `若自旋简单对齐，之和应为 μp + μn = 0.880 μN。实际值为0.857 μN。这一差异恰好由波函数中D波混入的轨道magnetic moment精确解释。`,
    deepMeaning: `计算与测量的Deuteron magnetic moment之间的吻合验证了核力模型。Deuteron NMR被用于研究分子动力学。`,
    whyItMatters: `对核结构模型和π介子交换理论的精美验证。`
  },

  {
    symbol: 'g<sub>d</sub>',
    name: 'Deuteron g 因子',
    value: '0.8574',
    unit: '无量纲',
    exact: '0.8574382335',
    category: '核物理',
    description: '将Deuteron magnetic moment与核磁子联系起来。',
    discoveredBy: '导出量',
    formula: 'g<sub>n</sub> ≈ g<sub>d</sub> − g<sub>p</sub> + corrections',
    whatItSays: `与电子（g ≈ −2）或质子（g ≈ 5.586）不同，Deuteron 的g因子小于1。`,
    simpleExample: `这一数值反映了原子核内质子和中子magnetic moment之间的部分抵消。`,
    deepMeaning: `精密测量允许通过包含介子交换流和相对论效应的修正项提取中子magnetic moment。`,
    whyItMatters: `用于在0.1%精度水平上验证复杂的核力模型。`
  },

  {
    symbol: 'm<sub>h</sub>',
    name: 'Helion mass',
    value: '5.006 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '5.006412778 × 10⁻²⁷ kg (2808.391 MeV/c²)',
    category: '核物理',
    description: '氦-3的原子核——两个质子和一个中子。',
    discoveredBy: '核物理实验数据',
    formula: 'B(He-3) = (2m<sub>p</sub> + m<sub>n</sub> − m<sub>h</sub>)c<sup>2</sup>',
    whatItSays: `Helion 是氦-3的原子核。其结合energy为7.718 MeV。`,
    simpleExample: `超流体氦-3是研究非常规超导和拓扑量子态的模型系统。`,
    deepMeaning: `He-3是Triton的镜像核。两者之间的微小mass差检验了核力的电荷对称性。Helion 的g因子为−4.255 μN——反映了单个中子的主导贡献。`,
    whyItMatters: `用于高截面中子探测器以及超极化肺部MRI成像。`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha粒子 mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: '核物理',
    description: '氦-4原子核——具有28.3 MeV极高结合energy，极为稳定。',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `Alpha粒子是氦-4的原子核。其每核子结合energy为7.074 MeV——接近结合能曲线的峰值。`,
    simpleExample: `Alpha衰变的半衰期跨越20个数量级（从0.3微秒到140亿年）。两者均由Gamow的量子隧穿理论解释。`,
    deepMeaning: `Alpha粒子的特殊稳定性解释了为何放射性衰变优先发射它。它具有零spin和零magnetic moment——一个完全闭壳层的原子核。三重Alpha过程（3α → ¹²C）需要碳-12中7.65 MeV处的共振（Hoyle态）。若没有这一共振，宇宙中将不存在碳。`,
    whyItMatters: `大多数重核衰变的产物。三重Alpha过程是宇宙中所有碳的来源。被用于癌症靶向Alpha放射治疗。`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: '原子 mass 常数',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: '热力学',
    description: '碳-12质量的1/12——原子mass的自然单位。',
    discoveredBy: '国际标准 (1961)',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `原子mass单位（u，或道尔顿，Da）定义为一个碳-12原子质量的1/12。`,
    simpleExample: `碳-12 = 精确12 u；氢 = 1.0078 u；一个50 kDa的蛋白质的mass为 50,000 × 1.661 × 10⁻²⁷ kg。`,
    deepMeaning: `换算关系 1 u = 931.494 MeV/c² 是核物理中最有用的换算之一。毫原子mass单位的核mass差释放MeV量级的energy。选择碳-12作为标准是1961年物理学界和化学界之间的折衷方案。`,
    whyItMatters: `核物理、质谱分析以及所有以道尔顿表示蛋白质质量的生物化学的基础。`
  },

  {
    symbol: 'M<sub>u</sub>',
    name: '摩尔 mass 常数',
    value: '1.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '1.00000000105 × 10⁻³ kg/mol',
    category: '热力学',
    description: '将原子mass单位与摩尔mass联系起来。',
    discoveredBy: 'SI重新定义 (2019)',
    formula: 'M<sub>u</sub> = N<sub>A</sub> × m<sub>u</sub>',
    whatItSays: `Mu 将原子mass单位与摩尔mass联系起来：Mu = NA × mu ≈ 1 g/mol。`,
    simpleExample: `由于 Mu ≈ 1 g/mol，物质的摩尔mass（克/摩尔）在数值上等于其相对原子质量（例如水约为18.015 g/mol）。`,
    deepMeaning: `在历史上精确等于1 g/mol。2019年之后，NA和mu均被独立定义，因此Mu不再精确等于1 g/mol——偏差约为10⁻⁹。这对实际应用可忽略不计，但提醒我们新SI制在本质上有所不同。`,
    whyItMatters: `化学中化学计量计算的基础。每一个摩尔到克的换算都依赖于此。`
  },

  {
    symbol: 'N<sub>A</sub>h',
    name: '摩尔 Planck 常数',
    value: '3.990 × 10<sup>−10</sup>',
    unit: 'J Hz⁻¹ mol⁻¹',
    exact: '3.990312712 × 10⁻¹⁰ J Hz⁻¹ mol⁻¹',
    category: '热力学',
    description: 'Planck常数缩放至摩尔层面——NA × h。',
    discoveredBy: '导出量',
    formula: 'N<sub>A</sub>h = N<sub>A</sub> × h',
    whatItSays: `每摩尔光子每单位frequency的energy。`,
    simpleExample: `在光化学中，一"Einstein"（一摩尔光子）的energy为NAhf。`,
    deepMeaning: `出现在理想气体绝对熵的Sackur-Tetrode方程中。它将量子力学配分函数与摩尔尺度上的宏观热力学量联系起来。`,
    whyItMatters: `光化学和统计热力学的基础。`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: '理想气体摩尔体积（标准状况）',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: '热力学',
    description: '一摩尔理想气体在标准状况下占据的体积。',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `在0°C和101,325 Pa下，任何理想气体的一摩尔占据22.413...升。`,
    simpleExample: `在标准状况下，一升氢气和一升氧气包含完全相同数量的分子（2.688 × 10²²个）。`,
    deepMeaning: `由理想气体定律得出：V = nRT/P。这一"摩尔体积"允许在气体量和体积之间快速换算。所有理想气体在标准状况下具有相同摩尔体积，是Avogadro 的革命性洞见。`,
    whyItMatters: `气体化学计量中实用性最强的数字之一。`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt 常数',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: '热力学',
    description: '标准状况下每立方米理想气体中的分子数目。',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `海平面处每立方米的空气分子数约为 2.687 × 10²⁵。`,
    simpleExample: `在标准状况下，空气分子的平均自由程约为66纳米；碰撞frequency约为每秒10¹⁰次。`,
    deepMeaning: `Loschmidt 于1865年利用气体粘度和分子直径估算了这一数值。这是对宏观体积中分子数量的第一次严肃估计，也是原子具有确定大小的第一个直接证据。Rayleigh散射（天空为何是蓝色）正比于n₀。`,
    whyItMatters: `大气物理和原子理论历史的基础。`
  },

  {
    symbol: 'V<sub>m,Si</sub>',
    name: '硅的摩尔体积',
    value: '1.206 × 10<sup>−5</sup>',
    unit: 'm³/mol',
    exact: '1.205883199 × 10⁻⁵ m³/mol',
    category: '热力学',
    description: '一摩尔硅原子在晶格中占据的体积。',
    discoveredBy: 'Avogadro Project',
    formula: 'N<sub>A</sub> = n × M(Si) / (ρ × a<sup>3</sup>)',
    whatItSays: `具有金刚石立方结构的固态硅，一摩尔所占据的体积。`,
    simpleExample: `通过X射线衍射测量晶格参数"a"，再结合宏观密度"ρ"，即可将NA测定至十亿分之二的精度。`,
    deepMeaning: `硅是X射线晶体密度法的参考材料。Avogadro Project 使用1千克极度完美的硅球来重新定义2019年的千克。它将X射线晶体学与宏观质量标准联系起来。`,
    whyItMatters: `2019年千克重新定义的核心依据。`
  },

  {
    symbol: 'M(<sup>12</sup>C)',
    name: '碳-12 摩尔 mass',
    value: '12.000 × 10<sup>−3</sup>',
    unit: 'kg/mol',
    exact: '12.0000000126 × 10⁻³ kg/mol',
    category: '热力学',
    description: '一摩尔碳-12原子的mass。',
    discoveredBy: 'SI重新定义 (2019)',
    formula: 'M(<sup>12</sup>C) ≈ 12 g/mol',
    whatItSays: `2019年以前，这精确等于12 g/mol。在新SI制中，它有了一个微小的测量不确定度。`,
    simpleExample: `偏离精确12 g/mol的量约为十亿分之十——对化学完全可忽略，但对计量学至关重要。`,
    deepMeaning: `反映了精确定义NA与历史上原子mass单位定义之间的不一致性。基本单位现在通过固定基本常数来定义。`,
    whyItMatters: `提醒我们新SI制是由常数定义的，而非实物标准器。`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: '第一辐射常数',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: '热力学',
    description: '确定黑体辐射强度的总体尺度——2πhc²。',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `出现在描述光谱辐射率的Planck黑体辐射定律中。`,
    simpleExample: `太阳的峰值wavelength约为502 nm（绿光）。太阳能电池被精确设计以匹配这一由c₁精确计算的Planck光谱。`,
    deepMeaning: `Planck辐射定律于1900年奠定了量子力学的基础。Planck的量子假设引入了指数因子，抑制了高frequency的发散（紫外灾难）。`,
    whyItMatters: `天体物理、太阳能以及宇宙学的基础。`
  },

  {
    symbol: 'c<sub>1L</sub>',
    name: '光谱辐射率第一辐射常数',
    value: '1.191 × 10<sup>−16</sup>',
    unit: 'W·m²·sr⁻¹',
    exact: '1.191042972 × 10⁻¹⁶ W·m²·sr⁻¹',
    category: '热力学',
    description: 'c₁除以π——给出单位立体角的辐射率。',
    discoveredBy: '导出量',
    formula: 'c<sub>1L</sub> = 2hc<sup>2</sup>',
    whatItSays: `给出单位立体角方向上的光谱辐射率，而非半球积分光谱辐照度。`,
    simpleExample: `对于正确计算望远镜灵敏度或相机曝光等光学系统性能至关重要。`,
    deepMeaning: `反映了半球积分发射与特定方向辐射率之间的差异。对于Lambertian发射体，两者关系涉及π这一因子。`,
    whyItMatters: `辐射测量学和卫星遥感中不可或缺。`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: '第二辐射常数',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: '热力学',
    description: '在Planck函数中连接wavelength与temperature——hc/k。',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `出现在Planck函数的指数中，确立量子与经典区间之间的分界。`,
    simpleExample: `Wien位移定律（λ_max × T = b）由c₂推导而来。热像仪能探测人体，正是因为在310 K时，人体的辐射峰值在中红外波段。`,
    deepMeaning: `从历史上看，c₁/c₂之比被用于测量Boltzmann 常数。在室温下，中红外辐射的量子修正变得重要。`,
    whyItMatters: `对气候科学、热成像和恒星物理至关重要。`
  },

  {
    symbol: 'g',
    name: '标准重力加速度',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s²（精确值）',
    category: '普适',
    description: '地球表面重力acceleration的标准值。',
    discoveredBy: '国际计量局 (1901)',
    formula: 'W = mg',
    whatItSays: `重力acceleration的约定标准值。`,
    simpleExample: `实际重力从赤道处约9.780 m/s²到两极处约9.832 m/s²不等。这一标准值由45°纬度处的测量值确定。`,
    deepMeaning: `作为mass与force之间的换算系数（千克力）而出现。重力仪将本地g值测量至9位有效数字，用于探测潮汐形变和地下水变化。等效原理（广义相对论）指出，这与平坦时空中的acceleration是无法区分的。`,
    whyItMatters: `工程学、大气pressure定义以及精密称量的基准。`
  },

  // ── 第十九部分：原子单位 ──────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: '原子单位 of Length',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: '原子',
    description: '原子单位中的Bohr半径。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `原子单位制中的length单位。所有键长均以Bohr为单位表示。`,
    simpleExample: `典型键长：H-H = 1.40 a₀，C-C = 2.92 a₀。`,
    deepMeaning: `在原子单位中，ħ = me = e = 4πε₀ = 1，这极大地简化了量子化学方程。`,
    whyItMatters: `计算化学的标准length单位。`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: '原子单位 of Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: '原子',
    description: '原子单位中的电子mass。',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `原子单位制中的mass单位。`,
    simpleExample: `在量子化学中，所有mass均以me的倍数表示。`,
    deepMeaning: `通过将基本常数设为1来简化Schrödinger方程的单位体系的一部分。`,
    whyItMatters: `所有电子结构计算的基本mass单位。`
  },

  {
    symbol: 't<sub>au</sub>',
    name: '原子单位 of Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: '原子',
    description: '原子中电子运动的自然时间尺度。',
    discoveredBy: '导出量',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `在Hartree energy尺度下，相位演化一个弧度所需的时间。`,
    simpleExample: `氢原子基态电子的轨道周期为 2π 个原子时间单位 ≈ 152 阿秒。`,
    deepMeaning: `阿秒物理学在这一时间尺度上实时研究电子动力学。2023年Nobel奖正是颁给了阿秒脉冲技术。`,
    whyItMatters: `允许直接观测原子内的电子运动。`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: '原子单位 of Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: '原子',
    description: '原子单位中的Hartree energy。',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `原子物理中的energy单位。`,
    simpleExample: `以Hartree表示的化学键energy：H₂键 = 0.174 Eh。`,
    deepMeaning: `为所有电子结构计算确立基本energy尺度。`,
    whyItMatters: `DFT等计算程序中的标准energy单位。`
  },

  {
    symbol: 'e',
    name: '原子单位 of Charge',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C',
    category: '原子',
    description: '原子单位中的基本电荷。',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = e',
    whatItSays: `在原子单位中，质子带+1的charge，电子带−1的charge。`,
    simpleExample: `氦原子核带+2 a.u.的charge。`,
    deepMeaning: `通过将基本电荷设为单位一，简化了电磁相互作用的数学运算。`,
    whyItMatters: `量子化学电荷计算的标准单位。`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: '原子单位 of Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: '原子',
    description: '氢原子基态中电子的velocity。',
    discoveredBy: '导出量',
    formula: '1 a.u. = αc',
    whatItSays: `α × c——Bohr模型中电子的velocity。`,
    simpleExample: `在金（Z=79）中，1s层电子的velocity约为0.58c，由此引起的相对论性收缩正是金呈现黄色的原因。`,
    deepMeaning: `对于较重的原子，接近c的velocity需要相对论修正。`,
    whyItMatters: `决定了相对论效应在化学中变得重要的临界点。`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: '原子单位 of Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: '原子',
    description: '氢原子中momentum不确定度的自然尺度。',
    discoveredBy: '导出量',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (原子单位velocity) = ħ/a₀。`,
    simpleExample: `根据不确定性原理，局域化在a₀范围内的电子的momentum不确定度恰好为一个原子单位。`,
    deepMeaning: `将原子的length尺度与轨道电子的momentum直接联系起来。`,
    whyItMatters: `主导电子衍射和量子化学散射。`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: '原子单位 of Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: '原子',
    description: '在Bohr半径处电子与质子之间的静电force。',
    discoveredBy: '导出量',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²)。在原子尺度上力量巨大（82 nN），但对人类感知而言微乎其微。`,
    simpleExample: `原子稳定性的基础：这一force与量子pressure之间的平衡。`,
    deepMeaning: `确立了"粘合"原子的力的强度尺度。`,
    whyItMatters: `主导原子成键和材料强度。`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: '原子单位 of Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: '原子',
    description: '氢原子中电子所经历的极强electric field。',
    discoveredBy: '导出量',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `在Bohr半径处的electric field（514 GV/m）。`,
    simpleExample: `原子内的electric field比空气击穿electric field强约100,000倍。`,
    deepMeaning: `当激光强度超过约10¹⁴ W/cm²时，激光electric field足以将电子从原子上撕扯下来，产生阿秒脉冲。`,
    whyItMatters: `强场激光物理和场致电离的基准。`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: '原子单位 of Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: '原子',
    description: '对应一个原子单位的magnetic flux density。',
    discoveredBy: '导出量',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 特斯拉——远超任何实验室磁铁（约45 T）。`,
    simpleExample: `中子星的磁场可达约10⁸−10¹¹ 特斯拉，超过原子单位。`,
    deepMeaning: `在这一尺度上，真空双折射等光子传播的量子电动力学效应变得显著。`,
    whyItMatters: `对理解白矮星和磁陀星至关重要。`
  },

  {
    symbol: 'ε<sub>au</sub>',
    name: '原子单位 of Permittivity',
    value: '1.113 × 10<sup>−10</sup>',
    unit: 'F/m',
    exact: '1.112650056 × 10⁻¹⁰ F/m',
    category: '原子',
    description: '缩放至原子单位的真空电容率——4πε₀。',
    discoveredBy: '导出量',
    formula: 'ε = e<sup>2</sup> / (E<sub>h</sub>a<sub>0</sub>)',
    whatItSays: `在原子单位中，Coulomb force定律简化为 F = q₁q₂/r²。`,
    simpleExample: `简化了量子化学程序中所有静电计算的数学。`,
    deepMeaning: `去除计算中4πε₀因子的主要简化措施之一。`,
    whyItMatters: `理论物理的标准归一化。`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: '原子单位 of Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: '原子',
    description: '原子energy对磁场的二阶响应。',
    discoveredBy: '导出量',
    formula: '1 a.u.',
    whatItSays: `通过NMR化学位移和磁力测量来测定。`,
    simpleExample: `用于计算分子对MRI级别磁场的响应。`,
    deepMeaning: `量子层面研究分子磁化率的基本量。`,
    whyItMatters: `用于NMR光谱学和量子化学模拟。`
  }
];

// =============================================================================
// i18n 辅助工具 — UI 字符串翻译
// =============================================================================

export const UI_ZH = {

  // ── 导航与标题 ────────────────────────────────────────────────────────────
  appTitle: '物理常数数据库',
  appSubtitle: 'CODATA 2022 · 深度参考指南',

  // ── 搜索 ──────────────────────────────────────────────────────────────────
  searchPlaceholder: '搜索常数、符号或分类……',
  searchResultsCount: (n) => `找到 ${n} 个结果`,
  searchNoResults: '未找到匹配的常数。',

  // ── 分类标签 ──────────────────────────────────────────────────────────────
  categories: {
    All: '全部',
    Universal: '普适',
    Electromagnetic: '电磁',
    Atomic: '原子',
    Nuclear: '核物理',
    Thermodynamic: '热力学',
    Particle: '粒子',
  },

  // ── 常数详情卡片标签 ──────────────────────────────────────────────────────
  labels: {
    symbol: '符号',
    name: '名称',
    value: '数值',
    exactValue: '精确值',
    unit: '单位',
    category: '分类',
    formula: '公式',
    discoveredBy: '发现者',
    whatItSays: '方程的含义',
    simpleExample: '简单示例',
    deepMeaning: '深层含义',
    whyItMatters: '重要性',
    copyValue: '复制数值',
    copied: '已复制！',
  },

  // ── 排序选项 ──────────────────────────────────────────────────────────────
  sortOptions: {
    label: '排序方式',
    default: '默认',
    nameAZ: '名称 A → Z',
    nameZA: '名称 Z → A',
    categoryAZ: '分类 A → Z',
  },

  // ── 通用 UI ───────────────────────────────────────────────────────────────
  ui: {
    loading: '加载中……',
    error: '加载数据时发生错误。',
    backToTop: '返回顶部',
    expandAll: '展开全部',
    collapseAll: '收起全部',
    darkMode: '深色模式',
    lightMode: '浅色模式',
    language: '语言',
    totalConstants: (n) => `共 ${n} 个物理常数`,
  },

  // ── 无障碍标签 ────────────────────────────────────────────────────────────
  aria: {
    searchInput: '搜索物理常数',
    categoryFilter: '按分类筛选',
    sortSelect: '对常数列表排序',
    constantCard: (name) => `${name} 的详细信息`,
    closeModal: '关闭详情',
    copyButton: '将数值复制到剪贴板',
  },
};

// =============================================================================
// 导出默认的完整语言包
// =============================================================================

const zh = {
  constants: CONSTANTS_ZH,
  ui: UI_ZH,
  locale: 'zh-CN',
  name: '简体中文',
  dir: 'ltr',
};

export default zh;
