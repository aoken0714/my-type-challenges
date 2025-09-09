import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md
type ConstructTuple<
  L extends number,
  Result extends unknown[] = [],
> = Result['length'] extends L
  ? Result
  : ConstructTuple<L, [...Result, unknown]>;

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
];
