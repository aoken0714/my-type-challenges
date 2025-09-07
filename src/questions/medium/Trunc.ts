import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md
type Trunc<T extends number | string> =
  `${T}` extends `${infer Integer}.${string}`
    ? Integer extends ''
      ? '0'
      : Integer extends '-'
        ? '-0'
        : Integer
    : `${T}`;

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<0.2>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'.3'>, '0'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-.3'>, '-0'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
];
