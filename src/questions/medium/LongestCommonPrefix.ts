import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/35045-medium-longest-common-prefix/README.md
type LongestCommonPrefix<
  T extends string[],
  P extends string = '',
> = T extends [`${P}${infer Next}${string}`, ...string[]]
  ? T extends `${P}${Next}${string}`[]
    ? LongestCommonPrefix<T, `${P}${Next}`>
    : P
  : P;

type cases = [
  Expect<Equal<LongestCommonPrefix<['flower', 'flow', 'flight']>, 'fl'>>,
  Expect<Equal<LongestCommonPrefix<['dog', 'racecar', 'race']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', 'a']>, 'a'>>,
  Expect<Equal<LongestCommonPrefix<['abc', 'abcd', 'abcde']>, 'abc'>>,
  Expect<Equal<LongestCommonPrefix<[' ', ' ', ' ']>, ' '>>,
  Expect<
    Equal<
      LongestCommonPrefix<['type-challenges', 'type-hero', 'typescript']>,
      'type'
    >
  >,
];
