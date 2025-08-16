import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
type LengthOfString<
  S extends string,
  T extends readonly string[] = [],
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...T, First]>
  : T['length'];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];
