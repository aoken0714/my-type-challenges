import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
type Space = ' ' | '\n' | '\t';
type TrimLeft<T extends string> = T extends `${Space}${infer R}`
  ? TrimLeft<R>
  : T;

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
];
