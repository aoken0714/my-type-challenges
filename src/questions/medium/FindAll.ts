import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/21104-medium-findall/README.md
type FindAll<T extends string, P extends string> = P extends ''
  ? []
  : FindAllHelper<T, P>;
type FindAllHelper<
  T extends string,
  P extends string,
  Index extends unknown[] = [],
  Result extends number[] = [],
> = T extends `${string}${infer Rest}`
  ? T extends `${P}${string}`
    ? FindAllHelper<Rest, P, [...Index, unknown], [...Result, Index['length']]>
    : FindAllHelper<Rest, P, [...Index, unknown], Result>
  : Result;

type cases = [
  Expect<
    Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>
  >,
  Expect<
    Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>
  >,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
];
