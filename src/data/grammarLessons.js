// Tigrinya Grammar Lessons — Interactive "read & practice" format
// Each lesson has explanatory sections followed by interactive exercises.

export const grammarLessons = [
  {
    id: "verb-conjugation-intro",
    title: "Verb Conjugation (ግሲ)",
    subtitle: "How Tigrinya verbs work — roots, patterns, and tenses",
    category: "grammar",
    order: 1,

    // ─── SECTIONS: text explanations with examples ───
    sections: [
      {
        id: "roots",
        title: "The Triconsonantal Root System",
        type: "explanation",
        content: `Like other Semitic languages (Arabic, Hebrew, Amharic), Tigrinya builds words from **roots** — typically three consonants that carry the core meaning. Vowel patterns are then woven between the consonants to create different word forms.`,
        examples: [
          {
            root: "√ስ-ብ-ር (s-b-r)",
            meaning: "break",
            forms: [
              { tigrinya: "ሰበረ", transliteration: "säbärä", english: "he broke (past)" },
              { tigrinya: "ይሰብር", transliteration: "yəsäbbər", english: "he breaks (present)" },
              { tigrinya: "ተሰበረ", transliteration: "täsäbärä", english: "it was broken (passive)" },
              { tigrinya: "ኣሰበረ", transliteration: "asäbärä", english: "he caused to break (causative)" },
            ],
          },
          {
            root: "√ፍ-ል-ጥ (f-l-T')",
            meaning: "know",
            forms: [
              { tigrinya: "ፈለጠ", transliteration: "fälät'ä", english: "he knew" },
              { tigrinya: "ይፈልጥ", transliteration: "yəfält'", english: "he knows" },
            ],
          },
          {
            root: "√ጽ-ሕ-ፍ (ts'-H-f)",
            meaning: "write",
            forms: [
              { tigrinya: "ጸሓፈ", transliteration: "ts'ähafä", english: "he wrote" },
              { tigrinya: "ይጽሕፍ", transliteration: "yəts'əHf", english: "he writes" },
            ],
          },
        ],
        keyPoint: `The root carries the **meaning**, the vowel pattern carries the **grammar** (tense, voice, etc.). This is the fundamental principle of Tigrinya verbs.`,
      },

      {
        id: "tenses-overview",
        title: "The Four Verb Forms",
        type: "explanation",
        content: `Tigrinya has four main verb forms, each serving a different function:

1. **Perfect** (ፍጹም) — past/completed actions, conjugated with **suffixes**
2. **Imperfect** (ዘይፍጹም) — present/habitual actions, conjugated with **prefixes** (and sometimes suffixes)
3. **Gerundive** (ገሩንድ) — linking form meaning "having done...", uses **suffixes**
4. **Jussive/Imperative** — commands and wishes`,
        examples: [
          {
            root: "Using √ስ-ብ-ር (break)",
            meaning: "the four forms of one root",
            forms: [
              { tigrinya: "ሰበረ", transliteration: "säbärä", english: "he broke (Perfect)" },
              { tigrinya: "ይሰብር", transliteration: "yəsäbbər", english: "he breaks (Imperfect)" },
              { tigrinya: "ሰቢሩ", transliteration: "säbiru", english: "having broken (Gerundive)" },
              { tigrinya: "ስበር", transliteration: "sbär", english: "break! (Imperative)" },
            ],
          },
        ],
        keyPoint: `**Perfect = suffixes** (endings change), **Imperfect = prefixes** (beginnings change). This is the most important pattern to remember.`,
      },

      {
        id: "perfect-tense",
        title: "Perfect Tense (Past) — ፍጹም",
        type: "conjugation-table",
        content: `The Perfect tense describes **completed actions** (past tense). It is formed by adding **suffixes** to the verb stem. Tigrinya distinguishes **10 person/number/gender combinations**.

Let's use the verb **ሰበረ** (säbärä) — "to break" as our model verb.

The stem **sabar-** stays consistent across all persons — just the suffix changes.`,
        conjugationTable: {
          verb: "ሰበረ (break)",
          root: "√s-b-r",
          tense: "Perfect (Past)",
          rows: [
            { person: "3rd m. sg.", pronoun: "ንሱ (he)", suffix: "-a", form: "ሰበረ", translit: "sabar-a", english: "he broke" },
            { person: "3rd f. sg.", pronoun: "ንሳ (she)", suffix: "-at", form: "ሰበረት", translit: "sabar-at", english: "she broke" },
            { person: "2nd m. sg.", pronoun: "ንስኻ (you m.)", suffix: "-ka", form: "ሰበርካ", translit: "sabar-ka", english: "you (m.) broke" },
            { person: "2nd f. sg.", pronoun: "ንስኺ (you f.)", suffix: "-ki", form: "ሰበርኪ", translit: "sabar-ki", english: "you (f.) broke" },
            { person: "1st sg.", pronoun: "ኣነ (I)", suffix: "-ku", form: "ሰበርኩ", translit: "sabar-ku", english: "I broke" },
            { person: "3rd m. pl.", pronoun: "ንሳቶም (they m.)", suffix: "-u", form: "ሰበሩ", translit: "sabar-u", english: "they (m.) broke" },
            { person: "3rd f. pl.", pronoun: "ንሳተን (they f.)", suffix: "-a", form: "ሰበራ", translit: "sabar-a", english: "they (f.) broke" },
            { person: "2nd m. pl.", pronoun: "ንስኻትኩም (you m.pl.)", suffix: "-kum", form: "ሰበርኩም", translit: "sabar-kum", english: "you (m.pl.) broke" },
            { person: "2nd f. pl.", pronoun: "ንስኻትክን (you f.pl.)", suffix: "-kan", form: "ሰበርክን", translit: "sabar-kan", english: "you (f.pl.) broke" },
            { person: "1st pl.", pronoun: "ንሕና (we)", suffix: "-na", form: "ሰበርና", translit: "sabar-na", english: "we broke" },
          ],
        },
        keyPoint: `The suffix tells you **who** did the action. The stem **sabar-** stays the same — only the ending changes. Don't confuse with the gerundive, which uses a different vowel pattern (**sabir-**).`,
      },

      {
        id: "imperfect-tense",
        title: "Imperfect Tense (Present) — ዘይፍጹም",
        type: "conjugation-table",
        content: `The Imperfect tense describes **ongoing or habitual actions** (present tense). It is formed using **prefixes** — and sometimes **suffixes** too.

The stem in the imperfect **geminates** (doubles) the middle consonant: ስ-ብብ-ር (s-bb-r).

A critical difference: in the imperfect, **2nd m. sg. and 3rd f. sg. look identical** (both use the prefix ት-). Context tells them apart.`,
        conjugationTable: {
          verb: "ሰበረ (break)",
          root: "√s-b-r",
          tense: "Imperfect (Present)",
          rows: [
            { person: "3rd m. sg.", pronoun: "ንሱ (he)", prefix: "ይ-", suffix: "—", form: "ይሰብር", translit: "yə-säbbər", english: "he breaks" },
            { person: "3rd f. sg.", pronoun: "ንሳ (she)", prefix: "ት-", suffix: "—", form: "ትሰብር", translit: "tə-säbbər", english: "she breaks" },
            { person: "2nd m. sg.", pronoun: "ንስኻ (you m.)", prefix: "ት-", suffix: "—", form: "ትሰብር", translit: "tə-säbbər", english: "you (m.) break" },
            { person: "2nd f. sg.", pronoun: "ንስኺ (you f.)", prefix: "ት-", suffix: "-i", form: "ትሰብሪ", translit: "tə-säbbər-i", english: "you (f.) break" },
            { person: "1st sg.", pronoun: "ኣነ (I)", prefix: "እ-", suffix: "—", form: "እሰብር", translit: "ə-säbbər", english: "I break" },
            { person: "3rd m. pl.", pronoun: "ንሳቶም (they m.)", prefix: "ይ-", suffix: "-u", form: "ይሰብሩ", translit: "yə-säbbər-u", english: "they (m.) break" },
            { person: "3rd f. pl.", pronoun: "ንሳተን (they f.)", prefix: "ይ-", suffix: "-a", form: "ይሰብራ", translit: "yə-säbbər-a", english: "they (f.) break" },
            { person: "2nd m. pl.", pronoun: "ንስኻትኩም (you m.pl.)", prefix: "ት-", suffix: "-u", form: "ትሰብሩ", translit: "tə-säbbər-u", english: "you (m.pl.) break" },
            { person: "2nd f. pl.", pronoun: "ንስኻትክን (you f.pl.)", prefix: "ት-", suffix: "-a", form: "ትሰብራ", translit: "tə-säbbər-a", english: "you (f.pl.) break" },
            { person: "1st pl.", pronoun: "ንሕና (we)", prefix: "ን-", suffix: "—", form: "ንሰብር", translit: "nə-säbbər", english: "we break" },
          ],
        },
        keyPoint: `Remember the prefixes: **ይ-** (y-) for he/they, **ት-** (t-) for she/you, **እ-** (ə-) for I, **ን-** (n-) for we. The middle consonant **doubles** in the imperfect stem.`,
      },

      {
        id: "derived-stems",
        title: "Derived Stems — Changing the Verb's Voice",
        type: "explanation",
        content: `Tigrinya can change a verb's meaning systematically by adding prefixes or modifying the stem. These "derived stems" create passive, causative, and other voices from any root:

• **Active** (no prefix) — the basic form: the subject does the action
• **Passive/Reflexive** (prefix **ተ-** / tä-) — the subject receives the action
• **Causative** (prefix **ኣ-** / a-) — the subject causes someone else to do the action
• **Frequentative** (reduplication) — the action is repeated
• **Reciprocal** (**ተ-** + reduplication) — subjects do the action to each other`,
        examples: [
          {
            root: "√ስ-ብ-ር (break) — all derived forms",
            meaning: "how one root generates many verbs",
            forms: [
              { tigrinya: "ሰበረ", transliteration: "säbärä", english: "he broke (Active)" },
              { tigrinya: "ተሰበረ", transliteration: "tä-säbärä", english: "it was broken (Passive)" },
              { tigrinya: "ኣሰበረ", transliteration: "a-säbärä", english: "he caused to break (Causative)" },
              { tigrinya: "ሰባበረ", transliteration: "säbabärä", english: "he broke repeatedly (Frequentative)" },
              { tigrinya: "ተሰባበሩ", transliteration: "tä-säbabäru", english: "they broke each other (Reciprocal)" },
            ],
          },
        ],
        keyPoint: `Just by knowing the root √ስ-ብ-ር and these patterns, you can express "broke", "was broken", "caused to break", "kept breaking", and "broke each other". This is the power of the Semitic root system!`,
      },

      {
        id: "negation",
        title: "Negation — Saying 'Not'",
        type: "explanation",
        content: `To negate a verb in Tigrinya, you wrap it with the **circumfix** (a prefix + suffix together):

**ኣይ-** ... **-ን** (ay- ... -n)

This goes around the imperfect form of the verb. It's like putting the verb in a "not sandwich."`,
        examples: [
          {
            root: "Negation pattern",
            meaning: "positive → negative",
            forms: [
              { tigrinya: "ይሰብር → ኣይሰብርን", transliteration: "yəsäbbər → ay-säbbər-n", english: "he breaks → he doesn't break" },
              { tigrinya: "እፈልጥ → ኣይፈልጥን", transliteration: "əfält' → ay-fält'-n", english: "I know → I don't know" },
              { tigrinya: "ንሰብር → ኣይንሰብርን", transliteration: "nəsäbbər → ay-nəsäbbər-n", english: "we break → we don't break" },
              { tigrinya: "ትጽሕፊ → ኣይትጽሕፍን", transliteration: "təts'əHfi → ay-təts'əHf-n", english: "you (f.) write → you (f.) don't write" },
            ],
          },
        ],
        keyPoint: `Negation in Tigrinya uses a **circumfix**: ኣይ- at the start and -ን at the end. The prefix ኣይ- replaces the subject prefix in some forms. This applies to all persons and numbers.`,
      },

      {
        id: "edge-cases",
        title: "Watch Out! — Common Tricky Points",
        type: "explanation",
        content: `Here are edge cases and common pitfalls when conjugating Tigrinya verbs:

**1. Ambiguous forms in the imperfect:**
The prefix ት- (t-) is shared by 2nd m. sg. ("you" male), 3rd f. sg. ("she"), 2nd m. pl., and 2nd f. pl. Context and suffixes disambiguate — but beginners often mix them up.

**2. Perfect vs. Gerundive stems:**
The Perfect and Gerundive use different vowel patterns from the same root. Perfect uses **sabar-** (CaCaC-), while Gerundive uses **sabir-** (CaCiC-). Don't mix them up — ሰበርካ (sabar-ka, "you broke") vs. ሰቢርካ (sabir-ka, "having broken").

**3. Gemination in the imperfect:**
The middle consonant **doubles** in the imperfect. This is easy to miss but critical: ሰበረ (sabara, past) vs. ይሰብር (yasabbr, present). The doubled consonant distinguishes the tenses.

**4. Gender everywhere:**
Unlike English, the "you" forms are always gendered. You must know if you're speaking to a male or female. "You (m.) broke" (ሰበርካ) is different from "you (f.) broke" (ሰበርኪ).`,
        examples: [
          {
            root: "The ambiguous ት- prefix",
            meaning: "same prefix, different meanings",
            forms: [
              { tigrinya: "ትሰብር", transliteration: "tə-säbbər", english: "she breaks / you (m.) break" },
              { tigrinya: "ትሰብሪ", transliteration: "tə-säbbər-i", english: "you (f.) break (suffix -i disambiguates)" },
              { tigrinya: "ትሰብሩ", transliteration: "tə-säbbər-u", english: "you (m.pl.) break (suffix -u disambiguates)" },
            ],
          },
        ],
        keyPoint: `When in doubt, look at the **suffix** to disambiguate. The ት- prefix alone is ambiguous — it's the endings that tell you exactly who is doing the action.`,
      },
    ],

    // ─── EXERCISES: interactive mini-games ───
    exercises: [
      {
        id: "ex-identify-tense",
        type: "multiple-choice",
        title: "Identify the Tense",
        instruction: "Look at the verb form and identify whether it's Perfect (past) or Imperfect (present).",
        questions: [
          { prompt: "ሰበረ", promptTranslit: "sabara", correctAnswer: "Perfect (Past)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ሰበረ uses a suffix (-a) with no prefix → Perfect tense. It means 'he broke.'" },
          { prompt: "ይሰብር", promptTranslit: "yasabbr", correctAnswer: "Imperfect (Present)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ይሰብር starts with the prefix ይ- (ya-) → Imperfect tense. It means 'he breaks.'" },
          { prompt: "ሰበርና", promptTranslit: "sabarna", correctAnswer: "Perfect (Past)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ሰበርና uses the suffix -na with no prefix → Perfect tense. It means 'we broke.'" },
          { prompt: "ትሰብሪ", promptTranslit: "tasabbri", correctAnswer: "Imperfect (Present)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ትሰብሪ starts with the prefix ት- (ta-) → Imperfect tense. It means 'you (f.) break.'" },
          { prompt: "ሰበረት", promptTranslit: "sabarat", correctAnswer: "Perfect (Past)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ሰበረት uses the suffix -at with no prefix → Perfect. It means 'she broke.'" },
          { prompt: "ንሰብር", promptTranslit: "nasabbr", correctAnswer: "Imperfect (Present)", options: ["Perfect (Past)", "Imperfect (Present)"], explanation: "ንሰብር starts with the prefix ን- (na-) → Imperfect tense. It means 'we break.'" },
        ],
      },

      {
        id: "ex-match-person",
        type: "matching",
        title: "Match the Conjugation",
        instruction: "Match each conjugated verb form with the correct pronoun/person.",
        pairs: [
          { left: "ሰበረ (sabara)", right: "he (broke)" },
          { left: "ሰበርካ (sabarka)", right: "you m. (broke)" },
          { left: "ሰበርኪ (sabarki)", right: "you f. (broke)" },
          { left: "ሰበርኩ (sabarku)", right: "I (broke)" },
          { left: "ሰበሩ (sabaru)", right: "they m. (broke)" },
          { left: "ሰበርና (sabarna)", right: "we (broke)" },
        ],
      },

      {
        id: "ex-fill-blank",
        type: "fill-in-the-blank",
        title: "Complete the Conjugation",
        instruction: "Fill in the correct prefix or suffix to complete the verb form.",
        questions: [
          {
            sentence: "___ሰብር (I break)",
            blank: "prefix",
            correctAnswer: "እ",
            hint: "The 1st person singular imperfect prefix",
            explanation: "1st person singular uses the prefix እ- ('a-): እሰብር ('asabbr) = I break",
          },
          {
            sentence: "ሰበር___ (you m. broke)",
            blank: "suffix",
            correctAnswer: "ካ",
            hint: "The 2nd person masculine singular perfect suffix",
            explanation: "2nd person m. sg. perfect uses suffix -ካ (-ka): ሰበርካ (sabarka) = you (m.) broke",
          },
          {
            sentence: "___ሰብሩ (they m. break)",
            blank: "prefix",
            correctAnswer: "ይ",
            hint: "The 3rd person plural imperfect prefix",
            explanation: "3rd person uses prefix ይ- (ya-): ይሰብሩ (yasabbru) = they (m.) break",
          },
          {
            sentence: "ሰበር___ (we broke)",
            blank: "suffix",
            correctAnswer: "ና",
            hint: "The 1st person plural perfect suffix",
            explanation: "1st person plural perfect uses suffix -ና (-na): ሰበርና (sabarna) = we broke",
          },
          {
            sentence: "___ሰብር (we break)",
            blank: "prefix",
            correctAnswer: "ን",
            hint: "The 1st person plural imperfect prefix",
            explanation: "1st person plural uses prefix ን- (na-): ንሰብር (nasabbr) = we break",
          },
          {
            sentence: "ሰበር___ (you f. broke)",
            blank: "suffix",
            correctAnswer: "ኪ",
            hint: "The 2nd person feminine singular perfect suffix",
            explanation: "2nd person f. sg. perfect uses suffix -ኪ (-ki): ሰበርኪ (sabarki) = you (f.) broke",
          },
        ],
      },

      {
        id: "ex-negate",
        type: "transform",
        title: "Negate the Verb",
        instruction: "Transform the positive verb into its negative form using the ኣይ-...-ን pattern.",
        questions: [
          {
            positive: "ይሰብር",
            positiveTranslit: "yəsäbbər",
            positiveMeaning: "he breaks",
            correctAnswer: "ኣይሰብርን",
            correctTranslit: "aysäbbərn",
            correctMeaning: "he doesn't break",
            explanation: "Remove the ይ- prefix, add ኣይ- at the start and -ን at the end: ኣይሰብርን",
          },
          {
            positive: "እፈልጥ",
            positiveTranslit: "əfält'",
            positiveMeaning: "I know",
            correctAnswer: "ኣይፈልጥን",
            correctTranslit: "ayfält'n",
            correctMeaning: "I don't know",
            explanation: "Remove the እ- prefix, add ኣይ- at the start and -ን at the end: ኣይፈልጥን",
          },
          {
            positive: "ንሰብር",
            positiveTranslit: "nəsäbbər",
            positiveMeaning: "we break",
            correctAnswer: "ኣይንሰብርን",
            correctTranslit: "aynəsäbbərn",
            correctMeaning: "we don't break",
            explanation: "Keep the ን- prefix, add ኣይ- before it and -ን at the end: ኣይንሰብርን",
          },
        ],
      },

      {
        id: "ex-derive-stems",
        type: "multiple-choice",
        title: "Identify the Derived Stem",
        instruction: "Look at the prefix or modification and identify what type of derived verb it is.",
        questions: [
          { prompt: "ተሰበረ", promptTranslit: "täsäbärä", correctAnswer: "Passive (was broken)", options: ["Active (broke)", "Passive (was broken)", "Causative (caused to break)", "Reciprocal (broke each other)"], explanation: "The prefix ተ- (tä-) indicates passive voice: ተሰበረ = it was broken" },
          { prompt: "ኣሰበረ", promptTranslit: "asäbärä", correctAnswer: "Causative (caused to break)", options: ["Active (broke)", "Passive (was broken)", "Causative (caused to break)", "Frequentative (broke repeatedly)"], explanation: "The prefix ኣ- (a-) indicates causative voice: ኣሰበረ = he caused to break" },
          { prompt: "ሰበረ", promptTranslit: "säbärä", correctAnswer: "Active (broke)", options: ["Active (broke)", "Passive (was broken)", "Causative (caused to break)", "Reciprocal (broke each other)"], explanation: "No prefix = active voice: ሰበረ = he broke" },
          { prompt: "ተሰባበሩ", promptTranslit: "täsäbabäru", correctAnswer: "Reciprocal (broke each other)", options: ["Active (broke)", "Passive (was broken)", "Causative (caused to break)", "Reciprocal (broke each other)"], explanation: "The prefix ተ- (tä-) + reduplication indicates reciprocal: ተሰባበሩ = they broke each other" },
        ],
      },
    ],
  },
];
