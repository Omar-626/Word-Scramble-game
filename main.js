/// DOM

const scrambledWord = document.getElementById(`scrambledWord`);
const hint = document.getElementById(`hint`);
const time = document.getElementById(`time`);
const input = document.getElementById(`input`);
const refreshBtn = document.getElementById(`refreshBtn`);
const checkBtn = document.getElementById(`checkBtn`);
const score = document.getElementById(`currentScore`);
const rightWords = document.getElementById(`rightWords`);
const answerCheck = document.getElementById(`answerCheck`);

const gameOverModal = document.getElementById('gameOverModal');
const modalMessage = document.getElementById('modalMessage');
const modalOkBtn = document.getElementById('modalOkBtn');
////////
/// Scrambled words

const words = [
    { word: "football", hint: "sport" },
    { word: "basketball", hint: "sport" },
    { word: "tennis", hint: "sport" },
    { word: "cricket", hint: "sport" },
    { word: "rugby", hint: "sport" },
    { word: "baseball", hint: "sport" },
    { word: "marathon", hint: "long-distance race" },
    { word: "olympics", hint: "international games" },
    { word: "cycling", hint: "biking sport" },
    { word: "swimming", hint: "water sport" },
    { word: "volcano", hint: "eruption mountain" },
    { word: "earthquake", hint: "seismic event" },
    { word: "glacier", hint: "moving ice" },
    { word: "canyon", hint: "deep valley" },
    { word: "rainforest", hint: "dense tropical forest" },
    { word: "savannah", hint: "grassland ecosystem" },
    { word: "archipelago", hint: "group of islands" },
    { word: "peninsula", hint: "land almost surrounded by water" },
    { word: "waterfall", hint: "falling water" },
    { word: "amazon", hint: "South American river" },
    { word: "nile", hint: "African river" },
    { word: "himalayas", hint: "mountain range" },
    { word: "everest", hint: "highest mountain" },
    { word: "kilimanjaro", hint: "Tanzanian mountain" },
    { word: "sahara", hint: "vast desert" },
    { word: "gobi", hint: "Asian desert" },
    { word: "arctic", hint: "polar region" },
    { word: "antarctica", hint: "southern continent" },
    { word: "mediterranean", hint: "sea between continents" },
    { word: "pacific", hint: "largest ocean" },
    { word: "atlantic", hint: "ocean between America and Europe" },
    { word: "equator", hint: "zero latitude" },
    { word: "timezone", hint: "standard time region" },
    { word: "latitude", hint: "north-south coordinate" },
    { word: "longitude", hint: "east-west coordinate" },
    { word: "continent", hint: "large landmass" },
    { word: "country", hint: "nation" },
    { word: "capital", hint: "city of government" },
    { word: "metropolis", hint: "very large city" },
    { word: "village", hint: "small settlement" },
    { word: "landmark", hint: "famous place" },
    { word: "monument", hint: "historic structure" },
    { word: "pyramids", hint: "ancient tombs" },
    { word: "colosseum", hint: "Roman arena" },
    { word: "ganges", hint: "sacred Indian river" },
    { word: "yangtze", hint: "Chinese river" },
    { word: "mississippi", hint: "major US river" },
    { word: "danube", hint: "European river" },
    { word: "everglades", hint: "US wetlands" },
    { word: "serengeti", hint: "African plains" },
    { word: "maasai", hint: "East African tribe" },
    { word: "inuit", hint: "Arctic people" },
    { word: "samurai", hint: "Japanese warrior" },
    { word: "viking", hint: "Norse seafarer" },
    { word: "pharaoh", hint: "Egyptian ruler" },
    { word: "empire", hint: "large political state" },
    { word: "revolution", hint: "political upheaval" },
    { word: "independence", hint: "national freedom" },
    { word: "colony", hint: "territory under rule" },
    { word: "constitution", hint: "founding law" },
    { word: "democracy", hint: "rule by people" },
    { word: "monarchy", hint: "ruled by a king/queen" },
    { word: "republic", hint: "elected government" },
    { word: "parliament", hint: "legislative body" },
    { word: "president", hint: "head of state" },
    { word: "election", hint: "voting process" },
    { word: "campaign", hint: "political race" },
    { word: "ballot", hint: "voting paper" },
    { word: "census", hint: "population count" },
    { word: "treaty", hint: "international agreement" },
    { word: "alliance", hint: "partnership of states" },
    { word: "embassy", hint: "diplomatic office" },
    { word: "passport", hint: "travel document" },
    { word: "visa", hint: "entry permit" },
    { word: "refugee", hint: "displaced person" },
    { word: "migration", hint: "movement of people" },
    { word: "diaspora", hint: "scattered community" },
    { word: "economy", hint: "production and trade" },
    { word: "inflation", hint: "rising prices" },
    { word: "recession", hint: "economic decline" },
    { word: "market", hint: "place of trade" },
    { word: "currency", hint: "national money" },
    { word: "gold", hint: "precious metal" },
    { word: "silver", hint: "precious metal" },
    { word: "bond", hint: "debt security" },
    { word: "unemployment", hint: "joblessness" },
    { word: "gdp", hint: "economic output" },
    { word: "trade", hint: "import & export" },
    { word: "tariff", hint: "trade tax" },
    { word: "bank", hint: "financial institution" },
    { word: "loan", hint: "borrowed money" },
    { word: "mortgage", hint: "home loan" },
    { word: "insurance", hint: "risk protection" },
    { word: "budget", hint: "financial plan" },
    { word: "taxation", hint: "government revenue" },
    { word: "entrepreneur", hint: "business founder" },
    { word: "startup", hint: "new company" },
    { word: "investor", hint: "provides capital" },
    { word: "merger", hint: "companies joining" },
    { word: "acquisition", hint: "company purchase" },
    { word: "patent", hint: "invention right" },
    { word: "copyright", hint: "creative right" },
    { word: "trademark", hint: "brand symbol" },
    { word: "literacy", hint: "ability to read" },
    { word: "education", hint: "system of learning" },
    { word: "university", hint: "higher education" },
    { word: "scholarship", hint: "study award" },
    { word: "curriculum", hint: "course plan" },
    { word: "lecture", hint: "educational talk" },
    { word: "laboratory", hint: "experimental space" },
    { word: "research", hint: "systematic study" },
    { word: "thesis", hint: "research paper" },
    { word: "diploma", hint: "academic certificate" },
    { word: "degree", hint: "academic level" },
    { word: "professor", hint: "academic teacher" },
    { word: "student", hint: "learner" },
    { word: "classroom", hint: "learning space" },
    { word: "homework", hint: "assigned study" },
    { word: "exam", hint: "assessment" },
    { word: "library", hint: "book collection place" },
    { word: "archive", hint: "historical records" },
    { word: "museum", hint: "displays art/history" },
    { word: "gallery", hint: "art display" },
    { word: "orchestra", hint: "musical ensemble" },
    { word: "choir", hint: "group of singers" },
    { word: "opera", hint: "sung drama" },
    { word: "ballet", hint: "classical dance" },
    { word: "sculpture", hint: "three-dimensional art" },
    { word: "painting", hint: "canvas art" },
    { word: "portrait", hint: "person depiction" },
    { word: "landscape", hint: "scenic painting" },
    { word: "fresco", hint: "wall painting" },
    { word: "mosaic", hint: "tiled artwork" },
    { word: "pottery", hint: "clay craft" },
    { word: "weaving", hint: "textile craft" },
    { word: "embroidery", hint: "decorative stitching" },
    { word: "craftsmanship", hint: "skilled making" },
    { word: "folklore", hint: "traditional stories" },
    { word: "myth", hint: "ancient story" },
    { word: "legend", hint: "semi-historical tale" },
    { word: "fable", hint: "story with moral" },
    { word: "proverb", hint: "wise saying" },
    { word: "dialect", hint: "regional speech" },
    { word: "language", hint: "system of communication" },
    { word: "linguistics", hint: "study of language" },
    { word: "alphabet", hint: "writing symbols" },
    { word: "grammar", hint: "language rules" },
    { word: "vocabulary", hint: "word collection" },
    { word: "translation", hint: "convert between languages" },
    { word: "literature", hint: "written works" },
    { word: "novel", hint: "long fiction" },
    { word: "novella", hint: "shorter novel" },
    { word: "poetry", hint: "rhythmic writing" },
    { word: "sonnet", hint: "14-line poem" },
    { word: "haiku", hint: "short Japanese poem" },
    { word: "drama", hint: "theatrical play" },
    { word: "screenplay", hint: "film script" },
    { word: "biography", hint: "life story" },
    { word: "autobiography", hint: "self-written life story" },
    { word: "memoir", hint: "personal recollection" },
    { word: "essay", hint: "short analytic piece" },
    { word: "journal", hint: "diary record" },
    { word: "editor", hint: "content reviser" },
    { word: "publisher", hint: "prints books" },
    { word: "bookstore", hint: "sells books" },
    { word: "bestseller", hint: "very popular book" },
    { word: "reading", hint: "pastime" },
    { word: "storytelling", hint: "oral narration" },
    { word: "rhyme", hint: "sound repetition" },
    { word: "meter", hint: "poetic rhythm" },
    { word: "prose", hint: "ordinary writing" },
    { word: "critique", hint: "evaluation" },
    { word: "archaeology", hint: "study of past human activity" },
    { word: "fossil", hint: "preserved remains" },
    { word: "paleontology", hint: "study of fossils" },
    { word: "anthropology", hint: "study of humans" },
    { word: "sociology", hint: "study of society" },
    { word: "psychology", hint: "study of mind" },
    { word: "philosophy", hint: "study of ideas" },
    { word: "ethics", hint: "moral principles" },
    { word: "logic", hint: "system of reasoning" },
    { word: "theology", hint: "study of religion" },
    { word: "ritual", hint: "ceremonial practice" },
    { word: "pilgrimage", hint: "religious journey" },
    { word: "shrine", hint: "sacred place" },
    { word: "cathedral", hint: "large church" },
    { word: "mosque", hint: "Islamic worship place" },
    { word: "synagogue", hint: "Jewish worship place" },
    { word: "monastery", hint: "religious community" },
    { word: "scripture", hint: "holy writings" },
    { word: "gospel", hint: "good news" },
    { word: "meditation", hint: "mental practice" },
    { word: "prayer", hint: "communication with deity" },
    { word: "altar", hint: "sacred table" },
    { word: "sermon", hint: "religious speech" },
    { word: "festival", hint: "cultural celebration" },
    { word: "carnival", hint: "colorful event" },
    { word: "parade", hint: "public procession" },
    { word: "fireworks", hint: "celebratory displays" },
    { word: "anniversary", hint: "yearly commemoration" },
    { word: "ceremony", hint: "formal event" },
    { word: "coronation", hint: "crowning ceremony" },
    { word: "inauguration", hint: "swearing-in event" },
    { word: "embargo", hint: "trade ban" },
    { word: "summit", hint: "leaders' meeting" },
    { word: "conference", hint: "large meeting" },
    { word: "symposium", hint: "academic meeting" },
    { word: "seminar", hint: "small educational meeting" },
    { word: "workshop", hint: "practical training" },
    { word: "webinar", hint: "online seminar" },
    { word: "meetup", hint: "informal gathering" },
    { word: "networking", hint: "professional connections" },
    { word: "mentorship", hint: "guidance relationship" },
    { word: "internship", hint: "practical work experience" },
    { word: "apprenticeship", hint: "learn a trade" },
    { word: "vocation", hint: "occupation or calling" },
    { word: "profession", hint: "skilled career" },
    { word: "career", hint: "work over lifetime" },
    { word: "resume", hint: "job application document" },
    { word: "interview", hint: "selection conversation" },
    { word: "recruitment", hint: "hiring process" },
    { word: "salary", hint: "regular pay" },
    { word: "bonus", hint: "extra pay" },
    { word: "pension", hint: "retirement fund" },
    { word: "healthcare", hint: "medical services" },
    { word: "hospital", hint: "medical facility" },
    { word: "clinic", hint: "outpatient center" },
    { word: "pharmacy", hint: "medicine shop" },
    { word: "vaccine", hint: "disease prevention" },
    { word: "antibiotic", hint: "treats bacterial infections" },
    { word: "surgery", hint: "operative procedure" },
    { word: "diagnosis", hint: "identify illness" },
    { word: "treatment", hint: "medical care" },
    { word: "therapy", hint: "health treatment" },
    { word: "rehabilitation", hint: "recovery program" },
    { word: "dentist", hint: "oral health professional" },
    { word: "surgeon", hint: "surgical specialist" },
    { word: "nurse", hint: "healthcare worker" },
    { word: "paramedic", hint: "emergency responder" },
    { word: "ambulance", hint: "emergency vehicle" },
    { word: "epidemic", hint: "widespread disease" },
    { word: "pandemic", hint: "global outbreak" },
    { word: "hygiene", hint: "cleanliness practice" },
    { word: "nutrition", hint: "food science" },
    { word: "calorie", hint: "energy unit in food" },
    { word: "protein", hint: "muscle nutrient" },
    { word: "carbohydrate", hint: "energy nutrient" },
    { word: "vitamin", hint: "essential micronutrient" },
    { word: "mineral", hint: "inorganic nutrient" },
    { word: "hydration", hint: "water intake" },
    { word: "metabolism", hint: "energy use" },
    { word: "obesity", hint: "excess weight" },
    { word: "fitness", hint: "physical health" },
    { word: "exercise", hint: "physical activity" },
    { word: "yoga", hint: "mind-body practice" },
    { word: "pilates", hint: "strength & flexibility" },
    { word: "triathlon", hint: "multi-sport race" },
    { word: "goalkeeper", hint: "soccer position" },
    { word: "striker", hint: "forward player" },
    { word: "referee", hint: "game official" },
    { word: "coach", hint: "team leader" },
    { word: "arena", hint: "sports venue" },
    { word: "trophy", hint: "award for winners" },
    { word: "medal", hint: "award symbol" },
    { word: "league", hint: "organized competition" },
    { word: "championship", hint: "final tournament" },
    { word: "qualifier", hint: "preliminary round" },
    { word: "spectator", hint: "audience member" },
    { word: "rivalry", hint: "competitive feud" },
    { word: "sportsmanship", hint: "fair play" },
    { word: "comeback", hint: "dramatic recovery" },
    { word: "pizza", hint: "Italian dish" },
    { word: "sushi", hint: "Japanese food" },
    { word: "taco", hint: "Mexican snack" },
    { word: "pasta", hint: "Italian noodles" },
    { word: "burger", hint: "beef sandwich" },
    { word: "falafel", hint: "chickpea fritter" },
    { word: "shawarma", hint: "spiced meat wrap" },
    { word: "couscous", hint: "North African grain" },
    { word: "paella", hint: "Spanish rice dish" },
    { word: "ramen", hint: "Japanese noodle soup" },
    { word: "croissant", hint: "French pastry" },
    { word: "pancake", hint: "flat breakfast cake" },
    { word: "baklava", hint: "sweet pastry" },
    { word: "kimchi", hint: "Korean fermented veg" },
    { word: "curry", hint: "spiced sauce dish" },
    { word: "samosa", hint: "fried filled pastry" },
    { word: "paella", hint: "Spanish rice (duplicate avoided earlier?)" },
    { word: "risotto", hint: "creamy rice dish" },
    { word: "ceviche", hint: "marinated seafood" },
    { word: "hummus", hint: "chickpea dip" },
    { word: "guacamole", hint: "avocado dip" },
    { word: "noodles", hint: "long pasta" },
    { word: "dumplings", hint: "filled dough pockets" },
    { word: "sauce", hint: "flavor liquid" },
    { word: "spice", hint: "flavoring ingredient" },
    { word: "herb", hint: "leafy flavoring" },
    { word: "dessert", hint: "sweet course" },
    { word: "chocolate", hint: "sweet treat" },
    { word: "cookie", hint: "small baked sweet" },
    { word: "bakery", hint: "baked goods shop" },
    { word: "barbecue", hint: "grilled meat" },
    { word: "seafood", hint: "ocean food" },
    { word: "vegetarian", hint: "no meat diet" },
    { word: "vegan", hint: "no animal products" },
    { word: "breakfast", hint: "morning meal" },
    { word: "lunch", hint: "midday meal" },
    { word: "dinner", hint: "evening meal" },
    { word: "snack", hint: "small bite" },
    { word: "beverage", hint: "drink" },
    { word: "coffee", hint: "morning drink" },
    { word: "tea", hint: "hot beverage" },
    { word: "juice", hint: "fruit drink" },
    { word: "wine", hint: "fermented grape drink" },
    { word: "beer", hint: "fermented grain drink" },
    { word: "cocktail", hint: "mixed alcoholic drink" },
    { word: "cheese", hint: "dairy product" },
    { word: "bread", hint: "baked staple" },
    { word: "rice", hint: "staple grain" },
    { word: "potato", hint: "starchy vegetable" },
    { word: "tomato", hint: "red fruit veg" },
    { word: "onion", hint: "flavorful bulb" },
    { word: "garlic", hint: "pungent bulb" },
    { word: "olive", hint: "Mediterranean fruit" },
    { word: "honey", hint: "bee-made sweetener" },
    { word: "butter", hint: "dairy spread" },
    { word: "yogurt", hint: "fermented milk" },
    { word: "salad", hint: "mixed vegetables" },
    { word: "saucepan", hint: "cooking pot" },
    { word: "skillet", hint: "frying pan" },
    { word: "oven", hint: "baking appliance" },
    { word: "grill", hint: "open cooking surface" },
    { word: "knife", hint: "cutting tool" },
    { word: "fork", hint: "eating utensil" },
    { word: "spoon", hint: "eating utensil" },
    { word: "plate", hint: "eating surface" },
    { word: "napkin", hint: "table tissue" },
    { word: "restaurant", hint: "eating place" },
    { word: "cafe", hint: "small eating place" },
    { word: "harvest", hint: "crop gathering" },
    { word: "orchard", hint: "fruit tree grove" },
    { word: "vineyard", hint: "grape plantation" },
    { word: "butcher", hint: "meat seller" },
    { word: "fisherman", hint: "catches fish" },
    { word: "chef", hint: "professional cook" },
    { word: "baker", hint: "bread maker" },
    { word: "barista", hint: "coffee specialist" },
    { word: "sommelier", hint: "wine expert" },
    { word: "nutritionist", hint: "food & health expert" },
    { word: "agriculture", hint: "farming science" },
    { word: "irrigation", hint: "water for crops" },
    { word: "greenhouse", hint: "plant growing structure" },
    { word: "organic", hint: "no synthetic chemicals" },
    { word: "sustainable", hint: "long-term eco-friendly" },
    { word: "recycle", hint: "reuse materials" },
    { word: "compost", hint: "organic waste fertilizer" },
    { word: "pollination", hint: "flower fertilization" },
    { word: "habitat", hint: "natural home" },
    { word: "ecosystem", hint: "interacting environment" },
    { word: "biodiversity", hint: "variety of life" },
    { word: "extinction", hint: "species disappearance" },
    { word: "conservation", hint: "protecting nature" },
    { word: "wildlife", hint: "wild animals" },
    { word: "endangered", hint: "at risk species" },
    { word: "sanctuary", hint: "protected area" },
    { word: "zoology", hint: "study of animals" },
    { word: "botany", hint: "study of plants" },
    { word: "fungus", hint: "mushroom family" },
    { word: "coral", hint: "marine organism" },
    { word: "jaguar", hint: "big cat" },
    { word: "elephant", hint: "largest land mammal" },
    { word: "kangaroo", hint: "Australian marsupial" },
    { word: "panda", hint: "black & white bear" },
    { word: "penguin", hint: "flightless bird" },
    { word: "dolphin", hint: "intelligent marine mammal" },
    { word: "whale", hint: "largest marine mammal" },
    { word: "shark", hint: "predatory fish" },
    { word: "eagle", hint: "bird" },
    { word: "rainbow", hint: "colorful arc in sky" },
    { word: "apple", hint: "fruit" },
    { word: "banana", hint: "fruit" },
    { word: "orange", hint: "fruit" },
    { word: "grape", hint: "fruit" },
    { word: "mango", hint: "fruit" },
    { word: "pear", hint: "fruit" },
    { word: "peach", hint: "fruit" },
    { word: "melon", hint: "fruit" },
    { word: "lemon", hint: "fruit" },
    { word: "kiwi", hint: "fruit" },
    { word: "car", hint: "vehicle" },
    { word: "bus", hint: "vehicle" },
    { word: "train", hint: "transport" },
    { word: "plane", hint: "flies in the sky" },
    { word: "boat", hint: "water vehicle" },
    { word: "bicycle", hint: "two wheels" },
    { word: "truck", hint: "big vehicle" },
    { word: "motorcycle", hint: "two-wheeled vehicle" },
    { word: "road", hint: "where cars move" },
    { word: "bridge", hint: "crosses a river" },
    { word: "house", hint: "place to live" },
    { word: "room", hint: "part of a house" },
    { word: "kitchen", hint: "where you cook" },
    { word: "bedroom", hint: "where you sleep" },
    { word: "bathroom", hint: "where you shower" },
    { word: "window", hint: "lets light in" },
    { word: "door", hint: "entry to a room" },
    { word: "roof", hint: "top of a house" },
    { word: "garden", hint: "plants grow here" },
    { word: "school", hint: "place to study" },
    { word: "teacher", hint: "gives lessons" },
    { word: "student", hint: "learns in class" },
    { word: "book", hint: "for reading" },
    { word: "pen", hint: "used for writing" },
    { word: "pencil", hint: "used for drawing" },
    { word: "paper", hint: "write on it" },
    { word: "desk", hint: "study furniture" },
    { word: "chair", hint: "used for sitting" },
    { word: "bag", hint: "used to carry things" },
    { word: "clock", hint: "shows time" },
    { word: "sun", hint: "bright in the sky" },
    { word: "moon", hint: "seen at night" },
    { word: "star", hint: "shines in the sky" },
    { word: "cloud", hint: "in the sky" },
    { word: "rain", hint: "water from clouds" },
    { word: "snow", hint: "cold and white" },
    { word: "wind", hint: "moving air" },
    { word: "storm", hint: "strong weather" },
    { word: "tree", hint: "has leaves" },
    { word: "flower", hint: "beautiful plant" },
    { word: "grass", hint: "green and soft" },
    { word: "mountain", hint: "high land" },
    { word: "river", hint: "flows with water" },
    { word: "lake", hint: "still water" },
    { word: "ocean", hint: "big water body" },
    { word: "beach", hint: "sand and sea" },
    { word: "island", hint: "land in the sea" },
    { word: "forest", hint: "many trees" },
    { word: "animal", hint: "living creature" },
    { word: "dog", hint: "human’s best friend" },
    { word: "cat", hint: "pet that purrs" },
    { word: "bird", hint: "can fly" },
    { word: "fish", hint: "lives in water" },
    { word: "cow", hint: "gives milk" },
    { word: "sheep", hint: "gives wool" },
    { word: "horse", hint: "used for riding" },
    { word: "chicken", hint: "lays eggs" },
    { word: "duck", hint: "swims and quacks" },
    { word: "lion", hint: "king of the jungle" },
    { word: "tiger", hint: "striped animal" },
    { word: "elephant", hint: "big with a trunk" },
    { word: "monkey", hint: "likes bananas" },
    { word: "bear", hint: "big and furry" },
    { word: "rabbit", hint: "hops fast" },
    { word: "frog", hint: "jumps and croaks" },
    { word: "snake", hint: "slithers" },
    { word: "butterfly", hint: "colorful insect" },
    { word: "bee", hint: "makes honey" },
    { word: "ant", hint: "tiny worker insect" },
    { word: "spider", hint: "makes webs" },
    { word: "mouse", hint: "small rodent" },
    { word: "cake", hint: "sweet dessert" },
    { word: "bread", hint: "baked food" },
    { word: "milk", hint: "white drink" },
    { word: "water", hint: "essential liquid" },
    { word: "juice", hint: "fruit drink" },
    { word: "coffee", hint: "morning drink" },
    { word: "tea", hint: "hot drink" },
    { word: "rice", hint: "grain food" },
    { word: "egg", hint: "comes from chicken" },
    { word: "salt", hint: "used for flavor" },
    { word: "sugar", hint: "sweet taste" },
    { word: "butter", hint: "used in cooking" },
    { word: "cheese", hint: "dairy product" },
    { word: "pizza", hint: "Italian dish" },
    { word: "burger", hint: "fast food" },
    { word: "sandwich", hint: "bread meal" },
    { word: "cookie", hint: "sweet snack" },
    { word: "icecream", hint: "cold dessert" },
    { word: "applepie", hint: "sweet dish" },
    { word: "carrot", hint: "orange vegetable" },
    { word: "onion", hint: "used in cooking" },
    { word: "tomato", hint: "red vegetable" },
    { word: "potato", hint: "used for fries" },
    { word: "corn", hint: "yellow vegetable" },
    { word: "pepper", hint: "spicy flavor" },
    { word: "garlic", hint: "used in meals" },
    { word: "salad", hint: "healthy food" },
    { word: "knife", hint: "used to cut" },
    { word: "spoon", hint: "used to eat" },
    { word: "fork", hint: "used for food" },
    { word: "plate", hint: "holds food" },
    { word: "cup", hint: "used for drinking" },
    { word: "bottle", hint: "holds liquids" },
    { word: "glass", hint: "drinking vessel" },
    { word: "television", hint: "watch shows" },
    { word: "radio", hint: "plays music" },
    { word: "phone", hint: "make calls" },
    { word: "computer", hint: "used for work" },
    { word: "laptop", hint: "portable computer" },
    { word: "tablet", hint: "touchscreen device" },
    { word: "camera", hint: "takes photos" },
    { word: "light", hint: "helps you see" },
    { word: "fan", hint: "moves air" },
    { word: "clock", hint: "tells time" },
    { word: "watch", hint: "wear on wrist" },
    { word: "shoe", hint: "wear on foot" },
    { word: "shirt", hint: "upper clothing" },
    { word: "pants", hint: "lower clothing" },
    { word: "dress", hint: "women’s clothing" },
    { word: "hat", hint: "worn on head" },
    { word: "jacket", hint: "keeps warm" },
    { word: "sock", hint: "wear on feet" },
    { word: "scarf", hint: "around the neck" },
    { word: "glove", hint: "covers hands" },
    { word: "bag", hint: "carries items" },
    { word: "wallet", hint: "holds money" },
    { word: "key", hint: "opens doors" },
    { word: "door", hint: "entry" },
    { word: "table", hint: "flat furniture" },
    { word: "sofa", hint: "for sitting" },
    { word: "television", hint: "watch movies" },
    { word: "bookstore", hint: "buy books" },
    { word: "supermarket", hint: "buy food" },
    { word: "hospital", hint: "for patients" },
    { word: "bank", hint: "keeps money" },
    { word: "market", hint: "buy and sell" },
    { word: "park", hint: "playground" },
    { word: "garden", hint: "plants area" },
    { word: "city", hint: "large town" },
    { word: "village", hint: "small community" },
    { word: "country", hint: "nation" },
    { word: "road", hint: "cars move on it" },
    { word: "bridge", hint: "cross water" },
    { word: "airport", hint: "planes take off" },
    { word: "station", hint: "train stop" },
    { word: "restaurant", hint: "eat outside" },
    { word: "hotel", hint: "stay overnight" },
    { word: "museum", hint: "shows history" },
    { word: "library", hint: "borrow books" },
    { word: "movie", hint: "watch entertainment" },
    { word: "music", hint: "sound art" },
    { word: "song", hint: "musical piece" },
    { word: "dance", hint: "move to music" },
    { word: "sport", hint: "physical activity" },
    { word: "football", hint: "played with a ball" },
    { word: "basketball", hint: "use a hoop" },
    { word: "tennis", hint: "use a racket" },
    { word: "golf", hint: "played on grass" },
    { word: "cricket", hint: "bat and ball" },
    { word: "swimming", hint: "in water" },
    { word: "running", hint: "fast movement" },
    { word: "jumping", hint: "leaving the ground" },
    { word: "cycling", hint: "using bicycle" },
    { word: "boxing", hint: "fight sport" },
    { word: "painting", hint: "art with colors" },
    { word: "drawing", hint: "art with pencil" },
    { word: "writing", hint: "use of words" },
    { word: "reading", hint: "understanding text" },
    { word: "singing", hint: "using voice" },
    { word: "cooking", hint: "making food" },
    { word: "cleaning", hint: "making tidy" },
    { word: "washing", hint: "with water" },
    { word: "driving", hint: "using a car" },
    { word: "sleeping", hint: "resting" },
    { word: "eating", hint: "having food" },
    { word: "drinking", hint: "having a beverage" },
    { word: "walking", hint: "moving on foot" },
    { word: "talking", hint: "using words" },
]    


//////////
/// Random words and thier hints

const shuffleArray = (arr) => {
for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
};




let randomIndex = Math.floor(Math.random() * words.length);
let randomWord = words[randomIndex].word;
let randomHint = words[randomIndex].hint;
let randomWordScrambled;
const randomizeScrambledWord = () => {
randomWordScrambled = shuffleArray(randomWord.split('')).join(' ');
scrambledWord.textContent = randomWordScrambled;
}

const wordHint = () => {
    hint.textContent = `Hint: ${randomHint}`;
}

/////////



/// Check word
let rightWordsCounter = 0;
let currentScore = 0;
let currentScoreCounter = 0;
let timerCounter = 15;
time.textContent = `Time left: ${timerCounter}s`;

const checkWord = () => {
if(input.value.replace(/\s+/g, '').toLowerCase() == randomWord) {
    rightWordsCounter++;
    currentScore++;
    currentScoreCounter+= currentScore;
    score.textContent = `Current score = ${currentScoreCounter}`;
    rightWords.textContent = `Right words = ${rightWordsCounter}`;
        answerCheck.textContent = `Right Answer !`;
        answerCheck.classList.remove(`hidden`);
        setTimeout(() => {
            answerCheck.classList.add(`hidden`);
        }, 2500)
        timerCounter = 15;
        time.textContent = `Time left: ${timerCounter}s`;
        input.value = ``;
        randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex].word;
        randomHint = words[randomIndex].hint;
        randomWordScrambled = shuffleArray(randomWord.split('')).join(' ');
        scrambledWord.textContent = randomWordScrambled;
        hint.textContent = `Hint: ${randomHint}`;
        input.focus();
}else {
    answerCheck.textContent = `Wrong Answer !`;
    answerCheck.classList.remove(`hidden`);
            setTimeout(() => {
            answerCheck.classList.add(`hidden`);
        }, 2500)
        input.focus();
}

}

//////////
///// Timer


const timer = () => {
let interval = setInterval(() => {
        timerCounter--;
        time.textContent = `Time left: ${timerCounter}s`;
            if(timerCounter <= 0) {
                input.value = ``;
        clearInterval(interval);
        showGameOverModal();
    }
    }, 1000)
}

/////////

/// Calling functions and event listeners
randomizeScrambledWord();
wordHint();
timer();
refreshBtn.addEventListener(`click`, () => {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex].word;
    randomHint = words[randomIndex].hint;
    randomWordScrambled = shuffleArray(randomWord.split('')).join(' ');
    scrambledWord.textContent = randomWordScrambled;
    hint.textContent = `Hint: ${randomHint}`;
    input.focus();
});
checkBtn.addEventListener(`click`, () => {
    checkWord();
    input.focus();
});
input.addEventListener(`keydown`, (e) => {
    if(e.key === "Enter") {
        checkWord();
    }
})

////////

/////////// end game modal

const showGameOverModal = () => {
    modalMessage.textContent = `game over ! score = ${currentScoreCounter}, right words = ${rightWordsCounter}`;
    gameOverModal.classList.remove('hidden');
    gameOverModal.classList.add('flex'); 
};

const hideGameOverModal = () => {
    gameOverModal.classList.add('hidden');
    gameOverModal.classList.remove('flex');
}

modalOkBtn.addEventListener('click', () => {
    location.reload();
});

window.addEventListener(`load`, () => {
    input.value = ``;
    input.focus();
})
///////
