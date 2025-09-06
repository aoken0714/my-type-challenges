import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md
type Chunk<
  T extends readonly unknown[],
  N extends number,
  C extends unknown[] = [],
  R extends unknown[][] = [],
> = T extends readonly [infer F, ...infer Rest]
  ? C['length'] extends N
    ? Chunk<T, N, [], [...R, C]>
    : Chunk<Rest, N, [...C, F], R>
  : C extends []
    ? R
    : [...R, C];

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];
