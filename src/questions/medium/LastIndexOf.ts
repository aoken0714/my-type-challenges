import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md
type LastIndexOf<
  T extends readonly unknown[],
  U,
  Index extends unknown[] = [],
  LastFound extends number = -1,
> = T extends readonly [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? LastIndexOf<Rest, U, [...Index, unknown], Index['length']>
    : LastIndexOf<Rest, U, [...Index, unknown], LastFound>
  : LastFound;

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
];
