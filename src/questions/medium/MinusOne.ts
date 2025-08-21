import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md
type Reverse<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : '';
type Decrease<
  S extends string,
  Borrow extends boolean = true,
> = S extends `${infer Digit}${infer Rest}`
  ? Borrow extends true
    ? Digit extends '0'
      ? `9${Decrease<Rest, true>}`
      : Digit extends '1'
        ? `0${Rest}`
        : Digit extends '2'
          ? `1${Rest}`
          : Digit extends '3'
            ? `2${Rest}`
            : Digit extends '4'
              ? `3${Rest}`
              : Digit extends '5'
                ? `4${Rest}`
                : Digit extends '6'
                  ? `5${Rest}`
                  : Digit extends '7'
                    ? `6${Rest}`
                    : Digit extends '8'
                      ? `7${Rest}`
                      : `8${Rest}`
    : `${Digit}${Rest}`
  : '';
type RemoveLeadingZero<S extends string> = S extends `0${infer Rest}`
  ? Rest extends ''
    ? '0'
    : Rest
  : S;
type MinusOne<T extends number> = T extends 0
  ? never
  : `${T}` extends `-${string}`
    ? never
    : Reverse<Decrease<Reverse<`${T}`>>> extends infer Result
      ? Result extends string
        ? RemoveLeadingZero<Result> extends `${infer N extends number}`
          ? N
          : never
        : never
      : never;

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
];
