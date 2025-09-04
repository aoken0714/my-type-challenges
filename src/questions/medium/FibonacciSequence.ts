import type { Equal, Expect } from '@/utils/test-types';

//　https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md
type Fibonacci<
  T extends number,
  CurrentIndex extends unknown[] = [unknown],
  Prev extends unknown[] = [],
  Current extends unknown[] = [unknown],
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, unknown], Current, [...Current, ...Prev]>;

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
];
