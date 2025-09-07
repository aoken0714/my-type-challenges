import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md
type Without<T extends readonly unknown[], U> = T extends readonly [
  infer First,
  ...infer Rest,
]
  ? First extends (U extends readonly unknown[] ? U[number] : U)
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : [];

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
];
