import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md
type Has<T, U> = T extends readonly [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Has<R, U>
  : false;

type Unique<
  T extends readonly unknown[],
  R extends readonly unknown[] = [],
> = T extends readonly [infer F, ...infer Rest]
  ? Has<R, F> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, F]>
  : R;

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >,
];
