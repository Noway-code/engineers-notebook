---
title: 'Profile first, and keep the receipts'
description: 'Every performance story I have ends the same way: the slow part was not where anyone thought, including me.'
pubDate: 2026-07-30
tags: [debugging, tooling, systems]
---

I have never once guessed a hot path correctly. Not once.

The optimization I was certain about turned out to be 2% of runtime. The actual
cost was a string format call in a logging statement, inside a loop, writing to
a log level that was switched off.

So: the number goes in the commit message. Before and after, on named input.

> A change that claims to be an optimization and doesn't say what it measured
> is just a change.

Writing the number down also protects you from the happier mistake — the
rewrite that really was faster, on your machine, with a warm cache, on input
nobody sees in production. Naming the input is what lets someone disagree with
you usefully.
