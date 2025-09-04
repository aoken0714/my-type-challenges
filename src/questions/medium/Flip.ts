import type { Equal, Expect, NotEqual } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
type Flip<T> = {
  [K in keyof T as T[K] extends string | number | boolean
    ? `${T[K]}`
    : never]: K;
};

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>
  >,
];
