---
title: 'First year on a team that predates me by a decade'
description: 'What I actually learned joining a codebase with fifteen years of history and load-bearing decisions nobody remembers making.'
pubDate: 2026-05-20
tags: [career]
---

The codebase I joined is older than my career. Parts of it were written by
people who have since retired. There is a module everyone routes around, a
config flag whose name is a person's initials, and a comment that says *do not
reorder these two lines* with no explanation and a date from 2013.

I spent my first month assuming all of that was mess. Most of it wasn't.

## Strange code is usually a scar

The rule I'd give my year-ago self: assume every piece of weirdness is a
memorial to an outage until proven otherwise.

That comment about reordering two lines was real. Swapping them reintroduces a
race that took someone a week to find, back when the upstream service had
different timeout behavior. The flag with someone's initials was a kill switch
added during an incident, at 3am, by the person whose initials those are. Both
look like sloppiness. Both are load-bearing.

The tell is that scar tissue is *specific*. Genuine mess is vague and
repetitive — four slightly different date parsers, the same helper copied into
three packages. Scars are oddly precise about one narrow thing, and that
precision is the evidence.

## What actually built context

Ranked by how much they helped, over a year:

- **Reading incident write-ups, oldest first.** Two afternoons bought me more
  context than two months of reading source. The code says what; the postmortems
  say why, and they name the constraints that are still true.
- **Fixing small bugs in unfamiliar areas.** A two-line fix forces you through
  build, test, review, and deploy for that component. Do it in six areas and
  you've mapped the system by touching it.
- **Asking "what would break if I deleted this?"** rather than "what does this
  do?" The second question gets a description. The first gets a story, and the
  story is the part that isn't written down.
- **Writing down what confused me in week one.** By month three it stopped being
  visible to me. That file became onboarding notes for the next person, which is
  the only window where you can write them honestly.

## The thing nobody tells you

Being new is an asset with a short shelf life, and it's not the asset people
say it is. It's not "fresh perspective" — I had no perspective worth anything
for about eight months.

It's that you're the only person who can still *see* what's unexplained. A
question that sounds naive in week two is a question nobody can ask in year
three, because by then you've absorbed the answer without ever hearing it.

So I kept a list. Not of complaints — of things I'd accepted without an
explanation. Most of them turned out to have good ones. Four didn't, and those
four became the only genuinely useful things I shipped that year.
