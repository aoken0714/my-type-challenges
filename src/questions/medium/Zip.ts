import type { Equal, Expect } from '@/utils/test-types';

type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer TFirst,
  ...infer TRest,
]
  ? U extends [infer UFirst, ...infer URest]
    ? [[TFirst, UFirst], ...Zip<TRest, URest>]
    : []
  : [];

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
];
