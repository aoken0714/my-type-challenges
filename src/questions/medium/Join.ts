import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
type Join<
  T extends readonly unknown[],
  U extends string | number = ',',
> = T extends readonly [infer First, ...infer Rest]
  ? Rest extends readonly []
    ? `${First & (string | number)}`
    : `${First & (string | number)}${U}${Join<Rest, U>}`
  : '';

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
  Expect<Equal<Join<[], 'u'>, ''>>,
  Expect<Equal<Join<['1', '1', '1']>, '1,1,1'>>,
];
