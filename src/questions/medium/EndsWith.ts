import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>,
];
