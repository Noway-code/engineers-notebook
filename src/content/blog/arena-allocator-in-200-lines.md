---
title: "An arena allocator in 200 lines"
description: "Bump a pointer, free the whole thing at once, and delete most of your lifetime bugs along with your call to free()."
pubDate: 2026-09-04
cover: "../../assets/harness-climb.webp"
tags: [c, systems]
---

The pitch for arena allocation is that most allocations in a program share a
lifetime. Parse a request, allocate forty little things, respond, throw all
forty away. Tracking each one individually is work you invented for yourself.

An arena is a big block plus an offset. Allocating advances the offset.
Freeing resets it to zero.

## What it costs you

You give up per-object free, which means an arena is wrong for anything with
genuinely independent lifetimes — caches, long-lived graphs, objects handed
back to a caller who decides when to drop them.

But for request-scoped or frame-scoped work it removes an entire category of
bug. No double frees, no leaks, no use-after-free within the arena's lifetime,
because there is no free to get wrong.
