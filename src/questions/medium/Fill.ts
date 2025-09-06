import { Expect, Equal } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.md
type Fill<
  T extends readonly unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  I extends unknown[] = [],
  Started extends boolean = false,
> = I['length'] extends T['length']
  ? I
  : Start extends End
    ? Fill<T, N, Start, End, [...I, T[I['length']]]>
    : I['length'] extends Start
      ? Fill<T, N, Start, End, [...I, N], true>
      : I['length'] extends End
        ? Fill<T, N, Start, End, [...I, T[I['length']]]>
        : Started extends true
          ? Fill<T, N, Start, End, [...I, N], true>
          : Fill<T, N, Start, End, [...I, T[I['length']]]>;

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
];
