---
title: "What is a harness?"
description: "The word shows up in climbing gear and in test infrastructure, and in both cases it means the thing that catches you when the interesting part goes wrong."
pubDate: 2026-09-12
tags: [tooling, climbing]
---

A climbing harness does nothing on a good day. You clip in, you climb, you top
out, you lower off, and the harness was irrelevant the whole time. It only
earns its cost during the half-second nobody planned for.

![A climber mid-route on overhanging limestone, rope running through their harness](../../assets/harness-climb.webp)

Climber on an overhanging limestone roof. [photo credit]

Test harnesses are the same shape. The code that sets up a fixture, captures
output, and tears the world back down is invisible when everything passes.

## Which is why people under-build them

The failure mode is predictable: the harness is written once, in a hurry, by
whoever needed the first test to run. It works for that test. Then it accretes
flags for the next twelve, and by the time it's load-bearing nobody wants to
touch it.

Worth budgeting for the bad day instead. The question to ask of a harness isn't
"does the suite pass" — it's "when something breaks at 2am, does this tell me
what broke."
