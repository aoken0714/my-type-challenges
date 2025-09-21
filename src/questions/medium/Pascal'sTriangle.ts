import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/30958-medium-pascals-triangle/README.md
// Create tuple of specified length
type MakeTuple<
  N extends number,
  Acc extends unknown[] = [],
> = Acc['length'] extends N ? Acc : MakeTuple<N, [...Acc, unknown]>;

// Add two numbers using tuple length
type Add<A extends number, B extends number> = [
  ...MakeTuple<A>,
  ...MakeTuple<B>,
]['length'];

// Generate next row in Pascal's triangle
type GenerateNextRow<
  Row extends number[],
  Result extends number[] = [1],
> = Row extends [infer A, infer B, ...infer Rest]
  ? A extends number
    ? B extends number
      ? Rest extends number[]
        ? Add<A, B> extends number
          ? GenerateNextRow<[B, ...Rest], [...Result, Add<A, B>]>
          : never
        : Add<A, B> extends number
          ? [...Result, Add<A, B>, 1]
          : never
      : never
    : never
  : Row extends [number]
    ? [...Result, 1]
    : [...Result, 1];

// Generate Pascal's triangle
type Pascal<
  N extends number,
  Counter extends unknown[] = [],
  Result extends number[][] = [],
> = Counter['length'] extends N
  ? Result
  : Counter['length'] extends 0
    ? Pascal<N, [unknown], [[1]]>
    : Result extends [...unknown[], infer LastRow]
      ? LastRow extends number[]
        ? Pascal<
            N,
            [...Counter, unknown],
            [...Result, GenerateNextRow<LastRow>]
          >
        : never
      : never;

type cases = [
  Expect<Equal<Pascal<1>, [[1]]>>,
  Expect<Equal<Pascal<3>, [[1], [1, 1], [1, 2, 1]]>>,
  Expect<
    Equal<Pascal<5>, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]>
  >,
  Expect<
    Equal<
      Pascal<7>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >,
];
