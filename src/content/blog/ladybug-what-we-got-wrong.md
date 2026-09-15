---
title: "Ladybug: what we got wrong"
description: "Notes on building a GUI bug localizer, and the gap between a metric improving and a tool being useful to the person holding the bug report."
pubDate: 2026-08-27
tags: [research, debugging, tooling]
---

Ladybug ranks the screens and widgets most likely responsible for a reported
GUI bug. The numbers went the right direction. The honest retrospective is
that we spent most of our effort on the part that was easiest to measure.

## Precision at rank 1 is not the job

Our evaluation asked whether the correct location appeared near the top of a
ranked list. A developer's actual question is "where do I start reading," and
a ranked list is a strange answer to that — it gives you ten starting points
with no account of why any of them is there.

The version I'd build now would rank fewer things and explain each one. A
single suggestion with a trace attached beats ten without, even if the ten
score better on the metric we chose to report.
