"use strict";

function mission(title, icon, tag, art, paint, notice, question, options, best, feedback, reflection) {
  return {
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: title,
    icon: icon,
    tag: tag,
    art: art,
    age: "6–12",
    materials: "Paper and pencil",
    paint: paint,
    notice: notice,
    question: question,
    options: options,
    best: best,
    feedback: feedback,
    reflection: reflection
  };
}

function chapter(title, icon, world, badge, art, draw, detail, question, options, best, explanation, critical, science, quranRef, quranReflection, reflect) {
  return {
    title: title,
    icon: icon,
    world: world,
    badge: badge,
    art: art,
    draw: draw,
    detail: detail,
    question: question,
    options: options,
    best: best,
    explanation: explanation,
    critical: critical,
    science: science,
    quranRef: quranRef,
    quranReflection: quranReflection,
    reflect: reflect
  };
}

// A content bank retained for future expansions. The live three-chapter series is below.
const missionLibrary = [
  {
    slug: "find-the-pattern",
    icon: "🐝",
    title: "Find the Pattern",
    skill: "Pattern recognition",
    accent: "#b77c25",
    line: "Spot repeats, rules, symmetry, spirals, and hidden order.",
    examples: [
      mission("Growing Vine", "🌱", "Plant", "plant", "Trace the stem and repeating leaves. Add the next two leaves.", "Point to the rule. Do the leaves swap sides or stay on one side?", "Which leaf should come next?", ["A leaf on the opposite side", "A flower anywhere", "No leaf at all"], 0, "The leaves alternate from one side to the other.", "Where else can growth make a repeating pattern?"),
      mission("Branch Symmetry", "🌳", "Tree", "tree", "Trace the trunk and branches. Add one matching branch.", "Compare the left and right sides. What feels balanced?", "What makes this tree pattern symmetrical?", ["Both sides have a similar shape", "Every branch is a different colour", "The trunk is the tallest part"], 0, "Symmetry means the two sides have a similar arrangement.", "Can something be balanced without being exactly the same?"),
      mission("Camel Tracks", "🐪", "Animal", "camel", "Trace the camel and its trail. Add two more footprints.", "Which shapes repeat, and which way is the camel walking?", "What makes the footprints a pattern?", ["The same shapes repeat in order", "They are drawn in sand", "The camel is large"], 0, "A pattern follows a rule that repeats.", "What signs in the sand can tell a story?"),
      mission("Honeycomb Detective", "🍯", "Nature", "honeycomb", "Trace the honeycomb. Complete the missing hexagons.", "Count the sides and look for empty gaps.", "Why might bees use hexagons?", ["They fit together without gaps", "They are always yellow", "Bees cannot draw circles"], 0, "Hexagons join neatly and use space well.", "Where else do small shapes make something strong?"),
      mission("Spiral Shell", "🐚", "Nature", "shell", "Trace the spiral slowly. Continue it one turn outward.", "Does the spiral grow wider or stay the same?", "Which line best continues the spiral?", ["A curve that grows outward", "A straight line through it", "A tiny circle far away"], 0, "The next line follows the same curve as it grows.", "Where have you seen spirals in creation?"),
      mission("Wave Rhythm", "🌊", "Water", "wave", "Trace the waves. Add two with the same rhythm.", "Point to each up, down, and repeat.", "Which wave continues the rule?", ["The same height and spacing", "The tallest wave possible", "A flat line"], 0, "A repeating wave keeps the same rhythm.", "What other movements have a rhythm?")
    ]
  },
  {
    slug: "look-closely",
    icon: "🔎",
    title: "Look Closely",
    skill: "Observation",
    accent: "#67805d",
    line: "Slow down, compare visible details, and notice what changed.",
    examples: [
      mission("Two Leaves", "🍃", "Plant", "plant", "Trace both leaves. Add veins and different edges.", "Compare shape, edge, veins, and size.", "Which detail is strongest for comparing leaves?", ["Details you can point to", "The colour you like most", "Whichever leaf is first"], 0, "Strong observations can be seen and checked.", "How can two leaves be alike but not the same?"),
      mission("Bark Map", "🌳", "Tree", "bark", "Trace the trunk. Add cracks, knots, and bark lines.", "Find one thick line, one thin line, and one closed shape.", "Which sentence is a careful observation?", ["The bark has three long cracks", "This is the best tree", "The tree feels happy"], 0, "A careful observation names something visible.", "What appeared only after you slowed down?"),
      mission("Feather Details", "🪶", "Animal", "feather", "Trace the feather. Add fine barbs on both sides.", "Are the two sides exactly the same?", "What should you check before deciding?", ["Several visible details", "Only the colour", "Your first guess"], 0, "Looking at several details makes a comparison stronger.", "Why do tiny details matter?"),
      mission("Beetle Spots", "🐞", "Insect", "beetle", "Trace the beetle. Add spots, legs, and antennae.", "Count its legs, spots, and body sections.", "Which observation is strongest?", ["The one you can point to", "The funniest answer", "The quickest answer"], 0, "Evidence is something you can show another person.", "What did the beetle teach you to notice?"),
      mission("Cloud Shapes", "☁️", "Sky", "cloud", "Trace the clouds. Add soft shadow lines.", "Which cloud is tall, flat, or stretched?", "How can these clouds look different?", ["Their shapes and edges change", "One has a better name", "The sky chooses a winner"], 0, "Shape, height, and edges are visible differences.", "What shapes did you almost miss?"),
      mission("Shell Lines", "🐚", "Nature", "shell", "Trace the shell. Add thick and thin growth lines.", "Count the lines and compare their spacing.", "What proves two shells are different?", ["A visible line, shape, or size difference", "One was found first", "One is your favourite"], 0, "A visible detail gives evidence for the difference.", "What did a second look reveal?")
    ]
  },
  {
    slug: "best-reason-wins",
    icon: "⚖️",
    title: "Best Reason Wins",
    skill: "Careful judgement",
    accent: "#a45c3c",
    line: "Compare reasons, separate needs from wants, and choose kindly.",
    examples: [
      mission("Thirsty Seedling", "🌱", "Plant", "plant", "Trace the seedling. Add what it needs today.", "Look at the soil and drooping leaves.", "What helps this seedling most?", ["Water at its roots", "A shiny ribbon", "A louder name"], 0, "Water supports the plant's real need to grow.", "How can noticing needs help you act kindly?"),
      mission("Shade from a Tree", "🌳", "Tree", "tree", "Trace the tree. Draw a safe resting place in its shade.", "Notice where the sun is and where the shadow falls.", "Why is the shaded place the wiser choice?", ["It protects from strong heat", "It has more leaves to count", "It is farther away"], 0, "The strongest reason explains how the shade keeps someone safer.", "When can comfort also be protection?"),
      mission("The Fox Needs", "🦊", "Animal", "fox", "Trace the fox. Add what it truly needs.", "What is missing from the fox's place?", "Which one is a real need?", ["Clean water", "A gold crown", "A toy car"], 0, "Water supports life; the other choices are wants.", "What is the difference between a need and a want?"),
      mission("Safest Path", "🧭", "Choice", "path", "Trace the three paths. Circle the safest one.", "Which path avoids the loose rocks and deep water?", "Which reason is strongest?", ["It gets there safely", "It is the shortest line", "It has the prettiest curve"], 0, "Safety is more important than speed or appearance.", "When should safe beat fast?"),
      mission("Share the Water", "🥤", "Fairness", "cups", "Trace two cups. Add water where it is needed most.", "Who is thirsty, weak, or still waiting?", "Which reason is fairest?", ["Help the one with the greatest need", "Always choose the tallest", "Keep both cups empty"], 0, "Fairness pays attention to real need.", "How can fairness be kind?"),
      mission("Bird Shelter Choice", "🐦", "Animal", "bird", "Trace the bird and shelters. Mark the safest home.", "Which shelter blocks wind and rain?", "Which shelter is best?", ["The dry, protected shelter", "The brightest colour", "The one with no roof"], 0, "A good shelter protects the bird safely.", "What makes a choice wise?")
    ]
  },
  {
    slug: "everything-connects",
    icon: "💧",
    title: "Everything Connects",
    skill: "Systems thinking",
    accent: "#4f817e",
    line: "Follow cycles, food chains, and the helpers inside living systems.",
    examples: [
      mission("Flower and Bee", "🌼", "Plant", "bee", "Trace the flower and bee. Draw the path between them.", "What does the bee collect and what does the flower receive?", "Why are bees and flowers connected?", ["They help feed each other and make seeds", "They are the same colour", "They both fly"], 0, "Flowers feed bees, and bees help flowers make seeds.", "What small helper can change a big system?"),
      mission("Tree Home", "🌳", "Tree", "tree", "Trace the tree. Add birds, insects, roots, and shade.", "Count how many living things use the tree.", "What happens if the tree disappears?", ["Many lives lose food or shelter", "Nothing changes", "Only the leaves notice"], 0, "One tree supports many connected lives.", "How does one tree serve a neighbourhood?"),
      mission("One Drop's Journey", "💧", "Water", "water", "Trace the water cycle arrows.", "Where does the drop go next?", "If a river dries, who may be affected?", ["Fish, trees, and people", "Only stones", "Nobody"], 0, "Water connects many parts of a living system.", "How can one drop serve many lives?"),
      mission("Grass to Camel", "🐪", "Habitat", "food", "Trace the sun, grass, water, and camel.", "Follow the arrows toward the camel.", "What does the camel depend on?", ["Water and plants", "Only sand", "Footprints alone"], 0, "Animals depend on water, plants, and a working habitat.", "Which hidden helpers support an animal?"),
      mission("Cloud to Cup", "☁️", "Cycle", "water", "Trace cloud, rain, river, and cup.", "Which steps move water closer to us?", "Why is a cup connected to a cloud?", ["Water travels through a cycle", "Both can be white", "The cup makes rain"], 0, "The water in a cup has travelled through connected places.", "What journey might your water have taken?"),
      mission("Meadow Food Chain", "🦋", "Ecosystem", "food", "Trace the simple food chain. Add arrows for energy.", "Which living thing depends on another?", "Why do the arrows matter?", ["They show how food and energy move", "They make the page colourful", "They count the animals"], 0, "Arrows help show the direction of a connection.", "What changes if one link disappears?")
    ]
  },
  {
    slug: "build-and-improve",
    icon: "🏗️",
    title: "Build and Improve",
    skill: "Design thinking",
    accent: "#4d6846",
    line: "Notice a need, build an idea, test it, and make it better.",
    examples: [
      mission("Plant Support", "🌱", "Plant", "plant", "Trace the tall plant. Design a support beside it.", "Where is the stem bending?", "Which support works best?", ["One that holds the stem gently", "One that covers every leaf", "One that never touches the plant"], 0, "A good support solves the bending problem without harming the plant.", "What would you change after testing it?"),
      mission("Bird Perch Tree", "🌳", "Tree", "tree", "Trace the tree. Add a strong perch for a small bird.", "Which branch looks thick and sheltered?", "Where should the perch go?", ["On a strong protected branch", "On the thinnest twig", "Under the roots"], 0, "The design must suit the bird and the tree.", "How can a design help two living things?"),
      mission("Bridge for Ants", "🐜", "Build", "bridge", "Trace the stones and gap. Draw a bridge across.", "What must the ants cross safely?", "What makes the bridge better?", ["It helps ants cross without falling", "It is very tall", "It uses the most pencil"], 0, "A good design solves the real crossing problem.", "What did you improve in your design?"),
      mission("Bird Nest", "🪺", "Build", "nest", "Trace the nest. Add safe building materials.", "What keeps eggs from rolling out?", "Which material works best?", ["Soft, strong pieces that hold shape", "Smooth glass marbles", "Loose water"], 0, "A nest needs materials that are gentle and strong.", "How can small pieces make a strong home?"),
      mission("Camel Shade", "🐪", "Shelter", "camel", "Trace the camel. Design shade above it.", "Where is the sun coming from?", "Which design gives the best shade?", ["A cover that blocks the sun", "A tiny flag", "A line under the sand"], 0, "The best design directly blocks strong sunlight.", "How can design show mercy?"),
      mission("Rain Collector", "🌧️", "Water", "collector", "Trace the roof and container. Draw where rain flows.", "Does the water reach the container?", "Which design saves the most water?", ["One that guides water into the container", "One with a hole in the bottom", "One placed indoors"], 0, "A useful collector guides and keeps the water.", "How can one small improvement reduce waste?")
    ]
  },
  {
    slug: "wonder-deeply",
    icon: "🌙",
    title: "Wonder Deeply",
    skill: "Tafakkur",
    accent: "#66708f",
    line: "Pause with curiosity, gratitude, and thoughtful reflection.",
    examples: [
      mission("Seed to Sprout", "🌱", "Plant", "seed", "Trace seed, root, sprout, and leaf.", "Which part appears first below the soil?", "What does the seed need to grow?", ["Water, light, and the right place", "A bell and a mirror", "Only a name"], 0, "Growth needs the right conditions and patient care.", "What small beginning might become something big?"),
      mission("Tree Rings", "🌳", "Tree", "bark", "Trace the tree rings. Add one ring around the outside.", "Which rings are close together or far apart?", "What can rings help us notice?", ["A tree's years and growing conditions", "The tree's favourite song", "How loud the forest is"], 0, "Rings hold clues about years of growth.", "What quiet story can a tree carry?"),
      mission("Heartbeat and Breath", "❤️", "Body", "heart", "Trace the heartbeat line. Add the rhythm you feel.", "What changes after movement and rest?", "Why might a heartbeat feel faster?", ["The body is working harder", "The heart forgot its job", "The pencil made it hurry"], 0, "The heart speeds up when the body needs more oxygen.", "What quiet gift in your body are you thankful for?"),
      mission("Moon Phases", "🌙", "Sky", "moon", "Trace the moon shapes from crescent to full.", "What changes and what stays the same?", "Which moon comes next?", ["The one continuing the phase order", "Any random circle", "A cloud"], 0, "The phases follow a patient, repeating order.", "How can the sky teach patience?"),
      mission("Stars Above", "⭐", "Sky", "stars", "Trace the stars and add a quiet horizon.", "Which stars look bright, dim, near, or far?", "Why look carefully before guessing?", ["To notice what is really there", "To finish first", "To make every star equal"], 0, "Careful looking gives wonder a strong foundation.", "What does the wide sky make you wonder about?"),
      mission("Gratitude for Water", "💧", "Water", "water", "Trace the raindrop, river, and cup.", "Who and what needs this water?", "Why is water a blessing?", ["Many living things depend on it", "It only fills cups", "It is always easy to find"], 0, "Water supports people, animals, and plants.", "How can you use water with gratitude today?")
    ]
  }
];

const pillars = [
  {
    slug: "find-the-pattern",
    icon: "🐝",
    title: "Find the Pattern",
    skill: "Pattern recognition",
    accent: "#b77c25",
    phrase: "I found the rule.",
    line: "Follow repeats, symmetry, and hidden rules across three worlds.",
    pillarBadge: "Pattern Finder",
    chapters: [
      chapter("Camel Track Rhythm", "🐪", "Animal world", "Camel Badge", "camel", "Trace the camel and its footprint trail.", "Add two footprints that continue the rhythm.", "What makes the footprints a pattern?", ["The same shapes repeat in order", "They are drawn in sand", "The camel is tall"], 0, "The same footprint shapes repeat in a predictable order.", "If one footprint vanished, how could you work out what belonged in the gap?", "A pattern has a rule. Once you find the rule, you can predict a missing part.", "Qur’an 88:17", "This verse invites us to look carefully at the camel and wonder about how it was created.", "What other signs in the sand might tell a story?"),
      chapter("Branching Rule", "🌳", "Plant world", "Tree Badge", "tree", "Trace the trunk and its branching shapes.", "Add one branch that follows the tree’s rule.", "Which branch best continues the pattern?", ["A branch with similar direction and spacing", "A circle under the roots", "A branch floating far away"], 0, "The strongest continuation keeps the same direction and spacing rule.", "Can a tree follow a pattern without both sides being exactly the same?", "Trees often branch with repeated forms, but wind, light, and space make every tree a little different.", "Qur’an 6:99", "The verse points to growing plants and fruits as signs worth observing closely.", "Where do you notice order and difference together?"),
      chapter("Kidney Filter Pattern", "🫘", "Human body world", "Kidney Badge", "kidney", "Trace the two kidneys and their flowing tubes.", "Add arrows to show a keep-or-remove pattern.", "What is the kidney’s basic sorting pattern?", ["Keep what the body needs and remove some waste", "Remove everything", "Keep everything"], 0, "Kidneys repeatedly filter blood, return useful materials, and help remove wastes.", "Why is a steady filtering rule safer than a random one?", "Each kidney contains about a million tiny filtering units called nephrons working in repeated steps.", "Qur’an 51:20–21", "These verses invite people to notice signs in the earth and within themselves.", "What quiet body pattern is helping you right now?")
    ]
  },
  {
    slug: "look-closely",
    icon: "🔎",
    title: "Look Closely",
    skill: "Observation",
    accent: "#67805d",
    phrase: "I noticed something small.",
    line: "Slow down and use visible details as evidence.",
    pillarBadge: "Careful Observer",
    chapters: [
      chapter("Leaf Detail Detective", "🍃", "Plant world", "Leaf Badge", "plant", "Trace the stem and three leaves.", "Give each leaf different veins or edges.", "Which detail is best for comparing two leaves?", ["Shape, edge, veins, and size", "Only the colour you like", "Whichever leaf you saw first"], 0, "Visible details can be pointed to, compared, and checked.", "Why might two leaves from one plant still look slightly different?", "Light, water, age, damage, and position can affect how a leaf grows.", "Qur’an 6:99", "The verse encourages us to look at plants as they grow and fruit ripens.", "What appeared only after your second look?"),
      chapter("One Drop, Many Details", "💧", "Water world", "Drop Badge", "water", "Trace the large water drop and the small ripples.", "Add one detail showing where the drop has been.", "Which observation can you check on the drawing?", ["The drop has curved sides and a pointed top", "The drop is the happiest", "The drop likes blue best"], 0, "A careful observation describes something another person can see too.", "How could the same water look different as ice, rain, mist, or a river?", "Water changes state and shape, but its tiny water molecules remain water.", "Qur’an 21:30", "The verse connects water with the life of living things.", "Who might depend on this one drop?"),
      chapter("Heartbeat Evidence", "❤️", "Human body world", "Heart Badge", "heart", "Trace the heart and heartbeat line.", "Add a second line for after gentle movement.", "Which detail is useful evidence?", ["The beats became closer together", "The line looks brave", "Red is the best colour"], 0, "Spacing between beats is visible evidence that can be compared.", "What would you need to observe before saying movement made the heart faster?", "Muscles need more oxygen during activity, so heart rate usually rises and later settles with rest.", "Qur’an 51:21", "The verse invites us to notice signs within our own bodies.", "What changed when you paused and listened?")
    ]
  },
  {
    slug: "best-reason-wins",
    icon: "⚖️",
    title: "Best Reason Wins",
    skill: "Careful judgement",
    accent: "#a45c3c",
    phrase: "I chose with a reason.",
    line: "Compare needs, safety, fairness, and the strength of evidence.",
    pillarBadge: "Wise Chooser",
    chapters: [
      chapter("What the Camel Needs", "🐪", "Animal world", "Desert Helper Badge", "camel", "Trace the camel in its desert place.", "Add the one thing it needs most right now.", "Which choice has the strongest reason?", ["Water and shade because they protect life", "A crown because it shines", "A bell because it is loud"], 0, "Water and shade answer a real survival need in strong heat.", "How can you tell a need from a want?", "Animals need water, suitable food, shelter, and safe temperatures; decorations are optional.", "Qur’an 88:17", "The verse asks us to look at the camel and consider how it was created.", "How does careful reasoning help us show mercy to animals?"),
      chapter("Share the Water", "🥤", "Water world", "Fairness Badge", "cups", "Trace the two cups and the water line.", "Draw who needs the first full cup.", "Which reason is fairest?", ["Help the one with the greatest real need", "Choose the tallest person every time", "Keep both cups empty"], 0, "Fairness notices real need instead of using an unrelated rule.", "Does fair always mean everyone receives exactly the same amount?", "Equal and fair can differ: sometimes a person with a greater need requires more help.", "Qur’an 7:31", "The verse teaches enjoyment without wastefulness—a useful guide when sharing water.", "What is one fair choice you could make today?"),
      chapter("A Heart-Safe Choice", "❤️", "Human body world", "Safe Choice Badge", "heart", "Trace the heart and three path lines.", "Circle the path that includes rest, water, and movement.", "Which reason is strongest for caring for the body?", ["Healthy habits help the body do its work", "They earn the brightest sticker", "They always make a day easy"], 0, "The strongest reason explains how the choice supports the body.", "What evidence would help you decide whether a habit is helping?", "Sleep, movement, nourishing food, and water support many body systems, including the heart.", "Qur’an 2:195", "The verse includes a reminder not to bring harm upon ourselves and to do good.", "How can caring for yourself help you care for others?")
    ]
  },
  {
    slug: "everything-connects",
    icon: "💧",
    title: "Everything Connects",
    skill: "Systems thinking",
    accent: "#4f817e",
    phrase: "I saw the connection.",
    line: "Trace how one change can travel through a whole living system.",
    pillarBadge: "Connection Keeper",
    chapters: [
      chapter("Cloud to Cup", "💧", "Water world", "Water Cycle Badge", "water", "Trace the drop and the cycle arrows.", "Add cloud, river, pipe, or cup around the journey.", "Why is a cup connected to a cloud?", ["Water travels through connected places", "Both can be white", "A cup creates rain"], 0, "Rain can travel through land, rivers, storage, and pipes before reaching a cup.", "If one part of the journey became polluted, what else could be affected?", "Water cycles through air, land, living things, and waterways; changes can spread through the system.", "Qur’an 39:21", "The verse describes water sent down, flowing into the earth, and bringing varied plants.", "How many lives might one clean water source support?"),
      chapter("One Tree, Many Homes", "🌳", "Plant world", "Tree Home Badge", "tree", "Trace the tree and its roots.", "Add three living things that use the tree.", "What happens if the tree disappears?", ["Many lives lose food, shelter, or shade", "Only the leaves notice", "Nothing else changes"], 0, "A tree can support birds, insects, soil life, plants, and people.", "Which connection might be hidden underground?", "Roots connect with soil, water, fungi, and tiny organisms while helping hold soil in place.", "Qur’an 16:10–11", "The verses connect rainwater with crops, olives, palms, grapes, and many fruits.", "What is one gift a tree gives without making a sound?"),
      chapter("Kidneys Keep Balance", "🫘", "Human body world", "Balance Badge", "kidney", "Trace the kidneys, blood path, and water arrows.", "Add an arrow showing water returning to the body.", "Why are kidneys connected to the whole body?", ["They help balance water and remove wastes from blood", "They control every thought", "They only work after meals"], 0, "Because blood travels throughout the body, kidney filtering supports many tissues.", "What might change elsewhere if water balance became too high or too low?", "Kidneys help regulate fluid, salts, acidity, and waste removal as part of several connected body systems.", "Qur’an 55:7–9", "The verses speak about balance and keeping measure with justice.", "Where do you notice balance helping a system work?")
    ]
  },
  {
    slug: "build-and-improve",
    icon: "🏗️",
    title: "Build and Improve",
    skill: "Design thinking",
    accent: "#4d6846",
    phrase: "I made it better.",
    line: "Design for a real need, test the idea, and improve one part.",
    pillarBadge: "Kind Designer",
    chapters: [
      chapter("Camel Shade Shelter", "🐪", "Animal world", "Shelter Badge", "camel", "Trace the camel in the sun.", "Design a shelter that casts shade over its body.", "Which design works best?", ["A stable cover that blocks the strong sun", "A tiny flag by its feet", "A roof with no supports"], 0, "A useful shelter must block sunlight and remain stable.", "How could you test the shelter without using a real camel?", "Designers use models, light, and shadows to test coverage before building at full size.", "Qur’an 16:81", "The verse mentions shade and shelter among provisions for people.", "How can a design show care for a living thing?"),
      chapter("A Safer Tree Home", "🪺", "Plant world", "Nest Builder Badge", "tree", "Trace the tree and its strongest branches.", "Add a nest where it will be supported and sheltered.", "Where is the strongest nest position?", ["A thick fork protected by branches", "The thinnest outer twig", "Below the roots"], 0, "A thick, sheltered fork offers support and some protection.", "What would you change if wind shook your first design?", "A good structure spreads weight, uses secure connections, and responds to wind and rain.", "Qur’an 16:80", "The verse reminds us that homes and shelters are sources of rest.", "What makes a home feel safe as well as strong?"),
      chapter("Rainwater Collector", "🌧️", "Water world", "Water Saver Badge", "collector", "Trace the roof, channel, and container.", "Add one improvement that stops water escaping.", "Which design saves the most water?", ["One that guides rain into a covered container", "One with a hole in the bottom", "One placed far from the roof"], 0, "Guiding and safely storing the water solves the collection problem.", "How could you improve the design after a very heavy rain?", "Real collectors need enough capacity, stable channels, an overflow route, and clean covered storage.", "Qur’an 23:18", "The verse describes water sent down in due measure and stored in the earth.", "How can one small design reduce waste?")
    ]
  },
  {
    slug: "wonder-deeply",
    icon: "🌙",
    title: "Wonder Deeply",
    skill: "Tafakkur",
    accent: "#66708f",
    phrase: "I wondered with gratitude.",
    line: "Pause with the body, creation, gratitude, and quiet questions.",
    pillarBadge: "Thoughtful Wonderer",
    chapters: [
      chapter("Heartbeat and Breath", "❤️", "Human body world", "Heartbeat Badge", "heart", "Trace the heart and its repeating line.", "Add a calm line for resting after movement.", "Why might the heartbeat become faster?", ["The body is working harder", "The heart forgot its job", "The pencil made it hurry"], 0, "Activity increases the body’s demand for oxygen, so the heart usually beats faster.", "Your heart works without you telling it each beat. What does that make you wonder?", "The heart, lungs, blood, and muscles cooperate continuously during both movement and rest.", "Qur’an 67:23", "The verse reminds us of hearing, sight, and hearts, and calls us toward gratitude.", "What quiet gift in your body are you thankful for?"),
      chapter("Quiet Kidney Helpers", "🫘", "Human body world", "Quiet Helper Badge", "kidney", "Trace the kidneys and their tiny filter pattern.", "Add many small dots to represent filtering units.", "Why do kidneys work all day and night?", ["The body continually makes wastes and needs balance", "They are trying to win", "They only like darkness"], 0, "Body cells keep working, so filtering and balance are ongoing needs.", "How can something be important even when you cannot feel it happening?", "Kidneys quietly filter large volumes of blood and adjust what the body keeps or removes.", "Qur’an 51:21", "The verse invites us to notice signs within ourselves.", "Which unseen body job makes you feel grateful?"),
      chapter("From Seed to Tree", "🌱", "Plant world", "Growth Badge", "seed", "Trace the seed, root, stem, and first leaves.", "Add what the young plant may become with time.", "What does the seed need to begin growing?", ["Water, suitable warmth, and the right place", "A mirror and a bell", "Only a name"], 0, "A seed begins growing when conditions such as water and warmth are suitable.", "How can something so small hold the beginning of something much larger?", "A seed contains a young plant and stored resources that support early growth before leaves make food.", "Qur’an 36:33–35", "The verses point to lifeless earth brought to life and gardens producing food.", "What small beginning in your life could grow with patient care?")
    ]
  }
];

const seriesScreens = ["hero", "draw", "mcq", "think", "reflect", "finish"];

const drawings = {
  plant: "<path class='trace-line' d='M302 392V187c-6-55-37-94-89-120'/><path class='trace-shape' d='M299 252c-68 4-111-23-129-81 66-8 109 19 129 81z'/><path class='trace-shape' d='M305 193c57-2 95-28 113-79-57-6-95 20-113 79z'/><path class='trace-shape' d='M300 320c55-2 92-27 111-76-57-5-94 20-111 76z'/><path class='trace-thin' d='M299 252 201 190M305 193l82-59M300 320l79-57'/><path class='trace-line' d='M237 393h130'/>",
  tree: "<path class='trace-shape' d='M272 390c17-67 18-119 4-156-57 16-114-17-115-76-2-45 34-76 78-71 14-39 48-61 88-54 34 6 56 31 61 62 44-4 80 31 78 75-2 51-48 82-101 68-18 45-18 96 0 152z'/><path class='trace-line' d='M302 389V159M302 249l-77-71M302 214l70-74M302 294l94-62'/><path class='trace-thin' d='M257 389h92'/>",
  bark: "<path class='trace-shape' d='M202 405c27-89 31-205 12-348h173c-18 151-15 267 12 348z'/><path class='trace-line' d='M270 58c20 77 13 150-20 218M344 58c-31 92-26 184 16 276M221 125c55 28 107 30 157 7'/><path class='trace-thin' d='M278 174c12-20 31-21 49-2-11 25-29 30-49 2zM257 331c25-18 51-17 78 4'/>",
  camel: "<path class='trace-shape' d='M116 304c23-18 43-50 57-96 17-59 49-88 96-88 42 0 68 25 87 68 18-43 48-66 88-66 48 0 71 33 66 96l-9 112H151z'/><path class='trace-line' d='M426 143c16-43 37-68 62-76 25-8 50 1 74 27l-25 39-50-6-18 202M193 302l-7 87M431 303l12 86'/><path class='trace-thin' d='M480 95l30 7M177 391h31M425 391h38'/><path class='trace-dash' d='M90 389h53m-93-42h53'/>",
  honeycomb: "<path class='trace-shape' d='m203 96 52 30v60l-52 30-52-30v-60zm104 0 52 30v60l-52 30-52-30v-60zm-52 90 52 30v60l-52 30-52-30v-60zm104 0 52 30v60l-52 30-52-30v-60zm-156 90 52 30v60l-52 30-52-30v-60z'/><path class='trace-dash' d='m359 276 52 30v60l-52 30-52-30v-60z'/>",
  shell: "<path class='trace-shape' d='M107 373c-17-161 55-276 193-287 135-10 226 94 199 213-23 99-119 146-211 103-76-35-95-139-31-193 53-45 138-13 139 55 1 52-56 79-91 45-25-24-11-66 24-66'/><path class='trace-thin' d='M107 373c81-33 142-29 181 29M116 300c69-11 117 5 144 49M145 208c58 6 96 29 113 68'/>",
  wave: "<path class='trace-line' d='M50 156c48-59 97-59 145 0s97 59 145 0 97-59 145 0 97 59 145 0M50 247c48-59 97-59 145 0s97 59 145 0 97-59 145 0 97 59 145 0M50 338c48-59 97-59 145 0s97 59 145 0'/><path class='trace-dash' d='M340 338c48-59 97-59 145 0s97 59 145 0'/>",
  feather: "<path class='trace-shape' d='M128 379C164 164 278 52 477 56c-8 181-111 292-309 333z'/><path class='trace-line' d='M130 403 397 120'/><path class='trace-thin' d='m204 326-20-112m73 55-18-117m75 57-9-105m69 48 12-75M210 323l116 14m-69-68 118 9m-61-69 101-3'/>",
  beetle: "<ellipse class='trace-shape' cx='300' cy='251' rx='111' ry='139'/><path class='trace-line' d='M300 113v277M219 143c12-51 40-77 81-77s69 26 81 77'/><circle class='trace-thin' cx='247' cy='214' r='17'/><circle class='trace-thin' cx='353' cy='214' r='17'/><circle class='trace-thin' cx='249' cy='308' r='17'/><circle class='trace-thin' cx='351' cy='308' r='17'/><path class='trace-line' d='m194 189-74-38m68 105-89 4m103 65-74 62m278-198 74-38m-68 105 89 4m-103 65 74 62M267 78l-38-45m104 45 38-45'/>",
  cloud: "<path class='trace-shape' d='M99 300c-48-58-3-137 70-130 5-77 97-117 156-65 41-55 136-30 142 39 79-5 111 98 47 142-60 41-358 47-415 14z'/><path class='trace-thin' d='M159 348c38 21 78 21 120 0m43 0c38 21 78 21 120 0'/>",
  fox: "<path class='trace-shape' d='M174 202c6-68 46-111 112-126l18 65 60-65c61 16 99 60 103 126 5 90-55 153-148 153s-153-63-145-153z'/><path class='trace-line' d='M188 214c44 43 81 65 113 65 34 0 77-23 129-68-17 89-57 134-121 134-65 0-105-44-121-131z'/><circle cx='258' cy='202' r='9'/><circle cx='368' cy='202' r='9'/><path class='trace-thin' d='m313 239-20 22h40zM271 282c26 19 56 19 84 0'/>",
  path: "<path class='trace-line' d='M93 412c26-104 72-187 138-249M295 412c-9-99-3-181 19-247M507 412c-33-100-75-183-127-249'/><path class='trace-shape' d='M82 123h122l-61-75zM270 114h92l-46-66zM406 128h114l-57-79z'/><path class='trace-thin' d='M103 312h56m184-68 50 45m-50 0 50-45'/>",
  cups: "<path class='trace-shape' d='M111 159h155l-18 221H129zM334 159h155l-18 221H352z'/><path class='trace-line' d='M121 271h136M344 220h136'/><path class='trace-thin' d='M145 114c-18-27-17-51 3-74m58 74c-18-27-17-51 3-74m179 74c-18-27-17-51 3-74m58 74c-18-27-17-51 3-74'/>",
  bird: "<path class='trace-shape' d='M160 276c0-89 73-156 164-137 73 16 117 82 101 155-18 83-109 125-188 87-48-23-77-58-77-105z'/><path class='trace-shape' d='M233 279c28-60 78-83 150-67-33 71-83 94-150 67z'/><path class='trace-line' d='m422 205 96 38-91 29M210 377l-11 44m82-24 8 34'/><circle cx='375' cy='181' r='9'/><path class='trace-thin' d='M112 422h378'/>",
  water: "<path class='trace-shape' d='M259 82c-87 126-112 197-74 254 47 70 167 70 214 0 38-57 13-128-74-254-18-26-48-26-66 0z'/><path class='trace-line' d='M172 160c-53 24-84 68-91 132m347-132c53 24 84 68 91 132M82 292l-23-35m23 35 34-25m402 25 23-35m-23 35-34-25'/><path class='trace-thin' d='M213 306c43 39 99 39 160 0'/>",
  bee: "<path class='trace-shape' d='M101 344c17-86 64-130 141-130s124 44 141 130z'/><path class='trace-line' d='M242 214c47-80 95-95 144-45 26-62 73-77 140-43-11 79-58 116-143 111'/><ellipse class='trace-shape' cx='393' cy='258' rx='84' ry='59'/><path class='trace-line' d='M333 233c38 18 76 18 116 0m-113 54c38 18 76 18 116 0'/><path class='trace-thin' d='M463 228l47-35m-42 63 53 1'/><circle cx='444' cy='237' r='7'/>",
  food: "<circle class='trace-shape' cx='110' cy='103' r='52'/><path class='trace-line' d='M110 25v-18m0 192v-18M31 103H13m194 0h-18M55 48 42 35m136 136-13-13m0-110 13-13M55 158l-13 13'/><path class='trace-shape' d='M78 375c35-86 77-128 126-126 11 59-1 102-36 127zM272 373c10-74 45-117 105-130 17 55 6 101-33 137zM427 375c13-67 47-105 102-113 10 55-5 94-43 118z'/><path class='trace-dash' d='M144 148 179 230m86 53 53-27m79 35 56-17'/>",
  bridge: "<path class='trace-shape' d='M43 370c19-87 81-133 185-135 53 9 83 43 92 102-54 3-88 14-103 33zM557 370c-19-87-81-133-185-135-53 9-83 43-92 102 54 3 88 14 103 33z'/><path class='trace-dash' d='M185 267c77-107 153-107 230 0M216 326c56-58 112-58 168 0'/><circle cx='269' cy='400' r='6'/><circle cx='300' cy='400' r='6'/><circle cx='331' cy='400' r='6'/>",
  nest: "<path class='trace-shape' d='M111 233c34 127 99 187 195 180 91-7 151-67 183-180-126 39-252 39-378 0z'/><path class='trace-line' d='M129 282c116 38 232 38 348 0m-318 60c96 28 192 28 288 0'/><ellipse class='trace-shape' cx='247' cy='214' rx='39' ry='58'/><ellipse class='trace-shape' cx='337' cy='207' rx='39' ry='58'/><ellipse class='trace-shape' cx='423' cy='218' rx='39' ry='58'/>",
  shelter: "<path class='trace-shape' d='M88 361h424V177L300 71 88 177z'/><path class='trace-dash' d='M171 361V213h258v148'/><path class='trace-line' d='M300 72v289M61 177 300 54l239 123'/><path class='trace-thin' d='M457 69l43 43m-43 0 43-43'/>",
  collector: "<path class='trace-line' d='M76 95h344l-45 100H121zM375 195v78h107'/><path class='trace-shape' d='M367 273h132l-14 139H381z'/><path class='trace-dash' d='M118 43v37m84-37v37m84-37v37m84-37v37'/><path class='trace-thin' d='M408 315h67'/>",
  heart: "<path class='trace-line' d='M40 236h120l34-91 59 183 57-224 48 132h202'/><path class='trace-shape' d='M300 386c-103-70-153-135-150-196 2-48 35-80 81-80 31 0 54 18 69 49 15-31 38-49 69-49 46 0 79 32 81 80 3 61-47 126-150 196z'/>",
  moon: "<path class='trace-shape' d='M132 331c-67-65-68-172-3-239-28 65-17 124 33 177 51 53 111 68 181 44-62 66-144 72-211 18z'/><path class='trace-shape' d='M355 124c52-9 102 21 118 72 17 53-12 108-64 128 28-32 37-70 25-113-12-42-39-71-79-87z'/><path class='trace-thin' d='M290 66v35m-17-18h35M497 87v35m-17-18h35'/>",
  stars: "<path class='trace-shape' d='m300 53 26 79 83 1-67 48 25 79-67-47-67 47 25-79-67-48 83-1z'/><path class='trace-thin' d='M105 98v48m-24-24h48M467 81v55m-27-27h54M104 280v61m-30-30h60M466 293v48m-24-24h48'/><path class='trace-line' d='M61 403c78-59 158-59 239 0 81-59 161-59 239 0'/>",
  seed: "<path class='trace-shape' d='M286 176c-72-57-76-117-11-151 77 42 81 92 11 151z'/><path class='trace-line' d='M296 389V158m0 102c-57 5-95-20-113-75 58-5 96 20 113 75zm1-45c53-2 89-26 107-73-54-5-90 19-107 73z'/><path class='trace-thin' d='M296 389c-35-31-65-34-91-10m91 10c35-31 65-34 91-10m-91 10c-4-37-4-66 0-87'/><path class='trace-line' d='M112 390h376'/>",
  kidney: "<path class='trace-shape' d='M244 88c-78 6-125 74-118 161 7 85 55 134 129 124 51-7 70-52 48-99-15-33-15-65 0-96 22-46-8-95-59-90z'/><path class='trace-shape' d='M356 88c78 6 125 74 118 161-7 85-55 134-129 124-51-7-70-52-48-99 15-33 15-65 0-96-22-46 8-95 59-90z'/><path class='trace-line' d='M260 188c35 27 47 66 36 117m44-117c-35 27-47 66-36 117M296 304v105m8-105v105'/><path class='trace-thin' d='M300 142v-78m-37 91-54-58m128 58 54-58'/><path class='trace-dash' d='M216 226h53m62 0h53'/>"
};

const app = document.querySelector("#app");
const homeButton = document.querySelector("#homeButton");
const pillarsButton = document.querySelector("#pillarsButton");
const aboutButton = document.querySelector("#aboutButton");

/* Previous choose-one-mission runtime retained as a reference while the content bank remains above.
let state = { stage: 0, selected: null, focus: false };

homeButton.addEventListener("click", function () { go("#home"); });
pillarsButton.addEventListener("click", function () { go("#pillars"); });
aboutButton.addEventListener("click", function () { go("#about"); });
window.addEventListener("hashchange", function () {
  state.stage = 0;
  state.selected = null;
  state.focus = false;
  renderRoute();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && state.focus) {
    state.focus = false;
    renderRoute();
  }
});

if (!window.location.hash) {
  window.history.replaceState(null, "", "#home");
}
renderRoute();

function go(hash) {
  if (window.location.hash === hash) {
    renderRoute();
  } else {
    window.location.hash = hash;
  }
}

function renderRoute() {
  document.body.classList.toggle("focus-mode", state.focus);
  const parts = window.location.hash.slice(1).split("/").filter(Boolean);
  const route = parts[0] || "home";
  if (route === "home") renderLanding();
  else if (route === "pillars") renderPillars();
  else if (route === "pillar") renderExamples(parts[1]);
  else if (route === "activity") renderActivity(parts[1], parts[2]);
  else if (route === "about") renderAbout();
  else renderLanding();
  window.setTimeout(function () { app.focus(); }, 0);
}

function renderLanding() {
  document.body.classList.remove("focus-mode");
  app.innerHTML = [
    "<section class='landing'>",
      "<div class='hero'>",
        "<div class='hero-copy'>",
          "<p class='eyebrow'>Today's little mission</p>",
          "<h1>Trace the world. Think deeply. Add your own mark.</h1>",
          "<p class='lead'>A calm screen-to-paper thinking garden for children aged 6–12. Choose, trace, notice, reason, and wonder.</p>",
          "<div class='actions'><button class='primary' id='startThinking' type='button'>Start thinking →</button><button class='secondary' id='exploreContents' type='button'>Explore the six pillars</button></div>",
          "<p class='trust'>No ads. No scores. No endless scrolling. The real work happens on paper.</p>",
        "</div>",
        "<figure class='paper-stage'><div class='paper-sheet'><svg viewBox='0 0 260 300' role='img' aria-label='A leaf being traced on paper'><path d='M129 255V119'/><path d='M128 170C83 169 53 144 40 96c48-6 79 19 88 74z'/><path d='M132 129c42-2 70-24 84-66-43-4-71 18-84 66z'/><path d='M129 213c42 0 70-19 86-58-43-5-72 14-86 58z'/><path d='M128 170 57 111M132 129l64-49M129 213l64-44'/></svg></div><figcaption>Screen becomes a lightbox. Paper does the rest.</figcaption></figure>",
      "</div>",
      "<div class='how-it-works' aria-label='How it works'>",
        "<div class='step'><span>01</span><strong>Place paper</strong><small>Rest a clean sheet gently over the screen.</small></div>",
        "<div class='step'><span>02</span><strong>Trace carefully</strong><small>Follow the large line drawing at your own pace.</small></div>",
        "<div class='step'><span>03</span><strong>Lift and think</strong><small>Notice, choose the strongest reason, and reflect.</small></div>",
      "</div>",
    "</section>"
  ].join("");
  document.querySelector("#startThinking").addEventListener("click", function () { go("#pillars"); });
  document.querySelector("#exploreContents").addEventListener("click", function () { go("#pillars"); });
}

function renderPillars() {
  document.body.classList.remove("focus-mode");
  app.innerHTML = [
    "<section class='section' aria-labelledby='pillarsTitle'>",
      "<div class='section-heading'><p class='eyebrow'>The Gob Noqo garden</p><h1 id='pillarsTitle'>Choose a thinking pillar.</h1><p>Each pillar has six paper-first missions. Every set includes one plant example and one tree example, all using the same calm four-step template.</p></div>",
      "<div class='pillar-grid'>",
        pillars.map(function (pillar, index) {
          return "<button class='pillar-card' type='button' style='--accent:" + pillar.accent + "' data-pillar='" + index + "'><span class='pillar-top'><span class='pillar-icon' aria-hidden='true'>" + pillar.icon + "</span><span class='count'>6 missions</span></span><span><h2>" + pillar.title + "</h2><p>" + pillar.line + "</p></span><span class='open-label'>Open pillar →</span></button>";
        }).join(""),
      "</div>",
    "</section>"
  ].join("");
  app.querySelectorAll("[data-pillar]").forEach(function (button) {
    button.addEventListener("click", function () { go("#pillar/" + pillars[Number(button.dataset.pillar)].slug); });
  });
}

function renderExamples(pillarSlug) {
  document.body.classList.remove("focus-mode");
  const pillar = pillars.find(function (item) { return item.slug === pillarSlug; });
  if (!pillar) { go("#pillars"); return; }
  app.innerHTML = [
    "<section class='section' style='--accent:" + pillar.accent + "' aria-labelledby='pillarTitle'>",
      "<button class='back-link' id='backToPillars' type='button'>← Six pillars</button>",
      "<div class='section-heading pillar-hero'><span class='pillar-icon' aria-hidden='true'>" + pillar.icon + "</span><span><p class='eyebrow'>" + pillar.skill + "</p><h1 id='pillarTitle'>" + pillar.title + "</h1><p>" + pillar.line + "</p><p class='pillar-meta'>Choose 1 of 6 missions · ages 6–12 · paper + pencil</p></span></div>",
      "<div class='example-grid'>",
        pillar.examples.map(function (example, index) {
          return "<button class='example-card' type='button' data-example='" + index + "'><span class='example-head'><span class='example-icon' aria-hidden='true'>" + example.icon + "</span><span class='nature-tag'>" + example.tag + "</span></span><span><h2>" + example.title + "</h2><p>" + example.paint + "</p></span><span class='example-open'>Begin mission →</span></button>";
        }).join(""),
      "</div>",
    "</section>"
  ].join("");
  document.querySelector("#backToPillars").addEventListener("click", function () { go("#pillars"); });
  app.querySelectorAll("[data-example]").forEach(function (button) {
    const example = pillar.examples[Number(button.dataset.example)];
    button.addEventListener("click", function () { go("#activity/" + pillar.slug + "/" + example.slug); });
  });
}

function renderActivity(pillarSlug, exampleSlug) {
  const pillar = pillars.find(function (item) { return item.slug === pillarSlug; });
  const example = pillar && pillar.examples.find(function (item) { return item.slug === exampleSlug; });
  if (!pillar || !example) { go("#pillars"); return; }
  const stage = stages[state.stage];
  const isReasoning = stage.key === "reasoning";
  const isReflect = stage.key === "reflect";
  const canContinue = !isReasoning || state.selected !== null;
  const copy = stage.key === "painting" ? example.paint : stage.key === "notice" ? example.notice : stage.key === "reasoning" ? example.question : example.reflection;
  app.innerHTML = [
    "<section class='activity' style='--accent:" + pillar.accent + "' aria-labelledby='activityTitle'>",
      "<div class='activity-bar'><button class='back-link' id='backToExamples' type='button'>← Missions</button><div class='activity-name'><strong>" + example.icon + " " + example.title + "</strong><small>" + pillar.title + " · " + example.age + " · " + example.materials + "</small></div><button class='quiet-action' id='focusButton' type='button'>Trace focus</button></div>",
      "<div class='activity-layout'>",
        "<div class='trace-board'>" + scene(example) + "</div>",
        "<aside class='activity-panel' aria-live='polite'>",
          "<div class='progress' aria-label='Step " + (state.stage + 1) + " of 4'>" + stages.map(function (item, index) { return "<span class='" + (index <= state.stage ? "active" : "") + "' title='" + item.label + "'></span>"; }).join("") + "</div>",
          "<div><p class='stage-label'>Step " + (state.stage + 1) + " · " + stage.label + "</p><h1 id='activityTitle'>" + stage.title + "</h1><p class='stage-copy'>" + copy + "</p>" + (stage.key === "painting" ? "<p class='tip'><strong>Grown-up tip:</strong> Use a tablet at comfortable brightness. Rest paper gently—do not press hard.</p>" : "") + "</div>",
          "<div>" + (isReasoning ? renderOptions(example) : isReflect ? "<p class='tip'>There is no score here. Say your thought aloud, draw it, or keep it quietly.</p>" : "") + "</div>",
          "<div class='panel-actions'><button class='primary' id='nextStage' type='button' " + (canContinue ? "" : "disabled") + ">" + (isReflect ? "Finish & choose a pillar" : "Next →") + "</button>" + (isReflect ? "<button class='secondary' id='anotherMission' type='button'>Another " + pillar.title + " mission</button>" : "") + "</div>",
        "</aside>",
      "</div>",
      "<button class='focus-exit' id='focusExit' type='button'>Leave trace focus</button>",
    "</section>"
  ].join("");
  document.querySelector("#backToExamples").addEventListener("click", function () { go("#pillar/" + pillar.slug); });
  document.querySelector("#focusButton").addEventListener("click", function () { state.focus = true; renderActivity(pillarSlug, exampleSlug); });
  document.querySelector("#focusExit").addEventListener("click", function () { state.focus = false; renderActivity(pillarSlug, exampleSlug); });
  document.querySelector("#nextStage").addEventListener("click", function () {
    if (isReflect) { go("#pillars"); return; }
    state.stage += 1;
    state.selected = null;
    renderActivity(pillarSlug, exampleSlug);
  });
  const another = document.querySelector("#anotherMission");
  if (another) another.addEventListener("click", function () { go("#pillar/" + pillar.slug); });
  app.querySelectorAll("[data-option]").forEach(function (button) {
    button.addEventListener("click", function () {
      state.selected = Number(button.dataset.option);
      renderActivity(pillarSlug, exampleSlug);
    });
  });
}

function renderOptions(example) {
  const buttons = example.options.map(function (option, index) {
    const chosen = state.selected === index;
    const className = "option" + (chosen ? " selected" : "") + (state.selected !== null && index === example.best ? " correct" : "");
    return "<button class='" + className + "' type='button' role='radio' aria-checked='" + chosen + "' data-option='" + index + "'>" + option + "</button>";
  }).join("");
  let feedback = "";
  if (state.selected !== null) {
    feedback = "<p class='feedback'><strong>" + (state.selected === example.best ? "Strong reason." : "Good try. A stronger reason:") + "</strong> " + example.feedback + "</p>";
  }
  return "<div class='options' role='radiogroup' aria-label='" + example.question + "'>" + buttons + "</div>" + feedback;
}

function renderAbout() {
  document.body.classList.remove("focus-mode");
  app.innerHTML = [
    "<section class='section grownups' aria-labelledby='aboutTitle'>",
      "<div class='section-heading'><p class='eyebrow'>Parents & teachers</p><h1 id='aboutTitle'>Simple on the surface. Thoughtful underneath.</h1><p>Gob Noqo turns a screen into a temporary lightbox, then moves the important work onto paper.</p></div>",
      "<details open><summary><span>How does a mission work?</span><span aria-hidden='true'>⌄</span></summary><p>A child chooses a pillar and drawing, places paper gently over the screen, traces the large outline, lifts the page, notices details, compares reasons, and ends with a short tafakkur prompt.</p></details>",
      "<details><summary><span>What do we need?</span><span aria-hidden='true'>⌄</span></summary><p>A tablet or laptop, plain paper, and a pencil or crayon. Use comfortable screen brightness, supervise younger children, and never press hard on the display.</p></details>",
      "<details><summary><span>What is intentionally missing?</span><span aria-hidden='true'>⌄</span></summary><p>No accounts, advertisements, scores, streaks, public gallery, analytics, or child data collection. There is nothing to win and no infinite feed.</p></details>",
      "<details><summary><span>Why plant and tree examples?</span><span aria-hidden='true'>⌄</span></summary><p>Every pillar includes both, so children revisit familiar living forms through six different ways of thinking: pattern, observation, judgement, connection, design, and wonder.</p></details>",
      "<div class='actions' style='margin-top:28px'><button class='primary' id='aboutStart' type='button'>Choose a pillar →</button></div>",
    "</section>"
  ].join("");
  document.querySelector("#aboutStart").addEventListener("click", function () { go("#pillars"); });
}

function scene(example) {
  return "<svg viewBox='0 0 600 460' role='img' aria-labelledby='sceneTitle'><title id='sceneTitle'>" + example.title + " tracing picture</title>" + drawings[example.art] + "</svg>";
}
*/

let state = {
  pillarSlug: null,
  chapter: 0,
  screen: "hero",
  selected: null
};

homeButton.addEventListener("click", function () { go("#home"); });
pillarsButton.addEventListener("click", function () { go("#pillars"); });
aboutButton.addEventListener("click", function () { go("#about"); });
window.addEventListener("hashchange", renderRoute);

if (!window.location.hash) {
  window.history.replaceState(null, "", "#home");
}
renderRoute();

function go(hash) {
  if (window.location.hash === hash) {
    renderRoute();
  } else {
    window.location.hash = hash;
  }
}

function renderRoute() {
  const parts = window.location.hash.slice(1).split("/").filter(Boolean);
  const route = parts[0] || "home";
  if (route === "home") renderLanding();
  else if (route === "pillars") renderPillars();
  else if (route === "pillar") renderSeries(parts[1]);
  else if (route === "about") renderAbout();
  else go("#home");
  window.setTimeout(function () { app.focus(); }, 0);
}

function renderLanding() {
  app.innerHTML = [
    "<section class='landing'>",
      "<div class='hero'>",
        "<div class='hero-copy'>",
          "<p class='eyebrow'>Today’s little mission</p>",
          "<h1>Find a hidden shape. Follow the glow.</h1>",
          "<p class='lead'>Put paper on the screen, trace what you see, then choose, think, discover, and wonder through three focused drawings.</p>",
          "<div class='actions'><button class='primary' id='startThinking' type='button'>Start thinking →</button><button class='secondary' id='exploreContents' type='button'>Explore the six pillars</button></div>",
          "<p class='trust'>No ads. No scores. No endless scrolling. The real work happens on paper.</p>",
        "</div>",
        "<figure class='paper-stage'><div class='paper-sheet'><svg class='live-trace' viewBox='0 0 260 300' role='img' aria-label='A leaf drawing slowly appearing on paper'><path d='M129 255V119'/><path d='M128 170C83 169 53 144 40 96c48-6 79 19 88 74z'/><path d='M132 129c42-2 70-24 84-66-43-4-71 18-84 66z'/><path d='M129 213c42 0 70-19 86-58-43-5-72 14-86 58z'/><path d='M128 170 57 111M132 129l64-49M129 213l64-44'/></svg></div><figcaption>Watch the line appear. Then let paper do the rest.</figcaption></figure>",
      "</div>",
      "<div class='how-it-works' aria-label='How it works'>",
        "<div class='step'><span>01</span><strong>Draw</strong><small>Trace a large world outline and add one detail.</small></div>",
        "<div class='step'><span>02</span><strong>Think</strong><small>Choose a reason, ask a bigger question, and read a science clue.</small></div>",
        "<div class='step'><span>03</span><strong>Reflect</strong><small>Pause with a Qur’an reflection and collect a mini-badge.</small></div>",
      "</div>",
    "</section>"
  ].join("");
  document.querySelector("#startThinking").addEventListener("click", function () { go("#pillars"); });
  document.querySelector("#exploreContents").addEventListener("click", function () { go("#pillars"); });
}

function renderPillars() {
  state.pillarSlug = null;
  state.chapter = 0;
  state.screen = "hero";
  state.selected = null;
  app.innerHTML = [
    "<section class='section' aria-labelledby='pillarsTitle'>",
      "<div class='section-heading'><p class='eyebrow'>The Gob Noqo garden</p><h1 id='pillarsTitle'>Choose a thinking pillar.</h1><p>Each gate opens a three-chapter journey. Draw, choose, think, discover a science clue, reflect with Qur’an, and collect three mini-badges.</p></div>",
      "<div class='pillar-grid'>",
        pillars.map(function (pillar, index) {
          return "<button class='pillar-card' type='button' style='--accent:" + pillar.accent + "' data-pillar='" + index + "'><span class='pillar-top'><span class='pillar-icon' aria-hidden='true'>" + pillar.icon + "</span><span class='count'>3 chapters</span></span><span><h2>" + pillar.title + "</h2><p>" + pillar.line + "</p></span><span class='open-label'>Open gate →</span></button>";
        }).join(""),
      "</div>",
    "</section>"
  ].join("");
  app.querySelectorAll("[data-pillar]").forEach(function (button) {
    button.addEventListener("click", function () {
      const pillar = pillars[Number(button.dataset.pillar)];
      resetSeries(pillar.slug);
      go("#pillar/" + pillar.slug);
    });
  });
}

function resetSeries(pillarSlug) {
  state.pillarSlug = pillarSlug;
  state.chapter = 0;
  state.screen = "hero";
  state.selected = null;
}

function renderSeries(pillarSlug) {
  const pillar = pillars.find(function (item) { return item.slug === pillarSlug; });
  if (!pillar) { go("#pillars"); return; }
  if (state.pillarSlug !== pillar.slug) resetSeries(pillar.slug);

  const chapter = pillar.chapters[state.chapter];
  const screen = state.screen;
  const screenBody = screen === "hero" ? renderSeriesHero(pillar)
    : screen === "draw" ? renderDrawScreen(pillar, chapter)
    : screen === "mcq" ? renderMcqScreen(pillar, chapter)
    : screen === "think" ? renderThinkScreen(pillar, chapter)
    : screen === "reflect" ? renderReflectScreen(pillar, chapter)
    : renderFinishScreen(pillar);

  app.innerHTML = [
    "<section class='series-view' style='--accent:" + pillar.accent + "' aria-labelledby='seriesTitle'>",
      "<div class='series-top'><button class='back-link' id='backToGarden' type='button'>← Garden gates</button><div class='series-brand'><span aria-hidden='true'>" + pillar.icon + "</span><span><strong>" + pillar.title + "</strong><small>" + pillar.skill + "</small></span></div><div class='chapter-dots' aria-label='Chapter progress'>" + pillar.chapters.map(function (item, index) { return "<span class='" + (index < state.chapter || screen === "finish" ? "earned" : index === state.chapter && screen !== "hero" ? "current" : "") + "' title='" + item.title + "'>" + (index < state.chapter || screen === "finish" ? item.icon : index + 1) + "</span>"; }).join("") + "</div></div>",
      screenBody,
    "</section>"
  ].join("");

  document.querySelector("#backToGarden").addEventListener("click", function () { go("#pillars"); });
  bindSeriesActions(pillar, chapter);
}

function renderSeriesHero(pillar) {
  const hasCamelStudio = pillar.slug === "find-the-pattern";
  return [
    "<div class='series-card series-hero-card'>",
      "<span class='series-big-icon' aria-hidden='true'>" + pillar.icon + "</span>",
      "<p class='eyebrow'>Gob Noqo garden gate</p>",
      "<h1 id='seriesTitle'>" + pillar.title + "</h1>",
      "<p class='series-phrase'>“" + pillar.phrase + "”</p>",
      "<p class='series-intro'>" + pillar.line + " Complete all three chapters to collect the <strong>" + pillar.pillarBadge + " pillar badge</strong>.</p>",
      "<div class='world-row' aria-label='This pillar’s three worlds'>" + pillar.chapters.map(function (item, index) { return "<span><b>" + (index + 1) + "</b>" + item.icon + " " + item.world + "</span>"; }).join("") + "</div>",
      (hasCamelStudio ? "<p class='studio-callout'><strong>New V2 Camel Studio</strong><span>Draw a lifelike one-hump camel with six optional landmark hints, then notice, reason and reflect.</span></p>" : ""),
      "<button class='primary series-main-button' id='seriesBegin' type='button'>" + (hasCamelStudio ? "Begin Camel Studio →" : "Begin →") + "</button>",
    "</div>"
  ].join("");
}

function renderDrawScreen(pillar, chapter) {
  return [
    "<div class='series-card'>",
      seriesProgress("Draw", 0),
      "<p class='stage-label'>Chapter " + (state.chapter + 1) + " of 3 · " + chapter.world + "</p>",
      "<h1 id='seriesTitle'>" + chapter.icon + " " + chapter.title + "</h1>",
      "<div class='series-art'>" + scene(chapter) + "</div>",
      "<p class='series-instruction'><strong>Place paper on the screen.</strong> " + chapter.draw + "</p>",
      "<p class='detail-prompt'>" + chapter.detail + "</p>",
      "<p class='screen-care'>Use comfortable brightness and rest paper gently—never press hard.</p>",
      "<button class='primary series-main-button' id='seriesNext' type='button'>I traced it →</button>",
    "</div>"
  ].join("");
}

function renderMcqScreen(pillar, chapter) {
  const answered = state.selected !== null;
  return [
    "<div class='series-card'>",
      seriesProgress("Reasoning", 1),
      "<p class='stage-label'>Chapter " + (state.chapter + 1) + " of 3 · Reasoning</p>",
      "<h1 id='seriesTitle'>Choose the strongest reason</h1>",
      "<p class='series-question'>" + chapter.question + "</p>",
      "<div class='series-options' role='radiogroup' aria-label='" + chapter.question + "'>",
        chapter.options.map(function (option, index) {
          const selected = state.selected === index;
          const correct = answered && index === chapter.best;
          const wrong = answered && selected && index !== chapter.best;
          return "<button class='series-option" + (correct ? " correct" : "") + (wrong ? " wrong" : "") + "' type='button' role='radio' aria-checked='" + selected + "' data-answer='" + index + "' " + (answered ? "disabled" : "") + "><span>" + String.fromCharCode(65 + index) + "</span>" + option + "</button>";
        }).join(""),
      "</div>",
      (answered ? "<div class='answer-explanation' role='status'><strong>" + (state.selected === chapter.best ? "Yes—that is the strongest reason." : "Good try. Look at the stronger reason.") + "</strong><p>" + chapter.explanation + "</p></div>" : ""),
      "<button class='primary series-main-button' id='seriesNext' type='button' " + (answered ? "" : "disabled") + ">Continue →</button>",
    "</div>"
  ].join("");
}

function renderThinkScreen(pillar, chapter) {
  return [
    "<div class='series-card'>",
      seriesProgress("Think", 2),
      "<p class='stage-label'>Chapter " + (state.chapter + 1) + " of 3 · Critical thinking</p>",
      "<h1 id='seriesTitle'>A bigger question</h1>",
      "<p class='critical-question'>" + chapter.critical + "</p>",
      "<div class='science-clue'><span>Science clue</span><p>" + chapter.science + "</p></div>",
      "<p class='think-pause'>Pause. Point to your drawing or explain your thought aloud.</p>",
      "<button class='primary series-main-button' id='seriesNext' type='button'>Continue →</button>",
    "</div>"
  ].join("");
}

function renderReflectScreen(pillar, chapter) {
  const isLast = state.chapter === pillar.chapters.length - 1;
  return [
    "<div class='series-card'>",
      seriesProgress("Reflect", 3),
      "<p class='stage-label'>Chapter " + (state.chapter + 1) + " of 3 · Wonder</p>",
      "<h1 id='seriesTitle'>A sign to wonder about</h1>",
      "<div class='quran-card'><span>Qur’an reflection</span><p>" + chapter.quranReflection + "</p><strong>" + chapter.quranRef + "</strong></div>",
      "<p class='reflect-question'>" + chapter.reflect + "</p>",
      "<div class='badge-pop'><span aria-hidden='true'>" + chapter.icon + "</span><p>You earned the <strong>" + chapter.badge + "</strong>!</p></div>",
      "<button class='primary series-main-button' id='seriesNext' type='button'>" + (isLast ? "Collect my Pillar Badge 🎉" : "Next drawing →") + "</button>",
    "</div>"
  ].join("");
}

function renderFinishScreen(pillar) {
  const pillarIndex = pillars.findIndex(function (item) { return item.slug === pillar.slug; });
  const isLastPillar = pillarIndex === pillars.length - 1;
  return [
    "<div class='series-card finish-card'>",
      "<span class='high-five' aria-hidden='true'>🤝</span>",
      "<p class='eyebrow'>Pillar complete</p>",
      "<h1 id='seriesTitle'>High five!</h1>",
      "<p class='finish-copy'>You completed all three " + pillar.title + " chapters and collected the <strong>" + pillar.pillarBadge + "</strong>.</p>",
      "<div class='finish-badges'>" + pillar.chapters.map(function (item) { return "<span title='" + item.badge + "'>" + item.icon + "</span>"; }).join("") + "</div>",
      "<div class='pillar-badge'><span>" + pillar.icon + "</span><strong>" + pillar.pillarBadge + "</strong></div>",
      "<button class='primary series-main-button' id='nextGate' type='button'>" + (isLastPillar ? "Back to the Garden" : "Next Gate →") + "</button>",
    "</div>"
  ].join("");
}

function seriesProgress(label, activeIndex) {
  const labels = ["Draw", "Reason", "Think", "Reflect"];
  return "<div class='series-progress' aria-label='" + label + " step'>" + labels.map(function (item, index) { return "<span class='" + (index <= activeIndex ? "active" : "") + "' title='" + item + "'></span>"; }).join("") + "</div>";
}

function bindSeriesActions(pillar, chapter) {
  const begin = document.querySelector("#seriesBegin");
  if (begin) {
    begin.addEventListener("click", function () {
      if (pillar.slug === "find-the-pattern") {
        window.location.href = "camel-studio.html";
        return;
      }
      state.screen = "draw";
      renderSeries(pillar.slug);
    });
  }

  document.querySelectorAll("[data-answer]").forEach(function (button) {
    button.addEventListener("click", function () {
      state.selected = Number(button.dataset.answer);
      renderSeries(pillar.slug);
    });
  });

  const next = document.querySelector("#seriesNext");
  if (next) {
    next.addEventListener("click", function () {
      if (state.screen === "draw") state.screen = "mcq";
      else if (state.screen === "mcq" && state.selected !== null) state.screen = "think";
      else if (state.screen === "think") state.screen = "reflect";
      else if (state.screen === "reflect") {
        if (state.chapter < pillar.chapters.length - 1) {
          state.chapter += 1;
          state.screen = "draw";
          state.selected = null;
        } else {
          state.screen = "finish";
        }
      }
      renderSeries(pillar.slug);
    });
  }

  const nextGate = document.querySelector("#nextGate");
  if (nextGate) {
    nextGate.addEventListener("click", function () {
      const index = pillars.findIndex(function (item) { return item.slug === pillar.slug; });
      if (index === pillars.length - 1) {
        go("#pillars");
      } else {
        const nextPillar = pillars[index + 1];
        resetSeries(nextPillar.slug);
        go("#pillar/" + nextPillar.slug);
      }
    });
  }
}

function renderAbout() {
  app.innerHTML = [
    "<section class='section grownups' aria-labelledby='aboutTitle'>",
      "<div class='section-heading'><p class='eyebrow'>Parents & teachers</p><h1 id='aboutTitle'>Simple on the surface. Thoughtful underneath.</h1><p>Gob Noqo turns a screen into a temporary lightbox, then leads children through a short sequence that returns attention to paper.</p></div>",
      "<details open><summary><span>How does one pillar work?</span><span aria-hidden='true'>⌄</span></summary><p>Each pillar has three chapters. Every chapter moves through Draw → Reasoning MCQ → Critical Thinking + Science Clue → Qur’an Reflection + mini-badge. Three mini-badges collect into one pillar badge.</p></details>",
      "<details><summary><span>Which worlds appear?</span><span aria-hidden='true'>⌄</span></summary><p>The six pillars revisit five familiar workbook worlds: plants and trees, animals such as the camel, water, kidneys, and wider human-body reflection.</p></details>",
      "<details><summary><span>What do we need?</span><span aria-hidden='true'>⌄</span></summary><p>A tablet or laptop, plain paper, and a pencil or crayon. Use comfortable screen brightness, supervise younger children, and never press hard on the display.</p></details>",
      "<details><summary><span>About the Qur’an cards</span><span aria-hidden='true'>⌄</span></summary><p>Each card gives a short child-friendly reflection and a verse reference. It is a paraphrase for wondering together, not a replacement for reading a trusted translation or tafsir with an adult.</p></details>",
      "<details><summary><span>What is intentionally missing?</span><span aria-hidden='true'>⌄</span></summary><p>No accounts, advertisements, scores, streaks, public gallery, analytics, or child data collection. Badges mark the journey; they are not points or competition.</p></details>",
      "<div class='actions' style='margin-top:28px'><button class='primary' id='aboutStart' type='button'>Choose a pillar →</button></div>",
    "</section>"
  ].join("");
  document.querySelector("#aboutStart").addEventListener("click", function () { go("#pillars"); });
}

function scene(item) {
  return "<svg class='trace-illustration' viewBox='0 0 600 460' role='img' aria-labelledby='sceneTitle'><title id='sceneTitle'>" + item.title + " tracing picture</title>" + drawings[item.art] + "</svg>";
}
