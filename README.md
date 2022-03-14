# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @laweightsix/lotide`

**Require it:**

`const _ = require('@laweightsix/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: Function that takes an array and returns the first element.
- `tail(...)`: Function that takes an array and returns the last element.
- `middle(...)`: Function that takes an array and returns the middle element(s) depending on odd/even.
