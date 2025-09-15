import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/21220-medium-permutations-of-tuple/README.md
type PermutationsOfTuple<T extends readonly unknown[]> = T extends readonly []
  ? []
  : T extends readonly [infer Only]
    ? [Only]
    : T extends readonly [infer First, ...infer Rest]
      ?
          | [First, ...PermutationsOfTuple<Rest>]
          | InsertFirst<First, PermutationsOfTuple<Rest>>
      : never;

type InsertFirst<Element, Perms> = Perms extends readonly [
  infer First,
  ...infer Rest,
]
  ? [Element, First, ...Rest] | [First, ...InsertFirst<Element, Rest>]
  : [Element];

type ExpectFalse<T extends false> = T;

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<
    Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>
  >,
  Expect<
    Equal<
      PermutationsOfTuple<[any, unknown, never]>,
      | [any, unknown, never]
      | [unknown, any, never]
      | [unknown, never, any]
      | [any, never, unknown]
      | [never, any, unknown]
      | [never, unknown, any]
    >
  >,
  Expect<
    Equal<
      PermutationsOfTuple<[1, number, unknown]>,
      | [1, number, unknown]
      | [1, unknown, number]
      | [number, 1, unknown]
      | [unknown, 1, number]
      | [number, unknown, 1]
      | [unknown, number, 1]
    >
  >,
  ExpectFalse<Equal<PermutationsOfTuple<[1, number, unknown]>, [unknown]>>,
];
