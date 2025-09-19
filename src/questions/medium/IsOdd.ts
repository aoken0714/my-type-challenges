import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/30301-medium-isodd/README.md
type GetLastChar<S extends string> = S extends `${infer _}${infer Rest}`
  ? Rest extends ''
    ? S
    : GetLastChar<Rest>
  : S;

type IsOdd<T extends number> = number extends T
  ? false
  : `${T}` extends `${string}.${string}` | `${string}e${string}`
    ? false
    : GetLastChar<`${T}`> extends '1' | '3' | '5' | '7' | '9'
      ? true
      : false;

type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>,
  Expect<Equal<IsOdd<3>, true>>,
  Expect<Equal<IsOdd<number>, false>>,
];
