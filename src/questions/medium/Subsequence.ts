import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.md
type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? Subsequence<R> | [F, ...Subsequence<R>]
  : [];

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >,
  Expect<
    Equal<
      Subsequence<[1, 2, 3, 4, 5]>,
      | []
      | [1]
      | [2]
      | [3]
      | [4]
      | [5]
      | [1, 2]
      | [1, 3]
      | [1, 4]
      | [1, 5]
      | [2, 3]
      | [2, 4]
      | [2, 5]
      | [3, 4]
      | [3, 5]
      | [4, 5]
      | [1, 2, 3]
      | [1, 2, 4]
      | [1, 2, 5]
      | [1, 3, 4]
      | [1, 3, 5]
      | [1, 4, 5]
      | [2, 3, 4]
      | [2, 3, 5]
      | [2, 4, 5]
      | [3, 4, 5]
      | [1, 2, 3, 4]
      | [1, 2, 3, 5]
      | [1, 2, 4, 5]
      | [1, 3, 4, 5]
      | [2, 3, 4, 5]
      | [1, 2, 3, 4, 5]
    >
  >,
  Expect<
    Equal<
      Subsequence<['a', 'b', 'c']>,
      | []
      | ['a']
      | ['b']
      | ['c']
      | ['a', 'b']
      | ['a', 'c']
      | ['b', 'c']
      | ['a', 'b', 'c']
    >
  >,
  Expect<Equal<Subsequence<['x', 'y']>, [] | ['x'] | ['y'] | ['x', 'y']>>,
];
