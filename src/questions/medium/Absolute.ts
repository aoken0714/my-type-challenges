import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
  ? N
  : `${T}`;

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
];
