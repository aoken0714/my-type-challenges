import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/27152-medium-triangular-number/README.md
type ToTuple<
  N extends number,
  Result extends readonly unknown[] = [],
> = Result['length'] extends N
  ? Result
  : ToTuple<N, readonly [...Result, unknown]>;

type Triangular<
  N extends number,
  Counter extends readonly unknown[] = [],
  Sum extends readonly unknown[] = [],
> = Counter['length'] extends N
  ? Sum['length']
  : Triangular<
      N,
      readonly [...Counter, unknown],
      readonly [...Sum, ...ToTuple<[...Counter, unknown]['length']>]
    >;

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
];
