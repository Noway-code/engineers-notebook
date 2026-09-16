---
title: "The borrow checker taught me C"
description: "Writing Rust for a year changed how I write C, which is not the direction anyone advertises."
pubDate: 2026-08-14

cover: "../../assets/harness-climb.webp"
tags: [rust, c]
---

TThe borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.The borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.The borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.The borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.The borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.he borrow checker's arguments are about ownership: who is responsible for
this memory, how long is this reference valid, can two things touch it at
once. Every one of those questions applies just as hard in C. C simply won't
ask them for you.

## The habit that stuck

After enough rejected code I started answering the questions before writing
anything. Who owns this. When does it die. Who else has a pointer.

In C that turns into ownership documented at the boundary — a comment saying
the caller frees this, a constructor/destructor pair that's obviously paired, a
struct that owns its buffer and says so. Nothing checks it. But asking the
question at all catches most of what I used to ship.
