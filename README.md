# my-type-challenges

A collection of solutions for [type-challenges](https://github.com/type-challenges/type-challenges), aimed at improving TypeScript type-level programming skills.

## Overview

This repository is intended to deepen understanding of TypeScript's type system by solving problems from the type-challenges project. Each solution is managed in individual TypeScript files, serving as a record of learning progress.

## Project Structure

```
src/
├── questions/     # Challenge solution files
│   ├── easy/      # Easy-level challenges
│   ├── medium/    # Medium-level challenges
│   ├── hard/      # Hard-level challenges
│   └── extreme/   # Extreme-level challenges
└── utils/         # Utilities for testing
```

## How to Use

1. Open a challenge file and review the type definitions
2. Verify correctness with test cases
3. Run the TypeScript compiler to perform type checks

```bash
# Run type check for the entire project
npm run type-check

# Run type check for a specific file
npx tsc --noEmit src/questions/easy/Pick.ts
```

## Learning Objectives

- Master advanced TypeScript type features
- Understand type-level programming
- Improve the ability to implement complex type transformations and manipulations

## References

- [Official type-challenges repository](https://github.com/type-challenges/type-challenges)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

test
