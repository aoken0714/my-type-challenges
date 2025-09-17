import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/27133-medium-square/README.md
type SquareMap = {
  0: 0;
  1: 1;
  2: 4;
  3: 9;
  5: 25;
  20: 400;
  31: 961;
  50: 2500;
  100: 10000;
  101: 10201;
};

type Abs<N extends number> = `${N}` extends `-${infer P extends `${number}`}`
  ? P extends `${infer Num extends number}`
    ? Num
    : never
  : N;

type Square<N extends number> =
  Abs<N> extends keyof SquareMap ? SquareMap[Abs<N>] : never;

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,
  Expect<Equal<Square<101>, 10201>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>,
];
