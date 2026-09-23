---
title: 'Reading the linker map when nothing else talks'
description: "A binary that's mysteriously 400KB heavier than last week will not explain itself, but the map file will — if you can stand to read it."
pubDate: 2026-09-09
tags: [systems, c, debugging]
---

Nobody reads linker map files for fun. You read one when a binary grew, you
have no idea why, and every higher-level tool has already shrugged at you.

This happened to me on a firmware image with a hard ceiling. One merge, and we
were 47KB over a limit we'd been comfortably under for a year. The diff was
eleven lines of ordinary C. Nothing in it allocated anything.

## Ask the linker for the receipt

Pass the flag and you get a full accounting — every section, every symbol, the
object file it came from, and the address it landed at:

```sh
gcc -Wl,-Map=out.map -o firmware $(OBJS)
```

On Apple's toolchain it's `-Wl,-map,out.map`. Either way you now own a file
that is somewhere between eight thousand and two million lines long, has no
interest in being helpful, and contains the answer.

### What's actually in there

The map has four regions worth knowing, and you can ignore the rest:

1. **Archive member inclusion.** Which objects got pulled out of which `.a`,
   and — crucially — _which symbol pulled them in_. This is where you discover
   that one call to `snprintf` dragged in the whole floating-point formatter.
2. **Discarded input sections.** Everything `--gc-sections` threw away. Reading
   this backwards tells you what survived, and sometimes why.
3. **The memory map proper.** Section by section, address by address, with the
   contributing object file on each line. The bulk of the file.
4. **Cross-reference table.** Only if you asked for it with `-Wl,--cref`. Worth
   asking for.

## The part that actually helps

Sort by size and read the top twenty symbols. That's the whole technique.

```sh
nm --print-size --size-sort --radix=d firmware | tail -20
```

In my experience it is almost never the code. It's a lookup table someone
generated, a fat string-literal array, a `const` struct that lost its `const`
and moved to `.data`, or one inlined function instantiated in eleven
translation units.

In our case it was a logging macro. Someone had added `__FILE__` to it. Every
call site now carried the full build path as a string literal, and there were
roughly nine hundred call sites.

> The linker is not hiding anything from you. It wrote down exactly what it
> did, in order, at the time it did it. It just didn't bother to make the
> important parts stand out.

## Make the next one cheaper

Once you've found it, leave the tooling behind you so the next person doesn't
start from scratch:

- Compile with `-ffunction-sections -fdata-sections` and link with
  `-Wl,--gc-sections`. Unused functions stop paying rent.
- Add `-Wl,--print-gc-sections` temporarily when you want to see what that
  actually removed. It's more than you'd guess, and occasionally something you
  needed.
- Check in a size budget. One CI step that runs `size` and fails the build over
  a threshold turns a three-hour archaeology session into a red X on a PR.
- If you do this often, get [bloaty](https://github.com/google/bloaty). It
  diffs two binaries and attributes the delta to symbols and compile units,
  which is the question you actually had.

The map file remains ugly and enormous. But it is the ground truth for what
ended up in your binary, and on the day nothing else will tell you, it will.
