import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md
type FlattenDepth<
  T extends readonly unknown[],
  Depth extends number = 1,
  Counter extends unknown[] = [],
> = Counter['length'] extends Depth
  ? T
  : T extends readonly [infer First, ...infer Rest]
    ? First extends readonly unknown[]
      ? [
          ...FlattenDepth<First, Depth, [...Counter, unknown]>,
          ...FlattenDepth<Rest, Depth, Counter>,
        ]
      : [First, ...FlattenDepth<Rest, Depth, Counter>]
    : T;

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >,
];
