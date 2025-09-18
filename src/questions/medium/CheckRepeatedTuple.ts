import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/27958-medium-checkrepeatedtuple/README.md
type CheckRepeatedTuple<T extends unknown[]> = T extends readonly [
  infer First,
  ...infer Rest,
]
  ? CheckDuplicate<First, Rest> extends true
    ? true
    : CheckRepeatedTuple<Rest>
  : false;

type CheckDuplicate<Item, List extends unknown[]> = List extends readonly [
  infer Head,
  ...infer Tail,
]
  ? Equal<Item, Head> extends true
    ? true
    : CheckDuplicate<Item, Tail>
  : false;

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  Expect<
    Equal<
      CheckRepeatedTuple<
        [number, 1, string, '1', boolean, true, false, unknown, any]
      >,
      false
    >
  >,
  Expect<Equal<CheckRepeatedTuple<[never, any, never]>, true>>,
];
