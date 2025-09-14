import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09896-medium-get-middle-element/README.md
type GetMiddleElement<T extends unknown[]> = T extends []
  ? []
  : T extends [infer First]
    ? [First]
    : T extends [infer First, infer Second]
      ? [First, Second]
      : T extends [unknown, ...infer Rest, unknown]
        ? GetMiddleElement<Rest>
        : never;

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<
    Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>
  >,
  Expect<
    Equal<
      GetMiddleElement<[() => string, () => number]>,
      [() => string, () => number]
    >
  >,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>,
];
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>;
