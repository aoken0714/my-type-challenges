import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.md
type Flatten<T extends readonly unknown[]> = T extends readonly [
  infer H,
  ...infer R,
]
  ? H extends readonly unknown[]
    ? [...Flatten<H>, ...Flatten<R>]
    : H extends never
      ? Flatten<R>
      : [H, ...Flatten<R>]
  : [];

type CountElementNumberToObject<T extends readonly unknown[]> = {
  [K in Flatten<T>[number] as K extends PropertyKey
    ? K
    : never]: Flatten<T> extends readonly unknown[]
    ? CountInArray<Flatten<T>, K>
    : never;
};

type CountInArray<
  Arr extends readonly unknown[],
  Val,
  Count extends readonly unknown[] = [],
> = Arr extends readonly [infer H, ...infer R]
  ? H extends Val
    ? CountInArray<R, Val, [...Count, unknown]>
    : CountInArray<R, Val, Count>
  : Count['length'];

type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1;
        2: 1;
        3: 1;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2;
        2: 2;
        3: 2;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3;
        2: 3;
        3: 2;
        4: 3;
        5: 1;
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<['1', '2', '0']>,
      {
        0: 1;
        1: 1;
        2: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<['a', 'b', ['c', ['d']]]>,
      {
        a: 1;
        b: 1;
        c: 1;
        d: 1;
      }
    >
  >,
];
