---
title: "Profile first, and keep the receipts"
description: "Every performance story I have ends the same way: the slow part was not where anyone thought, including me."
pubDate: 2026-07-30
tags: [debugging, tooling, systems]
---

I have never once guessed a hot path correctly. Not once. The optimization I
was certain about turned out to be 2% of runtime, and the actual cost was a
string format call in a logging statement inside a loop.

## Write down the number

Before and after, in the commit message. A change that claims to be an
optimization and doesn't say what it measured is just a change.

This also protects you from the opposite mistake — the rewrite that genuinely
made things faster on your machine, with your cache warm, on input that isn't
representative. The number forces you to say which input, which makes it
possible for someone to disagree with you productively.
