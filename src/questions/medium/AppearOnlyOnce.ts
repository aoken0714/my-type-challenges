import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su/README.md
type Count<T extends unknown[], U, Acc extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Equal<First, U> extends true
    ? Count<Rest, U, [...Acc, any]>
    : Count<Rest, U, Acc>
  : Acc['length'];

type FindEles<T extends unknown[], Original extends unknown[] = T> = T extends [
  infer First,
  ...infer Rest,
]
  ? Count<Original, First> extends 1
    ? [First, ...FindEles<Rest, Original>]
    : FindEles<Rest, Original>
  : [];

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<FindEles<[1, 2, number]>, [1, 2, number]>>,
  Expect<Equal<FindEles<[1, 2, number, number]>, [1, 2]>>,
];
