import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? { [K in F & string]: TupleToNestedObject<R, U> }
  : U;

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
];
