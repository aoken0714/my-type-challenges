import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09286-medium-firstuniquecharindex/README.md
type FirstUniqueCharIndex<T extends string> = Helper<T, T, []>;

type Helper<
  S extends string,
  Original extends string,
  Index extends unknown[],
> = S extends `${infer F}${infer R}`
  ? CountInString<F, Original> extends 1
    ? Index['length']
    : Helper<R, Original, [...Index, unknown]>
  : -1;

type CountInString<
  C extends string,
  S extends string,
  Acc extends unknown[] = [],
> = S extends `${infer F}${infer R}`
  ? F extends C
    ? CountInString<C, R, [...Acc, unknown]>
    : CountInString<C, R, Acc>
  : Acc['length'];

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
];
