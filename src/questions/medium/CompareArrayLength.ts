import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/34007-medium-compare-array-length/README.md
type CompareArrayLength<
  T extends unknown[],
  U extends unknown[],
> = T['length'] extends U['length']
  ? 0
  : `${U['length']}` extends keyof T
    ? 1
    : -1;

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
];
