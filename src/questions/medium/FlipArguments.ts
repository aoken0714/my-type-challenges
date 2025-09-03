import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md

type ReverseArray<T extends readonly unknown[]> = T extends readonly [
  ...infer Rest,
  infer Last,
]
  ? [Last, ...ReverseArray<Rest>]
  : [];
type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Args
) => infer Return
  ? Args extends []
    ? T
    : (...args: ReverseArray<Args>) => Return
  : never;

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >,
];

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
];
