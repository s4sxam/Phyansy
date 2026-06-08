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
{
    emoji: '🗣️', cat: 'upsc', catLabel: 'UPSC',
    title: 'ORIGINS OF LANGUAGE & WRITING — THE INVENTION THAT MADE USHUMAN.',
    text: '😳 Language didn\'t evolve gradually. It may have appeared almost overnight in
evolutionary terms. And nobody knows why.
For 200,000 years Homo sapiens existed. Made tools. Buried dead. Used fire. Then roughly
50,000-70,000 years ago something happened — cave paintings, jewellery, long distance
trade, symbolic thought, complex social structures — all exploding simultaneously.
Anthropologists call it the Great Leap Forward. The leading hypothesis is a single genetic
mutation — possibly in the FOXP2 gene — that rewired the brain for recursive syntax. The
ability to say "I think that she believes that he knows that they want" — embedding thoughts
inside thoughts infinitely — may have been a single mutation that changed everything.
Language didn't slowly develop. It may have switched on. 🧬💡. ', 
  },
];

// ── Categories ──
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
