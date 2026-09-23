---
title: 'Ladybug: what we got wrong'
description: 'Notes on building a GUI bug localizer, and the gap between a metric improving and a tool being useful.'
pubDate: 2026-08-27
tags: [research, debugging, tooling]
---

Ladybug took a bug report and a screen recording and tried to point at the
component responsible. It worked, by the measure we chose. It was not
especially useful, and the distance between those two sentences is most of what
I learned.

Three things I'd do differently.

1. **We optimized top-1 accuracy because it was easy to plot.** The number went
   up and we felt good. But a developer handed a single confident wrong answer
   is worse off than one handed five candidates, because the wrong answer costs
   them the twenty minutes they spend trusting it. We should have measured time
   to correct fix, which is harder to collect and is the thing anyone actually
   cared about.

2. **We never watched someone use it cold.** Every demo was run by a person who
   had built it. The first time an outsider tried, they spent four minutes
   looking for a way to tell the tool which part of the recording mattered — a
   control we hadn't built, because we already knew where to look. That's not a
   UI gap. It's evidence that our mental model of the task was wrong.

3. **We treated "no confident answer" as failure.** So the model always
   answered. A tool that says *I don't know, here's the trace* is honest and
   cheap to ignore. A tool that guesses is expensive to ignore, because you
   can't tell the guesses from the hits until afterward.

## The part that generalizes

A metric is a proxy, and every proxy is a bet that the thing you can count
moves with the thing you want. That bet is worth re-examining out loud, on a
schedule, in front of someone who isn't invested in the answer.

We had the ingredients for that. What we didn't have was anyone whose job it
was to ask whether the number still meant anything — and when a number is
going up, nobody volunteers.
