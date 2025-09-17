import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/27862-medium-cartesianproduct/README.md
type CartesianProduct<T, U> = T extends unknown
  ? U extends unknown
    ? [T, U]
    : never
  : never;

type cases = [
  Expect<
    Equal<
      CartesianProduct<1 | 2, 'a' | 'b'>,
      [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']
    >
  >,
  Expect<
    Equal<
      CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>,
      | [2, 'a']
      | [1, 'a']
      | [3, 'a']
      | [2, 'b']
      | [1, 'b']
      | [3, 'b']
      | [2, 'c']
      | [1, 'c']
      | [3, 'c']
    >
  >,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
  Expect<
    Equal<
      CartesianProduct<'a', Function | string>,
      ['a', Function] | ['a', string]
    >
  >,
];
