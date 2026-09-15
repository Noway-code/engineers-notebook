---
title: "Reading the linker map when nothing else talks"
description: "A binary that's mysteriously 400KB heavier than last week will not explain itself, but the map file will — if you can stand to read it."
pubDate: 2026-09-09
tags: [systems, c, debugging]
---

Nobody reads linker map files for fun. You read them when a binary grew and
you have no idea why, and every higher-level tool has already shrugged at you.

Pass `-Wl,-Map=out.map` and you get a full accounting: every section, every
symbol, the object file each one came from, and the address it landed at.

## The part that actually helps

Sort by size and look at the top twenty symbols. In my experience it's almost
never the code — it's a lookup table someone generated, a fat string literal
array, or an inlined function that got instantiated in eleven translation
units.

The map file is ugly and enormous and has no interest in being helpful, but it
is the ground truth for what ended up in your binary.
