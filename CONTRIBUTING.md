# Contributing

## Translation

We are translating the new testament first as it contains more important information. (e.g. how to get saved)

### Prerequisites

- Have a good understanding of English grammar.
- Read the entire Bible in another translation (e.g. KJV/ESV) to help understand it as a whole.
- Read this document thoroughly.
- Read a few chapters of the LIV to get a feel for the existing format.

### Getting Started

- Use the [Textus Receptus](https://www.blueletterbible.org/tools/interlinear/tr/mat/1/1-25/) as the base for your translation.
- Try to keep the same word count and order as the original manuscript while preserving its meaning.
  - Use contractions to help match the original word count.
- Use Strong's Concordance to help understand Greek and Hebrew words.
- If you are stuck on a difficult verse then try looking at other translations
  for more ideas on different ways to translate it. Find a structure that is
  closest to the original.
- Names for people/cities in Greek that were originally Hebrew should be based
  off of the original Hebrew names and not the Greek translations.

### Before Committing

- Search for all the Strong's and English Words listed in the [wording preferences](#wording-preferences) and replace any words if appropriate.

## Custom Markdown Format

### Headings

    # Book Name
    ## Reserved for Chapter Headings
    ### Additional Headings

### Verse

- Format: `[verse] Verse content.`
- Example: `[1] In the beginning[h7225], God[h430] created[h1254] the[h853] heavens[h8064] and the earth[h776].`

### Strong's Numbers

- Try to find a single english word to represent each Hebrew/Greek word.
- Keep the wording consistent with previous chapters as much as possible.
- Only assign two words to one word if there's no other equivalent or it is needed to distinguish between other Greek/Hebrew words.
- One english word to one greek word: `word[g1234]`
- Two english words to one greek word: `(two words)[g1234]`
- One english word to two greek words: `word[g1234, g4321]`
- Inserting an english word between two words represented by the same greek word: `(word insert[] word)[g1234]`
- Use capital H/G for word codes without Strong's numbers: `word[H R / Sp3ms]`
- Example: `And[g1161] the[g3588] (young men)[g3501] rose[g450], wrapped[g4958] him[g846] up, and[g2532] (carried him[] out)[g1627] and buried[g2290] him.`

### Footnotes

- Linked footnote: `[f Footnote]`
- Inline footnote: `[i Inline Footnote]`
- You can link footnotes to a word by not putting a space around them. e.g: `word[g1234][f Note about this word]`
- Example 1: `Now[g1161] hearing[g191] this, they were enraged[g1282][f Greek: felt like they were being sawn in two]`
- Example 2: `Peter[g4074] (went up)[g305] on[g1909] the[g3588] roof[g1430] at about[g4012] the sixth[g1623] hour[g5610] [i around noon] to pray[g4336]`

### Other

- Words of Jesus: `*"Words of Jesus"*`
- Em Dashes: `--Em Dashes--`

## Paragraphs

Group new lines based on who is performing the action. Example:

    He picked it up saying, "What's this?" Then he sat it down.
    Someone else said, "I'm not sure"
    "Maybe it's this?" said the first person pointing to a photo.
    Looking at it, the second person said, "I don't think so."

## Wording Preferences

### English

#### Dated Words

- behold
  - `look`
- departed
  - `left`
  - `went away`
- lest
  - `in case`

#### Use Appropriately

RegEx: `[^\w](cast|for|shall)[^\w]`

- cast
  - Use `throw` or `thrown` by default.
  - Use `cast` when referring to spiritual matters. (e.g casting out demons) or when referring to fishing. (e.g. casting a line/net out)
- for
  - `because` (when appropriate)
- shall
  - `will` (when appropriate)

#### Contractions

Use contractions as much as possible, but don't combine if they're two separate Greek/Hebrew words.

#### Spacing

- No double spaces.
- New lines around headings.

### Strong's

#### People/Relations

- g2992
  - `people`
- g444
  - `person`
  - `human` when differentiating between God/angels and mortals
  - `man` in family relations context
- g435
  - `man`
- g1135
  - `woman`

- g80
  - `sibling` when gender neutrality is implied
  - `brother` when spiritually linked or gender specificity is implied
- g79
  - `sister`

- g5043
  - `child`
- g5207
  - `son`
  - `child` when gender neutrality is implied
- g2364
  - `daughter`

- g846
  - `he` `him` `his` `himself` when subject is male
  - `she` `her` `herself` when subject is female
  - `they` `them` `their` `themselves` when gender neutrality is implied
  - `it` `its`

#### Time

- Remember to give time in AM and PM in inline footnotes.
- g165
  - `age`
  - Directly translates as `eon`, but its meaning in modern english has been skewed somewhat.
- g5610
  - `hour` in numeric references
  - `moment` when referring to a point in time
  - `day` rare

#### Other

- g611
  - `responded` (verb)
  - `answer`/`answered` (noun)
  - `reply` (end)
- g3661
  - `passionate together`
  - `fiercely together`
- g2062
  - `crawler`
- g2974
- `mute` or `deaf`

### Hebrew

- h8415
    - `ocean`
- h3220
    - `sea`
- h5921
    - `on`
    - `over`
- h7431
    - `crawler`
- h7430
    - `crawls`
    - `glide` when referring to water animals.
- h8435
    - `descendants`