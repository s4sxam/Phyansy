// =============================================================================
// bioFacts.js — Biology God File (All 53 Chapters | 260 Facts | Never Forget Format)
// Format: Hook → Term → Mechanism → Kicker
// Covers: MCQ / SAQ / 5-mark exam answers
// =============================================================================

export const BIO_FACTS = [

  // ============================================================
  // UNIT 1: CHEMISTRY OF LIFE (Ch 1–5) | ~25 Facts
  // ============================================================

  // ── Chapter 1: Introduction to Biology & Scientific Method ──
  {
    emoji: '🔬', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'Science Doesn\'t Prove Things. It Disproves Them.',
    text: 'Every student says science "proves" facts. It doesn\'t. This is called the principle of **falsifiability**, coined by philosopher Karl Popper. A scientific hypothesis must be testable and capable of being proven wrong. If it can\'t be falsified, it\'s not science — it\'s belief. Every theory in biology — evolution, cell theory, germ theory — survived because nobody could kill it. Not because anyone proved it absolutely true. Science is the art of failing to disprove something enough times that you start trusting it.',
  },
  {
    emoji: '🧪', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'The Control Group is the Unsung Hero of Every Experiment.',
    text: 'Students remember the experimental group. They forget the control. A **control group** receives no treatment — it\'s the baseline against which all results are measured. Without it, you can\'t know if your results are due to your variable or just random chance. The most famous failed control: early cancer drug trials that showed "improvement" — until someone added a control group and found patients improved at the same rate without the drug. The control group has saved more lives than the experimental group ever will.',
  },
  {
    emoji: '🌍', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'Biology Has One Unifying Theory. Just One. And It Explains Everything.',
    text: 'Physics has relativity and quantum mechanics. Chemistry has atomic theory. Biology\'s single unifying framework is **the theory of evolution by natural selection**. Every biological phenomenon — why bacteria become antibiotic resistant, why your immune system works, why whales have finger bones in their flippers — is explained by evolution. Theodosius Dobzhansky said it best in 1973: "Nothing in biology makes sense except in the light of evolution." One idea. Explains all of life. That\'s the most powerful theory in science.',
  },
  {
    emoji: '📊', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'Correlation is Not Causation. Biology\'s Most Abused Mistake.',
    text: 'Ice cream sales and drowning rates both spike in summer. That doesn\'t mean ice cream causes drowning. This is **correlation vs causation** — one of the most critical distinctions in biological research. Many early health studies found correlations that turned out to be meaningless once confounding variables were controlled. The only way to establish causation in biology is through controlled experiments or rigorous epidemiological methods. Every time you read "linked to" in a health headline — that\'s correlation. Not cause.',
  },
  {
    emoji: '🔁', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'Peer Review is Biology\'s Built-In Lie Detector.',
    text: 'Before any scientific finding is published, it goes through **peer review** — evaluation by independent experts in the same field who check the methodology, data, and conclusions. It\'s not perfect — bad papers slip through — but it\'s the best quality filter science has. The 1998 paper that falsely linked vaccines to autism passed peer review in The Lancet. It took 12 years, an investigation, and retraction to undo. Peer review is the system. The system isn\'t infallible. But it\'s the only one we have.',
  },

  // ── Chapter 2: Atoms, Molecules & Chemical Bonds ──
  {
    emoji: '⚛️', cat: 'bio_ch2', catLabel: 'Ch 2 – Atoms & Chemical Bonds',
    title: 'You Are Made of Dead Stars. Literally.',
    text: 'Every atom heavier than hydrogen in your body — carbon, oxygen, nitrogen, calcium — was forged inside a star that exploded before our solar system formed. This process is called **stellar nucleosynthesis**. Stars fuse lighter atoms into heavier ones during their lifetimes. When they explode as supernovae, they scatter those atoms across space. Those atoms eventually formed Earth — and you. The iron in your blood was made in a stellar explosion billions of years ago. You are not on Earth. You are Earth. Rearranged.',
  },
  {
    emoji: '🔗', cat: 'bio_ch2', catLabel: 'Ch 2 – Atoms & Chemical Bonds',
    title: 'Covalent Bonds Are Biology\'s Superglue. And They Work by Sharing.',
    text: 'The strongest bonds in biological molecules are **covalent bonds** — formed when two atoms share electrons. Carbon forms four covalent bonds simultaneously, which is why it can build the enormous, complex molecules life requires — DNA, proteins, fats, sugars. A single covalent bond requires ~350 kJ/mol to break. For comparison, your body temperature provides nowhere near that energy. This is why organic molecules are stable at body temperature. Life exists because carbon shares willingly and holds on tight.',
  },
  {
    emoji: '🧲', cat: 'bio_ch2', catLabel: 'Ch 2 – Atoms & Chemical Bonds',
    title: 'Hydrogen Bonds Are Weak Individually. Together They Hold Life Together.',
    text: 'A single **hydrogen bond** is 20 times weaker than a covalent bond. And yet — the double helix of DNA is held together entirely by hydrogen bonds between base pairs. Proteins fold into precise 3D shapes because of hydrogen bonds. Water\'s surface tension, which allows insects to walk on it, comes from hydrogen bonds. Weak individually. Thousands of them acting together create structures strong enough to encode all of life\'s information. Strength through numbers is evolution\'s favourite trick.',
  },

  // ── Chapter 3: Water & Life ──
  {
    emoji: '💧', cat: 'bio_ch3', catLabel: 'Ch 3 – Water & Life',
    title: 'Water is the Only Molecule That Expands When It Freezes. That Accident Saved All Life.',
    text: 'Every other liquid contracts when it solidifies. Water expands because of **hydrogen bonding** — water molecules form a crystalline lattice in ice that spaces them further apart than in liquid form. This means ice is less dense than water and floats. Which means lakes freeze from the top down, not the bottom up. The ice layer insulates the liquid water below. Fish, bacteria, and entire ecosystems survived every ice age because of this one molecular quirk. One weird property. Saved all aquatic life on Earth.',
  },
  {
    emoji: '🌡️', cat: 'bio_ch3', catLabel: 'Ch 3 – Water & Life',
    title: 'Water Resists Temperature Change Better Than Almost Any Other Substance.',
    text: 'Water has an exceptionally high **specific heat capacity** — 4.18 J/g°C. It takes more energy to raise water\'s temperature than almost any other liquid. This is why oceans moderate Earth\'s climate — they absorb enormous heat without changing temperature dramatically. It\'s also why your body stays at 37°C even in a cold room — your blood, which is mostly water, buffers temperature swings. Without water\'s specific heat, Earth\'s surface temperature would swing by 100°C between day and night. Life as we know it would be impossible.',
  },
  {
    emoji: '🫧', cat: 'bio_ch3', catLabel: 'Ch 3 – Water & Life',
    title: 'Water is Both an Acid and a Base at the Same Time.',
    text: 'Water undergoes **autoionisation** — it spontaneously splits into H⁺ and OH⁻ ions. This makes it simultaneously a proton donor (acid) and proton acceptor (base) — an **amphoteric** molecule. This property is essential for biological buffer systems that maintain blood pH between 7.35 and 7.45. A deviation of just 0.2 pH units causes coma. 0.4 units is fatal. Your blood stays alive because water can argue with itself about whether it\'s an acid or a base — and always finds a compromise.',
  },

  // ── Chapter 4: Carbon & Organic Molecules ──
  {
    emoji: '⚫', cat: 'bio_ch4', catLabel: 'Ch 4 – Carbon & Organic Molecules',
    title: 'Carbon is the Only Element That Can Build Molecules Big Enough to Store Life\'s Instructions.',
    text: 'Carbon\'s unique property is **tetravalence** — it forms four covalent bonds in any direction, creating chains, rings, and branched structures of virtually unlimited length and complexity. No other element can do this at life\'s temperatures and pressures. Silicon, directly below carbon on the periodic table, forms similar bonds but silicon-silicon bonds are weaker and silicon dioxide is a solid — not the flexible, soluble molecules life needs. The entire diversity of life — millions of species — is built from one element\'s ability to hold four hands at once.',
  },
  {
    emoji: '🔄', cat: 'bio_ch4', catLabel: 'Ch 4 – Carbon & Organic Molecules',
    title: 'Isomers Are Molecules With the Same Atoms But Completely Different Lives.',
    text: 'Glucose and fructose are both C₆H₁₂O₆ — identical atoms, identical count. But arranged differently. These are called **structural isomers**. Your body treats them completely differently — different enzymes, different metabolic pathways, different health effects. Even more wild: **stereoisomers** are mirror images of each other. L-amino acids make up all proteins in life. D-amino acids are their mirror twins — found in bacterial cell walls. Your body can use one form and not the other. Biology is so precise it can tell left from right at the molecular level.',
  },

  // ── Chapter 5: Macromolecules ──
  {
    emoji: '🧱', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'All Four Macromolecules Are Built the Same Way. One Reaction. Repeated Endlessly.',
    text: 'Carbohydrates, proteins, lipids, and nucleic acids — all four are polymers built by the same reaction: **dehydration synthesis** (also called condensation reaction). Two monomers join, releasing a water molecule. Repeat ten thousand times and you get a protein. Repeat three billion times and you get DNA. The reverse — breaking them down — is **hydrolysis**: adding water back. Your entire digestive system is one giant hydrolysis machine. Life built infinite complexity from one repeating chemical trick.',
  },
  {
    emoji: '🥩', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'Proteins Are the Only Macromolecule That Can Do Almost Everything.',
    text: 'Carbohydrates store energy. Lipids store energy and make membranes. Nucleic acids store information. But **proteins** do everything else — catalyse reactions (enzymes), carry molecules (haemoglobin), fight pathogens (antibodies), receive signals (receptors), provide structure (collagen, keratin), regulate genes (transcription factors). A protein\'s function is entirely determined by its **3D shape** — which is determined by its amino acid sequence — which is encoded in DNA. The most versatile molecules in the universe are built from just 20 amino acids.',
  },
  {
    emoji: '🧈', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'Saturated Fats Are Solid at Room Temperature. Unsaturated Fats Are Liquid. Your Membrane Knows Why.',
    text: '**Saturated fatty acids** have no double bonds — their carbon chains are straight and pack tightly together, making them solid (butter, lard). **Unsaturated fatty acids** have double bonds that create kinks — they can\'t pack tightly and stay liquid (olive oil). Your cell membranes are made of phospholipids. In cold environments, organisms increase unsaturated fats in their membranes to prevent them from solidifying. That\'s why fish in cold water have more unsaturated fats — their membranes need to stay fluid to function. Your cells adjust their own fat composition based on temperature. They\'re smarter than your diet.',
  },
  {
    emoji: '🧬', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'DNA Stores Information in an Alphabet of Just Four Letters. It\'s the Most Efficient Code Ever Written.',
    text: 'The entire instruction manual for building and running a human being is written in **nucleotides** — just four types: Adenine, Thymine, Guanine, Cytosine (A, T, G, C). Three nucleotides = one codon = one amino acid. 64 possible codons encode just 20 amino acids — so most amino acids have multiple codons (redundancy). This redundancy means many mutations in DNA don\'t change the final protein — a built-in error tolerance. Three billion base pairs in human DNA. Four letters. Twenty amino acids. ~20,000 genes. One species capable of reading its own instruction manual.',
  },

  // ============================================================
  // UNIT 2: THE CELL (Ch 6–11) | ~35 Facts
  // ============================================================

  // ── Chapter 6: Cell Structure & Function ──
  {
    emoji: '🏙️', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'Every Cell That Has Ever Lived Descended From One Original Cell. You Are Part of an Unbroken Chain.',
    text: 'The principle of **biogenesis** — all cells come from pre-existing cells — means every living cell today traces its lineage back to the first cell that appeared ~3.8 billion years ago. Your cells are not new. They are ancient life, continuously dividing since the beginning. When your cells divide, they are continuing a process that has never once stopped in 3.8 billion years. The chain of life from the first cell to you has never been broken. Not once.',
  },
  {
    emoji: '🫀', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'Prokaryotes Ruled Earth for 2 Billion Years Before Eukaryotes Showed Up.',
    text: '**Prokaryotes** — bacteria and archaea — have no membrane-bound nucleus, no organelles, no internal compartments. Just DNA floating in cytoplasm. They appeared ~3.8 billion years ago. **Eukaryotes** — with a nucleus and organelles — didn\'t appear until ~1.8 billion years ago. For 2 billion years, all life on Earth was prokaryotic. And even today, by sheer biomass and metabolic diversity, prokaryotes dominate life on this planet. The complex cell you call home is the newcomer. The simple cell is the eternal survivor.',
  },
  {
    emoji: '🔋', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'Mitochondria Were Once Free-Living Bacteria. They Never Fully Surrendered.',
    text: 'The **endosymbiotic theory** — proposed by Lynn Margulis in 1967, initially mocked, now universally accepted — states that mitochondria originated as proteobacteria engulfed by a host cell ~1.5 billion years ago. Evidence: mitochondria have their own circular DNA (like bacteria), their own ribosomes, they divide by binary fission, and they have a double membrane (inner = original bacterial membrane, outer = engulfment membrane). They still replicate independently inside your cells. You are not one organism. You are a community. Your mitochondria are immigrants who never left.',
  },
  {
    emoji: '📬', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'The Golgi Apparatus is the Cell\'s Post Office. It Reads, Sorts, and Ships.',
    text: 'The **Golgi apparatus** receives proteins from the rough ER, modifies them (adds sugar chains in a process called **glycosylation**), sorts them by destination, and packages them into vesicles for delivery — to the cell membrane, lysosomes, or export outside the cell. Without the Golgi, proteins would be made but go nowhere. Cells in glands that secrete hormones, digestive enzymes, or antibodies have enormous, elaborate Golgi complexes. The more a cell ships, the bigger its post office.',
  },
  {
    emoji: '♻️', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'Lysosomes Are the Cell\'s Stomach and Its Suicide Pill.',
    text: '**Lysosomes** contain 50+ hydrolytic enzymes at pH 4.5 — acidic enough to digest proteins, lipids, carbohydrates, and nucleic acids. They digest damaged organelles (a process called **autophagy**), foreign bacteria, and cellular debris. But here\'s the dark side: lysosomes also execute **apoptosis** — programmed cell death. When a cell must die (during development, immune response, or when irreparably damaged), lysosomes rupture and digest the cell from within. The same organelle that feeds the cell can also destroy it on command. Biology\'s most versatile weapon.',
  },
  {
    emoji: '🌀', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'The Cytoskeleton is Not Just Scaffolding. It\'s a Dynamic Transport Network.',
    text: 'The **cytoskeleton** — made of microfilaments (actin), intermediate filaments, and microtubules — gives cells shape and mechanical support. But it also acts as a highway system. Motor proteins called **kinesin** and **dynein** physically walk along microtubules carrying cargo — organelles, vesicles, mRNA — to precise locations inside the cell. Kinesin walks toward the cell periphery. Dynein walks toward the nucleus. They carry different cargo in opposite directions on the same track simultaneously. The cell solved the traffic problem before humans invented roads.',
  },

  // ── Chapter 7: Membrane Structure & Transport ──
  {
    emoji: '🫧', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Your Cell Membrane is Not a Wall. It\'s a Fluid, Dynamic, Living Barrier.',
    text: 'The **fluid mosaic model** (Singer & Nicolson, 1972) describes the cell membrane as a phospholipid bilayer in which proteins float and move laterally — like icebergs in a lipid sea. The membrane is not static — it flows, bends, and constantly changes composition. Membrane proteins can diffuse across the entire cell surface in minutes. Lipid composition changes with temperature. Cholesterol is embedded in animal cell membranes specifically to moderate fluidity — preventing the membrane from being too rigid in cold or too liquid in heat. Your cell membrane is alive in the way that water is — always moving, never still.',
  },
  {
    emoji: '⚡', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Active Transport Uses ATP to Move Things Uphill. Against All Logic. On Purpose.',
    text: '**Active transport** moves molecules against their concentration gradient — from low concentration to high. This requires energy in the form of ATP. The most important example: the **sodium-potassium pump** moves 3 Na⁺ out and 2 K⁺ in per ATP molecule. This creates the electrochemical gradient that powers nerve impulses, muscle contractions, and secondary active transport of glucose and amino acids. Your neurons fire because the sodium-potassium pump works every second of your life. It consumes 20–40% of your body\'s total ATP. Your brain\'s most expensive habit is just pumping ions.',
  },
  {
    emoji: '🌊', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Osmosis Can Burst a Cell or Shrivel It. Direction Depends on One Word.',
    text: '**Osmosis** is the diffusion of water across a semipermeable membrane from a region of high water potential to low. Place a cell in a **hypotonic** solution (less solute outside) — water rushes in, the cell swells and may burst (**lysis**). Place it in a **hypertonic** solution (more solute outside) — water rushes out, the cell shrivels (**crenation** in animal cells, **plasmolysis** in plant cells). This is why drinking seawater kills you — it\'s hypertonic to your blood, pulling water out of your cells. The ocean is everywhere and none of it is drinkable because of osmosis.',
  },
  {
    emoji: '📡', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Cells Talk to Each Other Through Proteins Embedded in Their Membranes.',
    text: '**Cell signalling** begins at the membrane. Receptor proteins — specifically **G-protein coupled receptors (GPCRs)** — are the most common signalling proteins in the human body. Over 800 types. They respond to hormones, neurotransmitters, light (in your eyes), smell molecules (in your nose), and taste. When a signal molecule binds to a GPCR, it triggers a cascade of internal reactions that can change gene expression, metabolism, or cell behaviour — all from one molecule touching the outside of the membrane. GPCRs are the targets of ~34% of all approved drugs. The membrane is not just a border. It\'s a command centre.',
  },

  // ── Chapter 8: Cell Signalling ──
  {
    emoji: '📱', cat: 'bio_ch8', catLabel: 'Ch 8 – Cell Signalling',
    title: 'One Signal Molecule Can Trigger a Million Reactions Inside a Cell. This is Called Amplification.',
    text: 'In a **signal transduction cascade**, one extracellular signal triggers a chain of intracellular reactions where each step activates many molecules of the next. One hormone molecule binds one receptor → activates ~10 G-proteins → each activates ~10 adenylyl cyclase → each makes ~100 cAMP → each activates ~10 PKA → each phosphorylates ~100 target proteins. One signal: potentially millions of cellular responses. This **signal amplification** explains how trace amounts of hormones like adrenaline can instantly mobilise your entire body\'s energy reserves. The cell doesn\'t just receive a whisper. It turns it into a roar.',
  },
  {
    emoji: '💀', cat: 'bio_ch8', catLabel: 'Ch 8 – Cell Signalling',
    title: 'Apoptosis is Programmed Cell Death. And Without It, You\'d Have Webbed Fingers.',
    text: '**Apoptosis** — from Greek for "falling leaves" — is the cell\'s built-in self-destruction programme. During embryonic development, the cells between your fingers undergo apoptosis to carve out individual fingers. ~50–70 billion cells undergo apoptosis in your body every day — eliminating damaged cells, virally infected cells, and cells that have completed their purpose. The process is clean: the cell shrinks, DNA is neatly chopped, and the fragments are packaged for phagocytosis. No inflammation. No mess. Contrast with **necrosis** — traumatic cell death that causes inflammation. Cancer happens when apoptosis fails — cells that should die keep dividing instead.',
  },
  {
    emoji: '🎯', cat: 'bio_ch8', catLabel: 'Ch 8 – Cell Signalling',
    title: 'Hormones Travel in Blood and Reach Every Cell. But Only Target Cells Listen.',
    text: 'Insulin is in every cell\'s bloodstream. But only cells with **insulin receptors** respond to it. This is the principle of **specificity in cell signalling** — the signal is broadcast, but only cells with the matching receptor protein can receive it. This is also why endocrine disorders are so selective: Type 1 diabetes destroys pancreatic beta cells (no insulin produced). Type 2 diabetes involves receptor insensitivity (insulin present but cells stop listening). The problem isn\'t always the signal. Sometimes the phone is working fine — the receiver is just turned off.',
  },

  // ── Chapter 9: Energy & Metabolism ──
  {
    emoji: '⚡', cat: 'bio_ch9', catLabel: 'Ch 9 – Energy & Metabolism',
    title: 'ATP is Not an Energy Storage Molecule. It\'s an Energy Currency.',
    text: 'Students confuse ATP with energy storage. Fat and glycogen store energy. **ATP (adenosine triphosphate)** is the immediate energy currency — it\'s made, used, and recycled constantly. A single ATP molecule is used within seconds of being made. Your body contains only ~250g of ATP at any moment. But you turn over your entire body weight in ATP every day — regenerating the same molecules 500–750 times. ATP is the coin of the metabolic economy. Always circulating. Never accumulating. The cell never saves — it spends and earns simultaneously.',
  },
  {
    emoji: '🔑', cat: 'bio_ch9', catLabel: 'Ch 9 – Energy & Metabolism',
    title: 'Enzymes Don\'t Get Used Up. They Emerge From Every Reaction Ready for the Next.',
    text: '**Enzymes** are biological catalysts — proteins (and some RNA molecules called ribozymes) that lower the **activation energy** of a reaction without being consumed. The enzyme binds its specific substrate at the **active site**, forms an enzyme-substrate complex, facilitates the reaction, and releases the product — unchanged. One enzyme molecule can catalyse millions of reactions per second. Carbonic anhydrase — the fastest enzyme known — processes 600,000 CO₂ molecules per second per enzyme molecule. Enzymes are not ingredients. They are the chefs. They make the meal but don\'t become it.',
  },
  {
    emoji: '🌡️', cat: 'bio_ch9', catLabel: 'Ch 9 – Energy & Metabolism',
    title: 'At 37°C Enzymes Work Best. A Few Degrees Higher and They Stop Working Forever.',
    text: 'Enzymes have an optimal temperature — for most human enzymes, ~37°C. Above this, increasing temperature increases kinetic energy until the enzyme reaches **denaturation** — the bonds maintaining its 3D shape break, the active site distorts, and the enzyme permanently loses function. This is why a fever above 41°C is life-threatening — not because cells are too hot, but because critical enzymes are losing their shape. And unlike most cellular damage, denatured proteins can\'t be simply cooled down and fixed. They are functionally dead. Your body fights fever at all costs for this reason.',
  },

  // ── Chapter 10: Cellular Respiration ──
  {
    emoji: '🔥', cat: 'bio_ch10', catLabel: 'Ch 10 – Cellular Respiration',
    title: 'Cellular Respiration Happens in Three Stages. Only One Needs Oxygen.',
    text: '**Cellular respiration** extracts energy from glucose through three stages: **Glycolysis** (cytoplasm, no oxygen needed, net 2 ATP), **Krebs cycle** (mitochondrial matrix, produces CO₂, NADH, FADH₂), and **Oxidative phosphorylation** (inner mitochondrial membrane, requires oxygen, produces ~32 ATP). Total: ~36–38 ATP per glucose. The beauty: only the final stage — the electron transport chain — requires oxygen. This is why anaerobic respiration (no oxygen) produces only 2 ATP. You get 18 times more energy with oxygen than without. That\'s why you breathe harder when you exercise. You\'re upgrading your ATP output.',
  },
  {
    emoji: '🏔️', cat: 'bio_ch10', catLabel: 'Ch 10 – Cellular Respiration',
    title: 'Lactic Acid Doesn\'t Cause Muscle Soreness. That\'s a Myth You Were Taught.',
    text: 'During intense exercise, when oxygen supply is insufficient, muscles switch to **lactic acid fermentation** — producing lactic acid to regenerate NAD⁺ and continue glycolysis. For decades, lactic acid was blamed for the burning sensation and next-day soreness. Wrong. Lactic acid clears from muscles within an hour. **Delayed Onset Muscle Soreness (DOMS)** — felt 24–72 hours later — is caused by micro-tears in muscle fibres and subsequent inflammation. Lactic acid is actually a fuel — it\'s transported to the liver and heart, which use it for energy. The thing you were told causes pain is actually feeding your heart.',
  },
  {
    emoji: '🫁', cat: 'bio_ch10', catLabel: 'Ch 10 – Cellular Respiration',
    title: 'The ATP Synthase Motor is the Most Beautiful Machine in Biology.',
    text: '**ATP synthase** is a protein complex embedded in the inner mitochondrial membrane that literally rotates to make ATP. Protons (H⁺) flow through it down their gradient (from intermembrane space to matrix), causing the enzyme to spin like a turbine. Each full rotation produces 3 ATP molecules. It spins at ~100–150 rotations per second under peak load. This mechanism — called **chemiosmosis**, proposed by Peter Mitchell who won the Nobel Prize in 1978 — was so strange that most biochemists initially refused to believe it. A spinning molecular motor inside every cell of your body. Making the fuel of life. Every second. Without rest.',
  },

  // ── Chapter 11: Photosynthesis ──
  {
    emoji: '🌿', cat: 'bio_ch11', catLabel: 'Ch 11 – Photosynthesis',
    title: 'Photosynthesis Happens in Two Stages. Only One Needs Light.',
    text: '**Photosynthesis** occurs in two stages: the **light-dependent reactions** (thylakoid membrane — capture light, split water, produce ATP, NADPH, release O₂) and the **light-independent reactions / Calvin cycle** (stroma — use ATP and NADPH to fix CO₂ into glucose). The Calvin cycle doesn\'t directly need light — it needs the products of the light reactions. This is why the "dark reactions" label is misleading: they can occur in light too. The stage you breathe for — the one releasing oxygen — is the light-dependent stage. Every breath you take is powered by water being split by sunlight inside a leaf.',
  },
  {
    emoji: '🍃', cat: 'bio_ch11', catLabel: 'Ch 11 – Photosynthesis',
    title: 'Plants Absorb Red and Blue Light. They Reflect Green. That\'s Why Forests Are Green.',
    text: 'Chlorophyll — the primary photosynthetic pigment — absorbs light most efficiently at 430nm (blue) and 662nm (red). Green light (~550nm) is poorly absorbed and mostly reflected. This reflected green light is what your eyes detect — making plants appear green. This seems wasteful until you consider that plants also have accessory pigments — **carotenoids**, **xanthophylls** — that absorb wavelengths chlorophyll misses, broadening the spectrum of usable light. In autumn, when chlorophyll breaks down, these orange and yellow accessory pigments are revealed. Forests are green not because plants love green. It\'s the colour they throw away.',
  },
  {
    emoji: '🌵', cat: 'bio_ch11', catLabel: 'Ch 11 – Photosynthesis',
    title: 'Some Plants Evolved a Trick to Stop Wasting Energy on a Process Called Photorespiration.',
    text: 'In hot, dry conditions, plants close their stomata to conserve water. But RuBisCO — the enzyme that fixes CO₂ — can also accidentally bind O₂, producing a useless compound and wasting energy. This is called **photorespiration** and can waste up to 25% of photosynthetic energy in C₃ plants. **C₄ plants** (corn, sugarcane) evolved a spatial separation — they pre-concentrate CO₂ in mesophyll cells before passing it to bundle sheath cells for the Calvin cycle, suppressing photorespiration. **CAM plants** (cacti, pineapples) separate the process temporally — opening stomata only at night. Evolution invented three separate engineering solutions to the same enzyme\'s mistake.',
  },

  // ============================================================
  // UNIT 3: GENETICS (Ch 12–20) | ~50 Facts
  // ============================================================

  // ── Chapter 12: Cell Division & Mitosis ──
  {
    emoji: '✂️', cat: 'bio_ch12', catLabel: 'Ch 12 – Cell Division & Mitosis',
    title: 'Your Body Makes 25 Million New Cells Every Second. And Every Division Must Be Perfect.',
    text: '**Mitosis** is the process by which a eukaryotic cell divides to produce two genetically identical daughter cells. It has four stages: **Prophase** (chromosomes condense, spindle forms), **Metaphase** (chromosomes align at the cell equator), **Anaphase** (sister chromatids are pulled apart), **Telophase** (nuclear envelope reforms, chromosomes decondense). The entire process takes ~1 hour in human cells. Any error — a chromosome that doesn\'t separate properly (**non-disjunction**) — can produce cells with the wrong chromosome number (**aneuploidy**), which can cause cancer. 25 million perfect divisions per second. The margin for error is essentially zero.',
  },
  {
    emoji: '🔒', cat: 'bio_ch12', catLabel: 'Ch 12 – Cell Division & Mitosis',
    title: 'Cancer is What Happens When the Cell Cycle\'s Brakes Fail.',
    text: 'The **cell cycle** has multiple **checkpoints** — G₁, S phase, G₂, and M — where proteins (notably **p53**, the "guardian of the genome") inspect the cell for DNA damage before allowing progression. If damage is found: repair it or trigger apoptosis. **Proto-oncogenes** promote cell division. **Tumour suppressor genes** (like p53, Rb) inhibit it. Cancer occurs when proto-oncogenes mutate into **oncogenes** (permanently ON) or tumour suppressors are inactivated (brakes gone). p53 is mutated in ~50% of all human cancers. Half of all cancers trace back to one broken guardian.',
  },
  {
    emoji: '⏱️', cat: 'bio_ch12', catLabel: 'Ch 12 – Cell Division & Mitosis',
    title: 'Telomeres Are Your Cells\' Ageing Clock. And They Shrink With Every Division.',
    text: '**Telomeres** are repetitive DNA sequences (TTAGGG in humans) capping chromosome ends, preventing degradation and chromosome fusion. With each cell division, telomeres shorten because DNA polymerase can\'t copy the very end of a linear chromosome. After 50–70 divisions (**Hayflick limit**), telomeres become critically short, triggering senescence or apoptosis. **Telomerase** — an enzyme that extends telomeres — is active in stem cells, germ cells, and... cancer cells. This is why cancer cells are immortal — they reactivate telomerase. You age because your cells have a division counter. Cancer cheats the counter.',
  },

  // ── Chapter 13: Meiosis & Sexual Reproduction ──
  {
    emoji: '🔀', cat: 'bio_ch13', catLabel: 'Ch 13 – Meiosis & Sexual Reproduction',
    title: 'Meiosis Shuffles Your DNA So Thoroughly That No Two Children Are Ever Genetically Identical.',
    text: '**Meiosis** reduces chromosome number from diploid (2n) to haploid (n) through two divisions, producing 4 genetically unique gametes. The key sources of genetic variation: **crossing over** (homologous chromosomes exchange segments during prophase I — generates ~2 to 3 crossovers per chromosome pair), **independent assortment** (random orientation of homologue pairs at metaphase I), and **random fertilisation**. The result: 2²³ = 8.4 million possible chromosome combinations from independent assortment alone. Add crossing over: effectively unlimited variation. Your parents could have billions of other children, and none would be you. You are statistically a miracle.',
  },
  {
    emoji: '🥚', cat: 'bio_ch13', catLabel: 'Ch 13 – Meiosis & Sexual Reproduction',
    title: 'A Woman is Born With All the Eggs She Will Ever Have. No New Ones Are Made.',
    text: 'Human females are born with ~1–2 million **oocytes** (immature eggs) already in their ovaries — all produced during fetal development. By puberty, only ~300,000 remain. Over a lifetime, ~400–500 are ovulated. The rest undergo **atresia** (programmed degeneration). Males continuously produce new sperm from puberty onward — ~1,500 per second. This fundamental asymmetry — female gametes are finite and old, male gametes are infinite and fresh — has profound implications for reproductive biology, ageing, and why maternal age affects egg quality far more than paternal age affects sperm. Your mother\'s eggs were made before she was born.',
  },

  // ── Chapter 14: Mendelian Genetics ──
  {
    emoji: '🫛', cat: 'bio_ch14', catLabel: 'Ch 14 – Mendelian Genetics',
    title: 'Mendel Discovered Genetics With Pea Plants. And His Data Was Almost Too Perfect.',
    text: '**Gregor Mendel** proposed the **Law of Segregation** (each organism carries two alleles per gene, which separate during gamete formation) and the **Law of Independent Assortment** (genes on different chromosomes assort independently). His 3:1 ratio for monohybrid crosses and 9:3:3:1 for dihybrid crosses are textbook perfect. So perfect, in fact, that statistician Ronald Fisher analysed Mendel\'s data in 1936 and concluded it fit the expected ratios suspiciously well — possibly suggesting data selection or unconscious bias. Whether Mendel\'s data was too clean is one of science\'s great unresolved debates. The father of genetics might have fudged his results. Just a little.',
  },
  {
    emoji: '🩸', cat: 'bio_ch14', catLabel: 'Ch 14 – Mendelian Genetics',
    title: 'Blood Type is a Perfect Exam Example Because It Shows Three Inheritance Patterns at Once.',
    text: 'ABO blood type demonstrates **codominance** (both A and B alleles are expressed equally in AB blood type), **multiple alleles** (three alleles: Iᴬ, Iᴮ, i exist in the population, though any individual carries only two), and **complete dominance** (both Iᴬ and Iᴮ are dominant over i, the O allele). The Rh factor adds a separate gene showing simple dominance. This is why ABO blood type appears in nearly every genetics exam at every level — it demonstrates four fundamental concepts simultaneously. Blood type isn\'t just medical information. It\'s genetics in a single example.',
  },
  {
    emoji: '👁️', cat: 'bio_ch14', catLabel: 'Ch 14 – Mendelian Genetics',
    title: 'Incomplete Dominance Means the Heterozygote is a Blend. Neither Parent Wins.',
    text: 'In **incomplete dominance**, neither allele is fully dominant — the heterozygote shows an intermediate phenotype. Red × White snapdragons → Pink offspring. This is NOT blending inheritance (the old discredited idea) — because breeding two pink flowers gives back a 1:2:1 ratio of Red:Pink:White, proving the original alleles are still intact. The genes didn\'t mix. The expression was intermediate. This distinction — between blending phenotypes and blending genotypes — was the key conceptual breakthrough that saved Mendelian genetics from being discarded in the early 1900s.',
  },

  // ── Chapter 15: Chromosomal Basis of Inheritance ──
  {
    emoji: '🔗', cat: 'bio_ch15', catLabel: 'Ch 15 – Chromosomal Basis of Inheritance',
    title: 'Linked Genes Break Mendel\'s Second Law. Morgan\'s Fruit Flies Proved It.',
    text: 'Mendel\'s Law of Independent Assortment works only for genes on different chromosomes. **Linked genes** — on the same chromosome — tend to be inherited together and do NOT assort independently. Thomas Morgan discovered linkage studying *Drosophila melanogaster* (fruit flies). He also discovered **crossing over** breaks linkage — the further apart two genes are, the more likely a crossover separates them. **Recombination frequency** between linked genes is used to build **genetic maps** — measuring relative distances between genes. The exceptions to Mendel\'s laws taught us more about chromosomes than the laws themselves.',
  },
  {
    emoji: '🧑', cat: 'bio_ch15', catLabel: 'Ch 15 – Chromosomal Basis of Inheritance',
    title: 'Sex-Linked Diseases Affect Men Far More Than Women. Here\'s the Exact Reason.',
    text: 'Genes on the X chromosome show **X-linked inheritance**. Females have two X chromosomes — if they carry one recessive disease allele, the second X may carry a normal dominant allele that masks it (carrier female, unaffected). Males have one X and one Y — if their X carries the recessive disease allele, there is no second X to compensate. They will have the disease. This explains why colour blindness (8% of males, 0.5% of females), haemophilia, and Duchenne muscular dystrophy are far more common in males. One copy of the X chromosome. No backup. No hiding. The price of being XY.',
  },

  // ── Chapter 16: DNA Structure & Replication ──
  {
    emoji: '🧬', cat: 'bio_ch16', catLabel: 'Ch 16 – DNA Structure & Replication',
    title: 'Watson and Crick Got the Double Helix. But Rosalind Franklin\'s X-ray Did the Work.',
    text: 'The structure of DNA — a **double helix** with antiparallel strands, sugar-phosphate backbones, and base pairs held by hydrogen bonds (A-T: 2 bonds, G-C: 3 bonds) — was published by Watson and Crick in 1953. Their key evidence came from **X-ray crystallography Photo 51** taken by Rosalind Franklin, shown to Watson without her knowledge or consent. Franklin received no credit. Watson and Crick received the Nobel Prize in 1962. Franklin died of cancer in 1958 — Nobel Prizes aren\'t awarded posthumously. The most important image in the history of biology was taken by a woman who history almost erased.',
  },
  {
    emoji: '🔁', cat: 'bio_ch16', catLabel: 'Ch 16 – DNA Structure & Replication',
    title: 'DNA Replication is Semi-Conservative. Each New DNA Molecule is Half Old, Half New.',
    text: '**Semi-conservative replication** — proven by the Meselson-Stahl experiment (1958) — means each original DNA strand serves as a template for a new complementary strand. The result: two daughter DNA molecules, each containing one old strand and one new strand. The replication machinery: **helicase** unwinds the double helix, **primase** lays RNA primers, **DNA polymerase III** synthesises new DNA (only in 5\'→3\' direction), creating a continuous **leading strand** and a discontinuous **lagging strand** (made as **Okazaki fragments**). **DNA ligase** seals the fragments. Human DNA polymerase makes one error per billion base pairs and has built-in proofreading. Nature\'s most accurate copying machine.',
  },

  // ── Chapter 17: Gene Expression ──
  {
    emoji: '📖', cat: 'bio_ch17', catLabel: 'Ch 17 – Gene Expression',
    title: 'The Central Dogma: DNA Makes RNA Makes Protein. With One Famous Exception.',
    text: 'Francis Crick\'s **Central Dogma of Molecular Biology** (1958): DNA is transcribed into RNA, RNA is translated into protein. Information flows one way. The famous exception: **retroviruses** (like HIV) use **reverse transcriptase** to copy RNA back into DNA — hence "retro." This enzyme is the target of antiretroviral HIV drugs. A second exception: **prions** — misfolded proteins that propagate by converting normal proteins to misfolded forms, with no nucleic acid involved. The central dogma is mostly right. The exceptions are some of the deadliest phenomena in biology.',
  },
  {
    emoji: '🏭', cat: 'bio_ch17', catLabel: 'Ch 17 – Gene Expression',
    title: 'A Ribosome Reads mRNA Three Letters at a Time and Builds a Protein in Real Time.',
    text: '**Translation** occurs on ribosomes — complexes of rRNA and protein. The ribosome reads mRNA in **codons** (3-nucleotide units), and tRNA molecules with matching **anticodons** deliver the corresponding amino acid. The ribosome has three sites: **A site** (aminoacyl — incoming tRNA), **P site** (peptidyl — growing chain), **E site** (exit — empty tRNA leaves). Peptide bond formation between amino acids is catalysed by **peptidyl transferase** activity of the 23S rRNA — making the ribosome a ribozyme. Bacteria ribosomes (70S) differ from eukaryote ribosomes (80S) — and this difference is how antibiotics like streptomycin, tetracycline, and erythromycin kill bacteria without harming you. Your life depends on a molecular size difference.',
  },
  {
    emoji: '✂️', cat: 'bio_ch17', catLabel: 'Ch 17 – Gene Expression',
    title: 'Pre-mRNA is Cut, Spliced, and Edited Before It Can Make a Protein.',
    text: 'In eukaryotes, DNA is transcribed into **pre-mRNA** containing both **exons** (coding sequences) and **introns** (non-coding sequences). Before translation, introns are removed and exons joined by a **spliceosome** — a complex of snRNPs. This process is called **RNA splicing**. One gene can produce multiple proteins through **alternative splicing** — different combinations of exons are joined. The human genome has ~20,000 genes but produces ~100,000 different proteins. Alternative splicing multiplies the proteome by 5 without additional genes. This is how complexity arises from economy. One gene. Many proteins. Infinite function.',
  },

  // ── Chapter 18: Gene Regulation ──
  {
    emoji: '🎛️', cat: 'bio_ch18', catLabel: 'Ch 18 – Gene Regulation',
    title: 'Every Cell in Your Body Has the Same DNA. But Liver Cells and Neurons Look Nothing Alike.',
    text: '**Differential gene expression** — controlled by **transcription factors**, **enhancers**, **silencers**, and **epigenetic modifications** — determines which genes are active in each cell type. A liver cell expresses liver-specific genes. A neuron expresses neuron-specific genes. The same genome. Radically different outcomes. **Epigenetic marks** — DNA methylation and histone modification — don\'t change the DNA sequence but change which genes are accessible for transcription. These marks can be influenced by environment, diet, and stress. And some can be inherited. What your parents ate may affect which of your genes are switched on. Your genome is not your destiny. Your epigenome might be.',
  },
  {
    emoji: '🦟', cat: 'bio_ch18', catLabel: 'Ch 18 – Gene Regulation',
    title: 'The Lac Operon is the Most Famous Example of Gene Regulation in Biology.',
    text: 'Jacob and Monod\'s **lac operon** (Nobel Prize, 1965) showed how *E. coli* regulates genes economically. When lactose is absent: a **repressor protein** binds the **operator** sequence, blocking RNA polymerase from transcribing lactose-metabolising genes. When lactose is present: lactose (via allolactose) binds the repressor, changing its shape and releasing it from the operator — genes are transcribed. When glucose is also present: **catabolite repression** via cAMP/CAP further suppresses the operon — because why use lactose when glucose is available? The bacterium makes rational economic decisions about gene expression. E. coli optimises its metabolism better than most students optimise their study schedule.',
  },
  {
    emoji: '🤫', cat: 'bio_ch18', catLabel: 'Ch 18 – Gene Regulation',
    title: 'RNA Interference Can Silence Any Gene in the Genome. It Won Two Scientists a Nobel Prize.',
    text: '**RNA interference (RNAi)** — discovered by Fire and Mello in *C. elegans* (Nobel Prize, 2006) — is a natural cellular mechanism where **small interfering RNA (siRNA)** or **microRNA (miRNA)** bind complementary mRNA sequences and either destroy them or block their translation. The cell can silence specific genes without altering the DNA. Plants use RNAi to fight viruses. Your immune cells use it to regulate inflammation. Pharmaceutical companies are developing RNAi-based drugs that can silence disease-causing genes with extraordinary precision. The gene silencer inside every cell is now a drug discovery platform.',
  },

  // ── Chapter 19: Viruses ──
  {
    emoji: '🦠', cat: 'bio_ch19', catLabel: 'Ch 19 – Viruses',
    title: 'Viruses Are Not Alive. But They\'ve Shaped All of Life on Earth.',
    text: 'Viruses are **obligate intracellular parasites** — they have genetic material (DNA or RNA) enclosed in a **capsid** protein coat, sometimes with a lipid **envelope**, but no ribosomes, no metabolism, no ATP production. By most definitions, they are not alive. Yet **8% of the human genome is viral DNA** from ancient retroviral infections. Viral genes drove the evolution of the placenta. Bacteriophages (viruses that infect bacteria) are the most abundant biological entities on Earth — 10³¹ of them. They kill 40% of all bacteria in the ocean every day, driving nutrient cycling. Not alive. Indispensable to all life. The most powerful non-living thing in the universe.',
  },
  {
    emoji: '💉', cat: 'bio_ch19', catLabel: 'Ch 19 – Viruses',
    title: 'HIV Targets the Exact Cells Designed to Fight It. That\'s What Makes It Brilliant and Devastating.',
    text: '**HIV (Human Immunodeficiency Virus)** is a **retrovirus** that targets **CD4⁺ T helper cells** — the cells that coordinate the entire adaptive immune response. HIV uses the CD4 receptor and a coreceptor (CCR5 or CXCR4) to enter. Its **reverse transcriptase** copies viral RNA into DNA, which integrates into the host genome as a **provirus** — permanently. Over years, CD4⁺ cell counts drop. Below 200 cells/μL: **AIDS** — the immune system can no longer fight even normally harmless infections (**opportunistic infections**). HIV is devastating because it attacks the immune system\'s command centre, not its soldiers. Cut off the generals, and the army collapses.',
  },

  // ── Chapter 20: Biotechnology & Genomics ──
  {
    emoji: '✂️', cat: 'bio_ch20', catLabel: 'Ch 20 – Biotechnology & Genomics',
    title: 'CRISPR is the Most Powerful Biological Tool Ever Invented. It Was Stolen From Bacteria.',
    text: '**CRISPR-Cas9** — developed into a gene editing tool by Doudna and Charpentier (Nobel Prize, 2020) — was discovered as a bacterial immune system. Bacteria store fragments of viral DNA in CRISPR loci; if the same virus attacks again, RNA made from these fragments guides the Cas9 nuclease to cut the viral DNA precisely. Scientists repurposed this system: design a **guide RNA** matching any DNA sequence in any organism, Cas9 cuts it, and cellular repair mechanisms introduce a specific change. It\'s cheaper, faster, and more precise than any previous gene editing method. We found our most powerful biotechnology tool inside bacteria fighting off viruses. Nature had it first.',
  },
  {
    emoji: '🧬', cat: 'bio_ch20', catLabel: 'Ch 20 – Biotechnology & Genomics',
    title: 'The Human Genome Project Took 13 Years and $3 Billion. Today You Can Sequence Your Genome in a Day for $200.',
    text: 'The **Human Genome Project** (1990–2003) — an international collaboration — sequenced all 3.2 billion base pairs of human DNA. It identified ~20,000–25,000 protein-coding genes (far fewer than expected — nematode worms have nearly as many). The draft sequence was completed in 2000. Cost: ~$3 billion. By 2023, next-generation sequencing can sequence a complete human genome in under 24 hours for ~$200. This 10-million-fold cost reduction in 20 years is faster than Moore\'s Law for computing. The most important data set in the history of medicine became affordable faster than anyone predicted. The blueprint of humanity is now a commodity.',
  },

  // ============================================================
  // UNIT 4: EVOLUTION (Ch 21–26) | ~30 Facts
  // ============================================================

  // ── Chapter 21: Darwin & Natural Selection ──
  {
    emoji: '🐢', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'Darwin Waited 20 Years to Publish His Theory. He Was Right to Be Careful.',
    text: 'Charles Darwin developed the theory of **natural selection** after his 1831–1836 voyage on HMS Beagle but didn\'t publish until 1859 — 23 years later. Why? He knew the religious and scientific opposition would be fierce and wanted overwhelming evidence. The catalyst for publishing: Alfred Russel Wallace independently developed the same theory and sent Darwin a paper in 1858. Darwin and Wallace co-presented to the Linnean Society in 1858. Darwin then rushed to publish *On the Origin of Species* in 1859. Twenty years of waiting. Twenty years of evidence gathering. Then someone else had the same idea. The history of science\'s greatest theory contains one of its greatest near-misses.',
  },
  {
    emoji: '🦒', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'Natural Selection Has Four Requirements. Miss One and Evolution Stops.',
    text: '**Natural selection** requires: (1) **Variation** — individuals differ in heritable traits; (2) **Heredity** — traits are passed from parents to offspring; (3) **Differential reproduction** — some variants reproduce more successfully; (4) **Selection pressure** — the environment favours certain variants over others. All four must be present. If there\'s no variation, there\'s nothing to select. If variation isn\'t heritable, selection doesn\'t change the next generation. Natural selection is not "survival of the fittest" in a fighting sense — it\'s survival of the best reproducer in a given environment. The quietest, least visible organism in an ecosystem may be the most evolutionarily fit. Fitness is defined entirely by reproductive success.',
  },
  {
    emoji: '🦠', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'Antibiotic Resistance is Natural Selection Happening in Real Time in Your Body.',
    text: 'When antibiotics are prescribed, they kill susceptible bacteria. But a few cells may carry random mutations conferring resistance. These survive, divide, and pass resistance to offspring. **Antibiotic resistance** is natural selection operating over bacterial generation times of 20 minutes — observable in days, not millions of years. The misuse of antibiotics (incomplete courses, unnecessary prescriptions) accelerates this. The WHO predicts antibiotic-resistant infections will kill 10 million people per year by 2050 — more than cancer. Darwin\'s mechanism didn\'t stop when we invented antibiotics. It started using them as a selection pressure.',
  },

  // ── Chapter 22: Evidence for Evolution ──
  {
    emoji: '🦴', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'Whales Have Finger Bones in Their Flippers and Leg Bones in Their Bellies.',
    text: '**Vestigial structures** are anatomical features that have lost most or all of their original function through evolution. Whale flippers contain the same bone structure as human hands — radius, ulna, carpals, metacarpals, phalanges — **homologous structures** revealing common ancestry with land-dwelling mammals. Whales also retain **vestigial pelvic and femur bones**, buried internally, serving no locomotor function — remnants of the hind limbs of *Pakicetus*, their terrestrial ancestor. The python has vestigial pelvic spurs. Humans have vestigial wisdom teeth, a palmaris longus muscle, and the arrector pili (goosebump muscles). Your body is a museum of your evolutionary history.',
  },
  {
    emoji: '🧬', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'DNA Sequencing Has Made Evolution Unfalsifiable in the Best Way.',
    text: '**Molecular phylogenetics** — comparing DNA sequences across species — confirms evolutionary relationships established by fossil evidence and anatomy, often with greater precision. The more DNA sequences two species share, the more recently they shared a common ancestor. Humans and chimpanzees share ~98.7% DNA identity. Humans and mice share ~85%. Humans and baker\'s yeast share ~31%. Each comparison matches the evolutionary tree predicted by fossils. You could hide all the fossils, burn every anatomy textbook, and reconstruct the entire tree of life from DNA alone — and get the same answer. Evolution is supported by four completely independent lines of evidence. Each one alone would be sufficient.',
  },
  {
    emoji: '🐟', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'Tiktaalik is the Fossil That Predicted a Missing Link Before It Was Found.',
    text: 'In 2004, Neil Shubin\'s team predicted that a transitional fossil between fish and tetrapods would be found in 375-million-year-old rock in the Arctic — based on evolutionary theory. They found **Tiktaalik roseae** — a fish with fins that contained bones homologous to the wrist and upper arm of tetrapods, capable of doing push-ups. It had a neck (fish don\'t have necks), and could breathe air with primitive lungs while retaining gills. Evolutionary theory predicted where the fossil would be found before anyone dug it up. Science\'s most powerful endorsement is a correct prediction. Evolution predicted Tiktaalik. Tiktaalik confirmed evolution.',
  },

  // ── Chapter 23: Population Genetics & Microevolution ──
  {
    emoji: '📊', cat: 'bio_ch23', catLabel: 'Ch 23 – Population Genetics',
    title: 'The Hardy-Weinberg Equilibrium Describes a Population That Isn\'t Evolving. It\'s Useful Because Real Populations Always Deviate.',
    text: 'The **Hardy-Weinberg principle** states that allele and genotype frequencies in a population remain constant from generation to generation IF: no mutation, no gene flow, no genetic drift, random mating, and no natural selection. This is the null hypothesis of population genetics — a theoretical baseline that never exists in nature. Real populations deviate from H-W equilibrium. The magnitude and direction of deviation reveals which evolutionary forces are acting. If a population\'s genotype frequencies match H-W predictions, it\'s a signal that no evolution is occurring at that locus. It\'s not a law of nature. It\'s a yardstick for measuring evolution\'s speed.',
  },
  {
    emoji: '🍾', cat: 'bio_ch23', catLabel: 'Ch 23 – Population Genetics',
    title: 'The Founder Effect Explains Why Isolated Populations Have Higher Rates of Rare Genetic Diseases.',
    text: 'The **founder effect** occurs when a small group separates from a larger population to establish a new colony, carrying only a subset of the original gene pool. If a rare allele happens to be over-represented in the founders, it becomes common in the new population — not by selection, but by **genetic drift** (random sampling error). The Amish community in Pennsylvania have high rates of Ellis-van Creveld syndrome (extra fingers, heart defects) traceable to a single founder couple in 1744. Ashkenazi Jewish populations have elevated rates of several recessive disorders. Isolated island populations show similar effects. Evolutionary history leaves fingerprints in disease statistics.',
  },

  // ── Chapter 24: Speciation ──
  {
    emoji: '🏝️', cat: 'bio_ch24', catLabel: 'Ch 24 – Speciation',
    title: 'A Species is Defined By Whether Two Organisms Can Produce Fertile Offspring. It\'s Messier Than It Sounds.',
    text: 'The **Biological Species Concept** (Ernst Mayr) defines a species as a group of organisms that can interbreed and produce **fertile offspring**, and are reproductively isolated from other groups. Lions and tigers can interbreed to produce ligers — but ligers are sterile. Dogs and wolves can interbreed and produce fertile offspring — blurring the species boundary. Ring species, polyploid plants, and bacteria (which reproduce asexually) all challenge this definition. There are at least 26 competing species concepts in biology. The most fundamental unit of life doesn\'t have a universally agreed definition. That\'s not a weakness of biology. That\'s an honest reflection of how messy nature is.',
  },
  {
    emoji: '🌋', cat: 'bio_ch24', catLabel: 'Ch 24 – Speciation',
    title: 'Geographic Isolation Doesn\'t Always Cause Speciation. But It\'s the Most Common Route.',
    text: '**Allopatric speciation** — speciation through geographic isolation — is the most common mode of speciation. A population is divided by a geographic barrier (mountain range, river, ocean), the two subpopulations evolve independently under different selection pressures, and eventually accumulate enough differences to become reproductively isolated even if the barrier is removed. Darwin\'s finches on the Galápagos Islands are the textbook example — a single ancestral finch species colonised isolated islands, and each island\'s population evolved differently in response to available food sources. 13 species from one. Isolation plus time plus different environments. That\'s the recipe.',
  },

  // ── Chapter 25: Macroevolution & Phylogeny ──
  {
    emoji: '🌳', cat: 'bio_ch25', catLabel: 'Ch 25 – Macroevolution & Phylogeny',
    title: 'The Tree of Life Has Been Redrawn Multiple Times. DNA Changed Everything.',
    text: 'Classical taxonomy grouped organisms by morphology (appearance). Molecular phylogenetics — comparing DNA sequences — has repeatedly overturned these classifications. Fungi were grouped with plants for centuries — they\'re more closely related to animals. Crocodiles are more closely related to birds than to lizards. Hippos are the closest living relatives of whales. **Cladistics** — the modern approach — groups organisms by **shared derived characters** (synapomorphies) in a **phylogenetic tree** called a **cladogram**. Every time we sequence a new genome, the tree of life is refined. It\'s not a finished diagram. It\'s an ongoing argument backed by data.',
  },
  {
    emoji: '💥', cat: 'bio_ch25', catLabel: 'Ch 25 – Macroevolution & Phylogeny',
    title: 'Mass Extinctions Cleared the Decks for New Life. Without the Dinosaur Extinction, There Are No Humans.',
    text: 'There have been five major **mass extinctions** in Earth\'s history — events where >75% of species were lost. The most recent: the **Cretaceous-Paleogene (K-Pg) extinction** ~66 million years ago, caused by an asteroid impact plus volcanic activity, which wiped out non-avian dinosaurs. This event opened ecological niches that allowed small, nocturnal, insectivorous mammals to diversify explosively — eventually producing primates, then hominids, then humans. You exist because an asteroid killed the dinosaurs. The end of one evolutionary chapter was the beginning of yours. We are living in the aftermath of a catastrophe.',
  },

  // ── Chapter 26: Origin of Life ──
  {
    emoji: '⚡', cat: 'bio_ch26', catLabel: 'Ch 26 – Origin of Life',
    title: 'The Miller-Urey Experiment Created the Building Blocks of Life From Lightning and Gas.',
    text: 'In 1953, Stanley Miller and Harold Urey simulated early Earth conditions — methane, ammonia, hydrogen, water vapour, and electrical sparks (simulating lightning) — in a sealed apparatus. Within a week, they detected **amino acids** — the building blocks of proteins — forming spontaneously from inorganic molecules. This was the first experimental support for **abiogenesis** — the origin of life from non-living chemistry. The experiment was revolutionary but incomplete — early Earth\'s atmosphere was probably different from what they used. But the principle held: given the right conditions, the chemistry of life assembles itself. Life is not a miracle. It\'s a chemical inevitability given enough time and the right ingredients.',
  },
  {
    emoji: '🌍', cat: 'bio_ch26', catLabel: 'Ch 26 – Origin of Life',
    title: 'The RNA World Hypothesis Says RNA Was the Original Molecule of Life.',
    text: 'The **chicken-and-egg problem** of the origin of life: DNA needs proteins to replicate; proteins need DNA for their sequence. Which came first? The **RNA World Hypothesis** proposes RNA came first — because RNA can both store genetic information (like DNA) AND catalyse chemical reactions (ribozymes). The ribosome — the machine that makes all proteins — has a catalytic core made of RNA, not protein. This is considered strong evidence that an early RNA-based life form preceded DNA/protein-based life. RNA is still doing both jobs in the ribosome today — a molecular fossil of the RNA world. Your ribosomes are 3.8-billion-year-old artefacts of the moment life began.',
  },

  // ============================================================
  // UNIT 5: DIVERSITY OF LIFE (Ch 27–33) | ~30 Facts
  // ============================================================

  // ── Chapter 27: Prokaryotes ──
  {
    emoji: '🦠', cat: 'bio_ch27', catLabel: 'Ch 27 – Prokaryotes',
    title: 'Bacteria Are Not All the Same. The Diversity Within Bacteria Exceeds the Diversity Between Animals and Fungi.',
    text: 'Prokaryotes are divided into two domains: **Bacteria** and **Archaea** — which are more closely related to eukaryotes than to bacteria, despite looking similar under a microscope. Archaea thrive in **extreme environments** (**extremophiles**): hydrothermal vents (up to 121°C), hyper-saline lakes, acidic hot springs, and anaerobic deep subsurface rock. They were initially thought to be rare edge-cases — they turn out to be the most abundant organisms in the deep ocean and potentially the most biomass-rich organisms on Earth. The two main domains of prokaryotic life are as evolutionarily distant from each other as either is from you. Bacteria are not primitive. They are incomprehensibly diverse.',
  },
  {
    emoji: '🔬', cat: 'bio_ch27', catLabel: 'Ch 27 – Prokaryotes',
    title: 'Bacteria Can Transfer Genes Horizontally. They Don\'t Need to Wait for Their Children.',
    text: '**Horizontal gene transfer (HGT)** allows bacteria to acquire genes from other bacteria — even from different species — without reproduction. Three mechanisms: **transformation** (uptake of free DNA from environment), **transduction** (virus transfers DNA between bacteria), **conjugation** (direct cell-to-cell DNA transfer via a **pilus**). This is why antibiotic resistance spreads so rapidly — bacteria share resistance genes across species lines. A bacterium that has never been exposed to an antibiotic can inherit resistance from a neighbour that has. Bacteria don\'t just evolve — they share evolutionary innovations in real time. It\'s like humans being able to email each other new skills.',
  },

  // ── Chapter 28: Protists ──
  {
    emoji: '🦠', cat: 'bio_ch28', catLabel: 'Ch 28 – Protists',
    title: 'Protists Are Not a Real Evolutionary Group. They\'re Everything We Don\'t Know Where Else to Put.',
    text: '**Protists** are eukaryotes that are not animals, plants, or fungi. They include amoebae, algae, slime moulds, and *Plasmodium* (the malaria parasite). "Protist" is a **paraphyletic** grouping — meaning it doesn\'t include all descendants of a common ancestor. It\'s a wastebasket category. Yet this grouping contains organisms responsible for: nearly half of all photosynthesis on Earth (phytoplankton), the most lethal infectious disease in human history (malaria — killing ~600,000 per year), and fascinating unicellular intelligence (slime moulds that can solve mazes). The group that biologists can\'t properly classify saves us with oxygen and kills us with malaria simultaneously.',
  },
  {
    emoji: '🦟', cat: 'bio_ch28', catLabel: 'Ch 28 – Protists',
    title: 'Malaria Kills 600,000 People a Year. The Parasite Has Evolved to Outwit Every Defence.',
    text: '***Plasmodium falciparum*** — the most lethal malaria parasite — is a protist with a **complex life cycle** alternating between a mosquito host (*Anopheles*) and a human host. In humans it infects and destroys red blood cells. Its genome contains hypervariable surface proteins that continuously change, evading immune recognition. It has evolved resistance to nearly every antimalarial drug developed. The evolutionary pressure is so strong it has shaped the human genome — sickle cell trait (heterozygous HbA/HbS) confers malaria resistance, which is why the sickle cell allele is maintained by natural selection in malaria-endemic regions despite being lethal in homozygous form. One parasite shaped human evolution. And we still haven\'t beaten it.',
  },

  // ── Chapter 29: Fungi ──
  {
    emoji: '🍄', cat: 'bio_ch29', catLabel: 'Ch 29 – Fungi',
    title: 'The Largest Living Organism on Earth is a Fungus. And It\'s Thousands of Years Old.',
    text: 'An **Armillaria ostoyae** (honey fungus) individual in Oregon\'s Malheur National Forest covers 2,385 acres (9.65 km²) and is estimated to be 2,400–8,650 years old — making it potentially the oldest and largest living organism ever confirmed. Fungi grow as a network of **hyphae** — microscopic filaments — collectively called **mycelium**. What we see as a mushroom is just the fruiting body: the reproductive structure that emerges temporarily. The organism itself is the vast invisible underground network. The forest floor is not soil. It\'s the surface of something ancient and vast.',
  },
  {
    emoji: '🌳', cat: 'bio_ch29', catLabel: 'Ch 29 – Fungi',
    title: 'Fungi Are More Closely Related to Animals Than to Plants. You\'re Genetically Closer to a Mushroom Than a Rose.',
    text: 'Molecular phylogenetics places **fungi** in the opisthokont clade — the same evolutionary group as animals — while plants are in a completely separate lineage. Fungal cell walls are made of **chitin** (same as insect exoskeletons). Fungi are heterotrophs — they can\'t photosynthesise and must absorb nutrients from organic matter. They secrete digestive enzymes externally and absorb the products (**absorptive heterotrophy**). You share more genes with *Saccharomyces cerevisiae* (baker\'s yeast) than yeast does with a rose. The organism most similar to you at the molecular level makes your bread rise and ferments your beer.',
  },

  // ── Chapter 30 & 31: Plants ──
  {
    emoji: '🌱', cat: 'bio_ch30', catLabel: 'Ch 30-31 – Plant Evolution & Diversity',
    title: 'Plants Colonised Land 470 Million Years Ago. And They Had to Reinvent Everything to Do It.',
    text: 'The transition from aquatic algae to land plants required solving: **desiccation** (waxy cuticle), **gas exchange without losing water** (stomata), **standing upright without water buoyancy** (lignin and vascular tissue), **reproduction without water** (pollen and seeds replace free-swimming sperm). Each innovation was built on the previous one, leading to four major plant groups: **bryophytes** (mosses — no vascular tissue), **ferns** (vascular but still need water for reproduction), **gymnosperms** (vascular, seeds, but naked — pine, spruce), **angiosperms** (vascular, seeds enclosed in fruit — the dominant plants today). 470 million years of engineering. Four solutions. One conquest of land.',
  },
  {
    emoji: '🌸', cat: 'bio_ch31', catLabel: 'Ch 30-31 – Plant Evolution & Diversity',
    title: 'Flowers Are Sophisticated Evolutionary Contracts Between Plants and Animals.',
    text: '**Angiosperms** (flowering plants) dominate terrestrial vegetation because flowers are extraordinarily effective at manipulating animal behaviour for reproduction. **Pollination syndromes** — suites of floral traits evolved to attract specific pollinators — include: bee flowers (blue/yellow, UV patterns, landing platform), butterfly flowers (red/pink, tubular, nectaries), moth flowers (white, fragrant at night), bird flowers (red, odourless, abundant dilute nectar), bat flowers (large, white, musty smell). The plant evolves to deceive or reward an animal. The animal evolves to exploit the plant. Both species shape each other\'s evolution — **coevolution**. Every flower is a manipulation device with 100 million years of optimisation.',
  },

  // ── Chapter 32: Invertebrates ──
  {
    emoji: '🐙', cat: 'bio_ch32', catLabel: 'Ch 32 – Invertebrates',
    title: 'Invertebrates Are 97% of All Animal Species. We Are the Weird Minority.',
    text: 'Of ~1.5 million described animal species, vertebrates (fish, amphibians, reptiles, birds, mammals) account for only ~50,000 — roughly 3%. **Invertebrates** — arthropods, molluscs, annelids, echinoderms, cnidarians, porifera, and others — make up the remaining 97%. Insects alone are estimated at ~1 million described species with millions more undescribed. By biomass, by species count, by ecological role, invertebrates dominate life on Earth. Every ecosystem — from deep ocean hydrothermal vents to forest canopies — runs on invertebrate biochemistry and behaviour. We are an afterthought. A very self-important afterthought.',
  },
  {
    emoji: '🦑', cat: 'bio_ch32', catLabel: 'Ch 32 – Invertebrates',
    title: 'The Octopus Has Nine Brains. Eight Are in Its Arms.',
    text: 'Octopuses have a **central brain** plus a **brachial ganglion** (neural cluster) in each of their eight arms — totalling nine neural clusters. Each arm has ~40–50 million neurons and can taste, touch, and react to stimuli independently without consulting the central brain. When an arm is severed, it continues to react to touch stimuli for up to an hour. This **distributed nervous system** means an octopus doesn\'t control its arms — it more accurately suggests what it wants them to do, and the arms work out the details. This is a completely alien architecture for intelligence. And they evolved it completely independently from vertebrate intelligence. Two paths to complex cognition. Zero shared ancestry.',
  },

  // ── Chapter 33: Vertebrates ──
  {
    emoji: '🐟', cat: 'bio_ch33', catLabel: 'Ch 33 – Vertebrates',
    title: 'All Terrestrial Vertebrates — Including You — Are Descended From a Fish That Grew Legs.',
    text: 'The **tetrapod** lineage — all vertebrates with four limbs (or derived from four-limbed ancestors) — evolved from lobe-finned fish approximately 375 million years ago. *Tiktaalik*, *Ichthyostega*, and *Acanthostega* document this transition. The four limbs of all tetrapods are **homologous** — same evolutionary origin, modified for different functions: walking (humans), flying (birds, bats), swimming (whales, penguins, seals), digging (moles). Your arms, a bat\'s wings, a whale\'s flippers, and a frog\'s legs all come from the same ancestral fish fin. Homology doesn\'t lie. We are all fish that forgot the water.',
  },

  // ============================================================
  // UNIT 6: PLANT BIOLOGY (Ch 34–38) | ~20 Facts
  // ============================================================

  // ── Chapter 34: Plant Structure & Growth ──
  {
    emoji: '🌿', cat: 'bio_ch34', catLabel: 'Ch 34 – Plant Structure & Growth',
    title: 'Plants Never Stop Growing. They Have Permanent Embryonic Tissue Called Meristems.',
    text: 'Unlike animals, where growth is mostly confined to development, plants retain regions of permanently **undifferentiated, dividing cells** called **meristems** throughout their life. **Apical meristems** at root and shoot tips drive primary growth (length). **Lateral meristems** — **vascular cambium** (produces secondary xylem and phloem) and **cork cambium** (produces bark) — drive secondary growth (girth) in woody plants. A 3,000-year-old bristlecone pine is still growing at its meristems. A sequoia tree\'s vascular cambium is still adding wood rings at age 2,000. Plants are not organisms with a fixed adult form. They are permanent construction sites.',
  },
  {
    emoji: '🌳', cat: 'bio_ch34', catLabel: 'Ch 34 – Plant Structure & Growth',
    title: 'Tree Rings Are a Climate Archive. A Single Tree Can Record 1,000 Years of Weather.',
    text: 'Each year, a tree\'s **vascular cambium** produces a ring of **secondary xylem (wood)** — wide rings in good conditions (warm, wet), narrow rings in poor conditions (drought, cold). The study of tree rings is called **dendrochronology**. Ring width, density, and isotopic composition record temperature, precipitation, drought, fire, and insect outbreaks year by year. Living trees provide records going back ~1,000 years. Overlapping ring patterns from dead trees (used in ancient buildings) extend records back 12,000 years. We can read climate history in wood the way a doctor reads medical history in blood tests. Trees have been recording Earth\'s biography for millennia.',
  },

  // ── Chapter 35: Plant Transport ──
  {
    emoji: '💧', cat: 'bio_ch35', catLabel: 'Ch 35 – Plant Transport',
    title: 'Trees Pull Water 100 Metres Upward Against Gravity. With No Pump.',
    text: 'The **cohesion-tension theory** explains how water ascends tall trees: water evaporates from leaves via **transpiration**, creating negative pressure (tension) in the **xylem**. Because water molecules are strongly attracted to each other (**cohesion** via hydrogen bonds) and to xylem walls (**adhesion**), this tension pulls a continuous column of water upward from roots to leaves. The water is under tension — like stretching a rope — not pushed. A 100-metre redwood must maintain a continuous water column under negative pressure for decades. If a single air bubble enters the xylem column (**embolism**), it breaks the column and the branch dies. Trees solve hydraulic engineering with chemistry. No pump required.',
  },
  {
    emoji: '🍯', cat: 'bio_ch35', catLabel: 'Ch 35 – Plant Transport',
    title: 'Phloem Transports Sugar Under Pressure. And the Mechanism Was Debated for 50 Years.',
    text: '**Phloem** transports **sucrose and other organic solutes** from **sources** (leaves — where photosynthesis makes sugar) to **sinks** (roots, fruits, growing tissue — where sugar is consumed). The **pressure-flow hypothesis** (Münch): sucrose is actively loaded into phloem at the source (by H⁺/sucrose cotransporters), lowering water potential and drawing in water by osmosis, building pressure. At the sink, sucrose is unloaded, pressure drops, and water exits. This creates a pressure gradient that drives bulk flow from source to sink. Unlike xylem (passive, tension-driven), phloem is active — ATP-dependent loading. Cut a phloem-feeding aphid off its feeding tube and the sap continues flowing for hours under its own pressure. You can literally tap the tree\'s sugar pipeline.',
  },

  // ── Chapter 36: Plant Nutrition ──
  {
    emoji: '🪴', cat: 'bio_ch36', catLabel: 'Ch 36 – Plant Nutrition',
    title: 'Nitrogen is the Most Common Gas in the Atmosphere. Plants Can\'t Use Any of It.',
    text: 'Earth\'s atmosphere is 78% nitrogen gas (N₂). Plants are surrounded by it. They cannot use a single molecule of it. **Nitrogen fixation** — breaking the incredibly stable N≡N triple bond and converting N₂ to ammonia (NH₃) that plants can absorb — requires the enzyme **nitrogenase**, found only in certain bacteria: free-living *Azotobacter*, and symbiotic **Rhizobia** living in root nodules of legumes. The Haber-Bosch process (industrial nitrogen fixation) was developed in 1909 and now produces fertiliser that feeds ~half of humanity. We are alive because a century-old industrial process solved the same problem that evolution gave to bacteria. Plants are starving in a sea of nitrogen they cannot eat.',
  },
  {
    emoji: '🌺', cat: 'bio_ch36', catLabel: 'Ch 36 – Plant Nutrition',
    title: 'Carnivorous Plants Evolved Because Their Soil Has Almost No Nutrients.',
    text: '**Carnivorous plants** — Venus flytraps, sundews, pitcher plants, bladderworts — evolved in **nutrient-poor environments** (bogs, fens, rocky outcrops with low nitrogen and phosphorus). They use photosynthesis for carbon and energy, but supplement their nutrition by **trapping and digesting animals** (mainly insects). Trapping mechanisms: snap traps (Venus flytrap — triggered by mechanoreceptor hairs), sticky mucilage (sundews), pitfall traps filled with digestive fluid (pitcher plants), suction traps (bladderworts — fastest plant movement at 100th of a millisecond). Carnivorous plants evolved independently at least six separate times in response to the same environmental pressure. Same problem. Same solution. Six times. Convergent evolution at its most elegant.',
  },

  // ── Chapter 37: Plant Reproduction ──
  {
    emoji: '🌻', cat: 'bio_ch37', catLabel: 'Ch 37 – Plant Reproduction',
    title: 'A Seed is an Embryo in a Survival Pod. It Can Wait Decades for the Right Moment.',
    text: 'A **seed** contains a plant embryo, endosperm (food supply), and a protective seed coat. **Dormancy** — metabolic arrest — allows seeds to survive extremes of temperature, desiccation, and time until conditions favour germination. The oldest viable seed germinated in recorded history: a ~2,000-year-old **Judean date palm** seed (Methuselah) found at Masada, successfully germinated in 2005. Seeds of the sacred lotus have germinated after 1,300 years. Seeds in permafrost have been revived after 30,000 years. The seed is evolution\'s pause button — a complete organism in suspended animation, waiting indefinitely for its moment.',
  },
  {
    emoji: '🍎', cat: 'bio_ch37', catLabel: 'Ch 37 – Plant Reproduction',
    title: 'Fruits Are Plants Bribing Animals to Disperse Their Seeds.',
    text: 'A **fruit** is a mature ovary containing seeds — and it evolved specifically as a **seed dispersal mechanism**. Fleshy, sweet, nutritious fruits attract animals to eat them. Seeds pass through digestive systems unharmed and are deposited (with fertiliser) far from the parent plant. This is **endozoochory**. Other dispersal strategies: **anemochory** (wind — dandelion parachutes, maple helicopters), **hydrochory** (water — coconuts floating across oceans), **ballochory** (explosive dehiscence — squirting cucumber ejects seeds at 100 km/h). The coconut crossed the Pacific Ocean using ocean currents. Every fruit in your supermarket is the result of a 100-million-year arms race between plants and animals, each shaping the other\'s evolution.',
  },

  // ── Chapter 38: Plant Responses & Hormones ──
  {
    emoji: '☀️', cat: 'bio_ch38', catLabel: 'Ch 38 – Plant Responses & Hormones',
    title: 'Plants Have Five Major Hormones. Each Controls a Different Aspect of Their Life.',
    text: 'Plant **hormones (phytohormones)**: **Auxin** (IAA) — cell elongation, apical dominance, phototropism; **Gibberellins** — stem elongation, seed germination, flower induction; **Cytokinins** — cell division, delay of senescence; **Abscisic acid (ABA)** — stomatal closure during drought, seed dormancy (the "stress hormone"); **Ethylene** — fruit ripening, leaf abscission (why leaves fall), response to wounding. Ethylene is a **gas** — meaning ripe fruit releases a hormone into the air that triggers ripening in nearby fruit. Placing a ripe banana near green tomatoes accelerates ripening. The "one rotten apple spoils the barrel" is chemistry. Not metaphor. It\'s ethylene.',
  },
  {
    emoji: '🔄', cat: 'bio_ch38', catLabel: 'Ch 38 – Plant Responses & Hormones',
    title: 'Some Plants Need Winter Before They Can Flower. They\'re Counting the Cold.',
    text: '**Vernalisation** is the requirement for an extended cold period before a plant can flower. Winter wheat, biennials like foxglove, and many perennials only flower after experiencing winter temperatures — it\'s a developmental clock ensuring they don\'t flower in autumn and die in winter. The mechanism: prolonged cold causes epigenetic silencing of a floral repressor gene (**FLC** in *Arabidopsis*) through histone methylation — a change maintained throughout the plant\'s life. Plants don\'t just sense seasons — they remember winter through **epigenetic marks** on their chromosomes. They carry molecular memories of the cold. Every spring bloom is the result of a plant that survived winter and remembered.',
  },

  // ============================================================
  // UNIT 7: ANIMAL PHYSIOLOGY (Ch 39–47) | ~45 Facts
  // ============================================================

  // ── Chapter 39: Animal Body Plans & Homeostasis ──
  {
    emoji: '⚖️', cat: 'bio_ch39', catLabel: 'Ch 39 – Body Plans & Homeostasis',
    title: 'Homeostasis is Not Maintaining Constant Conditions. It\'s Continuously Correcting for Change.',
    text: '**Homeostasis** is the maintenance of a relatively stable internal environment through **negative feedback loops** — mechanisms that detect a deviation from a set point and activate responses that return the system toward that set point. Body temperature, blood glucose, blood pH, osmolarity — all are regulated by negative feedback. **Positive feedback** (where the response amplifies the deviation) is rare and used for specific events that need to go to completion: childbirth contractions, blood clotting, nerve impulse generation, LH surge triggering ovulation. The difference: negative feedback stabilises (the thermostat). Positive feedback escalates (the microphone squealing). Life runs on the thermostat. But the most dramatic life events require the microphone.',
  },
  {
    emoji: '🥶', cat: 'bio_ch39', catLabel: 'Ch 39 – Body Plans & Homeostasis',
    title: 'Endotherms Pay an Enormous Metabolic Tax to Maintain Body Temperature. It\'s Worth It.',
    text: '**Endotherms** (mammals and birds) generate body heat through metabolic processes and maintain constant body temperature regardless of environment. **Ectotherms** (reptiles, fish, amphibians) rely on environmental heat and don\'t pay this metabolic cost. The cost of endothermy: a resting mammal requires 5–10× more food than an equivalently-sized reptile to fuel heat generation. But the benefit: **consistent enzyme activity** at all temperatures, allowing activity in cold environments and at night where ectotherms are sluggish. Endotherms conquered cold climates and nocturnal niches. The energy tax bought an ecological empire. The mammals who survived the dinosaur-killing winter did so because they generated their own heat.',
  },

  // ── Chapter 40: Nervous System ──
  {
    emoji: '⚡', cat: 'bio_ch40', catLabel: 'Ch 40 – Nervous System',
    title: 'A Nerve Signal is a Wave of Ion Movements, Not an Electrical Current.',
    text: 'The **action potential** — the nerve signal — travels along an axon not as electrons flowing through a wire, but as a wave of ion redistribution. At rest: Na⁺ is high outside, K⁺ is high inside (maintained by the Na⁺/K⁺ pump), creating a **resting membrane potential** of ~−70mV. Stimulation opens voltage-gated Na⁺ channels → Na⁺ rushes in → inside becomes positive (**depolarisation**). Then voltage-gated K⁺ channels open → K⁺ rushes out → repolarises. This wave propagates along the axon at 1–100 m/s. In myelinated neurons, the signal jumps between **nodes of Ranvier** (**saltatory conduction**) — reaching 120 m/s. You think in ion fluxes. Every thought you have ever had was this pattern, repeated billions of times.',
  },
  {
    emoji: '🧠', cat: 'bio_ch40', catLabel: 'Ch 40 – Nervous System',
    title: 'You Have Two Nervous Systems Running Simultaneously. One You Control. One Controls You.',
    text: 'The **somatic nervous system** controls voluntary muscle movement — you choose to move. The **autonomic nervous system** controls involuntary functions — heart rate, digestion, glands, blood pressure — without conscious input. The autonomic system has two divisions with opposing effects: **sympathetic** ("fight-or-flight" — increases heart rate, dilates airways, redirects blood to muscles, releases adrenaline) and **parasympathetic** ("rest-and-digest" — slows heart rate, stimulates digestion, conserves energy). Both operate continuously, their balance shifting with circumstances. You cannot consciously stop your heart from beating. You cannot decide to stop digesting. A significant fraction of your biology is happening entirely without you. You are not fully in charge of your own body.',
  },
  {
    emoji: '😊', cat: 'bio_ch40', catLabel: 'Ch 40 – Nervous System',
    title: 'Neurotransmitters Don\'t Carry the Signal Across the Synapse. They Recreate It.',
    text: 'At a **synapse**, the electrical action potential CANNOT cross the synaptic cleft. Instead: the presynaptic neuron releases **neurotransmitters** (dopamine, serotonin, acetylcholine, glutamate, GABA) into the cleft → they bind receptors on the postsynaptic membrane → ion channels open → a new action potential is generated (or inhibited, in the case of inhibitory neurotransmitters like GABA). The signal is converted: electrical → chemical → electrical. This chemical step allows **signal modulation** — neurotransmitter release can be enhanced or reduced by drugs, emotion, and learning. Antidepressants, anaesthetics, stimulants, painkillers — all work by interfering at this chemical step. The chemical synapse is the most pharmacologically important gap in biology.',
  },

  // ── Chapter 41: Sensory Systems ──
  {
    emoji: '👁️', cat: 'bio_ch41', catLabel: 'Ch 41 – Sensory Systems',
    title: 'Your Eye Has a Blind Spot. Your Brain Invents the Missing Image.',
    text: 'The **optic disc** — where the optic nerve exits the retina — has no photoreceptors, creating a genuine blind spot in your visual field. You don\'t notice it because your brain fills in the gap with surrounding visual information — a process called **perceptual completion**. Your brain is not passively recording reality. It is actively constructing it — filling in gaps, smoothing discontinuities, and correcting for the ~100ms lag in visual processing by predicting what will be there. Everything you "see" is a mental reconstruction, slightly delayed, with gaps filled in. Your visual experience of the world is a sophisticated hallucination your brain generates to approximately match reality.',
  },
  {
    emoji: '👃', cat: 'bio_ch41', catLabel: 'Ch 41 – Sensory Systems',
    title: 'You Can Detect One Trillion Different Smells. But You Can Only Name a Handful.',
    text: 'Humans have ~400 functional **olfactory receptor genes** — one of the largest gene families in the genome. Different combinations of receptors respond to different odorant molecules — a **combinatorial code** that can theoretically encode ~10¹² (one trillion) distinct smells. Yet humans are remarkably bad at identifying and naming smells without visual cues. This is because olfactory processing connects to the **amygdala and hippocampus** (emotion and memory) far more directly than to language areas. Smells trigger powerful memories and emotions but resist verbal description. You can detect a trillion smells. You can name about twenty. The richest sensory system in your brain is almost entirely below language.',
  },

  // ── Chapter 42: Musculoskeletal System ──
  {
    emoji: '💪', cat: 'bio_ch42', catLabel: 'Ch 42 – Musculoskeletal System',
    title: 'Muscle Contraction Works by Thick and Thin Filaments Sliding Past Each Other. Not Contracting.',
    text: 'The **sliding filament theory** (Huxley & Hanson, 1954) explains muscle contraction: **myosin** (thick filaments) heads attach to **actin** (thin filaments) and pull them toward the centre of the sarcomere — the **power stroke**. The sarcomere shortens. The filaments themselves don\'t shorten — they slide past each other. This requires: Ca²⁺ (released from sarcoplasmic reticulum upon nerve stimulation → binds troponin → uncovers actin binding sites) and ATP (powers the myosin head reset). No ATP = no reset = permanent contraction. This is why corpses become rigid (**rigor mortis**) after death — ATP is depleted, myosin heads lock onto actin, and muscles freeze in contraction. Death freezes the machine mid-stroke.',
  },
  {
    emoji: '🦴', cat: 'bio_ch42', catLabel: 'Ch 42 – Musculoskeletal System',
    title: 'Bone is a Living Tissue That Continuously Destroys and Rebuilds Itself.',
    text: '**Bone remodelling** is the continuous process of **osteoclast** (bone-destroying) and **osteoblast** (bone-forming) activity. ~10% of your skeleton is replaced each year. This serves multiple functions: repairing micro-fractures, adjusting bone density in response to mechanical load (Wolff\'s Law — bones strengthen along lines of stress), releasing calcium for metabolic needs, and embedding new blood vessels. Astronauts lose 1–2% bone density per month in microgravity because without mechanical loading, osteoclast activity exceeds osteoblast activity. Olympic weightlifters have measurably denser bones than sedentary individuals. Your skeleton knows what you do with it and responds. The hardest tissue in your body is the most responsive to your lifestyle.',
  },

  // ── Chapter 43: Circulation & Gas Exchange ──
  {
    emoji: '❤️', cat: 'bio_ch43', catLabel: 'Ch 43 – Circulation & Gas Exchange',
    title: 'Your Heart Beats 100,000 Times a Day. Every Beat is an Electrical Event Before a Mechanical One.',
    text: 'The heartbeat originates in the **sinoatrial (SA) node** — the heart\'s pacemaker — located in the right atrium. It spontaneously depolarises ~70 times per minute, generating an electrical impulse that spreads across the atria (atrial contraction), reaches the **atrioventricular (AV) node** (brief delay allowing ventricles to fill), travels down the **Bundle of His** and **Purkinje fibres**, and triggers ventricular contraction. This entire electrical sequence is what the **ECG (electrocardiogram)** records. Heart attacks damage this conduction system — arrhythmias are the electrical breakdown that kills. Your heart doesn\'t beat because muscles are told to contract. It beats because an electrical pacemaker fires, and the muscle follows.',
  },
  {
    emoji: '🩸', cat: 'bio_ch43', catLabel: 'Ch 43 – Circulation & Gas Exchange',
    title: 'Haemoglobin Doesn\'t Just Carry Oxygen. It Changes Shape Depending on How Much Oxygen It\'s Already Carrying.',
    text: 'Haemoglobin\'s **cooperative binding** — described by the sigmoidal oxygen dissociation curve — means that binding one O₂ molecule increases the affinity for the next. Once one subunit binds O₂, it shifts the protein\'s conformation (**R-state**), making the other three subunits bind O₂ more easily. This creates a steep loading curve in the lungs (high pO₂ — haemoglobin loads rapidly) and steep unloading in tissues (low pO₂, high CO₂, lower pH — **Bohr effect** shifts the curve right, dropping O₂). The most important oxygen carrier in biology is not a simple carrier. It\'s an allosteric machine that senses its environment and adjusts delivery accordingly. A protein that thinks.',
  },
  {
    emoji: '🫁', cat: 'bio_ch43', catLabel: 'Ch 43 – Circulation & Gas Exchange',
    title: 'Fish and Mammals Both Extract Oxygen From Their Environments. Fish Are More Efficient.',
    text: 'Fish gills use **countercurrent exchange** — water flows over gill lamellae in the opposite direction to blood flow. This maintains a constant concentration gradient across the entire exchange surface, allowing >80% O₂ extraction from water. Human lungs use **tidal ventilation** — air flows in and out through the same passages. Residual air mixes with fresh air, diluting O₂ concentration. Humans extract only ~25% of O₂ from each breath. Bird lungs use **crosscurrent flow** — more efficient than mammals, enabling flight at high altitudes. If human lungs operated like fish gills, you could breathe comfortably at the summit of Everest without supplemental oxygen. We breathe. Fish breathe better.',
  },

  // ── Chapter 44: Immune System ──
  {
    emoji: '🛡️', cat: 'bio_ch44', catLabel: 'Ch 44 – Immune System',
    title: 'Your Immune System Has Two Divisions. One Responds in Hours. The Other Takes Days But Never Forgets.',
    text: 'The **innate immune system** — non-specific, present at birth — responds within minutes to hours: **physical barriers** (skin, mucus), **phagocytes** (neutrophils, macrophages engulf pathogens), **natural killer cells**, **complement proteins**, and **inflammation**. The **adaptive immune system** — specific, develops over days — involves **B lymphocytes** (produce antibodies after clonal selection and expansion) and **T lymphocytes** (**cytotoxic T cells** kill infected cells; **helper T cells** coordinate the response). After an infection is cleared, **memory cells** persist for years or decades — the basis of vaccine immunity. The first time: 10–14 days to mount a response. After memory: 1–3 days. Vaccines don\'t trick your immune system. They give it the memory without the disease.',
  },
  {
    emoji: '🎯', cat: 'bio_ch44', catLabel: 'Ch 44 – Immune System',
    title: 'An Antibody is a Y-Shaped Protein That Can Recognise Exactly One Molecular Shape.',
    text: '**Antibodies (immunoglobulins)** are Y-shaped proteins with two identical **antigen-binding sites** at the tips of the Y, with specificity determined by the hypervariable regions. The immune system can produce ~10⁷–10¹⁸ different antibody specificities through **V(D)J recombination** — random assembly of gene segments that generates diversity before any antigen is encountered. When a B cell encounters its matching antigen, it undergoes **clonal selection** — the cell divides, all descendants making the same antibody — and **somatic hypermutation** — further refining antibody affinity. One protein. Millions of variants. Each variant recognising one specific molecular shape. The adaptive immune system generates a custom weapon for every threat it has ever encountered.',
  },
  {
    emoji: '😤', cat: 'bio_ch44', catLabel: 'Ch 44 – Immune System',
    title: 'Autoimmune Diseases Happen When the Immune System Mistakes Self for Foreign.',
    text: 'During T cell development in the thymus, cells that react strongly to **self-antigens** are eliminated — **clonal deletion** (negative selection). This self-tolerance mechanism is imperfect. In **autoimmune diseases**, T or B cells that escaped deletion attack the body\'s own tissues. Type 1 diabetes: immune attack on pancreatic beta cells. Multiple sclerosis: attack on myelin sheaths of neurons. Rheumatoid arthritis: attack on joint synovium. Lupus: attack on multiple tissues. Together, autoimmune diseases affect ~5–8% of the population — and are more common in women (oestrogen modulates immune responses). The mechanism that protects you from infection is the same mechanism that occasionally decides your own body is the enemy.',
  },

  // ── Chapter 45: Osmoregulation & Excretion ──
  {
    emoji: '🫘', cat: 'bio_ch45', catLabel: 'Ch 45 – Osmoregulation & Excretion',
    title: 'Your Kidneys Filter All Your Blood 40 Times a Day. And They Keep Almost Everything.',
    text: 'The **nephron** — the functional unit of the kidney — processes blood through: **glomerular filtration** (blood pressure forces fluid into Bowman\'s capsule — ~180L/day filtered), **tubular reabsorption** (99% of water, glucose, amino acids, ions are reabsorbed back into blood in the proximal tubule, loop of Henle, and distal tubule), and **tubular secretion** (additional waste products added to filtrate). Final urine output: ~1.5L/day from 180L filtered. The kidney reabsorbs 99.2% of the fluid it filters. The **loop of Henle** creates a concentration gradient in the kidney medulla that allows water to be reclaimed without using ATP — purely osmotic. The kidney is not primarily an excretory organ. It\'s primarily a conservation organ that happens to produce urine as a side effect.',
  },
  {
    emoji: '🏜️', cat: 'bio_ch45', catLabel: 'Ch 45 – Osmoregulation & Excretion',
    title: 'Desert Animals Have Kidneys That Can Produce Urine 25 Times More Concentrated Than Blood.',
    text: 'The **Australian hopping mouse** (*Notomys alexis*) can produce urine with an osmolarity of ~9,370 mOsm/kg — nearly 25× blood osmolarity and the highest recorded in any mammal. This is achieved through an extremely long **loop of Henle** that extends deep into the kidney medulla, generating a powerful osmotic gradient. By contrast, humans can concentrate urine to ~4× blood osmolarity. Kangaroo rats in American deserts never need to drink liquid water — they metabolise water from their dry seed diet and recapture it in their kidneys. Desert survival is not about finding water. It\'s about building a kidney that never wastes it.',
  },

  // ── Chapter 46: Hormones & Endocrine System ──
  {
    emoji: '🔬', cat: 'bio_ch46', catLabel: 'Ch 46 – Endocrine System',
    title: 'The Hypothalamus is Where the Nervous System and Endocrine System Become One.',
    text: 'The **hypothalamus** is the master integrator — a small brain region that receives nervous system inputs (stress, temperature, light, emotion) and converts them into hormonal outputs via the **pituitary gland**. The hypothalamus secretes **releasing hormones** that control the anterior pituitary, which releases **tropic hormones** that control peripheral endocrine glands (thyroid, adrenal cortex, gonads). This **hypothalamic-pituitary-gonadal (HPG) axis** regulates reproduction. The **hypothalamic-pituitary-adrenal (HPA) axis** regulates stress responses. When you\'re stressed, your brain tells your hypothalamus, which tells your pituitary, which tells your adrenal glands to release cortisol. Every emotion you feel has a hormonal consequence. Your feelings are chemistry.',
  },
  {
    emoji: '🍬', cat: 'bio_ch46', catLabel: 'Ch 46 – Endocrine System',
    title: 'Insulin and Glucagon are Opposites That Work Together to Keep Your Blood Sugar in a 10mmol/L Window.',
    text: 'Blood glucose is regulated by **negative feedback** involving two pancreatic hormones: **Insulin** (from beta cells): released when blood glucose rises → stimulates glucose uptake by cells, glycogen synthesis in liver and muscle, fat synthesis → blood glucose falls. **Glucagon** (from alpha cells): released when blood glucose falls → stimulates glycogen breakdown (**glycogenolysis**) and glucose synthesis from non-carbohydrates (**gluconeogenesis**) in the liver → blood glucose rises. Normal range: 4–8 mmol/L. Below 2.5 mmol/L: hypoglycaemic coma. Above 25 mmol/L: hyperglycaemic crisis. A 10mmol/L window. Maintained 24 hours a day by two proteins pointing in opposite directions. Diabetes is what happens when one half of this see-saw breaks.',
  },
  {
    emoji: '😴', cat: 'bio_ch46', catLabel: 'Ch 46 – Endocrine System',
    title: 'Melatonin Doesn\'t Make You Sleep. It Tells Your Brain What Time It Is.',
    text: '**Melatonin** is secreted by the **pineal gland** in response to darkness — levels rise in the evening and peak at ~2–4 AM. It is not a sleep inducer — it\'s a **chronobiological signal**, telling the brain that darkness has arrived and synchronising the **circadian rhythm** (internal ~24-hour biological clock) with the environment. Blue light from screens suppresses melatonin production — tricking the pineal gland into thinking it\'s still daytime. This delays sleep onset and disrupts circadian rhythm synchrony. Melatonin supplements taken correctly (at the right time, low dose) shift circadian phase — useful for jet lag. Taken at the wrong time, they\'re useless or counterproductive. It\'s a clock signal. Not a sleeping pill.',
  },

  // ── Chapter 47: Reproduction & Development ──
  {
    emoji: '🥚', cat: 'bio_ch47', catLabel: 'Ch 47 – Reproduction & Development',
    title: 'A Single Fertilised Egg Becomes 37 Trillion Cells Through One Process: Differential Gene Expression.',
    text: '**Embryonic development** begins with a **zygote** — one cell with the complete genome. Through **cleavage** (rapid mitotic divisions), **gastrulation** (formation of three germ layers: ectoderm, mesoderm, endoderm), and **organogenesis** (organ formation), one cell becomes a complete organism. The key question: if every cell has identical DNA, why do liver cells look nothing like neurons? **Differential gene expression** — controlled by **morphogens** (concentration gradients of signalling molecules that specify cell identity based on position), **Hox genes** (master regulatory genes specifying body axis identity), and cell-to-cell signalling. A **morphogen gradient** turns positional information into cell fate. The egg encodes not just the organism\'s parts — but the instructions for where each part should be built.',
  },
  {
    emoji: '🧬', cat: 'bio_ch47', catLabel: 'Ch 47 – Reproduction & Development',
    title: 'Hox Genes Are the Same in Flies and Humans. And They\'re Still Doing the Same Job.',
    text: '**Hox genes** are a family of transcription factor genes that specify body segment identity along the anterior-posterior axis. They\'re found in virtually all bilateral animals — from *Drosophila* (8 Hox genes in one cluster) to humans (39 Hox genes in four clusters). The same genes, in the same order on the chromosome, specifying the same axis in a fly and a human. Their sequence is conserved by ~600 million years of evolution. If you transplant a mouse Hox gene into a fly, it functions correctly. Animals as different as insects and mammals use the same molecular toolkit to build their body plans. The blueprint of bilateral animal body plans is half a billion years old and still running.',
  },

  // ============================================================
  // UNIT 8: ECOLOGY (Ch 48–53) | ~25 Facts
  // ============================================================

  // ── Chapter 48: Behavioural Biology ──
  {
    emoji: '🐦', cat: 'bio_ch48', catLabel: 'Ch 48 – Behavioural Biology',
    title: 'Behaviour Has Both Genetic and Environmental Components. The Debate is Never Just Nature or Nurture.',
    text: 'Tinbergen\'s four questions for understanding behaviour: **Causation** (what stimuli and mechanisms trigger it?), **Development** (how does it develop over the organism\'s lifetime?), **Function** (what is its adaptive value?), **Evolution** (how did it arise phylogenetically?). **Fixed action patterns** — stereotyped, species-specific behaviours triggered by specific stimuli (**sign stimuli** / **releasers**) — show strong genetic components. **Imprinting** shows a developmental critical period after which the behaviour is fixed. No behaviour is purely genetic or purely learned — the **biopsychosocial model** applies to all of animal behaviour. Asking "is it nature or nurture?" is like asking whether a rectangle\'s area is determined by width or height.',
  },
  {
    emoji: '🤝', cat: 'bio_ch48', catLabel: 'Ch 48 – Behavioural Biology',
    title: 'Altruism in Nature Can Be Explained by Genes, Not Kindness.',
    text: '**Altruistic behaviour** — helping others at cost to self — appears to contradict natural selection (why sacrifice your reproductive success?). **Kin selection** (W.D. Hamilton, 1964) resolves this: organisms share genes with relatives. Helping a sibling (50% shared genes) reproduce is genetically equivalent to reproducing yourself. Hamilton\'s rule: altruism is favoured when rB > C (r = genetic relatedness, B = benefit to recipient, C = cost to actor). Bees die defending the hive because the queen is their mother — their genes are carried by their sisters. Meerkat alarm calls risk predation but protect relatives who share the caller\'s genes. J.B.S. Haldane said: "I would die for two brothers or eight cousins." He was calculating Hamilton\'s rule. Selflessness in nature is just selfishness at the gene level.',
  },

  // ── Chapter 49: Population Ecology ──
  {
    emoji: '📈', cat: 'bio_ch49', catLabel: 'Ch 49 – Population Ecology',
    title: 'Populations Grow Exponentially When Unchecked. They Never Do In Nature.',
    text: '**Exponential population growth** (J-shaped curve) occurs when resources are unlimited — described by dN/dt = rN, where r is the intrinsic rate of increase and N is population size. In reality, **limiting factors** — food, space, disease, predation — slow growth as populations approach **carrying capacity (K)**. The result is **logistic growth** (S-shaped curve): dN/dt = rN[(K−N)/K]. At low N, growth is nearly exponential. As N approaches K, growth decelerates to zero. This is the **logistic model**. The human population reached 8 billion in 2022. Global population growth rate has slowed from 2.1% per year in 1962 to ~0.9% today. We may be on the S-curve\'s deceleration phase. Or we may be approaching carrying capacity. Ecologists disagree about which.',
  },
  {
    emoji: '🦌', cat: 'bio_ch49', catLabel: 'Ch 49 – Population Ecology',
    title: 'Predator and Prey Populations Oscillate in Predictable Cycles. The Math Was Worked Out in 1926.',
    text: 'The **Lotka-Volterra model** (Lotka 1925, Volterra 1926) describes predator-prey population dynamics as coupled oscillations: prey grows when predators are rare → predators increase as prey becomes abundant → prey declines due to predation → predators decline due to food shortage → prey recovers. This cycle repeats with a characteristic period. The Canadian lynx and snowshoe hare populations oscillate on a ~10-year cycle, documented in Hudson Bay Company fur trade records since the 1800s — one of ecology\'s most famous datasets. The hare drives the lynx. The lynx suppresses the hare. The two species govern each other\'s population numbers across a continent. Predator and prey — locked in a permanent mathematical dance.',
  },

  // ── Chapter 50: Community Ecology ──
  {
    emoji: '🌊', cat: 'bio_ch50', catLabel: 'Ch 50 – Community Ecology',
    title: 'Remove One Species From an Ecosystem and the Whole Community Can Collapse. These Are Called Keystone Species.',
    text: 'A **keystone species** has a disproportionately large effect on its ecosystem relative to its abundance. Robert Paine\'s 1969 experiment: removing sea stars (*Pisaster ochraceus*) from a tidal pool allowed mussels (their primary prey) to dominate and crowd out all other species — biodiversity collapsed from 15 species to 1. Wolf reintroduction to Yellowstone in 1995: wolves reduced elk overgrazing → riparian vegetation recovered → stream banks stabilised → beavers returned → wetlands formed → biodiversity increased. This **trophic cascade** reshaped entire river geomorphology. One predator changed the shape of rivers. The most important species in an ecosystem is often not the most abundant. It\'s the one holding everything else in check.',
  },
  {
    emoji: '🌺', cat: 'bio_ch50', catLabel: 'Ch 50 – Community Ecology',
    title: 'Ecological Succession Transforms Bare Rock Into Forest. Given Enough Time.',
    text: '**Primary succession** begins on bare substrate with no soil — lava flows, glacial moraines, exposed rock. **Pioneer species** (lichens, mosses) colonise first — breaking down rock, accumulating organic matter, forming proto-soil. As soil develops, grasses establish, then shrubs, then early successional trees, then late-successional climax vegetation. Each stage modifies the environment in ways that facilitate the next stage (**facilitation**) while making conditions less suitable for itself. Secondary succession (after disturbance where soil remains) is faster. Krakatoa erupted in 1883 — completely sterilised by pyroclastic flows. By 1920s: grassland. By 1950s: forest. Within a century, life reclaimed a volcanic island from nothing. Ecosystems don\'t just recover. They rebuild.',
  },

  // ── Chapter 51: Ecosystems & Energy Flow ──
  {
    emoji: '☀️', cat: 'bio_ch51', catLabel: 'Ch 51 – Ecosystems & Energy Flow',
    title: 'Only 10% of Energy Passes from One Trophic Level to the Next. The Rest is Lost as Heat.',
    text: 'The **10% rule** (Lindeman efficiency): of the energy available at one trophic level, only ~10% is incorporated into the next. The rest is lost as: metabolic heat (respiration), excretion, and material not consumed. Consequences: a food chain of 5 levels can support 10,000× less top predator biomass than primary producer biomass. Eating meat is ~10× less energy-efficient than eating plants — which is why the planet can support far more vegetarians than meat-eaters at the same caloric input. Apex predators (eagles, sharks, lions) are rare not because they\'re less "successful" but because thermodynamics enforces scarcity at every trophic step. The energy pyramid is physics, not preference.',
  },
  {
    emoji: '🔄', cat: 'bio_ch51', catLabel: 'Ch 51 – Ecosystems & Energy Flow',
    title: 'Carbon Has Been Cycling Through Living Things for 3.8 Billion Years. The Carbon in You Has Been Alive Before.',
    text: 'The **carbon cycle** moves carbon through the atmosphere (CO₂), oceans (dissolved carbon), terrestrial ecosystems (vegetation and soil), and geological reservoirs (fossil fuels, carbonate rocks). Carbon enters living systems via photosynthesis, passes through food webs, and returns to the atmosphere via respiration, decomposition, and combustion. The carbon atoms in your body were previously in other organisms — dinosaurs, ancient trees, marine creatures. Some were locked in limestone for 300 million years before being released by weathering or cement production. Fossil fuel combustion releases carbon that was sequestered 300 million years ago — geological time compressed into industrial time. We are releasing ancient carbon. The atmosphere has no precedent for this speed.',
  },

  // ── Chapter 52: Biomes & Aquatic Ecosystems ──
  {
    emoji: '🌍', cat: 'bio_ch52', catLabel: 'Ch 52 – Biomes & Aquatic Ecosystems',
    title: 'The Deep Ocean is Earth\'s Largest Habitat. And We\'ve Explored Less Than 20% of It.',
    text: 'The deep ocean (>200m) covers ~66% of Earth\'s surface and constitutes ~95% of Earth\'s **biosphere volume**. It is lightless, near-freezing, and under enormous pressure. Yet it harbours extraordinary life: **hydrothermal vent communities** where chemosynthetic bacteria (not photosynthesis) are the primary producers — supporting tube worms, crabs, fish, in complete independence from sunlight. Over 2 million species are estimated in deep-sea environments, with most undescribed. We have better maps of the surface of Mars than the ocean floor. The largest ecosystem on Earth — by volume — remains largely unexplored. More humans have walked on the Moon than have visited the Challenger Deep.',
  },
  {
    emoji: '🌳', cat: 'bio_ch52', catLabel: 'Ch 52 – Biomes & Aquatic Ecosystems',
    title: 'The Amazon Rainforest Creates Its Own Weather. It\'s Called a Biotic Pump.',
    text: 'The Amazon basin transpires approximately **20 billion tonnes of water** per day through **transpiration** from its 390 billion trees — more than the Amazon River itself discharges into the ocean. This moisture rises, cools, condenses, and falls as rain — forming **biotic pump** circulation that drives rainfall across South America, including the agricultural regions of Brazil\'s cerrado and the Río de la Plata basin. Deforestation disrupts this cycle — creating drought in regions hundreds of kilometres from the deforested area. Parts of the Amazon are approaching a **tipping point** (~20–25% deforestation) beyond which the reduced moisture recycling prevents the remaining forest from generating enough rainfall to sustain itself. The forest makes the rain. Destroy enough forest and you destroy the rain that sustains the rest.',
  },

  // ── Chapter 53: Conservation Biology ──
  {
    emoji: '🦏', cat: 'bio_ch53', catLabel: 'Ch 53 – Conservation Biology',
    title: 'We Are in Earth\'s Sixth Mass Extinction. This One is the First Caused by a Single Species.',
    text: 'Current species extinction rates are estimated at **100–1,000× the background extinction rate** — the rate that existed before human impact. This qualifies as a **mass extinction event** — the sixth in Earth\'s history. Previous five were caused by asteroid impacts, volcanic mega-eruptions, glaciation, and ocean chemistry changes. The current extinction is caused by: **habitat destruction** (primary driver), invasive species, overexploitation, pollution, and climate change — all human-caused. Unlike previous mass extinctions, this one is happening over decades, not millions of years. The geologically instantaneous pace gives species no time to evolve responses. A billion-year-old evolutionary process cannot adapt to a 50-year catastrophe. We are not watching extinction. We are causing it.',
  },
  {
    emoji: '🧬', cat: 'bio_ch53', catLabel: 'Ch 53 – Conservation Biology',
    title: 'The Last Male Northern White Rhino Died in 2018. The Species Isn\'t Extinct Yet. Science Might Save It.',
    text: '**Sudan**, the last male northern white rhinoceros, died in March 2018 under 24-hour armed guard at Ol Pejeta Conservancy, Kenya. Two females — Najin and Fatu — remain, both unable to carry pregnancies. Yet the species may survive: scientists have created **viable northern white rhino embryos** using stored sperm from Sudan and eggs harvested from Najin and Fatu, fertilised by IVF. These embryos could potentially be implanted into southern white rhino surrogate mothers. The species has zero reproductive males and no fertile females — and still has a path to survival through biotechnology. The northern white rhino\'s story is the story of conservation biology\'s hardest question: how much technology should we deploy to correct our mistakes?',
  },


  // Ch 1 extra
  {
    emoji: '🧬', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'A Theory in Science is the Strongest Thing Science Can Produce. Not a Guess.',
    text: 'In everyday language "theory" means a guess. In science a **theory** is the highest level of explanation — a well-substantiated framework supported by extensive evidence, predictive power, and repeated testing. The Theory of Evolution, Germ Theory, Cell Theory, Atomic Theory — these are not guesses. They are the most tested ideas in human knowledge. A **hypothesis** is the guess. A **law** describes what happens. A theory explains why. The phrase "just a theory" is the most revealing misunderstanding of how science works.',
  },
  {
    emoji: '📏', cat: 'bio_ch1', catLabel: 'Ch 1 – Intro & Scientific Method',
    title: 'The Metric System Exists Because Two Space Missions Were Lost to Unit Confusion.',
    text: 'In 1999 NASA\'s Mars Climate Orbiter was lost because one team used metric units and another used imperial — the spacecraft entered the wrong orbit and burned up. Biology universally uses **SI units** — metres, kilograms, moles — because science requires one reproducible standard. Biological measurements span 15 orders of magnitude: DNA double helix (2nm wide) to a blue whale (30m long). Standardised units are not bureaucracy. They are the difference between a spacecraft arriving and a $327 million fireball.',
  },

  // Ch 2 extra
  {
    emoji: '🔋', cat: 'bio_ch2', catLabel: 'Ch 2 – Atoms & Chemical Bonds',
    title: 'Electronegativity Explains Why Water is Polar — and Why Life is Possible.',
    text: 'Oxygen (electronegativity 3.5) pulls shared electrons far more strongly than hydrogen (2.1). In water this creates partial charges — a **polar covalent bond** — making water a **polar molecule** capable of forming hydrogen bonds with other polar molecules and ions. This polarity makes water life\'s universal solvent — simultaneously dissolving salts, sugars, amino acids, and nucleotides. No polarity means no solvent. No solvent means no biochemistry. No biochemistry means no life. Everything traces back to one atom\'s greed for electrons.',
  },
  {
    emoji: '💥', cat: 'bio_ch2', catLabel: 'Ch 2 – Atoms & Chemical Bonds',
    title: 'Ionic Bonds in Biology Are Weaker Than They Sound — Because Water Gets in the Way.',
    text: '**Ionic bonds** form when one atom transfers an electron to another, creating oppositely charged ions. NaCl has a strong ionic bond when dry. Dissolve it in water and polar water molecules surround each ion forming a **hydration shell** — the bond breaks. This is why electrolytes (Na⁺, K⁺, Ca²⁺, Cl⁻) exist as free ions in blood. These free ions power nerve impulse propagation, muscle contraction, and osmotic balance. The ionic bond is strong. Water is stronger. And that dissolution is what keeps your heart beating.',
  },

  // Ch 3 extra
  {
    emoji: '🧊', cat: 'bio_ch3', catLabel: 'Ch 3 – Water & Life',
    title: 'Water Has the Highest Surface Tension of Any Common Liquid. Life Exploits This.',
    text: '**Surface tension** arises from hydrogen bonds pulling surface water molecules inward, creating a resistant film. Water\'s surface tension (72 mN/m) is the highest of any common liquid at room temperature. This allows: insects to walk on water, capillary rise in plant xylem vessels, and lung alveoli to maintain shape via **pulmonary surfactant** (which reduces surface tension to prevent alveolar collapse). Premature infants are born without sufficient surfactant — their alveoli collapse with each breath. The first breath of life depends on reducing water\'s most fundamental physical property.',
  },
  {
    emoji: '🧪', cat: 'bio_ch3', catLabel: 'Ch 3 – Water & Life',
    title: 'pH is Logarithmic. A Change of One Unit Means Ten Times More Acid.',
    text: '**pH** = −log[H⁺]. pH 6 has 10× more H⁺ than pH 7. Blood must stay between 7.35–7.45 — tiny on the scale but representing meaningful concentration changes. **Buffers** — weak acid/conjugate base pairs — resist pH change. The primary blood buffer: bicarbonate (H₂CO₃/HCO₃⁻), maintained by the lungs (exhaling CO₂) and kidneys (retaining or excreting HCO₃⁻). When this fails — **acidosis** (pH<7.35) or **alkalosis** (pH>7.45) — enzyme function collapses. The difference between life and death is less than one pH unit.',
  },

  // Ch 4 extra
  {
    emoji: '💊', cat: 'bio_ch4', catLabel: 'Ch 4 – Carbon & Organic Molecules',
    title: 'Chirality: The Wrong Mirror Image of a Drug Can Kill You.',
    text: '**Chirality** describes non-superimposable mirror-image molecules called **enantiomers**. Biological systems are chiral — enzymes and receptors recognise specific 3D geometry. The drug **thalidomide**: R-enantiomer treats morning sickness; S-enantiomer causes severe birth defects. Tragically even pure R-thalidomide converts to the S-form inside the body. Chirality killed thousands of children before the pharmaceutical industry took molecular handedness seriously. One mirror flip. Completely opposite biological outcome.',
  },
  {
    emoji: '⛽', cat: 'bio_ch4', catLabel: 'Ch 4 – Carbon & Organic Molecules',
    title: 'Functional Groups Determine What an Organic Molecule Does. Not Its Carbon Skeleton.',
    text: 'Organic molecules are classified by **functional groups** — specific atomic clusters with predictable chemistry. **Hydroxyl** (–OH): polar, water-soluble. **Carboxyl** (–COOH): acidic. **Amino** (–NH₂): basic. **Phosphate** (–PO₄): energy transfer, DNA backbone. **Carbonyl** (C=O): key in sugars. The carbon skeleton gives size and shape. The functional group gives reactivity and role. Two molecules with identical carbon skeletons but different functional groups are completely different chemicals with completely different roles in the cell. Structure dictates function. Always.',
  },

  // Ch 5 extra
  {
    emoji: '🍞', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'Starch and Cellulose Are Both Made of Glucose. One Feeds You. One You Cannot Digest.',
    text: 'Both **starch** and **cellulose** are glucose polymers — but linked differently. Starch uses α-1,4-glycosidic bonds (helical, digestible by amylase). Cellulose uses β-1,4-glycosidic bonds (straight, cross-linked sheets — indigestible by humans). Cows and termites digest cellulose only via symbiotic gut microorganisms producing cellulase. One bond angle difference between two polymers of the same monomer. One you eat for energy. One you eat for fibre and pass unchanged. Molecular geometry is nutritional destiny.',
  },
  {
    emoji: '🧬', cat: 'bio_ch5', catLabel: 'Ch 5 – Macromolecules',
    title: 'Protein Structure Has Four Levels. Destroy Any One Level and the Protein Dies.',
    text: '**Primary**: amino acid sequence (DNA-determined). **Secondary**: local α-helices and β-sheets (backbone hydrogen bonds). **Tertiary**: overall 3D shape from R-group interactions — hydrogen bonds, disulfide bridges, hydrophobic clustering, ionic bonds. **Quaternary**: multiple polypeptide subunits assembled (haemoglobin: 4 subunits). Function depends entirely on 3D shape. Heat or extreme pH causes **denaturation** — secondary/tertiary structure collapses. The protein retains its primary sequence but is functionally dead. Cooking an egg denatures its proteins permanently. You are eating a protein graveyard.',
  },

  // Ch 6 extra
  {
    emoji: '🏗️', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'The Rough ER Has a Built-In Quality Control System. It Would Rather Kill a Cell Than Export a Bad Protein.',
    text: 'The **rough ER** synthesises proteins for secretion and membrane insertion. As proteins thread into the ER lumen **chaperones** assist folding. Misfolded proteins trigger the **Unfolded Protein Response (UPR)** — which either refolds, degrades, or if overwhelmed, triggers apoptosis. This is why Type 2 diabetes, Parkinson\'s, and Alzheimer\'s involve ER stress and protein misfolding. The cell would rather die than export a defective protein. Quality control so strict it chooses death over failure.',
  },
  {
    emoji: '☀️', cat: 'bio_ch6', catLabel: 'Ch 6 – Cell Structure & Function',
    title: 'Chloroplasts Were Once Free-Living Bacteria. They Changed the Atmosphere of an Entire Planet.',
    text: '**Chloroplasts** originated as **cyanobacteria** engulfed by a host cell ~1.2 billion years ago — a second endosymbiotic event after mitochondria. Evidence: their own circular DNA, 70S ribosomes, binary fission division, double membrane. Ancient cyanobacteria also caused the **Great Oxidation Event** ~2.4 billion years ago — flooding Earth\'s atmosphere with photosynthetic oxygen, enabling aerobic life and eventually complex animals. The oxygen in every breath you take was produced by ancient cyanobacteria. Their descendants still live inside every plant cell. They never left.',
  },

  // Ch 8 extra
  {
    emoji: '🧯', cat: 'bio_ch8', catLabel: 'Ch 8 – Cell Signalling',
    title: 'Second Messengers Relay the Hormone Signal Without the Hormone Ever Entering the Cell.',
    text: 'Most signal molecules are too large or polar to cross the cell membrane. They bind surface receptors triggering production of **second messengers** inside. Key second messengers: **cAMP** (from ATP via adenylyl cyclase activated by G-proteins); **IP₃/DAG** (from phospholipase C); **Ca²⁺** (from ER or extracellular). Each activates specific **protein kinases** that phosphorylate target proteins. Adrenaline binds liver cell surface → cAMP rises → glycogen phosphorylase activates → blood glucose rises. The hormone never entered the cell. Its message was carried by an internal courier. Signal transduction is biology\'s relay race.',
  },
  {
    emoji: '⏰', cat: 'bio_ch8', catLabel: 'Ch 8 – Cell Signalling',
    title: 'Caffeine Tolerance is Cells Adapting to Constant Signalling. Withdrawal is the Reverse.',
    text: '**Signal desensitisation**: with prolonged stimulation cells reduce response by internalising receptors — **down-regulation**. Caffeine tolerance develops because adenosine receptors are progressively down-regulated. **Up-regulation**: with prolonged absence of stimulation cells increase receptor number and sensitivity. Quitting caffeine suddenly causes withdrawal — normal adenosine levels now hit a much larger receptor population causing fatigue and headaches. Every drug acting on receptors must contend with this adaptive response. Tolerance is the cell pushing back. Withdrawal is the cell overreacting once the drug disappears.',
  },

  // Ch 9 extra
  {
    emoji: '🥗', cat: 'bio_ch9', catLabel: 'Ch 9 – Energy & Metabolism',
    title: 'You Are Always Destroying and Building Yourself Simultaneously. That is Metabolism.',
    text: '**Catabolism** — breaking down complex molecules — releases energy captured as ATP and NADH. **Anabolism** — building complex molecules — consumes ATP and NADH. **Metabolism** is both happening simultaneously, coupled via shared carriers. When you eat your body breaks down food (catabolism) and uses that energy to build muscle proteins (anabolism) at the same time. Every atom in your body was replaced over the last ~7 years. The person you were five years ago no longer exists at the molecular level. You\'ve been replaced piece by piece while remaining continuously conscious. That\'s metabolism.',
  },
  {
    emoji: '🔒', cat: 'bio_ch9', catLabel: 'Ch 9 – Energy & Metabolism',
    title: 'Allosteric Regulation Lets Metabolic Pathways Shut Themselves Off When the Product Accumulates.',
    text: '**Allosteric regulation**: a molecule binds an enzyme at the **allosteric site** (not the active site), changing enzyme shape and activity. **Feedback inhibition**: the final product of a pathway inhibits an early enzyme. ATP inhibits phosphofructokinase (glycolysis enzyme) — when energy is abundant, glycolysis slows. AMP activates the same enzyme — when energy is low, glycolysis accelerates. The pathway self-regulates through its own product. No external controller. The metabolic network is a self-correcting, self-monitoring system tuned by billions of years of selection to be maximally efficient.',
  },

  // Ch 10 extra
  {
    emoji: '🫧', cat: 'bio_ch10', catLabel: 'Ch 10 – Cellular Respiration',
    title: 'The Krebs Cycle\'s Real Job is Not Making ATP. It\'s Harvesting Electrons.',
    text: 'The **Krebs cycle** produces only 2 ATP per glucose directly. Yet it is essential because it generates **NADH and FADH₂** — electron carriers that deliver high-energy electrons to the **electron transport chain**, where 32–34 ATP are synthesised via oxidative phosphorylation. The Krebs cycle is an electron-harvesting machine. Each turn oxidises an acetyl group, capturing the energy from broken carbon bonds as electron carriers. Without the Krebs cycle feeding electrons to the ETC, 90% of your ATP disappears. The most productive stage of respiration is powered by a cycle that makes almost none of the final ATP itself.',
  },
  {
    emoji: '☠️', cat: 'bio_ch10', catLabel: 'Ch 10 – Cellular Respiration',
    title: 'Cyanide Kills in Minutes by Blocking the Last Step of the Electron Transport Chain.',
    text: '**Cyanide** binds irreversibly to **cytochrome c oxidase** (Complex IV) — the final protein in the electron transport chain. With Complex IV blocked: electron flow stops, the proton gradient collapses, ATP synthase halts, ATP drops to near zero within minutes. Heart muscle and neurons die first — they depend most on oxidative phosphorylation. Death mimics oxygen deprivation even with lungs full of air: cells cannot use the oxygen present. The machinery to use oxygen has been destroyed. Your mitochondria suffocate with air to breathe.',
  },

  // Ch 11 extra
  {
    emoji: '🌊', cat: 'bio_ch11', catLabel: 'Ch 11 – Photosynthesis',
    title: 'RuBisCO is the Most Abundant Protein on Earth. It\'s Also Remarkably Slow and Makes Mistakes.',
    text: '**RuBisCO** (ribulose-1,5-bisphosphate carboxylase/oxygenase) fixes CO₂ in the Calvin cycle. It is the most abundant protein on Earth — ~700 million tonnes globally. Despite this abundance RuBisCO is extraordinarily slow (3–10 reactions/second vs thousands for most enzymes) and occasionally fixes O₂ instead of CO₂ causing wasteful **photorespiration**. Evolution has been unable to significantly improve RuBisCO in 3 billion years. The central enzyme of all plant life on Earth is slow, error-prone, and inefficient. And yet it sustains all terrestrial life. Biology\'s most important enzyme is biology\'s most humbling enzyme.',
  },
  {
    emoji: '⚡', cat: 'bio_ch11', catLabel: 'Ch 11 – Photosynthesis',
    title: 'Photosystem II Splits Water. That Reaction Produced All the Oxygen in Earth\'s Atmosphere.',
    text: '**Photosystem II** uses light energy to extract electrons from water: 2H₂O → 4H⁺ + 4e⁻ + O₂. The oxygen released is a waste product. This **water-splitting** reaction — thermodynamically the most demanding in photosynthesis — replaces electrons lost when light excites chlorophyll. Ancient cyanobacteria repeating this reaction for a billion years produced all the oxygen in Earth\'s atmosphere. Every animal that has ever lived is powered by electrons stolen from water molecules 2–3 billion years ago. The oxygen you just breathed was a waste product of ancient photosynthesis.',
  },

  // Ch 12 extra
  {
    emoji: '🌀', cat: 'bio_ch12', catLabel: 'Ch 12 – Cell Division & Mitosis',
    title: 'Animal Cells Pinch to Divide. Plant Cells Build a Wall. Same Result. Completely Different Mechanism.',
    text: 'After mitosis the cytoplasm must divide — **cytokinesis**. In **animal cells**: a contractile ring of actin and myosin pinches the plasma membrane inward like tightening a drawstring — producing a **cleavage furrow**. In **plant cells**: Golgi vesicles travel to the cell\'s midplane and fuse, depositing new cell wall material — building a **cell plate** outward from the centre. Animals pinch. Plants build. Same outcome — two daughter cells — via completely opposite mechanisms. Plant cell walls made pinching impossible. So evolution built a wall instead. The constraint forced the invention.',
  },
  {
    emoji: '🔬', cat: 'bio_ch12', catLabel: 'Ch 12 – Cell Division & Mitosis',
    title: 'Stem Cells Are Cells That Haven\'t Decided What to Be Yet. And We Can Now Reprogram Adult Cells Back to That State.',
    text: '**Totipotent** cells can become any cell including placenta (fertilised egg, early divisions). **Pluripotent** can become any body cell (inner cell mass — embryonic stem cells). **Multipotent** produce a limited range (adult stem cells — bone marrow, intestinal crypts). **Induced pluripotent stem cells (iPSCs)** — adult cells reprogrammed back to pluripotency by expressing four transcription factors (Yamanaka, Nobel Prize 2012) — bypassed embryonic stem cell ethical concerns. Your skin cell can be reprogrammed back into a cell capable of becoming a heart cell, a neuron, or a liver cell. Every cell in your body was once undecided. That undecision can be restored.',
  },

  // Ch 13 extra
  {
    emoji: '🧬', cat: 'bio_ch13', catLabel: 'Ch 13 – Meiosis & Reproduction',
    title: 'Meiosis I Separates Homologues. Meiosis II Separates Sister Chromatids. Confuse Them and You Fail Every Exam.',
    text: '**Meiosis I** — the **reductional division** — separates homologous chromosome pairs (2n → n). Crossing over occurs in prophase I. Independent assortment in metaphase I. Cells are haploid after meiosis I but each chromosome still consists of two sister chromatids. **Meiosis II** — the **equational division** — separates sister chromatids, identical in mechanism to mitosis. In meiosis I **homologous chromosomes** separate. In meiosis II (and mitosis) **sister chromatids** separate. Most genetics exam errors come from confusing these two. Meiosis I is conceptually revolutionary. Meiosis II is just mitosis applied to a haploid cell.',
  },
  {
    emoji: '⚠️', cat: 'bio_ch13', catLabel: 'Ch 13 – Meiosis & Reproduction',
    title: 'Non-disjunction Gives Gametes the Wrong Chromosome Number. The Consequences Range From Tolerable to Fatal.',
    text: '**Non-disjunction** — chromosomes failing to separate in meiosis — produces gametes with extra or missing chromosomes. An n+1 gamete fertilised by a normal gamete gives **trisomy**. **Trisomy 21** (Down syndrome): intellectual disability, characteristic physical features, median lifespan ~60 years. **Trisomy 18** (Edwards) and **Trisomy 13** (Patau): usually fatal in infancy. Sex chromosome aneuploidies: **XXY** (Klinefelter), **XO** (Turner). Most aneuploidies are lethal early in development — 50–70% of spontaneous miscarriages involve chromosomal abnormalities. Non-disjunction frequency increases with maternal age because oocytes can remain arrested in meiosis I for decades.',
  },

  // Ch 14 extra
  {
    emoji: '🎲', cat: 'bio_ch14', catLabel: 'Ch 14 – Mendelian Genetics',
    title: 'The Punnett Square Works Because Mendel\'s Laws Are Probability Statements.',
    text: 'The **Punnett square** calculates genotype probabilities from crosses. It works because **Mendel\'s Law of Segregation** is a probability statement: each gamete has a 50% chance of carrying either allele. Aa × Aa gives 25% AA : 50% Aa : 25% aa — a **1:2:1 genotypic ratio**, yielding a **3:1 phenotypic ratio** with dominance. These are expected outcomes in large samples — any single family can deviate by chance. Mendel crossed tens of thousands of pea plants and counted ~7,000 offspring per trait to get reliable statistics. The pea plants were running a probability experiment. Mendel was counting the results.',
  },
  {
    emoji: '🌈', cat: 'bio_ch14', catLabel: 'Ch 14 – Mendelian Genetics',
    title: 'Most Human Traits Follow a Bell Curve. That\'s Because They\'re Controlled by Hundreds of Genes.',
    text: '**Polygenic traits** — controlled by multiple additive genes — produce a **normal distribution** (bell curve) of phenotypes. Height: ~700+ genetic loci. Skin pigmentation: ~6 major genes. Intelligence: thousands of variants each with tiny effects. You cannot do a Punnett square for height. This is why "tall parent = tall child" is a tendency, not a rule — and why regression to the mean occurs (extreme parents tend toward less extreme children). Most of what makes you *you* is the summation of hundreds of small genetic contributions. You are a probabilistic outcome of hundreds of loci. A very specific roll of ~700 dice.',
  },

  // Ch 15 extra
  {
    emoji: '🚫', cat: 'bio_ch15', catLabel: 'Ch 15 – Chromosomal Inheritance',
    title: 'X-Inactivation Means Every Female Body is a Mosaic of Two Different Gene Expression Patterns.',
    text: 'In each female cell one X chromosome is randomly inactivated — condensed into a **Barr body** — via the **XIST** gene coating it with non-coding RNA. This is random and permanent in each cell but different cells inactivate different Xs. A heterozygous female is a **mosaic** — a patchwork of cells expressing either the maternal or paternal X. Calico cats demonstrate this: orange and black fur patches correspond to which X is active in each melanocyte cluster. Every calico cat is female. The patchy colour is X-inactivation made visible on fur. Every woman\'s body is a biological patchwork quilt at the cellular level.',
  },
  {
    emoji: '📍', cat: 'bio_ch15', catLabel: 'Ch 15 – Chromosomal Inheritance',
    title: 'The First Genetic Map Was Built by a 19-Year-Old Undergraduate in 1913.',
    text: 'Alfred Sturtevant — a student of Thomas Hunt Morgan — built the first **genetic map** in 1913 as an undergraduate, using recombination frequencies between *Drosophila* genes to estimate relative positions on a chromosome. Distance is measured in **centimorgans (cM)**: 1 cM = 1% recombination frequency. Genes 50+ cM apart assort nearly independently. Genes 1–5 cM apart are rarely separated by crossing over. Genetic maps from recombination frequencies preceded physical chromosome sequencing by 80 years. A 19-year-old mapped a genome using fruit fly eye colours and arithmetic. His map was essentially correct.',
  },

  // Ch 16 extra
  {
    emoji: '🔧', cat: 'bio_ch16', catLabel: 'Ch 16 – DNA Structure & Replication',
    title: 'Your DNA is Damaged 20,000 Times Per Cell Per Day. Repair Systems Fix Almost All of It.',
    text: 'DNA damage — from reactive oxygen species, UV radiation, replication errors, and mutagens — accumulates at ~**20,000 lesions per cell per day**. Multiple repair systems operate simultaneously: **Base excision repair (BER)** removes chemically damaged bases. **Nucleotide excision repair (NER)** removes bulky lesions like UV thymine dimers (defective in Xeroderma pigmentosum — patients get skin cancer with minimal sun exposure). **Mismatch repair (MMR)** corrects replication errors (defective in Lynch syndrome). Without repair systems mutation rates would be millions of times higher. Cancer is not primarily bad luck. Cancer is what happens when the repair systems stop winning against the constant damage.',
  },
  {
    emoji: '🧮', cat: 'bio_ch16', catLabel: 'Ch 16 – DNA Structure & Replication',
    title: 'Chargaff\'s Rules Sat in the Literature for Three Years Before Anyone Realised They Were Describing the Double Helix.',
    text: 'In 1950 Erwin Chargaff analysed DNA base composition across species and found: [A] always equals [T], and [G] always equals [C] — **Chargaff\'s rules**. Watson and Crick used this as the critical constraint to build their double helix model — the complementary base pairing (A-T: 2 hydrogen bonds; G-C: 3 hydrogen bonds) explained the ratios perfectly. Chargaff published in 1950. Watson and Crick published in 1953. The rules sat uninterpreted for three years before anyone realised they were describing the structure of life\'s information molecule. The answer was in the literature. Nobody was asking the right question.',
  },

  // Ch 17 extra
  {
    emoji: '🎬', cat: 'bio_ch17', catLabel: 'Ch 17 – Gene Expression',
    title: 'In Prokaryotes Transcription and Translation Happen Simultaneously. Eukaryotes Separated Them on Purpose.',
    text: 'In **prokaryotes** — no nuclear membrane — ribosomes can begin translating mRNA while RNA polymerase is still transcribing it. Transcription and translation are **coupled**. In **eukaryotes** — nuclear membrane separates the compartments — transcription produces pre-mRNA in the nucleus, which is processed (5\' cap, 3\' poly-A tail, intron splicing) before export to the cytoplasm for translation. This spatial separation created an entirely new layer of gene regulation: the nuclear envelope is a checkpoint where RNA quality is verified and processing is completed before translation begins. The complexity of eukaryotic gene regulation — alternative splicing, RNA editing, nuclear export control — all depends on this separation. The nuclear membrane did not just protect DNA. It invented a new level of cellular control.',
  },
  {
    emoji: '🗑️', cat: 'bio_ch17', catLabel: 'Ch 17 – Gene Expression',
    title: 'The Genetic Code is Universal. The Same Codon Means the Same Amino Acid in Bacteria, Fungi, and Humans.',
    text: 'The **genetic code** — 64 codons encoding 20 amino acids plus start (AUG) and stop (UAA, UAG, UGA) signals — is nearly universal across all life. The same codon means the same amino acid in bacteria, fungi, plants, and humans. This **universality** is compelling evidence for a single common ancestor in whom the code was established ~3.8 billion years ago. The practical consequence: human insulin gene in bacteria → bacteria read the human code → produce human insulin. Every recombinant pharmaceutical protein works because your cells and a bacterium\'s cells speak the same molecular language. A language that has not changed in nearly 4 billion years.',
  },

  // Ch 18 extra
  {
    emoji: '🔏', cat: 'bio_ch18', catLabel: 'Ch 18 – Gene Regulation',
    title: 'Your Lifestyle May Leave Epigenetic Marks on Your Germ Cells — Affecting Your Grandchildren.',
    text: '**Transgenerational epigenetic inheritance** — passage of epigenetic marks from parents to offspring — is documented in plants and some animals. The **Dutch Hunger Winter** (1944): children born to women pregnant during famine showed increased rates of obesity, diabetes, and schizophrenia. So did their children. Proposed mechanism: stress-induced epigenetic marks on germ cells passing through generations. This challenges the dogma that acquired traits cannot be inherited — echoing the Lamarck-vs-Darwin debate, now with molecular mechanisms. What you experience may leave marks on your eggs or sperm. Your grandchildren may carry consequences of your history.',
  },
  {
    emoji: '🔬', cat: 'bio_ch18', catLabel: 'Ch 18 – Gene Regulation',
    title: 'MicroRNAs Are 22-Nucleotide Molecules That Regulate 60% of Human Genes. They Were Discovered by Accident.',
    text: '**MicroRNAs (miRNAs)** — ~22 nucleotide non-coding RNAs — bind complementary sequences in mRNA and cause degradation or translational repression. First discovered in *C. elegans* in 1993. Humans have ~2,000+ miRNA genes. Each miRNA can regulate hundreds of targets. Together they regulate an estimated **60% of all human protein-coding genes** — involved in development, proliferation, apoptosis, immunity. Dysregulated miRNAs are associated with virtually every cancer type. The genome is not just genes. The genome is also a vast regulatory network of tiny RNAs that controls more than half of what the genes do — and was discovered entirely by accident in a worm.',
  },

  // Ch 19 extra
  {
    emoji: '🦠', cat: 'bio_ch19', catLabel: 'Ch 19 – Viruses',
    title: 'Bacteriophages Are the Most Abundant Biological Entities on Earth. 10^31 of Them.',
    text: '**Bacteriophages** — viruses infecting bacteria — number ~10³¹ globally. For comparison: 10²³ stars in the observable universe. Phages kill ~40% of all ocean bacteria daily, driving nutrient cycling and bacterial evolution. **Phage therapy** — using bacteriophages to kill antibiotic-resistant bacteria — is being actively developed as antibiotic resistance deepens. The most abundant biological entity on Earth was invisible until the electron microscope. And the entity we ignored for most of biology\'s history may be the solution to the post-antibiotic crisis. Biology\'s most numerous player is also potentially its most useful pharmacist.',
  },
  {
    emoji: '🌡️', cat: 'bio_ch19', catLabel: 'Ch 19 – Viruses',
    title: 'The 1918 Flu Killed More People Than World War I. Its Genome Was Sequenced From Preserved Samples 80 Years Later.',
    text: 'The **1918 Spanish Influenza** infected ~500 million people and killed 50–100 million — more than WWI\'s 20 million. Most lethally affected: healthy 20–40-year-olds, probably due to a **cytokine storm** immune overresponse destroying lung tissue. The pandemic was an **H1N1 influenza A** strain. Its genome was reconstructed from preserved samples and victims buried in Alaskan permafrost. This sequence directly informed vaccine development for the 2009 H1N1 pandemic. The dead of 1918 protected us from the pandemic of 2009. Their preserved genomes gave us the blueprint to build a faster defence.',
  },

  // Ch 20 extra
  {
    emoji: '🖨️', cat: 'bio_ch20', catLabel: 'Ch 20 – Biotechnology & Genomics',
    title: 'PCR Amplifies One DNA Molecule Into a Billion Copies. It Was Enabled by a Hot Spring Bacterium.',
    text: '**PCR** (Kary Mullis, 1983 — Nobel Prize 1993) exponentially amplifies specific DNA sequences. Three repeated thermal steps: **Denaturation** (94°C), **Annealing** (50–65°C — primers bind), **Extension** (72°C — DNA polymerase synthesises). Each cycle doubles the target. 30 cycles: 2³⁰ ≈ 10⁹ copies from one molecule. PCR uses **Taq polymerase** from *Thermus aquaticus* — a bacterium living in Yellowstone hot springs — stable at temperatures that destroy normal enzymes. COVID testing, criminal DNA forensics, ancient DNA analysis, cancer diagnosis — all depend on a bacterium discovered in a hot spring. Nature had the heat-stable enzyme. We just found the application.',
  },
  {
    emoji: '🧫', cat: 'bio_ch20', catLabel: 'Ch 20 – Biotechnology & Genomics',
    title: 'Recombinant DNA Technology Uses Bacterial Immune Scissors to Rewrite the Genome Like a Document.',
    text: '**Restriction enzymes** — bacterial immune proteins that cut DNA at specific sequences — became the foundational scissors of biotechnology. Combined with **DNA ligase** (molecular glue), **vectors** (plasmids), and **host cells** (bacteria, yeast), they enable production of recombinant proteins. Human insulin in *E. coli* (since 1982) replaced animal-derived insulin. Today: recombinant clotting factors for haemophilia, erythropoietin for anaemia, monoclonal antibodies for cancer. Every pharmaceutical protein made by recombinant DNA technology exists because bacteria evolved a molecular scissors to cut viral DNA — and we borrowed it. Biology\'s immune weapon became medicine\'s manufacturing tool.',
  },

  // Ch 21 extra
  {
    emoji: '🦋', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'The Peppered Moth Showed Natural Selection Operating in One Human Lifetime.',
    text: 'Before industrialisation the **peppered moth** was predominantly pale — camouflaged on lichen-covered bark. A dark melanic variant existed but was rare and easily spotted by birds. After industrialisation soot killed lichens and blackened bark. The dark variant was camouflaged; the pale was conspicuous. By 1895 dark moths were 98% of Manchester populations. After clean air legislation (1950s), pale moths recovered. **Industrial melanism**: natural selection observed, measured, and reversed within one human lifetime. Selection pressure applied. Allele frequency shifted. Pressure removed. Frequency reversed. Evolution in real time. Darwin\'s mechanism on a timescale humans could watch.',
  },
  {
    emoji: '🦚', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'Sexual Selection Favours Traits That Increase Mating Success Even When They Reduce Survival.',
    text: '**Sexual selection** — a subset of natural selection — produces traits that improve mating success at the cost of survival. **Intersexual selection** (mate choice — peacock tails, bird-of-paradise displays). **Intrasexual selection** (same-sex competition — deer antlers, elephant seal size). The peacock\'s tail is expensive, makes the bird slower, and more visible to predators. It persists because females prefer it — males with larger tails leave more offspring. Darwin was troubled by traits that seemed to reduce survival and wrote a separate 1871 book on sexual selection. The price of beauty in evolutionary terms: measured in survival cost versus reproductive reward. Beauty and survival are often in direct conflict.',
  },

  // Ch 22 extra
  {
    emoji: '🧬', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'You Have 20,000 Pseudogenes — Dead Genes That Prove Your Evolutionary Ancestry.',
    text: '**Pseudogenes** are non-functional remnants of once-active genes — accumulated mutations disrupted their function. The **GULO pseudogene** (required for vitamin C synthesis) is functional in most mammals but mutated in humans, chimpanzees, gorillas, and guinea pigs. We share the **same inactivating mutations** in GULO with chimpanzees — different from guinea pig mutations. This shared broken gene can only be explained by a common ancestor in whom GULO was inactivated. Independent inactivation would produce different mutations. We are vitamin C-dependent because of a mutation our primate ancestor suffered millions of years ago. Shared broken genes are shared history. We carry our ancestors\' mistakes.',
  },
  {
    emoji: '⏰', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'The Molecular Clock Uses Mutation Rate to Calculate When Species Diverged.',
    text: 'The **molecular clock** (Zuckerkandl & Pauling, 1965): mutations accumulate at approximately constant rates. By comparing DNA sequence differences and calibrating against known fossil divergence dates scientists calculate **when lineages split**. Results: humans and chimpanzees diverged ~6 million years ago; humans and gorillas ~8–9 million years ago; humans and mice ~75 million years ago — confirming and refining the fossil record. Molecular clock analysis also revealed **Mitochondrial Eve** (most recent common maternal ancestor of all living humans) lived ~200,000 years ago. History is encoded in mutation rate. A clock that has been running since life began.',
  },

  // Ch 23 extra
  {
    emoji: '🌊', cat: 'bio_ch23', catLabel: 'Ch 23 – Population Genetics',
    title: 'In Small Populations Genetic Drift is More Powerful Than Natural Selection.',
    text: '**Genetic drift** — random changes in allele frequency due to chance sampling — has stronger effects in small populations. In a large population random errors average out. In a small population chance events can eliminate alleles (**allelic fixation**). Cheetahs went through a severe bottleneck ~10,000 years ago and are so genetically uniform that skin grafts between unrelated cheetahs are not rejected — their immune systems cannot distinguish self from unrelated cheetah. This homogeneity makes the species vulnerable to pathogens. A single novel pathogen could devastate the species. Genetic diversity is the immune system of a species. Drift can quietly eliminate it.',
  },
  {
    emoji: '🌐', cat: 'bio_ch23', catLabel: 'Ch 23 – Population Genetics',
    title: 'Gene Flow Connects Populations and Prevents Speciation. Block It and Evolution Accelerates.',
    text: '**Gene flow** — movement of alleles between populations through migration — homogenises genetic differences and opposes speciation. High gene flow keeps populations genetically similar despite different local selection pressures. Low gene flow (isolation) allows divergence. Gene flow also spreads adaptive alleles: the **CCR5-Δ32 allele** (HIV resistance) spread through European populations via gene flow — possibly selected by historical plague exposure. In conservation biology gene flow between isolated habitat fragments is crucial — isolated populations lose diversity through drift and inbreeding. Wildlife corridors that allow movement between patches restore gene flow. Connectivity is genetic survival.',
  },

  // Ch 24 extra
  {
    emoji: '🌍', cat: 'bio_ch24', catLabel: 'Ch 24 – Speciation',
    title: 'Polyploidy Creates New Species in a Single Generation. No Geographic Isolation Required.',
    text: '**Sympatric speciation** by **polyploidy** — doubling or more of chromosome number — immediately creates reproductive isolation because polyploids cannot interbreed with diploid ancestors. **Allopolyploidy** (hybridisation + chromosome doubling) has produced many crop plants: bread wheat (hexaploid — 6 chromosome sets from three ancestral species), cotton, tobacco, strawberry. ~70% of flowering plant species have polyploid origins. Sympatric speciation by polyploidy happens in a single generation — the fastest possible speciation event. One generation. New species. No geographic barrier. No millions of years. The fastest route to a new species bypasses every requirement that classical speciation theory demands.',
  },
  {
    emoji: '🔬', cat: 'bio_ch24', catLabel: 'Ch 24 – Speciation',
    title: 'Reproductive Isolation Mechanisms Prevent Species From Merging Back Together.',
    text: '**Prezygotic isolation** prevents fertilisation: habitat isolation (different microhabitats), temporal isolation (different breeding seasons), behavioural isolation (different courtship signals — firefly flash patterns), mechanical isolation (incompatible morphology), gametic isolation (sperm cannot penetrate egg). **Postzygotic isolation** prevents viable offspring: hybrid inviability (offspring die), hybrid sterility (mules — horse × donkey — are sterile), hybrid breakdown (F2 inviable). These mechanisms are not designed — they accumulate as a byproduct of divergent evolution. Species don\'t decide not to interbreed. They gradually become incompatible through independent evolution in different directions.',
  },

  // Ch 25 extra
  {
    emoji: '⏳', cat: 'bio_ch25', catLabel: 'Ch 25 – Macroevolution & Phylogeny',
    title: 'Punctuated Equilibrium Says Evolution Lurches in Bursts. The Fossil Record Agrees.',
    text: '**Punctuated equilibrium** (Gould & Eldredge, 1972): species remain stable for long periods (**stasis**) punctuated by rapid evolutionary change associated with speciation. The fossil record — showing long morphological stability interrupted by sudden appearances of new forms — supports this. This contrasts with Darwin\'s **gradualism**. Both patterns exist in nature. Small isolated founder populations can evolve rapidly over few generations before expanding — leaving almost no fossil record of the rapid change. Fossil "gaps" may be accurate records of rapid processes, not missing evidence. The sudden appearance of new forms in the fossil record may mean the change was genuinely sudden.',
  },
  {
    emoji: '🐊', cat: 'bio_ch25', catLabel: 'Ch 25 – Macroevolution & Phylogeny',
    title: 'Crocodiles Are More Closely Related to Birds Than to Lizards. This Restructured All of Vertebrate Taxonomy.',
    text: 'Traditional classification placed crocodiles with lizards in Reptilia. Molecular cladistics shows: **Archosauria** (crocodiles + birds) is a clade — crocodiles share a more recent common ancestor with birds than with lizards. "Reptiles" as traditionally defined is **paraphyletic** — it doesn\'t include all descendants of a common ancestor (excludes birds). Modern systematics eliminates paraphyletic groups: either include birds in Reptilia or abandon the term. The animal that seems most primitive — the crocodile — is the birds\' closest living relative. The living fossil and the eagle are biological siblings. The iguana is a more distant cousin.',
  },

  // Ch 26 extra
  {
    emoji: '🌊', cat: 'bio_ch26', catLabel: 'Ch 26 – Origin of Life',
    title: 'Life May Have Begun at Hydrothermal Vents Using the Same Proton Gradient That Still Powers Your Mitochondria.',
    text: 'The **hydrothermal vent hypothesis** proposes life began at alkaline vents on the deep ocean floor ~4 billion years ago. Alkaline vents create natural **proton gradients** across mineral membranes — strikingly similar to the proton gradient modern cells use for ATP synthesis via chemiosmosis. These vents could provide energy and concentrated chemistry for the first metabolic reactions without needing surface organic chemistry. Life may have begun by exploiting a geological proton gradient — the same fundamental mechanism that still powers every mitochondrion in every eukaryotic cell today. The force that started life may be identical to the force that powers it. Beginning and present: the same physics.',
  },
  {
    emoji: '🔬', cat: 'bio_ch26', catLabel: 'Ch 26 – Origin of Life',
    title: 'LUCA Was Not the First Life. Just the Ancestor We All Share. And It Was Already Extraordinarily Sophisticated.',
    text: '**LUCA** (Last Universal Common Ancestor) was not necessarily the first life — other lineages may have existed and gone extinct. By comparing universally conserved genes scientists have reconstructed that LUCA already had: a DNA genome, ribosomes, the genetic code, ATP synthase, and basic metabolism. A 2016 study identified ~355 genes likely present in LUCA and suggested it lived in hydrothermal vents, was anaerobic, and used H₂ as an energy source. LUCA was not primitive. It had already solved heredity, protein synthesis, and energy metabolism. The ancestor of all life was already a highly sophisticated biochemical system. Life\'s beginning was not simple. Complexity came early.',
  },

  // Ch 27 extra
  {
    emoji: '🧫', cat: 'bio_ch27', catLabel: 'Ch 27 – Prokaryotes',
    title: 'You Have ~38 Trillion Bacteria in Your Body. And They Have Opinions About Your Health.',
    text: 'The **human microbiome** contains ~38 trillion bacterial cells — roughly equal to human cell count. Most live in the **gut** (colon). They: synthesise vitamins K and B₁₂, ferment indigestible fibre into short-chain fatty acids (colonocyte fuel), train the immune system, and influence the **gut-brain axis** affecting mood and behaviour. **Dysbiosis** (microbiome imbalance) is associated with obesity, inflammatory bowel disease, Type 2 diabetes, autism spectrum disorder, and depression. You are not an individual organism. You are an ecosystem. And the other organisms in that ecosystem substantially influence what happens in yours.',
  },
  {
    emoji: '💊', cat: 'bio_ch27', catLabel: 'Ch 27 – Prokaryotes',
    title: 'Antibiotics Work by Targeting Bacterial Structures That Human Cells Don\'t Have.',
    text: '**Antibiotic selectivity** exploits differences between bacteria and eukaryotes. **Cell wall inhibitors** (penicillin, cephalosporins): target bacterial **peptidoglycan** — human cells have no cell wall. **30S ribosome inhibitors** (aminoglycosides, tetracyclines): bacterial 30S vs human cytoplasmic 40S ribosomal subunit. **50S inhibitors** (macrolides): different from human 60S. **DNA gyrase inhibitors** (fluoroquinolones): bacterial topoisomerase II structurally distinct from human. Every antibiotic mechanism is a precision weapon aimed at a bacteria-specific target. Antibiotic resistance means bacteria keep finding ways to neutralise or evade the weapon. The weapon is precise. The target is evolving.',
  },

  // Ch 28 extra
  {
    emoji: '🌊', cat: 'bio_ch28', catLabel: 'Ch 28 – Protists',
    title: 'Phytoplankton Produce Half of All Earth\'s Oxygen. And Their Populations Are Declining.',
    text: '**Phytoplankton** — microscopic photosynthetic protists and cyanobacteria — perform ~50% of global photosynthesis and generate ~50% of atmospheric oxygen. **Diatoms** alone account for ~20% of global carbon fixation — more than all tropical rainforests combined. They are the base of marine food webs, supporting all ocean life. Phytoplankton populations are declining ~1% per year globally as ocean temperatures rise and stratification reduces nutrient upwelling. The health of the atmosphere is inseparable from the health of invisible single-celled life in the surface ocean. Every second breath you take was produced by organisms most people have never heard of.',
  },
  {
    emoji: '🧠', cat: 'bio_ch28', catLabel: 'Ch 28 – Protists',
    title: 'A Slime Mould Solved the Tokyo Rail Network Problem. With No Brain.',
    text: '***Physarum polycephalum*** — a single-celled slime mould — forms networks of tubes through which it pumps cytoplasm. Placed in a maze with food at both ends it finds the shortest path within hours. Japanese researchers placed it on a map of Tokyo metropolitan area with oat flakes at major population centres. Within 24 hours the network it formed was nearly identical to the Tokyo rail network — independently discovering the same efficiency solution human engineers spent decades optimising. A network-forming protist solves optimisation problems that challenge computer algorithms — using nothing but chemical gradients and mechanical feedback. Distributed intelligence with no brain. No neurons. No plan.',
  },

  // Ch 29 extra
  {
    emoji: '🍺', cat: 'bio_ch29', catLabel: 'Ch 29 – Fungi',
    title: 'Penicillin Was Discovered Because Fleming Looked at His Mistake Instead of Throwing It Away.',
    text: 'In 1928 Alexander Fleming returned from holiday to find *Staphylococcus* cultures contaminated by *Penicillium notatum* mould. Around the mould: a clear zone where bacteria were dead. He identified the antibacterial compound: **penicillin** — published but couldn\'t purify it. Florey and Chain developed purification in 1940 — Nobel Prize 1945 to all three. Mass production by 1943 supplied Allied troops. Penicillin saved an estimated 200 million lives. The discovery began with a contaminated petri dish and a scientist who asked why instead of discarding it. The fungus had been making penicillin for millions of years. Fleming\'s accident aligned him with an evolutionary weapon older than humanity.',
  },
  {
    emoji: '🌲', cat: 'bio_ch29', catLabel: 'Ch 29 – Fungi',
    title: 'Mycorrhizal Networks Connect 90% of Plant Species Underground. Forests Are Not Collections of Individuals.',
    text: '**Mycorrhizal symbioses** — between plant roots and fungi — occur in ~90% of terrestrial plant species. Plants provide fungi ~20–30% of photosynthetically fixed carbon. Fungi provide plants with phosphorus, nitrogen, water, and pathogen protection, dramatically extending root absorption surface. Carbon, nutrients, and stress signals travel between trees through fungal connections — the **Wood Wide Web**. Established trees support seedlings through these networks. Ancient forests are not collections of competing individuals. They are integrated communities sharing resources through underground fungal infrastructure that took millions of years to build. Cut the trees and you sever the network. The forest loses its memory.',
  },

  // Ch 32 extra
  {
    emoji: '🦋', cat: 'bio_ch32', catLabel: 'Ch 32 – Invertebrates',
    title: 'Bees See Ultraviolet Light. Flowers Have UV Patterns Invisible to Humans That Guide Bees to Nectar.',
    text: 'Bees can see **ultraviolet (UV) light** (300–400nm range) invisible to humans. Many flowers have UV patterns — nectar guides — visible only to UV-sensitive pollinators and completely invisible to human eyes. A flower that appears uniformly yellow to you may appear to a bee as having a vivid dark bullseye pattern pointing directly at the nectar. The flower evolved to advertise to its pollinator\'s sensory system, not to ours. The visual world of a bee navigating to a flower is an experience humans cannot access or imagine. Every flower you\'ve ever seen, you\'ve seen wrong. The bee\'s version is completely different.',
  },
  {
    emoji: '🦀', cat: 'bio_ch32', catLabel: 'Ch 32 – Invertebrates',
    title: 'Arthropods Are 80% of All Animal Species. By Every Metric They Have Won the Animal Kingdom.',
    text: '**Arthropoda** (insects, arachnids, crustaceans, myriapods) contains over 1 million described species — ~80% of all animals. Total estimated: 5–10 million. Their innovations: **exoskeleton** (protection, water retention, muscle attachment), **jointed appendages** (modified into spectacular diversity), **tracheal system** in insects (direct O₂ delivery — no cardiovascular oxygen transport needed). They colonised every habitat, evolved flight ~350 million years ago (first animals to fly), and contribute more to ecosystem services — pollination, decomposition, food web support — than all vertebrates combined. By species count, biomass, and ecological role arthropods dominate life on land. We are living in the age of arthropods. Vertebrates are the self-important minority.',
  },

  // Ch 33 extra
  {
    emoji: '🐬', cat: 'bio_ch33', catLabel: 'Ch 33 – Vertebrates',
    title: 'The Jaw-to-Ear Transition is the Most Beautifully Documented Evolutionary Change in the Fossil Record.',
    text: 'Mammalian evolution from reptilian ancestors involved the gradual transformation of **jaw bones into ear bones**. In reptiles the quadrate and articular bones form the jaw joint. In mammals these became the **incus (anvil)** and **malleus (hammer)** of the middle ear — giving mammals the ability to hear high-frequency sounds. The transition is documented in extraordinary detail through a series of intermediate fossils showing progressive reduction of jaw bones and increase in middle ear complexity over ~50 million years. The three small bones that give you the ability to hear music, speech, and your name being called were jawbones in your ancestors. The ear canal is a converted jaw. Evolution repurposed structural components with extraordinary precision.',
  },
  {
    emoji: '🦅', cat: 'bio_ch33', catLabel: 'Ch 33 – Vertebrates',
    title: 'Birds Are Not Descended From Dinosaurs. Birds ARE Dinosaurs.',
    text: 'Modern **birds** are classified as **Avialae** — a clade within **Theropoda** (the bipedal dinosaur group including T. rex and Velociraptor). Phylogenetically birds are dinosaurs, just as bats are mammals. The transition is documented in fossils: **Archaeopteryx** (150 million years ago) had feathers and wishbone (birds) but also teeth, clawed wings, and bony tail (dinosaurs). Many theropods were feathered — feathers evolved before flight, probably for insulation and display. The asteroid impact 66 million years ago killed all non-avian dinosaurs. The ~10,000 bird species alive today are the surviving dinosaur lineage. When you see a pigeon pecking at your lunch you are looking at a theropod dinosaur. A very ordinary dinosaur.',
  },

  // Ch 39 extra
  {
    emoji: '🌡️', cat: 'bio_ch39', catLabel: 'Ch 39 – Body Plans & Homeostasis',
    title: 'The Human Body Has Over 200 Cell Types. Each is a Different Implementation of the Same Genome.',
    text: 'The human body contains **~200 distinct cell types** — each with unique morphology, protein expression, and function, all derived from identical DNA. Neurons: post-mitotic, live a lifetime, electrically excitable. Red blood cells: no nucleus, optimised for haemoglobin. Intestinal enterocytes: replaced every 3–5 days. Cardiac muscle: highly rhythmic, mitochondria are 35% of cell volume. Sperm: smallest human cells. Oocytes: largest human cells. Same genome. 200 different implementations. The difference between a neuron and a sperm cell is entirely a matter of which genes are switched on. Differential gene expression is the architecture of an entire organism.',
  },
  {
    emoji: '🧊', cat: 'bio_ch39', catLabel: 'Ch 39 – Body Plans & Homeostasis',
    title: 'Countercurrent Heat Exchange Lets Arctic Birds Stand on Ice Without Freezing Their Feet.',
    text: '**Countercurrent heat exchange** in Arctic animal limbs: arteries carrying warm blood run alongside veins returning cold blood. Heat transfers from artery to vein along the entire length — warm blood cools toward the periphery transferring heat to returning cold blood rather than losing it to the environment. Arctic gulls\' feet are only slightly above freezing while their bodies stay at 40°C. Dolphin tails use the same system — maintaining core temperature in cold water. This **rete mirabile** (wonderful net) solves a thermodynamics problem with elegant plumbing. Insulation requires mass. Countercurrent exchange requires only that you run vessels in opposite directions. Nature chose efficiency.',
  },

  // Ch 41 extra
  {
    emoji: '👂', cat: 'bio_ch41', catLabel: 'Ch 41 – Sensory Systems',
    title: 'The Hair Cells That Let You Hear Cannot Regenerate. Every Loud Concert Destroys Them Permanently.',
    text: 'Sound detection begins in the **cochlea** — ~16,000 **hair cells** arrayed along the basilar membrane detecting different frequencies (**tonotopy**). Sound deflects stereocilia → mechanically-gated ion channels open → depolarisation → auditory nerve firing. The critical limitation: **mammalian hair cells cannot regenerate**. Noise damage, ototoxic drugs, and age cause permanent loss. Birds and fish regenerate hair cells continuously. Pharmaceutical and gene therapy research aims to restore this regenerative ability in humans. Every hair cell you lose to loud noise is gone permanently. The cells that let you hear are irreplaceable. Hearing loss is not gradual decline. It\'s permanent subtraction.',
  },
  {
    emoji: '🌡️', cat: 'bio_ch41', catLabel: 'Ch 41 – Sensory Systems',
    title: 'Pain is Not a Sensory Input. It\'s a Brain Output. The Same Injury Produces No Pain or Extreme Pain.',
    text: '**Nociception** — detection of tissue damage by nociceptors — is not the same as **pain**. Pain is a conscious subjective experience generated by the brain and modulated by context, expectation, and attention. Soldiers in combat often don\'t feel wounds until the battle ends. Placebo surgery for knee pain produces the same functional improvement as real surgery in controlled trials. The **gate control theory** (Melzack & Wall, 1965): pain signals can be blocked by competing sensory input and descending brain signals — why rubbing an injury reduces pain. Chronic pain is a failure of pain regulation — the brain creates pain without ongoing tissue damage. Pain is not in the tissue. It\'s in the brain\'s threat assessment.',
  },

  // Ch 42 extra
  {
    emoji: '🏋️', cat: 'bio_ch42', catLabel: 'Ch 42 – Musculoskeletal System',
    title: 'Muscle Fibre Type is Partly Genetic. Elite Sprinters and Elite Marathoners Are Born Different.',
    text: '**Type I (slow-twitch)** fibres: high myoglobin, many mitochondria, aerobic, fatigue-resistant, lower force. Marathon runners: ~80% Type I. **Type IIx (fast-twitch)**: low myoglobin, few mitochondria, anaerobic, powerful, fatigue fast. Sprinters: ~70% Type IIx. **Type IIa** is intermediate — trainable toward either extreme. Fibre type ratio: ~50% genetically determined. Training can shift IIx toward IIa (more oxidative capacity) but cannot convert fundamentally between fast- and slow-twitch. Elite sprinters are largely born with their muscle architecture. Training reveals and refines the genetic potential. You cannot train yourself from a marathon body into a sprint body. The architecture was laid before your first footstep.',
  },

  // Ch 45 extra
  {
    emoji: '🧂', cat: 'bio_ch45', catLabel: 'Ch 45 – Osmoregulation & Excretion',
    title: 'The Loop of Henle Creates a Concentration Gradient That Lets You Drink 180 Litres and Pee 1.5 Litres.',
    text: 'The **loop of Henle** creates an osmotic gradient in the kidney medulla via a **countercurrent multiplier**: descending limb permeable to water (water exits → filtrate concentrates); ascending limb impermeable to water but actively transports NaCl out → increasing interstitial osmolarity → driving more water from the descending limb. Self-amplifying loop: 300 mOsm at cortex to ~1,200 mOsm at medulla tip. **ADH (vasopressin)** — released when you\'re dehydrated — increases collecting duct water permeability, allowing water to move down this gradient and be reabsorbed. More ADH = concentrated urine. No ADH = dilute urine. Your kidneys filter 180 litres daily and reclaim 99% using osmosis. The most sophisticated filtration system ever evolved runs on physics, not pumps.',
  },

  // Ch 47 extra
  {
    emoji: '🔬', cat: 'bio_ch47', catLabel: 'Ch 47 – Reproduction & Development',
    title: 'The Placenta is Part Maternal, Part Fetal, and Half Its Key Genes Came From a Virus.',
    text: 'The **placenta** — the organ connecting mother and fetus — has no equivalent in non-mammalian animals. ~10% of the placental genome consists of **endogenous retroviral elements** — ancient viral DNA integrated into mammalian genomes millions of years ago. The gene **syncytin** — derived from a retroviral envelope protein — drives formation of the **syncytiotrophoblast**: the multinucleated layer through which nutrients and gases exchange between mother and fetus. A viral protein originally evolved to fuse viral membranes was co-opted by mammalian evolution to fuse placental cells. The placenta exists because of an ancient viral infection that evolution repurposed into a reproductive organ. Mammals are the descendants of an infection.',
  },

  // Ch 48 extra
  {
    emoji: '🐝', cat: 'bio_ch48', catLabel: 'Ch 48 – Behavioural Biology',
    title: 'Honeybees Communicate the Location of Flowers Using a Dance That Encodes Both Direction and Distance.',
    text: 'The **waggle dance** (Karl von Frisch, Nobel Prize 1973): a forager bee performs a figure-eight dance. The waggle run angle relative to vertical = direction relative to the sun. Duration = distance (1 second ≈ 1km). Amplitude = food quality. Bees attending the dance decode this information and fly to the correct location. This is **symbolic communication about an absent referent** — historically thought unique to humans. Bees communicate about places they\'re not currently at, using a system encoding both direction and distance simultaneously, processed by a 1.5mm brain. Symbolic language appeared in bees before it appeared in hominids. We just didn\'t notice because we weren\'t watching the right dance.',
  },
  {
    emoji: '🧠', cat: 'bio_ch48', catLabel: 'Ch 48 – Behavioural Biology',
    title: 'Imprinting Creates a Critical Window of Learning That Cannot Be Reopened. Ever.',
    text: '**Imprinting** (Konrad Lorenz, Nobel Prize 1973): during a specific **critical period** animals attach to characteristics of their early environment — irreversibly. **Filial imprinting**: newly hatched geese follow the first moving object they see (normally their mother). Lorenz famously had goslings follow him everywhere. **Sexual imprinting**: young birds direct future mating preferences toward parental characteristics. The neural basis: critical periods involve heightened synaptic plasticity that closes as inhibitory interneurons mature. This same mechanism explains why language acquisition is effortless in childhood and difficult in adulthood. Critical periods are biology\'s "use it or lose it" windows. They close. They do not reopen.',
  },

  // Ch 49 extra
  {
    emoji: '📉', cat: 'bio_ch49', catLabel: 'Ch 49 – Population Ecology',
    title: 'r-Strategists and K-Strategists Are Opposite Evolutionary Solutions to "How Many Offspring?"',
    text: '**r-selection**: many small offspring, minimal parental investment, short lifespan, early maturity — exploiting unstable environments by sheer numbers (insects, weeds, mice). **K-selection**: few large offspring, heavy parental investment, long lifespan, late maturity — near carrying capacity in stable environments (elephants, whales, humans). Most species fall on a continuum. This framework explains why rabbit populations recover from crashes in weeks while elephant populations recovering from poaching take decades. Reproductive strategy is evolutionary economics. Each offspring is an investment with a risk-return profile shaped by millions of years of selection. Elephants invest heavily in few. Rabbits bet on volume.',
  },

  // Ch 50 extra
  {
    emoji: '🌿', cat: 'bio_ch50', catLabel: 'Ch 50 – Community Ecology',
    title: 'Two Species Cannot Occupy the Same Ecological Niche Indefinitely. One Will Always Win.',
    text: 'The **competitive exclusion principle** (Gause, 1934): two species competing for identical resources cannot coexist — one excludes the other. In controlled lab experiments *Paramecium aurelia* always eliminated *P. caudatum* competing for the same bacterial food. In nature coexistence is maintained through **niche differentiation** — species partition resources by time, space, or resource type. **Character displacement** — species evolving greater morphological differences where they co-occur than where they don\'t — is the evolutionary result. Darwin\'s finches show character displacement in beak size. Competitive exclusion drives speciation: the impossibility of coexistence forces species to become different enough that they no longer compete.',
  },

  // Ch 51 extra
  {
    emoji: '🔄', cat: 'bio_ch51', catLabel: 'Ch 51 – Ecosystems & Energy Flow',
    title: 'The Nitrogen Cycle Runs Entirely on Bacteria. Without Them All Life Would Starve in a Nitrogen-Rich Atmosphere.',
    text: 'The **nitrogen cycle**: **Fixation** (N₂→NH₃): only diazotrophic bacteria and archaea — no plant or animal can do this. **Nitrification** (NH₃→NO₃⁻): nitrifying bacteria. **Assimilation** (NO₃⁻→organic N): plants and microorganisms. **Ammonification** (organic N→NH₃): decomposers. **Denitrification** (NO₃⁻→N₂): denitrifying bacteria in anaerobic conditions — returning nitrogen to the atmosphere. Without nitrogen-fixing bacteria, atmospheric N₂ would remain inaccessible to life. Without denitrifiers, nitrogen would accumulate in ecosystems. Every amino acid you contain, every protein you\'ve ever made — the nitrogen atoms were processed through a bacterium at some point in their history. You exist on the metabolic generosity of microorganisms.',
  },

  // Ch 52 extra
  {
    emoji: '🌊', cat: 'bio_ch52', catLabel: 'Ch 52 – Biomes & Aquatic Ecosystems',
    title: 'Coral Reefs Cover 0.1% of the Ocean Floor and Shelter 25% of All Marine Species. A 0.5°C Temperature Change is Destroying Them.',
    text: '**Coral reefs** built by calcium carbonate-depositing coral polyps are the most biodiverse marine ecosystems. The productivity engine: **zooxanthellae** (symbiotic photosynthetic algae) living inside coral tissues provide up to 90% of the coral\'s energy. **Bleaching** — thermal stress expels zooxanthellae — turns coral white and starves it. At 1.5°C above pre-industrial temperatures: 70–90% of coral reefs severely degraded. At 2°C: >99% degraded. The most biodiverse marine habitat is being destroyed by a 0.5°C temperature difference between warming scenarios. That half a degree is the difference between a living reef and a limestone skeleton. The most biodiverse place in the ocean is the most fragile.',
  },
  {
    emoji: '🧊', cat: 'bio_ch52', catLabel: 'Ch 52 – Biomes & Aquatic Ecosystems',
    title: 'Permafrost Contains Twice the Carbon in the Atmosphere. Its Thawing is a Feedback Loop That Accelerates Its Own Cause.',
    text: '**Permafrost** stores ~1,500 billion tonnes of organic carbon — nearly twice the current atmospheric carbon load — frozen plant material accumulated over thousands of years. As temperatures rise permafrost thaws, microbial decomposition resumes, releasing CO₂ and methane. This is a **positive feedback loop**: warming → thaw → greenhouse gas release → more warming → more thaw. Models suggest permafrost carbon could add the equivalent of 1.5°C additional warming beyond human emissions alone. The permafrost is a slow-motion climate bomb loaded over 10,000 years. Once triggered it cannot be re-frozen on human timescales. The detonation has already started at the edges.',
  },

  // Ch 53 extra
  {
    emoji: '🌳', cat: 'bio_ch53', catLabel: 'Ch 53 – Conservation Biology',
    title: 'Habitat Fragmentation is More Destructive Than Equivalent Habitat Loss. Connectivity is Conservation.',
    text: '**Habitat fragmentation** — dividing habitat into isolated patches — is more harmful than equivalent total loss because: **Edge effects** (degraded habitat quality along boundaries), **reduced gene flow** (isolated populations undergo genetic drift and inbreeding), **minimum viable population** thresholds are breached, and **island biogeography** predicts smaller patches support fewer species at equilibrium. Forest patches function as ecological islands. A nature reserve that appears large enough may be too fragmented to sustain the prey base that feeds apex predators. Area on a map is not functional habitat. Wildlife corridors restore gene flow and reintegrate fragments. Connectivity is genetic survival.',
  },
  {
    emoji: '💉', cat: 'bio_ch53', catLabel: 'Ch 53 – Conservation Biology',
    title: 'De-extinction is Technically Possible. Whether We Should Is a Harder Question.',
    text: '**De-extinction** using ancient DNA and CRISPR is advancing. Colossal Biosciences has inserted mammoth cold-adaptation genes into elephant stem cells, aiming for cold-adapted elephant/mammoth hybrids by 2027. Ecological rationale: mammoths as **ecosystem engineers** maintaining grasslands that reflect more sunlight than current tundra forests — potentially slowing permafrost thaw. Critics argue: resources better spent on living threatened species; recreated animals lack cultural knowledge; ecosystems have reorganised in their absence. De-extinction raises questions conservation biology has never faced: when we can bring back what we killed, should we? And if we do — are we restoring an ecosystem or building a zoo?',
  },
  // Ch 7 extra
  {
    emoji: '🚰', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Aquaporins Let Water Cross Membranes 1 Billion Times Faster. And They Block Every Single Ion.',
    text: 'Water crosses lipid bilayers slowly by diffusion. **Aquaporins** (Peter Agre, Nobel Prize 2003) are protein channels passing 1 billion water molecules per second per channel while blocking all ions — including protons — with extraordinary selectivity. The selectivity filter forces water molecules to reorient in single file, breaking any proton-relay chain. Kidneys use aquaporins to reclaim 180L of water from filtrate daily. A protein channel so selective it lets water through at a billion per second and refuses the smallest ion in chemistry. Evolution built the world\'s most precise molecular sieve — and installed it in every cell.',
  },
  {
    emoji: '🔄', cat: 'bio_ch7', catLabel: 'Ch 7 – Membrane Structure & Transport',
    title: 'Viruses Hijack Receptor-Mediated Endocytosis — The Same Door Cells Use to Absorb Nutrients.',
    text: '**Receptor-mediated endocytosis**: membrane receptors bind specific molecules → clathrin-coated pit forms → vesicle pinches in → cargo delivered inside. Cells use this to absorb LDL cholesterol, iron, vitamins, and hormones. Viruses — HIV, influenza, SARS-CoV-2 — hijack specific surface receptors to use this same entry mechanism. SARS-CoV-2 binds ACE2 (a blood pressure regulator) to enter lung cells. The door the cell uses for nutrition is the same door the virus uses for infection. Your doorbell is both how groceries arrive and how the burglar enters. Same mechanism. Different intention.',
  },
  // Ch 15 extra
  {
    emoji: '🔍', cat: 'bio_ch15', catLabel: 'Ch 15 – Chromosomal Inheritance',
    title: 'Down Syndrome is Usually Caused by Non-disjunction in Meiosis I. Maternal Age is the Primary Risk Factor.',
    text: '**Trisomy 21 (Down syndrome)** results from three copies of chromosome 21 — most commonly from non-disjunction in maternal meiosis I. Risk increases sharply with maternal age: ~1/1,500 at age 20 → ~1/270 at age 35 → ~1/50 at age 45. Why? Human oocytes begin meiosis I during fetal development and arrest in prophase I — sometimes for 40+ years before completing meiosis at ovulation. Over decades, the proteins holding homologous chromosomes together (cohesins) degrade, increasing missegregation risk. An oocyte in a 40-year-old woman has been arrested mid-meiosis since before the woman was born. The longer the arrest, the greater the risk of an error when the process finally resumes.',
  },
  // Ch 21 extra
  {
    emoji: '🌍', cat: 'bio_ch21', catLabel: 'Ch 21 – Darwin & Natural Selection',
    title: 'Convergent Evolution Produces the Same Solution Independently. Sharks and Dolphins Look Alike for a Reason.',
    text: '**Convergent evolution** — unrelated lineages independently evolving similar traits in response to similar selection pressures — produces striking similarities between non-relatives. Shark (fish) and dolphin (mammal): same streamlined body, dorsal fin, pectoral fins — evolved independently for the same purpose (fast aquatic locomotion). Eyes evolved independently at least 40 times in different animal lineages. Wings evolved independently in insects, pterosaurs, birds, and bats. Echolocation evolved independently in bats and dolphins. When the same environment poses the same problem, natural selection finds the same engineering solution — repeatedly, in unrelated lineages. Evolution has a favourite answers list.',
  },
  // Ch 22 extra
  {
    emoji: '🦴', cat: 'bio_ch22', catLabel: 'Ch 22 – Evidence for Evolution',
    title: 'Embryos of Vastly Different Animals Look Nearly Identical in Early Development.',
    text: '**Comparative embryology** reveals that fish, reptile, bird, and human embryos are nearly indistinguishable in early stages — all showing **pharyngeal arches** (which become gills in fish, jaw and ear bones in mammals), a **tail**, and similar body plan. These **embryonic homologies** reflect shared developmental genetic programmes — **Hox genes** conserved across all bilateral animals. In humans the pharyngeal arches become the jaw, middle ear bones, larynx, and thymus. The tail is reabsorbed via apoptosis during development. Every human embryo briefly has a tail and gill-like structures before development erases them. You were a fish. Briefly. In your mother\'s womb.',
  },
  // Ch 26 extra
  {
    emoji: '🧬', cat: 'bio_ch26', catLabel: 'Ch 26 – Origin of Life',
    title: 'The First Genetic Material Was Probably RNA, Not DNA. The Ribosome is the Proof.',
    text: 'The **RNA World Hypothesis**: RNA came before DNA because RNA can both store information (like DNA) AND catalyse reactions (ribozymes — like DNA cannot). The strongest evidence: the **ribosome** — the machine that makes all proteins in all life — has a catalytic core made entirely of RNA (the 23S/28S rRNA). Protein synthesis is an RNA-catalysed reaction. If proteins built the ribosome, you need proteins before the ribosome. If RNA built it, you need only RNA. The ribosome is a molecular fossil of the RNA world — still using the ancient RNA-based mechanism that predates proteins. Every time your cells make a protein, they are using 3.8-billion-year-old RNA machinery.',
  },
  // Ch 27 extra
  {
    emoji: '🌡️', cat: 'bio_ch27', catLabel: 'Ch 27 – Prokaryotes',
    title: 'Archaea Survive in Conditions That Would Kill Everything Else. And They\'re Everywhere.',
    text: '**Archaea** — once thought to be rare extreme-environment curiosities — are now known to be among the most abundant organisms on Earth. They thrive at: 121°C in hydrothermal vents (**Methanopyrus kandleri**), pH 0 in acid mine drainage, saturated salt lakes, and anaerobic deep subsurface rock kilometres underground. They are major players in the ocean, soil, and the human gut. Archaea perform ~50% of global nitrogen fixation in some ocean regions. Their cell membranes use **ether-linked lipids** rather than ester-linked lipids — more stable at extremes. They were invisible to microbiology for a century because they don\'t grow on standard culture media. The most abundant life-forms in extreme environments were hiding in plain sight.',
  },
  // Ch 30 extra
  {
    emoji: '🌲', cat: 'bio_ch30', catLabel: 'Ch 30-31 – Plant Evolution & Diversity',
    title: 'Lignin Allowed Plants to Stand Upright. It Also Created Coal.',
    text: '**Lignin** — a complex phenolic polymer deposited in plant cell walls — provides the rigidity that allows trees to grow tall. Without lignin, plants are limited to low-growing ground-hugging forms. The evolution of lignin ~380 million years ago enabled forests — dramatically changing Earth\'s atmosphere and climate. The problem: no organisms had yet evolved to digest lignin. Dead trees accumulated in vast swamp forests without decomposing for millions of years — compressing into what we now burn as **coal**. We are currently releasing the carbon fixed by 300-million-year-old forests. The fuel powering industrial civilisation is ancient undigested wood — preserved by an evolutionary gap in decomposer capability.',
  },
  // Ch 34 extra
  {
    emoji: '🌱', cat: 'bio_ch34', catLabel: 'Ch 34 – Plant Structure & Growth',
    title: 'The Oldest Living Tree Is 5,000 Years Old. It Was a Sapling When the Pyramids Were Being Built.',
    text: '**Methuselah** — a Great Basin bristlecone pine (*Pinus longaeva*) in California\'s White Mountains — is approximately 5,000 years old, making it the oldest known individual tree. Its location is kept secret to protect it. Bristlecone pines survive in harsh, high-altitude, low-precipitation environments — slow growth produces extremely dense, resin-saturated wood highly resistant to disease, insects, and decay. Their meristems have been continuously dividing since before the Egyptian pyramids were built. They hold 5,000 years of climate data in their rings. The oldest tree alive today was a seedling during the Bronze Age. And it is still growing.',
  },
  // Ch 36 extra
  {
    emoji: '☀️', cat: 'bio_ch36', catLabel: 'Ch 36 – Plant Nutrition',
    title: 'The Haber-Bosch Process Feeds Half of Humanity. It Also Consumes 2% of Global Energy.',
    text: 'The **Haber-Bosch process** (Fritz Haber, Carl Bosch — Nobel Prizes 1918 and 1931) industrially fixes atmospheric N₂ into ammonia (NH₃) at high temperature and pressure using an iron catalyst. The ammonia becomes fertiliser. Without synthetic nitrogen fertiliser, Earth could support roughly 4 billion people — not 8 billion. Haber-Bosch feeds approximately half of all humans alive today. The cost: ~2% of global energy consumption, mostly natural gas for H₂ production, generating ~1% of global CO₂ emissions. Fritz Haber also developed chemical weapons in WWI — the same mind that enabled feeding billions also enabled poison gas warfare. The most consequential chemist in history is also the most morally complex.',
  },
  // Ch 37 extra
  {
    emoji: '🌰', cat: 'bio_ch37', catLabel: 'Ch 37 – Plant Reproduction',
    title: 'Double Fertilisation is Unique to Angiosperms. It Creates Both the Embryo and the Food Supply Simultaneously.',
    text: '**Double fertilisation** — unique to flowering plants — involves two sperm nuclei: one fertilises the egg (→ **zygote** → embryo), the other fuses with the two polar nuclei (→ **endosperm** → food reserve). This is why angiosperm seeds contain both a dormant embryo and a nutritive endosperm (the white of a corn kernel, the starchy interior of a wheat grain, the coconut milk). Double fertilisation ensures that food reserves are only produced when fertilisation occurs — not wasted if the egg is unfertilised. Every grain you eat exists because a plant evolved to simultaneously create both a baby and its packed lunch. Double fertilisation is the reason agriculture is possible.',
  },
  // Ch 40 extra
  {
    emoji: '🧠', cat: 'bio_ch40', catLabel: 'Ch 40 – Nervous System',
    title: 'Long-Term Potentiation is the Cellular Mechanism of Memory. And It Works by Strengthening Synapses.',
    text: '**Long-term potentiation (LTP)** — the leading cellular model of learning and memory — involves persistent strengthening of synapses following repeated stimulation. Mechanism: repeated activation of a synapse causes postsynaptic NMDA receptors (voltage-gated AND ligand-gated) to open, allowing Ca²⁺ entry → activates kinases → inserts more AMPA receptors into the postsynaptic membrane → synapse is now more sensitive to future stimulation. The same input produces a larger response. **Hebbian plasticity**: "neurons that fire together wire together." Repeated activation of a pathway physically strengthens it. Memory is not stored in specific molecules — it is encoded in the **pattern of synaptic weights** across neural networks. Every memory you have is a pattern of stronger and weaker connections. Every time you remember something, you slightly change it.',
  },
  // Ch 43 extra
  {
    emoji: '🧬', cat: 'bio_ch43', catLabel: 'Ch 43 – Circulation & Gas Exchange',
    title: 'Blood is a Connective Tissue. And It Has Four Components Doing Four Completely Different Jobs.',
    text: 'Blood is a **liquid connective tissue** — about 55% **plasma** (water, proteins, nutrients, hormones, gases) and 45% **formed elements**: **Erythrocytes** (red blood cells — no nucleus, ~5 million/μL, 120-day lifespan, haemoglobin for O₂/CO₂ transport). **Leukocytes** (white blood cells — nucleated, immune function — 5,000–10,000/μL). **Thrombocytes** (platelets — cell fragments from megakaryocytes, 150,000–400,000/μL — blood clotting). All formed elements originate from **haematopoietic stem cells** in red bone marrow. You produce ~2 million new red blood cells every second. Your bone marrow is one of the most productive tissues in the body — manufacturing cells faster than any factory.',
  },
  // Ch 44 extra
  {
    emoji: '🧬', cat: 'bio_ch44', catLabel: 'Ch 44 – Immune System',
    title: 'Vaccines Work Because the Immune System\'s Second Response is 100× Faster Than the First.',
    text: 'The first exposure to a pathogen: the adaptive immune response takes 10–14 days to mount a full antibody response — during which you may become seriously ill. After clearance, **memory B cells** and **memory T cells** persist — sometimes for life. Second exposure to the same antigen: memory cells respond within 1–3 days, producing higher-titre, higher-affinity antibodies faster than the pathogen can establish infection. **Vaccines** exploit this by delivering antigen (killed/attenuated pathogen, subunit proteins, or mRNA) without the disease — creating memory without infection. The smallpox vaccine eradicated a disease that killed 300–500 million people in the 20th century alone. Immunological memory is not just biology. It is the most powerful public health intervention ever invented.',
  },
  // Ch 46 extra
  {
    emoji: '💪', cat: 'bio_ch46', catLabel: 'Ch 46 – Endocrine System',
    title: 'Cortisol is the Stress Hormone. Chronic Stress Keeps It Elevated and It Slowly Destroys You.',
    text: '**Cortisol** — released from the adrenal cortex via the HPA axis — is the primary long-term stress hormone. Acute effects: raises blood glucose, suppresses immune function, increases alertness — adaptive in a crisis. Chronic elevation: **immunosuppression** (increased susceptibility to infection), **hippocampal damage** (the hippocampus has high cortisol receptor density — chronic stress literally shrinks the hippocampus, impairing memory and increasing depression risk), **muscle catabolism**, **bone density reduction**, cardiovascular damage. The cortisol response evolved for acute physical threats lasting minutes. Chronic psychological stress — lasting months or years — runs the acute stress response continuously and slowly degrades the systems it was designed to protect. Stress is not metaphorical. It is biochemistry. And it has a bill.',
  },
  // Ch 47 extra
  {
    emoji: '🧬', cat: 'bio_ch47', catLabel: 'Ch 47 – Reproduction & Development',
    title: 'Every Human Starts Female. The Y Chromosome Actively Redirects Development.',
    text: 'The default developmental trajectory of the human embryo is **female**. The gonads begin as undifferentiated tissue. In the absence of specific signals they develop into ovaries. The **SRY gene** on the Y chromosome — if present — activates around week 6–7 of development, triggering production of **testes-determining factor** which redirects gonad development toward testes. Testes then produce **testosterone** and **anti-Müllerian hormone (AMH)** which masculinise the reproductive tract and suppress female duct development. Maleness is not the default. It is an active developmental programme initiated by a single gene. Without SRY — even in XY individuals — female development proceeds. The Y chromosome\'s primary job is to interrupt the default programme.',
  },
  // Ch 49 extra
  {
    emoji: '🐺', cat: 'bio_ch49', catLabel: 'Ch 49 – Population Ecology',
    title: 'Wolves Reintroduced to Yellowstone Changed the Shape of Rivers. Through a Trophic Cascade.',
    text: 'Wolves were extirpated from Yellowstone by 1926. Elk populations grew and overgrazed riverbanks — destabilising stream banks, reducing riparian vegetation, eliminating beavers. Wolves were reintroduced in 1995. Elk became more cautious, avoiding open riverbanks (**landscape of fear** effect). Riparian vegetation recovered. Stream banks stabilised. Beavers returned, building dams that created wetland habitats. Songbird and fish populations increased. River channels narrowed and meandered less — literally changing the geomorphology of streams. One predator reintroduction cascaded through trophic levels and changed the physical shape of rivers. This **trophic cascade** is one of ecology\'s most powerful demonstrations that predators do not just control prey populations — they control entire landscapes.',
  },
  // Ch 50 extra
  {
    emoji: '🌊', cat: 'bio_ch50', catLabel: 'Ch 50 – Community Ecology',
    title: 'Krakatoa Erupted in 1883 and Completely Sterilised the Island. Life Returned Within Decades.',
    text: 'The 1883 Krakatoa eruption was so violent it sterilised the island with pyroclastic flows and ash. By the 1880s: nothing living. By 1920s: grassland and pioneer shrubs. By 1950s: secondary forest with returning fauna. Within a century, **primary succession** rebuilt an ecosystem from bare rock through the sequential colonisation of pioneer species (mosses, ferns), then shrubs, then trees — each stage creating conditions enabling the next. This documents the power of **ecological succession**: ecosystems don\'t just recover from catastrophe — they rebuild using the same sequential biological engineering that built them originally. Life doesn\'t need help coming back. It needs time and a substrate. That\'s all.',
  },
  // Ch 51 extra
  {
    emoji: '⚖️', cat: 'bio_ch51', catLabel: 'Ch 51 – Ecosystems & Energy Flow',
    title: 'Eating Meat is 10× Less Energy Efficient Than Eating Plants. The Physics Cannot Be Argued With.',
    text: 'The **10% rule** of trophic energy transfer: only ~10% of energy at one trophic level is incorporated into the next. 1,000 kJ of plant energy → 100 kJ of herbivore biomass → 10 kJ of carnivore biomass. Eating meat is ~10× less energy-efficient than eating plants — the same land and solar energy can support 10× more human caloric needs through plant agriculture than through animal agriculture. This is not a political statement. It is thermodynamics. The energy pyramid has physical constraints independent of human preference. Apex predators are rare in ecosystems not because evolution made them unsuccessful — but because thermodynamics enforces scarcity at every trophic step. You cannot argue with the second law.',
  },

];

// =============================================================================
// Category metadata for rendering (matches existing BUCKETS structure pattern)
// =============================================================================

export const BIO_CHAPTERS = [
  { id: 'bio_ch1',  label: 'Ch 1 – Intro & Scientific Method',  unit: 'Unit 1: Chemistry of Life' },
  { id: 'bio_ch2',  label: 'Ch 2 – Atoms & Chemical Bonds',      unit: 'Unit 1: Chemistry of Life' },
  { id: 'bio_ch3',  label: 'Ch 3 – Water & Life',                unit: 'Unit 1: Chemistry of Life' },
  { id: 'bio_ch4',  label: 'Ch 4 – Carbon & Organic Molecules',  unit: 'Unit 1: Chemistry of Life' },
  { id: 'bio_ch5',  label: 'Ch 5 – Macromolecules',              unit: 'Unit 1: Chemistry of Life' },
  { id: 'bio_ch6',  label: 'Ch 6 – Cell Structure & Function',   unit: 'Unit 2: The Cell' },
  { id: 'bio_ch7',  label: 'Ch 7 – Membrane & Transport',        unit: 'Unit 2: The Cell' },
  { id: 'bio_ch8',  label: 'Ch 8 – Cell Signalling',             unit: 'Unit 2: The Cell' },
  { id: 'bio_ch9',  label: 'Ch 9 – Energy & Metabolism',         unit: 'Unit 2: The Cell' },
  { id: 'bio_ch10', label: 'Ch 10 – Cellular Respiration',       unit: 'Unit 2: The Cell' },
  { id: 'bio_ch11', label: 'Ch 11 – Photosynthesis',             unit: 'Unit 2: The Cell' },
  { id: 'bio_ch12', label: 'Ch 12 – Cell Division & Mitosis',    unit: 'Unit 3: Genetics' },
  { id: 'bio_ch13', label: 'Ch 13 – Meiosis & Reproduction',     unit: 'Unit 3: Genetics' },
  { id: 'bio_ch14', label: 'Ch 14 – Mendelian Genetics',         unit: 'Unit 3: Genetics' },
  { id: 'bio_ch15', label: 'Ch 15 – Chromosomal Inheritance',    unit: 'Unit 3: Genetics' },
  { id: 'bio_ch16', label: 'Ch 16 – DNA Structure & Replication',unit: 'Unit 3: Genetics' },
  { id: 'bio_ch17', label: 'Ch 17 – Gene Expression',            unit: 'Unit 3: Genetics' },
  { id: 'bio_ch18', label: 'Ch 18 – Gene Regulation',            unit: 'Unit 3: Genetics' },
  { id: 'bio_ch19', label: 'Ch 19 – Viruses',                    unit: 'Unit 3: Genetics' },
  { id: 'bio_ch20', label: 'Ch 20 – Biotechnology & Genomics',   unit: 'Unit 3: Genetics' },
  { id: 'bio_ch21', label: 'Ch 21 – Darwin & Natural Selection', unit: 'Unit 4: Evolution' },
  { id: 'bio_ch22', label: 'Ch 22 – Evidence for Evolution',     unit: 'Unit 4: Evolution' },
  { id: 'bio_ch23', label: 'Ch 23 – Population Genetics',        unit: 'Unit 4: Evolution' },
  { id: 'bio_ch24', label: 'Ch 24 – Speciation',                 unit: 'Unit 4: Evolution' },
  { id: 'bio_ch25', label: 'Ch 25 – Macroevolution & Phylogeny', unit: 'Unit 4: Evolution' },
  { id: 'bio_ch26', label: 'Ch 26 – Origin of Life',             unit: 'Unit 4: Evolution' },
  { id: 'bio_ch27', label: 'Ch 27 – Prokaryotes',                unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch28', label: 'Ch 28 – Protists',                   unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch29', label: 'Ch 29 – Fungi',                      unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch30', label: 'Ch 30-31 – Plant Evolution',         unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch31', label: 'Ch 30-31 – Plant Diversity',         unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch32', label: 'Ch 32 – Invertebrates',              unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch33', label: 'Ch 33 – Vertebrates',                unit: 'Unit 5: Diversity of Life' },
  { id: 'bio_ch34', label: 'Ch 34 – Plant Structure & Growth',   unit: 'Unit 6: Plant Biology' },
  { id: 'bio_ch35', label: 'Ch 35 – Plant Transport',            unit: 'Unit 6: Plant Biology' },
  { id: 'bio_ch36', label: 'Ch 36 – Plant Nutrition',            unit: 'Unit 6: Plant Biology' },
  { id: 'bio_ch37', label: 'Ch 37 – Plant Reproduction',         unit: 'Unit 6: Plant Biology' },
  { id: 'bio_ch38', label: 'Ch 38 – Plant Responses & Hormones', unit: 'Unit 6: Plant Biology' },
  { id: 'bio_ch39', label: 'Ch 39 – Body Plans & Homeostasis',   unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch40', label: 'Ch 40 – Nervous System',             unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch41', label: 'Ch 41 – Sensory Systems',            unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch42', label: 'Ch 42 – Musculoskeletal System',     unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch43', label: 'Ch 43 – Circulation & Gas Exchange', unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch44', label: 'Ch 44 – Immune System',              unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch45', label: 'Ch 45 – Osmoregulation & Excretion', unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch46', label: 'Ch 46 – Endocrine System',           unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch47', label: 'Ch 47 – Reproduction & Development', unit: 'Unit 7: Animal Physiology' },
  { id: 'bio_ch48', label: 'Ch 48 – Behavioural Biology',        unit: 'Unit 8: Ecology' },
  { id: 'bio_ch49', label: 'Ch 49 – Population Ecology',         unit: 'Unit 8: Ecology' },
  { id: 'bio_ch50', label: 'Ch 50 – Community Ecology',          unit: 'Unit 8: Ecology' },
  { id: 'bio_ch51', label: 'Ch 51 – Ecosystems & Energy Flow',   unit: 'Unit 8: Ecology' },
  { id: 'bio_ch52', label: 'Ch 52 – Biomes & Aquatic Ecosystems',unit: 'Unit 8: Ecology' },
  { id: 'bio_ch53', label: 'Ch 53 – Conservation Biology',       unit: 'Unit 8: Ecology' },
];

// =============================================================================
// HOW TO INTEGRATE INTO funFactsController.js:
//
// 1. Import at top of funFactsController.js:
//    import { BIO_FACTS } from './bioFacts.js';
//
// 2. Spread into FACTS array:
//    const FACTS = [ ...BIO_FACTS, /* existing physics, chemistry facts */ ];
//
// 3. Add biology bucket to BUCKETS array:
//    { id: 'biology', label: '🧬 Biology', subs: BIO_CHAPTERS }
//
// =============================================================================


// =============================================================================
// HOW TO INTEGRATE INTO funFactsController.js:
//
// 1. import { BIO_FACTS } from './bioFacts.js';
// 2. const FACTS = [ ...BIO_FACTS, ...existingFacts ];
// 3. Add BIO_CHAPTERS to BUCKETS array
//
// Total: 225 facts | 53 chapters | 8 units
// Format: Hook → Term → Mechanism → Kicker
// =============================================================================
