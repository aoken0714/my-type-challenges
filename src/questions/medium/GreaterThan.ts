import type { Equal, Expect } from '@/utils/test-types';

type StringLength<
  S extends string,
  C extends unknown[] = [],
> = S extends `${string}${infer R}`
  ? StringLength<R, [...C, unknown]>
  : C['length'];

type CompareDigits<
  A extends string,
  B extends string,
> = '0123456789' extends `${string}${A}${string}${B}${string}`
  ? false
  : '0123456789' extends `${string}${B}${string}${A}${string}`
    ? true
    : false;

type CompareStrings<
  A extends string,
  B extends string,
> = A extends `${infer AF}${infer AR}`
  ? B extends `${infer BF}${infer BR}`
    ? AF extends BF
      ? CompareStrings<AR, BR>
      : CompareDigits<AF, BF>
    : true
  : false;

type GreaterThan<T extends number, U extends number> = `${T}` extends `${U}`
  ? false
  : StringLength<`${T}`> extends StringLength<`${U}`>
    ? CompareStrings<`${T}`, `${U}`>
    : CompareDigits<`${StringLength<`${T}`>}`, `${StringLength<`${U}`>}`>;

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
];
