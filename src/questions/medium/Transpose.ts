import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/25270-medium-transpose/README.md
type Transpose<M extends number[][]> = M extends []
  ? []
  : M extends [infer FirstRow, ...infer RestRows]
    ? FirstRow extends number[]
      ? RestRows extends number[][]
        ? FirstRow extends []
          ? []
          : {
              [K in keyof FirstRow]: [FirstRow[K], ...GetColumn<RestRows, K>];
            }
        : never
      : never
    : never;

type GetColumn<Rows extends number[][], K extends PropertyKey> = Rows extends [
  infer Row,
  ...infer Rest,
]
  ? Row extends number[]
    ? Rest extends number[][]
      ? K extends keyof Row
        ? [Row[K], ...GetColumn<Rest, K>]
        : GetColumn<Rest, K>
      : K extends keyof Row
        ? [Row[K]]
        : []
    : []
  : [];

type cases = [
  Expect<Equal<Transpose<[]>, []>>,
  Expect<Equal<Transpose<[[1]]>, [[1]]>>,
  Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
  Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
  Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
  Expect<
    Equal<
      Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>,
      [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
    >
  >,
];
