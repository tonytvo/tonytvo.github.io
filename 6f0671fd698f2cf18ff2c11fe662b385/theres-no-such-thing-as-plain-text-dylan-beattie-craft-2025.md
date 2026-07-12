---
title: "ESSENTIALS - There's No Such Thing As Plain Text - Dylan Beattie | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Dylan Beattie traces text from mechanical ASCII and incompatible code pages through Unicode, collation, normalization, UTF-8, and emoji to show that every text representation embeds technical, cultural, and political choices."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - There's No Such Thing As Plain Text - Dylan Beattie (Talk Outline)

> At Craft 2025, Rockstar-language creator Dylan Beattie presents a historical and highly visual tour of text encoding assembled from years of conference travel. Beginning with mechanical teleprinters, he explains ASCII's bit-level design, national code pages, Unicode code points, culturally dependent collation, byte order, combining characters, normalization, UTF-8, and emoji, closing with examples showing that culture and politics cannot be removed from software.

## 1. The “plain text” illusion

### 1.1 What people usually mean

- “Send a plain text file” usually means a file that opens predictably in Notepad or another simple editor.
- The expectation silently assumes a character set, encoding, line-ending convention, and interpretation.
- Systems can agree on bytes while disagreeing on every one of those assumptions.

### 1.2 A typewriter with a memory

- Early interactive computing borrowed from telegraphy and teleprinters.
- A terminal behaved like a mechanical typewriter connected to a computer.
- ASCII's strange control characters make sense when interpreted as instructions for physical machinery.

## 2. ASCII's mechanical intelligence

### 2.1 Seven bits and 128 positions

- ASCII assigns values 0–127 using seven bits.
- It includes printable characters and machine-control instructions.
- Its compact organization reduced circuitry and mechanical complexity.

### 2.2 Control characters

- Null means no punched holes and can represent empty tape.
- End-of-text and related controls let operators stop or delimit transmission.
- `Ctrl-C` inherits the tradition of sending a control value rather than a visible C.
- Bell caused a physical terminal bell to ring.

### 2.3 Carriage return and line feed

- Carriage return moves the print head back to the left.
- Line feed advances the paper by one line.
- Mechanical equipment needed two separate actions.
- Software inherited the distinction after the machinery disappeared.

### 2.4 Unix and Windows line endings

- Unix-like systems use a single newline because drivers historically supplied the other mechanical behavior.
- Windows uses carriage return plus line feed through its CP/M and DOS lineage.
- Modern colleagues can therefore exchange “plain” files whose line boundaries render differently.

### 2.5 Digit layout

- ASCII's digit codes share a predictable high-bit pattern.
- Ignoring the top four bits exposes the numeric value.
- That structure made conversion cheap in limited hardware.

### 2.6 Uppercase and lowercase layout

- Corresponding uppercase and lowercase Latin letters differ by one bit.
- Early systems could fold case by masking that bit.
- The convenience works because ASCII's designers optimized for their own alphabet.

### 2.7 Delete punches every hole

- Paper tape could not unpunch a mistaken character.
- The delete code is all ones, allowing every position in a bad character to be punched out.
- A seemingly arbitrary code records a physical correction technique.

## 3. ASCII stops at the border

### 3.1 Missing everyday symbols

- Seven-bit ASCII lacks the pound sign and most accented letters.
- It cannot represent the majority of the world's writing systems.
- “Enough for English computing” was never “enough for text.”

### 3.2 The eighth bit becomes national territory

- Eight-bit computers had 128 additional byte values.
- Vendors and countries assigned those values differently.
- A code page is the rule mapping the upper half to glyphs.
- Bytes without an accompanying code-page identity are ambiguous.

### 3.3 IBM code page 437

- The original IBM PC/DOS page contains accented Latin characters.
- Box-drawing characters support text user interfaces.
- Greek letters support mathematics and physics without representing the complete Greek language.
- Smiley faces and playing-card suits appear in the low control range during raw crashes.

### 3.4 WordStar and the stolen high bit

- Some applications assumed text remained seven-bit.
- WordStar reused the eighth bit to annotate words for spell-checking.
- Applying that assumption to Cyrillic text destroyed meaningful character distinctions.

### 3.5 KOI8 survives damage phonetically

- KOI8 arranged Cyrillic so removing the high bit produced roughly corresponding Latin sound-alikes.
- Corrupted Russian became ugly transliteration rather than total nonsense.
- The encoding anticipated unreliable seven-bit transport.

### 3.6 The Moscow Harry Potter address

- Beattie recounts a Harry Potter shipment whose Russian address was mangled through encoding.
- Postal workers could still infer the destination from the surviving phonetic Latin form.
- Human context repaired what incompatible systems had damaged.

### 3.7 Billy Joel's *Kohuept*

- Cyrillic lettering for “concert” was visually/transliteratively misread as *Kohuept*.
- The album title preserves a cross-script interpretation mistake.
- Similar keyboard-layout transformations can turn names such as Taylor Swift into Cyrillic-looking patterns.

## 4. Unicode's larger promise

### 4.1 One universal repertoire

- Unicode seeks a consistent number for every symbol in every human language.
- The same representation should work across devices and software.
- The standard and its assignments are freely available.
- A character's abstract number is its code point, not necessarily its stored bytes.

### 4.2 “What is a letter?” is not universal

- Unicode cannot avoid cultural definitions merely by using larger numbers.
- Orthographies disagree about whether sequences are individual letters and how they sort.
- Encoding therefore includes linguistic judgments.

### 4.3 Hungarian's 44-letter alphabet

- Hungarian treats digraphs such as `cs` as letters.
- `dzs` is a trigraph letter.
- `dz` has its own unusual treatment.
- W, X, and Y largely occur in loanwords such as “whiskey.”
- Counting characters or indexing “letters” is more complex than counting code points.

## 5. Collation is separate from encoding

### 5.1 Character number is not sort order

- Unicode assigns identity but cannot define one correct worldwide alphabetization.
- Applications need locale-aware collation.
- Databases often require a separate normalized sort key rather than sorting display strings directly.

### 5.2 Aarhus and Å

- Danish and Norwegian place Å at the end of the alphabet.
- Aarhus changed spelling to Århus in a 1948 reform and restored Aarhus in 2011.
- The preferred spelling involves history, identity, and politics.
- A Windows file list can expose those decisions through ordering.

### 5.3 Magnus Mörtensen at immigration

- His passport transliterated Ö as OE.
- An airline system reduced Ö to O.
- The resulting name mismatch nearly prevented entry to the United States.
- Two reasonable fallback rules created incompatible identities.

## 6. Bytes, code units, and endianness

### 6.1 UTF-16 code units

- Windows, Java, .NET, and JavaScript historically expose 16-bit character/code-unit models.
- Unicode soon exceeded what one 16-bit value can represent.
- A language “character” may therefore occupy multiple code units.

### 6.2 Little-endian and big-endian storage

- A 16-bit value can store its low or high byte first.
- Interpreting one order as the other changes every code point.
- ASCII-range text can appear to teleport into Chinese character blocks.
- A byte-order mark can identify the chosen convention.

### 6.3 Chinese in the event logs

- Beattie investigated event logs that intermittently appeared Chinese.
- A faulty network switch dropped one byte roughly every three minutes.
- Every subsequent byte pair became misaligned.
- The incident took 27 hours to diagnose.
- “Wrong language” was a transport fault, not Chinese input.

## 7. Graphemes and normalization

### 7.1 Combining characters

- Unicode can encode a base letter followed by accents or other combining marks.
- Many marks can attach to one base, producing “Zalgo” text above and below the line.
- Visible user-perceived characters can span several code points.

### 7.2 Equivalent strings can be unequal

- An accented letter may be one precomposed code point.
- The same visible glyph may be a base letter plus combining accent.
- Byte comparison reports inequality although readers see the same text.
- Search, identifiers, filenames, and security checks must account for equivalence.

### 7.3 Four normalization forms

- NFC composes canonical equivalents.
- NFD decomposes canonical equivalents.
- NFKC applies compatibility mapping and composition.
- NFKD applies compatibility mapping and decomposition.
- Unicode uses K in the compatibility abbreviations to distinguish it clearly.

## 8. UTF-8

### 8.1 ASCII-compatible first byte

- A leading zero identifies a one-byte ASCII character.
- Every valid seven-bit ASCII document is already valid UTF-8.
- Existing English-oriented tools gained a migration path rather than instant obsolescence.

### 8.2 Self-describing multibyte sequences

- Leading-one patterns identify sequence length.
- Continuation bytes have their own recognizable prefix.
- Decoders can detect boundaries and many corrupt sequences.
- Variable length efficiently represents common ASCII while reaching the full Unicode range.

### 8.3 Extensibility

- Beattie praises UTF-8 as a brilliant hack rather than “plain text.”
- Its structure accommodates new scripts and symbols.
- He jokes that it leaves room for alien alphabets.

## 9. Emoji as an evolving alphabet

### 9.1 From Japanese phones to Unicode

- Shigetaka Kurita created an influential early emoji set around 1999.
- Japanese mobile culture drove adoption.
- Apple's 2008 Japanese iPhone support helped expose emoji globally.
- Unicode then standardized emoji as interoperable characters.

### 9.2 Skin-tone modifiers

- A base human emoji can combine with a skin-tone code point.
- The displayed glyph is a sequence rather than one universal “character.”
- Rendering support determines whether users see the combination or its pieces.

### 9.3 Zero-width joiner sequences

- A zero-width joiner asks renderers to combine adjacent emoji concepts.
- Woman plus rocket can render as a woman astronaut.
- Families and professions expand through sequences without assigning every image a wholly independent model.

### 9.4 Flags are encoded indirectly

- Regional-indicator letters combine into country flags.
- Rendering platforms decide which sequences become flags.
- A flag is therefore a political presentation built over encoded letters.

### 9.5 Taiwan disappears by region

- An iPhone configured for China can suppress Taiwan's flag.
- The underlying character sequence and its display are subject to geopolitical policy.
- Unicode interoperability does not eliminate platform politics.

### 9.6 Windows and “gay pirates”

- Beattie notes Windows renders few non-country flags as colorful flags.
- Pride, skull-and-crossbones, and checkered flags produce the joke that gay pirates are winning.
- Platform support determines which standardized sequences communicate as intended.

## 10. Confusable scripts and Ukrainian plates

### 10.1 Shared-looking Cyrillic and Latin letters

- Some Cyrillic characters are visually identical to Latin letters while having different code points.
- Ukrainian license plates deliberately use combinations legible in both scripts for international travel.
- Visual equality does not imply encoded equality.

### 10.2 “Pike matchbox”

- The allowed shared-looking plate letters can be rearranged into the memorable phrase “pike matchbox.”
- Beattie uses the phrase as a mnemonic for the constrained set.
- The example joins practical regulation, language, and character confusability.

## 11. Conclusion

### 11.1 Text always has context

- Bytes need an encoding.
- Code points need segmentation, normalization, collation, fonts, and rendering policy.
- Human identity and language make fallback rules consequential.
- There is no context-free plain text.

### 11.2 Politics is part of software

- Alphabet reform affects filenames.
- Transliteration affects passports and border crossings.
- Regional policy affects visible flags.
- Technology implements decisions made by cultures and institutions.
- Beattie's final claim is that politics cannot simply be left out of software.

## 12. People & References Cited

### 12.1 People

- **Dylan Beattie** — speaker and creator of the Rockstar programming language.
- **Shigetaka Kurita** — designer of an influential early emoji set.
- **Magnus Mörtensen** — traveler in the passport/transliteration anecdote.
- **Billy Joel** — musician whose *Kohuept* title illustrates Cyrillic misreading.
- **Taylor Swift** — name used in a keyboard-layout/script example.

### 12.2 Standards, systems, and concepts

- **ASCII, CP437, KOI8, Unicode, UTF-16, and UTF-8** — principal encodings and repertoires.
- **WordStar, CP/M, DOS, Windows, Unix, Linux, macOS, Java, .NET, JavaScript, IBM PC, and iPhone** — systems in the encoding history.
- **CR, LF, code pages, code points, collation, endianness, combining marks, grapheme sequences, ZWJ, and normalization** — core technical concepts.
- **NFC, NFD, NFKC, and NFKD** — Unicode normalization forms.

---

*Video: https://www.youtube.com/watch?v=bZfLx1cVA1Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
