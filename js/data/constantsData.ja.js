// =============================================================================
// constantsData_je.js — Physical Constants Database [日本語版 / Japanese]
// 国際単位系 CODATA 2022 準拠 | 翻訳規則: 物理量名・人名・数値は英語のまま保持
// Translation rules: physics terms (Velocity, mass, etc.), proper names
// (Oppenheimer, Planck, etc.), and all numerical values remain in English.
// =============================================================================

export const CONSTANTS_JA = [

  // ── 第1部: 普遍定数・定義定数 ─────────────────────────────────────────────

  {
    symbol: 'c',
    name: '真空中の Speed of Light',
    value: '2.998 × 10<sup>8</sup>',
    unit: 'm/s',
    exact: '299,792,458 m/s（厳密値）',
    category: '普遍定数',
    description: '因果律そのものの根本的な速度限界。',
    discoveredBy: 'Ole Rømer (1676) · Maxwell (1865) · Einstein (1905)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `Light は真空中を1秒間に正確に 299,792,458 メートル進む。これは測定による近似値ではない——1983年以降、メートルそのものがこの数値によって定義されており、c は国際定義により厳密な整数値として固定されている。`,
    simpleExample: `月からの Light はおよそ 1.28秒 で目に届く。太陽からの Light は約8分20秒かかる。最も近い恒星 Proxima Centauri までの距離は 4.24光年——つまり Light がその距離を横断するのに 4.24年かかるということだ。`,
    deepMeaning: `c は単に「Light の移動速度」ではない。それは因果律の根本的な速度限界——情報・Energy・因果的影響が宇宙を伝播できる最大速度——である。Einstein の特殊相対性理論は、c がどんな観測者の運動状態にも依存せず常に同じ値をとることを示した。これはニュートン的な絶対時間を根本から破壊する。互いに相対運動する二者は、length・時間間隔・同時性について意見が分かれるが、c については常に同じ値を測定する。E = mc² は、mass と Energy が同一のものであり、変換係数 c² によってのみ区別されることを意味する。`,
    whyItMatters: `c がなければ、特殊相対性理論も E = mc² もなく、GPS の補正も（GPS衛星は特殊・一般相対論的な時間遅延を補正しなければならない）、星の理解も、素粒子物理学も存在しない。c は現代物理学の根幹である。`
  },

  {
    symbol: 'h',
    name: 'Planck Constant',
    value: '6.626 × 10<sup>−34</sup>',
    unit: 'J·Hz⁻¹',
    exact: '6.62607015 × 10⁻³⁴ J·s（厳密値）',
    category: '普遍定数',
    description: '電磁的作用の量子——photon の Energy を支配する。',
    discoveredBy: 'Max Planck (1900) · Nobel Prize 1918',
    formula: 'E = hf',
    whatItSays: `Energy は「量子」と呼ばれる離散的な塊として存在する。電磁放射の1量子——すなわち1個の photon——の Energy E は E = hf で与えられ、f は放射の frequency（振動数）である。h は frequency（波動の性質）と Energy（粒子の性質）を結びつける比例定数だ。`,
    simpleExample: `可視赤色光の frequency はおよそ 4.3 × 10¹⁴ Hz。赤色光の photon 1個が持つ Energy は：(6.626 × 10⁻³⁴) × (4.3 × 10¹⁴) ≈ 2.85 × 10⁻¹⁹ J ≈ 1.78 eV。この微小な Energy は網膜の rhodopsin 分子1個を活性化するのに十分——これが視覚の始まりである。`,
    deepMeaning: `Planck 以前、古典物理学は高い frequency において物体が無限大の Energy を放射すると予測していた——「紫外破綻」と呼ばれる問題だ。1900年、Max Planck はこれを Energy が連続的ではなく量子化されているという仮定で解決した。Einstein はこれを用いて光電効果を説明した。h は「作用の量子」でもあり、Energy × 時間の次元を持つ。その縮約形 ħ = h/2π は量子力学の数学的核心である交換関係 [x̂, p̂] = iħ と Heisenberg の不確定性原理 Δx · Δp ≥ ħ/2 に現れる。`,
    whyItMatters: `h は量子世界と古典世界の境界線だ。系の作用が h よりはるかに大きければ古典力学が成立する。h がなければ、原子は崩壊し、化学は存在せず、私たちが知るこの宇宙は存在できなかった。`
  },

  {
    symbol: 'ħ',
    name: '縮約 Planck Constant',
    value: '1.055 × 10<sup>−34</sup>',
    unit: 'J·s',
    exact: '1.054571817 × 10⁻³⁴ J·s（厳密値）',
    category: '普遍定数',
    description: 'h/2π——量子力学における angular momentum の自然単位。',
    discoveredBy: 'Paul Dirac (1926)',
    formula: 'E = ħω',
    whatItSays: `ħ（「h-bar」と呼ぶ）は単純に h を 2π で割ったものだ。通常の frequency f（サイクル毎秒）の代わりに角 frequency ω（ラジアン毎秒）を使う場面に現れる。ω = 2πf の関係がある。`,
    simpleExample: `電子の spin は ħ/2。photon の spin は ħ。軌道 angular momentum は常に ħ の整数倍——ħ は「回転の原子」そのものだ。`,
    deepMeaning: `量子力学において ħ は単なる便利な省略形ではない。それは angular momentum の根本的な量子だ。量子場理論では、ħ は量子揺らぎの大きさを制御する。ħ → 0 の極限で古典場理論が回収される。量子力学の全構造——交換関係、経路積分、不確定性原理——は ħ によって支配されている。`,
    whyItMatters: `素粒子物理学者が使う自然単位系では ħ = c = 1 と置く。これにより方程式が大幅に簡略化され、理論の深い幾何学的構造が露わになる。`
  },

  {
    symbol: 'e',
    name: '素電荷',
    value: '1.602 × 10<sup>−19</sup>',
    unit: 'C',
    exact: '1.602176634 × 10⁻¹⁹ C（厳密値）',
    category: '電磁定数',
    description: '単独で存在できる最小の electric charge——charge は量子化されている。',
    discoveredBy: 'J.J. Thomson (1897) · Millikan (1913) · Nobel 1923',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `これは proton（正）または electron（負）1個が持つ electric charge の大きさだ。自然界において観測されるすべての electric charge は e の整数倍である。charge は量子化されている。`,
    simpleExample: `1アンペアの電流とは、1秒間に1クーロンの charge が通過することを意味する。electron 1個が 1.602 × 10⁻¹⁹ C を持つので、1アンペアの電流はおよそ 6.24 × 10¹⁸ 個の electron が毎秒通過することに対応する。`,
    deepMeaning: `charge の量子化は Robert Millikan による有名な油滴実験で実験的に確立された。彼は電場に浮かぶ油滴の charge を測定し、すべての charge が基本単位 e の整数倍であることを発見した。微細構造定数 α ≈ 1/137 は電磁力の強さを表す無次元数だ。クォークは e/3 および 2e/3 の charge を持つが、ハドロン内部に永久に閉じ込められており、単独では観測されない。`,
    whyItMatters: `e はすべての原子・分子相互作用のスケールを設定する。化学・生物学・電子工学・材料科学はすべて根本的に e の値に依存している。e がわずかに異なれば、私たちが知る生命は存在できなかっただろう。`
  },

  {
    symbol: 'k',
    name: 'Boltzmann Constant',
    value: '1.381 × 10<sup>−23</sup>',
    unit: 'J/K',
    exact: '1.380649 × 10⁻²³ J/K（厳密値）',
    category: '熱力学定数',
    description: '温度と kinetic energy の橋渡し役——S = k ln(Ω)。',
    discoveredBy: 'Ludwig Boltzmann (1877) · Max Planck (1900)',
    formula: 'S = k ln(Ω)',
    whatItSays: `k（kB とも書く）は、個々の粒子の微視的世界と温度の巨視的世界を結ぶ橋だ。温度——集団の統計的性質——を粒子あたりの Energy に変換する。各自由度が平均 kinetic energy (1/2)kT を持つ。`,
    simpleExample: `室温（T = 293 K）では kT ≈ 0.0253 eV となる。これが室温における典型的な熱エネルギースケールだ。化学結合のエネルギーは数 eV であるため、室温の熱エネルギーはそれよりはるかに小さい——だからこそほとんどの化学結合は安定して存在できるのである。`,
    deepMeaning: `温度は根本的な量ではない——それは粒子の平均 kinetic energy の尺度だ。S = k ln(Ω) は情報と確率の観点から entropy を定義し、熱力学と微視的物理学を結びつける。Boltzmann 分布は、温度 T において系が Energy E の状態にある確率を与える：P(E) ∝ e^(−E/kT)。この指数因子——Boltzmann 因子——は、化学反応速度から地球大気中の分子分布に至るまで、あらゆるものを支配する。`,
    whyItMatters: `k は熱力学と統計力学の基盤だ。これなしに、microscopic な物理から temperature・pressure・entropy といった巨視的観測量を結びつけることはできない。2019年以降、k は厳密に定義された定数となり、ケルビンは k によって定義されている。`
  },

  {
    symbol: 'N<sub>A</sub>',
    name: 'Avogadro Constant',
    value: '6.022 × 10<sup>23</sup>',
    unit: 'mol⁻¹',
    exact: '6.02214076 × 10²³ mol⁻¹（厳密値）',
    category: '熱力学定数',
    description: '1モル中の粒子数——原子スケールと人間スケールを繋ぐ。',
    discoveredBy: 'Johann Josef Loschmidt (1865) · Jean Perrin (1909)',
    formula: 'n = N / N<sub>A</sub>',
    whatItSays: `任意の物質1モルは、正確に 6.022 140 76 × 10²³ 個の基本単位（原子・分子・イオンなど）を含む。この数は原子スケールと人間スケールをつなぐ橋だ。`,
    simpleExample: `炭素-12 の 12グラムには正確に1モルの炭素原子が含まれる。これは想像を絶するほど巨大な数だ——砂粒1モル分があれば、地球の表面を数キロメートルの深さで覆い尽くすことができる。`,
    deepMeaning: `NA は原子 mass 単位をグラムと結びつける。1 u = 1グラム / NA = 1.660 539 × 10⁻²⁷ kg。モル気体定数 R は Boltzmann constant と R = NA × k = 8.314 J mol⁻¹ K⁻¹ の関係にある。Faraday 定数 F = NAe = 96,485 C/mol は electron 1モルの charge だ。歴史的に NA の測定は19世紀・20世紀初頭の物理学の中心的課題だった。Jean Perrin による 1908年の Brown 運動の測定が原子の存在を証明した。`,
    whyItMatters: `NA は化学を定量的にする。化学者が物体を量ることで原子を数えることを可能にする。すべての化学量論計算、すべての医薬品の用量計算、すべての材料科学計算は NA に依存している。`
  },

  {
    symbol: 'K<sub>cd</sub>',
    name: '視感効率（Luminous Efficacy）',
    value: '683',
    unit: 'lm/W',
    exact: '683 lm/W（厳密値）',
    category: '普遍定数',
    description: 'カンデラを定義する——人間の生物学に結びついた唯一の SI 定数。',
    discoveredBy: '国際的定義（1979）',
    formula: 'K<sub>cd</sub> = 683 lm/W（540 THz）',
    whatItSays: `特定の単色 frequency 540 × 10¹² Hz（緑色光、波長 ≈ 555 nm）——昼間の明所視において人間の目が最も感度の高い frequency——での 1ワットの放射 power は、正確に 683 ルーメンの光束（人間の目で感じる明るさ）に対応する。`,
    simpleExample: `純粋な緑色光を 1ワット放射する光源は正確に 683 ルーメンの明るさを生み出す。他の色は目の感度が低いため、1ワットあたりのルーメンが少なくなる。`,
    deepMeaning: `この定数は SI 系において人間の生物学——具体的には明所視（昼間）における人間の目の分光感度——に依存する唯一のものだ。物理量の放射 power（ワット）を知覚量の明るさ（ルーメン）と結びつけるために、このように定義されている。2019年以降、カンデラは Kcd を正確に 683 lm/W と固定することで定義されている。`,
    whyItMatters: `測光学・照明工学・すべての光学系設計に不可欠だ。すべての電球に記載されるルーメン値はこの定数に遡る。`
  },

  {
    symbol: 'Δν<sub>Cs</sub>',
    name: 'Caesium 超微細 Frequency',
    value: '9,192,631,770',
    unit: 'Hz',
    exact: '9,192,631,770 Hz（厳密値）',
    category: '普遍定数',
    description: '「秒」を定義する——現代のすべての時間計測の心拍。',
    discoveredBy: 'Essen & Parry, NPL (1955)',
    formula: '1 s = 9,192,631,770 / Δν<sub>Cs</sub>',
    whatItSays: `Caesium-133 原子の基底状態は2つの超微細準位を持つ——electron の磁気双極子モーメントと核磁気双極子モーメントの相互作用によって分裂する。原子がこの2つの準位間を遷移するとき、正確に 9,192,631,770 Hz の放射を放出または吸収する。`,
    simpleExample: `1967年以降、「1秒」はこの放射の正確に 9,192,631,770 回の振動周期として定義されている。Caesium 原子時計はこれまでに作られた中で最も精密な時間計測装置であり、3億年に1秒未満の誤差しかない。`,
    deepMeaning: `超微細分裂は量子電気力学（QED）——electron の磁気双極子モーメントと核 spin が生み出す磁場との相互作用——から生じる。この frequency を第一原理から計算することは QED の深い試験だ。GPS・インターネット（同期した時計を必要とする）・金融システム・現代の通信技術はすべて Caesium 原子時計の標準に直接依存している。`,
    whyItMatters: `科学のあらゆる分野で最も精密な測定。GPS・インターネット同期・金融取引・5G ネットワークなど現代文明はすべてこの定数に依存している。`
  },

  // ── 第2部: 電磁定数 ──────────────────────────────────────────────────────

  {
    symbol: 'ε<sub>0</sub>',
    name: '真空の電気 Permittivity',
    value: '8.854 × 10<sup>−12</sup>',
    unit: 'F/m',
    exact: '8.8541878188 × 10⁻¹² F/m',
    category: '電磁定数',
    description: 'electric field が真空をどれだけ容易に透過するかを示す。',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'F = q<sub>1</sub>q<sub>2</sub> / (4πε<sub>0</sub>r<sup>2</sup>)',
    whatItSays: `ε₀（epsilon-naught）は electric field が真空を透過する容易さを表す。Coulomb の法則——2つの点 charge 間の力——に現れる：F = (1/4πε₀) × (q₁q₂/r²)。ε₀ が大きいほど、同じ charge・距離に対して静電力は弱くなる。`,
    simpleExample: `水の比 permittivity は εr ≈ 80 であり、水が charge 間の静電力を真空と比較して 80分の1に弱めることを意味する——これが水がイオン性化合物の優れた溶媒である理由だ。`,
    deepMeaning: `ε₀ は独立して定義されておらず、c と μ₀ の定義値から ε₀ = 1/(μ₀c²) として導出される。Maxwell の方程式の真空形式においてすべてに現れる。Gauss の法則：∮ E · dA = Q_enc/ε₀——任意の閉曲面を通る total electric flux は囲まれた charge を ε₀ で割ったものに等しい。electric field に蓄積される電磁 Energy 密度も設定する：u_E = (1/2)ε₀E²。`,
    whyItMatters: `Maxwell の4つの方程式すべてに現れる。ε₀ なしに定量的な静電気学も、コンデンサ設計も、誘電体の理解も存在しない。`
  },

  {
    symbol: 'μ<sub>0</sub>',
    name: '真空の磁気 Permeability',
    value: '1.257 × 10<sup>−6</sup>',
    unit: 'N/A²',
    exact: '1.2566370621 × 10⁻⁶ N/A²',
    category: '電磁定数',
    description: 'magnetic field が真空をどれだけ容易に透過するかを示す。',
    discoveredBy: 'James Clerk Maxwell (1865)',
    formula: 'c = 1 / √(ε<sub>0</sub>μ<sub>0</sub>)',
    whatItSays: `μ₀（mu-naught）は magnetic field が真空を透過する容易さを表す。Biot-Savart の法則と Ampère の法則に現れる。電流 I₁ と I₂ を流す2本の平行導線が距離 d 離れているときの単位長さあたりの力は：F/L = (μ₀/2π) × (I₁I₂/d)。`,
    simpleExample: `鉄の比 permeability は μr 最大 ~10,000 に達する——鉄は真空と比較して magnetic field を極めて効率よく集中させる。これがトランスのコアに鉄が使われる理由だ。`,
    deepMeaning: `2019年の SI 再定義以前、μ₀ は定義により正確に 4π × 10⁻⁷ N/A² だった。今は測定量であり、小さな不確かさを持つ。μ₀ は Maxwell の補正を加えた Ampère の法則に現れる：∮ B · dl = μ₀(I_enc + ε₀ dΦ_E/dt)。第2項——Maxwell の変位電流——は真空中に電磁波が存在することを可能にし、光が電磁波であるという予測に直接つながった。`,
    whyItMatters: `μ₀ なしに magnetic field も電磁誘導も electric motor も変圧器も電波も存在しない。`
  },

  {
    symbol: 'Z<sub>0</sub>',
    name: '真空の特性 Impedance',
    value: '376.730',
    unit: 'Ω',
    exact: '376.730313412 Ω',
    category: '電磁定数',
    description: '真空中の電磁波における electric field と magnetic field の比。',
    discoveredBy: 'Maxwell の方程式から導出',
    formula: 'Z<sub>0</sub> = √(μ<sub>0</sub>/ε<sub>0</sub>) = μ<sub>0</sub>c',
    whatItSays: `電磁波が真空を伝播するとき、electric field 振幅と magnetic field 振幅の比は：Z₀ = E/H = √(μ₀/ε₀) ≈ 377 Ω となる。`,
    simpleExample: `アンテナは impedance が 377 Ω に整合されたとき効率よく放射する。単位面積あたりの放射 power（Poynting vector）は S = E²/Z₀ だ。これは双極子アンテナから衛星放送アンテナに至るすべての設計に使われる。`,
    deepMeaning: `Z₀ は自由空間の impedance——伝播する電磁波において単位 magnetic field あたりどれだけの electric field が得られるかを示す。伝送線路の特性 impedance に類似した「電磁波伝播に対する真空の抵抗」だ。地球に届く太陽光は electric field 振幅 √(1361 × Z₀) ≈ 716 V/m に対応する。`,
    whyItMatters: `アンテナ設計・レーダー断面積・アンテナ利得・すべての無線通信の link budget に不可欠だ。`
  },

  {
    symbol: 'K<sub>J</sub>',
    name: 'Josephson Constant',
    value: '4.836 × 10<sup>14</sup>',
    unit: 'Hz/V',
    exact: '483597.8484 × 10⁹ Hz/V',
    category: '電磁定数',
    description: '超電導 Josephson 接合において voltage と frequency を結びつける。',
    discoveredBy: 'Brian Josephson (1962) · Nobel Prize 1973',
    formula: 'f = K<sub>J</sub>V = (2e/h)V',
    whatItSays: `Josephson constant は交流 Josephson 効果において voltage と frequency を結びつける。DC voltage V を Josephson 接合（2つの超電導体間の薄い絶縁障壁）に加えると、frequency f = 2eV/h の交流電流が生成される。`,
    simpleExample: `Josephson 接合を横断する 1ミリボルトの voltage は ~483.6 GHz の交流振動を生み出す——マイクロ波帯にあたる。これは 10¹⁰ 分の1の精度で voltage 標準を定義するために使われる。`,
    deepMeaning: `係数2は超電導が Cooper pair——charge 2e を持つ electron のペア——を伴うことに由来する。Josephson 接合は、2つの超電導体間の quantum phase 差が超電流を駆動する巨視的量子装置だ。交流 Josephson 効果は量子力学が超電導体において巨視的スケールで機能することの驚くべき実証だ。`,
    whyItMatters: `世界中で使われる primary voltage 標準。利用可能な最も精密な電気的測定。量子計測学と超電導量子コンピューティングの基礎だ。`
  },

  {
    symbol: 'R<sub>K</sub>',
    name: 'Von Klitzing Constant',
    value: '25812.807',
    unit: 'Ω',
    exact: '25812.80745 Ω',
    category: '電磁定数',
    description: '電気 resistance の量子——量子 Hall 効果からの h/e²。',
    discoveredBy: 'Klaus von Klitzing (1980) · Nobel Prize 1985',
    formula: 'R<sub>H</sub> = R<sub>K</sub>/n = h/(ne<sup>2</sup>)',
    whatItSays: `RK = h/e² は resistance の量子だ。量子 Hall 効果において現れる：低温で強い垂直 magnetic field をかけた2次元 electron ガスは、Hall resistance が RK の正確な分数に量子化される：RH = RK/n。`,
    simpleExample: `量子化の精度は非常に高く、RK は primary resistance 標準として使われる。~1 K、~10 テスラの磁場中の Silicon チップは RK/2 = 12,906 Ω を10億分の1以下の精度で再現する。`,
    deepMeaning: `量子化はトポロジー的起源を持つ——材料・試料形状・調整可能なパラメータに依存しない。測定精度の範囲内で厳密だ。分数量子 Hall 効果（1982）は 1/3, 2/5 などの分数での量子化を含む——強相関 electron 状態から生じ、ν = 5/2 状態はトポロジカル量子コンピューティングに関連する non-Abelian anyons を含む可能性がある。`,
    whyItMatters: `世界中の primary resistance 標準。凝縮系物理学におけるトポロジーへの窓口。整数・分数量子 Hall 効果は現代物理学で最も深遠な発見の一部だ。`
  },

  {
    symbol: 'Φ<sub>0</sub>',
    name: '磁束量子',
    value: '2.068 × 10<sup>−15</sup>',
    unit: 'Wb',
    exact: '2.067833848 × 10⁻¹⁵ Wb',
    category: '電磁定数',
    description: '超電導ループにおける magnetic flux の量子——h/(2e)。',
    discoveredBy: 'London & Onsager（理論）· Doll & Näbauer（1961、実証）',
    formula: 'Φ<sub>0</sub> = h/(2e)',
    whatItSays: `超電導ループを通る magnetic flux は Φ₀ の単位で量子化される。超電導環は h/(2e) の整数倍の magnetic flux しか捕捉できない。`,
    simpleExample: `SQUID（超電導量子干渉素子）は Φ₀ の 10⁻⁶ 分の1という微小な magnetic flux の変化を検出できる——これは ~10⁻¹⁸ テスラの magnetic field 変化に対応し、脳磁図（MEG）に用いられる。`,
    deepMeaning: `magnetic flux の量子化は量子力学の直接的な巨視的現れだ。超電導秩序パラメータ（巨視的量子波動関数）はループを一周して単一値でなければならず、これにより囲まれた flux が量子化される。SQUID は Φ₀ を利用して magnetic field を驚くべき感度で測定する——これまでに作られた中で最も感度の高い磁気センサーだ。`,
    whyItMatters: `SQUID 技術・脳磁図・巨視的スケールでの量子力学の基礎的試験・超電導量子コンピューティングの基盤だ。`
  },

  {
    symbol: 'G<sub>0</sub>',
    name: 'Conductance 量子',
    value: '7.748 × 10<sup>−5</sup>',
    unit: 'S',
    exact: '7.748091729 × 10⁻⁵ S',
    category: '電磁定数',
    description: '電気 conductance の基本単位——2e²/h。',
    discoveredBy: 'Rolf Landauer (1957) · van Wees et al. (1988)',
    formula: 'G<sub>0</sub> = 2e<sup>2</sup>/h',
    whatItSays: `electron が完全な1チャネル量子導体（単一原子接触や量子点接触など）を流れるとき、conductance はチャネルあたり正確に G₀ = 2e²/h となる。Resistance は 1/G₀ = h/(2e²) ≈ 12,906 Ω だ。`,
    simpleExample: `1原子幅まで引き延ばされた gold のナノワイヤはおよそ G₀ の conductance を持つ。これは実験で高い精度で測定されている。2原子のワイヤは ~2G₀ の conductance を持つ。`,
    deepMeaning: `古典的な resistance は試料形状・材料・不純物に依存する。しかし量子レベルでは、完全な導体でさえ resistance を持つ——導体とリード間の伝播モードの量子力学的整合により。これが Landauer の公式だ：G = G₀ × Σ T、ここで T は個々の量子チャネルの透過確率。`,
    whyItMatters: `メソスコピック物理学とナノエレクトロニクスの基盤。分子接合・カーボンナノチューブ・量子ドットを通る electron 輸送を支配する。`
  },

  {
    symbol: 'F',
    name: 'Faraday Constant',
    value: '96,485.332',
    unit: 'C/mol',
    exact: '96485.33212 C/mol',
    category: '電磁定数',
    description: 'electron 1モルの charge——NA × e。',
    discoveredBy: 'Michael Faraday (1833)',
    formula: 'F = N<sub>A</sub>e',
    whatItSays: `Faraday constant は基本 charge 1モル——electron 1モルまたは proton 1モル——の charge だ。電気化学において、1価イオン1モルを析出または溶解するのに必要な charge 量を規定する。`,
    simpleExample: `CuSO₄ 溶液から 1モルの copper（63.5グラム）を電気めっきするには 2F = 192,970 C の charge が必要だ（copper は2価、Cu²⁺ + 2e⁻ → Cu）。厚い層を電気めっきするのに大電流が必要な理由はここにある。`,
    deepMeaning: `Faraday の電気分解の法則（1833-1834）は、電極に析出する物質の mass は通過した charge に比例し、Faraday constant がその比例定数（価数あたりモルあたり）であることを示す：m = (M/zF) × Q。Faraday はこの関係を電子も原子も知らずに経験的に導いた——驚くべき業績だ。彼の名を冠する定数は今や NA と e の定義を通じて厳密な値を持つ。`,
    whyItMatters: `すべての電気化学の基盤。すべての lithium イオン電池、すべての電気めっき工程、すべての塩素製造施設、すべての電解精錬がこの定数の上に成り立つ。`
  },

  // ── 第3部: 原子・核定数 ───────────────────────────────────────────────────

  {
    symbol: 'α',
    name: '微細構造定数（Fine-Structure Constant）',
    value: '7.297 × 10<sup>−3</sup>',
    unit: '無次元',
    exact: '7.2973525643 × 10⁻³ (≈ 1/137.036)',
    category: '原子定数',
    description: '電磁力の無次元 coupling constant。',
    discoveredBy: 'Arnold Sommerfeld (1916)',
    formula: 'α = e<sup>2</sup> / (4πε<sub>0</sub>ħc)',
    whatItSays: `α は電磁相互作用の無次元 coupling constant だ。charged 粒子間の電磁力の強さ——具体的には charged 粒子が photon を放出または吸収する確率振幅——を測る。`,
    simpleExample: `量子電気力学（QED）において、ある過程で electron が photon 1個を放出する確率は α に比例する。2光子過程は α² に比例する。α ≈ 1/137 であるため、photon の頂点が増えるたびに確率は ~1/137 倍に抑制され、QED の Feynman 図が急速に収束する理由だ。`,
    deepMeaning: `α は物理学で最も神秘的な数の一つだ。純粋に無次元——単位を持たず、使用する単位系に関係なく同じ値をとる。e（電磁気）・ε₀（静電気）・ħ（量子力学）・c（相対性理論）を組み合わせる。Richard Feynman は α を「物理学における最大の謎の一つ」と呼んだ。QED において α は真に一定ではない——真空分極により Energy スケールとともに「走る」：低 Energy：α ≈ 1/137、Z boson の mass スケール：α ≈ 1/128。`,
    whyItMatters: `α は原子物理学・化学・分子生物学のすべてを支配する。原子の大きさ・化学結合の強さ・すべての元素の吸収・放出スペクトルはすべて α によって制御される。おそらく物理学において最も重要な無次元数だ。`
  },

  {
    symbol: 'R<sub>∞</sub>',
    name: 'Rydberg Constant',
    value: '1.097 × 10<sup>7</sup>',
    unit: 'm⁻¹',
    exact: '10,973,731.568157 m⁻¹',
    category: '原子定数',
    description: 'すべての hydrogen スペクトル線の波長を決定する。',
    discoveredBy: 'Johannes Rydberg (1888) · Niels Bohr (1913)',
    formula: '1/λ = R<sub>∞</sub>(1/n<sub>1</sub><sup>2</sup> − 1/n<sub>2</sub><sup>2</sup>)',
    whatItSays: `Rydberg constant は hydrogen のスペクトル線の波数（波長の逆数）を与える。hydrogen のすべてのスペクトル線の波長は Rydberg の式で与えられる：1/λ = R∞ × (1/n₁² − 1/n₂²)、ここで n₁ と n₂ は n₂ > n₁ の正整数だ。`,
    simpleExample: `Lyman 系列（基底状態への遷移）の最初の線（n₂ = 2）：1/λ = R∞ × (1/1 − 1/4) = R∞ × 3/4。λ = 121.6 nm（紫外——Lyman-alpha 線）。これは天体物理学で最も重要なスペクトル線——宇宙全体の hydrogen を検出し、赤方偏移を通じて空間の膨張を測定するために使われる。`,
    deepMeaning: `R∞ は理論的により根本的な定数から導出される：R∞ = mee⁴/(8ε₀²h³c) = α²mec/(2h)。この式——Bohr モデルから導出され量子力学によって精密化された——は hydrogen のスペクトルを electron の mass・素電荷・他の根本定数と結びつける。理論と実験の一致は驚くべきものだ。Rydberg energy（Ry）——hydrogen の結合 Energy——は：En = −Ry/n² = −13.6 eV/n²。`,
    whyItMatters: `Bohr を量子原子へ導いた出発点。最も精密に測定された原子定数。12桁有効数字まで知られており、兆分の数の精度で QED の試験を可能にする。`
  },

  {
    symbol: 'a<sub>0</sub>',
    name: 'Bohr Radius',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: '原子定数',
    description: '原子の自然な大きさのスケール——hydrogen における electron と proton の最確距離。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'a<sub>0</sub> = 4πε<sub>0</sub>ħ<sup>2</sup> / (m<sub>e</sub>e<sup>2</sup>)',
    whatItSays: `a₀ は基底状態（n = 1）の hydrogen 原子における electron と proton 間の最確距離だ。原子の典型的な大きさのスケールを設定する。a₀ = ħ/(mecα)。`,
    simpleExample: `a₀ ≈ 0.529 Å（オングストローム）。これが hydrogen 原子の典型的な大きさだ。ほとんどの原子の半径は a₀ の数倍以内に収まる。diamond の C-C 結合長は ~2.9a₀。DNA ヘリックスの直径は ~40Å ≈ 75a₀ だ。`,
    deepMeaning: `Bohr radius は、electron の kinetic energy（量子力学的、electron を広げようとする——不確定性原理が核への崩壊を阻止する）と Coulomb potential energy（核に引き付ける）の均衡から生じる。量子力学では、hydrogen の基底状態波動関数は r = a₀ で最大値をとる。Bohr radius はすべての原子波動関数のスケールを設定する——高い軌道の半径は ~ n²a₀ だ。`,
    whyItMatters: `化学と材料科学の根本的な長さスケールを定義する。凝縮系物理学において a₀ は化学結合・結晶格子間隔・励起子の大きさのスケールを設定する。hydrogen 原子の大きさは究極的に物質の密度を決定するものである。`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: 'Hartree Energy',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J (27.211 eV)',
    category: '原子定数',
    description: '原子物理学における Energy の自然単位——hydrogen のイオン化 Energy の2倍。',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: 'E<sub>h</sub> = α<sup>2</sup>m<sub>e</sub>c<sup>2</sup>',
    whatItSays: `Hartree energy は基底状態からの hydrogen のイオン化 Energy の2倍だ。原子物理学における Energy の自然単位：Eh = e²/(4πε₀a₀) = α²mec²。`,
    simpleExample: `hydrogen の基底状態は Energy −(1/2)Eh = −13.6 eV を持つ。典型的な化学結合 Energy は ~0.1–0.2 Eh（3–5 eV）。C-H 結合は ~0.16 Eh。これらの数値はすべて原子単位で1のオーダー——量子化学に最適だ。`,
    deepMeaning: `原子単位系（ħ = me = e = a₀ = 1 とする）では Eh = 1 となる。原子単位は量子化学の方程式を大幅に簡略化する。原子単位での hydrogen の Schrödinger 方程式は単純に：−(1/2)∇²ψ − (1/r)ψ = Eψ となり、基底状態は E = −1/2 すなわち −0.5 Hartree = −13.6 eV を意味する。計算化学コード（density functional theory、Hartree-Fock）はほぼ普遍的に原子単位で内部計算を行う。`,
    whyItMatters: `量子化学の主力単位。すべての DFT 計算・分子動力学シミュレーション・量子化学の結果は最終的に Hartree energy に遡る。電子構造計算の根本的な Energy スケールだ。`
  },

  {
    symbol: 'μ<sub>B</sub>',
    name: 'Bohr Magneton',
    value: '9.274 × 10<sup>−24</sup>',
    unit: 'J/T',
    exact: '9.2740100657 × 10⁻²⁴ J/T',
    category: '原子定数',
    description: 'electron 磁気モーメントの自然単位——eħ/(2me)。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: 'μ<sub>B</sub> = eħ / (2m<sub>e</sub>)',
    whatItSays: `μB は electron の磁気モーメントの自然単位だ。angular momentum ħ を持つ orbital 運動による electron の磁気モーメントを表す。`,
    simpleExample: `1テスラの MRI 磁場において、electron の spin up と spin down 状態間の Zeeman 分裂は 2μB × B ≈ 1.9 × 10⁻²³ J ≈ 0.12 meV——マイクロ波 frequency に対応する。ESR がマイクロ波を使い、NMR が無線 frequency を使う理由がここにある。`,
    deepMeaning: `electron の spin 磁気モーメントはおよそ μB だ（正確には ge × μB/2 であり、ge ≈ 2.002 は QED 補正による）。Zeeman 効果——magnetic field による原子スペクトル線の分裂——は μB によって支配される：ΔE = ml × μB × B、ml は磁気量子数。μB は電子 Spin 共鳴（ESR）を支配する。実験との一致は12桁に及び、科学において最も精密に計算された量だ。`,
    whyItMatters: `電子 spin 共鳴・磁性材料・すべての磁気光学効果の基盤。スピントロニクスと spin 量子ビットによる量子コンピューティングの中心だ。`
  },

  {
    symbol: 'μ<sub>N</sub>',
    name: 'Nuclear Magneton',
    value: '5.051 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '5.0507837461 × 10⁻²⁷ J/T',
    category: '原子定数',
    description: '核磁気モーメントの自然単位——Bohr Magneton の 1836分の1。',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'μ<sub>N</sub> = eħ / (2m<sub>p</sub>)',
    whatItSays: `μN は核子（proton と neutron）の磁気モーメントの自然単位だ。proton は electron より 1836倍重いため μB より 1836倍小さい。`,
    simpleExample: `proton の磁気モーメントは 2.793 μN。3テスラの MRI 装置において、proton の spin 状態間の Energy ギャップは 2 × 2.793 × μN × 3T ≈ 8.4 × 10⁻²⁶ J——~127 MHz の無線 frequency に対応する。MRI 装置が使う frequency はまさにこれだ。`,
    deepMeaning: `electric charge を持たないにもかかわらず、neutron は −1.913 μN の磁気モーメントを持つ。この中性粒子の非ゼロ磁気モーメントは、neutron が基本粒子ではなく内部構造（クォーク）を持つことを示す初めての証拠の一つだった。proton の磁気モーメント 2.793 μN——Dirac の点粒子が予測する 1 μN ではない——は 1933年の Stern の Nobel 賞受賞の発見だった。NMR（および MRI）は proton spin 遷移に基づいている。`,
    whyItMatters: `NMR 分光学と MRI——構造化学と医療画像において最強のツール——の基盤。歴史的に核子のクォーク内部構造を証明した。`
  },

  // ── 第4部: 粒子定数 ──────────────────────────────────────────────────────

  {
    symbol: 'm<sub>e</sub>',
    name: 'Electron Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg (0.511 MeV/c²)',
    category: '粒子定数',
    description: 'electron の静止 mass——最も軽い massive な基本粒子。',
    discoveredBy: 'J.J. Thomson (1897) · Nobel Prize 1906',
    formula: 'm<sub>e</sub>c<sup>2</sup> = 0.511 MeV',
    whatItSays: `これは electron の静止 mass——最も軽い massive な基本粒子。Energy 単位では E = mc² を通じて：mec² = 0.510 998 950 MeV。electron は proton より 1836.15倍軽い。`,
    simpleExample: `対生成（γ → e⁺ + e⁻）は少なくとも 2mec² = 1.022 MeV の photon を必要とする。この Energy 以下では、photon がどれだけあっても electron-positron ペアを生成できない。この閾値は物質中のガンマ線吸収を支配する。`,
    deepMeaning: `electron mass は標準模型の自由パラメータだ——理論的に予測されず測定されなければならない。Higgs メカニズムによって生成される：electron が Higgs 場と相互作用し、この相互作用の強さ（Yukawa coupling、ye ≈ 2.94 × 10⁻⁶）が mass を決定する。top quark の Yukawa coupling（yt ≈ 1）と比べた electron の smallness は標準模型の未解決の「階層問題」の一つだ。electron は真に素な点粒子と見られている。`,
    whyItMatters: `すべての原子・化学的挙動を支配する。原子の大きさ、electron の結合 Energy、X線の Energy、beta 線の透過深度を決定する。`
  },

  {
    symbol: 'g<sub>e</sub>',
    name: 'Electron g-factor',
    value: '−2.002319304',
    unit: '無次元',
    exact: '−2.00231930436256',
    category: '粒子定数',
    description: '科学における最も精密に検証された予測。',
    discoveredBy: 'Kusch & Foley (1948) · QED 計算：Schwinger (1948)',
    formula: 'a<sub>e</sub> = (g<sub>e</sub> − 2)/2 = α/2π + ...',
    whatItSays: `g-factor は electron の実際の磁気モーメントと、単純な Dirac 粒子（g = 2 厳密）であった場合との比だ。異常磁気モーメントは ae = (ge − 2)/2 = 0.001 159 65 だ。`,
    simpleExample: `ae の理論的予測には QED の Feynman 図を10ループまで（4次だけで 12,672 個の図を含む）足し合わせる必要がある。その結果は実験と12桁まで一致する——1兆分の1の精度。`,
    deepMeaning: `electron の異常磁気モーメントは科学において最も精密に試験された予測だ。QED（量子電気力学）は g = 2 からの偏差を微細構造定数 α の冪級数として計算する：ae = (α/2π) − 0.328(α/π)² + 1.181(α/π)³ − ... QED 予測からのいかなる偏差も標準模型を超えた新しい物理学を示すことになる。この計算の成功は理論物理学の最大の勝利だ。`,
    whyItMatters: `理論物理学の最大の勝利。他のどの測定よりも厳密に QED を試験する。微細構造定数 α の最も精密な決定を提供する。`
  },

  {
    symbol: 'm<sub>p</sub>',
    name: 'Proton Mass',
    value: '1.673 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67262192595 × 10⁻²⁷ kg (938.272 MeV/c²)',
    category: '粒子定数',
    description: 'proton の静止 mass——electron より 1836倍重い。',
    discoveredBy: 'Ernest Rutherford (1917)',
    formula: 'm<sub>p</sub>/m<sub>e</sub> = 1836.15',
    whatItSays: `Energy 単位では：mpc² = 938.272 MeV。proton は electron より 1836.15倍重い。この mass 比は原子物理学において最も重要な数の一つだ。`,
    simpleExample: `proton の大きな mass は、熱 Energy における de Broglie 波長を electron の ~43倍小さくする——proton を量子波動的にはるかに少なくする。これが Born-Oppenheimer 近似が機能する理由だ：核は古典粒子として振る舞う。`,
    deepMeaning: `electron と異なり、proton は基本粒子ではない——2つの up クォークと1つの down クォークで構成され、gluon が媒介する強い力で結合している。驚くべきことに、クォークの mass は proton の mass の ~1% しか占めない。残りの 99% はクォークの kinetic energy と gluon 場に蓄積された energy から来る——E = mc² の深遠な現れだ。Mass はほとんどが energy だ。proton の charge 半径は 0.8409 fm だ。`,
    whyItMatters: `proton は原子番号とほぼすべての原子 mass を定義する。あなたの体の mass のほぼすべては実際、proton と neutron 内部の量子色力学（QCD）場の energy だ。もしこれが大幅に異なれば、生命は根本から変わっていただろう。`
  },

  {
    symbol: 'g<sub>p</sub>',
    name: 'Proton g-factor',
    value: '5.586',
    unit: '無次元',
    exact: '5.5856946893',
    category: '粒子定数',
    description: 'proton が複合粒子であることを証明した大きな異常磁気モーメント。',
    discoveredBy: 'Otto Stern (1933) · Nobel Prize 1943',
    formula: 'g<sub>p</sub> ≈ 5.586',
    whatItSays: `単純な Dirac proton であれば gp は 2 であるべきだ。しかし実際は gp ≈ 5.586——ほぼ3倍大きい。この巨大な異常磁気モーメントは proton の複合的構造を示す最初の実験的発見の一つだった。`,
    simpleExample: `proton が単純な構造のない点粒子であれば、強さ 2 の磁石のように振る舞うはずだ。値が 5.586 であるという事実は、内部で charged な部分（クォーク）が動いていることの直接的な数値的証拠だ。`,
    deepMeaning: `Otto Stern は 1933年に gp ≈ 5.6 を測定したが、当時 proton は基本的な Dirac 粒子と考えられていた。この結果は物理学コミュニティを衝撃に陥れた。大きな異常磁気モーメント——そして neutron の非ゼロ磁気モーメント——はクォークモデルへの重要な証拠だった。これらの値は今や QCD 計算を通じて部分的に理解されるが、QCD からの完全に精密な第一原理計算は依然として主要な課題だ。`,
    whyItMatters: `クォークモデルへの歴史的に不可欠な発見。原子核の磁気共鳴（NMR/MRI）の計算に中心的。ハドロン構造理論の厳密な試験。`
  },

  // ── 第5部: Neutron 定数 ─────────────────────────────────────────────────

  {
    symbol: 'm<sub>n</sub>',
    name: 'Neutron Mass',
    value: '1.675 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.67492750056 × 10⁻²⁷ kg (939.565 MeV/c²)',
    category: '核定数',
    description: 'proton よりわずかに重い——この mass 差が beta 崩壊を可能にする。',
    discoveredBy: 'James Chadwick (1932) · Nobel Prize 1935',
    formula: 'n → p + e⁻ + ν̄<sub>e</sub>',
    whatItSays: `neutron は proton より 1.293 MeV/c² だけわずかに重い。Energy 単位では：mnc² = 939.565 MeV。この小さいが決定的な mass 差は、自由 neutron が不安定で beta 崩壊することを意味する。`,
    simpleExample: `自由 neutron は ~10分で崩壊する（半減期 613.9秒）。放出される energy は 1.293 MeV の mass 差だ。核内では neutron は核結合 energy によって安定化され崩壊しない。`,
    deepMeaning: `neutron が proton より electron の mass 以上軽ければ、自由 proton は neutron と positron に崩壊する——hydrogen 原子は不安定となり、すべての化学が根本的に変わる。mass 差は Big Bang 元素合成中に凍結した neutron 対 proton の比（n/p ≈ 1/7）を決定し、hydrogen（75%）と helium（25%）の宇宙的存在比を設定した。`,
    whyItMatters: `核の安定性・beta 崩壊・元素の宇宙的存在比を支配する。neutron mass 差は hydrogen の存在、したがって生命の存在にとって宇宙論的に不可欠だ。`
  },

  {
    symbol: 'μ<sub>n</sub>',
    name: 'Neutron 磁気モーメント',
    value: '−9.662 × 10<sup>−27</sup>',
    unit: 'J/T',
    exact: '−9.6623653 × 10⁻²⁷ J/T',
    category: '核定数',
    description: '電荷ゼロなのに負の磁気モーメント——内部クォークの証拠。',
    discoveredBy: 'Stern & Estermann (1933)',
    formula: 'μ<sub>n</sub> = −1.913 μ<sub>N</sub>',
    whatItSays: `neutron は正味の electric charge がまったくゼロであるにもかかわらず、負の磁気モーメント（−1.913 核 magneton）を持つ。`,
    simpleExample: `構造のない中性粒子は磁気モーメントを持つべきではない。neutron が magnetic field に反応するという事実は、打ち消し合いきれない charged な構成要素が内部に存在することを示す決定的証拠だ。`,
    deepMeaning: `磁気モーメントには charge または spin 分布が必要だ。neutron の負の磁気モーメントはその内部クォーク構造から生じる：常に量子運動をしている2つの down クォーク（各 charge −e/3）と1つの up クォーク（charge +2e/3）。回転する charged クォークの空間分布が正味の負の磁気モーメントを生み出す。`,
    whyItMatters: `核物理学において最も衝撃的な結果の一つ。neutron の電気双極子モーメント（EDM）の現在の限界は CP 対称性を試験し、宇宙の物質・反物質非対称性を説明するために使われる。`
  },

  // ── 第6部: Muon & Tau 定数 ───────────────────────────────────────────────

  {
    symbol: 'm<sub>μ</sub>',
    name: 'Muon Mass',
    value: '1.884 × 10<sup>−28</sup>',
    unit: 'kg',
    exact: '1.883531627 × 10⁻²⁸ kg (105.658 MeV/c²)',
    category: '粒子定数',
    description: 'electron の重い複製——「誰がそれを注文した？」',
    discoveredBy: 'Anderson & Neddermeyer (1936)',
    formula: 'm<sub>μ</sub> = 206.768 × m<sub>e</sub>',
    whatItSays: `muon は electron より 206.768倍重い。同じ charge を持ち、すべての非重力的側面で同一に相互作用する——まるで自然が electron の2番目の重いコピーを作ったかのようだ。`,
    simpleExample: `宇宙線 muon は高度 15 km で作られ ~0.99c で移動する。古典的には崩壊前に地表に届かないはずだ（2.2 μs の寿命 → わずか 650 m の移動）。しかし相対論的な時間遅延（γ ≈ 7）が寿命を ~15 μs に延ばすため、大量に届く。`,
    deepMeaning: `muon はいかなる単純な理論的描像にも収まらない。その存在は単に自然の事実だ。崩壊は：μ⁻ → e⁻ + ν̄e + νμ。mu 原子（μ⁻ が e⁻ の代わりとなる）は ~207倍核に近く周回するため核構造に極めて敏感だ。muon の異常磁気モーメント（g-2）は現在 ~4σ の理論との乖離を示している。`,
    whyItMatters: `muon の異常磁気モーメントは標準模型を超えた物理学の先進的な実験的兆候だ。muon は火山内部の画像化や密輸された核物質の検出に使われる。`
  },

  {
    symbol: 'a<sub>μ</sub>',
    name: 'Muon 異常磁気モーメント',
    value: '0.0011659',
    unit: '無次元',
    exact: '0.00116592059',
    category: '粒子定数',
    description: '標準模型を超えた物理学の有力な実験的兆候。',
    discoveredBy: 'Fermilab Muon g-2 実験',
    formula: 'a<sub>μ</sub> = (g<sub>μ</sub> − 2)/2',
    whatItSays: `electron と同様、muon は異常磁気モーメントを持つ。ae = (ge − 2)/2 = 0.001 165 920 59。g = 2 という Dirac 予測からの偏差を測る。`,
    simpleExample: `electron と異なり、muon は重い粒子からの仮想的な寄与に敏感だ。量子補正は (mμ/M)² でスケールし、M は仮想粒子の mass だからだ。`,
    deepMeaning: `理論と実験の乖離はおよそ 4.2 標準偏差——決定的な発見の 5σ 閾値に非常に近い。確認されれば、これは標準模型を超えた物理学の最初の明確な証拠となる——超対称性粒子や余剰次元の可能性もある。解決は lattice QCD 計算にかかっている。`,
    whyItMatters: `素粒子物理学で最も注目される話題の一つ。確認されれば、私たちの素粒子世界の理解の根本的な書き換えを要求することになる。`
  },

  {
    symbol: 'm<sub>τ</sub>',
    name: 'Tau Lepton Mass',
    value: '3.168 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.16754 × 10⁻²⁷ kg (1776.86 MeV/c²)',
    category: '粒子定数',
    description: '最も重い charged lepton——electron の 3477倍の mass。',
    discoveredBy: 'Martin Perl et al. (1975) · Nobel Prize 1995',
    formula: 'm<sub>τ</sub>c<sup>2</sup> = 1776.86 MeV',
    whatItSays: `tau lepton は3番目にして最も重い charged lepton——electron の 3477倍、muon の 16.8倍の mass を持つ。`,
    simpleExample: `tau は非常に重い（1.78 GeV）ため、muon とは異なりハドロン——pion や kaon——へと崩壊できる。極めて短い寿命（~2.9 × 10⁻¹³秒）により崩壊前に ~87 μm しか移動せず、観測にはマイクロメートル精度が必要だ。`,
    deepMeaning: `tau は第3世代の charged lepton だ。なぜ lepton の世代がちょうど3つあるのか、そしてなぜそれらがこれほど異なる mass を持つのかは、標準模型における最も深い謎の一つだ。mass の階層（0.511 MeV → 105.7 MeV → 1776.9 MeV）に理論的説明はない。tau neutrino が直接検出されたのは 2000年のことだ。`,
    whyItMatters: `lepton の3世代の存在は自然の深い謎だ。tau とその neutrino は標準模型を一貫した理論として確立するために決定的だった。`
  },

  // ── 第7部: 物理化学定数 ─────────────────────────────────────────────────

  {
    symbol: 'R',
    name: 'Molar Gas Constant',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: '熱力学定数',
    description: 'R = NA × k——熱力学と化学の主力定数。',
    discoveredBy: '諸研究（19世紀）',
    formula: 'PV = nRT',
    whatItSays: `R は Boltzmann constant をモルレベルにスケールしたものだ。理想気体法則 PV = nRT は Boyle の法則・Charles の法則・Avogadro の法則を1つの方程式に統合する。`,
    simpleExample: `気体中の音速：v = √(γRT/M)。空気（M = 0.029 kg/mol, γ = 1.4）の 20°C における音速は v ≈ 343 m/s。音速が根本的に R と温度によって決まることを示している。`,
    deepMeaning: `理想気体のモル熱容量は R の単純な倍数だ：一原子では Cv = (3/2)R、二原子では (5/2)R。統計力学において、理想気体の entropy（Sackur-Tetrode 方程式）は R を含む。R は混合 entropy・Clausius-Clapeyron 方程式・浸透圧の van't Hoff 方程式・電極電位の Nernst 方程式に現れる。`,
    whyItMatters: `熱力学の普遍定数。すべての気体の法則・すべての熱力学計算・すべての大気モデル・すべての化学反応のエネルギー計算が R を用いる。`
  },

  {
    symbol: 'σ',
    name: 'Stefan-Boltzmann Constant',
    value: '5.670 × 10<sup>−8</sup>',
    unit: 'W/(m²·K⁴)',
    exact: '5.670374419 × 10⁻⁸ W/(m²·K⁴)',
    category: '熱力学定数',
    description: '黒体が放射する power——P/A = σT⁴。',
    discoveredBy: 'Stefan (1879) · Boltzmann (1884)',
    formula: 'P/A = σT<sup>4</sup>',
    whatItSays: `完全黒体は単位面積あたり P/A = σT⁴ の電磁 power を放射する。σ はより基本的な定数から導出される：σ = 2π⁵k⁴/(15h³c²)。`,
    simpleExample: `太陽の表面温度 ~5778 K は power 出力 σ × T⁴ × (4πR_sun²) ≈ 3.83 × 10²⁶ W を与える。あなたの体（T ≈ 310 K）は σ × (310)⁴ × (1.7 m²) ≈ 520 W を放射する——そのおよそ半分は代謝熱によって補われる。`,
    deepMeaning: `T⁴ の依存性はすべての frequency にわたって Planck 黒体スペクトルを積分することから生じる。これは温度を2倍にすると放射 power が 2⁴ = 16倍になることを意味する。宇宙マイクロ波背景放射（CMB）——Big Bang の残光——は T = 2.725 K の完全黒体だ。地球の有効温度は太陽放射と σT⁴ 放出のバランスによって決まる。`,
    whyItMatters: `星の光度・地球の Energy バランスと気候・熱カメラ・光学式温度計・宇宙の温度構造を支配する。`
  },

  {
    symbol: 'b',
    name: 'Wien 変位定数',
    value: '2.898 × 10<sup>−3</sup>',
    unit: 'm·K',
    exact: '2.897771955 × 10⁻³ m·K',
    category: '熱力学定数',
    description: '黒体放射のピーク波長と温度を関係づける。',
    discoveredBy: 'Wilhelm Wien',
    formula: 'λ<sub>max</sub> × T = b',
    whatItSays: `Wien の変位法則は黒体放射のピーク波長と温度を結びつける：λ_max × T = b。物体が熱くなるほど、ピーク波長は短く（青く）なる。`,
    simpleExample: `太陽（T = 5778 K）は λ_max ≈ 502 nm——緑色光でピークとなる。人間の目はまさにこの範囲で最も感度が高くなるよう進化した。人体（T = 310 K）は主に λ_max ≈ 9.4 μm——中赤外線——で放射するため、熱カメラが機能する。`,
    deepMeaning: `ピーク frequency 版は f_max = b' × T を使い、b' = 5.879 × 10¹⁰ Hz/K。ピーク frequency は単純に c/λ_max に対応しないことに注意——波長分布と frequency 分布は異なる形状を持つからだ。歴史的に、放射定数の比は h と k を独立に測定するために使われた。`,
    whyItMatters: `熱画像・星の温度測定・気候科学・黒体放射の物理学に不可欠だ。`
  },

  // ── 第8部: 重力・電弱定数 ─────────────────────────────────────────────

  {
    symbol: 'G',
    name: '万有引力定数（Gravitational Constant）',
    value: '6.674 × 10<sup>−11</sup>',
    unit: 'N·m²/kg²',
    exact: '6.67430 × 10⁻¹¹ N·m²·kg⁻²',
    category: '普遍定数',
    description: '最も弱い力——最も精度が低い根本定数。',
    discoveredBy: 'Henry Cavendish (1798)',
    formula: 'G<sub>μν</sub> + Λg<sub>μν</sub> = (8πG/c<sup>4</sup>)T<sub>μν</sub>',
    whatItSays: `Newton の法則：F = Gm₁m₂/r²。一般相対性理論では G は物質が時空をどのように曲げるかを支配する Einstein の場の方程式に現れる。`,
    simpleExample: `1 m 離れた 2つの 1 kg の mass 間の重力：F = 6.674 × 10⁻¹¹ N——1個の bacterium の重量程度。proton 2つ間の電磁力は 10³⁶ 倍強い。これが原子スケールで重力が無関係な理由だ。`,
    deepMeaning: `G は最も精度が低い根本定数——わずか5桁の有効数字しか知られていない。重力は最も弱い力だからだ：実験室での測定は地震ノイズや残留力との戦いを意味する。8πG/c⁴ の因子は Energy 単位あたりの時空曲率を定量化する。Planck length lP = √(ħG/c³) ≈ 1.616 × 10⁻³⁵ m は量子重力が期待される場所——proton の 10²⁰ 倍小さい。`,
    whyItMatters: `投げられたボールから black hole・宇宙の大規模構造に至るすべての重力現象を支配する。量子重力の理論の欠如は物理学で最も深い未解決問題だ。`
  },

  {
    symbol: 'G<sub>F</sub>',
    name: 'Fermi Coupling Constant',
    value: '1.166 × 10<sup>−5</sup>',
    unit: 'GeV⁻²',
    exact: '1.1663787 × 10⁻⁵ GeV⁻²',
    category: '粒子定数',
    description: '弱い核力の coupling 強度——beta 崩壊を支配する。',
    discoveredBy: 'Enrico Fermi (1933)',
    formula: 'G<sub>F</sub>/√2 = g<sup>2</sup>/(8M<sub>W</sub><sup>2</sup>)',
    whatItSays: `GF は Fermi の4フェルミオン有効理論における弱い核力の coupling constant だ：n → p + e⁻ + ν̄e（beta 崩壊）。弱い相互作用の断面積は GF² に比例する。`,
    simpleExample: `弱い相互作用は非常に弱いため、neutrino は 50%の確率で止められるのに1光年の鉛を通り抜けられる。それでも太陽の energy に不可欠だ——pp 連鎖は弱い相互作用から始まる。`,
    deepMeaning: `e² と異なり、GF は energy⁻² の次元を持ち、Fermi の理論を繰り込み不可能にする。解決は電弱統一理論だった（Nobel 1979）：弱い力は大きな mass の W ボソンと Z ボソン（~80–91 GeV）によって媒介される。低 energy では W ボソンの交換が点相互作用のように見える。W の大きな mass が弱い相互作用を抑制し、beta 崩壊を基礎的な coupling が電磁気と同程度であるにもかかわらず遅くする。`,
    whyItMatters: `すべての beta 崩壊・neutrino 相互作用・電弱統一を支配する。弱い力は太陽の pp 連鎖を駆動し、星における重い元素の核合成に責任を持つ。`
  },

  {
    symbol: 'sin<sup>2</sup>θ<sub>W</sub>',
    name: 'Weak Mixing Angle',
    value: '0.2229',
    unit: '無次元',
    exact: '0.22290',
    category: '粒子定数',
    description: '電磁力と弱い力の混合を定量化する。',
    discoveredBy: 'Glashow, Weinberg, Salam',
    formula: 'cos θ<sub>W</sub> = M<sub>W</sub>/M<sub>Z</sub>',
    whatItSays: `Weak mixing angle θW（Weinberg angle）は電弱統一における photon と Z boson の混合を定量化する。e = g sin θW = g' cos θW の関係がある。`,
    simpleExample: `sin²θW ≈ 0.231 の値は粒子加速器（LHC）と原子パリティ違反実験で並外れた精度で測定される。`,
    deepMeaning: `電弱統一において、photon と Z boson は2つの基礎的な gauge boson（W⁰ と B）の混合だ。sin²θW の energy とともの「走り」は標準模型によって精密に予測され、電弱輻射補正を確認するために測定される——理論の厳格な試験だ。`,
    whyItMatters: `電磁力と弱い核力の性質を結びつける標準模型の根本的なパラメータだ。`
  },

  // ── 第9部: 追加の原子・核定数 ────────────────────────────────────────────

  {
    symbol: 'κ',
    name: '循環量子',
    value: '3.637 × 10<sup>−4</sup>',
    unit: 'm²/s',
    exact: '3.6369475467 × 10⁻⁴ m² s⁻¹',
    category: '原子定数',
    description: 'electron の循環の基本単位——h/2me。',
    discoveredBy: 'Lars Onsager (1949)',
    formula: 'κ = h / (2m<sub>e</sub>)',
    whatItSays: `超流体 helium や超電導体のような量子流体の循環は h/m の単位で量子化される。超電導体では、関連する粒子は mass 2me の Cooper pair だ。`,
    simpleExample: `超流体 helium-4 では、渦は h/m_He の倍数で循環を持つ。回転する超流体 helium は量子化された渦の格子を発展させる——type-II 超電導体の Abrikosov 渦格子に類似している。`,
    deepMeaning: `循環の量子化は量子力学的波動関数の単一値性の直接的な帰結だ。超流体が回転する場合、巨視的波動関数の位相は任意の閉ループを一周して同じ値に戻らなければならない。これにより循環が量子化される：Γ = n × h/m。`,
    whyItMatters: `超流体と超電導体の挙動を説明する。循環量子は Aharonov-Bohm 効果にも現れ、quantum phase を magnetic flux に結びつける。`
  },

  {
    symbol: 'σ<sub>T</sub>',
    name: 'Thomson 断面積',
    value: '6.652 × 10<sup>−29</sup>',
    unit: 'm²',
    exact: '6.6524587051 × 10⁻²⁹ m²',
    category: '原子定数',
    description: '入射 photon に対して自由 electron が提示する有効面積。',
    discoveredBy: 'J.J. Thomson',
    formula: 'σ<sub>T</sub> = (8π/3)r<sub>e</sub><sup>2</sup>',
    whatItSays: `低 energy photon（photon energy ≪ mec²）が自由 electron から散乱するとき、total 散乱断面積は σT = (8π/3) × re² となる（re は古典 electron 半径）。`,
    simpleExample: `electron が photon に対して「標的面積」σT を提示するイメージだ。photon を electron の箱に向けて発射すると、散乱前の平均自由行程は λ = 1/(nσT) となる。`,
    deepMeaning: `Thomson 断面積はより一般的な Compton 散乱公式の弾性散乱極限だ。photon energy Eγ ≪ 0.511 MeV のとき electron の反跳は無視でき散乱は純粋に古典的となる。星の内部では radiation pressure は photon-electron Thomson 散乱によって伝達される。Eddington 光度——星が radiation pressure が重力を上回る前に持てる最大光度——は σT に依存する。`,
    whyItMatters: `Thomson 散乱は空が青い理由（低 frequency 側）と日食中に太陽コロナが見える理由を説明する。宇宙マイクロ波背景放射（CMB）は宇宙が electron と proton が結合するほど冷却されたときに生じた——それ以前は Thomson 散乱のため宇宙は不透明だった。`
  },

  {
    symbol: 'm<sub>e</sub>/m<sub>p</sub>',
    name: 'Electron-Proton Mass 比',
    value: '5.446 × 10<sup>−4</sup>',
    unit: '無次元',
    exact: '5.44617021487 × 10⁻⁴',
    category: '原子定数',
    description: 'electron は proton より 1836.15倍軽い。',
    discoveredBy: '導出',
    formula: 'm<sub>e</sub>/m<sub>p</sub> ≈ 1 / 1836',
    whatItSays: `electron の mass と proton の mass の比。この比はおよそ 1/1836 だ。`,
    simpleExample: `me/mp ≪ 1 のため、electron は分子内の核より遥かに速く動く。これにより固定された核の位置で電子 Schrödinger 方程式を解くことができる——Born-Oppenheimer 近似だ。`,
    deepMeaning: `この比は化学 energy スケール（~eV）を核 energy スケール（~MeV）から分離する。この比は星の物理学でも重要だ：白色矮星の最大 mass である Chandrasekhar 限界は (mp/me) に直接依存する。遠い quasar の分子水素吸収スペクトルを通じて宇宙的時間変化が試験される。`,
    whyItMatters: `自然における最も重要な無次元数の一つ。原子構造・energy スケールの階層・星の安定性を支配する。`
  },

  {
    symbol: 'm<sub>n</sub>/m<sub>p</sub>',
    name: 'Neutron-Proton Mass 比',
    value: '1.00138',
    unit: '無次元',
    exact: '1.00137841931',
    category: '核定数',
    description: 'neutron は proton より 0.138% わずかに重い。',
    discoveredBy: '導出',
    formula: 'n/p = exp(−Δmc<sup>2</sup> / kT)',
    whatItSays: `neutron は proton より 0.138% の割合で重い。`,
    simpleExample: `この微小な mass 差（1.293 MeV/c²）は Big Bang のとき baryonic 物質のおよそ 25% が helium-4 になり、残りが hydrogen として残ることを決定した。`,
    deepMeaning: `初期宇宙において、neutron と proton の平衡比は Boltzmann 因子に従った。宇宙が冷却し弱い相互作用が「凍結」すると、n/p 比はおよそ 1/7 に固定された。もし mass 差がわずかに異なれば、恒星進化と化学は変わっていただろう。`,
    whyItMatters: `宇宙の helium 存在比 ~25% は Big Bang モデルの最大の確認の一つであり、すべてはこの定数のおかげだ。`
  },

  {
    symbol: 'm<sub>d</sub>',
    name: 'Deuteron Mass',
    value: '3.344 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '3.3435837768 × 10⁻²⁷ kg (1875.613 MeV/c²)',
    category: '核定数',
    description: '重水素の核——最も単純な核結合状態。',
    discoveredBy: 'Harold Urey (1931) · Nobel Prize 1934',
    formula: 'B<sub>d</sub> = (m<sub>p</sub> + m<sub>n</sub> − m<sub>d</sub>)c<sup>2</sup>',
    whatItSays: `deuteron は deuterium（proton 1個と neutron 1個）の核だ。その結合 energy は 2.224 MeV。`,
    simpleExample: `結合 energy は驚くほど小さい（比較：helium-4：28.3 MeV）。この脆さが Big Bang において重い元素の形成を遅らせる「deuterium ボトルネック」を生み出した。`,
    deepMeaning: `deuteron は最も単純な核結合状態——hydrogen 原子に類似している。非ゼロの四重極モーメントは核力が pion 交換から生じる tensor 成分を持つことを証明する。太陽における fusion の最初のステップ（p + p → d + e⁺ + νe）は非常に遅い——太陽の長寿命はこのボトルネックによる。`,
    whyItMatters: `核力理論の根本的な試験床。Deuterium は原子炉の neutron 減速材として、また薬学研究に使われる。`
  },

  {
    symbol: 'm<sub>α</sub>',
    name: 'Alpha 粒子 Mass',
    value: '6.645 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '6.6446573357 × 10⁻²⁷ kg (3727.379 MeV/c²)',
    category: '核定数',
    description: 'Helium-4 核——28.3 MeV の結合 energy を持つ非常に安定な粒子。',
    discoveredBy: 'Ernest Rutherford (1899)',
    formula: 'B(He-4) = 28.296 MeV',
    whatItSays: `alpha 粒子は helium-4 の核だ。核子あたりの結合 energy は 7.074 MeV——結合 energy 曲線のピーク近くにある。`,
    simpleExample: `Alpha 崩壊の半減期は 20桁にわたる範囲をカバーする（0.3 μs から 140億年まで）。どちらも Gamow の量子トンネル理論で説明される。`,
    deepMeaning: `alpha 粒子の例外的な安定性がなぜ放射性崩壊において優先的に放出されるかの理由だ。spin ゼロ・磁気モーメントゼロ——完全に閉殻した核だ。triple-alpha 過程（3α → ¹²C）は carbon-12 に 7.65 MeV（Hoyle 状態）の共鳴を必要とする。この共鳴がなければ carbon は存在しない。`,
    whyItMatters: `ほとんどの重核崩壊の生成物。triple-alpha 過程は宇宙のすべての carbon の源。癌の標的 alpha 線治療に使われる。`
  },

  {
    symbol: 'm<sub>u</sub>',
    name: '原子 Mass 定数',
    value: '1.661 × 10<sup>−27</sup>',
    unit: 'kg',
    exact: '1.66053906892 × 10⁻²⁷ kg (931.494 MeV/c²)',
    category: '熱力学定数',
    description: 'carbon-12 の mass の 1/12——原子 mass の自然単位。',
    discoveredBy: '国際標準（1961）',
    formula: '1 u × c<sup>2</sup> = 931.494 MeV',
    whatItSays: `原子 mass 単位（u、またはダルトン、Da）は carbon-12 原子1個の mass の 1/12 として定義される。`,
    simpleExample: `Carbon-12 = 12 u 厳密。Hydrogen = 1.0078 u。50 kDa の蛋白質の mass は 50,000 × 1.661 × 10⁻²⁷ kg だ。`,
    deepMeaning: `変換 1 u = 931.494 MeV/c² は核物理学で最も有用なものの一つだ。ミリ原子 mass 単位の核 mass 差は MeV スケールの energy を放出する。carbon-12 の選択は 1961年の物理と化学コミュニティ間の妥協だった。`,
    whyItMatters: `核物理学・質量分析・蛋白質 mass をダルトンで表す生化学のすべての基盤だ。`
  },

  {
    symbol: 'R',
    name: 'Molar Gas Constant',
    value: '8.314',
    unit: 'J/(mol·K)',
    exact: '8.314462618 J/(mol·K)',
    category: '熱力学定数',
    description: 'R = NA × k——熱力学と化学の主力定数。',
    discoveredBy: '諸研究（19世紀）',
    formula: 'PV = nRT',
    whatItSays: `R は Boltzmann constant をモルレベルにスケールしたものだ。理想気体法則 PV = nRT は Boyle の法則・Charles の法則・Avogadro の法則を1つの方程式に統合する。`,
    simpleExample: `気体中の音速は v = √(γRT/M) で与えられる。空気（M = 0.029 kg/mol, γ = 1.4）における 20°C での音速は v ≈ 343 m/s であり、音速が根本的に R と温度によって決まることを示している。`,
    deepMeaning: `理想気体のモル熱容量は R の単純な倍数：一原子では Cv = (3/2)R、二原子では (5/2)R。理想気体の entropy（Sackur-Tetrode 方程式）は R を含む。混合 entropy・Clausius-Clapeyron 方程式・浸透圧の van't Hoff 方程式・電極電位の Nernst 方程式に現れる。`,
    whyItMatters: `熱力学の普遍定数。すべての気体法則・すべての熱力学計算・すべての大気モデル・すべての化学反応 energy 計算に使われる。`
  },

  {
    symbol: 'V<sub>m</sub>',
    name: '理想気体のモル体積（STP）',
    value: '22.414 × 10<sup>−3</sup>',
    unit: 'm³/mol',
    exact: '22.41396954 × 10⁻³ m³/mol',
    category: '熱力学定数',
    description: 'STP における理想気体 1モルが占める体積。',
    discoveredBy: 'Amedeo Avogadro (1811)',
    formula: 'V = nRT / P',
    whatItSays: `0°C・101,325 Pa において、任意の理想気体 1モルは 22.413... リットルを占める。`,
    simpleExample: `STP における hydrogen 1リットルと oxygen 1リットルは正確に同じ数の分子（2.688 × 10²²）を含む。`,
    deepMeaning: `理想気体法則から：V = nRT/P。この「モル体積」は気体量と体積の間の迅速な変換を可能にする。すべての理想気体が STP で同じモル体積を持つという事実は Avogadro による革命的な洞察だった。`,
    whyItMatters: `気体の化学量論において最も実用的な数値のひとつである。`
  },

  {
    symbol: 'n<sub>0</sub>',
    name: 'Loschmidt Constant',
    value: '2.687 × 10<sup>25</sup>',
    unit: 'm⁻³',
    exact: '2.686780111 × 10²⁵ m⁻³',
    category: '熱力学定数',
    description: 'STP における理想気体 1立方メートル中の分子数。',
    discoveredBy: 'Johann Josef Loschmidt (1865)',
    formula: 'n<sub>0</sub> = N<sub>A</sub> / V<sub>m</sub>',
    whatItSays: `海面での空気分子の数はおよそ 1立方メートルあたり 2.687 × 10²⁵ 個だ。`,
    simpleExample: `STP での空気分子の平均自由行程はおよそ 66 nm。衝突 frequency は ~10¹⁰ 毎秒。`,
    deepMeaning: `Loschmidt は 1865年に気体 viscosity と分子直径を使ってこれを推定した。巨視的体積中の分子についての最初の真剣な推定であり、原子が確定したサイズを持つことの最初の直接証拠だった。Rayleigh 散乱（空が青い理由）は n₀ に比例する。`,
    whyItMatters: `大気物理学と原子理論の歴史において不可欠な定数である。`
  },

  {
    symbol: 'c<sub>1</sub>',
    name: '第1放射定数',
    value: '3.742 × 10<sup>−16</sup>',
    unit: 'W·m²',
    exact: '3.741771852 × 10⁻¹⁶ W·m²',
    category: '熱力学定数',
    description: '黒体放射強度の全体的なスケールを設定する——2πhc²。',
    discoveredBy: 'Max Planck (1900)',
    formula: 'B<sub>λ</sub>(T) = c<sub>1</sub> / (πλ<sup>5</sup>(e<sup>c₂/λT</sup>−1))',
    whatItSays: `Planck の黒体放射則の spectral radiance に現れる。`,
    simpleExample: `太陽は ~502 nm（緑）でピークとなる。太陽電池はこの Planck スペクトルに合致するよう設計されており、c₁ を用いて精密に計算される。`,
    deepMeaning: `Planck 放射法則は 1900年に量子力学を始動させた。Planck の量子仮説は高 frequency の発散（紫外破綻）を抑制する指数因子を導入した。`,
    whyItMatters: `天体物理学・太陽 energy・宇宙論に不可欠だ。`
  },

  {
    symbol: 'c<sub>2</sub>',
    name: '第2放射定数',
    value: '1.439 × 10<sup>−2</sup>',
    unit: 'm·K',
    exact: '1.438776877 × 10⁻² m·K',
    category: '熱力学定数',
    description: 'Planck 関数における波長と温度を結びつける——hc/k。',
    discoveredBy: 'Max Planck (1900)',
    formula: 'c<sub>2</sub> = hc / k<sub>B</sub>',
    whatItSays: `Planck 関数の指数に現れる。量子と古典の境界領域を設定する。`,
    simpleExample: `Wien の変位法則（λ_max × T = b）は c₂ から導出される。310 K の体は中赤外線でピークとなるため、熱カメラが人を検出できる。`,
    deepMeaning: `歴史的に c₁/c₂ の比が Boltzmann constant を測定するために使われた。室温では、中赤外線放射に対して量子補正が重要になる。`,
    whyItMatters: `気候科学・熱画像・星の物理学に不可欠だ。`
  },

  {
    symbol: 'g',
    name: '重力加速度の標準値',
    value: '9.807',
    unit: 'm/s²',
    exact: '9.80665 m/s²（厳密値）',
    category: '普遍定数',
    description: '地球表面における重力加速度の標準値。',
    discoveredBy: '国際度量衡局（1901）',
    formula: 'W = mg',
    whatItSays: `重力加速度の規定された慣例的標準値だ。`,
    simpleExample: `実際の重力は赤道で ~9.780 m/s² から極で ~9.832 m/s² まで変化する。標準値は北緯 45度での測定値に合致するよう選ばれた。`,
    deepMeaning: `mass と force の変換係数（キログラム重）として現れる。重力計は地球の潮汐変形や地下水変化を検出するために重力を9桁の精度で測定する。等価原理（一般相対性理論）はこれが平坦時空の加速度と区別できないことを述べる。`,
    whyItMatters: `工学・気圧の定義・精密計量の基準値だ。`
  },

  // ── 第10部: 原子単位系 ─────────────────────────────────────────────────

  {
    symbol: 'a<sub>0</sub>',
    name: '原子単位の Length（Bohr Radius）',
    value: '5.292 × 10<sup>−11</sup>',
    unit: 'm',
    exact: '5.29177210544 × 10⁻¹¹ m',
    category: '原子定数',
    description: '原子単位における Length の単位——Bohr Radius。',
    discoveredBy: 'Niels Bohr (1913)',
    formula: '1 a.u. = a<sub>0</sub>',
    whatItSays: `原子単位系における Length の単位。すべての結合長は Bohr で表される。`,
    simpleExample: `典型的な結合長：H-H = 1.40 a₀, C-C = 2.92 a₀。`,
    deepMeaning: `原子単位では ħ = me = e = 4πε₀ = 1 となる。これにより量子化学の方程式が大幅に簡略化される。`,
    whyItMatters: `計算化学における標準単位である。`
  },

  {
    symbol: 'm<sub>e</sub>',
    name: '原子単位の Mass',
    value: '9.109 × 10<sup>−31</sup>',
    unit: 'kg',
    exact: '9.1093837139 × 10⁻³¹ kg',
    category: '原子定数',
    description: '原子単位における Mass の単位——electron の mass。',
    discoveredBy: 'J.J. Thomson (1897)',
    formula: '1 a.u. = m<sub>e</sub>',
    whatItSays: `原子単位系における Mass の単位。`,
    simpleExample: `量子化学では、すべての質量は me の倍数として表される。`,
    deepMeaning: `Schrödinger 方程式を簡略化するために根本定数を1に設定する系の一部であり、量子化学の計算基盤を構成する。`,
    whyItMatters: `すべての電子構造計算の基準となる質量単位である。`
  },

  {
    symbol: 't<sub>au</sub>',
    name: '原子単位の Time',
    value: '2.419 × 10<sup>−17</sup>',
    unit: 's',
    exact: '2.4188843265864 × 10⁻¹⁷ s',
    category: '原子定数',
    description: '原子内の electronic 運動の自然な時間スケール。',
    discoveredBy: '導出',
    formula: '1 a.u. = ħ / E<sub>h</sub>',
    whatItSays: `Hartree energy スケールでの位相が1ラジアン進化する time。`,
    simpleExample: `hydrogen 基底状態における electron の軌道周期は 2π 原子時間単位、すなわちおよそ 152 アト秒に相当する。`,
    deepMeaning: `アト秒物理学はこのタイムスケールで electron 動力学をリアルタイムに研究する。Nobel Prize 2023 はアト秒パルス技術に授与された。`,
    whyItMatters: `原子内の electron の動きの直接観測を可能にする。`
  },

  {
    symbol: 'E<sub>h</sub>',
    name: '原子単位の Energy（Hartree Energy）',
    value: '4.360 × 10<sup>−18</sup>',
    unit: 'J',
    exact: '4.359744722 × 10⁻¹⁸ J',
    category: '原子定数',
    description: '原子単位における Energy の単位——Hartree Energy。',
    discoveredBy: 'Douglas Hartree (1928)',
    formula: '1 a.u. = E<sub>h</sub>',
    whatItSays: `原子物理学における Energy の単位。`,
    simpleExample: `Hartree 単位での化学結合エネルギーを例に挙げると、H₂ の結合は 0.174 Eh に相当する。`,
    deepMeaning: `すべての電子構造計算の根本的な Energy スケールを設定する。`,
    whyItMatters: `DFT などの計算コードにおける標準的なエネルギー単位である。`
  },

  {
    symbol: 'v<sub>au</sub>',
    name: '原子単位の Velocity',
    value: '2.188 × 10<sup>6</sup>',
    unit: 'm/s',
    exact: '2.18769126364 × 10⁶ m/s',
    category: '原子定数',
    description: 'hydrogen の基底状態における electron の Velocity。',
    discoveredBy: '導出',
    formula: '1 a.u. = αc',
    whatItSays: `α × c——Bohr モデルにおける electron の velocity だ。`,
    simpleExample: `gold（Z=79）では 1s electron の velocity は ~0.58c に達し、相対論的収縮が gold の黄色を生み出す。`,
    deepMeaning: `より重い原子では c に近づく velocity は相対論的補正を必要とする。`,
    whyItMatters: `化学において相対論的効果がいつ重要になるかを判断するための基準速度である。`
  },

  {
    symbol: 'p<sub>au</sub>',
    name: '原子単位の Momentum',
    value: '1.993 × 10<sup>−24</sup>',
    unit: 'kg·m/s',
    exact: '1.992851914 × 10⁻²⁴ kg·m/s',
    category: '原子定数',
    description: 'hydrogen における momentum 不確かさの自然スケール。',
    discoveredBy: '導出',
    formula: '1 a.u. = ħ / a<sub>0</sub>',
    whatItSays: `p = me × (原子単位の velocity) = ħ/a₀。`,
    simpleExample: `不確定性原理により、a₀ 内に局在する electron の momentum 不確かさは正確に1原子単位だ。`,
    deepMeaning: `原子の length スケールを周回 electron の momentum に直接結びつける。`,
    whyItMatters: `electron 回折と量子化学散乱を支配する根本的な運動量スケールである。`
  },

  {
    symbol: 'F<sub>au</sub>',
    name: '原子単位の Force',
    value: '8.239 × 10<sup>−8</sup>',
    unit: 'N',
    exact: '8.238723498 × 10⁻⁸ N',
    category: '原子定数',
    description: 'Bohr Radius における electron と proton 間の静電 force。',
    discoveredBy: '導出',
    formula: '1 a.u. = E<sub>h</sub> / a<sub>0</sub>',
    whatItSays: `F = e² / (4πε₀a₀²)。原子スケールでは巨大（82 nN）だが人間には感知できない。`,
    simpleExample: `原子の安定性は、この力と量子的な圧力（不確定性原理に由来する）との絶妙な均衡によって成り立っている。`,
    deepMeaning: `原子を結合させる「接着剤」の強さのスケールを設定する。`,
    whyItMatters: `原子結合と材料強度を支配する根本的なスケールである。`
  },

  {
    symbol: 'E<sub>au</sub>',
    name: '原子単位の Electric Field',
    value: '5.142 × 10<sup>11</sup>',
    unit: 'V/m',
    exact: '5.142206747 × 10¹¹ V/m',
    category: '原子定数',
    description: 'hydrogen における electron が経験する非常に強烈な field。',
    discoveredBy: '導出',
    formula: '1 a.u. = E<sub>h</sub> / (ea<sub>0</sub>)',
    whatItSays: `Bohr Radius での electric field（514 GV/m）。`,
    simpleExample: `原子内の電場は、空気の絶縁破壊電場より約 100,000 倍も強い。これが通常の環境では実現できないスケールである。`,
    deepMeaning: `~10¹⁴ W/cm² 以上の強度では、laser field は原子から electron を引きはがすほど強く、アト秒パルスを生成する。`,
    whyItMatters: `強電場レーザー物理学と電場イオン化の基準となる定数である。`
  },

  {
    symbol: 'B<sub>au</sub>',
    name: '原子単位の Magnetic Flux Density',
    value: '2.351 × 10<sup>5</sup>',
    unit: 'T',
    exact: '2.350517570 × 10⁵ T',
    category: '原子定数',
    description: '1原子単位に対応する magnetic field 強度。',
    discoveredBy: '導出',
    formula: '1 a.u. = ħ / (ea<sub>0</sub><sup>2</sup>)',
    whatItSays: `235,000 テスラ——実験室の最強磁石（~45 T）より遥かに強い。`,
    simpleExample: `中性子星の magnetic field は ~10⁸-10¹¹ テスラに達し、原子単位を超える。`,
    deepMeaning: `このスケールでは、photon 伝播に対する QED 効果（真空複屈折）が重要になる。`,
    whyItMatters: `白色矮星と magnetar の理解において重要な定数である。`
  },

  {
    symbol: 'χ<sub>au</sub>',
    name: '原子単位の Magnetizability',
    value: '7.891 × 10<sup>−29</sup>',
    unit: 'J/T²',
    exact: '7.8910366008 × 10⁻²⁹ J T⁻²',
    category: '原子定数',
    description: 'magnetic field に対する原子の energy の2次応答。',
    discoveredBy: '導出',
    formula: '1 a.u.',
    whatItSays: `NMR chemical shift と磁気 force 測定で測られる。`,
    simpleExample: `MRI スケールの magnetic field に対して分子がどのように応答するかを計算する際に用いられる量だ。`,
    deepMeaning: `量子レベルでの分子磁気感受率の研究における根本的な量だ。`,
    whyItMatters: `NMR 分光学と量子化学シミュレーションに用いられる定数である。`
  }
];
