// Tigrinya Learning App - Lesson Data
// Tigrinya (ትግርኛ) is a Semitic language spoken by ~9 million people,
// primarily in Eritrea and the Tigray region of Ethiopia.
// It uses the Ge'ez (ፊደል) script — a syllabary where each character
// represents a consonant+vowel combination across 7 "orders" (vowel forms).

export const lessons = [
  // ─── LESSON 1: THE GE'EZ SCRIPT (FIDEL) ───
  {
    id: "fidel-intro",
    title: "The Ge'ez Script (ፊደል)",
    description: "Learn the writing system — each character is a consonant + vowel combination",
    category: "alphabet",
    order: 1,
    intro: `Tigrinya uses the Ge'ez script, called ፊደል (Fidel). Unlike the Latin alphabet, each character represents a full syllable — a consonant combined with a vowel. There are 7 vowel "orders" for each consonant. Let's start with the first consonant row: ሀ (h).`,
    items: [
      // h-series (ሀ row) — the 7 orders
      { tigrinya: "ሀ", transliteration: "ha", english: "ha (1st order: -a)", audio: null },
      { tigrinya: "ሁ", transliteration: "hu", english: "hu (2nd order: -u)", audio: null },
      { tigrinya: "ሂ", transliteration: "hi", english: "hi (3rd order: -i)", audio: null },
      { tigrinya: "ሃ", transliteration: "haa", english: "haa (4th order: -aa)", audio: null },
      { tigrinya: "ሄ", transliteration: "hé", english: "hé (5th order: -é)", audio: null },
      { tigrinya: "ህ", transliteration: "h", english: "h (6th order: no vowel / -ə)", audio: null },
      { tigrinya: "ሆ", transliteration: "ho", english: "ho (7th order: -o)", audio: null },
      // l-series (ለ row)
      { tigrinya: "ለ", transliteration: "le", english: "le (1st order)", audio: null },
      { tigrinya: "ሉ", transliteration: "lu", english: "lu (2nd order)", audio: null },
      { tigrinya: "ሊ", transliteration: "li", english: "li (3rd order)", audio: null },
      { tigrinya: "ላ", transliteration: "la", english: "la (4th order)", audio: null },
      { tigrinya: "ሌ", transliteration: "lé", english: "lé (5th order)", audio: null },
      { tigrinya: "ል", transliteration: "l", english: "l (6th order)", audio: null },
      { tigrinya: "ሎ", transliteration: "lo", english: "lo (7th order)", audio: null },
      // m-series (መ row)
      { tigrinya: "መ", transliteration: "me", english: "me (1st order)", audio: null },
      { tigrinya: "ሙ", transliteration: "mu", english: "mu (2nd order)", audio: null },
      { tigrinya: "ሚ", transliteration: "mi", english: "mi (3rd order)", audio: null },
      { tigrinya: "ማ", transliteration: "ma", english: "ma (4th order)", audio: null },
      { tigrinya: "ሜ", transliteration: "mé", english: "mé (5th order)", audio: null },
      { tigrinya: "ም", transliteration: "m", english: "m (6th order)", audio: null },
      { tigrinya: "ሞ", transliteration: "mo", english: "mo (7th order)", audio: null },
    ],
  },

  // ─── LESSON 2: GREETINGS ───
  {
    id: "greetings",
    title: "Greetings (ሰላምታ)",
    description: "Essential greetings and polite expressions",
    category: "phrases",
    order: 2,
    intro: `Greetings are very important in Tigrinya culture. People greet each other warmly, and it's common to ask about health and family. Tigrinya has different forms for male and female addressees.`,
    items: [
      { tigrinya: "ሰላም", transliteration: "selam", english: "Hello / Peace" },
      { tigrinya: "ከመይ ኣለኻ?", transliteration: "kemey alekha?", english: "How are you? (to a male)" },
      { tigrinya: "ከመይ ኣለኺ?", transliteration: "kemey alekhi?", english: "How are you? (to a female)" },
      { tigrinya: "ጽቡቕ ኣለኹ", transliteration: "ts'buq alekhu", english: "I am fine (said by male)" },
      { tigrinya: "ጽብቕቲ ኣለኹ", transliteration: "ts'bqti alekhu", english: "I am fine (said by female)" },
      { tigrinya: "የቐንየለይ", transliteration: "yeqenyeley", english: "Thank you" },
      { tigrinya: "እወ", transliteration: "ewe", english: "Yes" },
      { tigrinya: "ኣይፋልን", transliteration: "ayfaaln", english: "No" },
      { tigrinya: "ደሓን ኩን", transliteration: "dehaan kun", english: "Goodbye (to a male)" },
      { tigrinya: "ደሓን ኩኒ", transliteration: "dehaan kuni", english: "Goodbye (to a female)" },
      { tigrinya: "ከመይ ሓዲርካ?", transliteration: "kemey haadirka?", english: "Good morning? (to a male)" },
      { tigrinya: "ከመይ ሓዲርኪ?", transliteration: "kemey haadirki?", english: "Good morning? (to a female)" },
      { tigrinya: "ይቕረታ", transliteration: "yqreta", english: "Excuse me / Sorry" },
      { tigrinya: "በጃኻ", transliteration: "bejjakha", english: "Please (to a male)" },
      { tigrinya: "በጃኺ", transliteration: "bejjakhi", english: "Please (to a female)" },
    ],
  },

  // ─── LESSON 3: NUMBERS ───
  {
    id: "numbers",
    title: "Numbers (ቁጽሪ)",
    description: "Learn to count from 1 to 10 in Tigrinya",
    category: "vocabulary",
    order: 3,
    intro: `Numbers are fundamental in any language. Tigrinya numbers have their own words. Let's learn 1 through 10.`,
    items: [
      { tigrinya: "ሓደ", transliteration: "hade", english: "1 — One" },
      { tigrinya: "ክልተ", transliteration: "kilte", english: "2 — Two" },
      { tigrinya: "ሰለስተ", transliteration: "seleste", english: "3 — Three" },
      { tigrinya: "ኣርባዕተ", transliteration: "arbaʿte", english: "4 — Four" },
      { tigrinya: "ሓሙሽተ", transliteration: "hamushte", english: "5 — Five" },
      { tigrinya: "ሽድሽተ", transliteration: "shidishte", english: "6 — Six" },
      { tigrinya: "ሸውዓተ", transliteration: "shewʿate", english: "7 — Seven" },
      { tigrinya: "ሸሞንተ", transliteration: "shemonte", english: "8 — Eight" },
      { tigrinya: "ትሽዓተ", transliteration: "tishʿate", english: "9 — Nine" },
      { tigrinya: "ዓሰርተ", transliteration: "ʿaserte", english: "10 — Ten" },
    ],
  },

  // ─── LESSON 4: FAMILY ───
  {
    id: "family",
    title: "Family (ስድራ)",
    description: "Words for family members",
    category: "vocabulary",
    order: 4,
    intro: `Family is central to Eritrean and Ethiopian culture. These are the most important family terms.`,
    items: [
      { tigrinya: "ኣቦ", transliteration: "abo", english: "Father" },
      { tigrinya: "ኣደ", transliteration: "ade", english: "Mother" },
      { tigrinya: "ሓው", transliteration: "haw", english: "Brother" },
      { tigrinya: "ሓፍቲ", transliteration: "hafti", english: "Sister" },
      { tigrinya: "ወዲ", transliteration: "wedi", english: "Son / Boy" },
      { tigrinya: "ጓል", transliteration: "gwal", english: "Daughter / Girl" },
      { tigrinya: "ኣቦ ሓጎ", transliteration: "abo hago", english: "Grandfather" },
      { tigrinya: "እማ ሓጎ", transliteration: "ema hago", english: "Grandmother" },
      { tigrinya: "ስድራ", transliteration: "sidra", english: "Family" },
      { tigrinya: "ሰብኣይ", transliteration: "seb'ay", english: "Husband / Man" },
      { tigrinya: "ሰበይቲ", transliteration: "sebeyti", english: "Wife / Woman" },
      { tigrinya: "ቆልዓ", transliteration: "qol'a", english: "Child" },
    ],
  },

  // ─── LESSON 5: COLORS ───
  {
    id: "colors",
    title: "Colors (ሕብሪ)",
    description: "Learn the basic colors",
    category: "vocabulary",
    order: 5,
    intro: `Colors in Tigrinya. Some color words change form based on the gender of the noun they describe.`,
    items: [
      { tigrinya: "ቀይሕ", transliteration: "qeyH", english: "Red" },
      { tigrinya: "ጻዕዳ", transliteration: "ts'aʿda", english: "White" },
      { tigrinya: "ጸሊም", transliteration: "ts'elim", english: "Black" },
      { tigrinya: "ቀጠልያ", transliteration: "qetelya", english: "Green" },
      { tigrinya: "ሰማያዊ", transliteration: "semayawi", english: "Blue" },
      { tigrinya: "ብጫ", transliteration: "bicha", english: "Yellow" },
      { tigrinya: "ኣራንሾኒ", transliteration: "aranshoni", english: "Orange" },
    ],
  },

  // ─── LESSON 6: BASIC PHRASES ───
  {
    id: "basic-phrases",
    title: "Basic Phrases (መሰረታዊ ሓረጋት)",
    description: "Useful everyday phrases",
    category: "phrases",
    order: 6,
    intro: `These are everyday phrases you'll use frequently. Tigrinya sentences follow Subject-Object-Verb (SOV) order, so the verb comes at the end.`,
    items: [
      { tigrinya: "ስመይ ... እዩ", transliteration: "smey ... eyu", english: "My name is ..." },
      { tigrinya: "ስምካ መን እዩ?", transliteration: "smka men eyu?", english: "What is your name? (to male)" },
      { tigrinya: "ስምኪ መን እዩ?", transliteration: "smki men eyu?", english: "What is your name? (to female)" },
      { tigrinya: "ካበይ ኢኻ?", transliteration: "kabey ikha?", english: "Where are you from? (to male)" },
      { tigrinya: "ካበይ ኢኺ?", transliteration: "kabey ikhi?", english: "Where are you from? (to female)" },
      { tigrinya: "ትግርኛ ክመሃር ደልየ", transliteration: "tigrnya kmhar delye", english: "I want to learn Tigrinya" },
      { tigrinya: "ኣይተረድኣንን", transliteration: "ayteredaanin", english: "I don't understand" },
      { tigrinya: "ብኸመይ?", transliteration: "bkhemey?", english: "How?" },
      { tigrinya: "ክንደይ?", transliteration: "kndey?", english: "How much / How many?" },
      { tigrinya: "ኣበይ?", transliteration: "abey?", english: "Where?" },
      { tigrinya: "መዓስ?", transliteration: "meʿas?", english: "When?" },
      { tigrinya: "ንምንታይ?", transliteration: "nmntay?", english: "Why?" },
      { tigrinya: "እንታይ?", transliteration: "entay?", english: "What?" },
      { tigrinya: "መን?", transliteration: "men?", english: "Who?" },
    ],
  },

  // ─── LESSON 7: DAYS OF THE WEEK ───
  {
    id: "days",
    title: "Days of the Week (መዓልታት)",
    description: "Learn the days of the week",
    category: "vocabulary",
    order: 7,
    intro: `The days of the week in Tigrinya. The week starts with Monday (ሰኑይ).`,
    items: [
      { tigrinya: "ሰኑይ", transliteration: "senuy", english: "Monday" },
      { tigrinya: "ሰሉስ", transliteration: "selus", english: "Tuesday" },
      { tigrinya: "ረቡዕ", transliteration: "rebuʿ", english: "Wednesday" },
      { tigrinya: "ሓሙስ", transliteration: "hamus", english: "Thursday" },
      { tigrinya: "ዓርቢ", transliteration: "ʿarbi", english: "Friday" },
      { tigrinya: "ቀዳም", transliteration: "qedam", english: "Saturday" },
      { tigrinya: "ሰንበት", transliteration: "senbet", english: "Sunday" },
    ],
  },

  // ─── LESSON 8: FOOD & DRINK ───
  {
    id: "food",
    title: "Food & Drink (መግቢ)",
    description: "Common food and drink vocabulary",
    category: "vocabulary",
    order: 8,
    intro: `Eritrean and Ethiopian cuisine is rich and flavorful. Injera (እንጀራ), a spongy flatbread, is the staple food eaten with various stews.`,
    items: [
      { tigrinya: "እንጀራ", transliteration: "injera", english: "Injera (flatbread)" },
      { tigrinya: "ጸባ", transliteration: "ts'eba", english: "Milk" },
      { tigrinya: "ማይ", transliteration: "may", english: "Water" },
      { tigrinya: "ሻሂ", transliteration: "shahi", english: "Tea" },
      { tigrinya: "ቡን", transliteration: "bun", english: "Coffee" },
      { tigrinya: "ስጋ", transliteration: "siga", english: "Meat" },
      { tigrinya: "ዓሳ", transliteration: "ʿasa", english: "Fish" },
      { tigrinya: "ጸብሒ", transliteration: "ts'ebhi", english: "Stew / Sauce" },
      { tigrinya: "ሕብስቲ", transliteration: "Hbsti", english: "Bread" },
      { tigrinya: "ፍረ", transliteration: "fre", english: "Fruit" },
      { tigrinya: "ሓምሊ", transliteration: "hamli", english: "Vegetables" },
      { tigrinya: "ብርዒ", transliteration: "br'i", english: "Egg" },
    ],
  },

  // ─── LESSON 9: GRAMMAR BASICS ───
  {
    id: "grammar-basics",
    title: "Grammar Basics (ሰዋስው)",
    description: "Understand Tigrinya sentence structure and pronouns",
    category: "grammar",
    order: 9,
    intro: `Tigrinya follows Subject-Object-Verb (SOV) word order. For example: "I coffee drink" instead of "I drink coffee". Tigrinya has grammatical gender (masculine/feminine) and verbs conjugate based on person, number, and gender.`,
    items: [
      // Personal pronouns
      { tigrinya: "ኣነ", transliteration: "ane", english: "I" },
      { tigrinya: "ንስኻ", transliteration: "niskha", english: "You (male)" },
      { tigrinya: "ንስኺ", transliteration: "niski", english: "You (female)" },
      { tigrinya: "ንሱ", transliteration: "nisu", english: "He" },
      { tigrinya: "ንሳ", transliteration: "nisa", english: "She" },
      { tigrinya: "ንሕና", transliteration: "nihna", english: "We" },
      { tigrinya: "ንስኻትኩም", transliteration: "niskhatkhum", english: "You (plural)" },
      { tigrinya: "ንሳቶም", transliteration: "nisatom", english: "They" },
      // Basic verbs
      { tigrinya: "ኣለኹ", transliteration: "alekhu", english: "I am / I have" },
      { tigrinya: "ደልየ", transliteration: "delye", english: "I want" },
      { tigrinya: "ይፈልጥ", transliteration: "yfelT", english: "He knows" },
      { tigrinya: "ይበልዕ", transliteration: "ybelʿ", english: "He eats" },
      { tigrinya: "ይሰቲ", transliteration: "yseti", english: "He drinks" },
      { tigrinya: "ይኸይድ", transliteration: "ykheyid", english: "He goes" },
    ],
  },
];

// Category metadata
export const categories = [
  { id: "alphabet", name: "Alphabet (ፊደል)", icon: "✍️", description: "Learn the Ge'ez script" },
  { id: "phrases", name: "Phrases (ሓረጋት)", icon: "💬", description: "Essential phrases & greetings" },
  { id: "vocabulary", name: "Vocabulary (ቃላት)", icon: "📚", description: "Build your word bank" },
  { id: "grammar", name: "Grammar (ሰዋስው)", icon: "🧠", description: "Understand sentence structure" },
];

// Expansion plan metadata (for the roadmap)
export const expansionPlan = [
  { phase: 1, title: "Foundation (Current)", topics: ["Fidel script basics (3 consonant rows)", "Greetings & politeness", "Numbers 1-10", "Family terms", "Colors", "Days of the week", "Food & drink", "Pronouns & basic verbs"], status: "done" },
  { phase: 2, title: "Expanding the Alphabet", topics: ["All 33+ consonant rows of Fidel", "Reading practice with simple words", "Writing exercises", "Audio pronunciation"], status: "planned" },
  { phase: 3, title: "Conversational Basics", topics: ["Verb conjugation (past, present, future)", "Common adjectives", "Body parts", "At the market / shopping phrases", "Directions & locations"], status: "planned" },
  { phase: 4, title: "Intermediate", topics: ["Complex sentences", "Telling time", "Months & seasons", "Weather", "Occupations", "Numbers 11-100"], status: "planned" },
  { phase: 5, title: "Advanced", topics: ["Reading passages", "Proverbs & idioms", "Formal vs informal register", "Cultural context lessons", "Conversation practice scenarios"], status: "planned" },
];
