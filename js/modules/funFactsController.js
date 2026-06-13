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

  // ── PSYCHOLOGY: MIND VS YOU ──
  {
    emoji: '😶', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'The More People Who Witness Your Emergency, the Less Likely Any of Them Are to Help You.',
    text: 'On March 13, 1964, Kitty Genovese was stabbed to death over 35 minutes outside her apartment in Queens, New York. 38 neighbors heard her screaming. Nobody called the police until she was dead. The murder triggered decades of research that produced one of the most disturbing findings in social psychology — the bystander effect. In controlled experiments, 85% of people helped a stranger having a seizure when they were alone. When 5 bystanders were present, only 31% helped. The mechanism is dual: diffusion of responsibility — each person assumes someone else will act — and pluralistic ignorance — each person looks at the calm faces of others and concludes there must not be an emergency. The crowd itself becomes evidence that nothing is wrong. Every additional witness doesn\'t increase the chance of rescue. It halves it. 😶🧍',
  },
  {
    emoji: '🥀', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'You Don\'t Judge an Experience by How It Felt on Average. You Judge It by One Moment and How It Ended.',
    text: 'Daniel Kahneman — Nobel Prize, 2002 — ran a now-famous experiment where participants submerged their hand in painfully cold water at 14°C for 60 seconds. Then a second trial: 60 seconds at 14°C followed by 30 additional seconds at 15°C — slightly less painful. The second trial was objectively worse. More total pain, more total time. But 80% of participants preferred to repeat it. The slightly warmer ending rewrote the entire experience. Kahneman called this the Peak-End Rule — your experiencing self lives through every moment but your remembering self, the one that actually makes decisions, only logs two data points: the emotional peak and the ending. A perfect vacation ruined by a missed flight feels like a bad vacation. A brutal medical procedure that ends gently feels more tolerable than one that ends harshly at the same peak intensity. You are not the sum of your experiences. You are an editor who kept two frames and built an autobiography from them. 📽🔚',
  },
  {
    emoji: '🦍', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'When You\'re Focused on Something, You Are Effectively Blind to Everything Directly in Front of You. Even a Man in a Gorilla Suit.',
    text: 'In 1999, psychologists Christopher Chabris and Daniel Simons showed participants a video of people passing basketballs and asked them to count passes. 50% failed to notice a person in a full gorilla suit who walked into frame, beat their chest, and walked out over 9 full seconds. The gorilla was not hidden. It walked through the center of the screen. In a follow-up study, professional radiologists — people specifically trained to spot things others miss — failed to notice a small image of a gorilla embedded in an x-ray scan 83% of the time. Your visual cortex is not a camera. It is a task-completion system that actively suppresses information irrelevant to your current focus. You are not seeing the world and then choosing what to attend to. Your brain is deciding what world to show you and hiding the rest. You have never once seen an unedited version of reality. 🦍👁',
  },
  {
    emoji: '🎰', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'Social Media Isn\'t Accidentally Addictive. It Was Built Using the Most Powerful Reward Schedule Behavioral Science Has Ever Discovered.',
    text: 'For [Digital Life]: B.F. Skinner discovered in the 1950s that variable ratio reinforcement — rewards that arrive unpredictably — produces the highest rate of compulsive behavior and the greatest resistance to quitting in any organism ever tested. Not consistent rewards. Unpredictable ones. The exact mechanism behind slot machine addiction. When you open Instagram, sometimes there\'s something exciting, sometimes nothing — that unpredictability is not a design flaw. It\'s the product. Nir Eyal published the complete psychological playbook in "Hooked" in 2014. In 2017, former Facebook president Sean Parker publicly admitted the platform was built to "consume as much of your time and conscious attention as possible" by exploiting "a vulnerability in human psychology." Former president of Pinterest Tim Kendall testified before Congress in 2021 that the products were designed around compulsion. You brought a brain shaped by 200,000 years of savanna survival. They brought 50 years of behavioral psychology and a trillion dollars of engineering. You were outgunned before you downloaded the app. 🎰🧠',
  },
  {
    emoji: '💀', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'Ernest Becker Argued Everything Humans Do Is a Terror Response to Knowing We Are Going to Die. Five Hundred Experiments Say He Was Right.',
    text: 'Becker\'s "The Denial of Death" won the Pulitzer Prize in 1974 — two months after he died of cancer at 49. He argued that human beings are unique among animals in knowing they will die and being neurologically unable to accept it. Every human system — religion, nationalism, creative legacy, status hierarchies, romantic love — is primarily a symbolic immortality project. Terror Management Theory, built from Becker\'s framework by Greenberg, Pyszczynski, and Solomon in the 1980s, has now generated over 500 peer-reviewed experiments. When people are reminded of their mortality — in ways as subtle as walking past a funeral home — they become measurably more nationalistic, more defensive of their worldview, more hostile toward people who are different, more generous toward causes that promise legacy. A 2004 study showed death reminders made American participants significantly more supportive of military action with no direct security rationale. Every political rally. Every tribal conflict. Every desperate bid for significance. Running from the same thing. 💀🏛',
  },
  {
    emoji: '🤲', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'Your Body Is Making Your Decisions. And You Have No Idea.',
    text: 'For [Everyday Life]: This is not metaphor. In John Bargh\'s 2008 study, participants who briefly held a warm cup of coffee rated a stranger as having a "warmer" personality than participants who held an iced coffee — despite meeting the exact same person, reading the exact same description. In a 2010 study by Ackerman et al., people reviewing job applications while holding heavy clipboards rated candidates as "more serious and stable" than those reviewing identical applications on light clipboards. People who washed their hands after making a difficult moral decision showed measurably less post-decision regret — the physical cleaning literally cleaned the psychological discomfort. Your brain processes abstract concepts like trust, importance, and moral weight by borrowing circuits from the physical systems that process temperature, actual mass, and cleanliness. You believe you\'re reasoning your way to judgments. Your hands are doing half the work. They have been doing it for your entire life without once informing you. 🤲🌡',
  },
  {
    emoji: '🎨', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'If You Reward a Child for Doing Something They Already Love Doing for Free, They Will Stop Loving It.',
    text: 'In 1973, Stanford psychologist Mark Lepper ran a study with preschoolers who already showed strong natural interest in drawing. One group was told in advance they\'d receive a certificate for drawing — an expected award. A second group got a surprise certificate afterward. A third got nothing. Two weeks later, the expected-award group spontaneously spent significantly less time drawing than they had before the experiment. The other two groups were unchanged. Lepper called this the overjustification effect — external rewards don\'t amplify intrinsic motivation, they overwrite it. The child\'s brain shifts its explanation for the behavior from "I love this" to "I do this for the reward." Remove the reward and the original love is gone with it. Every parent who pays their child for reading. Every company that bonuses creativity. Every school that gives trophies for curiosity. All of them running the same experiment Lepper ran in 1973. All of them getting the same result. 🎨💸',
  },
  {
    emoji: '📝', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'Your Brain Treats Unfinished Tasks as Open Emergencies. It Will Not Stop Until You Give It a Plan.',
    text: 'Soviet psychologist Bluma Zeigarnik noticed in 1927 that waiters had perfect recall of orders while the table was still eating — and forgot them almost immediately once the bill was paid. She tested this formally: interrupted tasks were remembered 90% better than completed ones. The brain treats incomplete goals as open loops, keeping them active in working memory using systems originally designed to prevent you from abandoning survival-critical activities midway. Every unstarted project, every conversation you\'ve been avoiding, every draft sitting unsent — actively competing for cognitive bandwidth right now. But the closure doesn\'t require completion. David Allen\'s 2001 research demonstrated that writing a task down with a specific concrete next action is sufficient to convince your brain the loop is managed — the background noise stops. Your brain doesn\'t want the thing finished. It wants proof that you won\'t forget it. Give it one sentence and it will leave you alone. 📝🔔',
  },
  {
    emoji: '🌑', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'You Are Not Who You Think You Are. You Are Who Your Situation Made You.',
    text: 'The Fundamental Attribution Error — identified by Lee Ross in 1977 and replicated more consistently than almost any other finding in social psychology — is this: humans systematically overestimate the role of character and underestimate the role of situation when explaining behavior. When someone cuts you off in traffic you conclude they are aggressive. You don\'t hypothesize that they\'re rushing to a hospital. When you cut someone off, you know your reason. The asymmetry is total and invisible. In Darley and Batson\'s 1973 study, seminary students preparing to give sermons on the parable of the Good Samaritan walked directly past a person slumped in a doorway — because they were told they were running late. Compassion training. Rushing. No compassion. Milgram\'s subjects were not sadists. Zimbardo\'s guards were not psychopaths. They were people in situations that made cruelty the path of least resistance. Character is not what you are. Character is what you are when the situation makes goodness easy. The line between who you are and who you fear you might be is thinner than your circumstances, your century, and your luck. Be careful about what you\'re actually proud of. 🌑🪞',
  },

  // ── PSYCHOLOGY: WIN ARGUMENTS ──
  {
    emoji: '🧱', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'Showing Someone Facts That Contradict Their Beliefs Doesn\'t Change Their Mind. It Makes Them Believe Harder.',
    text: 'Political scientists Brendan Nyhan and Jason Reifler in 2010 gave participants factual corrections to misinformation they genuinely believed. The corrections didn\'t reduce the false beliefs. They strengthened them. This is the backfire effect — when a belief is tied to identity, contradictory evidence is processed as a personal attack, triggering defensive neural responses identical to physical threat. The amygdala fires. The prefrontal cortex — the part that actually updates beliefs — partially shuts down. Yale law professor Dan Kahan spent 10 years and thousands of participants demonstrating that higher scientific literacy made this worse — smarter people are simply better at generating reasons to dismiss inconvenient evidence. You provided better facts and made them more wrong. You cannot win an argument by being correct. Correctness is often the most efficient way to make someone more certain. The goal was never to defeat the argument. The goal is to make the person feel safe enough to change their mind. Those are completely different missions. 🧱💥',
  },
  {
    emoji: '🧠', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'The Most Powerful Way to Change Someone\'s Mind Is to Ask Questions Until They Walk Themselves Into Your Position.',
    text: 'This is not modern. Socrates destroyed the beliefs of Athenian generals, priests, and politicians in 470 BC using a single technique — ask someone to define their position, then ask clarifying questions until they discover the contradictions themselves. Modern psychology calls this motivational interviewing, developed by psychologist William Miller in 1983 and now the gold standard in clinical treatment for addiction, eating disorders, and resistant behavior change. The critical mechanism is self-generated reasoning — beliefs you arrived at through your own logic are dramatically more durable than beliefs adopted because someone told you to. A 2012 meta-analysis of 119 clinical trials confirmed its effectiveness specifically because the person constructs the case for change themselves. You don\'t argue. You ask "what would have to be true for that to work?" and "can you walk me through the mechanism?" and let them find the floor under their own position. You are not winning the argument. You are making them win it for you. 🧠🎯',
  },
  {
    emoji: '⚔️', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'The Fastest Way to Destroy an Opponent\'s Argument Is to First Make It Stronger Than They Did.',
    text: 'Most people attack the weakest version of an opposing position — a straw man. It feels decisive. It convinces nobody. Steel-manning requires you to articulate the opposing argument at its most powerful — better than the person did — before engaging it. Three things happen simultaneously: you appear confident enough not to need cheap shots, your opponent drops defensiveness because they feel genuinely heard, and everyone watching sees you\'re engaging honestly. Political scientist James Fishkin\'s deliberative polling experiments across 28 countries consistently showed that when participants felt their position was heard and taken seriously — not dismissed — they showed measurably greater willingness to update their beliefs. The person least likely to move is the person who feels attacked. The person most likely to move is the person who feels understood. Make their argument stronger. Then you don\'t just win the debate. You earn the right to be believed next time. ⚔️🏆',
  },

  // ── PSYCHOLOGY: PEOPLE WHO AREN'T THINKING CLEARLY ──
  {
    emoji: '📊', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'Statistics Don\'t Move People. One Person Does.',
    text: 'Paul Slovic at the University of Oregon in 2007 showed donors a photograph and story of one starving child named Rokia from Mali. A second group saw statistics about millions starving across Africa. A third group saw both — the story and the statistics combined. The group that gave most: only Rokia\'s story. Adding accurate statistics about millions of suffering people actually reduced donations compared to the story alone. This is psychic numbing — the brain\'s emotional response to suffering does not scale with numbers. One person is a tragedy. Eight million people is a data point. The brain spent 200,000 years in groups of 50 to 150 people. It processes individuals. It was never designed to emotionally engage with a million of anything. If you want to communicate something that actually changes behavior — find the one person it lives inside. Logic reaches minds. A single face reaches the decision-maker. 📊➡️❤️',
  },
  {
    emoji: '🔦', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'Most People Believe They Understand Their Own Position Until You Ask Them to Explain It Step by Step.',
    text: 'For [Everyday Conversations]: Psychologists Leonid Rozenblit and Frank Keil at Yale in 2002 asked participants to rate their understanding of everyday objects — zippers, toilets, bicycles. Confidence was high. Then they asked for detailed step-by-step explanations of how each object actually works. Confidence collapsed immediately. Participants spontaneously lowered their own ratings after trying to explain. Philip Fernbach at CU Boulder extended this to political beliefs in 2013 — asking people to explain the causal mechanisms behind their strongly held policy positions, not just whether they agreed, but exactly how the policy would produce its stated effects, significantly moderated their extremism and reduced certainty. The illusion of explanatory depth — confusing familiarity with understanding — is universal. The cure is not confrontation. It is the simple question: can you explain to me exactly how that works? Don\'t tell them they\'re wrong. Ask them to walk you through it. The gap does the work for you. 🔦🕳',
  },
  {
    emoji: '🏗', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'The Brain Cannot Emotionally Engage With Abstractions. Every Idea That Changed Behavior Arrived Attached to Something Physical.',
    text: 'George Lakoff — cognitive linguist at Berkeley — spent four decades demonstrating that all abstract reasoning is built on physical metaphor borrowed from the body. "Inflation is rising." "Tensions are heating up." "He\'s at a crossroads." Without a physical anchor, abstract information is processed in the prefrontal cortex and produces understanding. Understanding does not produce behavior change. Behavior change requires the limbic system — which runs on sensory and emotional experience, not propositions. This is precisely why Richard Thaler and Cass Sunstein\'s nudge research — which won Thaler a Nobel Prize in 2017 — works entirely through concrete environmental changes and not through arguments. Default pension enrollment saves more retirements than any financial literacy campaign ever has. The shape of a cafeteria produces better food choices than nutritional lectures. The mechanism is identical. Don\'t explain the principle. Change what they can see, touch, or feel. The brain moves toward what\'s concrete and away from what\'s merely true. 🏗🎯',
  },

  // ── PSYCHOLOGY: WIN TRUST ──
  {
    emoji: '🎁', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'If You Want Someone to Like You, Don\'t Do Them a Favor. Ask Them for One.',
    text: 'Benjamin Franklin noticed this in the 1730s — he won over a hostile rival in the Pennsylvania legislature by asking to borrow a rare book from his personal library. After returning it with a polite note, the man was friendly for the rest of his life. Franklin wrote: "He that has once done you a kindness will be more ready to do you another than he whom you yourself have obliged." In 1969 psychologists Jon Jecker and David Landy confirmed it experimentally — participants asked to return money by an experimenter rated him significantly more likeable than participants who were given money by him. The mechanism is cognitive dissonance — the brain resolves the contradiction "I helped someone I don\'t particularly care about" by deciding "I must actually like them, otherwise why would I have helped?" Your brain builds a story around your behavior, not the other way around. Don\'t try to impress. Ask for something small and specific. Let their brain write the rest of the story. 🎁🔁',
  },
  {
    emoji: '🥺', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Making a Visible Mistake in Front of Someone — If You\'re Already Perceived as Competent — Makes Them Trust You More Than If You\'d Been Perfect.',
    text: 'Psychologist Elliot Aronson in 1966 played participants recordings of two quiz contestants. One was superior — answering 92% of questions correctly. One was average — 30%. In some versions, each contestant then accidentally spilled coffee on themselves. Participants rated the superior contestant who spilled coffee the most likeable of all four conditions — significantly more than the same contestant who was flawless. The average contestant who spilled coffee was rated least likeable of all. The pratfall only helps after you\'ve established competence. This is because perfection reads as performance — and performance triggers the brain\'s instinct to detect concealment and deception. A small visible flaw short-circuits it. It signals you are not managing an impression. You are just a person. And people trust people. Be competent. Then let them see you fail at something small. The trust that follows is the kind that actually survives contact with reality. 🥺🧩',
  },
  {
    emoji: '🪞', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'The Single Most Powerful Trust-Building Technique Is Repeating the Last Three Words the Other Person Said, in a Questioning Tone.',
    text: 'FBI hostage negotiator Chris Voss — who spent 24 years negotiating with terrorists and kidnappers for the bureau — identified mirroring as the highest-leverage technique in the entire FBI negotiation toolkit. When someone finishes speaking, you repeat their last one to three words with a slight upward inflection. That\'s the whole technique. The effect: the person feels more profoundly heard than if you had delivered a thoughtful response, spontaneously continues elaborating, reveals more information, and experiences the conversation as unusually connecting. Harvard Law\'s Program on Negotiation teaches this as foundational for exactly this reason. The mechanism is that humans are not primarily looking for answers in conversation. They are looking for evidence that someone is genuinely attending to them. Mirroring provides that evidence at a neurological level, not an intellectual one. Most people listen to respond. Mirror, and they\'ll tell you everything you need to know without you asking a single question. 🪞🔐',
  },

  // ── PSYCHOLOGY: HANDLE ANY SITUATION ──
  {
    emoji: '🍎', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Four Biological States Are Responsible for the Majority of Catastrophic Decisions Ever Made. Every One Is Detectable Before You Act.',
    text: 'HALT — Hungry, Angry, Lonely, Tired — emerged from addiction psychology but was validated far beyond clinical settings. Columbia economist Shai Danziger\'s 2011 study analyzed 1,112 judicial parole hearings in Israeli courts across a full day. At the start of the morning after breakfast, judges granted parole roughly 65% of the time. Just before lunch, the approval rate dropped to nearly zero — across randomly ordered cases. After lunch, back to 65%. The variable was not the cases. It was blood glucose and decision fatigue. Jonathan Levav replicated the same pattern in financial advisors, doctors, and executives making sequential decisions under cognitive load. Your brain running on depleted resources doesn\'t become slightly worse at decisions. It defaults to the most conservative, status-quo option available. Every time. Without exception. Never make a decision that matters when you\'re any one of the four. If you can\'t control the timing — eat, sleep, and then decide. 🍎⚖️',
  },
  {
    emoji: '🏷', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Putting a Word on an Emotion Reduces Its Neurological Intensity by Approximately 50%.',
    text: 'UCLA neuroscientist Matthew Lieberman in 2007 used fMRI to observe what happens when participants labeled an emotional facial expression with a word. When they saw an angry face and named the emotion aloud — "anger" — amygdala activity dropped measurably and significantly compared to participants who saw the same face without naming it. The prefrontal cortex and the amygdala operate in inverse relationship — when one activates strongly the other is suppressed. Verbal labeling activates the prefrontal cortex, which literally dampens the amygdala\'s threat response at the neurological level — not metaphorically. This is the mechanism underlying why journaling, therapy, and verbally processing stress produce measurable physiological benefit across 400+ peer-reviewed studies in Mindfulness-Based Stress Reduction programs. You are not "venting" when you name what you feel. You are changing which brain system is running your body. In any situation that has you — don\'t fight the feeling. Name it. Out loud if possible. The storm doesn\'t stop. But you get back the wheel. 🏷🧠',
  },
  {
    emoji: '🕰', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Your Brain Cannot Distinguish Between a Problem That Will End Your Life and One You\'ll Forget in Six Months. One Question Fixes This.',
    text: 'Psychologist Ethan Kross at the University of Michigan spent over a decade studying self-distancing — mentally stepping outside a stressful experience to view it from a distance. Across 18 experiments published between 2010 and 2020, temporal distancing — specifically asking "will this matter in 10 years?" — reduced cortisol response, shortened the duration of emotional reactivity, and improved reasoning quality about the situation in ways participants consistently described as feeling more manageable and clear. The brain\'s threat-detection system treats a professional embarrassment and a physical attack with the same cortisol spike because it evolved before those two things were different categories. Almost nothing that feels catastrophic today will be catastrophic in a decade. And the rare thing that actually will be — that clarity alone tells you what deserves your full attention right now versus what deserves none. When a situation has you by the throat — zoom out. What does this look like from ten years away? The answer is almost always the same. And the answer changes everything. 🕰🌌',
  },

  // ── PSYCHOLOGY: PERCEPTION ──
  {
    emoji: '🪞', cat: 'psych_perception', catLabel: 'Perception',
    title: 'The Version of You That Exists in Other People\'s Heads Is More Powerful Than the Version That Actually Exists.',
    text: 'Sociologist Charles Cooley in 1902 called it the "looking-glass self" — you don\'t build your identity from the inside out. You build it by imagining how others see you, then becoming that. Psychological research across 47 countries by Shinobu Kitayama in 2000 confirmed that self-concept is not an internal property — it is a social construction updated continuously by perceived feedback from others. The terrifying extension: a 1968 study by Robert Rosenthal at Harvard told teachers at random that certain students were "intellectual bloomers" about to spike in performance. Those students — chosen at random — actually did spike. Teachers treated them differently. The students became the story. You are not who you are. You are who the people around you believe you are. Choose your audience like your life depends on it. Because it does. The room you\'re in is quietly writing your autobiography. 🪞👥',
  },
  {
    emoji: '🎭', cat: 'psych_perception', catLabel: 'Perception',
    title: 'First Impressions Are Formed in 100 Milliseconds. Everything Afterward Is Filtered to Confirm It — Not Challenge It.',
    text: 'Princeton psychologist Alex Todorov in 2006 showed participants faces for 100 milliseconds — one tenth of a second — and asked them to rate competence, trustworthiness, and likeability. Those snap judgments predicted the outcomes of actual US Senate and gubernatorial elections with 70% accuracy. Not because voters were making the same snap judgment — because the snap judgment is what voters were making when they thought they were making a considered one. Confirmation bias then does the rest. Once a first impression is formed the brain operates as a lawyer for that impression — selectively attending to confirming evidence, discounting contradicting evidence, reframing ambiguous data to fit. The first 10 seconds of any relationship is not an introduction. It is a trial where the verdict is already leaning. Walk in as if the verdict is already yours. Because the other person\'s brain is already deciding. 🎭⚖️',
  },
  {
    emoji: '🫃', cat: 'psych_perception', catLabel: 'Perception',
    title: 'You Have a Second Brain in Your Gut. It Has 500 Million Neurons and Produces 95% of Your Body\'s Serotonin.',
    text: 'The enteric nervous system — lining your entire gastrointestinal tract — contains approximately 500 million neurons, more than the spinal cord. It operates independently enough that it continues functioning even after the vagus nerve connecting it to the brain is severed. 90-95% of the body\'s serotonin — the primary neurotransmitter regulating mood, social behavior, and emotional stability — is produced in the gut, not the brain. The vagus nerve carries 10 times more signals upward from gut to brain than downward from brain to gut. Columbia neurogastroenterologist Michael Gershon\'s 2015 research established that gut microbiome composition directly influences anxiety levels, risk tolerance, and social behavior — not metaphorically, through mood, but through direct neurochemical production. The decision you think you\'re making with your head was already influenced by what happened in your digestive tract. When something feels wrong in your stomach — that is not emotion. That is a second nervous system sending you a report. Read it. 🧠🫃',
  },
  {
    emoji: '🎯', cat: 'psych_perception', catLabel: 'Perception',
    title: 'Your Brain Didn\'t Evolve to Perceive Reality Accurately. It Evolved to Perceive Reality Usefully.',
    text: 'For [Every Decision You Make]: Evolutionary biologist Robert Trivers spent decades documenting self-deception as an adaptive strategy — if you genuinely believe your own lie, you transmit it more convincingly to others. The brain\'s perceptual systems were not built for truth. They were built for survival. You overestimate your own driving ability — 93% of Americans rate themselves above average. You underestimate how long tasks take — the planning fallacy, documented by Kahneman and Tversky in 1979, affects NASA engineers, surgeons, and architects by an average of 250%. You see patterns where none exist — apophenia — because in a predator-filled environment a false positive cost nothing and a false negative cost your life. You are not a rational being who occasionally makes emotional decisions. You are an emotional survival machine that occasionally accesses rational override. The override is expensive, slow, and exhausting. It is also the only part of you that can see straight. Use it deliberately. Rest it carefully. Everything important depends on it. 🎯🧬',
  },

  // ── PSYCHOLOGY: REWIRE YOURSELF ──
  {
    emoji: '🧠', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'You Are Not Your Personality. You Are Your Most Repeated Thoughts.',
    text: 'Donald Hebb\'s 1949 principle — "neurons that fire together wire together" — was confirmed structurally when MRI technology became precise enough to measure it. London taxi drivers who spent years memorizing 25,000 streets showed measurably enlarged hippocampi compared to non-drivers — the physical brain grew to accommodate a practiced skill. Eleanor Maguire\'s 2000 study at UCL confirmed the enlargement was caused by the training, not pre-existing — the brains grew after driving began. Neuroscientist Richard Davidson at Wisconsin spent 20 years scanning meditating monks and found structural differences in prefrontal cortex thickness — the region governing emotional regulation — proportional to hours of meditation practiced. Your personality is not fixed. It is a set of heavily myelinated neural pathways that became efficient through repetition. Every thought you repeat is a vote for the brain you\'ll have next year. You are not changing who you are. You are changing what you practice. Those are the same thing. 🧠🏗',
  },
  {
    emoji: '🔓', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'The Identity You Hold About Yourself Is the Hardest Cage to Escape — Because You Built It, You Believe It, and Your Brain Defends It.',
    text: 'Stanford psychologist Carol Dweck spent 35 years studying why some people grow through failure and others collapse. The variable was not intelligence, not resilience, not resources. It was a single sentence people believed about themselves — whether ability was fixed or developable. In a 2007 study, students told "you must be smart" after succeeding chose easier subsequent tasks to protect the identity. Students told "you must have worked hard" chose harder tasks. Identity-protective cognition — documented extensively by Dan Kahan at Yale — shows that people process information that threatens their self-concept using the same neural defensive systems that process physical threats. Your beliefs about what you are capable of are not assessments. They are defended positions. And they will filter, distort, and destroy evidence that contradicts them until you consciously choose to reclassify them as hypotheses. The most important thing you believe is what you believe about your own limits. Treat it like a guess. Because it is. 🔓🌱',
  },
  {
    emoji: '🌐', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'Who You Spend Time With Is Not a Lifestyle Choice. It Is a Biological Update to Your Nervous System.',
    text: 'Sociologist Nicholas Christakis and political scientist James Fowler analyzed data from the Framingham Heart Study — tracking 12,067 people across 32 years — and published findings in 2007 that shocked the field. Obesity spread through social networks like a contagion — up to 3 degrees of separation. Your friend\'s friend\'s friend gaining weight statistically increased your probability of gaining weight — even if you never met them. The same pattern held for smoking cessation, happiness, depression, and divorce. The mechanism is a combination of behavioral mirroring — you unconsciously copy the habits of those closest to you — and norm recalibration — your brain continuously updates what\'s "normal" based on observed behavior in your environment. Jim Rohn\'s famous observation that you become the average of the five people you spend most time with is not motivational poetry. It is documented social epidemiology. You are being averaged. The only question is whether you chose the inputs. 🌐🧬',
  },
  {
    emoji: '🔥', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'Suffering Without Meaning Is Destruction. Suffering With Meaning Is Fuel. You Can Choose Which — But Only Before the Suffering Arrives.',
    text: 'For [Every Hard Season]: Austrian psychiatrist Viktor Frankl survived Auschwitz and three other Nazi concentration camps. His observations, published as "Man\'s Search for Meaning" in 1946, documented a consistent pattern: prisoners who retained a sense of purpose — a person to survive for, a work to complete, a future to imagine — survived at measurably higher rates than those of equivalent physical health who had lost meaning. His framework, logotherapy, was later validated experimentally by Michael Steger at Colorado State, whose research across 14 countries between 2006 and 2018 showed that meaning in life was a stronger predictor of psychological resilience, physical health outcomes, and longevity than happiness — because happiness collapses under pressure while meaning metabolizes it. The research says meaning converts pain into growth through a measurable neural mechanism — it activates the prefrontal cortex\'s narrative-building capacity, reframing suffering as data rather than verdict. You will suffer. That is not optional. What you make it mean — that is the only variable that was ever yours. 🔥🏔',
  },

  // ── PSYCHOLOGY: ART OF INFLUENCE ──
  {
    emoji: '🪪', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'People Don\'t Do Things Because They\'re Logical. They Do Things Because They Feel Like the Kind of Person Who Does That Thing.',
    text: 'BJ Fogg at Stanford\'s Behavior Design Lab spent 20 years studying why behavior change succeeds and fails. His 2019 conclusion: motivation is unreliable, willpower depletes, and information changes almost nothing. The only durable behavior change begins with identity. In a now-famous 1976 voter turnout study by Christopher Bryan, one group received a letter asking them to "vote." Another received a letter asking them to "be a voter." The voter-identity group showed a 13% higher turnout. The word changed. Nothing else did. James Clear\'s synthesis of identity-based habit research in "Atomic Habits" extended Bryan\'s finding — every time you perform a behavior you cast a vote for the type of person you believe you are. Enough votes and the identity updates. The identity updates and the behavior stops requiring effort. Don\'t try to change what you do. Change what you\'re becoming. The doing rearranges itself around the becoming. 🪪🔄',
  },
  {
    emoji: '⏳', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'Scarcity Is the Most Powerful Influence Trigger in Human Psychology. The Brain Is Wired to Want What Might Disappear.',
    text: 'Robert Cialdini\'s 1984 "Influence" — the most cited work in persuasion science — documented scarcity as one of six universal influence principles operating across all human cultures studied. But the mechanism is more specific than mere wanting. Stephen Worchel\'s 1975 experiment gave participants identical cookies from two jars — one full, one containing only two. Participants consistently rated the cookies from the almost-empty jar as tastier, more valuable, and more desirable. Same cookie. Different context. This isn\'t greed. It\'s a survival circuit — in an environment of genuine scarcity, losing access to a resource before acquiring it was potentially fatal. Your brain responds to potential loss with a stronger activation than to equivalent potential gain — loss aversion, documented by Kahneman and Tversky in 1979, shows losses feel approximately twice as powerful as equivalent gains. Scarcity triggers the loss circuit. The loss circuit overrides the rational circuit. Every time. The most valuable things in your life feel valuable partly because you know they can end. That is not a bug. That is the whole design. ⏳🎰',
  },
  {
    emoji: '🚫', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'The Best Way to Get Someone to Do Something Is to Tell Them They Probably Can\'t.',
    text: 'Jack Brehm at Duke identified psychological reactance in 1966 — when people perceive their freedom to choose or act is being threatened or eliminated, they experience an immediate motivational response to restore that freedom. Specifically by doing the restricted thing. In a 1975 study, researchers placed a sign near a graffitied wall saying "Do not write on this wall under any circumstances." Graffiti increased. A mild suggestion — "Please don\'t write on this wall" — produced no such increase. Reverse psychology is not a trick or a manipulation technique. It is a documented feature of the human motivational architecture. Cialdini\'s research across consumer behavior, public health campaigns, and political messaging consistently shows that telling people what not to do — under the wrong framing — produces the opposite behavior at scale. The brain does not hear "don\'t." It hears "someone is trying to stop you" and responds accordingly. The fastest way to make something irresistible is to forbid it. Work with the system. Not against it. 🚫🔥',
  },
  {
    emoji: '👁', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'You Can Shift the Power Dynamic in Any Room by Being the Only Person Willing to Say Out Loud What Everyone Else Is Thinking.',
    text: 'This is called naming the dynamic — and it is the single highest-leverage communication move in any high-stakes interaction. FBI negotiation trainer Gary Noesner documented that in hostage situations, the moment a negotiator named the emotional reality of the room — "I know you feel cornered right now, and that nobody has actually listened to you today" — escalation rates dropped dramatically. Organisational psychologist Adam Grant\'s research at Wharton showed that leaders who named interpersonal tensions explicitly — instead of working around them — resolved conflicts 40% faster with significantly higher trust outcomes. The mechanism is that unspoken truths consume enormous cognitive bandwidth from every person in the room who\'s aware of them. Naming releases the pressure. The person who names it is not vulnerable — they are immediately the most perceptive, the most confident, and therefore the most powerful person present. Most people spend their lives carefully not saying the true thing. Say it first, calmly, and the room belongs to you. 👁⚡',
  },

  // ── PSYCHOLOGY: SOCIAL STATUS ──
  {
    emoji: '👑', cat: 'psych_status', catLabel: 'Social Status',
    title: 'You Communicate Your Status to Every Room Before You Open Your Mouth. And You\'ve Been Doing It Unconsciously Your Entire Life — Mostly Wrong.',
    text: 'UCLA communication professor Albert Mehrabian\'s research established that 55% of social impression is conveyed through body language, 38% through vocal quality, and only 7% through actual words. But the status signal is more specific than this. Sociologist Erving Goffman documented in 1959 that high-status individuals take more physical space — wider stance, arms not tucked to body, objects spread around them. They move more slowly. They initiate touch rather than receiving it. They finish sentences at their natural pace rather than speeding up when interrupted. Primatologist Frans de Waal studying chimpanzee hierarchies found the identical behavioral cluster in human executives filmed without their knowledge in boardrooms. You entered every room today broadcasting your position in the hierarchy before you said a single word. The question is not whether you\'re signaling. You are always signaling. The question is whether you designed the signal or inherited it. 👑🚶',
  },
  {
    emoji: '🌟', cat: 'psych_status', catLabel: 'Social Status',
    title: 'One Impressive Thing in the First Sixty Seconds Colonizes How People Interpret Everything Else About You.',
    text: 'Psychologist Edward Thorndike identified the halo effect in 1920 studying military officers\' evaluations — officers rated physically impressive soldiers as more intelligent, more reliable, and better leaders with zero supporting behavioral evidence. The mechanism is cognitive consistency — the brain finds it uncomfortable to hold contradictory impressions of the same person and smooths everything into alignment with the dominant first impression. A 2014 study by Nicholas Rule and Nalini Ambady showed that photographs of Fortune 500 CEOs seen for just one second predicted actual company profit margins with above-chance accuracy — the same qualities that produced business outcomes were readable in bearing. The halo works in reverse identically — one visible weakness colors all subsequent perception downward. Your opening move is not an introduction. It is the lens through which everything else gets filtered. What they notice first becomes the lens for everything after. Control the first thing. 🌟🔭',
  },
  {
    emoji: '🪨', cat: 'psych_status', catLabel: 'Social Status',
    title: 'Every Unnecessary Explanation You Offer Is a Small, Invisible Surrender of Standing.',
    text: 'Organizational behavior research by Alison Fragale at UNC in 2006 found that participants who provided unsolicited justifications for their decisions were rated as significantly lower status than those who made identical decisions without explanation. The psychology is precise: explanation signals that you\'re managing the other person\'s reaction to you — that their verdict matters enough to preemptively address. High status people act and let the outcome speak. They apologize rarely and specifically, not preemptively and broadly. They don\'t add "does that make sense?" after statements. They don\'t begin with "I might be wrong, but—" or "this is probably a stupid idea—." Each of these verbal tics signals the same thing: you need them to be okay with what you just said. Say the thing. Don\'t justify why you said it. The justification is the retreat. 🪨🎯',
  },
  {
    emoji: '📡', cat: 'psych_status', catLabel: 'Social Status',
    title: 'You Are Probably Doing Several Things in Every Conversation That Signal Submission — and Nobody Has Ever Pointed Them Out.',
    text: 'Linguist Robin Lakoff in 1973 documented the cluster of verbal behaviors that construct low-status positioning in real time: tag questions ("that\'s right, isn\'t it?"), excessive hedging ("I might be wrong, but—"), uptalk — rising intonation on declarative statements making them sound like questions — over-apologizing before speaking ("sorry to bother you, but—"), and laughing before the other person has finished a joke setup to signal you\'ll find it funny. Each individually is minor. Combined, they build a real-time status signal the other person reads and responds to without awareness. Sociolinguist Deborah Tannen\'s research confirmed these are not fixed personality traits — they are situation-specific behaviors people deploy more frequently when they perceive themselves as lower-status. Learnable in one direction. Unlearnable in the other. You\'ve been broadcasting your own ceiling. You installed it. You can raise it. 📡👑',
  },
  {
    emoji: '♟️', cat: 'psych_status', catLabel: 'Social Status',
    title: 'Every Human Interaction Contains a Status Transaction. Most People Play Without Knowing the Game Exists.',
    text: 'For [Every Social Situation]: Sociologist Randall Collins\' Interaction Ritual Chains — 2004 — documented that every social encounter involves the exchange of emotional energy and status, and that people leave interactions with either more or less of each than they entered with. The drain is usually invisible. You notice you feel deflated after certain conversations without knowing why — you lost a status exchange you didn\'t know you were in. The skill is not dominating every exchange — that\'s exhausting and counterproductive. The skill is choosing which games to play and which to exit without engagement. Research by Stanford\'s Robert Sutton on workplace dynamics shows that high-performing individuals strategically ignore status challenges in low-stakes interactions and respond decisively in high-stakes ones. Responding to every provocation wins no war. It just means you\'re always fighting. Know which game you\'re in. Deciding not to play is itself a power move. ♟️👁',
  },
  {
    emoji: '🌑', cat: 'psych_status', catLabel: 'Social Status',
    title: 'The Most Reliable Way to Lower Your Status in Any Room Is to Visibly Want It.',
    text: 'Psychologist Joey Cheng at the University of Illinois identified two routes to high status: dominance — intimidation and coercion — and prestige — freely conferred deference based on perceived competence and generosity. Prestige is more durable, more socially stable, and more difficult to remove. It also cannot be achieved by seeking it — the moment you signal that you need others\' respect, you demonstrate a dependence on their approval that directly undermines the impression of self-sufficiency that prestige requires. In a 2016 study, participants shown people actively seeking approval rated them as significantly lower status than those performing the identical behavior without the visible approval-seeking. Name-dropping, credential-announcing, unsolicited achievement-sharing — all transmit the same message: you need them to know. People who actually hold high status rarely need you to know. The people worth impressing are never impressed by people trying to impress them. 👁🌑',
  },
  {
    emoji: '💎', cat: 'psych_status', catLabel: 'Social Status',
    title: 'Your Time, Attention, and Availability Are Status Signals — and They Operate on the Same Scarcity Principle That Governs the Price of Diamonds.',
    text: 'Economist Thorstein Veblen documented in 1899 that the social value of goods is often inverse to their availability. The same mechanism applies to human social capital. Research by Roy Baumeister found that people who were highly available and immediately responsive were rated as lower status than those who introduced natural delays and limits to their attention — with all other variables controlled. This is not about playing games. It is about accurate calibration of something real: if your time is genuinely limited because you have things of value to do with it, your availability signals that accurately. The problem is that most people with genuinely valuable work make themselves more available to seem impressive — which destroys the very signal that would make their work legible. Protect your attention not as a tactic. As an accurate reflection of its actual value. Your availability is a price tag. Most people have accidentally marked themselves down. ⏳💎',
  },
  {
    emoji: '🌌', cat: 'psych_status', catLabel: 'Social Status',
    title: 'Status Is Not a Measure of Your Worth. It Is a Measure of How Successfully You\'ve Communicated Your Worth.',
    text: 'Psychologist Mark Snyder at the University of Minnesota spent decades studying self-monitoring — the degree to which individuals adjust behavior to match social expectations. High self-monitors navigate status games fluently and rise quickly. Low self-monitors — often the most genuinely competent people — resist performing status because it feels dishonest, and are passed over for people who perform it better. Cameron Anderson at UC Berkeley across six longitudinal studies found that self-assessed competence predicted status outcomes significantly less than behavioral confidence — people who acted confidently were granted status whether or not the confidence was backed by actual competence. The injustice is real. The mechanism is also real. And knowing the mechanism doesn\'t change it. It just gives you a choice: learn to signal what you actually have, or watch people with less signal more effectively and further. The world doesn\'t reward the best. It rewards the best at being seen. Decide how you feel about that. Then decide what to do with the decision. 🪞🌌',
  },
  {
    emoji: '🎙️', cat: 'psych_status', catLabel: 'Social Status',
    title: 'The Person Who Speaks Last in a Meeting Often Holds More Power Than the Person Who Speaks First.',
    text: 'Negotiation researchers studying group dynamics have repeatedly found that early speakers anchor the conversation, but late speakers control the synthesis — they get to summarize, reframe, and effectively decide what "the room concluded." Status hierarchies in animal groups follow a similar pattern: the dominant individual is often the last to act, signaling they do not need to react to anything because nothing threatens their position. Watching and waiting is read as composure. Jumping in immediately is read as needing to be heard. The person who speaks last gets to file everyone else\'s words under their own framing — and framing is where real influence lives. Silence is not absence from the conversation. It is often the most expensive seat in the room. 🎙️⏳',
  },
  {
    emoji: '🧍', cat: 'psych_status', catLabel: 'Social Status',
    title: 'Status Is Contagious Before It Is Earned — People Treat You Based on How Others Already Seem to Treat You.',
    text: 'Social psychologists call this reflected status, and it shows up everywhere from playgrounds to boardrooms: if a respected person greets you warmly in front of others, the room recalibrates its estimate of your status before you\'ve said a word — independent of anything you\'ve actually done. This is partly why introductions matter so much, and why who vouches for you can outweigh your own resume in the first few minutes of a relationship. The mechanism is simple imitation under uncertainty — when people don\'t know how much regard to give someone new, they copy the regard shown by others, especially those they already trust. You don\'t just carry your own status into a room. You carry the status of everyone seen standing next to you. 🧍🔗',
  },

  // ── PSYCHOLOGY: EMOTIONAL MASTERY ──
  {
    emoji: '🏷', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'People Who Can Identify 20 Distinct Emotional States Are Measurably More Resilient and Recover From Setbacks Faster.',
    text: 'Psychologist Lisa Feldman Barrett at Northeastern spent two decades on emotional granularity — the precision with which an individual differentiates emotional states. In a 2001 study, participants who could distinguish "anxious" from "frustrated" from "disappointed" from "apprehensive" showed significantly lower physiological stress responses and recovered baseline cortisol levels faster after negative events than low-granularity participants who lumped everything into "bad" or "upset." The mechanism: the prefrontal cortex can only regulate what it can precisely identify. Vague negative affect is processed as undifferentiated threat — the amygdala maintains high alert. Named, specific emotion is processed as a known, bounded state. This is why emotional vocabulary is not a soft skill. It is a neurological regulatory tool. Every new emotion word you learn is a new lever in your own operating system. Name the exact thing. "Anxious about a specific outcome" is not the same as "feeling bad." Your nervous system knows the difference. 🏷🧬',
  },
  {
    emoji: '🐻', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Actively Trying Not to Feel Something Makes It Louder. The Suppression Is the Amplification.',
    text: 'Daniel Wegner at Harvard in 1987 ran one of the most replicated experiments in cognitive psychology: tell participants to think of anything except a white bear. Thoughts of white bears increased dramatically compared to control groups. This ironic rebound effect occurs because monitoring for the thought — which is required to suppress it — continuously activates the neural representation you\'re attempting to suppress. Jonathan Haidt\'s subsequent research confirmed the extension to emotions: suppression doesn\'t reduce the emotional experience, it reduces only its outward expression while amplifying the internal physiological response — heart rate, cortisol, and neural activation all increase under emotional suppression. The evidence-based alternative is acceptance and labeling — not fighting the emotion, not expressing it unfiltered, but acknowledging its precise presence and letting it process. Don\'t fight what you feel. Name it. Let it exist. Watch how much less power it has once it stops being forbidden. 🐻❄️🔓',
  },
  {
    emoji: '🔄', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Your Mind Will Return to Painful Events Automatically. Whether That Return Heals or Wounds You Depends on a Single Question.',
    text: 'Psychologist Susan Nolen-Hoeksema at Yale spent 20 years distinguishing rumination from reflection — two types of repetitive negative thinking that are neurologically distinct despite appearing identical from the outside. Rumination asks "why did this happen to me?" and "what does this mean about me?" — questions with no resolvable answer that keep emotional systems activated indefinitely. Reflection asks "what can I learn from this?" and "what would I do differently?" — questions that engage problem-solving circuitry and produce conclusions that close the loop. Nolen-Hoeksema\'s data across 1,500 participants showed ruminators were significantly more likely to develop clinical depression, showed longer cortisol elevation after stressors, and reported lower life satisfaction across every measured domain. The content of the thought is almost identical. The direction of the question — inward and stuck versus forward and mobile — is everything. When the mind replays something painful, it\'s asking a question. Make sure it\'s a question that has an answer. 🔄➡️',
  },
  {
    emoji: '❤️', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Your Emotions Are Not the Opposite of Rational Thinking. They Are a Faster Information-Processing System Running on More Data.',
    text: 'Neuroscientist Antonio Damasio documented in his 1994 Somatic Marker Hypothesis that patients with damage to the ventromedial prefrontal cortex — who lost the ability to feel emotions while retaining full intellectual function — became catastrophically poor decision-makers despite completely normal measured intelligence. Without emotional input, they couldn\'t prioritize options, assess risk, or commit to action. The emotions were computing something the rational system couldn\'t: rapid integration of vast experiential history into a felt sense of alignment with actual values and survival. Gerd Gigerenzer at the Max Planck Institute spent decades documenting that expert intuition — the gut feel of chess grandmasters, firefighters, emergency physicians — is compressed emotional data from thousands of prior experiences, processed faster than conscious analysis can reach. Listen to the feeling. Then ask the feeling for its evidence. That conversation is what intelligence actually looks like. 🧠❤️',
  },
  {
    emoji: '💼', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Performing Emotions You Don\'t Feel Depletes the Same Cognitive Resource as Solving Hard Analytical Problems.',
    text: 'For [Professional Life]: Sociologist Arlie Hochschild coined "emotional labor" in 1983. A 2003 meta-analysis by Alicia Grandey showed that surface acting — performing emotions you don\'t feel — was significantly more cognitively and physiologically costly than deep acting — genuinely inducing the required state. Surface acting predicted burnout and emotional exhaustion at rates comparable to chronically sleep-deprived professionals. The mechanism is ego depletion: emotional regulation and analytical thinking draw on the same prefrontal resources. Roy Baumeister\'s depletion research confirmed the trade-off is zero-sum. Spend the resource managing your face and it\'s not available for the judgment calls that actually determine your outcomes. This is not an argument for emotional authenticity as a value. It is an argument for emotional authenticity as resource conservation. Know what you\'re spending. Emotional labor is real labor. Budget for it like any other cost. 💼🔋',
  },
  {
    emoji: '🪟', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Every Human Nervous System Has a Zone Where It Can Think, Feel, and Function — and a Threshold on Each Side Where It Shuts Down or Explodes.',
    text: 'Psychiatrist Daniel Siegel at UCLA developed the Window of Tolerance — now foundational in trauma therapy — to describe the optimal zone of nervous system activation where humans can process experience without hyperarousal (panic, flooding, rage) or hypoarousal (shutdown, numbness, dissociation). The window\'s width is determined by attachment history, trauma, and regulation training. Narrow windows — common in trauma survivors — mean small stressors trigger dysregulation. Wide windows — developed through safe relationships and deliberate regulation practice — allow larger stressors to be processed without system failure. The critical clinical finding: when you\'re outside your window, you cannot think clearly, learn effectively, or make sound decisions — not because you\'re weak, but because the prefrontal cortex is measurably offline. Your window is not your character. It is your nervous system\'s history. History can be revised. You don\'t have a bad personality under pressure. You have a window. The work is widening it. 🪟🧠',
  },
  {
    emoji: '🌐', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'You Are Continuously Being Infected by the Emotional States of People Around You — and Infecting Them — Through Mechanisms That Cannot Be Switched Off.',
    text: 'Psychologist Elaine Hatfield documented emotional contagion in 1993 — the automatic mimicry and synchronization of facial expressions, vocalizations, postures, and physiological states in social contact. Mirror neurons activate the simulation of others\' states in your own body: watching someone wince fires your pain circuits at low amplitude. Nicholas Christakis and James Fowler\'s analysis of the Framingham Heart Study — tracking 12,067 people across 32 years — showed emotional states spreading through social networks up to three degrees of separation. Your friend\'s friend\'s friend\'s depression measurably increased your probability of depression. Your friend\'s friend\'s friend\'s happiness raised yours. You are never simply in a room with people. You are in a biochemical negotiation with their nervous systems — one you are always both winning and losing simultaneously. The people you spend time with are not just influencing your thinking. They are running code on your nervous system. Choose the inputs like your biology depends on it. Because it does. 🌐🧬',
  },
  {
    emoji: '🏔', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'The Goal of Emotional Mastery Is Not to Feel Less. It Is to Feel Completely — Without Being Swept Away.',
    text: 'Richard Davidson\'s 30 years of neuroimaging at Wisconsin studying advanced meditators produced a finding that overturned the popular model of emotional regulation: the masters feel more, not less. They show higher emotional reactivity than control groups — greater sensitivity to others\' distress, stronger aesthetic responses, more intense joy. What distinguishes them is recovery speed — they return to baseline dramatically faster after emotional peaks in both directions. The actual target is not the philosopher who has risen above feeling. It is the person who feels everything fully and has developed the neural infrastructure to metabolize it without being consumed. The Stoics were not emotionless. They were precisely calibrated. Marcus Aurelius wrote some of the most emotionally raw prose in recorded history — in a private journal he never expected anyone to read. You were not built to feel less. You were built to feel everything and not be destroyed by it. That is the entire project. 🏔',
  },
  {
    emoji: '🫁', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'Slowing Your Exhale Is the Fastest Manual Override Your Nervous System Has — and It Works in Under a Minute.',
    text: 'The vagus nerve, which runs from your brainstem through your chest and abdomen, is the primary highway of the parasympathetic "rest and digest" system. Breathing patterns where the exhale is longer than the inhale — for example, four seconds in, six to eight seconds out — directly stimulate vagal tone, slowing heart rate and signaling the brain that the threat has passed. This is not relaxation as a vague feeling; it is a measurable shift in heart rate variability that researchers can track in real time. Unlike most emotional regulation strategies, which require minutes of cognitive effort, breath pacing works on the body directly and almost immediately, because the body cannot tell the difference between "I am calm" and "I am breathing like someone who is calm." You have a reset switch wired directly into your ribcage. Most people never learn where it is. 🫁🌬️',
  },
  {
    emoji: '🔔', cat: 'psych_emotion', catLabel: 'Emotional Mastery',
    title: 'The Gap Between a Trigger and Your Reaction Is the Only Place Freedom Has Ever Existed — and It Can Be Trained to Get Wider.',
    text: 'Viktor Frankl, drawing on his observations in concentration camps, described the space between stimulus and response as the last freedom that cannot be taken from a person, even when everything else has been. Modern research on emotional regulation supports this in less extreme terms: the interval between an emotional trigger and an automatic reaction is typically a fraction of a second, but it is not fixed. Mindfulness training measurably lengthens this interval by strengthening the prefrontal regions that monitor incoming stimuli before the limbic system fully fires. The practical effect is not that people stop feeling triggered — they still feel the same spike — but they gain a sliver more time before the feeling becomes an action. That sliver, repeated thousands of times, is the entire difference between a reactive life and a chosen one. 🔔⏱️',
  },

  // ── PSYCHOLOGY: CONFIDENCE ──
  {
    emoji: '🏋', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Self-Esteem Predicts Almost Nothing About Your Performance. Self-Efficacy — Your Belief You Can Execute a Specific Task — Predicts Almost Everything.',
    text: 'Albert Bandura at Stanford spent 50 years separating these constructs — and the research is unambiguous. California\'s 1987 Task Force on Self-Esteem invested millions in programs designed to raise students\' general sense of worth. A subsequent meta-analysis found no significant improvement in academic or life outcomes. Self-efficacy meanwhile — "I can execute this specific type of task" — predicted academic achievement, career performance, physical health behavior, and recovery from illness with effect sizes three to four times larger than self-esteem measures. Self-efficacy is built exactly one way: mastery experiences. Doing the hard thing and surviving it. Every time you succeed at something difficult, your self-efficacy in that domain measurably increases. Every avoidance measurably decreases it. The mechanism is not motivational. It is neurological. And it is ruthlessly directional. You don\'t build confidence by feeling better about yourself. You build it by doing hard things and watching yourself not break. 🏋🧠',
  },
  {
    emoji: '⚡', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Confidence and Competence Are a Loop — and You Can Enter It at Either Point. Most People Wait at the Wrong Door Their Entire Lives.',
    text: 'The conventional model: become competent first, then feel confident. Psychologist Richard Wiseman at the University of Hertfordshire documented the "as if" principle — people who acted as if they were already in a desired state consistently produced measurable changes in the corresponding psychological state through behavioral feedback alone. Performing behaviors associated with confidence — deliberate posture, slower speech, sustained eye contact, comfortable use of silence — activates the same neural circuits that genuine confidence activates, creating the neurological state through the behavior rather than the reverse. The Army\'s leadership development program teaches this explicitly across every level of training: act like the leader before you feel like one. The feeling follows the action in documented majority of cases. In the remaining cases, the action alone turned out to be sufficient. You don\'t have to feel ready. You have to act ready long enough for ready to catch up. ⚡🔄',
  },
  {
    emoji: '🐕', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'If You Failed Repeatedly Where You Had No Control Over the Outcome, Your Brain Concluded Effort Is Disconnected From Results — and Applies That Far Beyond Where It Learned It.',
    text: 'Martin Seligman\'s 1967 experiments placed dogs in harnesses with unavoidable electric shocks. When later placed in situations where escape was completely simple, the dogs lay down and made no attempt. They had learned that their actions had no relationship to outcomes — and generalized that learning beyond the original context. Seligman extended this to humans in 1978 — students, workers, patients who had experienced repeated uncontrollable failure showed identical behavioral signatures: reduced effort, reduced learning, increased depression, failure to attempt escape even when escape became straightforward. The most disturbing finding: the helplessness generalized. Children who fail in educational environments designed with no student agency often develop learned helplessness that follows them into domains where they have complete control. The cage was removed years ago. The behavior pattern of a caged animal remained. You may not be limited by your ability. You may be limited by what failure taught you about trying. These require completely different repairs. 🔓🐕',
  },
  {
    emoji: '📖', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'How You Explain Your Failures to Yourself Determines Whether You Try Again. The Explanation Is a Habit. And Habits Can Be Changed.',
    text: 'Seligman\'s subsequent research identified the specific explanatory patterns that distinguish resilient people from people who develop helplessness after failure. The pessimistic style explains failures as permanent ("I always fail at this"), pervasive ("I fail at everything"), and personal ("it\'s because of who I am"). The optimistic style explains them as temporary ("this time didn\'t work"), specific ("this particular approach failed"), and situational ("the conditions weren\'t right"). These are not positive thinking — they are accurate probabilistic reasoning. Most failures are temporary. Most failures in one domain don\'t predict failures in others. Most failures involve situational factors beyond character. The pessimistic style systematically overgeneralizes. Seligman\'s Penn Resiliency Program — teaching attribution retraining across 14 countries — produced significant reductions in depression and improved academic and occupational outcomes. The story you tell about why you failed is writing the first sentence of your next attempt. Write it carefully. 📖✏️',
  },
  {
    emoji: '🏅', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Approximately 70% of High Achievers Regularly Feel Like Frauds. This Is a Sign of Accurate Self-Assessment, Not Inadequacy.',
    text: 'For [Anyone Building Something Real]: Psychologists Pauline Clance and Suzanne Imes identified impostor phenomenon in 1978 studying high-achieving academics at Georgia State. Subsequent research extended it universally — astronauts, surgeons, CEOs, and Nobel laureates report the same internal experience. The critical finding: genuine impostors don\'t experience impostor phenomenon, because they lack the metacognitive accuracy to perceive the gap between their performance and their perception. The feeling of being a fraud requires sufficient self-awareness to recognize what you don\'t know — which is precisely what expertise requires. The Dunning-Kruger data confirms the inverse: people with low competence report high confidence consistently. The impostor feeling is therefore most common in precisely the people who have earned the right not to have it. You feel like a fraud because you\'re accurate enough to see your gaps. The genuinely incompetent never feel this way. Let that land completely. 🏅🔍',
  },
  {
    emoji: '🔁', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Elite Performers Use Pre-Performance Rituals Not for Superstition, but Because Ritual Is a Neurological State Delivery System.',
    text: 'Sports psychologist Mark Bawden — consultant to England\'s cricket team and multiple Olympic programs — documented that pre-performance routines work through two distinct mechanisms. First: conditioned stimulus-response — the ritual becomes neurologically associated with the performance state through repetition, eventually triggering it automatically. Second: agency restoration — controllable sequences in uncontrollable environments restore the nervous system\'s sense of agency, dropping cortisol and activating the prefrontal systems required for skilled execution. Michael Jordan\'s pre-game sequence was documented precisely by teammates. Nadal\'s court rituals have been timed and analyzed. Djokovic\'s ball-bouncing before serves is documented state calibration in real time. The ritual doesn\'t invoke luck. It invokes a trained neurological state that you\'ve practiced arriving in hundreds of times. Design the ritual before you need it. Train it until the state arrives automatically. Then you own the state regardless of what the environment does around you. 🔁⚡',
  },
  {
    emoji: '💎', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Beyond Resilience Is a Category Most People Never Reach: Being Made Stronger by Stress Rather Than Merely Surviving It.',
    text: 'Nassim Nicholas Taleb coined antifragility in 2012 — systems that gain from disorder rather than simply enduring it. Bone becomes denser under load. The immune system strengthens through controlled exposure. Post-traumatic growth — documented by Richard Tedeschi and Lawrence Calhoun across 20 years and thousands of survivors — shows 50-70% of trauma survivors report positive psychological change as a direct result of their struggle: enhanced personal strength, new possibilities, deeper relationships, greater appreciation for existence. Not despite the trauma. Through the cognitive processing of it — finding meaning, revising the narrative, integrating the experience into an identity that is larger than what came before. Resilience is surviving the fire. Antifragility is coming out of it with properties you didn\'t have going in. The specific thing you most avoid is probably the exact ingredient your next version requires. 🔥💎',
  },
  {
    emoji: '🌅', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Nobody Felt Ready First. They Acted First. "Ready" Is What That Action Is Called in Retrospect.',
    text: 'Harvard psychologist Ellen Langer spent four decades studying what she calls the illusion of certainty — the false belief that confident action requires certain outcomes. Her research consistently showed the most adaptive performers were not those who felt certain — they were those who had developed genuine comfort with uncertainty. Navy SEAL selection research confirmed this from a different angle: candidates who fail BUD/S do not fail primarily from physical limitations. They fail because they make the decision to quit in their mind before their body has reached its actual limit. The physical ceiling is almost never reached because the psychological ceiling is lower. Candidates who complete do not have superior bodies. They made a decision — before the evidence arrived — that they would complete. The confidence preceded the justification. Not from delusion. From understanding that this is the actual sequence. You are waiting for a feeling that only arrives after you stop waiting. Start. Everything else is negotiable. 🌅🦁',
  },
  {
    emoji: '🎯', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'Confidence Is Domain-Specific, Not a Personality Trait — Which Means "I\'m Just Not a Confident Person" Is Almost Always the Wrong Diagnosis.',
    text: 'Albert Bandura\'s decades of self-efficacy research found that confidence does not transfer broadly the way people assume. A surgeon can be supremely confident in the operating room and quietly terrified of public speaking, and neither fact predicts the other. Confidence is built and stored separately for each specific skill or context, through direct experience in that exact context — watching others succeed, getting encouragement, and managing your physiological arousal in that situation. People who describe themselves as "just not confident" are usually generalizing from one or two domains where they have limited experience to their entire identity. The fix is never a global mindset shift. It is accumulating small, specific wins in the exact arena where the fear lives. Confidence doesn\'t travel. It has to be built locally, room by room. 🎯🧱',
  },
  {
    emoji: '🔍', cat: 'psych_confidence', catLabel: 'Confidence',
    title: 'People Consistently Underestimate How Much Others Notice Their Nervousness — and Overestimating It Makes the Nervousness Worse.',
    text: 'Researchers studying social anxiety have documented what is sometimes called the illusion of transparency — the belief that our internal anxiety is far more visible to others than it actually is. In studies where people rated how nervous they appeared during a task and observers separately rated the same performance, the performers consistently rated themselves as far more visibly anxious than observers did. The gap is not small. This matters because believing "everyone can see how nervous I am" adds a second layer of anxiety — anxiety about being seen as anxious — on top of the original feeling, and that second layer is the one that actually impairs performance. Most of what feels like an unmistakable, broadcast-quality panic is, to the room, simply someone standing still and talking. You are almost never as exposed as you feel. 🔍🎭',
  },

// === MIND VS YOU (+1) ===
  {
    emoji: '🪤', cat: 'psych_mind', catLabel: 'Mind vs You',
    title: 'The Sunk Cost Fallacy Doesn\'t Just Affect Money. It Hijacks Time, Relationships, and Identity the Same Way.',
    text: 'Economists Richard Thaler and Hal Arkes documented the sunk cost fallacy as one of the most persistent errors in human decision-making: people continue investing in something because of what they\'ve already invested, not because of what it will return going forward. The rational move is to ignore sunk costs entirely and ask only what happens next — but the brain treats abandoning a past investment as admitting the original decision was wrong, and protecting the self from that admission overrides the math every time. Arkes and Blumer\'s classic 1985 study found people were more likely to attend a snowstorm event if they\'d paid for the ticket than if it was free — even though the ticket was already non-refundable either way. This is why people stay in failing careers, failing relationships, and failing projects: not because the future looks good, but because walking away would mean the past was wasted, and the brain would rather waste the future than admit that. The money is already gone. Only the next decision is real. 🪤⏳',
  },

// === WIN ARGUMENTS (+7) ===
  {
    emoji: '🪞', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'People Don\'t Remember What You Said. They Remember How They Felt While You Said It.',
    text: 'Psychologist and Nobel laureate Daniel Kahneman\'s research on memory consistently shows that emotional tone is encoded far more durably than factual content — a finding sometimes summarized as "people forget what you said but remember how you made them feel." In arguments, this means the content of your correct point is often discarded while the feeling of being lectured, dismissed, or cornered survives and hardens into resentment. Communication researchers studying marital conflict found that the specific topic of an argument predicted almost nothing about relationship outcomes, while the emotional tone — contempt, criticism, defensiveness — predicted divorce with striking accuracy years in advance. You can be completely right and still lose, because the other person will remember the feeling of losing long after they\'ve forgotten why. Win the feeling in the room, and the facts have a chance to land later. Win only the facts, and the feeling will make sure they don\'t. 🪞💭',
  },
  {
    emoji: '🌡️', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'Conceding a Small Point First Makes People Far More Likely to Accept Your Big Point Afterward.',
    text: 'Negotiation researchers call this the "yes-ladder" or concession-based persuasion — and it works through the same reciprocity norm that governs favors. When you openly concede something genuine to the other person\'s position — even something minor — it signals that you\'re engaging honestly rather than trying to win at all costs, which lowers their defensiveness for everything that follows. Studies on door-in-the-face and related techniques show that people who\'ve just received a concession feel a social pull to reciprocate with one of their own, even in an argument they otherwise have no intention of losing. The mechanism is not manipulation in the cynical sense — it\'s that arguments are processed as social exchanges, not just logical ones, and exchanges that are one-sided in either direction tend to collapse. Give away the point that costs you nothing. It buys you the room\'s willingness to actually listen to the point that matters. 🌡️🤝',
  },
  {
    emoji: '⏸️', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'The Longer You Wait Before Responding to a Provocative Statement, the Less Power It Has Over the Conversation.',
    text: 'Communication researchers studying high-conflict negotiations — including hostage and crisis negotiation training — consistently teach a deliberate pause before responding to an inflammatory remark, because the pause does two things simultaneously. First, it gives your own prefrontal cortex time to come back online after the amygdala\'s initial threat response, which is measured in fractions of a second but can hijack your next sentence if you let it. Second, and less obviously, it changes how the provocation is perceived by everyone watching — an instant reaction reads as the statement landing a hit, while a pause reads as the statement not being worth an instant reaction. Silence after a provocation is one of the only moves in an argument that costs the responder nothing and costs the provocateur everything, because they were expecting a reaction and the absence of one is itself a kind of answer. The fastest response in an argument is rarely the strongest one. 🐢🎙',
  },
  {
    emoji: '🧊', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'Arguments Escalate Because Each Person Responds to the Other\'s Worst Five Seconds, Not Their Average Behavior.',
    text: 'Conflict researchers describe a pattern called the "worst moment fallacy" — in heated exchanges, people anchor their judgment of the other person to the single harshest thing said, and respond to that moment as though it represents the whole relationship or the whole argument. This creates a ratchet effect: each person escalates in response to the other\'s peak, not their baseline, and the conversation spirals upward in intensity even if both people, on average, are being reasonable. Therapists working with couples often introduce a simple rule — you are allowed to address the other person\'s best version of their argument, not their worst sentence — because it breaks the ratchet. The person who refuses to respond to the worst five seconds, and instead responds to the most reasonable thing the other person has said in the last five minutes, is the one who can actually de-escalate. Most arguments aren\'t won. They\'re just stopped from getting worse, by the one person willing to not take the bait. 🧊🌀',
  },
  {
    emoji: '🔑', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'Most Disagreements Aren\'t About the Topic. They\'re About Which of Two Hidden Questions Each Person Is Actually Answering.',
    text: 'Negotiation scholars at Harvard\'s Program on Negotiation describe most conflicts as operating on two layers simultaneously: the stated issue (what time, what budget, what policy) and the relationship issue (do you respect me, do you see me as competent, am I safe in this relationship). Arguments become unsolvable not because the stated issue is hard, but because the two people are unconsciously answering different questions — one person is debating the budget, the other is defending whether their judgment is trusted at all. Until the relationship-layer question is addressed, even a perfect solution to the stated issue won\'t land, because it doesn\'t answer the question the other person is actually asking. This is why "you\'re right, let\'s do it your way" sometimes doesn\'t end an argument — if the real question was "do you take me seriously," capitulation without acknowledgment can feel like further proof that you don\'t. Find out which question is actually being asked. The stated topic is often just where the real question is hiding. 🔑🗝',
  },
  {
    emoji: '🌉', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'People Change Their Minds in Private Long Before They Change Them in Public — and Pushing for Public Agreement Can Delay Both.',
    text: 'Social psychologists studying group conformity, building on Solomon Asch\'s famous experiments, found that people frequently report private doubts about a group consensus that they never voice publicly — and that the gap between private belief and public statement can persist for a long time if there\'s social cost to reversing position out loud. Demanding an immediate public concession in an argument — "so you admit I\'m right?" — creates exactly that social cost, and can cause someone to dig into a public position even after they\'ve privately abandoned it, simply to avoid the appearance of being pressured into a reversal. The more effective approach is to let the private shift happen without requiring it to be announced — giving someone room to act differently next time without ever having to say "I was wrong" out loud. The goal was never the apology. It was the changed mind. Those can arrive completely separately, and demanding both often costs you both. 🌉🤐',
  },
  {
    emoji: '🎻', cat: 'psych_argue', catLabel: 'Win Arguments',
    title: 'Tone Carries More Information Than Words — Which Means You Can Win the Argument and Still Lose the Person.',
    text: 'Albert Mehrabian\'s widely cited (if often oversimplified) research on communication found that in situations involving emotion, a large share of how a message is received comes from tone of voice and body language rather than the literal words used. In practice, this means the exact same sentence — "I think you\'re wrong about this" — can land as collaborative curiosity or as contempt depending entirely on delivery, and the listener\'s nervous system responds to the delivery first, often before the words are even processed. Studies of workplace feedback show that identical written feedback is rated as far more hostile when participants are told it was delivered "sharply" versus "calmly," even though the words on the page never changed. You can be factually airtight and still trigger a defensive shutdown if your tone signals contempt — and once that shutdown happens, the words you were so careful about never actually get heard. The argument was won on paper. It was lost in the room. 🎻🔈',
  },

// === UNCLEAR THINKERS (+7) ===
  {
    emoji: '🧊', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'When Someone Is Highly Emotional, Logical Arguments Don\'t Just Fail to Land — They Can\'t Be Processed at All.',
    text: 'Neuroscience research on the stress response shows that high arousal states — fear, anger, panic — are associated with reduced activity in the prefrontal cortex, the brain region responsible for weighing evidence, considering alternatives, and updating beliefs. This isn\'t a metaphorical "too upset to think straight" — it\'s a measurable shift in which brain systems are dominant. Presenting a logical argument to someone in this state is like trying to install software on a computer that\'s mid-reboot: the system isn\'t refusing the input, it\'s temporarily incapable of receiving it. Crisis negotiators are trained to address the emotional state first — slowing things down, acknowledging feelings, reducing arousal — specifically because no amount of correct information will be processed until the prefrontal cortex comes back online. The order matters: regulate first, reason second. Reversing the order doesn\'t just fail. It can actively raise arousal further, making the person even less reachable than before you started. 🧊🧠',
  },
  {
    emoji: '🪞', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'People Defend Positions They Don\'t Actually Hold If They Feel Cornered Into Defending Them.',
    text: 'Social psychologists studying "saying-is-believing" effects found that when people are pushed to publicly articulate or defend a position — even one they were initially ambivalent about — the act of articulation itself strengthens their commitment to it, independent of the position\'s merits. This means aggressive questioning can backfire in a specific way: someone who walked into a conversation mildly unsure can walk out firmly entrenched, not because they were persuaded of the position, but because defending it under pressure made it feel like theirs. This is sometimes called "argument-induced attitude polarization." The practical implication is that how a position is elicited matters as much as what the position is — questions that invite exploration ("what\'s drawing you to that?") tend to keep people flexible, while questions that demand defense ("how can you possibly believe that?") tend to manufacture the very rigidity they\'re trying to overcome. Cornering someone doesn\'t reveal their position. It often creates it. 🪞🦔',
  },
  {
    emoji: '🌊', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'Confused People Often Aren\'t Missing Information. They\'re Missing a Story That Makes the Information Make Sense.',
    text: 'Cognitive scientists studying narrative comprehension have found that humans process information far more easily when it arrives embedded in a causal story — this happened, which caused this, which led to this — than as a list of disconnected facts, even when the facts are identical. People who appear "unable to understand" a situation are frequently not lacking the relevant facts; they\'re lacking a narrative thread that connects the facts into something that feels coherent. This is why simply repeating facts louder or more often rarely helps — the facts were never the bottleneck. What helps is supplying the connective tissue: not "here is what happened" but "here is what happened, and here is why it happened, and here is what that means for what happens next." The brain doesn\'t store information well in isolation. It stores stories, and hangs the information off the story afterward. If someone seems unable to follow you, check whether you\'ve given them a story to follow, or just more facts to hold. 🌊📜',
  },
  {
    emoji: '🪤', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'Telling Someone "Calm Down" Reliably Makes People Less Calm — and Researchers Know Exactly Why.',
    text: 'Studies on emotional invalidation find that being told to suppress or change an emotion you\'re currently experiencing — "calm down," "don\'t be upset," "you\'re overreacting" — is processed as a signal that your current emotional state is unacceptable, which itself triggers additional negative emotion on top of whatever you started with. The instruction doesn\'t address the original feeling; it adds a second feeling — being dismissed — layered on top. Therapeutic approaches to de-escalation do close to the opposite: they validate the emotion as understandable ("it makes sense you\'d feel that way") before addressing anything else, because validation reduces the felt need to keep proving the emotion is justified. Once someone stops needing to convince you their feeling is valid, the feeling itself often starts to soften on its own. "Calm down" asks someone to do the one thing that requires feeling safe, while simultaneously making them feel less safe. It is almost perfectly designed to fail. 🪤🌡',
  },
  {
    emoji: '🎯', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'When Someone Can\'t Think Clearly, Giving Them Fewer Options — Not More Information — Often Helps Most.',
    text: 'Research on cognitive load shows that decision-making capacity is a limited resource that depletes under stress, and that the number of options being weighed has an outsized effect on that depletion — sometimes called "choice overload." A person who is overwhelmed, anxious, or in crisis often isn\'t failing to decide because they lack information; they\'re failing because their available cognitive bandwidth can\'t hold all the branches of a complex decision tree at once. Crisis responders and clinicians frequently use a technique of deliberately narrowing choices — not "what do you want to do" but "do you want A or B" — because a binary choice is processable even when a five-option menu isn\'t. This isn\'t about being paternalistic; it\'s about matching the request to the available processing capacity. Adding more information to someone who\'s already overloaded is like adding more boxes to someone whose arms are already full. The kindest thing is often to take some away, not hand over more. 🎯🧺',
  },
  {
    emoji: '🌀', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'People in Distress Often Argue in Circles Because They\'re Not Trying to Reach a Conclusion — They\'re Trying to Be Heard Long Enough to Feel Safe.',
    text: 'Therapists working with clients in acute distress frequently observe a pattern where the same point gets repeated in slightly different forms, seemingly without progress — which can look from the outside like the person is being illogical or refusing to listen. But research on emotional processing suggests that repetition in distress often serves a regulatory function: the person isn\'t failing to communicate the point, they\'re checking — sometimes unconsciously — whether the point has actually registered with another person, because feeling unheard maintains the distress that\'s driving the repetition in the first place. Attempting to "resolve" the conversation by countering the point, rather than confirming it\'s been heard, can extend the loop rather than ending it, because the underlying need (to be heard) was never addressed. Sometimes the fastest way out of a circular argument is the thing that feels like it shouldn\'t work: stop responding to the content, and simply confirm you\'ve heard it. The circle was often a request, not an argument. 🌀👂',
  },
  {
    emoji: '🧩', cat: 'psych_unclear', catLabel: 'Unclear Thinkers',
    title: 'A Person Who Keeps Changing the Subject Mid-Argument Is Often Signaling They\'ve Run Out of Defenses on the Current One — Not That They\'re Avoiding the Topic.',
    text: 'Communication researchers studying argument structure note that topic-shifting under pressure is frequently misread as evasiveness or bad faith, when it more often reflects something simpler: the person has exhausted their available responses on the current point and is, often without full awareness, searching for ground where they feel more capable of defending themselves. This is a self-protective reflex, not usually a deliberate strategy — in the same way that a chess player under pressure might instinctively try to change which part of the board the game is being played on. Calling out the shift directly ("we were talking about X, let\'s go back to that") can feel confrontational and increase defensiveness, while gently following the new topic for a moment before returning to the original one — "that\'s interesting, and going back to what we were saying" — tends to feel less like a trap and more like a conversation. What looks like dodging is often just someone reaching for solid ground. Meet them there briefly, then walk back together. 🧩🚪',
  },

// === WIN TRUST (+7) ===
  {
    emoji: '🤲', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Sharing a Vulnerability Builds Trust Faster Than Sharing a Strength — But Only If It\'s Not the First Thing You Share.',
    text: 'Research on self-disclosure and relationship formation has long found that revealing personal information accelerates closeness — a finding popularized by the famous "36 questions" studies on accelerated intimacy. But subsequent research adds an important nuance: disclosures that arrive too early, before any baseline of competence or trust has been established, can come across as oversharing and create discomfort rather than connection. The sequencing matters — a vulnerability shared after some rapport has been built reads as trust being extended to you specifically, while the same vulnerability shared in the first sixty seconds reads as a boundary problem. This mirrors the pratfall effect in reverse: competence first, then a crack in the armor, builds trust; a crack in the armor with no established competence just reads as a crack. Be a real person, not just an impressive one — but earn the right to be a real person first. 🤲⏱',
  },
  {
    emoji: '👂', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'The Fastest Way to Be Seen as Trustworthy Is to Accurately Predict What the Other Person Is About to Say.',
    text: 'Studies on perceived empathy find that people rate others as significantly more trustworthy and emotionally intelligent when that person demonstrates they "get it" before being told everything — for example, by naming a likely concern before the other person raises it ("I imagine you\'re also wondering about the timeline"). This works because accurately anticipating someone\'s perspective is extremely difficult to fake convincingly; it requires having actually modeled their situation rather than just performing concern. The effect is sometimes called "anticipatory empathy," and it short-circuits the usual trust-building timeline because it provides hard evidence — not just a claim — that you\'ve been thinking about their situation from their side. Telling someone you understand them is cheap. Demonstrating it by naming their next sentence before they say it is not, and the brain knows the difference instantly. 👂🔮',
  },
  {
    emoji: '🪜', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Trust Is Built in Small, Frequent Interactions Far More Than in Occasional Grand Gestures.',
    text: 'Research on relationship quality — including John Gottman\'s long-running work on couples — consistently finds that the accumulation of small positive interactions ("micro-moments" of attention, responsiveness, and consideration) predicts trust and relationship satisfaction far better than the occasional large gesture. A pattern of being reliably, slightly responsive hundreds of times builds a kind of trust that one spectacular gesture, surrounded by inconsistency, cannot replicate — because trust is fundamentally a prediction about future behavior, and predictions are built from sample size, not from outliers. This is why grand apologies after repeated small neglects often fail to repair trust, while a steady stream of small reliabilities can build it even without any dramatic moment at all. People don\'t trust you because of the one time you showed up enormous. They trust you because of the hundred times you showed up at all. 🪜🔁',
  },
  {
    emoji: '🎬', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'People Trust You More When You Tell Them What You\'re About to Do Before You Do It — Even If the Action Itself Doesn\'t Change.',
    text: 'Research on procedural fairness — how people evaluate processes, not just outcomes — finds that predictability and "voice" (being told what to expect) significantly increase perceived trustworthiness, independent of whether the outcome itself is favorable. A doctor who says "I\'m going to press here, and it might be uncomfortable for a moment" is rated as more trustworthy than one who presses without warning, even when the physical sensation is identical — because the warning signals respect for the other person\'s experience and reduces the feeling of things being done to them rather than with them. This applies far beyond medical settings: narrating your next move in a negotiation, a difficult conversation, or a piece of feedback ("I\'m going to be direct about something, is that okay?") converts the same content from something that happens to someone into something that happens with their participation. The action stays the same. The relationship to it changes completely. 🎬🗣',
  },
  {
    emoji: '🧮', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Admitting Uncertainty Out Loud Makes People Trust Your Certain Statements More, Not Less.',
    text: 'Research on credibility and source evaluation finds that sources who acknowledge the limits of their own knowledge — "I\'m confident about this part, less sure about that part" — are rated as more trustworthy overall than sources who present everything with uniform confidence, even when the uniformly confident source is, on balance, more accurate. The mechanism is calibration: once someone signals they\'re willing to flag uncertainty, their confident statements gain credibility by contrast, because the listener now has evidence the speaker isn\'t simply performing confidence across the board. A person who is certain about everything provides no signal — there\'s no way to tell their high-confidence claims from their low-confidence ones, because they sound identical. The person who says "I don\'t know" sometimes is the only kind of person whose "I do know" actually means something. Calibrated uncertainty is not a weakness in your credibility. It\'s the only thing that makes your certainty legible. 🧮🎚',
  },
  {
    emoji: '🕯', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Doing Someone a Favor They Didn\'t Ask For Can Damage Trust — Because It Implies They Couldn\'t Have Handled It Themselves.',
    text: 'Research on unsolicited helping behavior finds a counterintuitive pattern: help that wasn\'t requested is sometimes received as a subtle status statement — that the helper assumed the other person needed it, couldn\'t figure it out, or wasn\'t going to ask in time. This is especially pronounced in professional contexts, where studies on "overhelping" find that colleagues who jump in to fix problems before being asked are sometimes perceived as less trustworthy collaborators, not more — because the behavior signals an assumption of inadequacy on the other person\'s part, however well-intentioned. The same action — fixing something — lands completely differently depending on whether it was invited. Offering help ("would it be useful if I—") preserves the other person\'s sense of agency in a way that simply doing the help does not. Good intentions don\'t neutralize the implicit message. Sometimes the most respectful form of help is the offer, left open, rather than the action, already taken. 🕯🙏',
  },
  {
    emoji: '🪢', cat: 'psych_trust', catLabel: 'Win Trust',
    title: 'Trust Recovers Faster After a Mistake That Is Owned Immediately Than After a Long Streak With No Mistakes at All.',
    text: 'Organizational research on trust repair finds that how quickly and directly a mistake is acknowledged matters more for long-term trust than the size of the mistake itself. A delayed or partial acknowledgment — even of something small — tends to do more damage than an immediate, full acknowledgment of something larger, because the delay itself becomes evidence about character: it suggests the person will hide things when it\'s convenient. Conversely, an immediate "that was my error, here\'s what I\'m doing about it" can sometimes increase trust beyond its pre-mistake level, because it provides direct evidence of how the person behaves under exactly the conditions — being wrong — where trust is hardest to maintain. A spotless record proves nothing about what happens when something goes wrong, because nothing has gone wrong yet. A quickly-owned mistake is the only kind of evidence that actually answers the question everyone is quietly asking: what happens when this person has something to hide, and chooses not to. 🪢🔓',
  },

// === HANDLE ANY SITUATION (+7) ===
  {
    emoji: '🧊', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'In a Crisis, the First Thing to Stabilize Is Never the Problem. It\'s Your Own Physiology.',
    text: 'Emergency responders are trained in a principle sometimes summarized as "you can\'t help from inside the wreckage" — before assessing or acting on a crisis, the responder\'s own arousal level needs to be brought into a workable range, because a flooded nervous system produces tunnel vision, impaired judgment, and impulsive action regardless of how capable the person normally is. Physiologically, this is the same mechanism that makes HALT states dangerous for decisions: under high arousal, the brain shifts toward fast, narrow, defensive processing and away from the broad, flexible processing a real crisis usually requires. A few seconds spent on breathing, grounding, or simply naming "I am safe right now, the threat is the situation, not me" is not a delay from the real work. For a brief window, it is the real work — because everything that happens afterward will be filtered through whatever state you\'re in when you start. Handle yourself first. The situation will still be there in five seconds. You might not be, in the way that matters. 🧊🫀',
  },
  {
    emoji: '🗺', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Most "Emergencies" Are Actually Two Problems Stacked Together — an Urgent One and an Important One — and Treating Them as the Same Problem Makes Both Worse.',
    text: 'Crisis management frameworks frequently distinguish between what needs to happen in the next few minutes (urgent) and what needs to happen eventually but doesn\'t require speed (important), because collapsing the two leads to either rushing the important parts or neglecting the urgent ones. A person whose house is flooding has an urgent problem (get people and pets to safety) and an important problem (insurance, repairs, what caused it) — and trying to think about the insurance claim while the water is rising is not multitasking, it\'s diluting attention away from the only thing that currently matters. The skill is a deliberate triage question: "what, specifically, needs to happen before this gets worse — and what can legitimately wait until later, even if it feels urgent right now?" Most overwhelm in a crisis comes not from the size of the problem but from trying to hold the urgent and the important in the same mental slot at the same time. Separate them, and each becomes smaller. 🗺⏳',
  },
  {
    emoji: '📞', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Saying a Plan Out Loud — Even to No One — Changes How the Brain Processes It.',
    text: 'Research on verbalization and cognitive processing finds that articulating a plan, even silently mouthing it or saying it to an empty room, engages different and additional neural processes compared to simply thinking it — partly because verbal articulation requires the plan to be sequenced and structured in a way that pure thought doesn\'t demand. This is part of why "talking yourself through it" works, and why writing things down has a similar effect: both force vague intentions into a structure that can actually be executed, step by step, rather than existing as a single overwhelming blob of "I need to deal with this." In high-stress situations, people often report feeling calmer the moment they say "okay, first I\'m going to do X, then Y" out loud — not because the situation changed, but because the brain just received a sequence instead of a mass. If a plan still feels too big to hold, the test is simple: can you say the first step out loud, in one sentence? If yes, you have more of a plan than it felt like a moment ago. 📞🪜',
  },
  {
    emoji: '🪫', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'Decision Fatigue Doesn\'t Feel Like Fatigue. It Feels Like the Decision Suddenly Seeming Less Important.',
    text: 'Research on ego depletion and decision fatigue, building on the same mechanisms behind the judicial parole studies, finds that as cognitive resources deplete, people don\'t typically experience this as "I am tired and should stop" — they experience it as the stakes of the decision appearing to shrink. A choice that would have felt significant earlier in the day starts to feel like it doesn\'t really matter, which makes it easier to default, avoid, or pick whatever\'s easiest — not because the situation changed, but because the part of the brain that calculates "how much does this matter" is running on fumes and is returning artificially low numbers. This is dangerous precisely because it doesn\'t announce itself as fatigue; it disguises itself as clarity ("actually, this isn\'t that important"). If an important decision suddenly starts to feel unimportant late in a long day, that feeling itself is information — not about the decision, but about the state of the brain evaluating it. 🪫🔢',
  },
  {
    emoji: '🌪', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'The Brain Treats "I Don\'t Know What\'s Happening" as More Threatening Than "Something Bad Is Happening."',
    text: 'Research on uncertainty and stress finds that ambiguous threats — where the nature, duration, or severity of a problem is unclear — produce higher and more sustained stress responses than clear threats of similar or even greater objective severity. A confirmed bad outcome allows the brain to shift into a response mode; an uncertain situation keeps the threat-detection system running indefinitely, scanning for information that isn\'t available, because it can\'t yet determine what kind of response is appropriate. This is why "we don\'t have an update yet" can feel worse than receiving bad news, and why people in ambiguous situations often report relief even when they finally receive confirmation of something difficult — the relief isn\'t about the news, it\'s about the uncertainty ending. In a chaotic situation, reducing ambiguity — even by stating plainly "I don\'t know yet, but here\'s what we\'re doing to find out" — can lower stress more than any reassurance about the outcome, because it gives the threat system something concrete to stand on. 🌪🧭',
  },
  {
    emoji: '🎚', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'The Body Can\'t Tell the Difference Between Excitement and Anxiety — Which Means You Can Sometimes Relabel One as the Other.',
    text: 'Physiologically, excitement and anxiety produce nearly identical signatures — elevated heart rate, increased alertness, a surge of adrenaline — and research on emotional reappraisal has found that the label applied to that physical state significantly shapes the subjective experience and even performance outcomes. In one well-known line of research, participants told to say "I am excited" before a stressful task (like public speaking) performed better and reported less anxiety than those told to say "I am calm" — because "calm" requires fighting the physiological arousal, while "excited" reframes the same arousal as appropriate to the moment. This doesn\'t make the racing heart go away. It changes what the racing heart means. The body is already doing its part; the only open question is which story the mind tells about why. "I\'m anxious" and "I\'m excited" can describe the exact same heartbeat. One of those stories is far more useful to walk into a room with. 🎚⚡',
  },
  {
    emoji: '🧱', cat: 'psych_situation', catLabel: 'Handle Any Situation',
    title: 'The Most Useful Question in an Overwhelming Situation Isn\'t "What Should I Do?" — It\'s "What Is the Smallest Thing I Could Do Right Now?"',
    text: 'Behavioral research on task initiation finds that the size of a task is one of the strongest predictors of whether someone starts it at all — and that overwhelming tasks often go unstarted not because they\'re hard, but because the brain evaluates them as a single enormous unit rather than a sequence of small ones, and a single enormous unit is easier to avoid than to begin. Deliberately shrinking the question — not "how do I fix this entire situation" but "what is one two-minute action I could take right now" — changes the task from something the brain flags as too costly to attempt into something small enough that starting it doesn\'t require motivation, just movement. This works because starting often generates its own momentum; the hard part was never finishing, it was beginning, and beginning is far easier when the unit of action has been shrunk down to something that barely qualifies as a decision at all. You don\'t need a plan for the whole situation. You need one action small enough that not doing it would feel sillier than doing it. 🧱🐜',
  },

// === PERCEPTION (+6) ===
  {
    emoji: '🖼', cat: 'psych_perception', catLabel: 'Perception',
    title: 'You Don\'t See What\'s in Front of You. You See What Your Brain Predicted Would Be There, Lightly Corrected by What\'s Actually There.',
    text: 'Predictive processing models of perception, increasingly supported by neuroscience research, propose that the brain doesn\'t build perception from raw sensory data upward — it generates a prediction of what it expects to see, and sensory input is mostly used to correct that prediction when it\'s wrong, not to construct the picture from scratch. This is why optical illusions work, why proofreading your own writing is so hard (you predict the words you meant to type, and "see" them even when they\'re missing), and why people in low-visibility situations sometimes report seeing things that match their expectations rather than what was actually there. Perception, on this model, is less like a camera and more like a guess that gets quietly adjusted — most of the time the guess is close enough that you never notice the gap between what you expected and what was real. You\'re not seeing the world. You\'re seeing your best guess about the world, gently nudged by the world itself. 🖼🔧',
  },
  {
    emoji: '🌗', cat: 'psych_perception', catLabel: 'Perception',
    title: 'The Same Piece of Information Feels True or False Depending on Who You Imagine Saying It.',
    text: 'Research on source credibility and motivated reasoning finds that people evaluate the plausibility of a claim partly based on an imagined or actual source — the same statistic, argument, or fact is rated as more credible when attributed to a source the listener already trusts, and less credible when attributed to a source they distrust, even when the content is held completely constant across conditions. This happens largely outside conscious awareness; people genuinely experience the information itself as more or less believable, not just the source. The practical effect is that "do your own research" often doesn\'t produce more independent thinking — it produces a search for sources that already feel trustworthy, which loops back to sources that already align with what someone expected to find. The information was never the variable. The messenger was, and the brain just relabeled that as "the facts." 🌗📡',
  },
  {
    emoji: '🔬', cat: 'psych_perception', catLabel: 'Perception',
    title: 'Naming a Category Changes What You\'re Capable of Noticing Within It.',
    text: 'Research on perceptual learning and categorization finds that people with a richer vocabulary for distinguishing within a domain — wine experts, bird-watchers, radiologists — don\'t just describe what they see more precisely; they perceive more distinctions in the first place. Before someone learns the words for different cloud formations, all clouds may genuinely look similar to them; afterward, the same sky contains visibly different objects. This isn\'t just about language — having a category seems to direct attention toward the features that distinguish members of that category, features that were always present in the raw sensory data but weren\'t being attended to. This is part of why expertise often comes with the experience of "now I can\'t not see it" — the world didn\'t get more detailed. The categories that let you parse the detail finally existed. Vocabulary isn\'t just how you describe perception. In a real sense, it\'s part of what generates it. 🔬🏷',
  },
  {
    emoji: '🎢', cat: 'psych_perception', catLabel: 'Perception',
    title: 'How Long Something Felt Has Almost Nothing to Do With How Long It Actually Took.',
    text: 'Research on subjective time perception finds that the felt duration of an experience is heavily influenced by how much novel information was processed during it, not by the clock. A short period filled with new, unpredictable, or attention-demanding events can feel longer in the moment but shorter in retrospect, while a long period of routine, predictable activity can feel short in the moment but stretch out when remembered, because there\'s "more" stored from the novel experience to recall — memory density, not clock time, becomes the basis for retrospective time judgments. This is why a week of travel can feel like it lasted longer than a month at a routine job, looking back, even though the opposite was true in the moment. Time, as experienced, is not a measurement. It\'s an estimate based on how much your brain found worth keeping. The clock was never really the thing being remembered. 🎢🕰',
  },
  {
    emoji: '🪟', cat: 'psych_perception', catLabel: 'Perception',
    title: 'Two People Can Watch the Exact Same Event and Form Memories That Actively Contradict Each Other — Both Completely Convinced They\'re Right.',
    text: 'Research on eyewitness memory and reconstruction — including decades of work by Elizabeth Loftus — has repeatedly found that memory is not a stored recording that gets replayed, but a reconstruction that is rebuilt, slightly differently, every time it\'s recalled, incorporating context, expectation, and even information encountered after the original event. Two people watching the same argument can walk away with memories that differ not just in interpretation but in factual details — who spoke first, what tone was used, what was actually said — and both will experience their version with the same subjective certainty as someone recalling something that was recorded on video. This isn\'t lying, and it isn\'t usually detectable from the inside; reconstructed memories feel exactly as real as accurate ones. When two honest people remember the same event completely differently, the most likely explanation usually isn\'t that one of them is lying. It\'s that both of them are telling the truth about two different memories that used to be the same event. 🪟🧩',
  },
  {
    emoji: '🌫', cat: 'psych_perception', catLabel: 'Perception',
    title: 'You Are Far More Visible to Yourself Than to Anyone Else — and the Gap Is Bigger Than Almost Anyone Realizes.',
    text: 'The spotlight effect, documented in research by Thomas Gilovich and colleagues, describes the consistent tendency for people to overestimate how much others notice about them — their appearance, mistakes, even subtle emotional reactions. In one well-known study, participants wearing an objectively embarrassing t-shirt estimated that roughly twice as many people noticed it as actually did when surveyed afterward. The mechanism is simple: you have privileged, constant access to your own internal experience — every flicker of self-consciousness, every small stumble — while everyone else has access to almost none of it, and is mostly occupied with their own internal stream in exactly the same way. The room is not watching you the way you\'re watching yourself. It never was. Everyone else is starring in their own movie, and you have, at most, a brief cameo in most of them — which is, if anything, a relief. 🌫🎬',
  },

// === REWIRE YOURSELF (+6) ===
  {
    emoji: '🪴', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'The Brain Doesn\'t Distinguish Strongly Between a Habit and an Identity — Which Means Habit Change Is Identity Change, Whether You Notice or Not.',
    text: 'Research on habit formation finds that habits become automatic largely by becoming linked to cues and contexts rather than to conscious decisions — which is part of why simply deciding to stop a habit often fails, while changing the environment that triggers it works far better. But a second layer operates alongside this: each repetition of a behavior is also a small piece of evidence the brain uses to answer the question "what kind of person am I," and over enough repetitions, that evidence becomes the answer. This is why habit change that\'s framed only around outcomes ("I want to lose weight") tends to be less durable than habit change framed around identity ("I am someone who shows up for their workouts"), because the first gives the brain a finish line after which the behavior can stop, while the second gives the brain no finish line at all — the behavior simply is who you are now. You\'re never just building a habit. You\'re voting, every time, on who counts as you. 🪴🗳',
  },
  {
    emoji: '🧗', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'The Brain Treats Novelty as Mildly Threatening by Default — Which Is Why Growth Almost Always Feels Like Discomfort Before It Feels Like Anything Else.',
    text: 'Neuroscience research on novelty and the amygdala finds that unfamiliar situations trigger a small threat-response by default, even when there\'s no actual danger — the brain\'s baseline assumption about anything new is mild caution, because historically, unfamiliar things were more likely to be dangerous than familiar ones. This means that the discomfort people feel when trying something new — a harder workout, a difficult conversation, a skill they\'re bad at — is not necessarily a signal that something is wrong. It\'s frequently just the brain\'s default response to "this is not yet familiar," which is a temporary state, not a permanent verdict. Repetition is what converts "unfamiliar and threatening" into "familiar and safe," but that conversion only happens through exposure, which means the discomfort has to be tolerated for the thing to ever stop producing it. The discomfort of growth and the discomfort of danger can feel identical at first. Only one of them goes away with practice. 🧗⚠️',
  },
  {
    emoji: '🔁', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'You Can\'t Delete a Habit. You Can Only Build a Competing One Strong Enough to Win.',
    text: 'Neuroscience research on habit pathways finds that once a behavioral pattern is established in the brain, the neural pathway underlying it doesn\'t simply disappear when the behavior stops — it remains, dormant but intact, which is part of why old habits can resurface so easily even after long periods of abstinence, especially under stress. What changes with successful habit change isn\'t the deletion of the old pathway, but the construction of a new one that becomes more habitual — more automatically triggered — than the old one. Under normal conditions, the newer, stronger pathway wins. Under stress, fatigue, or strong cues, the older pathway can still activate, because it never went away, it just stopped being the default. This is why relapse after a stressful event doesn\'t mean the new habit "didn\'t work" — it means the oldest, most-practiced pathway temporarily reasserted itself, the way an old language comes back faster than a new one under pressure. The old road is never destroyed. You just have to make the new road the one your feet take without thinking. 🔁🛣',
  },
  {
    emoji: '🎓', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'Telling Yourself "I Can\'t" Activates Different Brain Regions Than Telling Yourself "I Choose Not To" — Even When the Outcome Is Identical.',
    text: 'Research on self-talk and willpower finds that the framing of an internal refusal changes how effortful it feels and how long it\'s sustained. "I can\'t have this" tends to frame the situation as an external restriction being imposed on you — which, consistent with research on psychological reactance, can increase the felt pull toward the restricted thing. "I don\'t do this" tends to frame the same refusal as an expression of identity rather than a restriction, which research finds is associated with less internal conflict and better follow-through over time — studies on this distinction found that people using identity-based refusals ("I don\'t eat sugar") maintained the behavior more consistently than those using restriction-based refusals ("I can\'t eat sugar"), despite both groups facing the same temptations. The same boundary, framed as a cage versus a choice, produces measurably different amounts of internal friction. You\'re not just deciding what to do. You\'re deciding whether the decision feels like yours. 🎓🔐',
  },
  {
    emoji: '🌱', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'The Version of You Five Years Ago Would Find Many of Your Current Standards Unrecognizable — Which Means the Version of You Five Years From Now Is Being Shaped Right Now by Standards You Haven\'t Adopted Yet.',
    text: 'Research on the "end of history illusion," documented by psychologists including Dan Gilbert, finds that people consistently believe their current values, preferences, and personality represent a finished, stable endpoint — even while readily acknowledging how much they\'ve changed in the past. People at every age report having changed a great deal over the last decade, while simultaneously predicting they\'ll change very little over the next one — a pattern that holds steady whether the person is 18 or 68. This isn\'t a failure of imagination so much as a structural blind spot: it\'s easy to look backward and see the path that led here, but the changes still to come haven\'t happened yet, so there\'s no path to look at. The person you\'ll be in five years is being built right now, out of standards and habits you may not even be aware you\'re forming — the same way the person you are now was built by a version of you that couldn\'t see it happening either. 🌱🔭',
  },
  {
    emoji: '🧮', cat: 'psych_rewire', catLabel: 'Rewire Yourself',
    title: 'The Stories You Tell About Your Past Are Not Fixed Records — They Are Living Drafts That Change Every Time You Retell Them, Whether You Notice or Not.',
    text: 'Research on autobiographical memory and narrative identity finds that the stories people tell about formative events in their lives — a difficult childhood, a major failure, a turning point — are not static recollections but ongoing reconstructions that shift subtly with each retelling, often in the direction of whatever narrative the person currently needs the event to support. This isn\'t dishonesty; it\'s how memory works for everyone, and it means the "story of your life" you currently tell yourself is, in a real sense, a draft rather than a transcript. Therapeutic approaches that work with narrative — helping someone retell a difficult event with a different emphasis, without changing any facts — can measurably shift how that event affects present-day mood and behavior, because the facts were never the load-bearing element. The meaning was. You cannot rewrite what happened. You are, however, the editor of a draft you\'ve been revising your entire life, usually without realizing editing was even happening. 🧮📝',
  },

// === ART OF INFLUENCE (+6) ===
  {
    emoji: '🌊', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'People Resist Being Persuaded. They Rarely Resist Being Asked Questions That Lead Them to Persuade Themselves.',
    text: 'Research on persuasion consistently finds that arguments delivered directly — "you should do X because Y" — trigger more resistance than the same conclusion arrived at through a sequence of questions that the person answers themselves, a finding closely related to the self-generated reasoning effect behind motivational interviewing. The reason is that direct persuasion positions the persuader as the author of the conclusion, and people\'s identities are bound up in being the authors of their own conclusions — accepting someone else\'s conclusion can feel like accepting their authority, independent of whether the conclusion itself is reasonable. A well-placed question doesn\'t just avoid this resistance; it routes around it entirely, because the conclusion, when it arrives, arrives with the other person\'s name already on it. The most persuasive sentence in the English language is rarely a statement. It\'s the question whose only honest answer is the thing you wanted them to conclude anyway. 🌊❓',
  },
  {
    emoji: '🪞', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'People Are More Easily Influenced by Someone Who Seems Similar to Them Than by Someone Who Seems More Capable.',
    text: 'Research on the similarity-attraction effect finds that perceived similarity — in background, communication style, values, even small things like name or mannerisms — increases trust and influence independent of, and sometimes more than, perceived competence. Studies on negotiation have found that negotiators who subtly mirrored the other party\'s posture, speech rate, or word choices achieved better outcomes than those who didn\'t, even when neither party was consciously aware mirroring was happening. The underlying logic appears to be a heuristic: "people like me have interests like mine," so similarity gets processed as an implicit signal of aligned incentives, even when no such alignment has actually been established. This is part of why expertise alone often isn\'t enough to be persuasive — an expert who feels like an outsider can be less influential than a peer who feels like "one of us," regardless of who is actually right. Influence often travels along the lines of "people like me," not "people who are right." 🪞🤝',
  },
  {
    emoji: '🎟', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'Giving Someone a Reason — Any Reason, Even a Weak One — Dramatically Increases Compliance, Almost Regardless of the Reason\'s Quality.',
    text: 'A classic study by Ellen Langer found that people asked to let someone cut in line at a copy machine complied far more often when given any justification ("because I\'m in a rush") than when given no justification at all — but, strikingly, complied almost as often when given an empty, circular justification ("because I have to make copies," which is true of literally everyone in the line) as when given a substantive one. This suggests that in many everyday situations, the presence of the word "because," followed by anything, triggers a kind of automatic compliance script — people aren\'t always evaluating the reason, they\'re responding to the structure of a reason being offered at all. This effect weakens for larger requests, where people do scrutinize the reason — but for small, low-stakes asks, the format of justification can matter more than its substance. "Can I — because —" is a more complete sentence, socially, than "can I," even when the part after "because" doesn\'t actually explain anything. 🎟🔲',
  },
  {
    emoji: '🪄', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'The Easiest Way to Make an Idea Spread Is to Make It Easy to Retell — Not Easy to Believe.',
    text: 'Research on the spread of ideas, rumors, and "sticky" messages finds that virality is driven less by how true or important an idea is and more by how easily it survives retelling — ideas that are simple, concrete, and emotionally resonant get passed along with high fidelity, while ideas that are accurate but complex degrade with each retelling until they\'re unrecognizable or simply get dropped. This is sometimes framed as ideas competing for limited cognitive and social bandwidth, where the winners aren\'t necessarily the most accurate, but the most transmissible — the ones that fit neatly into a sentence someone else can repeat without effort. A complicated truth that requires three caveats to retell correctly will lose, in terms of spread, to a simple claim that requires none — regardless of which one is actually more accurate. If you want an idea to travel, the question isn\'t just "is this true?" It\'s "can someone repeat this correctly after hearing it once, in a hallway, in under ten seconds?" 🪄📢',
  },
  {
    emoji: '🧷', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'People Follow Through on Commitments Far More Reliably When They Write Them Down Themselves — Even If No One Else Ever Sees It.',
    text: 'Research on commitment devices and self-signed agreements finds that the act of writing something down in your own hand, in your own words, increases follow-through compared to verbal agreement alone or being given a pre-written commitment to sign — even when the content is identical and no external accountability exists. The effect appears related to identity: a handwritten commitment is processed less as "a thing I agreed to" and more as "a thing I am the kind of person who does," because the physical act of writing requires active participation rather than passive acceptance. Studies on goal-setting have found that people who wrote down specific goals, in their own words, were significantly more likely to achieve them than people who held equally specific goals only in their heads. The pen doesn\'t make the commitment more binding to anyone else. It makes it more binding to the version of you that wrote it. 🧷✍',
  },
  {
    emoji: '🎯', cat: 'psych_influence', catLabel: 'Art of Influence',
    title: 'Asking "What Would It Take for You to Change Your Mind?" Is One of the Few Questions That Can Move Even Deeply Entrenched Beliefs.',
    text: 'Research on belief updating finds that most people, when asked directly to defend a strongly held position, become more entrenched — but a different question produces a noticeably different effect: asking what evidence or circumstance would change their mind. This question does something subtle — it requires the person to imagine a world where their current belief is wrong, which is a fundamentally different cognitive operation than defending why it\'s right, and it does so without anyone else having to argue against the belief at all. Some people, asked this question, realize in real time that they can\'t actually name any condition that would change their mind — which is itself revealing, to them, in a way that no external argument could be. Others name a genuine condition, which gives both people a concrete, shared reference point for the future. Either way, the question moves the conversation from "are you wrong" — which invites defense — to "what would wrong look like" — which invites imagination. Imagination is much harder to argue with than facts, because it isn\'t arguing at all. 🎯🔮',
  },


  // ── BIOLOGY (53 Chapters · 225 Facts · Hook→Term→Mechanism→Kicker) ──

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

// ── Bucket taxonomy ──
// Each bucket has an id, label, and an ordered list of sub-categories.
// Buckets with only one sub-cat skip the sub-pill row entirely.
const BUCKETS = [
  {
    id: 'all',
    label: '✨ All',
    subs: [], // special: shows every fact grouped by bucket
  },
  {
    id: 'science',
    label: '⚡ Science',
    subs: [
      { id: 'physics',   label: 'Physics'   },
      { id: 'chemistry', label: 'Chemistry' },
      { id: 'biology',   label: 'Biology'   },
      { id: 'earth',     label: 'Earth'     },
      { id: 'space',     label: 'Space'     },
    ],
  },
  {
    id: 'human',
    label: '🫀 Human',
    subs: [
      { id: 'body',        label: 'Body'        },
      { id: 'mind',        label: 'Mind'        },
      { id: 'epigenetics', label: 'Epigenetics' },
      { id: 'microbiome',  label: 'Microbiome'  },
    ],
  },
  {
    id: 'world',
    label: '🌍 World',
    subs: [
      { id: 'history',   label: 'History'      },
      { id: 'upsc',      label: 'India'        },
      { id: 'tribalism', label: 'Tribalism'    },
    ],
  },
  {
    id: 'ideas',
    label: '💡 Ideas',
    subs: [
      { id: 'philosophy', label: 'Philosophy' },
      { id: 'maths',      label: 'Maths'      },
      { id: 'money',      label: 'Money'      },
    ],
  },
  {
    id: 'future',
    label: '🤖 Future',
    subs: [
      { id: 'ai', label: 'AI & Tech' },
    ],
  },
  {
    id: 'psychology',
    label: '🧠 Psychology',
    subs: [
      { id: 'psych_mind',       label: 'Mind vs You'         },
      { id: 'psych_argue',      label: 'Win Arguments'        },
      { id: 'psych_unclear',    label: 'Unclear Thinkers'     },
      { id: 'psych_trust',      label: 'Win Trust'            },
      { id: 'psych_situation',  label: 'Handle Any Situation' },
      { id: 'psych_perception', label: 'Perception'           },
      { id: 'psych_rewire',     label: 'Rewire Yourself'      },
      { id: 'psych_influence',  label: 'Art of Influence'     },
      { id: 'psych_status',     label: 'Social Status'        },
      { id: 'psych_emotion',    label: 'Emotional Mastery'    },
      { id: 'psych_confidence', label: 'Confidence'           },
    ],
  },
  {
    id: 'biology',
    label: '🧬 Biology',
    // subs = the 8 Units shown as pills; each unit has chapters for the chapter-level drill-down
    subs: [
      {
        id: 'bio_u1', label: '⚗️ Chemistry of Life',
        chapters: [
          { id: 'bio_ch1',  label: 'Ch 1 – Intro & Scientific Method'  },
          { id: 'bio_ch2',  label: 'Ch 2 – Atoms & Chemical Bonds'     },
          { id: 'bio_ch3',  label: 'Ch 3 – Water & Life'               },
          { id: 'bio_ch4',  label: 'Ch 4 – Carbon & Organic Molecules' },
          { id: 'bio_ch5',  label: 'Ch 5 – Macromolecules'             },
        ],
      },
      {
        id: 'bio_u2', label: '🔬 The Cell',
        chapters: [
          { id: 'bio_ch6',  label: 'Ch 6 – Cell Structure & Function'  },
          { id: 'bio_ch7',  label: 'Ch 7 – Membrane & Transport'       },
          { id: 'bio_ch8',  label: 'Ch 8 – Cell Signalling'            },
          { id: 'bio_ch9',  label: 'Ch 9 – Energy & Metabolism'        },
          { id: 'bio_ch10', label: 'Ch 10 – Cellular Respiration'      },
          { id: 'bio_ch11', label: 'Ch 11 – Photosynthesis'            },
        ],
      },
      {
        id: 'bio_u3', label: '🧬 Genetics',
        chapters: [
          { id: 'bio_ch12', label: 'Ch 12 – Cell Division & Mitosis'    },
          { id: 'bio_ch13', label: 'Ch 13 – Meiosis & Reproduction'     },
          { id: 'bio_ch14', label: 'Ch 14 – Mendelian Genetics'         },
          { id: 'bio_ch15', label: 'Ch 15 – Chromosomal Inheritance'    },
          { id: 'bio_ch16', label: 'Ch 16 – DNA Structure & Replication'},
          { id: 'bio_ch17', label: 'Ch 17 – Gene Expression'            },
          { id: 'bio_ch18', label: 'Ch 18 – Gene Regulation'            },
          { id: 'bio_ch19', label: 'Ch 19 – Viruses'                    },
          { id: 'bio_ch20', label: 'Ch 20 – Biotechnology & Genomics'   },
        ],
      },
      {
        id: 'bio_u4', label: '🦕 Evolution',
        chapters: [
          { id: 'bio_ch21', label: 'Ch 21 – Darwin & Natural Selection' },
          { id: 'bio_ch22', label: 'Ch 22 – Evidence for Evolution'     },
          { id: 'bio_ch23', label: 'Ch 23 – Population Genetics'        },
          { id: 'bio_ch24', label: 'Ch 24 – Speciation'                 },
          { id: 'bio_ch25', label: 'Ch 25 – Macroevolution & Phylogeny' },
          { id: 'bio_ch26', label: 'Ch 26 – Origin of Life'             },
        ],
      },
      {
        id: 'bio_u5', label: '🌿 Diversity of Life',
        chapters: [
          { id: 'bio_ch27', label: 'Ch 27 – Prokaryotes'          },
          { id: 'bio_ch28', label: 'Ch 28 – Protists'             },
          { id: 'bio_ch29', label: 'Ch 29 – Fungi'                },
          { id: 'bio_ch30', label: 'Ch 30-31 – Plant Evolution'   },
          { id: 'bio_ch31', label: 'Ch 30-31 – Plant Diversity'   },
          { id: 'bio_ch32', label: 'Ch 32 – Invertebrates'        },
          { id: 'bio_ch33', label: 'Ch 33 – Vertebrates'          },
        ],
      },
      {
        id: 'bio_u6', label: '🌱 Plant Biology',
        chapters: [
          { id: 'bio_ch34', label: 'Ch 34 – Plant Structure & Growth'   },
          { id: 'bio_ch35', label: 'Ch 35 – Plant Transport'            },
          { id: 'bio_ch36', label: 'Ch 36 – Plant Nutrition'            },
          { id: 'bio_ch37', label: 'Ch 37 – Plant Reproduction'         },
          { id: 'bio_ch38', label: 'Ch 38 – Plant Responses & Hormones' },
        ],
      },
      {
        id: 'bio_u7', label: '🫀 Animal Physiology',
        chapters: [
          { id: 'bio_ch39', label: 'Ch 39 – Body Plans & Homeostasis'   },
          { id: 'bio_ch40', label: 'Ch 40 – Nervous System'             },
          { id: 'bio_ch41', label: 'Ch 41 – Sensory Systems'            },
          { id: 'bio_ch42', label: 'Ch 42 – Musculoskeletal System'     },
          { id: 'bio_ch43', label: 'Ch 43 – Circulation & Gas Exchange' },
          { id: 'bio_ch44', label: 'Ch 44 – Immune System'              },
          { id: 'bio_ch45', label: 'Ch 45 – Osmoregulation & Excretion' },
          { id: 'bio_ch46', label: 'Ch 46 – Endocrine System'           },
          { id: 'bio_ch47', label: 'Ch 47 – Reproduction & Development' },
        ],
      },
      {
        id: 'bio_u8', label: '🌍 Ecology',
        chapters: [
          { id: 'bio_ch48', label: 'Ch 48 – Behavioural Biology'        },
          { id: 'bio_ch49', label: 'Ch 49 – Population Ecology'         },
          { id: 'bio_ch50', label: 'Ch 50 – Community Ecology'          },
          { id: 'bio_ch51', label: 'Ch 51 – Ecosystems & Energy Flow'   },
          { id: 'bio_ch52', label: 'Ch 52 – Biomes & Aquatic Ecosystems'},
          { id: 'bio_ch53', label: 'Ch 53 – Conservation Biology'       },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Bio unit → chapter lookup helpers
// ─────────────────────────────────────────────────────────────

// Returns the biology bucket's unit objects (subs with .chapters arrays)
function getBioUnits() {
  const bioBucket = BUCKETS.find(b => b.id === 'biology');
  return bioBucket ? bioBucket.subs : [];
}

// Returns chapter cat ids for a given bio unit id (or all bio chapters if unitId is null)
function bioChapterIds(unitId) {
  const units = getBioUnits();
  if (!unitId) return units.flatMap(u => u.chapters.map(c => c.id));
  const unit = units.find(u => u.id === unitId);
  return unit ? unit.chapters.map(c => c.id) : [];
}

// Map every sub-cat id → its parent bucket id (for lookup)
// For biology, subs are units — chapters are nested inside units
const SUB_TO_BUCKET = {};
BUCKETS.forEach(b => {
  if (b.id === 'biology') {
    // map each unit id AND each chapter id → 'biology'
    b.subs.forEach(unit => {
      SUB_TO_BUCKET[unit.id] = 'biology';
      (unit.chapters || []).forEach(ch => { SUB_TO_BUCKET[ch.id] = 'biology'; });
    });
  } else {
    b.subs.forEach(s => { SUB_TO_BUCKET[s.id] = b.id; });
  }
});

// ── State ──
let currentBucket  = 'all';   // active top-level bucket id
let currentSub     = null;    // active sub-cat id (unit for biology; chapter for others; null = all)
let currentBioUnit = null;    // active bio unit id (null = all units); only used when bucket === 'biology'
let currentBioCh   = null;    // active bio chapter id (null = all chapters in unit)
let currentSearch  = '';

// ── Helpers ──

// Returns all fact cat ids that belong to a given bucket id
function catIdsForBucket(bucketId) {
  if (bucketId === 'all') {
    // include all non-bio subs + all bio chapter ids
    const nonBio = BUCKETS
      .filter(b => b.id !== 'all' && b.id !== 'biology')
      .flatMap(b => b.subs.map(s => s.id));
    return [...nonBio, ...bioChapterIds(null)];
  }
  if (bucketId === 'biology') return bioChapterIds(null);
  const bucket = BUCKETS.find(b => b.id === bucketId);
  return bucket ? bucket.subs.map(s => s.id) : [];
}

// ── Bold markdown fix ──
// Converts **text** → <strong>text</strong> so cards render rich text
function parseMd(str) {
  return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function buildCard(f, i, showBadge = false) {
  const card = document.createElement('div');
  card.className = 'ff-card glass-card';
  card.dataset.cat = f.cat;
  card.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
  card.innerHTML = `
    <div class="ff-card-header">
      <span class="ff-card-emoji" aria-hidden="true">${f.emoji}</span>
      ${showBadge ? `<span class="ff-card-cat">${f.catLabel}</span>` : ''}
    </div>
    <div class="ff-card-title">${parseMd(f.title)}</div>
    <div class="ff-card-text">${parseMd(f.text)}</div>
  `;
  return card;
}

// ── Render: top bucket tabs ──
function renderBucketTabs() {
  const container = document.getElementById('ff-filters');
  if (!container) return;
  container.innerHTML = '';
  BUCKETS.forEach(({ id, label }) => {
    const btn = document.createElement('button');
    btn.className = 'ff-filter-btn' + (id === currentBucket ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      if (currentBucket === id) return;
      currentBucket = id;
      currentSub = null;
      currentBioUnit = null;
      currentBioCh   = null;
      renderBucketTabs();
      renderSubPills();
      renderBioChapterPills();
      renderCards();
    });
    container.appendChild(btn);
  });
}

// ── Render: sub-pill row ──
// For biology: shows 8 Unit pills
// For others: shows their sub-category pills
function renderSubPills() {
  const container = document.getElementById('ff-subfilters');
  if (!container) return;

  const bucket = BUCKETS.find(b => b.id === currentBucket);

  // Hide row for 'all' bucket or single-sub buckets
  if (currentBucket === 'all' || !bucket || bucket.subs.length <= 1) {
    container.innerHTML = '';
    container.classList.add('hidden');
    renderBioChapterPills(); // ensure chapter row also hidden
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '';

  if (currentBucket === 'biology') {
    // Row 1: "All Units" + 8 unit pills
    const allPill = document.createElement('button');
    allPill.className = 'ff-sub-btn' + (!currentBioUnit ? ' active' : '');
    const totalBioFacts = FACTS.filter(f => bioChapterIds(null).includes(f.cat)).length;
    allPill.innerHTML = `All Units <span class="ff-sub-count">${totalBioFacts}</span>`;
    allPill.addEventListener('click', () => {
      currentBioUnit = null;
      currentBioCh   = null;
      renderSubPills();
      renderBioChapterPills();
      renderCards();
    });
    container.appendChild(allPill);

    getBioUnits().forEach(unit => {
      const chIds = unit.chapters.map(c => c.id);
      const count = FACTS.filter(f => chIds.includes(f.cat)).length;
      const pill  = document.createElement('button');
      pill.className = 'ff-sub-btn' + (currentBioUnit === unit.id ? ' active' : '');
      pill.innerHTML = `${unit.label} <span class="ff-sub-count">${count}</span>`;
      pill.addEventListener('click', () => {
        currentBioUnit = unit.id;
        currentBioCh   = null;
        renderSubPills();
        renderBioChapterPills();
        renderCards();
      });
      container.appendChild(pill);
    });

    renderBioChapterPills();
    return;
  }

  // Non-biology bucket: standard pill row
  renderBioChapterPills(); // hide chapter row

  const allPill = document.createElement('button');
  allPill.className = 'ff-sub-btn' + (currentSub === null ? ' active' : '');
  allPill.textContent = 'All';
  allPill.addEventListener('click', () => {
    currentSub = null;
    renderSubPills();
    renderCards();
  });
  container.appendChild(allPill);

  bucket.subs.forEach(({ id, label }) => {
    const count = FACTS.filter(f => f.cat === id).length;
    const pill  = document.createElement('button');
    pill.className = 'ff-sub-btn' + (currentSub === id ? ' active' : '');
    pill.innerHTML = `${label} <span class="ff-sub-count">${count}</span>`;
    pill.addEventListener('click', () => {
      currentSub = id;
      renderSubPills();
      renderCards();
    });
    container.appendChild(pill);
  });
}

// ── Render: biology chapter pill row (Row 2, only visible inside biology when a unit is selected) ──
function renderBioChapterPills() {
  // We render into ff-biochapters — a second sub-filter row just for biology chapters
  // If that element doesn't exist yet, create and insert it after ff-subfilters
  let container = document.getElementById('ff-biochapters');
  if (!container) {
    const subfilters = document.getElementById('ff-subfilters');
    if (!subfilters) return;
    container = document.createElement('div');
    container.id = 'ff-biochapters';
    container.className = subfilters.className; // inherit same styling class
    subfilters.parentNode.insertBefore(container, subfilters.nextSibling);
  }

  // Only show when inside biology AND a unit is selected
  if (currentBucket !== 'biology' || !currentBioUnit) {
    container.innerHTML = '';
    container.classList.add('hidden');
    return;
  }

  const unit = getBioUnits().find(u => u.id === currentBioUnit);
  if (!unit || !unit.chapters || unit.chapters.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '';

  // "All chapters in this unit" pill
  const allPill = document.createElement('button');
  allPill.className = 'ff-sub-btn ff-sub-btn--chapter' + (!currentBioCh ? ' active' : '');
  const unitCount = FACTS.filter(f => unit.chapters.map(c => c.id).includes(f.cat)).length;
  allPill.innerHTML = `All Chapters <span class="ff-sub-count">${unitCount}</span>`;
  allPill.addEventListener('click', () => {
    currentBioCh = null;
    renderBioChapterPills();
    renderCards();
  });
  container.appendChild(allPill);

  unit.chapters.forEach(ch => {
    const count = FACTS.filter(f => f.cat === ch.id).length;
    const pill  = document.createElement('button');
    pill.className = 'ff-sub-btn ff-sub-btn--chapter' + (currentBioCh === ch.id ? ' active' : '');
    pill.innerHTML = `${ch.label} <span class="ff-sub-count">${count}</span>`;
    pill.addEventListener('click', () => {
      currentBioCh = ch.id;
      renderBioChapterPills();
      renderCards();
    });
    container.appendChild(pill);
  });
}

// ── Render: cards ──
function renderCards() {
  const grid  = document.getElementById('ff-grid');
  const empty = document.getElementById('ff-empty');
  if (!grid || !empty) return;

  const q = currentSearch.toLowerCase().trim();

  // Determine which cat ids are in scope
  let scopeIds;
  if (q) {
    scopeIds = null; // search across everything
  } else if (currentBucket === 'all') {
    scopeIds = null;
  } else if (currentBucket === 'biology') {
    if (currentBioCh)        scopeIds = [currentBioCh];
    else if (currentBioUnit) scopeIds = bioChapterIds(currentBioUnit);
    else                     scopeIds = bioChapterIds(null);
  } else if (currentSub) {
    scopeIds = [currentSub];
  } else {
    scopeIds = catIdsForBucket(currentBucket);
  }

  const filtered = FACTS.filter(f => {
    const inScope     = !scopeIds || scopeIds.includes(f.cat);
    const searchMatch = !q
      || f.title.toLowerCase().includes(q)
      || f.text.toLowerCase().includes(q)
      || f.catLabel.toLowerCase().includes(q);
    return inScope && searchMatch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  // ── Search results: flat grid with badge ──
  if (q) {
    filtered.forEach((f, i) => grid.appendChild(buildCard(f, i, true)));
    return;
  }

  // ── All bucket: group by bucket with sub-sections ──
  if (currentBucket === 'all') {
    BUCKETS.filter(b => b.id !== 'all').forEach(bucket => {
      let bucketCatIds;
      if (bucket.id === 'biology') {
        bucketCatIds = bioChapterIds(null);
      } else {
        bucketCatIds = bucket.subs.map(s => s.id);
      }
      const bucketFacts = filtered.filter(f => bucketCatIds.includes(f.cat));
      if (bucketFacts.length === 0) return;

      const bucketSection = document.createElement('section');
      bucketSection.className = 'ff-bucket-section';

      const bucketHeading = document.createElement('h2');
      bucketHeading.className = 'ff-bucket-title';
      bucketHeading.textContent = bucket.label;
      bucketSection.appendChild(bucketHeading);

      if (bucket.id === 'biology') {
        // Group by unit, then by chapter within unit
        getBioUnits().forEach(unit => {
          const unitFacts = bucketFacts.filter(f => unit.chapters.map(c => c.id).includes(f.cat));
          if (unitFacts.length === 0) return;

          const unitSection = document.createElement('div');
          unitSection.className = 'ff-sub-section';

          const unitHeading = document.createElement('h3');
          unitHeading.className = 'ff-sub-title';
          unitHeading.textContent = unit.label;
          unitSection.appendChild(unitHeading);

          const unitGrid = document.createElement('div');
          unitGrid.className = 'ff-section-grid';
          unitFacts.forEach((f, i) => unitGrid.appendChild(buildCard(f, i, false)));
          unitSection.appendChild(unitGrid);
          bucketSection.appendChild(unitSection);
        });
      } else {
        bucket.subs.forEach(sub => {
          const subFacts = bucketFacts.filter(f => f.cat === sub.id);
          if (subFacts.length === 0) return;

          const subSection = document.createElement('div');
          subSection.className = 'ff-sub-section';

          const subHeading = document.createElement('h3');
          subHeading.className = 'ff-sub-title';
          subHeading.textContent = sub.label;
          subSection.appendChild(subHeading);

          const subGrid = document.createElement('div');
          subGrid.className = 'ff-section-grid';
          subFacts.forEach((f, i) => subGrid.appendChild(buildCard(f, i, false)));
          subSection.appendChild(subGrid);
          bucketSection.appendChild(subSection);
        });
      }

      grid.appendChild(bucketSection);
    });
    return;
  }

  // ── Biology bucket: group by unit (and within unit by chapter if no chapter selected) ──
  if (currentBucket === 'biology' && !currentBioCh) {
    const unitsToShow = currentBioUnit
      ? getBioUnits().filter(u => u.id === currentBioUnit)
      : getBioUnits();

    unitsToShow.forEach(unit => {
      const unitFacts = filtered.filter(f => unit.chapters.map(c => c.id).includes(f.cat));
      if (unitFacts.length === 0) return;

      if (!currentBioUnit) {
        // Show unit heading only when showing all units
        const unitSection = document.createElement('div');
        unitSection.className = 'ff-sub-section';
        const unitHeading = document.createElement('h3');
        unitHeading.className = 'ff-sub-title';
        unitHeading.textContent = unit.label;
        unitSection.appendChild(unitHeading);

        // Within unit, group by chapter
        unit.chapters.forEach(ch => {
          const chFacts = unitFacts.filter(f => f.cat === ch.id);
          if (chFacts.length === 0) return;
          const chSection = document.createElement('div');
          chSection.className = 'ff-sub-section ff-sub-section--chapter';
          const chHeading = document.createElement('h4');
          chHeading.className = 'ff-sub-title ff-sub-title--chapter';
          chHeading.textContent = ch.label;
          chSection.appendChild(chHeading);
          const chGrid = document.createElement('div');
          chGrid.className = 'ff-section-grid';
          chFacts.forEach((f, i) => chGrid.appendChild(buildCard(f, i, false)));
          chSection.appendChild(chGrid);
          unitSection.appendChild(chSection);
        });
        grid.appendChild(unitSection);
      } else {
        // Unit selected, no chapter: group by chapter with headings
        unit.chapters.forEach(ch => {
          const chFacts = filtered.filter(f => f.cat === ch.id);
          if (chFacts.length === 0) return;
          const chSection = document.createElement('div');
          chSection.className = 'ff-sub-section';
          const chHeading = document.createElement('h3');
          chHeading.className = 'ff-sub-title';
          chHeading.textContent = ch.label;
          chSection.appendChild(chHeading);
          const chGrid = document.createElement('div');
          chGrid.className = 'ff-section-grid';
          chFacts.forEach((f, i) => chGrid.appendChild(buildCard(f, i, false)));
          chSection.appendChild(chGrid);
          grid.appendChild(chSection);
        });
      }
    });
    return;
  }

  // ── Single bucket (non-biology), no sub selected: group by sub with sub-headings ──
  if (!currentSub && currentBucket !== 'biology') {
    const bucket = BUCKETS.find(b => b.id === currentBucket);
    bucket.subs.forEach(sub => {
      const subFacts = filtered.filter(f => f.cat === sub.id);
      if (subFacts.length === 0) return;

      const subSection = document.createElement('div');
      subSection.className = 'ff-sub-section';

      const subHeading = document.createElement('h3');
      subHeading.className = 'ff-sub-title';
      subHeading.textContent = sub.label;
      subSection.appendChild(subHeading);

      const subGrid = document.createElement('div');
      subGrid.className = 'ff-section-grid';
      subFacts.forEach((f, i) => subGrid.appendChild(buildCard(f, i, false)));
      subSection.appendChild(subGrid);
      grid.appendChild(subSection);
    });
    return;
  }

  // ── Single chapter/sub selected: flat grid ──
  filtered.forEach((f, i) => grid.appendChild(buildCard(f, i, false)));
}

export function initFunFacts() {
  const firstBucket = BUCKETS.find(b => b.id !== 'all');
  currentBucket = firstBucket ? firstBucket.id : 'all';
  currentSub    = firstBucket && firstBucket.subs.length > 0 ? firstBucket.subs[0].id : null;

  renderBucketTabs();
  renderSubPills();
  renderBioChapterPills();
  renderCards();

  const searchInput = document.getElementById('ff-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      const subContainer = document.getElementById('ff-subfilters');
      if (subContainer) {
        subContainer.classList.toggle('hidden', !!e.target.value.trim());
      }
      const chContainer = document.getElementById('ff-biochapters');
      if (chContainer) {
        chContainer.classList.toggle('hidden', !!e.target.value.trim());
      }
      renderCards();
    });
  }
}
