// =============================================================================
// funFactsController.js — Fun Facts Section (original text preserved exactly)
// =============================================================================

const FACTS = [
  // ── PHYSICS ──
  {
    emoji: '🧊', cat: 'physics', catLabel: 'Physics',
    title: 'You Can Never Touch Absolute Zero',
    text: 'Did you know nothing in the universe can ever reach exactly −273.15°C (absolute zero)? Scientists have gotten insanely close — like 0.000000001°C away — but the laws of physics literally won\'t let you cross that line. It\'s like a speed limit baked into reality itself. To cool something down, you need something colder than it. And nothing is colder than absolute zero. So you\'re forever locked out. It\'s like a door that gets closer the faster you run — but never opens.',
  },
  {
    emoji: '⏰', cat: 'physics', catLabel: 'Physics',
    title: 'Your Face is Older Than Your Feet. Right Now. Always Has Been.',
    text: 'Did you know time actually passes faster for your face than your feet? Because gravity warps time, and your head is slightly farther from Earth\'s core. Yeah, your face is technically older. Gravity slows time. Your feet are closer to Earth\'s core, so time ticks slightly slower there. Your head ages faster. It\'s a tiny difference — but GPS satellites have to correct for this every single day or your Maps app would be wrong by kilometers.',
  },
  {
    emoji: '🔥', cat: 'physics', catLabel: 'Physics',
    title: 'Fire Isn\'t a Thing. You\'ve Been Amazed by a Reaction Your Whole Life.',
    text: 'Fire has no mass. No shape. It isn\'t matter. It\'s just superheated gas glowing from a chemical reaction. What you call "flame" is thermodynamics having a moment. The universe has been pranking you since the campfire. Everything you found cool as a kid was just thermodynamics.',
  },
  {
    emoji: '🤯', cat: 'physics', catLabel: 'Physics',
    title: 'You Are Not Solid. You Never Were.',
    text: '99.9999999999996% of an atom is empty space. If you removed all the empty space from every human on Earth — all 8 billion of us — we\'d fit inside a sugar cube. The reason you feel solid is because electrons repel each other electromagnetically. You have never touched anything. Your entire sense of physical reality is just forces lying to your face. Every. Single. Day.',
  },
  {
    emoji: '😭', cat: 'physics', catLabel: 'Physics',
    title: 'The Sunlight Hitting Your Skin Left the Sun Before Humans Built the Pyramids.',
    text: 'A photon born in the Sun\'s core bounces around for up to 170,000 years before escaping. Then it crosses 150 million km to reach you in just 8 minutes. The light you felt this morning? It started its journey when woolly mammoths were still alive. The Sun is basically mailing you very old packages.',
  },
  {
    emoji: '🪑', cat: 'physics', catLabel: 'Physics',
    title: 'You Have Never Touched Anything in Your Entire Life.',
    text: 'Atoms are 99.9999999% empty space. What you feel as "solid" is just electromagnetic repulsion — atoms pushing each other away. Your hands never touched this phone. Your feet never touched the floor. Everything is an illusion your electrons are selling you.',
  },
  {
    emoji: '⚡', cat: 'physics', catLabel: 'Physics',
    title: 'Lightning is 5 Times Hotter Than the Surface of the Sun.',
    text: 'The Sun\'s surface: ~5,500°C. A lightning bolt: ~30,000°C. It lasts a fraction of a second, but in that moment the bolt is the hottest thing for miles around. Thunder is just the air screaming from the shock.',
  },
  {
    emoji: '🕳️', cat: 'physics', catLabel: 'Physics',
    title: 'Black Holes Don\'t Suck. They\'re Just Really Heavy.',
    text: 'If the Sun became a black hole right now, Earth would keep orbiting normally — just in darkness. Black holes have the same gravity as any object of the same mass. You\'d have to fly directly into one to get consumed. The universe isn\'t a vacuum cleaner. It\'s just dense.',
  },
  {
    emoji: '🌀', cat: 'physics', catLabel: 'Physics',
    title: 'Two Particles Can Be Connected Across the Entire Universe — Instantly.',
    text: 'Quantum entanglement means two particles can mirror each other\'s state no matter the distance. Measure one in India, the other in a galaxy far away reacts instantly. Einstein called it "spooky action at a distance." He hated it. Experiments proved it\'s real. Einstein lost that one.',
  },
  {
    emoji: '🧲', cat: 'physics', catLabel: 'Physics',
    title: 'Magnets Work Because of Relativity. Yes, Einstein Again.',
    text: 'When electrons move through a wire, their spacing appears compressed to nearby stationary charges — a relativistic length contraction effect. This creates what we experience as a magnetic field. Magnetism isn\'t a separate force. It\'s just electricity seen from a different frame of motion. Every fridge magnet is a relativity demonstration.',
  },
  {
    emoji: '😼', cat: 'physics', catLabel: 'Physics',
    title: 'Lightning Decides Where to Strike Before It Even Touches the Ground.',
    text: 'A lightning bolt sends invisible "stepped leaders" — channels of ionized air — downward in zigzag paths. Simultaneously, "streamers" rise up from tall objects on the ground. When a leader and a streamer connect — BOOM. The visible lightning you see is actually traveling upward. The whole thing is decided underground before you see anything. Lightning plans ahead. You don\'t.',
  },
  {
    emoji: '😔', cat: 'physics', catLabel: 'Physics',
    title: 'Everything You See is in the Past. You Have Never Seen the Present Moment. Not Once.',
    text: 'Light takes time to travel. The screen you\'re reading this on — you\'re seeing it as it was a few nanoseconds ago. The person across the table from you — you see them as they were a few nanoseconds in the past. The Moon — 1.3 seconds ago. The Sun — 8 minutes ago. The nearest star — 4 years ago. You exist in the present but you perceive only the past. Your entire experience of reality is a reconstruction of ancient light. The present moment is invisible to you by the laws of physics.',
  },
  {
    emoji: '🌡️', cat: 'physics', catLabel: 'Physics',
    title: 'Plasma is the Most Common State of Matter in the Universe. You\'ve Barely Heard of It.',
    text: 'Solid, liquid, gas — these are what we interact with daily. But 99.9% of all visible matter in the universe is plasma — superheated ionized gas where electrons have been stripped from atoms. Stars are plasma. Lightning is plasma. The northern lights are plasma. The universe is mostly made of something that barely exists naturally on Earth\'s surface. The three states of matter you learned in school describe less than 0.1% of all matter. Your science textbook lied by omission.',
  },
  {
    emoji: '⏰', cat: 'physics', catLabel: 'Physics',
    title: 'Time Travel to the Future is Not Science Fiction. It Has Already Been Done.',
    text: 'Cosmonaut Sergei Krikalev spent 803 days in orbit at high speed. Special Relativity says moving clocks run slow. When he landed he had aged 0.02 seconds less than people on Earth. He is literally 0.02 seconds in Earth\'s future. GPS satellites travel fast enough that their clocks run slow — engineers have to correct for this. Fighter pilots age microseconds slower than ground crew over a career. Time travel to the future is real, measured, and used in technology daily.',
  },

  // ── CHEMISTRY ──
  {
    emoji: '🧪', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Hot Water Can Freeze Faster Than Cold Water. Nobody Fully Agrees Why.',
    text: 'The Mpemba Effect. Discovered by a 13-year-old Tanzanian student in 1963 who noticed his hot ice cream mix froze faster. He told his teacher. The teacher said he was wrong. He wasn\'t. Scientists still debate the exact mechanism. A kid stumped physics.',
  },
  {
    emoji: '💧', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Water Breaks Every Rule Chemistry Tries to Write.',
    text: 'Every other liquid shrinks when it freezes. Water expands. So ice floats. Which means lakes freeze from the top down, not bottom up. Which means fish survived every ice age. One weird molecule saved all aquatic life on Earth.',
  },
  {
    emoji: '💎', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Diamonds Are Slowly Turning Into Pencil Lead. Your Engagement Ring is Dying.',
    text: 'Graphite — the stuff in pencils — is thermodynamically more stable than diamond. Diamonds are just carbon atoms locked in the wrong arrangement under extreme ancient pressure. They are metastable — slowly, inevitably converting to graphite over billions of years. "Diamonds are forever" is marketing. Thermodynamics disagrees.',
  },
  {
    emoji: '🌧️', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'The Smell of Rain Has a Name. And It Comes From Bacteria.',
    text: 'Petrichor — the smell of rain on dry earth — is caused by a compound called geosmin, produced by soil bacteria called Actinomycetes. When raindrops hit soil they trap tiny air bubbles that burst upward, carrying geosmin into the air. Humans can detect geosmin at concentrations as low as 5 parts per trillion — more sensitive than sharks detecting blood. We evolved to smell rain coming. Our ancestors\' survival literally depended on finding water. You\'re not enjoying the rain. You\'re running ancient survival software.',
  },
  {
    emoji: '💫', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Aerogel is 99.8% Air and Can Support 4000 Times Its Own Weight.',
    text: 'Aerogel is the lightest solid material ever created — it looks like frozen smoke. A block the size of a human can weigh less than 2kg but support the weight of a car. NASA uses it to insulate Mars rovers. It\'s also the best thermal insulator known — a layer 2.5cm thick can withstand a blowtorch on one side while the other stays cool. We made a solid cloud that\'s nearly indestructible.',
  },
  {
    emoji: '🥄', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'Gallium is a Metal That Melts Just From Holding It in Your Hand.',
    text: 'Gallium melts at 29.76°C. Your body temperature is 37°C. Hold a piece and watch it slowly dissolve into shiny liquid in your palm. It looks exactly like liquid mercury but is completely non-toxic. It also has a superpower — pour it on aluminum and it infiltrates the grain boundaries of the metal, making structurally strong aluminum crumble like wet paper. A harmless-looking silvery liquid that destroys aircraft-grade metal. Respect it.',
  },
  {
    emoji: '💥', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'There is a Metal So Reactive It Explodes Just by Touching Air.',
    text: 'Sodium metal reacts violently with water. So does potassium. But cesium and francium? They explode on contact with air itself — reacting with atmospheric moisture before you can blink. Francium is so reactive and so radioactive that the largest amount ever assembled in a lab was a few thousand atoms. It has a half-life of 22 minutes. The most reactive metal in existence barely exists.',
  },
  {
    emoji: '🧪', cat: 'chemistry', catLabel: 'Chemistry',
    title: 'One Gram of Antimatter Would Release More Energy Than a Nuclear Bomb.',
    text: 'Matter and antimatter destroy each other completely upon contact, converting 100% of their mass to energy via E=mc². A nuclear bomb converts less than 1% of its mass to energy. Antimatter is the most energy-dense substance possible. We currently produce it in quantities of nanograms. Making a gram would cost more than the global GDP.',
  },

  // ── BIOLOGY ──
  {
    emoji: '🔬', cat: 'biology', catLabel: 'Biology',
    title: 'You Have More Bacteria Cells in Your Body Than Human Cells.',
    text: 'You are, statistically speaking, more microbe than human. Your body has roughly 30 trillion human cells. But 38 trillion bacterial cells. By cell count, you are majority microbe. Your gut bacteria even influence your mood and decisions. You are a walking ecosystem who thinks it\'s a person.',
  },
  {
    emoji: '🧠', cat: 'biology', catLabel: 'Biology',
    title: 'Your Brain Can\'t Feel Pain. Not Even a Little.',
    text: 'Zero pain receptors in brain tissue. Surgeons can operate on an awake brain and the patient chats normally throughout. Every headache you\'ve ever had was your brain lying to you through surrounding tissue. The organ that processes all your pain feels none of its own.',
  },
  {
    emoji: '🧬', cat: 'biology', catLabel: 'Biology',
    title: 'Your Body Replaces Itself So Completely, You\'re a Different Person Every Decade.',
    text: 'Most atoms in your body are replaced over time — bone, skin, blood, all of it cycles out. The "you" from 10 years ago shares almost no physical matter with the you reading this. The Ship of Theseus isn\'t just philosophy. It\'s biology.',
  },
  {
    emoji: '🐙', cat: 'biology', catLabel: 'Biology',
    title: 'Octopuses Have Three Hearts, Blue Blood, Nine Brains, and Can Edit Their Own RNA.',
    text: 'Two hearts pump blood to the gills. One pumps to the body. Their blood uses copper instead of iron — making it blue. Each arm has its own neural cluster that can act and react independently. And most shockingly — octopuses can edit their own RNA in real time to adapt to temperature changes, essentially rewriting their genetic instructions without changing their DNA. They are doing something evolution normally takes millions of years to do — on the fly. They are not like us. They are better.',
  },
  {
    emoji: '🌳', cat: 'biology', catLabel: 'Biology',
    title: 'Trees in a Forest Share Food With Each Other. They Feed Their Sick.',
    text: 'Forests are connected by mycorrhizal fungal networks — nicknamed the "Wood Wide Web." Trees send sugars, water, and chemical distress signals through these networks. Healthy trees send nutrients to sick or shaded trees. Mother trees — the largest oldest trees — are network hubs that preferentially feed their own seedlings. When a tree is dying it dumps its remaining resources into the network for the community. Trees have been practising socialism for 400 million years.',
  },
  {
    emoji: '🦅', cat: 'biology', catLabel: 'Biology',
    title: 'Birds Navigate Using Earth\'s Magnetic Field. They Literally SEE Magnetic Lines.',
    text: 'Migratory birds have cryptochrome proteins in their eyes that are sensitive to Earth\'s magnetic field through quantum mechanical effects. They don\'t just sense the field — they may visually perceive it as a brightness overlay on their vision — seeing magnetic field lines superimposed on the landscape like a built-in GPS overlay. They are experiencing a sense humans cannot imagine. A robin sees things flying south that you will never be able to perceive no matter how hard you try.',
  },
  {
    emoji: '🦠', cat: 'biology', catLabel: 'Biology',
    title: '8% of Human DNA is Made of Ancient Viruses That Infected Our Ancestors.',
    text: 'Endogenous retroviruses — ancient viral DNA that got permanently incorporated into our genome — make up about 8% of human DNA. Some of this ancient viral DNA has been repurposed by evolution for essential human functions. Syncytins — viral genes — are now critical for forming the placenta. Without ancient viral infections millions of years ago, mammals might not be able to reproduce. Viruses didn\'t just infect us. They became us.',
  },
  {
    emoji: '🌺', cat: 'biology', catLabel: 'Biology',
    title: 'Flowers Were Invented 130 Million Years Ago and Immediately Took Over the Planet.',
    text: 'Before flowering plants, land was dominated by ferns, mosses, and conifers. Then angiosperms evolved — with flowers, fruits, and seeds — and spread across every continent in what paleontologists call "Darwin\'s abominable mystery" because it happened so fast. Flowers co-evolved with insects — each shaping the other\'s evolution. The explosion of insect diversity we see today is directly linked to the explosion of flowering plants. Flowers didn\'t just change landscapes. They changed evolution itself.',
  },
  {
    emoji: '🐋', cat: 'biology', catLabel: 'Biology',
    title: 'Whales Used to Walk on Land. And Their Ankle Bones Prove It.',
    text: 'Pakicetus — the ancestor of all modern whales — was a four-legged land mammal that lived 50 million years ago near what is now Pakistan. Modern whales still have vestigial pelvic bones buried inside their bodies — the remnants of hind legs they no longer have. They breathe air, nurse their young with milk, and have finger bones inside their flippers. The largest animal that has ever existed on Earth used to be a dog-sized creature walking in what is now Pakistan.',
  },
  {
    emoji: '🐢', cat: 'biology', catLabel: 'Biology',
    title: 'Some Animals Are Biologically Immortal. They Just Keep Not Dying.',
    text: 'The Turritopsis dohrnii jellyfish — the "immortal jellyfish" — can revert to its juvenile polyp state when stressed or old, then grow back into an adult. Theoretically it can do this forever. It doesn\'t die of age. It cycles. Hydra — a tiny freshwater animal — shows no signs of aging at all. Its cells just keep dividing indefinitely. Biological immortality exists. Evolution just decided most species don\'t need it.',
  },
  {
    emoji: '😭', cat: 'biology', catLabel: 'Biology',
    title: 'You Share 60% of Your DNA With a Banana. Take a Moment With That.',
    text: 'All life on Earth shares common ancestry. Bananas and humans both need basic cellular machinery — DNA replication, energy production, cell membranes. Those fundamental genes are conserved across billions of years of evolution. You are 60% banana, 85% mouse, 98.7% chimpanzee. "Human" is just the universe\'s current favorite experiment.',
  },
  {
    emoji: '🍄', cat: 'biology', catLabel: 'Biology',
    title: 'Zombie Ants Are Real.',
    text: 'Ophiocordyceps fungi infect carpenter ants, hijacking their nervous system. The fungus makes the ant climb exactly 25cm above the forest floor — the optimal humidity for spore dispersal — clamp its jaw onto a leaf vein with a bite so strong it leaves marks, and die. The fungus then erupts from the ant\'s head releasing spores that infect more ants. The fungus doesn\'t just kill — it programmes specific behaviour before killing. It turns living creatures into precision delivery systems for its own reproduction. Nature invented biological drones millions of years ago.',
  },
  {
    emoji: '🦟', cat: 'biology', catLabel: 'Biology',
    title: 'Male Honeybees Die Immediately After Mating. Their Genitals Explode Off.',
    text: 'A drone bee exists for one single purpose — to mate with a queen. During mating his endophallus is ripped from his body with an audible pop, remaining inside the queen as a mating plug. He falls to the ground and dies within minutes. He never gets to meet his offspring. He never returns to the hive. Evolution designed an entire life — birth, development, flight — culminating in one explosive moment of reproduction followed by immediate death. Biology is not romantic.',
  },
  {
    emoji: '🦈', cat: 'biology', catLabel: 'Biology',
    title: 'Sharks Are Older Than Trees. Let That Sink In.',
    text: 'Sharks have existed for about 450 million years. Trees evolved around 350 million years ago. Sharks swam through oceans before a single tree existed on land. They survived every mass extinction — including the one that killed 96% of all species. They are so perfectly evolved that they barely changed in millions of years. Meanwhile humans have existed for 0.0006% of that time and somehow think we run this planet.',
  },
  {
    emoji: '🐘', cat: 'biology', catLabel: 'Biology',
    title: 'When an Elephant Dies the Herd Performs What Can Only Be Described as a Funeral.',
    text: 'Elephants return to the bones of dead family members years later — touching skulls and tusks with their trunks, standing in silence over remains. They cover dead elephants with branches and dirt. They show visible distress when a family member dies — standing vigil, refusing to leave. Elephant calves orphaned by poaching show PTSD symptoms — hypervigilance, aggression, social withdrawal. The largest land animal on Earth grieves its dead. Has rituals for death. And we are the ones hunting them to extinction.',
  },

  // ── SPACE ──
  {
    emoji: '🌌', cat: 'space', catLabel: 'Space',
    title: 'There\'s a Cloud of Alcohol in Space Big Enough to Supply Every Human for a Billion Years.',
    text: 'A molecular cloud near the Milky Way\'s center contains enough ethanol to fill Earth\'s oceans 10²⁸ times. Space didn\'t ask for your opinion. It just did that.',
  },
  {
    emoji: '🪐', cat: 'space', catLabel: 'Space',
    title: 'Saturn Would Float in Water.',
    text: 'Saturn\'s average density is 0.687 g/cm³. Water is 1 g/cm³. If you had an ocean big enough, Saturn would bob on the surface like a giant, ringed rubber duck. It\'s the least dense planet in the solar system — mostly gas and empty space with a small rocky core.',
  },
  {
    emoji: '🌕', cat: 'space', catLabel: 'Space',
    title: 'The Moon is Slowly Leaving Us. Every Year it Drifts 3.8cm Further Away.',
    text: 'The Moon formed when a Mars-sized object crashed into early Earth 4.5 billion years ago. Since then tidal forces have been pushing it outward. 1 billion years ago the Moon was much closer — tides were enormous, days were shorter, and the night sky had a Moon that looked gigantic. In the far future the Moon will be too far to cause total solar eclipses. The perfect alignment we have right now — where the Moon exactly covers the Sun — is a temporary cosmic coincidence.',
  },
  {
    emoji: '🛸', cat: 'space', catLabel: 'Space',
    title: 'Voyager 1 is the Loneliest Object Ever Made by Humans.',
    text: 'Launched in 1977, Voyager 1 is now 24 billion km from Earth — in interstellar space. A signal from it takes 22 hours traveling at the speed of light to reach us. It runs on 70 watts of power — less than a light bulb. It carries a golden record with sounds and images of Earth — music, greetings in 55 languages, a baby crying. In case someone finds it. Floating alone in the dark between stars. With a mixtape.',
  },
  {
    emoji: '⭐', cat: 'space', catLabel: 'Space',
    title: 'When You Look at a Star, You Might Be Looking at Something That No Longer Exists.',
    text: 'Stars are so far away that their light takes thousands to millions of years to reach us. When you look at the night sky you\'re seeing the past. Some of those stars have already exploded, collapsed, or gone cold. The sky is a graveyard that still looks beautiful because light travels slowly. Every star you\'ve ever wished upon might already be dead.',
  },
  {
    emoji: '🌠', cat: 'space', catLabel: 'Space',
    title: 'There Are More Stars in the Universe Than Grains of Sand on Every Beach on Earth. Combined.',
    text: 'Earth has roughly 7.5 × 10¹⁸ grains of sand. The observable universe has an estimated 10²⁴ stars. That\'s a million billion billion stars. And the observable universe is just the part we can see. Beyond that? Unknown. Potentially infinite. You are one species on one planet orbiting one star among a million billion billion others. The universe didn\'t notice you were born.',
  },
  {
    emoji: '🥶', cat: 'space', catLabel: 'Space',
    title: 'Space Isn\'t Cold. It\'s Nothing. And Nothing is Worse.',
    text: 'Temperature is the measure of how fast particles move. In space there are almost no particles. So space doesn\'t have a temperature in the traditional sense. If you were exposed to space, you wouldn\'t freeze immediately. You\'d survive about 15 seconds before losing consciousness from oxygen deprivation. You\'d swell but not explode. You might get a sunburn. Space kills you with emptiness, not cold.',
  },
  {
    emoji: '🌀', cat: 'space', catLabel: 'Space',
    title: 'The Milky Way and Andromeda Are Heading Toward Each Other. Full Collision in 4.5 Billion Years.',
    text: 'Andromeda is approaching at 110 km per second. In 4.5 billion years they\'ll collide and merge into one giant elliptical galaxy. But here\'s the twist — because galaxies are mostly empty space, almost no stars will actually physically collide. The Solar System will likely be flung to a completely different region of the new merged galaxy. Earth might survive. The Sun might survive. But the night sky will look completely, hauntingly different.',
  },
  {
    emoji: '🔭', cat: 'space', catLabel: 'Space',
    title: 'Light From the Most Distant Galaxy We\'ve Ever Seen Left Before Earth Existed.',
    text: 'The James Webb Space Telescope detected galaxies from just 300 million years after the Big Bang — over 13 billion years ago. Earth formed 4.5 billion years ago. The light we\'re seeing now left its source before our planet, our Sun, or our solar system existed in any form. We are looking at a universe that had already been running for 9 billion years before we showed up. We are extremely late to the party.',
  },
  {
    emoji: '🇮🇳', cat: 'space', catLabel: 'Space',
    title: 'India\'s ISRO Discovered Water on the Moon Before NASA Confirmed It.',
    text: 'Chandrayaan-1, launched in 2008, carried NASA\'s Moon Mineralogy Mapper instrument. The data collected led to the confirmation of water ice on the lunar surface — particularly at the poles. Chandrayaan-3 then became the first mission to land near the Moon\'s south pole in 2023 — the most resource-rich, scientifically valuable region of the Moon. India didn\'t just join the space race. It changed it.',
  },
  {
    emoji: '💀', cat: 'space', catLabel: 'Space',
    title: 'The Universe Will End. And It\'s Deeply Unsettling.',
    text: 'The most likely fate — Heat Death. As the universe expands, energy spreads out evenly. Stars burn out. Black holes evaporate via Hawking radiation over 10¹⁰⁰ years. Eventually — a cold, dark, maximally entropic universe where nothing happens. Ever. No energy gradients means no processes, no reactions, no time in any meaningful sense. Just cold darkness expanding forever. The universe began with a Bang. It will end with an infinite, silent, dark nothing.',
  },

  // ── EARTH SCIENCE ──
  {
    emoji: '🌋', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Ground You\'re Standing On is Just Lava That Forgot to Keep Moving.',
    text: 'Earth\'s crust is 5–70km thick. Below that? Molten rock at 1300°C, slowly churning in convection currents for 4.5 billion years. The "solid" ground is just the cooled skin on top. Tectonic plates are literally surfing on liquid rock. Every mountain, every continent, every border on a map — all of it is just where the lava decided to stop. Temporarily.',
  },
  {
    emoji: '🌊', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Ocean Makes More Oxygen Than All Forests Combined.',
    text: 'About 50–80% of Earth\'s oxygen comes from marine phytoplankton — microscopic ocean plants. Every second breath you take was made in the ocean. Forests are important, but the ocean is your actual lungs.',
  },
  {
    emoji: '🌍', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Earth\'s Core is as Hot as the Surface of the Sun.',
    text: 'About 5,100–6,000°C at the inner core. It\'s been slowly cooling since the planet formed 4.5 billion years ago. When it finally cools completely, Earth\'s magnetic field will collapse — and without that shield, solar wind will strip away our atmosphere. Mars already went through this. That\'s why Mars is a dead desert today.',
  },
  {
    emoji: '🦕', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Deccan Traps May Have Killed the Dinosaurs More Than the Asteroid Did.',
    text: '66 million years ago, volcanic eruptions in what is now India lasted hundreds of thousands of years — releasing catastrophic amounts of CO₂ and sulphur dioxide. Many palaeontologists now believe dinosaur populations were already crashing from this climate disruption before the Chicxulub asteroid hit. The asteroid was the final blow — but India\'s ancient volcanoes may have set up the extinction. The black soil of Maharashtra\'s farms is the 66-million-year-old ash of a mass extinction.',
  },
  {
    emoji: '🪨', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Koyna Earthquake of 1967 Was Caused by a Dam. Humans Triggered a Magnitude 6.3 Earthquake.',
    text: 'Reservoir-Induced Seismicity — when the weight and water pressure of a large dam triggers fault movement. The Koyna Dam in Maharashtra caused one of the most damaging earthquakes in Indian history, killing 177 people. Over 100 significant earthquakes worldwide are now attributed to human-made reservoirs. We built a dam in an earthquake zone and then were surprised when earthquakes happened.',
  },
  {
    emoji: '🌡️', cat: 'earth', catLabel: 'Earth Science',
    title: 'Oxygen is Literally Rusting You From the Inside. Aging is Just Very Slow Burning.',
    text: 'Combustion is rapid oxidation. Aging is slow oxidation. Every time your cells use oxygen to produce energy, they create free radicals — unstable oxygen molecules that damage DNA, proteins, and cell membranes. Over decades this damage accumulates. Antioxidants in food neutralize free radicals. You are a candle. Antioxidants slow how fast you burn. The universe gave you the thing you need to live and made it slowly kill you. Classic.',
  },

  // ── HUMAN BODY ──
  {
    emoji: '👁️', cat: 'body', catLabel: 'Human Body',
    title: 'Your Eyes Are Technically Part of Your Brain.',
    text: 'The retina is not just a camera sensor. It\'s actual brain tissue — a direct outgrowth of the brain that pushed out through the eye socket during fetal development. The optic nerve isn\'t sending images to the brain. It IS brain. You don\'t see with your eyes. You see with your brain, using two outposts it installed in your face for convenience.',
  },
  {
    emoji: '🫀', cat: 'body', catLabel: 'Human Body',
    title: 'Your Heart Creates Enough Pressure to Squirt Blood 9 Meters.',
    text: 'In a lifetime, your heart beats about 3 billion times and pumps enough blood to fill 200 Olympic swimming pools. It starts beating 22 days after conception — before you even have a brain. Your heart showed up to work before your mind existed. And it never once asked for a day off. The most loyal organ you own.',
  },
  {
    emoji: '💀', cat: 'body', catLabel: 'Human Body',
    title: 'Your Immune System Murders Millions of Your Own Cells Every Single Day. For Your Own Good.',
    text: 'Apoptosis — programmed cell death — is your body deliberately destroying cells that are damaged, infected, or potentially cancerous. Every day between 50–70 billion of your cells die on purpose. Cancer is what happens when a cell refuses to follow the suicide order and keeps multiplying. Your entire healthy existence depends on your cells being willing to die when told.',
  },
  {
    emoji: '😳', cat: 'body', catLabel: 'Human Body',
    title: 'The Human Nose Can Detect 1 Trillion Different Smells.',
    text: 'For decades scientists thought humans could only detect 10,000 smells. A 2014 study shattered that — the actual number is at least 1 trillion. Smell is also the only sense with a direct pathway to the brain\'s memory and emotion centers — which is why a single scent can instantly transport you back 20 years to a specific afternoon.',
  },
  {
    emoji: '🫁', cat: 'body', catLabel: 'Human Body',
    title: 'Your Lungs, If Flattened Out, Would Cover a Tennis Court.',
    text: 'The inside of your lungs is lined with 480 million tiny air sacs called alveoli — each surrounded by blood vessels. The combined surface area is between 70–100 square meters. You are carrying a tennis court folded into your chest. Each breath exchanges oxygen and CO₂ across that entire surface in under a second. Evolution figured out origami before humans did.',
  },
  {
    emoji: '😵', cat: 'body', catLabel: 'Human Body',
    title: 'Mirror Neurons Fire Even When You Just Watch Someone Else.',
    text: 'When you watch someone pick up a cup, neurons in your motor cortex fire as if YOU are picking up the cup. When you see someone in pain, pain-related neurons activate in your brain. These mirror neurons blur the boundary between self and other at a neurological level. They are thought to underlie imitation, language acquisition, empathy, and social understanding. You literally feel other people\'s experiences in your neurons. Empathy is not a choice. It is hardware.',
  },
  {
    emoji: '🧠', cat: 'body', catLabel: 'Human Body',
    title: 'Your Brain is More Complex Than Anything Else We Have Discovered in the Universe.',
    text: 'The human brain has 86 billion neurons. Each neuron connects to up to 10,000 others. That means roughly 100 trillion synaptic connections — more connections than stars in the Milky Way. We have mapped the entire connectome of a roundworm — 302 neurons — and it took 12 years. The most complex object ever discovered is sitting behind your eyes right now. And it has no idea how it works.',
  },

  // ── UPSC SPECIAL ──
  {
    emoji: '🏔️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Himalayas Are Still Growing, and It Directly Controls India\'s Monsoon.',
    text: 'The Indian tectonic plate is still crashing into the Eurasian plate at about 5cm per year. The Himalayas grow roughly 5mm annually. This isn\'t just geology trivia — the Himalayas act as a wall that forces monsoon winds upward, causing rainfall across the subcontinent. Without the Himalayas, India\'s entire agricultural system, river network, and civilization as we know it would not exist. The mountains didn\'t just form India\'s border. They formed India.',
  },
  {
    emoji: '💧', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Groundwater Crisis is Invisible to Most People.',
    text: 'India extracts 250 cubic km of groundwater annually — more than the USA and China combined. NASA\'s GRACE satellite shows the Indo-Gangetic aquifer is depleting at an alarming rate. Punjab — India\'s breadbasket — has seen water tables drop so severely that borewells now have to go 10x deeper than 30 years ago. When an aquifer collapses, the land above it literally sinks — called subsidence. Parts of Delhi are already sinking. This isn\'t a future problem. It is happening right now, underground, in silence.',
  },
  {
    emoji: '🧊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Arctic is Releasing Methane from Permafrost. And Methane is 80 Times More Potent Than CO₂.',
    text: 'Permafrost — permanently frozen ground covering large parts of Siberia, Alaska, and Canada — contains vast stores of organic matter frozen for thousands of years. As it thaws, bacteria decompose this organic matter and release methane — a greenhouse gas 80 times more potent than CO₂ over 20 years. This creates a feedback loop — warming thaws permafrost, permafrost releases methane, methane causes more warming. Scientists call this a "climate time bomb." It is already detonating in slow motion.',
  },
  {
    emoji: '🌀', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Cyclone Intensity Over the Arabian Sea Has Increased 150% in the Last Two Decades.',
    text: 'The Arabian Sea was historically less prone to severe cyclones than the Bay of Bengal — cooler water temperatures suppressed them. Rapid warming of the Arabian Sea has changed this completely. Cyclone Tauktae (2021) — one of the most intense Arabian Sea cyclones ever recorded — struck Gujarat directly. Mumbai, India\'s financial capital, is now increasingly in the cyclone risk zone. Geography that protected western India for centuries is no longer a reliable shield.',
  },
  {
    emoji: '📱', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Digital Infrastructure Processed More Real-Time Transactions Than the Entire World Combined in 2023.',
    text: 'UPI — Unified Payments Interface — processed over 100 billion transactions in 2023. The USA, Europe, and China combined don\'t match that volume in real-time payment transactions. India built a public digital payment infrastructure that is now being exported to countries like Singapore, UAE, France, and Bhutan. Built by NPCI. Owned by nobody. Available to everyone.',
  },
  {
    emoji: '⚖️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Supreme Court Invented a Power That No Constitution Gave It.',
    text: 'The Basic Structure Doctrine — established in Kesavananda Bharati v. State of Kerala (1973) — holds that Parliament cannot amend the Constitution in ways that destroy its "basic structure." The problem? The Constitution itself never defines or mentions "basic structure." The Supreme Court invented this doctrine to protect democracy from a Parliament that kept trying to make itself all-powerful. Law protecting itself from lawmakers.',
  },
  {
    emoji: '📜', cat: 'upsc', catLabel: 'UPSC Special',
    title: '"Socialist" and "Secular" Were Not in the Original Indian Constitution.',
    text: 'Both words were added to the Preamble by the 42nd Constitutional Amendment in 1976 — during the Emergency imposed by Indira Gandhi. The original Preamble drafted by the Constituent Assembly did not contain these words. This amendment was passed when most opposition MPs were in jail and Parliament was under complete government control. The Constitution has been amended 106 times. It is a living document that has survived coups, emergencies, and political crises.',
  },
  {
    emoji: '🏔️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Seismic Risk: A Major Himalayan Earthquake is Not a Matter of If, But When.',
    text: 'The Indian plate is colliding with the Eurasian plate at 5cm per year — one of the fastest tectonic movements on Earth. The entire Himalayan belt, Northeast India, Andaman & Nicobar Islands, and parts of Gujarat sit in Seismic Zone IV and V — the highest risk categories. The 2001 Bhuj earthquake killed 20,000 people. Seismologists warn that a major Himalayan earthquake of magnitude 8+ hasn\'t happened because strain has been building for over a century. The pressure is being stored.',
  },
  {
    emoji: '💧', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Glaciers in the Himalayas Feed 10 Major Asian Rivers. And They\'re Melting.',
    text: 'The Hindu Kush Himalayan region contains the largest concentration of ice outside the polar regions — sometimes called the "Third Pole." It feeds the Indus, Ganga, Brahmaputra, Yangtze, Mekong, and 5 other major rivers that provide freshwater to 2 billion people. Climate change is melting these glaciers at an accelerating rate. Initially this causes floods — then as glaciers shrink, rivers run dry. This is called "peak water" — we\'re currently in the flood phase. The drought phase comes next.',
  },
  {
    emoji: '🌊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Brahmaputra is India\'s Most Strategically Vulnerable River. And China Controls Its Source.',
    text: 'China has built multiple dams on the Yarlung Tsangpo — the Brahmaputra\'s name in Tibet — and plans a mega-dam that would be the largest hydroelectric project in human history — three times the power of Three Gorges. China can theoretically control water flow downstream — releasing floods or withholding water at will. The river that floods Assam and waters the Northeast is controlled at its source by a geopolitical rival. Water is the weapon nobody is talking about.',
  },

  // ── MATHEMATICS ──
  {
    emoji: '0️⃣', cat: 'maths', catLabel: 'Mathematics',
    title: 'Zero Was Invented. And the Person Who Invented It Changed All of Mathematics Forever.',
    text: 'The concept of zero as a number — not just a placeholder — was formalized by Indian mathematician Brahmagupta in 628 AD. Before zero, you couldn\'t do algebra, calculus, binary code, or computer science. Zero is the foundation of all modern mathematics and computing. Every app on your phone, every satellite in orbit, every calculation in physics — built on a concept an Indian mathematician defined 1400 years ago. The most important number in mathematics is the one that means nothing.',
  },
  {
    emoji: '♾️', cat: 'maths', catLabel: 'Mathematics',
    title: 'There Are Infinities Larger Than Other Infinities. Infinity Has a Size Problem.',
    text: 'Mathematician Georg Cantor proved that the infinity of real numbers is strictly larger than the infinity of whole numbers — even though both are infinite. You can\'t make a one-to-one match between them. There are different sizes of infinity. Cantor\'s colleagues thought he was insane. He had a mental breakdown. He died in a sanatorium. He was also completely correct and is now considered one of history\'s greatest mathematicians. Mathematics broke a man and then gave him a statue.',
  },
  {
    emoji: '♟️', cat: 'maths', catLabel: 'Mathematics',
    title: 'There Are More Possible Chess Games Than Atoms in the Observable Universe. By a Lot.',
    text: 'Atoms in observable universe: 10⁸⁰. Possible chess games: 10¹²⁰. That\'s not a small difference. If every atom in the universe played a unique chess game simultaneously since the Big Bang — they still wouldn\'t cover a fraction of all possible games. A 64-square board with 32 pieces contains more complexity than all physical reality we can observe. Every chess game ever played is a unique path through a space larger than the universe.',
  },
  {
    emoji: '🔢', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Number 1 Appears as the Leading Digit in Real-World Data About 30% of the Time. Not 11%.',
    text: 'Benford\'s Law says in naturally occurring data — populations, stock prices, river lengths, election results — numbers starting with 1 appear ~30% of the time, numbers starting with 9 appear only ~5%. Tax authorities and forensic accountants use Benford\'s Law to detect fraud — fake data created by humans doesn\'t follow this pattern because our intuition says all digits should appear equally. The universe has a favourite number. It\'s 1.',
  },
  {
    emoji: '📜', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Kerala School of Mathematics Discovered Calculus 200 Years Before Newton and Leibniz.',
    text: 'Madhava of Sangamagrama and the Kerala School of Astronomy and Mathematics developed infinite series expansions for trigonometric functions and early forms of calculus in the 14th and 15th centuries. They calculated pi to 11 decimal places. They developed what we now call Taylor series — attributed to Brook Taylor who published in 1715. Whether Newton and Leibniz knew of Kerala\'s work through Jesuit missionaries is still debated. India invented calculus. Europe got the credit.',
  },
  {
    emoji: '💔', cat: 'maths', catLabel: 'Mathematics',
    title: 'Gödel\'s Incompleteness Theorem Proved That Mathematics Cannot Prove Everything.',
    text: 'In 1931 Kurt Gödel proved that in any consistent mathematical system there will always be true statements that cannot be proven within that system. Mathematics — the language of absolute truth — is fundamentally incomplete. There are mathematical truths that exist but are permanently unprovable. Gödel then spent his final years terrified of being poisoned, refused to eat food his wife didn\'t prepare, and when she was hospitalized he starved to death. The man who broke mathematics was himself broken.',
  },
  {
    emoji: '🚗', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Monty Hall Problem Breaks Human Intuition So Badly That PhD Mathematicians Got It Wrong.',
    text: 'You pick one of three doors. Behind one is a car. The host opens a different door showing a goat. Should you switch? Mathematically — YES. Switching wins 2/3 of the time. Staying wins 1/3. When Marilyn vos Savant published this solution in 1990, she received 10,000 letters — many from mathematics professors — telling her she was wrong. She was right. Human intuition is so bad at probability that experts with doctorates confidently got a simple logic puzzle wrong.',
  },

  // ── MIND & BEHAVIOUR ──
  {
    emoji: '📼', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Your Memories Are Not Recordings. Every Time You Remember, You\'re Rewriting It.',
    text: 'Memory isn\'t like a video file you play back. Every time you recall a memory, your brain reconstructs it from fragments — and during reconstruction it\'s vulnerable to modification. New information, emotions, and suggestions can silently edit the memory before it gets stored again. Eyewitness testimony — used to convict people — is one of the least reliable forms of evidence in neuroscience. You have confidently vivid memories of things that never happened exactly that way.',
  },
  {
    emoji: '💊', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Placebo Effect is So Powerful It Works Even When You KNOW It\'s a Placebo.',
    text: 'Tell patients "this is a sugar pill with no medicine" — give them the sugar pill — and a significant percentage still improve. Open-label placebo trials for IBS, chronic pain, and depression show real measurable improvements. Just the ritual of taking medicine — the doctor, the pill, the routine — triggers real neurological and physiological changes. The healing is coming from inside the house. Your belief system is a pharmaceutical factory.',
  },
  {
    emoji: '📈', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Dunning-Kruger Effect: The Least Competent People Are the Most Confident. Always.',
    text: 'People with limited knowledge in a domain overestimate their competence because they lack the skill to recognize their own ignorance. Experts meanwhile tend to underestimate themselves because they\'re acutely aware of how much they don\'t know. The most dangerous person in any room is the one who just learned enough to think they know everything.',
  },
  {
    emoji: '🚬', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Loneliness is as Physically Deadly as Smoking 15 Cigarettes a Day.',
    text: 'Social isolation triggers inflammatory responses, disrupts sleep, raises cortisol, and weakens immune function. Harvard\'s 85-year longitudinal study — the longest ever on human happiness — found that the quality of relationships was the single strongest predictor of health and longevity. Not wealth. Not fame. Not diet. Not exercise. Relationships. The people who were most connected in their 50s were the healthiest in their 80s. Loneliness doesn\'t just hurt emotionally. It kills you organ by organ.',
  },
  {
    emoji: '😐', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'You Make Most Decisions Before You\'re Consciously Aware You\'ve Decided Anything.',
    text: 'Neuroscientist Benjamin Libet\'s experiments showed brain activity predicting a decision begins 550 milliseconds before a person consciously feels they\'ve decided. More recent studies push this to several seconds. Your conscious mind may be a narrator that explains decisions your brain already made — not the decision-maker itself. Free will might be your brain\'s press secretary issuing statements about choices already made in the back office. The CEO of your mind might not be you.',
  },
  {
    emoji: '😳', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Stanford Prison Experiment Revealed How Quickly Normal People Become Monsters Given Power.',
    text: 'In 1971 psychologist Philip Zimbardo assigned college students randomly as "guards" or "prisoners" in a mock prison. Within 36 hours guards were psychologically abusing prisoners — forcing stress positions, humiliation, sleep deprivation. Prisoners had emotional breakdowns. The experiment scheduled for 2 weeks was shut down after 6 days. Nobody was a criminal. Nobody was evil. They were college students given a costume and a role. The uniform did it. Power does it. The capacity for cruelty is not exceptional. It is dormant.',
  },
  {
    emoji: '😳', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Humans Are the Only Animals That Blush. And Nobody Fully Understands Why.',
    text: 'Charles Darwin called blushing "the most peculiar and most human of all expressions." It\'s involuntary — triggered by social emotions like embarrassment, shame, or being caught. You cannot stop it. You cannot fake it convincingly. Some evolutionary psychologists think it evolved as an honest signal of social awareness — proving to others you care about group norms. Your face betrays your conscience against your will.',
  },

  // ── AI & TECH ──
  {
    emoji: '🤖', cat: 'ai', catLabel: 'AI & Tech',
    title: 'AI is Not Intelligent. It Has Never Understood a Single Word. And It\'s Still Beating Humans at Almost Everything.',
    text: 'Large Language Models don\'t understand language. They are extraordinarily sophisticated pattern matching systems trained on hundreds of billions of words. They predict what token most plausibly follows the previous ones based on statistical patterns. No comprehension. No understanding. No consciousness. No meaning. Just math. Staggeringly complex math. And this system with zero understanding is passing bar exams, medical licensing tests, coding interviews, and philosophy papers. We built something that mimics intelligence so well we can barely tell the difference.',
  },
  {
    emoji: '♟️', cat: 'ai', catLabel: 'AI & Tech',
    title: 'AlphaGo Found Moves That Human Masters Called "Divine." Moves Nobody Had Considered in 3000 Years.',
    text: 'AlphaGo\'s Move 37 in game 2 against Lee Sedol in 2016 was so unexpected that commentators initially thought it was a mistake. Lee Sedol left the room for 15 minutes. It turned out to be a stroke of genius that shifted the entire game. AlphaGo had discovered a strategy that 3000 years of human Go theory had never found. After AlphaGo, professional Go players worldwide changed how they play — learning from an AI. A machine invented new art in a game humans invented.',
  },
  {
    emoji: '🔐', cat: 'ai', catLabel: 'AI & Tech',
    title: 'Encryption Protecting Your Bank Account Can Be Broken by a Large Enough Quantum Computer.',
    text: 'Most internet security — HTTPS, banking encryption, WhatsApp messages — relies on RSA encryption. Its security comes from the fact that factoring large numbers into primes is computationally impossible for classical computers in a reasonable time. A sufficiently powerful quantum computer running Shor\'s Algorithm could break RSA encryption in hours. Governments and intelligence agencies are already harvesting encrypted data now — to decrypt it later once quantum computers are capable enough. This is called "harvest now, decrypt later." Your encrypted messages from today may be readable in 10-15 years.',
  },
  {
    emoji: '😶', cat: 'ai', catLabel: 'AI & Tech',
    title: 'Nobody Knows Why Large AI Models Work as Well as They Do. Including the People Who Built Them.',
    text: 'When neural networks get large enough they develop "emergent capabilities" — abilities that suddenly appear at scale that weren\'t present in smaller versions and weren\'t explicitly trained for. Nobody predicted these capabilities would emerge. Nobody fully understands why they did. The most powerful AI systems ever built are black boxes that surprise even their creators. We built something transformative and we don\'t understand how it does what it does. Engineering has never been here before.',
  },
  {
    emoji: '🏗️', cat: 'ai', catLabel: 'AI & Tech',
    title: 'The Internet Was Built Without Security. Every Protection Layer Was Added as an Afterthought.',
    text: 'The original ARPANET was designed for communication resilience among trusted researchers. Security was never a design consideration because everyone using it was trusted. Email was designed with no authentication — which is why spam and phishing exist. TCP/IP has no built-in encryption — which is why HTTPS had to be added later. The entire global digital infrastructure running banking, healthcare, elections, and military communications is built on a foundation designed for a network of 30 university computers in 1969. We built a skyscraper on a foundation meant for a garden shed.',
  },
  {
    emoji: '⚛️', cat: 'ai', catLabel: 'AI & Tech',
    title: 'A Quantum Computer Solved in 200 Seconds What Would Take a Classical Computer 10,000 Years.',
    text: 'Google\'s Sycamore quantum processor in 2019 performed a specific calculation in 200 seconds. The same calculation on the world\'s most powerful classical supercomputer would take approximately 10,000 years. Quantum computing doesn\'t just do things faster. It does things that are mathematically impossible for classical computers regardless of how long you wait.',
  },

  // ── LANGUAGE & WRITING ──
  {
    emoji: '🧬', cat: 'biology', catLabel: 'Biology',
    title: 'Language Didn\'t Evolve Gradually. It May Have Appeared Almost Overnight in Evolutionary Terms. And Nobody Knows Why.',
    text: 'For 200,000 years Homo sapiens existed. Made tools. Buried dead. Used fire. Then roughly 50,000-70,000 years ago something happened — cave paintings, jewellery, long distance trade, symbolic thought, complex social structures — all exploding simultaneously. Anthropologists call it the Great Leap Forward. The leading hypothesis is a single genetic mutation — possibly in the FOXP2 gene — that rewired the brain for recursive syntax. The ability to say "I think that she believes that he knows that they want" — embedding thoughts inside thoughts infinitely — may have been a single mutation that changed everything. Language didn\'t slowly develop. It may have switched on.',
  },
  {
    emoji: '📜', cat: 'biology', catLabel: 'Biology',
    title: 'Writing Was Not Invented to Tell Stories. It Was Invented to Track Beer and Grain.',
    text: 'The oldest writing system — Sumerian cuneiform circa 3400 BC — consists almost entirely of administrative records. How much barley was received. How many workers were paid. How many jars of beer were distributed. Literature, poetry, philosophy — all came later. Humans invented one of the most transformative technologies in history not to preserve wisdom or tell stories but because somebody needed to remember how much grain the temple owed somebody else. Bureaucracy is older than literature. Accounting is older than art. The first written word was probably a receipt.',
  },
  {
    emoji: '🏺', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Indus Valley Script Remains Undeciphered. And It Might Rewrite Indian History If Decoded.',
    text: 'Over 4000 Indus Valley script inscriptions have been found — on seals, pottery, and tablets. Nobody has successfully decoded them. We don\'t know what language underlies it. We don\'t know if it\'s alphabetic, syllabic, or logographic. We don\'t know if it\'s related to Dravidian languages, Sanskrit, or something entirely extinct. If decoded it could answer fundamental questions about Indus Valley religion, governance, economy, and relationship to later Indian civilizations. Every decade brings new computational attempts using AI and machine learning. Every decade fails. The most sophisticated urban civilization of the ancient world left us thousands of messages we cannot read.',
  },
  {
    emoji: '🗣', cat: 'biology', catLabel: 'Biology',
    title: 'There Are Languages Dying Every Two Weeks. And Each One Contains Knowledge That Exists Nowhere Else.',
    text: 'Of the 7,000 languages spoken today approximately half will be extinct by 2100. When a language dies — its last native speaker taking it to the grave — it takes with it unique grammatical structures, concepts, words for things other languages have no equivalent for, ecological knowledge encoded in vocabulary, and entire ways of experiencing reality. The Pirahã language of the Amazon has no numbers, no colour terms, no creation myth, and no recursion — and studying it overturned decades of linguistic theory. Every dying language potentially contains insights into human cognition that we will never recover. We are living through a mass extinction of minds.',
  },
  {
    emoji: '🌍', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Some Languages Have Words for Emotions and Experiences That English Has No Equivalent For.',
    text: 'Portuguese — Saudade: a melancholic longing for something or someone you love that is gone. Japanese — Mono no Aware: the bittersweet awareness of impermanence. German — Weltschmerz: world-pain, the sadness felt when reality fails to match your ideals. Danish — Hygge: cosy, warm, safe contentment in simple pleasures. Georgian — Shemomedjamo: I accidentally ate the whole thing. Japanese — Tsundoku: buying books and never reading them. These aren\'t just fun words. They are proof that different languages carve reality at different joints — perceiving and naming experiences that other languages leave unnamed and therefore harder to think about. Your language is the limit of your emotional vocabulary.',
  },
  {
    emoji: '🐂', cat: 'biology', catLabel: 'Biology',
    title: 'The Alphabet You\'re Reading Right Now Descended From Egyptian Hieroglyphics Through a 4000 Year Game of Telephone.',
    text: 'Egyptian hieroglyphics inspired Proto-Sinaitic script around 1900 BC. Proto-Sinaitic became Phoenician. Phoenician became Greek. Greek became Latin. Latin became English. Every letter you read — A, B, C — is a distant descendant of Egyptian pictographs. The letter A was originally a picture of an ox head — aleph in Phoenician — rotated upside down. The letter M was water — mayim — waves simplified over millennia. You are reading 4000 year old Egyptian pictures that have been simplified, rotated, borrowed, and transformed so many times their origin is invisible. The alphabet is the world\'s longest game of pictionary.',
  },

  // ── RELIGION ──
  {
    emoji: '🏛', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Religion is the Most Successful Social Technology Ever Invented. And That\'s a Completely Neutral Statement.',
    text: 'Every major civilization in history was organized around shared religious belief. Religion solved the problem of large-scale social cooperation — getting thousands of strangers to trust each other, share resources, follow common rules, and sacrifice individual interest for collective good. It created hospitals, universities, legal systems, calendars, art, architecture, and philosophy. It also created inquisitions, crusades, caste oppression, and holy wars. Religion is not true or false in this framing. It is powerful. The most powerful social organizing tool in human history. Understanding civilization without understanding religion is like understanding a building without understanding its foundation.',
  },
  {
    emoji: '⚖️', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Constitution Guarantees Freedom of Religion While Simultaneously Allowing the State to Regulate Religious Practice. This Tension Has Never Been Fully Resolved.',
    text: 'Articles 25-28 guarantee freedom of conscience and free profession of religion. But Article 25 also allows the state to regulate secular activities associated with religious practice and to legislate social welfare and reform. This has been used to justify temple entry legislation, abolition of untouchability practices, and reform of personal law. The tension between religious freedom and social reform is constitutionally unresolved — courts navigate it case by case. The Ayodhya judgment, the Sabarimala case, triple talaq — all are battlegrounds of this unresolved constitutional tension. India\'s most contested political questions are almost always simultaneously religious, legal, and constitutional.',
  },
  {
    emoji: '🕉', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The World\'s Oldest Continuously Practiced Religion May Be Hinduism. And It Has No Founder, No Single Text, No Central Authority, and No Fixed Creed.',
    text: 'Unlike Abrahamic religions — which have founders, specific founding moments, canonical texts, and institutional authority — Hinduism is a family of traditions, philosophies, and practices stretching back potentially 4000+ years without a single point of origin. The Rigveda — among the oldest religious texts still in active use — dates to approximately 1500-1200 BC. Hinduism contains within it simultaneously monotheism, polytheism, pantheism, atheism, and agnosticism. It has produced some of history\'s most sophisticated philosophy — Advaita Vedanta — alongside village folk practices. It is less a religion and more an entire civilization\'s accumulated spiritual conversation with itself across millennia.',
  },
  {
    emoji: '🕊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Buddhism Spread Across Half the World Without a Single War of Conversion. It Is the Only Major Religion With This Distinction.',
    text: 'From India Buddhism spread to Sri Lanka, Southeast Asia, China, Korea, Japan, Tibet, and Central Asia — becoming one of the world\'s major religions — without a single documented war of religious conquest. It spread through trade, philosophy, and royal patronage. Emperor Ashoka — after the horror of the Kalinga War — converted to Buddhism and sent missionaries across the known world including to Greece and Egypt. He built hospitals, dug wells, planted trees along roads, and banned animal sacrifice. The most powerful emperor in Indian history decided that conquest through dharma was greater than conquest through arms. History remembered.',
  },

  // ── DEEP OCEAN ──
  {
    emoji: '🌊', cat: 'earth', catLabel: 'Earth Science',
    title: 'We Have Mapped More of Mars Than the Ocean Floor. The Deep Ocean is Earth\'s Last Frontier.',
    text: 'Roughly 80% of the ocean floor remains unmapped at high resolution. The Mariana Trench — deepest point on Earth at nearly 11,000 metres — has been visited by humans fewer times than the Moon. The pressure at the bottom is 1,000 times atmospheric pressure. The deep ocean is pitch black, near freezing, and under crushing pressure. And it is full of life we have never seen. Every deep sea expedition discovers new species. The most alien environments on Earth are not in space. They are 10 kilometres below your feet.',
  },
  {
    emoji: '😳', cat: 'earth', catLabel: 'Earth Science',
    title: 'There Are Lakes and Rivers at the Bottom of the Ocean. With Shores, Waves, and Currents. And They Kill Almost Everything That Enters Them.',
    text: 'Brine pools — ultra-saline lakes sitting on the ocean floor — are so dense that the surrounding seawater sits on top of them like oil on water. They have visible shorelines. Waves. Currents. They are near freezing, anoxic, and three to eight times saltier than seawater. Fish that swim into them are instantly stunned and killed by the salinity shock. And yet chemosynthetic bacteria thrive there. Tube worms, mussels, and shrimp live along the shores feeding on bacteria. Life found a way in lakes of poison on the bottom of the ocean. Life always finds a way.',
  },
  {
    emoji: '🦑', cat: 'biology', catLabel: 'Biology',
    title: 'The Giant Squid Has Eyes the Size of Dinner Plates. And We Never Saw a Living Adult in Its Natural Habitat Until 2004.',
    text: 'Giant squid — Architeuthis dux — can reach 13 metres in length and have eyes 30cm across — the largest eyes of any living animal, evolved to detect the bioluminescence of sperm whales hunting them in the deep dark. For centuries they existed only as myths — the Kraken — and as corpses washed ashore or found in whale stomachs. The first footage of a living giant squid in its natural deep-sea habitat was captured in 2004. A creature 13 metres long lived in Earth\'s oceans for millions of years and we didn\'t see a living one until 2004. The ocean kept it hidden for all of human history.',
  },
  {
    emoji: '🌋', cat: 'earth', catLabel: 'Earth Science',
    title: 'Hydrothermal Vents at the Ocean Floor Support Entire Ecosystems With No Sunlight. Zero. They Run on Chemistry.',
    text: 'At mid-ocean ridges superheated water — up to 400°C — shoots out of cracks in the seafloor carrying dissolved minerals. Chemosynthetic bacteria use the chemical energy from hydrogen sulphide to produce organic matter — replacing photosynthesis entirely. Giant tube worms, ghostly white crabs, eyeless shrimp, and unique fish form entire food webs with no connection whatsoever to sunlight. These ecosystems would survive the Sun going dark. They run on Earth\'s internal heat. When scientists discovered hydrothermal vent ecosystems in 1977 it fundamentally changed the definition of where life can exist. And therefore where we should look for life elsewhere in the universe.',
  },
  {
    emoji: '👂', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Ocean Produced a Sound Called the Bloop in 1997. It Was Loud Enough to Be Heard Across the Pacific. And for Years Nobody Knew What It Was.',
    text: 'In 1997 NOAA hydrophones recorded an ultra-low frequency sound of extraordinary volume — louder than any known biological sound. Scientists called it the Bloop. Theories ranged from giant unknown creatures to geological activity. In 2012 NOAA concluded it was almost certainly the sound of a large icequake — ice fracturing in Antarctica. Almost certainly. The ocean generates sounds we cannot fully explain, at volumes that cross entire ocean basins, from sources we identify decades later. The ocean has been speaking. We are only beginning to learn to listen.',
  },

  // ── UNSOLVED MATHS ──
  {
    emoji: '🔐', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Riemann Hypothesis Has Been Unproven for 165 Years. It Controls the Distribution of Prime Numbers. And Prime Numbers Control All Encryption.',
    text: 'Bernhard Riemann proposed in 1859 that all non-trivial zeros of the Riemann zeta function have real part exactly 1/2. This hypothesis — if true — would explain the seemingly random distribution of prime numbers with extraordinary precision. Prime numbers are the foundation of RSA encryption — every secure website, banking transaction, and private message. The Riemann Hypothesis has been verified for the first 10 trillion zeros. But unproven generally. It is one of the Millennium Prize Problems — worth $1 million. 165 years. The greatest mathematicians in history. Still open.',
  },
  {
    emoji: '💻', cat: 'maths', catLabel: 'Mathematics',
    title: 'P vs NP — If Solved — Would Either Make All Encryption Worthless or Prove It\'s Safe Forever.',
    text: 'Some problems are easy to verify but hard to solve. P problems are easy to both solve and verify. NP problems are easy to verify but potentially hard to solve. The question: are they actually the same class? If P=NP — every hard problem has an easy solution. Encryption would collapse overnight. Every password, every bank transaction, every state secret becomes instantly breakable. If P≠NP — encryption is mathematically safe forever. The most important unsolved problem in computer science has civilizational stakes.',
  },
  {
    emoji: '😤', cat: 'maths', catLabel: 'Mathematics',
    title: 'Goldbach\'s Conjecture Has Never Been Proven. For 280 Years.',
    text: '4=2+2. 6=3+3. 8=3+5. 100=3+97. It works for every even number ever checked — up to 4×10¹⁸. Every single one. And yet nobody has proven it works for ALL even numbers. Christian Goldbach proposed it in a letter to Euler in 1742. 280 years of the greatest mathematical minds in history. Computers checking quintillions of cases. All confirming it. None proving it. Mathematics is full of things that appear obviously true, work in every tested case, and remain stubbornly, maddeningly unproven.',
  },
  {
    emoji: '😶', cat: 'maths', catLabel: 'Mathematics',
    title: 'The Collatz Conjecture Is So Simple a Child Can Understand It. And So Hard It Has Defeated All of Mathematics.',
    text: 'Take any positive integer. If even — divide by 2. If odd — multiply by 3 and add 1. Repeat. The conjecture says you will always eventually reach 1. Try 6: 6→3→10→5→16→8→4→2→1. It always seems to reach 1 — for every number ever tested up to 2⁶⁸. And yet — unproven. Mathematician Paul Erdős said: "Mathematics is not yet ready for such problems." The simplest iterative process imaginable has resisted proof for 85 years. Sometimes the simplest questions are the deepest ones.',
  },
  {
    emoji: '🔢', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Mathematical Tradition Produced Results Centuries Before Europe. And History Barely Acknowledges It.',
    text: 'Brahmagupta — 628 AD — gave the first general solution to quadratic equations and rules for operating with zero and negative numbers. Bhaskara II — 12th century — calculated derivatives 500 years before Newton. The Kerala School — 14th-16th century — developed infinite series and calculated pi to 11 decimal places. Ramanujan — with almost no formal training — produced theorems so advanced mathematicians are still proving them today. India\'s mathematical tradition is one of the greatest in human history. Its contributions are systematically underrepresented in the global story of mathematics.',
  },

  // ── ANCIENT WARFARE ──
  {
    emoji: '🌲', cat: 'earth', catLabel: 'Earth Science',
    title: 'The Mongols Killed So Many People They Accidentally Reversed Climate Change.',
    text: 'Genghis Khan\'s conquests killed an estimated 40 million people — roughly 10% of the world\'s population. Entire cities were erased. Agricultural land reverted to forest across Asia and Eastern Europe. Researchers estimate this reforestation absorbed approximately 700 million tonnes of carbon from the atmosphere — measurably cooling the planet. The deadliest conqueror in history accidentally created one of the largest carbon sequestration events of the pre-industrial era. The bodies decomposed. The forests grew. The planet cooled.',
  },
  {
    emoji: '🏦', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Battle of Plassey 1757 Was Won Not by Military Superiority But by a Betrayal Financed by a Banker.',
    text: 'The British East India Company\'s victory over Siraj ud-Daulah at Plassey — which effectively began British rule over India — was decided before the battle started. Mir Jafar — Siraj\'s commander — was bribed by Robert Clive to betray the Nawab. The financing came from Jagat Seth — the most powerful banker in Bengal — who calculated that British rule would be better for his business interests. A battle that determined the fate of a subcontinent for 200 years was decided by commercial calculation and personal betrayal. The British didn\'t conquer India. They were let in by Indians who thought they could control them.',
  },
  {
    emoji: '🏗', cat: 'history', catLabel: 'History',
    title: 'The Roman Legions Were the Most Technologically Advanced Killing Machine of the Ancient World. And Their Secret Weapon Was Engineering Not Fighting.',
    text: 'Roman military dominance came not from individual fighting skill but from logistics, engineering, and organizational discipline. Legions built fortified camps every single night. They constructed roads, bridges, and siege works with professional efficiency. Their supply chains could sustain 5,000 men in hostile territory indefinitely. The Roman road network — 400,000 km — allowed rapid troop deployment across a continent. When Romans won battles it was usually because they had better supply, better fortifications, and better organizational coherence. Rome conquered the world with project management.',
  },

  // ── PSYCHOLOGY OF EVIL ──
  {
    emoji: '💀', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Milgram Experiment Proved That 65% of Ordinary People Will Electrocute a Stranger to Death If an Authority Figure Tells Them To.',
    text: 'Stanley Milgram\'s 1961 experiment had participants administer electric shocks to a learner — actually an actor — for wrong answers. Shocks went up to 450 volts, labelled "Danger: Severe Shock." The learner screamed, begged for mercy, then went silent. 65% of participants — ordinary Americans — continued to the maximum voltage when urged by an experimenter simply saying "please continue." No threats. No weapons. Just a calm authoritative voice. Two thirds of normal people followed instructions to apparent lethal conclusion. Milgram proved that following orders wasn\'t an excuse. It was a documented human tendency.',
  },
  {
    emoji: '😶', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Evil is Almost Never Committed by People Who Think They Are Doing Evil.',
    text: 'Hannah Arendt covering the Eichmann trial coined "the banality of evil" — Eichmann was not a monster. He was a bureaucrat. Ordinary. Concerned with career advancement. Following procedures. The Holocaust was implemented largely by people who compartmentalized, rationalized, and focused on their narrow role in a vast system. Rwanda\'s genocide was implemented by neighbours killing neighbours who had lived together peacefully for decades. Every major atrocity in history was carried out primarily by ordinary people who convinced themselves that what they were doing was necessary, righteous, or simply their job. Evil scales because ordinary people carry it.',
  },
  {
    emoji: '📊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Psychology of Corruption in India Is Not About Bad People. It Is About Bad Systems That Make Corruption Rational.',
    text: 'Research in behavioural economics consistently shows that corruption thrives not because most people are dishonest but because systems create environments where honesty is punished and corruption is rewarded. A government employee earning ₹15,000 a month making decisions worth crores faces an incentive structure that makes corruption mathematically rational. The solution is not moral lectures — it is changing incentive structures. E-governance reduces corruption not by making people more honest but by removing the human discretion that corruption requires. India\'s anti-corruption strategy has historically focused on punishment rather than incentive redesign. The evidence says that\'s backwards.',
  },

  // ── THE FAR FUTURE ──
  {
    emoji: '☀️', cat: 'space', catLabel: 'Space',
    title: 'In 1 Billion Years Earth Will Be Uninhabitable. Not From Human Activity. From the Sun.',
    text: 'The Sun brightens approximately 1% every 100 million years. In 1 billion years it will be 10% brighter — enough to push Earth outside the habitable zone. Oceans will begin evaporating. Photosynthesis will become impossible. Complex life ends. Not from asteroid, not from war, not from climate change — but from the slow, inevitable brightening of the star that created us. The Sun is the giver of all life on Earth. It is also life\'s expiration date.',
  },
  {
    emoji: '🌑', cat: 'space', catLabel: 'Space',
    title: 'In 100 Trillion Years the Last Star Will Die. And the Universe Will Enter Permanent Darkness.',
    text: 'Red dwarf stars — the smallest and most numerous — burn so slowly they will live for 1-10 trillion years. The last star to die will be a red dwarf so dim it glows only in infrared. When it finally exhausts its fuel the universe enters the Degenerate Era — populated only by black dwarfs, neutron stars, and black holes drifting in absolute darkness and cold. No light. No warmth. No energy gradients to drive any process. The universe that began in unimaginable heat and light ends in cold darkness so complete it makes nihilism feel optimistic.',
  },
  {
    emoji: '🌌', cat: 'space', catLabel: 'Space',
    title: 'After Black Holes Evaporate, Nothing Will Happen Forever.',
    text: 'After black holes evaporate via Hawking radiation the universe enters maximum entropy — Heat Death. Every particle separated by distances so vast no interaction is ever possible again. No events. No processes. No change. Time continues passing but nothing distinguishes one moment from the next because nothing happens. Ever. Again. The universe will exist in this state for a duration so much longer than its current age that our entire cosmic history — 13.8 billion years — is not even a rounding error. The universe\'s final state is indistinguishable from non-existence.',
  },

  // ── QUANTUM BIOLOGY ──
  {
    emoji: '🐦', cat: 'biology', catLabel: 'Biology',
    title: 'Birds Navigate Using Quantum Entanglement Inside Their Eyes. They Literally See the Quantum World.',
    text: 'Cryptochrome proteins in bird retinas contain electron pairs whose quantum spin states are influenced by Earth\'s magnetic field through the radical pair mechanism — a quantum mechanical effect. The birds may visually perceive the magnetic field as a brightness or shadow overlay on their vision. This is quantum biology — quantum mechanics operating inside living tissue at body temperature doing something functionally useful. For decades this was considered impossible. It is happening inside the eyes of every migrating robin right now. The quantum world isn\'t locked away in particle accelerators. It is running navigation software in garden birds.',
  },
  {
    emoji: '🌿', cat: 'biology', catLabel: 'Biology',
    title: 'Photosynthesis Is Nearly 100% Efficient at Energy Transfer. And It Uses Quantum Mechanics to Achieve What Classical Physics Says Is Impossible.',
    text: 'When a photon hits a photosynthetic complex it creates an exciton that needs to reach the reaction centre. Classical physics says it would randomly walk through the molecular network losing energy as heat. But experiments show it arrives almost perfectly efficiently — nearly 100%. The explanation: quantum coherence — the exciton exists in superposition across multiple pathways simultaneously and finds the optimal route instantaneously. Plants solved the optimal routing problem using quantum mechanics 3 billion years ago. Computer scientists are still trying to replicate it. Evolution is a better engineer than we are.',
  },
  {
    emoji: '🧬', cat: 'biology', catLabel: 'Biology',
    title: 'DNA Mutation — the Engine of All Evolution — May Be Driven by Quantum Tunnelling. Life Evolves Because Protons Teleport.',
    text: 'DNA mutations occur when protons in base pairs quantum tunnel to wrong positions — changing the genetic code. This happens spontaneously, randomly, and unavoidably due to quantum mechanics. Every cancer, every evolutionary innovation, every genetic disease — initiated by a proton teleporting. The entire 3.8 billion year history of life on Earth — every species that ever existed, every adaptation, every extinction — driven ultimately by quantum mechanical accidents in DNA base pairs. Evolution is not just chemistry. It may be quantum mechanics writing and rewriting the book of life one teleporting proton at a time.',
  },

  // ── FERMI PARADOX ──
  {
    emoji: '👽', cat: 'space', catLabel: 'Space',
    title: 'The Universe Should Be Teeming With Intelligent Life. And We Hear Nothing. This Is the Problem.',
    text: 'The Milky Way alone has 200-400 billion stars. Conservative estimates suggest millions of Earth-like planets in habitable zones. Even if intelligent life arises on only 0.0001% of them — that\'s thousands of civilizations in our galaxy alone. The galaxy is 13 billion years old. A civilization just 1 million years older than us would have had time to colonize the entire galaxy even at 1% the speed of light. And yet. Silence. No signals. No megastructures. No visitors. No evidence of anyone anywhere. This contradiction has no comfortable resolution.',
  },
  {
    emoji: '🔴', cat: 'space', catLabel: 'Space',
    title: 'The Great Filter Theory Says Something Kills Almost All Civilizations. The Terrifying Question Is Whether We\'ve Passed It or It\'s Ahead of Us.',
    text: 'The Great Filter is whatever makes intelligent spacefaring civilizations extraordinarily rare. Either it\'s behind us — meaning the evolution of complex life or intelligence is so improbable we got insanely lucky — or it\'s ahead of us. Ahead means something kills almost every civilization that reaches our technological level. Nuclear war. Climate collapse. AI. Bioweapons. If we ever find simple microbial life on Mars — it\'s terrifying news. It means the Filter isn\'t behind us. It\'s somewhere ahead. Every Mars rover that comes back empty is slightly reassuring.',
  },
  {
    emoji: '🌲', cat: 'space', catLabel: 'Space',
    title: 'The Dark Forest Theory Says Aliens Are Silent Because Announcing Yourself Is Suicidal.',
    text: 'Liu Cixin\'s Dark Forest theory proposes that the universe is silent because every intelligent civilization knows that contact means potential annihilation. In a universe of limited resources and unknowable intentions, any civilization that detects another faces a brutal logic: strike first or risk being struck. The universe is a dark forest. Every civilization is a hunter moving silently. And we — with our radio broadcasts, our Voyager golden record, our deliberate METI signals — have been shouting our location into that forest for a century.',
  },
  {
    emoji: '📡', cat: 'space', catLabel: 'Space',
    title: 'We Have Been Sending Signals Into Space for 100 Years. And We\'ve Barely Whispered.',
    text: 'Every radio broadcast, every television signal, every radar pulse since Marconi has been expanding outward at the speed of light. Our entire electromagnetic presence in the universe is a bubble 200 light years in diameter. The Milky Way is 100,000 light years across. We have announced ourselves to 0.00002% of our own galaxy. We\'ve checked an area the size of a grain of sand on a beach the size of a continent. The silence so far means almost nothing. The search has barely begun.',
  },

  // ── INDIAN PHILOSOPHY ──
  {
    emoji: '🕉', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Advaita Vedanta Arrived at the Same Conclusion as Quantum Mechanics 2500 Years Earlier. By Pure Philosophical Reasoning.',
    text: 'Adi Shankaracharya\'s Advaita Vedanta — non-dualism — proposes that the apparent multiplicity of the universe is maya — illusion — and that underlying all apparent separation is one undivided consciousness — Brahman. The observer and observed are ultimately one. Quantum mechanics arrived at something structurally similar — the observer cannot be separated from the observed, measurement collapses superposition, the boundary between subject and object is fundamentally unclear. Two completely different methods — philosophical reasoning and experimental physics — pointing at the same dissolution of the subject-object boundary. 2500 years apart.',
  },
  {
    emoji: '🔥', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Charvakas — Ancient Indian Materialist Philosophers — Argued Against Gods, Afterlife, and Religious Authority. In 600 BC.',
    text: 'The Charvaka school — also called Lokayata — was an ancient Indian school of philosophical materialism and atheism. They rejected the Vedas as authoritative, denied the existence of god, soul, and afterlife, and argued that perception is the only valid source of knowledge. Their texts were mostly destroyed — preserved only in the writings of their opponents who quoted them to refute them. The most radical philosophers of the ancient world were Indian. History buried them.',
  },
  {
    emoji: '📜', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Contribution to Logic, Mathematics, Linguistics, and Epistemology Is One of Humanity\'s Greatest Intellectual Achievements. And It Is Almost Entirely Absent From Standard Global Intellectual History.',
    text: 'Panini\'s Ashtadhyayi — 4th century BC — is the world\'s first formal generative grammar, describing Sanskrit with 3,959 rules of such precision that it influenced modern formal linguistics and computer science. Pingala — 3rd century BC — described binary number systems. Brahmagupta — 7th century — algebra and zero. Madhava — 14th century — infinite series calculus. Panini\'s grammar is more sophisticated than anything produced in Europe until the 20th century. The global story of human intellectual development has a massive subcontinental gap not explained by absence of achievement — only by absence of acknowledgement.',
  },

  // ── NEUROSCIENCE OF CREATIVITY ──
  {
    emoji: '🎨', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Creativity Is Not a Talent. It Is a Neurological Process That Can Be Understood, Trained, and Enhanced.',
    text: 'Brain imaging studies show creativity consistently activates three networks simultaneously — the Default Mode Network (imagination), the Executive Control Network (focus and evaluation), and the Salience Network (what to pay attention to). In most tasks these networks suppress each other. In creative thought they cooperate. Highly creative people don\'t have more active brains. They have better coordination between these three networks. Creativity is a skill of network synchronization not raw intelligence.',
  },
  {
    emoji: '💡', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Moment of Insight — the Aha Moment — Is Preceded by a Burst of Gamma Waves in the Right Hemisphere. 300 Milliseconds Before You\'re Conscious of the Idea.',
    text: 'EEG studies of people solving insight problems show a dramatic burst of gamma wave activity in the right anterior temporal lobe approximately 300 milliseconds before subjects report their aha moment. The solution arrives in the brain before consciousness knows about it. Your unconscious mind solved the problem and then informed your conscious mind — not the other way around. The feeling of sudden inspiration is real. But you weren\'t the one who had it. Your unconscious was. You just got the memo.',
  },
  {
    emoji: '😴', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Sleep — Specifically REM Sleep — Is the Brain\'s Creativity Engine. Most Creative Breakthroughs Happen After Sleeping on a Problem.',
    text: 'During REM sleep the prefrontal cortex — the brain\'s logic and inhibition centre — goes partially offline. Meanwhile the associative regions become hyperactive — making distant connections between unrelated concepts. The brain makes connections during REM that the waking analytical mind would never allow. Kekulé discovered benzene\'s ring structure from a dream of a snake biting its tail. Mendeleev saw the periodic table in a dream. The greatest scientific insights in history were literally dreamed.',
  },

  // ── ORIGINS OF THE UNIVERSE ──
  {
    emoji: '🌌', cat: 'space', catLabel: 'Space',
    title: 'The Big Bang Wasn\'t an Explosion in Space. It Was an Explosion OF Space. Everything Was Already Everywhere.',
    text: 'The common image — a point exploding outward into pre-existing empty space — is completely wrong. Before the Big Bang there was no space. Space itself expanded. Every point in the universe was simultaneously at the origin. The Big Bang didn\'t happen in a location. It happened everywhere at once. There is no centre of the universe because every point was the centre. You are currently sitting at the centre of the Big Bang. So is everyone else. So is every point in the observable universe simultaneously.',
  },
  {
    emoji: '😶', cat: 'space', catLabel: 'Space',
    title: 'Matter Almost Didn\'t Exist. We Are the Leftover.',
    text: 'When the universe cooled enough to form matter — equal amounts of matter and antimatter should have formed and annihilated each other completely, leaving only light. But an asymmetry of approximately 1 in a billion meant some matter survived. Everything in the observable universe — every galaxy, star, planet, ocean, and person — is the leftover 1 in a billion. We exist because of a rounding error in the early universe. The entirety of existence is the remainder after near-total annihilation. We are what was left over.',
  },

  // ── THE BRAIN ──
  {
    emoji: '🧠', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'You Don\'t Use 10% of Your Brain. You Use All of It. And the 10% Myth Came From a Misquote.',
    text: 'The 10% myth is possibly the most persistent neuroscience lie in popular culture. Brain imaging shows activity across virtually all brain regions. The myth is probably a misinterpretation of the fact that only about 10% of brain cells are neurons — the other 90% are glial cells incorrectly assumed to be passive. Glial cells are now known to be critical for brain function. You use 100% of your brain. The myth persists because it\'s comforting — implying untapped potential. The uncomfortable truth is you\'re already running at full capacity.',
  },
  {
    emoji: '🔮', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Your Brain Runs on Prediction. It Is Never Reacting to the World. It Is Constantly Guessing About It.',
    text: 'The predictive processing theory proposes that the brain doesn\'t passively receive sensory input and react. It constantly generates predictions about what input it expects to receive. Sensory data is used only to correct prediction errors. What you experience as reality is your brain\'s best current model of the world — not the world itself. Perception is controlled hallucination. You have never directly experienced the world. You have experienced your brain\'s model of it. Updated 40 times per second.',
  },
  {
    emoji: '😔', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'The Brain Has a Negativity Bias So Extreme It Takes 5 Positive Experiences to Counteract 1 Negative One.',
    text: 'The brain processes negative information more thoroughly, stores it more vividly, and retrieves it more easily than positive information. This was a survival advantage — missing a threat was fatal, missing a reward was merely unfortunate. But in modern life this creates chronic anxiety and a tendency to remember criticism over praise, failures over successes. The world has gotten dramatically better by almost every measurable metric over 200 years. Most people believe it\'s getting worse. Evolution optimized for survival. Not happiness. Not accuracy. Survival.',
  },

  // ── PHILOSOPHERS ──
  {
    emoji: '🏛', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Aristotle Was the Last Person to Know Everything. And His Mistakes Held Back Science for 2000 Years.',
    text: 'Aristotle — 384-322 BC — wrote on logic, biology, physics, astronomy, ethics, politics, rhetoric, poetry, psychology, and metaphysics. His work was so comprehensive Medieval Europe treated him as infallible. His biological observations were extraordinary. His physics was catastrophically wrong — heavier objects fall faster (false), the Sun orbits the Earth (false), the heart is the seat of intelligence (false). The Church\'s adoption of Aristotle as scientific authority meant contradicting him was effectively heresy. The greatest mind of the ancient world accidentally became science\'s greatest obstacle.',
  },
  {
    emoji: '🌟', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Aristotle\'s Philosophy of Happiness — Eudaimonia — Is More Sophisticated Than Anything in Modern Self-Help. And It\'s 2400 Years Old.',
    text: 'Aristotle distinguished between Hedonia — pleasure — and Eudaimonia — flourishing, actualizing your potential. Happiness is not a feeling. It is an activity — the active exercise of your distinctive human capacities in accordance with virtue. You cannot be happy passively. You cannot be happy by accumulating pleasures. Modern psychology\'s concept of self-actualization, flow states, and meaning — all are rediscoveries of Aristotle\'s Eudaimonia. We spent 2400 years looking for happiness everywhere except where Aristotle pointed.',
  },
  {
    emoji: '🗳', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Plato Believed Democracy Was the Second Worst Form of Government. Right Before Tyranny. And His Reasoning Is Terrifyingly Relevant.',
    text: 'Plato argued in The Republic that democracy inevitably degenerates into tyranny. Democracy gives freedom to everyone including those without wisdom. Demagogues emerge — promising people whatever they want to hear. The people follow the most entertaining and flattering voice. The demagogue accumulates power and becomes tyrant. Plato saw the execution of his teacher Socrates — voted for by the democratic Athenian assembly — as proof. Democracy killed the wisest man in Athens because the majority wanted him dead. His critique is 2400 years old and disturbingly familiar.',
  },
  {
    emoji: '🍷', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Socrates Wrote Nothing. Everything We Know About Him Is From His Students. And He Might Be the Most Important Philosopher Who Ever Lived.',
    text: 'Socrates — 470-399 BC — left not a single written word. He wandered Athens asking questions, claiming to know nothing — wise only in knowing his own ignorance. He questioned politicians, priests, and craftsmen — exposing contradictions in their beliefs. The Athenian authorities charged him with corrupting the youth and impiety. Given the chance to flee, he refused. He drank hemlock and died calmly discussing the immortality of the soul with his friends. A man who claimed to know nothing changed Western thought more than almost anyone who claimed to know everything.',
  },
  {
    emoji: '🌑', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Friedrich Nietzsche Said God Is Dead. And Most People Misunderstand What He Meant by That.',
    text: '"God is dead. God remains dead. And we have killed him." Nietzsche was not celebrating atheism. He was warning about its consequences. Western civilization had built its entire moral framework on Christian theology. Science and the Enlightenment had made that foundation untenable. Without God — what is the basis of morality? What gives life meaning? What prevents nihilism? Nietzsche saw the crisis coming and tried to answer it — through the Übermensch, the will to power, eternal recurrence. He was not celebrating God\'s death. He was terrified by it.',
  },
  {
    emoji: '⚖️', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Immanuel Kant Said You Should Act Only According to Rules You Would Want Everyone to Follow. And This One Idea Restructured All of Western Ethics.',
    text: 'Kant\'s Categorical Imperative: act only according to that maxim by which you can at the same time will that it should become a universal law. Should you lie to save someone? If everyone lied whenever convenient, the entire institution of truth-telling collapses. Ethics is not about consequences — it is about universalizable rules. The rightness of an action is determined not by its outcome but by whether the principle behind it could be rationally universalized. Kant placed reason at the centre of morality. Alone. Without God. Without outcomes. Just rational consistency.',
  },
  {
    emoji: '📊', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Karl Marx Predicted Capitalism Would Destroy Itself Through Its Own Success. He Was Wrong About the Solution. He Might Not Have Been Wrong About the Problem.',
    text: 'Marx argued capitalism\'s drive for profit would inevitably concentrate wealth, immiserate workers, create boom-bust cycles, and generate alienation. His solution — centralized state control — failed catastrophically everywhere it was tried. But his diagnosis — concentration of wealth, tendency toward monopoly, boom-bust instability, commodification of everything — describes 21st century capitalism with uncomfortable accuracy. Marx the prophet was often right. Marx the policy maker was catastrophically wrong. History has been trying to figure out what to do with that distinction ever since.',
  },
  {
    emoji: '🪨', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Albert Camus Said Life Is Meaningless. And Then Said Live It Fully Anyway. And Somehow That\'s the Most Hopeful Philosophy Ever Written.',
    text: 'Camus\' Absurdism: the universe has no inherent meaning. Humans desperately search for meaning. This creates the Absurd — the collision between our need for meaning and the universe\'s silence. The response is revolt — embrace the absurdity and live with full passionate intensity anyway. "One must imagine Sisyphus happy" — condemned to roll a boulder up a hill for eternity, Sisyphus can choose to find joy in the rolling itself. Life is meaningless and we must live it as if it matters enormously. Not because it does. But because we are the kind of beings who need to.',
  },
  {
    emoji: '🏛', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Chanakya Wrote the World\'s Most Ruthless and Sophisticated Manual for Statecraft. 2300 Years Ago. And Modern Governments Still Use It.',
    text: 'Kautilya — Chanakya — wrote the Arthashastra around 300 BC. It covers taxation, law, diplomacy, espionage, warfare, and economic policy with a sophistication that matches Machiavelli and exceeds most modern political science. He described the Mandala theory of foreign policy — your neighbour is your enemy, your neighbour\'s neighbour is your friend — which remains a working description of South Asian geopolitics today. Machiavelli wrote The Prince in 1513. Chanakya wrote the Arthashastra in 300 BC. They arrived at similar conclusions 1800 years apart.',
  },
  {
    emoji: '🏛', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'The Stoics Said Your Suffering Is Not Caused by Events. It Is Caused by Your Judgments About Events. 2000 Years Before Cognitive Therapy.',
    text: 'Epictetus — born a slave, became the most influential Stoic — said: "Men are disturbed not by the things which happen, but by the opinions about things." You cannot control what happens. You can only control your response. Modern Cognitive Behavioural Therapy — the most evidence-based psychological treatment available — is functionally identical to Stoic practice. Aaron Beck invented CBT in the 1960s. Epictetus described it in 100 AD. The most effective psychological treatment in modern medicine is ancient philosophy rediscovered.',
  },
  {
    emoji: '📜', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Dr. B.R. Ambedkar Was a Greater Philosopher Than India\'s Education System Admits. And His Critique of Caste Is Philosophically Unanswerable.',
    text: 'Ambedkar\'s "Annihilation of Caste" — 1936 — is one of the most devastating works of social philosophy ever written. He argued that caste cannot be reformed — it must be annihilated — because it is not a social division of labour but a social division of labourers graded in hierarchy of worth. It is a theological system grounded in Hindu scripture\'s concept of ritual purity that produces economic and social consequences. He remains the most important social philosopher modern India has produced. And modern India is still not ready to fully reckon with what he said.',
  },

  // ── EASTERN PHILOSOPHY ──
  {
    emoji: '🌸', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'The Buddha Didn\'t Claim to Be a God. He Claimed to Be a Man Who Woke Up. And That Distinction Is the Most Radical Religious Statement Ever Made.',
    text: 'Siddhartha Gautama — born approximately 563 BC in what is now Nepal — abandoned luxury after encountering old age, sickness, and death. He sat under a Bodhi tree in Bodh Gaya and meditated until he understood the nature of suffering. What he claimed was not divine revelation — not a message from God, not supernatural power. He claimed to have clearly seen how things actually are. The Four Noble Truths are not theology. They are a diagnosis. Life involves suffering. Suffering has a cause. The cause can be removed. There is a path to remove it.',
  },
  {
    emoji: '🧠', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'The Buddhist Concept of Anatta — No Self — Is the Most Psychologically Radical Idea in Any Philosophical Tradition. And Neuroscience Is Proving It Correct.',
    text: 'Anatta means there is no permanent, unchanging self. What you call "I" is a constantly changing bundle of sensations, perceptions, and consciousness — all impermanent. The feeling of being a continuous self is a construction — a story the mind tells about its own processes. Then neuroscience arrived. The Default Mode Network constructs the narrative self in real time. There is no location in the brain where "you" reside. Just interconnected processes generating the experience of selfhood moment to moment. The Buddha described the neuroscience of the self 2500 years before neuroscience existed. Using only meditation as his instrument.',
  },
  {
    emoji: '🦋', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Zhuangzi Dreamed He Was a Butterfly. And When He Woke Up He Genuinely Didn\'t Know If He Was a Man Who Had Dreamed He Was a Butterfly or a Butterfly Dreaming He Was a Man.',
    text: 'Zhuangzi — 4th century BC — is the most playful and profound philosopher in any tradition. His butterfly dream is a serious epistemological question about the nature of reality and identity. How do you know your waking state is more real than your dreaming state? Both feel completely real from inside. Your certainty that you are awake right now is based on the fact that you feel awake. Which is exactly how dreams feel. Zhuangzi didn\'t answer the question. He just made sure you could never be completely certain again.',
  },
  {
    emoji: '🏯', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Confucius Failed at Everything He Tried During His Lifetime. And Became the Most Influential Person in East Asian History After His Death.',
    text: 'Confucius spent most of his adult life seeking a ruler who would implement his political philosophy. He was rejected by every ruler he approached. He wandered from state to state for 14 years with a small group of disciples, poor and ignored. He died at 73 believing he had failed completely. His ideas were compiled by disciples into the Analects after his death. Within 300 years they became the foundation of Chinese imperial governance. Within 500 years they structured the examination system that selected Chinese officials for 2000 years. He spent his life failing to change one small state. He ended up changing all of Asia.',
  },

  // ── CONSCIOUSNESS & FREE WILL ──
  {
    emoji: '⚖️', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'Free Will Might Be the Greatest Illusion the Human Brain Produces. And the Evidence Is Deeply Uncomfortable.',
    text: 'Libet\'s experiment showed brain activity preceding conscious decision by 550 milliseconds. More recent fMRI studies can predict simple decisions up to 10 seconds before subjects report deciding. Your brain decides. Then it tells you. The experience of deciding may be generated after the fact — a narrative your conscious mind constructs to explain what your brain already did. But even if free will is illusory, holding people responsible for choices may still be necessary for social functioning. We may need to act as if free will exists even if it doesn\'t. The useful fiction might be civilization\'s foundation.',
  },
  {
    emoji: '🤖', cat: 'ai', catLabel: 'AI & Tech',
    title: 'The Chinese Room Argument Proves That a Computer Passing Every Intelligence Test Might Still Not Be Conscious. And We Cannot Tell the Difference.',
    text: 'John Searle\'s thought experiment: imagine you are locked in a room with a rulebook for responding to Chinese symbols with Chinese symbols. You follow the rules perfectly. From outside you appear to speak Chinese. From inside you understand nothing. Searle argues this is exactly what computers do — manipulate symbols according to rules without understanding anything. A computer passing the Turing Test might be doing exactly this. Perfect simulation without any inner experience. The question then becomes — how do you know other humans are not also Chinese Rooms?',
  },
  {
    emoji: '🪞', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'The Only Thing You Can Be Absolutely Certain Exists Is Your Own Consciousness. Descartes Proved Everything Else Is Doubtful.',
    text: 'René Descartes — 1641 — attempted radical doubt. Can you doubt the external world exists? Yes — it might be a dream. Can you doubt your body exists? Yes. Can you doubt mathematics? Yes — an evil demon might be deceiving you. Can you doubt that you are doubting? No. The act of doubting requires a doubter. "Cogito ergo sum" — I think therefore I am. The one thing immune to all doubt is the existence of the conscious experience doing the doubting. Your own consciousness is the only thing in the universe whose existence is philosophically certain.',
  },

  // ── UNSOLVED BIOLOGY ──
  {
    emoji: '♾️', cat: 'biology', catLabel: 'Biology',
    title: 'Aging Is Not Inevitable. It Is a Biological Program. And We Might Be Able to Turn It Off.',
    text: 'Evolution stops caring about organisms after reproductive age. Aging is not wear and tear. It is neglect — the body stops bothering to maintain itself because evolution never selected for maintenance past reproductive age. But some animals don\'t age — Hydra, the immortal jellyfish, naked mole rats show negligible senescence. Their biology maintains itself indefinitely. This means aging is not physically inevitable — it is a biological choice evolution made that can in principle be unmade. The first humans to live to 200 may already be alive.',
  },
  {
    emoji: '🦠', cat: 'biology', catLabel: 'Biology',
    title: 'We Don\'t Know How Life Started. We Have Good Guesses. None Are Proven. The Origin of Life Remains Biology\'s Deepest Mystery.',
    text: 'RNA World hypothesis — self-replicating RNA molecules arose in primordial soup. Hydrothermal vent hypothesis — life began in deep sea vents. Panspermia — life arrived from space on asteroids. All are plausible. None are proven. The gap between chemistry and the first self-replicating molecule capable of Darwinian evolution is the biggest unexplained step in the history of life. We know what life does. We know what chemistry does. The bridge between them — the moment dead chemistry became living biology — happened once, 3.8 billion years ago, and left no record we can read.',
  },
  {
    emoji: '🏥', cat: 'body', catLabel: 'Human Body',
    title: 'The Placebo Effect Works in Surgery. Sham Operations Sometimes Work as Well as Real Ones.',
    text: 'In multiple clinical trials for knee surgery — arthroscopic procedures for osteoarthritis — sham surgery produced outcomes statistically identical to real surgery. Patients reported equivalent pain reduction and mobility improvement. The incision, the anesthesia, the operating room — the ritual of surgery — produced real physiological changes without any actual surgical intervention. The body healed itself because it believed it had been healed. If the ritual of treatment independent of the treatment itself produces measurable healing, the implications for medicine are profound and deeply uncomfortable.',
  },

  // ── PSYCHOLOGY OF GENIUS ──
  {
    emoji: '🏫', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Genius Is Not Raw Intelligence. It Is a Specific Combination of Traits That Most Educational Systems Actively Select Against.',
    text: 'Studies of historically verified geniuses show common traits unrelated to IQ scores: intense obsessive focus on self-chosen problems, willingness to sit with uncertainty for years, ability to think in multiple modalities simultaneously, rejection of authority and received wisdom, extreme sensitivity combined with extreme resilience, and playfulness — treating serious problems as games. Most educational systems reward fast recall and conformity. They systematically filter out the obsessive, the unconventional, the slow-but-deep thinker. Schools are genius-elimination machines that occasionally fail to eliminate one.',
  },
  {
    emoji: '🔢', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'Ramanujan Produced Theorems in His Sleep. Literally. He Said a Goddess Showed Them to Him in Dreams.',
    text: 'Srinivasa Ramanujan — born in Erode, Tamil Nadu, 1887 — had almost no formal mathematical training. He wrote letters to Cambridge mathematician G.H. Hardy containing theorems so advanced Hardy initially thought they were either fraud or the work of a transcendent genius. He brought Ramanujan to Cambridge. Ramanujan said the Hindu goddess Namagiri appeared to him in dreams and wrote formulas on his tongue. He died at 32. His notebooks contained thousands of theorems mathematicians are still proving today — a century later. The most naturally gifted mathematician in recorded history came from a poor Brahmin family in colonial India and almost nobody heard of him until an English mathematician accidentally opened his letter.',
  },
  {
    emoji: '⚡', cat: 'history', catLabel: 'History',
    title: 'Tesla Died Alone and Penniless in a Hotel Room. After Inventing the Modern World.',
    text: 'Nikola Tesla invented AC electrical current, the AC motor, radio (before Marconi, whose patent was later overturned), radar concepts, X-ray research, remote control, and the basic principles of wireless power transmission. He powered the 1893 World\'s Fair and built a power station at Niagara Falls. Thomas Edison ran a vicious public campaign against him. JP Morgan withdrew funding when he realized Tesla\'s system would make metered electricity impossible. Tesla died in 1943 in Room 3327 of the New Yorker Hotel — alone, in debt, feeding pigeons from his window. The man who invented the electrical age died penniless.',
  },

  // ── HISTORY OF MATHEMATICS ──
  {
    emoji: '🔢', cat: 'maths', catLabel: 'Mathematics',
    title: 'Mathematics Was Not Invented. It Was Discovered. And That Distinction Is the Deepest Philosophical Question in All of Science.',
    text: 'The Platonist position: mathematical truths exist independently of human minds. We discover them. The Formalist position: mathematics is a human-invented game played with symbols according to rules. The unsettling evidence for Platonism: mathematics invented for pure abstract reasons with no practical application repeatedly turns out to describe physical reality perfectly. Riemann invented non-Euclidean geometry as pure abstraction in 1854. Einstein used it to describe spacetime in 1915. Nobody planned this. How does abstract human reasoning keep producing tools that describe physical reality?',
  },
  {
    emoji: '😔', cat: 'maths', catLabel: 'Mathematics',
    title: 'Gödel\'s Incompleteness Theorems Didn\'t Just Break Mathematics. They Broke the Dream of Perfect Knowledge.',
    text: 'In 1900 David Hilbert proposed a program — axiomatize all of mathematics completely, prove it consistent, prove it complete. It was the dream of perfect, certain knowledge. In 1931 Kurt Gödel — aged 25 — proved it was impossible. In any consistent formal system powerful enough to describe arithmetic, there will always be true statements that cannot be proven within the system. Always. Necessarily. Permanently. The dream of complete certain knowledge was proven impossible by a 25-year-old in Vienna. There are always truths beyond the reach of any system trying to capture them.',
  },
  {
    emoji: '🔢', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India Gave the World the Number System Everybody Uses. And Almost Nobody Knows This.',
    text: 'The decimal positional number system — including zero as a number — was developed in India and transmitted to Europe through Arab mathematicians, which is why we call them Arabic numerals when they should be called Indian numerals. Without positional notation long multiplication, division, algebra, and calculus become vastly more difficult. Try multiplying MCMXCIX by DCCCXLVII. Now try 1999 × 847. Every calculation done anywhere in the world today — every computer, every calculator, every financial transaction — uses a system invented in India. The most important mathematical tool in history came from the subcontinent and was credited to the people who transmitted it.',
  },

  // ── CONSCIOUSNESS QUESTIONS ──
  {
    emoji: '💀', cat: 'body', catLabel: 'Human Body',
    title: 'Why Do We Feel Pain? Because Without It You Would Destroy Yourself Within Days and Not Notice.',
    text: 'People born with Congenital Insensitivity to Pain cannot feel pain at all. They sound lucky. They are not. They bite through their own tongues as children without knowing. They break bones and keep walking on them. They develop severe joint damage from not shifting position during sleep. Most die before 25 from accumulated damage their body could never warn them about. Pain is not your enemy. Pain is your body\'s emergency broadcast system running 24 hours a day keeping you from destroying yourself with every thoughtless action.',
  },
  {
    emoji: '💊', cat: 'body', catLabel: 'Human Body',
    title: 'Pain Is Constructed by the Brain. Not Received From the Body. The Body Sends Signals. The Brain Decides Whether to Make Pain.',
    text: 'The body has nociceptors — damage detectors — that send electrical signals to the brain. The brain then decides — based on context, attention, expectation, emotion, and meaning — whether to generate the experience of pain. Soldiers in battle report not feeling gunshot wounds until after the fight. Placebo painkillers work because the brain manufactures real pain relief from nothing. Chronic pain often persists after tissue has healed because the brain has learned the pain pattern and keeps generating it out of habit. Pain is not a message from your body. It is a decision your brain makes about a message from your body.',
  },
  {
    emoji: '😤', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Emotions Are Cultural Constructs. Different Cultures Literally Feel Different Emotions.',
    text: 'The German word Schadenfreude — pleasure from another\'s misfortune — describes an emotion that exists in German speakers and is reportedly less accessible to speakers of languages without the word. The Japanese concept of Amae — the pleasant feeling of depending on another\'s benevolence — has no English equivalent. Research by Lisa Feldman Barrett shows that cultures with more granular emotional vocabulary experience more differentiated emotions. Your emotional life is partly determined by the words your language gave you to describe it. Language doesn\'t just describe feelings. It partly creates them.',
  },
  {
    emoji: '😭', cat: 'biology', catLabel: 'Biology',
    title: 'Why Do Humans Cry? It Is the Only Form of Emotional Expression Unique to Our Species. And We Still Don\'t Fully Understand It.',
    text: 'Every animal vocalizes distress. Only humans produce emotional tears in response to psychological states. Emotional tears contain different chemistry than irritant tears — higher concentrations of stress hormones, prolactin, and leucine enkephalin — a natural painkiller. Crying may have evolved as an honest signal of vulnerability that cannot be faked. It signals genuine distress while releasing stress hormones and triggering oxytocin release. Crying is simultaneously a social signal, a hormonal release, and a pain relief system. The most human thing we do is still mysterious.',
  },

  // ── POLITICAL PHILOSOPHY ──
  {
    emoji: '🎭', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'John Rawls Asked One Question That Restructured All of Political Philosophy. What Rules Would You Choose If You Didn\'t Know Who You Would Be?',
    text: 'Rawls\' Veil of Ignorance thought experiment asks: what social arrangements would rational people choose if they had to design society before knowing whether they\'d be born rich or poor, male or female, majority or minority, able-bodied or disabled? Behind this veil — stripped of knowledge of your own position — Rawls argues you would choose basic liberties for all, fair equality of opportunity, and social inequalities arranged to maximally benefit the least advantaged. Not because you are altruistic. Because you might be the least advantaged person. The most influential political philosophy of the 20th century is built on a single thought experiment.',
  },
  {
    emoji: '🗳', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Democracy Is Simultaneously the World\'s Greatest Democratic Achievement and Its Most Stress-Tested Experiment.',
    text: 'India in 1947 defied every political science prediction. At independence India was 85% illiterate, desperately poor, religiously diverse, linguistically fragmented, with no democratic tradition at the mass level. Every political scientist said democracy would fail. India ran elections anyway — in 1952 the largest election in human history to that point — 176 million voters, most illiterate, voting with symbols. It worked. Has continued working for 75 years across 17 general elections. Whether it continues to work depends on whether its citizens understand what they have. Most don\'t.',
  },

  // ── PHILOSOPHY OF DEATH ──
  {
    emoji: '🌅', cat: 'philosophy', catLabel: 'Philosophy',
    title: 'The Stoics Practiced Death Daily. Memento Mori Was Not Morbidity. It Was the Most Life-Affirming Practice Ever Designed.',
    text: 'Marcus Aurelius wrote in his private journal every day reminding himself that he would die, that everyone he loved would die, that his empire would fall. Not to depress himself — but because contemplating death clarified what actually mattered. When you know you are dying — cancer patients, soldiers before battle — people consistently report that petty anxieties dissolve, relationships become more precious, and moments become more vivid. The Stoics tried to access this clarity without waiting for a terminal diagnosis. Memento Mori was the practice of living with death\'s clarity permanently. The most life-affirming philosophy began with the daily contemplation of death.',
  },

  // ── SCIENCE OF DREAMS ──
  {
    emoji: '🌀', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'You Forget 95% of Your Dreams Within 5 Minutes of Waking. Your Brain Actively Erases Them.',
    text: 'The prefrontal cortex — responsible for memory encoding — is significantly less active during REM sleep. Without active encoding dreams evaporate rapidly. Within 5 minutes of waking 50% of dream content is gone. Within 10 minutes 95% is gone. This may be deliberate — if you remembered every dream in detail the distinction between experienced memory and dreamed memory would become dangerously blurred. Your brain protects the integrity of waking memory by actively failing to encode dream content. You spend a third of your life in a universe your brain systematically destroys the record of.',
  },
  {
    emoji: '✈️', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Dreams Occur in Other Animals. And Studying Them Reveals What Dreams Are Actually For.',
    text: 'REM sleep — the dream stage — is universal among mammals and birds. Rats in REM sleep show hippocampal activity patterns identical to their activity while running mazes — they are literally replaying and processing the day\'s experiences. Octopuses show color-changing skin patterns during sleep — possibly dreaming visual experiences. The most compelling theory: dreams are the brain\'s threat simulation and emotional processing system — running frightening scenarios to prepare the organism for real threats. Dreams are not random noise. They are rehearsal. Your sleeping brain is a flight simulator running scenarios your waking brain was too busy to practice.',
  },

  // ── SCIENCE OF LOVE ──
  {
    emoji: '💊', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Love Is Not an Emotion. It Is a Neurological Addiction. And the Brain in Love Is Chemically Identical to the Brain on Cocaine.',
    text: 'Helen Fisher\'s fMRI studies of people in early romantic love showed intense activity in the ventral tegmental area — the brain\'s reward centre — identical to the activity pattern of cocaine addiction. Love floods the brain with dopamine. It creates craving, obsession, withdrawal when separated, and tolerance. The brain treats the person you love as a drug. Heartbreak is neurologically indistinguishable from drug withdrawal. Love is the most socially acceptable neurological addiction in human existence. And evolution designed it precisely this way — because bonded pairs raise children more successfully than unbonded ones.',
  },
  {
    emoji: '🥀', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Romantic Love Lasts on Average 18-36 Months. What Comes After Is a Completely Different Neurological State.',
    text: 'The intense dopamine-driven romantic phase — obsession, euphoria, intrusive thoughts, idealization — has a measurable neurological lifespan. After 18-36 months brain chemistry shifts. Dopamine decreases. Oxytocin and vasopressin — attachment hormones — become dominant. The relationship either transitions into companionate attachment or collapses because people mistake the end of romantic intensity for the end of love. Most relationships end not because love died but because people expected the cocaine phase to last forever. We built an entire civilization of romantic partnership on a neurological state with a biological expiration date.',
  },

  // ── HORMONES ──
  {
    emoji: '😤', cat: 'body', catLabel: 'Human Body',
    title: 'Cortisol — the Stress Hormone — Is Simultaneously Your Most Essential Hormone and Your Most Destructive One. And Modern Life Keeps It Permanently Elevated.',
    text: 'Cortisol in the short term is magnificent — it raises blood sugar, sharpens attention, and prepares muscles for action. It evolved for acute threats that resolve in minutes. The problem: the modern brain cannot distinguish between a tiger and a work email. Both trigger cortisol release. But the email doesn\'t resolve in minutes. Cortisol stays elevated. And chronically elevated cortisol kills hippocampal neurons, suppresses immune function, promotes visceral fat storage, elevates blood pressure, disrupts sleep, and accelerates cellular aging. Chronic stress is not a psychological problem. It is a hormonal catastrophe running in slow motion.',
  },
  {
    emoji: '😔', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Dopamine Is Not the Pleasure Hormone. It Is the Wanting Hormone. And the Difference Destroys Lives.',
    text: 'Dopamine does not create pleasure. It creates anticipation, craving, and wanting. The pleasure of actually getting what you wanted is mediated by opioid systems, not dopamine. Social media exploits this mercilessly — infinite scroll triggers dopamine by constantly suggesting the next reward is just one more swipe away. The wanting never stops because the getting never satisfies. Gambling addicts describe continuing not because it\'s pleasurable but because the wanting is unbearable. You are not chasing pleasure. You are chasing the neurochemical state of anticipating it.',
  },
  {
    emoji: '🦠', cat: 'body', catLabel: 'Human Body',
    title: 'Serotonin Is Not the Happiness Hormone. It Is the Satisfaction and Social Status Hormone. And 95% of It Is Made in Your Gut.',
    text: 'Serotonin mediates feelings of satisfaction, contentment, and social belonging. Higher serotonin is associated with feeling valued and secure in one\'s social position. Dominant animals have higher serotonin. But 95% of the body\'s serotonin is produced in the gut — where it regulates intestinal movement. The gut-brain serotonin connection is why gut health affects mood and why antidepressants sometimes cause digestive side effects. Your happiness is partly manufactured in your intestines. Feed your gut bacteria well. They are running a serotonin factory that your brain depends on.',
  },
  {
    emoji: '💡', cat: 'body', catLabel: 'Human Body',
    title: 'Melatonin Doesn\'t Just Control Sleep. It Controls Your Entire Biological Clock. And Artificial Light Has Completely Destroyed It for Most Humans.',
    text: 'Melatonin is produced by the pineal gland in response to darkness. As light dims melatonin rises, signaling the body to prepare for sleep. Every biological system synchronizes to this signal — body temperature drops, immune function shifts to repair mode, growth hormone releases, cellular repair begins. Artificial light — particularly blue light from screens — suppresses melatonin production. Checking your phone at 11pm tells your pineal gland it\'s midday. We invented electric light 150 years ago. Human biology evolved its sleep system over 200,000 years. The mismatch is catastrophic and almost universally ignored.',
  },
  {
    emoji: '🍟', cat: 'body', catLabel: 'Human Body',
    title: 'Leptin and Ghrelin Are the Hormones That Control Hunger. And the Modern World Has Completely Broken Them.',
    text: 'Ghrelin — the hunger hormone — rises before meals. Leptin — the satiety hormone — rises as fat stores increase. Together they should maintain stable body weight automatically. But chronic sleep deprivation raises ghrelin and drops leptin simultaneously — making you hungrier and less satisfied. Ultra-processed foods trigger dopamine reward without triggering leptin satiety. Fructose — abundant in processed food — doesn\'t trigger leptin at all. The obesity epidemic is not primarily a willpower failure. It is a hormonal system — perfectly calibrated for ancestral food environments — catastrophically mismatched to modern food and sleep environments.',
  },
  {
    emoji: '🏆', cat: 'mind', catLabel: 'Mind & Behaviour',
    title: 'Prolactin Is the Hormone of Contentment After Achievement. And It Explains Why You Feel Empty After Getting What You Wanted.',
    text: 'After sex, after completing a major goal, after intense creative work — prolactin rises and dopamine drops. This produces the post-achievement flatness after getting the promotion, finishing the project, reaching the goal. The wanting drove you there. Prolactin marks arrival. And arrival feels unexpectedly hollow. Because dopamine — the wanting — has gone quiet. And wanting was what made life feel meaningful. Every person who has achieved a major life goal and then felt strangely empty is experiencing prolactin replacing dopamine. The destination was never where the meaning lived. The meaning was in the moving.',
  },

  // ── UNTOLD INDIAN HISTORY ──
  {
    emoji: '📚', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Nalanda University Was the World\'s First Residential University. And It Was Destroyed So Completely It Was Forgotten for 800 Years.',
    text: 'Nalanda — in modern Bihar — was established in the 5th century AD and operated for approximately 700 years. At its peak it housed 10,000 students and 2,000 teachers from across Asia. It had nine floors of library containing millions of manuscripts. It was burned by Bakhtiyar Khilji\'s forces in 1193 AD. The library allegedly burned for three months. The destruction was so complete that Nalanda was forgotten — its location unknown — until archaeologists rediscovered it in the 19th century. The world\'s first great university — predating Oxford by 600 years — was located in India, erased from history, and then rediscovered.',
  },
  {
    emoji: '📊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'India\'s Economic Decline Under British Rule Is the Most Important and Least Discussed Economic Story of the Last 300 Years.',
    text: 'Economist Utsa Patnaik calculated — using British trade and tax records — that Britain extracted approximately $45 trillion from India between 1765 and 1938. India\'s share of global GDP fell from approximately 25% in 1700 to 4% by 1947. The deindustrialization of India — deliberately destroying Indian textile manufacturing to create a market for British mills — converted India from a manufacturing exporter to a raw material supplier within 50 years. Understanding modern India\'s development challenges without understanding this extraction is like diagnosing a patient while ignoring that someone spent 200 years draining their blood.',
  },
  {
    emoji: '✊', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Indian Freedom Movement Was Not Just Gandhi. There Were Hundreds of Revolutionary Movements History Reduced to a Footnote.',
    text: 'Bhagat Singh — executed at 23 — was a Marxist atheist revolutionary whose "Why I Am an Atheist" is one of the most sophisticated pieces of rationalist writing in Indian intellectual history. Subhas Chandra Bose built the Indian National Army from Indian POWs in Southeast Asia. Bal Gangadhar Tilak declared "Swaraj is my birthright and I shall have it" 20 years before Gandhi\'s non-cooperation. Velu Nachiyar built a suicide bomber unit against the British in 1780 — a woman, two centuries before modern terrorism theorized it. The Indian freedom movement was vast, diverse, violent and nonviolent, religious and atheist, socialist and nationalist simultaneously.',
  },

  // ── HISTORY OF WAR ──
  {
    emoji: '⚔️', cat: 'history', catLabel: 'History',
    title: 'War Is Not the Exception in Human History. It Is the Default State. Peace Is the Anomaly That Requires Active Maintenance.',
    text: 'Historians estimate that in the last 3,400 years of recorded history, humanity has been in a state of complete global peace for exactly 268 years — less than 8% of recorded history. The 20th century also produced the longest period of peace between great powers in modern history after 1945. Steven Pinker\'s data shows per-capita violence has declined dramatically over millennia — not because humans became less violent but because states, laws, trade, and international institutions made violence less rewarding. Peace is not natural. It is an achievement. An ongoing, fragile, expensive achievement that collapses the moment its institutions are neglected.',
  },
  {
    emoji: '🚗', cat: 'history', catLabel: 'History',
    title: 'The First World War — Which Killed 20 Million People — Was Started by a Driver Taking a Wrong Turn.',
    text: 'Archduke Franz Ferdinand\'s assassination in Sarajevo on June 28, 1914 triggered WWI. But the assassination itself almost failed. The first bomb thrown at his car bounced off. His assassin Gavrilo Princip — believing he had failed — went to a nearby deli to eat. Franz Ferdinand later insisted on visiting the bomb victims in hospital. His driver — not knowing the route had changed — turned down the old route, stopped the car to reverse, and stopped directly in front of Princip who was standing on the pavement eating. Princip stepped forward and shot the Archduke. 20 million deaths. 4 empires collapsed. Because a driver took a wrong turn.',
  },
  {
    emoji: '😤', cat: 'upsc', catLabel: 'UPSC Special',
    title: 'The Partition of India in 1947 Was the Largest Forced Migration in Human History. And It Happened in 73 Days.',
    text: 'British lawyer Cyril Radcliffe was given 5 weeks to draw the border between India and Pakistan. He had never been to India before. He used outdated maps. He made decisions affecting 88 million people while sitting in a room in Delhi. When the border was announced — 12 days after independence — people discovered overnight that their village was in a different country. Between 10-20 million people were displaced. Between 200,000 and 2 million were killed. Radcliffe burned his papers and left India immediately, refusing any payment. He said he had no wish to see what he had done.',
  },
  {
    emoji: '🌙', cat: 'history', catLabel: 'History',
    title: 'Van Gogh Sold Exactly One Painting in His Lifetime. Wrote 800 Letters to His Brother. And Changed How Humans See Color Forever.',
    text: 'Vincent van Gogh sold one painting during his life: The Red Vineyard, for 400 francs, four months before his death. He was considered mentally unstable, professionally failed, personally disastrous. He wrote 800 letters to his brother Theo — the most intimate record of an artist\'s inner life ever produced. Today his paintings sell for $80-100 million each. The Starry Night — painted in an asylum while he was involuntarily committed — is one of the most reproduced images in human history. He died unknown. He lives in every poster, every screensaver, every person who has ever looked at a night sky and felt it swirl. Posthumous vindication is history\'s most common form of justice.',
  },


  // ── EPIGENETICS ──
  {
    emoji: '😳', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Your DNA is not your destiny. It\'s a piano. And your life experiences decide which keys get pressed.',
    text: 'For most of the 20th century biology taught a clean story. You inherit genes from your parents. Genes determine traits. End of story. Then epigenetics arrived and blew the whole thing apart. Epigenetics is the study of changes in gene expression that don\'t alter the DNA sequence itself. Think of it this way — your genome is the hardware. Your epigenome is the software running on top of it. Same hardware. Completely different outputs depending on what the software tells it to do. Stress, diet, trauma, love, poverty, meditation — all of these don\'t just affect your mood. They reach into your cells and physically switch genes on and off. You are not just reading your genetic inheritance. You are writing it. Right now. With every choice and every experience. 🧬💡',
  },
  {
    emoji: '🤯', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'The Dutch Hunger Winter proved that starvation can rewrite your grandchildren\'s biology. Without touching their DNA.',
    text: 'In the winter of 1944-45 the Nazi blockade of the Netherlands caused a catastrophic famine. 22,000 people died. The people who survived carried something invisible in their cells. Researchers studying the children and grandchildren of famine survivors decades later found they had higher rates of obesity, diabetes, schizophrenia, and cardiovascular disease — even though they themselves had never experienced famine. Their grandmothers\' starvation had reached across generations and modified how their genes expressed. The hunger didn\'t change their DNA. It changed which genes were switched on. A tragedy that ended in 1945 was still running its biological program in bodies born in 1980. History doesn\'t just live in books. It lives in cells. 🥀🧬',
  },
  {
    emoji: '😤', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Trauma is heritable. Your ancestors\' worst moments may be shaping your worst days.',
    text: 'Rachel Yehuda\'s research on Holocaust survivors and their children is the most documented case of epigenetic trauma inheritance in humans. Children of Holocaust survivors showed altered cortisol levels — the stress hormone — and heightened stress responses even though they never experienced the Holocaust themselves. Their stress regulation system was calibrated differently. Not because of psychological influence from their parents. The effect persisted even in children raised away from their parents. The trauma had been written into the epigenome and passed down like a biological inheritance nobody asked for. You didn\'t choose your anxiety. You may have inherited it from someone who had every reason to be afraid. 😔🧠',
  },
  {
    emoji: '😵', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Epigenetic changes can be reversed. The same mechanism that passes trauma can pass healing.',
    text: 'This is where epigenetics stops being terrifying and starts being extraordinary. If negative experiences can switch genes off — positive ones can switch them back on. Meditation has been shown to produce measurable epigenetic changes — reducing expression of inflammatory genes, increasing expression of genes associated with emotional regulation. Exercise doesn\'t just build muscle — it changes the epigenetic markers on genes associated with metabolism, depression, and cognitive function. Even consistent love and social connection produce measurable epigenetic changes. You are not sentenced to your inheritance. You are the editor of a document your ancestors started. The pen is in your hand. The question is what you write next. 🌱🧬',
  },
  {
    emoji: '🤌', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'A single gene can do completely different things depending on which epigenetic switches are flipped. You are more flexible than you were ever told.',
    text: 'The BDNF gene — Brain-Derived Neurotrophic Factor — is sometimes called the fertilizer gene for the brain. It promotes neuron growth, survival, and connection. In its switched-on form it is associated with learning, resilience, and recovery from depression. In its suppressed form — epigenetically silenced by chronic stress or childhood trauma — it is associated with depression, anxiety, and cognitive decline. The gene is identical in both cases. Same sequence. Same hardware. Completely different output. Exercise switches it on. Chronic stress switches it off. This is why exercise is the most evidence-based antidepressant ever discovered — it is literally rewriting your epigenome in real time. Your brain is not fixed. It is a garden responding to what you put into the soil. 💪🧠',
  },
  {
    emoji: '🥀', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'For UPSC — India\'s intergenerational poverty may have an epigenetic dimension nobody is measuring.',
    text: 'Chronic nutritional deficiency — particularly in the first 1000 days of life from conception to age 2 — produces epigenetic changes that alter metabolism, immune function, and cognitive development in ways that persist into adulthood and potentially across generations. India has 35% of the world\'s stunted children. Stunting is not just a height measurement. It is a marker of epigenetic programming that reduces cognitive capacity, immune resilience, and metabolic efficiency for life. Breaking the poverty cycle is not just an economic problem. It is a biological one. The argument for investing in maternal nutrition and early childhood development is not just moral. It is epigenetic. The returns compound across generations. Every rupee spent on a pregnant woman in poverty is an investment that pays biological dividends for 50 years. 📊',
  },
  {
    emoji: '😤', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Identical twins start life with identical epigenomes. By 50 they are epigenetically completely different people.',
    text: 'Identical twins share 100% of their DNA. At birth their epigenomes are nearly identical. But as they age — different diets, different stress levels, different relationships, different habits — their epigenomes diverge dramatically. By middle age twins who live different lifestyles show measurable differences in gene expression across thousands of genes. One twin who smokes shows epigenetic silencing of tumour-suppressor genes. One who meditates shows different inflammatory gene expression. They started identical. Life wrote them differently. This is the most powerful argument ever discovered that who you become is not written at birth. It is written daily. By what you choose to do with the body and mind you were given. 🧬😳',
  },
  {
    emoji: '😔', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'The food your grandmother ate during pregnancy is influencing your metabolism right now. Nutrition is a conversation across time.',
    text: 'The Överkalix study in Sweden tracked multigenerational health outcomes and found that the nutritional environment of grandparents — particularly during their pre-pubertal growth period — predicted the health and longevity of grandchildren. Grandfathers who had access to abundant food during their slow growth period had grandsons with significantly higher risk of diabetes and cardiovascular disease. The nutritional signal travelled two generations through epigenetic mechanisms. What you eat doesn\'t just affect you. It writes instructions for your grandchildren\'s metabolism. Every meal is a letter to a future person you\'ll never meet. Choose what you write carefully. 🍽🧬',
  },
  {
    emoji: '😵', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Cancer is fundamentally an epigenetic disease as much as a genetic one. And this changes everything about how we might treat it.',
    text: 'Most cancer research focused for decades on genetic mutations — changes to the DNA sequence itself. But it is now clear that epigenetic changes — genes being switched on or off without mutation — are equally central to cancer development. Tumour suppressor genes get epigenetically silenced. Oncogenes — cancer-promoting genes — get epigenetically activated. The revolutionary implication — unlike genetic mutations which are permanent, epigenetic changes are reversible. Epigenetic drugs called HDAC inhibitors and DNA methyltransferase inhibitors can potentially reactivate silenced tumour suppressor genes — turning cancer\'s own stolen switches back against it. The war on cancer has a new front. And it runs on the same mechanism that yoga and meditation affect. The body is more unified than medicine taught us. 🔬💊',
  },
  {
    emoji: '🤯', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'Bees are genetically identical but become queens or workers based entirely on what they eat. Epigenetics built a monarchy out of food.',
    text: 'Every female bee larva has identical DNA. Feed it royal jelly — a protein-rich secretion — and it becomes a queen. Feed it pollen and honey and it becomes a worker. The difference between the sovereign and the servant is not genetic. It is epigenetic — royal jelly activates specific genes that drive queen development and suppresses others. One food. Completely different organism. Same DNA. This is epigenetics at its most dramatic — not a subtle modifier of human health but the entire architect of biological destiny. What you are fed in your earliest moments quite literally determines what you become. This is true for bees. The evidence says it is true for humans too. 🐝👑',
  },
  {
    emoji: '😤', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'For UPSC — India\'s Anganwadi system is an epigenetic intervention whether it knows it or not.',
    text: 'The Integrated Child Development Services — ICDS — scheme operating through Anganwadi centres provides supplementary nutrition, health checkups, and early education to children under 6 and pregnant and lactating women. What this policy is doing at a biological level is intervening in the epigenetic programming window — the first 1000 days — when nutritional and environmental signals have their most lasting impact on gene expression. The policy is sound. The implementation is chronically underfunded and inconsistently delivered. India is sitting on one of the most scientifically validated intervention frameworks in the world and running it at a fraction of the required intensity. The science of epigenetics makes the moral and economic case for fully funding ICDS unanswerable. 📜',
  },
  {
    emoji: '😳', cat: 'epigenetics', catLabel: 'Epigenetics',
    title: 'You are not the passive recipient of your ancestors\' story. You are the author of your descendants\' biology.',
    text: 'Every choice you make today — what you eat, whether you sleep, how you manage stress, whether you exercise, whether you find meaning — is writing epigenetic instructions that will influence people who don\'t exist yet. Your grandchildren will carry biological marks of how you lived. The ancestors you never met wrote code that runs in your cells. You are writing code that will run in cells not yet born. This is the most profound form of responsibility biology has ever discovered. You are not just living your life. You are authoring a biological legacy that will outlast your memory, your name, and everything anyone will ever know about you. Write something worth inheriting. 🧬🌱🔥',
  },

  // ── MICROBIOME ──
  {
    emoji: '😳', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'You are majority microbe. The thing reading this sentence has more bacterial cells than human cells.',
    text: 'For most of human history we thought bacteria were the enemy. Germs. Disease. Something to be killed. Then the Human Microbiome Project mapped the full community of microorganisms living in and on the human body and the entire story inverted. You are not a human with some bacteria living on you. You are a walking ecosystem in which human cells happen to be the largest residents. Your gut alone contains 100 trillion microorganisms representing over 1000 species. They have been living in human bodies for so long and so deeply that they have become functionally inseparable from human biology. Remove them and you don\'t have a cleaner human. You have a broken one. 🧍🦠',
  },
  {
    emoji: '🤯', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'Your gut bacteria produce 95% of your serotonin. The chemical your antidepressants target is mostly made in your intestines. By microbes. Not your brain.',
    text: 'Serotonin — the neurotransmitter associated with mood, contentment, and emotional stability — is produced primarily in the gut by enterochromaffin cells that are directly regulated by gut bacteria. The vagus nerve — a superhighway running from gut to brain — carries these chemical signals upward. Gut bacteria don\'t just assist serotonin production. They regulate it. Germ-free mice — raised with no gut bacteria — show dramatically altered serotonin levels and anxiety-like behaviour that normalises when bacteria are reintroduced. Your mood is downstream of your microbiome. The antidepressant industry built a trillion dollar business targeting the 5% of serotonin in your brain. The 95% in your gut was being shaped by what you ate for breakfast. 😵💊',
  },
  {
    emoji: '😤', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'Gut bacteria influence your food cravings. The microbes living in you are sending signals to your brain telling you what to eat. To feed themselves.',
    text: 'Different bacterial species thrive on different foods. Firmicutes bacteria thrive on fat and sugar. Bacteroidetes on fibre and complex carbohydrates. When you eat a diet high in sugar you feed Firmicutes — they multiply, they produce more signals demanding sugar, you crave more sugar, you feed them more. The craving you experience as your own desire is partly a bacterial lobbying campaign conducted through your nervous system. Mice transplanted with gut bacteria from obese humans become obese. Mice transplanted with bacteria from lean humans stay lean. The bacteria are not just responding to your diet. They are partly writing it. You are not entirely the one deciding what you want for dinner. 🍕🦠',
  },
  {
    emoji: '🥀', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'The microbiome of a person with depression looks measurably different from one without. Transplanting that microbiome causes depression in healthy animals.',
    text: 'Studies comparing gut microbiome composition between depressed and non-depressed individuals consistently find significant differences — lower Lactobacillus and Bifidobacterium, higher pro-inflammatory bacterial species. When researchers transplant gut bacteria from depressed humans into germ-free rats the rats develop depression-like behaviour — anhedonia, reduced exploration, social withdrawal. The gut bacteria caused depressive behaviour in an animal that had never experienced depression. Clinical trials of probiotic supplementation show modest but real improvements in depression scores. The gut-brain axis is not metaphor. It is a bidirectional chemical communication network. And it suggests that some portion of humanity\'s depression epidemic is being grown in the gut. And may be treatable there. 😔🧠',
  },
  {
    emoji: '😵', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'C-section babies have fundamentally different microbiomes than vaginally delivered ones. And the health consequences last decades.',
    text: 'During vaginal delivery a newborn passes through the birth canal and is colonised by the mother\'s vaginal and gut bacteria — particularly Lactobacillus species critical for immune development. C-section babies miss this colonisation entirely. They are first colonised by hospital skin bacteria — Staphylococcus, Streptococcus. Studies show C-section babies have significantly higher rates of asthma, allergies, obesity, type 1 diabetes, and immune disorders throughout life. The microbiome established in the first hours of life sets the immune system\'s baseline calibration for decades. India\'s C-section rate has climbed to 21% nationally — and over 40% in private hospitals. A surgical intervention chosen for convenience or profit is writing immune programming into millions of children. The consequences are silent, statistical, and long. 🏥',
  },
  {
    emoji: '🤌', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'The appendix is not a useless evolutionary leftover. It is a bacterial reservoir that reboots your gut microbiome after illness.',
    text: 'For 150 years the appendix was considered a vestigial organ — evolution\'s abandoned project — useful only for becoming inflamed and killing you. Then researchers noticed something — the appendix is lined with biofilm-forming bacteria and immune tissue. The leading current hypothesis — the appendix is a safe house. During severe gut infections that wipe out intestinal bacteria — cholera, dysentery — the appendix protects a bacterial reserve that can repopulate the gut after the infection clears. Populations without appendixes have higher rates of recurrent gut infections. The organ medicine dismissed as useless for a century turns out to be the gut\'s backup drive. Darwin\'s waste bin contained a survival system. 🦠💾',
  },
  {
    emoji: '😤', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'For UPSC — India\'s antibiotic overuse is creating a microbiome crisis that will outlast the infections it treats.',
    text: 'India is the world\'s largest consumer of antibiotics. Antibiotics don\'t just kill the infection — they carpet bomb the gut microbiome. A single course of broad-spectrum antibiotics can eliminate up to 30% of gut bacterial species. Some never return. India\'s combination of over-the-counter antibiotic availability, agricultural antibiotic use contaminating water and food supply, and low regulatory enforcement is producing populations with chronically depleted microbiomes and rising rates of antibiotic-resistant infections simultaneously. The AMR — Antimicrobial Resistance — crisis that global health organisations warn will kill 10 million people annually by 2050 is being accelerated most rapidly in India. We are winning individual infections and losing the biological war. 💊',
  },
  {
    emoji: '🤯', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'Faecal Microbiota Transplantation — transplanting another person\'s gut bacteria — cures a dangerous infection with 90% success when antibiotics fail at 30%.',
    text: 'Clostridioides difficile infection — C. diff — is a potentially fatal gut infection that antibiotics ironically make worse by wiping out competing bacteria. FMT — taking a healthy donor\'s gut bacteria and transplanting it into a sick patient via capsule or colonoscopy — achieves cure rates of 85-90% for recurrent C. diff where antibiotics achieve 30%. The FDA approved FMT in 2023. You can cure disease by transplanting another person\'s gut ecosystem. Clinical trials are now running FMT for Parkinson\'s disease, autism, depression, obesity, and inflammatory bowel disease. The most cutting edge treatment in medicine is essentially a refined version of something animals have done instinctively for millions of years. The future of medicine smells exactly like what you think it smells like. 💩💊',
  },
  {
    emoji: '😔', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'Babies born to mothers who took antibiotics during pregnancy have altered microbiomes and higher rates of obesity. The gut is shaped before birth.',
    text: 'The womb was long considered sterile. Recent research challenges this — low levels of bacteria appear in placenta, amniotic fluid, and meconium. More importantly the mother\'s gut microbiome during pregnancy influences the infant\'s microbiome through immune signalling and birth colonisation. Antibiotic disruption of the maternal microbiome during pregnancy alters this transfer. Studies show children of antibiotic-treated mothers have measurably different gut bacterial composition and higher metabolic disease rates. The programming begins before the first breath. The gut ecosystem that will run your immune system for life is being assembled while you are still assembling yourself. What the mother eats, takes, and experiences is writing the first draft of the child\'s internal ecology. 🤰🦠',
  },
  {
    emoji: '😤', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'The Western diet is the single greatest assault on human microbiome diversity in history. And we did it in 50 years.',
    text: 'Traditional human diets — across every culture before industrialisation — were high in diverse plant fibres, fermented foods, and minimally processed ingredients that fed diverse bacterial communities. The Western ultra-processed diet delivers almost no bacterial food — high sugar, refined flour, seed oils, preservatives that actively inhibit bacterial growth. Studies comparing gut microbiome diversity between rural African populations eating traditional diets and urban Americans eating Western diets show Americans have lost approximately 30-40% of the bacterial species diversity that characterised human guts for 200,000 years. We reduced our internal ecosystem\'s diversity in 50 years in a way that took 200,000 years to build. Extinction is happening inside you. One processed meal at a time. 🍔🦠',
  },
  {
    emoji: '😳', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'For UPSC — India\'s fermented food traditions are one of the world\'s most sophisticated microbiome maintenance systems. And urbanisation is destroying them.',
    text: 'Idli. Dosa. Dhokla. Kanji. Gundruk. Khalpi. India\'s traditional fermented food landscape represents thousands of years of culture accidentally optimising gut microbiome health. Fermented foods deliver live bacteria directly to the gut and feed existing bacterial communities with prebiotics. Studies show populations consuming traditional Indian fermented diets have significantly higher gut microbiome diversity than urbanised Indians eating processed food. The nutrition transition — rural to urban, traditional to processed — is one of the most significant public health crises India faces. And it is almost entirely unaddressed by policy. India is sitting on a 5000 year old microbiome maintenance system encoded in its cuisine. And it is trading it for Maggi and biscuits. 🫙',
  },
  {
    emoji: '🥀', cat: 'microbiome', catLabel: 'Microbiome',
    title: 'You are never alone. Not even for a single second. You were always a community.',
    text: '38 trillion organisms have lived with you since your first breath. They shaped your mood, your cravings, your immune system, your personality. They will outlive you — colonising the earth around your body long after your consciousness ends. You thought you were a person. You were always a community. The self was always plural. You just didn\'t have the microscope to see it. The boundary between you and not-you is not your skin. It never was. You are an ecosystem that learned to think. And the thinking is more collaborative than you ever imagined. 🦠🌱🔥',
  },

  // ── PSYCHOLOGY OF MONEY ──
  {
    emoji: '😳', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Your brain was built for berries, not compound interest. The mismatch is the source of almost every financial mistake humans make.',
    text: 'The human brain evolved in small hunter-gatherer bands where resources were immediate, tangible, and consumed quickly. There was no concept of compound interest. No stock market. No mortgage. No retirement fund. The financial decisions modern humans make daily — abstract, delayed, probabilistic, involving numbers the brain cannot intuitively grasp — are being processed by neural hardware 200,000 years old that was optimised for an entirely different problem. A brain that is extraordinary at detecting predators, reading social hierarchies, and finding food is genuinely terrible at evaluating index funds, resisting lifestyle inflation, and thinking about money 40 years into the future. 🧠💰',
  },
  {
    emoji: '🤯', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Losing ₹1000 feels twice as painful as gaining ₹1000 feels good. This asymmetry is hardwired. And it is destroying your financial decisions.',
    text: 'Daniel Kahneman and Amos Tversky\'s Prospect Theory — which won Kahneman the Nobel Prize — proved that humans are not rational maximisers. We are loss avoiders. The pain of losing a given amount is psychologically approximately twice as powerful as the pleasure of gaining the same amount. This evolutionary feature made perfect sense — losing your food in winter was fatal, missing an extra berry was merely unfortunate. In modern financial life it is catastrophic. It causes investors to hold losing stocks too long — refusing to sell at a loss even when the rational decision is clear. It causes people to sell winning stocks too early — locking in gains before the pain of potential reversal arrives. Loss aversion is not a character flaw. It is ancient biology running in a world it was not built for. 📉😔',
  },
  {
    emoji: '😤', cat: 'money', catLabel: 'Psychology of Money',
    title: 'You cannot accurately feel the difference between ₹1 crore and ₹10 crore. Your brain processes large numbers the same way. This is why billionaires keep wanting more.',
    text: 'Psychophysics shows that human numerical intuition operates logarithmically not linearly. The felt difference between 1 and 10 feels similar to the felt difference between 10 and 100 and between 100 and 1000. We experience ratios not absolute differences. This means the emotional difference between having ₹10 lakh and ₹1 crore feels roughly similar to the difference between ₹1 crore and ₹10 crore. The brain cannot feel the actual magnitude. Billionaires pursuing their next billion are not being irrational by their own subjective experience — the next billion feels as meaningful as the first million did. The hedonic treadmill runs on logarithms. No amount ever feels like enough because the brain cannot feel enough. It can only feel more or less than before. 😵💰',
  },
  {
    emoji: '🥀', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Every financial upgrade returns you to the same emotional baseline within 3 months. You are buying temporary feelings on permanent budgets.',
    text: 'Hedonic adaptation — the brain\'s tendency to return to a stable emotional baseline after positive or negative events — is the most important and least discussed fact in personal finance. Lottery winners return to their baseline happiness within a year. Paraplegics return to approximately their pre-accident happiness within 2 years. The new car that made you ecstatic in month 1 is background furniture by month 4. The salary raise that felt transformative is the new normal by month 6. The brain adapts. The EMI does not. Modern consumer capitalism is an elaborate machine for selling you hedonic adaptations at prices that compound into financial servitude. The upgrade always feels necessary. The feeling never lasts. The debt always does. 💳😤',
  },
  {
    emoji: '😵', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Wealth is not about how much you earn. It is entirely about the gap between what you earn and what you spend.',
    text: 'Morgan Housel in The Psychology of Money makes the point that wealth is invisible — it is the cars not bought, the holidays not taken, the upgrades not made. The doctor earning ₹50 lakh a year with a ₹48 lakh lifestyle is less wealthy than the teacher earning ₹8 lakh with a ₹5 lakh lifestyle. The gap is wealth. Everything else is income. India\'s upper-middle class is running a lifestyle inflation machine that converts every salary increase into a bigger flat, a better car, international holidays, and private school fees — leaving the actual wealth gap unchanged regardless of how much income grows. The appearance of wealth and the reality of wealth are almost perfectly inversely correlated. The people who look richest are frequently spending the most furiously to maintain the appearance. 🏠😔',
  },
  {
    emoji: '🤌', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Compound interest is the closest thing to magic that mathematics produces. And the brain cannot feel it — which is why almost nobody uses it properly.',
    text: '₹1 lakh invested at 12% annual returns becomes ₹93 lakh in 40 years. Not ₹5.8 lakh — which is what linear thinking produces as an estimate. ₹93 lakh. The majority of that growth happens in the last 10 years. The first 30 years feel almost pointless — the numbers barely move in ways that feel significant. Then the curve goes vertical. The brain experiences time linearly and cannot feel exponential growth intuitively. This is why people start investing at 40 instead of 22. Why they withdraw early to buy something immediately rewarding. Why they don\'t believe the numbers when shown them. Albert Einstein allegedly called compound interest the eighth wonder of the world. Whether he said it or not — the mathematics is correct. The tragedy is that the wonder is available to everyone and almost nobody accesses it because the brain cannot feel what it cannot see. 📈🤯',
  },
  {
    emoji: '😤', cat: 'money', catLabel: 'Psychology of Money',
    title: 'For UPSC — India\'s household savings rate is falling precisely as financial products extracting wealth from households are proliferating.',
    text: 'India\'s gross household savings rate has declined from approximately 23% of GDP in 2012 to under 18% in recent years — even as the financial services industry has grown explosively. ULIPs — Unit Linked Insurance Plans — combine insurance and investment in products that deliver poor returns on both while generating high commissions for sellers. Endowment policies sold as investments deliver returns below inflation. The mis-selling of financial products to households that lack financial literacy is a systemic transfer of wealth from the financially unsophisticated to the financially sophisticated. SEBI\'s push for financial literacy and fee-only advisory models is the regulatory response. It is chronically underfunded and outgunned by a distribution network of millions of agents whose income depends on selling products that serve sellers better than buyers. 📊',
  },
  {
    emoji: '🤯', cat: 'money', catLabel: 'Psychology of Money',
    title: 'The mental accounting bias means you treat ₹500 found on the street differently from ₹500 earned. Money has no memory. Your brain gives it one. And it costs you.',
    text: 'Richard Thaler\'s mental accounting — another Nobel Prize winning insight — shows that humans categorise money into psychological buckets that don\'t exist in reality. Bonus money feels like free money and gets spent frivolously even though it is identical to salary money. Tax refunds feel like gifts from the government and get spent rather than saved even though they represent your own over-withheld earnings. Casino winnings feel like house money and get gambled recklessly. The rupee is the rupee. Its origin is financially irrelevant. But the brain assigns it a biography and makes decisions based on that invented history. Every time you spend a bonus on something you wouldn\'t spend salary on — mental accounting is picking your pocket. 💸😳',
  },
  {
    emoji: '😔', cat: 'money', catLabel: 'Psychology of Money',
    title: 'The pain of paying is real, neurological, and measurable. Credit cards exploit it by making payment invisible. The result is spending 12-18% more than cash buyers.',
    text: 'Drazen Prelec\'s research at MIT showed that paying with cash activates the insula — a brain region associated with pain and disgust. The physical act of handing over money creates a real psychological cost that moderates spending. Credit cards eliminate this pain entirely — the payment is abstract, delayed, and invisible at the point of purchase. Studies consistently show credit card users spend 12-18% more than cash users for identical purchases. Tap-to-pay and UPI make it even more frictionless — the payment requires less attention than unlocking a phone. The financial industry\'s innovation is not just convenience. It is the systematic removal of the brain\'s natural spending brake. Every friction reduction in payment technology is a carefully engineered attack on your financial self-control. And it is working. 💳🧠',
  },
  {
    emoji: '😤', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Social comparison is the engine of lifestyle inflation. And social media turned that engine into a rocket. Pointed at your savings.',
    text: 'Humans are relentlessly social comparers — we evaluate our financial position not in absolute terms but relative to our reference group. This was functional in small tribal bands where the reference group was 150 people you actually knew. Instagram gave everyone a reference group of millions — curated to show the wealthiest, most aspirational, most consumption-heavy moments of billions of lives. The result — reference group inflation. The car that would have satisfied previous generations doesn\'t satisfy today because the reference point is not your neighbourhood — it is the filtered highlight reel of global upper class consumption served algorithmically to maximise envy. The Joneses used to live next door. Now they live in your phone. And they have a yacht. 📱💸',
  },
  {
    emoji: '😵', cat: 'money', catLabel: 'Psychology of Money',
    title: 'For UPSC — India\'s FOMO-driven investing culture is efficiently transferring wealth from retail participants to institutional ones.',
    text: 'The democratisation of investment through apps like Zerodha and Groww has brought millions of first-time investors into markets — largely young, largely financially under-educated, largely drawn in during the post-COVID bull market. Options trading — instruments designed for sophisticated institutional hedging — are now the most traded instruments in Indian markets by volume with retail participation at unprecedented levels. SEBI studies show 89% of individual options traders lose money. The combination of gamification of investment platforms, social media investing influencers, and behavioural biases including FOMO and overconfidence is efficiently transferring wealth from retail participants to institutional ones. Financial inclusion without financial education is not empowerment. It is a more efficient extraction mechanism. 📉',
  },
  {
    emoji: '🥀', cat: 'money', catLabel: 'Psychology of Money',
    title: 'The most important financial decision most Indians will ever make is not stocks or real estate. It is who they marry. And nobody teaches this.',
    text: 'Financial compatibility — shared values around spending, saving, risk tolerance, and financial goals — is one of the strongest predictors of both marital satisfaction and financial outcomes. Financial disagreement is consistently the leading cause of divorce across cultures. Divorce is one of the most financially catastrophic events that can happen to a middle-class family — asset division, legal costs, duplicate household expenses, and the compounding effects of interrupted savings. In India where marriage involves not just two people but two families — dowry pressure, family financial expectations, joint family obligations — the financial complexity is multiplied. The average Indian receives approximately zero education on financial compatibility as a criterion for partner selection. The most consequential financial decision is being made on the basis of everything except financial literacy. 💍💸',
  },
  {
    emoji: '🤌', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Time is the only financial asset that cannot be recovered. And it is the only one almost nobody accounts for correctly.',
    text: 'Every financial decision involves an implicit trade of time. The EMI you pay for 5 years is 5 years of future income already spent. The career you chose for salary over meaning is time sold at a negotiated rate. The business not started at 25 because of risk aversion is a compounding clock not started. Money is renewable — you can always earn more. Time is the only strictly non-renewable resource in a human life. Every financial decision is ultimately a time decision. The question is never just what does this cost. It is always — what does this cost in the only currency that cannot be refilled. ⏰💰',
  },
  {
    emoji: '😳', cat: 'money', catLabel: 'Psychology of Money',
    title: 'Money is not the goal. It never was. It is a proxy. And the pursuit of it permanently consumes the time in which security, freedom, and love could have been directly experienced.',
    text: 'The research on money and happiness converges on the same finding across cultures. Up to a certain threshold — roughly ₹6-8 lakh annual income in an Indian urban context — more money reliably produces more wellbeing by reducing material stress. Beyond that threshold the relationship becomes weak, inconsistent, and eventually reverses for some people. The billionaire is not ten thousand times happier than the comfortable middle class professional. What money beyond sufficiency buys is not happiness. It is options. And options are only valuable if you have the wisdom to choose well among them. The goal was never the money. The goal was always what you believed the money would make possible. Figure out what that actually is. Then find the most direct path to it. 💰🌅🔥',
  },

  // ── TRIBALISM ──
  {
    emoji: '😳', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Tribalism is not a flaw in human nature. It is the most successful survival feature evolution ever produced. Running 21st century democracies on 50,000 year old software.',
    text: 'For 200,000 years humans lived in bands of 50-150 people. Your tribe was everything — your food supply, your protection, your identity, your meaning. Loyalty to the tribe was not optional. Betraying the tribe was death. Trusting strangers was dangerous. The psychological machinery evolution built for this world — fierce in-group loyalty, automatic out-group suspicion, identity fusion with the group, willingness to sacrifice for members and harm non-members — was not a bug. It was the feature that kept your ancestors alive long enough to produce you. The problem is that this machinery does not have an off switch. It runs continuously. In voting booths. In newsrooms. In parliaments. In comment sections. The tribal brain was built for 150 people. It is now running nations of a billion. 🧠🔥',
  },
  {
    emoji: '🤯', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Henri Tajfel proved in 1971 that you need absolutely nothing in common with a group to start discriminating in its favour. Being told you are in a group is sufficient.',
    text: 'Tajfel\'s minimal group experiments are the most disturbing simple experiments in social psychology. Participants were divided into groups based on literally nothing — a coin flip, an arbitrary preference for one painter over another, a random number. They had never met their group members. They would never meet them. They shared nothing. Within minutes participants were allocating resources to favour their arbitrary group over the other at the cost of overall efficiency. They would rather their group get less if it meant the other group got even less. The sacrifice of absolute gain for relative advantage — making sure we beat them even if we all do worse — is tribal logic in its purest form. You don\'t need history. You don\'t need culture. You don\'t need shared struggle. You need one thing. Us. And then automatically — them. 😳👥',
  },
  {
    emoji: '😤', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'The brain processes in-group members as individuals and out-group members as a homogeneous mass. This neural difference is the foundation of dehumanisation.',
    text: 'fMRI studies show that when we look at in-group members the medial prefrontal cortex — the region associated with thinking about individuals with complex inner lives — activates strongly. When we look at out-group members — particularly strongly dehumanised out-groups — it activates weakly or not at all. The brain literally processes them differently. Not as different individuals but as an undifferentiated mass. Every genocide in history was preceded by systematic dehumanisation — Jews as rats in Nazi propaganda, Tutsis as cockroaches in Rwandan radio broadcasts, Muslims as termites in certain Indian political rhetoric. The language is not incidental. It is doing specific neural work — suppressing the individual-recognition circuitry that makes killing feel wrong. The path from tribal psychology to mass murder runs through a specific brain region going quiet. 💀🧠',
  },
  {
    emoji: '🥀', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Oxytocin — the love hormone — is simultaneously the hate hormone. The same molecule bonds you to your tribe and prepares you to harm people outside it.',
    text: 'Oxytocin studies show that oxytocin increases generosity, trust, and cooperation within groups while simultaneously increasing suspicion, aggression, and discrimination toward out-groups. The more intensely you love your family the more you fear strangers. The more deeply you bond with your nation the more readily you dehumanise its enemies. The neurochemistry of a mother holding her newborn and the neurochemistry of a soldier killing for his country involve the same molecule doing the same thing — maximising the survival of the in-group. Evolution did not separate love from hatred. It built them from the same material. Anyone promising that more love will end tribalism has not read the neuroscience. 😔🧬',
  },
  {
    emoji: '😵', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Political identity has replaced religious identity as the primary tribal marker. And unlike religion — it punishes any deviation with instant excommunication.',
    text: 'Lilliana Mason\'s research shows that political identity has become a mega-identity that absorbs all other identities. Your politics now predicts your music taste, your food preferences, your friendship network, where you live, who you marry, and what you find funny. This identity fusion means that political disagreement is no longer a difference of opinion about policy. It is an attack on the self. And the tribal brain responds to attacks on the self with the same ferocity as physical threats. Compromise becomes impossible not because people are stupid but because compromise with the enemy tribe feels like self-annihilation. Democracy was designed for people who could disagree about policies while sharing a civic identity. It is being run by people for whom political disagreement is existential warfare. 🗳😤',
  },
  {
    emoji: '🤌', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'The algorithm didn\'t create tribalism. It gave tribalism a rocket. Outrage is the highest-engagement human emotion and the algorithm found the button.',
    text: 'Outrage requires a transgressor. A transgressor requires a group that has been wronged. A group that has been wronged requires an enemy. The algorithm optimising for engagement is therefore optimising for tribal activation — because tribal content generates more clicks, more shares, more comments, more time on platform than any other content type. Facebook\'s own internal research — revealed in the Facebook Papers — showed their algorithms were radically amplifying divisive content because divisive content was engaging content. They knew. They chose growth. Every time you feel outraged by something you saw online you are experiencing the output of an optimisation function that discovered outrage was the highest-engagement human emotion and built an engine to produce it at industrial scale. 📱🔥',
  },
  {
    emoji: '😤', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'For UPSC — India\'s caste system is tribalism institutionalised across 3000 years into a hierarchy with theological justification.',
    text: 'Caste functions as a tribal identity system with several features that make it uniquely resistant to democratic dissolution. It is birth-assigned — you cannot choose to leave. It is theologically justified — divine order not mere tradition. It is endogamous — marriage within the group reinforces it generationally. It is occupationally coded — economic identity fused with social identity. And crucially — it has been politically weaponised. Vote bank politics in India operates primarily on caste mobilisation — delivering blocs of votes in exchange for group-specific benefits. This creates a perverse incentive — politicians who reduce caste salience lose their mobilisation base. The democratic system that should dissolve caste identity has instead institutionalised it as the primary unit of political organisation. India is running a 21st century democracy on a 3000 year old tribal architecture that every political actor has a personal incentive to maintain. ⚖️',
  },
  {
    emoji: '🤯', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Motivated reasoning means more information does not reduce tribalism. It increases it. Educated tribal members are more dangerous than ignorant ones.',
    text: 'Dan Kahan\'s research shows that higher scientific literacy and numeracy does not reduce politically motivated reasoning — it increases it. Smart people are better at finding reasons to believe what their tribe believes. They construct more sophisticated justifications. They cherry-pick evidence more effectively. They are more persuasive to other tribe members. The fantasy of the information age was that more facts would produce more consensus. The reality — facts are processed through tribal identity filters and emerge as ammunition for pre-existing positions. Giving a highly educated tribal partisan more information does not move them toward truth. It makes them a more effective warrior for their tribe\'s version of truth. The solution to tribalism is not education. It is identity restructuring. And nobody knows how to do that at scale. 🎓😵',
  },
  {
    emoji: '😔', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'Humans are capable of expanding the circle of tribal identity. It has happened before. It requires specific conditions that modern politics is systematically destroying.',
    text: 'The circle of who counts as us has expanded dramatically across human history — from band to village to city-state to nation to, imperfectly, humanity. The conditions that expand the circle: contact with out-group members as individuals rather than abstractions, shared superordinate goals that require cooperation across group lines, institutions that create cross-cutting identities. The conditions that contract it: political entrepreneurs who profit from division, media ecosystems that make out-group members abstract and monstrous, economic anxiety that makes zero-sum thinking feel rational. Modern political economies are systematically producing the contracting conditions and dismantling the expanding ones. The circle is not inevitably expanding. It can shrink. It is shrinking. 🌍😤',
  },
  {
    emoji: '🥀', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'For UPSC — India\'s founding constitutional vision was explicitly anti-tribal. And that project is now under the most sustained assault it has ever faced.',
    text: 'The Indian Constitution is fundamentally a document of anti-tribalism — universal suffrage regardless of caste or religion, secularism, fundamental rights that protect individuals against group persecution, reservations designed to integrate marginalised groups into mainstream institutions. Ambedkar explicitly argued that the greatest threat to Indian democracy was not external enemies but internal tribal loyalties — caste and religious identities that would be mobilised against the civic national identity the Constitution was trying to build. His warning in his final speech to the constituent assembly — that India must place constitutional morality above popular morality, that hero worship leads to dictatorship, that social democracy must accompany political democracy — reads today not as history but as diagnosis. 📜',
  },
  {
    emoji: '😳', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'The most successful anti-tribal intervention in history was the Robbers Cave experiment. And its lesson is both hopeful and terrifying.',
    text: 'Muzafer Sherif\'s experiment took 22 ordinary American boys to a summer camp, divided them into two groups, and within days had them engaging in raids, burning each other\'s flags, and contemplating violence — through nothing but group competition. Then he tried to reduce the conflict. Presenting information about the other group\'s good qualities — didn\'t work. Forced contact — made it worse. What worked — superordinate goals. A water supply sabotage that required both groups to cooperate to fix. Shared problems that made the other tribe necessary rather than threatening. The formula for reducing tribalism is not awareness campaigns or diversity training. It is shared struggle toward shared goals that cannot be achieved without the other tribe. Modern political incentives point in precisely the opposite direction. 🏕😤',
  },
  {
    emoji: '😤', cat: 'tribalism', catLabel: 'Tribalism',
    title: 'You are tribal. Right now. Unavoidably. The question is which tribes you choose and whether you can catch the moment your tribal brain starts doing your thinking for you.',
    text: 'The most dangerous tribal members are the ones who believe they have transcended tribalism. The person who believes they are purely rational, purely objective, purely evidence-driven — is simply a tribal member whose tribe has convinced them that rationality is their identity. And they will defend that identity with exactly the ferocity the tribal brain deploys for any threatened identity. The beginning of wisdom about tribalism is not escaping it. It is seeing it operating in yourself with the same clarity you see it operating in others. That clarity is rare. It is also the only foundation from which anything better can be built. The examined tribal life is the only one worth living. 🏹🧠🔥',
  },

];

// ── Categories ──
const CATEGORIES = [
  { id: 'all',        label: '✨ All' },
  { id: 'physics',    label: '⚡ Physics' },
  { id: 'chemistry',  label: '🧪 Chemistry' },
  { id: 'biology',    label: '🧬 Biology' },
  { id: 'space',      label: '🌌 Space' },
  { id: 'earth',      label: '🌍 Earth' },
  { id: 'body',       label: '🫀 Human Body' },
  { id: 'upsc',       label: '🇮🇳 UPSC Special' },
  { id: 'maths',      label: '♾️ Maths' },
  { id: 'mind',       label: '🧠 Mind' },
  { id: 'ai',         label: '🤖 AI & Tech' },
  { id: 'philosophy', label: '🏛️ Philosophy' },
  { id: 'history',    label: '📜 History' },
  { id: 'epigenetics', label: '🧬 Epigenetics' },
  { id: 'microbiome',  label: '🦠 Microbiome' },
  { id: 'money',       label: '💸 Psychology of Money' },
  { id: 'tribalism',   label: '🏹 Tribalism' },
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
    const catMatch    = currentCat === 'all' || f.cat === currentCat;
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

  // ── When viewing all categories, render separate sections per category ──
  if (currentCat === 'all' && !q) {
    const catOrder = CATEGORIES.filter(c => c.id !== 'all');
    catOrder.forEach(({ id, label }) => {
      const catFacts = filtered.filter(f => f.cat === id);
      if (catFacts.length === 0) return;

      // Section header
      const section = document.createElement('div');
      section.className = 'ff-section';
      section.innerHTML = `<h2 class="ff-section-title">${label}</h2>`;
      grid.appendChild(section);

      // Section card grid
      const sectionGrid = document.createElement('div');
      sectionGrid.className = 'ff-section-grid';
      catFacts.forEach((f, i) => {
        const card = document.createElement('div');
        card.className = 'ff-card glass-card';
        card.dataset.cat = f.cat;
        card.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
        card.innerHTML = `
          <div class="ff-card-header">
            <span class="ff-card-emoji" aria-hidden="true">${f.emoji}</span>
            <span class="ff-card-cat">${f.catLabel}</span>
          </div>
          <div class="ff-card-title">${f.title}</div>
          <div class="ff-card-text">${f.text}</div>
        `;
        sectionGrid.appendChild(card);
      });
      grid.appendChild(sectionGrid);
    });
    return;
  }

  // ── Single category or search: flat grid ──
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
      <div class="ff-card-title">${f.title}</div>
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
