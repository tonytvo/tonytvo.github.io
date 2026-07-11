---
title: "ESSENTIALS - There's No Such Thing As Plain Text - Dylan Beattie | Craft 2025"
date: "2026-06-04T00:00:00.000Z"
description: "Dylan Beattie's tour through ASCII, code pages, Unicode, endianness, collation and emoji — showing why 'plain text' is a myth and why politics and culture are baked into text encoding."
type: "reference"
tags: ["softwaredevelopment"]
---

# ESSENTIALS - There's No Such Thing As Plain Text - Dylan Beattie (Talk Outline)

> Dylan Beattie (creator of the Rockstar language) on why "just send me a plain text file" is a myth — a whirlwind of ASCII history, code pages, Unicode, endianness, collation, and emoji, collected from years of touring.

---

## 1. ASCII Was Designed for Teleprinters

- "Plain text" usually means 7-bit ASCII that opens the same in Notepad. ASCII was cleverly designed for **mechanical teleprinters** (a computer = "a typewriter with a memory"): control codes (null, Ctrl-C = end-of-text/stop, bell), and **carriage return / line feed** for physical carriages. This left the CR/LF split: Unix/Linux/Mac (via device drivers) use just newline; Windows (from CP/M lineage) needs CR+LF — so co-workers still can't read each other's "plain text." Digits = ignore the top 4 bits; upper/lowercase differ by one bit (cheap case-insensitive sorting); delete = all holes punched (1111111).

## 2. Code Pages: When ASCII Was Almost Enough

- 127 characters didn't fit the world (no £, no accents). Countries grabbed the unused **8th bit** → **code pages** (rules for the top half). **CP437** (IBM PC/DOS) added accents, box-drawing, half the Greek alphabet (for maths/physics), and smiley/playing-card glyphs (visible in a hard crash). Apps assuming 7-bit broke Cyrillic (WordStar used the 8th bit for spell-check), so **KOI8** encoded Cyrillic by *sound-alike* so it survived bit-stripping. Fun consequences: a Harry Potter book delivered to Moscow via a mangled-but-Russian-postal-readable address; Billy Joel's *Kohuept* (a Cyrillic → Latin transcription error) and "Taylor Swift" ↔ Cyrillic keyboard patterns.

## 3. Unicode: One Encoding for All

- Mission: one consistent representation for every symbol in every human language, on every device, **free**. Each *letter* gets a code point — but "what's a letter?" is cultural (Hungarian's 44-letter alphabet: digraphs like `cs`, the trigraph `dzs`, `dz`'s odd code point, W/X/Y only in loanwords like whiskey). ASCII's inventors "grew up with" a different, simpler system, which is why encoding surprises everyone who travels or integrates across regions.

## 4. Collation, Endianness & Normalization

- **Collation:** what "alphabetical order" means differs — Danish/Norwegian sort **Aarhus/Å at the *end*** (and Aarhus's 1948→2011→back spelling reform is pure politics baked into Windows file ordering); you need a separate **sort column**. Magnus **Mörtensen**'s passport (Ö→OE) vs. airline ticket (Ö→O) nearly stopped him at US immigration. **Politics creates the problems technology tries to solve.**
- **Endianness:** internally Windows/Java/.NET/JS store 16-bit chars (UTF-16 LE/BE) — swap the byte order and ASCII "teleports" into the Chinese block. His most memorable incident: "Chinese in the event logs" was a **faulty network switch dropping one byte every 3 minutes**, shunting everything sideways (27 hours to diagnose). **Combining characters** (Zalgo text) and **normalization forms** (NFC/NFD/NFKC/NFKD — "compatible" spelled with K) mean the same-looking string can be un-equal but equivalent.

## 5. UTF-8, Emoji & Politics

- **UTF-8** (a brilliant hack): a leading 0-bit = plain 7-bit ASCII (all old docs still valid); leading-1 patterns signal multi-byte sequences — infinitely extensible (aliens, new alphabets). **Emoji** (Shigetaka Kurita, ~1999 → iPhone Japan 2008) became a Unicode "alphabet" using **combining characters / ZWJ** (skin tones, "woman + rocket = astronaut"). **Flags** are hacks (Taiwan's flag vanishes when an iPhone's region is set to China; Windows renders only pride, skull-and-crossbones, and checkered flags — "gay pirates are winning"). Ukrainian license plates look "English" because they use the letters common to both Cyrillic and Latin — which unscramble to **"pike matchbox."** There is no such thing as plain text — and "you can't leave politics out of software."

---

*Video: https://www.youtube.com/watch?v=bZfLx1cVA1Y — Transcript via yt-transcript.sh; outline generated from the transcript.*
