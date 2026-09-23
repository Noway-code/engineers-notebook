---
title: 'The borrow checker taught me C'
description: 'Writing Rust for a year changed how I write C, which is not the direction anyone advertises.'
pubDate: 2026-08-14
tags: [rust, c]
---

The pitch for Rust is that the compiler stops you from writing the bugs. That's
true, and it isn't the part that stuck.

What stuck was the interrogation. Every argument the borrow checker ever had
with me was about ownership: who is responsible for this memory, how long is
this reference valid, can two things touch it at the same time. Every one of
those questions applies just as hard in C. C simply won't ask them for you.

## Answering before the compiler can

After enough rejected code I started answering up front. Who owns this. When
does it die. Who else holds a pointer.

That turns into different C. Not safer by any mechanism — nothing is checked —
but written by someone who has already had the argument. Here's the version I
used to write:

```c
// Returns a buffer. Caller... does something? Check the callers.
char *render_row(Row *r);
```

And the version I write now:

```c
// Renders into `out` (cap bytes). Borrows `r` for the call only; does not
// retain it. Returns bytes written, or -1 if it would not fit.
int render_row(const Row *r, char *out, size_t cap);
```

The second one has the answers in it. The caller owns the memory, the callee
borrows the input and says so, and the lifetime question never comes up because
nothing outlives the call.

## The three habits

- Ownership belongs at the boundary, in the signature or in a comment directly
  above it — not in a design doc, and not in the reader's head.
- `const` on a parameter is a promise about aliasing, which is the only part of
  `&`-versus-`&mut` that C can express at all. Make it, and keep it.
- Constructor and destructor get written in the same sitting, next to each
  other, before the struct gets used anywhere.

None of this is enforced. A junior version of me would have called that
worthless — if the compiler can't check it, why bother.

But most of the memory bugs I used to ship weren't cases where I knew the
ownership rule and typo'd it. They were cases where *nobody had ever decided*
what the rule was. Deciding is free. Rust just made me do it a few hundred
times in a row until it was a habit.
