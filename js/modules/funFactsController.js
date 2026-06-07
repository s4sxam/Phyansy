// =============================================================================
// funFactsController.js — Fun Facts Section
// =============================================================================

const FACTS = [
  // ── PHYSICS ──
  {
    emoji: '🧊', cat: 'physics', catLabel: 'Physics',
    title: 'Absolute Zero: The Forbidden Line',
    text: 'Nothing in the universe can ever reach exactly −273.15°C (absolute zero). Scientists have gotten 0.000000001°C away — but the laws of physics literally won\'t let you cross that line. To cool something down, you need something colder than it. Nothing is colder than absolute zero. It\'s like a door that gets closer the faster you run — but never opens.',
  },
  {
    emoji: '⏰', cat: 'physics', catLabel: 'Physics',
    title: 'Your Face is Older Than Your Feet',
    text: 'Time actually passes faster for your face than your feet. Gravity warps time, and your head is slightly farther from Earth\'s core. GPS satellites have to correct for this every single day or your Maps app would be wrong by kilometres. Your face is technically aging faster — right now, always.',
  },
  {
    emoji: '🔥', cat: 'physics', catLabel: 'Physics',
    title: 'Fire Isn\'t Even a Thing',
    text: 'Fire has no mass, no shape, and isn\'t matter. It\'s just superheated gas glowing from a rapid oxidation reaction. What you call "flame" is thermodynamics having a moment. The universe has been pranking you since the campfire. You\'ve been amazed by a chemical process your whole life.',
  },
  {
    emoji: '⚡', cat: 'physics', catLabel: 'Physics',
    title: 'Lightning is 5× Hotter Than the Sun\'s Surface',
    text: 'The Sun\'s surface: ~5,500°C. A lightning bolt: ~30,000°C. It lasts a fraction of a second, but in that moment it is the hottest thing for miles around. Thunder is just the air screaming from the shock. Also — the visible lightning you see is actually traveling upward. Lightning decides where to strike before it touches the ground.',
  },
  {
    emoji: '🫀', cat: 'physics', catLabel: 'Physics',
    title: 'Empty Space — You\'ve Never Touched Anything',
    text: '99.9999999999996% of an atom is empty space. If you removed all the empty space from every human on Earth — all 8 billion of us — we\'d fit inside a sugar cube. What you feel as "solid" is just electromagnetic repulsion. Your hands never touched this screen. Your feet never touched the floor. Everything is an illusion your electrons are selling you.',
  },
  {
    emoji: '🌀', cat: 'physics', catLabel: 'Physics',
    title: 'Quantum Entanglement: Spooky Action at a Distance',
    text: 'Two particles can be connected across the entire universe — instantly. Measure one in India, the other in a galaxy far away reacts instantly. Einstein called it "spooky action at a distance." He hated it. Experiments proved it\'s real. Einstein lost that one.',
  },
  {
    emoji: '🕳️', cat: 'physics', catLabel: 'Physics',
    title: 'Black Holes Don\'t Suck',
    text: 'Black holes don\'t suck. They\'re just really heavy. If the Sun became a black hole right now, Earth would keep orbiting normally — just in darkness. Black holes have the same gravity as any object of the same mass. You\'d have to fly directly into one to get consumed. The universe isn\'t a vacuum cleaner. It\'s just dense.',
  },
  {
    emoji: '🧲', cat: 'physics', catLabel: 'Physics',
    title: 'Magnets Work Because of Relativity',
    text: 'When electrons move through a wire, their spacing appears compressed to nearby stationary charges — a relativistic length contraction effect. This creates what we experience as a magnetic field. Magnetism isn\'t a separate force. It\'s just electricity seen from a different frame of motion. Every fridge magnet is a relativity demonstration.',
  },
  {
    emoji: '🌡️', cat: 'physics', catLabel: 'Physics',
    title: 'Plasma: The State of Matter Nobody Taught You',
    text: 'Solid, liquid, gas — these are what we interact with daily. But 99.9% of all visible matter in the universe is plasma — superheated ionised gas. Stars are plasma. Lightning is plasma. The northern lights are plasma. The three states of matter you learned in school describe less than 0.1% of all matter. Your science textbook lied by omission.',
  },
  {
    emoji: '👀', cat: 'physics', catLabel: 'Physics',
    title: 'The Double Slit Experiment Broke Physics',
    text: 'Fire electrons one at a time at a barrier with two slits. Each electron goes through BOTH slits simultaneously and interferes with itself. Put a detector to watch which slit it goes through — the interference pattern disappears. The electron KNOWS it\'s being watched and changes its behaviour. Observation affects reality. Physics has never recovered from this since 1927.',
  },
  {
    emoji: '😔', cat: 'physics', catLabel: 'Physics',
    title: 'You\'ve Never Seen the Present Moment',
    text: 'Everything you see is in the past. The screen you\'re reading — a few nanoseconds ago. The person across from you — nanoseconds in the past. The Moon — 1.3 seconds ago. The Sun — 8 minutes ago. The nearest star — 4 years ago. You exist in the present but perceive only the past. Your entire experience of reality is a reconstruction of ancient light.',
  },

  // ── CHEMISTRY ──
  {
    emoji: '🧪', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'The Mpemba Effect: Hot Water Freezes Faster',
    text: 'Hot water can freeze faster than cold water. Scientists still don\'t fully agree on why. It\'s called the Mpemba Effect — discovered by a 13-year-old Tanzanian student in 1963 who noticed his hot ice cream mix froze faster. He told his teacher. The teacher said he was wrong. He wasn\'t. A kid stumped physics.',
  },
  {
    emoji: '🌧️', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Petrichor: The Smell of Rain is Bacteria',
    text: 'The smell of rain on dry earth — petrichor — is caused by a compound called geosmin, produced by soil bacteria. When raindrops hit soil they trap tiny air bubbles that burst upward, carrying geosmin into the air. Humans can detect geosmin at concentrations as low as 5 parts per trillion — more sensitive than sharks detecting blood. You\'re running ancient survival software.',
  },
  {
    emoji: '💧', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Water Breaks Every Rule Chemistry Tries to Write',
    text: 'Every other liquid shrinks when it freezes. Water expands. So ice floats. Which means lakes freeze from the top down, not bottom up. Which means fish survived every ice age. One weird molecule saved all aquatic life on Earth.',
  },
  {
    emoji: '💎', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Diamonds Are Slowly Turning Into Pencil Lead',
    text: 'Graphite — pencil stuff — is the thermodynamically stable form of carbon. Diamonds are just carbon trapped in the wrong shape under extreme pressure. Every diamond is a ticking clock. It\'ll take billions of years, but your ring is losing the battle. "Diamonds are forever" is marketing. Thermodynamics disagrees.',
  },
  {
    emoji: '🫧', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Aerogel: A Solid Cloud That\'s Nearly Indestructible',
    text: 'Aerogel is 99.8% air and the lightest solid material ever created — it looks like frozen smoke. A block the size of a human can weigh less than 2kg but support the weight of a car. NASA uses it to insulate Mars rovers. A 2.5cm thick layer can withstand a blowtorch on one side while the other stays cool. We made a solid cloud.',
  },
  {
    emoji: '🥄', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Gallium Melts in Your Hand',
    text: 'Gallium melts at 29.76°C. Your body temperature is 37°C. Hold a piece and watch it dissolve into shiny liquid in your palm. It\'s completely non-toxic — but pour it on aluminium and it infiltrates the metal\'s grain boundaries, making structurally strong aluminium crumble like wet paper. A harmless-looking silvery liquid that destroys aircraft-grade metal.',
  },
  {
    emoji: '🧂', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Cesium Explodes Just By Touching Air',
    text: 'Sodium metal reacts violently with water. Cesium and francium explode on contact with air itself — reacting with atmospheric moisture before you can blink. Francium is so reactive and radioactive that the largest amount ever assembled was a few thousand atoms. It has a half-life of 22 minutes. The most reactive metal in existence barely exists.',
  },

  // ── BIOLOGY ──
  {
    emoji: '🧬', cat: 'biology', catLabel: 'Biology',
    title: 'You Are More Bacteria Than Human',
    text: 'Your body has roughly 30 trillion human cells — but 38 trillion bacterial cells. By cell count, you are majority microbe. Your gut bacteria even influence your mood and decisions. You are a walking ecosystem who thinks it\'s a person.',
  },
  {
    emoji: '🧠', cat: 'biology', catLabel: 'Biology',
    title: 'Your Brain Cannot Feel Pain',
    text: 'Literally zero pain receptors in brain tissue. Neurosurgeons can operate on a fully awake patient — the patient chats normally, even sings — while their exposed brain is being prodded. The headaches you feel? That\'s surrounding tissue and blood vessels. The organ that processes all your pain feels none of its own.',
  },
  {
    emoji: '🫀', cat: 'biology', catLabel: 'Biology',
    title: 'Your Heart Could Squirt Blood 9 Metres',
    text: 'Your heart creates enough pressure in a single beat to squirt blood 9 metres across a room. It beats 100,000 times a day, 3 billion times in a lifetime. It starts beating 22 days after conception — before you even have a brain. Your heart showed up to work before your mind existed. And it never once asked for a day off.',
  },
  {
    emoji: '🦅', cat: 'biology', catLabel: 'Biology',
    title: 'Birds Literally See Magnetic Field Lines',
    text: 'Migratory birds have cryptochrome proteins in their eyes sensitive to Earth\'s magnetic field through quantum mechanical effects. They may visually perceive it as a brightness overlay on their vision — seeing magnetic field lines superimposed on the landscape like a built-in GPS. A robin sees things flying south that you will never be able to perceive no matter how hard you try.',
  },
  {
    emoji: '🐙', cat: 'biology', catLabel: 'Biology',
    title: 'Octopuses Are Deeply, Profoundly Alien',
    text: 'Octopuses have three hearts, blue blood, and a brain in each arm. Two hearts pump blood to the gills. One to the body. Their blood uses copper instead of iron — making it blue. Each arm has its own neural cluster that can react and solve problems independently. They can also edit their own RNA in real time to adapt to temperature changes — doing what evolution normally takes millions of years to do, on the fly.',
  },
  {
    emoji: '🌳', cat: 'biology', catLabel: 'Biology',
    title: 'Trees Feed Each Other Underground',
    text: 'Forests are connected by mycorrhizal fungal networks — the "Wood Wide Web." Trees send sugars, water, and chemical distress signals through these networks. Healthy trees send nutrients to sick or shaded trees. Mother trees preferentially feed their own seedlings. When a tree is dying it dumps its remaining resources into the network for the community. Trees have been practising socialism for 400 million years.',
  },
  {
    emoji: '🐢', cat: 'biology', catLabel: 'Biology',
    title: 'Some Animals Are Biologically Immortal',
    text: 'The Turritopsis dohrnii jellyfish can revert to its juvenile polyp state when stressed or old, then grow back into an adult — theoretically forever. Hydra, a tiny freshwater animal, shows no signs of aging at all. Its cells just keep dividing indefinitely. Biological immortality exists. Evolution just decided most species don\'t need it.',
  },
  {
    emoji: '🐋', cat: 'biology', catLabel: 'Biology',
    title: 'Whales Used to Walk on Land',
    text: 'Pakicetus — the ancestor of all modern whales — was a four-legged land mammal that lived 50 million years ago near what is now Pakistan. Modern whales still have vestigial pelvic bones buried inside their bodies — the remnants of hind legs. They breathe air, nurse their young with milk, and have finger bones inside their flippers. The largest animal ever to exist walked in what is now Pakistan.',
  },
  {
    emoji: '🍄', cat: 'biology', catLabel: 'Biology',
    title: 'Zombie Ants Are Real',
    text: 'Ophiocordyceps fungi infect carpenter ants, hijacking their nervous system. The fungus makes the ant climb exactly 25cm above the forest floor — optimal humidity for spore dispersal — clamp its jaw onto a leaf vein, and die. The fungus then erupts from the ant\'s head releasing spores to infect more ants. Nature invented biological drones millions of years ago.',
  },
  {
    emoji: '🦠', cat: 'biology', catLabel: 'Biology',
    title: 'You Share 60% of Your DNA With a Banana',
    text: 'All life on Earth shares common ancestry. Bananas and humans both need basic cellular machinery — DNA replication, energy production, cell membranes. Those fundamental genes are conserved across billions of years. You are 60% banana, 85% mouse, 98.7% chimpanzee. "Human" is just the universe\'s current favourite experiment.',
  },

  // ── SPACE ──
  {
    emoji: '🌌', cat: 'space', catLabel: 'Space',
    title: 'There\'s a Cloud of Alcohol Larger Than Our Solar System',
    text: 'Near the centre of the Milky Way floats a molecular cloud containing enough ethanol to fill Earth\'s oceans 10²⁸ times. It\'s 1,000 times larger than our solar system. Space didn\'t ask for your opinion. It just did that.',
  },
  {
    emoji: '☀️', cat: 'space', catLabel: 'Space',
    title: 'The Sunlight on Your Skin Left the Sun Before the Pyramids',
    text: 'A photon born in the Sun\'s core bounces around for up to 170,000 years before escaping. Then it crosses 150 million km in just 8 minutes and hits your skin. The light you felt this morning started its journey when woolly mammoths were still alive. The Sun is mailing you very old packages.',
  },
  {
    emoji: '🪐', cat: 'space', catLabel: 'Space',
    title: 'Saturn Would Float in Water',
    text: 'Saturn\'s average density is 0.687 g/cm³. Water is 1 g/cm³. If you had an ocean big enough, Saturn would bob on the surface like a giant, ringed rubber duck. It\'s the least dense planet in the solar system — mostly gas and empty space with a small rocky core.',
  },
  {
    emoji: '🌕', cat: 'space', catLabel: 'Space',
    title: 'The Moon is Leaving Us',
    text: 'The Moon drifts 3.8cm further away every year. 1 billion years ago it was much closer — tides were enormous, days were shorter, and the Moon looked gigantic in the night sky. In the far future it will be too far to cause total solar eclipses. The perfect alignment we have right now is a temporary cosmic coincidence.',
  },
  {
    emoji: '🛸', cat: 'space', catLabel: 'Space',
    title: 'Voyager 1: The Loneliest Object Ever Made',
    text: 'Launched in 1977, Voyager 1 is now 24 billion km from Earth — in interstellar space. A signal takes 22 hours to reach us. It runs on 70 watts of power — less than a light bulb. It carries a golden record with music, greetings in 55 languages, and a baby crying. In case someone finds it. Floating alone in the dark between stars. With a mixtape.',
  },
  {
    emoji: '⭐', cat: 'space', catLabel: 'Space',
    title: 'Stars You See May Already Be Dead',
    text: 'Stars are so far away that their light takes thousands to millions of years to reach us. When you look at the night sky you\'re seeing the past. Some of those stars have already exploded, collapsed, or gone cold. The sky is a graveyard that still looks beautiful because light travels at finite speed. Every star you\'ve ever wished upon might already be dead.',
  },
  {
    emoji: '🌀', cat: 'space', catLabel: 'Space',
    title: 'Saturn\'s Rings Will Be Gone in 100 Million Years',
    text: 'Saturn\'s rings are slowly being pulled into the planet by its own gravity — "ring rain" — disappearing at 10,000 kg per second. Humans evolved at the exact window in the universe\'s 13.8 billion year history where Saturn had visible rings. A few hundred million years earlier or later — no rings. We got incredibly lucky with the timing.',
  },
  {
    emoji: '🕳️', cat: 'space', catLabel: 'Space',
    title: 'Inside a Black Hole, Space and Time Swap Places',
    text: 'Outside a black hole you can move freely through space but must move forward through time. Inside the event horizon, space and time trade roles. The singularity is not a location — it\'s a moment in time, your future, that you cannot avoid any more than you can avoid tomorrow. Falling into a black hole isn\'t movement through space. It\'s movement through time toward an inescapable future.',
  },
  {
    emoji: '🧊', cat: 'space', catLabel: 'Space',
    title: 'India Discovered Water on the Moon First',
    text: 'Chandrayaan-1, launched in 2008, carried NASA\'s Moon Mineralogy Mapper. The data collected led to the confirmation of water ice on the lunar surface. India\'s mission provided the foundational evidence for one of the most significant space discoveries of the 21st century. Chandrayaan-3 then became the first mission to land near the Moon\'s south pole in 2023 — the most resource-rich region of the Moon. India didn\'t just join the space race. It changed it.',
  },

  // ── EARTH SCIENCE ──
  {
    emoji: '🌋', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Ground You Stand On Is Just Slow Lava',
    text: 'Earth\'s crust is 5–70km thick. Below that? Molten rock at 1300°C, slowly churning for 4.5 billion years. The "solid" ground is just the cooled skin on top. Tectonic plates are literally surfing on liquid rock. Every mountain, every continent, every border on a map — all of it is just where the lava decided to stop. Temporarily.',
  },
  {
    emoji: '🌊', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Ocean Makes More Oxygen Than All Forests',
    text: 'About 50–80% of Earth\'s oxygen comes from marine phytoplankton — microscopic ocean plants. Every second breath you take was made in the ocean. Forests are important, but the ocean is your actual lungs.',
  },
  {
    emoji: '🏔️', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Himalayas Are Still Growing',
    text: 'The Indian tectonic plate is still crashing into the Eurasian plate at about 5cm per year. The Himalayas grow roughly 5mm annually. They act as a wall that forces monsoon winds upward, causing rainfall across the subcontinent. Without the Himalayas, India\'s entire agricultural system, river network, and civilisation as we know it would not exist. The mountains didn\'t just form India\'s border. They formed India.',
  },
  {
    emoji: '🌍', cat: 'earth', catLabel: 'Earth Science',
    title: 'Earth\'s Core is As Hot As the Sun\'s Surface',
    text: 'About 5,100–6,000°C at the inner core. It\'s been slowly cooling since the planet formed 4.5 billion years ago. When it finally cools completely, Earth\'s magnetic field will collapse — and without that shield, solar wind will strip away our atmosphere. Mars already went through this. That\'s why Mars is a dead desert today.',
  },
  {
    emoji: '🦕', cat: 'earth', catLabel: 'Earth Science',
    title: 'India\'s Volcanoes May Have Killed the Dinosaurs',
    text: 'The Deccan Traps — covering most of Maharashtra — were formed by volcanic eruptions 66 million years ago that lasted hundreds of thousands of years. Many scientists believe the Deccan Traps — not just the asteroid — contributed to the extinction of dinosaurs. The black soil that makes Maharashtra\'s cotton fields so fertile today? That\'s volcanic rock slowly broken down over 66 million years. India\'s agriculture is literally built on the ashes of an extinction event.',
  },
  {
    emoji: '🦈', cat: 'earth', catLabel: 'Earth Science',
    title: 'Sharks Are Older Than Trees',
    text: 'Sharks have existed for about 450 million years. Trees evolved around 350 million years ago. Sharks swam through oceans before a single tree existed on land. They survived every mass extinction — including the one that killed 96% of all species. They are so perfectly evolved that they barely changed in millions of years. Humans have existed for 0.0006% of that time and somehow think we run this planet.',
  },

  // ── HUMAN BODY ──
  {
    emoji: '👁️', cat: 'body', catLabel: 'Human Body',
    title: 'Your Eyes Are Part of Your Brain',
    text: 'The retina is actual brain tissue — a direct outgrowth of the brain that pushed out through the eye socket during fetal development. The optic nerve isn\'t sending images to the brain. It IS brain. You don\'t see with your eyes. You see with your brain, using two outposts it installed in your face for convenience.',
  },
  {
    emoji: '🦴', cat: 'body', catLabel: 'Human Body',
    title: 'Bones Are Living Organs Running a Pharmacy',
    text: 'Bones produce red and white blood cells in their marrow. They store 99% of the body\'s calcium and release it on demand. They produce hormones that regulate blood sugar, fertility, and even memory. They constantly break themselves down and rebuild — every 10 years you have a completely new skeleton. Your bones are quietly running a pharmaceutical factory inside you.',
  },
  {
    emoji: '🦅', cat: 'body', catLabel: 'Human Body',
    title: 'Your Liver Can Regrow From Just 25%',
    text: 'The liver is the only internal organ capable of complete regeneration. Remove 75% and it grows back to full size within weeks. Ancient Greeks noticed this — the myth of Prometheus has his liver eaten by an eagle every day and regrown every night. They had no microscopes, no biology textbooks. They just observed and accidentally discovered liver regeneration 2,500 years ago.',
  },
  {
    emoji: '🫃', cat: 'body', catLabel: 'Human Body',
    title: 'You Have a Second Brain in Your Gut',
    text: 'The enteric nervous system — lining your digestive tract — contains 500 million neurons. It can operate completely independently of the brain. It produces 95% of your body\'s serotonin. Your gut feelings are literally neurological events. When your stomach "drops" in anxiety — those are real neural signals. Your gut and brain are in constant two-way communication. Sometimes your gut overrules your brain. It has the votes.',
  },
  {
    emoji: '👃', cat: 'body', catLabel: 'Human Body',
    title: 'Your Nose Can Detect 1 Trillion Different Smells',
    text: 'For decades scientists thought humans could only detect 10,000 smells. A 2014 study found the actual number is at least 1 trillion. Smell also has a direct pathway to the brain\'s memory and emotion centres — which is why a single scent can instantly transport you back 20 years to a specific afternoon.',
  },
  {
    emoji: '🫁', cat: 'body', catLabel: 'Human Body',
    title: 'Your Lungs Would Cover a Tennis Court',
    text: 'The inside of your lungs is lined with 480 million tiny air sacs called alveoli. The combined surface area is 70–100 square metres. You are carrying a tennis court folded into your chest. Each breath exchanges oxygen and CO₂ across that entire surface in under a second. Evolution figured out origami before humans did.',
  },

  // ── UPSC ──
  {
    emoji: '🏔️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Himalayas Control India\'s Monsoon',
    text: 'The Indian tectonic plate is still crashing into the Eurasian plate at 5cm per year. The Himalayas grow ~5mm annually. They force monsoon winds upward causing rainfall across the subcontinent. Without them, India\'s entire agricultural system and river network would not exist. The Himalayas didn\'t just form India\'s border — they formed India itself.',
  },
  {
    emoji: '💧', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Groundwater Crisis is Invisible — And Catastrophic',
    text: 'India extracts 250 cubic km of groundwater annually — more than the USA and China combined. NASA\'s GRACE satellite confirms the Indo-Gangetic aquifer is depleting fast. Punjab borewells now go 10× deeper than 30 years ago. When an aquifer collapses, the land above literally sinks — called subsidence. Parts of Delhi are already sinking. This isn\'t a future problem. It is happening right now, in silence.',
  },
  {
    emoji: '🌊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Arctic is Melting and India is in the Splash Zone',
    text: 'The Arctic is warming 4× faster than the rest of the world. This disrupts the polar vortex and jet stream, directly causing erratic monsoons, cold waves, and extreme heat events in India. The melting Arctic also contributes to sea level rise threatening India\'s 7,517km coastline. Mumbai, Chennai, Kolkata — all vulnerable. The Arctic is melting and India is downstream.',
  },
  {
    emoji: '🇮🇳', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'UPI Processed More Transactions Than the Entire World Combined',
    text: 'India\'s UPI processed over 100 billion transactions in 2023. The USA, Europe, and China combined don\'t match that volume in real-time payments. India built a public digital payment infrastructure now being exported to Singapore, UAE, France, and Bhutan. What started as a solution to cash-dependency became the world\'s most advanced real-time payment system. Built by NPCI. Owned by nobody. Available to everyone.',
  },
  {
    emoji: '⚖️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Supreme Court Invented a Power the Constitution Never Gave It',
    text: 'The Basic Structure Doctrine — from Kesavananda Bharati v. State of Kerala (1973) — holds Parliament cannot amend the Constitution in ways that destroy its basic structure. The problem? The Constitution never defines or mentions "basic structure." The Supreme Court invented this doctrine to protect democracy from a Parliament that kept trying to make itself all-powerful. Law protecting itself from lawmakers.',
  },
  {
    emoji: '🌋', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India Has the World\'s Most Dangerous Seismic Zones',
    text: 'The Indian plate is colliding with the Eurasian plate at 5cm per year — one of the fastest tectonic movements on Earth. The entire Himalayan belt, Northeast India, and Andaman & Nicobar sit in Seismic Zone IV and V — highest risk. The 2001 Bhuj earthquake killed 20,000. Seismologists warn a major Himalayan earthquake of magnitude 8+ is not a matter of if, but when. The pressure has been building for over a century.',
  },
  {
    emoji: '🏝️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Andaman & Nicobar: India\'s Most Underused Strategic Asset',
    text: 'The Andaman & Nicobar Islands sit at the northern mouth of the Strait of Malacca — through which 80% of China\'s oil imports pass. A naval base there could interdict China\'s entire energy supply in a conflict. The islands are only 45km from Myanmar. India is sitting on one of the most powerful geographic checkmates on Earth and hasn\'t fully played the piece.',
  },
  {
    emoji: '⚛️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Thorium Reserves Could Power It for Thousands of Years',
    text: 'India has approximately 25% of the world\'s thorium reserves — primarily in Kerala\'s monazite sands. Thorium is a safer nuclear fuel — it produces less long-lived waste and cannot easily be weaponised. India\'s unique three-stage nuclear programme, designed by Homi Bhabha, plans to ultimately use thorium as fuel. If it works, India has fuel for thousands of years of nuclear energy sitting on its own beaches.',
  },

  // ── MATHS ──
  {
    emoji: '0️⃣', cat: 'maths', catLabel: 'Mathematics',
    title: 'Zero Was Invented — and It Changed Everything',
    text: 'The concept of zero as a number was formalised by Indian mathematician Brahmagupta in 628 AD. Before zero, algebra, calculus, binary code, and computer science were impossible. Zero is the foundation of all modern mathematics and computing. Every app on your phone, every satellite in orbit — built on a concept an Indian mathematician defined 1,400 years ago. The most important number is the one that means nothing.',
  },
  {
    emoji: '♾️', cat: 'maths', catLabel: 'Mathematics',
    title: 'There Are Infinities Larger Than Other Infinities',
    text: 'Mathematician Georg Cantor proved the infinity of real numbers is strictly larger than the infinity of whole numbers. There are different sizes of infinity. Cantor\'s colleagues thought he was insane. He had a mental breakdown. He died in a sanatorium. He was also completely correct and is now considered one of history\'s greatest mathematicians. Mathematics broke a man and then gave him a statue.',
  },
  {
    emoji: '♟️', cat: 'maths', catLabel: 'Mathematics',
    title: 'Chess Has More Games Than Atoms in the Universe',
    text: 'Atoms in the observable universe: 10⁸⁰. Possible chess games: 10¹²⁰. A game played on a 64-square board with 32 pieces contains more complexity than all of physical reality we can observe. Every time you play chess you are navigating a space larger than the universe. No two games in history have ever been identical.',
  },
  {
    emoji: '🔢', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Universe\'s Favourite Number is 1',
    text: 'Benford\'s Law: in naturally occurring data — populations, stock prices, river lengths — numbers starting with 1 appear ~30% of the time, not the intuitive 11%. Tax authorities and forensic accountants use this to detect fraud — fake data created by humans doesn\'t follow this pattern. The universe has a favourite number. It\'s 1.',
  },
  {
    emoji: '📜', cat: 'maths', catLabel: 'Mathematics',
    title: 'Kerala School Discovered Calculus 200 Years Before Newton',
    text: 'Madhava of Sangamagrama and the Kerala School developed infinite series expansions for trigonometric functions and early calculus in the 14th–15th centuries. They calculated pi to 11 decimal places and developed what we now call Taylor series — attributed to Brook Taylor who published in 1715. India invented calculus. Europe got the credit.',
  },

  // ── PSYCHOLOGY & MIND ──
  {
    emoji: '📼', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Every Time You Remember, You Rewrite the Memory',
    text: 'Memory isn\'t like a video file. Every time you recall a memory, your brain reconstructs it from fragments — and during reconstruction it\'s vulnerable to modification. New information and suggestions can silently edit the memory before it\'s stored again. Eyewitness testimony is one of the least reliable forms of evidence in neuroscience. You have vivid memories of things that never happened exactly that way.',
  },
  {
    emoji: '💊', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Placebo Effect Works Even When You Know It\'s a Placebo',
    text: 'Tell patients "this is a sugar pill with no medicine" — give them the sugar pill — and a significant percentage still improve. Open-label placebo trials for IBS, chronic pain, and depression show real measurable improvements. Just the ritual of taking medicine triggers real neurological changes. The healing is coming from inside the house. Your belief system is a pharmaceutical factory.',
  },
  {
    emoji: '🗺️', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'London Taxi Drivers Have Physically Bigger Brains',
    text: 'London taxi drivers — who must memorise thousands of streets — have measurably larger hippocampi than average. Musicians have larger motor cortices for their playing hand. Blind people repurpose visual cortex for touch and sound. Your brain physically rewires and reshapes itself based on experience. You are literally building your brain right now by reading this.',
  },
  {
    emoji: '🚬', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Loneliness is as Deadly as Smoking 15 Cigarettes a Day',
    text: 'Social isolation triggers inflammatory responses, disrupts sleep, raises cortisol, and weakens immune function. Harvard\'s 85-year longitudinal study found that the quality of relationships was the single strongest predictor of health and longevity. Not wealth, not fame, not diet, not exercise. Relationships. Loneliness doesn\'t just hurt emotionally. It kills you organ by organ.',
  },

  // ── AI & COMPUTER SCIENCE ──
  {
    emoji: '🤖', cat: 'ai', catLabel: 'AI & Tech',
    title: 'AI Has Never Understood a Single Word — And Still Beats Humans',
    text: 'Large Language Models don\'t understand language. They are extraordinarily sophisticated pattern-matching systems trained on hundreds of billions of words. No comprehension. No understanding. Just math. Staggeringly complex math. And this system with zero understanding is passing bar exams, medical licensing tests, coding interviews, and philosophy papers. We built something that mimics intelligence so well we can barely tell the difference.',
  },
  {
    emoji: '♟️', cat: 'ai', catLabel: 'AI & Tech',
    title: 'AlphaGo Found a Move Nobody Had Considered in 3000 Years',
    text: 'AlphaGo\'s Move 37 in game 2 against Lee Sedol in 2016 was so unexpected that commentators initially thought it was a mistake. Lee Sedol left the room for 15 minutes. It was a stroke of genius that shifted the entire game. AlphaGo discovered a strategy that 3000 years of human Go theory had never found. After AlphaGo, professional Go players worldwide changed how they play — learning from an AI.',
  },
  {
    emoji: '🔐', cat: 'ai', catLabel: 'AI & Tech',
    title: 'Quantum Computers Could Break All Your Passwords',
    text: 'Most internet security — banking encryption, WhatsApp messages — relies on RSA encryption. Its security comes from the fact that factoring large numbers is computationally impossible for classical computers. A sufficiently powerful quantum computer running Shor\'s Algorithm could break RSA in hours. Governments may already be harvesting encrypted data now to decrypt it later. Your encrypted messages from today may be readable in 10–15 years.',
  },
  {
    emoji: '🖥️', cat: 'ai', catLabel: 'AI & Tech',
    title: 'The Internet Was Built Without Security',
    text: 'The original ARPANET was designed for communication among trusted researchers. Security was never a consideration. Email was designed with no authentication — which is why spam exists. TCP/IP has no built-in encryption — which is why HTTPS had to be added later. The entire global digital infrastructure running banking, healthcare, and military communications is built on a foundation designed for a network of 30 university computers in 1969.',
  },
];

// ── Categories with labels and emojis ──
const CATEGORIES = [
  { id: 'all',       label: '✨ All' },
  { id: 'physics',   label: '⚡ Physics' },
  { id: 'chemistry', label: '🧪 Chemistry' },
  { id: 'biology',   label: '🧬 Biology' },
  { id: 'space',     label: '🌌 Space' },
  { id: 'earth',     label: '🌍 Earth' },
  { id: 'body',      label: '🫀 Human Body' },
  { id: 'upsc',      label: '🇮🇳 UPSC Special' },
  { id: 'maths',     label: '♾️ Maths' },
  { id: 'mind',      label: '🧠 Mind' },
  { id: 'ai',        label: '🤖 AI & Tech' },
];

let currentCat    = 'all';
let currentSearch = '';

function renderFilters() {
  const container = document.getElementById('ff-filters');
  if (!container) return;
  container.innerHTML = '';
  CATEGORIES.forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'ff-filter-btn' + (id === currentCat ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      currentCat = id;
      renderFilters();
      renderCards();
    });
    container.appendChild(btn);
  });
}

function renderCards() {
  const grid  = document.getElementById('ff-grid');
  const empty = document.getElementById('ff-empty');
  if (!grid || !empty) return;

  const q = currentSearch.toLowerCase().trim();

  const filtered = FACTS.filter(f => {
    const catMatch = currentCat === 'all' || f.cat === currentCat;
    const searchMatch = !q
      || f.title.toLowerCase().includes(q)
      || f.text.toLowerCase().includes(q)
      || f.catLabel.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  filtered.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'ff-card glass-card';
    card.dataset.cat = f.cat;
    card.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;

    card.innerHTML = `
      <div class="ff-card-header">
        <span class="ff-card-emoji" aria-hidden="true">${f.emoji}</span>
        <span class="ff-card-cat">${f.catLabel}</span>
      </div>
      <div class="ff-card-title" style="font-weight:700;font-size:15px;margin-bottom:8px;color:var(--text);">${f.title}</div>
      <div class="ff-card-text">${f.text}</div>
    `;

    grid.appendChild(card);
  });
}

export function initFunFacts() {
  renderFilters();
  renderCards();

  const searchInput = document.getElementById('ff-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      renderCards();
    });
  }
}
