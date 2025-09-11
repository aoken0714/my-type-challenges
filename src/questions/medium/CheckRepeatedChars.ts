import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09142-medium-checkrepeatedchars/README.md
type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer R}`
  ? F extends ''
    ? false
    : R extends `${string}${F}${string}`
      ? true
      : CheckRepeatedChars<R>
  : false;

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>,
];
